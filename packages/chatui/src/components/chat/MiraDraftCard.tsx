import React from 'react';
import { ChevronRight, FileText, LoaderCircle } from 'lucide-react';
import type { MiraDraftCardViewModel } from './chat.types';

export interface MiraDraftCardProps {
  draft: MiraDraftCardViewModel;
  onPreview?(actionKey: string): void;
  onConfirm?(actionKey: string): void;
  onCancel?(actionKey: string): void;
}

export function MiraDraftCard({ draft, onPreview }: MiraDraftCardProps) {
  const isSaving = draft.status === 'saving';
  const isSaved = draft.status === 'saved';
  const isActionable = draft.actionable ?? true;
  const isPreviewable = draft.previewable ?? true;
  const subtitle = isSaving
    ? '正在保存'
    : draft.status === 'error'
      ? draft.errorMessage || '文档保存失败'
      : !isActionable && !isSaved
        ? '草稿暂不可操作'
        : '已生成文档';

  return (
    <button
      type="button"
      disabled={!onPreview || !isPreviewable}
      onClick={() => onPreview?.(draft.actionKey)}
      className="group not-prose flex w-full max-w-[340px] items-center gap-2.5 rounded-xl border border-lineSubtle bg-white px-3.5 py-3.5 text-left shadow-sm outline-none transition-colors enabled:hover:border-controlBorder enabled:focus-visible:ring-2 enabled:focus-visible:ring-primary-soft-strong disabled:cursor-default"
      aria-label={`预览草稿：${draft.title}`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-white">
        <FileText size={16} stroke="currentColor" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="m-0 block truncate text-sm font-medium text-primaryText">{draft.title}</span>
        <span className={`m-0 block text-xs ${draft.status === 'error' ? 'text-danger' : 'text-tertiaryText'}`} role={draft.status === 'error' ? 'alert' : undefined}>
          {subtitle}
        </span>
      </span>
      <span className="inline-flex shrink-0 items-center justify-center p-1 text-tertiaryText transition-colors group-hover:text-primaryText" aria-hidden="true">
        {isSaving ? <LoaderCircle size={16} className="animate-spin" strokeWidth={2} /> : <ChevronRight size={16} strokeWidth={2} />}
      </span>
    </button>
  );
}
