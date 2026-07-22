export const PROJECT_TYPES = ['team', 'personal'] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_STATUSES = ['active', 'archived'] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const PROJECT_MEMBER_ROLES = ['owner', 'admin', 'member', 'viewer'] as const;
export type ProjectMemberRole = (typeof PROJECT_MEMBER_ROLES)[number];

export const PROJECT_KNOWLEDGE_TYPES = [
  'literature',
  'literature_review',
  'protocol',
  'sop',
  'work_summary',
  'experiment_note',
  'experiment_plan',
  'data_source',
  'analysis_report',
  'other',
] as const;
export type ProjectKnowledgeType = (typeof PROJECT_KNOWLEDGE_TYPES)[number];

export const PROJECT_KNOWLEDGE_SECTIONS = ['knowledge', 'experiment', 'data'] as const;
export type ProjectKnowledgeSection = (typeof PROJECT_KNOWLEDGE_SECTIONS)[number];

export const PROJECT_KNOWLEDGE_VISIBILITIES = ['project_default', 'lab_shared'] as const;
export type ProjectKnowledgeVisibility = (typeof PROJECT_KNOWLEDGE_VISIBILITIES)[number];

export const PROJECT_KNOWLEDGE_SOURCE_KINDS = [
  'original',
  'personal_copy',
  'team_transfer',
  'manual_import',
  'agent_generated',
] as const;
export type ProjectKnowledgeSourceKind = (typeof PROJECT_KNOWLEDGE_SOURCE_KINDS)[number];

export interface ProjectSummary {
  id: string;
  labId: string;
  type: ProjectType;
  status: ProjectStatus;
  name: string;
  description: string;
  ownerUserId?: string | null;
  defaultKbNodeId?: string | null;
  isDefaultUnassigned: boolean;
  memberCount: number;
  knowledgeCount: number;
  taskCount: number;
  updatedAt: string;
  createdAt: string;
}

export interface ProjectCreateRequest {
  type: ProjectType;
  name: string;
  description?: string;
  memberUserIds?: string[];
}

export interface ProjectPatchRequest {
  name?: string;
  description?: string;
}

export interface ProjectMemberCreateRequest {
  userId: string;
  role: Exclude<ProjectMemberRole, 'owner'>;
}

export interface ProjectMemberPatchRequest {
  role: Exclude<ProjectMemberRole, 'owner'>;
}

export interface ProjectMemberSummary {
  id: string;
  projectId: string;
  userId: string;
  role: ProjectMemberRole;
  user?: {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
  };
}

export interface ProjectPermissionView {
  canRead: boolean;
  canWrite: boolean;
  canAdmin: boolean;
  reason: string;
}

export interface ProjectKnowledgeSummary {
  id: string;
  projectId: string;
  kbNodeId: string;
  title: string;
  knowledgeType: ProjectKnowledgeType;
  section: ProjectKnowledgeSection;
  visibility: ProjectKnowledgeVisibility;
  sourceProjectId?: string | null;
  sourceKbNodeId?: string | null;
  sourceLinkId?: string | null;
  sourceKind?: ProjectKnowledgeSourceKind | null;
  updatedAt: string;
  createdAt: string;
}

export interface ProjectKnowledgeSections {
  knowledge: ProjectKnowledgeSummary[];
  experiment: ProjectKnowledgeSummary[];
  data: ProjectKnowledgeSummary[];
}

export interface ProjectTaskSummary {
  id: string;
  name: string;
  taskType?: 'project_progress' | 'weekly_summary' | 'literature_tracking' | 'custom';
  status: string;
  prompt?: string;
  scheduleKind: string;
  scheduleStartAt?: string | null;
  nextRunAt?: string | null;
  lastRunAt?: string | null;
  lastRunStatus?: string | null;
  mainSessionId?: string | null;
  timezone?: string | null;
  updatedAt?: string | null;
}

export interface ProjectChatSummary {
  id: string;
  title?: string | null;
  scene: string;
  sessionKind?: 'normal' | 'task';
  agentType?: import('./home-agent-types.js').HomeAgentType;
  isPinned?: boolean;
  pinnedAt?: string | null;
  updatedAt: string;
  createdAt: string;
}

export interface ProjectDetail extends ProjectSummary {
  permissions: ProjectPermissionView;
  members: ProjectMemberSummary[];
  sections: {
    chats: ProjectChatSummary[];
    knowledge: ProjectKnowledgeSections;
    tasks: ProjectTaskSummary[];
    data: ProjectKnowledgeSummary[];
  };
}

export interface ProjectsBootstrapPayload {
  defaultProject: ProjectSummary;
  projects: ProjectSummary[];
}
