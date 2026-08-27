import React from 'react';

import { BaseButton } from '../BaseButton';
import { BaseModal } from '../BaseModal';

export interface BaseDeleteConfirmModalProps {
  visible: boolean;
  title: string;
  description: React.ReactNode;
  loading?: boolean;
  error?: string;
  onCancel(): void;
  onConfirm(): void | Promise<void>;
}

export function BaseDeleteConfirmModal({
  visible,
  title,
  description,
  loading = false,
  error,
  onCancel,
  onConfirm,
}: BaseDeleteConfirmModalProps) {
  return (
    <BaseModal
      visible={visible}
      title={title}
      width={420}
      maskClosable={false}
      onCancel={() => { if (!loading) onCancel(); }}
      footer={(
        <div className="flex justify-end gap-2 border-t border-lineSoft px-5 py-3">
          <BaseButton type="secondary" size="medium" disabled={loading} onClick={onCancel}>取消</BaseButton>
          <BaseButton type="danger" size="medium" isLoading={loading} onClick={() => void onConfirm()}>删除</BaseButton>
        </div>
      )}
    >
      <div className="space-y-3 text-sm leading-6 text-secondaryText">
        <p>{description}</p>
        {error && <p role="alert" className="text-danger">{error}</p>}
      </div>
    </BaseModal>
  );
}
