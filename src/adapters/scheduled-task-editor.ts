import type {
  ScheduleTaskEditorValue,
  ScheduledTaskRepeatMode,
} from "@bioagent/chatui";
import type {
  ScheduledTaskApiScheduleConfig,
  ScheduledTaskCreateRequest,
  ScheduledTaskDto,
} from "@bioagent/shared";

const WEEKDAY_TO_NUMBER: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

const NUMBER_TO_WEEKDAY = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;

export interface ScheduledTaskEditorDraft {
  name: string;
  schedule: ScheduleTaskEditorValue;
}

export type ScheduledTaskRequestResult =
  | { ok: true; request: ScheduledTaskCreateRequest }
  | { ok: false; error: string };

function localDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addMonths(date: Date, months: number) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function createEmptyScheduledTaskDraft(now = new Date()): ScheduledTaskEditorDraft {
  return {
    name: "",
    schedule: {
      repeatMode: "weekly",
      repeatSubValue: "mon",
      startDate: localDate(now),
      endDate: localDate(addMonths(now, 2)),
      runAt: "15:00",
      taskPrompt: "",
      projectId: null,
    },
  };
}

export function scheduledTaskToEditorDraft(task: ScheduledTaskDto): ScheduledTaskEditorDraft | null {
  let repeatMode: ScheduledTaskRepeatMode;
  let repeatSubValue = "";

  if (task.scheduleKind === "once") repeatMode = "none";
  else if (task.scheduleKind === "weekly") {
    repeatMode = "weekly";
    repeatSubValue = typeof task.scheduleConfig.weekday === "number"
      ? NUMBER_TO_WEEKDAY[task.scheduleConfig.weekday] ?? "mon"
      : "mon";
  } else if (task.scheduleKind === "monthly") {
    repeatMode = "monthly";
    repeatSubValue = String(task.scheduleConfig.dayOfMonth ?? 1);
  } else {
    return null;
  }

  const runAtValue = task.scheduleKind === "once" ? task.scheduleConfig.runAt : undefined;
  const runAtDate = typeof runAtValue === "string" ? new Date(runAtValue) : null;
  const hasRunAtDate = runAtDate && !Number.isNaN(runAtDate.getTime());

  return {
    name: task.name,
    schedule: {
      repeatMode,
      repeatSubValue,
      startDate: hasRunAtDate ? localDate(runAtDate) : localDate(),
      endDate: "",
      runAt: task.scheduleKind === "once" && hasRunAtDate
        ? `${String(runAtDate.getHours()).padStart(2, "0")}:${String(runAtDate.getMinutes()).padStart(2, "0")}`
        : String(task.scheduleConfig.time ?? "09:00"),
      taskPrompt: task.prompt,
      projectId: null,
    },
  };
}

export function buildScheduledTaskRequest(
  draft: ScheduledTaskEditorDraft,
  now = new Date(),
): ScheduledTaskRequestResult {
  const name = draft.name.trim();
  const prompt = draft.schedule.taskPrompt.trim();
  if (!name) return { ok: false, error: "请输入任务名称。" };
  if (!prompt) return { ok: false, error: "请输入任务提示词。" };

  const common = {
    name,
    prompt,
    timezone: "Asia/Shanghai",
  };
  const { repeatMode, repeatSubValue, runAt, startDate, endDate } = draft.schedule;
  const rangeMetadata = { startDate: startDate || undefined, endDate: endDate || undefined };

  if (repeatMode === "hourly") {
    return { ok: false, error: "服务端暂不支持每小时定时任务，请选择其他触发方式。" };
  }

  if (repeatMode === "none") {
    const runAtDate = new Date(`${startDate}T${runAt}:00+08:00`);
    if (!startDate || Number.isNaN(runAtDate.getTime()) || runAtDate <= now) {
      return { ok: false, error: "一次性任务的运行时间必须晚于当前时间。" };
    }
    return {
      ok: true,
      request: {
        ...common,
        scheduleKind: "once",
        scheduleConfig: { ...rangeMetadata, runAt: runAtDate.toISOString() },
      },
    };
  }

  if (repeatMode === "weekly") {
    const weekday = WEEKDAY_TO_NUMBER[repeatSubValue];
    if (weekday === undefined) return { ok: false, error: "请选择每周运行日期。" };
    return {
      ok: true,
      request: {
        ...common,
        scheduleKind: "weekly",
        scheduleConfig: { ...rangeMetadata, time: runAt, weekday },
      },
    };
  }

  const dayOfMonth = Number(repeatSubValue);
  if (!Number.isInteger(dayOfMonth) || dayOfMonth < 1 || dayOfMonth > 28) {
    return { ok: false, error: "服务端当前仅支持每月 1–28 日运行。" };
  }
  const scheduleConfig: ScheduledTaskApiScheduleConfig = {
    ...rangeMetadata,
    time: runAt,
    dayOfMonth,
  };
  return {
    ok: true,
    request: { ...common, scheduleKind: "monthly", scheduleConfig },
  };
}
