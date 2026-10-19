import React, { useState } from 'react';
import { Problem, DailyAssignment, ProblemStatus } from '../../types/curriculum';
import { useApp } from '../../context/AppContext';
import { DifficultyBadge, StatusBadge, AssignmentTypeBadge } from '../ui/Badge';
import { ExternalLink, ChevronDown, ChevronUp, AlertCircle, RotateCcw, Lightbulb, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { MistakeModal } from '../mistakes/MistakeModal';
import { cn } from '../../utils/cn';

interface ProblemCardProps {
  problem: Problem;
  assignment?: DailyAssignment;
  dayNumber?: number;
  className?: string;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  problem,
  assignment,
  dayNumber,
  className,
}) => {
  const { problemStatuses, setProblemStatus, addProblemToRevision, profile } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMistakeOpen, setIsMistakeOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [isNoteSaved, setIsNoteSaved] = useState(false);

  const currentStatus = problemStatuses[problem.id] || 'not-started';

  const handleStatusChange = async (newStatus: ProblemStatus) => {
    await setProblemStatus(problem.id, newStatus, dayNumber, {
      notes: noteText || undefined,
    });
  };

  const handleAddToRevision = async () => {
    await addProblemToRevision(problem.id, 'marked-manually');
  };

  const handleSaveNote = () => {
    if (!noteText.trim()) return;
    setProblemStatus(problem.id, currentStatus, dayNumber, { notes: noteText });
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  return (
    <>
      <div
        className={cn(
          'glass-card p-4 transition-all duration-200',
          currentStatus === 'solved-independent' && 'border-emerald-500/30 bg-emerald-500/[0.04]',
          currentStatus === 'needs-revision' && 'border-rose-500/30 bg-rose-500/[0.04]',
          className
        )}
      >
        {/* Main Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
            {assignment && <AssignmentTypeBadge type={assignment.type} />}

            <div className="truncate flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-content-primary hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <span>
                    {problem.leetcodeNumber ? `#${problem.leetcodeNumber} ` : ''}
                    {problem.title}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-content-muted group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <DifficultyBadge difficulty={problem.difficulty} />
                <span className="text-[11px] font-mono text-content-muted px-2 py-0.5 rounded-md bg-surface-glass border border-border-subtle">
                  {problem.primaryPattern.replace('-', ' ')}
                </span>
              </div>

              {assignment?.rationale && (
                <p className="text-[11px] text-content-muted mt-0.5 line-clamp-1">
                  {assignment.rationale}
                </p>
              )}
            </div>
          </div>

          {/* Status Controls */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <StatusBadge status={currentStatus} />

            <div className="flex items-center bg-surface-glass p-0.5 rounded-xl border border-border-glass shadow-inner-sm">
              <button
                onClick={() => handleStatusChange('solved-independent')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all',
                  currentStatus === 'solved-independent'
                    ? 'bg-emerald-500 text-white font-semibold shadow-glow-sm'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-glass-interactive'
                )}
                title="Mark solved independently without viewing hints"
              >
                Solo
              </button>
              <button
                onClick={() => handleStatusChange('solved-with-hints')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all',
                  currentStatus === 'solved-with-hints'
                    ? 'bg-amber-500 text-white font-semibold shadow-glow-sm'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-glass-interactive'
                )}
                title="Mark solved with hint (automatically queues revision)"
              >
                Hint
              </button>
              <button
                onClick={() => handleStatusChange('solution-viewed')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all',
                  currentStatus === 'solution-viewed'
                    ? 'bg-purple-600 text-white font-semibold shadow-glow-sm'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-glass-interactive'
                )}
                title="Solution viewed (automatically queues revision)"
              >
                Soln
              </button>
              <button
                onClick={() => handleStatusChange('needs-revision')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all',
                  currentStatus === 'needs-revision'
                    ? 'bg-rose-500 text-white font-semibold shadow-glow-sm'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-glass-interactive'
                )}
                title="Mark needs revision"
              >
                Revise
              </button>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg text-content-muted hover:text-content-primary hover:bg-surface-glass-interactive transition-colors"
              title={isExpanded ? 'Collapse problem details' : 'Expand problem details'}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Details Tray */}
        {isExpanded && (
          <div className="mt-3.5 pt-3.5 border-t border-border-subtle/80 space-y-3 text-xs">
            {/* Handwritten Register Tip */}
            {problem.notesSnippet && (
              <div className="p-3 rounded-xl bg-surface-glass border border-border-subtle flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-content-primary">
                    Handwritten Register Takeaway:
                  </span>
                  <p className="text-content-secondary mt-0.5 leading-relaxed font-sans">
                    {problem.notesSnippet}
                  </p>
                </div>
              </div>
            )}

            {/* Language Tip (C++ / Python) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {problem.cppHint && (
                <div className="p-3 rounded-xl bg-surface-glass border border-border-subtle font-mono text-[11px]">
                  <div className="text-emerald-500 font-semibold mb-1 flex items-center gap-1.5 font-sans">
                    <span>C++ Optimization Note</span>
                    {profile.primaryLanguage === 'C++' && (
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.2 rounded border border-emerald-500/20 font-medium">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-content-secondary leading-relaxed">{problem.cppHint}</p>
                </div>
              )}

              {problem.pythonHint && (
                <div className="p-3 rounded-xl bg-surface-glass border border-border-subtle font-mono text-[11px]">
                  <div className="text-cyan-500 font-semibold mb-1 flex items-center gap-1.5 font-sans">
                    <span>Python Tip</span>
                    {profile.secondaryLanguage === 'Python' && (
                      <span className="text-[10px] bg-cyan-500/10 text-cyan-500 px-1.5 py-0.2 rounded border border-cyan-500/20 font-medium">
                        Secondary
                      </span>
                    )}
                  </div>
                  <p className="text-content-secondary leading-relaxed">{problem.pythonHint}</p>
                </div>
              )}
            </div>

            {/* Quick Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsMistakeOpen(true)}
                  className="text-xs"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  <span>Log Mistake</span>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddToRevision}
                  className="text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
                  <span>Schedule Revision</span>
                </Button>
              </div>

              {/* Lightweight Note Taking (Optional as requested) */}
              <div className="flex items-center gap-2 flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Optional quick note..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveNote()}
                  className="w-full bg-surface-glass border border-border-glass rounded-xl px-3 py-1.5 text-xs text-content-primary focus:outline-none focus:border-primary transition-all"
                />
                <Button size="sm" variant="secondary" onClick={handleSaveNote}>
                  {isNoteSaved ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : 'Save'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mistake modal if triggered */}
      <MistakeModal
        isOpen={isMistakeOpen}
        onClose={() => setIsMistakeOpen(false)}
        initialProblemId={problem.id}
        initialProblemTitle={problem.title}
        initialPattern={problem.primaryPattern}
      />
    </>
  );
};
