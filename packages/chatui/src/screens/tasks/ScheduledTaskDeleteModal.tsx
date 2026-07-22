import React from 'react';
import { BaseModal } from '../../components/common';

export interface ScheduledTaskDeleteModalProps {
  visible: boolean;
  description: React.ReactNode;
  confirmLoading?: boolean;
  onCancel(): void;
  onConfirm(): void | Promise<void>;
}

export function ScheduledTaskDeleteModal({
  visible,
  description,
  confirmLoading = false,
  onCancel,
  onConfirm,
}: ScheduledTaskDeleteModalProps) {
  return (
    <BaseModal
      visible={visible}
      title="确认删除任务"
      width={420}
      maskClosable={false}
      cancelText="取消"
      okText="删除"
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      onConfirm={onConfirm}
      okButtonProps={{
        className: '!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover',
      }}
    >
      <p className="text-sm text-primaryText">{description}</p>
    </BaseModal>
  );
}
