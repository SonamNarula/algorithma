import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ROADMAP_DAYS } from '../data/curriculum';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  RotateCcw,
  AlertCircle,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const CalendarPage: React.FC = () => {
  const { profile, updateProfile, completedDays, revisionQueue } = useApp();
  const navigate = useNavigate();

  const [startDateInput, setStartDateInput] = useState(profile.roadmapStartDate);
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(profile.roadmapStartDate));

  const handleStartDateChange = async (newDate: string) => {
    setStartDateInput(newDate);
    await updateProfile({ ...profile, roadmapStartDate: newDate });
  };

  // Map each day number to its projected calendar date
  const roadmapDateMap = useMemo(() => {
    const map = new Map<string, typeof ROADMAP_DAYS[0]>();
    const start = new Date(profile.roadmapStartDate);

    ROADMAP_DAYS.forEach((day, idx) => {
      const targetDate = new Date(start);
      targetDate.setDate(targetDate.getDate() + idx);
      const dateStr = targetDate.toISOString().split('T')[0];
      map.set(dateStr, day);
    });

    return map;
  }, [profile.roadmapStartDate]);

  // Calendar matrix calculation for the selected month
  const calendarDays = useMemo(() => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: Array<{
      dateStr: string;
      dayNumber: number;
      isCurrentMonth: boolean;
      roadmapDay?: typeof ROADMAP_DAYS[0];
      isCompleted: boolean;
      dueRevisionsCount: number;
    }> = [];

    // Previous month padding
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const prevDate = new Date(year, month - 1, d);
      const dateStr = prevDate.toISOString().split('T')[0];
      cells.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: false,
        roadmapDay: roadmapDateMap.get(dateStr),
        isCompleted: false,
        dueRevisionsCount: 0,
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const currDate = new Date(year, month, d);
      const dateStr = currDate.toISOString().split('T')[0];
      const rDay = roadmapDateMap.get(dateStr);
      const isCompleted = rDay ? completedDays.includes(rDay.dayNumber) : false;
      const dueCount = revisionQueue.filter((rev) => rev.nextDueDate === dateStr).length;

      cells.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: true,
        roadmapDay: rDay,
        isCompleted,
        dueRevisionsCount: dueCount,
      });
    }

    // Next month padding to fill 35 or 42 cells
    const remaining = (7 - (cells.length % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      const nextDate = new Date(year, month + 1, d);
      const dateStr = nextDate.toISOString().split('T')[0];
      cells.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: false,
        roadmapDay: roadmapDateMap.get(dateStr),
        isCompleted: false,
        dueRevisionsCount: 0,
      });
    }

    return cells;
  }, [currentMonthDate, roadmapDateMap, completedDays, revisionQueue]);

  const monthName = currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const prevMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
            70-Day Preparation Calendar
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Dynamic timeline mapped to your start date. All progress and reflection entries are safely
            preserved across date rescheduling.
          </p>
        </div>

        {/* Start date configuration */}
        <div className="flex items-center gap-2 glass-panel p-2 self-start sm:self-auto">
          <CalendarIcon className="w-4 h-4 text-primary ml-1" />
          <span className="text-xs text-content-secondary font-medium">Roadmap Start:</span>
          <input
            type="date"
            value={startDateInput}
            onChange={(e) => handleStartDateChange(e.target.value)}
            className="bg-surface-glass border border-border-glass rounded-lg px-2.5 py-1 text-xs text-content-primary font-mono focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Month Navigation Banner */}
      <div className="flex items-center justify-between glass-panel p-3.5 border border-border-glass">
        <Button variant="outline" size="sm" onClick={prevMonth}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span>Previous</span>
        </Button>

        <h3 className="text-sm sm:text-base font-bold text-content-primary font-mono">
          {monthName}
        </h3>

        <Button variant="outline" size="sm" onClick={nextMonth}>
          <span>Next</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="glass-panel overflow-hidden border border-border-glass shadow-ambient">
        {/* Days of week */}
        <div className="grid grid-cols-7 border-b border-border-subtle/80 bg-surface-glass/60 text-center font-mono text-xs font-semibold text-content-muted py-2.5">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>

        {/* Day Cells */}
        <div className="grid grid-cols-7 divide-x divide-y divide-border-subtle/40">
          {calendarDays.map((cell, idx) => {
            const hasRoadmapDay = !!cell.roadmapDay;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (cell.roadmapDay) {
                    navigate(`/roadmap/day/${cell.roadmapDay.dayNumber}`);
                  }
                }}
                className={cn(
                  'min-h-[95px] p-2 flex flex-col justify-between transition-colors relative',
                  cell.isCurrentMonth ? 'bg-surface-glass/40' : 'bg-surface-glass/10 opacity-40',
                  hasRoadmapDay && 'hover:bg-surface-glass-interactive cursor-pointer',
                  cell.isCompleted && 'bg-emerald-500/[0.04]'
                )}
              >
                {/* Cell Date Header */}
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'text-xs font-mono font-medium',
                      cell.isCurrentMonth ? 'text-content-primary' : 'text-content-muted'
                    )}
                  >
                    {cell.dayNumber}
                  </span>

                  {cell.isCompleted && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  )}
                </div>

                {/* Content snippet */}
                {hasRoadmapDay && cell.roadmapDay && (
                  <div className="my-1">
                    <span className="block text-[10px] font-mono font-bold text-indigo-400">
                      Day {cell.roadmapDay.dayNumber}
                    </span>
                    <span className="block text-[10px] text-content-secondary truncate leading-tight mt-0.5">
                      {cell.roadmapDay.primaryPattern.replace('-', ' ')}
                    </span>
                  </div>
                )}

                {/* Due Revisions Tag */}
                {cell.dueRevisionsCount > 0 && (
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>{cell.dueRevisionsCount} rev</span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
