import React from 'react';
export interface ProjectDocumentIndexViewModel extends Record<string, unknown> {
    status: 'disabled' | 'pending' | 'indexed';
    statusLabel: string;
    detail: string;
}
export interface ProjectDocumentMetadataProps {
    createdByName?: string;
    updatedByName?: string;
    updatedAt?: string;
    index?: ProjectDocumentIndexViewModel;
}
export declare function ProjectDocumentMetadata({ createdByName, updatedByName, updatedAt, index, }: ProjectDocumentMetadataProps): React.JSX.Element | null;
//# sourceMappingURL=ProjectDocumentMetadata.d.ts.map