import React from 'react';
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
export declare function ExperimentDetailPage({ project, experiment, isSidebarOpen, onOpenSidebar, onBackToProjects, onBackToProject, onDelete, onEdit, }: ExperimentDetailPageProps): React.JSX.Element;
//# sourceMappingURL=ExperimentDetailPage.d.ts.map