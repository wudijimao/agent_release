import React from 'react';
export interface ProjectDetailViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    description: string;
}
export interface ProjectDocumentViewModel extends Record<string, unknown> {
    id: string;
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
    onCreateDocument?(): void;
    onCreateConversation?(): void;
    onImportDocuments(files: File[]): void | Promise<void>;
    onUpdateProjectName(name: string): void | Promise<void>;
    onUpdateProjectDescription(description: string): void | Promise<void>;
}
export declare function formatProjectConversationDate(rawDate: string, conversationId: string, now?: Date): string;
export declare function ProjectDetailPage({ project, documents, conversations, memberCount, isSidebarOpen, onOpenSidebar, onBackToProjects, onOpenMemberManagement, onOpenDocument, onOpenConversation, onCreateDocument, onCreateConversation, onImportDocuments, onUpdateProjectName, onUpdateProjectDescription, showMemberManagement, }: ProjectDetailPageProps): React.JSX.Element;
//# sourceMappingURL=ProjectDetailPage.d.ts.map