export const CHAT_PREVIEW_MIN_CHAT_WIDTH = 320;
export const CHAT_PREVIEW_MIN_PANEL_WIDTH = 520;
export const CHAT_PREVIEW_MAX_PANEL_WIDTH = 900;
export const CHAT_PREVIEW_OVERLAY_DEFAULT_WIDTH = 720;

export interface ChatPreviewLayout {
  overlay: boolean;
  minWidth: number;
  maxWidth: number;
  defaultWidth: number;
}

export function resolveChatPreviewLayout(
  workspaceWidth: number,
  reservedRightWidth = 0,
  preferredPanelWidth?: number,
): ChatPreviewLayout {
  const safeWorkspaceWidth = Math.max(0, workspaceWidth);
  const inlineAvailableWidth = Math.max(
    0,
    safeWorkspaceWidth - Math.max(0, reservedRightWidth),
  );
  const inlinePanelMaxWidth = inlineAvailableWidth - CHAT_PREVIEW_MIN_CHAT_WIDTH;
  const preferredWidth = Math.max(
    CHAT_PREVIEW_MIN_PANEL_WIDTH,
    Math.min(
      CHAT_PREVIEW_MAX_PANEL_WIDTH,
      preferredPanelWidth ?? CHAT_PREVIEW_MIN_PANEL_WIDTH,
    ),
  );
  const overlay = inlineAvailableWidth < (
    CHAT_PREVIEW_MIN_CHAT_WIDTH + preferredWidth
  );

  if (overlay) {
    const maxWidth = Math.max(
      0,
      Math.min(CHAT_PREVIEW_MAX_PANEL_WIDTH, inlineAvailableWidth),
    );
    const minWidth = Math.min(CHAT_PREVIEW_MIN_PANEL_WIDTH, maxWidth);
    return {
      overlay: true,
      minWidth,
      maxWidth,
      defaultWidth: Math.min(CHAT_PREVIEW_OVERLAY_DEFAULT_WIDTH, maxWidth),
    };
  }

  const maxWidth = Math.min(
    CHAT_PREVIEW_MAX_PANEL_WIDTH,
    inlinePanelMaxWidth,
  );
  return {
    overlay: false,
    minWidth: CHAT_PREVIEW_MIN_PANEL_WIDTH,
    maxWidth,
    defaultWidth: maxWidth,
  };
}

export function clampChatPreviewWidth(
  width: number,
  layout: ChatPreviewLayout,
) {
  return Math.max(layout.minWidth, Math.min(layout.maxWidth, width));
}
