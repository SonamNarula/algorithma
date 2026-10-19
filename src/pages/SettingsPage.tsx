import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Dialog } from '../components/ui/Dialog';
import {
  Settings,
  Download,
  Upload,
  RotateCcw,
  Check,
  AlertTriangle,
  ShieldCheck,
  User,
  Code2,
  Sun,
  Moon,
  Monitor,
  Palette,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const SettingsPage: React.FC = () => {
  const { profile, updateProfile, exportData, importData, resetAllData, theme, setTheme } = useApp();

  const [name, setName] = useState(profile.name);
  const [primaryLanguage, setPrimaryLanguage] = useState(profile.primaryLanguage);
  const [secondaryLanguage, setSecondaryLanguage] = useState(profile.secondaryLanguage);
  const [dailyTarget, setDailyTarget] = useState(profile.dailyTargetMinutes);
  const [roadmapStartDate, setRoadmapStartDate] = useState(profile.roadmapStartDate);
  const [isSaved, setIsSaved] = useState(false);

  // Reset confirmation modal
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      ...profile,
      name,
      primaryLanguage,
      secondaryLanguage,
      dailyTargetMinutes: Number(dailyTarget),
      roadmapStartDate,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleExport = async () => {
    const jsonStr = await exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `algorithma-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const success = await importData(text);
      if (success) {
        setImportStatus('Data imported successfully!');
        setTimeout(() => setImportStatus(null), 3000);
      } else {
        setImportStatus('Failed to import data: invalid schema.');
      }
    } catch {
      setImportStatus('Error reading file.');
    }
  };

  const handleReset = async () => {
    await resetAllData();
    setIsResetConfirmOpen(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-border-subtle/80 pb-5">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary">
          Personal Preferences & Data Management
        </h2>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Configured specifically for Sonam Narula. Fast local IndexedDB storage with full JSON
          backup export and import.
        </p>
      </div>

      {/* Appearance & Theme System */}
      <Card elevated>
        <CardHeader className="border-b border-border-subtle/80 bg-surface-glass/40">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-content-primary">
              Interface Appearance & Visual Theme
            </h3>
          </div>
          <span className="text-xs font-mono text-content-muted">
            Instant Zero-Flash Sync
          </span>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-xs text-content-secondary">
            Choose your preferred workspace aesthetic. Both light and dark modes feature Apple-inspired liquid glass, ambient light depth, and high-contrast technical syntax styling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {/* Dark Mode Option */}
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={cn(
                'glass-card p-4 text-left transition-all relative overflow-hidden group flex flex-col justify-between h-28',
                theme === 'dark'
                  ? 'border-primary ring-2 ring-primary/30 shadow-glow-sm'
                  : 'hover:border-border-glass-highlight'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#090c13] border border-white/10 flex items-center justify-center text-primary">
                  <Moon className="w-4 h-4 text-primary" />
                </div>
                {theme === 'dark' && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-glow-sm animate-pulse" />
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-content-primary">Dark Mode</div>
                <div className="text-[11px] text-content-muted">Midnight & ambient indigo glow</div>
              </div>
            </button>

            {/* Light Mode Option */}
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={cn(
                'glass-card p-4 text-left transition-all relative overflow-hidden group flex flex-col justify-between h-28',
                theme === 'light'
                  ? 'border-primary ring-2 ring-primary/30 shadow-glow-sm'
                  : 'hover:border-border-glass-highlight'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#f6f8fc] border border-slate-300 flex items-center justify-center text-amber-500">
                  <Sun className="w-4 h-4 text-amber-500" />
                </div>
                {theme === 'light' && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-glow-sm animate-pulse" />
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-content-primary">Light Mode</div>
                <div className="text-[11px] text-content-muted">Apple frosted glass & clean clarity</div>
              </div>
            </button>

            {/* System Default Option */}
            <button
              type="button"
              onClick={() => setTheme('system')}
              className={cn(
                'glass-card p-4 text-left transition-all relative overflow-hidden group flex flex-col justify-between h-28',
                theme === 'system'
                  ? 'border-primary ring-2 ring-primary/30 shadow-glow-sm'
                  : 'hover:border-border-glass-highlight'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-surface-glass-interactive border border-border-glass flex items-center justify-center text-cyan-500">
                  <Monitor className="w-4 h-4 text-cyan-500" />
                </div>
                {theme === 'system' && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-glow-sm animate-pulse" />
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-content-primary">System Match</div>
                <div className="text-[11px] text-content-muted">Syncs with macOS appearance</div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Profile & Language Configuration */}
      <Card elevated>
        <CardHeader className="border-b border-border-subtle/80 bg-surface-glass/40">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-content-primary">
              Learner Profile & DSA Languages
            </h3>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-content-secondary mb-1">
                  Learner Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-content-secondary mb-1">
                  Daily Study Target (Minutes)
                </label>
                <input
                  type="number"
                  min="30"
                  max="480"
                  value={dailyTarget}
                  onChange={(e) => setDailyTarget(Number(e.target.value))}
                  className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary font-mono"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-content-secondary mb-1">
                  Primary Placement Language
                </label>
                <select
                  value={primaryLanguage}
                  onChange={(e) => setPrimaryLanguage(e.target.value as any)}
                  className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary font-mono"
                >
                  <option value="C++">C++ (STL, Fast I/O, Pointers, Memory)</option>
                  <option value="Python">Python (collections, heapq, itertools)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-content-secondary mb-1">
                  Secondary Placement Language
                </label>
                <select
                  value={secondaryLanguage}
                  onChange={(e) => setSecondaryLanguage(e.target.value as any)}
                  className="w-full bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary focus:outline-none focus:border-primary font-mono"
                >
                  <option value="Python">Python</option>
                  <option value="C++">C++</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-content-secondary mb-1">
                70-Day Roadmap Start Date
              </label>
              <input
                type="date"
                value={roadmapStartDate}
                onChange={(e) => setRoadmapStartDate(e.target.value)}
                className="w-full sm:w-1/2 bg-surface-secondary border border-border-default rounded-lg px-3 py-2 text-xs text-content-primary font-mono focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border-subtle">
              <span className="text-xs text-content-muted">
                Handwritten notebook mode: Digital notes are kept strictly optional.
              </span>

              <Button type="submit" variant="primary" size="sm">
                {isSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                    <span>Saved</span>
                  </>
                ) : (
                  <span>Save Preferences</span>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Data Export & Backup */}
      <Card elevated>
        <CardHeader className="border-b border-border-subtle bg-surface-secondary/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-semibold text-content-primary">
              Local Data Persistence & Portability
            </h3>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-xs text-content-secondary leading-relaxed">
            All your preparation progress (problem statuses, attempts, reflection logs, mistake
            journal, and spaced repetition items) is securely stored in your browser's IndexedDB.
            Export regular JSON backups to preserve your data indefinitely across devices.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button variant="secondary" onClick={handleExport}>
              <Download className="w-4 h-4 mr-1.5" />
              <span>Export Full Progress (JSON)</span>
            </Button>

            <label className="cursor-pointer inline-flex items-center justify-center font-medium rounded-lg text-sm px-3.5 py-2 bg-surface-secondary text-content-primary hover:bg-surface-elevated border border-border-default transition-all">
              <Upload className="w-4 h-4 mr-1.5" />
              <span>Import Backup JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportFile}
                className="hidden"
              />
            </label>

            {importStatus && (
              <span className="text-xs font-mono text-emerald-400">{importStatus}</span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone: Reset Progress */}
      <Card className="border-rose-500/20 bg-rose-500/[0.02]">
        <CardHeader className="border-b border-rose-500/20">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Danger Zone</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-xs text-content-secondary leading-relaxed">
            Resetting your progress will permanently erase all completed days, problem statuses,
            logged mistakes, and revision history from IndexedDB. This action cannot be undone unless
            you have exported a backup.
          </p>

          <Button
            variant="danger"
            size="sm"
            onClick={() => setIsResetConfirmOpen(true)}
          >
            <RotateCcw className="w-4 h-4 mr-1.5" />
            <span>Reset All Progress...</span>
          </Button>
        </CardContent>
      </Card>

      {/* Reset Confirmation Modal */}
      <Dialog
        isOpen={isResetConfirmOpen}
        onClose={() => setIsResetConfirmOpen(false)}
        title="Confirm Progress Reset"
        description="Are you absolutely sure you want to reset your DSA progress?"
      >
        <div className="space-y-4 text-xs">
          <p className="text-content-secondary">
            This will wipe your 70-day completion tally, spaced repetition review queues, and mistake
            journal. Your custom settings (name and language preferences) will remain intact.
          </p>
          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-[11px]">
            WARNING: Unsaved progress will be permanently lost.
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button variant="ghost" onClick={() => setIsResetConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleReset}>
              Yes, Reset Everything
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
