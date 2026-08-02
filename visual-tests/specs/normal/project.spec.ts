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
import {
  mockProjectDetailPageExtended,
  projectDetailFixture,
} from "../../fixtures/pages";

async function mockProjectsPage(page, projects = "default") {
  await mockAuthenticatedSession(page);
  await mockChatHistory(page, []);
  await mockProjectsBootstrap(page);
  await mockAiUsageReminder(page);
  await page.route("**/api/projects", (route) => {
    if (route.request().method() === "POST") {
      const body = route.request().postDataJSON() as Record<string, unknown>;
      return route.fulfill({
        status: 201,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({
          id: "proj-created",
          labId: "lab-visual-test",
          type: "team",
          status: "active",
          name: body.name ?? "新建项目",
          description: body.description ?? "",
          isDefaultUnassigned: false,
          memberCount: 1,
          knowledgeCount: 0,
          taskCount: 0,
          updatedAt: "2025-07-15T12:00:00.000Z",
          createdAt: "2025-07-15T12:00:00.000Z",
        }),
      });
    }
    return route.continue();
  });
  if (projects !== "default") {
    await page.route("**/api/projects/bootstrap", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({
          defaultProject: { id: "d", name: "未归属", isDefaultUnassigned: true },
          projects: [],
        }),
      }),
    );
  }
}

test.describe("正常状态 / 项目", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("PROJECT-01 项目列表默认态", async ({ page }) => {
    await mockProjectsPage(page);
    await page.goto("/projects");
    await expect(page.getByText("科研项目")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("视觉测试项目")).toBeVisible();
    await expect(page.getByText("创建新项目")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-01-list.png", { fullPage: true });
  });

  test("PROJECT-02 项目空状态展示新建入口", async ({ page }) => {
    await mockProjectsPage(page, "empty");
    await page.goto("/projects");
    await expect(page.getByText("科研项目")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("暂无项目")).toBeVisible({ timeout: 5000 });
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-02-empty.png", { fullPage: true });
  });

  test("PROJECT-03 新建项目弹窗与列表更新", async ({ page }) => {
    await mockProjectsPage(page);
    await page.goto("/projects");
    await expect(page.getByText("科研项目")).toBeVisible({ timeout: 10000 });

    await page.getByText("创建新项目").click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("创建新项目");
    await page.getByPlaceholder("请输入项目名称").fill("质粒构建项目");
    await page.getByPlaceholder("请输入项目描述").fill("构建表达质粒的实验项目");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-03-create.png", { fullPage: true });

    await dialog.getByRole("button", { name: "创建" }).click();
    await expect(dialog).toBeHidden({ timeout: 10000 });
    await expect(page.getByText("质粒构建项目")).toBeVisible({ timeout: 10000 });
  });

  test("PROJECT-04 项目详情展示文档、对话与成员入口", async ({ page }) => {
    await mockProjectDetailPageExtended(page);
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("CRISPR 综述")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "对话 1" })).toBeVisible();
    await page.getByRole("main").getByRole("button", { name: "对话 1" }).click();
    await expect(page.getByText("项目讨论")).toBeVisible();
    await expect(page.getByText("管理成员")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-04-detail.png", { fullPage: true });
  });

  test("PROJECT-05 新建对话跳转到会话页", async ({ page }) => {
    await mockProjectDetailPageExtended(page);
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("main").getByRole("button", { name: "对话 1" }).click();
    await page.getByText("发起对话").click();
    await page.waitForURL(/\/chat\/sess-project-created/, { timeout: 10000 });
  });

  test("PROJECT-06 成员管理弹窗展示成员", async ({ page }) => {
    await mockProjectDetailPageExtended(page, {
      labMembers: [
        { id: "lm-1", labId: "lab-visual-test", userId: "u-member-1", role: "postdoc", joinedAt: "2025-02-01T00:00:00.000Z", user: { id: "u-member-1", email: "member1@example.com", name: "成员一号" } },
        { id: "lm-2", labId: "lab-visual-test", userId: "u-member-2", role: "student", joinedAt: "2025-03-01T00:00:00.000Z", user: { id: "u-member-2", email: "member2@example.com", name: "成员二号" } },
      ],
    });
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });

    await page.getByText("管理成员").click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("管理成员");
    await expect(dialog).toContainText("视觉测试员");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-06-members.png", { fullPage: true });
  });

  test("PROJECT-07 添加成员提交邀请", async ({ page }) => {
    await mockProjectDetailPageExtended(page, {
      labMembers: [
        { id: "lm-2", labId: "lab-visual-test", userId: "u-member-2", role: "student", joinedAt: "2025-03-01T00:00:00.000Z", user: { id: "u-member-2", email: "member2@example.com", name: "成员二号" } },
      ],
    });
    await page.route(/^.*\/api\/projects\/proj-visual-test\/members$/, (route) => {
      if (route.request().method() === "POST") {
        return route.fulfill({
          status: 200,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify([
            { id: "pm-2", projectId: "proj-visual-test", userId: "u-member-2", role: "member", joinedAt: "2025-03-01T00:00:00.000Z" },
          ]),
        });
      }
      return route.continue();
    });

    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });
    await page.getByText("管理成员").click();
    const dialog = page.getByRole("dialog");

    await dialog.getByRole("combobox").first().click();
    await expect(page.getByText("成员二号（member2@example.com）")).toBeVisible({ timeout: 5000 });
    await page.getByText("成员二号（member2@example.com）").click();
    await dialog.getByRole("button", { name: "邀请成员" }).click();

    await expect(page.getByText("成员二号", { exact: false }).last()).toBeVisible({ timeout: 10000 });
  });

  test("PROJECT-08 无权限成员不展示管理与删除入口", async ({ page }) => {
    const project = projectDetailFixture({
      permissions: { canAdmin: false, canEdit: true, canDelete: false },
    });
    await mockProjectDetailPageExtended(page, { project });
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("管理成员")).toBeHidden();
    await expect(page.getByText("删除项目")).toBeHidden();
  });

  test("PROJECT-09 删除项目确认并返回列表", async ({ page }) => {
    await mockProjectDetailPageExtended(page);
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });

    await page.getByText("删除项目").click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("删除项目");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-09-delete.png", { fullPage: true });

    await dialog.getByRole("button", { name: "删除" }).click();
    await page.waitForURL(/\/projects$/, { timeout: 10000 });
  });

  test("PROJECT-10 加载失败展示错误与重试入口", async ({ page }) => {
    await mockProjectDetailPageExtended(page, { detailError: true });
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByText("项目服务暂时不可用，请稍后重试")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "重新加载" })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-10-load-error.png", { fullPage: true });
  });

  test("PROJECT-11 长名称项目无横向溢出", async ({ page }) => {
    const project = projectDetailFixture({
      name: "这是一个非常非常长的项目名称，用于验证超长名称在项目详情页的截断与布局稳定性测试用例",
      description: "很长的项目描述。".repeat(20),
    });
    await mockProjectDetailPageExtended(page, { project });
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: /这是一个非常非常长的项目名称/ })).toBeVisible({ timeout: 10000 });
    await waitForVisualReady(page);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
  });

  test("PROJECT-12 慢速加载时保留骨架", async ({ page }) => {
    const gate = createRequestGate();
    await mockAuthenticatedSession(page);
    await mockChatHistory(page, []);
    await mockProjectsBootstrap(page);
    await mockAiUsageReminder(page);
    await page.route(/^.*\/api\/projects\/proj-visual-test$/, async (route) => {
      try {
        await gate.waiting;
        await route.fulfill({
          status: 200,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify(projectDetailFixture()),
        });
      } finally {
        gate.markRequestCompleted();
      }
    });
    await page.route("**/api/labs/lab-visual-test", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({
          id: "lab-visual-test",
          name: "视觉测试实验室",
          institution: "中国科学院",
          inviteCode: "VISUAL2025",
          createdBy: "u-visual-test",
          createdAt: "2025-01-01T00:00:00.000Z",
        }),
      }),
    );
    await page.route("**/api/labs/lab-visual-test/members", (route) =>
      route.fulfill({ status: 200, contentType: "application/json; charset=utf-8", body: JSON.stringify([]) }),
    );

    await page.goto("/projects/proj-visual-test");
    await expect(page.getByText("正在加载项目…")).toBeVisible({ timeout: 10000 });
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("project-12-loading.png", { fullPage: true });

    gate.releaseRequest();
    await gate.requestCompleted;
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });
  });
});