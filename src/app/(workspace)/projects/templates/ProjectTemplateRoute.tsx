"use client";

import {
  BaseButton,
  ProjectDocumentTemplateWorkspace,
  useNavigation,
} from "@bioagent/chatui";
import { useCallback, useEffect, useState } from "react";

import {
  createProjectDocumentTemplateFromContent,
  deleteProjectDocumentTemplate,
  loadProjectDocumentTemplates,
  PROJECT_DOCUMENT_TEMPLATE_DELETED_EVENT,
  type ProjectDocumentTemplate,
  updateProjectDocumentTemplate,
} from "@/adapters/project-document-templates";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient, useAuth } from "@/providers/AuthProvider";

interface ProjectTemplateRouteProps {
  templateId?: string;
  creating?: boolean;
}

function ProjectTemplateRouteStatus({
  message,
  retry,
  onBack,
}: {
  message: string;
  retry?: () => void;
  onBack(): void;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface px-6">
      <div className="space-y-4 text-center">
        <p className="text-sm text-secondaryText">{message}</p>
        <div className="flex justify-center gap-2">
          <BaseButton type="secondary" size="small" onClick={onBack}>返回模板列表</BaseButton>
          {retry && <BaseButton type="primary" size="small" onClick={retry}>重新加载</BaseButton>}
        </div>
      </div>
    </div>
  );
}

export function ProjectTemplateRoute({
  templateId,
  creating = false,
}: ProjectTemplateRouteProps) {
  const api = useApiClient();
  const { user } = useAuth();
  const currentUserId = user?.id || "";
  const navigation = useNavigation();
  const { isSidebarOpen, openSidebar } = useChatShell();
  const [template, setTemplate] = useState<ProjectDocumentTemplate>();
  const [loading, setLoading] = useState(!creating);
  const [error, setError] = useState("");
  const backToTemplates = useCallback(() => navigation.back(), [navigation]);

  const loadTemplate = useCallback(async () => {
    if (creating || !templateId) return;
    setLoading(true);
    setError("");
    try {
      const templates = await loadProjectDocumentTemplates(api, currentUserId);
      const found = templates.find((item) => item.id === templateId);
      if (!found) throw new Error("模板不存在或已被移除");
      setTemplate(found);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "模板加载失败");
    } finally {
      setLoading(false);
    }
  }, [api, creating, currentUserId, templateId]);

  useEffect(() => {
    if (creating || !templateId) return;
    let cancelled = false;

    loadProjectDocumentTemplates(api, currentUserId)
      .then((templates) => {
        if (cancelled) return;
        const found = templates.find((item) => item.id === templateId);
        if (!found) throw new Error("模板不存在或已被移除");
        setTemplate(found);
        setError("");
      })
      .catch((loadError: unknown) => {
        if (cancelled) return;
        setError(loadError instanceof Error ? loadError.message : "模板加载失败");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api, creating, currentUserId, templateId]);

  if (loading) {
    return <ProjectTemplateRouteStatus message="正在加载模板…" onBack={backToTemplates} />;
  }
  if (error || (!creating && !template)) {
    return (
      <ProjectTemplateRouteStatus
        message={error || "模板不存在或已被移除"}
        retry={() => void loadTemplate()}
        onBack={backToTemplates}
      />
    );
  }

  return (
    <ProjectDocumentTemplateWorkspace
      key={creating ? "new-template" : template?.id}
      creating={creating}
      template={template}
      isSidebarOpen={isSidebarOpen}
      onOpenSidebar={openSidebar}
      onBack={backToTemplates}
      onCreate={creating ? async (input) => {
        await createProjectDocumentTemplateFromContent(api, input);
      } : undefined}
      onUpdate={!creating && template?.source === "workspace" && templateId ? async (input) => {
        const updated = await updateProjectDocumentTemplate(api, templateId, input);
        setTemplate((current) => current ? {
          ...current,
          name: updated.name,
          title: updated.title,
          markdown: input.markdown,
          updatedAt: updated.updatedAt,
        } : current);
      } : undefined}
      onDelete={!creating && template?.source === "workspace" && templateId ? async () => {
        await deleteProjectDocumentTemplate(api, templateId);
        window.dispatchEvent(new CustomEvent(
          PROJECT_DOCUMENT_TEMPLATE_DELETED_EVENT,
          { detail: templateId },
        ));
        backToTemplates();
      } : undefined}
    />
  );
}
