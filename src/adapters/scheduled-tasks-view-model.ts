import type { ScheduledTaskListItemViewModel } from "@bioagent/chatui";
import type {
  ScheduledTaskApiScheduleConfig,
  ScheduledTaskDto,
  ScheduledTaskStatus,
} from "@bioagent/shared";

const WEEKDAY_LABELS = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] as const;

function scheduleTime(config: ScheduledTaskApiScheduleConfig) {
  return config.time ?? config.runAt ?? "--:--";
}

export function formatScheduledTaskTrigger(task: Pick<ScheduledTaskDto, "scheduleConfig" | "scheduleKind">) {
  const { scheduleConfig, scheduleKind } = task;
  const time = scheduleTime(scheduleConfig);

  switch (scheduleKind) {
    case "once":
      return "一次";
    case "daily":
      return `每天 ${time}`;
    case "weekly": {
      const weekday = typeof scheduleConfig.weekday === "number"
        ? WEEKDAY_LABELS[scheduleConfig.weekday]
        : undefined;
      return `每${weekday ?? "周--"} ${time}`;
    }
    case "monthly":
      return `每月${scheduleConfig.dayOfMonth ?? "--"}号 ${time}`;
  }
}

export function formatScheduledTaskNextRun(value: string | null, timezone = "Asia/Shanghai") {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";

  try {
    const parts = new Intl.DateTimeFormat("zh-CN", {
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: timezone,
    }).formatToParts(date);
    const part = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((item) => item.type === type)?.value ?? "";
    return `${part("month")}.${part("day")} ${part("hour")}:${part("minute")}`;
  } catch {
    return "--";
  }
}

function statusView(status: ScheduledTaskStatus) {
  return {
    isEnabled: status === "active" || status === "running",
    isToggleDisabled: status === "running",
  };
}

export function mapScheduledTask(task: ScheduledTaskDto): ScheduledTaskListItemViewModel {
  return {
    id: task.id,
    name: task.name,
    prompt: task.prompt,
    nextRun: formatScheduledTaskNextRun(task.nextRunAt, task.timezone),
    trigger: formatScheduledTaskTrigger(task),
    ...statusView(task.status),
  };
}

export function mapScheduledTasks(tasks: readonly ScheduledTaskDto[]) {
  return tasks.map(mapScheduledTask);
}
