import React from 'react';
import { FileText, Loader2, Trash2, Upload } from 'lucide-react';

import { BaseButton } from '../../components/common';

export interface ProjectDocumentAttachmentViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  mimeType: string;
  sizeLabel: string;
  status: 'ready' | 'processing' | 'failed';
  statusLabel: string;
}

export interface ProjectDocumentAttachmentsProps {
  attachments: ProjectDocumentAttachmentViewModel[];
  className?: string;
  uploading?: boolean;
  deletingAttachmentId?: string | null;
  unavailableHint?: string;
  error?: string;
  onRequestUpload?(): void;
  onDeleteAttachment?(attachmentId: string): void;
}

export function ProjectDocumentAttachments({
  attachments,
  className = 'mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6',
  uploading = false,
  deletingAttachmentId,
  unavailableHint,
  error,
  onRequestUpload,
  onDeleteAttachment,
}: ProjectDocumentAttachmentsProps) {
  return (
    <div className={`relative ${className}`}>
      <div className={onRequestUpload ? 'pr-28' : undefined}>
        <div className="text-sm font-medium text-primaryText">附件</div>
        {onRequestUpload && (
          <div className="absolute right-0 top-6">
            <BaseButton
              type="secondary"
              size="small"
              disabled={uploading}
              onClick={onRequestUpload}
            >
              <span className="inline-flex items-center gap-1.5">
                {uploading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Upload size={14} />
                )}
                {uploading ? '上传中' : '上传附件'}
              </span>
            </BaseButton>
          </div>
        )}
      </div>

      {attachments.length ? (
        <div className={`mt-3 flex flex-wrap gap-2.5 ${onRequestUpload ? 'pr-28' : ''}`}>
          {attachments.map((attachment) => {
            const deleting = deletingAttachmentId === attachment.id;
            return (
              <div
                key={attachment.id}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText"
                title={attachment.statusLabel}
              >
                <FileText size={14} className="shrink-0" />
                <span className="max-w-72 truncate">{attachment.name}</span>
                {attachment.status === 'processing' && (
                  <Loader2 size={12} className="animate-spin" />
                )}
                {onDeleteAttachment && (
                  <button
                    type="button"
                    disabled={deleting}
                    onClick={() => onDeleteAttachment(attachment.id)}
                    className="-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait"
                    aria-label={`删除附件 ${attachment.name}`}
                    title="删除附件"
                  >
                    {deleting ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Trash2 size={13} />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-2 text-sm text-tertiaryText">暂无附件</p>
      )}

      {unavailableHint && (
        <p className="mt-2 text-xs text-tertiaryText">{unavailableHint}</p>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm text-danger">{error}</p>
      )}
    </div>
  );
}
