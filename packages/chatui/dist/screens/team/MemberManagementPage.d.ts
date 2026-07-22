import React from 'react';
export type MemberManagementRole = '管理员' | '成员';
export interface MemberManagementMember extends Record<string, unknown> {
    id: string;
    userId: string;
    name: string;
    email: string;
    avatarUrl?: string;
    role: MemberManagementRole;
    joinedAt: string;
    projectsLabel?: string;
    canManage: boolean;
}
export interface MemberManagementPageProps {
    labName: string;
    members: MemberManagementMember[];
    inviteCode: string;
    isSidebarOpen: boolean;
    loading?: boolean;
    error?: string;
    actionError?: string;
    canManage?: boolean;
    onOpenSidebar(): void;
    onRetry?(): void;
    onRegenerateInvite(): Promise<void> | void;
    onUpdateRole(memberId: string, role: MemberManagementRole): Promise<void> | void;
    onRemoveMember(memberId: string): Promise<void> | void;
}
export default function MemberManagementPage({ labName, members, inviteCode, isSidebarOpen, loading, error, actionError, canManage, onOpenSidebar, onRetry, onRegenerateInvite, onUpdateRole, onRemoveMember, }: MemberManagementPageProps): React.JSX.Element;
//# sourceMappingURL=MemberManagementPage.d.ts.map