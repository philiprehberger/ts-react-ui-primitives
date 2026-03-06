import clsx from 'clsx';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'success' | 'danger' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  hoverText?: string;
  children?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-transparent',
  success: 'bg-green-100 text-green-700 hover:bg-green-200 border-transparent',
  danger: 'bg-red-100 text-red-700 hover:bg-red-200 border-transparent',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-transparent',
};

/**
 * Multi-variant button with loading state support.
 */
export function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled,
  hoverText,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      title={hoverText}
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center rounded-md border px-3 py-1 text-sm font-medium disabled:opacity-50 cursor-pointer',
        variantClasses[variant],
        className
      )}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
