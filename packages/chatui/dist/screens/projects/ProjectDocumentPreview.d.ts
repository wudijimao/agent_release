import React from 'react';
import type { ProjectDocumentAttachmentViewModel } from './ProjectDocumentAttachments';
import type { ProjectDocumentIndexViewModel } from './ProjectDocumentMetadata';
export interface ProjectDocumentPreviewViewModel extends Record<string, unknown> {
    id: string;
    title: string;
    markdown: string;
    createdByName: string;
    updatedByName: string;
    updatedAt: string;
    tags: string[];
    canEdit: boolean;
    attachments: ProjectDocumentAttachmentViewModel[];
    index?: ProjectDocumentIndexViewModel;
}
export interface ProjectDocumentPreviewProps {
    projectName: string;
    document: ProjectDocumentPreviewViewModel;
    isSidebarOpen: boolean;
    onOpenSidebar(): void;
    onBackToProjects(): void;
    onBackToProject(): void;
    onEdit?(): void;
    onDelete?(): void | Promise<void>;
    onSaveAsTemplate?(): void | Promise<void>;
    onViewTemplates?(): void;
    onDownloadAttachment?(attachmentId: string): void;
    editing?: boolean;
    editTitle?: string;
    editMarkdown?: string;
    editTags?: string[];
    saving?: boolean;
    saveError?: string;
    attachmentAccept?: string;
    onTitleChange?(title: string): void;
    onMarkdownChange?(markdown: string): void;
    onSave?(options?: {
        keepEditing?: boolean;
    }): void | Promise<void>;
    onUploadAttachments?(files: File[], onReady?: () => void): void | Promise<void>;
    onDeleteAttachment?(attachmentId: string): void | Promise<void>;
    onTagsChange?(tags: string[]): void;
    entityLabel?: '文档' | '模板';
    layout?: 'page' | 'compact';
    showTags?: boolean;
}
export declare function ProjectDocumentPreview({ projectName, document, isSidebarOpen, onOpenSidebar, onBackToProjects, onBackToProject, onEdit, onDelete, onSaveAsTemplate, onViewTemplates, onDownloadAttachment, editing, editTitle, editMarkdown, editTags, saving, saveError, attachmentAccept, onTitleChange, onMarkdownChange, onSave, onUploadAttachments, onDeleteAttachment, onTagsChange, entityLabel, layout, showTags, }: ProjectDocumentPreviewProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentPreview.d.ts.map