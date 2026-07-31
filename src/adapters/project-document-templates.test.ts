import assert from "node:assert/strict";
import test from "node:test";

import {
  loadProjectDocumentTemplates,
  projectDocumentSectionForType,
} from "./project-document-templates";

test("project document type maps to its project section", () => {
  assert.equal(projectDocumentSectionForType("experiment_note"), "experiment");
  assert.equal(projectDocumentSectionForType("sop"), "experiment");
  assert.equal(projectDocumentSectionForType("data_source"), "data");
  assert.equal(projectDocumentSectionForType("literature_review"), "knowledge");
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
            content: [
              { type: "heading", props: { level: 2 }, content: "基本信息" },
              { type: "paragraph", content: "填写实验信息" },
            ],
          },
        },
      ] as T;
    },
  };

  const templates = await loadProjectDocumentTemplates(api);

  assert.deepEqual(calls, ["/api/knowledge/wiki2/templates"]);
  assert.equal(templates[0]?.title, "通用实验记录");
  assert.equal(templates[0]?.markdown, "## 基本信息\n\n填写实验信息");
  assert.deepEqual(templates[0]?.structure, ["基本信息", "实验结果"]);
});
