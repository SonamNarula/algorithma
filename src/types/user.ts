import { ProblemStatus } from './curriculum';

export interface UserProfile {
  name: string;
  primaryLanguage: 'C++' | 'Python';
  secondaryLanguage: 'C++' | 'Python';
  roadmapStartDate: string; // YYYY-MM-DD
  dailyTargetMinutes: number;
  theme: 'dark' | 'light' | 'system';
  notesStyle: 'handwritten-primary' | 'digital-hybrid';
}

export interface DayReflection {
  dayNumber: number;
  date: string;
  whatLearned: string;
  mostDifficultProblemId?: string;
  mistakeSummary: string;
  needsRevision: boolean;
  canExplainWithoutNotes: boolean;
  confidenceRating: number; // 1 to 5
  completed: boolean;
  completedAt?: string;
}

export interface ProblemAttempt {
  id: string;
  problemId: string;
  dayNumber?: number;
  date: string; // ISO string
  status: ProblemStatus;
  usedHint: boolean;
  viewedSolution: boolean;
  timeSpentMinutes?: number;
  notes?: string;
}

export interface FocusSession {
  id: string;
  date: string;
  durationMinutes: number;
  problemId?: string;
  dayNumber?: number;
  completed: boolean;
}

export interface UserProgressData {
  profile: UserProfile;
  problemStatuses: Record<string, ProblemStatus>; // problemId -> status
  attempts: ProblemAttempt[];
  reflections: Record<number, DayReflection>; // dayNumber -> reflection
  completedDays: number[]; // array of completed day numbers
  focusSessions: FocusSession[];
}
