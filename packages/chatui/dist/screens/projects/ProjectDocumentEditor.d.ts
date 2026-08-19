import '@milkdown/crepe/theme/common/style.css';
import React from 'react';
import { type ProjectDocumentAttachmentViewModel } from './ProjectDocumentAttachments';
import { type ProjectDocumentIndexViewModel } from './ProjectDocumentMetadata';
export interface ProjectDocumentEditorProps {
    projectName: string;
    title: string;
    initialMarkdown?: string;
    createdByName?: string;
    updatedByName?: string;
    updatedAt?: string;
    index?: ProjectDocumentIndexViewModel;
    attachments?: ProjectDocumentAttachmentViewModel[];
    attachmentAccept?: string;
    attachmentUnavailableHint?: string;
    saving?: boolean;
    saveError?: string;
    layout?: 'page' | 'panel';
    showHeaderActions?: boolean;
    onTitleChange(title: string): void;
    onMarkdownChange(markdown: string): void;
    onDownloadAttachment?(attachmentId: string): void;
    onUploadAttachments?(files: File[]): void | Promise<void>;
    onDeleteAttachment?(attachmentId: string): void | Promise<void>;
    onSave(): void;
    onClose(): void;
}
export declare function ProjectDocumentEditor({ title, initialMarkdown, createdByName, updatedByName, updatedAt, index, attachments, attachmentAccept, attachmentUnavailableHint, saving, saveError, layout, showHeaderActions, onTitleChange, onMarkdownChange, onDownloadAttachment, onUploadAttachments, onDeleteAttachment, onSave, onClose, }: ProjectDocumentEditorProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentEditor.d.ts.map