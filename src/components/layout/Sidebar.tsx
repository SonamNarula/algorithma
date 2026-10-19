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
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleCollapse }) => {
  const { profile, revisionQueue, mistakes, analytics } = useApp();

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
    <aside
      className={cn(
        'hidden md:flex flex-col glass-nav border-r border-border-glass transition-all duration-300 z-30 select-none shrink-0 relative',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-border-subtle/80">
        <NavLink to="/dashboard" className="flex items-center gap-2.5 overflow-hidden group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary/20 to-accent-cyan/20 border border-primary/30 flex items-center justify-center shrink-0 text-primary shadow-glow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 fill-primary/20 text-primary" />
          </div>
          {!collapsed && (
            <div className="truncate">
              <span className="text-sm font-bold tracking-wider font-mono text-content-primary">
                ALGORITHMA
              </span>
              <span className="block text-[10px] text-content-muted tracking-tight truncate">
                Command Center
              </span>
            </div>
          )}
        </NavLink>

        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-content-muted hover:text-content-primary hover:bg-surface-glass-interactive transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-2.5 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all group relative',
                  isActive
                    ? 'bg-primary text-white font-semibold shadow-glow-sm'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-glass-interactive',
                  item.highlight && !isActive && 'text-primary'
                )
              }
            >
              <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />

              {!collapsed && (
                <span className="truncate flex-1">{item.label}</span>
              )}

              {!collapsed && item.count !== undefined && item.count > 0 && (
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/20 text-amber-500 border border-amber-500/30">
                  {item.count}
                </span>
              )}

              {!collapsed && item.badge && (
                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-content-muted bg-surface-glass border border-border-subtle">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Footer Profile */}
      <div className="p-3 border-t border-border-subtle/80 bg-surface-glass/40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center text-white font-semibold text-xs shrink-0 shadow-sm">
            {profile.name.charAt(0)}
          </div>
          {!collapsed && (
            <div className="truncate flex-1">
              <div className="text-xs font-medium text-content-primary truncate">
                {profile.name}
              </div>
              <div className="text-[10px] text-content-muted font-mono flex items-center gap-1.5">
                <span className="text-emerald-500 font-medium">{profile.primaryLanguage}</span>
                <span>•</span>
                <span>{profile.secondaryLanguage}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
