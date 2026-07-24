import assert from "node:assert/strict";
import test from "node:test";

import type { ScheduleTaskEditorValue } from "@bioagent/chatui";
import type { ScheduledTaskDto } from "@bioagent/shared";

import {
  buildScheduledTaskRequest,
  createEmptyScheduledTaskDraft,
  scheduledTaskToEditorDraft,
} from "./scheduled-task-editor";

const now = new Date("2026-07-19T00:00:00.000Z");

function task(overrides: Partial<ScheduledTaskDto> = {}) {
  return {
    id: "scheduled-task",
    name: "定时任务",
    prompt: "执行任务",
    scheduleKind: "daily",
    scheduleConfig: { time: "09:00" },
    ...overrides,
  } as ScheduledTaskDto;
}

test("new scheduled tasks default to a supported daily schedule", () => {
  const draft = createEmptyScheduledTaskDraft(now);

  assert.equal(draft.schedule.repeatMode, "daily");
  assert.equal(draft.schedule.repeatSubValue, "");
});

test("daily editor values map to the server schedule contract", () => {
  const draft = createEmptyScheduledTaskDraft(now);
  draft.name = " 每日实验汇总 ";
  draft.schedule.taskPrompt = " 汇总今日实验进展 ";
  draft.schedule.runAt = "18:00";

  const result = buildScheduledTaskRequest(draft);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.request.name, "每日实验汇总");
  assert.equal(result.request.scheduleKind, "daily");
  assert.equal(result.request.scheduleConfig.time, "18:00");
});

test("weekly editor values map to the server schedule contract", () => {
  const draft = createEmptyScheduledTaskDraft(now);
  draft.name = "每周工作总结";
  draft.schedule.taskPrompt = "汇总本周进展";
  draft.schedule.repeatMode = "weekly";
  draft.schedule.repeatSubValue = "fri";
  draft.schedule.runAt = "18:00";

  const result = buildScheduledTaskRequest(draft);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.request.scheduleKind, "weekly");
  assert.equal(result.request.scheduleConfig.weekday, 5);
  assert.equal(result.request.scheduleConfig.time, "18:00");
});

test("monthly editor values are limited to the server-supported calendar days", () => {
  const draft = createEmptyScheduledTaskDraft(now);
  draft.name = "每月工作总结";
  draft.schedule.taskPrompt = "汇总本月进展";
  draft.schedule.repeatMode = "monthly";
  draft.schedule.repeatSubValue = "28";
  draft.schedule.runAt = "09:30";

  const result = buildScheduledTaskRequest(draft);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.request.scheduleKind, "monthly");
  assert.equal(result.request.scheduleConfig.dayOfMonth, 28);

  draft.schedule.repeatSubValue = "29";
  assert.deepEqual(buildScheduledTaskRequest(draft), {
    ok: false,
    error: "服务端当前仅支持每月 1–28 日运行。",
  });
});

test("editor restores daily, weekly, and monthly server schedules", () => {
  assert.equal(scheduledTaskToEditorDraft(task())?.schedule.repeatMode, "daily");
  assert.deepEqual(
    scheduledTaskToEditorDraft(task({
      scheduleKind: "weekly",
      scheduleConfig: {
        time: "18:00",
        weekday: 5,
        startDate: "2026-07-19",
        endDate: "2026-09-19",
      },
    }))?.schedule,
    {
      repeatMode: "weekly",
      repeatSubValue: "fri",
      startDate: "2026-07-19",
      endDate: "2026-09-19",
      runAt: "18:00",
      taskPrompt: "执行任务",
      projectId: null,
    },
  );
  assert.equal(
    scheduledTaskToEditorDraft(task({
      scheduleKind: "monthly",
      scheduleConfig: { time: "09:00", dayOfMonth: 12 },
    }))?.schedule.repeatSubValue,
    "12",
  );
});

test("unsupported legacy schedule kinds cannot enter the editor", () => {
  assert.equal(
    scheduledTaskToEditorDraft(task({
      scheduleKind: "once",
      scheduleConfig: { runAt: "2026-07-20T01:30:00.000Z" },
    })),
    null,
  );

  const invalid = createEmptyScheduledTaskDraft(now);
  invalid.name = "旧版任务";
  invalid.schedule.taskPrompt = "执行任务";
  invalid.schedule.repeatMode = "hourly" as ScheduleTaskEditorValue["repeatMode"];
  assert.deepEqual(buildScheduledTaskRequest(invalid), {
    ok: false,
    error: "定时任务仅支持每天、每周和每月运行。",
  });
});
