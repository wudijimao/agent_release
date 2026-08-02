import { expect, test } from "@playwright/test";

import {
  mockUnauthenticatedSession,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("异常韧性 / 会话失效", () => {
  test("AUTH-08 会话失效时保留原路径并跳转登录", async ({ page }) => {
    await mockUnauthenticatedSession(page);

    await page.goto("/chat/new");
    await page.waitForURL(/\/login\?next=/);
    const url = new URL(page.url());
    expect(url.searchParams.get("next")).toBe("/chat/new");

    await expect(page.getByRole("heading", { name: "Helia" })).toBeVisible();
    await waitForVisualReady(page);

    await expect(page).toHaveScreenshot("auth-08-session-expiry.png", {
      fullPage: true,
    });
  });
});