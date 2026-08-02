import type { Page, Route } from "@playwright/test";

import {
  mockAuthenticatedSession,
  mockChatHistory,
  mockProjectsBootstrap,
  respondWithApiError,
} from "./network";

// ---------------------------------------------------------------------------
// 通用小工具
// ---------------------------------------------------------------------------

export function jsonBody(value: unknown) {
  return JSON.stringify(value);
}

export async function fulfillJson(
  route: Route,
  body: unknown,
  status = 200,
) {
  await route.fulfill({
    status,
    contentType: "application/json; charset=utf-8",
    body: jsonBody(body),
  });
}

const FIXED_NOW = "2025-07-15T12:00:00.000Z";

// ---------------------------------------------------------------------------
// 定时任务 / 文献订阅（/tools）
// ---------------------------------------------------------------------------

export interface ScheduledTaskFixture {
  id: string;
  name: string;
  prompt: string;
  status?: "active" | "paused" | "running" | "error" | "disabled";
  scheduleKind?: "once" | "daily" | "weekly" | "monthly";
  scheduleConfig?: Record<string, unknown>;
  nextRunAt?: string | null;
  scheduleStartAt?: string | null;
  scheduleEndAt?: string | null;
  mainSessionId?: string | null;
  taskType?: string;
}

export function scheduledTaskFixture(
  overrides: ScheduledTaskFixture,
): Record<string, unknown> {
  return {
    id: overrides.id,
    labId: "lab-visual-test",
    ownerUserId: "u-visual-test",
    name: overrides.name,
    description: null,
    projectId: null,
    taskType: overrides.taskType ?? "custom",
    templateKey: null,
    mainSessionId: overrides.mainSessionId ?? null,
    scope: "personal",
    status: overrides.status ?? "active",
    prompt: overrides.prompt,
    timezone: "Asia/Shanghai",
    scheduleKind: overrides.scheduleKind ?? "daily",
    scheduleConfig: overrides.scheduleConfig ?? { time: "08:30" },
    scheduleStartAt: overrides.scheduleStartAt ?? "2025-06-01T00:00:00.000Z",
    scheduleEndAt: overrides.scheduleEndAt ?? null,
    nextRunAt: overrides.nextRunAt ?? "2025-07-16T00:30:00.000Z",
    lastRunAt: null,
    lastRunStatus: null,
    consecutiveFailureCount: 0,
    targetParentNodeId: null,
    targetWikiNodeId: null,
    targetPath: "",
    titleTemplate: null,
    contextRefs: [],
    sourceConfig: {},
    publishPolicy: {},
    toolPolicy: {},
    notificationConfig: {},
    createdAt: "2025-06-01T00:00:00.000Z",
    updatedAt: "2025-06-01T00:00:00.000Z",
    deletedAt: null,
    ...overrides,
  };
}

export interface LiteratureSubscriptionFixture {
  id: string;
  name: string;
  type?: "pubmed" | "biorxiv";
  enabled?: boolean;
  frequency?: "hourly" | "daily" | "weekly";
  keywords?: string[];
  lastFetchAt?: string | null;
  totalItems?: number;
  unreadItems?: number;
  savedItems?: number;
  boundProjectCount?: number;
  queryMode?: "and" | "or" | "advanced";
}

export function literatureSubscriptionFixture(
  overrides: LiteratureSubscriptionFixture,
): Record<string, unknown> {
  return {
    id: overrides.id,
    labId: "lab-visual-test",
    name: overrides.name,
    type: overrides.type ?? "pubmed",
    config: {
      keywords: overrides.keywords ?? ["CRISPR"],
      frequency: overrides.frequency ?? "daily",
      lookbackDays: 30,
      queryMode: overrides.queryMode ?? "and",
    },
    enabled: overrides.enabled ?? true,
    lastFetchAt: overrides.lastFetchAt ?? null,
    totalItems: overrides.totalItems ?? 0,
    unreadItems: overrides.unreadItems ?? 0,
    savedItems: overrides.savedItems ?? 0,
    boundProjectCount: overrides.boundProjectCount ?? 0,
    createdBy: "u-visual-test",
    createdAt: FIXED_NOW,
  };
}

export interface ToolsPageOptions {
  tasks?: Record<string, unknown>[];
  subscriptions?: Record<string, unknown>[];
  trackingProjects?: Array<{ id: string; title: string }>;
  taskError?: boolean;
  subscriptionError?: boolean;
  role?: "admin" | "pi" | "postdoc" | "student" | "manager";
}

export async function mockToolsPage(
  page: Page,
  options: ToolsPageOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );

  const tasks = options.tasks ?? [];
  const subscriptions = options.subscriptions ?? [];
  const trackingProjects = options.trackingProjects ?? [];

  await page.route("**/api/scheduled-tasks", (route) => {
    if (route.request().method() === "GET") {
      if (options.taskError) {
        return respondWithApiError(route, {
          status: 503,
          code: "TASK_SERVICE_UNAVAILABLE",
          message: "定时任务服务暂时不可用，请稍后重试",
        });
      }
      return fulfillJson(route, tasks);
    }
    if (route.request().method() === "POST") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      const created = scheduledTaskFixture({
        id: "task-created",
        name: String(body.name ?? "新建任务"),
        prompt: String(body.prompt ?? ""),
        scheduleKind: (body.scheduleKind as never) ?? "daily",
        scheduleConfig: (body.scheduleConfig as Record<string, unknown>) ?? {},
      });
      return fulfillJson(route, created, 201);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/scheduled-tasks\/([^/?]+)\/pause$/, (route) => {
    const id = decodeURIComponent(route.request().url().split("/").at(-2) ?? "");
    const task = tasks.find((item) => item.id === id);
    if (!task) {
      return respondWithApiError(route, {
        status: 404,
        code: "NOT_FOUND",
        message: "任务不存在",
      });
    }
    return fulfillJson(route, { ...task, status: "paused" });
  });

  await page.route(/^.*\/api\/scheduled-tasks\/([^/?]+)\/resume$/, (route) => {
    const id = decodeURIComponent(route.request().url().split("/").at(-2) ?? "");
    const task = tasks.find((item) => item.id === id);
    if (!task) {
      return respondWithApiError(route, {
        status: 404,
        code: "NOT_FOUND",
        message: "任务不存在",
      });
    }
    return fulfillJson(route, { ...task, status: "active" });
  });

  await page.route(/^.*\/api\/scheduled-tasks\/([^/?]+)\/run-now$/, (route) =>
    fulfillJson(route, {
      ok: true,
      run: {
        id: "run-1",
        taskId: "task-1",
        labId: "lab-visual-test",
        ownerUserId: "u-visual-test",
        triggerType: "manual",
        scheduledFor: null,
        status: "queued",
        runtimeSessionId: null,
        runtimeRunId: null,
        workflowRunId: null,
        workflowStepId: null,
        draftTitle: null,
        draftSummary: null,
        publishedNodeId: null,
        notificationId: null,
        errorCode: null,
        errorMessage: null,
        startedAt: null,
        finishedAt: null,
        createdAt: FIXED_NOW,
        updatedAt: FIXED_NOW,
      },
    }),
  );

  await page.route(/^.*\/api\/scheduled-tasks\/([^/?]+)\/runs$/, (route) =>
    fulfillJson(route, []),
  );

  await page.route(/^.*\/api\/scheduled-tasks\/[^/?]+$/, (route) => {
    const id = decodeURIComponent(route.request().url().split("/").at(-1) ?? "");
    const task = tasks.find((item) => item.id === id);
    if (!task) {
      return respondWithApiError(route, {
        status: 404,
        code: "NOT_FOUND",
        message: "任务不存在",
      });
    }
    if (route.request().method() === "GET") return fulfillJson(route, task);
    if (route.request().method() === "PATCH") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, { ...task, ...body });
    }
    if (route.request().method() === "DELETE") {
      return fulfillJson(route, { ok: true });
    }
    return route.continue();
  });

  await page.route("**/api/knowledge/subscriptions", (route) => {
    if (route.request().method() === "GET") {
      if (options.subscriptionError) {
        return respondWithApiError(route, {
          status: 503,
          code: "SUBSCRIPTION_SERVICE_UNAVAILABLE",
          message: "文献订阅服务暂时不可用，请稍后重试",
        });
      }
      return fulfillJson(route, subscriptions);
    }
    if (route.request().method() === "POST") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, literatureSubscriptionFixture({
        id: "sub-created",
        name: String(body.name ?? "新建订阅"),
        keywords: (body.config?.keywords as string[] | undefined) ?? [],
      }), 201);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/knowledge\/subscriptions\/([^/?]+)\/projects$/, (route) => {
    if (route.request().method() === "PUT") return fulfillJson(route, { ok: true });
    return fulfillJson(route, { projectNodeIds: [] });
  });

  await page.route(/^.*\/api\/knowledge\/subscriptions\/([^/?]+)\/fetch$/, (route) =>
    fulfillJson(route, { ok: true }),
  );

  await page.route(/^.*\/api\/knowledge\/subscriptions\/([^/?]+)\/enabled$/, (route) => {
    const body = route.request().postDataJSON() as { enabled?: boolean };
    return fulfillJson(route, { ok: true, enabled: Boolean(body?.enabled) });
  });

  await page.route(/^.*\/api\/knowledge\/subscriptions\/[^/?]+$/, (route) => {
    if (route.request().method() === "DELETE") return fulfillJson(route, { ok: true });
    if (route.request().method() === "PUT") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, { ...body, id: route.request().url().split("/").at(-1) });
    }
    return route.continue();
  });

  await page.route("**/api/knowledge/tracking/projects?limit=50", (route) =>
    fulfillJson(route, { items: trackingProjects }),
  );
}

// ---------------------------------------------------------------------------
// Skill 页面（/chat/skills）
// ---------------------------------------------------------------------------

export interface SkillCatalogFixture {
  slug: string;
  displayName: string;
  description: string;
  category: string;
  executionMode?: "prompt" | "script" | "remote";
  riskLevel?: "low" | "medium" | "high";
  metadata?: Record<string, unknown> | null;
}

export function skillCatalogFixture(
  overrides: SkillCatalogFixture,
): Record<string, unknown> {
  return {
    id: overrides.slug,
    slug: overrides.slug,
    displayName: overrides.displayName,
    description: overrides.description,
    category: overrides.category,
    executionMode: overrides.executionMode ?? "prompt",
    riskLevel: overrides.riskLevel ?? "low",
    sourceRepo: "BioAgent",
    sourcePath: null,
    supportsP1: true,
    metadata: overrides.metadata ?? { sourceType: "built-in", capabilities: [] },
    createdAt: FIXED_NOW,
    updatedAt: FIXED_NOW,
  };
}

export interface SkillsPageOptions {
  catalog?: Record<string, unknown>[];
  installedSlugs?: string[];
  loadError?: boolean;
  installError?: boolean;
  uninstallError?: boolean;
}

export async function mockSkillsPage(
  page: Page,
  options: SkillsPageOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );

  const catalog = options.catalog ?? [];
  const installedSlugs = options.installedSlugs ?? [];

  await page.route("**/api/skills/catalog", (route) => {
    if (options.loadError) {
      return respondWithApiError(route, {
        status: 503,
        code: "SKILL_SERVICE_UNAVAILABLE",
        message: "Skill 服务暂时不可用，请稍后重试",
      });
    }
    return fulfillJson(route, { items: catalog });
  });

  await page.route("**/api/skills/installed", (route) =>
    fulfillJson(route, {
      items: installedSlugs.map((slug) => ({ id: slug, slug, status: "installed" })),
    }),
  );

  await page.route("**/api/skills/install-many", (route) => {
    if (options.installError) {
      return respondWithApiError(route, {
        status: 503,
        code: "SKILL_INSTALL_FAILED",
        message: "Skill 安装失败，请稍后重试",
      });
    }
    const body = route.request().postDataJSON() as { slugs?: string[] };
    return fulfillJson(route, {
      items: (body.slugs ?? []).map((slug) => ({ id: slug, slug, status: "installed" })),
    });
  });

  await page.route("**/api/skills/uninstall-many", (route) => {
    if (options.uninstallError) {
      return respondWithApiError(route, {
        status: 503,
        code: "SKILL_UNINSTALL_FAILED",
        message: "Skill 卸载失败，请稍后重试",
      });
    }
    return fulfillJson(route, { items: [] });
  });
}

// ---------------------------------------------------------------------------
// 设置页（/system-settings）
// ---------------------------------------------------------------------------

export interface SystemSettingsOptions {
  changePasswordError?: {
    status: number;
    code: string;
    message: string;
  } | null;
  changePasswordOk?: boolean;
  avatarError?: boolean;
}

export async function mockSystemSettingsPage(
  page: Page,
  options: SystemSettingsOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );

  await page.route("**/api/auth/change-password", (route) => {
    if (options.changePasswordError) {
      return respondWithApiError(route, options.changePasswordError);
    }
    return fulfillJson(route, { ok: true, requiresLogin: true });
  });

  await page.route("**/api/auth/me/avatar", (route) => {
    if (options.avatarError) {
      return respondWithApiError(route, {
        status: 503,
        code: "AVATAR_UPLOAD_FAILED",
        message: "头像上传失败，请稍后重试",
      });
    }
    return fulfillJson(route, {
      user: {
        id: "u-visual-test",
        email: "visual-test@example.com",
        name: "视觉测试员",
        avatarUrl: "/avatar-visual-test.png",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
    });
  });
}

// ---------------------------------------------------------------------------
// 成员管理（/members）
// ---------------------------------------------------------------------------

export function adminMemberFixture(
  overrides: Partial<Record<string, unknown>> = {},
) {
  return {
    id: "member-1",
    labId: "lab-visual-test",
    userId: "u-member-1",
    role: "postdoc",
    joinedAt: "2025-02-01T00:00:00.000Z",
    user: {
      id: "u-member-1",
      email: "member1@example.com",
      name: "成员一号",
      avatarUrl: null,
    },
    projects: [],
    monthTokenUsage: 1200,
    last7dTokenUsage: 300,
    ...overrides,
  };
}

export interface MembersPageOptions {
  members?: Record<string, unknown>[];
  loadError?: boolean;
  inviteError?: boolean;
  updateRoleError?: boolean;
  removeError?: boolean;
  role?: "admin" | "pi";
}

export async function mockMembersPage(
  page: Page,
  options: MembersPageOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );

  const members = options.members ?? [];

  await page.route("**/api/admin/members", (route) => {
    if (options.loadError) {
      return respondWithApiError(route, {
        status: 503,
        code: "MEMBER_SERVICE_UNAVAILABLE",
        message: "成员信息加载失败，请稍后重试",
      });
    }
    return fulfillJson(route, members);
  });

  await page.route(/^.*\/api\/labs\/lab-visual-test\/regenerate-invite$/, (route) => {
    if (options.inviteError) {
      return respondWithApiError(route, {
        status: 503,
        code: "INVITE_REGENERATE_FAILED",
        message: "邀请码生成失败，请稍后重试",
      });
    }
    return fulfillJson(route, { inviteCode: "NEWCODE2026" });
  });

  await page.route(/^.*\/api\/labs\/lab-visual-test\/members\/[^/?]+$/, (route) => {
    if (route.request().method() === "PATCH") {
      if (options.updateRoleError) {
        return respondWithApiError(route, {
          status: 503,
          code: "ROLE_UPDATE_FAILED",
          message: "角色更新失败，请稍后重试",
        });
      }
      const body = route.request().postDataJSON() as { role?: string };
      const id = route.request().url().split("/").at(-1) ?? "";
      return fulfillJson(route, { id, role: body.role ?? "postdoc" });
    }
    if (route.request().method() === "DELETE") {
      if (options.removeError) {
        return respondWithApiError(route, {
          status: 503,
          code: "MEMBER_REMOVE_FAILED",
          message: "移除成员失败，请稍后重试",
        });
      }
      return fulfillJson(route, { ok: true });
    }
    return route.continue();
  });

  await page.route("**/api/labs/lab-visual-test/members", (route) =>
    fulfillJson(route, [
      { id: "lab-member-1", labId: "lab-visual-test", userId: "u-member-1", role: "postdoc", joinedAt: "2025-02-01T00:00:00.000Z", user: { id: "u-member-1", email: "member1@example.com", name: "成员一号" } },
    ]),
  );

  await page.route("**/api/labs/lab-visual-test", (route) =>
    fulfillJson(route, {
      id: "lab-visual-test",
      name: "视觉测试实验室",
      institution: "中国科学院",
      inviteCode: "VISUAL2025",
      createdBy: "u-visual-test",
      createdAt: "2025-01-01T00:00:00.000Z",
    }),
  );
}

// ---------------------------------------------------------------------------
// AI 用量（/ai-usage）
// ---------------------------------------------------------------------------

export interface AiUsagePageOptions {
  summary?: Record<string, unknown>;
  events?: Record<string, unknown>[];
  ledger?: Record<string, unknown>[];
  loadError?: boolean;
}

export async function mockAiUsagePage(
  page: Page,
  options: AiUsagePageOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);

  const summary = options.summary ?? {
    tokenBalance: 500000,
    monthTokenUsage: 120000,
    last7dTokenUsage: 30000,
    estimatedRemainingDays: 15,
    byMember: [
      { userId: "u-visual-test", name: "视觉测试员", email: "visual-test@example.com", totalTokens: 80000 },
    ],
    byProject: [],
  };

  await page.route("**/api/admin/usage/summary", (route) => {
    if (options.loadError) {
      return respondWithApiError(route, {
        status: 503,
        code: "USAGE_SERVICE_UNAVAILABLE",
        message: "AI 用量服务暂时不可用，请稍后重试",
      });
    }
    return fulfillJson(route, summary);
  });

  await page.route("**/api/admin/usage/events?limit=200", (route) =>
    fulfillJson(route, options.events ?? []),
  );

  await page.route("**/api/admin/token-ledger?limit=200", (route) =>
    fulfillJson(route, options.ledger ?? []),
  );
}

// ---------------------------------------------------------------------------
// 项目详情（/projects/:projectId）
// ---------------------------------------------------------------------------

export function projectDetailFixture(
  overrides: Record<string, unknown> = {},
): Record<string, unknown> {
  return {
    id: "proj-visual-test",
    labId: "lab-visual-test",
    type: "team",
    status: "active",
    name: "视觉测试项目",
    description: "用于视觉回归测试的项目",
    isDefaultUnassigned: false,
    memberCount: 1,
    knowledgeCount: 1,
    taskCount: 1,
    updatedAt: "2025-06-15T10:30:00.000Z",
    createdAt: "2025-01-15T08:00:00.000Z",
    defaultKbNodeId: "kb-root-visual",
    permissions: {
      canAdmin: true,
      canEdit: true,
      canDelete: true,
    },
    members: [
      {
        id: "pm-1",
        projectId: "proj-visual-test",
        userId: "u-visual-test",
        role: "admin",
        joinedAt: "2025-01-15T08:00:00.000Z",
        user: {
          id: "u-visual-test",
          email: "visual-test@example.com",
          name: "视觉测试员",
          avatarUrl: null,
        },
      },
    ],
    sections: {
      chats: [
        {
          id: "chat-proj-1",
          title: "项目讨论",
          scene: "home",
          sessionKind: "normal",
          isPinned: false,
          updatedAt: "2025-06-10T09:00:00.000Z",
          createdAt: "2025-05-01T09:00:00.000Z",
        },
      ],
      knowledge: {
        knowledge: [
          {
            id: "kb-doc-1",
            kbNodeId: "kb-doc-1",
            labId: "lab-visual-test",
            parentId: "kb-root-visual",
            path: "文献/CRISPR 综述",
            nodeType: "document",
            title: "CRISPR 综述",
            sortOrder: 0,
            excerpt: "基因编辑技术的综述",
            childCount: 0,
            effectivePermission: "read_write",
            section: "knowledge",
            knowledgeType: "literature",
            updatedAt: "2025-06-01T00:00:00.000Z",
            createdAt: "2025-05-01T00:00:00.000Z",
          },
        ],
        experiment: [],
        data: [],
      },
      tasks: [
        {
          id: "task-proj-1",
          name: "文献追踪任务",
          taskType: "literature_tracking",
          status: "active",
          scheduleKind: "daily",
          nextRunAt: "2025-07-16T00:30:00.000Z",
        },
      ],
      data: [],
    },
    ...overrides,
  };
}

export interface ProjectDetailPageOptions {
  project?: Record<string, unknown>;
  labMembers?: Record<string, unknown>[];
  detailError?: boolean;
  templateError?: boolean;
  documentError?: boolean;
  document?: Record<string, unknown> | null;
  documentAttachments?: Record<string, unknown>[];
  documentVersions?: Record<string, unknown>[];
}

export async function mockProjectDetailPage(
  page: Page,
  options: ProjectDetailPageOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );

  const project = options.project ?? projectDetailFixture();

  const uploadedAttachments: Record<string, unknown>[] = [];

  await page.route(/^.*\/api\/projects\/proj-visual-test$/, (route) => {
    if (route.request().method() === "GET") {
      if (options.detailError) {
        return respondWithApiError(route, {
          status: 503,
          code: "PROJECT_SERVICE_UNAVAILABLE",
          message: "项目服务暂时不可用，请稍后重试",
        });
      }
      return fulfillJson(route, project);
    }
    if (route.request().method() === "PATCH") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, { ...project, ...body });
    }
    return route.continue();
  });

  await page.route("**/api/projects/proj-visual-test/archive", (route) =>
    fulfillJson(route, { ok: true }),
  );

  await page.route("**/api/labs/lab-visual-test", (route) =>
    fulfillJson(route, {
      id: "lab-visual-test",
      name: "视觉测试实验室",
      institution: "中国科学院",
      inviteCode: "VISUAL2025",
      createdBy: "u-visual-test",
      createdAt: "2025-01-01T00:00:00.000Z",
    }),
  );

  await page.route("**/api/labs/lab-visual-test/members", (route) =>
    fulfillJson(route, options.labMembers ?? []),
  );

  await page.route("**/api/knowledge/wiki2/templates", (route) => {
    if (options.templateError) {
      return respondWithApiError(route, {
        status: 503,
        code: "TEMPLATE_SERVICE_UNAVAILABLE",
        message: "文档模板加载失败",
      });
    }
    return fulfillJson(route, [
      { id: "blank", name: "空白文档", description: "从空白开始书写", title: "", content: { content: [] } },
      { id: "template-lab-note", name: "实验记录", description: "记录实验过程", title: "实验记录", content: { content: [{ type: "heading", props: { level: 1 }, content: [{ text: "实验记录" }] }] } },
    ]);
  });

  await page.route("**/api/knowledge/wiki2/nodes", (route) => {
    if (route.request().method() === "POST") {
      return fulfillJson(route, {
        node: {
          id: "kb-doc-created",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "新建文档",
          nodeType: "document",
          title: "新建文档",
          sortOrder: 0,
          excerpt: "",
          childCount: 0,
          effectivePermission: "read_write",
          createdAt: FIXED_NOW,
          updatedAt: FIXED_NOW,
        },
      }, 201);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/knowledge\/wiki2\/nodes\/kb-doc-1$/, (route) => {
    if (route.request().method() === "PUT") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, {
        node: {
          id: "kb-doc-1",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "CRISPR 综述",
          nodeType: "document",
          title: body.title ?? "CRISPR 综述",
          sortOrder: 0,
          excerpt: "",
          childCount: 0,
          effectivePermission: "read_write",
          content: body.content ?? "",
          contentText: body.contentText ?? "",
          createdAt: "2025-05-01T00:00:00.000Z",
          updatedAt: FIXED_NOW,
        },
      });
    }
    if (route.request().method() === "DELETE") {
      return fulfillJson(route, { ok: true });
    }
    if (route.request().method() === "GET") {
      if (options.documentError) {
        return respondWithApiError(route, {
          status: 404,
          code: "NOT_FOUND",
          message: "文档不存在或已被删除",
        });
      }
      const document = options.document ?? {
        node: {
          id: "kb-doc-1",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "文献/CRISPR 综述",
          nodeType: "document",
          title: "CRISPR 综述",
          sortOrder: 0,
          excerpt: "基因编辑技术的综述",
          childCount: 0,
          effectivePermission: "read_write",
          createdBy: "u-visual-test",
          updatedBy: "u-visual-test",
          createdAt: "2025-05-01T00:00:00.000Z",
          updatedAt: "2025-06-01T00:00:00.000Z",
          content: {
            content: [
              { type: "heading", props: { level: 1 }, content: [{ text: "CRISPR 技术综述" }] },
              { type: "paragraph", content: [{ text: "CRISPR-Cas9 是一种强大的基因编辑工具。" }] },
              { type: "quote", content: [{ text: "引用：基因组编辑的未来在于精确与安全。" }] },
              { type: "codeBlock", props: { language: "python" }, content: [{ text: "def edit(gene):\n    return gene" }] },
              { type: "divider" },
              {
                type: "table",
                content: {
                  rows: [
                    { cells: [{ text: "工具" }, { text: "特点" }] },
                    { cells: [{ text: "CRISPR" }, { text: "精准" }] },
                    { cells: [{ text: "TALEN" }, { text: "特异性高" }] },
                  ],
                },
              },
              { type: "bulletListItem", content: [{ text: "第一点" }] },
              { type: "numberedListItem", content: [{ text: "第二点" }] },
              { type: "checkListItem", props: { checked: true }, content: [{ text: "已完成项" }] },
            ],
          },
          contentText: "CRISPR 技术综述\nCRISPR-Cas9 是一种强大的基因编辑工具。",
        },
        attachments: [],
        versions: [],
        pageIndex: {
          indexingEnabled: true,
          chunkCount: 3,
          blockCount: 8,
          indexedAt: "2025-06-01T00:00:00.000Z",
        },
      };
      return fulfillJson(route, document);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/knowledge\/wiki2\/nodes\/kb-doc-1\/attachments$/, (route) => {
    if (route.request().method() === "POST") {
      return fulfillJson(route, {
        attachments: [
          {
            id: "att-1",
            labId: "lab-visual-test",
            nodeId: "kb-doc-1",
            kind: "file",
            name: "实验数据.csv",
            mimeType: "text/csv",
            sizeBytes: 1024,
            status: "ready",
            createdAt: FIXED_NOW,
          },
        ],
      }, 201);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/knowledge\/wiki2\/attachments\/[^/?]+$/, (route) => {
    if (route.request().method() === "DELETE") return fulfillJson(route, { ok: true });
    return fulfillJson(route, {
      id: "att-1",
      labId: "lab-visual-test",
      nodeId: "kb-doc-1",
      kind: "file",
      name: "实验数据.csv",
      mimeType: "text/csv",
      sizeBytes: 1024,
      status: "ready",
      createdAt: FIXED_NOW,
    });
  });

  await page.route("**/api/chat/agent-sessions", (route) => {
    if (route.request().method() === "POST") {
      return fulfillJson(route, {
        sessionId: "sess-project-created",
      }, 201);
    }
    return route.continue();
  });
}

// ---------------------------------------------------------------------------
// 空状态 / 角色差异 / 错误
// ---------------------------------------------------------------------------

export async function mockRoleSession(
  page: Page,
  role: "admin" | "pi" | "postdoc" | "student" | "manager",
) {
  await page.route("**/api/auth/me", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json; charset=utf-8",
      body: jsonBody({
        user: {
          id: "u-visual-test",
          email: "visual-test@example.com",
          name: "视觉测试员",
          avatarUrl: null,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        labs: [
          {
            id: "lab-visual-test",
            name: "视觉测试实验室",
            institution: "中国科学院",
            inviteCode: "VISUAL2025",
            createdBy: "u-visual-test",
            createdAt: "2025-01-01T00:00:00.000Z",
          },
        ],
        activeLab: {
          id: "lab-visual-test",
          name: "视觉测试实验室",
          institution: "中国科学院",
          inviteCode: "VISUAL2025",
          createdBy: "u-visual-test",
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        activeLabRole: role,
      }),
    }),
  );
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );
}

// ---------------------------------------------------------------------------
// 项目详情补充：新建项目 / 文档导入 / 附件上传 / 文档删除
// ---------------------------------------------------------------------------

export interface ProjectDetailExtendedOptions {
  project?: Record<string, unknown>;
  labMembers?: Record<string, unknown>[];
  detailError?: boolean;
  templateError?: boolean;
  documentError?: boolean;
  document?: Record<string, unknown> | null;
  documentAttachments?: Record<string, unknown>[];
  documentVersions?: Record<string, unknown>[];
  canEditDocument?: boolean;
  indexState?: "enabled-indexed" | "enabled-pending" | "disabled";
}

export async function mockProjectDetailPageExtended(
  page: Page,
  options: ProjectDetailExtendedOptions = {},
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    fulfillJson(route, {
      tokenBalance: 1000000,
      monthTokenUsage: 1000,
      last7dTokenUsage: 200,
      estimatedRemainingDays: 300,
      byMember: [],
      byProject: [],
    }),
  );

  // POST /api/projects：新建项目
  await page.route("**/api/projects", (route) => {
    if (route.request().method() === "POST") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, {
        id: "proj-created",
        labId: "lab-visual-test",
        type: "team",
        status: "active",
        name: String(body.name ?? "新建项目"),
        description: String(body.description ?? ""),
        isDefaultUnassigned: false,
        memberCount: 1,
        knowledgeCount: 0,
        taskCount: 0,
        updatedAt: FIXED_NOW,
        createdAt: FIXED_NOW,
      }, 201);
    }
    return route.continue();
  });

  const project = options.project ?? projectDetailFixture();
  const canEditDocument = options.canEditDocument ?? true;
  const effectivePermission = canEditDocument ? "edit" : "read";
  const indexState = options.indexState ?? "enabled-indexed";
  const pageIndex =
    indexState === "disabled"
      ? { indexingEnabled: false, chunkCount: 0, blockCount: 0, indexedAt: null }
      : indexState === "enabled-pending"
        ? { indexingEnabled: true, chunkCount: 0, blockCount: 0, indexedAt: null }
        : { indexingEnabled: true, chunkCount: 3, blockCount: 8, indexedAt: "2025-06-01T00:00:00.000Z" };

  const defaultDocument = {
    node: {
      id: "kb-doc-1",
      labId: "lab-visual-test",
      parentId: "kb-root-visual",
      path: "文献/CRISPR 综述",
      nodeType: "document",
      title: "CRISPR 综述",
      sortOrder: 0,
      excerpt: "基因编辑技术的综述",
      childCount: 0,
      effectivePermission,
      createdBy: "u-visual-test",
      updatedBy: "u-visual-test",
      createdAt: "2025-05-01T00:00:00.000Z",
      updatedAt: "2025-06-01T00:00:00.000Z",
      content: {
        content: [
          { type: "heading", props: { level: 1 }, content: [{ text: "CRISPR 技术综述" }] },
          { type: "paragraph", content: [{ text: "CRISPR-Cas9 是一种强大的基因编辑工具。" }] },
          { type: "paragraph", content: [{ text: "访问 " }, { type: "link", props: { href: "https://example.com" }, content: [{ text: "示例链接" }] }, { text: " 了解更多。" }] },
          { type: "quote", content: [{ text: "引用：基因组编辑的未来在于精确与安全。" }] },
          { type: "codeBlock", props: { language: "python" }, content: [{ text: "def edit(gene):\n    return gene" }] },
          { type: "divider" },
          {
            type: "table",
            content: {
              rows: [
                { cells: [{ text: "工具" }, { text: "特点" }] },
                { cells: [{ text: "CRISPR" }, { text: "精准" }] },
                { cells: [{ text: "TALEN" }, { text: "特异性高" }] },
              ],
            },
          },
          { type: "bulletListItem", content: [{ text: "无序项 A" }] },
          { type: "numberedListItem", content: [{ text: "有序项 1" }] },
          { type: "checkListItem", props: { checked: true }, content: [{ text: "任务项完成" }] },
        ],
      },
      contentText: "CRISPR 技术综述\nCRISPR-Cas9 是一种强大的基因编辑工具。",
    },
    attachments: options.documentAttachments ?? [],
    versions: options.documentVersions ?? [
      { id: "v-1", nodeId: "kb-doc-1", versionNumber: 1, content: {}, contentText: "", createdBy: "u-visual-test", createdByName: "视觉测试员", createdAt: "2025-05-01T00:00:00.000Z" },
      { id: "v-2", nodeId: "kb-doc-1", versionNumber: 2, content: {}, contentText: "", createdBy: "u-visual-test", createdByName: "视觉测试员", createdAt: "2025-06-01T00:00:00.000Z" },
    ],
    pageIndex,
  };

  const uploadedAttachments: Record<string, unknown>[] = [];

  await page.route(/^.*\/api\/projects\/proj-visual-test$/, (route) => {
    if (route.request().method() === "GET") {
      if (options.detailError) {
        return respondWithApiError(route, {
          status: 503,
          code: "PROJECT_SERVICE_UNAVAILABLE",
          message: "项目服务暂时不可用，请稍后重试",
        });
      }
      return fulfillJson(route, project);
    }
    if (route.request().method() === "PATCH") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, { ...project, ...body });
    }
    return route.continue();
  });

  await page.route("**/api/projects/proj-visual-test/archive", (route) =>
    fulfillJson(route, { ok: true }),
  );

  await page.route("**/api/labs/lab-visual-test", (route) =>
    fulfillJson(route, {
      id: "lab-visual-test",
      name: "视觉测试实验室",
      institution: "中国科学院",
      inviteCode: "VISUAL2025",
      createdBy: "u-visual-test",
      createdAt: "2025-01-01T00:00:00.000Z",
    }),
  );

  await page.route("**/api/labs/lab-visual-test/members", (route) =>
    fulfillJson(route, options.labMembers ?? []),
  );

  await page.route("**/api/knowledge/wiki2/templates", (route) => {
    if (options.templateError) {
      return respondWithApiError(route, {
        status: 503,
        code: "TEMPLATE_SERVICE_UNAVAILABLE",
        message: "文档模板加载失败",
      });
    }
    return fulfillJson(route, [
      { id: "blank", name: "空白文档", description: "从空白开始书写", title: "", content: { content: [] } },
      { id: "template-lab-note", name: "实验记录", description: "记录实验过程", title: "实验记录", content: { content: [{ type: "heading", props: { level: 1 }, content: [{ text: "实验记录" }] }] } },
    ]);
  });

  await page.route("**/api/knowledge/wiki2/nodes", (route) => {
    if (route.request().method() === "POST") {
      return fulfillJson(route, {
        node: {
          id: "kb-doc-created",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "新建文档",
          nodeType: "document",
          title: "新建文档",
          sortOrder: 0,
          excerpt: "",
          childCount: 0,
          effectivePermission: "edit",
          createdAt: FIXED_NOW,
          updatedAt: FIXED_NOW,
        },
      }, 201);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/knowledge\/wiki2\/nodes\/kb-doc-1$/, (route) => {
    if (route.request().method() === "PUT") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return fulfillJson(route, {
        node: {
          id: "kb-doc-1",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "CRISPR 综述",
          nodeType: "document",
          title: body.title ?? "CRISPR 综述",
          sortOrder: 0,
          excerpt: "",
          childCount: 0,
          effectivePermission,
          content: body.content ?? "",
          contentText: body.contentText ?? "",
          createdAt: "2025-05-01T00:00:00.000Z",
          updatedAt: FIXED_NOW,
        },
      });
    }
    if (route.request().method() === "DELETE") {
      return fulfillJson(route, { ok: true });
    }
    if (route.request().method() === "GET") {
      if (options.documentError) {
        return respondWithApiError(route, {
          status: 404,
          code: "NOT_FOUND",
          message: "文档不存在或已被删除",
        });
      }
      const document = options.document ?? {
        ...defaultDocument,
        attachments: [
          ...(options.documentAttachments ?? []),
          ...uploadedAttachments,
        ],
      };
      return fulfillJson(route, document);
    }
    return route.continue();
  });

  // 通用文档附件上传链路（新建/导入文档）
  await page.route(/^.*\/api\/knowledge\/wiki2\/nodes\/[^/?]+\/attachments\/presign$/, (route) =>
    fulfillJson(route, {
      id: "att-presign-1",
      uploadUrl: "http://127.0.0.1:3100/doc-upload-target",
      objectKey: "doc/attachment-1",
    }),
  );

  await page.route("**/doc-upload-target", (route) =>
    route.fulfill({ status: 200, body: "" }),
  );

  await page.route(/^.*\/api\/knowledge\/wiki2\/nodes\/[^/?]+\/attachments$/, (route) => {
    if (route.request().method() === "POST") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      const attachment = {
        id: "att-uploaded-1",
        labId: "lab-visual-test",
        nodeId: "kb-doc-1",
        originalName: String(body.originalName ?? "实验数据.csv"),
        mimeType: String(body.mimeType ?? "text/csv"),
        fileSize: Number(body.fileSize ?? 1024),
        convertStatus: "processing",
        status: "processing",
        createdAt: FIXED_NOW,
      };
      uploadedAttachments.push(attachment);
      return fulfillJson(route, attachment, 201);
    }
    return route.continue();
  });

  await page.route(/^.*\/api\/knowledge\/wiki2\/attachments\/[^/?]+\/convert-jobs$/, (route) =>
    fulfillJson(route, { ok: true }),
  );

  await page.route("**/api/chat/agent-sessions", (route) => {
    if (route.request().method() === "POST") {
      return fulfillJson(route, {
        sessionId: "sess-project-created",
      }, 201);
    }
    return route.continue();
  });
}
