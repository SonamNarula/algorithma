import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ROADMAP_DAYS } from '../data/curriculum';
import { Tabs } from '../components/ui/Tabs';
import { PatternGraph } from '../components/roadmap/PatternGraph';
import { Card } from '../components/ui/Card';
import { CheckCircle2, Clock, ArrowRight, LayoutGrid, ListFilter, Network } from 'lucide-react';
import { cn } from '../utils/cn';

export const RoadmapPage: React.FC = () => {
  const { completedDays } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'timeline' | 'grid' | 'pattern-map'>('timeline');
  const [phaseFilter, setPhaseFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending'>('all');

  // Distinct phases
  const distinctPhases = useMemo(() => {
    const set = new Set<string>();
    ROADMAP_DAYS.forEach((d) => set.add(d.phase));
    return Array.from(set);
  }, []);

  // Filtered days
  const filteredDays = useMemo(() => {
    return ROADMAP_DAYS.filter((d) => {
      const matchPhase = phaseFilter === 'all' || d.phase === phaseFilter;
      const isCompleted = completedDays.includes(d.dayNumber);
      const matchStatus =
        statusFilter === 'all' ||
        (statusFilter === 'completed' && isCompleted) ||
        (statusFilter === 'pending' && !isCompleted);
      return matchPhase && matchStatus;
    });
  }, [phaseFilter, statusFilter, completedDays]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
            70-Day DSA Curriculum Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Structured day-wise curriculum based on the Whimsical preparation mind map. Exactly 70
            distinct days with 10–15 problem assignments each.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-surface-secondary p-1 rounded-lg border border-border-default self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('timeline')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors',
              activeTab === 'timeline'
                ? 'bg-primary text-white shadow-sm'
                : 'text-content-secondary hover:text-content-primary'
            )}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </button>
          <button
            onClick={() => setActiveTab('grid')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors',
              activeTab === 'grid'
                ? 'bg-primary text-white shadow-sm'
                : 'text-content-secondary hover:text-content-primary'
            )}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>70-Day Grid</span>
          </button>
          <button
            onClick={() => setActiveTab('pattern-map')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors',
              activeTab === 'pattern-map'
                ? 'bg-primary text-white shadow-sm'
                : 'text-content-secondary hover:text-content-primary'
            )}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Pattern Map</span>
          </button>
        </div>
      </div>

      {/* Filters (only for timeline & grid) */}
      {activeTab !== 'pattern-map' && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-surface-secondary/40 p-3 rounded-xl border border-border-subtle">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-content-muted font-medium">Phase:</span>
            <select
              value={phaseFilter}
              onChange={(e) => setPhaseFilter(e.target.value)}
              className="bg-surface-secondary border border-border-default rounded-lg px-2.5 py-1 text-xs text-content-primary focus:outline-none focus:border-primary"
            >
              <option value="all">All 10 Phases ({ROADMAP_DAYS.length} Days)</option>
              {distinctPhases.map((phase) => (
                <option key={phase} value={phase}>
                  {phase}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-content-muted font-medium">Status:</span>
            <div className="flex items-center bg-surface-secondary rounded-lg p-0.5 border border-border-subtle">
              <button
                onClick={() => setStatusFilter('all')}
                className={cn(
                  'px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors',
                  statusFilter === 'all'
                    ? 'bg-surface-elevated text-content-primary'
                    : 'text-content-muted hover:text-content-primary'
                )}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('pending')}
                className={cn(
                  'px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors',
                  statusFilter === 'pending'
                    ? 'bg-surface-elevated text-content-primary'
                    : 'text-content-muted hover:text-content-primary'
                )}
              >
                Pending
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={cn(
                  'px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors',
                  statusFilter === 'completed'
                    ? 'bg-surface-elevated text-content-primary'
                    : 'text-content-muted hover:text-content-primary'
                )}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 1: Timeline View */}
      {activeTab === 'timeline' && (
        <div className="space-y-4">
          {filteredDays.map((day) => {
            const isCompleted = completedDays.includes(day.dayNumber);
            return (
              <Card
                key={day.dayNumber}
                interactive
                onClick={() => navigate(`/roadmap/day/${day.dayNumber}`)}
                className={cn(
                  'p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4',
                  isCompleted && 'border-emerald-500/30 bg-emerald-500/[0.02]'
                )}
              >
                <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 border',
                      isCompleted
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-surface-secondary border-border-default text-content-primary'
                    )}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : day.dayNumber}
                  </div>

                  <div className="truncate flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-content-primary hover:text-primary transition-colors">
                        {day.title}
                      </span>
                      <span className="text-[11px] font-mono text-indigo-300 bg-primary/10 border border-primary/20 px-2 py-0.2 rounded">
                        {day.primaryPattern.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-content-muted mt-1 font-mono">
                      <span>{day.phase}</span>
                      <span>•</span>
                      <span>{day.assignments.length} assignments</span>
                      <span>•</span>
                      <span>~{day.estimatedMinutes} mins</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span
                    className={cn(
                      'px-2.5 py-1 rounded-md text-xs font-mono font-medium border',
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-surface-secondary text-content-muted border-border-subtle'
                    )}
                  >
                    {isCompleted ? 'Completed' : 'Pending'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-primary" />
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* VIEW 2: 70-Day Grid View */}
      {activeTab === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {filteredDays.map((day) => {
            const isCompleted = completedDays.includes(day.dayNumber);
            return (
              <button
                key={day.dayNumber}
                onClick={() => navigate(`/roadmap/day/${day.dayNumber}`)}
                className={cn(
                  'p-3.5 rounded-xl border text-left transition-all hover:scale-[1.02] flex flex-col justify-between h-32',
                  isCompleted
                    ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/50'
                    : 'bg-surface-primary border-border-subtle hover:border-border-highlight'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-content-primary">
                    Day {day.dayNumber}
                  </span>
                  {isCompleted && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  )}
                </div>

                <div className="text-[11px] text-content-secondary line-clamp-2 leading-tight">
                  {day.primaryPattern.replace('-', ' ')}
                </div>

                <div className="text-[10px] text-content-muted font-mono flex items-center justify-between">
                  <span>{day.assignments.length} probs</span>
                  <span>~{day.estimatedMinutes}m</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* VIEW 3: Interactive Pattern Dependency Map */}
      {activeTab === 'pattern-map' && <PatternGraph />}
    </div>
  );
};
