"use client";

import { SkillPage, type SkillCardViewModel } from "@bioagent/chatui";
import { useCallback, useEffect, useState } from "react";

import { installSkills, loadSkillsPage, uninstallSkills } from "@/adapters/skills";
import { mapSkillsPage } from "@/adapters/skills-view-model";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient } from "@/providers/AuthProvider";

const NOTICE_AUTO_HIDE_MS = 4_000;

function errorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

export function SkillsRoute() {
  const api = useApiClient();
  const { isSidebarOpen, openSidebar } = useChatShell();
  const [skills, setSkills] = useState<SkillCardViewModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [actionNotice, setActionNotice] = useState("");
  const [pendingSkillIds, setPendingSkillIds] = useState<string[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    try {
      setSkills(mapSkillsPage(await loadSkillsPage(api)));
    } catch (error) {
      setLoadError(errorMessage(error, "Skills 加载失败"));
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    let cancelled = false;

    loadSkillsPage(api)
      .then((data) => {
        if (cancelled) return;
        setSkills(mapSkillsPage(data));
        setLoadError("");
      })
      .catch((error: unknown) => {
        if (!cancelled) setLoadError(errorMessage(error, "Skills 加载失败"));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api]);

  useEffect(() => {
    if (!actionNotice) return;
    const timerId = window.setTimeout(() => setActionNotice(""), NOTICE_AUTO_HIDE_MS);
    return () => window.clearTimeout(timerId);
  }, [actionNotice]);

  const mutateSkills = async (skillIds: string[], installed: boolean) => {
    if (skillIds.length === 0 || pendingSkillIds.length > 0) return;
    setPendingSkillIds(skillIds);
    setActionNotice("");
    try {
      if (installed) await installSkills(api, skillIds);
      else await uninstallSkills(api, skillIds);
      setSkills((current) => current.map((skill) => (
        skillIds.includes(skill.id) ? { ...skill, installed } : skill
      )));
    } catch (error) {
      setActionNotice(errorMessage(error, installed ? "Skill 安装失败" : "Skill 卸载失败"));
    } finally {
      setPendingSkillIds([]);
    }
  };

  return (
    <>
      <SkillPage
        isSidebarOpen={isSidebarOpen}
        skills={skills}
        loading={loading}
        error={loadError}
        pendingSkillIds={pendingSkillIds}
        onOpenSidebar={openSidebar}
        onCreateSkill={() => setActionNotice("新建 Skill 暂缺服务端接口与流程定义，当前先保留高保真入口。")}
        onInstall={(skillIds) => void mutateSkills(skillIds, true)}
        onUninstall={(skillIds) => void mutateSkills(skillIds, false)}
        onRetry={() => void load()}
      />
      {actionNotice && (
        <div
          role="status"
          className="absolute bottom-6 left-1/2 z-40 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-lineSubtle bg-surface px-4 py-2 text-sm text-secondaryText shadow-md"
        >
          {actionNotice}
        </div>
      )}
    </>
  );
}
