import React from 'react';
import type { ProjectDocumentPreviewViewModel } from './ProjectDocumentPreview';
export interface ProjectDocumentPreviewContentProps {
    document: ProjectDocumentPreviewViewModel;
    layout?: 'page' | 'panel';
    onDownloadAttachment?(attachmentId: string): void;
}
export declare function ProjectDocumentPreviewContent({ document, layout, onDownloadAttachment, }: ProjectDocumentPreviewContentProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentPreviewContent.d.ts.map