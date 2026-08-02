import React from 'react';
export interface ProjectDocumentAttachmentViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    mimeType: string;
    sizeLabel: string;
    status: 'ready' | 'processing' | 'failed';
    statusLabel: string;
}
export interface ProjectDocumentAttachmentsProps {
    attachments: ProjectDocumentAttachmentViewModel[];
    className?: string;
    uploading?: boolean;
    deletingAttachmentId?: string | null;
    unavailableHint?: string;
    error?: string;
    onRequestUpload?(): void;
    onDeleteAttachment?(attachmentId: string): void;
}
export declare function ProjectDocumentAttachments({ attachments, className, uploading, deletingAttachmentId, unavailableHint, error, onRequestUpload, onDeleteAttachment, }: ProjectDocumentAttachmentsProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentAttachments.d.ts.map