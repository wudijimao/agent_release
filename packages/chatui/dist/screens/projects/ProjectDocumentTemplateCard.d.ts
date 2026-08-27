import React from 'react';
export interface ProjectDocumentTemplateCardViewModel {
    id: string;
    name: string;
    description: string;
    markdown: string;
    scope?: 'personal';
    source?: 'system' | 'workspace';
    createdByName?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface ProjectDocumentTemplateCardProps {
    template?: ProjectDocumentTemplateCardViewModel;
    create?: boolean;
    disabled?: boolean;
    onOpen(): void;
}
export declare function ProjectDocumentTemplateCard({ template, create, disabled, onOpen, }: ProjectDocumentTemplateCardProps): React.JSX.Element | null;
//# sourceMappingURL=ProjectDocumentTemplateCard.d.ts.map