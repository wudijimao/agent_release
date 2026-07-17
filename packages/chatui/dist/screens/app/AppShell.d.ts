import React, { type ReactNode } from 'react';
export interface AppShellChat {
    id: string;
    title: string;
    date: string;
    count: number;
    projectId?: string;
    isPinned?: boolean;
    taskId?: string;
    source?: string;
    isTaskConversation?: boolean;
}
export interface AppShellProject {
    id: string;
    name: string;
}
export interface AppShellUser {
    name: string;
    avatarText: string;
}
export interface AppShellChatActions {
    rename?: boolean;
    share?: boolean;
    pin?: boolean;
    delete?: boolean;
}
export interface AppShellContentContext {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chats: AppShellChat[];
    setChats: React.Dispatch<React.SetStateAction<AppShellChat[]>>;
    setAiUsageWarningActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface AppShellProps {
    currentPath: string;
    projects: readonly AppShellProject[];
    initialChats: readonly AppShellChat[];
    logoUrl: string;
    user: AppShellUser;
    children: ReactNode | ((context: AppShellContentContext) => ReactNode);
    initialAiUsageWarningActive?: boolean;
    chatActions?: AppShellChatActions;
    onNavigate(href: string, options?: {
        replace?: boolean;
    }): void;
    onLogout(): void;
    onChatsChange?(chats: readonly AppShellChat[]): void;
    onDeleteChat?(chatId: string): void;
}
export default function AppShell({ currentPath, projects, initialChats, logoUrl, user, children, initialAiUsageWarningActive, chatActions, onNavigate, onLogout, onChatsChange, onDeleteChat, }: AppShellProps): React.JSX.Element;
//# sourceMappingURL=AppShell.d.ts.map