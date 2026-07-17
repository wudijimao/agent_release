import assert from "node:assert/strict";
import test from "node:test";

import type {
  ChatAttachmentDto,
  ChatAttachmentPresignResponse,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  ChatAttachmentUploadError,
  deleteChatAttachment,
  listChatAttachments,
  updateChatAttachmentContext,
  uploadChatAttachment,
  uploadChatAttachments,
} from "./chat-attachments";

const attachment: ChatAttachmentDto = {
  id: "attachment-1",
  name: "notes.md",
  mimeType: "text/markdown",
  fileSize: 7,
  kind: "md",
  status: "ready",
  contextEnabled: true,
  contextDisabledAt: null,
  url: "https://storage.test/notes.md",
  createdAt: "2026-07-17T00:00:00.000Z",
  message: "已读取文件，可以提问",
};

type ApiCall = {
  method: string;
  path: string;
  body?: unknown;
  options?: RequestInit;
};

function createAttachmentApi(options: {
  presigned?: ChatAttachmentPresignResponse;
  calls: ApiCall[];
}) {
  const presigned = options.presigned ?? {
    draftId: "draft-1",
    objectKey: "drafts/draft-1/notes.md",
    uploadUrl: "https://upload.test/notes.md?signature=1",
    storageUrl: "https://storage.test/notes.md",
  };

  return {
    async post<T>(path: string, body?: unknown, requestOptions?: RequestInit) {
      options.calls.push({ method: "POST", path, body, options: requestOptions });
      return (path.endsWith("/presign") ? presigned : attachment) as T;
    },
    async get<T>(path: string, requestOptions?: RequestInit) {
      options.calls.push({ method: "GET", path, options: requestOptions });
      return { items: [attachment] } as T;
    },
    async patch<T>(path: string, body?: unknown, requestOptions?: RequestInit) {
      options.calls.push({ method: "PATCH", path, body, options: requestOptions });
      return { ...attachment, contextEnabled: false } as T;
    },
    async delete<T>(path: string, requestOptions?: RequestInit) {
      options.calls.push({ method: "DELETE", path, options: requestOptions });
      return { deleted: true } as T;
    },
  } as Pick<ApiClient, "delete" | "get" | "patch" | "post">;
}

test("uploadChatAttachment completes presign, object upload, and registration for a draft", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({ calls });
  const objectUploads: Array<{ url: string; init?: RequestInit }> = [];
  const file = new File(["# notes"], "notes.md", { type: "text/markdown" });

  const result = await uploadChatAttachment({
    api,
    file,
    fetch: async (url, init) => {
      objectUploads.push({ url: String(url), init });
      return new Response(null, { status: 200 });
    },
  });

  assert.equal(result.draftId, "draft-1");
  assert.deepEqual(result.attachment, attachment);
  assert.deepEqual(calls, [
    {
      method: "POST",
      path: "/api/chat/attachments/presign",
      body: {
        fileName: "notes.md",
        mimeType: "text/markdown",
        fileSize: 7,
      },
      options: undefined,
    },
    {
      method: "POST",
      path: "/api/chat/attachments",
      body: {
        draftId: "draft-1",
        originalName: "notes.md",
        mimeType: "text/markdown",
        fileSize: 7,
        objectKey: "drafts/draft-1/notes.md",
      },
      options: undefined,
    },
  ]);
  assert.equal(objectUploads.length, 1);
  assert.equal(objectUploads[0]?.url, "https://upload.test/notes.md?signature=1");
  assert.equal(objectUploads[0]?.init?.method, "PUT");
  assert.deepEqual(objectUploads[0]?.init?.headers, {
    "Content-Type": "text/markdown",
  });
  assert.equal(objectUploads[0]?.init?.body, file);
});

test("uploadChatAttachment invokes an injected fetch as a function, not an object method", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({ calls });
  let fetchCalled = false;

  await uploadChatAttachment({
    api,
    file: new File(["# notes"], "notes.md", { type: "text/markdown" }),
    fetch: async function (this: unknown) {
      assert.equal(this, undefined);
      fetchCalled = true;
      return new Response(null, { status: 200 });
    },
  });

  assert.equal(fetchCalled, true);
});

test("uploadChatAttachment binds uploads directly to an existing session", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({
    calls,
    presigned: {
      objectKey: "sessions/session-1/notes.md",
      uploadUrl: "https://upload.test/session-notes.md",
      storageUrl: "https://storage.test/session-notes.md",
    },
  });

  const result = await uploadChatAttachment({
    api,
    file: new File(["# notes"], "notes.md", { type: "text/markdown" }),
    scope: { sessionId: "session-1" },
    fetch: async () => new Response(null, { status: 200 }),
  });

  assert.equal(result.draftId, undefined);
  assert.deepEqual(calls[0]?.body, {
    sessionId: "session-1",
    fileName: "notes.md",
    mimeType: "text/markdown",
    fileSize: 7,
  });
  assert.deepEqual(calls[1]?.body, {
    sessionId: "session-1",
    originalName: "notes.md",
    mimeType: "text/markdown",
    fileSize: 7,
    objectKey: "sessions/session-1/notes.md",
  });
});

test("uploadChatAttachment stops before registration when object storage rejects the upload", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({ calls });

  await assert.rejects(
    uploadChatAttachment({
      api,
      file: new File(["# notes"], "notes.md", { type: "text/markdown" }),
      fetch: async () => new Response(null, { status: 503 }),
    }),
    (error: unknown) => {
      assert.ok(error instanceof ChatAttachmentUploadError);
      assert.equal(error.code, "ATTACHMENT_OBJECT_UPLOAD_FAILED");
      assert.equal(error.status, 503);
      return true;
    },
  );

  assert.equal(calls.length, 1);
  assert.equal(calls[0]?.path, "/api/chat/attachments/presign");
});

test("uploadChatAttachment rejects a new upload when the server omits its draft id", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({
    calls,
    presigned: {
      objectKey: "drafts/missing/notes.md",
      uploadUrl: "https://upload.test/notes.md",
      storageUrl: "https://storage.test/notes.md",
    },
  });
  let objectUploadCount = 0;

  await assert.rejects(
    uploadChatAttachment({
      api,
      file: new File(["# notes"], "notes.md", { type: "text/markdown" }),
      fetch: async () => {
        objectUploadCount += 1;
        return new Response(null, { status: 200 });
      },
    }),
    (error: unknown) => {
      assert.ok(error instanceof ChatAttachmentUploadError);
      assert.equal(error.code, "ATTACHMENT_DRAFT_ID_MISSING");
      return true;
    },
  );

  assert.equal(objectUploadCount, 0);
  assert.equal(calls.length, 1);
});

test("attachment management uses scoped and encoded chat endpoints", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({ calls });

  const listed = await listChatAttachments(api, { draftId: "draft/with space" });
  const updated = await updateChatAttachmentContext(api, "file/1", false);
  const deleted = await deleteChatAttachment(api, "file/1");

  assert.deepEqual(listed, { items: [attachment] });
  assert.equal(updated.contextEnabled, false);
  assert.deepEqual(deleted, { deleted: true });
  assert.deepEqual(calls, [
    {
      method: "GET",
      path: "/api/chat/attachments?draftId=draft%2Fwith+space",
      options: undefined,
    },
    {
      method: "PATCH",
      path: "/api/chat/attachments/file%2F1/context",
      body: { enabled: false },
      options: undefined,
    },
    {
      method: "DELETE",
      path: "/api/chat/attachments/file%2F1",
      options: undefined,
    },
  ]);
});

test("uploadChatAttachments carries the first draft id into later files", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({ calls });
  const files = [
    new File(["first"], "first.txt", { type: "text/plain" }),
    new File(["second"], "second.txt", { type: "text/plain" }),
  ];

  const result = await uploadChatAttachments({
    api,
    files,
    fetch: async () => new Response(null, { status: 200 }),
  });

  assert.equal(result.draftId, "draft-1");
  assert.equal(result.attachments.length, 2);
  assert.equal(result.contextRefs.length, 2);
  assert.deepEqual(calls[2]?.body, {
    draftId: "draft-1",
    fileName: "second.txt",
    mimeType: "text/plain",
    fileSize: 6,
  });
  assert.deepEqual(result.contextRefs[0], {
    type: "attachment",
    id: "attachment-1",
    title: "notes.md",
    source: "upload",
    metadata: {
      kind: "md",
      mimeType: "text/markdown",
      fileSize: 7,
    },
  });
});

test("uploadChatAttachments removes registered files when a later upload fails", async () => {
  const calls: ApiCall[] = [];
  const api = createAttachmentApi({ calls });
  let uploadCount = 0;

  await assert.rejects(
    uploadChatAttachments({
      api,
      files: [
        new File(["first"], "first.txt", { type: "text/plain" }),
        new File(["second"], "second.txt", { type: "text/plain" }),
      ],
      fetch: async () => {
        uploadCount += 1;
        return new Response(null, { status: uploadCount === 1 ? 200 : 503 });
      },
    }),
    ChatAttachmentUploadError,
  );

  assert.deepEqual(calls.at(-1), {
    method: "DELETE",
    path: "/api/chat/attachments/attachment-1",
    options: { handleUnauthorized: false },
  });
});
