import { Crepe } from '@milkdown/crepe';
import '@milkdown/crepe/theme/common/style.css';
import {
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Loader2,
  SearchX,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { BaseButton } from '../../components/common';
import type {
  ProjectDocumentAttachmentViewModel,
  ProjectDocumentIndexViewModel,
} from './ProjectDocumentPreview';
import markdownStyles from './ProjectDocumentMarkdown.module.css';
import styles from './ProjectDocumentEditor.module.css';

const crepeTheme = {
  '--crepe-color-background': 'var(--chatui-color-surface)',
  '--crepe-color-on-background': 'var(--chatui-color-text-primary)',
  '--crepe-color-surface': 'var(--chatui-color-surface-muted)',
  '--crepe-color-surface-low': 'var(--chatui-color-line-soft)',
  '--crepe-color-on-surface': 'var(--chatui-color-text-primary)',
  '--crepe-color-on-surface-variant': 'var(--chatui-color-text-secondary)',
  '--crepe-color-outline': 'var(--chatui-color-control-border)',
  '--crepe-color-primary': 'var(--chatui-color-brand-primary)',
  '--crepe-color-secondary': 'var(--chatui-color-brand-primary-soft-strong)',
  '--crepe-color-on-secondary': 'var(--chatui-color-text-primary)',
  '--crepe-color-inverse': 'var(--chatui-color-chat-floating-surface)',
  '--crepe-color-on-inverse': 'var(--chatui-color-static-white)',
  '--crepe-color-inline-code': 'var(--chatui-color-status-danger)',
  '--crepe-color-error': 'var(--chatui-color-status-danger)',
  '--crepe-color-hover': 'var(--chatui-color-project-conversation-hover)',
  '--crepe-color-selected': 'var(--chatui-color-brand-primary-soft-strong)',
  '--crepe-color-inline-area': 'var(--chatui-color-line-soft)',
  '--crepe-font-title': 'inherit',
  '--crepe-font-default': 'inherit',
  '--crepe-font-code': 'inherit',
  '--crepe-shadow-1': 'var(--chatui-shadow-sm)',
  '--crepe-shadow-2': 'var(--chatui-shadow-md)',
} as React.CSSProperties;

const addIconClass = (icon: string, className: string) =>
  icon.replace('<svg', `<svg class="${className}"`);

const headingMenuIcon = (level: 1 | 2 | 3) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${level}</tspan>
    </text>
  </svg>
`;

const codeMenuIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`;

const dividerMenuIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`;

type BlockMenuKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'ordered-list'
  | 'bullet-list'
  | 'task-list'
  | 'code'
  | 'quote';

const blockMenuIconClass = (key: string) =>
  `chatui-document-menu-type-${key}`;

export interface ProjectDocumentEditorProps {
  projectName: string;
  title: string;
  initialMarkdown?: string;
  updatedAt?: string;
  index?: ProjectDocumentIndexViewModel;
  attachments?: ProjectDocumentAttachmentViewModel[];
  attachmentAccept?: string;
  attachmentUnavailableHint?: string;
  saving?: boolean;
  saveError?: string;
  onTitleChange(title: string): void;
  onMarkdownChange(markdown: string): void;
  onOpenAttachment?(attachmentId: string): void;
  onUploadAttachments?(files: File[]): void | Promise<void>;
  onDeleteAttachment?(attachmentId: string): void | Promise<void>;
  onSave(): void;
  onClose(): void;
}

const indexIcon = {
  disabled: <SearchX size={14} />,
  pending: <Clock3 size={14} />,
  indexed: <CheckCircle2 size={14} />,
};

export function ProjectDocumentEditor({
  projectName,
  title,
  initialMarkdown = '',
  updatedAt,
  index,
  attachments = [],
  attachmentAccept,
  attachmentUnavailableHint,
  saving = false,
  saveError,
  onTitleChange,
  onMarkdownChange,
  onOpenAttachment,
  onUploadAttachments,
  onDeleteAttachment,
  onSave,
  onClose,
}: ProjectDocumentEditorProps) {
  const editorRootRef = useRef<HTMLDivElement | null>(null);
  const attachmentInputRef = useRef<HTMLInputElement | null>(null);
  const initialMarkdownRef = useRef(initialMarkdown);
  const onMarkdownChangeRef = useRef(onMarkdownChange);
  const [uploadingAttachments, setUploadingAttachments] = useState(false);
  const [deletingAttachmentId, setDeletingAttachmentId] = useState<string | null>(null);
  const [attachmentError, setAttachmentError] = useState('');

  useEffect(() => {
    onMarkdownChangeRef.current = onMarkdownChange;
  }, [onMarkdownChange]);

  useEffect(() => {
    const root = editorRootRef.current;
    if (!root) return;

    const editor = new Crepe({
      root,
      defaultValue: initialMarkdownRef.current,
      features: {
        [Crepe.Feature.Placeholder]: false,
      },
      featureConfigs: {
        [Crepe.Feature.BlockEdit]: {
          addOnCurrentBlock: true,
          preserveCurrentBlockContent: true,
          textGroup: {
            label: '基础',
            text: null,
            h1: { label: '一级标题' },
            h2: { label: '二级标题' },
            h3: { label: '三级标题' },
            h4: null,
            h5: null,
            h6: null,
            quote: { label: '引用' },
            divider: { label: '分割线' },
          },
          listGroup: {
            label: '列表',
            bulletList: { label: '无序列表' },
            orderedList: { label: '有序列表' },
            taskList: { label: '任务' },
          },
          advancedGroup: {
            label: '常用',
            image: { label: '图片' },
            codeBlock: { label: '代码块' },
            table: { label: '表格' },
            math: { label: '公式' },
          },
          buildMenu: (builder) => {
            const itemMap = new Map(
              builder
                .build()
                .flatMap((group) => group.items)
                .map((item) => [item.key, item]),
            );
            const appendItem = (
              group: ReturnType<typeof builder.addGroup>,
              key: string,
              options?: { icon?: string; iconClass?: string; label?: string },
            ) => {
              const item = itemMap.get(key);
              if (!item) return;
              const { key: _key, ...definition } = item;
              const icon = options?.icon ?? definition.icon;
              const iconClasses = [
                blockMenuIconClass(key),
                options?.iconClass,
              ]
                .filter(Boolean)
                .join(' ');
              group.addItem(key, {
                ...definition,
                label: options?.label ?? definition.label,
                icon: addIconClass(icon, iconClasses),
              });
            };

            builder.clear();
            const basic = builder.addGroup('basic', '基础');
            [
              {
                key: 'h1',
                icon: headingMenuIcon(1),
                label: '一级标题 (Ctrl + Alt + 1)\nMarkdown: # 空格',
              },
              {
                key: 'h2',
                icon: headingMenuIcon(2),
                label: '二级标题 (Ctrl + Alt + 2)\nMarkdown: ## 空格',
              },
              {
                key: 'h3',
                icon: headingMenuIcon(3),
                label: '三级标题 (Ctrl + Alt + 3)\nMarkdown: ### 空格',
              },
              {
                key: 'ordered-list',
                label: '有序列表\nMarkdown: 1. 空格',
              },
              {
                key: 'bullet-list',
                label: '无序列表\nMarkdown: - 空格',
              },
              {
                key: 'task-list',
                label: '任务列表\nMarkdown: - [ ] 空格',
              },
              {
                key: 'code',
                icon: codeMenuIcon,
                label: '代码块\nMarkdown: ``` 空格',
              },
              {
                key: 'quote',
                label: '引用\nMarkdown: > 空格',
              },
              {
                key: 'divider',
                icon: dividerMenuIcon,
                label: '分割线\nMarkdown: --- 空格',
              },
            ].forEach(({ key, icon, label }) => {
              appendItem(basic, key, { icon, label });
            });

            const common = builder.addGroup('common', '常用');
            appendItem(common, 'task-list', {
              iconClass: 'chatui-document-menu-icon-task',
            });
            appendItem(common, 'image', {
              iconClass: 'chatui-document-menu-icon-image',
            });
            appendItem(common, 'table', {
              iconClass: 'chatui-document-menu-icon-table',
            });
            appendItem(common, 'math', {
              iconClass: 'chatui-document-menu-icon-math',
            });
          },
        },
      },
    });

    editor.on((listener) => {
      listener.markdownUpdated((_ctx, markdown, previousMarkdown) => {
        if (markdown !== previousMarkdown) {
          onMarkdownChangeRef.current(markdown);
        }
      });
    });

    const ownerDocument = root.ownerDocument;
    let defaultAddIcon = '';
    let hoveredBlockKey: BlockMenuKey | null = null;

    const resolveBlockKeyFromElement = (
      target: Element | null,
    ): BlockMenuKey | null => {
      const block = target?.closest(
        'h1, h2, h3, blockquote, pre, .milkdown-list-item-block',
      );
      if (!block || !block.closest('.ProseMirror')) return null;
      if (block.matches('h1')) return 'h1';
      if (block.matches('h2')) return 'h2';
      if (block.matches('h3')) return 'h3';
      if (block.matches('blockquote')) return 'quote';
      if (block.matches('pre')) return 'code';
      if (block.querySelector('input[type="checkbox"]')) return 'task-list';
      if (block.querySelector('.label.ordered')) return 'ordered-list';
      if (block.querySelector('.label.bullet')) return 'bullet-list';
      return null;
    };

    const syncBlockControls = (key: BlockMenuKey | null) => {
      const menu = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-slash-menu',
      );
      menu
        ?.querySelectorAll('li.chatui-selected')
        .forEach((item) => item.classList.remove('chatui-selected'));
      if (key) {
        menu
          ?.querySelector(`svg.${blockMenuIconClass(key)}`)
          ?.closest('li')
          ?.classList.add('chatui-selected');
      }

      const addIcon = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-block-handle .operation-item:first-child .milkdown-icon',
      );
      if (!addIcon) return;
      if (!defaultAddIcon) defaultAddIcon = addIcon.innerHTML;

      const selectedIcon = key
        ? menu?.querySelector<SVGElement>(
            `svg.${blockMenuIconClass(key)}`,
          )
        : null;
      const nextType = key ?? 'default';
      if (addIcon.dataset.chatuiBlockType === nextType) return;
      addIcon.innerHTML = selectedIcon?.outerHTML ?? defaultAddIcon;
      addIcon.dataset.chatuiBlockType = nextType;
    };

    const syncFromEditorSelection = () => {
      const anchorNode = ownerDocument.getSelection()?.anchorNode;
      const anchorElement =
        anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
      const key = resolveBlockKeyFromElement(anchorElement ?? null);
      hoveredBlockKey = key;
      syncBlockControls(key);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('.milkdown-block-handle')) {
        syncBlockControls(hoveredBlockKey);
        return;
      }
      if (!target?.closest('.ProseMirror')) return;
      hoveredBlockKey = resolveBlockKeyFromElement(target);
      syncBlockControls(hoveredBlockKey);
    };

    const handlePointerUp = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (
        target?.closest(
          '.milkdown-block-handle .operation-item:first-child',
        )
      ) {
        window.setTimeout(syncFromEditorSelection, 0);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === '/') window.setTimeout(syncFromEditorSelection, 0);
    };

    ownerDocument.addEventListener('pointermove', handlePointerMove);
    ownerDocument.addEventListener('pointerup', handlePointerUp);
    root.addEventListener('keyup', handleKeyUp);

    const creation = editor.create();
    void creation.then(() => {
      root.querySelector<HTMLElement>('.ProseMirror')?.focus();
      syncFromEditorSelection();
    });

    return () => {
      ownerDocument.removeEventListener('pointermove', handlePointerMove);
      ownerDocument.removeEventListener('pointerup', handlePointerUp);
      root.removeEventListener('keyup', handleKeyUp);
      void creation.then(() => editor.destroy());
    };
  }, []);

  const handleAttachmentSelection = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = '';
    if (!files.length || !onUploadAttachments) return;

    setUploadingAttachments(true);
    setAttachmentError('');
    try {
      await onUploadAttachments(files);
    } catch (error) {
      setAttachmentError(
        error instanceof Error ? error.message : '附件上传失败',
      );
    } finally {
      setUploadingAttachments(false);
    }
  };

  const handleDeleteAttachment = async (attachmentId: string) => {
    if (!onDeleteAttachment) return;
    setDeletingAttachmentId(attachmentId);
    setAttachmentError('');
    try {
      await onDeleteAttachment(attachmentId);
    } catch (error) {
      setAttachmentError(
        error instanceof Error ? error.message : '附件删除失败',
      );
    } finally {
      setDeletingAttachmentId(null);
    }
  };

  const displayTitle = title.trim() || '未命名文档';

  return (
    <section className={styles.shell} aria-label="项目文档编辑器">
      <header className={styles.header}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="关闭文档编辑器"
          title="关闭"
        >
          <X size={20} />
        </button>
        <div className={styles.breadcrumb}>
          <span className={styles.projectName}>{projectName}</span>
          <span className={styles.separator} aria-hidden="true">/</span>
          <span className={styles.fileName}>{displayTitle}</span>
        </div>
        <div className={styles.headerActions}>
          {saveError && <span className={styles.saveError}>{saveError}</span>}
          <BaseButton
            type="primary"
            size="small"
            rounded="large"
            disabled={saving}
            onClick={onSave}
          >
            {saving ? '保存中…' : '保存'}
          </BaseButton>
        </div>
      </header>

      <div
        className={`${styles.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`}
      >
        <div className={styles.editorCanvas}>
          <section className="mb-4 shrink-0 px-[120px]">
            <input
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
              placeholder="请输入标题"
              className={styles.titleInput}
              aria-label="文档标题"
            />
            {(updatedAt || index) && (
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText">
                {updatedAt && <span>最近修改: {updatedAt}</span>}
                {index && (
                  <span
                    className="inline-flex items-center gap-1.5"
                    title={index.detail}
                  >
                    {indexIcon[index.status]}
                    {index.statusLabel}
                  </span>
                )}
              </div>
            )}
            <div className="mt-4 h-px bg-lineSubtle" />
          </section>

          <section className="auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1">
            <div
              ref={editorRootRef}
              className={`${styles.milkdownHost} ${markdownStyles.editor} chatui-project-document-editor`}
              style={crepeTheme}
            />

            <div className="mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-primaryText">附件</div>
                {onUploadAttachments && (
                  <>
                    <input
                      ref={attachmentInputRef}
                      type="file"
                      multiple
                      accept={attachmentAccept}
                      className="hidden"
                      onChange={(event) => void handleAttachmentSelection(event)}
                    />
                    <BaseButton
                      type="secondary"
                      size="small"
                      disabled={uploadingAttachments}
                      onClick={() => attachmentInputRef.current?.click()}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {uploadingAttachments ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <Upload size={14} />
                        )}
                        {uploadingAttachments ? '上传中' : '上传附件'}
                      </span>
                    </BaseButton>
                  </>
                )}
              </div>

              {attachments.length ? (
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {attachments.map((attachment) => {
                    const deleting = deletingAttachmentId === attachment.id;
                    return (
                      <div
                        key={attachment.id}
                        className="inline-flex max-w-full items-center rounded-full border border-lineSubtle bg-surface text-sm text-secondaryText"
                        title={`${attachment.statusLabel} · ${attachment.sizeLabel}`}
                      >
                        <button
                          type="button"
                          onClick={() => onOpenAttachment?.(attachment.id)}
                          className="inline-flex min-w-0 items-center gap-2 rounded-l-full py-1.5 pl-3 pr-2 transition-colors hover:text-primaryText"
                        >
                          <FileText size={14} className="shrink-0" />
                          <span className="max-w-72 truncate">{attachment.name}</span>
                          <span className="text-xs text-tertiaryText">
                            {attachment.sizeLabel}
                          </span>
                          {attachment.status === 'processing' ? (
                            <Loader2 size={12} className="animate-spin" />
                          ) : (
                            <Download size={13} />
                          )}
                        </button>
                        {onDeleteAttachment && (
                          <button
                            type="button"
                            disabled={deleting}
                            onClick={() => void handleDeleteAttachment(attachment.id)}
                            className="mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait"
                            aria-label={`删除附件 ${attachment.name}`}
                            title="删除附件"
                          >
                            {deleting ? (
                              <Loader2 size={13} className="animate-spin" />
                            ) : (
                              <Trash2 size={13} />
                            )}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-2 text-sm text-tertiaryText">暂无附件</p>
              )}

              {attachmentUnavailableHint && (
                <p className="mt-2 text-xs text-tertiaryText">
                  {attachmentUnavailableHint}
                </p>
              )}
              {attachmentError && (
                <p role="alert" className="mt-2 text-sm text-danger">
                  {attachmentError}
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
