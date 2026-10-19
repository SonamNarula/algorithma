import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { ProblemStatus } from '../types/curriculum';
import { UserProfile, DayReflection, ProblemAttempt, FocusSession } from '../types/user';
import { RevisionItem, RevisionOutcome } from '../types/revision';
import { MistakeEntry } from '../types/mistake';

interface AlgorithmaDB extends DBSchema {
  profile: {
    key: string;
    value: UserProfile;
  };
  problemStatuses: {
    key: string;
    value: { problemId: string; status: ProblemStatus; updatedAt: string };
  };
  attempts: {
    key: string;
    value: ProblemAttempt;
    indexes: { 'by-problem': string; 'by-date': string };
  };
  reflections: {
    key: number;
    value: DayReflection;
  };
  completedDays: {
    key: number;
    value: number;
  };
  revisionItems: {
    key: string;
    value: RevisionItem;
    indexes: { 'by-due-date': string; 'by-problem': string };
  };
  mistakes: {
    key: string;
    value: MistakeEntry;
    indexes: { 'by-category': string; 'by-problem': string };
  };
  focusSessions: {
    key: string;
    value: FocusSession;
  };
}

const DB_NAME = 'algorithma_db';
const DB_VERSION = 1;

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Sonam Narula',
  primaryLanguage: 'C++',
  secondaryLanguage: 'Python',
  roadmapStartDate: new Date().toISOString().split('T')[0],
  dailyTargetMinutes: 120,
  theme: 'dark',
  notesStyle: 'handwritten-primary',
};

class StorageService {
  private dbPromise: Promise<IDBPDatabase<AlgorithmaDB>> | null = null;
  private isIndexedDBAvailable: boolean;

  constructor() {
    this.isIndexedDBAvailable = typeof window !== 'undefined' && 'indexedDB' in window;
    if (this.isIndexedDBAvailable) {
      this.initDB();
    }
  }

  private initDB() {
    if (!this.dbPromise && this.isIndexedDBAvailable) {
      this.dbPromise = openDB<AlgorithmaDB>(DB_NAME, DB_VERSION, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('profile')) {
            db.createObjectStore('profile');
          }
          if (!db.objectStoreNames.contains('problemStatuses')) {
            db.createObjectStore('problemStatuses', { keyPath: 'problemId' });
          }
          if (!db.objectStoreNames.contains('attempts')) {
            const store = db.createObjectStore('attempts', { keyPath: 'id' });
            store.createIndex('by-problem', 'problemId');
            store.createIndex('by-date', 'date');
          }
          if (!db.objectStoreNames.contains('reflections')) {
            db.createObjectStore('reflections', { keyPath: 'dayNumber' });
          }
          if (!db.objectStoreNames.contains('completedDays')) {
            db.createObjectStore('completedDays');
          }
          if (!db.objectStoreNames.contains('revisionItems')) {
            const store = db.createObjectStore('revisionItems', { keyPath: 'id' });
            store.createIndex('by-due-date', 'nextDueDate');
            store.createIndex('by-problem', 'problemId');
          }
          if (!db.objectStoreNames.contains('mistakes')) {
            const store = db.createObjectStore('mistakes', { keyPath: 'id' });
            store.createIndex('by-category', 'category');
            store.createIndex('by-problem', 'problemId');
          }
          if (!db.objectStoreNames.contains('focusSessions')) {
            db.createObjectStore('focusSessions', { keyPath: 'id' });
          }
        },
      });
    }
  }

  // --- Profile ---
  async getProfile(): Promise<UserProfile> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        const profile = await db.get('profile', 'current');
        return profile || DEFAULT_PROFILE;
      } catch (e) {
        console.warn('IDB fallback to localStorage for profile', e);
      }
    }
    const local = localStorage.getItem('alg_profile');
    return local ? JSON.parse(local) : DEFAULT_PROFILE;
  }

  async saveProfile(profile: UserProfile): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.put('profile', profile, 'current');
      } catch (e) {
        console.warn('IDB save profile error', e);
      }
    }
    localStorage.setItem('alg_profile', JSON.stringify(profile));
  }

  // --- Problem Statuses ---
  async getProblemStatuses(): Promise<Record<string, ProblemStatus>> {
    const result: Record<string, ProblemStatus> = {};
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        const items = await db.getAll('problemStatuses');
        items.forEach((item) => {
          result[item.problemId] = item.status;
        });
        return result;
      } catch (e) {
        console.warn('IDB fallback for problem statuses', e);
      }
    }
    const local = localStorage.getItem('alg_problem_statuses');
    return local ? JSON.parse(local) : {};
  }

  async setProblemStatus(problemId: string, status: ProblemStatus): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.put('problemStatuses', {
          problemId,
          status,
          updatedAt: new Date().toISOString(),
        });
      } catch (e) {
        console.warn('IDB write status error', e);
      }
    }
    const local = localStorage.getItem('alg_problem_statuses');
    const map = local ? JSON.parse(local) : {};
    map[problemId] = status;
    localStorage.setItem('alg_problem_statuses', JSON.stringify(map));
  }

  // --- Attempts ---
  async getAttempts(): Promise<ProblemAttempt[]> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        return await db.getAll('attempts');
      } catch (e) {
        console.warn('IDB fallback for attempts', e);
      }
    }
    const local = localStorage.getItem('alg_attempts');
    return local ? JSON.parse(local) : [];
  }

  async addAttempt(attempt: ProblemAttempt): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.put('attempts', attempt);
      } catch (e) {
        console.warn('IDB add attempt error', e);
      }
    }
    const attempts = await this.getAttempts();
    attempts.push(attempt);
    localStorage.setItem('alg_attempts', JSON.stringify(attempts));
  }

  // --- Reflections ---
  async getReflections(): Promise<Record<number, DayReflection>> {
    const result: Record<number, DayReflection> = {};
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        const items = await db.getAll('reflections');
        items.forEach((r) => {
          result[r.dayNumber] = r;
        });
        return result;
      } catch (e) {
        console.warn('IDB fallback for reflections', e);
      }
    }
    const local = localStorage.getItem('alg_reflections');
    return local ? JSON.parse(local) : {};
  }

  async saveReflection(reflection: DayReflection): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.put('reflections', reflection);
      } catch (e) {
        console.warn('IDB save reflection error', e);
      }
    }
    const reflections = await this.getReflections();
    reflections[reflection.dayNumber] = reflection;
    localStorage.setItem('alg_reflections', JSON.stringify(reflections));
  }

  // --- Completed Days ---
  async getCompletedDays(): Promise<number[]> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        return await db.getAll('completedDays');
      } catch (e) {
        console.warn('IDB fallback for completed days', e);
      }
    }
    const local = localStorage.getItem('alg_completed_days');
    return local ? JSON.parse(local) : [];
  }

  async toggleDayCompleted(dayNumber: number): Promise<boolean> {
    const completed = await this.getCompletedDays();
    const isCompleted = completed.includes(dayNumber);
    let updated: number[];
    if (isCompleted) {
      updated = completed.filter((d) => d !== dayNumber);
      if (this.isIndexedDBAvailable && this.dbPromise) {
        const db = await this.dbPromise;
        await db.delete('completedDays', dayNumber);
      }
    } else {
      updated = [...completed, dayNumber];
      if (this.isIndexedDBAvailable && this.dbPromise) {
        const db = await this.dbPromise;
        await db.put('completedDays', dayNumber, dayNumber);
      }
    }
    localStorage.setItem('alg_completed_days', JSON.stringify(updated));
    return !isCompleted;
  }

  // --- Revision Queue ---
  async getRevisionItems(): Promise<RevisionItem[]> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        return await db.getAll('revisionItems');
      } catch (e) {
        console.warn('IDB fallback for revision items', e);
      }
    }
    const local = localStorage.getItem('alg_revisions');
    return local ? JSON.parse(local) : [];
  }

  async saveRevisionItem(item: RevisionItem): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.put('revisionItems', item);
      } catch (e) {
        console.warn('IDB save revision item error', e);
      }
    }
    const items = await this.getRevisionItems();
    const idx = items.findIndex((i) => i.id === item.id);
    if (idx >= 0) items[idx] = item;
    else items.push(item);
    localStorage.setItem('alg_revisions', JSON.stringify(items));
  }

  async deleteRevisionItem(id: string): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.delete('revisionItems', id);
      } catch (e) {
        console.warn('IDB delete revision item error', e);
      }
    }
    const items = (await this.getRevisionItems()).filter((i) => i.id !== id);
    localStorage.setItem('alg_revisions', JSON.stringify(items));
  }

  // --- Mistakes ---
  async getMistakes(): Promise<MistakeEntry[]> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        return await db.getAll('mistakes');
      } catch (e) {
        console.warn('IDB fallback for mistakes', e);
      }
    }
    const local = localStorage.getItem('alg_mistakes');
    return local ? JSON.parse(local) : [];
  }

  async saveMistake(mistake: MistakeEntry): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.put('mistakes', mistake);
      } catch (e) {
        console.warn('IDB save mistake error', e);
      }
    }
    const mistakes = await this.getMistakes();
    const idx = mistakes.findIndex((m) => m.id === mistake.id);
    if (idx >= 0) mistakes[idx] = mistake;
    else mistakes.unshift(mistake);
    localStorage.setItem('alg_mistakes', JSON.stringify(mistakes));
  }

  async deleteMistake(id: string): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      try {
        const db = await this.dbPromise;
        await db.delete('mistakes', id);
      } catch (e) {
        console.warn('IDB delete mistake error', e);
      }
    }
    const mistakes = (await this.getMistakes()).filter((m) => m.id !== id);
    localStorage.setItem('alg_mistakes', JSON.stringify(mistakes));
  }

  // --- Export & Import ---
  async exportAllData(): Promise<string> {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      profile: await this.getProfile(),
      problemStatuses: await this.getProblemStatuses(),
      attempts: await this.getAttempts(),
      reflections: await this.getReflections(),
      completedDays: await this.getCompletedDays(),
      revisions: await this.getRevisionItems(),
      mistakes: await this.getMistakes(),
    };
    return JSON.stringify(data, null, 2);
  }

  async importAllData(jsonStr: string): Promise<boolean> {
    try {
      const data = JSON.parse(jsonStr);
      if (!data || typeof data !== 'object') throw new Error('Invalid JSON format');

      if (data.profile) await this.saveProfile(data.profile);
      if (data.problemStatuses) {
        for (const [id, st] of Object.entries(data.problemStatuses)) {
          await this.setProblemStatus(id, st as ProblemStatus);
        }
      }
      if (Array.isArray(data.attempts)) {
        for (const a of data.attempts) await this.addAttempt(a);
      }
      if (data.reflections) {
        for (const r of Object.values(data.reflections)) {
          await this.saveReflection(r as DayReflection);
        }
      }
      if (Array.isArray(data.revisions)) {
        for (const rev of data.revisions) await this.saveRevisionItem(rev);
      }
      if (Array.isArray(data.mistakes)) {
        for (const m of data.mistakes) await this.saveMistake(m);
      }
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  }

  async resetAllProgress(): Promise<void> {
    if (this.isIndexedDBAvailable && this.dbPromise) {
      const db = await this.dbPromise;
      await db.clear('problemStatuses');
      await db.clear('attempts');
      await db.clear('reflections');
      await db.clear('completedDays');
      await db.clear('revisionItems');
      await db.clear('mistakes');
      await db.clear('focusSessions');
    }
    localStorage.removeItem('alg_problem_statuses');
    localStorage.removeItem('alg_attempts');
    localStorage.removeItem('alg_reflections');
    localStorage.removeItem('alg_completed_days');
    localStorage.removeItem('alg_revisions');
    localStorage.removeItem('alg_mistakes');
  }
}

export const storage = new StorageService();
