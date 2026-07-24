import type { SkillCardViewModel } from "@bioagent/chatui";
import type { SkillCatalogItemDto } from "@bioagent/shared";

import type { SkillsPageData } from "./skills";

const categoryLabels: Record<string, string> = {
  analysis: "分析",
  clinical: "临床",
  literature: "文献",
  protein: "蛋白",
  search: "检索",
};

const executionModeLabels: Record<string, string> = {
  prompt: "Prompt",
  remote: "远程",
  script: "脚本",
};

function stringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : [];
}

function sourceLabel(skill: SkillCatalogItemDto) {
  const sourceType = typeof skill.metadata?.sourceType === "string"
    ? skill.metadata.sourceType
    : "built-in";
  const sourceName = skill.sourceRepo?.trim() || "BioAgent";
  return `${sourceName} · ${sourceType}`;
}

function skillTags(skill: SkillCatalogItemDto) {
  const capabilityTags = stringArray(skill.metadata?.capabilities);
  return [
    categoryLabels[skill.category] || skill.category,
    executionModeLabels[skill.executionMode] || skill.executionMode,
    ...capabilityTags,
  ].filter((tag, index, tags) => tags.indexOf(tag) === index).slice(0, 3);
}

export function mapSkillsPage(data: SkillsPageData): SkillCardViewModel[] {
  return data.catalog.map((skill) => ({
    id: skill.slug,
    name: skill.displayName || skill.slug,
    source: sourceLabel(skill),
    description: skill.description,
    tags: skillTags(skill),
    riskLevel: skill.riskLevel,
    installed: data.installedSlugs.has(skill.slug),
  }));
}
