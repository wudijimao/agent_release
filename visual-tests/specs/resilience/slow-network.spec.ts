import { expect, test } from "@playwright/test";

import {
  createRequestGate,
  mockUnauthenticatedSession,
  respondWithApiError,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("异常韧性 / 慢网络", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
  });

  test("会话接口缓慢时展示恢复状态", async ({ page }) => {
    const gate = createRequestGate();
    await page.route("**/api/auth/me", async (route) => {
      try {
        await gate.waiting;
        await respondWithApiError(route, {
          status: 401,
          code: "UNAUTHORIZED",
          message: "Unauthorized",
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    await page.goto("/chat/new");
    await expect(page.getByText("正在恢复登录状态…")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("session-loading.png", {
      fullPage: true,
    });

    gate.releaseRequest();
    await gate.requestCompleted;
  });

  test("登录接口缓慢时按钮展示提交中状态", async ({ page }) => {
    const gate = createRequestGate();
    await mockUnauthenticatedSession(page);
    await page.route("**/api/auth/login", async (route) => {
      try {
        await gate.waiting;
        await respondWithApiError(route, {
          status: 503,
          code: "AUTH_SERVICE_UNAVAILABLE",
          message: "Authentication service unavailable",
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    await page.goto("/login");
    await page.getByLabel("邮箱").fill("visual-test@example.com");
    await page.getByLabel("密码").fill("visual-password");
    await page.getByRole("button", { name: "登录" }).click();

    await expect(page.getByRole("button", { name: "认证中..." })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("login-submitting.png", {
      fullPage: true,
    });

    gate.releaseRequest();
    await gate.requestCompleted;
  });
});
