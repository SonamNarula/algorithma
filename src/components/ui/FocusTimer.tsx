import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, Pause, RotateCcw, Clock, ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export const FocusTimer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { timer, startTimer, pauseTimer, resumeTimer, resetTimer } = useApp();
  const [showPicker, setShowPicker] = useState(false);

  const minutes = Math.floor(timer.secondsRemaining / 60);
  const seconds = timer.secondsRemaining % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const presetDurations = [15, 25, 45, 60];

  if (compact) {
    return (
      <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-control text-xs font-mono shadow-sm">
        <Clock className={cn('w-3.5 h-3.5 transition-colors', timer.isActive && !timer.isPaused ? 'text-primary animate-pulse' : 'text-content-muted')} />
        <span className={cn('font-semibold tabular-nums', timer.isActive && !timer.isPaused ? 'text-content-primary' : 'text-content-secondary')}>
          {timeFormatted}
        </span>

        {timer.isActive ? (
          timer.isPaused ? (
            <button
              onClick={resumeTimer}
              className="p-1 hover:text-emerald-500 transition-colors"
              title="Resume timer"
            >
              <Play className="w-3 h-3 fill-current" />
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="p-1 hover:text-amber-500 transition-colors"
              title="Pause timer"
            >
              <Pause className="w-3 h-3 fill-current" />
            </button>
          )
        ) : (
          <button
            onClick={() => startTimer(25)}
            className="p-1 text-content-muted hover:text-primary transition-colors"
            title="Start 25m Focus Sprint"
          >
            <Play className="w-3 h-3 fill-current" />
          </button>
        )}

        {timer.isActive && (
          <button
            onClick={resetTimer}
            className="p-1 text-content-muted hover:text-rose-500 transition-colors"
            title="Reset timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="glass-card p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-content-secondary">
          <Clock className="w-4 h-4 text-primary" />
          <span>Deliberate Focus Session</span>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="flex items-center gap-1.5 text-xs text-content-secondary hover:text-content-primary px-2.5 py-1 rounded-lg glass-control"
          >
            <span className="font-mono">{Math.round(timer.initialDuration / 60)} min</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>

          {showPicker && (
            <div className="absolute right-0 top-full mt-1.5 w-32 glass-panel-elevated rounded-xl shadow-glass-elevated z-20 py-1.5 border border-surface-border animate-scaleIn">
              {presetDurations.map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    startTimer(d);
                    setShowPicker(false);
                  }}
                  className="w-full text-left px-3.5 py-1.5 text-xs text-content-secondary hover:text-content-primary hover:bg-surface-interactive flex items-center justify-between font-mono"
                >
                  <span>{d} mins</span>
                  {Math.round(timer.initialDuration / 60) === d && (
                    <Check className="w-3 h-3 text-primary" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center my-4">
        <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-content-primary tabular-nums">
          {timeFormatted}
        </div>
        <p className="text-xs text-content-muted mt-2 font-mono">
          {timer.isActive
            ? timer.isPaused
              ? 'Session Paused'
              : 'Cockpit Active: Independent Problem Solving'
            : 'Ready for deep algorithmic focus'}
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        {timer.isActive ? (
          <>
            {timer.isPaused ? (
              <button
                onClick={resumeTimer}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium hover:bg-emerald-500/20 transition-all active:scale-[0.98]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Resume</span>
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-medium hover:bg-amber-500/20 transition-all active:scale-[0.98]"
              >
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </button>
            )}
            <button
              onClick={resetTimer}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-control text-content-secondary text-xs font-medium hover:text-content-primary active:scale-[0.98]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </>
        ) : (
          <button
            onClick={() => startTimer(25)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-hacker active:scale-95 transition-all border border-accent-cyan/30"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch 25-Min Sprint</span>
          </button>
        )}
      </div>
    </div>
  );
};
