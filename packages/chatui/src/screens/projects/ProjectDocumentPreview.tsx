import React, { useState } from 'react';
import { ArrowLeft, Loader2, Menu, MoreHorizontal, Trash2 } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseDeleteConfirmModal, BaseModal, ShareModal } from '../../components/common';
import type { ProjectDocumentUploadHandler, ProjectDocumentAttachmentViewModel } from './ProjectDocumentAttachments';
import type { ProjectDocumentIndexViewModel } from './ProjectDocumentMetadata';
import { ProjectDocumentEditor } from './ProjectDocumentEditor';
import { ProjectDocumentPreviewContent } from './ProjectDocumentPreviewContent';

export interface ProjectDocumentPreviewViewModel extends Record<string, unknown> {
  id: string;
  title: string;
  markdown: string;
  createdByName: string;
  updatedByName: string;
  updatedAt: string;
  revision?: string;
  tags: string[];
  canEdit: boolean;
  contentProcessing?: boolean;
  attachments: ProjectDocumentAttachmentViewModel[];
  index?: ProjectDocumentIndexViewModel;
}

export interface ProjectDocumentPreviewProps {
  projectName: string;
  document: ProjectDocumentPreviewViewModel;
  isSidebarOpen: boolean;
  onOpenSidebar(): void;
  onBackToProjects(): void;
  onBackToProject(): void;
  onEdit?(): void;
  onDelete?(): void | Promise<void>;
  onSaveAsTemplate?(): void | Promise<void>;
  onViewTemplates?(): void;
  onDownloadAttachment?(attachmentId: string): void;
  editing?: boolean;
  editTitle?: string;
  editMarkdown?: string;
  editTags?: string[];
  saving?: boolean;
  saveError?: string;
  attachmentAccept?: string;
  onTitleChange?(title: string): void;
  onMarkdownChange?(markdown: string): void;
  onSave?(options?: { keepEditing?: boolean }): void | Promise<void>;
  onUploadAttachments?: ProjectDocumentUploadHandler;
  busy?: boolean;
  onReload?(): void;
  onDeleteAttachment?(attachmentId: string): void | Promise<void>;
  onTagsChange?(tags: string[]): void;
  shareUrl?: string;
  entityLabel?: '文档' | '模板';
  layout?: 'page' | 'compact';
  showTags?: boolean;
}

export function ProjectDocumentPreview({
  projectName,
  document,
  isSidebarOpen,
  onOpenSidebar,
  onBackToProjects,
  onBackToProject,
  onEdit,
  onDelete,
  onSaveAsTemplate,
  onViewTemplates,
  onDownloadAttachment,
  editing = false,
  editTitle = '',
  editMarkdown = '',
  editTags,
  saving = false,
  busy = false,
  onReload,
  saveError,
  attachmentAccept,
  onTitleChange,
  onMarkdownChange,
  onSave,
  onUploadAttachments,
  onDeleteAttachment,
  onTagsChange,
  shareUrl,
  entityLabel = '文档',
  layout = 'page',
  showTags = true,
}: ProjectDocumentPreviewProps) {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [templateError, setTemplateError] = useState('');
  const [showSaveTemplateSuccessModal, setShowSaveTemplateSuccessModal] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [attachmentPendingDeletion, setAttachmentPendingDeletion] = useState<ProjectDocumentAttachmentViewModel | null>(null);
  const [deletingAttachment, setDeletingAttachment] = useState(false);
  const [attachmentDeleteError, setAttachmentDeleteError] = useState('');
  const locked = busy || Boolean(document.contentProcessing);
  const confirmDelete = async () => {
    if (!onDelete) return;
    setDeleting(true);
    setDeleteError('');
    try {
      await onDelete();
      setShowDeleteConfirmModal(false);
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : `${entityLabel}删除失败`);
    } finally {
      setDeleting(false);
    }
  };
  const saveAsTemplate = async () => {
    if (!onSaveAsTemplate || savingTemplate) return;
    setSavingTemplate(true);
    setTemplateError('');
    try {
      await onSaveAsTemplate();
      setShowSaveTemplateSuccessModal(true);
    } catch (error) {
      setTemplateError(error instanceof Error ? error.message : '模板保存失败');
    } finally {
      setSavingTemplate(false);
    }
  };
  const switchToPreview = async () => {
    if (!editing || !onSave || saving || locked) return;
    await onSave({ keepEditing: false });
  };
  const saveAndBackToProject = async () => {
    if (locked && editing) return;
    if (!editing || !onSave) {
      onBackToProject();
      return;
    }
    if (saving) return;
    try {
      await onSave({ keepEditing: false });
      onBackToProject();
    } catch {
      // 保存错误由宿主通过 saveError 展示，保留当前页面避免丢失编辑内容。
    }
  };
  const requestAttachmentDeletion = (attachmentId: string) => {
    const attachment = document.attachments.find((item) => item.id === attachmentId);
    if (!attachment) return;
    setAttachmentDeleteError('');
    setAttachmentPendingDeletion(attachment);
  };
  const confirmAttachmentDeletion = async () => {
    if (!onDeleteAttachment || !attachmentPendingDeletion || deletingAttachment) return;
    setDeletingAttachment(true);
    setAttachmentDeleteError('');
    try {
      await onDeleteAttachment(attachmentPendingDeletion.id);
      setAttachmentPendingDeletion(null);
    } catch (error) {
      setAttachmentDeleteError(error instanceof Error ? error.message : '附件删除失败');
    } finally {
      setDeletingAttachment(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-surface">
      <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && (
            <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏">
              <Menu size={20} />
            </button>
          )}
          <button type="button" disabled={saving} onClick={() => void saveAndBackToProject()} className="inline-flex items-center gap-1 text-sm text-tertiaryText transition-colors hover:text-primaryText disabled:cursor-wait disabled:opacity-60">
            <ArrowLeft size={16} />
            返回
          </button>
        </div>

        {document.canEdit && onEdit && <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 rounded-lg bg-bgLight p-0.5" aria-label="文档模式">
            <button type="button" disabled={saving} onClick={() => void switchToPreview()} className={`rounded-md px-3 py-1 text-sm transition-colors disabled:cursor-wait ${!editing ? 'bg-surface text-primaryText shadow-sm' : 'text-secondaryText hover:text-primaryText'}`}>浏览</button>
            <button type="button" disabled={saving || locked} onClick={onEdit} className={`rounded-md px-3 py-1 text-sm transition-colors disabled:cursor-wait ${editing ? 'bg-surface text-primaryText shadow-sm' : 'text-secondaryText hover:text-primaryText'}`}>编辑</button>
          </div>
          {editing && saving && <span className="shrink-0 text-xs text-tertiaryText">保存中…</span>}
          {onDelete && <button type="button" disabled={saving || locked} onClick={() => { setDeleteError(''); setShowDeleteConfirmModal(true); }} className="inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText disabled:cursor-wait disabled:opacity-50" title="删除" aria-label={`删除${entityLabel}`}><Trash2 size={18} /></button>}
          {(onSaveAsTemplate || shareUrl) && <BaseActionMenu
            open={showActionMenu}
            onOpenChange={setShowActionMenu}
            placement="bottom-end"
            width={160}
            trigger={<span className="inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText"><MoreHorizontal size={20} /></span>}
            items={[
              ...(onSaveAsTemplate ? [{ key: 'saveAsTemplate', label: savingTemplate ? '保存中…' : '保存为模板', disabled: savingTemplate || locked }] : []),
              ...(shareUrl ? [{ key: 'share', label: '分享文档' }] : []),
            ]}
            onItemClick={(item) => {
              setShowActionMenu(false);
              if (item.key === 'saveAsTemplate') void saveAsTemplate();
              if (item.key === 'share') setShowShareModal(true);
            }}
          />}
        </div>}
      </header>

      {locked && <div className="shrink-0 px-4 pt-2 md:px-8 lg:px-10">
        <div className={`mx-auto w-full ${layout === 'compact' ? 'max-w-[840px]' : 'max-w-[1240px]'}`}>
          <div role="status" aria-label={busy ? '文件上传状态' : '正文识别状态'} className={`flex items-center gap-3 rounded-xl border border-lineSubtle border-l-4 border-l-primary bg-primary-soft px-4 py-3 text-sm font-medium text-primaryText shadow-sm ${layout === 'compact' ? 'mx-6 md:mx-8' : 'mx-[120px]'}`}>
            <Loader2 size={18} className="shrink-0 animate-spin text-primary" aria-hidden="true" />
            <span>{busy ? '正在保存并添加文件，暂时无法编辑…' : '正在识别并追加正文，完成后可继续编辑。'}</span>
          </div>
        </div>
      </div>}
      {saveError && <div role="alert" className="px-6 py-2 text-sm text-danger">{saveError}{onReload && <button type="button" disabled={busy || saving} onClick={onReload} className="ml-3 underline">放弃本地修改并重新加载正文</button>}</div>}
      <div className="min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10">
        <div className={`mx-auto flex h-full min-h-0 w-full flex-col ${layout === 'compact' ? 'max-w-[840px]' : 'max-w-[1240px]'}`}>
          {editing && onTitleChange && onMarkdownChange ? (
            <ProjectDocumentEditor
              projectName={projectName}
              title={editTitle}
              initialMarkdown={editMarkdown}
              createdByName={document.createdByName}
              updatedByName={document.updatedByName}
              updatedAt={document.updatedAt}
              index={document.index}
              attachments={document.attachments}
              attachmentAccept={attachmentAccept}
              saving={saving}
              disabled={locked}
              onUploadAttachments={document.canEdit ? onUploadAttachments : undefined}
              saveError={saveError}
              layout={layout === 'compact' ? 'panel' : 'page'}
              showHeaderActions={false}
              onTitleChange={onTitleChange}
              onMarkdownChange={onMarkdownChange}
              tags={editTags ?? document.tags}
              onTagsChange={onTagsChange}
              showTags={showTags}
              onDownloadAttachment={onDownloadAttachment}
              onDeleteAttachment={onDeleteAttachment ? requestAttachmentDeletion : undefined}
              onSave={() => void switchToPreview()}
              onClose={() => void switchToPreview()}
            />
          ) : (
            <ProjectDocumentPreviewContent
              document={document}
              onUploadAttachments={document.canEdit ? onUploadAttachments : undefined}
              onDeleteAttachment={document.canEdit && !locked && onDeleteAttachment ? requestAttachmentDeletion : undefined}
              attachmentAccept={attachmentAccept}
              disabled={locked}
              layout={layout === 'compact' ? 'panel' : 'page'}
              showTags={showTags}
              onDownloadAttachment={onDownloadAttachment}
            />
          )}
        </div>
      </div>

      {templateError && <div role="alert" className="absolute bottom-6 left-1/2 z-30 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-danger bg-white px-4 py-2 text-sm text-danger shadow-md">{templateError}</div>}

      <BaseModal
        visible={showSaveTemplateSuccessModal}
        title="保存成功"
        width={420}
        maskClosable={false}
        onCancel={() => setShowSaveTemplateSuccessModal(false)}
        footer={(
          <div className="flex justify-end gap-2 border-t border-lineSoft px-5 py-3">
            <BaseButton type="secondary" size="medium" onClick={() => setShowSaveTemplateSuccessModal(false)}>取消</BaseButton>
            <BaseButton
              type="primary"
              size="medium"
              onClick={() => {
                setShowSaveTemplateSuccessModal(false);
                onViewTemplates?.();
              }}
            >
              去查看
            </BaseButton>
          </div>
        )}
      >
        <p className="text-sm leading-6 text-secondaryText">文档已保存至个人模板，可前往模板列表查看。</p>
      </BaseModal>

      <BaseDeleteConfirmModal
        visible={Boolean(attachmentPendingDeletion)}
        title="删除附件"
        description={<>删除后，附件“{attachmentPendingDeletion?.name}”将无法恢复。确认删除当前附件吗？</>}
        loading={deletingAttachment}
        error={attachmentDeleteError}
        onCancel={() => { setAttachmentPendingDeletion(null); setAttachmentDeleteError(''); }}
        onConfirm={confirmAttachmentDeletion}
      />

      {shareUrl && <ShareModal
        visible={showShareModal}
        title="分享文档"
        shareUrl={shareUrl}
        onClose={() => setShowShareModal(false)}
      />}

      {onDelete && <BaseModal
        visible={showDeleteConfirmModal}
        title={`删除${entityLabel}`}
        width={420}
        maskClosable={false}
        onCancel={() => { if (!deleting) setShowDeleteConfirmModal(false); }}
        footer={(
          <div className="flex justify-end gap-2 border-t border-lineSoft px-5 py-3">
            <BaseButton type="secondary" size="medium" disabled={deleting} onClick={() => setShowDeleteConfirmModal(false)}>取消</BaseButton>
            <BaseButton type="danger" size="medium" disabled={deleting} onClick={() => void confirmDelete()}>{deleting ? '删除中…' : '删除'}</BaseButton>
          </div>
        )}
      >
        <div className="text-sm leading-6 text-secondaryText">删除{entityLabel}后将不可恢复，确认删除当前{entityLabel}吗？</div>
        {deleteError && <div role="alert" className="mt-3 text-sm text-danger">{deleteError}</div>}
      </BaseModal>}
    </div>
  );
}
