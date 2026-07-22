import type {
  ScheduledTaskCreateRequest,
  ScheduledTaskDeleteResponse,
  ScheduledTaskDto,
  ScheduledTaskRunDto,
  ScheduledTaskRunNowResponse,
  ScheduledTaskUpdateRequest,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

const SCHEDULED_TASKS_PATH = "/api/scheduled-tasks";
type ScheduledTasksApi = Pick<ApiClient, "delete" | "get" | "patch" | "post">;

function taskPath(taskId: string) {
  return `${SCHEDULED_TASKS_PATH}/${encodeURIComponent(taskId)}`;
}

export function listScheduledTasks(api: ScheduledTasksApi) {
  return api.get<ScheduledTaskDto[]>(SCHEDULED_TASKS_PATH);
}

export function getScheduledTask(api: ScheduledTasksApi, taskId: string) {
  return api.get<ScheduledTaskDto>(taskPath(taskId));
}

export function createScheduledTask(
  api: ScheduledTasksApi,
  request: ScheduledTaskCreateRequest,
) {
  return api.post<ScheduledTaskDto>(SCHEDULED_TASKS_PATH, request);
}

export function updateScheduledTask(
  api: ScheduledTasksApi,
  taskId: string,
  request: ScheduledTaskUpdateRequest,
) {
  return api.patch<ScheduledTaskDto>(taskPath(taskId), request);
}

export function pauseScheduledTask(api: ScheduledTasksApi, taskId: string) {
  return api.post<ScheduledTaskDto>(`${taskPath(taskId)}/pause`);
}

export function resumeScheduledTask(api: ScheduledTasksApi, taskId: string) {
  return api.post<ScheduledTaskDto>(`${taskPath(taskId)}/resume`);
}

export function runScheduledTaskNow(api: ScheduledTasksApi, taskId: string) {
  return api.post<ScheduledTaskRunNowResponse>(`${taskPath(taskId)}/run-now`);
}

export function listScheduledTaskRuns(api: ScheduledTasksApi, taskId: string) {
  return api.get<ScheduledTaskRunDto[]>(`${taskPath(taskId)}/runs`);
}

export function deleteScheduledTask(api: ScheduledTasksApi, taskId: string) {
  return api.delete<ScheduledTaskDeleteResponse>(taskPath(taskId));
}
