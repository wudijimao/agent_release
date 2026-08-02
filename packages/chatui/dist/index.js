import { B as Ve, a as ee, b as A, c as be, d as et, e as F, f as se, g as he, P as tt } from "./SkillPage-CPyc9NQ7.js";
import { A as Gr, h as Fr, i as Ur, j as Kr, k as Wr, C as Yr, l as qr, m as Qr, n as Xr, o as Jr, p as Zr, q as jr, r as Vr, s as ea, t as ta, u as ra, v as aa, w as sa, x as la, y as na, z as ia, F as oa, I as da, L as ca, M as ma, D as xa, E as ha, G as pa, H as ua, J as ba, Q as fa, R as ga, S as ya, T as Na, K as va, N as wa, O as Ta, U as ka } from "./SkillPage-CPyc9NQ7.js";
import { jsxs as t, jsx as e, Fragment as pe } from "react/jsx-runtime";
import rt, { useState as p, useMemo as P, useCallback as Te, useContext as at, createContext as st, useEffect as le, useRef as Se } from "react";
import { Inbox as lt, Paperclip as nt, X as it, Pencil as _e, Trash2 as ne, HelpCircle as ot, MoreHorizontal as Me, Menu as W, Plus as ie, AlertCircle as dt, ShieldCheck as ct, RefreshCw as mt, MessageCircle as xt, Folder as ht, ChevronDown as ue, Check as ke, Users as Re, Search as pt, Upload as ut, FileText as bt, CircleHelp as ft, ArrowLeft as gt, Play as yt } from "lucide-react";
import Ce from "classnames";
import Nt from "react-markdown";
import vt from "remark-gfm";
import { DatePicker as wt, Cascader as Tt, TimePicker as kt, Radio as Ge, Select as ye } from "antd";
import Ne from "dayjs";
const Ct = "_wrapper_g5uno_1", St = "_uploadContent_g5uno_7", _t = "_uploadIcon_g5uno_17", Mt = "_uploadTitle_g5uno_18", zt = "_uploadDescription_g5uno_19", It = "_fileList_g5uno_20", Pt = "_fileItem_g5uno_21", Dt = "_fileItemIcon_g5uno_22", At = "_fileName_g5uno_23", Et = "_fileSize_g5uno_24", $t = "_removeButton_g5uno_25", U = {
  wrapper: Ct,
  uploadContent: St,
  uploadIcon: _t,
  uploadTitle: Mt,
  uploadDescription: zt,
  fileList: It,
  fileItem: Pt,
  fileItemIcon: Dt,
  fileName: At,
  fileSize: Et,
  removeButton: $t
}, Bt = ".pdf,.doc,.docx,.txt,.md,.csv", Ot = 20 * 1024 * 1024, Fe = 5, Ue = (r, l) => r.name === l.name && r.size === l.size && r.lastModified === l.lastModified && r.type === l.type, Lt = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`, ze = rt.forwardRef(
  ({
    value: r,
    defaultValue: l = [],
    onChange: i,
    onError: s,
    accept: o = Bt,
    maxSize: v = Ot,
    maxCount: k = Fe,
    disabled: N = !1,
    className: _,
    uploadTitle: g = "点击或拖拽文件到此上传",
    uploadDescription: u = `支持单文件或批量上传，单次最多 ${Fe} 个，单个文件不超过 20MB`,
    uploadIcon: c
  }, m) => {
    const [n, f] = p(l), w = r !== void 0, T = P(() => (w ? r : n) ?? [], [n, w, r]), y = (h) => {
      w || f(h), i == null || i(h);
    }, I = (h) => {
      const d = [...T];
      if (Array.from(h).forEach((a) => {
        d.some((z) => Ue(z, a)) || d.push(a);
      }), d.length > k) {
        s == null || s(new Error(`最多上传 ${k} 个文件，请删除后再继续添加`));
        return;
      }
      y(d);
    };
    return /* @__PURE__ */ t("div", { className: Ce(U.wrapper, _), children: [
      /* @__PURE__ */ e(Ve, { ref: m, accept: o, multiple: !0, disabled: N, maxSize: v, maxCount: k, onChange: I, onError: s, children: /* @__PURE__ */ t("div", { className: U.uploadContent, children: [
        c ?? /* @__PURE__ */ e(lt, { size: 30, strokeWidth: 2.2, className: U.uploadIcon }),
        /* @__PURE__ */ e("div", { className: U.uploadTitle, children: g }),
        /* @__PURE__ */ e("div", { className: U.uploadDescription, children: u })
      ] }) }),
      T.length > 0 && /* @__PURE__ */ e("div", { className: U.fileList, children: T.map((h, d) => /* @__PURE__ */ t("div", { className: U.fileItem, children: [
        /* @__PURE__ */ e(nt, { size: 14, className: U.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: U.fileName, children: h.name }),
        /* @__PURE__ */ e("span", { className: U.fileSize, children: Lt(h.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => y(T.filter((a) => !Ue(a, h))), className: U.removeButton, "aria-label": `移除文件 ${h.name}`, disabled: N, children: /* @__PURE__ */ e(it, { size: 14 }) })
      ] }, `${h.name}-${h.lastModified}-${d}`)) })
    ] });
  }
);
ze.displayName = "BaseDocumentUpload";
const Ht = "_toggle_198gd_1", Rt = "_toggleSmall_198gd_18", Gt = "_toggleRegular_198gd_23", Ft = "_toggleMedium_198gd_28", Ut = "_toggleOff_198gd_33", Kt = "_toggleOn_198gd_37", Wt = "_toggleDisabled_198gd_41", Yt = "_thumb_198gd_46", qt = "_thumbSmall_198gd_54", Qt = "_thumbRegular_198gd_59", Xt = "_thumbMedium_198gd_64", Jt = "_thumbOffSmall_198gd_69", Zt = "_thumbOffRegular_198gd_70", jt = "_thumbOffMedium_198gd_71", Vt = "_thumbOnSmall_198gd_75", er = "_thumbOnRegular_198gd_79", tr = "_thumbOnMedium_198gd_83", q = {
  toggle: Ht,
  toggleSmall: Rt,
  toggleRegular: Gt,
  toggleMedium: Ft,
  toggleOff: Ut,
  toggleOn: Kt,
  toggleDisabled: Wt,
  thumb: Yt,
  thumbSmall: qt,
  thumbRegular: Qt,
  thumbMedium: Xt,
  thumbOffSmall: Jt,
  thumbOffRegular: Zt,
  thumbOffMedium: jt,
  thumbOnSmall: Vt,
  thumbOnRegular: er,
  thumbOnMedium: tr
}, Ie = ({
  checked: r,
  defaultChecked: l = !1,
  size: i = "medium",
  disabled: s = !1,
  onChange: o,
  className: v,
  ...k
}) => {
  const [N, _] = p(l), g = r !== void 0, u = g ? r : N, c = `${i.charAt(0).toUpperCase()}${i.slice(1)}`, m = Te(() => {
    if (s) return;
    const w = !u;
    g || _(w), o == null || o(w);
  }, [s, u, g, o]), n = P(
    () => Ce(
      q.toggle,
      q[`toggle${c}`],
      u ? q.toggleOn : q.toggleOff,
      s && q.toggleDisabled,
      v
    ),
    [v, s, u, c]
  ), f = P(
    () => Ce(
      q.thumb,
      q[`thumb${c}`],
      q[`thumb${u ? "On" : "Off"}${c}`]
    ),
    [u, c]
  );
  return /* @__PURE__ */ e(
    "button",
    {
      ...k,
      type: "button",
      role: "switch",
      "aria-checked": u,
      className: n,
      onClick: m,
      disabled: s,
      children: /* @__PURE__ */ e("span", { className: f })
    }
  );
};
Ie.displayName = "BaseToggle";
const Qe = st(null);
function Tr({
  adapter: r,
  children: l
}) {
  return /* @__PURE__ */ e(Qe.Provider, { value: r, children: l });
}
function kr() {
  const r = at(Qe);
  if (!r)
    throw new Error("useNavigation must be used within NavigationProvider");
  return r;
}
function Cr({
  labName: r,
  members: l,
  inviteCode: i,
  isSidebarOpen: s,
  loading: o = !1,
  error: v,
  actionError: k,
  canManage: N = !1,
  onOpenSidebar: _,
  onRetry: g,
  onRegenerateInvite: u,
  onUpdateRole: c,
  onRemoveMember: m
}) {
  const [n, f] = p(!1), [w, T] = p(!1), [y, I] = p(!1), [h, d] = p(!1), [a, z] = p(null), [C, $] = p("成员"), [B, E] = p(null), [O, R] = p(null), [b, S] = p(1), [H, G] = p(10), X = l.filter((M) => M.role === "管理员").length, oe = P(() => {
    const M = (b - 1) * H;
    return l.slice(M, M + H);
  }, [b, l, H]), K = P(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(_e, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(ne, { size: 14 }), danger: !0 }
    ],
    []
  );
  le(() => {
    const M = Math.max(1, Math.ceil(l.length / H));
    b > M && S(M);
  }, [b, l.length, H]);
  const j = (M) => {
    z(M), $(M.role), I(!0);
  }, de = (M) => {
    z(M), d(!0);
  }, V = async () => {
    if (i) {
      try {
        await navigator.clipboard.writeText(i);
      } catch {
        const M = document.createElement("textarea");
        M.value = i, M.style.position = "fixed", M.style.opacity = "0", document.body.appendChild(M), M.focus(), M.select(), document.execCommand("copy"), document.body.removeChild(M);
      }
      T(!0), window.setTimeout(() => T(!1), 1500);
    }
  }, J = async () => {
    E("invite");
    try {
      await u(), T(!1);
    } finally {
      E(null);
    }
  }, te = async () => {
    if (a) {
      E("edit");
      try {
        await c(a.id, C), I(!1);
      } finally {
        E(null);
      }
    }
  }, Z = async () => {
    if (a) {
      E("remove");
      try {
        await m(a.id), d(!1);
      } finally {
        E(null);
      }
    }
  }, fe = P(
    () => [
      {
        title: "姓名",
        dataIndex: "name",
        width: "25%",
        render: (M, L) => /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center pr-2", children: [
          /* @__PURE__ */ e("div", { className: "mr-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lineSubtle bg-bgLight text-[11px] font-medium text-secondaryText", children: L.avatarUrl ? /* @__PURE__ */ e("img", { className: "h-full w-full object-cover", src: L.avatarUrl, alt: "" }) : L.name.slice(0, 2) }),
          /* @__PURE__ */ t("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "truncate font-medium text-primaryText", children: L.name }),
            /* @__PURE__ */ e("p", { className: "mt-0.5 truncate text-[13px] text-secondaryText", children: L.email })
          ] })
        ] })
      },
      {
        title: /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
          "团队角色",
          /* @__PURE__ */ e("span", { className: "text-mutedText", title: "管理员可管理成员和实验室设置；成员可使用工作区。", children: /* @__PURE__ */ e(ot, { size: 14 }) })
        ] }),
        dataIndex: "role",
        width: "16%"
      },
      {
        title: "加入时间",
        dataIndex: "joinedAt",
        width: "18%",
        render: (M) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(M) })
      },
      {
        title: "归属项目",
        dataIndex: "projectsLabel",
        width: "31%",
        render: (M) => /* @__PURE__ */ e("span", { className: "block truncate text-secondaryText", title: String(M || "暂未提供"), children: String(M || "暂未提供") })
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "10%",
        render: (M, L) => L.canManage ? /* @__PURE__ */ e(
          ee,
          {
            open: O === L.id,
            onOpenChange: (Y) => R(Y ? L.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Me, { size: 16 }) }),
            items: K,
            onItemClick: (Y, ce) => {
              ce.stopPropagation(), R(null), Y.key === "edit" ? j(L) : de(L);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [O, K]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: _, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "成员管理" })
        ] })
      ] }),
      N && /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(ie, { size: 14 }), className: "shrink-0", onClick: () => f(!0), children: "邀请新成员" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-primaryText md:text-2xl", children: r || "实验室成员" }),
        /* @__PURE__ */ t("span", { className: "shrink-0 rounded-full bg-surfaceMuted px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
          "共",
          l.length,
          "人"
        ] })
      ] }),
      v && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: v }),
        g && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: g, children: "重新加载" })
      ] }),
      !v && X < 2 && !o && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
        /* @__PURE__ */ e(dt, { size: 16, className: "shrink-0" }),
        /* @__PURE__ */ t("span", { children: [
          "当前管理员",
          X,
          "名，建议至少保留2名管理员，避免团队配置和成员管理只有单点负责人"
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          be,
          {
            className: "task-table-scroll w-full [&_table]:min-w-[860px] [&_thead_th]:py-2 [&_thead_th]:text-[13px] [&_tbody_td]:py-2.5 [&_tbody_td]:text-[13px]",
            columns: fe,
            dataSource: oe,
            rowKey: "id",
            striped: !1,
            loading: o
          }
        ),
        /* @__PURE__ */ e(
          et,
          {
            current: b,
            total: l.length,
            pageSize: H,
            onChange: S,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (M, L) => {
              G(L), S(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: n, title: "邀请新成员", width: 360, onCancel: () => f(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (i || "------").split("").map((M, L) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: M }, `${M}-${L}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      k && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: k }),
      /* @__PURE__ */ e(A, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: V, disabled: !i, children: w ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: B === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: B === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(F, { visible: y && !!a, title: "编辑成员信息", width: 560, maskClosable: !1, cancelText: "取消", okText: "保存修改", confirmLoading: B === "edit", onCancel: () => I(!1), onConfirm: te, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((M) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: M, checked: C === M, onChange: () => $(M), className: "h-4 w-4 accent-primary" }),
          M
        ] }, M)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-secondaryText", children: (a == null ? void 0 : a.projectsLabel) || "未参与项目" })
      ] }),
      k && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: k })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: h && !!a, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: B === "remove", onCancel: () => d(!1), onConfirm: Z, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
      a && /* @__PURE__ */ t("p", { className: "text-sm text-secondaryText", children: [
        "您正在将成员 ",
        /* @__PURE__ */ t("span", { className: "font-semibold text-primaryText", children: [
          a.name,
          " (",
          a.email,
          ")"
        ] }),
        " 移出该科研团队，此操作执行后无法撤销。"
      ] }),
      k && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: k })
    ] })
  ] });
}
function rr({
  items: r,
  loading: l = !1,
  pendingId: i,
  onFetch: s,
  onToggle: o,
  onEdit: v,
  onDelete: k
}) {
  const [N, _] = p(null), g = P(() => [
    {
      title: "订阅名称",
      dataIndex: "name",
      width: "19%",
      render: (u, c) => /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate font-medium text-primaryText", children: String(u) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: c.source })
      ] })
    },
    {
      title: "关键词",
      dataIndex: "keywords",
      width: "22%",
      render: (u) => /* @__PURE__ */ e("span", { className: "line-clamp-2 break-all text-secondaryText", children: String(u) || "未设置" })
    },
    {
      title: "抓取设置",
      dataIndex: "schedule",
      width: "14%",
      render: (u) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(u) })
    },
    {
      title: "内容统计",
      dataIndex: "itemStats",
      width: "16%",
      render: (u, c) => /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "text-secondaryText", children: String(u) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: c.projectStats })
      ] })
    },
    {
      title: "最近抓取",
      dataIndex: "lastFetch",
      width: "14%",
      render: (u) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(u) })
    },
    {
      title: "状态",
      dataIndex: "isEnabled",
      width: "7%",
      render: (u, c) => /* @__PURE__ */ e(
        Ie,
        {
          size: "small",
          checked: c.isEnabled,
          disabled: i === c.id,
          onChange: () => o(c.id),
          "aria-label": c.isEnabled ? "停用文献订阅" : "启用文献订阅"
        }
      )
    },
    {
      title: "操作",
      dataIndex: "id",
      width: "8%",
      align: "right",
      render: (u, c) => {
        const m = [
          { key: "fetch", label: "立即抓取", icon: /* @__PURE__ */ e(mt, { size: 14 }) },
          { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(_e, { size: 14 }) },
          { key: "delete", label: "删除", icon: /* @__PURE__ */ e(ne, { size: 14 }), danger: !0 }
        ];
        return /* @__PURE__ */ e(
          ee,
          {
            open: N === c.id,
            onOpenChange: (n) => _(n ? c.id : null),
            placement: "bottom-end",
            width: 140,
            portal: !0,
            menuClassName: "!min-w-[140px]",
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Me, { size: 16 }) }),
            items: m,
            onItemClick: (n) => {
              _(null), n.key === "fetch" ? s(c.id) : n.key === "edit" ? v(c.id) : k(c.id);
            }
          }
        );
      }
    }
  ], [N, k, v, s, o, i]);
  return /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(
    be,
    {
      className: "task-table-scroll w-full [&_table]:min-w-[1080px]",
      columns: g,
      dataSource: r,
      rowKey: "id",
      striped: !1,
      loading: l
    }
  ) }) });
}
const ve = 30, ar = 3;
function sr(r) {
  const l = Array.from(r ?? ""), i = ve * ar, s = l.length > i ? [...l.slice(0, Math.max(i - 3, 0)), ".", ".", "."] : l, o = [];
  for (let v = 0; v < s.length; v += ve)
    o.push(s.slice(v, v + ve).join(""));
  return o.join(`
`);
}
function Sr({
  templates: r,
  tasks: l,
  isSidebarOpen: i,
  loading: s = !1,
  error: o,
  pendingTaskId: v,
  literatureSubscriptions: k = [],
  literatureLoading: N = !1,
  pendingLiteratureId: _,
  onOpenSidebar: g,
  onCreateCustom: u,
  onCreateFromTemplate: c,
  onToggleTask: m,
  onEditTask: n,
  onDeleteTask: f,
  onOpenTaskChat: w,
  onCreateLiterature: T,
  onFetchLiterature: y,
  onToggleLiterature: I,
  onEditLiterature: h,
  onDeleteLiterature: d,
  onRetry: a
}) {
  const [z, C] = p(null), [$, B] = p("scheduled"), E = !!(T && y && I && h && d), O = E ? $ : "scheduled", R = P(
    () => [
      {
        title: "任务名称",
        dataIndex: "name",
        width: "20%",
        render: (b) => /* @__PURE__ */ e("span", { className: "truncate text-primaryText", children: String(b) })
      },
      {
        title: "任务内容",
        dataIndex: "prompt",
        width: "40%",
        render: (b) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: sr(String(b ?? "")) })
      },
      {
        title: "下次运行",
        dataIndex: "nextRun",
        width: "14%",
        render: (b, S) => /* @__PURE__ */ t("span", { children: [
          /* @__PURE__ */ e("span", { className: "block text-secondaryText", children: String(b) }),
          S.scheduleEnd && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-tertiaryText", children: S.scheduleEnd })
        ] })
      },
      {
        title: "触发方式",
        dataIndex: "trigger",
        width: "16%",
        render: (b) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(b) })
      },
      {
        title: "状态",
        dataIndex: "isEnabled",
        width: "7%",
        render: (b, S) => /* @__PURE__ */ e(
          Ie,
          {
            size: "small",
            checked: S.isEnabled,
            disabled: S.isToggleDisabled || v === S.id,
            onChange: () => m(S.id),
            "aria-label": S.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "3%",
        align: "right",
        render: (b, S) => {
          const H = [
            ...S.mainSessionId && w ? [{ key: "chat", label: "打开对话", icon: /* @__PURE__ */ e(xt, { size: 14 }) }] : [],
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(_e, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(ne, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            ee,
            {
              open: z === S.id,
              onOpenChange: (G) => C(G ? S.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Me, { size: 16 }) }),
              items: H,
              onItemClick: (G) => {
                C(null), G.key === "chat" && S.mainSessionId ? w == null || w(S.mainSessionId) : G.key === "edit" ? n(S.id) : f(S.id);
              }
            }
          );
        }
      }
    ],
    [z, f, n, w, m, v]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !i && /* @__PURE__ */ e("button", { type: "button", onClick: g, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(
        A,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          icon: /* @__PURE__ */ e(ie, { size: 14 }),
          className: "shrink-0",
          onClick: u,
          children: "新建任务"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "定时任务" }),
        /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3", children: r.map((b) => /* @__PURE__ */ t("button", { type: "button", onClick: () => c(b.id), className: "flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-[17px] font-medium text-primaryText", children: b.name }),
          /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText", children: b.description })
        ] }, b.id)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-10", children: [
        E && /* @__PURE__ */ t("div", { className: "mb-5 flex items-center gap-6 border-b border-lineSubtle", role: "tablist", "aria-label": "任务列表类型", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": O === "scheduled",
              onClick: () => B("scheduled"),
              className: `border-b-2 pb-3 text-sm font-medium transition-colors ${O === "scheduled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText hover:text-secondaryText"}`,
              children: "定时任务"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": O === "literature",
              onClick: () => B("literature"),
              className: `border-b-2 pb-3 text-sm font-medium transition-colors ${O === "literature" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText hover:text-secondaryText"}`,
              children: "文献订阅"
            }
          )
        ] }),
        O === "scheduled" ? /* @__PURE__ */ t("div", { className: "space-y-3", role: "tabpanel", children: [
          !E && /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "已设置任务" }),
          o && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
            /* @__PURE__ */ e("span", { children: o }),
            a && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: a, children: "重新加载" })
          ] }),
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(be, { className: "task-table-scroll w-full [&_table]:min-w-[940px]", columns: R, dataSource: l, rowKey: "id", striped: !1, loading: s }) })
        ] }) : T && y && I && h && d && /* @__PURE__ */ e("div", { role: "tabpanel", children: /* @__PURE__ */ e(
          rr,
          {
            items: k,
            loading: N,
            pendingId: _,
            onFetch: y,
            onToggle: I,
            onEdit: h,
            onDelete: d
          }
        ) })
      ] })
    ] }) })
  ] });
}
const { RangePicker: lr } = wt, nr = [
  { value: "hourly", label: "每小时" },
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" }
], Ke = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, ir = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], or = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([r, l]) => ({ value: r, label: l })), dr = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周", children: or },
  { value: "monthly", label: "每月", children: Array.from({ length: 28 }, (r, l) => ({ value: String(l + 1), label: `${l + 1}号` })) }
];
function _r({
  visible: r,
  kind: l,
  editing: i = !1,
  literatureValue: s,
  scheduleValue: o,
  projects: v = [],
  literatureProjects: k = [],
  onLiteratureChange: N,
  onScheduleChange: _,
  onCancel: g,
  onConfirm: u,
  onCreateProject: c
}) {
  const [m, n] = p(!1), f = l === "literature", w = v.find((a) => a.id === o.projectId) ?? null, T = f ? i ? "修改文献订阅任务" : "设置文献订阅任务" : i ? "修改定时任务" : "新建定时任务", y = o.repeatMode === "weekly" || o.repeatMode === "monthly" ? [o.repeatMode, o.repeatSubValue || (o.repeatMode === "weekly" ? "mon" : "1")] : [o.repeatMode], I = P(() => [
    { key: "none", label: "不选择项目", active: !w },
    ...v.map((a) => ({ key: a.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: a.name }), active: (w == null ? void 0 : w.id) === a.id }))
  ], [v, w]), h = P(() => c ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(ie, { size: 16 }) }] : [], [c]), d = (a) => {
    if (n(!1), a.key === "create") return c == null ? void 0 : c();
    _({ ...o, projectId: a.key === "none" ? null : a.key });
  };
  return /* @__PURE__ */ e(
    F,
    {
      visible: r,
      title: T,
      width: 600,
      className: "tools-task-modal",
      okText: i ? "保存修改" : f ? "创建订阅" : "创建任务",
      cancelText: "取消",
      onCancel: g,
      onConfirm: u,
      okButtonProps: { disabled: !s.topic.trim() || (f ? !s.keywords.trim() || s.sourceTypes.length === 0 || s.sourceTypes.includes("pubmed") && s.pubmedMatchMode === "advanced" && !s.advancedQuery.trim() : !o.taskPrompt.trim()) },
      children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务名称" }),
          /* @__PURE__ */ e(
            se,
            {
              value: s.topic,
              onChange: (a) => N({ ...s, topic: a.target.value }),
              placeholder: "请输入任务名称",
              size: "medium",
              containerClassName: "!px-3.5"
            }
          )
        ] }),
        f ? /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "抓取频率" }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(
                "select",
                {
                  value: s.frequency,
                  onChange: (a) => N({ ...s, frequency: a.target.value }),
                  className: "h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary",
                  children: nr.map((a) => /* @__PURE__ */ e("option", { value: a.value, children: a.label }, a.value))
                }
              ),
              /* @__PURE__ */ e(ue, { size: 16, className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "回看天数" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "number",
                min: 1,
                max: 365,
                value: String(s.lookbackDays),
                onChange: (a) => N({ ...s, lookbackDays: Math.max(1, Math.min(365, Number(a.target.value) || 1)) }),
                className: "h-9 w-full rounded-lg border border-borderGray bg-white px-3.5 text-sm text-primaryText outline-none transition-colors focus:border-primary"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ t(pe, { children: [
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
              /* @__PURE__ */ e(
                lr,
                {
                  format: "YYYY/MM/DD",
                  className: "task-period-picker w-full",
                  classNames: { popup: { root: "task-period-picker-popup" } },
                  value: [o.startDate ? Ne(o.startDate, "YYYY-MM-DD") : null, o.endDate ? Ne(o.endDate, "YYYY-MM-DD") : null],
                  onChange: (a, [z, C]) => _({ ...o, startDate: z, endDate: C })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "触发时间" }),
              /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ e(
                  Tt,
                  {
                    value: y,
                    options: dr,
                    className: "task-repeat-cascader w-full",
                    classNames: { popup: { root: "task-repeat-cascader-popup" } },
                    placeholder: "请选择重复方式",
                    onChange: (a) => {
                      const z = String(a[0] ?? "daily"), C = a[1] ? String(a[1]) : "";
                      _({ ...o, repeatMode: z, repeatSubValue: z === "weekly" ? C || (o.repeatMode === "weekly" ? o.repeatSubValue : "mon") || "mon" : z === "monthly" ? C || (o.repeatMode === "monthly" ? o.repeatSubValue : "1") || "1" : "" });
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  kt,
                  {
                    value: Ne(o.runAt, "HH:mm"),
                    format: "HH:mm",
                    minuteStep: 1,
                    allowClear: !1,
                    onChange: (a) => _({ ...o, runAt: a ? a.format("HH:mm") : o.runAt }),
                    className: "task-run-time-picker w-full",
                    classNames: { popup: { root: "task-run-time-picker-popup" } }
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: [
              "提示词 (Prompt)",
              /* @__PURE__ */ e("span", { className: "text-danger", children: " *" })
            ] }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(
                "textarea",
                {
                  value: o.taskPrompt,
                  onChange: (a) => _({ ...o, taskPrompt: a.target.value }),
                  placeholder: "输入任何内容，使用 '/' 选择技能或 '@' 引用资源...",
                  rows: 5,
                  className: "w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-3 z-20", children: /* @__PURE__ */ e(
                ee,
                {
                  open: m,
                  onOpenChange: n,
                  placement: "top-start",
                  width: 260,
                  trigger: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight", children: [
                    /* @__PURE__ */ e(ht, { size: 14 }),
                    /* @__PURE__ */ e("span", { className: "max-w-[140px] truncate", children: (w == null ? void 0 : w.name) ?? "工作项目" }),
                    /* @__PURE__ */ e(ue, { size: 14 })
                  ] }),
                  items: I,
                  onItemClick: d,
                  className: "!inline-flex",
                  listClassName: "max-h-[220px] overflow-y-auto",
                  footerItems: h
                }
              ) })
            ] })
          ] })
        ] }),
        f && /* @__PURE__ */ t(pe, { children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "订阅来源" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(Ke).map((a) => {
              const z = Ke[a], C = s.sourceTypes.includes(a);
              return /* @__PURE__ */ t("button", { type: "button", onClick: () => {
                const $ = i ? [a] : C ? s.sourceTypes.filter((B) => B !== a) : [...s.sourceTypes, a];
                N({ ...s, sourceTypes: $ });
              }, className: `flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors ${C ? "border-primary bg-primary-soft-strong" : "border-borderGray bg-white hover:border-borderSoft"}`, children: [
                /* @__PURE__ */ e("span", { className: `mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${C ? "border-primary bg-primary text-white" : "border-controlBorder text-transparent"}`, children: C && /* @__PURE__ */ e(ke, { size: 11, strokeWidth: 3, "aria-hidden": "true" }) }),
                /* @__PURE__ */ t("span", { children: [
                  /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: z.label }),
                  /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: z.desc })
                ] })
              ] }, a);
            }) }),
            /* @__PURE__ */ e("p", { className: "mt-1.5 text-[13px] text-tertiaryText", children: "新建时可同时选择多个来源，系统会分别创建订阅。" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "关键词" }),
            /* @__PURE__ */ e(
              "input",
              {
                value: s.keywords,
                onChange: (a) => N({ ...s, keywords: a.target.value }),
                placeholder: "例：CRISPR, prime editing, base editor",
                className: "w-full rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          s.sourceTypes.includes("pubmed") && /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "PubMed 匹配方式" }),
            /* @__PURE__ */ e(Ge.Group, { value: s.pubmedMatchMode, onChange: (a) => N({ ...s, pubmedMatchMode: a.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: ir.map((a) => /* @__PURE__ */ e(Ge, { value: a.value, children: a.label }, a.value)) }) })
          ] }),
          s.sourceTypes.includes("pubmed") && s.pubmedMatchMode === "advanced" && /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: [
              "PubMed 高级表达式",
              /* @__PURE__ */ e("span", { className: "text-danger", children: " *" })
            ] }),
            /* @__PURE__ */ e(
              "textarea",
              {
                value: s.advancedQuery,
                onChange: (a) => N({ ...s, advancedQuery: a.target.value }),
                placeholder: '例如：("inflammatory bowel disease"[Title/Abstract]) AND ("stromal cell"[Title/Abstract])',
                rows: 3,
                className: "w-full resize-y rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "关联项目" }),
            /* @__PURE__ */ e("div", { className: "max-h-[150px] space-y-1 overflow-y-auto rounded-lg border border-borderGray p-2", children: k.length > 0 ? k.map((a) => {
              const z = s.projectNodeIds.includes(a.id);
              return /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primaryText hover:bg-bgLight", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: z,
                    onChange: () => N({ ...s, projectNodeIds: z ? s.projectNodeIds.filter((C) => C !== a.id) : [...s.projectNodeIds, a.id] }),
                    className: "h-4 w-4 accent-primary"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "truncate", children: a.name })
              ] }, a.id);
            }) : /* @__PURE__ */ e("div", { className: "px-2 py-3 text-sm text-tertiaryText", children: "暂无可关联的知识追踪项目" }) })
          ] }),
          /* @__PURE__ */ t("label", { className: "flex items-start gap-3 rounded-lg border border-borderGray px-3.5 py-3", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                checked: s.enabled,
                onChange: (a) => N({ ...s, enabled: a.target.checked }),
                className: "mt-0.5 h-4 w-4 accent-primary"
              }
            ),
            /* @__PURE__ */ t("span", { children: [
              /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: "启用订阅" }),
              /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: "关闭后保留历史内容，但不参与后续抓取。" })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function Mr({
  visible: r,
  description: l,
  confirmLoading: i = !1,
  onCancel: s,
  onConfirm: o
}) {
  return /* @__PURE__ */ e(
    F,
    {
      visible: r,
      title: "确认删除任务",
      width: 420,
      maskClosable: !1,
      cancelText: "取消",
      okText: "删除",
      confirmLoading: i,
      onCancel: s,
      onConfirm: o,
      okButtonProps: {
        className: "!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover"
      },
      children: /* @__PURE__ */ e("p", { className: "text-sm text-primaryText", children: l })
    }
  );
}
function zr({
  projects: r,
  isSidebarOpen: l,
  loading: i = !1,
  error: s,
  onOpenSidebar: o,
  onOpenProject: v,
  onCreateProject: k,
  onRetry: N
}) {
  const [_, g] = p(!1), [u, c] = p(""), [m, n] = p(""), [f, w] = p([]), [T, y] = p(""), [I, h] = p(!1), d = () => {
    c(""), n(""), w([]), y(""), g(!0);
  }, a = () => {
    I || (g(!1), y(""));
  }, z = async () => {
    const C = u.trim();
    if (!C) {
      y("请输入项目名称");
      return;
    }
    h(!0), y("");
    try {
      await k({
        name: C,
        description: m.trim(),
        documents: f
      }), g(!1);
    } catch ($) {
      y($ instanceof Error ? $.message : "项目创建失败");
    } finally {
      h(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !l && /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(ie, { size: 14 }), className: "shrink-0", onClick: d, children: "创建新项目" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      s && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: s }),
        N && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: N, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": i, children: [
        r.map((C) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => v(C.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: C.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: C.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  C.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  C.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          C.id
        )),
        !i && !s && r.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: _,
        title: "创建新项目",
        width: 560,
        maskClosable: !1,
        okText: I ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: a,
        onConfirm: () => {
          z();
        },
        okButtonProps: { disabled: I },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "text-sm font-medium text-primaryText", children: [
              "项目名称 ",
              /* @__PURE__ */ e("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ e(
              se,
              {
                value: u,
                placeholder: "请输入项目名称",
                disabled: I,
                onChange: (C) => {
                  c(C.target.value), T && y("");
                }
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目描述（选填）" }),
            /* @__PURE__ */ e(
              "textarea",
              {
                value: m,
                onChange: (C) => n(C.target.value),
                placeholder: "请输入项目描述",
                rows: 4,
                disabled: I,
                className: "w-full resize-none rounded-lg border border-borderGray bg-white px-3 py-2 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目文档（选填）" }),
            /* @__PURE__ */ e(
              ze,
              {
                value: f,
                maxCount: 5,
                maxSize: 20 * 1024 * 1024,
                disabled: I,
                onChange: w,
                onError: (C) => y(C.message)
              }
            )
          ] }),
          T && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: T })
        ] })
      }
    )
  ] });
}
const We = 84, cr = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, xe = (r) => String(r).padStart(2, "0"), Q = (r) => `${r.getFullYear()}年${xe(r.getMonth() + 1)}月${xe(r.getDate())}日 ${xe(r.getHours())}:${xe(r.getMinutes())}`;
function Ye(r, l, i = /* @__PURE__ */ new Date()) {
  const s = r.trim(), o = (m, n) => {
    const f = n.match(/^(\d{1,2}):(\d{2})$/);
    return f ? (m.setHours(Number(f[1]), Number(f[2]), 0, 0), m) : null;
  };
  if (s === "刚刚") return Q(i);
  const v = s.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (v) return Q(o(new Date(i), v[1]) ?? i);
  const k = s.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (k) {
    const m = new Date(i);
    return m.setDate(m.getDate() - 1), Q(o(m, k[1]) ?? i);
  }
  const N = s.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (N) {
    const m = new Date(i);
    let n = m.getDay() - cr[N[2]];
    return n < 0 && (n += 7), m.setDate(m.getDate() - n - (N[1] ? 7 : 0)), Q(o(m, N[3]) ?? i);
  }
  const _ = s.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (_) return Q(new Date(Number(_[1]), Number(_[2]) - 1, Number(_[3]), Number(_[4]), Number(_[5])));
  const g = s.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (g) return Q(new Date(i.getFullYear(), Number(g[1]) - 1, Number(g[2]), Number(g[3]), Number(g[4])));
  const u = l.match(/^c-(\d{13})$/);
  if (u) {
    const m = new Date(Number(u[1]));
    if (!Number.isNaN(m.getTime())) return Q(m);
  }
  const c = new Date(s);
  return Q(Number.isNaN(c.getTime()) ? i : c);
}
function Ir({
  project: r,
  documents: l,
  conversations: i,
  memberCount: s,
  isSidebarOpen: o,
  onOpenSidebar: v,
  onBackToProjects: k,
  onOpenMemberManagement: N,
  onOpenDocument: _,
  onOpenConversation: g,
  onCreateDocument: u,
  onCreateConversation: c,
  onImportDocuments: m,
  onUpdateProjectName: n,
  onUpdateProjectDescription: f,
  documentImportAccept: w,
  documentImportMaxSize: T,
  documentImportDescription: y,
  showMemberManagement: I = !0,
  onDeleteProject: h
}) {
  const [d, a] = p("documents"), [z, C] = p(""), [$, B] = p("all"), [E, O] = p(!1), [R, b] = p(!1), [S, H] = p(!1), [G, X] = p([]), [oe, K] = p(""), [j, de] = p(!1), [V, J] = p((r == null ? void 0 : r.name) ?? ""), [te, Z] = p((r == null ? void 0 : r.description) ?? ""), [fe, M] = p(!1), [L, Y] = p(!1), [ce, re] = p(""), [Je, ge] = p(!1), [me, Pe] = p(!1), [De, ae] = p(""), Ae = Se(null);
  le(() => {
    J((r == null ? void 0 : r.name) ?? ""), Z((r == null ? void 0 : r.description) ?? ""), M(!1), Y(!1), re("");
  }, [r]);
  const Ee = P(() => ["all", ...Array.from(new Set(l.flatMap((x) => x.tags)))], [l]), $e = P(() => {
    const x = z.trim().toLowerCase();
    return l.filter((D) => ($ === "all" || D.tags.includes($)) && (!x || [D.title, D.summary, ...D.tags].join(" ").toLowerCase().includes(x)));
  }, [l, z, $]), Be = P(() => {
    const x = z.trim().toLowerCase();
    return x ? i.filter((D) => [D.title, D.date, Ye(D.date, D.id)].join(" ").toLowerCase().includes(x)) : i;
  }, [i, z]);
  le(() => {
    if (d !== "documents") return;
    const x = () => {
      const D = Ae.current;
      if (!D) return b(!1);
      const He = D.scrollHeight > We + 1;
      b(He), He || O(!1);
    };
    return x(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, [d, Ee]);
  const Oe = async () => {
    const x = V.trim() || (r == null ? void 0 : r.name) || "";
    if (J(x), M(!1), x && x !== (r == null ? void 0 : r.name)) {
      re("");
      try {
        await n(x);
      } catch (D) {
        J((r == null ? void 0 : r.name) ?? ""), re(D instanceof Error ? D.message : "项目名称更新失败");
      }
    }
  }, Le = async () => {
    const x = te.trim() || (r == null ? void 0 : r.description) || "";
    if (Z(x), Y(!1), x && x !== (r == null ? void 0 : r.description)) {
      re("");
      try {
        await f(x);
      } catch (D) {
        Z((r == null ? void 0 : r.description) ?? ""), re(D instanceof Error ? D.message : "项目描述更新失败");
      }
    }
  }, Ze = async () => {
    if (!G.length) return K("请先选择至少一个文件");
    de(!0), K("");
    try {
      await m(G), H(!1), X([]);
    } catch (x) {
      K(x instanceof Error ? x.message : "文档导入失败");
    } finally {
      de(!1);
    }
  }, je = async () => {
    if (!(!h || me)) {
      Pe(!0), ae("");
      try {
        await h();
      } catch (x) {
        ae(x instanceof Error ? x.message : "项目删除失败"), Pe(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: k, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: V || (r == null ? void 0 : r.name) || "详情" })
        ] })
      ] }),
      r && (I || h) && /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
        I && /* @__PURE__ */ t("button", { type: "button", onClick: N, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
          /* @__PURE__ */ e(Re, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "管理成员" })
        ] }),
        h && /* @__PURE__ */ t("button", { type: "button", onClick: () => {
          ae(""), ge(!0);
        }, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-danger transition-colors hover:text-danger-hover", children: [
          /* @__PURE__ */ e(ne, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "删除项目" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: r ? /* @__PURE__ */ t("section", { children: [
      fe ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: V,
          onChange: (x) => J(x.target.value),
          onBlur: () => {
            Oe();
          },
          onKeyDown: (x) => {
            x.key === "Enter" && (x.preventDefault(), Oe()), x.key === "Escape" && (J(r.name), M(!1));
          },
          autoFocus: !0,
          className: "w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative block w-fit max-w-full", children: [
        /* @__PURE__ */ e("h2", { className: "cursor-text text-2xl font-semibold text-primaryText", onClick: () => M(!0), children: V || r.name }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目名称" })
      ] }),
      L ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: te,
          onChange: (x) => Z(x.target.value),
          onBlur: () => {
            Le();
          },
          onKeyDown: (x) => {
            x.key === "Enter" && (x.preventDefault(), Le()), x.key === "Escape" && (Z(r.description), Y(!1));
          },
          autoFocus: !0,
          className: "mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative mt-1 block max-w-[760px]", children: [
        /* @__PURE__ */ e("p", { className: "cursor-text text-sm text-tertiaryText", onClick: () => Y(!0), children: te || r.description }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目描述" })
      ] }),
      ce && /* @__PURE__ */ e("div", { role: "alert", className: "mt-2 text-sm text-danger", children: ce }),
      /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
        /* @__PURE__ */ e(Re, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          s,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => a("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${d === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          l.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => a("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${d === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          i.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(pt, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: z, onChange: (x) => C(x.target.value), placeholder: `搜索${d === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(A, { type: "ghost", size: "small", rounded: "large", icon: d === "documents" ? /* @__PURE__ */ e(ie, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: d === "documents" ? u : c, children: d === "documents" ? "新建" : "发起对话" }),
          d === "documents" && /* @__PURE__ */ t(pe, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              X([]), K(""), H(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(ut, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      d === "documents" && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: Ae, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: E || !R ? void 0 : `${We}px` }, children: Ee.map((x) => /* @__PURE__ */ e("button", { type: "button", onClick: () => B(x), className: `h-7 rounded-full border px-3 text-xs transition-colors ${$ === x ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: x === "all" ? "全部" : x }, x)) }),
        R && /* @__PURE__ */ e("button", { type: "button", onClick: () => O((x) => !x), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: E ? "收起" : "展开" })
      ] }) }),
      d === "documents" ? $e.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: $e.map((x) => /* @__PURE__ */ t("button", { type: "button", onClick: () => _(x.kbNodeId), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: x.title }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: x.summary }),
        x.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: x.tags.map((D) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: D }, `${x.id}-${D}`)) })
      ] }, x.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(he, { description: "暂无匹配的文档" }) }) : Be.length ? /* @__PURE__ */ e("div", { className: "mt-4 space-y-2", children: Be.map((x) => /* @__PURE__ */ t("button", { type: "button", onClick: () => g(x.id), className: "-ml-2 w-[calc(100%+0.5rem)] rounded-lg px-2 py-3 text-left transition-colors hover:bg-projectConversationHover", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: x.title }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Ye(x.date, x.id) })
      ] }, x.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(he, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(he, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: S,
        title: "导入文档",
        width: 500,
        maskClosable: !1,
        cancelText: "取消",
        okText: j ? "导入中…" : "导入",
        onCancel: () => {
          j || (H(!1), X([]), K(""));
        },
        onConfirm: () => {
          Ze();
        },
        okButtonProps: { disabled: j },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(ze, { value: G, accept: w, maxCount: 5, maxSize: T ?? 20 * 1024 * 1024, uploadDescription: y, disabled: j, onChange: X, onError: (x) => K(x.message) }),
          oe && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: oe })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      F,
      {
        visible: Je,
        title: "删除项目",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          me || (ge(!1), ae(""));
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(A, { type: "secondary", size: "medium", disabled: me, onClick: () => {
            ge(!1), ae("");
          }, children: "取消" }),
          /* @__PURE__ */ e(A, { type: "danger", size: "medium", isLoading: me, onClick: () => {
            je();
          }, children: "删除" })
        ] }),
        children: /* @__PURE__ */ t("div", { className: "space-y-3 text-sm leading-6 text-secondaryText", children: [
          /* @__PURE__ */ t("p", { children: [
            "删除后，项目“",
            r == null ? void 0 : r.name,
            "”将不再显示。确认删除当前项目吗？"
          ] }),
          De && /* @__PURE__ */ e("p", { role: "alert", className: "text-danger", children: De })
        ] })
      }
    )
  ] });
}
function Pr({
  visible: r,
  typeOptions: l,
  templates: i,
  loading: s = !1,
  error: o = "",
  defaultKnowledgeType: v,
  defaultTemplateId: k,
  onClose: N,
  onRetry: _,
  onContinue: g
}) {
  var y, I, h;
  const u = v || ((y = l[0]) == null ? void 0 : y.value) || "", c = k || ((I = i.find((d) => d.id === "blank")) == null ? void 0 : I.id) || ((h = i[0]) == null ? void 0 : h.id) || "", [m, n] = p(u), [f, w] = p(c);
  le(() => {
    r && (n(u), w(c));
  }, [c, u, r]);
  const T = P(
    () => i.find((d) => d.id === f) ?? null,
    [f, i]
  );
  return /* @__PURE__ */ e(
    F,
    {
      visible: r,
      title: "新建文档",
      width: 760,
      maskClosable: !1,
      footer: null,
      onCancel: N,
      bodyClassName: "!p-0",
      children: /* @__PURE__ */ t("div", { className: "flex max-h-[min(720px,calc(90vh-64px))] min-h-0 flex-col", children: [
        /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-y-auto px-6 py-5", children: [
          /* @__PURE__ */ t("section", { children: [
            /* @__PURE__ */ t("div", { className: "mb-3", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-primaryText", children: "选择文档类型" }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "文档类型用于项目内分类和后续检索。" })
            ] }),
            /* @__PURE__ */ e("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: l.map((d) => {
              const a = d.value === m;
              return /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: [
                    "rounded-lg border px-3 py-2.5 text-left transition",
                    a ? "border-primary bg-primary-soft" : "border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted"
                  ].join(" "),
                  onClick: () => n(d.value),
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm font-medium text-primaryText", children: d.label }),
                      a && /* @__PURE__ */ e(ke, { size: 15, className: "shrink-0 text-primary" })
                    ] }),
                    /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText", children: d.description })
                  ]
                },
                d.value
              );
            }) })
          ] }),
          /* @__PURE__ */ t("section", { className: "mt-6 border-t border-lineSoft pt-5", children: [
            /* @__PURE__ */ t("div", { className: "mb-3", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-primaryText", children: "选择模板" }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "模板只提供初始内容，进入编辑器后可以自由修改。" })
            ] }),
            s ? /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "正在加载模板…" }) : o ? /* @__PURE__ */ t("div", { className: "rounded-lg border border-danger bg-danger-soft px-4 py-4", children: [
              /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: o }),
              _ && /* @__PURE__ */ e(A, { type: "secondary", size: "small", className: "mt-3", onClick: _, children: "重新加载" })
            ] }) : i.length ? /* @__PURE__ */ e("div", { className: "grid gap-3 sm:grid-cols-2", children: i.map((d) => {
              var z;
              const a = d.id === f;
              return /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: [
                    "rounded-lg border p-3 text-left transition",
                    a ? "border-primary bg-primary-soft" : "border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted"
                  ].join(" "),
                  onClick: () => w(d.id),
                  children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surfaceMuted text-base text-secondaryText", children: d.icon || /* @__PURE__ */ e(bt, { size: 17 }) }),
                    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: d.name }),
                        d.source === "workspace" && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-primary", children: "自定义" }),
                        a && /* @__PURE__ */ e(ke, { size: 15, className: "ml-auto shrink-0 text-primary" })
                      ] }),
                      /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText", children: d.description }),
                      (z = d.structure) != null && z.length ? /* @__PURE__ */ e("div", { className: "mt-2 flex flex-wrap gap-1.5", children: d.structure.slice(0, 3).map((C) => /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-xs text-secondaryText", children: C }, C)) }) : null
                    ] })
                  ] })
                },
                d.id
              );
            }) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无可用模板" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center justify-between gap-4 border-t border-lineSoft px-6 py-4", children: [
          /* @__PURE__ */ e("p", { className: "min-w-0 truncate text-xs text-tertiaryText", children: T ? `已选择：${T.name}` : "请选择一个模板" }),
          /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(A, { type: "secondary", size: "medium", onClick: N, children: "取消" }),
            /* @__PURE__ */ e(
              A,
              {
                type: "primary",
                size: "medium",
                disabled: s || !!o || !m || !f,
                onClick: () => g({ knowledgeType: m, templateId: f }),
                children: "继续编辑"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Dr({
  projectName: r,
  document: l,
  isSidebarOpen: i,
  onOpenSidebar: s,
  onBackToProjects: o,
  onBackToProject: v,
  onEdit: k,
  onDelete: N
}) {
  const [_, g] = p(!1), [u, c] = p(!1), [m, n] = p(""), f = async () => {
    c(!0), n("");
    try {
      await N(), g(!1);
    } catch (w) {
      n(w instanceof Error ? w.message : "文档删除失败");
    } finally {
      c(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !i && /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "shrink-0 text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "max-w-56 truncate text-tertiaryText transition-colors hover:text-primaryText", children: r }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "truncate font-medium text-primaryText", children: l.title })
        ] })
      ] }),
      l.canEdit && /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(A, { type: "secondary", size: "small", rounded: "large", onClick: () => {
          n(""), g(!0);
        }, children: "删除" }),
        /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", onClick: k, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: /* @__PURE__ */ e(tt, { document: l }) }) }),
    /* @__PURE__ */ t(
      F,
      {
        visible: _,
        title: "删除文档",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          u || g(!1);
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(A, { type: "secondary", size: "medium", disabled: u, onClick: () => g(!1), children: "取消" }),
          /* @__PURE__ */ e(A, { type: "danger", size: "medium", disabled: u, onClick: () => {
            f();
          }, children: u ? "删除中…" : "删除" })
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可恢复，确认删除当前文档吗？" }),
          m && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: m })
        ]
      }
    )
  ] });
}
const Xe = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], mr = [...Xe, { label: "移除", value: "移除" }];
function Ar({
  visible: r,
  members: l,
  directory: i,
  onClose: s,
  onInvite: o,
  onChangePermission: v,
  onRemove: k
}) {
  const [N, _] = p([]), [g, u] = p("浏览"), [c, m] = p(""), [n, f] = p(""), w = P(() => {
    const h = new Set(l.map((d) => d.id));
    return i.filter((d) => !h.has(d.id)).map((d) => ({
      label: `${d.name}（${d.email}）`,
      value: d.id,
      searchText: `${d.name} ${d.email}`
    }));
  }, [i, l]), T = () => {
    n || (_([]), u("浏览"), m(""), s());
  }, y = async () => {
    if (!N.length) {
      m("请先选择要邀请的成员");
      return;
    }
    f("invite"), m("");
    try {
      await o(N, g), _([]), u("浏览");
    } catch (h) {
      m(h instanceof Error ? h.message : "邀请成员失败");
    } finally {
      f("");
    }
  }, I = async (h, d) => {
    f(h), m("");
    try {
      d === "移除" ? await k(h) : await v(h, d);
    } catch (a) {
      m(a instanceof Error ? a.message : "成员操作失败");
    } finally {
      f("");
    }
  };
  return /* @__PURE__ */ e(F, { visible: r, title: "管理成员", width: 560, maskClosable: !1, footer: null, onCancel: T, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    /* @__PURE__ */ t("section", { className: "space-y-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "加入新成员" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1", children: [
          /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
            ye,
            {
              mode: "multiple",
              showSearch: !0,
              variant: "borderless",
              value: N,
              options: w,
              optionFilterProp: "searchText",
              classNames: { popup: { root: "project-invite-member-dropdown" } },
              suffixIcon: null,
              placeholder: "搜索姓名/邮箱并选择成员",
              onChange: (h) => {
                _(h), c && m("");
              },
              disabled: !!n,
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "mx-2 h-5 w-px bg-lineSoft" }),
          /* @__PURE__ */ e(
            ye,
            {
              variant: "borderless",
              value: g,
              options: Xe,
              onChange: (h) => u(h),
              disabled: !!n,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(A, { type: "primary", size: "medium", disabled: !!n, onClick: () => {
          y();
        }, children: n === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      c && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: c })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: l.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: l.map((h) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: h.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      h.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: h.roleLabel || h.permission }) : /* @__PURE__ */ e(
        ye,
        {
          variant: "borderless",
          value: h.permission,
          options: mr,
          onChange: (d) => {
            I(h.id, String(d));
          },
          disabled: !!n,
          className: "member-permission-action-select w-[84px]",
          classNames: { popup: { root: "project-member-permission-dropdown" } },
          getPopupContainer: () => document.body
        }
      )
    ] }, h.id)) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText", children: "暂无成员" }) })
  ] }) });
}
const xr = (r) => r.find((l) => l.status !== "实验结束") ?? r[0] ?? null;
function Er({
  project: r,
  experiment: l,
  isSidebarOpen: i,
  onOpenSidebar: s,
  onBackToProjects: o,
  onBackToProject: v,
  onDelete: k,
  onEdit: N
}) {
  const [_, g] = p(!1), [u, c] = p(!1), m = Se(null), n = P(
    () => l ? xr(l.timeline) : null,
    [l]
  ), f = (n == null ? void 0 : n.actor) || (l == null ? void 0 : l.ownerName) || "未知成员";
  le(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const w = () => {
    g(!0), m.current !== null && window.clearTimeout(m.current), m.current = window.setTimeout(() => g(!1), 700);
  }, T = () => {
    c(!1), k();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !i && /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: v, disabled: !r, className: `transition-colors ${r ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (r == null ? void 0 : r.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (l == null ? void 0 : l.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(A, { type: "secondary", size: "small", rounded: "large", onClick: () => c(!0), children: "删除" }),
        /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", onClick: N, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: !r || !l ? /* @__PURE__ */ e("div", { className: "w-full rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(he, { description: "实验不存在或已被删除" }) }) : /* @__PURE__ */ t(pe, { children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: (n == null ? void 0 : n.detailTitle) ?? l.title }),
        /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between gap-4", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "创建人: ",
            f
          ] }),
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            f
          ] }),
          /* @__PURE__ */ e("span", { children: (n == null ? void 0 : n.updatedAt) ?? l.updatedAt })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: w, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${_ ? "is-scrolling" : ""}`, children: [
        n != null && n.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(Nt, { remarkPlugins: [vt], children: n.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((n == null ? void 0 : n.detailSections) ?? []).map((y) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: y.title }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: y.content })
        ] }, y.title)) }),
        /* @__PURE__ */ t("div", { className: "mt-8 border-t border-lineSubtle pt-6", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "记录摘要" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: n == null ? void 0 : n.summary }),
          /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-4 text-xs text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { children: [
              "更新人 ",
              n == null ? void 0 : n.actor
            ] }),
            /* @__PURE__ */ t("span", { children: [
              "更新时间 ",
              n == null ? void 0 : n.updatedAt
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mb-6 mt-8 border-t border-lineSubtle pt-6", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
          /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: ((n == null ? void 0 : n.attachments) ?? []).map((y) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: y }, y)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(F, { visible: u, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => c(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(A, { type: "secondary", size: "medium", onClick: () => c(!1), children: "取消" }),
      /* @__PURE__ */ e(A, { type: "danger", size: "medium", onClick: T, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function qe({ label: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: r }),
      l && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: i })
  ] });
}
function $r({
  isSidebarOpen: r,
  avatarText: l = "研",
  avatarUrl: i,
  avatarUploading: s = !1,
  actionError: o,
  onOpenSidebar: v,
  onChangePassword: k,
  onChangeAvatar: N
}) {
  const [_, g] = p(!1), [u, c] = p(""), [m, n] = p(""), [f, w] = p(""), [T, y] = p(!1), [I, h] = p(""), [d, a] = p(""), [z, C] = p(""), $ = Se(null), B = f.length > 0 && m !== f, E = m.length > 0 && m.trim().length < 6, O = !!(u.trim() && m.trim() && f.trim() && !E && !B && !T), R = () => {
    T || (g(!1), c(""), n(""), w(""), h(""), a(""), C(""));
  }, b = async () => {
    if (O) {
      y(!0), h(""), a(""), C("");
      try {
        const S = await (k == null ? void 0 : k({ currentPassword: u.trim(), newPassword: m.trim() }));
        if (S && !S.ok) {
          S.field === "currentPassword" ? a(S.message) : S.field === "newPassword" ? C(S.message) : h(S.message);
          return;
        }
        g(!1), c(""), n(""), w("");
      } catch (S) {
        h(S instanceof Error ? S.message : "密码修改失败");
      } finally {
        y(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "更多设置" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[720px] py-0", children: /* @__PURE__ */ e("div", { className: "space-y-6", children: /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("h3", { className: "mb-2 mt-4 text-base font-semibold text-primaryText", children: "账户" }),
      /* @__PURE__ */ t("div", { className: "rounded-lg bg-surface", children: [
        /* @__PURE__ */ e(qe, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(A, { type: "secondary", size: "small", rounded: "large", onClick: () => g(!0), children: "修改" }) }),
        /* @__PURE__ */ e(qe, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: i ? /* @__PURE__ */ e("img", { src: i, alt: "当前头像", className: "h-full w-full object-cover" }) : l }),
          /* @__PURE__ */ e(
            A,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: s,
              disabled: s,
              onClick: () => {
                var S;
                return (S = $.current) == null ? void 0 : S.click();
              },
              children: s ? "上传中" : "上传"
            }
          )
        ] }) }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: $,
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            className: "hidden",
            onChange: async (S) => {
              var G;
              const H = (G = S.target.files) == null ? void 0 : G[0];
              if (S.target.value = "", !(!H || s))
                try {
                  await (N == null ? void 0 : N(H));
                } catch {
                }
            }
          }
        )
      ] }),
      o && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: o })
    ] }) }) }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: _,
        title: "修改密码",
        onClose: R,
        onCancel: R,
        onConfirm: () => {
          b();
        },
        cancelText: "取消",
        okText: T ? "保存中…" : "保存",
        okButtonProps: { disabled: !O },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(
            se,
            {
              label: "当前密码",
              type: "password",
              value: u,
              onChange: (S) => {
                c(S.target.value), a(""), h("");
              },
              placeholder: "请输入当前密码",
              size: "medium",
              error: !!d,
              helperText: d || void 0,
              disabled: T
            }
          ),
          /* @__PURE__ */ e(
            se,
            {
              label: "新密码",
              type: "password",
              value: m,
              onChange: (S) => {
                n(S.target.value), C(""), h("");
              },
              placeholder: "请输入新密码",
              size: "medium",
              error: !!z || E,
              helperText: z || (E ? "新密码至少需要 6 位" : void 0),
              disabled: T
            }
          ),
          /* @__PURE__ */ e(
            se,
            {
              label: "确认新密码",
              type: "password",
              value: f,
              onChange: (S) => w(S.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: B,
              helperText: B ? "两次输入的新密码不一致" : void 0,
              disabled: T
            }
          ),
          I && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: I })
        ] })
      }
    )
  ] });
}
function Br({ onOpenAiUsage: r, onOpenMembers: l, onLogout: i }) {
  return /* @__PURE__ */ t("div", { className: "mx-auto max-w-2xl p-8", children: [
    /* @__PURE__ */ e("h1", { className: "mb-8 text-3xl font-bold", children: "⚙️ 系统设置" }),
    /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: r, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "AI用量统计" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: l, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "项目成员管理" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: i, className: "w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft", children: "退出登录" })
    ] })
  ] });
}
const we = (r) => new Intl.NumberFormat("en-US").format(Math.round(r));
function hr({ points: r, labels: l, totalAmount: i }) {
  const [g, u] = p(null), c = P(() => Math.max(...r, 1), [r]), m = P(() => r.length <= 10 ? 1 : Math.ceil(r.length / 6), [r.length]), n = P(() => r.length <= 1 ? 0 : Math.min(6, 928 / r.length / 2.5), [928, r.length]), f = P(() => r.length === 0 ? 0 : Math.max(3, (928 - (r.length - 1) * n) / r.length), [n, 928, r.length]), w = (T) => T >= 1e4 ? `${(T / 1e4).toFixed(1)}万` : we(T);
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-primaryText", children: "月度用量" }),
      /* @__PURE__ */ t("div", { className: "mt-1 text-xs text-tertiaryText", children: [
        "Token 消耗",
        /* @__PURE__ */ e("span", { className: "ml-1 text-primaryText", children: we(i) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative h-[190px] w-full", children: [
      /* @__PURE__ */ t("svg", { viewBox: "0 0 1000 190", preserveAspectRatio: "none", className: "h-full w-full", children: [
        [c, 0].map((T) => {
          const y = 156 - T / c * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: y.toFixed(2), y2: y.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: y + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: w(T) })
          ] }, T);
        }),
        r.map((T, y) => {
          const I = T / c * 138, h = 52 + y * (f + n), d = 156 - I, a = l[y] ?? "", z = y % m === 0 || y === r.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => u(y), onMouseLeave: () => u(null), children: [
            /* @__PURE__ */ e("rect", { x: h.toFixed(2), y: d.toFixed(2), width: f.toFixed(2), height: Math.max(1, I).toFixed(2), rx: "1.5", fill: g === y ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            z && /* @__PURE__ */ e("text", { x: (h + f / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: a })
          ] }, `${a}-${y}`);
        })
      ] }),
      g !== null && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md", style: { left: `${(52 + g * (f + n) + f / 2) / 1e3 * 100}%` }, children: [
        /* @__PURE__ */ e("div", { className: "text-tertiaryText", children: l[g] }),
        /* @__PURE__ */ t("div", { className: "mt-0.5 font-semibold text-aiUsageBar", children: [
          we(r[g]),
          " Token"
        ] })
      ] })
    ] })
  ] });
}
function Or({
  isSidebarOpen: r,
  overviewCards: l,
  memberOptions: i,
  monthOptions: s,
  selectedMember: o,
  selectedMonth: v,
  trendPoints: k,
  trendLabels: N,
  trendTotal: _,
  rechargeRecords: g,
  onOpenSidebar: u,
  onMemberChange: c,
  onMonthChange: m
}) {
  var O, R;
  const [n, f] = p("analysis"), [w, T] = p(!1), [y, I] = p(!1), h = ((O = i.find((b) => b.value === o)) == null ? void 0 : O.label) ?? "全部成员", d = ((R = s.find((b) => b.value === v)) == null ? void 0 : R.label) ?? v, a = P(() => i.map((b) => ({ key: `member-${b.value}`, label: b.label, active: b.value === o })), [i, o]), z = P(() => s.map((b) => ({ key: `month-${b.value}`, label: b.label, active: b.value === v })), [s, v]), C = Te((b) => {
    c(b.key.replace("member-", "")), T(!1);
  }, [c]), $ = Te((b) => {
    m(b.key.replace("month-", "")), I(!1);
  }, [m]), B = P(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (b) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(b) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (b) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(b) }) }
  ], []), E = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: u, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: l.map((b) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: b.title }),
          b.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(ft, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: b.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: b.value }),
          b.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: b.warningLabel })
        ] }),
        b.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: b.helper })
      ] }) }, b.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => f("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => f("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        n === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(ee, { open: w, onOpenChange: T, items: a, onItemClick: C, placement: "bottom-start", width: 172, portal: !0, menuClassName: E, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: h }),
            /* @__PURE__ */ e(ue, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${w ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(ee, { open: y, onOpenChange: I, items: z, onItemClick: $, placement: "bottom-start", width: 172, portal: !0, menuClassName: E, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: d }),
            /* @__PURE__ */ e(ue, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${y ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        n === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(hr, { points: k, labels: N, totalAmount: _ }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: g.length > 0 ? /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(be, { className: "task-table-scroll min-w-[760px]", columns: B, dataSource: g, rowKey: "id" }) }) : /* @__PURE__ */ e("div", { className: "flex min-h-[180px] items-center justify-center text-sm text-tertiaryText", children: "暂无充值记录" }) })
      ] })
    ] }) })
  ] });
}
function Lr({ isSidebarOpen: r, result: l, onOpenSidebar: i, onBack: s, onRun: o, onReset: v }) {
  const k = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: i, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: s, className: `rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${r ? "-ml-2" : ""}`, "aria-label": "返回任务列表", children: /* @__PURE__ */ e(gt, { size: 20 }) }),
      /* @__PURE__ */ e("h1", { className: "text-3xl font-normal text-primaryText", children: "序列比对助手" })
    ] }),
    /* @__PURE__ */ e("p", { className: "mb-10 ml-10 text-base text-secondaryText", children: "快速进行 DNA/RNA 序列比对与同源性分析" }),
    /* @__PURE__ */ t("div", { className: "space-y-6 rounded-2xl border border-borderGray p-8", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 1" }),
        /* @__PURE__ */ e("textarea", { className: k, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 2" }),
        /* @__PURE__ */ e("textarea", { className: k, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex gap-4 pt-2", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: o, className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95", children: [
          /* @__PURE__ */ e(yt, { size: 16, className: "fill-current" }),
          "运行比对"
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: v, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e(ne, { size: 16 }),
          "重置"
        ] })
      ] }),
      l && /* @__PURE__ */ t("div", { className: "mt-8 border-t border-borderGray pt-8", children: [
        /* @__PURE__ */ e("h3", { className: "mb-4 font-medium text-primaryText", children: "运行结果" }),
        /* @__PURE__ */ t("div", { className: "my-4 overflow-hidden rounded-lg border border-borderGray bg-toolCodeSurface", children: [
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-bgLight px-4 py-2 text-xs font-medium text-secondaryText", children: "结果" }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto whitespace-pre-line p-4 font-mono text-sm text-primaryText", children: l })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Or as AiUsagePage,
  Gr as AppShell,
  Fr as AssistantActions,
  ee as BaseActionMenu,
  A as BaseButton,
  Ur as BaseCard,
  ze as BaseDocumentUpload,
  he as BaseEmpty,
  se as BaseInput,
  F as BaseModal,
  et as BasePagination,
  Kr as BaseSegmented,
  Wr as BaseSelect,
  be as BaseTable,
  Ie as BaseToggle,
  Ve as BaseUpload,
  Yr as CHAT_FILE_OPTIONS,
  qr as CHAT_INPUT_GUIDE_TEXT,
  Qr as CHAT_QUICK_PROMPTS,
  Xr as CHAT_RECENT_FILE_OPTIONS,
  Jr as CHAT_SKILL_OPTIONS,
  Zr as ChatComposerDock,
  jr as ChatConversationViewport,
  Vr as ChatHomePage,
  ea as ChatPreviewPanel,
  ta as ChatProjectFilesPanel,
  ra as ChatShareControls,
  aa as ChatTimelineNavigation,
  sa as ChatWorkspaceFrame,
  la as ChatWorkspaceHeader,
  na as ChatWorkspaceHeaderAction,
  ia as ChatWorkspaceSidePanel,
  Er as ExperimentDetailPage,
  oa as ForgotPasswordPage,
  da as InputArea,
  rr as LiteratureSubscriptionsTable,
  ca as LoginPage,
  Cr as MemberManagementPage,
  ma as MessageItem,
  xa as MessageList,
  ha as MiraDraftCard,
  Tr as NavigationProvider,
  Ir as ProjectDetailPage,
  pa as ProjectDocumentAttachments,
  Pr as ProjectDocumentCreateModal,
  ua as ProjectDocumentEditor,
  ba as ProjectDocumentMetadata,
  Dr as ProjectDocumentPreview,
  tt as ProjectDocumentPreviewContent,
  Ar as ProjectMemberManagementModal,
  zr as ProjectsPage,
  fa as QuickPrompts,
  ga as RegisterPage,
  Mr as ScheduledTaskDeleteModal,
  _r as ScheduledTaskEditorModal,
  Sr as ScheduledTasksOverview,
  Br as SettingsPage,
  ya as SkillPage,
  $r as SystemSettingsDetailPage,
  Na as ThinkingIndicator,
  Lr as ToolPage,
  sr as buildTaskPromptPreview,
  Ye as formatProjectConversationDate,
  va as insertFileReference,
  wa as insertSkillCommand,
  Ta as resolveAtQuery,
  ka as resolveSlashQuery,
  kr as useNavigation
};
