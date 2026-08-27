import type {
  KbTemplate,
  ProjectKnowledgeSection,
  ProjectKnowledgeType,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";
import { knowledgeContentToMarkdown } from "./project-document-detail";
import { markdownToKnowledgeDocument } from "./project-documents";

type ProjectDocumentTemplateReadApi = Pick<ApiClient, "get">;
type ProjectDocumentTemplateCreateApi = Pick<ApiClient, "post">;
type ProjectDocumentTemplateUpdateApi = Pick<ApiClient, "patch">;
type ProjectDocumentTemplateDeleteApi = Pick<ApiClient, "delete">;

export const PROJECT_DOCUMENT_TEMPLATE_DELETED_EVENT =
  "bioagent:project-document-template-deleted";

function readTemplateTags(content: unknown): string[] {
  if (!content || typeof content !== "object" || Array.isArray(content)) {
    return [];
  }
  const properties = (content as { properties?: unknown }).properties;
  if (
    !properties ||
    typeof properties !== "object" ||
    Array.isArray(properties)
  ) {
    return [];
  }
  const tags = (properties as { tags?: unknown }).tags;
  if (!Array.isArray(tags)) return [];
  return tags.filter(
    (tag): tag is string => typeof tag === "string" && Boolean(tag.trim()),
  );
}

export interface ProjectDocumentTemplate {
  id: string;
  name: string;
  description: string;
  icon?: string;
  title: string;
  source?: "system" | "workspace";
  category?: string;
  structure?: string[];
  markdown: string;
  tags: string[];
  scope?: "personal";
  createdByName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const PROJECT_DOCUMENT_TYPE_OPTIONS: Array<{
  value: ProjectKnowledgeType;
  label: string;
  description: string;
}> = [
  { value: "literature", label: "文献", description: "论文、专利及其他参考资料" },
  { value: "experiment_note", label: "实验记录", description: "实验过程、参数、结果与结论" },
  { value: "experiment_plan", label: "实验方案", description: "实验目标、设计与执行计划" },
  { value: "protocol", label: "Protocol", description: "可复用的实验操作流程" },
  { value: "sop", label: "SOP", description: "标准作业程序与质量规范" },
  { value: "work_summary", label: "工作总结", description: "阶段进展、周报与复盘总结" },
];

export function projectDocumentSectionForType(
  knowledgeType: ProjectKnowledgeType,
): ProjectKnowledgeSection {
  if (
    knowledgeType === "experiment_note" ||
    knowledgeType === "experiment_plan" ||
    knowledgeType === "protocol" ||
    knowledgeType === "sop"
  ) {
    return "experiment";
  }
  if (knowledgeType === "data_source" || knowledgeType === "analysis_report") {
    return "data";
  }
  return "knowledge";
}

export async function loadProjectDocumentTemplates(
  api: ProjectDocumentTemplateReadApi,
  currentUserId: string,
): Promise<ProjectDocumentTemplate[]> {
  const templates = await api.get<KbTemplate[]>(
    "/api/knowledge/wiki2/templates",
  );
  return templates
    .filter(
      (template) =>
        template.source === "system" || template.createdBy === currentUserId,
    )
    .map((template) => ({
      id: template.id,
      name: template.name,
      description: template.description,
      icon: template.icon,
      title: template.title,
      source: template.source,
      category: template.category,
      structure: template.structure,
      markdown: knowledgeContentToMarkdown(template.content),
      tags: readTemplateTags(template.content),
      scope: template.source === "workspace" ? ("personal" as const) : undefined,
      createdByName: template.source === "system" ? "系统" : "我",
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    }))
    .sort((left, right) => {
      if (left.id === "blank" || right.id === "blank") {
        return left.id === "blank" ? -1 : 1;
      }
      if (left.source !== right.source) {
        return left.source === "workspace" ? -1 : 1;
      }
      if (left.source !== "workspace") return 0;
      const rightTime = Date.parse(right.createdAt || right.updatedAt || "") || 0;
      const leftTime = Date.parse(left.createdAt || left.updatedAt || "") || 0;
      return rightTime - leftTime;
    });
}

export async function createProjectDocumentTemplate(
  api: ProjectDocumentTemplateCreateApi,
  input: {
    sourceNodeId: string;
    name: string;
    description?: string;
  },
): Promise<KbTemplate> {
  const name = input.name.trim();
  if (!name) throw new Error("模板名称不能为空");

  return api.post<KbTemplate>("/api/knowledge/wiki2/templates", {
    sourceNodeId: input.sourceNodeId,
    name,
    title: name,
    description: input.description?.trim() || "由项目文档保存",
  });
}

export async function createProjectDocumentTemplateFromContent(
  api: ProjectDocumentTemplateCreateApi,
  input: {
    name: string;
    description?: string;
    markdown: string;
  },
): Promise<KbTemplate> {
  const name = input.name.trim();
  if (!name) throw new Error("模板名称不能为空");

  return api.post<KbTemplate>("/api/knowledge/wiki2/templates", {
    name,
    title: name,
    description: input.description?.trim() || "个人自定义文档模板",
    content: markdownToKnowledgeDocument(input.markdown),
  });
}

export async function updateProjectDocumentTemplate(
  api: ProjectDocumentTemplateUpdateApi,
  templateId: string,
  input: { name: string; markdown: string },
): Promise<KbTemplate> {
  const name = input.name.trim();
  if (!name) throw new Error("模板名称不能为空");

  return api.patch<KbTemplate>(
    `/api/knowledge/wiki2/templates/${encodeURIComponent(templateId)}`,
    {
      name,
      title: name,
      content: markdownToKnowledgeDocument(input.markdown),
    },
  );
}

export async function deleteProjectDocumentTemplate(
  api: ProjectDocumentTemplateDeleteApi,
  templateId: string,
): Promise<void> {
  await api.delete(
    `/api/knowledge/wiki2/templates/${encodeURIComponent(templateId)}`,
  );
}
