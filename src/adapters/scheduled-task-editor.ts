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

function dateInputInTimeZone(
  value: string | null | undefined,
  timezone = "Asia/Shanghai",
) {
  if (!value) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: timezone,
    }).formatToParts(date);
    const part = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((item) => item.type === type)?.value ?? "";
    return `${part("year")}-${part("month")}-${part("day")}`;
  } catch {
    return value.slice(0, 10);
  }
}

function scheduleBoundary(date: string, boundary: "start" | "end") {
  if (!date) return null;
  const time = boundary === "start" ? "00:00:00" : "23:59:59";
  const parsed = new Date(`${date}T${time}+08:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function scheduleTimeInput(
  config: ScheduledTaskApiScheduleConfig,
  timezone: string,
) {
  const value = config.time ?? config.timeOfDay ?? config.runAt;
  if (typeof value !== "string" || !value.trim()) return "09:00";

  const timeMatch = value.trim().match(/^(\d{1,2}):(\d{2})/);
  if (timeMatch) return `${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}`;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "09:00";
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: timezone,
    }).format(date);
  } catch {
    return "09:00";
  }
}

export function createEmptyScheduledTaskDraft(now = new Date()): ScheduledTaskEditorDraft {
  return {
    name: "",
    schedule: {
      repeatMode: "daily",
      repeatSubValue: "",
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

  if (task.scheduleKind === "daily") repeatMode = "daily";
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

  return {
    name: task.name,
    schedule: {
      repeatMode,
      repeatSubValue,
      startDate: dateInputInTimeZone(
        task.scheduleStartAt ??
          (typeof task.scheduleConfig.startDate === "string"
            ? task.scheduleConfig.startDate
            : null),
        task.timezone,
      ) || localDate(),
      endDate: dateInputInTimeZone(
        task.scheduleEndAt ??
          (typeof task.scheduleConfig.endDate === "string"
            ? task.scheduleConfig.endDate
            : null),
        task.timezone,
      ),
      runAt: scheduleTimeInput(task.scheduleConfig, task.timezone),
      taskPrompt: task.prompt,
      projectId: task.projectId,
    },
  };
}

export function buildScheduledTaskRequest(
  draft: ScheduledTaskEditorDraft,
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
  const scheduleStartAt = scheduleBoundary(startDate, "start");
  const scheduleEndAt = scheduleBoundary(endDate, "end");
  if (!scheduleStartAt) return { ok: false, error: "请选择任务起始日期。" };
  if (!scheduleEndAt) return { ok: false, error: "请选择任务截止日期。" };
  if (new Date(scheduleEndAt) <= new Date(scheduleStartAt)) {
    return { ok: false, error: "截止日期必须晚于起始日期。" };
  }
  const scheduleMetadata = {
    projectId: draft.schedule.projectId,
    scheduleStartAt,
    scheduleEndAt,
  };

  if (repeatMode === "daily") {
    return {
      ok: true,
      request: {
        ...common,
        ...scheduleMetadata,
        scheduleKind: "daily",
        scheduleConfig: { time: runAt },
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
        ...scheduleMetadata,
        scheduleKind: "weekly",
        scheduleConfig: { time: runAt, weekday },
      },
    };
  }

  if (repeatMode !== "monthly") {
    return { ok: false, error: "定时任务仅支持每天、每周和每月运行。" };
  }

  const dayOfMonth = Number(repeatSubValue);
  if (!Number.isInteger(dayOfMonth) || dayOfMonth < 1 || dayOfMonth > 28) {
    return { ok: false, error: "服务端当前仅支持每月 1–28 日运行。" };
  }
  const scheduleConfig: ScheduledTaskApiScheduleConfig = { time: runAt, dayOfMonth };
  return {
    ok: true,
    request: {
      ...common,
      ...scheduleMetadata,
      scheduleKind: "monthly",
      scheduleConfig,
    },
  };
}
