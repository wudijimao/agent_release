import { expect, test } from "@playwright/test";

import {
  mockLoginApiFailure,
  mockSessionApiFailure,
  mockUnauthenticatedSession,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("异常韧性 / 接口错误", () => {
  test("会话接口错误时展示可重试页面", async ({ page }) => {
    await mockSessionApiFailure(page);

    await page.goto("/chat/new");
    await expect(page.getByText("登录状态服务暂时不可用")).toBeVisible();
    await expect(page.getByRole("button", { name: "重新加载" })).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("session-api-error.png", {
      fullPage: true,
    });
  });

  test("登录接口错误时展示用户可理解的错误", async ({ page }) => {
    await mockUnauthenticatedSession(page);
    await mockLoginApiFailure(page);

    await page.goto("/login");
    await page.getByLabel("邮箱").fill("visual-test@example.com");
    await page.getByLabel("密码").fill("visual-password");
    await page.getByRole("button", { name: "登录" }).click();

    await expect(
      page.getByText("登录服务暂时不可用，请稍后重试。", {
        exact: true,
      }),
    ).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("login-api-error.png", {
      fullPage: true,
    });
  });
});
