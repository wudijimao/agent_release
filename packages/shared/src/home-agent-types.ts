export const HOME_AGENT_TYPES = [
  'general',
  'experiment_note',
  'experiment_design',
  'literature_review',
  'weekly_summary',
] as const;

export type HomeAgentType = (typeof HOME_AGENT_TYPES)[number];

export interface HomeAgentTypeConfig {
  type: HomeAgentType;
  label: string;
  description: string;
  starterPrompt: string;
  defaultKnowledgeType?: string;
  defaultKnowledgeSection?: 'knowledge' | 'experiment' | 'data';
}

export const HOME_AGENT_TYPE_CONFIGS: Record<HomeAgentType, HomeAgentTypeConfig> = {
  general: {
    type: 'general',
    label: '普通对话',
    description: '通用科研问答与工作协助。',
    starterPrompt: '',
  },
  experiment_note: {
    type: 'experiment_note',
    label: '整理实验记录',
    description: '上传或输入原始实验材料，整理成结构化实验记录。',
    starterPrompt:
      '请先上传你的实验原始材料，例如实验照片、纸质记录、PDF、表格，或直接输入你的实验过程草稿。我会先识别内容并按实验记录结构整理；如果关键信息缺失，我会继续追问补全。',
    defaultKnowledgeType: 'experiment_note',
    defaultKnowledgeSection: 'experiment',
  },
  experiment_design: {
    type: 'experiment_design',
    label: '设计实验方案',
    description: '描述研究目标和约束，生成可执行实验方案草稿。',
    starterPrompt:
      '你可以直接描述研究目标、待验证问题、已有实验基础和限制条件；也可以上传文献、已有实验记录或方案草稿。我会先帮你梳理问题，再补问关键信息，最后生成一份可编辑的实验方案草稿。',
    defaultKnowledgeType: 'experiment_plan',
    defaultKnowledgeSection: 'experiment',
  },
  literature_review: {
    type: 'literature_review',
    label: '文献解读',
    description: '上传 PDF、粘贴摘要或输入 DOI，提炼文献价值和局限。',
    starterPrompt:
      '请上传文献 PDF、粘贴摘要、输入 DOI / 标题，或直接说明你想重点看什么。我会先提取文献核心内容，再从研究问题、方法设计、关键结论、创新点、局限性和参考价值几个方面进行解读，并可继续深入讨论。',
    defaultKnowledgeType: 'literature_review',
    defaultKnowledgeSection: 'knowledge',
  },
  weekly_summary: {
    type: 'weekly_summary',
    label: '每周工作总结',
    description: '结合最近 7 天工作痕迹，生成结构化周总结。',
    starterPrompt:
      '我可以帮你整理最近 7 天的工作内容，生成一版结构化周总结。我会优先结合你最近的对话、实验记录、文献阅读、知识草稿等内容；如果信息不够，我会再向你补问。',
    defaultKnowledgeType: 'work_summary',
    defaultKnowledgeSection: 'knowledge',
  },
};

export function isHomeAgentType(value: unknown): value is HomeAgentType {
  return typeof value === 'string' && (HOME_AGENT_TYPES as readonly string[]).includes(value);
}

export function getHomeAgentTypeConfig(value: HomeAgentType) {
  return HOME_AGENT_TYPE_CONFIGS[value] || HOME_AGENT_TYPE_CONFIGS.general;
}
