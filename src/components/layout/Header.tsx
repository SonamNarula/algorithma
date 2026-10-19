import React from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Search, Flame, Menu, CheckCircle2, Sun, Moon } from 'lucide-react';
import { FocusTimer } from '../ui/FocusTimer';

interface HeaderProps {
  onOpenMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav }) => {
  const { setIsSearchOpen, analytics, theme, toggleTheme } = useApp();
  const location = useLocation();

  const getPageTitle = (path: string) => {
    if (path === '/dashboard' || path === '/') return 'Command Center';
    if (path.startsWith('/roadmap/day/')) {
      const dayNum = path.split('/')[3];
      return `Day ${dayNum} Study Workspace`;
    }
    if (path === '/roadmap') return '70-Day Curriculum Roadmap';
    if (path === '/today') return "Today's Study Session";
    if (path === '/problems') return 'Problem Explorer';
    if (path === '/patterns') return 'DSA Pattern Library';
    if (path === '/revision') return 'Spaced Revision Queue';
    if (path === '/mistakes') return 'Mistake Journal & Register';
    if (path === '/analytics') return 'Performance Analytics';
    if (path === '/calendar') return 'Preparation Calendar';
    if (path === '/settings') return 'Personal Settings';
    return 'ALGORITHMA';
  };

  const isDarkMode =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <header className="h-16 px-4 md:px-6 glass-nav flex items-center justify-between sticky top-0 z-20 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="md:hidden p-1.5 rounded-xl text-content-secondary hover:text-content-primary hover:bg-surface-interactive transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan hidden sm:inline-block" />
          <h1 className="text-sm md:text-base font-bold text-content-primary tracking-tight">
            {getPageTitle(location.pathname)}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Cmd+K Search Trigger */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-control text-xs text-content-muted hover:text-content-primary font-sans shadow-sm"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-mono glass-control rounded text-content-secondary">
            ⌘K
          </kbd>
        </button>

        {/* Compact Focus Timer */}
        <FocusTimer compact />

        {/* Streak Pill */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-control text-xs font-mono shadow-sm"
          title={`Current practice streak: ${analytics.currentStreak} days`}
        >
          <Flame
            className={`w-3.5 h-3.5 ${
              analytics.currentStreak > 0 ? 'text-amber-500 fill-amber-500/20' : 'text-content-muted'
            }`}
          />
          <span className="font-semibold text-content-primary tabular-nums">
            {analytics.currentStreak}d
          </span>
        </div>

        {/* Solved Progress Pill */}
        <div
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-control text-xs font-mono text-content-secondary shadow-sm"
          title={`${analytics.uniqueProblemsSolved} unique problems solved out of ${analytics.totalUniqueProblems}`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>
            <strong className="text-content-primary tabular-nums">{analytics.uniqueProblemsSolved}</strong> / {analytics.totalUniqueProblems}
          </span>
        </div>

        {/* Theme Toggle (Light / Dark Mode) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl glass-control text-content-secondary hover:text-content-primary transition-all active:scale-95 shadow-sm"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 transition-transform -rotate-12 hover:rotate-0" />
          )}
        </button>
      </div>
    </header>
  );
};
