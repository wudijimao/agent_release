import { expect, test } from "@playwright/test";

import {
  mockUnauthenticatedSession,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("响应式 / 窄屏登录", () => {
  test.use({
    viewport: { width: 375, height: 812 },
  });

  test("AUTH-09 375px 窄屏下登录页无裁切无横向滚动", async ({ page }) => {
    await mockUnauthenticatedSession(page);

    await page.goto("/login");
    await expect(page.getByRole("heading", { name: "Helia" })).toBeVisible();
    await expect(page.getByRole("button", { name: "登录" })).toBeVisible();
    await waitForVisualReady(page);

    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    const viewportWidth = await page.evaluate(
      () => window.innerWidth,
    );
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth);

    await expect(page).toHaveScreenshot("auth-09-narrow-login.png", {
      fullPage: true,
    });
  });
});