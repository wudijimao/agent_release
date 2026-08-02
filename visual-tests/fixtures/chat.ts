import type { Page, Route } from "@playwright/test";

import { fulfillJson, jsonBody } from "./pages";
import {
  createRequestGate,
  mockAuthenticatedSession,
  mockChatHistory,
  mockChatSessionDetail,
  mockProjectsBootstrap,
  respondWithApiError,
} from "./network";

const FIXED_NOW = "2025-07-15T12:00:00.000Z";

// ---------------------------------------------------------------------------
// 对话资源目录（/api/chat/resources）
// ---------------------------------------------------------------------------

export function chatSkillResourceFixture(
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  return {
    type: "skill",
    id: overrides.id as string,
    title: overrides.title as string,
    description: overrides.description ?? "",
    subtitle: "",
    selectable: overrides.selectable ?? true,
    disabledReason: overrides.disabledReason ?? null,
    source: "skill",
    metadata: {
      slug: overrides.id,
      category: "已安装",
      supportedScenes: ["home"],
      capabilities: ["检索"],
      ...(overrides.metadata as Record<string, unknown> | undefined ?? {}),
    },
    ...overrides,
  };
}

export function chatMiraResourceFixture(
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  return {
    type: "mira_node",
    id: overrides.id as string,
    title: overrides.title as string,
    description: overrides.description ?? "",
    subtitle: overrides.subtitle ?? "视觉测试项目/文献",
    selectable: overrides.selectable ?? true,
    disabledReason: overrides.disabledReason ?? null,
    source: "mira",
    metadata: {
      path: "视觉测试项目/文献/CRISPR 综述",
      updatedAt: "2025-06-01T00:00:00.000Z",
      ...(overrides.metadata as Record<string, unknown> | undefined ?? {}),
    },
    ...overrides,
  };
}

export async function mockChatResourceCatalogItems(
  page: Page,
  items: Record<string, unknown>[],
) {
  await page.route("**/api/chat/resources**", (route) =>
    fulfillJson(route, { query: "", items }),
  );
}

// ---------------------------------------------------------------------------
// 对话附件上传链路
// ---------------------------------------------------------------------------

export interface ChatAttachmentsOptions {
  kind?: "image" | "file";
  fileName?: string;
  mimeType?: string;
  presignError?: boolean;
  registerError?: boolean;
  gate?: ReturnType<typeof createRequestGate>;
}

export async function mockChatAttachments(
  page: Page,
  options: ChatAttachmentsOptions = {},
) {
  const kind = options.kind ?? "file";
  const fileName =
    options.fileName ?? (kind === "image" ? "gel.png" : "data.csv");
  const mimeType =
    options.mimeType ?? (kind === "image" ? "image/png" : "text/csv");
  const objectKey = `visual-test/${fileName}`;
  const attachment: Record<string, unknown> = {
    id: "att-1",
    kind,
    name: fileName,
    mimeType,
    fileSize: 128,
    status: "ready",
    ...(kind === "image" ? { url: "/att-gel.png" } : {}),
    createdAt: FIXED_NOW,
  };

  await page.route("**/api/chat/attachments/presign", async (route) => {
    if (options.gate) {
      try {
        await options.gate.waiting;
      } finally {
        options.gate.markRequestCompleted();
      }
    }
    if (options.presignError) {
      return respondWithApiError(route, {
        status: 503,
        code: "ATTACHMENT_SERVICE_UNAVAILABLE",
        message: "附件服务暂时不可用，请稍后重试",
      });
    }
    return fulfillJson(route, {
      draftId: "draft-visual-attachment",
      uploadUrl: "http://127.0.0.1:3100/upload-target-visual-test",
      objectKey,
    });
  });

  await page.route("**/upload-target-visual-test", (route) =>
    route.fulfill({ status: 200, body: "" }),
  );

  await page.route("**/api/chat/attachments", (route) => {
    if (route.request().method() === "POST") {
      if (options.registerError) {
        return respondWithApiError(route, {
          status: 503,
          code: "ATTACHMENT_REGISTER_FAILED",
          message: "附件登记失败，请稍后重试",
        });
      }
      return fulfillJson(route, attachment, 201);
    }
    return route.continue();
  });

  if (kind === "image") {
    await page.route("/att-gel.png", (route) =>
      route.fulfill({
        status: 200,
        contentType: "image/png",
        body: Buffer.from(
          "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
          "base64",
        ),
      }),
    );
  }
}

// ---------------------------------------------------------------------------
// 会话页（/chat/:id）
// ---------------------------------------------------------------------------

export async function mockChatSessionPage(
  page: Page,
  options: {
    sessionId: string;
    title: string;
    messages: Array<{ role: "user" | "assistant"; content: string }>;
    resources?: Record<string, unknown>[];
    projectId?: string;
  },
) {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, [
    {
      id: options.sessionId,
      title: options.title,
      ...(options.projectId ? { projectId: options.projectId } : {}),
    },
  ]);
  await mockProjectsBootstrap(page);
  await page.route("**/api/chat/resources**", (route) =>
    fulfillJson(route, { query: "", items: options.resources ?? [] }),
  );
  await mockChatSessionDetail(
    page,
    options.sessionId,
    options.title,
    options.messages,
  );
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