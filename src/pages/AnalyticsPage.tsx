import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  Brain,
  CheckCircle2,
  RotateCcw,
  AlertTriangle,
  Target,
  Flame,
} from 'lucide-react';
import { ActivityHeatmap } from '../components/dashboard/ActivityHeatmap';

export const AnalyticsPage: React.FC = () => {
  const { analytics, completedDays, revisionQueue, mistakes, theme } = useApp();

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const tooltipStyle = {
    backgroundColor: isDark ? 'rgba(21, 29, 47, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(203, 213, 225, 0.8)',
    borderRadius: '12px',
    boxShadow: isDark ? '0 12px 36px rgba(0, 0, 0, 0.5)' : '0 12px 36px rgba(100, 116, 139, 0.15)',
    fontSize: '12px',
    color: isDark ? '#f8fafc' : '#0f172a',
    backdropFilter: 'blur(16px)',
  };

  const axisStroke = isDark ? '#64748b' : '#94a3b8';
  const totalBarFill = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';

  // Difficulty chart data
  const difficultyData = useMemo(() => [
    {
      name: 'Easy',
      solved: analytics.difficultyBreakdown.easy.solved,
      total: analytics.difficultyBreakdown.easy.total,
      color: '#10B981',
    },
    {
      name: 'Medium',
      solved: analytics.difficultyBreakdown.medium.solved,
      total: analytics.difficultyBreakdown.medium.total,
      color: '#F59E0B',
    },
    {
      name: 'Hard',
      solved: analytics.difficultyBreakdown.hard.solved,
      total: analytics.difficultyBreakdown.hard.total,
      color: '#EF4444',
    },
  ], [analytics]);

  // Method distribution data
  const methodData = useMemo(() => [
    { name: 'Solved Solo', value: analytics.solvedIndependentCount, color: '#10B981' },
    { name: 'With Hint', value: analytics.solvedWithHintsCount, color: '#F59E0B' },
    { name: 'Solution Viewed', value: analytics.solutionViewedCount, color: '#A855F7' },
  ].filter((d) => d.value > 0), [analytics]);

  // Top patterns data for chart
  const topPatternsData = useMemo(() => {
    return analytics.patternMastery
      .slice(0, 8)
      .map((p) => ({
        name: p.pattern.replace('-', ' '),
        mastery: p.masteryRate,
        solved: p.solved,
        total: p.total,
      }));
  }, [analytics]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-border-subtle/80 pb-5">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
          Preparation Analytics & Mastery Metrics
        </h2>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Zero fabricated data. Derived strictly from your active study sessions, independent solve
          rate, spaced repetition retention, and mistake resolutions.
        </p>
      </div>

      {/* Top Level Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-content-muted font-medium">
            <span>Mastery Score</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3 text-3xl font-mono font-bold text-content-primary">
            {analytics.masteryScore}
            <span className="text-xs text-content-muted">/100</span>
          </div>
          <div className="text-[11px] text-content-secondary mt-2 font-mono">
            Weighted on independent solve rigor
          </div>
        </Card>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-content-muted font-medium">
            <span>Independent Solves</span>
            <Brain className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="mt-3 text-3xl font-mono font-bold text-content-primary">
            {analytics.independentSolveRate}%
          </div>
          <div className="text-[11px] text-content-secondary mt-2 font-mono">
            {analytics.solvedIndependentCount} solo solves recorded
          </div>
        </Card>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-content-muted font-medium">
            <span>Roadmap Completion</span>
            <Target className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-3 text-3xl font-mono font-bold text-content-primary">
            {analytics.roadmapPercentage}%
          </div>
          <div className="text-[11px] text-content-secondary mt-2 font-mono">
            {completedDays.length} of 70 days completed
          </div>
        </Card>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-content-muted font-medium">
            <span>Current Streak</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-3 text-3xl font-mono font-bold text-content-primary">
            {analytics.currentStreak}
            <span className="text-xs text-content-muted"> days</span>
          </div>
          <div className="text-[11px] text-content-secondary mt-2 font-mono">
            Longest streak: {analytics.longestStreak} days
          </div>
        </Card>
      </div>

      {/* Flagship Hacker Blue Practice Heatmap */}
      <ActivityHeatmap defaultView="calendar" />

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Difficulty Breakdown Bar Chart */}
        <Card elevated className="p-5">
          <CardHeader className="p-0 pb-4 border-b border-border-subtle/80 mb-4">
            <div>
              <h3 className="text-sm font-semibold text-content-primary">
                Problem Solved by Difficulty
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Comparison of solved vs total problems in canonical catalog
              </p>
            </div>
          </CardHeader>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke={axisStroke} fontSize={11} />
                <YAxis stroke={axisStroke} fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="solved" fill="#6875F5" radius={[6, 6, 0, 0]} name="Solved" />
                <Bar dataKey="total" fill={totalBarFill} radius={[6, 6, 0, 0]} name="Total In Catalog" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Method Distribution (Solo vs Hints vs Solution) */}
        <Card elevated className="p-5">
          <CardHeader className="p-0 pb-4 border-b border-border-subtle/80 mb-4">
            <div>
              <h3 className="text-sm font-semibold text-content-primary">
                Solve Rigor & Independence Breakdown
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Evaluates authentic problem-solving without cognitive crutches
              </p>
            </div>
          </CardHeader>

          {methodData.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-xs text-content-muted">
              <Brain className="w-8 h-8 opacity-40 mb-2" />
              <span>No problem status data logged yet.</span>
              <span className="text-[11px] mt-1">Start practicing in Day 1 to populate this chart.</span>
            </div>
          ) : (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={methodData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {methodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => (
                      <span className="text-xs text-content-secondary font-sans">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>
      </div>

      {/* Pattern Mastery Horizontal Bars */}
      <Card elevated className="p-5">
        <CardHeader className="p-0 pb-4 border-b border-border-subtle mb-4">
          <div>
            <h3 className="text-sm font-semibold text-content-primary">
              Pattern Completion Distribution
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Identifies your strongest and weakest algorithmic patterns
            </p>
          </div>
        </CardHeader>

        <div className="space-y-3">
          {topPatternsData.map((pat) => (
            <div key={pat.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-content-primary font-medium capitalize">{pat.name}</span>
                <span className="text-content-muted">
                  {pat.solved} / {pat.total} ({pat.mastery}%)
                </span>
              </div>
              <div className="w-full bg-surface-secondary h-2 rounded-full overflow-hidden border border-border-subtle">
                <div
                  className="bg-primary h-full transition-all duration-300"
                  style={{ width: `${Math.max(3, pat.mastery)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Transparent Mastery Score Methodology */}
      <Card className="p-5 border-border-subtle bg-surface-secondary/30">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-content-secondary mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>Transparent Mathematical Scoring Formula</span>
        </h3>
        <p className="text-xs text-content-secondary leading-relaxed mb-3">
          ALGORITHMA does not award mastery simply for ticking checkboxes or browsing solutions. The
          mastery score is mathematically formulated across 5 concrete vectors:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-surface-primary border border-border-subtle">
            <span className="text-emerald-400 font-bold block mb-1">40% Independent Rigor</span>
            <p className="text-content-muted text-[11px]">
              Rewards solving problems solo without hint or editorial assistance.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-surface-primary border border-border-subtle">
            <span className="text-indigo-400 font-bold block mb-1">30% Curriculum Depth</span>
            <p className="text-content-muted text-[11px]">
              Roadmap completion volume & Medium/Hard difficulty coverage.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-surface-primary border border-border-subtle">
            <span className="text-amber-400 font-bold block mb-1">30% Retention & Rectification</span>
            <p className="text-content-muted text-[11px]">
              Spaced repetition success & resolving recorded mistakes in journal.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
