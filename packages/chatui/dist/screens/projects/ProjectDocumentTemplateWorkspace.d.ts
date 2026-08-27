import React from 'react';
import type { ProjectDocumentTemplateCardViewModel } from './ProjectDocumentTemplateCard';
export interface ProjectDocumentTemplateWorkspaceProps {
    template?: ProjectDocumentTemplateCardViewModel;
    creating?: boolean;
    isSidebarOpen: boolean;
    onOpenSidebar(): void;
    onBack(): void;
    onCreate?(input: {
        name: string;
        description: string;
        markdown: string;
    }): void | Promise<void>;
    onUpdate?(input: {
        name: string;
        markdown: string;
    }): void | Promise<void>;
    onDelete?(): void | Promise<void>;
}
export declare function ProjectDocumentTemplateWorkspace({ template, creating, isSidebarOpen, onOpenSidebar, onBack, onCreate, onUpdate, onDelete, }: ProjectDocumentTemplateWorkspaceProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentTemplateWorkspace.d.ts.map