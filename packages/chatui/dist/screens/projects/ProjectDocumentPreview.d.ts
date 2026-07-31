import React from 'react';
import { type ProjectDocumentAttachmentViewModel } from './ProjectDocumentAttachments';
import { type ProjectDocumentIndexViewModel } from './ProjectDocumentMetadata';
export interface ProjectDocumentPreviewViewModel extends Record<string, unknown> {
    id: string;
    title: string;
    markdown: string;
    createdByName: string;
    updatedByName: string;
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
}
export declare function ProjectDocumentPreview({ projectName, document, isSidebarOpen, onOpenSidebar, onBackToProjects, onBackToProject, onEdit, onDelete, }: ProjectDocumentPreviewProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentPreview.d.ts.map