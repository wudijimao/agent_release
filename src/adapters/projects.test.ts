import assert from "node:assert/strict";
import test from "node:test";

import type {
  ProjectDetail,
  ProjectSummary,
  ProjectsBootstrapPayload,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  addProjectMember,
  createProject,
  createProjectConversation,
  loadProjectDetail,
  loadProjectsBootstrap,
  mapProjectDetail,
  mapProjectMembers,
  mapProjectsToList,
  mapProjectsToShell,
  permissionToApi,
  removeProjectMember,
  updateProject,
  updateProjectMember,
} from "./projects";

function project(overrides: Partial<ProjectSummary> = {}): ProjectSummary {
  return {
    id: "project-1",
    labId: "lab-1",
    type: "personal",
    status: "active",
    name: "肿瘤免疫项目",
    description: "分析免疫微环境",
    isDefaultUnassigned: false,
    memberCount: 1,
    knowledgeCount: 3,
    taskCount: 0,
    updatedAt: "2026-07-21T08:00:00.000Z",
    createdAt: "2026-07-21T08:00:00.000Z",
    ...overrides,
  };
}

function createApiStub(options: {
  get?: ApiClient["get"];
  post?: ApiClient["post"];
  patch?: ApiClient["patch"];
  delete?: ApiClient["delete"];
}): ApiClient {
  const missing = async () => {
    throw new Error("not implemented");
  };
  return {
    request: missing,
    get: options.get || missing,
    post: options.post || missing,
    put: missing,
    patch: options.patch || missing,
    delete: options.delete || missing,
  };
}

test("projects adapter uses the bootstrap, detail, and create contracts", async () => {
  const summary = project();
  const bootstrap: ProjectsBootstrapPayload = {
    defaultProject: summary,
    projects: [summary],
  };
  const calls: unknown[][] = [];
  const api = createApiStub({
    get: async (...args: unknown[]) => {
      calls.push(["get", ...args]);
      return args[0] === "/api/projects/bootstrap"
        ? bootstrap
        : { ...summary, permissions: {}, members: [], sections: {} };
    },
    post: async (...args: unknown[]) => {
      calls.push(["post", ...args]);
      return summary;
    },
  });

  assert.equal(await loadProjectsBootstrap(api), bootstrap);
  await loadProjectDetail(api, "project/id");
  await createProject(api, {
    type: "personal",
    name: "肿瘤免疫项目",
    description: "分析免疫微环境",
  });

  assert.deepEqual(calls, [
    ["get", "/api/projects/bootstrap"],
    ["get", "/api/projects/project%2Fid"],
    [
      "post",
      "/api/projects",
      {
        type: "personal",
        name: "肿瘤免疫项目",
        description: "分析免疫微环境",
      },
    ],
  ]);
});

test("project detail mutations use encoded project and member contracts", async () => {
  const calls: unknown[][] = [];
  const api = createApiStub({
    post: async (...args: unknown[]) => {
      calls.push(["post", ...args]);
      return args[0] === "/api/chat/agent-sessions"
        ? { sessionId: "session-1", agentType: "general", projectId: "project/id" }
        : [];
    },
    patch: async (...args: unknown[]) => {
      calls.push(["patch", ...args]);
      return [];
    },
    delete: async (...args: unknown[]) => {
      calls.push(["delete", ...args]);
      return [];
    },
  });

  await updateProject(api, "project/id", { name: "新名称" });
  await createProjectConversation(api, "project/id");
  await addProjectMember(api, "project/id", { userId: "user-2", role: "member" });
  await updateProjectMember(api, "project/id", "member/id", { role: "viewer" });
  await removeProjectMember(api, "project/id", "member/id");

  assert.deepEqual(calls, [
    ["patch", "/api/projects/project%2Fid", { name: "新名称" }],
    ["post", "/api/chat/agent-sessions", { agentType: "general", projectId: "project/id" }],
    ["post", "/api/projects/project%2Fid/members", { userId: "user-2", role: "member" }],
    ["patch", "/api/projects/project%2Fid/members/member%2Fid", { role: "viewer" }],
    ["delete", "/api/projects/project%2Fid/members/member%2Fid"],
  ]);
});

test("project detail mapper exposes only high-fidelity view models", () => {
  const detail: ProjectDetail = {
    ...project(),
    permissions: { canRead: true, canWrite: true, canAdmin: true, reason: "owner" },
    members: [
      {
        id: "membership-1",
        projectId: "project-1",
        userId: "user-1",
        role: "owner",
        user: { id: "user-1", name: "Mira", email: "mira@example.com" },
      },
    ],
    sections: {
      chats: [
        {
          id: "chat-1",
          title: null,
          scene: "home",
          updatedAt: "2026-07-21T09:00:00.000Z",
          createdAt: "2026-07-21T08:00:00.000Z",
        },
      ],
      knowledge: {
        knowledge: [
          {
            id: "knowledge-1",
            projectId: "project-1",
            kbNodeId: "node-1",
            title: "免疫检查点综述",
            knowledgeType: "literature_review",
            section: "knowledge",
            visibility: "project_default",
            updatedAt: "2026-07-21T09:00:00.000Z",
            createdAt: "2026-07-21T08:00:00.000Z",
          },
        ],
        experiment: [],
        data: [],
      },
      tasks: [],
      data: [],
    },
  };

  assert.deepEqual(mapProjectDetail(detail), {
    project: { id: "project-1", name: "肿瘤免疫项目", description: "分析免疫微环境" },
    documents: [
      {
        id: "knowledge-1",
        title: "免疫检查点综述",
        summary: "知识 · 文献解读",
        tags: ["知识", "文献解读"],
      },
    ],
    conversations: [
      { id: "chat-1", title: "新对话", date: "2026-07-21T09:00:00.000Z" },
    ],
  });
  assert.deepEqual(mapProjectMembers(detail.members), [
    {
      id: "user-1",
      name: "Mira",
      permission: "编辑",
      editable: false,
      roleLabel: "所有者",
    },
  ]);
  assert.equal(permissionToApi("浏览"), "viewer");
  assert.equal(permissionToApi("编辑"), "member");
});

test("projects view mapper keeps server counts and derives chat counts", () => {
  const projects = [
    project(),
    project({ id: "project-2", description: "", knowledgeCount: 0 }),
  ];
  const chats = [
    { id: "chat-1", title: "A", date: "今天", count: 1, projectId: "project-1" },
    { id: "chat-2", title: "B", date: "今天", count: 1, projectId: "project-1" },
    { id: "chat-3", title: "C", date: "今天", count: 1 },
  ];

  assert.deepEqual(mapProjectsToShell(projects), [
    { id: "project-1", name: "肿瘤免疫项目" },
    { id: "project-2", name: "肿瘤免疫项目" },
  ]);
  assert.deepEqual(mapProjectsToList(projects, chats), [
    {
      id: "project-1",
      name: "肿瘤免疫项目",
      description: "分析免疫微环境",
      documentCount: 3,
      conversationCount: 2,
    },
    {
      id: "project-2",
      name: "肿瘤免疫项目",
      description: "暂无项目描述",
      documentCount: 0,
      conversationCount: 0,
    },
  ]);
});
