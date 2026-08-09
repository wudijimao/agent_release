import { expect, test } from "@playwright/test";

import {
  createRequestGate,
  mockAiUsageReminder,
  mockAuthenticatedSession,
  mockChatHistory,
  mockProjectsBootstrap,
  respondWithApiError,
  waitForVisualReady,
} from "../../fixtures/network";
import { mockChatSessionPage } from "../../fixtures/chat";


  function chatMenuButton(page: import("@playwright/test").Page, title: string) {
    return page
      .locator("aside")
      .locator(
        'xpath=//div[contains(@class,"cursor-pointer")][.//text()[contains(.,"' + title + '")]]//button[@aria-haspopup="menu"]',
      );
  }

test.describe("正常状态 / 应用骨架", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("SHELL-01 边栏展开默认态", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, []);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    await page.goto("/projects");
    await expect(page.getByRole("button", { name: "收起边栏" })).toBeVisible();
    await expect(page.getByRole("button", { name: "发起新对话" })).toBeVisible();
    await expect(page.getByText("近期对话")).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("shell-01-sidebar-open.png", {
      fullPage: true,
    });
  });

  test("SHELL-02 收起边栏后内容区扩展", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, []);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    await page.goto("/projects");
    await page.locator('[aria-label="收起边栏"]').click({ force: true, timeout: 10000 });
    await expect(page.locator("aside")).toHaveCSS("width", "0px");
    await expect(page.getByRole("button", { name: "展开边栏" })).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("shell-02-sidebar-closed.png", {
      fullPage: true,
    });

    await page.getByRole("button", { name: "展开边栏" }).click();
    await expect(page.locator("aside")).not.toHaveCSS("width", "0px");
  });

  test("SHELL-03 导航切换时不闪烁", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, []);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    await page.goto("/projects");
    await expect(page.getByRole("button", { name: "收起边栏" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("button", { name: "任务", exact: true }).click({ force: true, timeout: 5000 });
    await page.waitForURL("**/tools");
    await page.getByRole("button", { name: "项目", exact: true }).click({ force: true, timeout: 5000 });
    await page.waitForURL("**/projects");
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("shell-03-nav-switch.png", {
      fullPage: true,
    });
  });

  test("SHELL-04 近期对话列表正确展示", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, [
      { id: "chat-1", title: "CRISPR 检索" },
      { id: "chat-2", title: "质粒构建" },
      { id: "chat-3", title: "WB 优化" },
    ]);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    await page.goto("/projects");
    await expect(page.getByText("近期对话")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("CRISPR 检索")).toBeVisible();
    await expect(page.getByText("质粒构建")).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("shell-04-recent-chats.png", {
      fullPage: true,
    });
  });

  test("SHELL-05 会话菜单置顶、重命名、删除且分享隐藏", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    const shellChats = [
      { id: "chat-1", title: "CRISPR 检索", scene: "home", projectId: null, sessionKind: "normal", isPinned: false, updatedAt: "2025-07-15T12:00:00.000Z", createdAt: "2025-07-15T12:00:00.000Z" },
      { id: "chat-2", title: "质粒构建", scene: "home", projectId: null, sessionKind: "normal", isPinned: false, updatedAt: "2025-07-15T11:00:00.000Z", createdAt: "2025-07-15T11:00:00.000Z" },
    ];
    await page.route(/^.*\/api\/chat\/history/, (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({ items: shellChats }),
      }),
    );

    const sessionRequests: Array<{ method: string; url: string; body: unknown }> = [];
    await page.route("**/api/agent/sessions/*", (route) => {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      sessionRequests.push({
        method: route.request().method(),
        url: route.request().url(),
        body,
      });
      if (route.request().method() === "PATCH") {
        const sessionId = route.request().url().split("/").pop() ?? "";
        const chat = shellChats.find((item) => item.id === sessionId);
        if (chat && typeof body.title === "string") chat.title = body.title;
        if (chat && typeof body.isPinned === "boolean") chat.isPinned = body.isPinned;
      }
      return route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto("/projects");
    await expect(page.getByText("CRISPR 检索")).toBeVisible({ timeout: 10000 });

    await page.locator("aside").getByText("CRISPR 检索", { exact: true }).first().hover();
    await chatMenuButton(page, "CRISPR 检索").click();

    await expect(page.getByRole("menuitem", { name: "重命名" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "置顶对话" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "分享对话" })).toHaveCount(0);
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("shell-05-chat-menu.png", {
      fullPage: true,
    });

    // 置顶
    await page.getByRole("menuitem", { name: "置顶对话" }).click();
    await expect
      .poll(() => sessionRequests.some((r) => r.method === "PATCH" && (r.body as { isPinned?: boolean })?.isPinned === true))
      .toBe(true);

    // 重命名
    await page.locator("aside").getByText("CRISPR 检索", { exact: true }).first().hover();
    await chatMenuButton(page, "CRISPR 检索").click();
    await page.getByRole("menuitem", { name: "重命名" }).click();
    const renameInput = page.getByLabel("重命名对话");
    await renameInput.fill("重命名后的对话");
    await renameInput.press("Enter");
    await expect(page.getByText("重命名后的对话")).toBeVisible({ timeout: 10000 });

    // 删除
    await page.locator("aside").getByText("重命名后的对话", { exact: true }).first().hover();
    await chatMenuButton(page, "重命名后的对话").click();
    await page.getByRole("menuitem", { name: "删除" }).click();
    await expect(page.getByText("重命名后的对话")).toBeHidden({ timeout: 10000 });
    await expect
      .poll(() => sessionRequests.some((r) => r.method === "DELETE"))
      .toBe(true);
  });

  test("SHELL-06 设置菜单项与退出登录", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, []);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);
    await page.route("**/api/auth/logout", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({ ok: true }),
      }),
    );

    await page.goto("/projects");
    await expect(page.getByText("视觉测试员")).toBeVisible({ timeout: 10000 });

    await page.getByText("视觉测试员").first().click();
    await expect(page.getByRole("menuitem", { name: "Skill" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "AI用量" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "成员管理" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "更多系统设置" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "退出登录" })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("shell-06-settings-menu.png", {
      fullPage: true,
    });

    // 点击外部关闭菜单
    await page.getByRole("main").click({ position: { x: 10, y: 10 } });
    await expect(page.getByRole("menuitem", { name: "退出登录" })).toBeHidden();

    // 再次打开并退出登录
    await page.getByText("视觉测试员").first().click();
    await page.getByRole("menuitem", { name: "退出登录" }).click();
    await page.waitForURL(/\/login/, { timeout: 10000 });
  });

  test("SHELL-07 空会话列表保持骨架高度", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, []);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    await page.goto("/projects");
    await expect(page.getByText("近期对话")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "收起边栏" })).toBeVisible();
    await waitForVisualReady(page);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
    await expect(page).toHaveScreenshot("shell-07-empty-chats.png", {
      fullPage: true,
    });
  });

  test("SHELL-08 历史加载失败保留骨架并可重试", async ({ page }) => {
    await mockAuthenticatedSession(page);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    let failNext = true;
    await page.route(/^.*\/api\/chat\/history/, (route) => {
      if (failNext) {
        return respondWithApiError(route, {
          status: 503,
          code: "HISTORY_SERVICE_UNAVAILABLE",
          message: "历史对话服务暂时不可用",
        });
      }
      return route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({ items: [{ id: "chat-1", title: "恢复后的对话", scene: "home", projectId: null, sessionKind: "normal", isPinned: false, updatedAt: "2025-07-15T12:00:00.000Z", createdAt: "2025-07-15T12:00:00.000Z" }] }),
      });
    });

    await page.goto("/projects");
    await expect(page.getByRole("status").first()).toContainText("历史对话服务暂时不可用", { timeout: 10000 });
    await expect(page.getByRole("button", { name: "收起边栏" })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("shell-08-history-error.png", {
      fullPage: true,
    });

    // 重试入口（重新加载工作台触发新的历史请求）
    failNext = false;
    await page.reload();
    await expect(page.getByText("恢复后的对话")).toBeVisible({ timeout: 10000 });
  });

  test("SHELL-09 临界宽度无双重滚动条", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, [
      { id: "chat-1", title: "CRISPR 检索" },
      { id: "chat-2", title: "质粒构建" },
    ]);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);

    await page.goto("/projects");
    await expect(page.getByRole("button", { name: "收起边栏" })).toBeVisible({ timeout: 10000 });
    await waitForVisualReady(page);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      asideWidth: document.querySelector("aside")?.getBoundingClientRect().width ?? 0,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
    expect(metrics.asideWidth).toBeGreaterThan(0);
  });

  test("SHELL-10 会话不存在时切换到最新会话", async ({ page }) => {
    await mockChatSessionPage(page, {
      sessionId: "chat-latest",
      title: "最新对话",
      messages: [{ role: "user", content: "最新问题" }],
    });

    await page.goto("/chat/missing-session");
    await page.waitForURL("**/chat/chat-latest", { timeout: 10000 });
    await expect(page.getByText("最新对话").first()).toBeVisible();
  });

  test("SHELL-11 Session not found 时刷新列表并切换到最新会话", async ({ page }) => {
    await mockChatSessionPage(page, {
      sessionId: "chat-latest",
      title: "刷新后的最新对话",
      messages: [{ role: "user", content: "刷新后的最新问题" }],
    });

    let listRequestCount = 0;
    await page.route(/^.*\/api\/chat\/history(?:\?.*)?$/, async (route) => {
      const url = new URL(route.request().url());
      const requestedSessionId = url.searchParams.get("sessionId");
      if (requestedSessionId === "missing-session") {
        await respondWithApiError(route, {
          status: 404,
          code: "NOT_FOUND",
          message: "Session not found",
        });
        return;
      }
      if (requestedSessionId) {
        await route.fallback();
        return;
      }

      listRequestCount += 1;
      const now = "2025-07-15T12:00:00.000Z";
      const latest = {
        id: "chat-latest",
        title: "刷新后的最新对话",
        scene: "home",
        projectId: null,
        sessionKind: "normal",
        isPinned: false,
        updatedAt: now,
        createdAt: now,
      };
      await route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({
          items:
            listRequestCount === 1
              ? [{ ...latest, id: "missing-session", title: "已失效对话" }, latest]
              : [latest],
        }),
      });
    });

    await page.goto("/chat/missing-session");
    await page.waitForURL("**/chat/chat-latest", { timeout: 10000 });
    await expect(page.getByText("刷新后的最新对话").first()).toBeVisible();
    expect(listRequestCount).toBeGreaterThanOrEqual(2);
  });
});
