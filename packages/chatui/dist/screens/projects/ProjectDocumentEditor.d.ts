import '@milkdown/crepe/theme/common/style.css';
import React from 'react';
import type { ProjectDocumentAttachmentViewModel, ProjectDocumentIndexViewModel } from './ProjectDocumentPreview';
export interface ProjectDocumentEditorProps {
    projectName: string;
    title: string;
    initialMarkdown?: string;
    updatedAt?: string;
    index?: ProjectDocumentIndexViewModel;
    attachments?: ProjectDocumentAttachmentViewModel[];
    attachmentAccept?: string;
    attachmentUnavailableHint?: string;
    saving?: boolean;
    saveError?: string;
    onTitleChange(title: string): void;
    onMarkdownChange(markdown: string): void;
    onOpenAttachment?(attachmentId: string): void;
    onUploadAttachments?(files: File[]): void | Promise<void>;
    onDeleteAttachment?(attachmentId: string): void | Promise<void>;
    onSave(): void;
    onClose(): void;
}
export declare function ProjectDocumentEditor({ projectName, title, initialMarkdown, updatedAt, index, attachments, attachmentAccept, attachmentUnavailableHint, saving, saveError, onTitleChange, onMarkdownChange, onOpenAttachment, onUploadAttachments, onDeleteAttachment, onSave, onClose, }: ProjectDocumentEditorProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentEditor.d.ts.map