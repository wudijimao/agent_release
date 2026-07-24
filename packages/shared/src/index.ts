// ============ 用户与团队 ============
export * from './home-agent-types.js';
export * from './admin.js';

import type { HomeAgentType } from './home-agent-types.js';

export type LabRole = 'admin' | 'pi' | 'postdoc' | 'student' | 'manager';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface Lab {
  id: string;
  name: string;
  institution?: string;
  inviteCode?: string;
  createdBy: string;
  createdAt: string;
}

export interface LabMember {
  id: string;
  labId: string;
  userId: string;
  role: LabRole;
  joinedAt: string;
  user?: Pick<User, 'id' | 'email' | 'name' | 'avatarUrl'>;
}

export interface RegenerateLabInviteResponse {
  inviteCode: string;
}

export interface UpdateLabMemberRoleRequest {
  role: LabRole;
}

export interface UpdateLabMemberRoleResponse {
  id: string;
  role: LabRole;
}

export interface RemoveLabMemberResponse {
  ok: true;
}

// ============ 认证 ============

export interface LoginRequest {
  email: string;
  password: string;
  rememberLogin?: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  labName?: string;       // 创建新实验室
  inviteCode?: string;    // 加入现有实验室
  emailVerificationCode?: string;
}

export interface EmailVerificationSendResponse {
  emailMasked: string;
  expiresInSeconds: number;
  resendAfterSeconds: number;
}

export interface PasswordResetConfirmRequest {
  email: string;
  emailVerificationCode: string;
  newPassword: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  ok: boolean;
  requiresLogin: boolean;
}

export interface AuthResponse {
  user: User;
  labs: Lab[];
  accessToken?: string;
}

export interface CurrentUserResponse {
  user: User;
  labs: Lab[];
  activeLab: Lab | null;
  activeLabRole?: LabRole | null;
}

export interface UpdateCurrentUserAvatarResponse {
  user: User;
}

export interface SetActiveLabRequest {
  labId: string;
}

export interface SetActiveLabResponse {
  activeLab: Lab;
  activeLabRole: LabRole;
}

export interface LogoutResponse {
  ok: true;
}

// ============ 聊天会话 ============

export type ChatSessionScene = 'home' | 'knowledge' | 'wiki' | 'budget' | 'experiment';

export interface ChatSessionListItem {
  id: string;
  title?: string | null;
  scene: ChatSessionScene;
  projectId?: string | null;
  sessionKind?: 'normal' | 'task';
  agentType?: HomeAgentType;
  isPinned?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAgentSessionRequest {
  agentType: HomeAgentType;
  projectId?: string | null;
}

export interface CreateAgentSessionResponse {
  sessionId: string;
  agentType: HomeAgentType;
  projectId: string | null;
  starterMessage?: unknown | null;
}

export interface ChatSessionListResponse {
  items: ChatSessionListItem[];
}

// ============ 知识库 ============

export type SubscriptionType = 'pubmed' | 'biorxiv' | 'twitter' | 'web' | 'lab-tracking';

export interface Subscription {
  id: string;
  labId: string;
  name: string;
  type: SubscriptionType;
  config: {
    keywords?: string[];
    url?: string;
    frequency: 'hourly' | 'daily' | 'weekly';
    lookbackDays?: number;
    maxHighPerProject?: number;
    maxCounterSignalsPerProject?: number;
    [key: string]: unknown;
  };
  enabled: boolean;
  lastFetchAt?: string;
  createdBy: string;
  createdAt: string;
}

export interface FeedItem {
  id: string;
  subscriptionId: string;
  labId: string;
  title: string;
  url?: string;
  content?: string;
  summary?: string;
  relevanceScore?: number;
  tags: string[];
  isRead: boolean;
  isSaved?: boolean;
  sourceIdentifiers?: import('./tracking.js').TrackingSourceIdentifiers;
  publishedAt?: string | null;
  duplicateKey?: string | null;
  sourceQuality?: import('./tracking.js').TrackingSourceQuality | null;
  aiSummary?: import('./tracking.js').FeedItemAiSummaryPreview;
  fetchedAt: string;
}

export type DocumentType = 'pdf' | 'docx' | 'gb' | 'fasta' | 'md' | 'txt';
export type DocumentEmbeddingStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface DocumentMeta {
  id: string;
  labId: string;
  title: string;
  type: DocumentType;
  folder: string;
  tags: string[];
  fileUrl: string;
  fileSize?: number;
  summary?: string;
  chunkCount: number;
  embeddingStatus: DocumentEmbeddingStatus;
  embeddingError?: string | null;
  indexedAt?: string | null;
  uploadedBy: string;
  createdAt: string;
}

export interface DocumentFolderNode {
  id: string;
  labId: string;
  parentId?: string | null;
  title: string;
  path: string;
  sortOrder: number;
  directDocCount: number;
  totalDocCount: number;
  children: DocumentFolderNode[];
}

export interface Citation {
  sourceType?: 'document' | 'wiki';
  sourceId?: string;
  documentId?: string;
  wikiPageId?: string;
  sourceUrl?: string;
  chunkId: string;
  page?: number;
  text: string;
  documentTitle: string;
  createdBy?: string | null;
  createdByName?: string | null;
  createdAt?: string;
  updatedAt?: string;
  documentKind?: import('./home-rag.js').HomeRagDocumentKind | 'unknown';
  experimentTime?: import('./experiment-time.js').RagResultExperimentTime;
  matchReason?: string;
}

export interface KnowledgeMessage {
  id: string;
  chatId: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: Citation[];
  createdAt: string;
}

export type WikiPermission = 'view' | 'edit' | 'admin';

export interface WikiPageSummary {
  id: string;
  labId: string;
  parentId?: string | null;
  title: string;
  icon?: string | null;
  templateId?: string | null;
  isFolder: boolean;
  sortOrder: number;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface WikiPageTreeItem extends WikiPageSummary {
  children: WikiPageTreeItem[];
}

export interface WikiPageDetail extends WikiPageSummary {
  content: string;
  contentText: string;
  effectivePermission: WikiPermission;
}

export interface WikiVersion {
  id: string;
  pageId: string;
  versionNumber: number;
  content: string;
  contentText: string;
  summary?: string | null;
  createdBy?: string | null;
  createdByName?: string | null;
  createdAt: string;
}

export interface WikiComment {
  id: string;
  pageId: string;
  parentId?: string | null;
  content: string;
  createdBy?: string | null;
  createdByName?: string | null;
  createdAt: string;
}

export interface WikiPermissionAssignment {
  id?: string;
  pageId?: string;
  userId: string;
  userName?: string | null;
  permission: WikiPermission;
}

export interface WikiTemplate {
  id: string;
  name: string;
  description: string;
  icon?: string;
  title: string;
  content: string;
}

export type KbNodeType = 'page';
export type KbPermission = 'none' | 'view_comment' | 'edit' | 'admin';
export type KbRootPermission = Exclude<KbPermission, 'none'>;
export type KbPermissionSource =
  | 'lab_role'
  | 'root_explicit'
  | 'node_explicit'
  | 'inherited'
  | 'default_none';
export type KbAttachmentConvertStatus = 'pending' | 'processing' | 'done' | 'error';
export type KbAttachmentConvertEngine = 'docling' | 'llm';
export type KbAttachmentConvertStage =
  | 'queued'
  | 'fetching'
  | 'submitting'
  | 'processing'
  | 'extracting'
  | 'ocr_images'
  | 'assembling'
  | 'storing'
  | 'writing_body'
  | 'indexing'
  | 'done'
  | 'error';
export type KbAttachmentInsertMode = 'none' | 'replace_placeholder';
export type KbChunkSourceType = 'page' | 'attachment';
export type KbAttachmentRegionType =
  | 'text'
  | 'table'
  | 'figure'
  | 'caption'
  | 'formula'
  | 'header'
  | 'footer';
export type KbAttachmentLayoutDegradedReason =
  | 'llm_coarse_layout'
  | 'missing_page_preview'
  | 'missing_region_bbox'
  | 'missing_region_crop';

export interface KbNodeSummary {
  id: string;
  labId: string;
  parentId?: string | null;
  path: string;
  nodeType: KbNodeType;
  title: string;
  icon?: string | null;
  coverUrl?: string | null;
  sortOrder: number;
  excerpt: string;
  childCount: number;
  sourceFeedItemId?: string | null;
  effectivePermission: KbPermission;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface KbNodeTreeItem extends KbNodeSummary {
  children: KbNodeTreeItem[];
}

export interface KbNodeDetail extends KbNodeSummary {
  content: unknown;
  contentText: string;
}

export interface KbPermissionInheritedFrom {
  scope: 'root' | 'node';
  nodeId?: string | null;
  title: string;
}

export interface KbRootPermissionItem {
  userId: string;
  userName?: string | null;
  permission: KbRootPermission;
  source: 'lab_role' | 'root_explicit';
  mutable: boolean;
}

export interface KbNodePermissionItem {
  userId: string;
  userName?: string | null;
  explicitPermission?: KbPermission | null;
  effectivePermission: KbPermission;
  source: 'lab_role' | 'node_explicit' | 'inherited' | 'default_none';
  mutable: boolean;
  inheritedFrom?: KbPermissionInheritedFrom | null;
}

export interface KbRootPermissionsPayload {
  currentUserPermission: KbPermission;
  systemAdmins: KbRootPermissionItem[];
  items: KbRootPermissionItem[];
}

export interface KbNodePermissionsPayload {
  currentUserPermission: KbPermission;
  inheritedFrom?: KbPermissionInheritedFrom | null;
  items: KbNodePermissionItem[];
}

export interface KbAttachment {
  id: string;
  nodeId: string;
  labId: string;
  originalName: string;
  mimeType: string;
  fileSize?: number | null;
  storageUrl: string;
  thumbnailUrl?: string | null;
  convertStatus: KbAttachmentConvertStatus;
  lastConvertEngine?: KbAttachmentConvertEngine | null;
  convertRequestedEngine?: KbAttachmentConvertEngine | null;
  convertStage?: KbAttachmentConvertStage | null;
  convertProgress?: number | null;
  convertError?: string | null;
  convertInsertMode?: KbAttachmentInsertMode | null;
  convertTargetBlockId?: string | null;
  convertAttemptCount?: number | null;
  convertStartedAt?: string | null;
  convertFinishedAt?: string | null;
  extractedText?: string | null;
  markdownContent?: string | null;
  uploadedBy?: string | null;
  createdAt: string;
}

export interface KbAttachmentPage {
  id: string;
  attachmentId: string;
  labId: string;
  pageNumber: number;
  width?: number | null;
  height?: number | null;
  dpi?: number | null;
  previewUrl?: string | null;
  createdAt: string;
}

export interface KbAttachmentRegionBBox {
  x: number;
  y: number;
  width: number;
  height: number;
  normalized?: boolean;
}

export interface KbAttachmentRegion {
  id: string;
  attachmentId: string;
  pageId?: string | null;
  labId: string;
  pageNumber: number;
  regionIndex: number;
  type: KbAttachmentRegionType;
  bbox?: KbAttachmentRegionBBox | null;
  cropUrl?: string | null;
  text?: string | null;
  markdown?: string | null;
  html?: string | null;
  confidence?: number | null;
  sourceEngine: 'docling' | 'ocr' | 'llm';
  role?: string | null;
  readingOrder?: number | null;
  parentRegionId?: string | null;
  meta?: Record<string, unknown> | null;
  createdAt: string;
}

export interface KbAttachmentLayout {
  attachment: KbAttachment;
  engine: KbAttachmentConvertEngine;
  degraded: boolean;
  degradedReason?: KbAttachmentLayoutDegradedReason | null;
  normalizedMarkdown: string;
  pages: KbAttachmentPage[];
  regions: KbAttachmentRegion[];
}

export interface KbVersion {
  id: string;
  nodeId: string;
  versionNumber: number;
  content: unknown;
  contentText: string;
  changeSummary?: string | null;
  createdBy?: string | null;
  createdByName?: string | null;
  createdAt: string;
}

export type KbCommentStatus = 'open' | 'resolved';

export interface KbCommentMention {
  userId: string;
  userName?: string | null;
}

export interface KbComment {
  id: string;
  nodeId: string;
  parentId?: string | null;
  content: string;
  quoteText?: string | null;
  rangeStart?: number | null;
  rangeEnd?: number | null;
  anchorPrefix?: string | null;
  anchorSuffix?: string | null;
  status: KbCommentStatus;
  resolvedBy?: string | null;
  resolvedByName?: string | null;
  resolvedAt?: string | null;
  editedAt?: string | null;
  createdBy?: string | null;
  createdByName?: string | null;
  mentions?: KbCommentMention[];
  updatedAt: string;
  createdAt: string;
}

export interface KbCommentThread {
  rootComment: KbComment;
  replies: KbComment[];
}

export interface KbTemplate {
  id: string;
  name: string;
  description: string;
  icon?: string;
  title: string;
  source?: 'system' | 'workspace';
  coreValue?: string;
  category?: string;
  structure?: string[];
  requiredFields?: string[];
  recommendedBlocks?: string[];
  linkedPlayTemplates?: string[];
  completionRules?: string[];
  transformInstruction?: string;
  createdBy?: string | null;
  createdAt?: string;
  updatedAt?: string;
  content: unknown;
}

// ============ 实验室管理 ============

export type InventoryCategory = 'reagent' | 'consumable' | 'kit' | 'enzyme' | 'antibody';
export type StorageTemp = 'RT' | '4C' | '-20C' | '-80C' | 'LN2';
export type InventoryFuzzyImportEngine = 'auto' | 'docling' | 'llm';
export type InventoryFuzzyImportResultEngine = 'docling' | 'llm' | 'office' | 'text';
export type InventoryFuzzyImportRowStatus =
  | 'ready'
  | 'needs_review'
  | 'duplicate_candidate'
  | 'invalid';

export interface InventoryItem {
  id: string;
  labId: string;
  name: string;
  catalogNumber?: string;
  supplier?: string;
  category: InventoryCategory;
  quantity: number;
  unit?: string;
  location?: string;
  storageTemp?: StorageTemp;
  expiryDate?: string;
  unitPrice?: number;
  currency: string;
  alertThreshold?: number;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryFuzzyImportSourceRef {
  pageNumber?: number;
  regionId?: string;
}

export interface InventoryFuzzyImportCandidate {
  row: number;
  name?: string;
  category?: InventoryCategory;
  catalogNumber?: string;
  supplier?: string;
  quantity?: string;
  unit?: string;
  location?: string;
  storageTemp?: StorageTemp;
  expiryDate?: string;
  unitPrice?: string;
  alertThreshold?: string;
  confidence: number;
  sourceText?: string;
  sourceRef?: InventoryFuzzyImportSourceRef;
  warnings: string[];
  status: InventoryFuzzyImportRowStatus;
}

export interface InventoryFuzzyImportExtractResponse {
  fileName: string;
  engine: InventoryFuzzyImportResultEngine;
  extractedText: string;
  markdownContent?: string;
  layout?: {
    pages: unknown[];
    regions: unknown[];
  };
  candidates: InventoryFuzzyImportCandidate[];
  summary: {
    totalCandidates: number;
    readyCount: number;
    needsReviewCount: number;
    invalidCount: number;
    averageConfidence: number;
  };
  warnings: string[];
}

export type SampleFuzzyImportEngine = InventoryFuzzyImportEngine;
export type SampleFuzzyImportResultEngine = InventoryFuzzyImportResultEngine;
export type SampleFuzzyImportRowStatus = InventoryFuzzyImportRowStatus;

export interface SampleFuzzyImportSourceRef {
  pageNumber?: number;
  regionId?: string;
}

export interface SampleFuzzyImportCandidate {
  row: number;
  name?: string;
  type?: SampleType;
  freezer?: string;
  shelf?: string;
  box?: string;
  position?: string;
  tags: string[];
  fileUrl?: string;
  metadata?: Record<string, string | number | boolean>;
  confidence: number;
  sourceText?: string;
  sourceRef?: SampleFuzzyImportSourceRef;
  warnings: string[];
  status: SampleFuzzyImportRowStatus;
}

export interface SampleFuzzyImportExtractResponse {
  fileName: string;
  engine: SampleFuzzyImportResultEngine;
  extractedText: string;
  markdownContent?: string;
  layout?: {
    pages: unknown[];
    regions: unknown[];
  };
  candidates: SampleFuzzyImportCandidate[];
  summary: {
    totalCandidates: number;
    readyCount: number;
    needsReviewCount: number;
    invalidCount: number;
    averageConfidence: number;
  };
  warnings: string[];
}

export type InventoryAction = 'add' | 'consume' | 'adjust' | 'dispose';

export interface InventoryLog {
  id: string;
  inventoryId: string;
  action: InventoryAction;
  quantityChange: number;
  note?: string;
  operatedBy: string;
  operatedByName?: string | null;
  createdAt: string;
}

export type SampleType = 'plasmid' | 'cell_line' | 'strain' | 'antibody' | 'primer';

export interface SampleLocation {
  freezer: string;
  shelf?: string;
  box?: string;
  position?: string;
}

export interface Sample {
  id: string;
  labId: string;
  name: string;
  type: SampleType;
  location: SampleLocation;
  ownerId: string;
  metadata?: Record<string, unknown>;
  fileUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// ============ 预算管理 ============

export interface BudgetFund {
  id: string;
  labId: string;
  name: string;
  totalAmount: number;
  currency: string;
  startDate?: string;
  endDate?: string;
  note?: string;
  createdAt: string;
}

export type ExpenseCategory =
  | 'reagent'
  | 'consumable'
  | 'outsource'
  | 'travel'
  | 'equipment'
  | 'other';

export interface Expense {
  id: string;
  labId: string;
  fundId?: string;
  memberId: string;
  projectName?: string;
  category: ExpenseCategory;
  amount: number;
  currency: string;
  description?: string;
  tags: string[];
  receiptUrl?: string;
  expenseDate: string;
  createdAt: string;
}

export type LedgerType = 'receivable' | 'payable';
export type LedgerStatus = 'pending' | 'verified' | 'overdue' | 'settled';

export interface LedgerEntry {
  id: string;
  labId: string;
  type: LedgerType;
  counterparty: string;
  amount: number;
  currency: string;
  reason: string;
  dueDate?: string;
  status: LedgerStatus;
  attachments: Array<{ name: string; url: string }>;
  note?: string;
  remindBeforeDays: number;
  remindChannels: Array<'feishu' | 'email' | 'wechat'>;
  createdBy: string;
  createdAt: string;
  settledAt?: string;
}

export interface BudgetOverview {
  totalBudget: number;
  used: number;
  remaining: number;
  currency: string;
  usageRate: number;
  forecastEndMonth?: string;
}

// ============ Agent / 对话 ============

export type StreamEventType =
  | 'text'
  | 'tool_call'
  | 'tool_result'
  | 'code'
  | 'code_output'
  | 'error'
  | 'done';

export interface StreamEvent {
  type: StreamEventType;
  content?: string;
  tool?: string;
  input?: unknown;
  output?: unknown;
  language?: string;
  code?: string;
  error?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// ============ 通知 ============

export type NotificationType = 'system' | 'task' | 'knowledge' | 'alert' | 'budget';

export interface Notification {
  id: string;
  labId: string;
  userId?: string;
  type: NotificationType;
  title: string;
  body?: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

// ============ API Response Wrapper ============

export const BIOAGENT_REQUEST_ID_HEADER = 'X-BioAgent-Request-Id';
export const FALLBACK_REQUEST_ID_HEADER = 'X-Request-Id';
export const LAB_ID_HEADER = 'X-Lab-Id';

export interface ApiErrorPayload {
  code: string;
  message: string;
  details?: unknown;
  requestId?: string;
}

export interface ApiSuccessResponse<T> {
  data: T;
  error?: never;
}

export interface ApiFailureResponse {
  data?: never;
  error: ApiErrorPayload;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailureResponse;

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export * from './active-sop.js';
export * from './analysis-api.js';
export * from './analysis-workbench.js';
export * from './attachment-files.js';
export * from './assay-image-evidence.js';
export * from './cross-assay-validation.js';
export * from './cloning.js';
export * from './cloning-workbench.js';
export * from './chat-contract.js';
export * from './home-display.js';
export * from './context-engineering.js';
export * from './cross-session-memory.js';
export * from './data-hub.js';
export * from './evidence-board.js';
export * from './home-draft.js';
export * from './experiment-time.js';
export * from './home-rag.js';
export * from './today-clues.js';
export * from './presentation.js';
export * from './projects.js';
export * from './home-workflow-plan.js';
export * from './memory-experience.js';
export { normalizeMemoryConflictWizardPayload } from './memory.js';
export * from './memory.js';
export * from './research-answer.js';
export * from './research-candidate.js';
export * from './material-requirements.js';
export * from './historical-archive.js';
export * from './pipeline-catalog.js';
export * from './tracking.js';
export * from './validation-package.js';
export * from './structural-compute.js';
export * from './scheduled-tasks.js';
export * from './skills.js';
export * from './workflow-orchestration.js';
