import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import styles from './BaseModal.module.css';

export interface BaseModalProps {
  visible?: boolean;
  open?: boolean;
  show?: boolean;
  title?: React.ReactNode;
  width?: string | number;
  centered?: boolean;
  destroyOnClose?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  okText?: string;
  cancelText?: string;
  confirmLoading?: boolean;
  okButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  cancelButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  onClose?: () => void;
  onOk?: () => void | Promise<void>;
  onDismiss?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode | null;
  className?: string;
  bodyClassName?: string;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  visible, open = visible, show = open, title, width = 520, centered = true,
  destroyOnClose = false, mask = true, maskClosable = true, okText = '确认',
  cancelText = '取消', confirmLoading = false, okButtonProps, cancelButtonProps,
  onConfirm, onCancel, onClose, onOk, onDismiss, children, footer, className, bodyClassName,
}) => {
  const isVisible = show ?? false;
  const handleConfirm = useCallback(async () => {
    try {
      if (onConfirm) await onConfirm();
      else if (onOk) await onOk();
    }
    catch (error) { console.error('Modal confirm error:', error); }
  }, [onConfirm, onOk]);
  const handleCancel = useCallback(() => {
    if (onCancel) onCancel();
    else if (onClose) onClose();
    else onDismiss?.();
  }, [onCancel, onClose, onDismiss]);

  const defaultFooter = useMemo(() => {
    if (footer === null) return null;
    if (footer) return footer;
    const { type: _cancelType, ...safeCancelProps } = cancelButtonProps ?? {};
    const { type: _okType, ...safeOkProps } = okButtonProps ?? {};
    return (
      <div className="flex justify-end gap-2 border-t border-lineSoft px-5 py-3">
        <BaseButton type="secondary" size="medium" onClick={handleCancel} {...safeCancelProps}>{cancelText}</BaseButton>
        <BaseButton type="primary" size="medium" isLoading={confirmLoading} onClick={handleConfirm} {...safeOkProps}>{confirmLoading ? '加载中...' : okText}</BaseButton>
      </div>
    );
  }, [cancelButtonProps, cancelText, confirmLoading, footer, handleCancel, handleConfirm, okButtonProps, okText]);

  if (!isVisible && destroyOnClose) return null;
  if (!isVisible) return null;

  return (
    <>
      {mask && <div className={classNames('fixed inset-0 z-[1000] bg-overlayMask', styles.maskAnimation)} onClick={() => maskClosable && handleCancel()} role="presentation" />}
      <div
        className={classNames(
          'fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg',
          centered && 'left-1/2 top-1/2', styles.modalAnimation, className,
        )}
        style={{ width }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {title && (
          <div className="flex items-center justify-between border-b border-lineSoft px-5 py-4">
            <h2 id="modal-title" className="m-0 text-base font-semibold leading-6 text-primaryText">{title}</h2>
            <button type="button" className="flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText" onClick={handleCancel} aria-label="关闭">✕</button>
          </div>
        )}
        <div className={classNames('min-h-20 p-5 text-primaryText', bodyClassName)}>{children}</div>
        {defaultFooter}
      </div>
    </>
  );
};

BaseModal.displayName = 'BaseModal';
