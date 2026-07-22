import { FileText, LoaderCircle, Paperclip, Trash2, X } from "lucide-react";
import { useState } from "react";

import { BaseModal } from "../common/BaseModal";

export interface ManagedChatAttachment {
  id: string;
  name: string;
  mimeType: string;
  fileSize: number;
  contextEnabled: boolean;
}

export interface ChatAttachmentManagerProps {
  attachments: readonly ManagedChatAttachment[];
  loading?: boolean;
  error?: string;
  pendingAttachmentId?: string;
  onClose?(): void;
  onToggleContext(attachment: ManagedChatAttachment, enabled: boolean): void;
  onDelete(attachment: ManagedChatAttachment): void;
}

export interface ChatAttachmentManagerTriggerProps {
  active?: boolean;
  count?: number;
  onClick(): void;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ChatAttachmentManagerTrigger({
  active = false,
  count = 0,
  onClick,
}: ChatAttachmentManagerTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${
        active ? "bg-chatMenuActive" : "bg-transparent hover:bg-chatMenuActive"
      }`}
    >
      <Paperclip size={14} className="text-secondaryText" aria-hidden="true" />
      <span>附件</span>
      {count > 0 && (
        <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-chatAttachmentIconSurface px-1.5 text-xs text-secondaryText">
          {count}
        </span>
      )}
    </button>
  );
}

export function ChatAttachmentManager({
  attachments,
  loading = false,
  error,
  pendingAttachmentId,
  onClose,
  onToggleContext,
  onDelete,
}: ChatAttachmentManagerProps) {
  const [deleteTarget, setDeleteTarget] =
    useState<ManagedChatAttachment | null>(null);

  return (
    <div className="flex h-full min-h-0 flex-col border-l border-shellFrameBorder bg-white">
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-shellFrameBorder px-4">
        <div className="min-w-0">
          <h2 className="truncate text-[15px] font-medium text-primaryText">
            会话附件
          </h2>
          <p className="mt-0.5 text-xs text-tertiaryText">
            控制附件是否参与后续对话
          </p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭会话附件"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-secondaryText transition-colors hover:bg-chatAttachmentHover hover:text-primaryText"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        {error && (
          <div
            role="alert"
            className="mb-3 rounded-lg border border-danger bg-danger-soft px-3 py-2 text-xs text-danger"
          >
            {error}
          </div>
        )}

        {loading ? (
          <div
            className="flex h-32 items-center justify-center gap-2 text-sm text-secondaryText"
            role="status"
          >
            <LoaderCircle
              size={16}
              className="animate-spin text-primary"
              aria-hidden="true"
            />
            正在加载附件…
          </div>
        ) : attachments.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center text-center">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chatAttachmentIconSurface text-chatMenuIcon">
              <FileText size={18} aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-primaryText">暂无会话附件</p>
            <p className="mt-1 text-xs text-tertiaryText">
              从输入框上传文件后会显示在这里
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {attachments.map((attachment) => {
              const pending = pendingAttachmentId === attachment.id;
              return (
                <li
                  key={attachment.id}
                  className="rounded-lg border border-chatAttachmentBorder bg-white p-3"
                >
                  <div className="flex min-w-0 items-start gap-2.5">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-chatAttachmentIconSurface text-chatMenuIcon">
                      <FileText size={16} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className="truncate text-sm font-medium text-primaryText"
                        title={attachment.name}
                      >
                        {attachment.name}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-tertiaryText">
                        {formatFileSize(attachment.fileSize)} ·{" "}
                        {attachment.mimeType}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setDeleteTarget(attachment)}
                      disabled={pending}
                      aria-label={`删除附件 ${attachment.name}`}
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-chatAttachmentTextMuted transition-colors hover:bg-danger-soft hover:text-danger disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {pending ? (
                        <LoaderCircle
                          size={14}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                      ) : (
                        <Trash2 size={14} aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-lineSoft pt-3">
                    <div>
                      <p className="text-xs font-medium text-primaryText">
                        用于上下文
                      </p>
                      <p className="mt-0.5 text-xs text-tertiaryText">
                        {attachment.contextEnabled
                          ? "后续消息会使用此附件"
                          : "已暂停用于后续消息"}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={attachment.contextEnabled}
                      aria-label={`${attachment.contextEnabled ? "停用" : "启用"}附件上下文 ${attachment.name}`}
                      disabled={pending}
                      onClick={() =>
                        onToggleContext(attachment, !attachment.contextEnabled)
                      }
                      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandFocus disabled:cursor-not-allowed disabled:opacity-50 ${
                        attachment.contextEnabled
                          ? "bg-primary"
                          : "bg-controlBorder"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                          attachment.contextEnabled
                            ? "translate-x-[18px]"
                            : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <BaseModal
        visible={Boolean(deleteTarget)}
        title="删除附件"
        okText="删除"
        cancelText="取消"
        okButtonProps={{ type: "button" }}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (!deleteTarget) return;
          onDelete(deleteTarget);
          setDeleteTarget(null);
        }}
      >
        <p className="text-sm leading-6 text-secondaryText">
          删除后无法恢复；已发送并被历史消息引用的附件可能无法删除。
        </p>
      </BaseModal>
    </div>
  );
}
