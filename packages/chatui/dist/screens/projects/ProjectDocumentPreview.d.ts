import React from 'react';
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
export declare function ProjectDocumentPreview({ projectName, document, isSidebarOpen, onOpenSidebar, onBackToProjects, onBackToProject, onEdit, onDelete, onOpenAttachment, }: ProjectDocumentPreviewProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentPreview.d.ts.map