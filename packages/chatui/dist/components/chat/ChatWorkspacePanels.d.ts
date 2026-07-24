import type { MouseEvent } from 'react';
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
export declare function ChatPreviewPanel({ tabs, activeKey, onSelectTab, onCloseTab, onClose, onResizeStart, }: ChatPreviewPanelProps): import("react").JSX.Element;
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
export declare function ChatProjectFilesPanel({ projectName, searchQuery, error, knowledgeDocs, experiments, activePreviewKey, onSearchQueryChange, onOpenKnowledge, onOpenExperiment, onResizeStart, }: ChatProjectFilesPanelProps): import("react").JSX.Element;
//# sourceMappingURL=ChatWorkspacePanels.d.ts.map