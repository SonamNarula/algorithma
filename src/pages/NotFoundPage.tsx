import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-5 animate-fadeIn">
      <div className="w-16 h-16 rounded-2xl bg-surface-secondary border border-border-default flex items-center justify-center text-primary shadow-glow-sm">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs font-mono text-indigo-400 font-semibold tracking-wider uppercase">
          404 — Path Not Traversed
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content-primary">
          Coordinate Out of Bounds
        </h2>
        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
          The algorithm attempted to access an invalid node or unmapped route. Return to the Command
          Center to continue your 70-day practice.
        </p>
      </div>

      <Button variant="primary" onClick={() => navigate('/dashboard')} className="gap-2">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Command Center</span>
      </Button>
    </div>
  );
};
