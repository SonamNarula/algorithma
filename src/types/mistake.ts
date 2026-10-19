export type MistakeCategory =
  | 'Wrong pattern'
  | 'Incorrect approach'
  | 'Off-by-one error'
  | 'Incorrect boundary'
  | 'Wrong loop condition'
  | 'Data structure selection'
  | 'Integer overflow'
  | 'Complexity mistake'
  | 'Edge-case failure'
  | 'Implementation bug'
  | 'Time-limit exceeded'
  | 'Memorized without understanding';

export interface MistakeEntry {
  id: string;
  problemId: string;
  problemTitle: string;
  pattern: string;
  date: string;
  category: MistakeCategory;
  whatWentWrong: string;
  correctReasoning: string;
  preventionRule: string;
  resolved: boolean;
  notes?: string;
  createdAt: number;
}
