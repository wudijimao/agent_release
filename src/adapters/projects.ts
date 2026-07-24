import type {
  CreateAgentSessionResponse,
  ProjectCreateRequest,
  ProjectDetail,
  ProjectMemberCreateRequest,
  ProjectMemberPatchRequest,
  ProjectMemberSummary,
  ProjectPatchRequest,
  ProjectSummary,
  ProjectsBootstrapPayload,
} from "@bioagent/shared";
import type {
  AppShellChat,
  AppShellProject,
  ChatPreviewItemViewModel,
  ChatProjectExperimentItemViewModel,
  ChatProjectKnowledgeItemViewModel,
  ProjectConversationViewModel,
  ProjectDetailViewModel,
  ProjectDocumentViewModel,
  ProjectListItemViewModel,
  ProjectMemberDirectoryItem,
  ProjectMemberPermission,
  ProjectMemberViewModel,
} from "@bioagent/chatui";

import type { ApiClient } from "@/lib/api";

export async function loadProjectsBootstrap(
  api: ApiClient,
): Promise<ProjectsBootstrapPayload> {
  return api.get<ProjectsBootstrapPayload>("/api/projects/bootstrap");
}

export async function loadProjectDetail(
  api: ApiClient,
  projectId: string,
): Promise<ProjectDetail> {
  return api.get<ProjectDetail>(`/api/projects/${encodeURIComponent(projectId)}`);
}

export async function createProject(
  api: ApiClient,
  request: ProjectCreateRequest,
): Promise<ProjectSummary> {
  return api.post<ProjectSummary>("/api/projects", request);
}

export async function updateProject(
  api: ApiClient,
  projectId: string,
  request: ProjectPatchRequest,
): Promise<ProjectDetail> {
  return api.patch<ProjectDetail>(
    `/api/projects/${encodeURIComponent(projectId)}`,
    request,
  );
}

export async function createProjectConversation(
  api: ApiClient,
  projectId: string,
): Promise<CreateAgentSessionResponse> {
  return api.post<CreateAgentSessionResponse>("/api/chat/agent-sessions", {
    agentType: "general",
    projectId,
  });
}

export async function addProjectMember(
  api: ApiClient,
  projectId: string,
  request: ProjectMemberCreateRequest,
): Promise<ProjectMemberSummary[]> {
  return api.post<ProjectMemberSummary[]>(
    `/api/projects/${encodeURIComponent(projectId)}/members`,
    request,
  );
}

export async function updateProjectMember(
  api: ApiClient,
  projectId: string,
  memberId: string,
  request: ProjectMemberPatchRequest,
): Promise<ProjectMemberSummary[]> {
  return api.patch<ProjectMemberSummary[]>(
    `/api/projects/${encodeURIComponent(projectId)}/members/${encodeURIComponent(memberId)}`,
    request,
  );
}

export async function removeProjectMember(
  api: ApiClient,
  projectId: string,
  memberId: string,
): Promise<ProjectMemberSummary[]> {
  return api.delete<ProjectMemberSummary[]>(
    `/api/projects/${encodeURIComponent(projectId)}/members/${encodeURIComponent(memberId)}`,
  );
}

export function mapProjectsToShell(
  projects: readonly ProjectSummary[],
): AppShellProject[] {
  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    selectable: !project.isDefaultUnassigned,
  }));
}

export function mapProjectsToList(
  projects: readonly ProjectSummary[],
  chats: readonly AppShellChat[],
): ProjectListItemViewModel[] {
  const conversationCounts = new Map<string, number>();
  for (const chat of chats) {
    if (!chat.projectId) continue;
    conversationCounts.set(
      chat.projectId,
      (conversationCounts.get(chat.projectId) || 0) + 1,
    );
  }

  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description || "暂无项目描述",
    documentCount: project.knowledgeCount,
    conversationCount: conversationCounts.get(project.id) || 0,
  }));
}

const KNOWLEDGE_TYPE_LABELS: Record<string, string> = {
  literature: "文献",
  literature_review: "文献解读",
  protocol: "实验方案",
  sop: "SOP",
  work_summary: "工作总结",
  experiment_note: "实验记录",
  experiment_plan: "实验计划",
  data_source: "数据源",
  analysis_report: "分析报告",
  other: "其他",
};

const KNOWLEDGE_SECTION_LABELS: Record<string, string> = {
  knowledge: "知识",
  experiment: "实验",
  data: "数据",
};

export interface ProjectChatWorkspaceViewModel {
  projectName: string;
  knowledgeDocs: ChatProjectKnowledgeItemViewModel[];
  experiments: ChatProjectExperimentItemViewModel[];
  previewItems: ChatPreviewItemViewModel[];
}

export function mapProjectChatWorkspace(
  project: ProjectDetail,
): ProjectChatWorkspaceViewModel {
  const knowledgeItems = [
    ...project.sections.knowledge.knowledge,
    ...project.sections.knowledge.data,
  ];
  const experimentItems = project.sections.knowledge.experiment;
  const itemTags = (item: (typeof knowledgeItems)[number]) => {
    const sectionLabel =
      KNOWLEDGE_SECTION_LABELS[item.section] || item.section;
    const typeLabel =
      KNOWLEDGE_TYPE_LABELS[item.knowledgeType] || item.knowledgeType;
    return [sectionLabel, typeLabel];
  };
  const previewContent = (title: string, tags: readonly string[], updatedAt: string) =>
    `文件标题：${title}\n分类：${tags.join(" / ")}\n更新时间：${updatedAt}`;

  return {
    projectName: project.name,
    knowledgeDocs: knowledgeItems.map((item) => ({
      id: item.id,
      title: item.title,
      tags: itemTags(item),
    })),
    experiments: experimentItems.map((item) => ({
      id: item.id,
      title: item.title,
      status: KNOWLEDGE_TYPE_LABELS[item.knowledgeType] || item.knowledgeType,
      tags: itemTags(item),
    })),
    previewItems: [
      ...knowledgeItems.map((item): ChatPreviewItemViewModel => {
        const tags = itemTags(item);
        return {
          key: `knowledge:${item.id}`,
          type: "knowledge",
          title: item.title,
          subtitle: `${project.name} · ${tags.join(" · ")}`,
          content: previewContent(item.title, tags, item.updatedAt),
        };
      }),
      ...experimentItems.map((item): ChatPreviewItemViewModel => {
        const tags = itemTags(item);
        const status =
          KNOWLEDGE_TYPE_LABELS[item.knowledgeType] || item.knowledgeType;
        return {
          key: `experiment:${item.id}`,
          type: "experiment-log",
          title: item.title,
          subtitle: `${project.name} · ${tags.join(" · ")}`,
          status,
          content: previewContent(item.title, tags, item.updatedAt),
        };
      }),
    ],
  };
}

function permissionToUi(role: ProjectMemberSummary["role"]): ProjectMemberPermission {
  return role === "viewer" ? "浏览" : "编辑";
}

export function permissionToApi(
  permission: ProjectMemberPermission,
): ProjectMemberCreateRequest["role"] {
  return permission === "浏览" ? "viewer" : "member";
}

export function mapProjectDetail(project: ProjectDetail): {
  project: ProjectDetailViewModel;
  documents: ProjectDocumentViewModel[];
  conversations: ProjectConversationViewModel[];
} {
  const documents = [
    ...project.sections.knowledge.knowledge,
    ...project.sections.knowledge.experiment,
    ...project.sections.knowledge.data,
  ].map((item) => {
    const typeLabel = KNOWLEDGE_TYPE_LABELS[item.knowledgeType] || item.knowledgeType;
    const sectionLabel = KNOWLEDGE_SECTION_LABELS[item.section] || item.section;
    return {
      id: item.id,
      title: item.title,
      summary: `${sectionLabel} · ${typeLabel}`,
      tags: [sectionLabel, typeLabel],
    };
  });

  return {
    project: {
      id: project.id,
      name: project.name,
      description: project.description || "暂无项目描述",
    },
    documents,
    conversations: project.sections.chats.map((chat) => ({
      id: chat.id,
      title: chat.title?.trim() || "新对话",
      date: chat.updatedAt,
    })),
  };
}

export function mapProjectMembers(
  members: readonly ProjectMemberSummary[],
): ProjectMemberViewModel[] {
  return members.map((member) => ({
    id: member.userId,
    name: member.user?.name?.trim() || member.user?.email || "项目成员",
    permission: permissionToUi(member.role),
    editable: member.role !== "owner",
    roleLabel: member.role === "owner" ? "所有者" : undefined,
  }));
}

export function mapProjectMemberDirectory(
  members: readonly { userId: string; user?: { name: string; email: string } }[],
): ProjectMemberDirectoryItem[] {
  return members.map((member) => ({
    id: member.userId,
    name: member.user?.name?.trim() || member.user?.email || "实验室成员",
    email: member.user?.email || "",
  }));
}
