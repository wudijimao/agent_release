import React from 'react';
export interface ChangePasswordViewModel {
    currentPassword: string;
    newPassword: string;
}
export type ChangePasswordErrorField = 'currentPassword' | 'newPassword' | 'form';
export type ChangePasswordActionResult = {
    ok: true;
} | {
    ok: false;
    field: ChangePasswordErrorField;
    message: string;
};
export interface SystemSettingsDetailPageProps {
    isSidebarOpen: boolean;
    avatarText?: string;
    avatarUrl?: string;
    avatarUploading?: boolean;
    actionError?: string;
    onOpenSidebar(): void;
    onChangePassword?(input: ChangePasswordViewModel): void | ChangePasswordActionResult | Promise<void | ChangePasswordActionResult>;
    onChangeAvatar?(file: File): void | Promise<void>;
}
export declare function SystemSettingsDetailPage({ isSidebarOpen, avatarText, avatarUrl, avatarUploading, actionError, onOpenSidebar, onChangePassword, onChangeAvatar, }: SystemSettingsDetailPageProps): React.JSX.Element;
//# sourceMappingURL=SystemSettingsDetailPage.d.ts.map