import { expect, test } from "@playwright/test";

import {
  mockSkillsPage,
  skillCatalogFixture,
} from "../../fixtures/pages";
import {
  createRequestGate,
  waitForVisualReady,
} from "../../fixtures/network";

test.describe("正常状态 / 技能", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("SKILL-01 已安装与未安装列表切换", async ({ page }) => {
    await mockSkillsPage(page, {
      catalog: [
        skillCatalogFixture({
          slug: "crispr-assistant",
          displayName: "CRISPR 助手",
          description: "辅助设计 CRISPR 靶点与脱靶评估。",
          category: "analysis",
          riskLevel: "low",
        }),
        skillCatalogFixture({
          slug: "pubmed-search",
          displayName: "PubMed 检索",
          description: "检索并汇总 PubMed 文献。",
          category: "search",
          riskLevel: "low",
        }),
      ],
      installedSlugs: ["crispr-assistant"],
    });

    await page.goto("/chat/skills");
    await expect(page.getByRole("heading", { name: "Skills, Agent 能力扩展" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "已安装" })).toHaveClass(/border-primary/);
    await expect(page.getByText("CRISPR 助手")).toBeVisible();
    await expect(page.getByText("PubMed 检索")).toBeHidden();

    const installedCard = page.locator("article").filter({ hasText: "CRISPR 助手" });
    await expect(installedCard.getByText("低风险")).toBeVisible();
    await expect(installedCard.getByText("分析")).toBeVisible();

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("skill-01-installed.png", {
      fullPage: true,
    });

    await page.getByRole("button", { name: "未安装" }).click();
    await expect(page.getByText("PubMed 检索")).toBeVisible();
    await expect(page.getByText("CRISPR 助手")).toBeHidden();
  });

  test("SKILL-02 未安装列表与切换稳定性", async ({ page }) => {
    await mockSkillsPage(page, {
      catalog: [
        skillCatalogFixture({
          slug: "biosafety-check",
          displayName: "生物安全审查",
          description: "检查实验方案的生物安全风险。",
          category: "clinical",
          riskLevel: "high",
        }),
        skillCatalogFixture({
          slug: "primer-design",
          displayName: "引物设计",
          description: "设计并校验 PCR 引物。",
          category: "analysis",
          riskLevel: "low",
        }),
      ],
      installedSlugs: [],
    });

    await page.goto("/chat/skills");
    await expect(page.getByRole("heading", { name: "Skills, Agent 能力扩展" })).toBeVisible({ timeout: 10000 });

    const beforeWidth = await page.evaluate(() => document.documentElement.scrollWidth);

    await page.getByRole("button", { name: "未安装" }).click();
    await expect(page.getByText("生物安全审查")).toBeVisible();
    await expect(page.getByText("高风险")).toBeVisible();
    await expect(page.getByText("引物设计")).toBeVisible();

    const afterWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(afterWidth).toBeLessThanOrEqual(beforeWidth + 1);

    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("skill-02-uninstalled.png", {
      fullPage: true,
    });
  });

  test("SKILL-03 安装与卸载反馈", async ({ page }) => {
    await mockSkillsPage(page, {
      catalog: [
        skillCatalogFixture({
          slug: "wetlab-helper",
          displayName: "湿实验助手",
          description: "协助整理湿实验记录。",
          category: "analysis",
          riskLevel: "low",
        }),
      ],
      installedSlugs: ["wetlab-helper"],
    });

    await page.goto("/chat/skills");
    await expect(page.getByRole("heading", { name: "Skills, Agent 能力扩展" })).toBeVisible({ timeout: 10000 });

    const gate = createRequestGate();
    await page.route("**/api/skills/uninstall-many", async (route) => {
      try {
        await gate.waiting;
        await route.fulfill({
          status: 200,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify({ items: [] }),
        });
      } finally {
        gate.markRequestCompleted();
      }
    });

    const installedCard = page.locator("article").filter({ hasText: "湿实验助手" });
    await installedCard.hover();
    await installedCard.getByRole("button", { name: "卸载" }).click();
    await expect(installedCard.getByRole("button", { name: "处理中..." })).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("skill-03-uninstalling.png", {
      fullPage: true,
    });
    gate.releaseRequest();
    await gate.requestCompleted;
    await expect(page.getByText("湿实验助手")).toBeHidden({ timeout: 10000 });

    await page.getByRole("button", { name: "未安装" }).click();
    const uninstalledCard = page.locator("article").filter({ hasText: "湿实验助手" });
    await expect(uninstalledCard).toBeVisible();
    await uninstalledCard.hover();
    await uninstalledCard.getByRole("button", { name: "安装" }).click();
    await expect(uninstalledCard).toBeHidden({ timeout: 10000 });
  });

  test("SKILL-04 空状态与搜索无结果", async ({ page }) => {
    await mockSkillsPage(page, {
      catalog: [
        skillCatalogFixture({
          slug: "only-skill",
          displayName: "唯一技能",
          description: "唯一的技能",
          category: "analysis",
        }),
      ],
      installedSlugs: [],
    });

    await page.goto("/chat/skills");
    await expect(page.getByRole("heading", { name: "Skills, Agent 能力扩展" })).toBeVisible({ timeout: 10000 });
    await page.getByRole("button", { name: "未安装" }).click();
    await expect(page.getByText("唯一技能")).toBeVisible();

    await page.getByPlaceholder("输入关键词，查找你需要的 Skills").fill("不存在的技能");
    await expect(page.getByText("暂无匹配的 Skills")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("skill-04-empty.png", {
      fullPage: true,
    });
  });

  test("SKILL-05 加载失败与重试", async ({ page }) => {
    await mockSkillsPage(page, {
      catalog: [
        skillCatalogFixture({
          slug: "retry-skill",
          displayName: "重试技能",
          description: "重试后可见",
          category: "search",
        }),
      ],
      installedSlugs: [],
    });

    let failNext = true;
    await page.route("**/api/skills/catalog", (route) => {
      if (failNext) {
        return route.fulfill({
          status: 503,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify({
            error: { code: "SKILL_SERVICE_UNAVAILABLE", message: "Skill 服务暂时不可用，请稍后重试", requestId: "visual-test" },
          }),
        });
      }
      return route.fulfill({
        status: 200,
        contentType: "application/json; charset=utf-8",
        body: JSON.stringify({
          items: [skillCatalogFixture({ slug: "retry-skill", displayName: "重试技能", description: "重试后可见", category: "search" })],
        }),
      });
    });

    await page.goto("/chat/skills");
    await expect(page.locator("div[role=alert]:not(#__next-route-announcer__)")).toContainText("Skill 服务暂时不可用，请稍后重试");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("skill-05-load-error.png", {
      fullPage: true,
    });

    failNext = false;
    await page.getByRole("button", { name: "重新加载" }).click();
    await page.getByRole("button", { name: "未安装" }).click();
    await expect(page.getByText("重试技能")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("div[role=alert]:not(#__next-route-announcer__)")).toBeHidden();
  });

  test("SKILL-06 长列表可滚动且无横向溢出", async ({ page }) => {
    const catalog = Array.from({ length: 12 }, (_, index) =>
      skillCatalogFixture({
        slug: `skill-${index + 1}`,
        displayName: `技能 ${index + 1}`,
        description: `第 ${index + 1} 个技能的描述文本。`,
        category: index % 2 === 0 ? "analysis" : "search",
      }),
    );
    await mockSkillsPage(page, { catalog, installedSlugs: [] });

    await page.goto("/chat/skills");
    await expect(page.getByRole("heading", { name: "Skills, Agent 能力扩展" })).toBeVisible({ timeout: 10000 });
    await page.getByRole("button", { name: "未安装" }).click();
    await expect(page.getByText("技能 12")).toBeVisible();

    const metrics = await page.evaluate(() => {
      const scroller = document.querySelector(".overflow-y-scroll");
      if (!scroller) return null;
      return {
        scrollHeight: scroller.scrollHeight,
        clientHeight: scroller.clientHeight,
        scrollWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
      };
    });
    expect(metrics).not.toBeNull();
    if (metrics) {
      expect(metrics.scrollHeight).toBeGreaterThan(metrics.clientHeight);
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
    }
  });
});