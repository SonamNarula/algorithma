import React from 'react';
import { cn } from '../../utils/cn';
import { Difficulty, ProblemStatus, AssignmentType } from '../../types/curriculum';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className }) => {
  const styles: Record<Difficulty, string> = {
    Easy: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    Medium: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
    Hard: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/25',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border font-mono tracking-tight shadow-sm',
        styles[difficulty],
        className
      )}
    >
      {difficulty}
    </span>
  );
};

interface StatusBadgeProps {
  status: ProblemStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config: Record<ProblemStatus, { label: string; style: string }> = {
    'not-started': {
      label: 'Not Started',
      style: 'text-content-muted bg-surface-interactive/60 border-surface-border',
    },
    attempted: {
      label: 'Attempted',
      style: 'text-accent-icy bg-accent-icy/10 border-accent-icy/30',
    },
    'solved-independent': {
      label: 'Solved Solo',
      style: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30 font-semibold',
    },
    'solved-with-hints': {
      label: 'Solved w/ Hint',
      style: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
    'solution-viewed': {
      label: 'Solution Viewed',
      style: 'text-accent-violet bg-accent-violet/10 border-accent-violet/30',
    },
    'needs-revision': {
      label: 'Needs Revision',
      style: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/30 font-medium',
    },
  };

  const item = config[status] || config['not-started'];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md text-xs border font-mono tracking-tight whitespace-nowrap shadow-sm',
        item.style,
        className
      )}
    >
      {item.label}
    </span>
  );
};

interface AssignmentTypeBadgeProps {
  type: AssignmentType;
  className?: string;
}

export const AssignmentTypeBadge: React.FC<AssignmentTypeBadgeProps> = ({ type, className }) => {
  const config = {
    new: { label: 'NEW', style: 'text-primary bg-primary/10 border-primary/25' },
    reinforcement: { label: 'REINFORCE', style: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/25' },
    revision: { label: 'REVISION', style: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25 font-semibold' },
  };

  const item = config[type] || config.new;

  return (
    <span
      className={cn(
        'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium border uppercase tracking-wider',
        item.style,
        className
      )}
    >
      {item.label}
    </span>
  );
};
