import type {
  Lab,
  LabMember,
  LabRole,
  RegenerateLabInviteResponse,
  RemoveLabMemberResponse,
  UpdateLabMemberRoleRequest,
  UpdateLabMemberRoleResponse,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

type LabMembersApi = Pick<ApiClient, "delete" | "get" | "patch" | "post">;

function labPath(labId: string) {
  return `/api/labs/${encodeURIComponent(labId)}`;
}

export async function loadLabMembers(api: LabMembersApi, labId: string) {
  const path = labPath(labId);
  const [lab, members] = await Promise.all([
    api.get<Lab>(path),
    api.get<LabMember[]>(`${path}/members`),
  ]);

  return { lab, members };
}

export function regenerateLabInvite(api: LabMembersApi, labId: string) {
  return api.post<RegenerateLabInviteResponse>(
    `${labPath(labId)}/regenerate-invite`,
  );
}

export function updateLabMemberRole(
  api: LabMembersApi,
  labId: string,
  memberId: string,
  role: LabRole,
) {
  const request: UpdateLabMemberRoleRequest = { role };
  return api.patch<UpdateLabMemberRoleResponse>(
    `${labPath(labId)}/members/${encodeURIComponent(memberId)}`,
    request,
  );
}

export function removeLabMember(
  api: LabMembersApi,
  labId: string,
  memberId: string,
) {
  return api.delete<RemoveLabMemberResponse>(
    `${labPath(labId)}/members/${encodeURIComponent(memberId)}`,
  );
}
