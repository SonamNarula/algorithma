import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MistakeEntry, MistakeCategory } from '../types/mistake';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MistakeModal } from '../components/mistakes/MistakeModal';
import {
  AlertTriangle,
  Plus,
  Search,
  CheckCircle2,
  Trash2,
  Edit2,
  BookOpen,
  Filter,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const MistakesPage: React.FC = () => {
  const { mistakes, toggleMistakeResolved, deleteMistake } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unresolved' | 'resolved'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMistake, setEditingMistake] = useState<MistakeEntry | undefined>(undefined);

  // Category breakdown for recurring traps
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = {};
    mistakes.forEach((m) => {
      counts[m.category] = (counts[m.category] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [mistakes]);

  // Filtered mistakes
  const filteredMistakes = useMemo(() => {
    return mistakes.filter((m) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        m.problemTitle.toLowerCase().includes(q) ||
        m.pattern.toLowerCase().includes(q) ||
        m.whatWentWrong.toLowerCase().includes(q) ||
        m.preventionRule.toLowerCase().includes(q);

      const matchCategory =
        categoryFilter === 'all' || m.category === categoryFilter;

      const matchStatus =
        statusFilter === 'all' ||
        (statusFilter === 'resolved' && m.resolved) ||
        (statusFilter === 'unresolved' && !m.resolved);

      return matchSearch && matchCategory && matchStatus;
    });
  }, [mistakes, searchQuery, categoryFilter, statusFilter]);

  const handleEdit = (m: MistakeEntry) => {
    setEditingMistake(m);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingMistake(undefined);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
            Mistake Journal & Register Rules
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            "Every bug is an unwritten invariant." Document errors, off-by-one boundary traps, and
            wrong approaches to formulate permanent rules for your handwritten register.
          </p>
        </div>

        <Button variant="primary" onClick={handleCreate} className="shadow-sm">
          <Plus className="w-4 h-4 mr-1.5" />
          <span>Log New Mistake</span>
        </Button>
      </div>

      {/* Recurring Traps Insight Row */}
      {categoryStats.length > 0 && (
        <div className="bg-surface-secondary/40 p-4 rounded-xl border border-border-subtle">
          <div className="text-xs font-semibold uppercase tracking-wider text-content-secondary mb-2 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Most Recurring Failure Modes (Real Data)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryStats.map(([cat, count]) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat === categoryFilter ? 'all' : cat)}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-2 border',
                  categoryFilter === cat
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-semibold'
                    : 'bg-surface-secondary text-content-secondary border-border-subtle hover:text-content-primary'
                )}
              >
                <span>{cat}</span>
                <span className="w-4 h-4 rounded-full bg-surface-elevated text-[10px] flex items-center justify-center text-content-primary font-bold">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-secondary/40 p-3.5 rounded-xl border border-border-subtle">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-content-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mistakes, problems, prevention rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-secondary border border-border-default rounded-lg pl-9 pr-3 py-1.5 text-xs text-content-primary placeholder-content-muted focus:outline-none focus:border-primary"
          />
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
              All ({mistakes.length})
            </button>
            <button
              onClick={() => setStatusFilter('unresolved')}
              className={cn(
                'px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors',
                statusFilter === 'unresolved'
                  ? 'bg-surface-elevated text-rose-400 font-semibold'
                  : 'text-content-muted hover:text-content-primary'
              )}
            >
              Unresolved ({mistakes.filter((m) => !m.resolved).length})
            </button>
            <button
              onClick={() => setStatusFilter('resolved')}
              className={cn(
                'px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors',
                statusFilter === 'resolved'
                  ? 'bg-surface-elevated text-emerald-400 font-semibold'
                  : 'text-content-muted hover:text-content-primary'
              )}
            >
              Resolved ({mistakes.filter((m) => m.resolved).length})
            </button>
          </div>
        </div>
      </div>

      {/* Mistake Entries List */}
      <div className="space-y-4">
        {filteredMistakes.length === 0 ? (
          <div className="py-16 text-center bg-surface-primary rounded-xl border border-dashed border-border-default">
            <BookOpen className="w-8 h-8 text-content-muted mx-auto mb-3 opacity-60" />
            <p className="text-sm font-semibold text-content-primary">
              No mistakes match your criteria.
            </p>
            <p className="text-xs text-content-muted mt-1">
              Log mistakes made during daily problem solving to turn them into prevention rules.
            </p>
            <Button size="sm" variant="primary" onClick={handleCreate} className="mt-4">
              Log First Mistake
            </Button>
          </div>
        ) : (
          filteredMistakes.map((m) => (
            <Card
              key={m.id}
              elevated
              className={cn(
                'p-5 space-y-3 transition-all',
                m.resolved ? 'opacity-75 border-border-subtle' : 'border-rose-500/25'
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold text-content-primary">{m.problemTitle}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-semibold">
                    {m.category}
                  </span>
                  <span className="text-[10px] font-mono text-content-muted px-2 py-0.5 rounded bg-surface-secondary border border-border-subtle">
                    {m.pattern}
                  </span>
                  <span className="text-[10px] font-mono text-content-muted">{m.date}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => toggleMistakeResolved(m.id)}
                    className={cn(
                      'px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors flex items-center gap-1 border',
                      m.resolved
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-surface-secondary text-content-muted border-border-subtle hover:text-content-primary'
                    )}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{m.resolved ? 'Resolved' : 'Mark Resolved'}</span>
                  </button>

                  <button
                    onClick={() => handleEdit(m)}
                    className="p-1.5 rounded text-content-muted hover:text-content-primary hover:bg-surface-elevated"
                    title="Edit mistake"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => deleteMistake(m.id)}
                    className="p-1.5 rounded text-content-muted hover:text-rose-400 hover:bg-surface-elevated"
                    title="Delete mistake"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* What went wrong & Correct reasoning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-surface-secondary/70 border border-border-subtle">
                  <div className="text-[10px] font-mono uppercase text-content-muted mb-1">
                    What Went Wrong:
                  </div>
                  <p className="text-content-secondary leading-relaxed">{m.whatWentWrong}</p>
                </div>

                <div className="p-3 rounded-lg bg-surface-secondary/70 border border-border-subtle">
                  <div className="text-[10px] font-mono uppercase text-content-muted mb-1">
                    Correct Reasoning:
                  </div>
                  <p className="text-content-secondary leading-relaxed">
                    {m.correctReasoning || 'Identified correct invariant logic.'}
                  </p>
                </div>
              </div>

              {/* Register Prevention Rule */}
              <div className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/20 text-xs">
                <span className="font-semibold text-amber-300 font-mono text-[11px] block mb-0.5">
                  HANDWRITTEN REGISTER RULE:
                </span>
                <p className="text-amber-200/90 font-mono text-[11px] leading-relaxed">
                  {m.preventionRule}
                </p>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Modal */}
      <MistakeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editingMistake={editingMistake}
      />
    </div>
  );
};
