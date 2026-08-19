import { expect, test } from "@playwright/test";

import {
  createRequestGate,
  createSseStream,
  mockChatHomeMocks,
  mockChatSendMocks,
  waitForVisualReady,
} from "../../fixtures/network";
import {
  chatMiraResourceFixture,
  chatSkillResourceFixture,
  mockChatAttachments,
  mockChatResourceCatalogItems,
  mockChatSessionPage,
} from "../../fixtures/chat";
import { mockProjectDetailPage } from "../../fixtures/pages";

const TINY_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

function tinyPng(name = "gel.png") {
  return { name, mimeType: "image/png", buffer: Buffer.from(TINY_PNG_BASE64, "base64") };
}

test.describe("正常状态 / 新对话主页", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("CHAT-01 新对话主页默认态", async ({ page }) => {
    await mockChatHomeMocks(page);

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("工作项目")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("最近有哪些 CRISPR 新文献？")).toBeVisible();
    await expect(page.getByText("DpnI 还有库存吗？")).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-01-home-default.png", {
      fullPage: true,
    });
  });

  test("CHAT-02 项目选择器下拉展开", async ({ page }) => {
    await mockChatHomeMocks(page);

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    await page.getByText("工作项目").click();
    await expect(page.getByText("视觉测试项目")).toBeVisible();
    await expect(page.getByText("不选择项目")).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-02-project-selector.png", {
      fullPage: true,
    });
  });

  test("CHAT-03 发送消息后在对话中展示", async ({ page }) => {
    await mockChatSendMocks(page);
    let historyListRequestCount = 0;
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (
        request.method() === "GET" &&
        url.pathname === "/api/chat/history" &&
        !url.searchParams.has("sessionId")
      ) {
        historyListRequestCount += 1;
      }
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("你好");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.getByText("你好")).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("这是 AI 的回复内容。")).toBeVisible({ timeout: 15000 });
    await expect(page).toHaveURL(/\/chat\/sess-visual-chat$/);
    await expect.poll(() => historyListRequestCount).toBeGreaterThanOrEqual(4);
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-03-message-sent.png", {
      fullPage: true,
    });
  });

  test("CHAT-04 图片附件上传与消息缩略图", async ({ page }) => {
    await mockChatSendMocks(page);
    await mockChatAttachments(page, { kind: "image", fileName: "gel.png" });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    // 输入框缩略图
    await page.locator('input[type="file"]').first().setInputFiles(tinyPng());
    await expect(page.locator('img[alt="gel.png"]').first()).toBeVisible();

    const textarea = page.locator("textarea").first();
    await textarea.fill("查看这张胶图");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.getByText("查看这张胶图")).toBeVisible({ timeout: 15000 });
    // 消息流中的图片缩略图（上传成功后渲染）
    await expect(page.locator('img[src="/att-gel.png"]')).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("chat-04-image-attachment.png", {
      fullPage: true,
    });
  });

  test("CHAT-05 文件附件类型限制与上传失败恢复", async ({ page }) => {
    await mockChatSendMocks(page);

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    // 类型限制：不支持的扩展名
    await page.locator('input[type="file"]').first().setInputFiles({
      name: "malware.exe",
      mimeType: "application/x-msdownload",
      buffer: Buffer.from("MZ"),
    });
    await expect(page.locator('div[role="alert"]:not(#__next-route-announcer__)')).toContainText("不支持“malware.exe”");

    // 上传失败：presign 返回 503，消息附件显示错误并可继续输入
    await mockChatAttachments(page, { kind: "file", fileName: "data.csv", presignError: true });
    await page.locator('input[type="file"]').first().setInputFiles({
      name: "data.csv",
      mimeType: "text/csv",
      buffer: Buffer.from("a,b\n1,2"),
    });
    const textarea = page.locator("textarea").first();
    await textarea.fill("上传附件数据");
    await page.locator('[aria-label="发送消息"]').click();

    // 消息附件错误态 + 顶部提示
    await expect(page.getByText("上传失败", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("AI 服务暂时不可用，请稍后重试。")).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("上传附件数据")).toBeVisible({ timeout: 15000 });
    await expect(page.locator("textarea").first()).toBeEnabled();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("chat-05-upload-failed.png", {
      fullPage: true,
    });
  });

  test("CHAT-06 等待回复时展示思考状态", async ({ page }) => {
    const gate = createRequestGate();
    await mockChatHomeMocks(page);
    await page.route("**/api/chat", async (route) => {
      try {
        await gate.waiting;
        const sse = createSseStream(
          { type: "meta", data: { sessionId: "sess-waiting" } },
          { type: "text", data: { content: "CRISPR 技术..." } },
        );
        await route.fulfill({
          status: 200,
          headers: { "Content-Type": "text/event-stream" },
          body: sse,
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("什么是 CRISPR？");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.getByText("什么是 CRISPR？")).toBeVisible({ timeout: 5000 });
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-06-waiting-reply.png", {
      fullPage: true,
    });

    gate.releaseRequest();
    await gate.requestCompleted;
  });

  test("CHAT-07 流式状态展示搜索与生成过程", async ({ page }) => {
    await mockChatHomeMocks(page);
    await page.route("**/api/chat", (route) => {
      const sse = createSseStream(
        { type: "meta", data: { sessionId: "sess-stream" } },
        { type: "task_trace", data: { step: { category: "retrieval", title: "搜索文献", status: "running" } } },
        { type: "task_trace", data: { step: { category: "tool", title: "分析数据", status: "running" } } },
        { type: "text", data: { content: "CRISPR 技术是一种革命性的基因编辑工具。" } },
      );
      route.fulfill({
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
        body: sse,
      });
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("CRISPR 原理");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.getByText("CRISPR 技术是一种革命性的基因编辑工具。")).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-07-streaming.png", {
      fullPage: true,
    });
  });

  test("CHAT-08 流式完成后无残留状态指示", async ({ page }) => {
    await mockChatHomeMocks(page);
    await page.route("**/api/chat", (route) => {
      const sse = createSseStream(
        { type: "meta", data: { sessionId: "sess-done" } },
        { type: "text", data: { content: "基因编辑技术已经广泛应用于生物医学研究。" } },
      );
      route.fulfill({
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
        body: sse,
      });
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("基因编辑应用");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.getByText("基因编辑技术已经广泛应用于生物医学研究。")).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-08-stream-done.png", {
      fullPage: true,
    });
  });

  test("CHAT-09 聊天失败展示错误", async ({ page }) => {
    await mockChatHomeMocks(page);
    await page.route("**/api/chat", (route) => {
      const sse = createSseStream(
        { type: "meta", data: { sessionId: "sess-error" } },
        { type: "error", data: { error: "AI 服务暂时不可用，请稍后重试。" } },
      );
      route.fulfill({
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
        body: sse,
      });
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("测试错误");
    await page.locator('[aria-label="发送消息"]').click();

    // 流式 error 事件经 getChatStreamErrorMessage 映射为通用文案
    await expect(page.getByText("AI 服务异常，请稍后重试。")).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("chat-09-error.png", {
      fullPage: true,
    });
  });

  test("CHAT-14 资源选择展示 Skill 与文件并禁用不可选项", async ({ page }) => {
    await mockChatHomeMocks(page);
    await mockChatResourceCatalogItems(page, [
      chatSkillResourceFixture({ id: "crispr-assistant", title: "CRISPR 助手", description: "辅助设计靶点", selectable: true }),
      chatSkillResourceFixture({ id: "blocked-skill", title: "受限技能", description: "当前不可用", selectable: false, disabledReason: "需要更高权限" }),
      chatMiraResourceFixture({ id: "mira-crispr-review", title: "CRISPR 综述", description: "项目文献", selectable: true }),
    ]);

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("/");
    await expect(page.getByText("搜索 skill")).toBeVisible();
    await expect(page.getByText("crispr-assistant")).toBeVisible();
    await expect(page.getByText("blocked-skill")).toBeVisible();

    const disabledItem = page.locator("button").filter({ hasText: "blocked-skill" }).last();
    await expect(disabledItem).toBeDisabled();

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("chat-14-skill-menu.png", {
      fullPage: true,
    });

    // @ 文件引用菜单
    await textarea.fill("@");
    await expect(page.getByText("CRISPR 综述")).toBeVisible({ timeout: 5000 });
  });

  test("CHAT-15 停止生成后输入状态恢复", async ({ page }) => {
    const gate = createRequestGate();
    let chatRequestCount = 0;
    await mockChatSendMocks(page);
    await page.route("**/api/chat", async (route) => {
      chatRequestCount += 1;
      try {
        await gate.waiting;
      } finally {
        gate.markRequestCompleted();
      }
      await route
        .fulfill({
          status: 200,
          headers: { "Content-Type": "text/event-stream" },
          body: createSseStream(
            { type: "meta", data: { sessionId: "sess-cancel" } },
            { type: "text", data: { content: "被中断的回复。" } },
          ),
        })
        .catch(() => undefined);
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("生成内容");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.locator('[aria-label="停止生成"]')).toBeVisible({ timeout: 10000 });
    await expect(textarea).toBeEnabled();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("chat-15-streaming-cancel.png", {
      fullPage: true,
    });

    await textarea.fill("下一条问题");
    await textarea.press("Enter");
    await expect(textarea).toHaveValue("下一条问题");
    expect(chatRequestCount).toBe(1);

    await page.locator('[aria-label="停止生成"]').click();
    await expect(page.getByText("已停止生成，你可以重新发送或重试。")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("textarea").first()).toBeEnabled();

    gate.releaseRequest();
    await gate.requestCompleted;
  });

  test("CHAT-16 空回复恢复显示错误与重试入口", async ({ page }) => {
    await mockChatHomeMocks(page);
    await page.route("**/api/chat", (route) => {
      const sse = createSseStream(
        { type: "text", data: { content: "没有会话标识的回复" } },
      );
      route.fulfill({
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
        body: sse,
      });
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("触发空回复");
    await page.locator('[aria-label="发送消息"]').click();

    await expect(page.getByText("AI 服务异常，请稍后重试。")).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole("button", { name: "重试" })).toBeVisible();
    await expect(page.locator("textarea").first()).toBeEnabled();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("chat-16-empty-reply.png", {
      fullPage: true,
    });
  });

  test("CHAT-17 慢速流式期间布局稳定无横向溢出", async ({ page }) => {
    const gate = createRequestGate();
    await mockChatHomeMocks(page);
    await page.route("**/api/chat", async (route) => {
      try {
        await gate.waiting;
        const sse = createSseStream(
          { type: "meta", data: { sessionId: "sess-slow" } },
          { type: "text", data: { content: "慢速回复的内容。" } },
        );
        await route.fulfill({
          status: 200,
          headers: { "Content-Type": "text/event-stream" },
          body: sse,
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    await page.goto("/chat/new");
    await expect(page.getByRole("heading", { name: "研究，由此开始" })).toBeVisible({ timeout: 10000 });

    const textarea = page.locator("textarea").first();
    await textarea.fill("慢速请求");
    await page.locator('[aria-label="发送消息"]').click();
    await expect(page.getByText("慢速请求")).toBeVisible({ timeout: 5000 });

    const during = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      composerVisible: Boolean(document.querySelector("textarea")),
    }));
    expect(during.scrollWidth).toBeLessThanOrEqual(during.viewportWidth);
    expect(during.composerVisible).toBe(true);

    gate.releaseRequest();
    await gate.requestCompleted;
    await expect(page.getByText("慢速回复的内容。")).toBeVisible({ timeout: 15000 });
    const after = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(after.scrollWidth).toBeLessThanOrEqual(after.viewportWidth);
  });
});

test.describe("正常状态 / 会话页", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("CHAT-10 加载历史后初始位置在底部", async ({ page }) => {
    await mockChatSessionPage(page, {
      sessionId: "sess-history",
      title: "历史对话",
      messages: [
        { role: "user", content: "第一轮问题" },
        { role: "assistant", content: "第一轮回答。" },
        { role: "user", content: "第二轮问题" },
        { role: "assistant", content: "第二轮回答。" },
        { role: "user", content: "第三轮问题" },
        { role: "assistant", content: "第三轮回答。" },
      ],
    });

    await page.goto("/chat/sess-history");
    await expect(page.getByText("第一轮问题")).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("第三轮回答。")).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);

    const scroller = page.locator("[data-chat-scroll-container]");
    const position = await scroller.evaluate((element) => ({
      scrollTop: element.scrollTop,
      scrollHeight: element.scrollHeight,
      clientHeight: element.clientHeight,
    }));
    expect(position.scrollHeight - position.scrollTop - position.clientHeight).toBeLessThanOrEqual(2);

    await expect(page).toHaveScreenshot("chat-10-history-loaded.png", {
      fullPage: true,
    });
  });

  test("CHAT-11 长对话渲染代码块、表格、列表与引用", async ({ page }) => {
    const longAnswer = [
      "## 结论",
      "以下是详细说明：",
      "",
      "> 引用：基因编辑需要严格评估脱靶风险。",
      "",
      "```python",
      "def edit(gene):",
      "    return gene.upper()",
      "```",
      "",
      "| 方法 | 精度 |",
      "| --- | --- |",
      "| CRISPR | 高 |",
      "| TALEN | 中 |",
      "",
      "- 第一要点",
      "- 第二要点",
      "",
      "1. 第一步",
      "2. 第二步",
    ].join("\n");
    const messages = [];
    for (let index = 0; index < 6; index += 1) {
      messages.push({ role: "user", content: `第 ${index + 1} 个问题` });
      messages.push({
        role: "assistant",
        content: index === 2 ? longAnswer : `第 ${index + 1} 个回答，包含足够长的文本用于多屏滚动。`,
      });
    }

    await mockChatSessionPage(page, {
      sessionId: "sess-long",
      title: "长对话",
      messages,
    });

    await page.goto("/chat/sess-long");
    await expect(page.getByText("第 1 个问题").first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole("heading", { name: "结论" })).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("def edit(gene):").first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("CRISPR", { exact: true }).first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByText("引用：基因编辑需要严格评估脱靶风险。").first()).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("chat-11-long-conversation.png", {
      fullPage: true,
    });
  });

  test("CHAT-12 右侧导航按消息数量显隐", async ({ page }) => {
    // 少于 5 条用户消息：不显示
    await mockChatSessionPage(page, {
      sessionId: "sess-few",
      title: "简短对话",
      messages: [
        { role: "user", content: "问题一" },
        { role: "assistant", content: "回答一" },
        { role: "user", content: "问题二" },
        { role: "assistant", content: "回答二" },
      ],
    });
    await page.goto("/chat/sess-few");
    await expect(page.getByText("问题一")).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole("button", { name: /定位到第/ })).toHaveCount(0);

    // 5 条以上用户消息：显示
    const manyMessages = [];
    for (let index = 0; index < 6; index += 1) {
      manyMessages.push({ role: "user", content: `问题 ${index + 1}` });
      manyMessages.push({ role: "assistant", content: `回答 ${index + 1}` });
    }
    await mockChatSessionPage(page, {
      sessionId: "sess-many",
      title: "长对话导航",
      messages: manyMessages,
    });
    await page.goto("/chat/sess-many");
    await expect(page.getByText("问题 1").first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole("button", { name: /定位到第/ })).toHaveCount(6);
  });

  test("CHAT-13 项目文件面板打开文档预览并可关闭", async ({ page }) => {
    await mockProjectDetailPage(page, {});
    await mockChatSessionPage(page, {
      sessionId: "sess-proj",
      title: "项目对话",
      projectId: "proj-visual-test",
      messages: [
        { role: "user", content: "项目上下文问题" },
        { role: "assistant", content: "项目相关回答。" },
      ],
    });

    await page.goto("/chat/sess-proj");
    await expect(page.getByText("项目上下文问题")).toBeVisible({ timeout: 15000 });
    await page.getByRole("main").getByRole("button", { name: "项目" }).click();
    await expect(page.getByText("CRISPR 综述")).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(400);
    await page.getByText("CRISPR 综述").first().click();

    const preview = page.getByTestId("chat-document-preview");
    await expect(preview.getByRole("heading", { name: "CRISPR 综述" })).toBeVisible({ timeout: 10000 });
    await expect(preview.getByText("CRISPR-Cas9 是一种强大的基因编辑工具。")).toBeVisible();
    await waitForVisualReady(page);
    await page.waitForTimeout(400);

    const previewBox = await preview.boundingBox();
    expect(previewBox?.width).toBeGreaterThanOrEqual(500);
    const chatBox = await page.getByTestId("chat-workspace-main").boundingBox();
    const workspaceBox = await page.getByTestId("chat-workspace-layout").boundingBox();
    const overlay = await preview.locator("xpath=../..").getAttribute("data-overlay");
    expect(workspaceBox?.width).toBeGreaterThan(1_000);
    expect(overlay).toBe("false");
    expect(chatBox?.width).toBeGreaterThanOrEqual(300);
    expect(chatBox?.width).toBeLessThanOrEqual(340);
    await expect(page).toHaveScreenshot("chat-13-document-preview.png", {
      fullPage: true,
    });

    const resizeHandle = preview.getByRole("separator", {
      name: "调整项目文件预览面板宽度",
    });
    const resizeHandleBox = await resizeHandle.boundingBox();
    expect(resizeHandleBox).not.toBeNull();
    await page.mouse.move(resizeHandleBox!.x + 2, resizeHandleBox!.y + 80);
    await page.mouse.down();
    await page.mouse.move(resizeHandleBox!.x + 82, resizeHandleBox!.y + 80);
    await page.mouse.up();
    await page.waitForTimeout(400);
    const resizedPreviewBox = await preview.boundingBox();
    expect(resizedPreviewBox?.width).toBeLessThan((previewBox?.width ?? 0) - 40);

    await page.setViewportSize({ width: 1_370, height: 900 });
    await page.waitForTimeout(400);
    const narrowedPreviewBox = await preview.boundingBox();
    const narrowedChatBox = await page.getByTestId("chat-workspace-main").boundingBox();
    expect(await preview.locator("xpath=../..").getAttribute("data-overlay")).toBe("false");
    expect(narrowedPreviewBox?.width).toBeCloseTo(resizedPreviewBox?.width ?? 0, 0);
    expect(narrowedChatBox?.width).toBeGreaterThanOrEqual(300);
    expect(narrowedChatBox?.width).toBeLessThanOrEqual(340);

    await page.setViewportSize({ width: 1_000, height: 800 });
    await page.waitForTimeout(400);
    expect(await preview.locator("xpath=../..").getAttribute("data-overlay")).toBe("true");
    const floatingPreviewBox = await preview.boundingBox();
    const projectPanel = page
      .getByRole("separator", { name: "调整项目文件面板宽度" })
      .locator("xpath=../..");
    const projectPanelBox = await projectPanel.boundingBox();
    expect(Math.abs(
      ((floatingPreviewBox?.x ?? 0) + (floatingPreviewBox?.width ?? 0))
      - (projectPanelBox?.x ?? 0),
    )).toBeLessThanOrEqual(2);
  });

  test("CHAT-18 窄屏聊天无横向滚动", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await mockChatSessionPage(page, {
      sessionId: "sess-narrow",
      title: "窄屏对话",
      messages: [
        { role: "user", content: "窄屏问题" },
        { role: "assistant", content: "窄屏回答内容。" },
      ],
    });

    await page.goto("/chat/sess-narrow");
    await expect(page.getByText("窄屏问题")).toBeVisible({ timeout: 15000 });
    await expect(page.locator("textarea").first()).toBeVisible({ timeout: 15000 });
    await waitForVisualReady(page);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
    await expect(page).toHaveScreenshot("chat-18-narrow.png", {
      fullPage: true,
    });
  });
});
