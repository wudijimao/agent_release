import React from 'react';
import { AlertCircle, Check } from 'lucide-react';
import classNames from 'classnames';

export interface BaseToastProps {
  visible: boolean;
  message: React.ReactNode;
  tone?: 'success' | 'warning';
}

export const BaseToast: React.FC<BaseToastProps> = ({ visible, message, tone = 'success' }) => {
  if (!visible) return null;

  const isSuccess = tone === 'success';
  const Icon = isSuccess ? Check : AlertCircle;
  return (
    <div
      role="status"
      aria-live="polite"
      className={classNames(
        'pointer-events-none fixed left-1/2 z-[1400] inline-flex -translate-x-1/2 items-center gap-2 py-2.5 text-sm shadow-lg backdrop-blur-sm transition-all duration-200',
        isSuccess
          ? 'top-1/2 -translate-y-1/2 rounded-lg bg-toastOverlay px-4 text-white'
          : 'top-5 rounded-full border border-lineSoft bg-overlaySurface px-5 font-medium text-primaryText backdrop-blur-md',
      )}
    >
      <Icon
        size={isSuccess ? 16 : 18}
        className={isSuccess ? 'text-white' : 'text-warning'}
        aria-hidden="true"
      />
      <span>{message}</span>
    </div>
  );
};

BaseToast.displayName = 'BaseToast';
