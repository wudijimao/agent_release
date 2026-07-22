import assert from "node:assert/strict";
import test from "node:test";

import type { ScheduledTaskDto } from "@bioagent/shared";

import {
  formatScheduledTaskNextRun,
  formatScheduledTaskTrigger,
  mapScheduledTask,
} from "./scheduled-tasks-view-model";

function task(overrides: Partial<ScheduledTaskDto> = {}): ScheduledTaskDto {
  return {
    id: "task-1",
    labId: "lab-1",
    ownerUserId: "user-1",
    name: "每周工作总结",
    description: null,
    status: "active",
    prompt: "汇总项目关键进展",
    timezone: "Asia/Shanghai",
    scheduleKind: "weekly",
    scheduleConfig: { weekday: 5, time: "18:00" },
    nextRunAt: "2026-07-24T10:00:00.000Z",
    lastRunAt: null,
    lastRunStatus: null,
    consecutiveFailureCount: 0,
    targetParentNodeId: null,
    targetWikiNodeId: null,
    targetPath: "",
    titleTemplate: null,
    contextRefs: [],
    toolPolicy: {},
    notificationConfig: {},
    createdAt: "2026-07-19T00:00:00.000Z",
    updatedAt: "2026-07-19T00:00:00.000Z",
    deletedAt: null,
    ...overrides,
  };
}

test("formatScheduledTaskTrigger formats every server schedule kind", () => {
  assert.equal(formatScheduledTaskTrigger(task({ scheduleKind: "once", scheduleConfig: {} })), "一次");
  assert.equal(
    formatScheduledTaskTrigger(task({ scheduleKind: "daily", scheduleConfig: { runAt: "08:30" } })),
    "每天 08:30",
  );
  assert.equal(formatScheduledTaskTrigger(task()), "每周五 18:00");
  assert.equal(
    formatScheduledTaskTrigger(task({ scheduleKind: "monthly", scheduleConfig: { dayOfMonth: 12, time: "09:15" } })),
    "每月12号 09:15",
  );
});

test("formatScheduledTaskTrigger keeps incomplete server schedules visible", () => {
  assert.equal(
    formatScheduledTaskTrigger(task({ scheduleKind: "weekly", scheduleConfig: { weekday: 8 } })),
    "每周-- --:--",
  );
  assert.equal(
    formatScheduledTaskTrigger(task({ scheduleKind: "monthly", scheduleConfig: {} })),
    "每月--号 --:--",
  );
});

test("formatScheduledTaskNextRun uses the task timezone and handles invalid values", () => {
  assert.equal(formatScheduledTaskNextRun("2026-07-24T10:00:00.000Z"), "7.24 18:00");
  assert.equal(formatScheduledTaskNextRun(null), "--");
  assert.equal(formatScheduledTaskNextRun("not-a-date"), "--");
  assert.equal(formatScheduledTaskNextRun("2026-07-24T10:00:00.000Z", "invalid/timezone"), "--");
});

test("mapScheduledTask maps status semantics without leaking DTO fields", () => {
  assert.deepEqual(mapScheduledTask(task()), {
    id: "task-1",
    name: "每周工作总结",
    prompt: "汇总项目关键进展",
    nextRun: "7.24 18:00",
    trigger: "每周五 18:00",
    isEnabled: true,
    isToggleDisabled: false,
  });
  assert.deepEqual(
    mapScheduledTask(task({ status: "running" })),
    {
      id: "task-1",
      name: "每周工作总结",
      prompt: "汇总项目关键进展",
      nextRun: "7.24 18:00",
      trigger: "每周五 18:00",
      isEnabled: true,
      isToggleDisabled: true,
    },
  );
  assert.equal(mapScheduledTask(task({ status: "paused" })).isEnabled, false);
  assert.equal(mapScheduledTask(task({ status: "error" })).isEnabled, false);
  assert.equal(mapScheduledTask(task({ status: "disabled" })).isEnabled, false);
});
