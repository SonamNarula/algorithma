export type RevisionReason =
  | 'marked-manually'
  | 'repeated-failure'
  | 'solved-with-hint'
  | 'solution-viewed'
  | 'mistake-recorded'
  | 'low-confidence';

export type RevisionOutcome =
  | 'solved-independent'
  | 'solved-with-hints'
  | 'failed'
  | 'still-confusing';

export interface RevisionReviewLog {
  date: string;
  outcome: RevisionOutcome;
  notes?: string;
}

export interface RevisionItem {
  id: string;
  problemId: string;
  problemTitle: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pattern: string;
  originalAssignmentDate: string;
  reason: RevisionReason;
  stage: number; // 0: 1 day, 1: 3 days, 2: 7 days, 3: 14 days, 4: 30 days
  nextDueDate: string; // YYYY-MM-DD
  lastReviewedDate?: string;
  previousOutcome?: RevisionOutcome;
  consecutiveSuccesses: number;
  isCompleted: boolean;
  history: RevisionReviewLog[];
}
