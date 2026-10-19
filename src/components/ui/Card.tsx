import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, interactive = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          elevated ? 'glass-panel-elevated' : 'glass-card',
          interactive && 'glass-card-interactive',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'p-5 border-b border-border-glass flex items-center justify-between',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => <div className={cn('p-5', className)} {...props}>{children}</div>;

export const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'p-4 px-5 border-t border-border-glass bg-surface-interactive/30 rounded-b-[inherit]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
