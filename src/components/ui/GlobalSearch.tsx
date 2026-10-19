import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { PROBLEMS } from '../../data/problems';
import { ROADMAP_DAYS } from '../../data/curriculum';
import { PATTERNS } from '../../data/patterns';
import { Search, Code2, MapPin, AlertCircle, BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { DifficultyBadge } from './Badge';

export const GlobalSearch: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, mistakes, revisionQueue } = useApp();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [
        { type: 'quick', title: "Today's Study Session", path: '/today', icon: BookOpen, subtitle: 'Direct command center workspace' },
        { type: 'quick', title: '70-Day Curriculum Roadmap', path: '/roadmap', icon: MapPin, subtitle: 'Timeline & pattern dependency map' },
        { type: 'quick', title: 'Spaced Revision Queue', path: '/revision', icon: Clock, subtitle: `${revisionQueue.length} items awaiting review` },
        { type: 'quick', title: 'Mistake Journal', path: '/mistakes', icon: AlertCircle, subtitle: `${mistakes.length} recorded rules` },
        { type: 'quick', title: 'Pattern Library', path: '/patterns', icon: Code2, subtitle: `${PATTERNS.length} core algorithmic patterns` },
      ];
    }

    const items: Array<{
      type: string;
      title: string;
      subtitle: string;
      path: string;
      icon: any;
      badge?: any;
    }> = [];

    // Search Problems
    PROBLEMS.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.slug.includes(q) ||
        String(p.leetcodeNumber) === q ||
        p.primaryPattern.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'problem',
          title: `${p.leetcodeNumber ? `#${p.leetcodeNumber} ` : ''}${p.title}`,
          subtitle: `Pattern: ${p.primaryPattern.replace('-', ' ')}`,
          path: `/problems?search=${encodeURIComponent(p.title)}`,
          icon: Code2,
          badge: <DifficultyBadge difficulty={p.difficulty} />,
        });
      }
    });

    // Search Patterns
    PATTERNS.forEach((pat) => {
      if (
        pat.name.toLowerCase().includes(q) ||
        pat.coreIdea.toLowerCase().includes(q) ||
        pat.category.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'pattern',
          title: pat.name,
          subtitle: `${pat.category} — ${pat.coreIdea.slice(0, 60)}...`,
          path: `/patterns?search=${encodeURIComponent(pat.name)}`,
          icon: BookOpen,
        });
      }
    });

    // Search Roadmap Days
    ROADMAP_DAYS.forEach((d) => {
      if (
        d.title.toLowerCase().includes(q) ||
        `day ${d.dayNumber}`.includes(q) ||
        d.phase.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'day',
          title: `Day ${d.dayNumber}: ${d.title}`,
          subtitle: `${d.phase} • ${d.assignments.length} assignments`,
          path: `/roadmap/day/${d.dayNumber}`,
          icon: MapPin,
        });
      }
    });

    // Search Mistakes
    mistakes.forEach((m) => {
      if (
        m.problemTitle.toLowerCase().includes(q) ||
        m.whatWentWrong.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'mistake',
          title: `Mistake: ${m.problemTitle} (${m.category})`,
          subtitle: m.preventionRule,
          path: '/mistakes',
          icon: AlertCircle,
        });
      }
    });

    return items.slice(0, 15);
  }, [query, mistakes, revisionQueue]);

  const handleSelect = (path: string) => {
    setIsSearchOpen(false);
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex].path);
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      <div
        className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div
        className="relative w-full max-w-xl glass-panel-elevated overflow-hidden z-10 flex flex-col max-h-[75vh] shadow-glass-elevated animate-scaleIn border border-surface-border"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-border bg-surface-interactive/30">
          <Search className="w-4 h-4 text-content-muted mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search problems, patterns, days, mistakes... (↑↓ navigate, ↵ select)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-content-primary placeholder-content-muted focus:outline-none font-sans"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-content-muted hover:text-content-primary"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="px-2 py-0.5 text-[10px] font-mono text-content-muted glass-control rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-surface-border/40">
          {results.length === 0 ? (
            <div className="py-12 text-center text-xs text-content-muted">
              No matching results found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={`${item.type}-${idx}`}
                  onClick={() => handleSelect(item.path)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                    isSelected ? 'bg-primary/15 text-content-primary border border-primary/25' : 'text-content-secondary hover:bg-surface-interactive'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-primary/20 text-primary' : 'glass-control text-content-muted'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-semibold text-content-primary truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.badge}
                      </div>
                      <div className="text-[11px] text-content-muted truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ml-2 transition-transform ${isSelected ? 'opacity-100 translate-x-0.5 text-primary' : 'opacity-0'}`} />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-surface-border bg-surface-interactive/20 flex items-center justify-between text-[11px] text-content-muted font-mono">
          <div className="flex items-center gap-3">
            <span>[↑↓] navigate</span>
            <span>[↵] select</span>
            <span>[esc] dismiss</span>
          </div>
          <span>ALGORITHMA Cockpit</span>
        </div>
      </div>
    </div>
  );
};
