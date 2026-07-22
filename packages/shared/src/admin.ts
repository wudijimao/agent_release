export const ADMIN_PERMISSION_RULE_VISIBILITIES = ['project_members', 'lab_shared'] as const;
export type AdminTeamKnowledgeDefaultVisibility = (typeof ADMIN_PERMISSION_RULE_VISIBILITIES)[number];

export interface AdminPermissionRules {
  teamKnowledgeDefaultVisibility: AdminTeamKnowledgeDefaultVisibility;
  allowLabShareRequest: boolean;
  allowPromoteTeamKnowledgeToLabShared: boolean;
}

export const DEFAULT_ADMIN_PERMISSION_RULES: AdminPermissionRules = {
  teamKnowledgeDefaultVisibility: 'project_members',
  allowLabShareRequest: true,
  allowPromoteTeamKnowledgeToLabShared: true,
};

export const ADMIN_TOKEN_LEDGER_ENTRY_TYPES = ['recharge', 'usage_debit', 'manual_adjustment', 'refund'] as const;
export type AdminTokenLedgerEntryType = (typeof ADMIN_TOKEN_LEDGER_ENTRY_TYPES)[number];

export const ADMIN_USAGE_EVENT_SOURCES = ['home_chat', 'scheduled_task', 'tracking_summary', 'manual'] as const;
export type AdminUsageEventSource = (typeof ADMIN_USAGE_EVENT_SOURCES)[number];

export const ADMIN_SHARED_REQUEST_STATUSES = ['pending', 'approved', 'rejected', 'cancelled'] as const;
export type AdminSharedKnowledgeRequestStatus = (typeof ADMIN_SHARED_REQUEST_STATUSES)[number];

export interface AdminOverviewResponse {
  memberCount: number;
  teamProjectCount: number;
  tokenBalance: number;
  monthTokenUsage: number;
  last7dTokenUsage: number;
  estimatedRemainingDays?: number | null;
  pendingSharedRequestCount: number;
}

export interface AdminMemberUsageSummary {
  id: string;
  labId: string;
  userId: string;
  role: 'admin' | 'pi' | 'postdoc' | 'student' | 'manager';
  joinedAt: string;
  user: {
    id: string;
    email: string;
    name: string;
    avatarUrl?: string | null;
  };
  monthTokenUsage: number;
  last7dTokenUsage: number;
}

export interface AdminTeamProjectSummary {
  id: string;
  name: string;
  description: string;
  status: string;
  memberCount: number;
  knowledgeCount: number;
  taskCount: number;
  updatedAt: string;
  createdAt: string;
}

export interface AdminUsageSummaryResponse {
  tokenBalance: number;
  monthTokenUsage: number;
  last7dTokenUsage: number;
  estimatedRemainingDays?: number | null;
  byMember: Array<{
    userId: string;
    name: string;
    email: string;
    totalTokens: number;
  }>;
  byProject: Array<{
    projectId: string;
    name: string;
    totalTokens: number;
  }>;
}

export interface AdminUsageEventItem {
  id: string;
  userId?: string | null;
  userName?: string | null;
  projectId?: string | null;
  projectName?: string | null;
  sessionId?: string | null;
  runId?: string | null;
  provider?: string | null;
  model?: string | null;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  eventSource: AdminUsageEventSource | string;
  createdAt: string;
}

export interface AdminTokenLedgerItem {
  id: string;
  entryType: AdminTokenLedgerEntryType | string;
  amountTokens: number;
  balanceAfter?: number | null;
  sourceType?: string | null;
  sourceId?: string | null;
  description?: string | null;
  createdBy?: string | null;
  createdAt: string;
}

export interface AdminSharedKnowledgeRequestItem {
  id: string;
  projectId?: string | null;
  projectName?: string | null;
  kbNodeId: string;
  kbNodeTitle?: string | null;
  projectKnowledgeLinkId?: string | null;
  knowledgeType?: string | null;
  reason?: string | null;
  status: AdminSharedKnowledgeRequestStatus | string;
  requestedBy?: string | null;
  requestedByName?: string | null;
  reviewedBy?: string | null;
  reviewedByName?: string | null;
  reviewNote?: string | null;
  reviewedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
