import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AppShell } from './components/layout/AppShell';
import { DashboardPage } from './pages/DashboardPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { DayWorkspacePage } from './pages/DayWorkspacePage';
import { TodayPage } from './pages/TodayPage';
import { ProblemsPage } from './pages/ProblemsPage';
import { PatternsPage } from './pages/PatternsPage';
import { RevisionPage } from './pages/RevisionPage';
import { MistakesPage } from './pages/MistakesPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { CalendarPage } from './pages/CalendarPage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
            <Route path="roadmap/day/:dayNumber" element={<DayWorkspacePage />} />
            <Route path="today" element={<TodayPage />} />
            <Route path="problems" element={<ProblemsPage />} />
            <Route path="patterns" element={<PatternsPage />} />
            <Route path="revision" element={<RevisionPage />} />
            <Route path="mistakes" element={<MistakesPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
