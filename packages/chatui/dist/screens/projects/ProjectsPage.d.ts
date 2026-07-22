import React from 'react';
export interface ProjectListItemViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    description: string;
    conversationCount: number;
    documentCount: number;
}
export interface CreateProjectViewModel {
    name: string;
    description: string;
    documents: File[];
}
export interface ProjectsPageProps {
    projects: ProjectListItemViewModel[];
    isSidebarOpen: boolean;
    loading?: boolean;
    error?: string;
    onOpenSidebar(): void;
    onOpenProject(projectId: string): void;
    onCreateProject(input: CreateProjectViewModel): void | Promise<void>;
    onRetry?(): void;
}
export declare function ProjectsPage({ projects, isSidebarOpen, loading, error, onOpenSidebar, onOpenProject, onCreateProject, onRetry, }: ProjectsPageProps): React.JSX.Element;
//# sourceMappingURL=ProjectsPage.d.ts.map