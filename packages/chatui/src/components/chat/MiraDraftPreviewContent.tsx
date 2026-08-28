import React from 'react';
import { Check } from 'lucide-react';

import { BaseButton } from '../common';
import { ProjectDocumentPreviewContent } from '../../screens/projects/ProjectDocumentPreviewContent';
import type { ProjectDocumentPreviewViewModel } from '../../screens/projects/ProjectDocumentPreview';

export interface MiraDraftPreviewContentProps {
  document: ProjectDocumentPreviewViewModel;
  savedProjectName?: string;
  saving?: boolean;
  onSave?(): void;
}

export function MiraDraftPreviewContent({
  document,
  savedProjectName,
  saving = false,
  onSave,
}: MiraDraftPreviewContentProps) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-lineSubtle px-4 py-3">
        <span className="text-sm font-medium text-secondaryText">AI 生成草稿</span>
        {savedProjectName ? (
          <span className="inline-flex items-center gap-1 text-sm text-tertiaryText">
            <Check size={15} strokeWidth={2} aria-hidden="true" />
            已保存至{savedProjectName}
          </span>
        ) : (
          <BaseButton type="primary" size="small" isLoading={saving} disabled={saving || !onSave} onClick={onSave}>
            {saving ? '保存中' : '保存'}
          </BaseButton>
        )}
      </div>
      <div className="min-h-0 flex-1 pt-4">
        <ProjectDocumentPreviewContent document={document} layout="panel" showDocumentHeader={false} />
      </div>
    </div>
  );
}
