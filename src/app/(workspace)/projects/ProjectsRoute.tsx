"use client";

import { ProjectsPage, useNavigation } from "@bioagent/chatui";
import type { ProjectSummary } from "@bioagent/shared";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  createProject,
  loadProjectsBootstrap,
  mapProjectsToList,
} from "@/adapters/projects";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient } from "@/providers/AuthProvider";

export function ProjectsRoute() {
  const api = useApiClient();
  const navigation = useNavigation();
  const {
    chats,
    isSidebarOpen,
    openSidebar,
    refreshProjects: refreshShellProjects,
  } = useChatShell();
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const payload = await loadProjectsBootstrap(api);
      setProjects(payload.projects);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "项目加载失败");
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    let cancelled = false;

    loadProjectsBootstrap(api)
      .then((payload) => {
        if (cancelled) return;
        setProjects(payload.projects);
        setError("");
      })
      .catch((loadError: unknown) => {
        if (cancelled) return;
        setError(loadError instanceof Error ? loadError.message : "项目加载失败");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api]);

  const viewProjects = useMemo(
    () => mapProjectsToList(projects, chats),
    [chats, projects],
  );

  return (
    <ProjectsPage
      projects={viewProjects}
      isSidebarOpen={isSidebarOpen}
      loading={loading}
      error={error}
      onOpenSidebar={openSidebar}
      onRetry={() => void load()}
      onOpenProject={(projectId) => navigation.push(`/projects/${projectId}`)}
      onCreateProject={async ({ name, description, documents }) => {
        if (documents.length > 0) {
          throw new Error("服务端暂不支持在创建项目时直接上传文档，请先创建项目。");
        }

        const created = await createProject(api, {
          type: "personal",
          name,
          description,
        });
        setProjects((current) => [created, ...current]);
        await refreshShellProjects();
      }}
    />
  );
}
