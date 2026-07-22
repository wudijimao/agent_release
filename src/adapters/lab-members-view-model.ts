import type {
  MemberManagementMember,
  MemberManagementRole,
} from "@bioagent/chatui";
import type { LabMember, LabRole } from "@bioagent/shared";

function roleLabel(role: LabRole): MemberManagementRole {
  return role === "admin" || role === "pi" ? "管理员" : "成员";
}

export function updateRoleValue(role: MemberManagementRole): LabRole {
  return role === "管理员" ? "admin" : "student";
}

function formatJoinedAt(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replaceAll("/", ".");
}

export function mapLabMembers(
  members: readonly LabMember[],
  currentUserId: string,
  canManage: boolean,
): MemberManagementMember[] {
  return members.flatMap((member) => {
    if (!member.user) return [];
    return [{
      id: member.id,
      userId: member.userId,
      name: member.user.name,
      email: member.user.email,
      avatarUrl: member.user.avatarUrl,
      role: roleLabel(member.role),
      joinedAt: formatJoinedAt(member.joinedAt),
      canManage: canManage && member.userId !== currentUserId && member.role !== "pi",
    }];
  });
}
