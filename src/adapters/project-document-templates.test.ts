import assert from "node:assert/strict";
import test from "node:test";

import {
  createProjectDocumentTemplate,
  createProjectDocumentTemplateFromContent,
  deleteProjectDocumentTemplate,
  loadProjectDocumentTemplates,
  PROJECT_DOCUMENT_TYPE_OPTIONS,
  projectDocumentSectionForType,
  updateProjectDocumentTemplate,
} from "./project-document-templates";

test("new document picker exposes only the supported document labels", () => {
  assert.deepEqual(
    PROJECT_DOCUMENT_TYPE_OPTIONS.map(({ value, label }) => ({ value, label })),
    [
      { value: "literature", label: "文献" },
      { value: "experiment_note", label: "实验记录" },
      { value: "experiment_plan", label: "实验方案" },
      { value: "protocol", label: "Protocol" },
      { value: "sop", label: "SOP" },
      { value: "work_summary", label: "工作总结" },
    ],
  );
});

test("project document type maps to its project section", () => {
  assert.equal(projectDocumentSectionForType("experiment_note"), "experiment");
  assert.equal(projectDocumentSectionForType("sop"), "experiment");
  assert.equal(projectDocumentSectionForType("data_source"), "data");
  assert.equal(projectDocumentSectionForType("literature_review"), "knowledge");
});

test("custom document templates serialize markdown content", async () => {
  const calls: Array<[string, unknown]> = [];
  const api = {
    async get<T>() {
      return [] as T;
    },
    async post<T>(path: string, body: unknown) {
      calls.push([path, body]);
      return { id: "template-2", name: "复盘模板" } as T;
    },
  };

  await createProjectDocumentTemplateFromContent(api, {
    name: "复盘模板",
    description: "团队复盘",
    markdown: "## 结论\n\n填写结论",
  });

  assert.equal(calls[0]?.[0], "/api/knowledge/wiki2/templates");
  const body = calls[0]?.[1] as { content?: { content?: unknown[] } };
  assert.equal(body.content?.content?.length, 2);
});

test("project document template creation copies an existing document", async () => {
  const calls: Array<[string, unknown]> = [];
  const api = {
    async get<T>() {
      return [] as T;
    },
    async post<T>(path: string, body: unknown) {
      calls.push([path, body]);
      return { id: "template-1", name: "EGFR 方案" } as T;
    },
  };

  const created = await createProjectDocumentTemplate(api, {
    sourceNodeId: "node-1",
    name: "  EGFR 方案  ",
  });

  assert.equal(created.id, "template-1");
  assert.deepEqual(calls, [
    [
      "/api/knowledge/wiki2/templates",
      {
        sourceNodeId: "node-1",
        name: "EGFR 方案",
        title: "EGFR 方案",
        description: "由项目文档保存",
      },
    ],
  ]);
});

test("project document templates keep metadata and expose editable markdown", async () => {
  const calls: string[] = [];
  const api = {
    async get<T>(path: string) {
      calls.push(path);
      return [
        {
          id: "experiment-record",
          name: "实验记录",
          description: "记录实验过程",
          title: "通用实验记录",
          source: "system",
          structure: ["基本信息", "实验结果"],
          content: {
            type: "kb-doc",
            properties: { tags: ["experiment", "record"] },
            content: [
              { type: "heading", props: { level: 2 }, content: "基本信息" },
              { type: "paragraph", content: "填写实验信息" },
            ],
          },
        },
      ] as T;
    },
  };

  const templates = await loadProjectDocumentTemplates(api, "user-1");

  assert.deepEqual(calls, ["/api/knowledge/wiki2/templates"]);
  assert.equal(templates[0]?.title, "通用实验记录");
  assert.equal(templates[0]?.markdown, "## 基本信息\n\n填写实验信息");
  assert.deepEqual(templates[0]?.tags, ["experiment", "record"]);
  assert.deepEqual(templates[0]?.structure, ["基本信息", "实验结果"]);
});

test("personal templates are merged with system templates and sorted by creation time", async () => {
  const api = {
    async get<T>() {
      return [
        {
          id: "blank",
          name: "空白页",
          description: "",
          title: "",
          source: "system",
          content: {},
        },
        {
          id: "system-template",
          name: "系统模板",
          description: "",
          title: "系统模板",
          source: "system",
          content: {},
        },
        {
          id: "older-workspace-template",
          name: "较早模板",
          description: "",
          title: "较早模板",
          source: "workspace",
          createdBy: "user-1",
          createdAt: "2026-08-19T00:00:00.000Z",
          content: {},
        },
        {
          id: "newer-workspace-template",
          name: "较新模板",
          description: "",
          title: "较新模板",
          source: "workspace",
          createdBy: "user-1",
          createdAt: "2026-08-20T00:00:00.000Z",
          content: {},
        },
        {
          id: "other-member-template",
          name: "其他成员模板",
          description: "",
          title: "其他成员模板",
          source: "workspace",
          createdBy: "user-2",
          createdAt: "2026-08-21T00:00:00.000Z",
          content: {},
        },
      ] as T;
    },
  };

  const templates = await loadProjectDocumentTemplates(api, "user-1");

  assert.deepEqual(
    templates.map((template) => template.id),
    ["blank", "newer-workspace-template", "older-workspace-template", "system-template"],
  );
  assert.equal(templates[1]?.scope, "personal");
  assert.equal(templates[1]?.createdByName, "我");
  assert.equal(templates[3]?.scope, undefined);
  assert.equal(templates[3]?.createdByName, "系统");
});

test("workspace template mutations use encoded template endpoints", async () => {
  const calls: Array<{ method: string; path: string; body?: unknown }> = [];
  const api = {
    async patch<T>(path: string, body: unknown) {
      calls.push({ method: "PATCH", path, body });
      return { id: "template / 1", name: "新名称" } as T;
    },
    async delete<T>(path: string) {
      calls.push({ method: "DELETE", path });
      return { deleted: true } as T;
    },
  };

  await updateProjectDocumentTemplate(api, "template / 1", {
    name: "  新名称  ",
    markdown: "## 新正文\n\n内容",
  });
  await deleteProjectDocumentTemplate(api, "template / 1");

  assert.equal(calls[0]?.method, "PATCH");
  assert.equal(
    calls[0]?.path,
    "/api/knowledge/wiki2/templates/template%20%2F%201",
  );
  const updateBody = calls[0]?.body as {
    name?: string;
    title?: string;
    content?: { type?: string; content?: unknown[] };
  };
  assert.equal(updateBody.name, "新名称");
  assert.equal(updateBody.title, "新名称");
  assert.equal(updateBody.content?.type, "kb-doc");
  assert.equal(updateBody.content?.content?.length, 2);
  assert.deepEqual(calls[1], {
    method: "DELETE",
    path: "/api/knowledge/wiki2/templates/template%20%2F%201",
  });
});
