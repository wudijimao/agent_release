import assert from "node:assert/strict";
import test from "node:test";

import type {
  ScheduledTaskCreateRequest,
  ScheduledTaskDto,
  ScheduledTaskUpdateRequest,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  createScheduledTask,
  deleteScheduledTask,
  getScheduledTask,
  listScheduledTaskRuns,
  listScheduledTasks,
  pauseScheduledTask,
  resumeScheduledTask,
  runScheduledTaskNow,
  updateScheduledTask,
} from "./scheduled-tasks";

type ApiCall = { method: string; path: string; body?: unknown };

const task: ScheduledTaskDto = {
  id: "task / 1",
  labId: "lab-1",
  ownerUserId: "user-1",
  name: "每周工作总结",
  description: null,
  status: "active",
  prompt: "汇总本周工作",
  timezone: "Asia/Shanghai",
  scheduleKind: "weekly",
  scheduleConfig: { weekday: 5, runAt: "18:00" },
  nextRunAt: "2026-07-24T10:00:00.000Z",
  lastRunAt: null,
  lastRunStatus: null,
  consecutiveFailureCount: 0,
  targetParentNodeId: null,
  targetWikiNodeId: null,
  targetPath: "待选择 Mira 保存位置",
  titleTemplate: null,
  contextRefs: [],
  toolPolicy: {},
  notificationConfig: {},
  createdAt: "2026-07-19T00:00:00.000Z",
  updatedAt: "2026-07-19T00:00:00.000Z",
  deletedAt: null,
};

function createApi(calls: ApiCall[]) {
  return {
    async get<T>(path: string) {
      calls.push({ method: "GET", path });
      return (path.endsWith("/runs") ? [] : path === "/api/scheduled-tasks" ? [task] : task) as T;
    },
    async post<T>(path: string, body?: unknown) {
      calls.push({ method: "POST", path, body });
      return (path.endsWith("/run-now") ? { ok: true, run: { id: "run-1" } } : task) as T;
    },
    async patch<T>(path: string, body?: unknown) {
      calls.push({ method: "PATCH", path, body });
      return task as T;
    },
    async delete<T>(path: string) {
      calls.push({ method: "DELETE", path });
      return { ok: true } as T;
    },
  } as Pick<ApiClient, "delete" | "get" | "patch" | "post">;
}

test("scheduled task reads use the authenticated collection and encoded task path", async () => {
  const calls: ApiCall[] = [];
  const api = createApi(calls);

  assert.deepEqual(await listScheduledTasks(api), [task]);
  assert.deepEqual(await getScheduledTask(api, task.id), task);
  assert.deepEqual(await listScheduledTaskRuns(api, task.id), []);
  assert.deepEqual(calls, [
    { method: "GET", path: "/api/scheduled-tasks" },
    { method: "GET", path: "/api/scheduled-tasks/task%20%2F%201" },
    { method: "GET", path: "/api/scheduled-tasks/task%20%2F%201/runs" },
  ]);
});

test("scheduled task lifecycle calls preserve the shared request contracts", async () => {
  const calls: ApiCall[] = [];
  const api = createApi(calls);
  const createRequest: ScheduledTaskCreateRequest = {
    name: task.name,
    prompt: task.prompt,
    scheduleKind: task.scheduleKind,
    scheduleConfig: task.scheduleConfig,
  };
  const updateRequest: ScheduledTaskUpdateRequest = { name: "新的任务名称" };

  await createScheduledTask(api, createRequest);
  await updateScheduledTask(api, task.id, updateRequest);
  await pauseScheduledTask(api, task.id);
  await resumeScheduledTask(api, task.id);
  await runScheduledTaskNow(api, task.id);
  await deleteScheduledTask(api, task.id);

  assert.deepEqual(calls, [
    { method: "POST", path: "/api/scheduled-tasks", body: createRequest },
    { method: "PATCH", path: "/api/scheduled-tasks/task%20%2F%201", body: updateRequest },
    { method: "POST", path: "/api/scheduled-tasks/task%20%2F%201/pause", body: undefined },
    { method: "POST", path: "/api/scheduled-tasks/task%20%2F%201/resume", body: undefined },
    { method: "POST", path: "/api/scheduled-tasks/task%20%2F%201/run-now", body: undefined },
    { method: "DELETE", path: "/api/scheduled-tasks/task%20%2F%201" },
  ]);
});
