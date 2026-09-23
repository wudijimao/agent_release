import assert from "node:assert/strict";
import test from "node:test";
import { appendProjectDocumentFiles, importMergedProjectDocument, resumeProjectDocumentImports } from "./project-document-imports";
import { updateProjectDocument } from "./project-document-detail";
import { getDocumentImportBlocks } from "./project-document-import-state";

function fixture() {
  const pending = (id: string) => ({ id: `block-${id}`, type: "convertingPlaceholder", props: { frontendManaged: true, attachmentId: id, originalName: `${id}.pdf` } });
  const payload = {
    node: { id: "node-1", title: "原文档", effectivePermission: "edit", updatedAt: "2026-09-23T01:00:00Z", content: {
      type: "kb-doc", version: 2, properties: { tags: ["保留标签"] }, content: [{ id: "original", type: "paragraph", content: "原有正文" }, pending("a"), pending("b")],
    } },
    attachments: ["a", "b"].map((id) => ({ id, originalName: `${id}.pdf`, convertStatus: "pending", convertRequestedEngine: null, lastConvertEngine: null, markdownContent: `识别结果 ${id}` })),
    versions: [], pageIndex: { indexingEnabled: true, chunkCount: 0, blockCount: 0 },
  };
  const calls: { method: string; path: string; body?: unknown }[] = [];
  const api = {
    async get<T>(path: string) { calls.push({ method: "GET", path }); return structuredClone(payload) as T; },
    async put<T>(path: string, body: unknown) { calls.push({ method: "PUT", path, body }); payload.node.content = (body as { content: typeof payload.node.content }).content; return structuredClone(payload.node) as T; },
    async post<T>(path: string, body: unknown) {
      calls.push({ method: "POST", path, body });
      const fields = body as { originalName: string; title: string; content: typeof payload.node.content };
      if (path.endsWith("convert-jobs")) {
        const attachment = payload.attachments.find((item) => path.includes(`/${item.id}/`))!;
        Object.assign(attachment, { convertRequestedEngine: "docling", convertStatus: "pending" });
        return structuredClone(attachment) as T;
      }
      if (path.endsWith("presign")) return { uploadUrl: "https://storage.test/upload", objectKey: "upload/key" } as T;
      if (path.endsWith("attachments")) {
        const attachment = { id: `upload-${payload.attachments.length}`, originalName: fields.originalName, convertStatus: "pending", convertRequestedEngine: null, lastConvertEngine: null, markdownContent: "" };
        payload.attachments.push(attachment);
        return attachment as T;
      }
      if (path.endsWith("nodes")) {
        Object.assign(payload.node, { title: fields.title, content: fields.content });
        return { id: "node-1" } as T;
      }
      throw new Error(path);
    },
    async delete<T>(path: string) { calls.push({ method: "DELETE", path }); return {} as T; },
  };
  return { payload, calls, api };
}

test("reopening queues missing recognition only, never lets workers replace document content", async () => {
  const { payload, calls, api } = fixture();
  Object.assign(payload.attachments[1], { convertRequestedEngine: "docling", convertStatus: "processing" });
  const result = await resumeProjectDocumentImports(api, "node-1");
  assert.equal(result.contentProcessing, true);
  assert.deepEqual(calls.filter((call) => call.method === "POST").map((call) => [call.path, call.body]), [
    ["/api/knowledge/wiki2/attachments/a/convert-jobs", { engine: "docling", insertMode: "none" }],
  ]);
  await resumeProjectDocumentImports(api, "node-1");
  assert.equal(calls.filter((call) => call.method === "POST").length, 1);
  assert.equal(calls.filter((call) => call.method === "PUT").length, 0);
});

test("batch results are written once in selection order, preserving original body and tags", async () => {
  const { payload, calls, api } = fixture();
  Object.assign(payload.attachments[1], { convertStatus: "done" });
  await resumeProjectDocumentImports(api, "node-1");
  assert.equal(calls.filter((call) => call.method === "PUT").length, 0);
  Object.assign(payload.attachments[0], { convertStatus: "done" });
  const result = await resumeProjectDocumentImports(api, "node-1");
  assert.equal(result.contentProcessing, false);
  assert.match(result.markdown, /原有正文[\s\S]*a\.pdf[\s\S]*识别结果 a[\s\S]*b\.pdf[\s\S]*识别结果 b/);
  assert.deepEqual(result.tags, ["保留标签"]);
  await resumeProjectDocumentImports(api, "node-1");
  assert.equal(calls.filter((call) => call.method === "PUT").length, 1);
});

test("failed recognition preserves successful results and releases the editing lock", async () => {
  const { payload, api } = fixture();
  Object.assign(payload.attachments[0], { convertStatus: "error", convertError: "格式不支持" });
  Object.assign(payload.attachments[1], { convertStatus: "done" });
  const result = await resumeProjectDocumentImports(api, "node-1");
  assert.equal(result.contentProcessing, false);
  assert.match(result.markdown, /格式不支持/);
  assert.match(result.markdown, /识别结果 b/);
});

test("a stale editor cannot save over pending imports from another page", async () => {
  const { calls, api } = fixture();
  await assert.rejects(updateProjectDocument(api, { kbNodeId: "node-1", title: "旧标题", markdown: "旧正文", tags: [] }), /正在识别/);
  assert.equal(calls.filter((call) => call.method === "PUT").length, 0);
});

test("attachment-only accepts an archive without modifying or recognizing the body", async () => {
  const { payload, api, calls } = fixture();
  payload.node.content.content.splice(1);
  await appendProjectDocumentFiles(api, { nodeId: "node-1", files: [new File(["zip"], "data.zip")], destinations: ["attachment"], fetch: async () => new Response(null, { status: 200 }) });
  assert.equal(calls.filter((call) => call.method === "PUT" || call.path.endsWith("convert-jobs")).length, 0);
  assert.equal(payload.attachments.at(-1)?.originalName, "data.zip");
});

test("merged import creates one node and persists every target before recognition starts", async () => {
  const { payload, api, calls } = fixture();
  payload.attachments.length = 0;
  await importMergedProjectDocument(api, { projectId: "project-1", parentNodeId: "root-1", files: [new File(["a"], "a.pdf", { type: "application/pdf" }), new File(["b"], "b.pdf", { type: "application/pdf" })], fetch: async () => new Response(null, { status: 200 }) });
  assert.equal(calls.filter((call) => call.method === "POST" && call.path.endsWith("nodes")).length, 1);
  assert.equal(payload.node.title, "a 等 2 个文件");
  const stored = calls.find((call) => call.method === "PUT")!;
  const storedBlocks = (stored.body as { content: { content: Array<{ type: string; props?: { attachmentId?: string } }> } }).content.content;
  assert.deepEqual(storedBlocks.filter((block) => block.type === "convertingPlaceholder").map((block) => block.props?.attachmentId), ["upload-0", "upload-1"]);
  assert.equal(calls.filter((call) => call.path.endsWith("convert-jobs")).length, 2);
  assert.ok(calls.indexOf(stored) < calls.findIndex((call) => call.path.endsWith("convert-jobs")));
});

test("a stale revision cannot overwrite completed imports", async () => {
  const { payload, api, calls } = fixture();
  payload.node.content.content.splice(1);
  await assert.rejects(updateProjectDocument(api, { kbNodeId: "node-1", title: "旧标题", markdown: "旧正文", tags: [], expectedRevision: "old-version" }), /其他页面更新/);
  assert.equal(calls.filter((call) => call.method === "PUT").length, 0);
});

test("read-only viewers observe processing without submitting jobs or writing content", async () => {
  const { payload, api, calls } = fixture();
  payload.node.effectivePermission = "read";
  const result = await resumeProjectDocumentImports(api, "node-1");
  assert.equal(result.contentProcessing, true);
  assert.equal(calls.filter((call) => call.method !== "GET").length, 0);
});

test("an ambiguous content-write failure never deletes potentially committed attachments", async () => {
  const { payload, api, calls } = fixture();
  payload.node.content.content.splice(1);
  const failingApi = { ...api, async put<T>(path: string, body: unknown): Promise<T> {
    await api.put(path, body);
    throw new Error("response lost");
  } };
  await assert.rejects(appendProjectDocumentFiles(failingApi, { nodeId: "node-1", files: [new File(["a"], "a.pdf")], destinations: ["body"], fetch: async () => new Response(null, { status: 200 }) }), /response lost/);
  assert.equal(calls.filter((call) => call.method === "DELETE").length, 0);
  assert.equal(payload.node.content.content.at(-1)?.type, "convertingPlaceholder");
});

test("legacy blocks-based documents retain existing body when appending", async () => {
  const { payload, api, calls } = fixture();
  const original = payload.node.content.content[0];
  Object.assign(payload.node, { content: { blocks: [original], properties: { tags: ["保留标签"] } } });
  assert.deepEqual(getDocumentImportBlocks(payload.node.content), [original]);
  await appendProjectDocumentFiles(api, { nodeId: "node-1", files: [new File(["a"], "a.pdf")], destinations: ["body"], fetch: async () => new Response(null, { status: 200 }) });
  const write = calls.find((call) => call.method === "PUT")!;
  const writtenBlocks = (write.body as { content: { content: unknown[] } }).content.content;
  assert.deepEqual(writtenBlocks[0], original);
  assert.equal(writtenBlocks.length, 2);
});
