import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { RevisionItem, RevisionOutcome } from '../types/revision';
import { PROBLEMS_BY_ID } from '../data/problems';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { DifficultyBadge } from '../components/ui/Badge';
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  Brain,
  Trash2,
  AlertCircle,
  Play,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const RevisionPage: React.FC = () => {
  const { revisionQueue, reviewRevisionItem, removeRevisionItem } = useApp();
  const [filterMode, setFilterMode] = useState<'due' | 'all' | 'mastered'>('due');
  const [activeReviewItem, setActiveReviewItem] = useState<RevisionItem | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const dueItems = useMemo(() => {
    return revisionQueue.filter((r) => !r.isCompleted && r.nextDueDate <= todayStr);
  }, [revisionQueue, todayStr]);

  const upcomingItems = useMemo(() => {
    return revisionQueue.filter((r) => !r.isCompleted && r.nextDueDate > todayStr);
  }, [revisionQueue, todayStr]);

  const masteredItems = useMemo(() => {
    return revisionQueue.filter((r) => r.isCompleted);
  }, [revisionQueue]);

  const displayedItems = useMemo(() => {
    if (filterMode === 'due') return dueItems;
    if (filterMode === 'mastered') return masteredItems;
    return revisionQueue;
  }, [filterMode, dueItems, masteredItems, revisionQueue]);

  const handleOutcome = async (id: string, outcome: RevisionOutcome) => {
    await reviewRevisionItem(id, outcome);
    setActiveReviewItem(null);
  };

  const getReasonLabel = (reason: string) => {
    switch (reason) {
      case 'solved-with-hint':
        return 'Solved with Hint';
      case 'solution-viewed':
        return 'Solution Viewed';
      case 'repeated-failure':
        return 'Repeated Failure';
      case 'mistake-recorded':
        return 'Mistake in Journal';
      case 'low-confidence':
        return 'Low Confidence (<3★)';
      default:
        return 'Marked for Review';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
            Spaced Repetition Revision Queue
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Revisit questions at intervals of 1, 3, 7, 14, and 30 days to build permanent subconscious
            pattern recognition.
          </p>
        </div>

        {dueItems.length > 0 && (
          <Button
            variant="primary"
            onClick={() => setActiveReviewItem(dueItems[0])}
            className="shadow-glow-sm"
          >
            <Play className="w-4 h-4 mr-1.5 fill-current" />
            <span>Start Revision Session ({dueItems.length} Due)</span>
          </Button>
        )}
      </div>

      {/* Stats Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-content-muted font-medium">Due Today</span>
            <div className="text-2xl font-mono font-bold text-amber-400 mt-1">
              {dueItems.length}
            </div>
          </div>
          <Clock className="w-5 h-5 text-amber-400" />
        </Card>

        <Card className="p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-content-muted font-medium">Upcoming Schedules</span>
            <div className="text-2xl font-mono font-bold text-content-primary mt-1">
              {upcomingItems.length}
            </div>
          </div>
          <RotateCcw className="w-5 h-5 text-primary" />
        </Card>

        <Card className="p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-content-muted font-medium">Permanently Mastered</span>
            <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">
              {masteredItems.length}
            </div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 bg-surface-secondary/60 p-1 rounded-lg border border-border-default self-start">
        <button
          onClick={() => setFilterMode('due')}
          className={cn(
            'px-3 py-1.5 rounded text-xs font-medium transition-colors',
            filterMode === 'due'
              ? 'bg-primary text-white shadow-sm'
              : 'text-content-secondary hover:text-content-primary'
          )}
        >
          Due Now ({dueItems.length})
        </button>
        <button
          onClick={() => setFilterMode('all')}
          className={cn(
            'px-3 py-1.5 rounded text-xs font-medium transition-colors',
            filterMode === 'all'
              ? 'bg-primary text-white shadow-sm'
              : 'text-content-secondary hover:text-content-primary'
          )}
        >
          All Scheduled ({revisionQueue.length})
        </button>
        <button
          onClick={() => setFilterMode('mastered')}
          className={cn(
            'px-3 py-1.5 rounded text-xs font-medium transition-colors',
            filterMode === 'mastered'
              ? 'bg-primary text-white shadow-sm'
              : 'text-content-secondary hover:text-content-primary'
          )}
        >
          Mastered ({masteredItems.length})
        </button>
      </div>

      {/* Revision Items List */}
      <div className="space-y-3">
        {displayedItems.length === 0 ? (
          <div className="py-16 text-center bg-surface-primary rounded-xl border border-dashed border-border-default">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-3 opacity-70" />
            <p className="text-sm font-semibold text-content-primary">
              {filterMode === 'due'
                ? 'No problems due for revision right now!'
                : 'No problems in this revision view.'}
            </p>
            <p className="text-xs text-content-muted mt-1">
              Problems will enter the spaced repetition queue as you practice and log hints or mistakes.
            </p>
          </div>
        ) : (
          displayedItems.map((item) => {
            const prob = PROBLEMS_BY_ID[item.problemId];
            const isDue = item.nextDueDate <= todayStr;

            return (
              <Card
                key={item.id}
                elevated
                className={cn(
                  'p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all',
                  isDue && 'border-amber-500/30 bg-amber-500/[0.01]'
                )}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-content-primary">
                      {item.problemTitle}
                    </span>
                    <DifficultyBadge difficulty={item.difficulty} />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary text-content-muted border border-border-subtle">
                      Pattern: {item.pattern}
                    </span>
                    {isDue && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                        DUE TODAY
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-content-secondary mt-1.5 font-mono flex-wrap">
                    <span>Reason: {getReasonLabel(item.reason)}</span>
                    <span>•</span>
                    <span>Stage: {item.stage + 1}/5</span>
                    <span>•</span>
                    <span>Next Due: {item.nextDueDate}</span>
                    <span>•</span>
                    <span>Successes: {item.consecutiveSuccesses}</span>
                  </div>

                  {prob && (
                    <div className="mt-2">
                      <a
                        href={prob.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                      >
                        <span>Open problem on LeetCode</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Outcome Review Action Buttons */}
                <div className="flex items-center gap-2 shrink-0 flex-wrap">
                  <div className="flex items-center bg-surface-secondary p-0.5 rounded-lg border border-border-default">
                    <button
                      onClick={() => handleOutcome(item.id, 'solved-independent')}
                      className="px-2.5 py-1 rounded text-xs font-medium text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                      title="Advance to next spaced interval"
                    >
                      Solved Solo
                    </button>
                    <button
                      onClick={() => handleOutcome(item.id, 'solved-with-hints')}
                      className="px-2.5 py-1 rounded text-xs font-medium text-amber-400 hover:bg-amber-500/10 transition-colors"
                      title="Needed hint (resets to 1-day interval)"
                    >
                      Used Hint
                    </button>
                    <button
                      onClick={() => handleOutcome(item.id, 'failed')}
                      className="px-2.5 py-1 rounded text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Failed (resets to 1-day interval)"
                    >
                      Failed
                    </button>
                  </div>

                  <button
                    onClick={() => removeRevisionItem(item.id)}
                    className="p-1.5 rounded-lg text-content-muted hover:text-rose-400 hover:bg-surface-elevated transition-colors"
                    title="Remove from queue"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};
