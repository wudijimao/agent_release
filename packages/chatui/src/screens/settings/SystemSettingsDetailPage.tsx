import React, { useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { BaseButton, BaseInput, BaseModal } from '../../components/common';

export interface ChangePasswordViewModel {
  currentPassword: string;
  newPassword: string;
}

export type ChangePasswordErrorField = 'currentPassword' | 'newPassword' | 'form';

export type ChangePasswordActionResult =
  | { ok: true }
  | { ok: false; field: ChangePasswordErrorField; message: string };

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

function SettingRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 py-5">
      <div className="min-w-0 pr-4">
        <div className="text-sm font-medium text-primaryText">{label}</div>
        {description && <div className="mt-1.5 text-xs leading-relaxed text-tertiaryText">{description}</div>}
      </div>
      <div className="flex shrink-0 items-center justify-end">{children}</div>
    </div>
  );
}

export function SystemSettingsDetailPage({
  isSidebarOpen,
  avatarText = '研',
  avatarUrl,
  avatarUploading = false,
  actionError,
  onOpenSidebar,
  onChangePassword,
  onChangeAvatar,
}: SystemSettingsDetailPageProps) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const passwordMismatch = confirmPassword.length > 0 && newPassword !== confirmPassword;
  const newPasswordTooShort = newPassword.length > 0 && newPassword.trim().length < 6;
  const canSubmitPassword = Boolean(
    currentPassword.trim()
      && newPassword.trim()
      && confirmPassword.trim()
      && !newPasswordTooShort
      && !passwordMismatch
      && !submitting,
  );

  const closePasswordModal = () => {
    if (submitting) return;
    setShowPasswordModal(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setLocalError('');
    setCurrentPasswordError('');
    setNewPasswordError('');
  };

  const submitPassword = async () => {
    if (!canSubmitPassword) return;
    setSubmitting(true);
    setLocalError('');
    setCurrentPasswordError('');
    setNewPasswordError('');
    try {
      const result = await onChangePassword?.({ currentPassword: currentPassword.trim(), newPassword: newPassword.trim() });
      if (result && !result.ok) {
        if (result.field === 'currentPassword') setCurrentPasswordError(result.message);
        else if (result.field === 'newPassword') setNewPasswordError(result.message);
        else setLocalError(result.message);
        return;
      }
      setShowPasswordModal(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (submitError) {
      setLocalError(submitError instanceof Error ? submitError.message : '密码修改失败');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && (
            <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏">
              <Menu size={20} />
            </button>
          )}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-tertiaryText">系统设置</span><span className="text-tertiaryText">/</span><span className="font-medium text-primaryText">更多设置</span>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10">
        <div className="mx-auto max-w-[720px] py-0">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 mt-4 text-base font-semibold text-primaryText">账户</h3>
              <div className="rounded-lg bg-surface">
                <SettingRow label="修改密码" description="定期修改密码可提升账户安全性">
                  <BaseButton type="secondary" size="small" rounded="large" onClick={() => setShowPasswordModal(true)}>修改</BaseButton>
                </SettingRow>
                <SettingRow label="更换头像" description="上传新的个人头像（支持 PNG/JPG）">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary">
                      {avatarUrl ? <img src={avatarUrl} alt="当前头像" className="h-full w-full object-cover" /> : avatarText}
                    </div>
                    <BaseButton type="secondary" size="small" rounded="large" isLoading={avatarUploading} disabled={avatarUploading}
                      onClick={() => avatarInputRef.current?.click()}>{avatarUploading ? '上传中' : '上传'}</BaseButton>
                  </div>
                </SettingRow>
                <input ref={avatarInputRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden"
                  onChange={async (event) => {
                    const file = event.target.files?.[0];
                    event.target.value = '';
                    if (!file || avatarUploading) return;
                    try { await onChangeAvatar?.(file); } catch { /* 宿主通过 actionError 展示失败。 */ }
                  }} />
              </div>
              {actionError && <div role="alert" className="mt-3 text-sm text-danger">{actionError}</div>}
            </div>
          </div>
        </div>
      </div>

      <BaseModal visible={showPasswordModal} title="修改密码" onClose={closePasswordModal} onCancel={closePasswordModal}
        onConfirm={() => void submitPassword()} cancelText="取消" okText={submitting ? '保存中…' : '保存'} okButtonProps={{ disabled: !canSubmitPassword }}>
        <div className="space-y-4">
          <BaseInput label="当前密码" type="password" value={currentPassword} onChange={(event) => { setCurrentPassword(event.target.value); setCurrentPasswordError(''); setLocalError(''); }} placeholder="请输入当前密码" size="medium"
            error={Boolean(currentPasswordError)} helperText={currentPasswordError || undefined} disabled={submitting} />
          <BaseInput label="新密码" type="password" value={newPassword} onChange={(event) => { setNewPassword(event.target.value); setNewPasswordError(''); setLocalError(''); }} placeholder="请输入新密码" size="medium"
            error={Boolean(newPasswordError) || newPasswordTooShort}
            helperText={newPasswordError || (newPasswordTooShort ? '新密码至少需要 6 位' : undefined)}
            disabled={submitting} />
          <BaseInput label="确认新密码" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="请再次输入新密码" size="medium"
            error={passwordMismatch} helperText={passwordMismatch ? '两次输入的新密码不一致' : undefined} disabled={submitting} />
          {localError && <div role="alert" className="text-sm text-danger">{localError}</div>}
        </div>
      </BaseModal>
    </div>
  );
}
