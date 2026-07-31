import assert from "node:assert/strict";
import test from "node:test";

import type { AdminMemberUsageSummary, LabMember } from "@bioagent/shared";

import { mapLabMembers } from "@/adapters/lab-members-view-model";

const members: LabMember[] = [
  {
    id: "member-self",
    labId: "lab-1",
    userId: "user-self",
    role: "pi",
    joinedAt: "2026-07-18T00:00:00.000Z",
    user: { id: "user-self", name: "Mira", email: "mira@163.com" },
  },
  {
    id: "member-other",
    labId: "lab-1",
    userId: "user-other",
    role: "postdoc",
    joinedAt: "2026-07-17T00:00:00.000Z",
    user: { id: "user-other", name: "研究员", email: "member@example.com" },
  },
  {
    id: "member-incomplete",
    labId: "lab-1",
    userId: "missing-user",
    role: "student",
    joinedAt: "invalid",
  },
];

test("mapLabMembers maps server roles and protects self and PI operations", () => {
  assert.deepEqual(mapLabMembers(members, "user-self", true), [
    {
      id: "member-self",
      userId: "user-self",
      name: "Mira",
      email: "mira@163.com",
      avatarUrl: undefined,
      role: "管理员",
      joinedAt: "2026.07.18",
      canManage: false,
    },
    {
      id: "member-other",
      userId: "user-other",
      name: "研究员",
      email: "member@example.com",
      avatarUrl: undefined,
      role: "成员",
      joinedAt: "2026.07.17",
      canManage: true,
    },
  ]);
});

test("mapLabMembers hides mutation controls from non-admin users", () => {
  assert.equal(mapLabMembers(members, "user-self", false)[1]?.canManage, false);
});

test("mapLabMembers renders project names returned by the admin member API", () => {
  const memberWithProjects: AdminMemberUsageSummary = {
    ...members[1]!,
    user: members[1]!.user!,
    projects: [
      {
        id: "project-1",
        name: "肿瘤免疫项目",
        type: "team",
        role: "member",
        isDefaultUnassigned: false,
      },
      {
        id: "project-2",
        name: "CRISPR 筛选",
        type: "team",
        role: "viewer",
        isDefaultUnassigned: false,
      },
    ],
    monthTokenUsage: 0,
    last7dTokenUsage: 0,
  };

  assert.equal(
    mapLabMembers([memberWithProjects], "user-self", true)[0]?.projectsLabel,
    "肿瘤免疫项目、CRISPR 筛选",
  );
});
