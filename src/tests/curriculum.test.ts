import { describe, it, expect } from 'vitest';
import { ROADMAP_DAYS, DAYS_BY_NUMBER } from '../data/curriculum';
import { PROBLEMS, PROBLEMS_BY_ID } from '../data/problems';

describe('Curriculum Data Integrity', () => {
  it('contains exactly 70 roadmap days', () => {
    expect(ROADMAP_DAYS.length).toBe(70);
  });

  it('has days numbered 1 through 70 sequentially without gaps', () => {
    for (let i = 1; i <= 70; i++) {
      expect(DAYS_BY_NUMBER[i]).toBeDefined();
      expect(DAYS_BY_NUMBER[i].dayNumber).toBe(i);
    }
  });

  it('guarantees every day has between 10 and 15 problem assignments', () => {
    ROADMAP_DAYS.forEach((day) => {
      const assignmentCount = day.assignments.length;
      expect(assignmentCount).toBeGreaterThanOrEqual(10);
      expect(assignmentCount).toBeLessThanOrEqual(15);
    });
  });

  it('guarantees every assignment references a valid canonical problem in PROBLEMS', () => {
    ROADMAP_DAYS.forEach((day) => {
      day.assignments.forEach((assignment) => {
        expect(PROBLEMS_BY_ID[assignment.problemId]).toBeDefined();
        expect(assignment.problemId).toBe(PROBLEMS_BY_ID[assignment.problemId].id);
        expect(['new', 'reinforcement', 'revision']).toContain(assignment.type);
      });
    });
  });

  it('guarantees every canonical problem has a valid direct LeetCode URL', () => {
    expect(PROBLEMS.length).toBeGreaterThan(150);
    PROBLEMS.forEach((problem) => {
      expect(problem.url).toMatch(/^https:\/\/leetcode\.com\/problems\/[a-z0-9-]+\/$/);
      expect(['Easy', 'Medium', 'Hard']).toContain(problem.difficulty);
      expect(problem.verified).toBe(true);
    });
  });

  it('distinguishes assignments from unique problems', () => {
    const totalAssignments = ROADMAP_DAYS.reduce((sum, d) => sum + d.assignments.length, 0);
    const uniqueAssignedProblems = new Set(
      ROADMAP_DAYS.flatMap((d) => d.assignments.map((a) => a.problemId))
    );
    expect(totalAssignments).toBeGreaterThan(700);
    expect(uniqueAssignedProblems.size).toBeGreaterThanOrEqual(100);
  });
});
