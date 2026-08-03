import assert from "node:assert/strict";
import test from "node:test";

import type { ApiClient } from "@/lib/api";

import { createAgentSession } from "./chat-sessions";

test("createAgentSession uses the home agent session contract", async () => {
  const calls: unknown[][] = [];
  const missing = async () => {
    throw new Error("not implemented");
  };
  const api: ApiClient = {
    request: missing,
    get: missing,
    post: async (...args: unknown[]) => {
      calls.push(args);
      return {
        sessionId: "session-1",
        agentType: "weekly_summary",
        projectId: "project-1",
      };
    },
    put: missing,
    patch: missing,
    delete: missing,
  };

  const response = await createAgentSession(api, {
    agentType: "weekly_summary",
    projectId: "project-1",
  });

  assert.equal(response.sessionId, "session-1");
  assert.deepEqual(calls, [
    [
      "/api/chat/agent-sessions",
      { agentType: "weekly_summary", projectId: "project-1" },
    ],
  ]);
});
