import type { KeyboardEvent, ReactNode, Ref } from 'react';
export interface ChatWorkspaceHeaderProps {
    isSidebarOpen: boolean;
    title?: string;
    editingTitle?: string;
    titleInputRef?: Ref<HTMLInputElement>;
    divided?: boolean;
    actions?: ReactNode;
    onOpenSidebar(): void;
    onStartEditTitle?(): void;
    onEditingTitleChange?(value: string): void;
    onCommitTitle?(): void;
    onEditingTitleKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;
}
export declare function ChatWorkspaceHeader({ isSidebarOpen, title, editingTitle, titleInputRef, divided, actions, onOpenSidebar, onStartEditTitle, onEditingTitleChange, onCommitTitle, onEditingTitleKeyDown, }: ChatWorkspaceHeaderProps): import("react").JSX.Element;
export interface ChatWorkspaceHeaderActionProps {
    active?: boolean;
    icon?: ReactNode;
    label: string;
    onClick(): void;
}
export declare function ChatWorkspaceHeaderAction({ active, icon, label, onClick }: ChatWorkspaceHeaderActionProps): import("react").JSX.Element;
//# sourceMappingURL=ChatWorkspaceHeader.d.ts.map