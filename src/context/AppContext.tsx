import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { ProblemStatus } from '../types/curriculum';
import { UserProfile, DayReflection, ProblemAttempt, FocusSession } from '../types/user';
import { RevisionItem, RevisionOutcome, RevisionReason } from '../types/revision';
import { MistakeEntry, MistakeCategory } from '../types/mistake';
import { storage, DEFAULT_PROFILE } from '../services/storage';
import { PROBLEMS_BY_ID } from '../data/problems';
import { calculateAnalytics, AnalyticsSummary } from '../services/analytics';
import confetti from 'canvas-confetti';

interface FocusTimerState {
  isActive: boolean;
  isPaused: boolean;
  secondsRemaining: number;
  initialDuration: number;
  linkedProblemId?: string;
  linkedDayNumber?: number;
}

interface AppContextType {
  profile: UserProfile;
  problemStatuses: Record<string, ProblemStatus>;
  attempts: ProblemAttempt[];
  reflections: Record<number, DayReflection>;
  completedDays: number[];
  revisionQueue: RevisionItem[];
  mistakes: MistakeEntry[];
  analytics: AnalyticsSummary;
  
  // Timer
  timer: FocusTimerState;
  startTimer: (durationMinutes: number, problemId?: string, dayNumber?: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  resetTimer: () => void;

  // Search Modal
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Actions
  setProblemStatus: (
    problemId: string,
    status: ProblemStatus,
    dayNumber?: number,
    options?: { usedHint?: boolean; viewedSolution?: boolean; notes?: string; timeSpent?: number }
  ) => Promise<void>;
  toggleDayCompletion: (dayNumber: number) => Promise<boolean>;
  saveReflection: (reflection: DayReflection) => Promise<void>;
  
  // Revision
  addProblemToRevision: (problemId: string, reason: RevisionReason) => Promise<void>;
  reviewRevisionItem: (id: string, outcome: RevisionOutcome) => Promise<void>;
  removeRevisionItem: (id: string) => Promise<void>;
  
  // Mistakes
  recordMistake: (entry: Omit<MistakeEntry, 'id' | 'createdAt'>) => Promise<void>;
  updateMistake: (entry: MistakeEntry) => Promise<void>;
  toggleMistakeResolved: (id: string) => Promise<void>;
  deleteMistake: (id: string) => Promise<void>;
  
  // Settings & Data
  theme: 'dark' | 'light' | 'system';
  setTheme: (theme: 'dark' | 'light' | 'system') => void;
  toggleTheme: () => void;
  updateProfile: (profile: UserProfile) => Promise<void>;
  exportData: () => Promise<string>;
  importData: (jsonStr: string) => Promise<boolean>;
  resetAllData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<UserProfile>(DEFAULT_PROFILE);
  const [problemStatuses, setProblemStatuses] = useState<Record<string, ProblemStatus>>({});
  const [attempts, setAttempts] = useState<ProblemAttempt[]>([]);
  const [reflections, setReflections] = useState<Record<number, DayReflection>>({});
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [revisionQueue, setRevisionQueue] = useState<RevisionItem[]>([]);
  const [mistakes, setMistakes] = useState<MistakeEntry[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setThemeState] = useState<'dark' | 'light' | 'system'>(() => {
    return (localStorage.getItem('alg_theme') as any) || 'dark';
  });

  const applyTheme = (t: 'dark' | 'light' | 'system') => {
    const isDark =
      t === 'dark' ||
      (t === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const setTheme = (newTheme: 'dark' | 'light' | 'system') => {
    setThemeState(newTheme);
    localStorage.setItem('alg_theme', newTheme);
    applyTheme(newTheme);
    setProfileState((prev) => ({ ...prev, theme: newTheme }));
    storage.saveProfile({ ...profile, theme: newTheme });
  };

  const toggleTheme = () => {
    const currentIsDark = document.documentElement.classList.contains('dark');
    setTheme(currentIsDark ? 'light' : 'dark');
  };

  useEffect(() => {
    applyTheme(theme);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Focus Timer State
  const [timer, setTimer] = useState<FocusTimerState>({
    isActive: false,
    isPaused: false,
    secondsRemaining: 25 * 60,
    initialDuration: 25 * 60,
  });

  // Load initial data from Storage
  useEffect(() => {
    async function loadData() {
      const [
        p,
        statuses,
        allAttempts,
        allReflections,
        completed,
        revisions,
        allMistakes,
      ] = await Promise.all([
        storage.getProfile(),
        storage.getProblemStatuses(),
        storage.getAttempts(),
        storage.getReflections(),
        storage.getCompletedDays(),
        storage.getRevisionItems(),
        storage.getMistakes(),
      ]);

      setProfileState(p);
      setProblemStatuses(statuses);
      setAttempts(allAttempts);
      setReflections(allReflections);
      setCompletedDays(completed);
      setRevisionQueue(revisions);
      setMistakes(allMistakes);
    }
    loadData();
  }, []);

  // Timer Tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer.isActive && !timer.isPaused && timer.secondsRemaining > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev.secondsRemaining <= 1) {
            // Timer completed
            confetti({ particleCount: 60, spread: 55, origin: { y: 0.8 } });
            return { ...prev, isActive: false, secondsRemaining: 0 };
          }
          return { ...prev, secondsRemaining: prev.secondsRemaining - 1 };
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.isActive, timer.isPaused, timer.secondsRemaining]);

  // Global Keyboard Shortcut: Cmd/Ctrl + K for Global Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Derived Analytics Summary
  const analytics = useMemo(() => {
    return calculateAnalytics(
      problemStatuses,
      attempts,
      completedDays,
      reflections,
      revisionQueue,
      mistakes
    );
  }, [problemStatuses, attempts, completedDays, reflections, revisionQueue, mistakes]);

  // Actions
  const setProblemStatus = async (
    problemId: string,
    status: ProblemStatus,
    dayNumber?: number,
    options?: { usedHint?: boolean; viewedSolution?: boolean; notes?: string; timeSpent?: number }
  ) => {
    await storage.setProblemStatus(problemId, status);
    setProblemStatuses((prev) => ({ ...prev, [problemId]: status }));

    const attempt: ProblemAttempt = {
      id: `${problemId}-${Date.now()}`,
      problemId,
      dayNumber,
      date: new Date().toISOString(),
      status,
      usedHint: options?.usedHint || status === 'solved-with-hints',
      viewedSolution: options?.viewedSolution || status === 'solution-viewed',
      timeSpentMinutes: options?.timeSpent,
      notes: options?.notes,
    };
    await storage.addAttempt(attempt);
    setAttempts((prev) => [...prev, attempt]);

    // Automatically schedule revision if solved with hints, solution viewed, or marked needs revision
    if (
      status === 'solved-with-hints' ||
      status === 'solution-viewed' ||
      status === 'needs-revision'
    ) {
      const reason: RevisionReason =
        status === 'solved-with-hints'
          ? 'solved-with-hint'
          : status === 'solution-viewed'
          ? 'solution-viewed'
          : 'marked-manually';
      await addProblemToRevision(problemId, reason);
    }

    if (status === 'solved-independent') {
      confetti({ particleCount: 40, spread: 45, origin: { y: 0.85 } });
    }
  };

  const toggleDayCompletion = async (dayNumber: number): Promise<boolean> => {
    const isNowCompleted = await storage.toggleDayCompleted(dayNumber);
    setCompletedDays((prev) =>
      isNowCompleted ? [...prev, dayNumber] : prev.filter((d) => d !== dayNumber)
    );
    if (isNowCompleted) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    }
    return isNowCompleted;
  };

  const saveReflection = async (reflection: DayReflection) => {
    await storage.saveReflection(reflection);
    setReflections((prev) => ({ ...prev, [reflection.dayNumber]: reflection }));
  };

  // Revision Spaced Repetition Engine: Intervals = [1, 3, 7, 14, 30] days
  const addProblemToRevision = async (problemId: string, reason: RevisionReason) => {
    const existing = revisionQueue.find((r) => r.problemId === problemId);
    const prob = PROBLEMS_BY_ID[problemId];
    if (!prob) return;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextDueDate = tomorrow.toISOString().split('T')[0];

    const newItem: RevisionItem = existing || {
      id: `rev-${problemId}`,
      problemId,
      problemTitle: prob.title,
      difficulty: prob.difficulty,
      pattern: prob.primaryPattern,
      originalAssignmentDate: new Date().toISOString().split('T')[0],
      reason,
      stage: 0,
      nextDueDate,
      consecutiveSuccesses: 0,
      isCompleted: false,
      history: [],
    };

    if (existing) {
      newItem.reason = reason;
      newItem.nextDueDate = nextDueDate;
      newItem.isCompleted = false;
    }

    await storage.saveRevisionItem(newItem);
    setRevisionQueue((prev) => {
      const idx = prev.findIndex((i) => i.id === newItem.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = newItem;
        return copy;
      }
      return [...prev, newItem];
    });
  };

  const reviewRevisionItem = async (id: string, outcome: RevisionOutcome) => {
    const item = revisionQueue.find((i) => i.id === id);
    if (!item) return;

    const intervals = [1, 3, 7, 14, 30];
    let nextStage = item.stage;
    let nextConsecutive = item.consecutiveSuccesses;
    let isCompleted = false;

    if (outcome === 'solved-independent') {
      nextConsecutive++;
      nextStage = Math.min(intervals.length - 1, item.stage + 1);
      if (nextStage >= 4 && nextConsecutive >= 3) {
        isCompleted = true;
      }
    } else {
      // Failed or needed hints -> reset to stage 0
      nextConsecutive = 0;
      nextStage = 0;
    }

    const daysToAdd = intervals[nextStage];
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + daysToAdd);

    const updatedItem: RevisionItem = {
      ...item,
      stage: nextStage,
      consecutiveSuccesses: nextConsecutive,
      isCompleted,
      nextDueDate: nextDate.toISOString().split('T')[0],
      lastReviewedDate: new Date().toISOString().split('T')[0],
      previousOutcome: outcome,
      history: [
        ...item.history,
        {
          date: new Date().toISOString(),
          outcome,
        },
      ],
    };

    await storage.saveRevisionItem(updatedItem);
    setRevisionQueue((prev) => prev.map((i) => (i.id === id ? updatedItem : i)));
  };

  const removeRevisionItem = async (id: string) => {
    await storage.deleteRevisionItem(id);
    setRevisionQueue((prev) => prev.filter((i) => i.id !== id));
  };

  // Mistakes
  const recordMistake = async (entry: Omit<MistakeEntry, 'id' | 'createdAt'>) => {
    const newMistake: MistakeEntry = {
      ...entry,
      id: `mistake-${Date.now()}`,
      createdAt: Date.now(),
    };
    await storage.saveMistake(newMistake);
    setMistakes((prev) => [newMistake, ...prev]);
  };

  const updateMistake = async (entry: MistakeEntry) => {
    await storage.saveMistake(entry);
    setMistakes((prev) => prev.map((m) => (m.id === entry.id ? entry : m)));
  };

  const toggleMistakeResolved = async (id: string) => {
    const m = mistakes.find((item) => item.id === id);
    if (!m) return;
    const updated = { ...m, resolved: !m.resolved };
    await storage.saveMistake(updated);
    setMistakes((prev) => prev.map((item) => (item.id === id ? updated : item)));
  };

  const deleteMistake = async (id: string) => {
    await storage.deleteMistake(id);
    setMistakes((prev) => prev.filter((m) => m.id !== id));
  };

  // Settings
  const updateProfile = async (newProfile: UserProfile) => {
    await storage.saveProfile(newProfile);
    setProfileState(newProfile);
  };

  const exportData = async () => {
    return await storage.exportAllData();
  };

  const importData = async (jsonStr: string) => {
    const success = await storage.importAllData(jsonStr);
    if (success) {
      const [p, statuses, atts, refls, completed, revisions, ms] = await Promise.all([
        storage.getProfile(),
        storage.getProblemStatuses(),
        storage.getAttempts(),
        storage.getReflections(),
        storage.getCompletedDays(),
        storage.getRevisionItems(),
        storage.getMistakes(),
      ]);
      setProfileState(p);
      setProblemStatuses(statuses);
      setAttempts(atts);
      setReflections(refls);
      setCompletedDays(completed);
      setRevisionQueue(revisions);
      setMistakes(ms);
    }
    return success;
  };

  const resetAllData = async () => {
    await storage.resetAllProgress();
    setProblemStatuses({});
    setAttempts([]);
    setReflections({});
    setCompletedDays([]);
    setRevisionQueue([]);
    setMistakes([]);
  };

  // Timer controls
  const startTimer = (durationMinutes: number, problemId?: string, dayNumber?: number) => {
    const totalSeconds = durationMinutes * 60;
    setTimer({
      isActive: true,
      isPaused: false,
      secondsRemaining: totalSeconds,
      initialDuration: totalSeconds,
      linkedProblemId: problemId,
      linkedDayNumber: dayNumber,
    });
  };

  const pauseTimer = () => setTimer((prev) => ({ ...prev, isPaused: true }));
  const resumeTimer = () => setTimer((prev) => ({ ...prev, isPaused: false }));
  const resetTimer = () =>
    setTimer((prev) => ({
      ...prev,
      isActive: false,
      isPaused: false,
      secondsRemaining: prev.initialDuration,
    }));

  return (
    <AppContext.Provider
      value={{
        profile,
        problemStatuses,
        attempts,
        reflections,
        completedDays,
        revisionQueue,
        mistakes,
        analytics,
        timer,
        startTimer,
        pauseTimer,
        resumeTimer,
        resetTimer,
        isSearchOpen,
        setIsSearchOpen,
        setProblemStatus,
        toggleDayCompletion,
        saveReflection,
        addProblemToRevision,
        reviewRevisionItem,
        removeRevisionItem,
        recordMistake,
        updateMistake,
        toggleMistakeResolved,
        deleteMistake,
        theme,
        setTheme,
        toggleTheme,
        updateProfile,
        exportData,
        importData,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
