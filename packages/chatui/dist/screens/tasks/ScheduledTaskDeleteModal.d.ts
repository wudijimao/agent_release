import React from 'react';
export interface ScheduledTaskDeleteModalProps {
    visible: boolean;
    description: React.ReactNode;
    confirmLoading?: boolean;
    onCancel(): void;
    onConfirm(): void | Promise<void>;
}
export declare function ScheduledTaskDeleteModal({ visible, description, confirmLoading, onCancel, onConfirm, }: ScheduledTaskDeleteModalProps): React.JSX.Element;
//# sourceMappingURL=ScheduledTaskDeleteModal.d.ts.map