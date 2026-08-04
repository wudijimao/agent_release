"use client";

import {
  BaseButton,
  ChatConversationViewport,
  ChatPreviewPanel,
  ProjectDocumentEditor,
  type ChatPreviewItemViewModel,
} from "@bioagent/chatui";
import { Pause, Play, RotateCcw, StepForward } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  beginChatStream,
  reduceChatStreamEvent,
  type ChatStreamViewState,
} from "@/adapters/chat-session";
import { mapMiraDocumentDraftPreview } from "@/adapters/mira-document-drafts";
import { CHAT_SSE_SHOWCASE_SCENARIOS } from "@/showcase/chat-sse-scenarios";

const INTERVAL_OPTIONS = [250, 500, 1_000, 2_000, 3_000] as const;

function createInitialState(userMessage: string): ChatStreamViewState {
  return beginChatStream([], {
    id: "showcase-user-message",
    role: "user",
    content: userMessage,
  });
}

function replayToEvent(
  userMessage: string,
  events: typeof CHAT_SSE_SHOWCASE_SCENARIOS[number]["events"],
  eventCount: number,
) {
  return events
    .slice(0, eventCount)
    .reduce(
      (state, event) => reduceChatStreamEvent(state, event.event, event.data),
      createInitialState(userMessage),
    );
}

export function ChatSseShowcase() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = CHAT_SSE_SHOWCASE_SCENARIOS[scenarioIndex];
  const [streamState, setStreamState] = useState(() =>
    createInitialState(scenario.userMessage),
  );
  const [cursor, setCursor] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [intervalMs, setIntervalMs] = useState<number>(1_000);
  const [draftPreview, setDraftPreview] =
    useState<ChatPreviewItemViewModel | null>(null);
  const [draftEdit, setDraftEdit] = useState<{
    title: string;
    markdown: string;
  } | null>(null);

  const currentEvent = cursor > 0 ? scenario.events[cursor - 1] : undefined;
  const nextEvent = scenario.events[cursor];
  const finished = cursor >= scenario.events.length;

  const reset = useCallback(() => {
    setPlaying(false);
    setCursor(0);
    setStreamState(createInitialState(scenario.userMessage));
    setDraftPreview(null);
    setDraftEdit(null);
  }, [scenario.userMessage]);

  const runNext = useCallback(() => {
    const event = scenario.events[cursor];
    if (!event) {
      setPlaying(false);
      return;
    }

    setStreamState((current) =>
      reduceChatStreamEvent(current, event.event, event.data),
    );
    setCursor((current) => current + 1);
    if (cursor + 1 >= scenario.events.length) setPlaying(false);
  }, [cursor, scenario.events]);

  const togglePlayback = useCallback(() => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (finished) {
      setCursor(0);
      setStreamState(createInitialState(scenario.userMessage));
      setDraftPreview(null);
      setDraftEdit(null);
    }
    setPlaying(true);
  }, [finished, playing, scenario.userMessage]);

  const jumpToEvent = useCallback(
    (index: number) => {
      const nextCursor = index + 1;
      setPlaying(false);
      setCursor(nextCursor);
      setDraftPreview(null);
      setDraftEdit(null);
      setStreamState(
        replayToEvent(scenario.userMessage, scenario.events, nextCursor),
      );
    },
    [scenario.events, scenario.userMessage],
  );

  useEffect(() => {
    if (!playing || finished) return;

    const timerId = window.setTimeout(runNext, intervalMs);
    return () => window.clearTimeout(timerId);
  }, [finished, intervalMs, playing, runNext]);

  const progress = useMemo(
    () => Math.round((cursor / scenario.events.length) * 100),
    [cursor, scenario.events.length],
  );

  const settleMiraDraft = useCallback(
    (actionKey: string, outcome: "saved" | "cancelled") => {
      setStreamState((current) => {
        const nextActions = { ...current.miraDraftActions };
        delete nextActions[actionKey];
        return {
          ...current,
          miraDraftActions: nextActions,
          messages: current.messages.map((message) =>
            message.miraDraft?.actionKey === actionKey
              ? {
                  ...message,
                  miraDraft: {
                    ...message.miraDraft,
                    status: outcome === "saved" ? "saved" as const : "error" as const,
                    errorMessage: outcome === "cancelled" ? "草稿已取消" : undefined,
                    actionable: false,
                    previewable: false,
                  },
                }
              : message,
          ),
        };
      });
      setDraftPreview(null);
      setDraftEdit(null);
    },
    [],
  );

  const openMiraDraftPreview = useCallback(
    (actionKey: string) => {
      const action = streamState.miraDraftActions?.[actionKey];
      if (!action) return;
      setDraftPreview(mapMiraDocumentDraftPreview(action, "EGFR 耐药研究"));
      setDraftEdit(null);
    },
    [streamState.miraDraftActions],
  );

  return (
    <main className="min-h-screen bg-surfaceMuted px-5 pb-8 pt-20 text-primaryText">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-primary">Chat SSE Showcase</p>
            <h1 className="mt-1 text-2xl font-semibold text-strongText">
              {scenario.name}
            </h1>
            <p className="mt-1 text-sm text-secondaryText">
              {scenario.description}
            </p>
          </div>
          <div className="text-right text-xs text-tertiaryText">
            <div>{cursor} / {scenario.events.length} 个事件</div>
            <div className="mt-1">当前状态：{streamState.statusLabel || streamState.statusPhase}</div>
          </div>
        </header>

        <section className="mb-4 rounded-xl border border-lineSubtle bg-surface p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-secondaryText">
              场景
              <select
                value={scenarioIndex}
                onChange={(event) => {
                  const nextIndex = Number(event.target.value);
                  const nextScenario = CHAT_SSE_SHOWCASE_SCENARIOS[nextIndex];
                  setScenarioIndex(nextIndex);
                  setPlaying(false);
                  setCursor(0);
                  setStreamState(createInitialState(nextScenario.userMessage));
                  setDraftPreview(null);
                  setDraftEdit(null);
                }}
                className="h-8 max-w-[280px] rounded-md border border-lineSubtle bg-surface px-2 text-sm text-primaryText outline-none transition-colors focus:border-primary"
              >
                {CHAT_SSE_SHOWCASE_SCENARIOS.map((item, index) => (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <BaseButton
              type="secondary"
              size="small"
              icon={<RotateCcw size={14} />}
              onClick={reset}
            >
              重置
            </BaseButton>
            <BaseButton
              type="primary"
              size="small"
              icon={playing ? <Pause size={14} /> : <Play size={14} />}
              onClick={togglePlayback}
            >
              {playing ? "暂停" : finished ? "重新播放" : "自动播放"}
            </BaseButton>
            <BaseButton
              type="secondary"
              size="small"
              icon={<StepForward size={14} />}
              disabled={playing || finished}
              onClick={runNext}
            >
              下一步
            </BaseButton>

            <label className="ml-auto flex items-center gap-2 text-sm text-secondaryText">
              自动间隔
              <select
                value={intervalMs}
                onChange={(event) => setIntervalMs(Number(event.target.value))}
                className="h-8 rounded-md border border-lineSubtle bg-surface px-2 text-sm text-primaryText outline-none transition-colors focus:border-primary"
              >
                {INTERVAL_OPTIONS.map((value) => (
                  <option key={value} value={value}>
                    {value < 1_000 ? `${value} ms` : `${value / 1_000} 秒`}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surfaceMuted">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded bg-surfaceMuted px-2 py-1 font-mono text-primaryText">
              {currentEvent?.event ?? "尚未开始"}
            </span>
            <span className="text-secondaryText">
              {currentEvent?.label ?? `下一步：${nextEvent?.label ?? "播放完成"}`}
            </span>
          </div>
        </section>

        <div className="grid min-h-[680px] gap-4 xl:grid-cols-[minmax(0,1fr)_390px]">
          <section className="relative min-h-[680px] overflow-hidden rounded-xl border border-lineSubtle bg-surface shadow-sm">
            <div className="absolute inset-x-0 top-0 z-10 flex h-12 items-center border-b border-lineSubtle bg-surface px-5 text-sm font-medium text-primaryText">
              实际聊天渲染
            </div>
            <div className="absolute inset-0 pt-12">
              <ChatConversationViewport
                messages={streamState.messages}
                isTyping={!finished || streamState.statusVisible}
                statusPhase={streamState.statusPhase}
                statusLabel={streamState.statusLabel}
                statusVisible={streamState.statusVisible}
                searchSteps={streamState.searchSteps}
                hasReceivedAssistantChunk={streamState.hasReceivedAssistantChunk}
                getMessageKey={(message, index) =>
                  message.id ?? `showcase-message-${index}`
                }
                onPreviewMiraDraft={openMiraDraftPreview}
                onConfirmMiraDraft={(actionKey) => settleMiraDraft(actionKey, "saved")}
                onCancelMiraDraft={(actionKey) => settleMiraDraft(actionKey, "cancelled")}
              />
            </div>
            {draftPreview && (
              <div className="absolute inset-y-12 right-0 z-20 w-[min(68%,720px)] min-w-[420px] shadow-lg">
                <ChatPreviewPanel
                  tabs={[draftPreview]}
                  activeKey={draftPreview.key}
                  onSelectTab={() => undefined}
                  onCloseTab={() => {
                    setDraftPreview(null);
                    setDraftEdit(null);
                  }}
                  onClose={() => {
                    setDraftPreview(null);
                    setDraftEdit(null);
                  }}
                  onAction={(_itemKey, actionId) => {
                    if (actionId === "edit" && draftPreview.document) {
                      setDraftEdit({
                        title: draftPreview.document.title,
                        markdown: draftPreview.document.markdown,
                      });
                      return;
                    }
                    if (actionId === "cancel-edit") {
                      setDraftEdit(null);
                      return;
                    }
                    const actionKey = draftPreview.key.slice("draft:".length);
                    settleMiraDraft(
                      actionKey,
                      actionId === "confirm" || actionId === "save-edit"
                        ? "saved"
                        : "cancelled",
                    );
                  }}
                  resolveActions={(item) =>
                    draftEdit
                      ? [
                          {
                            id: "cancel-edit",
                            label: "取消",
                            tone: "secondary",
                          },
                          {
                            id: "save-edit",
                            label: "保存",
                            tone: "primary",
                          },
                        ]
                      : item.actions
                  }
                  renderContent={() =>
                    draftEdit && draftPreview.document ? (
                      <ProjectDocumentEditor
                        projectName="EGFR 耐药研究"
                        title={draftEdit.title}
                        initialMarkdown={draftEdit.markdown}
                        createdByName={draftPreview.document.createdByName}
                        updatedByName={draftPreview.document.updatedByName}
                        updatedAt={draftPreview.document.updatedAt}
                        index={draftPreview.document.index}
                        layout="panel"
                        showHeaderActions={false}
                        onTitleChange={(title) =>
                          setDraftEdit((current) =>
                            current ? { ...current, title } : current,
                          )
                        }
                        onMarkdownChange={(markdown) =>
                          setDraftEdit((current) =>
                            current ? { ...current, markdown } : current,
                          )
                        }
                        onSave={() =>
                          settleMiraDraft(
                            draftPreview.key.slice("draft:".length),
                            "saved",
                          )
                        }
                        onClose={() => setDraftEdit(null)}
                      />
                    ) : undefined
                  }
                  onResizeStart={() => undefined}
                />
              </div>
            )}
          </section>

          <aside className="flex min-h-[680px] flex-col overflow-hidden rounded-xl border border-lineSubtle bg-surface shadow-sm">
            <div className="border-b border-lineSubtle px-4 py-3">
              <h2 className="text-sm font-semibold text-primaryText">SSE 事件轨迹</h2>
              <p className="mt-1 text-xs text-tertiaryText">
                点击任意事件可直接回放到该步骤；绿色为已执行，描边项为下一事件。
              </p>
            </div>
            <ol className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
              {scenario.events.map((event, index) => {
                const processed = index < cursor;
                const upcoming = index === cursor;
                const selected = index === cursor - 1;
                return (
                  <li
                    key={`${event.event}-${index}`}
                  >
                    <button
                      type="button"
                      onClick={() => jumpToEvent(index)}
                      aria-current={selected ? "step" : undefined}
                      className={`w-full rounded-lg border px-3 py-2 text-left transition-colors hover:border-primary hover:bg-primary-soft ${
                      selected
                        ? "border-primary bg-primary-soft ring-1 ring-primary-soft-strong"
                        : processed
                          ? "border-primary-soft-strong bg-primary-soft"
                        : upcoming
                          ? "border-primary bg-surface"
                          : "border-transparent bg-surfaceMuted"
                    }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 shrink-0 text-right font-mono text-[11px] text-tertiaryText">
                          {index + 1}
                        </span>
                        <span className="truncate font-mono text-xs text-primaryText">
                          {event.event}
                        </span>
                      </div>
                      <div className="ml-8 mt-0.5 text-xs text-secondaryText">
                        {event.label}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="border-t border-lineSubtle p-3">
              <div className="mb-2 text-xs font-medium text-secondaryText">当前事件数据</div>
              <pre className="max-h-44 overflow-auto whitespace-pre-wrap break-all rounded-lg bg-surfaceMuted px-3 py-2 text-[11px] leading-5 text-primaryText">
                {currentEvent
                  ? JSON.stringify(currentEvent.data, null, 2)
                  : "点击“下一步”或“自动播放”开始。"}
              </pre>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
