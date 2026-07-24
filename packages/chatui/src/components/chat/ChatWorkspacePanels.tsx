import type { MouseEvent } from 'react';
import { FileText, FlaskConical, Search, X } from 'lucide-react';

export type ChatPreviewItemType = 'knowledge' | 'experiment-log';

export interface ChatPreviewItemViewModel {
  key: string;
  type: ChatPreviewItemType;
  title: string;
  subtitle: string;
  content: string;
  status?: string;
}

export interface ChatPreviewPanelProps {
  tabs: readonly ChatPreviewItemViewModel[];
  activeKey: string | null;
  onSelectTab(key: string): void;
  onCloseTab(key: string): void;
  onClose(): void;
  onResizeStart(event: MouseEvent<HTMLDivElement>): void;
}

export function ChatPreviewPanel({
  tabs,
  activeKey,
  onSelectTab,
  onCloseTab,
  onClose,
  onResizeStart,
}: ChatPreviewPanelProps) {
  const activeItem = tabs.find((tab) => tab.key === activeKey) ?? null;

  return (
    <div className="relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white">
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
                  {tab.type === 'knowledge' ? (
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

      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-2">
        {activeItem ? (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <h3 className="break-words text-base font-semibold text-primaryText">{activeItem.title}</h3>
              {activeItem.type === 'knowledge' && (
                <div className="text-xs text-tertiaryText">{activeItem.subtitle}</div>
              )}
              {activeItem.status && (
                <div className="inline-flex items-center rounded-full bg-bgLight px-2 py-1 text-xs text-secondaryText">
                  {activeItem.status}
                </div>
              )}
            </div>
            <div className="rounded-xl border border-borderGray bg-chatPreviewContentSurface p-3">
              <p className="whitespace-pre-line break-words text-sm leading-6 text-secondaryText">
                {activeItem.content}
              </p>
            </div>
          </div>
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
  projectName = '未归属项目',
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
