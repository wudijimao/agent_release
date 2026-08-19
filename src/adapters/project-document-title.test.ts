import assert from "node:assert/strict";
import test from "node:test";

import {
  PROJECT_DOCUMENT_UNTITLED_TITLE,
  projectDocumentTitleForEdit,
  projectDocumentTitleForSave,
} from "./project-document-title";

test("empty document titles use the server-compatible placeholder", () => {
  assert.equal(projectDocumentTitleForSave("  "), PROJECT_DOCUMENT_UNTITLED_TITLE);
  assert.equal(projectDocumentTitleForSave("  实验方案  "), "实验方案");
});

test("the untitled placeholder is hidden only when preparing an editor title", () => {
  assert.equal(projectDocumentTitleForEdit(PROJECT_DOCUMENT_UNTITLED_TITLE), "");
  assert.equal(projectDocumentTitleForEdit("  未命名文档  "), "");
  assert.equal(projectDocumentTitleForEdit("实验方案"), "实验方案");
});
