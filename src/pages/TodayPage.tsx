import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const TodayPage: React.FC = () => {
  const { completedDays } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    // Find next incomplete day from Day 1 to 70
    let nextDay = 1;
    for (let i = 1; i <= 70; i++) {
      if (!completedDays.includes(i)) {
        nextDay = i;
        break;
      }
    }
    navigate(`/roadmap/day/${nextDay}`, { replace: true });
  }, [completedDays, navigate]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] text-content-muted font-mono text-xs">
      Loading Today's Session Workspace...
    </div>
  );
};
