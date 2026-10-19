import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useApp } from '../context/AppContext';
import { DAYS_BY_NUMBER, ROADMAP_DAYS } from '../data/curriculum';
import { PROBLEMS_BY_ID } from '../data/problems';
import { PATTERNS } from '../data/patterns';
import { ProblemCard } from '../components/problem/ProblemCard';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Star,
  Brain,
  HelpCircle,
  Lightbulb,
  Save,
  Check,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const DayWorkspacePage: React.FC = () => {
  const { dayNumber } = useParams<{ dayNumber: string }>();
  const navigate = useNavigate();
  const {
    reflections,
    saveReflection,
    completedDays,
    toggleDayCompletion,
    problemStatuses,
  } = useApp();

  const num = parseInt(dayNumber || '1', 10);
  const day = DAYS_BY_NUMBER[num] || ROADMAP_DAYS[0];

  // Associated pattern data
  const patternInfo = useMemo(() => {
    return PATTERNS.find((p) => p.id === day.primaryPattern);
  }, [day.primaryPattern]);

  // Reflection form state
  const existingReflection = reflections[num];
  const [whatLearned, setWhatLearned] = useState(existingReflection?.whatLearned || '');
  const [mistakeSummary, setMistakeSummary] = useState(existingReflection?.mistakeSummary || '');
  const [confidenceRating, setConfidenceRating] = useState(existingReflection?.confidenceRating || 3);
  const [canExplainWithoutNotes, setCanExplainWithoutNotes] = useState(
    existingReflection?.canExplainWithoutNotes ?? false
  );
  const [isSavedFeedback, setIsSavedFeedback] = useState(false);

  useEffect(() => {
    if (existingReflection) {
      setWhatLearned(existingReflection.whatLearned || '');
      setMistakeSummary(existingReflection.mistakeSummary || '');
      setConfidenceRating(existingReflection.confidenceRating || 3);
      setCanExplainWithoutNotes(existingReflection.canExplainWithoutNotes ?? false);
    } else {
      setWhatLearned('');
      setMistakeSummary('');
      setConfidenceRating(3);
      setCanExplainWithoutNotes(false);
    }
  }, [num, existingReflection]);

  // Assignment progress calculation
  const totalAssignments = day.assignments.length;
  const solvedAssignments = useMemo(() => {
    return day.assignments.filter((a) => {
      const st = problemStatuses[a.problemId];
      return (
        st === 'solved-independent' ||
        st === 'solved-with-hints' ||
        st === 'solution-viewed'
      );
    }).length;
  }, [day.assignments, problemStatuses]);

  const isDayCompleted = completedDays.includes(num);

  const handleSaveReflection = async () => {
    await saveReflection({
      dayNumber: num,
      date: new Date().toISOString(),
      whatLearned,
      mistakeSummary,
      confidenceRating,
      canExplainWithoutNotes,
      needsRevision: confidenceRating < 3,
      completed: isDayCompleted,
    });
    setIsSavedFeedback(true);
    setTimeout(() => setIsSavedFeedback(false), 2000);
  };

  const handleToggleComplete = async () => {
    await handleSaveReflection();
    await toggleDayCompletion(num);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Top Day Navigation & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/roadmap/day/${Math.max(1, num - 1)}`)}
            disabled={num <= 1}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span>Day {num - 1}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/roadmap/day/${Math.min(70, num + 1)}`)}
            disabled={num >= 70}
          >
            <span>Day {num + 1}</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>

          <span className="text-xs font-mono text-content-muted ml-2">
            Phase: {day.phase}
          </span>
        </div>

        {/* Completion status toggle */}
        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-content-secondary">
            <span>Progress: </span>
            <strong className="text-content-primary">
              {solvedAssignments} / {totalAssignments}
            </strong>
          </div>

          <Button
            variant={isDayCompleted ? 'success' : 'primary'}
            size="sm"
            onClick={handleToggleComplete}
            className="shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 mr-1.5" />
            <span>{isDayCompleted ? 'Day Completed ✓' : 'Mark Day Complete'}</span>
          </Button>
        </div>
      </div>

      {/* Day Header Banner */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/15 border border-primary/30 text-accent-cyan mb-2.5 shadow-[0_0_12px_rgba(0,102,255,0.25)]">
          <span className="font-semibold">DAY {day.dayNumber} OF 70</span>
          <span>•</span>
          <span>EST. ~{day.estimatedMinutes} MINS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-content-primary">
          {day.title}
        </h2>
        <div className="flex items-center gap-3 mt-2 text-xs text-content-secondary font-mono">
          <span>Primary: <strong className="text-accent-cyan">{day.primaryPattern.replace('-', ' ').toUpperCase()}</strong></span>
          <span>•</span>
          <span>{day.assignments.length} Problem Assignments</span>
        </div>
      </div>

      {/* Pattern Deep Dive Concept Section */}
      <Card elevated className="overflow-hidden">
        <CardHeader className="bg-surface-glass/60 border-b border-border-glass">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent-cyan" />
            <h3 className="text-sm font-semibold font-display text-content-primary">
              Pattern Invariant & Algorithmic Mechanics
            </h3>
          </div>
          <span className="text-xs font-mono text-content-muted">
            Complement to Handwritten Register
          </span>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="prose-glass leading-relaxed font-sans">
            <ReactMarkdown>{day.conceptSummary}</ReactMarkdown>
          </div>

          {/* If pattern snippet available, show C++ and Python CodeBlock */}
          {patternInfo && (
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-content-secondary mb-2 flex items-center justify-between">
                <span>Canonical Implementation Template</span>
                <span className="text-[11px] font-mono text-content-muted">
                  Complexity: {patternInfo.timeComplexity} | {patternInfo.spaceComplexity}
                </span>
              </div>
              <CodeBlock
                cppCode={patternInfo.cppSnippet}
                pythonCode={patternInfo.pythonSnippet}
                defaultLanguage="C++"
                title={patternInfo.name}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Problem Assignments Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/80 pb-3">
          <div>
            <h3 className="text-base font-bold text-content-primary flex items-center gap-2">
              <span>Today's Problem Assignments</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {day.assignments.length} Problems
              </span>
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Solve problems independently before viewing hints or solutions.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-content-muted">
            <span className="text-emerald-500 font-medium">Solo: 100% mastery</span>
            <span>•</span>
            <span className="text-amber-500">Hint: auto-queues revision</span>
          </div>
        </div>

        {/* 10-15 Problem Cards */}
        <div className="space-y-3">
          {day.assignments.map((assignment) => {
            const problem = PROBLEMS_BY_ID[assignment.problemId];
            if (!problem) return null;
            return (
              <ProblemCard
                key={assignment.id}
                problem={problem}
                assignment={assignment}
                dayNumber={day.dayNumber}
              />
            );
          })}
        </div>
      </div>

      {/* End of Session Reflection & Register Takeaway */}
      <Card elevated className="border-border-default">
        <CardHeader className="bg-surface-glass/60 border-b border-border-subtle/80">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-content-primary">
              Daily Practice Reflection & Register Sync
            </h3>
          </div>
          <span className="text-xs font-mono text-content-muted">
            Autosaved to Local Data
          </span>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-content-secondary mb-1">
                What breakthrough or insight did I achieve today?
              </label>
              <textarea
                rows={3}
                value={whatLearned}
                onChange={(e) => setWhatLearned(e.target.value)}
                placeholder="e.g. Recognizing when to shrink sliding window vs using prefix sum map..."
                className="w-full bg-surface-glass border border-border-glass rounded-xl p-3 text-xs text-content-primary focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-content-secondary mb-1">
                Key Mistake / Edge Case to remember:
              </label>
              <textarea
                rows={3}
                value={mistakeSummary}
                onChange={(e) => setMistakeSummary(e.target.value)}
                placeholder="e.g. Remember to cast cumulative sum to long long in C++ to avoid integer overflow..."
                className="w-full bg-surface-glass border border-border-glass rounded-xl p-3 text-xs text-content-primary focus:outline-none focus:border-primary font-mono text-amber-500/95 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-border-subtle">
            {/* Confidence Rating 1 to 5 */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-content-secondary">
                Pattern Confidence:
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setConfidenceRating(star)}
                    className="p-1 text-content-muted hover:text-amber-400 transition-colors"
                  >
                    <Star
                      className={cn(
                        'w-4 h-4',
                        star <= confidenceRating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-content-muted/40'
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox: Can explain without notes */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="explain-notes"
                checked={canExplainWithoutNotes}
                onChange={(e) => setCanExplainWithoutNotes(e.target.checked)}
                className="rounded border-border-default bg-surface-secondary text-primary focus:ring-primary/40"
              />
              <label htmlFor="explain-notes" className="text-xs text-content-secondary select-none">
                I can explain this pattern and its time/space complexity verbally without notes
              </label>
            </div>

            {/* Save Reflection button */}
            <Button size="sm" variant="secondary" onClick={handleSaveReflection}>
              {isSavedFeedback ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Saved</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Reflection</span>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
