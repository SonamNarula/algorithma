import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ROADMAP_DAYS } from '../../data/curriculum';
import { Flame, Calendar, Sparkles, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ActivityHeatmapProps {
  className?: string;
  defaultView?: 'roadmap' | 'calendar';
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({
  className,
  defaultView = 'roadmap',
}) => {
  const { analytics, completedDays, problemStatuses, profile } = useApp();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<'roadmap' | 'calendar'>(defaultView);
  const [hoveredCell, setHoveredCell] = useState<{
    label: string;
    sublabel: string;
    count: number;
    dayNumber?: number;
    phase?: string;
    completed?: boolean;
    date?: string;
  } | null>(null);

  // 1. Calculate stats
  const totalSolved = analytics.uniqueProblemsSolved;
  const currentStreak = analytics.currentStreak;
  const longestStreak = analytics.longestStreak;
  const activeDaysCount = completedDays.length;

  // 2. Generate Calendar Year Data (last 28 weeks ~ 196 days leading up to today)
  const calendarWeeks = useMemo(() => {
    const weeks: Array<
      Array<{
        dateStr: string;
        dayOfWeek: number;
        count: number;
        level: number;
        dayNumber?: number;
      }>
    > = [];

    const today = new Date();
    // Build 26 weeks (half year) for ideal desktop & tablet fit
    const totalDays = 26 * 7;
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - totalDays + (6 - today.getDay()));

    // Create lookup map of problems solved by date based on roadmap start date
    const roadmapStart = new Date(profile.roadmapStartDate);
    const dayDateMap = new Map<string, number>();

    ROADMAP_DAYS.forEach((rd, idx) => {
      const d = new Date(roadmapStart);
      d.setDate(d.getDate() + idx);
      const ds = d.toISOString().split('T')[0];
      dayDateMap.set(ds, rd.dayNumber);
    });

    let currentWeek: Array<{
      dateStr: string;
      dayOfWeek: number;
      count: number;
      level: number;
      dayNumber?: number;
    }> = [];

    for (let i = 0; i < totalDays; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      const dayNum = dayDateMap.get(dateStr);

      let count = 0;
      let level = 0;

      if (dayNum) {
        const isDone = completedDays.includes(dayNum);
        const dayObj = ROADMAP_DAYS.find((r) => r.dayNumber === dayNum);
        if (dayObj) {
          const solvedInDay = dayObj.assignments.filter((a) => {
            const st = problemStatuses[a.problemId];
            return st === 'solved-independent' || st === 'solved-with-hints' || st === 'solution-viewed';
          }).length;
          count = isDone ? Math.max(solvedInDay, 10) : solvedInDay;
        }
      }

      if (count === 0) level = 0;
      else if (count <= 2) level = 1;
      else if (count <= 5) level = 2;
      else if (count <= 9) level = 3;
      else level = 4;

      currentWeek.push({
        dateStr,
        dayOfWeek: d.getDay(),
        count,
        level,
        dayNumber: dayNum,
      });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  }, [completedDays, problemStatuses, profile.roadmapStartDate]);

  // Color mapper for hacker blue intensity levels
  const getLevelClasses = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#003B99] border-[#0052FF]/40 text-[#00E5FF]';
      case 2:
        return 'bg-[#0066FF] border-[#0099FF]/60 text-white shadow-[0_0_8px_rgba(0,102,255,0.4)]';
      case 3:
        return 'bg-[#0099FF] border-[#00E5FF]/70 text-white shadow-[0_0_12px_rgba(0,153,255,0.5)]';
      case 4:
        return 'bg-[#00E5FF] border-white/80 text-[#003B99] shadow-[0_0_14px_rgba(0,229,255,0.7)] font-bold';
      default:
        return 'bg-slate-100 dark:bg-[#050914] border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-400 hover:border-primary/50';
    }
  };

  return (
    <div className={cn('glass-card p-5 sm:p-6 space-y-4 relative overflow-hidden', className)}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-60 h-60 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 border-b border-border-glass pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-glow-cyan animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-content-primary flex items-center gap-2">
              <span>Hacker Activity Heatmap</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-primary/15 text-accent-cyan border border-primary/30 uppercase tracking-wider">
                Live Cockpit
              </span>
            </h3>
          </div>
          <p className="text-xs text-content-muted mt-0.5">
            Real-time practice frequency, 70-day curriculum mastery intensity, and daily submissions.
          </p>
        </div>

        {/* View Switcher & Legend */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-surface-glass p-0.5 rounded-xl border border-border-glass text-xs font-mono">
            <button
              onClick={() => setViewMode('roadmap')}
              className={cn(
                'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5',
                viewMode === 'roadmap'
                  ? 'bg-primary text-white font-semibold shadow-glow-sm'
                  : 'text-content-muted hover:text-content-primary hover:bg-surface-glass-interactive'
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>70-Day Grid</span>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={cn(
                'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5',
                viewMode === 'calendar'
                  ? 'bg-primary text-white font-semibold shadow-glow-sm'
                  : 'text-content-muted hover:text-content-primary hover:bg-surface-glass-interactive'
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Timeline (26W)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metric Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        <div className="p-3 rounded-xl bg-surface-glass border border-border-glass flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-content-muted block">Total Solves</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-accent-cyan">
              {totalSolved}
            </span>
          </div>
          <Sparkles className="w-4 h-4 text-accent-cyan/70" />
        </div>

        <div className="p-3 rounded-xl bg-surface-glass border border-border-glass flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-content-muted block">Days Completed</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
              {activeDaysCount} <span className="text-xs text-content-muted">/ 70</span>
            </span>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400/70" />
        </div>

        <div className="p-3 rounded-xl bg-surface-glass border border-border-glass flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-content-muted block">Current Streak</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-amber-400">
              {currentStreak}d
            </span>
          </div>
          <Flame className="w-4 h-4 text-amber-400" />
        </div>

        <div className="p-3 rounded-xl bg-surface-glass border border-border-glass flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-content-muted block">Longest Streak</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-primary">
              {longestStreak}d
            </span>
          </div>
          <TrendingUp className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Main Heatmap Render Area */}
      <div className="pt-2">
        {viewMode === 'roadmap' ? (
          /* 70-Day Roadmap Matrix (10 columns x 7 rows) */
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-content-muted">
              <span>Day 1 — Two Pointers & Arrays</span>
              <span className="text-accent-cyan">70 Sequential Deliberate Days</span>
              <span>Day 70 — Final Capstone Mock</span>
            </div>

            <div className="grid grid-cols-7 sm:grid-cols-10 gap-1.5 sm:gap-2">
              {ROADMAP_DAYS.map((day) => {
                const isCompleted = completedDays.includes(day.dayNumber);
                const solvedCount = day.assignments.filter((a) => {
                  const st = problemStatuses[a.problemId];
                  return st === 'solved-independent' || st === 'solved-with-hints' || st === 'solution-viewed';
                }).length;

                let level = 0;
                if (isCompleted) level = 4;
                else if (solvedCount >= 8) level = 3;
                else if (solvedCount >= 4) level = 2;
                else if (solvedCount > 0) level = 1;

                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => navigate(`/roadmap/day/${day.dayNumber}`)}
                    onMouseEnter={() =>
                      setHoveredCell({
                        label: `Day ${day.dayNumber}: ${day.title}`,
                        sublabel: `Pattern: ${day.primaryPattern} • ${day.assignments.length} problems`,
                        count: solvedCount,
                        dayNumber: day.dayNumber,
                        phase: day.phase,
                        completed: isCompleted,
                      })
                    }
                    onMouseLeave={() => setHoveredCell(null)}
                    className={cn(
                      'heatmap-cell h-10 sm:h-11 rounded-lg border flex flex-col items-center justify-center relative group cursor-pointer transition-all',
                      getLevelClasses(level),
                      isCompleted && 'ring-1 ring-accent-cyan/80'
                    )}
                  >
                    <span className="text-[11px] sm:text-xs font-mono font-semibold">
                      D{day.dayNumber}
                    </span>
                    <span className="text-[9px] font-mono opacity-80 leading-none">
                      {isCompleted ? '✓' : `${solvedCount}p`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* 26-Week Calendar Grid (GitHub / LeetCode style) */
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[620px] space-y-2">
              <div className="flex gap-1.5">
                {calendarWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                    {week.map((cell, dIdx) => (
                      <div
                        key={dIdx}
                        onClick={() => {
                          if (cell.dayNumber) navigate(`/roadmap/day/${cell.dayNumber}`);
                        }}
                        onMouseEnter={() =>
                          setHoveredCell({
                            label: cell.dateStr,
                            sublabel: cell.dayNumber
                              ? `Day ${cell.dayNumber} in Curriculum`
                              : 'No scheduled curriculum day',
                            count: cell.count,
                            dayNumber: cell.dayNumber,
                            date: cell.dateStr,
                          })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                        className={cn(
                          'heatmap-cell h-3.5 sm:h-4 rounded border cursor-pointer transition-all',
                          getLevelClasses(cell.level)
                        )}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Tooltip Bar / Inspector & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border-glass text-xs font-mono">
        <div className="h-6 flex items-center">
          {hoveredCell ? (
            <div className="flex items-center gap-2 truncate">
              <span className="text-content-primary font-bold">{hoveredCell.label}</span>
              <span className="text-content-muted">•</span>
              <span className="text-accent-cyan">{hoveredCell.sublabel}</span>
              <span className="text-content-muted">•</span>
              <span className="text-emerald-400 font-semibold">
                {hoveredCell.completed ? 'COMPLETED ✓' : `${hoveredCell.count} Solved`}
              </span>
            </div>
          ) : (
            <span className="text-content-muted">
              Hover over any node to inspect problems, pattern invariants, and completion status.
            </span>
          )}
        </div>

        {/* Intensity Legend */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
          <span className="text-[11px] text-content-muted mr-1">Intensity:</span>
          <span className="text-[10px] text-content-muted">Less</span>
          <div className="w-3 h-3 rounded bg-surface-glass-interactive/40 border border-white/5" />
          <div className="w-3 h-3 rounded bg-[#003B99] border border-[#0052FF]/40" />
          <div className="w-3 h-3 rounded bg-[#0066FF] border border-[#0099FF]/60" />
          <div className="w-3 h-3 rounded bg-[#0099FF] border border-[#00E5FF]/70" />
          <div className="w-3 h-3 rounded bg-[#00E5FF] border border-white/80 shadow-[0_0_8px_rgba(0,229,255,0.7)]" />
          <span className="text-[10px] text-accent-cyan ml-1">More (Hacker Cyan)</span>
        </div>
      </div>
    </div>
  );
};
