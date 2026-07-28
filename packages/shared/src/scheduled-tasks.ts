import type { ScheduledTaskScheduleKind } from './home-display.js';

export type ScheduledTaskStatus = 'active' | 'paused' | 'running' | 'error' | 'disabled';
export type ScheduledTaskRunStatus =
  | 'queued'
  | 'running'
  | 'draft_created'
  | 'needs_confirmation'
  | 'confirmed'
  | 'published'
  | 'completed'
  | 'cancelled'
  | 'skipped'
  | 'failed';
export type ScheduledTaskTriggerType = 'schedule' | 'manual';
export type ScheduledTaskScope = 'personal' | 'project' | 'lab';
export type ScheduledTaskType =
  | 'project_progress'
  | 'weekly_summary'
  | 'literature_tracking'
  | 'custom';

export interface ScheduledTaskApiScheduleConfig extends Record<string, unknown> {
  time?: string;
  runAt?: string;
  weekday?: number;
  dayOfMonth?: number;
}

export interface ScheduledTaskDto {
  id: string;
  labId: string;
  ownerUserId: string;
  name: string;
  description: string | null;
  projectId: string | null;
  taskType: ScheduledTaskType;
  templateKey: string | null;
  mainSessionId: string | null;
  scope: ScheduledTaskScope;
  status: ScheduledTaskStatus;
  prompt: string;
  timezone: string;
  scheduleKind: ScheduledTaskScheduleKind;
  scheduleConfig: ScheduledTaskApiScheduleConfig;
  scheduleStartAt: string | null;
  scheduleEndAt: string | null;
  nextRunAt: string | null;
  lastRunAt: string | null;
  lastRunStatus: ScheduledTaskRunStatus | null;
  consecutiveFailureCount: number;
  targetParentNodeId: string | null;
  targetWikiNodeId: string | null;
  targetPath: string;
  titleTemplate: string | null;
  contextRefs: unknown[];
  sourceConfig: Record<string, unknown>;
  publishPolicy: Record<string, unknown>;
  toolPolicy: Record<string, unknown>;
  notificationConfig: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ScheduledTaskCreateRequest {
  name: string;
  description?: string;
  projectId?: string | null;
  taskType?: ScheduledTaskType;
  templateKey?: string | null;
  scope?: ScheduledTaskScope;
  prompt: string;
  timezone?: string;
  scheduleKind: ScheduledTaskScheduleKind;
  scheduleStartAt?: string | null;
  scheduleEndAt?: string | null;
  scheduleConfig: ScheduledTaskApiScheduleConfig;
  targetParentNodeId?: string | null;
  targetWikiNodeId?: string | null;
  targetPath?: string;
  titleTemplate?: string;
  contextRefs?: unknown[];
  sourceConfig?: Record<string, unknown>;
  publishPolicy?: Record<string, unknown>;
  toolPolicy?: Record<string, unknown>;
  notificationConfig?: Record<string, unknown>;
}

export type ScheduledTaskUpdateRequest = Partial<ScheduledTaskCreateRequest>;

export interface ScheduledTaskDeleteResponse {
  ok: true;
}

export interface ScheduledTaskRunDto {
  id: string;
  taskId: string;
  labId: string;
  ownerUserId: string;
  triggerType: ScheduledTaskTriggerType;
  scheduledFor: string | null;
  status: ScheduledTaskRunStatus;
  runtimeSessionId: string | null;
  runtimeRunId: string | null;
  workflowRunId: string | null;
  workflowStepId: string | null;
  draftTitle: string | null;
  draftSummary: string | null;
  publishedNodeId: string | null;
  notificationId: string | null;
  errorCode: string | null;
  errorMessage: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ScheduledTaskRunNowResponse {
  ok: true;
  run: ScheduledTaskRunDto;
}
