import React from 'react';
import { type ProjectDocumentTemplateCardViewModel } from './ProjectDocumentTemplateCard';
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
}
export type ProjectTemplateListItemViewModel = ProjectDocumentTemplateCardViewModel;
export interface ProjectsPageProps {
    projects: ProjectListItemViewModel[];
    isSidebarOpen: boolean;
    loading?: boolean;
    error?: string;
    onOpenSidebar(): void;
    onOpenProject(projectId: string): void;
    onCreateProject(input: CreateProjectViewModel): void | Promise<void>;
    templates?: ProjectTemplateListItemViewModel[];
    templatesLoading?: boolean;
    templatesError?: string;
    templatesVisible?: boolean;
    onTemplatesVisibleChange?(visible: boolean): void;
    onOpenTemplates?(): void;
    onRetryTemplates?(): void;
    onOpenTemplate?(templateId: string): void;
    onCreateTemplate?(): void;
    onRetry?(): void;
}
export declare function ProjectsPage({ projects, isSidebarOpen, loading, error, onOpenSidebar, onOpenProject, onCreateProject, templates, templatesLoading, templatesError, templatesVisible, onTemplatesVisibleChange, onOpenTemplates, onRetryTemplates, onOpenTemplate, onCreateTemplate, onRetry, }: ProjectsPageProps): React.JSX.Element;
//# sourceMappingURL=ProjectsPage.d.ts.map