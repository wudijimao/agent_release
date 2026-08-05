import { logEvent } from "firebase/analytics";

import { initializeFirebaseAnalytics } from "./firebase";

export const PRODUCT_ANALYTICS_EVENTS = {
  sendChatMessage: "send_chat_message",
  createProject: "create_project",
  createDocument: "create_document",
  editDocument: "edit_document",
  saveDraft: "save_draft",
  cancelDraft: "cancel_draft",
  openChatProjectPanel: "open_chat_project_panel",
  previewChatProjectDocument: "preview_chat_project_document",
  previewProjectDocument: "preview_project_document",
} as const;

export type ProductAnalyticsEventName =
  (typeof PRODUCT_ANALYTICS_EVENTS)[keyof typeof PRODUCT_ANALYTICS_EVENTS];

type ProductAnalyticsParameters = Record<string, string | number>;

export function trackProductEvent(
  eventName: ProductAnalyticsEventName,
  parameters?: ProductAnalyticsParameters,
) {
  void initializeFirebaseAnalytics()
    .then((analytics) => {
      if (analytics) logEvent(analytics, eventName, parameters);
    })
    .catch(() => undefined);
}
