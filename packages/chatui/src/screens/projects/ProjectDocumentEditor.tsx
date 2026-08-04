import { Crepe } from '@milkdown/crepe';
import '@milkdown/crepe/theme/common/style.css';
import { commandsCtx, editorViewCtx } from '@milkdown/kit/core';
import type { Ctx } from '@milkdown/kit/ctx';
import { lift } from '@milkdown/kit/prose/commands';
import {
  liftListItem,
  wrapInList,
} from '@milkdown/kit/prose/schema-list';
import { TextSelection } from '@milkdown/kit/prose/state';
import {
  bulletListSchema,
  listItemSchema,
  orderedListSchema,
  paragraphSchema,
  setBlockTypeCommand,
} from '@milkdown/kit/preset/commonmark';
import React, { useEffect, useRef, useState } from 'react';

import { BaseButton } from '../../components/common';
import {
  ProjectDocumentAttachments,
  type ProjectDocumentAttachmentViewModel,
} from './ProjectDocumentAttachments';
import {
  ProjectDocumentMetadata,
  type ProjectDocumentIndexViewModel,
} from './ProjectDocumentMetadata';
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

const deleteMenuIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
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
  createdByName?: string;
  updatedByName?: string;
  updatedAt?: string;
  index?: ProjectDocumentIndexViewModel;
  attachments?: ProjectDocumentAttachmentViewModel[];
  attachmentAccept?: string;
  attachmentUnavailableHint?: string;
  saving?: boolean;
  saveError?: string;
  layout?: 'page' | 'panel';
  onTitleChange(title: string): void;
  onMarkdownChange(markdown: string): void;
  onUploadAttachments?(files: File[]): void | Promise<void>;
  onDeleteAttachment?(attachmentId: string): void | Promise<void>;
  onSave(): void;
  onClose(): void;
}

export function ProjectDocumentEditor({
  title,
  initialMarkdown = '',
  createdByName,
  updatedByName,
  updatedAt,
  index,
  attachments = [],
  attachmentAccept,
  attachmentUnavailableHint,
  saving = false,
  saveError,
  layout = 'page',
  onTitleChange,
  onMarkdownChange,
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
  const contentInset = layout === 'page' ? 'px-[120px]' : 'px-6 md:px-8';

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
            image: null,
            codeBlock: { label: '代码块' },
            table: null,
            math: { label: '公式' },
          },
          buildMenu: (builder) => {
            const itemMap = new Map(
              builder
                .build()
                .flatMap((group) => group.items)
                .map((item) => [item.key, item]),
            );
            const replaceBlockActions = new Set([
              'h1',
              'h2',
              'h3',
              'ordered-list',
              'bullet-list',
              'task-list',
              'code',
              'quote',
            ]);
            const focusOpenedMenuBlock = (ctx: Ctx) => {
              const view = ctx.get(editorViewCtx);
              const boundBlock = openedMenuBlockElement;
              const boundTextBlock =
                boundBlock?.matches(
                  'p, h1, h2, h3, h4, h5, h6, blockquote, pre',
                )
                  ? boundBlock
                  : boundBlock?.querySelector<HTMLElement>(
                      '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre',
                    );
              const selectionTarget =
                boundTextBlock ??
                (boundBlock instanceof HTMLElement ? boundBlock : null);
              if (!selectionTarget) return view;

              try {
                const position = view.posAtDOM(selectionTarget, 0);
                const resolvedPosition = view.state.doc.resolve(
                  Math.min(
                    Math.max(position, 0),
                    view.state.doc.content.size,
                  ),
                );
                view.dispatch(
                  view.state.tr.setSelection(
                    TextSelection.near(resolvedPosition),
                  ),
                );
              } catch {
                // The bound DOM block may have been replaced by Milkdown.
              }
              return view;
            };
            const clearCurrentBlockFormat = (ctx: Ctx) => {
              const view = focusOpenedMenuBlock(ctx);

              const listItem = listItemSchema.type(ctx);
              const hasAncestor = (typeName: string) => {
                const { $from } = view.state.selection;
                for (
                  let depth = $from.depth;
                  depth > 0;
                  depth -= 1
                ) {
                  if ($from.node(depth).type.name === typeName) return true;
                }
                return false;
              };

              for (let depth = 0; depth < 10; depth += 1) {
                if (!hasAncestor(listItem.name)) break;
                if (
                  !liftListItem(listItem)(
                    view.state,
                    view.dispatch,
                  )
                ) {
                  break;
                }
              }

              for (let depth = 0; depth < 10; depth += 1) {
                if (!hasAncestor('blockquote')) break;
                if (!lift(view.state, view.dispatch)) break;
              }

              const paragraph = paragraphSchema.type(ctx);
              const currentBlock = view.state.selection.$from.parent;
              if (
                currentBlock.isTextblock &&
                currentBlock.type !== paragraph
              ) {
                ctx.get(commandsCtx).call(setBlockTypeCommand.key, {
                  nodeType: paragraph,
                });
              }
            };
            const deleteOpenedMenuBlock = (ctx: Ctx) => {
              const view = focusOpenedMenuBlock(ctx);
              const { selection } = view.state;
              const listItem = listItemSchema.type(ctx);
              const { $from } = selection;
              let listItemDepth = -1;
              for (let depth = $from.depth; depth > 0; depth -= 1) {
                if ($from.node(depth).type.name !== listItem.name) continue;
                listItemDepth = depth;
                break;
              }
              if (listItemDepth > 0) {
                const listDepth = listItemDepth - 1;
                const targetDepth =
                  listDepth > 0 &&
                  $from.node(listDepth).childCount === 1
                    ? listDepth
                    : listItemDepth;
                view.dispatch(
                  view.state.tr.delete(
                    $from.before(targetDepth),
                    $from.after(targetDepth),
                  ),
                );
                return;
              }

              if (!selection.empty) {
                view.dispatch(
                  view.state.tr.delete(selection.from, selection.to),
                );
                return;
              }

              const targetDepth = Math.min(1, $from.depth);
              if (targetDepth < 1) return;

              view.dispatch(
                view.state.tr.delete(
                  $from.before(targetDepth),
                  $from.after(targetDepth),
                ),
              );
            };
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
              const isListAction = [
                'ordered-list',
                'bullet-list',
                'task-list',
              ].includes(key);
              const onRun = replaceBlockActions.has(key)
                ? (ctx: Parameters<
                    NonNullable<typeof definition.onRun>
                  >[0]) => {
                    clearCurrentBlockFormat(ctx);
                    if (!isListAction) {
                      if (key === 'quote') {
                        const view = ctx.get(editorViewCtx);
                        const { $from } = view.state.selection;
                        const currentBlock = $from.parent;
                        const blockStart = $from.before($from.depth);
                        const quoteType =
                          view.state.schema.nodes.blockquote;
                        if (!quoteType) return;
                        const quote = quoteType.create(null, currentBlock);
                        const transaction = view.state.tr.replaceWith(
                          blockStart,
                          blockStart + currentBlock.nodeSize,
                          quote,
                        );
                        transaction.setSelection(
                          TextSelection.near(
                            transaction.doc.resolve(
                              Math.min(
                                blockStart + 2,
                                transaction.doc.content.size,
                              ),
                            ),
                          ),
                        );
                        view.dispatch(transaction);
                        return;
                      }
                      definition.onRun?.(ctx);
                      return;
                    }

                    const view = ctx.get(editorViewCtx);
                    const listType =
                      key === 'ordered-list'
                        ? orderedListSchema.type(ctx)
                        : bulletListSchema.type(ctx);
                    const wrapped = wrapInList(listType)(
                      view.state,
                      view.dispatch,
                    );
                    if (!wrapped || key !== 'task-list') return;

                    const listItem = listItemSchema.type(ctx);
                    const { $from } = view.state.selection;
                    for (let depth = $from.depth; depth > 0; depth -= 1) {
                      const node = $from.node(depth);
                      if (node.type !== listItem) continue;
                      const position = $from.before(depth);
                      view.dispatch(
                        view.state.tr.setNodeMarkup(position, undefined, {
                          ...node.attrs,
                          checked: false,
                        }),
                      );
                      break;
                    }
                  }
                : definition.onRun;
              group.addItem(key, {
                ...definition,
                label: options?.label ?? definition.label,
                icon: addIconClass(icon, iconClasses),
                onRun,
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
            appendItem(common, 'math', {
              iconClass: 'chatui-document-menu-icon-math',
            });

            const actions = builder.addGroup('actions', '操作');
            actions.addItem('delete', {
              label: '删除',
              icon: addIconClass(
                deleteMenuIcon,
                'chatui-document-menu-action-delete',
              ),
              onRun: deleteOpenedMenuBlock,
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
    let hoveredBlockElement: Element | null = null;
    let blockMenuPointerEntered = false;
    let openedMenuBlockElement: Element | null = null;
    let clickedMenuAnchor: HTMLElement | null = null;
    let menuPositionObserver: MutationObserver | null = null;
    let menuPositionFrame: number | null = null;
    let pointerHighlightedMenuItem: HTMLElement | null = null;

    const resolveBlockKeyFromElement = (
      target: Element | null,
    ): BlockMenuKey | null => {
      const block = target?.closest(
        'h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block',
      );
      if (!block || !block.closest('.ProseMirror')) return null;
      if (block.matches('h1')) return 'h1';
      if (block.matches('h2')) return 'h2';
      if (block.matches('h3')) return 'h3';
      if (block.matches('blockquote')) return 'quote';
      if (
        block.matches('pre, .milkdown-code-block') ||
        block.querySelector('pre, .milkdown-code-block')
      ) {
        return 'code';
      }
      if (block.querySelector('input[type="checkbox"]')) return 'task-list';
      if (block.querySelector('.label.ordered')) return 'ordered-list';
      if (block.querySelector('.label.bullet')) return 'bullet-list';
      return null;
    };

    const getProseMirror = () =>
      root.querySelector<HTMLElement>('.ProseMirror');

    const findEditorBlockFromElement = (
      target: Element | null,
    ): Element | null => {
      const proseMirror = getProseMirror();
      if (!target || !proseMirror?.contains(target)) return null;

      const listItem = target.closest('.milkdown-list-item-block');
      if (listItem && proseMirror.contains(listItem)) return listItem;

      let block: Element | null = target;
      while (block?.parentElement && block.parentElement !== proseMirror) {
        block = block.parentElement;
      }
      if (
        !block ||
        block.parentElement !== proseMirror ||
        block.classList.contains('prosemirror-virtual-cursor')
      ) {
        return null;
      }
      return block;
    };

    const getEditorBlocks = () => {
      const proseMirror = getProseMirror();
      if (!proseMirror) return [];

      return Array.from(proseMirror.children).flatMap((block) => {
        if (block.classList.contains('prosemirror-virtual-cursor')) return [];
        const listItems = Array.from(
          block.querySelectorAll('.milkdown-list-item-block'),
        );
        return listItems.length ? listItems : [block];
      });
    };

    const findEditorBlockAtY = (clientY: number): Element | null => {
      const blocks = getEditorBlocks();
      const containing = blocks
        .map((block) => ({ block, rect: block.getBoundingClientRect() }))
        .filter(({ rect }) => clientY >= rect.top && clientY <= rect.bottom)
        .sort((left, right) => left.rect.height - right.rect.height);
      if (containing[0]) return containing[0].block;

      return blocks
        .map((block) => {
          const rect = block.getBoundingClientRect();
          const distance = Math.min(
            Math.abs(clientY - rect.top),
            Math.abs(clientY - rect.bottom),
          );
          return { block, distance };
        })
        .sort((left, right) => left.distance - right.distance)[0]?.block ?? null;
    };

    const syncBlockControls = (key: BlockMenuKey | null) => {
      const menu = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-slash-menu',
      );
      menu
        ?.querySelectorAll('li[data-chatui-selected="true"]')
        .forEach((item) =>
          item.removeAttribute('data-chatui-selected'),
        );
      if (key) {
        menu
          ?.querySelector(`svg.${blockMenuIconClass(key)}`)
          ?.closest('li')
          ?.setAttribute('data-chatui-selected', 'true');
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

    const bindBlockControls = (block: Element | null) => {
      if (block !== hoveredBlockElement) {
        hoveredBlockElement = block;
        hoveredBlockKey = resolveBlockKeyFromElement(block);
      }
      syncBlockControls(hoveredBlockKey);
    };

    const syncFromEditorSelection = () => {
      const anchorNode = ownerDocument.getSelection()?.anchorNode;
      const anchorElement =
        anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
      bindBlockControls(findEditorBlockFromElement(anchorElement ?? null));
    };

    const positionClickedBlockMenu = () => {
      const anchor = clickedMenuAnchor;
      const menu = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-slash-menu',
      );
      if (!anchor || !menu || menu.dataset.show !== 'true') return;

      const menuRect = menu.getBoundingClientRect();
      if (!menuRect.width || !menuRect.height) return;

      const anchorRect = anchor.getBoundingClientRect();
      const viewport = ownerDocument.defaultView;
      const viewportWidth =
        viewport?.innerWidth ?? ownerDocument.documentElement.clientWidth;
      const viewportHeight =
        viewport?.innerHeight ?? ownerDocument.documentElement.clientHeight;
      const padding = 12;
      const gap = 8;
      const maxLeft = Math.max(
        padding,
        viewportWidth - menuRect.width - padding,
      );
      const maxTop = Math.max(
        padding,
        viewportHeight - menuRect.height - padding,
      );
      const clampLeft = (left: number) =>
        Math.min(Math.max(left, padding), maxLeft);
      const clampTop = (top: number) =>
        Math.min(Math.max(top, padding), maxTop);

      let placement: 'left' | 'top' | 'bottom' = 'left';
      let viewportLeft = anchorRect.left - menuRect.width - gap;
      let viewportTop = clampTop(anchorRect.top);

      if (viewportLeft < padding) {
        const spaceAbove = anchorRect.top - gap - padding;
        const spaceBelow =
          viewportHeight - anchorRect.bottom - gap - padding;
        const placeBelow =
          spaceBelow >= menuRect.height || spaceBelow >= spaceAbove;
        placement = placeBelow ? 'bottom' : 'top';
        viewportLeft = clampLeft(anchorRect.left);
        viewportTop = placeBelow
          ? clampTop(anchorRect.bottom + gap)
          : clampTop(anchorRect.top - menuRect.height - gap);
      }

      const nextLeft = `${viewportLeft}px`;
      const nextTop = `${viewportTop}px`;

      if (
        menu.style.getPropertyValue('--chatui-block-menu-left') !==
        nextLeft
      ) {
        menu.style.setProperty('--chatui-block-menu-left', nextLeft);
      }
      if (
        menu.style.getPropertyValue('--chatui-block-menu-top') !==
        nextTop
      ) {
        menu.style.setProperty('--chatui-block-menu-top', nextTop);
      }
      menu.dataset.chatuiPlacement = placement;
    };

    const clearClickedBlockMenuPosition = () => {
      const menu = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-slash-menu',
      );
      if (!menu) return;
      menu.style.removeProperty('--chatui-block-menu-left');
      menu.style.removeProperty('--chatui-block-menu-top');
      delete menu.dataset.chatuiPlacement;
    };

    const setPointerHighlightedMenuItem = (
      item: HTMLElement | null,
    ) => {
      if (item === pointerHighlightedMenuItem) return;
      pointerHighlightedMenuItem?.removeAttribute(
        'data-chatui-pointer-highlighted',
      );
      pointerHighlightedMenuItem = item;
      pointerHighlightedMenuItem?.setAttribute(
        'data-chatui-pointer-highlighted',
        'true',
      );
    };

    const scheduleClickedBlockMenuPosition = () => {
      if (menuPositionFrame !== null) {
        window.cancelAnimationFrame(menuPositionFrame);
      }
      menuPositionFrame = window.requestAnimationFrame(() => {
        menuPositionFrame = null;
        positionClickedBlockMenu();
      });
    };

    const hideBlockMenu = () => {
      clickedMenuAnchor = null;
      blockMenuPointerEntered = false;
      openedMenuBlockElement = null;
      setPointerHighlightedMenuItem(null);
      editor.editor.action((ctx) => {
        ctx
          .get<{ hide(): void }, 'menuAPICtx'>('menuAPICtx')
          .hide();
      });
      clearClickedBlockMenuPosition();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const blockMenu = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-slash-menu',
      );
      if (blockMenu) {
        const rect = blockMenu.getBoundingClientRect();
        const isVisible = rect.width > 0 && rect.height > 0;
        const isInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        if (isVisible) {
          if (isInside) {
            setPointerHighlightedMenuItem(
              target?.closest<HTMLElement>(
                '.milkdown-slash-menu .menu-groups li',
              ) ?? null,
            );
            blockMenuPointerEntered = true;
            return;
          }
          setPointerHighlightedMenuItem(null);
          if (target?.closest('.milkdown-block-handle')) return;
          const proseMirror = getProseMirror();
          const pointedBlock =
            target && proseMirror?.contains(target)
              ? findEditorBlockFromElement(target) ??
                findEditorBlockAtY(event.clientY)
              : null;
          if (
            pointedBlock &&
            openedMenuBlockElement &&
            pointedBlock !== openedMenuBlockElement
          ) {
            hideBlockMenu();
            return;
          }
          if (pointedBlock === openedMenuBlockElement) return;
          if (blockMenuPointerEntered) hideBlockMenu();
          return;
        }
        blockMenuPointerEntered = false;
        setPointerHighlightedMenuItem(null);
      }

      if (target?.closest('.milkdown-block-handle')) {
        syncBlockControls(hoveredBlockKey);
        return;
      }
      const proseMirror = getProseMirror();
      if (!target || !proseMirror?.contains(target)) return;

      const block =
        findEditorBlockFromElement(target) ??
        findEditorBlockAtY(event.clientY);
      bindBlockControls(block);
    };

    const handleMenuPointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      setPointerHighlightedMenuItem(
        target?.closest<HTMLElement>(
          '.milkdown-slash-menu .menu-groups li',
        ) ?? null,
      );
    };

    const handleMenuPointerOut = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const item = target?.closest<HTMLElement>(
        '.milkdown-slash-menu .menu-groups li',
      );
      if (!item) return;

      const relatedTarget =
        event.relatedTarget instanceof Element
          ? event.relatedTarget
          : null;
      if (relatedTarget && item.contains(relatedTarget)) return;

      const nextItem = relatedTarget?.closest<HTMLElement>(
        '.milkdown-slash-menu .menu-groups li',
      );
      setPointerHighlightedMenuItem(nextItem ?? null);
    };

    const handleAddButtonClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const addButton = target?.closest<HTMLElement>(
        '.milkdown-block-handle .operation-item:first-child',
      );
      if (addButton) {
        const clickedBlockKey = hoveredBlockKey;
        clickedMenuAnchor = addButton;
        openedMenuBlockElement = hoveredBlockElement;
        window.setTimeout(() => {
          syncBlockControls(clickedBlockKey);
          scheduleClickedBlockMenuPosition();
        }, 0);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === '/') window.setTimeout(syncFromEditorSelection, 0);
    };

    ownerDocument.addEventListener('pointermove', handlePointerMove);
    ownerDocument.addEventListener('pointerover', handleMenuPointerOver);
    ownerDocument.addEventListener('pointerout', handleMenuPointerOut);
    ownerDocument.addEventListener('click', handleAddButtonClick);
    root.addEventListener('keyup', handleKeyUp);

    const creation = editor.create();
    void creation.then(() => {
      root.querySelector<HTMLElement>('.ProseMirror')?.focus();
      const blockMenu = ownerDocument.querySelector<HTMLElement>(
        '.milkdown-slash-menu',
      );
      if (blockMenu) {
        menuPositionObserver = new MutationObserver(() => {
          if (blockMenu.dataset.show === 'true' && clickedMenuAnchor) {
            scheduleClickedBlockMenuPosition();
            return;
          }
          if (blockMenu.dataset.show !== 'true') {
            clickedMenuAnchor = null;
            openedMenuBlockElement = null;
            setPointerHighlightedMenuItem(null);
            clearClickedBlockMenuPosition();
          }
        });
        menuPositionObserver.observe(blockMenu, {
          attributes: true,
          attributeFilter: ['data-show', 'style'],
        });
      }
      syncFromEditorSelection();
    });

    return () => {
      ownerDocument.removeEventListener('pointermove', handlePointerMove);
      ownerDocument.removeEventListener(
        'pointerover',
        handleMenuPointerOver,
      );
      ownerDocument.removeEventListener('pointerout', handleMenuPointerOut);
      ownerDocument.removeEventListener('click', handleAddButtonClick);
      root.removeEventListener('keyup', handleKeyUp);
      void creation.then(() => {
        menuPositionObserver?.disconnect();
        if (menuPositionFrame !== null) {
          window.cancelAnimationFrame(menuPositionFrame);
        }
        editor.destroy();
      });
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

  return (
    <section className={styles.shell} aria-label="项目文档编辑器">
      <header className={styles.header}>
        <div className={styles.headerActions}>
          <BaseButton
            type="secondary"
            size="small"
            rounded="large"
            disabled={saving}
            onClick={onClose}
          >
            取消
          </BaseButton>
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
        {saveError && <div className={styles.saveError}>{saveError}</div>}
        <div className={styles.editorCanvas}>
          <section className={`mb-4 shrink-0 ${contentInset}`}>
            <input
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
              placeholder="请输入标题"
              className={styles.titleInput}
              aria-label="文档标题"
            />
            <ProjectDocumentMetadata
              createdByName={createdByName}
              updatedByName={updatedByName}
              updatedAt={updatedAt}
              index={index}
            />
            <div className="mt-4 h-px bg-lineSubtle" />
          </section>

          <section className="auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1">
            <div
              ref={editorRootRef}
              className={`${styles.milkdownHost} ${markdownStyles.editor} ${contentInset} chatui-project-document-editor`}
              style={crepeTheme}
            />

            {onUploadAttachments && (
              <input
                ref={attachmentInputRef}
                type="file"
                multiple
                accept={attachmentAccept}
                className="hidden"
                onChange={(event) => void handleAttachmentSelection(event)}
              />
            )}
            <ProjectDocumentAttachments
              attachments={attachments}
              className={`${layout === 'page' ? 'mx-[120px]' : 'mx-6 md:mx-8'} mb-6 mt-8 border-t border-lineSubtle pt-6`}
              uploading={uploadingAttachments}
              deletingAttachmentId={deletingAttachmentId}
              unavailableHint={attachmentUnavailableHint}
              error={attachmentError}
              onRequestUpload={
                onUploadAttachments
                  ? () => attachmentInputRef.current?.click()
                  : undefined
              }
              onDeleteAttachment={
                onDeleteAttachment
                  ? (attachmentId) => void handleDeleteAttachment(attachmentId)
                  : undefined
              }
            />
          </section>
        </div>
      </div>
    </section>
  );
}
