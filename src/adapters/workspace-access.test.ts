import assert from "node:assert/strict";
import test from "node:test";

import {
  canAccessWorkspacePath,
  getWorkspaceAccess,
} from "./workspace-access";

test("workspace access follows the server role policies", () => {
  assert.deepEqual(getWorkspaceAccess("admin"), {
    canViewAiUsage: true,
    canManageMembers: true,
  });
  assert.deepEqual(getWorkspaceAccess("pi"), {
    canViewAiUsage: false,
    canManageMembers: true,
  });

  for (const role of ["manager", "postdoc", "student", null] as const) {
    assert.deepEqual(getWorkspaceAccess(role), {
      canViewAiUsage: false,
      canManageMembers: false,
    });
  }
});

test("restricted workspace paths use the matching capability", () => {
  const memberAccess = getWorkspaceAccess("student");
  assert.equal(canAccessWorkspacePath("/ai-usage", memberAccess), false);
  assert.equal(canAccessWorkspacePath("/members", memberAccess), false);
  assert.equal(canAccessWorkspacePath("/projects", memberAccess), true);
});
