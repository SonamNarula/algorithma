import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { MistakeEntry, MistakeCategory } from '../../types/mistake';
import { PROBLEMS } from '../../data/problems';
import { Dialog } from '../ui/Dialog';
import { Button } from '../ui/Button';

interface MistakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProblemId?: string;
  initialProblemTitle?: string;
  initialPattern?: string;
  editingMistake?: MistakeEntry;
}

const CATEGORIES: MistakeCategory[] = [
  'Wrong pattern',
  'Incorrect approach',
  'Off-by-one error',
  'Incorrect boundary',
  'Wrong loop condition',
  'Data structure selection',
  'Integer overflow',
  'Complexity mistake',
  'Edge-case failure',
  'Implementation bug',
  'Time-limit exceeded',
  'Memorized without understanding',
];

export const MistakeModal: React.FC<MistakeModalProps> = ({
  isOpen,
  onClose,
  initialProblemId = '',
  initialProblemTitle = '',
  initialPattern = '',
  editingMistake,
}) => {
  const { recordMistake, updateMistake } = useApp();

  const [problemId, setProblemId] = useState(initialProblemId);
  const [problemTitle, setProblemTitle] = useState(initialProblemTitle);
  const [pattern, setPattern] = useState(initialPattern);
  const [category, setCategory] = useState<MistakeCategory>('Edge-case failure');
  const [whatWentWrong, setWhatWentWrong] = useState('');
  const [correctReasoning, setCorrectReasoning] = useState('');
  const [preventionRule, setPreventionRule] = useState('');
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (editingMistake) {
      setProblemId(editingMistake.problemId);
      setProblemTitle(editingMistake.problemTitle);
      setPattern(editingMistake.pattern);
      setCategory(editingMistake.category);
      setWhatWentWrong(editingMistake.whatWentWrong);
      setCorrectReasoning(editingMistake.correctReasoning);
      setPreventionRule(editingMistake.preventionRule);
      setResolved(editingMistake.resolved);
    } else {
      setProblemId(initialProblemId);
      setProblemTitle(initialProblemTitle);
      setPattern(initialPattern);
      setCategory('Edge-case failure');
      setWhatWentWrong('');
      setCorrectReasoning('');
      setPreventionRule('');
      setResolved(false);
    }
  }, [editingMistake, initialProblemId, initialProblemTitle, initialPattern, isOpen]);

  const handleSelectProblem = (id: string) => {
    setProblemId(id);
    const p = PROBLEMS.find((prob) => prob.id === id);
    if (p) {
      setProblemTitle(p.title);
      setPattern(p.primaryPattern);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problemTitle || !whatWentWrong || !preventionRule) return;

    if (editingMistake) {
      await updateMistake({
        ...editingMistake,
        problemId: problemId || 'general',
        problemTitle,
        pattern: pattern || 'general',
        category,
        whatWentWrong,
        correctReasoning,
        preventionRule,
        resolved,
      });
    } else {
      await recordMistake({
        problemId: problemId || 'general',
        problemTitle,
        pattern: pattern || 'general',
        date: new Date().toISOString().split('T')[0],
        category,
        whatWentWrong,
        correctReasoning,
        preventionRule,
        resolved,
      });
    }

    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={editingMistake ? 'Edit Mistake Entry' : 'Log a Mistake to Journal'}
      description="Track the exact cognitive trap, boundary mistake, or bug to permanently commit the correction to memory."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Problem selection */}
        <div>
          <label className="block text-xs font-medium text-content-secondary mb-1">
            Related Problem
          </label>
          <div className="flex gap-2">
            <select
              value={problemId}
              onChange={(e) => handleSelectProblem(e.target.value)}
              className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary"
            >
              <option value="">-- Choose from Problem Catalog (or enter manually) --</option>
              {PROBLEMS.slice(0, 100).map((p) => (
                <option key={p.id} value={p.id}>
                  #{p.leetcodeNumber} {p.title} ({p.difficulty})
                </option>
              ))}
            </select>
          </div>
          {!problemId && (
            <input
              type="text"
              placeholder="Or custom problem title / topic"
              value={problemTitle}
              onChange={(e) => setProblemTitle(e.target.value)}
              className="mt-2 w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary"
              required
            />
          )}
        </div>

        {/* Category & Pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-content-secondary mb-1">
              Mistake Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as MistakeCategory)}
              className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary font-mono"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-content-secondary mb-1">
              DSA Pattern
            </label>
            <input
              type="text"
              placeholder="e.g. two-pointers, prefix-sum"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* What went wrong */}
        <div>
          <label className="block text-xs font-medium text-content-secondary mb-1">
            What went wrong? (My initial incorrect thought process)
          </label>
          <textarea
            rows={2}
            value={whatWentWrong}
            onChange={(e) => setWhatWentWrong(e.target.value)}
            placeholder="e.g. I assumed sliding window would work on negative numbers, but shrinking left didn't monotonically decrease the sum."
            className="w-full bg-surface-secondary border border-border-default rounded-lg p-2.5 text-xs text-content-primary focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Correct reasoning */}
        <div>
          <label className="block text-xs font-medium text-content-secondary mb-1">
            Correct Reasoning (The actual invariant)
          </label>
          <textarea
            rows={2}
            value={correctReasoning}
            onChange={(e) => setCorrectReasoning(e.target.value)}
            placeholder="e.g. Prefix sum with Hash Map of running modulo remainders allows O(1) subarray sum query regardless of negative values."
            className="w-full bg-surface-secondary border border-border-default rounded-lg p-2.5 text-xs text-content-primary focus:outline-none focus:border-primary"
          />
        </div>

        {/* Prevention rule */}
        <div>
          <label className="block text-xs font-medium text-content-secondary mb-1">
            Prevention Rule (Handwritten Register Takeaway)
          </label>
          <textarea
            rows={2}
            value={preventionRule}
            onChange={(e) => setPreventionRule(e.target.value)}
            placeholder="e.g. RULE: If array has negative elements and asks for subarray sum == K, IMMEDIATELY rule out sliding window; use Prefix Sum + Map!"
            className="w-full bg-surface-secondary border border-border-default rounded-lg p-2.5 text-xs text-content-primary focus:outline-none focus:border-primary font-mono text-amber-300/90"
            required
          />
        </div>

        {/* Resolved checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="mistake-resolved"
            checked={resolved}
            onChange={(e) => setResolved(e.target.checked)}
            className="rounded border-border-default bg-surface-secondary text-primary focus:ring-primary/40"
          />
          <label htmlFor="mistake-resolved" className="text-xs text-content-secondary select-none">
            Mark this mistake as resolved (I have re-solved the problem independently)
          </label>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-border-subtle">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {editingMistake ? 'Update Mistake' : 'Save to Journal'}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};
