import assert from "node:assert/strict";
import test from "node:test";

import {
  createProjectDocument,
  importProjectDocuments,
  markdownToKnowledgeDocument,
  uploadProjectDocumentAttachments,
  validateProjectDocumentImportFile,
} from "./project-documents";

test("project document adapter converts common markdown blocks", () => {
  const document = markdownToKnowledgeDocument(
    "# 标题\n\n正文\n\n- 列表\n- [x] 已完成\n\n```ts\nconst ok = true;\n```",
  );

  assert.equal(document.type, "kb-doc");
  assert.deepEqual(
    document.content.map((item) => item.type),
    ["heading", "paragraph", "bulletListItem", "checkListItem", "codeBlock"],
  );
  assert.equal(document.content[3]?.props?.checked, true);
});

test("project document creation uses the atomic Wiki2 project contract", async () => {
  const calls: Array<{ method: string; path: string; body?: unknown }> = [];
  const api = {
    async post<T>(path: string, body?: unknown) {
      calls.push({ method: "POST", path, body });
      return { id: "node-1" } as T;
    },
  };

  await createProjectDocument(api, {
    projectId: "project / 1",
    parentNodeId: "root-1",
    templateId: "bio-experiment-record",
    knowledgeType: "experiment_note",
    section: "experiment",
    title: "实验记录",
    markdown: "实验记录\n\n正文",
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0]?.method, "POST");
  assert.equal(calls[0]?.path, "/api/knowledge/wiki2/nodes");
  const body = calls[0]?.body as Record<string, unknown>;
  assert.equal(body.title, "实验记录");
  assert.equal(body.parentId, "root-1");
  assert.equal(body.projectId, "project / 1");
  assert.equal(body.templateId, "bio-experiment-record");
  assert.equal(body.projectKnowledgeType, "experiment_note");
  assert.equal(body.projectKnowledgeSection, "experiment");
  assert.equal(body.projectVisibility, "project_default");
  assert.equal((body.content as { type?: string }).type, "kb-doc");
});

test("project document import validates the Wiki2 recognition formats", () => {
  assert.equal(
    validateProjectDocumentImportFile(
      new File(["content"], "notes.md", { type: "text/markdown" }),
    ),
    null,
  );
  assert.equal(
    validateProjectDocumentImportFile(
      new File(["LOCUS"], "sequence.gb", { type: "text/plain" }),
    ),
    null,
  );
  assert.match(
    validateProjectDocumentImportFile(
      new File(["legacy"], "report.doc", { type: "application/msword" }),
    ) || "",
    /DOCX/,
  );
  assert.match(
    validateProjectDocumentImportFile(
      new File(["binary"], "archive.zip", { type: "application/zip" }),
    ) || "",
    /不支持/,
  );
});

test("project document import creates, uploads, registers, and queues recognition", async () => {
  const calls: Array<{ method: string; path: string; body?: unknown }> = [];
  const api = {
    async post<T>(path: string, body?: unknown) {
      calls.push({ method: "POST", path, body });
      if (path === "/api/knowledge/wiki2/nodes") {
        return { id: "node / 1" } as T;
      }
      if (path.endsWith("/attachments/presign")) {
        return {
          key: "wiki2/file.pdf",
          objectKey: "wiki2/file.pdf",
          uploadUrl: "https://storage.example/upload",
          storageUrl: "https://storage.example/file.pdf",
        } as T;
      }
      return {
        id: "attachment / 1",
        nodeId: "node / 1",
        convertStatus: path.endsWith("/convert-jobs") ? "pending" : "none",
      } as T;
    },
    async delete<T>(path: string) {
      calls.push({ method: "DELETE", path });
      return { deleted: true } as T;
    },
  };
  const uploads: Array<{ input: string; init?: RequestInit }> = [];

  const imported = await importProjectDocuments(api, {
    projectId: "project-1",
    parentNodeId: "root-1",
    files: [new File(["pdf"], "实验方案.pdf", { type: "application/pdf" })],
    fetch: async (input, init) => {
      uploads.push({ input: String(input), init });
      return new Response(null, { status: 200 });
    },
  });

  assert.equal(imported[0]?.nodeId, "node / 1");
  assert.equal(uploads[0]?.input, "https://storage.example/upload");
  assert.equal(uploads[0]?.init?.method, "PUT");
  assert.deepEqual(
    calls.map((call) => call.path),
    [
      "/api/knowledge/wiki2/nodes",
      "/api/knowledge/wiki2/nodes/node%20%2F%201/attachments/presign",
      "/api/knowledge/wiki2/nodes/node%20%2F%201/attachments",
      "/api/knowledge/wiki2/attachments/attachment%20%2F%201/convert-jobs",
    ],
  );
  assert.equal(
    (calls[3]?.body as { engine?: string }).engine,
    "docling",
  );
  assert.equal(
    (calls[3]?.body as { insertMode?: string }).insertMode,
    "replace_placeholder",
  );
  assert.equal(
    typeof (calls[3]?.body as { targetBlockId?: unknown }).targetBlockId,
    "string",
  );
});

test("project document import removes its node when upload fails", async () => {
  const deleted: string[] = [];
  const api = {
    async post<T>(path: string) {
      if (path === "/api/knowledge/wiki2/nodes") {
        return { id: "node-1" } as T;
      }
      return {
        key: "wiki2/file.pdf",
        objectKey: "wiki2/file.pdf",
        uploadUrl: "https://storage.example/upload",
        storageUrl: "https://storage.example/file.pdf",
      } as T;
    },
    async delete<T>(path: string) {
      deleted.push(path);
      return { deleted: true } as T;
    },
  };

  await assert.rejects(
    importProjectDocuments(api, {
      projectId: "project-1",
      parentNodeId: "root-1",
      files: [new File(["pdf"], "失败.pdf", { type: "application/pdf" })],
      fetch: async () => new Response(null, { status: 503 }),
    }),
    /HTTP 503/,
  );
  assert.deepEqual(deleted, ["/api/knowledge/wiki2/nodes/node-1"]);
});

test("existing document attachment upload keeps recognition out of the body", async () => {
  const calls: Array<{ path: string; body?: unknown }> = [];
  const api = {
    async post<T>(path: string, body?: unknown) {
      calls.push({ path, body });
      if (path.endsWith("/attachments/presign")) {
        return {
          key: "wiki2/result.csv",
          objectKey: "wiki2/result.csv",
          uploadUrl: "https://storage.example/upload",
          storageUrl: "https://storage.example/result.csv",
        } as T;
      }
      return {
        id: "attachment / 1",
        nodeId: "node / 1",
        originalName: "result.csv",
        mimeType: "text/csv",
        convertStatus: path.endsWith("/convert-jobs") ? "pending" : "none",
      } as T;
    },
    async delete<T>() {
      return { deleted: true } as T;
    },
  };

  await uploadProjectDocumentAttachments(api, {
    nodeId: "node / 1",
    files: [new File(["a,b\n1,2"], "result.csv", { type: "text/csv" })],
    fetch: async () => new Response(null, { status: 200 }),
  });

  assert.deepEqual(
    calls.map((call) => call.path),
    [
      "/api/knowledge/wiki2/nodes/node%20%2F%201/attachments/presign",
      "/api/knowledge/wiki2/nodes/node%20%2F%201/attachments",
      "/api/knowledge/wiki2/attachments/attachment%20%2F%201/convert-jobs",
    ],
  );
  assert.deepEqual(calls[2]?.body, {
    engine: "docling",
    insertMode: "none",
  });
});

test("project document upload reports a friendly message for HTTP 413", async () => {
  const api = {
    async post<T>(path: string) {
      if (path.endsWith("/attachments/presign")) {
        return {
          key: "wiki2/large.pdf",
          objectKey: "wiki2/large.pdf",
          uploadUrl: "https://storage.example/upload",
          storageUrl: "https://storage.example/large.pdf",
        } as T;
      }
      throw new Error(`Unexpected request: ${path}`);
    },
    async delete<T>() {
      return { deleted: true } as T;
    },
  };

  await assert.rejects(
    uploadProjectDocumentAttachments(api, {
      nodeId: "node-1",
      files: [new File(["large"], "large.pdf", { type: "application/pdf" })],
      fetch: async () => new Response(null, { status: 413 }),
    }),
    (error: unknown) =>
      error instanceof Error && error.message === "附件尺寸过大",
  );
});
