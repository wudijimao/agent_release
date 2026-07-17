import React from 'react';
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
export declare const BaseModal: React.FC<BaseModalProps>;
//# sourceMappingURL=BaseModal.d.ts.map