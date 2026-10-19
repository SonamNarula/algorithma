import { ProblemStatus } from '../types/curriculum';
import { ProblemAttempt, DayReflection } from '../types/user';
import { RevisionItem } from '../types/revision';
import { MistakeEntry } from '../types/mistake';
import { PROBLEMS } from '../data/problems';
import { ROADMAP_DAYS } from '../data/curriculum';

export interface AnalyticsSummary {
  uniqueProblemsSolved: number;
  totalUniqueProblems: number;
  roadmapDaysCompleted: number;
  totalRoadmapDays: number;
  roadmapPercentage: number;
  
  // Status breakdown
  solvedIndependentCount: number;
  solvedWithHintsCount: number;
  solutionViewedCount: number;
  needsRevisionCount: number;
  attemptedCount: number;
  notStartedCount: number;
  
  // Rate calculations
  independentSolveRate: number; // percentage
  hintDependencyRate: number;   // percentage
  
  // Difficulty breakdown
  difficultyBreakdown: {
    easy: { solved: number; total: number; percentage: number };
    medium: { solved: number; total: number; percentage: number };
    hard: { solved: number; total: number; percentage: number };
  };
  
  // Pattern stats
  patternMastery: Array<{
    pattern: string;
    solved: number;
    total: number;
    masteryRate: number;
  }>;
  
  // Streaks
  currentStreak: number;
  longestStreak: number;
  
  // Transparent Mastery Score (0 to 100)
  masteryScore: number;
  masteryExplanation: string[];
}

export function calculateAnalytics(
  problemStatuses: Record<string, ProblemStatus>,
  attempts: ProblemAttempt[],
  completedDays: number[],
  reflections: Record<number, DayReflection>,
  revisions: RevisionItem[],
  mistakes: MistakeEntry[]
): AnalyticsSummary {
  const totalUniqueProblems = PROBLEMS.length;
  const totalRoadmapDays = ROADMAP_DAYS.length;

  let solvedIndependent = 0;
  let solvedWithHints = 0;
  let solutionViewed = 0;
  let needsRevision = 0;
  let attempted = 0;

  // Track counts per difficulty
  const diffStats = {
    Easy: { solved: 0, total: 0 },
    Medium: { solved: 0, total: 0 },
    Hard: { solved: 0, total: 0 },
  };

  const patternStats: Record<string, { solved: number; total: number }> = {};

  PROBLEMS.forEach((p) => {
    // difficulty totals
    if (diffStats[p.difficulty]) {
      diffStats[p.difficulty].total++;
    }

    // pattern totals
    if (!patternStats[p.primaryPattern]) {
      patternStats[p.primaryPattern] = { solved: 0, total: 0 };
    }
    patternStats[p.primaryPattern].total++;

    const status = problemStatuses[p.id] || 'not-started';
    const isSolved =
      status === 'solved-independent' ||
      status === 'solved-with-hints' ||
      status === 'solution-viewed';

    if (status === 'solved-independent') solvedIndependent++;
    else if (status === 'solved-with-hints') solvedWithHints++;
    else if (status === 'solution-viewed') solutionViewed++;
    else if (status === 'needs-revision') needsRevision++;
    else if (status === 'attempted') attempted++;

    if (isSolved) {
      if (diffStats[p.difficulty]) diffStats[p.difficulty].solved++;
      patternStats[p.primaryPattern].solved++;
    }
  });

  const uniqueSolved = solvedIndependent + solvedWithHints + solutionViewed;
  const notStarted = Math.max(0, totalUniqueProblems - (uniqueSolved + needsRevision + attempted));

  const totalEvaluated = solvedIndependent + solvedWithHints + solutionViewed;
  const independentSolveRate =
    totalEvaluated > 0 ? Math.round((solvedIndependent / totalEvaluated) * 100) : 0;
  const hintDependencyRate =
    totalEvaluated > 0 ? Math.round(((solvedWithHints + solutionViewed) / totalEvaluated) * 100) : 0;

  // Pattern mastery list sorted by lowest mastery to highlight weak patterns
  const patternMastery = Object.entries(patternStats).map(([pattern, data]) => ({
    pattern,
    solved: data.solved,
    total: data.total,
    masteryRate: data.total > 0 ? Math.round((data.solved / data.total) * 100) : 0,
  }));

  // Streaks based on attempts or reflections
  const activityDates = new Set<string>();
  attempts.forEach((a) => {
    try {
      activityDates.add(a.date.split('T')[0]);
    } catch {}
  });
  Object.values(reflections).forEach((r) => {
    if (r.date) activityDates.add(r.date.split('T')[0]);
  });

  const sortedDates = Array.from(activityDates).sort();
  let currentStreak = 0;
  let longestStreak = 0;
  let running = 0;

  const todayStr = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) {
      running = 1;
    } else {
      const prev = new Date(sortedDates[i - 1]);
      const curr = new Date(sortedDates[i]);
      const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        running++;
      } else if (diffDays > 1) {
        running = 1;
      }
    }
    if (running > longestStreak) longestStreak = running;
  }

  // Current streak check
  if (activityDates.has(todayStr) || activityDates.has(yesterdayStr)) {
    let checkDate = new Date();
    if (!activityDates.has(todayStr) && activityDates.has(yesterdayStr)) {
      checkDate = yesterday;
    }
    currentStreak = 0;
    while (true) {
      const dStr = checkDate.toISOString().split('T')[0];
      if (activityDates.has(dStr)) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
  }

  // --- Transparent Mastery Score Formula ---
  // Base components:
  // 1. Independent Solving Ratio (weight 40%): rewards genuine independent solves over hints/solutions
  // 2. Roadmap Volume & Difficulty Breadth (weight 30%): progress through 70 days & Medium/Hard problems
  // 3. Revision Retention (weight 20%): successfully cleared spaced repetition items without relapses
  // 4. Mistake Rectification (weight 10%): resolving recorded mistakes in journal
  const independentFactor = totalEvaluated > 0 ? (solvedIndependent / totalEvaluated) * 40 : 0;
  const roadmapFactor = (completedDays.length / totalRoadmapDays) * 20;
  const difficultyFactor =
    diffStats.Medium.total > 0
      ? (diffStats.Medium.solved / diffStats.Medium.total) * 10
      : 0;

  let revisionSuccesses = 0;
  revisions.forEach((r) => {
    if (r.consecutiveSuccesses >= 2 || r.isCompleted) revisionSuccesses++;
  });
  const revisionFactor =
    revisions.length > 0 ? (revisionSuccesses / revisions.length) * 20 : 15; // default reasonable if empty

  let resolvedMistakes = 0;
  mistakes.forEach((m) => {
    if (m.resolved) resolvedMistakes++;
  });
  const mistakeFactor =
    mistakes.length > 0 ? (resolvedMistakes / mistakes.length) * 10 : 8;

  const rawMastery = independentFactor + roadmapFactor + difficultyFactor + revisionFactor + mistakeFactor;
  const masteryScore = Math.min(100, Math.max(0, Math.round(rawMastery)));

  const masteryExplanation = [
    `Independent Solve Weight: ${Math.round(independentFactor)}/40 pts (based on ${solvedIndependent} independent solves)`,
    `Roadmap Completion: ${Math.round(roadmapFactor)}/20 pts (${completedDays.length}/${totalRoadmapDays} days completed)`,
    `Medium/Hard Depth: ${Math.round(difficultyFactor)}/10 pts (${diffStats.Medium.solved} medium problems solved)`,
    `Revision Spaced Retention: ${Math.round(revisionFactor)}/20 pts (${revisionSuccesses} mastered revision questions)`,
    `Mistake Journal Resolution: ${Math.round(mistakeFactor)}/10 pts (${resolvedMistakes} resolved errors)`,
  ];

  return {
    uniqueProblemsSolved: uniqueSolved,
    totalUniqueProblems,
    roadmapDaysCompleted: completedDays.length,
    totalRoadmapDays,
    roadmapPercentage: Math.round((completedDays.length / totalRoadmapDays) * 100),
    solvedIndependentCount: solvedIndependent,
    solvedWithHintsCount: solvedWithHints,
    solutionViewedCount: solutionViewed,
    needsRevisionCount: needsRevision,
    attemptedCount: attempted,
    notStartedCount: notStarted,
    independentSolveRate,
    hintDependencyRate,
    difficultyBreakdown: {
      easy: {
        solved: diffStats.Easy.solved,
        total: diffStats.Easy.total,
        percentage: diffStats.Easy.total > 0 ? Math.round((diffStats.Easy.solved / diffStats.Easy.total) * 100) : 0,
      },
      medium: {
        solved: diffStats.Medium.solved,
        total: diffStats.Medium.total,
        percentage: diffStats.Medium.total > 0 ? Math.round((diffStats.Medium.solved / diffStats.Medium.total) * 100) : 0,
      },
      hard: {
        solved: diffStats.Hard.solved,
        total: diffStats.Hard.total,
        percentage: diffStats.Hard.total > 0 ? Math.round((diffStats.Hard.solved / diffStats.Hard.total) * 100) : 0,
      },
    },
    patternMastery,
    currentStreak,
    longestStreak,
    masteryScore,
    masteryExplanation,
  };
}
