import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ROADMAP_DAYS, DAYS_BY_NUMBER } from '../data/curriculum';
import { PROBLEMS_BY_ID } from '../data/problems';
import {
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
  Clock,
  RotateCcw,
  Target,
  AlertTriangle,
  TrendingUp,
  Brain,
  Zap,
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FocusTimer } from '../components/ui/FocusTimer';
import { DifficultyBadge } from '../components/ui/Badge';
import { ActivityHeatmap } from '../components/dashboard/ActivityHeatmap';
import { OutcrowdTaskWidget } from '../components/dashboard/OutcrowdTaskWidget';

export const DashboardPage: React.FC = () => {
  const { profile, analytics, completedDays, revisionQueue, mistakes, attempts } = useApp();
  const navigate = useNavigate();

  // Determine appropriate greeting based on local time
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return `Good morning, ${profile.name.split(' ')[0]}`;
    if (hour < 17) return `Good afternoon, ${profile.name.split(' ')[0]}`;
    return `Good evening, ${profile.name.split(' ')[0]}`;
  }, [profile.name]);

  // Find the next incomplete day (or Day 1 if none completed yet)
  const currentDayNumber = useMemo(() => {
    for (let i = 1; i <= 70; i++) {
      if (!completedDays.includes(i)) return i;
    }
    return 70;
  }, [completedDays]);

  const todayDay = DAYS_BY_NUMBER[currentDayNumber] || ROADMAP_DAYS[0];

  // Due revisions
  const todayStr = new Date().toISOString().split('T')[0];
  const dueRevisions = useMemo(() => {
    return revisionQueue.filter((r) => !r.isCompleted && r.nextDueDate <= todayStr);
  }, [revisionQueue, todayStr]);

  // Weak patterns (mastery < 50%)
  const weakPatterns = useMemo(() => {
    return analytics.patternMastery
      .filter((p) => p.total >= 3 && p.masteryRate < 50)
      .slice(0, 4);
  }, [analytics.patternMastery]);

  return (
    <div className="space-y-7 animate-fadeIn">
      {/* High-Tech Cockpit Header Greeting */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-glass pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 border border-primary/30 text-blue-600 dark:text-cyan-400 mb-2.5 shadow-[0_0_12px_rgba(0,102,255,0.15)]">
            <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wider">ALGORITHMA // FLAGSHIP COCKPIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            {greeting}.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
            "Your next breakthrough starts with today's deliberate practice."
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(`/roadmap/day/${currentDayNumber}`)}
            className="w-full sm:w-auto shadow-hacker font-display font-bold"
          >
            <span>Start Today's Session (Day {currentDayNumber})</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Flagship Stat Grid with Outcrowd Liquid Progress Bars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Roadmap Progress */}
        <div className="glass-card p-4 sm:p-5 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-mono">
            <span>Roadmap Progress</span>
            <Target className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-white">
              Day {currentDayNumber}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">/ 70</span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300 font-mono">
            <span>{analytics.roadmapPercentage}% completed</span>
            <span className="text-blue-600 dark:text-cyan-400 font-semibold">{completedDays.length} done</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-[#03060f] h-2 rounded-full mt-2.5 overflow-hidden border border-slate-300 dark:border-white/5">
            <div
              className="liquid-progress h-full transition-all duration-500 rounded-full"
              style={{ width: `${Math.max(4, analytics.roadmapPercentage)}%` }}
            />
          </div>
        </div>

        {/* Unique Problems Solved */}
        <div className="glass-card p-4 sm:p-5 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-mono">
            <span>Unique Solved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-white">
              {analytics.uniqueProblemsSolved}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">/ {analytics.totalUniqueProblems}</span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{analytics.difficultyBreakdown.easy.solved} Easy</span>
            <span className="text-amber-600 dark:text-amber-400 font-semibold">{analytics.difficultyBreakdown.medium.solved} Med</span>
            <span className="text-rose-600 dark:text-rose-400 font-semibold">{analytics.difficultyBreakdown.hard.solved} Hard</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-[#03060f] h-2 rounded-full mt-2.5 overflow-hidden border border-slate-300 dark:border-white/5">
            <div
              className="liquid-progress h-full transition-all duration-500 rounded-full"
              style={{
                width: `${Math.max(
                  4,
                  (analytics.uniqueProblemsSolved / Math.max(1, analytics.totalUniqueProblems)) * 100
                )}%`,
              }}
            />
          </div>
        </div>

        {/* Independent Solve Ratio */}
        <div className="glass-card p-4 sm:p-5 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-mono">
            <span>Solo Solve Rate</span>
            <Brain className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-white">
              {analytics.independentSolveRate}%
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-blue-600 dark:text-cyan-400 font-semibold">{analytics.solvedIndependentCount} solo solves</span>
            <span className="text-slate-500 dark:text-slate-400">Hint: {analytics.hintDependencyRate}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-[#03060f] h-2 rounded-full mt-2.5 overflow-hidden border border-slate-300 dark:border-white/5">
            <div
              className="liquid-progress h-full transition-all duration-500 rounded-full"
              style={{ width: `${Math.max(4, analytics.independentSolveRate)}%` }}
            />
          </div>
        </div>

        {/* Revision Queue */}
        <div className="glass-card p-4 sm:p-5 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-mono">
            <span>Due for Revision</span>
            <RotateCcw className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-500">
              {dueRevisions.length}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              due today ({revisionQueue.length} total)
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1 text-amber-500 font-semibold">
              <Flame className="w-3.5 h-3.5 fill-amber-500/20" />
              Streak: {analytics.currentStreak}d
            </span>
            <button
              onClick={() => navigate('/revision')}
              className="text-primary hover:underline text-[11px] font-medium"
            >
              Open queue →
            </button>
          </div>
          <div className="w-full bg-slate-200 dark:bg-[#03060f] h-2 rounded-full mt-2.5 overflow-hidden border border-slate-300 dark:border-white/5">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-300 h-full transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              style={{
                width: `${Math.min(100, Math.max(6, dueRevisions.length * 15))}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Flagship Hacker Blue Activity Heatmap */}
      <ActivityHeatmap />

      {/* Main Command Center Grid: Today's Focus Card & Focus Timer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Outcrowd Dark Task Management Widget: Assigned to me */}
        <OutcrowdTaskWidget todayDay={todayDay} className="lg:col-span-2" />

        {/* Right Column: Focus Timer & Mastery Score */}
        <div className="space-y-6">
          {/* Focus Timer */}
          <FocusTimer />

          {/* Transparent Algorithmic Mastery Score Card */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-content-secondary">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Placement Mastery Score</span>
              </div>
              <span className="text-xl font-mono font-bold text-content-primary">
                {analytics.masteryScore}
                <span className="text-xs text-content-muted">/100</span>
              </span>
            </div>

            <p className="text-xs text-content-secondary mb-3 leading-relaxed">
              Transparent, non-fabricated score reflecting independent problem solving, spaced
              revision retention, and resolved mistake journal entries.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-border-subtle text-[11px] font-mono text-content-muted">
              {analytics.masteryExplanation.map((line, idx) => (
                <div key={idx} className="truncate">
                  {line}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Revision Queue & Weak Patterns Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Due Revision Items */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-content-primary">
                Today's Revision Queue ({dueRevisions.length})
              </h3>
            </div>
            <button
              onClick={() => navigate('/revision')}
              className="text-xs text-primary hover:underline font-mono"
            >
              View all ({revisionQueue.length}) →
            </button>
          </div>

          {dueRevisions.length === 0 ? (
            <div className="py-8 text-center bg-surface-secondary/30 rounded-xl border border-dashed border-border-subtle">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2 opacity-80" />
              <p className="text-xs font-medium text-content-primary">
                Revision queue is clear for today!
              </p>
              <p className="text-[11px] text-content-muted mt-0.5">
                Problems solved with hints or marked for review will schedule automatically here.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {dueRevisions.slice(0, 4).map((rev) => (
                <div
                  key={rev.id}
                  className="p-3 rounded-lg bg-surface-secondary border border-border-subtle flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-content-primary block">
                      {rev.problemTitle}
                    </span>
                    <span className="text-[10px] text-content-muted font-mono">
                      Pattern: {rev.pattern} • Due: {rev.nextDueDate}
                    </span>
                  </div>
                  <DifficultyBadge difficulty={rev.difficulty} />
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Weak Patterns & Mistake Tracker */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <h3 className="text-sm font-semibold text-content-primary">
                Mistake Journal & Patterns ({mistakes.length} logged)
              </h3>
            </div>
            <button
              onClick={() => navigate('/mistakes')}
              className="text-xs text-primary hover:underline font-mono"
            >
              Open Journal →
            </button>
          </div>

          {mistakes.length === 0 ? (
            <div className="py-8 text-center bg-surface-secondary/30 rounded-xl border border-dashed border-border-subtle">
              <AlertTriangle className="w-6 h-6 text-rose-400 mx-auto mb-2 opacity-80" />
              <p className="text-xs font-medium text-content-primary">
                No mistakes recorded yet.
              </p>
              <p className="text-[11px] text-content-muted mt-0.5">
                Log off-by-one errors, boundary traps, or wrong approaches to write rules for your
                register.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {mistakes.slice(0, 3).map((m) => (
                <div
                  key={m.id}
                  className="p-3 rounded-lg bg-surface-secondary border border-border-subtle"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-content-primary">
                      {m.problemTitle}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                      {m.category}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-amber-300/90 mt-1 line-clamp-1">
                    Rule: {m.preventionRule}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
