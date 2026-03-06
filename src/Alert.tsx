import { type ReactNode } from 'react';

export type AlertType = 'error' | 'success' | 'warning' | 'info';

export interface AlertProps {
  type: AlertType;
  message: string;
  onAction?: () => void;
  actionText?: string;
  className?: string;
}

const alertStyles: Record<AlertType, { container: string; text: string; icon: string }> = {
  error: { container: 'border-red-200 bg-red-50', text: 'text-red-800', icon: 'text-red-400' },
  success: { container: 'border-green-200 bg-green-50', text: 'text-green-800', icon: 'text-green-400' },
  warning: { container: 'border-yellow-200 bg-yellow-50', text: 'text-yellow-800', icon: 'text-yellow-400' },
  info: { container: 'border-blue-200 bg-blue-50', text: 'text-blue-800', icon: 'text-blue-400' },
};

const iconPaths: Record<AlertType, ReactNode> = {
  error: (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  ),
  success: (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  ),
  warning: (
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.516 11.597c.75 1.335-.213 3.004-1.742 3.004H3.483c-1.53 0-2.493-1.67-1.743-3.004L8.257 3.1zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-6a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  ),
  info: (
    <path
      fillRule="evenodd"
      d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7-3a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  ),
};

/**
 * Alert banner with type-based styling and optional action button.
 * Supports error, success, warning, and info variants.
 */
export function Alert({
  type,
  message,
  onAction,
  actionText = 'OK',
  className = '',
}: AlertProps) {
  const style = alertStyles[type];

  return (
    <div className={`mb-6 rounded-lg border p-4 ${style.container} ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className={`mr-2 h-5 w-5 ${style.icon}`} fill="currentColor" viewBox="0 0 20 20">
            {iconPaths[type]}
          </svg>
          <span className={style.text}>{message}</span>
        </div>
        {onAction && (
          <button
            onClick={onAction}
            className={`rounded-md px-3 py-2 text-sm font-medium ${style.text} hover:opacity-80`}
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}
