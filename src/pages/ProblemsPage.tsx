import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PROBLEMS } from '../data/problems';
import { PATTERNS } from '../data/patterns';
import { ProblemCard } from '../components/problem/ProblemCard';
import { Difficulty, ProblemStatus } from '../types/curriculum';
import { Search, Filter, ArrowUpDown, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ProblemsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const { problemStatuses } = useApp();
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedPattern, setSelectedPattern] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'number' | 'difficulty' | 'title'>('number');

  // Filtered problems list
  const filteredProblems = useMemo(() => {
    return PROBLEMS.filter((p) => {
      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        String(p.leetcodeNumber) === q ||
        p.primaryPattern.toLowerCase().includes(q);

      // Difficulty match
      const matchDiff =
        selectedDifficulty === 'all' || p.difficulty === selectedDifficulty;

      // Pattern match
      const matchPattern =
        selectedPattern === 'all' || p.primaryPattern === selectedPattern;

      // Status match
      const st = problemStatuses[p.id] || 'not-started';
      const matchStatus = selectedStatus === 'all' || st === selectedStatus;

      return matchSearch && matchDiff && matchPattern && matchStatus;
    }).sort((a, b) => {
      if (sortBy === 'number') {
        return (a.leetcodeNumber || 9999) - (b.leetcodeNumber || 9999);
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'difficulty') {
        const order: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
        return order[a.difficulty] - order[b.difficulty];
      }
      return 0;
    });
  }, [searchQuery, selectedDifficulty, selectedPattern, selectedStatus, sortBy, problemStatuses]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedPattern('all');
    setSelectedStatus('all');
    setSearchParams({});
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-border-subtle pb-5">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
          Problem Explorer
        </h2>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Explore the canonical database of verified LeetCode problems with direct links, status
          tracking, register notes, and C++/Python solutions.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-3 bg-surface-secondary/40 p-4 rounded-xl border border-border-subtle">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-content-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, #number, slug, pattern..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-secondary border border-border-default rounded-lg pl-9 pr-3 py-2 text-xs text-content-primary placeholder-content-muted focus:outline-none focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-content-muted hover:text-content-primary"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-content-muted shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary font-mono"
            >
              <option value="number">Sort by LeetCode #</option>
              <option value="difficulty">Sort by Difficulty</option>
              <option value="title">Sort by Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Difficulty */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-content-muted font-medium">Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-surface-secondary border border-border-default rounded-lg px-2.5 py-1 text-xs text-content-primary focus:outline-none focus:border-primary"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Pattern */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-content-muted font-medium">Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="bg-surface-secondary border border-border-default rounded-lg px-2.5 py-1 text-xs text-content-primary focus:outline-none focus:border-primary"
            >
              <option value="all">All Patterns</option>
              {PATTERNS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-content-muted font-medium">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-surface-secondary border border-border-default rounded-lg px-2.5 py-1 text-xs text-content-primary focus:outline-none focus:border-primary"
            >
              <option value="all">All Statuses</option>
              <option value="not-started">Not Started</option>
              <option value="solved-independent">Solved Solo</option>
              <option value="solved-with-hints">Solved w/ Hint</option>
              <option value="solution-viewed">Solution Viewed</option>
              <option value="needs-revision">Needs Revision</option>
            </select>
          </div>

          {(searchQuery ||
            selectedDifficulty !== 'all' ||
            selectedPattern !== 'all' ||
            selectedStatus !== 'all') && (
            <Button size="sm" variant="ghost" onClick={clearFilters} className="text-xs">
              <X className="w-3.5 h-3.5 mr-1" />
              <span>Reset Filters</span>
            </Button>
          )}

          <div className="ml-auto text-xs font-mono text-content-muted">
            Showing <strong className="text-content-primary">{filteredProblems.length}</strong> of{' '}
            {PROBLEMS.length} problems
          </div>
        </div>
      </div>

      {/* Problem Cards List */}
      <div className="space-y-3">
        {filteredProblems.length === 0 ? (
          <div className="py-16 text-center bg-surface-primary rounded-xl border border-dashed border-border-default">
            <Filter className="w-8 h-8 text-content-muted mx-auto mb-3 opacity-60" />
            <p className="text-sm font-semibold text-content-primary">
              No matching problems found
            </p>
            <p className="text-xs text-content-muted mt-1">
              Try adjusting your query or resetting the filters.
            </p>
            <Button size="sm" variant="secondary" onClick={clearFilters} className="mt-4">
              Clear All Filters
            </Button>
          </div>
        ) : (
          filteredProblems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))
        )}
      </div>
    </div>
  );
};
