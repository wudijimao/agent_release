import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Menu } from 'lucide-react';
import { BaseButton, BaseEmpty, BaseModal } from '../../components/common';

export interface ExperimentDetailSectionViewModel {
  title: string;
  content: string;
}

export interface ExperimentTimelineEntryViewModel {
  status: string;
  detailTitle?: string;
  actor?: string;
  updatedAt?: string;
  markdownContent?: string;
  detailSections?: ExperimentDetailSectionViewModel[];
  summary?: string;
  attachments?: string[];
}

export interface ExperimentDetailViewModel {
  id: string;
  title: string;
  updatedAt: string;
  ownerName: string;
  timeline: ExperimentTimelineEntryViewModel[];
}

export interface ExperimentDetailProjectViewModel {
  id: string;
  name: string;
}

export interface ExperimentDetailPageProps {
  project?: ExperimentDetailProjectViewModel;
  experiment?: ExperimentDetailViewModel;
  isSidebarOpen: boolean;
  onOpenSidebar(): void;
  onBackToProjects(): void;
  onBackToProject(): void;
  onDelete(): void;
  onEdit?(): void;
}

const getDefaultTimelineEntry = (timeline: ExperimentTimelineEntryViewModel[]) =>
  timeline.find((entry) => entry.status !== '实验结束') ?? timeline[0] ?? null;

export function ExperimentDetailPage({
  project,
  experiment,
  isSidebarOpen,
  onOpenSidebar,
  onBackToProjects,
  onBackToProject,
  onDelete,
  onEdit,
}: ExperimentDetailPageProps) {
  const [isContentScrolling, setIsContentScrolling] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const contentScrollTimerRef = useRef<number | null>(null);
  const activeTimeline = useMemo(
    () => experiment ? getDefaultTimelineEntry(experiment.timeline) : null,
    [experiment],
  );
  const actorName = activeTimeline?.actor || experiment?.ownerName || '未知成员';

  useEffect(() => () => {
    if (contentScrollTimerRef.current !== null) window.clearTimeout(contentScrollTimerRef.current);
  }, []);

  const handleContentScroll = () => {
    setIsContentScrolling(true);
    if (contentScrollTimerRef.current !== null) window.clearTimeout(contentScrollTimerRef.current);
    contentScrollTimerRef.current = window.setTimeout(() => setIsContentScrolling(false), 700);
  };

  const confirmDelete = () => {
    setShowDeleteConfirmModal(false);
    onDelete();
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
          <div className="flex items-center gap-2 text-sm">
            <button type="button" onClick={onBackToProjects} className="text-tertiaryText transition-colors hover:text-primaryText">项目</button>
            <span className="text-tertiaryText">/</span>
            <button type="button" onClick={onBackToProject} disabled={!project} className={`transition-colors ${project ? 'text-tertiaryText hover:text-primaryText' : 'cursor-not-allowed text-tertiaryText opacity-60'}`}>
              {project?.name ?? '实验详情'}
            </button>
            <span className="text-tertiaryText">/</span>
            <span className="font-medium text-primaryText">{experiment?.title ?? '实验详情'}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <BaseButton type="secondary" size="small" rounded="large" onClick={() => setShowDeleteConfirmModal(true)}>删除</BaseButton>
          <BaseButton type="primary" size="small" rounded="large" onClick={onEdit}>编辑</BaseButton>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10">
        <div className="mx-auto flex h-full min-h-0 max-w-[1240px] flex-col">
          {!project || !experiment ? (
            <div className="w-full rounded-lg border border-dashed border-borderSoft"><BaseEmpty description="实验不存在或已被删除" /></div>
          ) : (
            <>
              <section className="mb-4 shrink-0">
                <h1 className="text-2xl font-semibold text-primaryText">{activeTimeline?.detailTitle ?? experiment.title}</h1>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText">
                    <span>创建人: {actorName}</span>
                    <span>最近修改: {actorName}</span>
                    <span>{activeTimeline?.updatedAt ?? experiment.updatedAt}</span>
                  </div>
                </div>
                <div className="mt-4 h-px bg-lineSubtle" />
              </section>

              <section onScroll={handleContentScroll} className={`auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${isContentScrolling ? 'is-scrolling' : ''}`}>
                {activeTimeline?.markdownContent ? (
                  <div className="prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{activeTimeline.markdownContent}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {(activeTimeline?.detailSections ?? []).map((section) => (
                      <article key={section.title} className="rounded-xl border border-lineSubtle bg-surface p-4">
                        <div className="text-sm font-medium text-primaryText">{section.title}</div>
                        <p className="mt-2 text-sm leading-6 text-secondaryText">{section.content}</p>
                      </article>
                    ))}
                  </div>
                )}

                <div className="mt-8 border-t border-lineSubtle pt-6">
                  <div className="text-sm font-medium text-primaryText">记录摘要</div>
                  <p className="mt-2 text-sm leading-6 text-secondaryText">{activeTimeline?.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-tertiaryText">
                    <span>更新人 {activeTimeline?.actor}</span>
                    <span>更新时间 {activeTimeline?.updatedAt}</span>
                  </div>
                </div>

                <div className="mb-6 mt-8 border-t border-lineSubtle pt-6">
                  <div className="text-sm font-medium text-primaryText">附件</div>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {(activeTimeline?.attachments ?? []).map((attachment) => (
                      <span key={attachment} className="inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText">{attachment}</span>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>

      <BaseModal visible={showDeleteConfirmModal} title="删除文档" width={420} maskClosable={false} onCancel={() => setShowDeleteConfirmModal(false)} footer={(
        <div className="flex justify-end gap-2 border-t border-lineSoft px-5 py-3">
          <BaseButton type="secondary" size="medium" onClick={() => setShowDeleteConfirmModal(false)}>取消</BaseButton>
          <BaseButton type="danger" size="medium" onClick={confirmDelete}>删除</BaseButton>
        </div>
      )}>
        <div className="text-sm leading-6 text-secondaryText">删除文档后将不可回复，确认删除当前文档吗？</div>
      </BaseModal>
    </div>
  );
}
