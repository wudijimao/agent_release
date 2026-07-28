import assert from "node:assert/strict";
import test from "node:test";

import type { KbAttachment, KbNodeDetail } from "@bioagent/shared";

import {
  deleteProjectDocumentAttachment,
  deleteProjectDocument,
  getProjectDocumentAttachmentUrl,
  knowledgeContentToMarkdown,
  loadProjectDocumentDetail,
  mapProjectDocumentDetail,
  updateProjectDocument,
} from "./project-document-detail";

const node: KbNodeDetail = {
  id: "node-1",
  labId: "lab-1",
  parentId: null,
  path: "root.node-1",
  nodeType: "document",
  title: "实验方案",
  icon: null,
  coverUrl: null,
  sortOrder: 0,
  excerpt: "",
  childCount: 0,
  effectivePermission: "edit",
  createdAt: "2026-07-20T08:00:00.000Z",
  updatedAt: "2026-07-21T09:00:00.000Z",
  contentText: "回退正文",
  content: {
    type: "kb-doc",
    version: 2,
    content: [
      { id: "h1", type: "heading", props: { level: 2 }, content: "实验目的" },
      {
        id: "p1",
        type: "paragraph",
        content: [{ type: "text", text: "验证药物响应" }],
      },
      {
        id: "r1",
        type: "aiRecognitionResult",
        props: { markdownContent: "## 识别结果\n\n| 样本 | 数值 |\n| --- | --- |\n| A | 1 |" },
      },
    ],
  },
};

const attachment: KbAttachment = {
  id: "attachment-1",
  nodeId: "node-1",
  labId: "lab-1",
  originalName: "结果.pdf",
  mimeType: "application/pdf",
  fileSize: 2048,
  storageUrl: "/api/knowledge/wiki2/attachments/attachment-1/file",
  convertStatus: "done",
  createdAt: "2026-07-21T08:30:00.000Z",
};

test("knowledge content maps standard and recognition blocks to markdown", () => {
  const markdown = knowledgeContentToMarkdown(node.content, node.contentText);
  assert.match(markdown, /^## 实验目的/);
  assert.match(markdown, /验证药物响应/);
  assert.match(markdown, /\| 样本 \| 数值 \|/);
});

test("knowledge content treats stored br tags as line breaks", () => {
  assert.equal(
    knowledgeContentToMarkdown({
      content: [
        { type: "paragraph", content: "第一行<br />第二行" },
      ],
    }),
    "第一行\n第二行",
  );
});

test("document detail mapper exposes only preview data", () => {
  const result = mapProjectDocumentDetail({
    node,
    attachments: [attachment],
    pageIndex: {
      indexingEnabled: true,
      chunkCount: 3,
      blockCount: 2,
      indexedAt: "2026-07-21T09:10:00.000Z",
    },
  });

  assert.equal(result.id, "node-1");
  assert.equal(result.canEdit, true);
  assert.equal(result.attachments[0]?.status, "ready");
  assert.equal(result.attachments[0]?.sizeLabel, "2 KB");
  assert.equal(result.index.status, "indexed");
  assert.match(result.index.detail, /3 个索引片段/);
});

test("document update sends the Wiki2 node contract", async () => {
  const calls: Array<{ path: string; body: unknown }> = [];
  await updateProjectDocument(
    {
      put: async <T>(path: string, body?: unknown) => {
        calls.push({ path, body });
        return node as T;
      },
    },
    {
      kbNodeId: "node / 1",
      title: "更新后的标题",
      markdown: "# 更新后的标题\n\n正文",
    },
  );

  assert.equal(calls[0]?.path, "/api/knowledge/wiki2/nodes/node%20%2F%201");
  const body = calls[0]?.body as {
    title: string;
    changeSummary: string;
    content: { type: string; content: Array<{ type: string; content?: string }> };
  };
  assert.equal(body.title, "更新后的标题");
  assert.equal(body.changeSummary, "编辑项目文档");
  assert.equal(body.content.type, "kb-doc");
  assert.deepEqual(
    body.content.content.map((block) => [block.type, block.content]),
    [
      ["heading", "更新后的标题"],
      ["paragraph", "正文"],
    ],
  );
});

test("document deletion uses the encoded Wiki2 node endpoint", async () => {
  let requestedPath = "";
  const result = await deleteProjectDocument(
    {
      delete: async <T>(path: string) => {
        requestedPath = path;
        return { deleted: true } as T;
      },
    },
    "node / 1",
  );

  assert.equal(requestedPath, "/api/knowledge/wiki2/nodes/node%20%2F%201");
  assert.deepEqual(result, { deleted: true });
});

test("document attachment deletion uses the encoded Wiki2 attachment endpoint", async () => {
  let requestedPath = "";
  const result = await deleteProjectDocumentAttachment(
    {
      delete: async <T>(path: string) => {
        requestedPath = path;
        return { deleted: true } as T;
      },
    },
    "attachment / 1",
  );

  assert.equal(
    requestedPath,
    "/api/knowledge/wiki2/attachments/attachment%20%2F%201",
  );
  assert.deepEqual(result, { deleted: true });
});

test("document detail loader encodes node id", async () => {
  let requestedPath = "";
  const result = await loadProjectDocumentDetail(
    {
      get: async <T>(path: string) => {
        requestedPath = path;
        return {
          node,
          attachments: [],
          pageIndex: {
            indexingEnabled: true,
            chunkCount: 0,
            blockCount: 0,
            indexedAt: null,
          },
        } as T;
      },
    },
    "node / 1",
  );

  assert.equal(requestedPath, "/api/knowledge/wiki2/nodes/node%20%2F%201");
  assert.equal(result.index.status, "pending");
  assert.equal(
    getProjectDocumentAttachmentUrl("attachment / 1"),
    "/api/knowledge/wiki2/attachments/attachment%20%2F%201/file",
  );
});
