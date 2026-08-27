import '@milkdown/crepe/theme/common/style.css';
import React from 'react';
import { type ProjectDocumentAttachmentViewModel, type ProjectDocumentAttachmentUploadViewModel } from './ProjectDocumentAttachments';
import { type ProjectDocumentIndexViewModel } from './ProjectDocumentMetadata';
export interface ProjectDocumentEditorProps {
    projectName: string;
    title: string;
    initialMarkdown?: string;
    createdByName?: string;
    updatedByName?: string;
    updatedAt?: string;
    index?: ProjectDocumentIndexViewModel;
    tags?: string[];
    attachments?: ProjectDocumentAttachmentViewModel[];
    attachmentUploads?: ProjectDocumentAttachmentUploadViewModel[];
    attachmentAccept?: string;
    attachmentUnavailableHint?: string;
    saving?: boolean;
    saveError?: string;
    layout?: 'page' | 'panel';
    showHeaderActions?: boolean;
    showMetadata?: boolean;
    showTags?: boolean;
    onTitleChange(title: string): void;
    onMarkdownChange(markdown: string): void;
    onTagsChange?(tags: string[]): void;
    onDownloadAttachment?(attachmentId: string): void;
    onUploadAttachments?(files: File[], onReady?: () => void): void | Promise<void>;
    onDeleteAttachment?(attachmentId: string): void | Promise<void>;
    onSave(): void;
    onClose(): void;
}
export declare function ProjectDocumentEditor({ title, initialMarkdown, createdByName, updatedByName, updatedAt, index, tags, attachments, attachmentUploads, attachmentAccept, attachmentUnavailableHint, saving, saveError, layout, showHeaderActions, showMetadata, showTags, onTitleChange, onMarkdownChange, onTagsChange, onDownloadAttachment, onUploadAttachments, onDeleteAttachment, onSave, onClose, }: ProjectDocumentEditorProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentEditor.d.ts.map