import { A as g, a as p, B as I, b as P, c as m, d as c, e as v, f as A, g as B, h as _, i as d, j as N, C as S, k as f, l as h, m as E, n as L, o as O, p as x, I as H, L as M, M as Q, q as R, Q as k, R as w, T as U, r as b, s as y, t as F, u as j } from "./ChatHomePage-5SmN1ydp.js";
import { jsx as t } from "react/jsx-runtime";
import { useContext as o, createContext as i } from "react";
const s = i(null);
function u({
  adapter: a,
  children: e
}) {
  return /* @__PURE__ */ t(s.Provider, { value: a, children: e });
}
function l() {
  const a = o(s);
  if (!a)
    throw new Error("useNavigation must be used within NavigationProvider");
  return a;
}
export {
  g as AppShell,
  p as AssistantActions,
  I as BaseActionMenu,
  P as BaseButton,
  m as BaseCard,
  c as BaseEmpty,
  v as BaseInput,
  A as BaseModal,
  B as BasePagination,
  _ as BaseSelect,
  d as BaseTable,
  N as BaseUpload,
  S as CHAT_FILE_OPTIONS,
  f as CHAT_INPUT_GUIDE_TEXT,
  h as CHAT_QUICK_PROMPTS,
  E as CHAT_RECENT_FILE_OPTIONS,
  L as CHAT_SKILL_OPTIONS,
  O as ChatConversationViewport,
  x as ChatHomePage,
  H as InputArea,
  M as LoginPage,
  Q as MessageItem,
  R as MessageList,
  u as NavigationProvider,
  k as QuickPrompts,
  w as RegisterPage,
  U as ThinkingIndicator,
  b as insertFileReference,
  y as insertSkillCommand,
  F as resolveAtQuery,
  j as resolveSlashQuery,
  l as useNavigation
};
