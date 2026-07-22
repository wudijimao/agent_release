"use client";

import { SystemSettingsDetailPage } from "@bioagent/chatui";
import { useState } from "react";

import {
  changeCurrentPassword,
  getChangePasswordErrorMessage,
} from "@/adapters/auth";
import { updateCurrentUserAvatar } from "@/adapters/profile";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient, useAuth } from "@/providers/AuthProvider";

export function SystemSettingsRoute() {
  const api = useApiClient();
  const { isSidebarOpen, openSidebar } = useChatShell();
  const { signOut, user, updateUser } = useAuth();
  const [actionError, setActionError] = useState("");
  const [avatarUploading, setAvatarUploading] = useState(false);
  const avatarText = (user?.name?.trim() || user?.email || "研").slice(0, 1);

  return (
    <SystemSettingsDetailPage
      isSidebarOpen={isSidebarOpen}
      avatarText={avatarText}
      avatarUrl={user?.avatarUrl}
      avatarUploading={avatarUploading}
      actionError={actionError}
      onOpenSidebar={openSidebar}
      onChangePassword={async (input) => {
        setActionError("");
        try {
          const result = await changeCurrentPassword(api, input);
          if (!result.requiresLogin) {
            throw new Error("密码已更新，但服务端没有要求重新登录，请联系管理员确认会话状态。");
          }
          await signOut();
        } catch (error) {
          if (error instanceof Error && error.message.startsWith("密码已更新")) {
            throw error;
          }
          throw new Error(getChangePasswordErrorMessage(error));
        }
      }}
      onChangeAvatar={async (file) => {
        if (avatarUploading) return;
        setAvatarUploading(true);
        setActionError("");
        try {
          const response = await updateCurrentUserAvatar(api, file);
          updateUser(response.user);
        } catch (error) {
          setActionError(error instanceof Error ? error.message : "头像更新失败");
          throw error;
        } finally {
          setAvatarUploading(false);
        }
      }}
    />
  );
}
