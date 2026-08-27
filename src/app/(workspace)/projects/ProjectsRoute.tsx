"use client";

import { ProjectsPage, useNavigation } from "@bioagent/chatui";
import type { ProjectSummary } from "@bioagent/shared";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  createProject,
  loadProjectsBootstrap,
  mapProjectsToList,
} from "@/adapters/projects";
import {
  loadProjectDocumentTemplates,
  PROJECT_DOCUMENT_TEMPLATE_DELETED_EVENT,
  type ProjectDocumentTemplate,
} from "@/adapters/project-document-templates";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import {
  PRODUCT_ANALYTICS_EVENTS,
  trackProductEvent,
} from "@/lib/product-analytics";
import { useApiClient, useAuth } from "@/providers/AuthProvider";

export function ProjectsRoute() {
  const api = useApiClient();
  const { user } = useAuth();
  const currentUserId = user?.id || "";
  const navigation = useNavigation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const templatesVisible =
    searchParams.get("templates") === "open" ||
    pathname.startsWith("/projects/templates/");
  const {
    chats,
    isSidebarOpen,
    openSidebar,
    refreshProjects: refreshShellProjects,
  } = useChatShell();
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [templates, setTemplates] = useState<ProjectDocumentTemplate[]>([]);
  const [templatesLoading, setTemplatesLoading] = useState(false);
  const [templatesError, setTemplatesError] = useState("");

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
  const loadTemplates = useCallback(async () => {
    setTemplatesLoading(true);
    setTemplatesError("");
    try {
      setTemplates(await loadProjectDocumentTemplates(api, currentUserId));
    } catch (loadError) {
      setTemplatesError(loadError instanceof Error ? loadError.message : "模板加载失败");
    } finally {
      setTemplatesLoading(false);
    }
  }, [api, currentUserId]);

  useEffect(() => {
    const handleTemplateDeleted = (event: Event) => {
      const templateId = (event as CustomEvent<unknown>).detail;
      if (typeof templateId !== "string") return;
      setTemplates((current) => current.filter((template) => template.id !== templateId));
    };
    window.addEventListener(
      PROJECT_DOCUMENT_TEMPLATE_DELETED_EVENT,
      handleTemplateDeleted,
    );
    return () => {
      window.removeEventListener(
        PROJECT_DOCUMENT_TEMPLATE_DELETED_EVENT,
        handleTemplateDeleted,
      );
    };
  }, []);

  useEffect(() => {
    if (!templatesVisible) return;
    let cancelled = false;

    loadProjectDocumentTemplates(api, currentUserId)
      .then((items) => {
        if (!cancelled) setTemplates(items);
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          setTemplatesError(loadError instanceof Error ? loadError.message : "模板加载失败");
        }
      })
      .finally(() => {
        if (!cancelled) setTemplatesLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api, currentUserId, pathname, templatesVisible]);

  return (
    <ProjectsPage
      projects={viewProjects}
      isSidebarOpen={isSidebarOpen}
      loading={loading}
      error={error}
      onOpenSidebar={openSidebar}
      onRetry={() => void load()}
      onOpenProject={(projectId) => navigation.push(`/projects/${projectId}`)}
      templates={templates}
      templatesLoading={templatesLoading || (templatesVisible && !templates.length && !templatesError)}
      templatesError={templatesError}
      templatesVisible={templatesVisible}
      onTemplatesVisibleChange={(visible) => {
        if (visible) navigation.push("/projects?templates=open");
        else navigation.replace("/projects");
      }}
      onOpenTemplates={() => undefined}
      onRetryTemplates={() => void loadTemplates()}
      onOpenTemplate={(templateId) => navigation.push(`/projects/templates/${encodeURIComponent(templateId)}`)}
      onCreateTemplate={() => navigation.push("/projects/templates/new")}
      onCreateProject={async ({ name, description }) => {
        const created = await createProject(api, {
          type: "team",
          name,
          description,
        });
        trackProductEvent(PRODUCT_ANALYTICS_EVENTS.createProject, {
          source: "project_list",
          project_type: "team",
        });
        setProjects((current) => [created, ...current]);
        await refreshShellProjects();
      }}
    />
  );
}
