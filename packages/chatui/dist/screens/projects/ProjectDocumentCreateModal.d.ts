import React from 'react';
export interface ProjectDocumentTypeOption {
    value: string;
    label: string;
    description: string;
}
export interface ProjectDocumentTemplateOption {
    id: string;
    name: string;
    description: string;
    icon?: string;
    source?: 'system' | 'workspace';
    structure?: string[];
}
export interface ProjectDocumentCreateSelection {
    knowledgeType: string;
    templateId: string;
}
export interface ProjectDocumentCreateModalProps {
    visible: boolean;
    typeOptions: ProjectDocumentTypeOption[];
    templates: ProjectDocumentTemplateOption[];
    loading?: boolean;
    error?: string;
    defaultKnowledgeType?: string;
    defaultTemplateId?: string;
    onClose(): void;
    onRetry?(): void;
    onContinue(selection: ProjectDocumentCreateSelection): void;
}
export declare function ProjectDocumentCreateModal({ visible, typeOptions, templates, loading, error, defaultKnowledgeType, defaultTemplateId, onClose, onRetry, onContinue, }: ProjectDocumentCreateModalProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentCreateModal.d.ts.map