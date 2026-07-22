import React from 'react';
export type ProjectMemberPermission = '浏览' | '编辑';
export interface ProjectMemberViewModel {
    id: string;
    name: string;
    permission: ProjectMemberPermission;
    editable?: boolean;
    roleLabel?: string;
}
export interface ProjectMemberDirectoryItem {
    id: string;
    name: string;
    email: string;
}
export interface ProjectMemberManagementModalProps {
    visible: boolean;
    members: ProjectMemberViewModel[];
    directory: ProjectMemberDirectoryItem[];
    onClose(): void;
    onInvite(memberIds: string[], permission: ProjectMemberPermission): void | Promise<void>;
    onChangePermission(memberId: string, permission: ProjectMemberPermission): void | Promise<void>;
    onRemove(memberId: string): void | Promise<void>;
}
export declare function ProjectMemberManagementModal({ visible, members, directory, onClose, onInvite, onChangePermission, onRemove, }: ProjectMemberManagementModalProps): React.JSX.Element;
//# sourceMappingURL=ProjectMemberManagementModal.d.ts.map