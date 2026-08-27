import React from 'react';
export interface BaseDeleteConfirmModalProps {
    visible: boolean;
    title: string;
    description: React.ReactNode;
    loading?: boolean;
    error?: string;
    onCancel(): void;
    onConfirm(): void | Promise<void>;
}
export declare function BaseDeleteConfirmModal({ visible, title, description, loading, error, onCancel, onConfirm, }: BaseDeleteConfirmModalProps): React.JSX.Element;
//# sourceMappingURL=BaseDeleteConfirmModal.d.ts.map