import { expect, test } from "@playwright/test";

import {
  adminMemberFixture,
  mockAiUsagePage,
  mockMembersPage,
  mockRoleSession,
  mockSystemSettingsPage,
} from "../../fixtures/pages";
import {
  createRequestGate,
  waitForVisualReady,
} from "../../fixtures/network";

const TINY_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

test.describe("正常状态 / 设置", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("SETTINGS-01 设置首页展示账户入口与管理员菜单", async ({ page }) => {
    await mockSystemSettingsPage(page);

    await page.goto("/system-settings");
    await expect(page.getByText("更多设置")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("heading", { name: "账户" })).toBeVisible();
    await expect(page.getByText("修改密码", { exact: true })).toBeVisible();
    await expect(page.getByText("更换头像", { exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "修改" })).toBeVisible();
    await expect(page.getByRole("button", { name: "上传" })).toBeVisible();

    // 管理员设置菜单入口
    await page.getByText("视觉测试员").first().click();
    await expect(page.getByRole("menuitem", { name: "成员管理" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "AI用量" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "更多系统设置" })).toBeVisible();

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-01-home.png", {
      fullPage: true,
    });
  });

  test("SETTINGS-02 个人资料头像上传反馈", async ({ page }) => {
    await mockSystemSettingsPage(page);
    await page.route("/avatar-visual-test.png", (route) =>
      route.fulfill({
        status: 200,
        contentType: "image/png",
        body: Buffer.from(TINY_PNG_BASE64, "base64"),
      }),
    );

    const gate = createRequestGate();
    await page.route("**/api/auth/me/avatar", async (route) => {
      try {
        await gate.waiting;
        await route.fulfill({
          status: 200,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify({
            user: {
              id: "u-visual-test",
              email: "visual-test@example.com",
              name: "视觉测试员",
              avatarUrl: "/avatar-visual-test.png",
              createdAt: "2025-01-01T00:00:00.000Z",
            },
          }),
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    await page.goto("/system-settings");
    await expect(page.getByText("更多设置")).toBeVisible({ timeout: 10000 });

    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: "avatar.png",
      mimeType: "image/png",
      buffer: Buffer.from(TINY_PNG_BASE64, "base64"),
    });

    await expect(page.getByRole("button", { name: "上传中" })).toBeVisible();
    await expect(page.getByRole("button", { name: "上传中" })).toBeDisabled();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-02-avatar-uploading.png", {
      fullPage: true,
    });

    gate.releaseRequest();
    await gate.requestCompleted;
    await expect(page.getByRole("img", { name: "当前头像" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "上传" })).toBeVisible();
  });

  test("SETTINGS-03a 修改密码服务端错误映射到字段", async ({ page }) => {
    await mockSystemSettingsPage(page, {
      changePasswordError: {
        status: 401,
        code: "INVALID_CURRENT_PASSWORD",
        message: "当前密码不正确",
      },
    });

    await page.goto("/system-settings");
    await expect(page.getByText("更多设置")).toBeVisible({ timeout: 10000 });
    await page.getByRole("button", { name: "修改" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("修改密码");
    await page.getByPlaceholder("请输入当前密码").fill("wrong-current");
    await page.getByPlaceholder("请输入新密码").fill("new-password-123");
    await page.getByPlaceholder("请再次输入新密码").fill("new-password-123");
    await dialog.getByRole("button", { name: "保存" }).click();

    await expect(dialog).toContainText("当前密码不正确");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-03-password-error.png", {
      fullPage: true,
    });
  });

  test("SETTINGS-03b 修改密码成功后不强制退出但跳转登录", async ({ page }) => {
    await mockSystemSettingsPage(page);

    await page.goto("/system-settings");
    await expect(page.getByText("更多设置")).toBeVisible({ timeout: 10000 });
    await page.getByRole("button", { name: "修改" }).click();

    const dialog = page.getByRole("dialog");
    await page.getByPlaceholder("请输入当前密码").fill("current-password");
    await page.getByPlaceholder("请输入新密码").fill("new-password-123");
    await page.getByPlaceholder("请再次输入新密码").fill("new-password-123");
    await dialog.getByRole("button", { name: "保存" }).click();

    await page.waitForURL(/\/login/, { timeout: 10000 });
  });

  test("SETTINGS-04 普通用户隐藏用量与成员管理入口", async ({ page }) => {
    await mockRoleSession(page, "postdoc");

    await page.goto("/system-settings");
    await expect(page.getByText("更多设置")).toBeVisible({ timeout: 10000 });
    await page.getByText("视觉测试员").first().click();
    await expect(page.getByRole("menuitem", { name: "Skill" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "更多系统设置" })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "成员管理" })).toBeHidden();
    await expect(page.getByRole("menuitem", { name: "AI用量" })).toBeHidden();

    await page.goto("/members");
    await page.waitForURL(/\/chat\/new/, { timeout: 10000 });

    await page.goto("/ai-usage");
    await page.waitForURL(/\/chat\/new/, { timeout: 10000 });
  });

  test("SETTINGS-05 成员管理列表与邀请码", async ({ page }) => {
    await mockMembersPage(page, {
      members: [
        adminMemberFixture({
          id: "member-1",
          userId: "u-member-1",
          role: "postdoc",
          user: { id: "u-member-1", email: "member1@example.com", name: "成员一号", avatarUrl: null },
          projects: [{ id: "proj-1", name: "视觉测试项目", type: "team", role: "member", isDefaultUnassigned: false }],
        }),
        adminMemberFixture({
          id: "member-2",
          userId: "u-member-2",
          role: "admin",
          user: { id: "u-member-2", email: "member2@example.com", name: "成员二号", avatarUrl: null },
          projects: [],
        }),
      ],
    });

    await page.goto("/members");
    await expect(page.getByText("视觉测试实验室")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("成员一号")).toBeVisible();
    await expect(page.getByText("member1@example.com")).toBeVisible();
    await expect(page.getByText("成员二号")).toBeVisible();
    await expect(page.getByText("团队角色")).toBeVisible();
    await expect(page.getByText("共2人")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-05-members.png", {
      fullPage: true,
    });

    // 邀请码在弹窗中展示
    await page.getByRole("button", { name: "邀请新成员" }).click();
    const inviteDialog = page.getByRole("dialog");
    await expect(inviteDialog).toContainText("邀请码");
    await expect(inviteDialog.getByRole("button", { name: "复制邀请码" })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-05-invite.png", {
      fullPage: true,
    });

    await inviteDialog.getByRole("button", { name: "重新生成邀请码" }).click();
    await expect(inviteDialog).toContainText("NEWCODE2026", { timeout: 10000 });
  });

  test("SETTINGS-06 成员角色编辑与移除确认", async ({ page }) => {
    await mockMembersPage(page, {
      members: [
        adminMemberFixture({
          id: "member-1",
          userId: "u-member-1",
          role: "student",
          user: { id: "u-member-1", email: "member1@example.com", name: "成员一号", avatarUrl: null },
          projects: [],
        }),
      ],
    });

    await page.goto("/members");
    await expect(page.getByText("成员一号")).toBeVisible({ timeout: 10000 });

    const row = page.locator("tr").filter({ hasText: "成员一号" });
    await row.locator('button[aria-haspopup="menu"]').click();
    await page.getByRole("menuitem", { name: "编辑" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("编辑成员信息");
    await dialog.getByRole("button", { name: "保存修改" }).click();
    await expect(dialog).toBeHidden({ timeout: 10000 });

    await row.locator('button[aria-haspopup="menu"]').click();
    await page.getByRole("menuitem", { name: "移除" }).click();
    await expect(page.getByRole("dialog")).toContainText("确定要移除该成员吗？");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-06-remove-member.png", {
      fullPage: true,
    });
    await page.getByRole("dialog").getByRole("button", { name: "确认移除" }).click();
    await expect(page.getByRole("dialog")).toBeHidden({ timeout: 10000 });
    await expect(page.locator("tr").filter({ hasText: "成员一号" })).toHaveCount(0);
  });

  test("SETTINGS-07 AI 用量总览与筛选", async ({ page }) => {
    await mockAiUsagePage(page, {
      summary: {
        tokenBalance: 500000,
        monthTokenUsage: 120000,
        last7dTokenUsage: 30000,
        estimatedRemainingDays: 15,
        byMember: [
          { userId: "u-visual-test", name: "视觉测试员", email: "visual-test@example.com", totalTokens: 80000 },
        ],
        byProject: [],
      },
      events: [
        {
          id: "evt-1",
          userId: "u-visual-test",
          userName: "视觉测试员",
          projectId: null,
          projectName: null,
          sessionId: "sess-1",
          runId: null,
          provider: "openai",
          model: "gpt-4o",
          inputTokens: 100,
          outputTokens: 50,
          totalTokens: 150,
          eventSource: "home_chat",
          createdAt: "2025-07-01T02:00:00.000Z",
        },
      ],
      ledger: [
        {
          id: "ledger-1",
          entryType: "recharge",
          amountTokens: 500000,
          balanceAfter: 500000,
          sourceType: null,
          sourceId: null,
          description: "测试充值",
          createdBy: "u-visual-test",
          createdAt: "2025-06-01T00:00:00.000Z",
        },
      ],
    });

    await page.goto("/ai-usage");
    await expect(page.getByText("账户 Token 余额")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("500,000")).toBeVisible();
    await expect(page.getByText("本月 Token 消耗")).toBeVisible();
    await expect(page.getByText("预计可用天数")).toBeVisible();
    await expect(page.getByText("15 天")).toBeVisible();
    await expect(page.getByText("全部成员")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-07-ai-usage.png", {
      fullPage: true,
    });
  });

  test("SETTINGS-08 用量提醒阈值状态", async ({ page }) => {
    await mockAiUsagePage(page, {
      summary: {
        tokenBalance: 0,
        monthTokenUsage: 999999,
        last7dTokenUsage: 100000,
        estimatedRemainingDays: 2,
        byMember: [],
        byProject: [],
      },
      events: [],
      ledger: [],
    });

    await page.goto("/ai-usage");
    await expect(page.getByText("账户 Token 余额")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("余额不足")).toBeVisible();
    await expect(page.getByText("用量提醒")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-08-usage-warning.png", {
      fullPage: true,
    });
  });

  test("SETTINGS-09 用量接口错误局部提示", async ({ page }) => {
    await mockAiUsagePage(page, { loadError: true });
    await page.goto("/ai-usage");
    await expect(page.getByText("AI 用量服务暂时不可用，请稍后重试")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "重新加载" })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("settings-09-usage-error.png", {
      fullPage: true,
    });
  });

  test("SETTINGS-10 长成员列表分页", async ({ page }) => {
    const members = Array.from({ length: 25 }, (_, index) =>
      adminMemberFixture({
        id: `member-${index + 1}`,
        userId: `u-${index + 1}`,
        role: "student",
        user: { id: `u-${index + 1}`, email: `member${index + 1}@example.com`, name: `成员${String(index + 1).padStart(2, "0")}`, avatarUrl: null },
        projects: [],
      }),
    );
    await mockMembersPage(page, { members });

    await page.goto("/members");
    await expect(page.getByText("成员01")).toBeVisible({ timeout: 10000 });
    const rows = page.locator("tbody tr");
    await expect(rows).toHaveCount(10);
    await expect(page.getByText("成员11")).toBeHidden();
  });

  test("SETTINGS-11 设置页窄屏无裁切", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await mockSystemSettingsPage(page);

    await page.goto("/system-settings");
    await expect(page.getByText("更多设置")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "修改" })).toBeVisible();
    await waitForVisualReady(page);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth);
    await expect(page).toHaveScreenshot("settings-11-narrow.png", {
      fullPage: true,
    });
  });
});