import React from 'react';
import type { ProjectDocumentAttachmentUploadViewModel } from './ProjectDocumentAttachments';
import type { ProjectDocumentPreviewViewModel } from './ProjectDocumentPreview';
export interface ProjectDocumentPreviewContentProps {
    document: ProjectDocumentPreviewViewModel;
    layout?: 'page' | 'panel';
    onDownloadAttachment?(attachmentId: string): void;
    attachmentUploads?: ProjectDocumentAttachmentUploadViewModel[];
    showTags?: boolean;
}
export declare function ProjectDocumentPreviewContent({ document, layout, onDownloadAttachment, attachmentUploads, showTags, }: ProjectDocumentPreviewContentProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentPreviewContent.d.ts.map