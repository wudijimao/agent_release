import React, { useEffect, useRef, useState } from 'react';
import { Download, FileText, Loader2, Plus, Trash2, X } from 'lucide-react';

export type ProjectDocumentFileDestination = 'body' | 'attachment';
export type ProjectDocumentUploadHandler = (files: File[], onReady?: () => void, destinations?: ProjectDocumentFileDestination[]) => void | Promise<void>;

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
  disabled?: boolean;
  attachmentAccept?: string;
  onUploadAttachments?: ProjectDocumentUploadHandler;
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
  disabled = false,
  attachmentAccept,
  onUploadAttachments,
  onDownloadAttachment,
  onDeleteAttachment,
}: ProjectDocumentAttachmentsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingPanelRef = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState<Array<{ file: File; destination: ProjectDocumentFileDestination }>>([]);
  const [selectionBatch, setSelectionBatch] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const busy = disabled || uploading;
  useEffect(() => {
    if (!selectionBatch) return;
    const frame = window.requestAnimationFrame(() => {
      pendingPanelRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [selectionBatch]);
  const confirm = async () => {
    if (busy || !pending.length || !onUploadAttachments) return;
    setUploading(true);
    setUploadError('');
    try {
      await onUploadAttachments(pending.map((entry) => entry.file), undefined, pending.map((entry) => entry.destination));
      setPending([]);
    } catch (cause) {
      setUploadError(cause instanceof Error ? cause.message : '文件添加失败，请重试');
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className={`relative ${className}`} aria-label="文档附件">
      <div className="text-sm font-medium text-primaryText">附件</div>

      {attachments.length || uploads.length || onUploadAttachments ? (
        <div className="mt-3 flex flex-wrap gap-2.5">
          {onUploadAttachments && <>
            <input ref={inputRef} type="file" multiple accept={attachmentAccept} className="hidden" aria-label="选择文档附件" disabled={busy} onChange={(event) => {
              const files = Array.from(event.target.files ?? []);
              event.target.value = '';
              if (files.length + pending.length > 5) { setUploadError('单次最多添加 5 个文件'); return; }
              if (!files.length) return;
              setPending((current) => [...current, ...files.map((file) => ({ file, destination: (file.type.startsWith('image/') ? 'body' : 'attachment') as ProjectDocumentFileDestination }))]);
              setSelectionBatch((current) => current + 1);
              setUploadError('');
            }} />
            <button type="button" disabled={busy} onClick={() => inputRef.current?.click()} className="inline-flex items-center gap-1.5 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText hover:border-primary disabled:cursor-wait disabled:opacity-50">
              {uploading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}{uploading ? '正在添加…' : '上传附件'}
            </button>
          </>}
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
                    disabled={deleting || busy}
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

      {pending.length > 0 && <div key={selectionBatch} ref={pendingPanelRef} className="mt-3 overflow-hidden rounded-xl border border-lineSubtle bg-surface">
        {pending.map((entry, index) => <div key={index} className="document-attachment-choice-flash flex flex-wrap items-center gap-3 border-b border-lineSubtle px-3 py-2.5" aria-label={`待添加 ${entry.file.name}`}>
          <span className="rounded bg-bgLight px-1.5 py-0.5 text-xs text-tertiaryText">{entry.file.name.split('.').pop()?.toUpperCase()}</span>
          <span className="min-w-0 flex-1 truncate text-sm text-primaryText">{entry.file.name}</span>
          <span className="text-xs text-tertiaryText">{entry.file.size < 1024 * 1024 ? `${Math.max(1, Math.round(entry.file.size / 1024))} KB` : `${(entry.file.size / 1024 / 1024).toFixed(1)} MB`}</span>
          <div className="inline-flex overflow-hidden rounded border border-lineSubtle" role="group" aria-label={`${entry.file.name} 的用途`}>
            {(['body', 'attachment'] as const).map((destination) => <button key={destination} type="button" disabled={busy} aria-pressed={entry.destination === destination} onClick={() => setPending((current) => current.map((item, i) => i === index ? { ...item, destination } : item))} className={`px-2 py-1 text-xs ${entry.destination === destination ? 'bg-primary-soft text-primary' : 'bg-surface text-secondaryText'} ${destination === 'attachment' ? 'border-l border-lineSubtle' : ''}`}>
              {destination === 'body' ? '作为正文' : '作为附件'}
            </button>)}
          </div>
          <button type="button" disabled={busy} aria-label={`移除 ${entry.file.name}`} onClick={() => setPending((current) => current.filter((_, i) => i !== index))} className="text-tertiaryText hover:text-primaryText"><X size={16} /></button>
        </div>)}
        <div className="flex items-center justify-end gap-3 bg-bgLight px-3 py-2.5">
          <span className="mr-auto text-xs text-tertiaryText">{uploading ? '正在保存并添加文件…' : '请选择文件用途后添加'}</span>
          <button type="button" disabled={busy} onClick={() => { setPending([]); setUploadError(''); }} className="text-sm text-secondaryText">取消</button>
          <button type="button" disabled={busy} onClick={() => void confirm()} className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50">确认添加</button>
        </div>
      </div>}
      {attachments.filter((attachment) => attachment.status !== 'ready').map((attachment) => <p key={attachment.id} className={`mt-2 text-xs ${attachment.status === 'failed' ? 'text-danger' : 'text-tertiaryText'}`} role={attachment.status === 'failed' ? 'alert' : 'status'}>{attachment.name}：{attachment.statusLabel}</p>)}
      {uploadError && <p role="alert" className="mt-2 text-sm text-danger">{uploadError}</p>}

      {unavailableHint && (
        <p className="mt-2 text-xs text-tertiaryText">{unavailableHint}</p>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm text-danger">{error}</p>
      )}
    </div>
  );
}
