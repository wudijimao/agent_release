import React from 'react';
export interface ProjectDocumentAttachmentViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    mimeType: string;
    sizeLabel: string;
    status: 'ready' | 'processing' | 'failed';
    statusLabel: string;
}
export interface ProjectDocumentAttachmentUploadViewModel {
    id: string;
    name: string;
    progress: number;
}
export interface ProjectDocumentAttachmentsProps {
    attachments: ProjectDocumentAttachmentViewModel[];
    uploads?: ProjectDocumentAttachmentUploadViewModel[];
    className?: string;
    deletingAttachmentId?: string | null;
    unavailableHint?: string;
    error?: string;
    onDownloadAttachment?(attachmentId: string): void;
    onDeleteAttachment?(attachmentId: string): void;
}
export declare function ProjectDocumentAttachments({ attachments, uploads, className, deletingAttachmentId, unavailableHint, error, onDownloadAttachment, onDeleteAttachment, }: ProjectDocumentAttachmentsProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentAttachments.d.ts.map