import type { KbAttachment, KbNodeDetail, KbVersion } from "@bioagent/shared";
import type { ProjectDocumentPreviewViewModel } from "@bioagent/chatui";

import type { ApiClient } from "@/lib/api";
import { markdownToKnowledgeDocument } from "./project-documents";

interface ProjectDocumentDetailPayload {
  node: KbNodeDetail;
  attachments: KbAttachment[];
  versions: KbVersion[];
  pageIndex: {
    indexingEnabled: boolean;
    chunkCount: number;
    blockCount: number;
    indexedAt: string | null;
  };
}

type ProjectDocumentDetailApi = Pick<ApiClient, "get">;
type ProjectDocumentUpdateApi = Pick<ApiClient, "put">;
type ProjectDocumentDeleteApi = Pick<ApiClient, "delete">;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function inlineText(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(inlineText).join("");
  if (!isRecord(value)) return "";
  if (typeof value.text === "string") return value.text;
  if ("content" in value) return inlineText(value.content);
  if ("children" in value) return inlineText(value.children);
  return "";
}

function tableToMarkdown(value: unknown): string {
  if (!isRecord(value) || !Array.isArray(value.rows)) return "";
  const rows = value.rows
    .map((row) => {
      if (!isRecord(row) || !Array.isArray(row.cells)) return [];
      return row.cells.map((cell) =>
        inlineText(cell)
          .replace(/\|/g, "\\|")
          .replace(/\r?\n/g, "<br>")
          .trim(),
      );
    })
    .filter((row) => row.length > 0);
  if (!rows.length) return "";

  const columnCount = Math.max(...rows.map((row) => row.length));
  const normalizedRows = rows.map((row) => [
    ...row,
    ...Array.from({ length: columnCount - row.length }, () => ""),
  ]);
  const markdownRow = (row: string[]) => `| ${row.join(" | ")} |`;
  return [
    markdownRow(normalizedRows[0] ?? []),
    markdownRow(Array.from({ length: columnCount }, () => "---")),
    ...normalizedRows.slice(1).map(markdownRow),
  ].join("\n");
}

function blockToMarkdown(block: unknown): string {
  if (!isRecord(block)) return inlineText(block);

  const type = typeof block.type === "string" ? block.type : "paragraph";
  const props = isRecord(block.props) ? block.props : {};
  const text = inlineText(block.content).trim();
  const children = Array.isArray(block.children)
    ? block.children.map(blockToMarkdown).filter(Boolean).join("\n")
    : "";

  if (type === "aiRecognitionResult") {
    const recognized =
      (typeof props.markdownContent === "string" && props.markdownContent.trim()) ||
      (typeof props.summary === "string" && props.summary.trim()) ||
      text;
    return [recognized, children].filter(Boolean).join("\n\n");
  }

  let markdown = text;
  if (type === "heading") {
    const rawLevel = typeof props.level === "number" ? props.level : 1;
    markdown = `${"#".repeat(Math.min(6, Math.max(1, rawLevel)))} ${text}`;
  } else if (type === "bulletListItem") {
    markdown = `- ${text}`;
  } else if (type === "numberedListItem") {
    markdown = `1. ${text}`;
  } else if (type === "checkListItem") {
    markdown = `- [${props.checked === true ? "x" : " "}] ${text}`;
  } else if (type === "codeBlock") {
    const language =
      typeof props.language === "string" ? props.language.trim() : "";
    markdown = `\`\`\`${language}\n${text}\n\`\`\``;
  } else if (type === "quote" || type === "blockquote") {
    markdown = text
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n");
  } else if (type === "divider" || type === "horizontalRule") {
    markdown = "---";
  } else if (type === "table") {
    markdown = tableToMarkdown(block.content);
  } else if (type === "image") {
    const url =
      (typeof props.url === "string" && props.url) ||
      (typeof props.src === "string" && props.src) ||
      "";
    const caption =
      (typeof props.caption === "string" && props.caption) || text || "图片";
    markdown = url ? `![${caption}](${url})` : caption;
  }

  return [markdown, children].filter(Boolean).join("\n");
}

function markdownListKind(block: unknown) {
  if (!isRecord(block) || typeof block.type !== "string") return null;
  if (block.type === "bulletListItem") return "unordered";
  if (block.type === "checkListItem") return "task";
  if (block.type === "numberedListItem") return "ordered";
  return null;
}

export function knowledgeContentToMarkdown(
  content: unknown,
  contentText = "",
) {
  if (typeof content === "string") return content.trim() || contentText.trim();
  if (!isRecord(content)) return contentText.trim();

  const blocks = Array.isArray(content.content)
    ? content.content
    : Array.isArray(content.blocks)
      ? content.blocks
      : [];
  const markdown = blocks
    .reduce<string[]>((parts, block, index) => {
      const current = blockToMarkdown(block);
      if (!current) return parts;

      if (parts.length > 0) {
        const previousKind = markdownListKind(blocks[index - 1]);
        const currentKind = markdownListKind(block);
        parts.push(
          previousKind !== null && previousKind === currentKind
            ? "\n"
            : "\n\n",
        );
      }
      parts.push(current);
      return parts;
    }, [])
    .join("")
    .replace(/<br\s*\/?>/gi, "\n")
    .trim();
  return markdown || contentText.trim();
}

function formatFileSize(bytes?: number | null) {
  if (!bytes || bytes < 1) return "未知大小";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(bytes < 10 * 1024 * 1024 ? 1 : 0)} MB`;
}

function formatUpdatedAt(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const pad = (part: number) => String(part).padStart(2, "0");
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function mapProjectDocumentDetail(
  payload: ProjectDocumentDetailPayload,
): ProjectDocumentPreviewViewModel {
  const { pageIndex } = payload;
  const versions = [...payload.versions].sort(
    (left, right) => left.versionNumber - right.versionNumber,
  );
  const createdByName =
    versions[0]?.createdByName?.trim() || "未知成员";
  const updatedByName =
    versions.at(-1)?.createdByName?.trim() || createdByName;
  const index = !pageIndex.indexingEnabled
    ? {
        status: "disabled" as const,
        statusLabel: "索引未启用",
        detail: "当前实验室未启用知识库索引。",
      }
    : pageIndex.chunkCount > 0
      ? {
          status: "indexed" as const,
          statusLabel: "索引已完成",
          detail: `已生成 ${pageIndex.chunkCount} 个索引片段，覆盖 ${pageIndex.blockCount} 个内容块。`,
        }
      : {
          status: "pending" as const,
          statusLabel: "等待建立索引",
          detail: "正文暂未生成可检索的索引片段。",
        };

  return {
    id: payload.node.id,
    title: payload.node.title,
    markdown: knowledgeContentToMarkdown(
      payload.node.content,
      payload.node.contentText,
    ),
    createdByName,
    updatedByName,
    updatedAt: formatUpdatedAt(payload.node.updatedAt),
    canEdit:
      payload.node.effectivePermission === "edit" ||
      payload.node.effectivePermission === "admin",
    attachments: payload.attachments.map((attachment) => {
      const status =
        attachment.convertStatus === "done"
          ? ("ready" as const)
          : attachment.convertStatus === "error"
            ? ("failed" as const)
            : ("processing" as const);
      return {
        id: attachment.id,
        name: attachment.originalName,
        mimeType: attachment.mimeType,
        sizeLabel: formatFileSize(attachment.fileSize),
        status,
        statusLabel:
          status === "ready"
            ? "内容识别完成"
            : status === "failed"
              ? attachment.convertError || "内容识别失败"
              : "正在识别内容",
      };
    }),
    index,
  };
}

export async function loadProjectDocumentDetail(
  api: ProjectDocumentDetailApi,
  kbNodeId: string,
) {
  const payload = await api.get<ProjectDocumentDetailPayload>(
    `/api/knowledge/wiki2/nodes/${encodeURIComponent(kbNodeId)}`,
  );
  return mapProjectDocumentDetail(payload);
}

export async function updateProjectDocument(
  api: ProjectDocumentUpdateApi,
  input: {
    kbNodeId: string;
    title: string;
    markdown: string;
  },
) {
  return api.put<KbNodeDetail>(
    `/api/knowledge/wiki2/nodes/${encodeURIComponent(input.kbNodeId)}`,
    {
      title: input.title,
      content: markdownToKnowledgeDocument(input.markdown),
      changeSummary: "编辑项目文档",
    },
  );
}

export async function deleteProjectDocument(
  api: ProjectDocumentDeleteApi,
  kbNodeId: string,
) {
  return api.delete<{ deleted: boolean }>(
    `/api/knowledge/wiki2/nodes/${encodeURIComponent(kbNodeId)}`,
  );
}

export async function deleteProjectDocumentAttachment(
  api: ProjectDocumentDeleteApi,
  attachmentId: string,
) {
  return api.delete<{ deleted: boolean }>(
    `/api/knowledge/wiki2/attachments/${encodeURIComponent(attachmentId)}`,
  );
}

export function getProjectDocumentAttachmentUrl(attachmentId: string) {
  return `/api/knowledge/wiki2/attachments/${encodeURIComponent(attachmentId)}/file`;
}
