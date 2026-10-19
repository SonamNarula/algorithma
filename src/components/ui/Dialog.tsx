import React, { useEffect, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Glass Modal Dialog */}
      <div
        className={cn(
          'relative w-full max-w-2xl glass-panel-elevated overflow-hidden max-h-[90vh] flex flex-col z-10 animate-scaleIn',
          className
        )}
      >
        <div className="px-6 py-4 border-b border-surface-border flex items-center justify-between shrink-0 bg-surface-interactive/40">
          <div>
            {title && <h3 className="text-base font-semibold text-content-primary">{title}</h3>}
            {description && (
              <p className="text-xs text-content-secondary mt-0.5">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-content-muted hover:text-content-primary hover:bg-surface-interactive transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};
