import { expect, test } from "@playwright/test";

import {
  mockUnauthenticatedSession,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("正常状态 / 登录", () => {
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
});
