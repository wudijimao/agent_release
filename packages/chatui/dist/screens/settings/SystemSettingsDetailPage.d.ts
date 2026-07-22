import React from 'react';
export interface ChangePasswordViewModel {
    currentPassword: string;
    newPassword: string;
}
export interface SystemSettingsDetailPageProps {
    isSidebarOpen: boolean;
    avatarText?: string;
    avatarUrl?: string;
    avatarUploading?: boolean;
    actionError?: string;
    onOpenSidebar(): void;
    onChangePassword?(input: ChangePasswordViewModel): void | Promise<void>;
    onChangeAvatar?(file: File): void | Promise<void>;
}
export declare function SystemSettingsDetailPage({ isSidebarOpen, avatarText, avatarUrl, avatarUploading, actionError, onOpenSidebar, onChangePassword, onChangeAvatar, }: SystemSettingsDetailPageProps): React.JSX.Element;
//# sourceMappingURL=SystemSettingsDetailPage.d.ts.map