export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type AssignmentType = 'new' | 'reinforcement' | 'revision';

export type ProblemStatus =
  | 'not-started'
  | 'attempted'
  | 'solved-independent'
  | 'solved-with-hints'
  | 'solution-viewed'
  | 'needs-revision';

export interface Problem {
  id: string; // unique stable slug-like ID e.g. "two-sum"
  title: string;
  slug: string;
  leetcodeNumber?: number;
  difficulty: Difficulty;
  primaryPattern: string;
  relatedPatterns: string[];
  url: string;
  verified: boolean;
  notesSnippet?: string;
  cppHint?: string;
  pythonHint?: string;
}

export interface DailyAssignment {
  id: string;
  problemId: string;
  dayNumber: number;
  type: AssignmentType;
  rationale?: string;
}

export interface RoadmapDay {
  dayNumber: number;
  phase: string;
  phaseNumber: number;
  title: string;
  primaryPattern: string;
  relatedPatterns: string[];
  objectives: string[];
  conceptSummary: string;
  estimatedMinutes: number;
  assignments: DailyAssignment[];
  completionCriteria: string;
}

export interface DSAPattern {
  id: string;
  name: string;
  category: string;
  coreIdea: string;
  recognitionSignals: string[];
  typicalStructure: string;
  whenToUse: string[];
  whenNotToUse: string[];
  timeComplexity: string;
  spaceComplexity: string;
  commonMistakes: string[];
  illustrativeExample: string;
  cppSnippet: string;
  pythonSnippet: string;
  prerequisites: string[];
  relatedPatterns: string[];
}
