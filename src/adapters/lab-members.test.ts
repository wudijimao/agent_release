import assert from "node:assert/strict";
import test from "node:test";

import type { Lab, LabMember } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  loadLabMembers,
  regenerateLabInvite,
  removeLabMember,
  updateLabMemberRole,
} from "./lab-members";

type ApiCall = { method: string; path: string; body?: unknown };

const lab: Lab = {
  id: "lab / 1",
  name: "中科2院攻坚科研队",
  inviteCode: "123456",
  createdBy: "user-1",
  createdAt: "2026-07-18T00:00:00.000Z",
};

const member: LabMember = {
  id: "member / 1",
  labId: lab.id,
  userId: "user-1",
  role: "pi",
  joinedAt: "2026-07-18T00:00:00.000Z",
  user: {
    id: "user-1",
    email: "mira@163.com",
    name: "Mira",
  },
};

function createApi(calls: ApiCall[]) {
  return {
    async get<T>(path: string) {
      calls.push({ method: "GET", path });
      return (path.endsWith("/members") ? [member] : lab) as T;
    },
    async post<T>(path: string, body?: unknown) {
      calls.push({ method: "POST", path, body });
      return { inviteCode: "654321" } as T;
    },
    async patch<T>(path: string, body?: unknown) {
      calls.push({ method: "PATCH", path, body });
      return { id: member.id, role: "admin" } as T;
    },
    async delete<T>(path: string) {
      calls.push({ method: "DELETE", path });
      return { ok: true } as T;
    },
  } as Pick<ApiClient, "delete" | "get" | "patch" | "post">;
}

test("loadLabMembers loads lab metadata and member list together", async () => {
  const calls: ApiCall[] = [];
  const result = await loadLabMembers(createApi(calls), lab.id);

  assert.deepEqual(result, { lab, members: [member] });
  assert.deepEqual(calls, [
    { method: "GET", path: "/api/labs/lab%20%2F%201" },
    { method: "GET", path: "/api/labs/lab%20%2F%201/members" },
  ]);
});

test("member mutations use encoded identifiers and shared request contracts", async () => {
  const calls: ApiCall[] = [];
  const api = createApi(calls);

  assert.deepEqual(await regenerateLabInvite(api, lab.id), { inviteCode: "654321" });
  assert.deepEqual(await updateLabMemberRole(api, lab.id, member.id, "admin"), {
    id: member.id,
    role: "admin",
  });
  assert.deepEqual(await removeLabMember(api, lab.id, member.id), { ok: true });
  assert.deepEqual(calls, [
    { method: "POST", path: "/api/labs/lab%20%2F%201/regenerate-invite", body: undefined },
    {
      method: "PATCH",
      path: "/api/labs/lab%20%2F%201/members/member%20%2F%201",
      body: { role: "admin" },
    },
    {
      method: "DELETE",
      path: "/api/labs/lab%20%2F%201/members/member%20%2F%201",
    },
  ]);
});
