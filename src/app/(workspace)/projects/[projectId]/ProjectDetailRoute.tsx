"use client";

import {
  BaseButton,
  ProjectDetailPage,
  ProjectDocumentCreateModal,
  ProjectDocumentEditor,
  ProjectDocumentPreview,
  ProjectMemberManagementModal,
  useNavigation,
} from "@bioagent/chatui";
import type { ProjectDocumentPreviewViewModel } from "@bioagent/chatui";
import type {
  LabMember,
  ProjectDetail,
  ProjectKnowledgeSection,
  ProjectKnowledgeType,
} from "@bioagent/shared";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { loadLabMembers } from "@/adapters/lab-members";
import {
  deleteChatSession,
  renameChatSession,
} from "@/adapters/chat-history";
import {
  deleteProjectDocumentAttachment,
  deleteProjectDocument,
  getProjectDocumentAttachmentUrl,
  loadProjectDocumentDetail,
  updateProjectDocument,
} from "@/adapters/project-document-detail";
import {
  projectDocumentTitleForEdit,
  projectDocumentTitleForSave,
} from "@/adapters/project-document-title";
import {
  createProjectDocument,
  importProjectDocuments,
  PROJECT_DOCUMENT_IMPORT_ACCEPT,
  PROJECT_DOCUMENT_IMPORT_DESCRIPTION,
  PROJECT_DOCUMENT_IMPORT_MAX_BYTES,
  uploadProjectDocumentAttachments,
} from "@/adapters/project-documents";
import {
  loadProjectDocumentTemplates,
  PROJECT_DOCUMENT_TYPE_OPTIONS,
  projectDocumentSectionForType,
  type ProjectDocumentTemplate,
} from "@/adapters/project-document-templates";
import {
  addProjectMember,
  archiveProject,
  loadProjectDetail,
  mapProjectDetail,
  mapProjectMemberDirectory,
  mapProjectMembers,
  permissionToApi,
  removeProjectMember,
  updateProject,
  updateProjectMember,
} from "@/adapters/projects";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import {
  PRODUCT_ANALYTICS_EVENTS,
  trackProductEvent,
} from "@/lib/product-analytics";
import { useApiClient } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

interface ProjectDocumentContentDraft {
  title: string;
  markdown: string;
}

interface ProjectDocumentDraft extends ProjectDocumentContentDraft {
  templateId: string;
  knowledgeType: ProjectKnowledgeType;
  section: ProjectKnowledgeSection;
}

function RouteStatus({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white px-6 text-primaryText">
      <div className="space-y-4 text-center">
        <p className="text-sm text-secondaryText">{message}</p>
        {onRetry && (
          <BaseButton type="secondary" size="small" onClick={onRetry}>
            重新加载
          </BaseButton>
        )}
      </div>
    </main>
  );
}

export function ProjectDetailRoute({ projectId }: { projectId: string }) {
  const api = useApiClient();
  const navigation = useNavigation();
  const { activeLab } = useLab();
  const {
    isSidebarOpen,
    openSidebar,
    refreshChats,
    refreshProjects,
  } = useChatShell();
  const [detail, setDetail] = useState<ProjectDetail | null>(null);
  const [directory, setDirectory] = useState<LabMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [documentDraft, setDocumentDraft] =
    useState<ProjectDocumentDraft | null>(null);
  const [documentCreateModalOpen, setDocumentCreateModalOpen] = useState(false);
  const [documentTemplates, setDocumentTemplates] = useState<
    ProjectDocumentTemplate[]
  >([]);
  const [documentTemplatesLoading, setDocumentTemplatesLoading] =
    useState(false);
  const [documentTemplatesError, setDocumentTemplatesError] = useState("");
  const [documentSaving, setDocumentSaving] = useState(false);
  const [documentSaveError, setDocumentSaveError] = useState("");
  const [documentPreview, setDocumentPreview] =
    useState<ProjectDocumentPreviewViewModel | null>(null);
  const [documentEditDraft, setDocumentEditDraft] =
    useState<ProjectDocumentContentDraft | null>(null);
  const [documentDirty, setDocumentDirty] = useState(false);
  const documentDraftRef = useRef<ProjectDocumentDraft | null>(null);
  const documentRevisionRef = useRef(0);
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const activeLabId = activeLab?.id || "";

  useEffect(() => {
    documentDraftRef.current = documentDraft;
  }, [documentDraft]);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const project = await loadProjectDetail(api, projectId);
      setDetail(project);
      if (project.type === "team" && project.permissions.canAdmin && activeLabId) {
        const result = await loadLabMembers(api, activeLabId);
        setDirectory(result.members);
      } else {
        setDirectory([]);
      }
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "项目加载失败");
    } finally {
      setLoading(false);
    }
  }, [activeLabId, api, projectId]);

  useEffect(() => {
    let cancelled = false;
    loadProjectDetail(api, projectId)
      .then(async (project) => {
        let labMembers: LabMember[] = [];
        if (project.type === "team" && project.permissions.canAdmin && activeLabId) {
          const result = await loadLabMembers(api, activeLabId);
          labMembers = result.members;
        }
        if (cancelled) return;
        setDetail(project);
        setDirectory(labMembers);
        setError("");
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "项目加载失败");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeLabId, api, projectId]);

  const view = useMemo(() => (detail ? mapProjectDetail(detail) : null), [detail]);
  const members = useMemo(
    () => mapProjectMembers(detail?.members || []),
    [detail?.members],
  );
  const memberDirectory = useMemo(
    () => mapProjectMemberDirectory(directory),
    [directory],
  );

  const refreshDetail = async () => {
    const project = await loadProjectDetail(api, projectId);
    setDetail(project);
  };

  const saveDocument = useCallback(
    async ({
      keepEditing,
      showNotice,
    }: {
      keepEditing: boolean;
      showNotice: boolean;
    }) => {
      if (documentSaving) {
        throw new Error("文档正在保存，请稍后重试");
      }

      setDocumentSaving(true);
      setDocumentSaveError("");
      const savingRevision = documentRevisionRef.current;
      try {
        if (documentDraft) {
          const parentNodeId = detail?.defaultKbNodeId;
          if (!parentNodeId) {
            throw new Error(
              "当前项目尚未创建默认知识库，暂时无法保存文档。",
            );
          }
          const title = projectDocumentTitleForSave(documentDraft.title);
          const created = await createProjectDocument(api, {
            projectId,
            parentNodeId,
            title,
            markdown: documentDraft.markdown,
            templateId: documentDraft.templateId,
            knowledgeType: documentDraft.knowledgeType,
            section: documentDraft.section,
          });
          trackProductEvent(PRODUCT_ANALYTICS_EVENTS.createDocument, {
            source: "project_detail",
            document_type: documentDraft.knowledgeType,
          });
          const preview = await loadProjectDocumentDetail(api, created.id);
          setDetail(await loadProjectDetail(api, projectId));
          if (keepEditing) {
            const latestDraft = documentDraftRef.current ?? documentDraft;
            setDocumentPreview(preview);
            setDocumentEditDraft({
              title: latestDraft.title,
              markdown: latestDraft.markdown,
            });
          }
          setDocumentDraft(null);
          documentDraftRef.current = null;
          setDocumentDirty(documentRevisionRef.current !== savingRevision);
          if (showNotice) setNotice("文档已保存到当前项目");
          return preview;
        }

        if (documentPreview && documentEditDraft) {
          const title = projectDocumentTitleForSave(documentEditDraft.title);
          await updateProjectDocument(api, {
            kbNodeId: documentPreview.id,
            title,
            markdown: documentEditDraft.markdown,
          });
          const preview = await loadProjectDocumentDetail(
            api,
            documentPreview.id,
          );
          setDetail(await loadProjectDetail(api, projectId));
          setDocumentPreview(preview);
          if (!keepEditing) {
            setDocumentEditDraft(null);
          }
          setDocumentDirty(documentRevisionRef.current !== savingRevision);
          if (showNotice) setNotice("文档已保存");
          return preview;
        }

        return documentPreview;
      } catch (saveError) {
        setDocumentSaveError(
          saveError instanceof Error ? saveError.message : "文档保存失败",
        );
        throw saveError;
      } finally {
        setDocumentSaving(false);
      }
    },
    [
      api,
      detail,
      documentDraft,
      documentEditDraft,
      documentPreview,
      documentSaving,
      projectId,
    ],
  );

  const uploadEditorAttachments = async (files: File[]) => {
    let preview = documentPreview;
    if (documentDraft || documentDirty) {
      preview = await saveDocument({
        keepEditing: true,
        showNotice: false,
      });
    }
    if (!preview) throw new Error("文档尚未保存，无法上传附件");

    await uploadProjectDocumentAttachments(api, {
      nodeId: preview.id,
      files,
    });
    setDocumentPreview(await loadProjectDocumentDetail(api, preview.id));
  };

  const loadDocumentTemplates = useCallback(async () => {
    setDocumentTemplatesLoading(true);
    setDocumentTemplatesError("");
    try {
      setDocumentTemplates(await loadProjectDocumentTemplates(api));
    } catch (loadError) {
      setDocumentTemplatesError(
        loadError instanceof Error ? loadError.message : "文档模板加载失败",
      );
    } finally {
      setDocumentTemplatesLoading(false);
    }
  }, [api]);

  const openDocumentCreateModal = () => {
    setNotice("");
    setDocumentSaveError("");
    setDocumentCreateModalOpen(true);
    if (!documentTemplates.length) void loadDocumentTemplates();
  };

  useEffect(() => {
    if (!documentDirty || documentSaving) return;
    const timer = window.setTimeout(() => {
      void saveDocument({
        keepEditing: true,
        showNotice: false,
      }).catch(() => undefined);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [documentDirty, documentSaving, saveDocument]);

  if (loading) return <RouteStatus message="正在加载项目…" />;
  if (!detail || !view) {
    return <RouteStatus message={error || "项目不存在或已被删除"} onRetry={() => void load()} />;
  }

  if (documentDraft !== null) {
    return (
      <ProjectDocumentEditor
        projectName={detail.name}
        title={documentDraft.title}
        initialMarkdown={documentDraft.markdown}
        attachmentAccept={PROJECT_DOCUMENT_IMPORT_ACCEPT}
        saving={documentSaving}
        saveError={documentSaveError}
        onTitleChange={(title) => {
          documentRevisionRef.current += 1;
          setDocumentDraft((current) =>
            current ? { ...current, title } : current,
          );
          setDocumentDirty(true);
        }}
        onMarkdownChange={(markdown) => {
          documentRevisionRef.current += 1;
          setDocumentDraft((current) =>
            current ? { ...current, markdown } : current,
          );
          setDocumentDirty(true);
        }}
        onUploadAttachments={uploadEditorAttachments}
        onSave={() => {
          void saveDocument({
            keepEditing: false,
            showNotice: true,
          }).catch(() => undefined);
        }}
        onClose={() => {
          if (documentSaving) return;
          setDocumentSaveError("");
          setDocumentDraft(null);
          setDocumentDirty(false);
        }}
      />
    );
  }

  if (documentPreview && documentEditDraft !== null) {
    return (
      <ProjectDocumentEditor
        projectName={detail.name}
        title={documentEditDraft.title}
        initialMarkdown={documentEditDraft.markdown}
        createdByName={documentPreview.createdByName}
        updatedByName={documentPreview.updatedByName}
        updatedAt={documentPreview.updatedAt}
        index={documentPreview.index}
        attachments={documentPreview.attachments}
        attachmentAccept={PROJECT_DOCUMENT_IMPORT_ACCEPT}
        saving={documentSaving}
        saveError={documentSaveError}
        onTitleChange={(title) => {
          documentRevisionRef.current += 1;
          setDocumentEditDraft((current) =>
            current ? { ...current, title } : current,
          );
          setDocumentDirty(true);
        }}
        onMarkdownChange={(markdown) => {
          documentRevisionRef.current += 1;
          setDocumentEditDraft((current) =>
            current ? { ...current, markdown } : current,
          );
          setDocumentDirty(true);
        }}
        onDownloadAttachment={(attachmentId) => {
          window.open(
            getProjectDocumentAttachmentUrl(attachmentId),
            "_blank",
            "noopener,noreferrer",
          );
        }}
        onUploadAttachments={uploadEditorAttachments}
        onDeleteAttachment={async (attachmentId) => {
          await deleteProjectDocumentAttachment(api, attachmentId);
          setDocumentPreview(
            await loadProjectDocumentDetail(api, documentPreview.id),
          );
        }}
        onSave={() => {
          void saveDocument({
            keepEditing: false,
            showNotice: true,
          }).catch(() => undefined);
        }}
        onClose={() => {
          if (documentSaving) return;
          setDocumentSaveError("");
          setDocumentEditDraft(null);
          setDocumentDirty(false);
        }}
      />
    );
  }

  if (documentPreview) {
    return (
      <ProjectDocumentPreview
        projectName={detail.name}
        document={documentPreview}
        isSidebarOpen={isSidebarOpen}
        onOpenSidebar={openSidebar}
        onBackToProjects={() => navigation.push("/projects")}
        onBackToProject={() => setDocumentPreview(null)}
        onEdit={() => {
          trackProductEvent(PRODUCT_ANALYTICS_EVENTS.editDocument, {
            source: "project_detail",
          });
          setDocumentSaveError("");
          setDocumentEditDraft({
            title: projectDocumentTitleForEdit(documentPreview.title),
            markdown: documentPreview.markdown,
          });
          setDocumentDirty(false);
        }}
        onDelete={async () => {
          await deleteProjectDocument(api, documentPreview.id);
          await refreshDetail();
          await refreshProjects();
          setDocumentPreview(null);
          setNotice("文档已删除");
        }}
        onDownloadAttachment={(attachmentId) => {
          window.open(
            getProjectDocumentAttachmentUrl(attachmentId),
            "_blank",
            "noopener,noreferrer",
          );
        }}
      />
    );
  }

  const updateField = async (patch: { name?: string; description?: string }) => {
    setNotice("");
    try {
      const updated = await updateProject(api, projectId, patch);
      setDetail(updated);
      await refreshProjects();
    } catch (mutationError) {
      setNotice(mutationError instanceof Error ? mutationError.message : "项目更新失败");
      throw mutationError;
    }
  };

  return (
    <>
      <ProjectDetailPage
        project={view.project}
        documents={view.documents}
        conversations={view.conversations}
        memberCount={detail.memberCount}
        showMemberManagement={detail.type === "team" && detail.permissions.canAdmin}
        isSidebarOpen={isSidebarOpen}
        onOpenSidebar={openSidebar}
        onBackToProjects={() => navigation.push("/projects")}
        onOpenMemberManagement={() => setMemberModalOpen(true)}
        onOpenDocument={async (kbNodeId) => {
          setNotice("正在加载文档…");
          try {
            const preview = await loadProjectDocumentDetail(api, kbNodeId);
            setDocumentPreview(preview);
            trackProductEvent(
              PRODUCT_ANALYTICS_EVENTS.previewProjectDocument,
              { source: "project_detail" },
            );
            setNotice("");
          } catch (loadError) {
            setNotice(
              loadError instanceof Error ? loadError.message : "文档加载失败",
            );
          }
        }}
        onOpenConversation={(sessionId) => navigation.push(`/chat/${sessionId}`)}
        onRenameConversation={detail.permissions.canAdmin ? async (sessionId, title) => {
          await renameChatSession(api, sessionId, title);
          await Promise.all([refreshDetail(), refreshChats()]);
        } : undefined}
        onDeleteConversation={detail.permissions.canAdmin ? async (sessionId) => {
          await deleteChatSession(api, sessionId);
          await Promise.all([refreshDetail(), refreshChats()]);
        } : undefined}
        onCreateDocument={() => {
          openDocumentCreateModal();
        }}
        onCreateConversation={() => {
          navigation.push(`/chat/new?projectId=${encodeURIComponent(projectId)}&focus=1`);
        }}
        documentImportAccept={PROJECT_DOCUMENT_IMPORT_ACCEPT}
        documentImportMaxSize={PROJECT_DOCUMENT_IMPORT_MAX_BYTES}
        documentImportDescription={PROJECT_DOCUMENT_IMPORT_DESCRIPTION}
        onImportDocuments={async (files) => {
          const parentNodeId = detail.defaultKbNodeId;
          if (!parentNodeId) {
            throw new Error("当前项目尚未创建默认知识库，暂时无法导入文档");
          }

          await importProjectDocuments(api, {
            projectId,
            parentNodeId,
            files,
          });
          await refreshDetail();
          setNotice(
            files.length > 1
              ? `已导入 ${files.length} 个文档，正在后台识别内容`
              : "文档已导入，正在后台识别内容",
          );
        }}
        onUpdateProjectName={(name) => updateField({ name })}
        onUpdateProjectDescription={(description) => updateField({ description })}
        onDeleteProject={
          detail.permissions.canAdmin && !detail.isDefaultUnassigned
            ? async () => {
                await archiveProject(api, projectId);
                await Promise.all([refreshProjects(), refreshChats()]);
                navigation.replace("/projects");
              }
            : undefined
        }
      />

      {detail.permissions.canAdmin && (
        <ProjectMemberManagementModal
          visible={memberModalOpen}
          members={members}
          directory={memberDirectory}
          onClose={() => setMemberModalOpen(false)}
          onInvite={async (userIds, permission) => {
            try {
              for (const userId of userIds) {
                await addProjectMember(api, projectId, {
                  userId,
                  role: permissionToApi(permission),
                });
              }
            } finally {
              await refreshDetail();
            }
          }}
          onChangePermission={async (userId, permission) => {
            const member = detail.members.find((item) => item.userId === userId);
            if (!member) throw new Error("未找到项目成员");
            await updateProjectMember(api, projectId, member.id, {
              role: permissionToApi(permission),
            });
            await refreshDetail();
          }}
          onRemove={async (userId) => {
            const member = detail.members.find((item) => item.userId === userId);
            if (!member) throw new Error("未找到项目成员");
            await removeProjectMember(api, projectId, member.id);
            await refreshDetail();
          }}
        />
      )}

      <ProjectDocumentCreateModal
        visible={documentCreateModalOpen}
        typeOptions={PROJECT_DOCUMENT_TYPE_OPTIONS}
        templates={documentTemplates}
        loading={documentTemplatesLoading}
        error={documentTemplatesError}
        defaultKnowledgeType="other"
        defaultTemplateId="blank"
        onClose={() => {
          if (documentTemplatesLoading) return;
          setDocumentCreateModalOpen(false);
        }}
        onRetry={() => void loadDocumentTemplates()}
        onContinue={({ knowledgeType, templateId }) => {
          const template = documentTemplates.find(
            (item) => item.id === templateId,
          );
          if (!template) return;
          const typedKnowledgeType = knowledgeType as ProjectKnowledgeType;
          setDocumentDraft({
            title: template.id === "blank" ? "" : template.title,
            markdown: template.markdown,
            templateId: template.id,
            knowledgeType: typedKnowledgeType,
            section: projectDocumentSectionForType(typedKnowledgeType),
          });
          setDocumentDirty(false);
          setDocumentCreateModalOpen(false);
        }}
      />

      {notice && (
        <div
          role="status"
          className="absolute bottom-6 left-1/2 z-30 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-lineSubtle bg-white px-4 py-2 text-sm text-secondaryText shadow-md"
        >
          {notice}
        </div>
      )}
    </>
  );
}
