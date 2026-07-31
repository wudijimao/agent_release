import React from 'react';
import { Check, FileText, LoaderCircle } from 'lucide-react';

import { BaseButton } from '../common';
import type { MiraDraftCardViewModel } from './chat.types';

export interface MiraDraftCardProps {
  draft: MiraDraftCardViewModel;
  onConfirm?(actionKey: string): void;
}

export function MiraDraftCard({ draft, onConfirm }: MiraDraftCardProps) {
  const isSaving = draft.status === 'saving';
  const isSaved = draft.status === 'saved';
  const isDisabled = isSaving || isSaved || !onConfirm;

  return (
    <article className="not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <FileText size={20} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="m-0 text-xs leading-5 text-tertiaryText">Mira 文档草稿</p>
          <h3 className="m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText">
            {draft.title}
          </h3>
          {draft.summary && (
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-secondaryText">
              {draft.summary}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3">
        <p className="m-0 min-w-0 truncate text-xs text-tertiaryText">
          {isSaved ? '已保存到项目' : `保存到 ${draft.targetLabel || '当前项目'}`}
        </p>
        <BaseButton
          type={isSaved ? 'secondary' : 'primary'}
          size="small"
          disabled={isDisabled}
          onClick={() => onConfirm?.(draft.actionKey)}
        >
          {isSaving ? (
            <>
              <LoaderCircle size={14} className="animate-spin" aria-hidden="true" />
              保存中
            </>
          ) : isSaved ? (
            <>
              <Check size={14} aria-hidden="true" />
              已保存
            </>
          ) : (
            '确认保存'
          )}
        </BaseButton>
      </div>

      {draft.status === 'error' && draft.errorMessage && (
        <p role="alert" className="mb-0 mt-2 text-xs leading-5 text-danger">
          {draft.errorMessage}
        </p>
      )}
    </article>
  );
}
