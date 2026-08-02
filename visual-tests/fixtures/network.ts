import type { Page, Route } from "@playwright/test";

interface ErrorResponse {
  status: number;
  code: string;
  message: string;
}

function jsonBody(value: unknown) {
  return JSON.stringify(value);
}

export async function respondWithApiError(
  route: Route,
  { status, code, message }: ErrorResponse,
) {
  await route.fulfill({
    status,
    contentType: "application/json; charset=utf-8",
    body: jsonBody({
      error: {
        code,
        message,
        requestId: "visual-test-request",
      },
    }),
  });
}

export async function mockUnauthenticatedSession(page: Page) {
  await page.route("**/api/auth/me", (route) =>
    respondWithApiError(route, {
      status: 401,
      code: "UNAUTHORIZED",
      message: "Unauthorized",
    }),
  );
}

export async function mockSessionApiFailure(page: Page) {
  await page.route("**/api/auth/me", (route) =>
    respondWithApiError(route, {
      status: 503,
      code: "SESSION_SERVICE_UNAVAILABLE",
      message: "登录状态服务暂时不可用",
    }),
  );
}

export async function mockLoginApiFailure(page: Page) {
  await page.route("**/api/auth/login", (route) =>
    respondWithApiError(route, {
      status: 503,
      code: "AUTH_SERVICE_UNAVAILABLE",
      message: "Authentication service unavailable",
    }),
  );
}

export async function mockLoginInvalidCredentials(page: Page) {
  await page.route("**/api/auth/login", (route) =>
    respondWithApiError(route, {
      status: 401,
      code: "INVALID_CREDENTIALS",
      message: "邮箱或密码不正确。",
    }),
  );
}

export async function mockLoginRateLimited(page: Page) {
  await page.route("**/api/auth/login", (route) =>
    respondWithApiError(route, {
      status: 429,
      code: "RATE_LIMITED",
      message: "登录尝试过于频繁，请稍后再试。",
    }),
  );
}

export { type ErrorResponse };


// --- Authenticated session fixtures ---

const FIXED_USER = {
  id: "u-visual-test",
  email: "visual-test@example.com",
  name: "视觉测试员",
  avatarUrl: null,
  createdAt: "2025-01-01T00:00:00.000Z",
};

const FIXED_LAB = {
  id: "lab-visual-test",
  name: "视觉测试实验室",
  institution: "中国科学院",
  inviteCode: "VISUAL2025",
  createdBy: "u-visual-test",
  createdAt: "2025-01-01T00:00:00.000Z",
};

const FIXED_PROJECT = {
  id: "proj-visual-test",
  labId: "lab-visual-test",
  type: "team" as const,
  status: "active" as const,
  name: "视觉测试项目",
  description: "用于视觉回归测试的项目",
  isDefaultUnassigned: false,
  memberCount: 1,
  knowledgeCount: 0,
  taskCount: 0,
  updatedAt: "2025-06-15T10:30:00.000Z",
  createdAt: "2025-01-15T08:00:00.000Z",
};

const DEFAULT_UNASSIGNED_PROJECT = {
  id: "proj-default",
  labId: "lab-visual-test",
  type: "team" as const,
  status: "active" as const,
  name: "未归属",
  description: "",
  isDefaultUnassigned: true,
  memberCount: 0,
  knowledgeCount: 0,
  taskCount: 0,
  updatedAt: "2025-01-01T00:00:00.000Z",
  createdAt: "2025-01-01T00:00:00.000Z",
};

export async function mockAuthenticatedSession(page: Page) {
  await page.route("**/api/auth/me", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json; charset=utf-8",
      body: jsonBody({
        user: FIXED_USER,
        labs: [FIXED_LAB],
        activeLab: FIXED_LAB,
        activeLabRole: "admin",
      }),
    }),
  );
}

export async function mockChatHistory(
  page: Page,
  chats: readonly { id: string; title: string; updatedAt?: string; projectId?: string; isPinned?: boolean; sessionKind?: "normal" | "task" }[] = [],
) {
  const now = new Date("2025-07-15T12:00:00.000Z").toISOString();
  const items = chats.map((c, i) => ({
    id: c.id,
    title: c.title,
    scene: "home" as const,
    projectId: c.projectId ?? null,
    sessionKind: c.sessionKind ?? "normal",
    isPinned: c.isPinned ?? false,
    updatedAt: c.updatedAt ?? new Date(Date.parse("2025-07-15T12:00:00.000Z") - i * 3600000).toISOString(),
    createdAt: now,
  }));

  await page.route(/^.*\/api\/chat\/history/, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json; charset=utf-8",
      body: jsonBody({ items }),
    }),
  );
}

export async function mockProjectsBootstrap(page: Page) {
  await page.route("**/api/projects/bootstrap", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json; charset=utf-8",
      body: jsonBody({
        defaultProject: DEFAULT_UNASSIGNED_PROJECT,
        projects: [FIXED_PROJECT, DEFAULT_UNASSIGNED_PROJECT],
      }),
    }),
  );
}


export async function mockAiUsageReminder(page: Page) {
  await page.route(/\/api\/admin\/usage\/summary/, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json; charset=utf-8",
      body: jsonBody({ warningActive: false, usedTokens: 0, totalTokens: 1000000, tokenBalance: 1000000, monthTokenUsage: 0, last7dTokenUsage: 0, estimatedRemainingDays: 300, byMember: [], byProject: [] }),
    }),
  );
}

export async function mockWorkspaceMocks(page: Page) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await mockAiUsageReminder(page);
}


export async function mockChatResourceCatalog(page: Page) {
  await page.route("**/api/chat/resources**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json; charset=utf-8",
      body: jsonBody({ query: "", items: [] }),
    }),
  );
}

export async function mockChatHomeMocks(page: Page) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await mockChatResourceCatalog(page);
  await mockAiUsageReminder(page);
}


export function createSseStream(...events: { type: string; data: unknown }[]) {
  const lines = events.flatMap((event) => [
    `event: ${event.type}`,
    `data: ${JSON.stringify(event.data)}`,
    "",
  ]);
  return lines.join("\n");
}

export async function mockChatStreamReply(
  page: Page,
  sessionId: string,
  replyText: string,
) {
  await page.route("**/api/chat", (route) => {
    const sse = createSseStream(
      { type: "meta", data: { sessionId } },
      { type: "text", data: { content: replyText } },
    );
    route.fulfill({
      status: 200,
      headers: { "Content-Type": "text/event-stream" },
      body: sse,
    });
  });
}

export async function mockChatSessionDetail(
  page: Page,
  sessionId: string,
  title: string,
  messages: { role: "user" | "assistant"; content: string }[],
) {
  const now = new Date().toISOString();
  await page.route(/\/api\/chat\/history\?.*sessionId=/, (route) => {
      const reqUrl = new URL(route.request().url());
      if (reqUrl.searchParams.get("sessionId") !== sessionId) {
        return route.continue();
      }
      route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: jsonBody({
          session: { id: sessionId, title, scene: "home", updatedAt: now, createdAt: now },
          sessionId,
          messages: messages.map((msg, i) => ({
            id: `msg-${i}`,
            sessionId,
            role: msg.role,
            content: msg.content,
            createdAt: now,
          })),
          runs: [{ id: "run-1", sessionId, status: "completed", createdAt: now }],
          pendingMcpToolCalls: [],
          attachments: [],
          currentContextRefs: null,
        }),
      });
    },
  );
}

export async function mockChatSendMocks(page: Page, sessionId = "sess-visual-chat", replyText = "这是 AI 的回复内容。") {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await mockChatResourceCatalog(page);
  await mockChatStreamReply(page, sessionId, replyText);
  await mockChatSessionDetail(page, sessionId, "可视化测试对话", [
    { role: "user", content: "你好" },
    { role: "assistant", content: replyText },
  ]);
  await mockAiUsageReminder(page);
}

export function createRequestGate() {
  let releaseRequest!: () => void;
  let markRequestCompleted!: () => void;
  const waiting = new Promise<void>((resolve) => {
    releaseRequest = resolve;
  });
  const requestCompleted = new Promise<void>((resolve) => {
    markRequestCompleted = resolve;
  });

  return {
    waiting,
    releaseRequest,
    requestCompleted,
    markRequestCompleted,
  };
}

export async function waitForVisualReady(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
}
