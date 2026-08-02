"use client";

import {
  MemberManagementPage,
} from "@bioagent/chatui";
import type { AdminMemberUsageSummary } from "@bioagent/shared";
import { useEffect, useMemo, useState } from "react";

import {
  loadAdminMembers,
  regenerateLabInvite,
  removeLabMember,
  updateLabMemberRole,
} from "@/adapters/lab-members";
import { mapLabMembers, updateRoleValue } from "@/adapters/lab-members-view-model";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient, useAuth } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

export function MembersRoute() {
  const api = useApiClient();
  const { user } = useAuth();
  const { activeLab, activeLabRole } = useLab();
  const { isSidebarOpen, openSidebar } = useChatShell();
  const [members, setMembers] = useState<AdminMemberUsageSummary[]>([]);
  const [regeneratedInvite, setRegeneratedInvite] = useState<{
    labId: string;
    inviteCode: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const canManage = activeLabRole === "admin" || activeLabRole === "pi";
  const activeLabId = activeLab?.id || "";
  const labName = activeLab?.name || "";
  const inviteCode = regeneratedInvite?.labId === activeLabId
    ? regeneratedInvite.inviteCode
    : activeLab?.inviteCode || "";

  useEffect(() => {
    if (!activeLabId) return;
    let cancelled = false;

    loadAdminMembers(api)
      .then((result) => {
        if (cancelled) return;
        setMembers(result);
        setError("");
      })
      .catch((loadError: unknown) => {
        if (cancelled) return;
        setError(loadError instanceof Error ? loadError.message : "成员信息加载失败");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeLabId, api]);

  const retryLoad = async () => {
    if (!activeLabId) return;
    setLoading(true);
    setError("");
    try {
      const result = await loadAdminMembers(api);
      setMembers(result);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "成员信息加载失败");
    } finally {
      setLoading(false);
    }
  };

  const viewMembers = useMemo(
    () => mapLabMembers(members, user?.id || "", canManage),
    [canManage, members, user?.id],
  );

  return (
    <MemberManagementPage
      labName={labName}
      members={viewMembers}
      inviteCode={inviteCode}
      isSidebarOpen={isSidebarOpen}
      loading={loading}
      error={!activeLabId ? "当前账号尚未加入实验室" : error}
      actionError={actionError}
      canManage={canManage}
      onOpenSidebar={openSidebar}
      onRetry={() => void retryLoad()}
      onRegenerateInvite={async () => {
        if (!activeLabId) return;
        setActionError("");
        try {
          const result = await regenerateLabInvite(api, activeLabId);
          setRegeneratedInvite({ labId: activeLabId, inviteCode: result.inviteCode });
        } catch (mutationError) {
          setActionError(mutationError instanceof Error ? mutationError.message : "邀请码生成失败");
          throw mutationError;
        }
      }}
      onUpdateRole={async (memberId, role) => {
        if (!activeLabId) return;
        setActionError("");
        try {
          const result = await updateLabMemberRole(api, activeLabId, memberId, updateRoleValue(role));
          setMembers((current) => current.map((member) => (
            member.id === memberId ? { ...member, role: result.role } : member
          )));
        } catch (mutationError) {
          setActionError(mutationError instanceof Error ? mutationError.message : "成员角色修改失败");
          throw mutationError;
        }
      }}
      onRemoveMember={async (memberId) => {
        if (!activeLabId) return;
        setActionError("");
        try {
          await removeLabMember(api, activeLabId, memberId);
          setMembers((current) => current.filter((member) => member.id !== memberId));
        } catch (mutationError) {
          setActionError(mutationError instanceof Error ? mutationError.message : "移除成员失败");
          throw mutationError;
        }
      }}
    />
  );
}
