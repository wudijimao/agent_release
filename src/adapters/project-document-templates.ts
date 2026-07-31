import type {
  KbTemplate,
  ProjectKnowledgeSection,
  ProjectKnowledgeType,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";
import { knowledgeContentToMarkdown } from "./project-document-detail";

type ProjectDocumentTemplateApi = Pick<ApiClient, "get">;

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
}

export const PROJECT_DOCUMENT_TYPE_OPTIONS: Array<{
  value: ProjectKnowledgeType;
  label: string;
  description: string;
}> = [
  { value: "literature", label: "文献", description: "论文、专利及其他参考资料" },
  { value: "literature_review", label: "文献解读", description: "文献总结、评述与研究启发" },
  { value: "protocol", label: "Protocol", description: "可复用的实验操作流程" },
  { value: "sop", label: "SOP", description: "标准作业程序与质量规范" },
  { value: "work_summary", label: "工作总结", description: "阶段进展、周报与复盘总结" },
  { value: "experiment_note", label: "实验记录", description: "实验过程、参数、结果与结论" },
  { value: "experiment_plan", label: "实验方案", description: "实验目标、设计与执行计划" },
  { value: "data_source", label: "数据源", description: "原始数据及数据来源说明" },
  { value: "analysis_report", label: "分析报告", description: "分析过程、图表与结果解释" },
  { value: "other", label: "其他", description: "暂不属于以上分类的通用文档" },
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
  api: ProjectDocumentTemplateApi,
): Promise<ProjectDocumentTemplate[]> {
  const templates = await api.get<KbTemplate[]>(
    "/api/knowledge/wiki2/templates",
  );
  return templates.map((template) => ({
    id: template.id,
    name: template.name,
    description: template.description,
    icon: template.icon,
    title: template.title,
    source: template.source,
    category: template.category,
    structure: template.structure,
    markdown: knowledgeContentToMarkdown(template.content),
  }));
}
