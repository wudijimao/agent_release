import React from 'react';
import { Download, FileText, Loader2, Trash2 } from 'lucide-react';

export interface ProjectDocumentAttachmentViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  mimeType: string;
  sizeLabel: string;
  status: 'ready' | 'processing' | 'failed';
  statusLabel: string;
}

export interface ProjectDocumentAttachmentUploadViewModel {
  id: string;
  name: string;
  progress: number;
}

export interface ProjectDocumentAttachmentsProps {
  attachments: ProjectDocumentAttachmentViewModel[];
  uploads?: ProjectDocumentAttachmentUploadViewModel[];
  className?: string;
  deletingAttachmentId?: string | null;
  unavailableHint?: string;
  error?: string;
  onDownloadAttachment?(attachmentId: string): void;
  onDeleteAttachment?(attachmentId: string): void;
}

export function ProjectDocumentAttachments({
  attachments,
  uploads = [],
  className = 'mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6',
  deletingAttachmentId,
  unavailableHint,
  error,
  onDownloadAttachment,
  onDeleteAttachment,
}: ProjectDocumentAttachmentsProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="text-sm font-medium text-primaryText">附件</div>

      {attachments.length || uploads.length ? (
        <div className="mt-3 flex flex-wrap gap-2.5">
          {uploads.map((upload) => (
            <div key={upload.id} className="relative inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText">
              <span className="max-w-72 truncate">{upload.name}</span>
              <span className="shrink-0 tabular-nums text-xs text-tertiaryText">{upload.progress}%</span>
              <span className="absolute inset-x-3 bottom-0 h-0.5 overflow-hidden rounded-full bg-lineSoft">
                <span className="block h-full rounded-full bg-primary transition-[width] duration-150" style={{ width: `${upload.progress}%` }} />
              </span>
            </div>
          ))}
          {attachments.map((attachment) => {
            const deleting = deletingAttachmentId === attachment.id;
            return (
              <div
                key={attachment.id}
                className="inline-flex max-w-full items-center rounded-full border border-lineSubtle bg-surface text-sm text-secondaryText"
                title={attachment.statusLabel}
              >
                {onDownloadAttachment ? (
                  <button
                    type="button"
                    onClick={() => onDownloadAttachment(attachment.id)}
                    className="inline-flex min-w-0 items-center gap-2 rounded-full py-1.5 pl-3 pr-2 transition-colors hover:text-primaryText"
                    aria-label={`下载附件 ${attachment.name}`}
                    title={`下载附件 ${attachment.name}`}
                  >
                    <FileText size={14} className="shrink-0" />
                    <span className="max-w-72 truncate">{attachment.name}</span>
                    {attachment.status === 'processing' ? (
                      <Loader2 size={12} className="animate-spin" />
                    ) : (
                      <Download size={13} />
                    )}
                  </button>
                ) : (
                  <span className="inline-flex min-w-0 items-center gap-2 px-3 py-1.5">
                    <FileText size={14} className="shrink-0" />
                    <span className="max-w-72 truncate">{attachment.name}</span>
                    {attachment.status === 'processing' && (
                      <Loader2 size={12} className="animate-spin" />
                    )}
                  </span>
                )}
                {onDeleteAttachment && (
                  <button
                    type="button"
                    disabled={deleting}
                    onClick={() => onDeleteAttachment(attachment.id)}
                    className="mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait"
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
      ) : null}

      {unavailableHint && (
        <p className="mt-2 text-xs text-tertiaryText">{unavailableHint}</p>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm text-danger">{error}</p>
      )}
    </div>
  );
}
