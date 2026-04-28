import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'success' | 'danger' | 'warning' | 'secondary';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
  danger: 'bg-red-100 text-red-700',
  warning: 'bg-yellow-100 text-yellow-800',
  secondary: 'bg-gray-100 text-gray-700',
};

/**
 * Color-variant badge. Matches the Button color palette for consistent UI.
 */
export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
