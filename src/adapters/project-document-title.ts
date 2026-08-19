export const PROJECT_DOCUMENT_UNTITLED_TITLE = "未命名文档";

export function projectDocumentTitleForSave(title: string) {
  return title.trim() || PROJECT_DOCUMENT_UNTITLED_TITLE;
}

export function projectDocumentTitleForEdit(title: string) {
  return title.trim() === PROJECT_DOCUMENT_UNTITLED_TITLE ? "" : title;
}
