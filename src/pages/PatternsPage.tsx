import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PATTERNS } from '../data/patterns';
import { PROBLEMS } from '../data/problems';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Search, ChevronDown, ChevronUp, Layers, CheckCircle2, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

export const PatternsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const { analytics, problemStatuses } = useApp();

  const [query, setQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedPatternId, setExpandedPatternId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    PATTERNS.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  const filteredPatterns = useMemo(() => {
    return PATTERNS.filter((p) => {
      const q = query.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.id.includes(q) ||
        p.coreIdea.toLowerCase().includes(q) ||
        p.recognitionSignals.some((s) => s.toLowerCase().includes(q));

      const matchCategory =
        selectedCategory === 'all' || p.category === selectedCategory;

      return matchQuery && matchCategory;
    });
  }, [query, selectedCategory]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-border-subtle pb-5">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
          DSA Pattern Library
        </h2>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Deep architectural blueprints for every major Data Structure & Algorithm pattern. Invariants,
          recognition signals, failure modes, and canonical C++ & Python templates.
        </p>
      </div>

      {/* Search and Category Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-secondary/40 p-4 rounded-xl border border-border-subtle">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-content-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search pattern name, concept, signals, complexity..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface-secondary border border-border-default rounded-lg pl-9 pr-3 py-2 text-xs text-content-primary placeholder-content-muted focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-content-muted font-medium">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary font-mono"
          >
            <option value="all">All Categories ({PATTERNS.length} Patterns)</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pattern Cards List */}
      <div className="space-y-4">
        {filteredPatterns.map((pattern) => {
          const isExpanded = expandedPatternId === pattern.id;
          const stat = analytics.patternMastery.find((pm) => pm.pattern === pattern.id);
          const solvedCount = stat?.solved || 0;
          const totalCount = stat?.total || 0;
          const relatedProblems = PROBLEMS.filter((pr) => pr.primaryPattern === pattern.id).slice(0, 6);

          return (
            <Card key={pattern.id} elevated className="overflow-hidden">
              <div
                onClick={() => setExpandedPatternId(isExpanded ? null : pattern.id)}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-surface-secondary/30 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>

                  <div className="truncate flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-bold text-content-primary">
                        {pattern.name}
                      </h3>
                      <span className="text-[11px] font-mono text-content-muted px-2 py-0.5 rounded bg-surface-secondary border border-border-subtle">
                        {pattern.category}
                      </span>
                    </div>
                    <p className="text-xs text-content-secondary mt-1 line-clamp-1">
                      {pattern.coreIdea}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                  <div className="text-right font-mono text-xs">
                    <div className="text-content-primary font-semibold">
                      {solvedCount} / {totalCount} solved
                    </div>
                    <div className="text-[10px] text-content-muted">
                      {pattern.timeComplexity.split(',')[0]}
                    </div>
                  </div>

                  <button className="p-1 rounded text-content-muted hover:text-content-primary">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Pattern Details Drawer */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-border-subtle space-y-4 text-xs">
                  {/* Recognition Signals */}
                  <div>
                    <h4 className="font-semibold text-content-primary uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5 text-indigo-400">
                      <BookOpen className="w-3.5 h-3.5" />
                      Recognition Signals (When to Identify)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pattern.recognitionSignals.map((signal, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-surface-secondary/60 border border-border-subtle text-content-secondary leading-relaxed"
                        >
                          <span className="text-primary font-bold mr-1.5">✓</span>
                          {signal}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* When to use vs when NOT to use */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/20">
                      <div className="font-semibold text-emerald-400 mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>When to Apply</span>
                      </div>
                      <ul className="space-y-1 text-content-secondary list-disc list-inside">
                        {pattern.whenToUse.map((u, i) => (
                          <li key={i}>{u}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-500/[0.04] border border-rose-500/20">
                      <div className="font-semibold text-rose-400 mb-1.5 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>When NOT to Use (Common Anti-Patterns)</span>
                      </div>
                      <ul className="space-y-1 text-content-secondary list-disc list-inside">
                        {pattern.whenNotToUse.map((nu, i) => (
                          <li key={i}>{nu}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Common Failure Modes & Register Mistakes */}
                  <div className="p-3 rounded-lg bg-surface-secondary border border-border-subtle">
                    <div className="font-semibold text-amber-300 mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Frequent Pitfalls & Register Invariants</span>
                    </div>
                    <ul className="space-y-1 text-content-secondary font-mono text-[11px]">
                      {pattern.commonMistakes.map((cm, i) => (
                        <li key={i}>• {cm}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Code Implementations */}
                  <div>
                    <h4 className="font-semibold text-content-primary uppercase tracking-wider text-[11px] mb-2">
                      Reference Code Template
                    </h4>
                    <CodeBlock
                      cppCode={pattern.cppSnippet}
                      pythonCode={pattern.pythonSnippet}
                      defaultLanguage="C++"
                      title={`${pattern.name} Implementation`}
                    />
                  </div>

                  {/* Related Problems in Roadmap */}
                  {relatedProblems.length > 0 && (
                    <div className="pt-2">
                      <h4 className="font-semibold text-content-primary uppercase tracking-wider text-[11px] mb-2">
                        Benchmark Problems for this Pattern
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedProblems.map((rp) => (
                          <a
                            key={rp.id}
                            href={rp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-secondary hover:bg-surface-elevated border border-border-default text-xs text-content-primary transition-colors group"
                          >
                            <span>
                              #{rp.leetcodeNumber} {rp.title}
                            </span>
                            <ExternalLink className="w-3 h-3 text-content-muted group-hover:text-primary" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
