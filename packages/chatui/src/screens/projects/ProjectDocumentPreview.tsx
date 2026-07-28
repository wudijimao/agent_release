import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Clock3, Download, FileText, Loader2, Menu, SearchX } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BaseButton, BaseEmpty, BaseModal } from '../../components/common';
import markdownStyles from './ProjectDocumentMarkdown.module.css';

export interface ProjectDocumentAttachmentViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  mimeType: string;
  sizeLabel: string;
  status: 'ready' | 'processing' | 'failed';
  statusLabel: string;
}

export interface ProjectDocumentIndexViewModel extends Record<string, unknown> {
  status: 'disabled' | 'pending' | 'indexed';
  statusLabel: string;
  detail: string;
}

export interface ProjectDocumentPreviewViewModel extends Record<string, unknown> {
  id: string;
  title: string;
  markdown: string;
  updatedAt: string;
  canEdit: boolean;
  attachments: ProjectDocumentAttachmentViewModel[];
  index: ProjectDocumentIndexViewModel;
}

export interface ProjectDocumentPreviewProps {
  projectName: string;
  document: ProjectDocumentPreviewViewModel;
  isSidebarOpen: boolean;
  onOpenSidebar(): void;
  onBackToProjects(): void;
  onBackToProject(): void;
  onEdit(): void;
  onDelete(): void | Promise<void>;
  onOpenAttachment(attachmentId: string): void;
}

const indexIcon = {
  disabled: <SearchX size={14} />,
  pending: <Clock3 size={14} />,
  indexed: <CheckCircle2 size={14} />,
};

export function ProjectDocumentPreview({
  projectName,
  document,
  isSidebarOpen,
  onOpenSidebar,
  onBackToProjects,
  onBackToProject,
  onEdit,
  onDelete,
  onOpenAttachment,
}: ProjectDocumentPreviewProps) {
  const [isContentScrolling, setIsContentScrolling] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const contentScrollTimerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (contentScrollTimerRef.current !== null) window.clearTimeout(contentScrollTimerRef.current);
  }, []);

  const handleContentScroll = () => {
    setIsContentScrolling(true);
    if (contentScrollTimerRef.current !== null) window.clearTimeout(contentScrollTimerRef.current);
    contentScrollTimerRef.current = window.setTimeout(() => setIsContentScrolling(false), 700);
  };

  const confirmDelete = async () => {
    setDeleting(true);
    setDeleteError('');
    try {
      await onDelete();
      setShowDeleteConfirmModal(false);
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : '文档删除失败');
    } finally {
      setDeleting(false);
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
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <button type="button" onClick={onBackToProjects} className="shrink-0 text-tertiaryText transition-colors hover:text-primaryText">项目</button>
            <span className="shrink-0 text-tertiaryText">/</span>
            <button type="button" onClick={onBackToProject} className="max-w-56 truncate text-tertiaryText transition-colors hover:text-primaryText">{projectName}</button>
            <span className="shrink-0 text-tertiaryText">/</span>
            <span className="truncate font-medium text-primaryText">{document.title}</span>
          </div>
        </div>

        {document.canEdit && <div className="flex items-center gap-2">
          <BaseButton type="secondary" size="small" rounded="large" onClick={() => { setDeleteError(''); setShowDeleteConfirmModal(true); }}>删除</BaseButton>
          <BaseButton type="primary" size="small" rounded="large" onClick={onEdit}>编辑</BaseButton>
        </div>}
      </header>

      <div className="min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10">
        <div className="mx-auto flex h-full min-h-0 max-w-[1240px] flex-col">
          <section className="mb-4 shrink-0 px-[120px]">
            <h1 className="text-2xl font-semibold text-primaryText">{document.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText">
              <span>最近修改: {document.updatedAt}</span>
              <span className="inline-flex items-center gap-1.5" title={document.index.detail}>
                {indexIcon[document.index.status]}
                {document.index.statusLabel}
              </span>
            </div>
            <div className="mt-4 h-px bg-lineSubtle" />
          </section>

          <section onScroll={handleContentScroll} className={`auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${isContentScrolling ? 'is-scrolling' : ''}`}>
            {document.markdown.trim() ? (
              <div className={`${markdownStyles.preview} px-[120px]`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{document.markdown}</ReactMarkdown>
              </div>
            ) : (
              <div className="mx-[120px] rounded-lg border border-dashed border-borderSoft">
                <BaseEmpty description="正文暂无内容" />
              </div>
            )}

            <div className="mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6">
              <div className="text-sm font-medium text-primaryText">附件</div>
              {document.attachments.length ? (
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {document.attachments.map((attachment) => (
                    <button
                      key={attachment.id}
                      type="button"
                      onClick={() => onOpenAttachment(attachment.id)}
                      className="inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText transition-colors hover:border-controlBorder hover:text-primaryText"
                      title={`${attachment.statusLabel} · ${attachment.sizeLabel}`}
                    >
                      <FileText size={14} className="shrink-0" />
                      <span className="max-w-72 truncate">{attachment.name}</span>
                      <span className="text-xs text-tertiaryText">{attachment.sizeLabel}</span>
                      {attachment.status === 'processing' ? <Loader2 size={12} className="animate-spin" /> : <Download size={13} />}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-tertiaryText">暂无附件</p>
              )}
            </div>
          </section>
        </div>
      </div>

      <BaseModal
        visible={showDeleteConfirmModal}
        title="删除文档"
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
        <div className="text-sm leading-6 text-secondaryText">删除文档后将不可恢复，确认删除当前文档吗？</div>
        {deleteError && <div role="alert" className="mt-3 text-sm text-danger">{deleteError}</div>}
      </BaseModal>
    </div>
  );
}
