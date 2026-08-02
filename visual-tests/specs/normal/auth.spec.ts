import { expect, test } from "@playwright/test";

import {
  createRequestGate,
  mockLoginInvalidCredentials,
  mockLoginRateLimited,
  mockUnauthenticatedSession,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("正常状态 / 登录", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
  });

  test("登录页默认状态保持稳定", async ({ page }) => {
    await mockUnauthenticatedSession(page);

    await page.goto("/login");
    await expect(page.getByRole("heading", { name: "Helia" })).toBeVisible();
    await expect(page.getByRole("button", { name: "登录" })).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("login-ready.png", {
      fullPage: true,
    });
  });

  test("AUTH-02 登录凭据错误展示可理解的提示", async ({ page }) => {
    await mockUnauthenticatedSession(page);
    await mockLoginInvalidCredentials(page);

    await page.goto("/login");
    await page.getByLabel("邮箱").fill("wrong@example.com");
    await page.getByLabel("密码").fill("wrong-password");
    await page.getByRole("button", { name: "登录" }).click();

    await expect(
      page.getByRole("alert").first(),
    ).toContainText("邮箱或密码不正确。");
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("auth-02-invalid-credentials.png", {
      fullPage: true,
    });
  });

  test("AUTH-03 登录提交中按钮禁用并展示加载文案", async ({ page }) => {
    const gate = createRequestGate();
    await mockUnauthenticatedSession(page);
    await page.route("**/api/auth/login", async (route) => {
      try {
        await gate.waiting;
        await route.fulfill({
          status: 200,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify({}),
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    await page.goto("/login");
    await page.getByLabel("邮箱").fill("visual-test@example.com");
    await page.getByLabel("密码").fill("visual-password");
    await page.getByRole("button", { name: "登录" }).click();

    await expect(
      page.getByRole("button", { name: "认证中..." }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "认证中..." }),
    ).toBeDisabled();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("auth-03-submitting.png", {
      fullPage: true,
    });

    gate.releaseRequest();
    await gate.requestCompleted;
  });

  test("AUTH-04 登录限流错误展示对应提示", async ({ page }) => {
    await mockUnauthenticatedSession(page);
    await mockLoginRateLimited(page);

    await page.goto("/login");
    await page.getByLabel("邮箱").fill("visual-test@example.com");
    await page.getByLabel("密码").fill("visual-password");
    await page.getByRole("button", { name: "登录" }).click();

    await expect(
      page.getByRole("alert").first(),
    ).toContainText("登录尝试过于频繁，请稍后再试。");
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("auth-04-rate-limited.png", {
      fullPage: true,
    });
  });
});