import { Check, Copy } from 'lucide-react';
import { BaseButton, BaseModal } from '../common';

export interface ChatShareControlsProps {
  selectedCount: number;
  shareLink: string;
  modalOpen: boolean;
  copied?: boolean;
  contentMaxWidth?: number | string;
  onCancel(): void;
  onCreateLink(): void;
  onCloseModal(): void;
  onCopyLink(): void;
}

export function ChatShareControls({
  selectedCount,
  shareLink,
  modalOpen,
  copied = false,
  contentMaxWidth = 840,
  onCancel,
  onCreateLink,
  onCloseModal,
  onCopyLink,
}: ChatShareControlsProps) {
  return (
    <>
      <div className="w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur">
        <div
          className="mx-auto flex w-full items-center justify-between gap-4"
          style={{ maxWidth: contentMaxWidth }}
        >
          <div className="min-w-0 text-sm text-secondaryText">已选择 {selectedCount} 条对话</div>
          <div className="flex shrink-0 items-center gap-2">
            <BaseButton type="secondary" size="small" onClick={onCancel}>取消</BaseButton>
            <BaseButton
              type="primary"
              size="small"
              disabled={selectedCount <= 0}
              onClick={onCreateLink}
            >
              创建分享链接
            </BaseButton>
          </div>
        </div>
      </div>

      <BaseModal
        visible={modalOpen}
        title="创建分享链接"
        width={450}
        onCancel={onCloseModal}
        footer={null}
      >
        <div className="space-y-4">
          <p className="m-0 text-sm leading-6 text-primaryText">
            任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。
          </p>
          <div className="flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4">
            <span className="min-w-0 flex-1 truncate text-sm text-secondaryText">{shareLink}</span>
            <button
              type="button"
              onClick={onCopyLink}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? '已复制' : '复制'}</span>
            </button>
          </div>
        </div>
      </BaseModal>
    </>
  );
}
