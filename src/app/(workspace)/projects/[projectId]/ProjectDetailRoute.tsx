"use client";

import {
  BaseButton,
  ProjectDetailPage,
  ProjectMemberManagementModal,
  useNavigation,
} from "@bioagent/chatui";
import type { LabMember, ProjectDetail } from "@bioagent/shared";
import { useCallback, useEffect, useMemo, useState } from "react";

import { loadLabMembers } from "@/adapters/lab-members";
import {
  addProjectMember,
  createProjectConversation,
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
import { useApiClient } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

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
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const activeLabId = activeLab?.id || "";

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

  if (loading) return <RouteStatus message="正在加载项目…" />;
  if (!detail || !view) {
    return <RouteStatus message={error || "项目不存在或已被删除"} onRetry={() => void load()} />;
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
        onOpenDocument={() => setNotice("服务端暂未提供项目文档详情页契约，已记录待接入。")}
        onOpenConversation={(sessionId) => navigation.push(`/chat/${sessionId}`)}
        onCreateDocument={() => setNotice("服务端暂未提供项目内新建文档契约，已记录待接入。")}
        onCreateConversation={async () => {
          setNotice("");
          try {
            const created = await createProjectConversation(api, projectId);
            await refreshChats();
            navigation.push(`/chat/${created.sessionId}`);
          } catch (mutationError) {
            setNotice(mutationError instanceof Error ? mutationError.message : "项目对话创建失败");
          }
        }}
        onImportDocuments={async () => {
          throw new Error("服务端暂未提供项目文档上传契约，已记录待接入。");
        }}
        onUpdateProjectName={(name) => updateField({ name })}
        onUpdateProjectDescription={(description) => updateField({ description })}
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
