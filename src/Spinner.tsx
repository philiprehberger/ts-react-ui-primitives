import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  /** Accessible label for screen readers (default: "Loading"). */
  label?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-4',
};

/**
 * Inline loading spinner with three sizes and a polite live-region label.
 */
export function Spinner({ size = 'md', label = 'Loading', className, ...props }: SpinnerProps) {
  return (
    <div
      {...props}
      role="status"
      aria-live="polite"
      className={clsx('inline-flex items-center justify-center', className)}
    >
      <span
        className={clsx(
          'inline-block animate-spin rounded-full border-current border-t-transparent text-current',
          sizeClasses[size],
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
