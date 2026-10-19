import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'secondary', size = 'md', children, disabled, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-tight';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-hover shadow-hacker border border-accent-cyan/40 active:scale-[0.98]',
      secondary:
        'glass-control text-content-primary hover:border-primary/40 shadow-sm active:scale-[0.98]',
      outline:
        'bg-transparent text-content-secondary hover:text-content-primary hover:bg-surface-interactive border border-surface-border active:scale-[0.98]',
      ghost:
        'bg-transparent text-content-secondary hover:text-content-primary hover:bg-surface-interactive',
      danger:
        'bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/25 hover:bg-rose-500/20 active:scale-[0.98]',
      success:
        'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/20 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'text-xs px-2.5 py-1.5 gap-1.5',
      md: 'text-sm px-3.5 py-2 gap-2',
      lg: 'text-base px-5 py-2.5 gap-2.5',
      icon: 'p-2 aspect-square',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
