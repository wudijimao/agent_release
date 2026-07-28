import type { LabRole } from "@bioagent/shared";

export interface WorkspaceAccess {
  canViewAiUsage: boolean;
  canManageMembers: boolean;
}

export function getWorkspaceAccess(role: LabRole | null): WorkspaceAccess {
  return {
    canViewAiUsage: role === "admin",
    canManageMembers: role === "admin" || role === "pi",
  };
}

export function canAccessWorkspacePath(
  path: string,
  access: WorkspaceAccess,
) {
  if (path === "/ai-usage") return access.canViewAiUsage;
  if (path === "/members") return access.canManageMembers;
  return true;
}
