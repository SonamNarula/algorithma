import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { RoadmapDay, DailyAssignment } from '../../types/curriculum';
import { PROBLEMS_BY_ID } from '../../data/problems';
import {
  CheckCircle2,
  Clock,
  MessageSquare,
  MoreVertical,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

interface OutcrowdTaskWidgetProps {
  todayDay: RoadmapDay;
  className?: string;
}

export const OutcrowdTaskWidget: React.FC<OutcrowdTaskWidgetProps> = ({
  todayDay,
  className = '',
}) => {
  const navigate = useNavigate();
  const { profile, problemStatuses, reflections, theme } = useApp();
  const [showCompleted, setShowCompleted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDarkMode =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Calculate live tasks metrics
  const totalTasks = todayDay.assignments.length;
  const completedTasks = todayDay.assignments.filter(
    (assign: DailyAssignment) =>
      problemStatuses[assign.problemId] === 'solved-independent' ||
      problemStatuses[assign.problemId] === 'solved-with-hints'
  ).length;
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Active or next unsolved problem
  const activeAssignment =
    todayDay.assignments.find(
      (assign: DailyAssignment) =>
        problemStatuses[assign.problemId] !== 'solved-independent' &&
        problemStatuses[assign.problemId] !== 'solved-with-hints'
    ) || todayDay.assignments[0];

  const activeProblem = activeAssignment ? PROBLEMS_BY_ID[activeAssignment.problemId] : null;

  // Day reflection / notebook comments
  const reflection = reflections[todayDay.dayNumber];
  const notesCount = reflection ? (reflection.whatLearned ? 1 : 0) + (reflection.mistakeSummary ? 1 : 0) + 3 : 5;

  return (
    <div
      className={`relative rounded-[26px] overflow-visible transition-all duration-300 ${className} ${
        isDarkMode
          ? 'text-white'
          : 'text-slate-900 border border-slate-200/90 shadow-xl bg-white'
      }`}
      style={{
        background: isDarkMode
          ? 'linear-gradient(180deg, rgba(0, 140, 255, 0.38) 0%, rgba(0, 75, 190, 0.16) 22%, rgba(6, 10, 20, 0.94) 52%, rgba(2, 4, 10, 0.99) 100%)'
          : 'linear-gradient(180deg, rgba(240, 246, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 35%, #ffffff 100%)',
        backdropFilter: 'blur(32px) saturate(210%)',
        WebkitBackdropFilter: 'blur(32px) saturate(210%)',
        border: isDarkMode ? '1px solid rgba(0, 180, 255, 0.28)' : '1px solid #e2e8f0',
        boxShadow: isDarkMode
          ? '0 30px 80px -15px rgba(0, 0, 0, 0.98), 0 0 50px -10px rgba(0, 140, 255, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 2px 20px rgba(0, 229, 255, 0.12)'
          : '0 20px 45px -10px rgba(0, 60, 180, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* 4-Point Specular Star Lens Flare at exact right rim */}
      {isDarkMode && (
        <div className="absolute -top-1 -right-1 sm:top-2 sm:-right-2 w-8 h-8 flex items-center justify-center pointer-events-none z-30">
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_18px_#00E5FF,0_0_35px_#0066FF]" />
          <div className="absolute w-12 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute h-12 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      )}

      <div className="p-6 sm:p-7 space-y-4">
        {/* Top Header: "Assigned to me" & 3-dot menu */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <h3
              className={`text-lg sm:text-xl font-bold tracking-tight font-display ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Assigned to me
            </h3>
            <span
              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                isDarkMode
                  ? 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30'
                  : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}
            >
              Day {todayDay.dayNumber}
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-white hover:bg-white/10'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="More options"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {menuOpen && (
              <div
                className={`absolute right-0 top-8 w-48 rounded-xl border shadow-2xl p-1 z-40 text-xs ${
                  isDarkMode
                    ? 'bg-[#070b16] border-cyan-500/30 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <button
                  onClick={() => {
                    navigate(`/roadmap/day/${todayDay.dayNumber}`);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary flex items-center gap-2 font-mono"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Day Workspace</span>
                </button>
                <button
                  onClick={() => {
                    navigate('/roadmap');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary flex items-center gap-2 font-mono"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View All 70 Days</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Subcard 1: Overview Card (Outcrowd Exact Style) */}
        <div
          className={`rounded-2xl p-4 sm:p-5 space-y-3.5 transition-all duration-200 ${
            isDarkMode ? 'border border-white/[0.08]' : 'border border-slate-200/80 bg-slate-50/80'
          }`}
          style={{
            background: isDarkMode ? 'rgba(6, 10, 20, 0.88)' : '#f8fafc',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: isDarkMode
              ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px -4px rgba(0, 0, 0, 0.6)'
              : '0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div className="flex items-center justify-between">
            <div className="truncate pr-3">
              <h4
                className={`text-sm sm:text-base font-bold tracking-tight truncate font-display ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {todayDay.title}
              </h4>
              <p
                className={`text-[11px] font-mono mt-0.5 ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}
              >
                Pattern: {todayDay.primaryPattern.replace('-', ' ').toUpperCase()}
              </p>
            </div>

            {/* Overlapping Round Avatars */}
            <div className="flex items-center -space-x-2 shrink-0">
              <div
                title={profile.name}
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-[11px] font-bold border-2 border-white dark:border-[#081224] shadow-sm"
              >
                {profile.name.charAt(0)}
              </div>
              <div
                title="C++ Primary"
                className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-300 flex items-center justify-center text-[10px] font-mono font-bold border-2 border-white dark:border-[#081224]"
              >
                C++
              </div>
              <div
                title="Python Secondary"
                className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-mono font-bold border-2 border-white dark:border-[#081224]"
              >
                Py
              </div>
            </div>
          </div>

          {/* Progress Row: Checkmark Pill + Glowing Progress Bar + Percentage */}
          <div className="flex items-center gap-3 pt-1">
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono shrink-0 border ${
                isDarkMode
                  ? 'bg-white/[0.06] border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
              <span>
                {completedTasks}/{totalTasks}
              </span>
            </div>

            <div
              className={`flex-1 h-2 rounded-full overflow-hidden relative border ${
                isDarkMode ? 'bg-[#03060f] border-white/5' : 'bg-slate-200 border-slate-300'
              }`}
            >
              <div
                className="liquid-progress h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(6, percentage)}%` }}
              />
            </div>

            <span
              className={`text-xs font-mono font-bold shrink-0 ${
                isDarkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}
            >
              {percentage}%
            </span>
          </div>
        </div>

        {/* Subcard 2: In-Progress Active Focus Card (Outcrowd Exact Style) */}
        {!showCompleted ? (
          <div
            className={`rounded-2xl p-4 sm:p-5 space-y-3.5 transition-all duration-200 ${
              isDarkMode ? 'border border-white/[0.08]' : 'border border-slate-200/80 bg-slate-50/80'
            }`}
            style={{
              background: isDarkMode ? 'rgba(5, 8, 16, 0.92)' : '#f8fafc',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: isDarkMode
                ? 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.6)'
                : '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Tag Badge */}
            <div className="flex items-center justify-between">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold border ${
                  isDarkMode
                    ? 'bg-white/[0.06] border-white/10 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                In progress
              </span>
              <span
                className={`text-[11px] font-mono ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {activeAssignment?.type?.toUpperCase() || 'CORE ASSIGNMENT'}
              </span>
            </div>

            {/* Task Title & Description */}
            <div>
              <h5
                className={`text-sm sm:text-base font-bold font-display tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {activeProblem ? `#${activeProblem.leetcodeNumber} ${activeProblem.title}` : todayDay.title}
              </h5>
              <p
                className={`text-xs mt-1 leading-relaxed font-sans ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {isExpanded
                  ? todayDay.objectives.join('. ')
                  : `${todayDay.objectives[0] || 'Master algorithmic pattern and write clean C++ & Python code.'} `}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`font-semibold ml-1 hover:underline ${
                    isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  {isExpanded ? 'Read less' : '... Read more'}
                </button>
              </p>
            </div>

            {/* Inner Pill Box: Time + Liquid Progress Bar + Star Dot */}
            <div
              className={`rounded-xl p-3 flex items-center justify-between gap-3 border ${
                isDarkMode
                  ? 'bg-[#02050c] border-white/5'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div
                className={`flex items-center gap-1.5 text-xs font-mono shrink-0 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-cyan-500" />
                <span>~{todayDay.estimatedMinutes}m</span>
              </div>

              <div
                className={`flex-1 h-2 rounded-full overflow-hidden relative border ${
                  isDarkMode ? 'bg-[#010308] border-white/5' : 'bg-slate-200 border-slate-300'
                }`}
              >
                <div
                  className="liquid-progress h-full rounded-full transition-all duration-500 relative"
                  style={{ width: `${Math.max(12, percentage > 0 ? percentage : 42)}%` }}
                >
                  {isDarkMode && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#00E5FF]" />
                  )}
                </div>
              </div>

              <span
                className={`text-xs font-mono font-medium shrink-0 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {percentage > 0 ? `${percentage}%` : '42%'}
              </span>
            </div>

            {/* Subcard Footer: Checkmark Pill + Comment Icon + Avatars */}
            <div className="flex items-center justify-between pt-1">
              <div
                className={`flex items-center gap-4 text-xs font-mono ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>
                    {completedTasks}/{totalTasks}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 opacity-70" />
                  <span>{notesCount}</span>
                </div>
              </div>

              <div className="flex items-center -space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 border border-white dark:border-[#081224] flex items-center justify-center text-[10px] text-white font-bold">
                  {profile.name.charAt(0)}
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-[#0d1f3d] border border-white dark:border-[#081224] flex items-center justify-center text-[9px] text-blue-700 dark:text-cyan-300 font-mono font-semibold">
                  SN
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Completed View: list of completed assignments */
          <div
            className={`rounded-2xl p-4 sm:p-5 space-y-2.5 transition-all duration-200 ${
              isDarkMode ? 'border border-white/[0.08]' : 'border border-slate-200/80 bg-slate-50/80'
            }`}
            style={{
              background: isDarkMode ? 'rgba(5, 8, 16, 0.92)' : '#f8fafc',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div
              className={`flex items-center justify-between text-xs font-mono pb-1 border-b ${
                isDarkMode ? 'text-cyan-400 border-white/5' : 'text-blue-700 border-slate-200'
              }`}
            >
              <span>Completed Problems</span>
              <span>
                {completedTasks} of {totalTasks} Solved
              </span>
            </div>

            {todayDay.assignments
              .filter(
                (a: DailyAssignment) =>
                  problemStatuses[a.problemId] === 'solved-independent' ||
                  problemStatuses[a.problemId] === 'solved-with-hints'
              )
              .map((a: DailyAssignment) => {
                const prob = PROBLEMS_BY_ID[a.problemId];
                if (!prob) return null;
                return (
                  <div
                    key={a.id}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs border ${
                      isDarkMode
                        ? 'bg-white/[0.03] border-white/5 text-slate-200'
                        : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-mono truncate">
                        #{prob.leetcodeNumber} {prob.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                      SOLVED
                    </span>
                  </div>
                );
              })}

            {completedTasks === 0 && (
              <div
                className={`text-center py-6 text-xs font-mono ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                No problems marked as completed yet for Day {todayDay.dayNumber}.
                <br />
                <button
                  onClick={() => setShowCompleted(false)}
                  className="text-primary hover:underline mt-2 inline-block font-sans font-semibold"
                >
                  View active assignments →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Outer Widget Footer: "X/Y tasks" on left & "Completed" Toggle Switch on right */}
        <div className="flex items-center justify-between pt-2">
          <span
            className={`text-xs font-sans font-medium ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {completedTasks}/{totalTasks} tasks
          </span>

          <div className="flex items-center gap-2.5">
            {/* Apple/iOS Style Pill Toggle Switch */}
            <button
              type="button"
              role="switch"
              aria-checked={showCompleted}
              onClick={() => setShowCompleted(!showCompleted)}
              className={`w-11 h-6 rounded-full transition-colors duration-200 relative p-0.5 border ${
                showCompleted
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-cyan-400/50 shadow-[0_0_10px_rgba(0,229,255,0.4)]'
                  : isDarkMode
                  ? 'bg-slate-800/80 border-white/10'
                  : 'bg-slate-200 border-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  showCompleted ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              onClick={() => setShowCompleted(!showCompleted)}
              className={`text-xs font-sans cursor-pointer select-none font-semibold ${
                isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Completed
            </span>
          </div>
        </div>

        {/* Launch Workspace CTA Button */}
        <div className="pt-2">
          <button
            onClick={() => navigate(`/roadmap/day/${todayDay.dayNumber}`)}
            className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 shadow-[0_0_20px_rgba(0,140,255,0.45)] hover:shadow-[0_0_28px_rgba(0,229,255,0.7)] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Launch Day {todayDay.dayNumber} Workspace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
