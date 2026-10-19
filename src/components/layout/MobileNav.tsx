import React from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Map,
  CalendarCheck,
  ListOrdered,
  Layers,
  RotateCcw,
  AlertTriangle,
  BarChart3,
  CalendarDays,
  Settings,
  X,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { profile, revisionQueue, mistakes, analytics } = useApp();

  if (!isOpen) return null;

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Roadmap', path: '/roadmap', icon: Map, badge: `${analytics.roadmapPercentage}%` },
    { label: "Today's Session", path: '/today', icon: CalendarCheck, highlight: true },
    { label: 'Problem Explorer', path: '/problems', icon: ListOrdered },
    { label: 'Pattern Library', path: '/patterns', icon: Layers },
    {
      label: 'Revision Queue',
      path: '/revision',
      icon: RotateCcw,
      count: revisionQueue.filter((r) => !r.isCompleted).length,
    },
    {
      label: 'Mistake Journal',
      path: '/mistakes',
      icon: AlertTriangle,
      count: mistakes.filter((m) => !m.resolved).length,
    },
    { label: 'Analytics', path: '/analytics', icon: BarChart3 },
    { label: 'Calendar', path: '/calendar', icon: CalendarDays },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-72 max-w-[80vw] glass-panel-elevated border-r border-border-glass h-full flex flex-col z-10 shadow-elevated">
        <div className="h-16 px-4 flex items-center justify-between border-b border-border-subtle/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary/20 to-accent-cyan/20 border border-primary/30 flex items-center justify-center text-primary shadow-glow-sm">
              <Sparkles className="w-4 h-4 fill-primary/20 text-primary" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-wider font-mono text-content-primary">
                ALGORITHMA
              </span>
              <span className="block text-[10px] text-content-muted">
                {profile.name}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-content-muted hover:text-content-primary hover:bg-surface-glass-interactive"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-white font-semibold shadow-glow-sm'
                      : 'text-content-secondary hover:text-content-primary hover:bg-surface-glass-interactive'
                  )
                }
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1">{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-500 border border-amber-500/30">
                    {item.count}
                  </span>
                )}
                {item.badge && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-surface-glass text-content-muted border border-border-subtle">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border-subtle/80 text-xs text-content-muted bg-surface-glass/40">
          <div className="font-mono text-[11px] text-content-secondary">
            Primary: {profile.primaryLanguage} | Secondary: {profile.secondaryLanguage}
          </div>
          <div className="text-[10px] text-content-muted mt-1">
            "Recognize the pattern. Understand the logic. Master the problem."
          </div>
        </div>
      </div>
    </div>
  );
};
