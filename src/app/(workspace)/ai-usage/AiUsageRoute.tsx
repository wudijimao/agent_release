"use client";

import { AiUsagePage, BaseButton } from "@bioagent/chatui";
import { useEffect, useMemo, useState } from "react";

import {
  createAiUsageMonthOptions,
  loadAiUsage,
  mapAiUsageViewModel,
  type AiUsagePayload,
} from "@/adapters/ai-usage";
import { useChatShell } from "@/app/(workspace)/WorkspaceShell";
import { useApiClient } from "@/providers/AuthProvider";

const currentMonth =
  createAiUsageMonthOptions(new Date(), 1)[0]?.value ?? "";

export function AiUsageRoute() {
  const api = useApiClient();
  const { isSidebarOpen, openSidebar } = useChatShell();
  const [payload, setPayload] = useState<AiUsagePayload | null>(null);
  const [selectedMember, setSelectedMember] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    loadAiUsage(api)
      .then((result) => {
        if (!cancelled) setPayload(result);
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "AI 用量加载失败",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api, reloadKey]);

  const viewModel = useMemo(
    () =>
      payload
        ? mapAiUsageViewModel(payload, {
            memberId: selectedMember,
            month: selectedMonth,
          })
        : null,
    [payload, selectedMember, selectedMonth],
  );

  if (loading || !viewModel) {
    return (
      <div className="flex h-full items-center justify-center bg-surface text-sm text-secondaryText">
        {loading ? (
          "正在加载 AI 用量…"
        ) : (
          <div className="space-y-4 text-center">
            <p>{error || "暂无 AI 用量数据"}</p>
            <BaseButton
              type="secondary"
              size="small"
              onClick={() => {
                setLoading(true);
                setError("");
                setReloadKey((value) => value + 1);
              }}
            >
              重新加载
            </BaseButton>
          </div>
        )}
      </div>
    );
  }

  return (
    <AiUsagePage
      isSidebarOpen={isSidebarOpen}
      overviewCards={viewModel.overviewCards}
      memberOptions={viewModel.memberOptions}
      monthOptions={viewModel.monthOptions}
      selectedMember={selectedMember}
      selectedMonth={selectedMonth}
      trendPoints={viewModel.trendPoints}
      trendLabels={viewModel.trendLabels}
      trendTotal={viewModel.trendTotal}
      rechargeRecords={viewModel.rechargeRecords}
      onOpenSidebar={openSidebar}
      onMemberChange={setSelectedMember}
      onMonthChange={setSelectedMonth}
    />
  );
}
