import assert from "node:assert/strict";
import test from "node:test";

import {
  buildScheduledTaskRequest,
  createEmptyScheduledTaskDraft,
  scheduledTaskToEditorDraft,
} from "./scheduled-task-editor";
import type { ScheduledTaskDto } from "@bioagent/shared";

const now = new Date("2026-07-19T00:00:00.000Z");

test("weekly editor values map to the server schedule contract", () => {
  const draft = createEmptyScheduledTaskDraft(now);
  draft.name = " 每周工作总结 ";
  draft.schedule.taskPrompt = " 汇总本周进展 ";
  draft.schedule.repeatSubValue = "fri";
  draft.schedule.runAt = "18:00";

  const result = buildScheduledTaskRequest(draft, now);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.request.name, "每周工作总结");
  assert.equal(result.request.scheduleKind, "weekly");
  assert.equal(result.request.scheduleConfig.weekday, 5);
  assert.equal(result.request.scheduleConfig.time, "18:00");
});

test("unsupported prototype schedule choices never reach the API", () => {
  const hourly = createEmptyScheduledTaskDraft(now);
  hourly.name = "任务";
  hourly.schedule.taskPrompt = "提示词";
  hourly.schedule.repeatMode = "hourly";
  assert.deepEqual(buildScheduledTaskRequest(hourly, now), {
    ok: false,
    error: "服务端暂不支持每小时定时任务，请选择其他触发方式。",
  });

  const day29 = createEmptyScheduledTaskDraft(now);
  day29.name = "任务";
  day29.schedule.taskPrompt = "提示词";
  day29.schedule.repeatMode = "monthly";
  day29.schedule.repeatSubValue = "29";
  assert.deepEqual(buildScheduledTaskRequest(day29, now), {
    ok: false,
    error: "服务端当前仅支持每月 1–28 日运行。",
  });
});

test("once schedules require a future ISO run time", () => {
  const draft = createEmptyScheduledTaskDraft(now);
  draft.name = "一次任务";
  draft.schedule.taskPrompt = "执行一次";
  draft.schedule.repeatMode = "none";
  draft.schedule.startDate = "2026-07-20";
  draft.schedule.runAt = "09:30";

  const result = buildScheduledTaskRequest(draft, now);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.request.scheduleKind, "once");
  assert.equal(result.request.scheduleConfig.runAt, "2026-07-20T01:30:00.000Z");
});

test("daily tasks are not silently represented as non-repeating tasks", () => {
  const dailyTask = {
    id: "daily-task",
    name: "每日任务",
    prompt: "每天执行",
    scheduleKind: "daily",
    scheduleConfig: { time: "09:00" },
  } as ScheduledTaskDto;

  assert.equal(scheduledTaskToEditorDraft(dailyTask), null);
});
