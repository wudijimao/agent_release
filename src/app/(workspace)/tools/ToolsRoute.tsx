"use client";

import {
  createLiteratureSubscriptions,
  deleteLiteratureSubscription,
  EMPTY_LITERATURE_SUBSCRIPTION,
  fetchLiteratureSubscription,
  listLiteratureProjects,
  listLiteratureSubscriptions,
  loadLiteratureSubscriptionDraft,
  mapLiteratureSubscriptions,
  setLiteratureSubscriptionEnabled,
  updateLiteratureSubscription,
  type LiteratureSubscription,
} from "@/adapters/literature-subscriptions";
import {
  ScheduledTaskDeleteModal,
  ScheduledTaskEditorModal,
  ScheduledTasksOverview,
  type LiteratureTaskEditorValue,
  type ScheduledTaskTemplateViewModel,
} from "@bioagent/chatui";
import type { ScheduledTaskDto } from "@bioagent/shared";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  createScheduledTask,
  deleteScheduledTask,
  listScheduledTasks,
  pauseScheduledTask,
  resumeScheduledTask,
  updateScheduledTask,
} from "@/adapters/scheduled-tasks";
import {
  buildScheduledTaskRequest,
  createEmptyScheduledTaskDraft,
  scheduledTaskToEditorDraft,
  type ScheduledTaskEditorDraft,
} from "@/adapters/scheduled-task-editor";
import { mapScheduledTasks } from "@/adapters/scheduled-tasks-view-model";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient } from "@/providers/AuthProvider";

const TASK_TEMPLATES: ScheduledTaskTemplateViewModel[] = [
  {
    id: "template-paper-track",
    name: "文献追踪",
    description: "每天跟踪指定关键词的新论文，并生成摘要与要点。",
  },
  {
    id: "template-meeting-brief",
    name: "每周工作总结",
    description: "每周自动汇总实验进度、风险点和下周计划。",
  },
  {
    id: "template-news-brief",
    name: "项目进展汇总",
    description: "按日/周聚合项目里程碑、风险项和待办，自动生成进度概览。",
  },
];

const TEMPLATE_PROMPTS: Record<string, { name: string; prompt: string; runAt: string }> = {
  "template-meeting-brief": {
    name: "每周工作总结",
    prompt: "每周五 18:00 汇总本周实验进展、问题与下周安排。",
    runAt: "18:00",
  },
  "template-news-brief": {
    name: "项目进展汇总",
    prompt: "每周汇总项目关键进展、阻塞问题与下一步计划，按模块输出并标注负责人。",
    runAt: "07:00",
  },
};

function errorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

export function ToolsRoute() {
  const api = useApiClient();
  const {
    isSidebarOpen,
    openChat,
    openSidebar,
    projects,
  } = useChatShell();
  const [tasks, setTasks] = useState<ScheduledTaskDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [actionError, setActionError] = useState("");
  const [pendingTaskId, setPendingTaskId] = useState<string | null>(null);
  const [deleteTaskId, setDeleteTaskId] = useState<string | null>(null);
  const [editorDraft, setEditorDraft] = useState<ScheduledTaskEditorDraft | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editorPending, setEditorPending] = useState(false);
  const [subscriptions, setSubscriptions] = useState<LiteratureSubscription[]>([]);
  const [literatureProjects, setLiteratureProjects] = useState<Array<{ id: string; name: string }>>([]);
  const [literatureLoading, setLiteratureLoading] = useState(true);
  const [literatureDraft, setLiteratureDraft] = useState<LiteratureTaskEditorValue | null>(null);
  const [editingSubscriptionId, setEditingSubscriptionId] = useState<string | null>(null);
  const [pendingLiteratureId, setPendingLiteratureId] = useState<string | null>(null);
  const [deleteSubscriptionId, setDeleteSubscriptionId] = useState<string | null>(null);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    try {
      setTasks(await listScheduledTasks(api));
    } catch (error) {
      setLoadError(errorMessage(error, "定时任务加载失败"));
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    let cancelled = false;

    listScheduledTasks(api)
      .then((items) => {
        if (!cancelled) setTasks(items);
      })
      .catch((error: unknown) => {
        if (!cancelled) setLoadError(errorMessage(error, "定时任务加载失败"));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api]);

  const loadSubscriptions = useCallback(async () => {
    setLiteratureLoading(true);
    try {
      const [items, projectOptions] = await Promise.all([
        listLiteratureSubscriptions(api),
        listLiteratureProjects(api),
      ]);
      setSubscriptions(items);
      setLiteratureProjects(projectOptions);
    } catch (error) {
      setActionError(errorMessage(error, "文献订阅加载失败"));
    } finally {
      setLiteratureLoading(false);
    }
  }, [api]);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      listLiteratureSubscriptions(api),
      listLiteratureProjects(api),
    ])
      .then(([items, projectOptions]) => {
        if (cancelled) return;
        setSubscriptions(items);
        setLiteratureProjects(projectOptions);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setActionError(errorMessage(error, "文献订阅加载失败"));
        }
      })
      .finally(() => {
        if (!cancelled) setLiteratureLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api]);

  const viewTasks = useMemo(() => mapScheduledTasks(tasks), [tasks]);
  const viewSubscriptions = useMemo(
    () => mapLiteratureSubscriptions(subscriptions),
    [subscriptions],
  );
  const scheduledTaskProjects = useMemo(
    () =>
      projects
        .filter((project) => project.selectable !== false)
        .map((project) => ({ id: project.id, name: project.name })),
    [projects],
  );

  const toggleTask = async (taskId: string) => {
    const task = tasks.find((item) => item.id === taskId);
    if (!task || task.status === "running") return;

    setPendingTaskId(taskId);
    setActionError("");
    try {
      const updated = task.status === "active"
        ? await pauseScheduledTask(api, taskId)
        : await resumeScheduledTask(api, taskId);
      setTasks((current) => current.map((item) => (
        item.id === taskId ? updated : item
      )));
    } catch (error) {
      setActionError(errorMessage(error, "定时任务状态更新失败"));
    } finally {
      setPendingTaskId(null);
    }
  };

  const taskPendingDeletion = tasks.find((task) => task.id === deleteTaskId);
  const subscriptionPendingDeletion = subscriptions.find(
    (subscription) => subscription.id === deleteSubscriptionId,
  );

  const confirmDelete = async () => {
    if (!deleteTaskId) return;

    setPendingTaskId(deleteTaskId);
    setActionError("");
    try {
      await deleteScheduledTask(api, deleteTaskId);
      setTasks((current) => current.filter((task) => task.id !== deleteTaskId));
      setDeleteTaskId(null);
    } catch (error) {
      setActionError(errorMessage(error, "定时任务删除失败"));
    } finally {
      setPendingTaskId(null);
    }
  };

  const openCreateEditor = (templateId?: string) => {
    const draft = createEmptyScheduledTaskDraft();
    const template = templateId ? TEMPLATE_PROMPTS[templateId] : undefined;
    if (template) {
      draft.name = template.name;
      draft.schedule.taskPrompt = template.prompt;
      draft.schedule.runAt = template.runAt;
      draft.schedule.repeatMode = "weekly";
      draft.schedule.repeatSubValue = templateId === "template-meeting-brief" ? "fri" : "mon";
    }
    setActionError("");
    setEditingTaskId(null);
    setEditorDraft(draft);
  };

  const openEditEditor = (taskId: string) => {
    const task = tasks.find((item) => item.id === taskId);
    if (!task) return;
    const draft = scheduledTaskToEditorDraft(task);
    if (!draft) {
      setActionError("当前仅支持编辑每天、每周和每月运行的定时任务。");
      return;
    }
    setActionError("");
    setEditingTaskId(taskId);
    setEditorDraft(draft);
  };

  const confirmEditor = async () => {
    if (!editorDraft || editorPending) return;
    const result = buildScheduledTaskRequest(editorDraft);
    if (!result.ok) {
      setActionError(result.error);
      return;
    }

    setEditorPending(true);
    setActionError("");
    try {
      const saved = editingTaskId
        ? await updateScheduledTask(api, editingTaskId, result.request)
        : await createScheduledTask(api, result.request);
      setTasks((current) => editingTaskId
        ? current.map((task) => task.id === editingTaskId ? saved : task)
        : [...current, saved]);
      setEditorDraft(null);
      setEditingTaskId(null);
    } catch (error) {
      setActionError(errorMessage(error, editingTaskId ? "定时任务修改失败" : "定时任务创建失败"));
    } finally {
      setEditorPending(false);
    }
  };

  const openCreateLiterature = () => {
    setActionError("");
    setEditingSubscriptionId(null);
    setLiteratureDraft({ ...EMPTY_LITERATURE_SUBSCRIPTION });
  };

  const openEditLiterature = async (subscriptionId: string) => {
    const subscription = subscriptions.find((item) => item.id === subscriptionId);
    if (!subscription) return;
    setPendingLiteratureId(subscriptionId);
    setActionError("");
    try {
      setLiteratureDraft(
        await loadLiteratureSubscriptionDraft(api, subscription),
      );
      setEditingSubscriptionId(subscriptionId);
    } catch (error) {
      setActionError(errorMessage(error, "文献订阅信息加载失败"));
    } finally {
      setPendingLiteratureId(null);
    }
  };

  const confirmLiteratureEditor = async () => {
    if (!literatureDraft || editorPending) return;
    setEditorPending(true);
    setActionError("");
    try {
      if (editingSubscriptionId) {
        await updateLiteratureSubscription(
          api,
          editingSubscriptionId,
          literatureDraft,
        );
      } else {
        await createLiteratureSubscriptions(api, literatureDraft);
      }
      setLiteratureDraft(null);
      setEditingSubscriptionId(null);
      await loadSubscriptions();
    } catch (error) {
      setActionError(
        errorMessage(
          error,
          editingSubscriptionId ? "文献订阅修改失败" : "文献订阅创建失败",
        ),
      );
    } finally {
      setEditorPending(false);
    }
  };

  return (
    <>
      <ScheduledTasksOverview
        templates={TASK_TEMPLATES}
        tasks={viewTasks}
        isSidebarOpen={isSidebarOpen}
        loading={loading}
        error={loadError || actionError}
        pendingTaskId={pendingTaskId}
        literatureSubscriptions={viewSubscriptions}
        literatureLoading={literatureLoading}
        pendingLiteratureId={pendingLiteratureId}
        onOpenSidebar={openSidebar}
        onCreateCustom={() => openCreateEditor()}
        onCreateFromTemplate={(templateId) => {
          if (templateId === "template-paper-track") {
            openCreateLiterature();
            return;
          }
          openCreateEditor(templateId);
        }}
        onToggleTask={(taskId) => void toggleTask(taskId)}
        onEditTask={openEditEditor}
        onDeleteTask={(taskId) => {
          setActionError("");
          setDeleteTaskId(taskId);
        }}
        onOpenTaskChat={(sessionId) => void openChat(sessionId)}
        onRetry={loadError ? () => void loadTasks() : undefined}
        onCreateLiterature={openCreateLiterature}
        onFetchLiterature={async (subscriptionId) => {
          setPendingLiteratureId(subscriptionId);
          setActionError("");
          try {
            await fetchLiteratureSubscription(api, subscriptionId);
            await loadSubscriptions();
          } catch (error) {
            setActionError(errorMessage(error, "文献抓取失败"));
          } finally {
            setPendingLiteratureId(null);
          }
        }}
        onToggleLiterature={async (subscriptionId) => {
          const subscription = subscriptions.find((item) => item.id === subscriptionId);
          if (!subscription) return;
          setPendingLiteratureId(subscriptionId);
          setActionError("");
          try {
            const updated = await setLiteratureSubscriptionEnabled(
              api,
              subscription,
              !subscription.enabled,
            );
            setSubscriptions((current) => current.map((item) => (
              item.id === subscriptionId
                ? { ...item, ...updated, enabled: !subscription.enabled }
                : item
            )));
          } catch (error) {
            setActionError(errorMessage(error, "文献订阅状态修改失败"));
          } finally {
            setPendingLiteratureId(null);
          }
        }}
        onEditLiterature={(subscriptionId) => void openEditLiterature(subscriptionId)}
        onDeleteLiterature={(subscriptionId) => {
          setActionError("");
          setDeleteSubscriptionId(subscriptionId);
        }}
      />
      {editorDraft && (
        <ScheduledTaskEditorModal
          visible
          kind="schedule"
          editing={Boolean(editingTaskId)}
          literatureValue={{ ...EMPTY_LITERATURE_SUBSCRIPTION, topic: editorDraft.name }}
          scheduleValue={editorDraft.schedule}
          projects={scheduledTaskProjects}
          onLiteratureChange={(value) => setEditorDraft((current) => current
            ? { ...current, name: value.topic }
            : current)}
          onScheduleChange={(schedule) => setEditorDraft((current) => current
            ? { ...current, schedule }
            : current)}
          onCancel={() => {
            if (editorPending) return;
            setEditorDraft(null);
            setEditingTaskId(null);
          }}
          onConfirm={() => void confirmEditor()}
        />
      )}
      {literatureDraft && (
        <ScheduledTaskEditorModal
          visible
          kind="literature"
          editing={Boolean(editingSubscriptionId)}
          literatureValue={literatureDraft}
          scheduleValue={createEmptyScheduledTaskDraft().schedule}
          literatureProjects={literatureProjects}
          onLiteratureChange={setLiteratureDraft}
          onScheduleChange={() => undefined}
          onCancel={() => {
            if (editorPending) return;
            setLiteratureDraft(null);
            setEditingSubscriptionId(null);
          }}
          onConfirm={() => void confirmLiteratureEditor()}
        />
      )}
      <ScheduledTaskDeleteModal
        visible={Boolean(taskPendingDeletion)}
        description={
          <>任务“{taskPendingDeletion?.name}”删除后将无法恢复，并停止后续运行。</>
        }
        confirmLoading={pendingTaskId === deleteTaskId}
        onCancel={() => setDeleteTaskId(null)}
        onConfirm={confirmDelete}
      />
      <ScheduledTaskDeleteModal
        visible={Boolean(subscriptionPendingDeletion)}
        description={
          <>文献订阅“{subscriptionPendingDeletion?.name}”删除后将停止后续抓取，且无法恢复。</>
        }
        confirmLoading={pendingLiteratureId === deleteSubscriptionId}
        onCancel={() => setDeleteSubscriptionId(null)}
        onConfirm={async () => {
          if (!deleteSubscriptionId) return;
          setPendingLiteratureId(deleteSubscriptionId);
          setActionError("");
          try {
            await deleteLiteratureSubscription(api, deleteSubscriptionId);
            setSubscriptions((current) => current.filter((item) => item.id !== deleteSubscriptionId));
            setDeleteSubscriptionId(null);
          } catch (error) {
            setActionError(errorMessage(error, "文献订阅删除失败"));
          } finally {
            setPendingLiteratureId(null);
          }
        }}
      />
    </>
  );
}
