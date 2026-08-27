import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Menu, MoreHorizontal, Trash2 } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseDeleteConfirmModal, BaseModal } from '../../components/common';
import type { ProjectDocumentAttachmentUploadViewModel, ProjectDocumentAttachmentViewModel } from './ProjectDocumentAttachments';
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
  tags: string[];
  canEdit: boolean;
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
  onUploadAttachments?(files: File[], onReady?: () => void): void | Promise<void>;
  onDeleteAttachment?(attachmentId: string): void | Promise<void>;
  onTagsChange?(tags: string[]): void;
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
  saveError,
  attachmentAccept,
  onTitleChange,
  onMarkdownChange,
  onSave,
  onUploadAttachments,
  onDeleteAttachment,
  onTagsChange,
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
  const [uploadingAttachments, setUploadingAttachments] = useState(false);
  const [attachmentUploads, setAttachmentUploads] = useState<ProjectDocumentAttachmentUploadViewModel[]>([]);
  const [attachmentError, setAttachmentError] = useState('');
  const [attachmentPendingDeletion, setAttachmentPendingDeletion] = useState<ProjectDocumentAttachmentViewModel | null>(null);
  const [deletingAttachment, setDeletingAttachment] = useState(false);
  const [attachmentDeleteError, setAttachmentDeleteError] = useState('');
  const attachmentInputRef = useRef<HTMLInputElement | null>(null);
  const attachmentUploadTimersRef = useRef<Record<string, number>>({});

  useEffect(() => () => {
    Object.values(attachmentUploadTimersRef.current).forEach((timer) => window.clearInterval(timer));
  }, []);
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
    if (!editing || !onSave || saving) return;
    await onSave({ keepEditing: false });
  };
  const saveAndKeepEditing = async () => {
    if (!editing || !onSave || saving) return;
    await onSave({ keepEditing: true });
  };
  const uploadAttachments = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = '';
    if (!files.length || !onUploadAttachments) return;
    const batchId = Date.now();
    const uploads = files.map((file, index) => ({
      id: `${batchId}-${index}-${file.name}`,
      name: file.name,
      progress: 0,
    }));
    setAttachmentUploads(uploads);
    uploads.forEach((upload) => {
      attachmentUploadTimersRef.current[upload.id] = window.setInterval(() => {
        setAttachmentUploads((current) => current.map((item) => item.id === upload.id
          ? { ...item, progress: Math.min(92, item.progress + Math.max(3, Math.ceil((92 - item.progress) / 5))) }
          : item));
      }, 180);
    });
    setUploadingAttachments(true);
    setAttachmentError('');
    const finishUploadProgress = () => {
      Object.values(attachmentUploadTimersRef.current).forEach((timer) => window.clearInterval(timer));
      attachmentUploadTimersRef.current = {};
      setAttachmentUploads([]);
    };
    try {
      await onUploadAttachments(files, finishUploadProgress);
      finishUploadProgress();
    } catch (error) {
      finishUploadProgress();
      setAttachmentError(error instanceof Error ? error.message : '附件上传失败');
    } finally {
      setUploadingAttachments(false);
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
      {onUploadAttachments && (
        <input
          ref={attachmentInputRef}
          type="file"
          multiple
          accept={attachmentAccept}
          className="hidden"
          onChange={(event) => void uploadAttachments(event)}
        />
      )}
      <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && (
            <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏">
              <Menu size={20} />
            </button>
          )}
          <button type="button" onClick={onBackToProject} className="inline-flex items-center gap-1 text-sm text-tertiaryText transition-colors hover:text-primaryText">
            <ArrowLeft size={16} />
            返回
          </button>
        </div>

        {document.canEdit && onEdit && <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 rounded-lg bg-bgLight p-0.5" aria-label="文档模式">
            <button type="button" disabled={saving} onClick={() => void switchToPreview()} className={`rounded-md px-3 py-1 text-sm transition-colors disabled:cursor-wait ${!editing ? 'bg-surface text-primaryText shadow-sm' : 'text-secondaryText hover:text-primaryText'}`}>浏览</button>
            <button type="button" disabled={saving} onClick={onEdit} className={`rounded-md px-3 py-1 text-sm transition-colors disabled:cursor-wait ${editing ? 'bg-surface text-primaryText shadow-sm' : 'text-secondaryText hover:text-primaryText'}`}>编辑</button>
          </div>
          <div className="w-[88px] shrink-0">
            {editing && <BaseButton type="primary" size="small" rounded="large" className="w-full" disabled={saving} onClick={() => void saveAndKeepEditing()}>{saving ? '保存中…' : '保存'}</BaseButton>}
          </div>
          {onDelete && <button type="button" disabled={saving} onClick={() => { setDeleteError(''); setShowDeleteConfirmModal(true); }} className="inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText disabled:cursor-wait disabled:opacity-50" title="删除" aria-label={`删除${entityLabel}`}><Trash2 size={18} /></button>}
          {(onSaveAsTemplate || onUploadAttachments) && <BaseActionMenu
            open={showActionMenu}
            onOpenChange={setShowActionMenu}
            placement="bottom-end"
            width={160}
            trigger={<span className="inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText"><MoreHorizontal size={20} /></span>}
            items={[
              ...(onUploadAttachments ? [{ key: 'uploadAttachment', label: uploadingAttachments ? '上传中…' : '上传附件', disabled: uploadingAttachments }] : []),
              ...(onSaveAsTemplate ? [{ key: 'saveAsTemplate', label: savingTemplate ? '保存中…' : '保存为模板', disabled: savingTemplate }] : []),
            ]}
            onItemClick={(item) => {
              setShowActionMenu(false);
              if (item.key === 'uploadAttachment') attachmentInputRef.current?.click();
              if (item.key === 'saveAsTemplate') void saveAsTemplate();
            }}
          />}
        </div>}
      </header>

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
              attachmentUploads={attachmentUploads}
              attachmentAccept={attachmentAccept}
              saving={saving}
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
              attachmentUploads={attachmentUploads}
              layout={layout === 'compact' ? 'panel' : 'page'}
              showTags={showTags}
              onDownloadAttachment={onDownloadAttachment}
            />
          )}
        </div>
      </div>

      {templateError && <div role="alert" className="absolute bottom-6 left-1/2 z-30 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-danger bg-white px-4 py-2 text-sm text-danger shadow-md">{templateError}</div>}
      {attachmentError && <div role="alert" className="absolute bottom-6 left-1/2 z-30 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-danger bg-white px-4 py-2 text-sm text-danger shadow-md">{attachmentError}</div>}

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
