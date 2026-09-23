import { expect, test } from "@playwright/test";
import { fulfillJson, mockProjectDetailPageExtended } from "../../fixtures/pages";

test("附件入口位于正文，选择用途后才上传普通附件", async ({ page }) => {
  await mockProjectDetailPageExtended(page);
  let registrations = 0;
  page.on("request", (request) => {
    if (request.method() === "POST" && request.url().endsWith("/attachments")) registrations++;
  });
  await page.goto("/projects/proj-visual-test");
  await page.getByText("CRISPR 综述", { exact: true }).click();
  const attachments = page.locator('[aria-label="文档附件"]');
  await expect(attachments.getByRole("button", { name: "上传附件" })).toBeVisible();
  await page.getByLabel("选择文档附件").setInputFiles({ name: "实验数据.zip", mimeType: "application/zip", buffer: Buffer.from("archive") });
  const choice = page.getByRole("group", { name: "实验数据.zip 的用途" });
  await expect(choice.getByRole("button", { name: "作为附件" })).toHaveAttribute("aria-pressed", "true");
  expect(registrations).toBe(0);
  await page.getByRole("button", { name: "确认添加" }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: "visual-tests/.artifacts/document-attachment-staging.png", fullPage: true });
  await page.getByRole("button", { name: "确认添加" }).click();
  await expect(attachments.getByRole("button", { name: "下载附件 实验数据.zip" })).toBeVisible();
  expect(registrations).toBe(1);
  await expect(page.getByRole("button", { name: "编辑", exact: true })).toBeEnabled();
});

test("多文件导入可选择合并，单文件不显示合并选项", async ({ page }) => {
  await mockProjectDetailPageExtended(page);
  await page.goto("/projects/proj-visual-test");
  await page.getByRole("button", { name: "导入", exact: true }).click();
  await page.locator('input[type="file"]').setInputFiles({ name: "a.pdf", mimeType: "application/pdf", buffer: Buffer.from("a") });
  await expect(page.getByRole("radio", { name: "合并为一个文档" })).toHaveCount(0);
  await page.locator('input[type="file"]').setInputFiles({ name: "b.pdf", mimeType: "application/pdf", buffer: Buffer.from("b") });
  await expect(page.getByRole("radio", { name: "分别导入为文档" })).toBeChecked();
  await page.getByText("合并为一个文档", { exact: true }).click();
  await expect(page.getByRole("radio", { name: "合并为一个文档" })).toBeChecked();
  await page.screenshot({ path: "visual-tests/.artifacts/document-import-modes.png", fullPage: true });
});

test("重新打开的页面根据服务端识别状态锁定正文", async ({ page }) => {
  await mockProjectDetailPageExtended(page, { documentAttachments: [{
    id: "recognizing", originalName: "处理中.pdf", mimeType: "application/pdf", fileSize: 1024,
    convertStatus: "processing", convertProgress: 0.42, convertInsertMode: "replace_placeholder",
  }] });
  await page.goto("/projects/proj-visual-test");
  await page.getByText("CRISPR 综述", { exact: true }).click();
  await expect(page.getByRole("button", { name: "编辑", exact: true })).toBeDisabled();
  await expect(page.getByRole("button", { name: "上传附件", exact: true })).toBeDisabled();
  await page.reload();
  await page.getByText("CRISPR 综述", { exact: true }).click();
  await expect(page.getByRole("button", { name: "编辑", exact: true })).toBeDisabled();
});

test("有未保存修改时先保存成功，再上传附件", async ({ page }) => {
  await mockProjectDetailPageExtended(page);
  const steps: string[] = [];
  await page.route("**/api/knowledge/wiki2/nodes/kb-doc-1", async (route) => {
    if (route.request().method() !== "PUT") return route.fallback();
    steps.push("save");
    const body = route.request().postDataJSON();
    expect(body.title).toBe("上传前保存的新标题");
    return fulfillJson(route, { data: { id: "kb-doc-1", ...body } });
  });
  page.on("request", (request) => {
    if (request.method() === "POST" && request.url().endsWith("/attachments/presign")) steps.push("upload");
  });
  await page.goto("/projects/proj-visual-test");
  await page.getByText("CRISPR 综述", { exact: true }).click();
  await page.getByRole("button", { name: "编辑", exact: true }).click();
  await page.getByPlaceholder("请输入标题").fill("上传前保存的新标题");
  await page.getByLabel("选择文档附件").setInputFiles({ name: "notes.zip", mimeType: "application/zip", buffer: Buffer.from("zip") });
  await page.getByRole("button", { name: "确认添加" }).click();
  await expect(page.getByRole("button", { name: "下载附件 notes.zip" })).toBeVisible();
  expect(steps).toEqual(["save", "upload"]);
});
