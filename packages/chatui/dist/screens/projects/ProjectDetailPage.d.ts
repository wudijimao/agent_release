import React from 'react';
export interface ProjectDetailViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    description: string;
}
export interface ProjectDocumentViewModel extends Record<string, unknown> {
    id: string;
    kbNodeId: string;
    title: string;
    summary: string;
    tags: string[];
}
export interface ProjectConversationViewModel extends Record<string, unknown> {
    id: string;
    title: string;
    date: string;
}
export interface ProjectDetailPageProps {
    project?: ProjectDetailViewModel;
    documents: ProjectDocumentViewModel[];
    conversations: ProjectConversationViewModel[];
    memberCount: number;
    showMemberManagement?: boolean;
    isSidebarOpen: boolean;
    onOpenSidebar(): void;
    onBackToProjects(): void;
    onOpenMemberManagement(): void;
    onOpenDocument(documentId: string): void;
    onOpenConversation(conversationId: string): void;
    onRenameConversation?(conversationId: string, title: string): void | Promise<void>;
    onDeleteConversation?(conversationId: string): void | Promise<void>;
    onCreateDocument?(): void;
    onCreateConversation?(): void;
    onImportDocuments(files: File[]): void | Promise<void>;
    documentImportAccept?: string;
    documentImportMaxSize?: number;
    documentImportDescription?: React.ReactNode;
    onUpdateProjectName(name: string): void | Promise<void>;
    onUpdateProjectDescription(description: string): void | Promise<void>;
    onDeleteProject?(): void | Promise<void>;
}
export declare function formatProjectConversationDate(rawDate: string, conversationId: string, now?: Date): string;
export declare function ProjectDetailPage({ project, documents, conversations, memberCount, isSidebarOpen, onOpenSidebar, onBackToProjects, onOpenMemberManagement, onOpenDocument, onOpenConversation, onCreateDocument, onCreateConversation, onRenameConversation, onDeleteConversation, onImportDocuments, onUpdateProjectName, onUpdateProjectDescription, documentImportAccept, documentImportMaxSize, documentImportDescription, showMemberManagement, onDeleteProject, }: ProjectDetailPageProps): React.JSX.Element;
//# sourceMappingURL=ProjectDetailPage.d.ts.map