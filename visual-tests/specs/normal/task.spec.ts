import { expect, test } from "@playwright/test";

import {
  literatureSubscriptionFixture,
  mockToolsPage,
  scheduledTaskFixture,
} from "../../fixtures/pages";
import {
  createRequestGate,
  respondWithApiError,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("正常状态 / 定时任务与文献订阅", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("TASK-01 任务总览展示模板、任务列表与文献订阅", async ({ page }) => {
    await mockToolsPage(page, {
      tasks: [
        scheduledTaskFixture({
          id: "task-1",
          name: "每日文献追踪",
          prompt: "每天跟踪指定关键词的新论文，并生成摘要与要点。",
          scheduleKind: "daily",
          scheduleConfig: { time: "08:30" },
          nextRunAt: "2025-07-16T00:30:00.000Z",
        }),
        scheduledTaskFixture({
          id: "task-2",
          name: "每周工作总结",
          prompt: "每周五 18:00 汇总本周实验进展、问题与下周安排。",
          scheduleKind: "weekly",
          scheduleConfig: { time: "18:00", weekday: 5 },
          nextRunAt: "2025-07-18T10:00:00.000Z",
          status: "paused",
        }),
      ],
      subscriptions: [
        literatureSubscriptionFixture({
          id: "sub-1",
          name: "肿瘤免疫文献",
          keywords: ["PD-1", "CAR-T"],
          totalItems: 12,
          unreadItems: 3,
          savedItems: 2,
          boundProjectCount: 1,
        }),
      ],
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: /文献追踪/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /每周工作总结/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /项目进展汇总/ })).toBeVisible();
    await expect(page.getByText("已设置任务")).toBeVisible();
    await expect(page.getByText("每日文献追踪", { exact: true })).toBeVisible();
    await expect(page.getByText("每天 08:30", { exact: true })).toBeVisible();
    await expect(page.getByText("7.16 08:30", { exact: true })).toBeVisible();
    await expect(page.getByText("每周五 18:00", { exact: true })).toBeVisible();
    await expect(page.getByText("肿瘤免疫文献", { exact: true })).toBeVisible();
    await expect(page.getByText("共 12 · 未读 3 · 收藏 2", { exact: true })).toBeVisible();
    await expect(page.getByText("关联 1 个项目", { exact: true })).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("task-01-overview.png", {
      fullPage: true,
    });
  });

  test("TASK-02 每天任务编辑器字段与创建提交", async ({ page }) => {
    await mockToolsPage(page, { tasks: [] });

    let createBody: Record<string, unknown> | null = null;
    let listRequestCount = 0;
    page.on("request", (request) => {
      if (request.method() === "GET" && request.url().endsWith("/api/scheduled-tasks")) {
        listRequestCount += 1;
      }
      if (request.method() === "POST" && request.url().endsWith("/api/scheduled-tasks")) {
        createBody = request.postDataJSON();
      }
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("button", { name: "新建任务" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("新建定时任务");
    await expect(dialog).toContainText("任务名称");
    await expect(dialog).toContainText("任务周期");
    await expect(dialog).toContainText("触发时间");
    await expect(dialog).toContainText("提示词 (Prompt)");

    await page.getByPlaceholder("请输入任务名称").fill("每日生信新闻");
    await page.getByPlaceholder("输入任何内容，使用 '/' 选择技能或 '@' 引用资源...").fill("汇总过去 24 小时的重要生信新闻，重点关注技术进展。");
    await expect(page.getByRole("button", { name: "创建任务" })).toBeEnabled();

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-02-daily-editor.png", {
      fullPage: true,
    });

    await page.getByRole("button", { name: "创建任务" }).click();
    await expect(dialog).toBeHidden();
    await expect(page.getByText("每日生信新闻")).toBeVisible({ timeout: 10000 });
    await expect.poll(() => listRequestCount).toBeGreaterThanOrEqual(2);
    expect(createBody).not.toBeNull();
    expect(createBody?.scheduleKind).toBe("daily");
    expect((createBody?.scheduleConfig as Record<string, unknown>)?.time).toBe("15:00");
  });

  test("TASK-03 每周任务模板预填与提交", async ({ page }) => {
    await mockToolsPage(page, { tasks: [] });

    let createBody: Record<string, unknown> | null = null;
    page.on("request", (request) => {
      if (request.method() === "POST" && request.url().endsWith("/api/scheduled-tasks")) {
        createBody = request.postDataJSON();
      }
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("button", { name: /每周工作总结/ }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("新建定时任务");
    await expect(page.getByPlaceholder("请输入任务名称")).toHaveValue("每周工作总结");
    await expect(dialog).toContainText("每周");
    await expect(dialog).toContainText("18:00");

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-03-weekly-editor.png", {
      fullPage: true,
    });

    await page.getByRole("button", { name: "创建任务" }).click();
    await expect(dialog).toBeHidden();
    expect(createBody).not.toBeNull();
    expect(createBody?.scheduleKind).toBe("weekly");
    expect((createBody?.scheduleConfig as Record<string, unknown>)?.weekday).toBe(5);
  });

  test("TASK-04 每月任务展示与编辑态", async ({ page }) => {
    await mockToolsPage(page, {
      tasks: [
        scheduledTaskFixture({
          id: "task-monthly",
          name: "每月库存盘点",
          prompt: "每月盘点实验室库存并生成报告。",
          scheduleKind: "monthly",
          scheduleConfig: { time: "09:00", dayOfMonth: 15 },
          nextRunAt: "2025-08-15T01:00:00.000Z",
          scheduleEndAt: "2025-10-31T00:00:00.000Z",
        }),
      ],
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("每月库存盘点")).toBeVisible();
    await expect(page.getByText("每月15号 09:00")).toBeVisible();

    const row = page.locator("tr").filter({ hasText: "每月库存盘点" });
    await row.locator('button[aria-haspopup="menu"]').click();
    await page.getByRole("menuitem", { name: "编辑" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("修改定时任务");
    await expect(dialog).toContainText("每月");
    await expect(page.getByPlaceholder("请输入任务名称")).toHaveValue("每月库存盘点");

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-04-monthly-editor.png", {
      fullPage: true,
    });
  });

  test("TASK-05 停用、编辑与删除任务", async ({ page }) => {
    await mockToolsPage(page, {
      tasks: [
        scheduledTaskFixture({
          id: "task-toggle",
          name: "可停用任务",
          prompt: "需要停用的任务",
          scheduleKind: "daily",
          scheduleConfig: { time: "07:00" },
        }),
        scheduledTaskFixture({
          id: "task-edit",
          name: "待编辑任务",
          prompt: "需要编辑的任务",
          scheduleKind: "daily",
          scheduleConfig: { time: "10:00" },
          scheduleEndAt: "2025-08-01T00:00:00.000Z",
        }),
      ],
    });

    const requests: Array<{ method: string; url: string; body: unknown }> = [];
    page.on("request", (request) => {
      if (request.url().includes("/api/scheduled-tasks")) {
        requests.push({
          method: request.method(),
          url: request.url(),
          body: request.postDataJSON(),
        });
      }
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });

    // 停用：点击任务行的开关
    const toggleRow = page.locator("tr").filter({ hasText: "可停用任务" });
    await toggleRow.getByRole("switch", { name: "关闭任务" }).click();
    await expect
      .poll(() => requests.some((r) => r.method === "POST" && r.url.endsWith("/pause")))
      .toBe(true);

    // 编辑：打开菜单 → 编辑 → 修改名称 → 保存修改
    const editRow = page.locator("tr").filter({ hasText: "待编辑任务" });
    await editRow.locator('button[aria-haspopup="menu"]').click();
    await page.getByRole("menuitem", { name: "编辑" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("修改定时任务");
    await page.getByPlaceholder("请输入任务名称").fill("已编辑任务");
    await page.getByRole("button", { name: "保存修改" }).click();
    await expect(dialog).toBeHidden();
    await expect(page.getByText("已编辑任务")).toBeVisible({ timeout: 10000 });
    await expect
      .poll(() => requests.some((r) => r.method === "PATCH"))
      .toBe(true);

    // 删除：打开菜单 → 删除 → 确认
    const deleteRow = page.locator("tr").filter({ hasText: "已编辑任务" });
    await deleteRow.locator('button[aria-haspopup="menu"]').click();
    await page.getByRole("menuitem", { name: "删除" }).click();
    await expect(page.getByRole("dialog")).toContainText("确认删除任务");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-05-delete-confirm.png", {
      fullPage: true,
    });
    await page.getByRole("dialog").getByRole("button", { name: "删除" }).click();
    await expect(page.getByRole("dialog")).toBeHidden({ timeout: 10000 });
    await expect(page.locator("tr").filter({ hasText: "已编辑任务" })).toHaveCount(0);
    await expect
      .poll(() => requests.some((r) => r.method === "DELETE"))
      .toBe(true);
  });
});

test.describe("正常状态 / 文献订阅与异常", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("TASK-06 文献订阅表格展示来源、周期、数量与绑定信息", async ({ page }) => {
    await mockToolsPage(page, {
      subscriptions: [
        literatureSubscriptionFixture({
          id: "sub-1",
          name: "肿瘤免疫文献",
          type: "pubmed",
          keywords: ["PD-1", "CAR-T"],
          frequency: "daily",
          lastFetchAt: "2025-07-15T08:00:00.000Z",
          totalItems: 12,
          unreadItems: 3,
          savedItems: 2,
          boundProjectCount: 1,
        }),
        literatureSubscriptionFixture({
          id: "sub-2",
          name: "基因编辑预印本",
          type: "biorxiv",
          keywords: ["prime editing"],
          frequency: "weekly",
          enabled: false,
          lastFetchAt: null,
        }),
      ],
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("文献订阅", { exact: true })).toBeVisible();
    await expect(page.getByText("订阅名称")).toBeVisible();
    await expect(page.getByText("关键词", { exact: true })).toBeVisible();
    await expect(page.getByText("抓取设置", { exact: true })).toBeVisible();
    await expect(page.getByText("内容统计", { exact: true })).toBeVisible();
    await expect(page.getByText("最近抓取", { exact: true })).toBeVisible();
    await expect(page.getByText("肿瘤免疫文献", { exact: true })).toBeVisible();
    await expect(page.getByText("PubMed", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("PD-1、CAR-T", { exact: true })).toBeVisible();
    await expect(page.getByText("每天 · 回看 30 天", { exact: true })).toBeVisible();
    await expect(page.getByText("共 12 · 未读 3 · 收藏 2", { exact: true })).toBeVisible();
    await expect(page.getByText("关联 1 个项目", { exact: true })).toBeVisible();
    await expect(page.getByText("基因编辑预印本", { exact: true })).toBeVisible();
    await expect(page.getByText("尚未抓取", { exact: true })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-06-subscriptions.png", {
      fullPage: true,
    });
  });

  test("TASK-07 新建文献订阅编辑器与提交", async ({ page }) => {
    await mockToolsPage(page, { subscriptions: [] });
    const createBodies: Array<Record<string, unknown>> = [];
    page.on("request", (request) => {
      if (request.method() === "POST" && request.url().endsWith("/api/knowledge/subscriptions")) {
        createBodies.push(request.postDataJSON() as Record<string, unknown>);
      }
    });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("button", { name: "新建订阅" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("设置文献订阅任务");
    await expect(dialog).toContainText("任务名称");
    await page.getByPlaceholder("请输入任务名称").fill("免疫疗法文献");
    await page.getByPlaceholder("例：CRISPR, prime editing, base editor").fill("PD-1, CAR-T");
    await expect(dialog.getByRole("button", { name: "创建订阅" })).toBeEnabled();

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-07-literature-editor.png", {
      fullPage: true,
    });

    await dialog.getByRole("button", { name: "创建订阅" }).click();
    await expect(dialog).toBeHidden({ timeout: 10000 });
    expect(createBodies.length).toBeGreaterThan(0);
    expect(createBodies[0]?.name).toBe("免疫疗法文献");
  });

  test("TASK-08 无任务与无订阅的空状态", async ({ page }) => {
    await mockToolsPage(page, { tasks: [], subscriptions: [] });

    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "定时任务" })).toBeVisible({ timeout: 10000 });
    await expect(page.locator("tbody", { hasText: "暂无数据" }).first()).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-08-empty.png", {
      fullPage: true,
    });
  });

  test("TASK-09 列表与写操作接口错误恢复", async ({ page }) => {
    await mockToolsPage(page, {
      tasks: [],
      subscriptions: [],
      taskError: true,
    });
    // 写操作失败：停用任务返回 503
    await page.route(/^.*\/api\/scheduled-tasks\/[^/?]+\/pause$/, (route) =>
      respondWithApiError(route, {
        status: 503,
        code: "TASK_PAUSE_FAILED",
        message: "定时任务状态更新失败，请稍后重试",
      }),
    );

    await page.goto("/tools");
    await expect(page.getByText("定时任务服务暂时不可用，请稍后重试")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "重新加载" })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-09-task-error.png", {
      fullPage: true,
    });
  });

  test("TASK-10 慢请求下列表刷新不抖动", async ({ page }) => {
    const gate = createRequestGate();
    await mockToolsPage(page, {
      tasks: [
        scheduledTaskFixture({
          id: "task-slow",
          name: "慢速加载任务",
          prompt: "等待加载完成的任务",
          scheduleKind: "daily",
          scheduleConfig: { time: "09:00" },
        }),
      ],
      subscriptions: [],
    });
    await page.route("**/api/scheduled-tasks", async (route) => {
      if (route.request().method() === "GET") {
        try {
          await gate.waiting;
        } finally {
          gate.markRequestCompleted();
        }
      }
      await route.fallback().catch(() => undefined);
    });

    await page.goto("/tools");
    await expect(page.getByRole("button", { name: "新建任务" })).toBeVisible({ timeout: 10000 });
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("task-10-loading.png", {
      fullPage: true,
    });

    gate.releaseRequest();
    await gate.requestCompleted;
    await expect(page.getByText("慢速加载任务")).toBeVisible({ timeout: 10000 });
  });
});
