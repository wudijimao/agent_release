import { expect, test, type Locator } from "@playwright/test";

import {
  mockAiUsageReminder,
  mockAuthenticatedSession,
  mockChatHistory,
  mockProjectsBootstrap,
  waitForVisualReady,
} from "../../fixtures/network";
import {
  mockProjectDetailPageExtended,
  projectDetailFixture,
} from "../../fixtures/pages";

const CSV_BYTES = Buffer.from("a,b\n1,2\n3,4");

async function openDocumentPreview(page, options: Record<string, unknown> & { expectEdit?: boolean } = {}) {
  const expectEdit = options.expectEdit ?? true;
  await mockProjectDetailPageExtended(page, options);
  await page.goto("/projects/proj-visual-test");
  await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });
  await page.getByText("CRISPR 综述").click();
  if (expectEdit) {
    await expect(page.getByRole("button", { name: "编辑" })).toBeVisible({ timeout: 10000 });
  } else {
    await expect(page.getByText("CRISPR 技术综述").first()).toBeVisible({ timeout: 10000 });
  }
}

test.describe("正常状态 / 项目文档", () => {
  test.afterEach(async ({ page }) => {
    await page.unrouteAll({ behavior: "wait" });
    await page.context().clearCookies();
  });

  test("DOC-01 文档详情展示面包屑与元信息", async ({ page }) => {
    await openDocumentPreview(page);
    await expect(page.getByText("项目", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("视觉测试项目", { exact: true })).toBeVisible();
    await expect(page.getByText("CRISPR 综述", { exact: true }).last()).toBeVisible();
    await expect(page.getByText("创建人: 视觉测试员")).toBeVisible();
    await expect(page.getByText("最近修改: 视觉测试员")).toBeVisible();
    await expect(page.getByText("索引已完成")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-01-detail.png", { fullPage: true });
  });

  test("DOC-02 Markdown 正文渲染标题、段落、链接、引用与代码", async ({ page }) => {
    await openDocumentPreview(page);
    await expect(page.getByRole("heading", { name: "CRISPR 技术综述" })).toBeVisible();
    await expect(page.getByText("CRISPR-Cas9 是一种强大的基因编辑工具。")).toBeVisible();
    await expect(page.getByText("访问 示例链接 了解更多。")).toBeVisible();
    await expect(page.getByText("引用：基因组编辑的未来在于精确与安全。")).toBeVisible();
    await expect(page.getByText("def edit(gene):").first()).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-02-markdown.png", { fullPage: true });
  });

  test("DOC-03 列表与表格渲染", async ({ page }) => {
    await openDocumentPreview(page);
    await expect(page.getByText("无序项 A")).toBeVisible();
    await expect(page.getByText("有序项 1")).toBeVisible();
    await expect(page.getByText("任务项完成")).toBeVisible();
    await expect(page.getByText("CRISPR", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("TALEN", { exact: true }).first()).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-03-lists-table.png", { fullPage: true });
  });

  test("DOC-04 附件状态与空状态", async ({ page }) => {
    await openDocumentPreview(page, {
      documentAttachments: [
        {
          id: "att-1",
          labId: "lab-visual-test",
          nodeId: "kb-doc-1",
          originalName: "实验数据.csv",
          mimeType: "text/csv",
          fileSize: 2048,
          convertStatus: "done",
          createdAt: "2025-06-01T00:00:00.000Z",
        },
        {
          id: "att-2",
          labId: "lab-visual-test",
          nodeId: "kb-doc-1",
          originalName: "凝胶图.png",
          mimeType: "image/png",
          fileSize: 4096,
          convertStatus: "processing",
          createdAt: "2025-06-01T00:00:00.000Z",
        },
      ],
    });
    await expect(page.getByText("附件", { exact: true })).toBeVisible();
    await expect(page.getByText("实验数据.csv")).toBeVisible();
    await expect(page.locator('[title="内容识别完成"]')).toBeVisible();
    await expect(page.getByText("凝胶图.png")).toBeVisible();
    await expect(page.locator('[title="正在识别内容"]')).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-04-attachments.png", { fullPage: true });

    // 空状态
    await mockProjectDetailPageExtended(page, { documentAttachments: [] });
    await page.goto("/projects/proj-visual-test");
    await page.getByText("CRISPR 综述").click();
    await expect(page.getByText("附件", { exact: true })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("暂无附件")).toBeVisible();
  });

  test("DOC-05 编辑默认态标题与正文分离", async ({ page }) => {
    await openDocumentPreview(page);
    const previewBodyLeft = await page
      .locator(".auto-hide-scrollbar h1")
      .first()
      .evaluate((element) => {
        const range = document.createRange();
        range.selectNodeContents(element);
        return range.getBoundingClientRect().left;
      });
    await page.getByRole("button", { name: "编辑" }).click();
    const editor = page.locator('section[aria-label="项目文档编辑器"]');
    await expect(editor).toBeVisible();
    await expect(page.getByLabel("文档标题")).toHaveValue("CRISPR 综述");
    const editorBody = page.locator(".ProseMirror").first();
    await expect(editorBody).toBeVisible();
    const editorBodyLeft = await editorBody
      .locator(":scope > h1")
      .first()
      .evaluate((element) => {
        const range = document.createRange();
        range.selectNodeContents(element);
        return range.getBoundingClientRect().left;
      });
    expect(editorBodyLeft).toBe(previewBodyLeft);
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-05-editor.png", { fullPage: true });
  });

  test("DOC-05A 上传按钮不改变附件内容高度", async ({ page }) => {
    await openDocumentPreview(page, {
      documentAttachments: [
        {
          id: "att-layout",
          labId: "lab-visual-test",
          nodeId: "kb-doc-1",
          originalName: "实验数据.csv",
          mimeType: "text/csv",
          fileSize: 2048,
          convertStatus: "done",
          createdAt: "2025-06-01T00:00:00.000Z",
        },
      ],
    });
    const previewAttachmentTitleTop = await page
      .getByText("附件", { exact: true })
      .evaluate((element) => element.getBoundingClientRect().top);
    const previewAttachmentContentTop = await page
      .getByText("实验数据.csv", { exact: true })
      .evaluate((element) => element.getBoundingClientRect().top);

    await page.getByRole("button", { name: "编辑" }).click();
    const attachment = page.getByText("实验数据.csv", { exact: true });
    const editorAttachmentContentTop = await attachment.evaluate(
      (element) => element.getBoundingClientRect().top,
    );

    const attachmentTitleRect = await page
      .getByText("附件", { exact: true })
      .evaluate((element) => {
        const { top, left, right } = element.getBoundingClientRect();
        return { top, left, right };
      });
    expect(editorAttachmentContentTop - attachmentTitleRect.top).toBe(
      previewAttachmentContentTop - previewAttachmentTitleTop,
    );
    const uploadButtonRect = await page
      .getByRole("button", { name: "上传附件" })
      .evaluate((element) => {
        const { top, left, right } = element.getBoundingClientRect();
        return { top, left, right };
      });
    expect(uploadButtonRect.top).toBe(attachmentTitleRect.top);
    expect(uploadButtonRect.left).toBeGreaterThan(attachmentTitleRect.right);
  });

  test("DOC-06 悬浮加号弹出当前块菜单", async ({ page }) => {
    await openDocumentPreview(page);
    await page.getByRole("button", { name: "编辑" }).click();
    const editor = page.locator(".ProseMirror").first();
    const firstHeading = editor.locator(":scope > h1").first();
    const firstHeadingText = (await firstHeading.textContent()) ?? "";
    await firstHeading.hover();
    const addButton = page
      .locator(".milkdown-block-handle .operation-item:first-child")
      .first();
    await expect(addButton).toBeVisible();
    await addButton.hover();
    const blockMenu = page.locator('.milkdown-slash-menu[data-show="true"]');
    await expect(blockMenu.getByText("H1", { exact: true })).toBeVisible({ timeout: 5000 });
    const paragraphOption = blockMenu
      .locator("svg.chatui-document-menu-type-paragraph")
      .locator("xpath=ancestor::li");
    await expect(paragraphOption).toBeVisible();
    const blockHandle = page.locator('.milkdown-block-handle[data-chatui-menu-open="true"]');
    await expect(blockHandle).toBeVisible();
    await expect(blockMenu).toHaveAttribute(
      "data-chatui-placement",
      /^(left|top|bottom)$/,
    );

    const paragraphCountAfterHover = await editor.locator(":scope > p").count();
    await addButton.click();
    await expect(blockMenu).toBeVisible();
    await expect(blockHandle).toBeVisible();
    await expect(editor.locator(":scope > p")).toHaveCount(paragraphCountAfterHover);
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-06-block-menu.png", { fullPage: true });

    const headingCount = await editor.locator(":scope > h1").count();
    await paragraphOption.click();
    await expect(editor.locator(":scope > h1")).toHaveCount(headingCount - 1);
    const convertedParagraph = editor
      .locator(":scope > p")
      .filter({ hasText: firstHeadingText })
      .first();
    await convertedParagraph.hover();
    await addButton.hover();
    await expect(blockMenu).toBeVisible();
    await expect(paragraphOption).toBeHidden();
  });

  test("DOC-06A 选中文本菜单使用正文颜色", async ({ page }) => {
    await openDocumentPreview(page);
    await page.getByRole("button", { name: "编辑" }).click();
    const paragraph = page.locator(".ProseMirror > p").first();
    await paragraph.click();
    await page.keyboard.press("Home");
    await page.keyboard.press("Shift+End");

    const toolbar = page.locator('.milkdown-toolbar[data-show="true"]');
    await expect(toolbar).toBeVisible();
    const iconColor = await toolbar
      .locator(".toolbar-item svg")
      .first()
      .evaluate((element) => getComputedStyle(element).color);
    expect(iconColor).toBe("rgb(31, 31, 31)");
  });

  test("DOC-06B 选中文本菜单可切换当前块类型", async ({ page }) => {
    await openDocumentPreview(page);
    await page.getByRole("button", { name: "编辑" }).click();
    const paragraph = page.locator(".ProseMirror > p").first();
    const paragraphText = await paragraph.innerText();
    await paragraph.click();
    await page.keyboard.press("Home");
    await page.keyboard.press("Shift+End");

    const toolbar = page.locator('.milkdown-toolbar[data-show="true"]');
    await expect(toolbar).toBeVisible();
    const blockTypeTrigger = toolbar.locator(
      ".chatui-selection-block-type-trigger",
    );
    await expect(blockTypeTrigger).toBeVisible();
    await expect(toolbar.locator(".toolbar-item").first()).toHaveClass(
      /chatui-selection-block-type-trigger/,
    );
    await expect(blockTypeTrigger.getByText("T", { exact: true })).toBeVisible();
    await expect(
      toolbar.locator(".chatui-selection-block-type-trigger"),
    ).toHaveCount(1);

    await blockTypeTrigger.hover();
    const blockTypeMenu = page.locator(
      '.chatui-selection-block-type-menu[data-show="true"]',
    );
    await expect(blockTypeMenu).toBeVisible();
    await expect(blockTypeMenu).toHaveAttribute(
      "data-placement",
      /^(top|bottom)$/,
    );
    for (const label of [
      "正文",
      "一级标题",
      "二级标题",
      "三级标题",
      "无序列表",
      "有序列表",
      "任务列表",
      "引用",
      "代码块",
    ]) {
      await expect(blockTypeMenu.getByRole("menuitem", { name: label })).toBeVisible();
    }

    const activeParagraphButton = blockTypeMenu.locator(
      '[data-block-type="paragraph"]',
    );
    await expect(activeParagraphButton).toHaveAttribute("data-active", "true");
    const activeColors = await activeParagraphButton.evaluate((element) => {
      return {
        background: getComputedStyle(element).backgroundColor,
        color: getComputedStyle(element).color,
      };
    });
    expect(activeColors).toEqual({
      background: "rgb(232, 247, 242)",
      color: "rgb(20, 184, 134)",
    });
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-06b-selection-type-menu.png", {
      fullPage: true,
    });
    await blockTypeMenu.locator('[data-block-type="h2"]').click();

    await expect(page.locator(".ProseMirror > h2").filter({ hasText: paragraphText })).toBeVisible();
  });

  test("DOC-06C 块类型菜单可切换列表引用和代码块", async ({ page }) => {
    await openDocumentPreview(page);
    await page.getByRole("button", { name: "编辑" }).click();
    const editor = page.locator(".ProseMirror").first();
    const originalText = await editor.locator(":scope > p").first().innerText();

    const switchType = async (block: Locator, key: string) => {
      await block.click();
      await page.keyboard.press("Home");
      await page.keyboard.press("Shift+End");
      const toolbar = page.locator('.milkdown-toolbar[data-show="true"]');
      await expect(toolbar).toBeVisible();
      await toolbar.locator(".chatui-selection-block-type-trigger").hover();
      const menu = page.locator(
        '.chatui-selection-block-type-menu[data-show="true"]',
      );
      await expect(menu).toBeVisible();
      await menu.locator(`[data-block-type="${key}"]`).click();
    };

    await switchType(editor.locator(":scope > p").first(), "bullet-list");
    await expect(editor.locator("ul").filter({ hasText: originalText })).toBeVisible();
    await switchType(editor.locator("ul p").filter({ hasText: originalText }), "paragraph");

    await switchType(editor.locator(":scope > p").filter({ hasText: originalText }), "ordered-list");
    await expect(editor.locator("ol").filter({ hasText: originalText })).toBeVisible();
    await switchType(editor.locator("ol p").filter({ hasText: originalText }), "paragraph");

    await switchType(editor.locator(":scope > p").filter({ hasText: originalText }), "task-list");
    await expect(editor.locator(".label.unchecked")).toBeVisible();
    await switchType(editor.locator("ul p").filter({ hasText: originalText }), "paragraph");

    await switchType(editor.locator(":scope > p").filter({ hasText: originalText }), "quote");
    await expect(editor.locator("blockquote").filter({ hasText: originalText })).toBeVisible();
    await switchType(editor.locator("blockquote p").filter({ hasText: originalText }), "paragraph");

    await switchType(editor.locator(":scope > p").filter({ hasText: originalText }), "code");
    await expect(
      editor.locator(".milkdown-code-block").filter({ hasText: originalText }),
    ).toBeVisible();
  });

  test("DOC-07 停止输入后自动保存", async ({ page }) => {
    await openDocumentPreview(page);
    const putRequests: string[] = [];
    page.on("request", (request) => {
      if (request.method() === "PUT" && request.url().includes("/api/knowledge/wiki2/nodes/kb-doc-1")) {
        putRequests.push(request.url());
      }
    });

    await page.getByRole("button", { name: "编辑" }).click();
    await page.getByLabel("文档标题").fill("自动保存标题");
    await expect
      .poll(() => putRequests.length, { timeout: 8000 })
      .toBeGreaterThan(0);
    await expect(page.getByRole("button", { name: "保存" })).toBeVisible();
  });

  test("DOC-08 新建文档进入编辑器", async ({ page }) => {
    await mockProjectDetailPageExtended(page);
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("main").getByRole("button", { name: "新建" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("新建文档");
    await expect(dialog).toContainText("空白文档");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-08-create-modal.png", { fullPage: true });

    await dialog.getByRole("button", { name: "继续编辑" }).click();
    const editor = page.locator('section[aria-label="项目文档编辑器"]');
    await expect(editor).toBeVisible({ timeout: 10000 });
    await expect(page.getByLabel("文档标题")).toHaveValue("");
  });

  test("DOC-09 导入文档上传与识别进度", async ({ page }) => {
    await mockProjectDetailPageExtended(page);
    await page.goto("/projects/proj-visual-test");
    await expect(page.getByRole("heading", { name: "视觉测试项目" })).toBeVisible({ timeout: 10000 });

    await page.getByRole("main").getByRole("button", { name: "导入" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("导入文档");
    await dialog.locator('input[type="file"]').setInputFiles({
      name: "protocol.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 fake"),
    });
    await dialog.getByRole("button", { name: "导入" }).click();
    await expect(page.getByText("文档已导入，正在后台识别内容")).toBeVisible({ timeout: 10000 });
  });

  test("DOC-10 编辑附件上传与展示", async ({ page }) => {
    await openDocumentPreview(page);
    await page.getByRole("button", { name: "编辑" }).click();
    await page.getByRole("button", { name: "上传附件" }).click();
    const fileInput = page.locator('section[aria-label="项目文档编辑器"] input[type="file"]');
    await fileInput.setInputFiles({
      name: "实验数据.csv",
      mimeType: "text/csv",
      buffer: CSV_BYTES,
    });
    await expect(page.getByText("实验数据.csv")).toBeVisible({ timeout: 10000 });
  });

  test("DOC-11 只读用户不展示编辑删除按钮", async ({ page }) => {
    await openDocumentPreview(page, { canEditDocument: false, expectEdit: false });
    await expect(page.getByRole("button", { name: "编辑" })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "删除" })).toHaveCount(0);
    await expect(page.getByText("CRISPR 技术综述").first()).toBeVisible();
  });

  test("DOC-12 删除确认并返回项目", async ({ page }) => {
    await openDocumentPreview(page);
    await page.getByRole("button", { name: "删除" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("删除文档");
    await expect(dialog).toContainText("删除文档后将不可恢复，确认删除当前文档吗？");
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-12-delete.png", { fullPage: true });

    await dialog.getByRole("button", { name: "删除" }).click();
    await expect(page.getByText("视觉测试项目", { exact: true })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("文档已删除")).toBeVisible({ timeout: 10000 });
  });

  test("DOC-13 空正文与未启用索引状态", async ({ page }) => {
    // 空正文 + 未启用索引
    await openDocumentPreview(page, {
      indexState: "disabled",
      document: {
        node: {
          id: "kb-doc-1",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "文献/空文档",
          nodeType: "document",
          title: "空文档",
          sortOrder: 0,
          excerpt: "",
          childCount: 0,
          effectivePermission: "edit",
          createdBy: "u-visual-test",
          updatedBy: "u-visual-test",
          createdAt: "2025-05-01T00:00:00.000Z",
          updatedAt: "2025-06-01T00:00:00.000Z",
          content: null,
          contentText: "",
        },
        attachments: [],
        versions: [
          { id: "v-1", nodeId: "kb-doc-1", versionNumber: 1, content: {}, contentText: "", createdBy: "u-visual-test", createdByName: "视觉测试员", createdAt: "2025-05-01T00:00:00.000Z" },
        ],
        pageIndex: { indexingEnabled: false, chunkCount: 0, blockCount: 0, indexedAt: null },
      },
    });
    await expect(page.getByText("空文档", { exact: true }).last()).toBeVisible();
    await expect(page.getByText("索引未启用")).toBeVisible();
    await waitForVisualReady(page);
    await expect(page).toHaveScreenshot("doc-13-empty-disabled.png", { fullPage: true });

    // 等待建立索引
    await openDocumentPreview(page, { indexState: "enabled-pending" });
    await expect(page.getByText("等待建立索引")).toBeVisible({ timeout: 10000 });
  });

  test("DOC-14 超长文档可滚动且无横向溢出", async ({ page }) => {
    const longParagraph = "这是一段用于验证长文档滚动与表格不溢出的文本内容。".repeat(60);
    const rows = Array.from({ length: 12 }, (_, index) => ({ cells: [{ text: `列A${index + 1}` }, { text: `列B${index + 1}` }, { text: `列C${index + 1}` }] }));
    await openDocumentPreview(page, {
      document: {
        node: {
          id: "kb-doc-1",
          labId: "lab-visual-test",
          parentId: "kb-root-visual",
          path: "文献/超长文档",
          nodeType: "document",
          title: "超长文档",
          sortOrder: 0,
          excerpt: "",
          childCount: 0,
          effectivePermission: "edit",
          createdBy: "u-visual-test",
          updatedBy: "u-visual-test",
          createdAt: "2025-05-01T00:00:00.000Z",
          updatedAt: "2025-06-01T00:00:00.000Z",
          content: {
            content: [
              { type: "heading", props: { level: 1 }, content: [{ text: "超长文档" }] },
              { type: "paragraph", content: [{ text: longParagraph }] },
              {
                type: "table",
                content: { rows: [{ cells: [{ text: "A" }, { text: "B" }, { text: "C" }] }, ...rows] },
              },
              { type: "paragraph", content: [{ text: longParagraph }] },
            ],
          },
          contentText: longParagraph,
        },
        attachments: [],
        versions: [
          { id: "v-1", nodeId: "kb-doc-1", versionNumber: 1, content: {}, contentText: "", createdBy: "u-visual-test", createdByName: "视觉测试员", createdAt: "2025-05-01T00:00:00.000Z" },
        ],
        pageIndex: { indexingEnabled: true, chunkCount: 1, blockCount: 2, indexedAt: "2025-06-01T00:00:00.000Z" },
      },
    });
    await expect(page.getByRole("heading", { name: "超长文档" }).first()).toBeVisible();
    await waitForVisualReady(page);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
    await expect(page).toHaveScreenshot("doc-14-long.png", { fullPage: true });
  });
});
