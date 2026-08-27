import React, { useState } from 'react';

import { ProjectDocumentPreview, type ProjectDocumentPreviewViewModel } from './ProjectDocumentPreview';
import type { ProjectDocumentTemplateCardViewModel } from './ProjectDocumentTemplateCard';

export interface ProjectDocumentTemplateWorkspaceProps {
  template?: ProjectDocumentTemplateCardViewModel;
  creating?: boolean;
  isSidebarOpen: boolean;
  onOpenSidebar(): void;
  onBack(): void;
  onCreate?(input: { name: string; description: string; markdown: string }): void | Promise<void>;
  onUpdate?(input: { name: string; markdown: string }): void | Promise<void>;
  onDelete?(): void | Promise<void>;
}

export function ProjectDocumentTemplateWorkspace({
  template,
  creating = false,
  isSidebarOpen,
  onOpenSidebar,
  onBack,
  onCreate,
  onUpdate,
  onDelete,
}: ProjectDocumentTemplateWorkspaceProps) {
  const [title, setTitle] = useState(template?.name ?? '');
  const [markdown, setMarkdown] = useState(template?.markdown ?? '');
  const [editing, setEditing] = useState(creating);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const document: ProjectDocumentPreviewViewModel = {
    id: template?.id ?? 'new-template',
    title: title || '未命名模板',
    markdown,
    createdByName: template?.createdByName ?? (template?.source === 'system' ? '系统' : '我'),
    updatedByName: template?.createdByName ?? (template?.source === 'system' ? '系统' : '我'),
    updatedAt: template?.updatedAt ?? '',
    tags: [],
    canEdit: creating ? Boolean(onCreate) : Boolean(onUpdate),
    attachments: [],
  };

  const save = async (keepEditing = false) => {
    if (saving) return;
    const name = title.trim();
    if (!name) {
      setSaveError('请输入模板名称');
      return;
    }
    setSaving(true);
    setSaveError('');
    try {
      if (creating && onCreate) {
        await onCreate({ name, description: '', markdown });
        onBack();
        return;
      }
      if (!creating && onUpdate) {
        await onUpdate({ name, markdown });
        setEditing(keepEditing);
      }
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : creating ? '模板创建失败' : '模板更新失败');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProjectDocumentPreview
      projectName="项目模板"
      document={document}
      isSidebarOpen={isSidebarOpen}
      onOpenSidebar={onOpenSidebar}
      onBackToProjects={onBack}
      onBackToProject={onBack}
      onEdit={document.canEdit ? () => setEditing(true) : undefined}
      onDelete={!creating ? onDelete : undefined}
      editing={editing}
      editTitle={title}
      editMarkdown={markdown}
      saving={saving}
      saveError={saveError}
      onTitleChange={(value) => { setTitle(value); if (saveError) setSaveError(''); }}
      onMarkdownChange={setMarkdown}
      onSave={({ keepEditing = false } = {}) => save(keepEditing)}
      entityLabel="模板"
      layout="page"
      showTags={false}
    />
  );
}
