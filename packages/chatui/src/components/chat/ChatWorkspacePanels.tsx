import type { MouseEvent, ReactNode } from 'react';
import { FileText, FlaskConical, Search, X } from 'lucide-react';
import { BaseButton } from '../common';
import { ProjectDocumentPreviewContent } from '../../screens/projects/ProjectDocumentPreviewContent';
import type { ProjectDocumentPreviewViewModel } from '../../screens/projects/ProjectDocumentPreview';

export type ChatPreviewItemType = 'knowledge' | 'experiment-log' | 'draft';

export interface ChatPreviewActionViewModel {
  id: string;
  label: string;
  tone?: 'primary' | 'secondary' | 'danger';
}

export interface ChatPreviewItemViewModel {
  key: string;
  type: ChatPreviewItemType;
  title: string;
  subtitle: string;
  status?: string;
  document?: ProjectDocumentPreviewViewModel;
  loading?: boolean;
  error?: string;
  actions?: readonly ChatPreviewActionViewModel[];
}

export interface ChatPreviewPanelProps {
  tabs: readonly ChatPreviewItemViewModel[];
  activeKey: string | null;
  onSelectTab(key: string): void;
  onCloseTab(key: string): void;
  onClose(): void;
  pendingActionKey?: string;
  onAction?(itemKey: string, actionId: string): void;
  resolveActions?(item: ChatPreviewItemViewModel): readonly ChatPreviewActionViewModel[] | undefined;
  renderContent?(item: ChatPreviewItemViewModel): ReactNode;
  onDownloadAttachment?(attachmentId: string): void;
  onResizeStart(event: MouseEvent<HTMLDivElement>): void;
}

export function ChatPreviewPanel({
  tabs,
  activeKey,
  onSelectTab,
  onCloseTab,
  onClose,
  pendingActionKey,
  onAction,
  resolveActions,
  renderContent,
  onDownloadAttachment,
  onResizeStart,
}: ChatPreviewPanelProps) {
  const activeItem = tabs.find((tab) => tab.key === activeKey) ?? null;
  const activeActions = activeItem
    ? resolveActions?.(activeItem) ?? activeItem.actions
    : undefined;
  const customContent = activeItem ? renderContent?.(activeItem) : undefined;

  return (
    <div data-testid="chat-document-preview" className="relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white">
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="调整项目文件预览面板宽度"
        onMouseDown={onResizeStart}
        className="absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      />
      <div className="flex h-12 shrink-0 items-center justify-between gap-2 px-3">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const active = tab.key === activeKey;
            return (
              <div key={tab.key} className="group relative w-[150px] shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectTab(tab.key)}
                  className={`inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${
                    active
                      ? 'bg-chatPanelItemSurface text-primaryText'
                      : 'text-secondaryText hover:bg-chatPanelItemSurface'
                  }`}
                >
                  {tab.type === 'knowledge' || tab.type === 'draft' ? (
                    <FileText size={14} className="shrink-0 text-tertiaryText" />
                  ) : (
                    <FlaskConical size={14} className="shrink-0 text-tertiaryText" />
                  )}
                  <span className="min-w-0 truncate text-left">{tab.title}</span>
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onCloseTab(tab.key);
                  }}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100"
                  aria-label={`关闭预览：${tab.title}`}
                  title="关闭标签"
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {activeItem && activeActions?.map((action) => (
            <BaseButton
              key={action.id}
              type={action.tone ?? 'secondary'}
              size="small"
              disabled={pendingActionKey === activeItem.key || !onAction}
              onClick={() => onAction?.(activeItem.key, action.id)}
            >
              {action.label}
            </BaseButton>
          ))}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight"
            title="关闭预览"
            aria-label="关闭预览"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden pb-4 pt-2">
        {activeItem ? (
          customContent ? (
            customContent
          ) : activeItem.document ? (
            <ProjectDocumentPreviewContent
              document={activeItem.document}
              layout="panel"
              onDownloadAttachment={onDownloadAttachment}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText">
              {activeItem.loading ? '正在加载文档…' : activeItem.error || '文档暂时无法预览'}
            </div>
          )
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText">
            点击右侧项目文件内容可在此处预览
          </div>
        )}
      </div>
    </div>
  );
}

export interface ChatProjectKnowledgeItemViewModel {
  id: string;
  title: string;
  tags: readonly string[];
}

export interface ChatProjectExperimentItemViewModel {
  id: string;
  title: string;
  status: string;
  tags: readonly string[];
}

export interface ChatProjectFilesPanelProps {
  projectName?: string;
  searchQuery: string;
  error?: string;
  knowledgeDocs: readonly ChatProjectKnowledgeItemViewModel[];
  experiments: readonly ChatProjectExperimentItemViewModel[];
  activePreviewKey: string | null;
  onSearchQueryChange(value: string): void;
  onOpenKnowledge(id: string): void;
  onOpenExperiment(id: string): void;
  onResizeStart(event: MouseEvent<HTMLDivElement>): void;
}

export function ChatProjectFilesPanel({
  projectName = '个人工作台',
  searchQuery,
  error,
  knowledgeDocs,
  experiments,
  activePreviewKey,
  onSearchQueryChange,
  onOpenKnowledge,
  onOpenExperiment,
  onResizeStart,
}: ChatProjectFilesPanelProps) {
  const totalItems = knowledgeDocs.length + experiments.length;

  return (
    <div className="relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white">
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="调整项目文件面板宽度"
        onMouseDown={onResizeStart}
        className="absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      />
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-6 text-sm text-primaryText">
          <section className="space-y-2.5">
            <div className="truncate text-[15px] font-medium text-primaryText">{projectName}</div>
            <label className="relative block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" />
              <input
                value={searchQuery}
                onChange={(event) => onSearchQueryChange(event.target.value)}
                placeholder="搜索文件"
                className="h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
              />
            </label>
          </section>

          <section>
            <div className="space-y-1">
              {error ? (
                <div className="rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger" role="alert">
                  {error}
                </div>
              ) : totalItems === 0 ? (
                <div className="rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText">
                  {searchQuery.trim() ? '未找到匹配的文件' : '暂无项目文件'}
                </div>
              ) : (
                <>
                  {knowledgeDocs.map((doc) => {
                    const previewKey = `knowledge:${doc.id}`;
                    const active = activePreviewKey === previewKey;
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => onOpenKnowledge(doc.id)}
                        className={`w-full rounded-lg px-2 py-1.5 text-left transition-colors ${
                          active ? 'bg-chatPanelItemSurface' : 'hover:bg-chatPanelItemSurface'
                        }`}
                      >
                        <div className={`truncate text-sm text-primaryText ${active ? 'font-semibold' : 'font-normal'}`}>
                          {doc.title}
                        </div>
                        <div className="mt-0.5 truncate text-xs text-tertiaryText">{doc.tags[0] ?? '未分类'}</div>
                      </button>
                    );
                  })}
                  {experiments.map((experiment) => {
                    const previewKey = `experiment:${experiment.id}`;
                    const active = activePreviewKey === previewKey;
                    return (
                      <button
                        key={experiment.id}
                        type="button"
                        onClick={() => onOpenExperiment(experiment.id)}
                        className={`w-full rounded-lg px-2 py-1.5 text-left transition-colors ${
                          active ? 'bg-chatPanelItemSurface' : 'hover:bg-chatPanelItemSurface'
                        }`}
                      >
                        <div className={`truncate text-sm text-primaryText ${active ? 'font-semibold' : 'font-normal'}`}>
                          {experiment.title}
                        </div>
                        <div className="mt-0.5 truncate text-xs text-tertiaryText">
                          {experiment.tags[0] ?? experiment.status}
                        </div>
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
