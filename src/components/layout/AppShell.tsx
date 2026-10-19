import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { GlobalSearch } from '../ui/GlobalSearch';
import { useApp } from '../../context/AppContext';

export const AppShell: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { theme } = useApp();

  const isDarkMode =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div
      className={`min-h-screen flex text-content-primary antialiased selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden transition-colors duration-200 ${
        isDarkMode ? 'bg-[#020408]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Background Ambience Layer */}
      {isDarkMode ? (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Deepest obsidian space void */}
          <div className="absolute inset-0 bg-radial-at-c from-[#030712] via-[#020408] to-[#000000]" />

          {/* Central radiant cyan-blue top spotlight beam */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[700px] opacity-90"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(0, 229, 255, 0.38) 0%, rgba(0, 102, 255, 0.28) 35%, transparent 72%), conic-gradient(from 180deg at 50% 0%, transparent 142deg, rgba(0, 102, 255, 0.2) 166deg, rgba(0, 229, 255, 0.5) 180deg, rgba(0, 102, 255, 0.2) 194deg, transparent 218deg)',
              filter: 'blur(45px)',
            }}
          />

          {/* Outcrowd Double-Helix Caustic Wavy Light Strands in Beam Center */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[480px] opacity-45 mix-blend-screen"
            viewBox="0 0 400 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Strand 1 */}
            <path
              d="M200 0 C 230 60, 170 120, 200 180 C 230 240, 170 300, 200 360 C 220 400, 190 440, 200 480"
              stroke="url(#beamGrad1)"
              strokeWidth="3.5"
              filter="url(#glow1)"
            />
            {/* Strand 2 (Intersecting) */}
            <path
              d="M200 0 C 170 60, 230 120, 200 180 C 170 240, 230 300, 200 360 C 180 400, 210 440, 200 480"
              stroke="url(#beamGrad2)"
              strokeWidth="3.5"
              filter="url(#glow1)"
            />
            {/* Radiant Center Core */}
            <ellipse cx="200" cy="40" rx="80" ry="25" fill="#00E5FF" filter="url(#glow2)" opacity="0.6" />

            <defs>
              <linearGradient id="beamGrad1" x1="200" y1="0" x2="200" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#00E5FF" />
                <stop offset="70%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#001844" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beamGrad2" x1="200" y1="0" x2="200" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="40%" stopColor="#0099FF" />
                <stop offset="80%" stopColor="#0055FF" />
                <stop offset="100%" stopColor="#001133" stopOpacity="0" />
              </linearGradient>
              <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
          </svg>

          {/* Ambient Bottom Blue Glow */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] opacity-35 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(0, 102, 255, 0.22) 0%, transparent 68%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Clean Crisp Light Theme Ambiance */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#ffffff]" />
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />

        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>

      {/* Global Cmd+K Search Palette */}
      <GlobalSearch />
    </div>
  );
};

