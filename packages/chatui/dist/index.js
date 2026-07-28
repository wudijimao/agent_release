import { B as Ye, a as te, b as L, c as xe, d as qe, e as G, f as se, g as le, m as Qe } from "./SkillPage-Ditn8bV4.js";
import { A as Or, h as Rr, i as Hr, j as Fr, k as Gr, C as Ur, l as Kr, n as Wr, o as Yr, p as qr, q as Qr, r as Xr, s as Jr, t as Zr, u as jr, v as Vr, w as ea, x as ta, y as ra, z as aa, D as sa, F as la, I as na, L as ia, M as oa, E as da, P as ca, Q as ma, R as xa, S as pa, T as ha, G as ua, H as ba, J as fa, K as ga } from "./SkillPage-Ditn8bV4.js";
import { jsxs as t, jsx as e, Fragment as ce } from "react/jsx-runtime";
import Xe, { useState as p, useMemo as A, useCallback as Ne, useContext as Je, createContext as Ze, useEffect as ne, useRef as pe } from "react";
import { Inbox as je, Paperclip as Ve, X as et, Pencil as we, Trash2 as he, HelpCircle as tt, MoreHorizontal as Te, Menu as K, Plus as ie, AlertCircle as rt, ShieldCheck as at, RefreshCw as st, MessageCircle as lt, Folder as nt, ChevronDown as me, Check as it, Users as Ae, Search as ot, Upload as dt, FileText as ct, Loader2 as mt, Download as xt, CheckCircle2 as pt, Clock3 as ht, SearchX as ut, CircleHelp as bt, ArrowLeft as ft, Play as gt } from "lucide-react";
import ve from "classnames";
import Fe from "react-markdown";
import Ge from "remark-gfm";
import { DatePicker as yt, Cascader as Nt, TimePicker as vt, Radio as Ee, Select as be } from "antd";
import fe from "dayjs";
const wt = "_wrapper_g5uno_1", Tt = "_uploadContent_g5uno_7", kt = "_uploadIcon_g5uno_17", Ct = "_uploadTitle_g5uno_18", St = "_uploadDescription_g5uno_19", _t = "_fileList_g5uno_20", Mt = "_fileItem_g5uno_21", zt = "_fileItemIcon_g5uno_22", It = "_fileName_g5uno_23", Pt = "_fileSize_g5uno_24", Dt = "_removeButton_g5uno_25", F = {
  wrapper: wt,
  uploadContent: Tt,
  uploadIcon: kt,
  uploadTitle: Ct,
  uploadDescription: St,
  fileList: _t,
  fileItem: Mt,
  fileItemIcon: zt,
  fileName: It,
  fileSize: Pt,
  removeButton: Dt
}, At = ".pdf,.doc,.docx,.txt,.md,.csv", Et = 20 * 1024 * 1024, $e = 5, Le = (r, s) => r.name === s.name && r.size === s.size && r.lastModified === s.lastModified && r.type === s.type, $t = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`, ke = Xe.forwardRef(
  ({
    value: r,
    defaultValue: s = [],
    onChange: c,
    onError: l,
    accept: o = At,
    maxSize: y = Et,
    maxCount: T = $e,
    disabled: N = !1,
    className: C,
    uploadTitle: f = "点击或拖拽文件到此上传",
    uploadDescription: k = `支持单文件或批量上传，单次最多 ${$e} 个，单个文件不超过 20MB`,
    uploadIcon: x
  }, i) => {
    const [n, h] = p(s), w = r !== void 0, g = A(() => (w ? r : n) ?? [], [n, w, r]), b = (d) => {
      w || h(d), c == null || c(d);
    }, z = (d) => {
      const u = [...g];
      if (Array.from(d).forEach((a) => {
        u.some((I) => Le(I, a)) || u.push(a);
      }), u.length > T) {
        l == null || l(new Error(`最多上传 ${T} 个文件，请删除后再继续添加`));
        return;
      }
      b(u);
    };
    return /* @__PURE__ */ t("div", { className: ve(F.wrapper, C), children: [
      /* @__PURE__ */ e(Ye, { ref: i, accept: o, multiple: !0, disabled: N, maxSize: y, maxCount: T, onChange: z, onError: l, children: /* @__PURE__ */ t("div", { className: F.uploadContent, children: [
        x ?? /* @__PURE__ */ e(je, { size: 30, strokeWidth: 2.2, className: F.uploadIcon }),
        /* @__PURE__ */ e("div", { className: F.uploadTitle, children: f }),
        /* @__PURE__ */ e("div", { className: F.uploadDescription, children: k })
      ] }) }),
      g.length > 0 && /* @__PURE__ */ e("div", { className: F.fileList, children: g.map((d, u) => /* @__PURE__ */ t("div", { className: F.fileItem, children: [
        /* @__PURE__ */ e(Ve, { size: 14, className: F.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: F.fileName, children: d.name }),
        /* @__PURE__ */ e("span", { className: F.fileSize, children: $t(d.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => b(g.filter((a) => !Le(a, d))), className: F.removeButton, "aria-label": `移除文件 ${d.name}`, disabled: N, children: /* @__PURE__ */ e(et, { size: 14 }) })
      ] }, `${d.name}-${d.lastModified}-${u}`)) })
    ] });
  }
);
ke.displayName = "BaseDocumentUpload";
const Lt = "_toggle_198gd_1", Bt = "_toggleSmall_198gd_18", Ot = "_toggleRegular_198gd_23", Rt = "_toggleMedium_198gd_28", Ht = "_toggleOff_198gd_33", Ft = "_toggleOn_198gd_37", Gt = "_toggleDisabled_198gd_41", Ut = "_thumb_198gd_46", Kt = "_thumbSmall_198gd_54", Wt = "_thumbRegular_198gd_59", Yt = "_thumbMedium_198gd_64", qt = "_thumbOffSmall_198gd_69", Qt = "_thumbOffRegular_198gd_70", Xt = "_thumbOffMedium_198gd_71", Jt = "_thumbOnSmall_198gd_75", Zt = "_thumbOnRegular_198gd_79", jt = "_thumbOnMedium_198gd_83", Y = {
  toggle: Lt,
  toggleSmall: Bt,
  toggleRegular: Ot,
  toggleMedium: Rt,
  toggleOff: Ht,
  toggleOn: Ft,
  toggleDisabled: Gt,
  thumb: Ut,
  thumbSmall: Kt,
  thumbRegular: Wt,
  thumbMedium: Yt,
  thumbOffSmall: qt,
  thumbOffRegular: Qt,
  thumbOffMedium: Xt,
  thumbOnSmall: Jt,
  thumbOnRegular: Zt,
  thumbOnMedium: jt
}, Ce = ({
  checked: r,
  defaultChecked: s = !1,
  size: c = "medium",
  disabled: l = !1,
  onChange: o,
  className: y,
  ...T
}) => {
  const [N, C] = p(s), f = r !== void 0, k = f ? r : N, x = `${c.charAt(0).toUpperCase()}${c.slice(1)}`, i = Ne(() => {
    if (l) return;
    const w = !k;
    f || C(w), o == null || o(w);
  }, [l, k, f, o]), n = A(
    () => ve(
      Y.toggle,
      Y[`toggle${x}`],
      k ? Y.toggleOn : Y.toggleOff,
      l && Y.toggleDisabled,
      y
    ),
    [y, l, k, x]
  ), h = A(
    () => ve(
      Y.thumb,
      Y[`thumb${x}`],
      Y[`thumb${k ? "On" : "Off"}${x}`]
    ),
    [k, x]
  );
  return /* @__PURE__ */ e(
    "button",
    {
      ...T,
      type: "button",
      role: "switch",
      "aria-checked": k,
      className: n,
      onClick: i,
      disabled: l,
      children: /* @__PURE__ */ e("span", { className: h })
    }
  );
};
Ce.displayName = "BaseToggle";
const Ue = Ze(null);
function vr({
  adapter: r,
  children: s
}) {
  return /* @__PURE__ */ e(Ue.Provider, { value: r, children: s });
}
function wr() {
  const r = Je(Ue);
  if (!r)
    throw new Error("useNavigation must be used within NavigationProvider");
  return r;
}
function Tr({
  labName: r,
  members: s,
  inviteCode: c,
  isSidebarOpen: l,
  loading: o = !1,
  error: y,
  actionError: T,
  canManage: N = !1,
  onOpenSidebar: C,
  onRetry: f,
  onRegenerateInvite: k,
  onUpdateRole: x,
  onRemoveMember: i
}) {
  const [n, h] = p(!1), [w, g] = p(!1), [b, z] = p(!1), [d, u] = p(!1), [a, I] = p(null), [v, B] = p("成员"), [P, M] = p(null), [R, O] = p(null), [S, D] = p(1), [H, U] = p(10), re = s.filter((_) => _.role === "管理员").length, W = A(() => {
    const _ = (S - 1) * H;
    return s.slice(_, _ + H);
  }, [S, s, H]), Q = A(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(we, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(he, { size: 14 }), danger: !0 }
    ],
    []
  );
  ne(() => {
    const _ = Math.max(1, Math.ceil(s.length / H));
    S > _ && D(_);
  }, [S, s.length, H]);
  const oe = (_) => {
    I(_), B(_.role), z(!0);
  }, j = (_) => {
    I(_), u(!0);
  }, X = async () => {
    if (c) {
      try {
        await navigator.clipboard.writeText(c);
      } catch {
        const _ = document.createElement("textarea");
        _.value = c, _.style.position = "fixed", _.style.opacity = "0", document.body.appendChild(_), _.focus(), _.select(), document.execCommand("copy"), document.body.removeChild(_);
      }
      g(!0), window.setTimeout(() => g(!1), 1500);
    }
  }, ae = async () => {
    M("invite");
    try {
      await k(), g(!1);
    } finally {
      M(null);
    }
  }, J = async () => {
    if (a) {
      M("edit");
      try {
        await x(a.id, v), z(!1);
      } finally {
        M(null);
      }
    }
  }, ue = async () => {
    if (a) {
      M("remove");
      try {
        await i(a.id), u(!1);
      } finally {
        M(null);
      }
    }
  }, V = A(
    () => [
      {
        title: "姓名",
        dataIndex: "name",
        width: "25%",
        render: (_, $) => /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center pr-2", children: [
          /* @__PURE__ */ e("div", { className: "mr-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lineSubtle bg-bgLight text-[11px] font-medium text-secondaryText", children: $.avatarUrl ? /* @__PURE__ */ e("img", { className: "h-full w-full object-cover", src: $.avatarUrl, alt: "" }) : $.name.slice(0, 2) }),
          /* @__PURE__ */ t("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "truncate font-medium text-primaryText", children: $.name }),
            /* @__PURE__ */ e("p", { className: "mt-0.5 truncate text-[13px] text-secondaryText", children: $.email })
          ] })
        ] })
      },
      {
        title: /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
          "团队角色",
          /* @__PURE__ */ e("span", { className: "text-mutedText", title: "管理员可管理成员和实验室设置；成员可使用工作区。", children: /* @__PURE__ */ e(tt, { size: 14 }) })
        ] }),
        dataIndex: "role",
        width: "16%"
      },
      {
        title: "加入时间",
        dataIndex: "joinedAt",
        width: "18%",
        render: (_) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(_) })
      },
      {
        title: "归属项目",
        dataIndex: "projectsLabel",
        width: "31%",
        render: (_) => /* @__PURE__ */ e("span", { className: "block truncate text-secondaryText", title: String(_ || "暂未提供"), children: String(_ || "暂未提供") })
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "10%",
        render: (_, $) => $.canManage ? /* @__PURE__ */ e(
          te,
          {
            open: R === $.id,
            onOpenChange: (ee) => O(ee ? $.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Te, { size: 16 }) }),
            items: Q,
            onItemClick: (ee, Z) => {
              Z.stopPropagation(), O(null), ee.key === "edit" ? oe($) : j($);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [R, Q]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !l && /* @__PURE__ */ e("button", { type: "button", onClick: C, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "成员管理" })
        ] })
      ] }),
      N && /* @__PURE__ */ e(L, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(ie, { size: 14 }), className: "shrink-0", onClick: () => h(!0), children: "邀请新成员" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-primaryText md:text-2xl", children: r || "实验室成员" }),
        /* @__PURE__ */ t("span", { className: "shrink-0 rounded-full bg-surfaceMuted px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
          "共",
          s.length,
          "人"
        ] })
      ] }),
      y && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: y }),
        f && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: f, children: "重新加载" })
      ] }),
      !y && re < 2 && !o && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
        /* @__PURE__ */ e(rt, { size: 16, className: "shrink-0" }),
        /* @__PURE__ */ t("span", { children: [
          "当前管理员",
          re,
          "名，建议至少保留2名管理员，避免团队配置和成员管理只有单点负责人"
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          xe,
          {
            className: "task-table-scroll w-full [&_table]:min-w-[860px] [&_thead_th]:py-2 [&_thead_th]:text-[13px] [&_tbody_td]:py-2.5 [&_tbody_td]:text-[13px]",
            columns: V,
            dataSource: W,
            rowKey: "id",
            striped: !1,
            loading: o
          }
        ),
        /* @__PURE__ */ e(
          qe,
          {
            current: S,
            total: s.length,
            pageSize: H,
            onChange: D,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (_, $) => {
              U($), D(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(at, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(G, { visible: n, title: "邀请新成员", width: 360, onCancel: () => h(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (c || "------").split("").map((_, $) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: _ }, `${_}-${$}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      T && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: T }),
      /* @__PURE__ */ e(L, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: X, disabled: !c, children: w ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: ae, disabled: P === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: P === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(G, { visible: b && !!a, title: "编辑成员信息", width: 560, maskClosable: !1, cancelText: "取消", okText: "保存修改", confirmLoading: P === "edit", onCancel: () => z(!1), onConfirm: J, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((_) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: _, checked: v === _, onChange: () => B(_), className: "h-4 w-4 accent-primary" }),
          _
        ] }, _)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-mutedText", children: "项目归属接口暂未开放" })
      ] }),
      T && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: T })
    ] }) }),
    /* @__PURE__ */ t(G, { visible: d && !!a, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: P === "remove", onCancel: () => u(!1), onConfirm: ue, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
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
      T && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: T })
    ] })
  ] });
}
function Vt({
  items: r,
  loading: s = !1,
  pendingId: c,
  onCreate: l,
  onFetch: o,
  onToggle: y,
  onEdit: T,
  onDelete: N
}) {
  const [C, f] = p(null), k = A(() => [
    {
      title: "订阅名称",
      dataIndex: "name",
      width: "19%",
      render: (x, i) => /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate font-medium text-primaryText", children: String(x) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: i.source })
      ] })
    },
    {
      title: "关键词",
      dataIndex: "keywords",
      width: "22%",
      render: (x) => /* @__PURE__ */ e("span", { className: "line-clamp-2 break-all text-secondaryText", children: String(x) || "未设置" })
    },
    {
      title: "抓取设置",
      dataIndex: "schedule",
      width: "14%",
      render: (x) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(x) })
    },
    {
      title: "内容统计",
      dataIndex: "itemStats",
      width: "16%",
      render: (x, i) => /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "text-secondaryText", children: String(x) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: i.projectStats })
      ] })
    },
    {
      title: "最近抓取",
      dataIndex: "lastFetch",
      width: "14%",
      render: (x) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(x) })
    },
    {
      title: "状态",
      dataIndex: "isEnabled",
      width: "7%",
      render: (x, i) => /* @__PURE__ */ e(
        Ce,
        {
          size: "small",
          checked: i.isEnabled,
          disabled: c === i.id,
          onChange: () => y(i.id),
          "aria-label": i.isEnabled ? "停用文献订阅" : "启用文献订阅"
        }
      )
    },
    {
      title: "操作",
      dataIndex: "id",
      width: "8%",
      align: "right",
      render: (x, i) => {
        const n = [
          { key: "fetch", label: "立即抓取", icon: /* @__PURE__ */ e(st, { size: 14 }) },
          { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(we, { size: 14 }) },
          { key: "delete", label: "删除", icon: /* @__PURE__ */ e(he, { size: 14 }), danger: !0 }
        ];
        return /* @__PURE__ */ e(
          te,
          {
            open: C === i.id,
            onOpenChange: (h) => f(h ? i.id : null),
            placement: "bottom-end",
            width: 140,
            portal: !0,
            menuClassName: "!min-w-[140px]",
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Te, { size: 16 }) }),
            items: n,
            onItemClick: (h) => {
              f(null), h.key === "fetch" ? o(i.id) : h.key === "edit" ? T(i.id) : N(i.id);
            }
          }
        );
      }
    }
  ], [C, N, T, o, y, c]);
  return /* @__PURE__ */ t("section", { className: "space-y-3", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "文献订阅" }),
        /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "按来源和关键词定期抓取文献，字段与旧版知识追踪保持一致。" })
      ] }),
      /* @__PURE__ */ e(L, { type: "secondary", size: "small", onClick: l, children: "新建订阅" })
    ] }),
    /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(
      xe,
      {
        className: "task-table-scroll w-full [&_table]:min-w-[1080px]",
        columns: k,
        dataSource: r,
        rowKey: "id",
        striped: !1,
        loading: s
      }
    ) })
  ] });
}
const ge = 30, er = 3;
function tr(r) {
  const s = Array.from(r ?? ""), c = ge * er, l = s.length > c ? [...s.slice(0, Math.max(c - 3, 0)), ".", ".", "."] : s, o = [];
  for (let y = 0; y < l.length; y += ge)
    o.push(l.slice(y, y + ge).join(""));
  return o.join(`
`);
}
function kr({
  templates: r,
  tasks: s,
  isSidebarOpen: c,
  loading: l = !1,
  error: o,
  pendingTaskId: y,
  literatureSubscriptions: T = [],
  literatureLoading: N = !1,
  pendingLiteratureId: C,
  onOpenSidebar: f,
  onCreateCustom: k,
  onCreateFromTemplate: x,
  onToggleTask: i,
  onEditTask: n,
  onDeleteTask: h,
  onOpenTaskChat: w,
  onCreateLiterature: g,
  onFetchLiterature: b,
  onToggleLiterature: z,
  onEditLiterature: d,
  onDeleteLiterature: u,
  onRetry: a
}) {
  const [I, v] = p(null), B = A(
    () => [
      {
        title: "任务名称",
        dataIndex: "name",
        width: "20%",
        render: (P) => /* @__PURE__ */ e("span", { className: "truncate text-primaryText", children: String(P) })
      },
      {
        title: "任务内容",
        dataIndex: "prompt",
        width: "40%",
        render: (P) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: tr(String(P ?? "")) })
      },
      {
        title: "下次运行",
        dataIndex: "nextRun",
        width: "14%",
        render: (P, M) => /* @__PURE__ */ t("span", { children: [
          /* @__PURE__ */ e("span", { className: "block text-secondaryText", children: String(P) }),
          M.scheduleEnd && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-tertiaryText", children: M.scheduleEnd })
        ] })
      },
      {
        title: "触发方式",
        dataIndex: "trigger",
        width: "16%",
        render: (P) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(P) })
      },
      {
        title: "状态",
        dataIndex: "isEnabled",
        width: "7%",
        render: (P, M) => /* @__PURE__ */ e(
          Ce,
          {
            size: "small",
            checked: M.isEnabled,
            disabled: M.isToggleDisabled || y === M.id,
            onChange: () => i(M.id),
            "aria-label": M.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "3%",
        align: "right",
        render: (P, M) => {
          const R = [
            ...M.mainSessionId && w ? [{ key: "chat", label: "打开对话", icon: /* @__PURE__ */ e(lt, { size: 14 }) }] : [],
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(we, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(he, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            te,
            {
              open: I === M.id,
              onOpenChange: (O) => v(O ? M.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Te, { size: 16 }) }),
              items: R,
              onItemClick: (O) => {
                v(null), O.key === "chat" && M.mainSessionId ? w == null || w(M.mainSessionId) : O.key === "edit" ? n(M.id) : h(M.id);
              }
            }
          );
        }
      }
    ],
    [I, h, n, w, i, y]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: f, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(L, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(ie, { size: 14 }), className: "shrink-0", onClick: k, children: "新建任务" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-10", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "定时任务" }),
        /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3", children: r.map((P) => /* @__PURE__ */ t("button", { type: "button", onClick: () => x(P.id), className: "flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-[17px] font-medium text-primaryText", children: P.name }),
          /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText", children: P.description })
        ] }, P.id)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "已设置任务" }),
        o && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: o }),
          a && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: a, children: "重新加载" })
        ] }),
        /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(xe, { className: "task-table-scroll w-full [&_table]:min-w-[940px]", columns: B, dataSource: s, rowKey: "id", striped: !1, loading: l }) })
      ] }),
      g && b && z && d && u && /* @__PURE__ */ e(
        Vt,
        {
          items: T,
          loading: N,
          pendingId: C,
          onCreate: g,
          onFetch: b,
          onToggle: z,
          onEdit: d,
          onDelete: u
        }
      )
    ] }) })
  ] });
}
const { RangePicker: rr } = yt, ar = [
  { value: "hourly", label: "每小时" },
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" }
], Be = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, sr = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], lr = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([r, s]) => ({ value: r, label: s })), nr = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周", children: lr },
  { value: "monthly", label: "每月", children: Array.from({ length: 28 }, (r, s) => ({ value: String(s + 1), label: `${s + 1}号` })) }
];
function Cr({
  visible: r,
  kind: s,
  editing: c = !1,
  literatureValue: l,
  scheduleValue: o,
  projects: y = [],
  literatureProjects: T = [],
  onLiteratureChange: N,
  onScheduleChange: C,
  onCancel: f,
  onConfirm: k,
  onCreateProject: x
}) {
  const [i, n] = p(!1), h = s === "literature", w = y.find((a) => a.id === o.projectId) ?? null, g = h ? c ? "修改文献订阅任务" : "设置文献订阅任务" : c ? "修改定时任务" : "新建定时任务", b = o.repeatMode === "weekly" || o.repeatMode === "monthly" ? [o.repeatMode, o.repeatSubValue || (o.repeatMode === "weekly" ? "mon" : "1")] : [o.repeatMode], z = A(() => [
    { key: "none", label: "不选择项目", active: !w },
    ...y.map((a) => ({ key: a.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: a.name }), active: (w == null ? void 0 : w.id) === a.id }))
  ], [y, w]), d = A(() => x ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(ie, { size: 16 }) }] : [], [x]), u = (a) => {
    if (n(!1), a.key === "create") return x == null ? void 0 : x();
    C({ ...o, projectId: a.key === "none" ? null : a.key });
  };
  return /* @__PURE__ */ e(
    G,
    {
      visible: r,
      title: g,
      width: 600,
      className: "tools-task-modal",
      okText: c ? "保存修改" : h ? "创建订阅" : "创建任务",
      cancelText: "取消",
      onCancel: f,
      onConfirm: k,
      okButtonProps: { disabled: !l.topic.trim() || (h ? !l.keywords.trim() || l.sourceTypes.length === 0 || l.sourceTypes.includes("pubmed") && l.pubmedMatchMode === "advanced" && !l.advancedQuery.trim() : !o.taskPrompt.trim()) },
      children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务名称" }),
          /* @__PURE__ */ e(
            se,
            {
              value: l.topic,
              onChange: (a) => N({ ...l, topic: a.target.value }),
              placeholder: "请输入任务名称",
              size: "medium",
              containerClassName: "!px-3.5"
            }
          )
        ] }),
        h ? /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "抓取频率" }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(
                "select",
                {
                  value: l.frequency,
                  onChange: (a) => N({ ...l, frequency: a.target.value }),
                  className: "h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary",
                  children: ar.map((a) => /* @__PURE__ */ e("option", { value: a.value, children: a.label }, a.value))
                }
              ),
              /* @__PURE__ */ e(me, { size: 16, className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" })
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
                value: String(l.lookbackDays),
                onChange: (a) => N({ ...l, lookbackDays: Math.max(1, Math.min(365, Number(a.target.value) || 1)) }),
                className: "h-9 w-full rounded-lg border border-borderGray bg-white px-3.5 text-sm text-primaryText outline-none transition-colors focus:border-primary"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ t(ce, { children: [
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
              /* @__PURE__ */ e(
                rr,
                {
                  format: "YYYY/MM/DD",
                  className: "task-period-picker w-full",
                  classNames: { popup: { root: "task-period-picker-popup" } },
                  value: [o.startDate ? fe(o.startDate, "YYYY-MM-DD") : null, o.endDate ? fe(o.endDate, "YYYY-MM-DD") : null],
                  onChange: (a, [I, v]) => C({ ...o, startDate: I, endDate: v })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "触发时间" }),
              /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ e(
                  Nt,
                  {
                    value: b,
                    options: nr,
                    className: "task-repeat-cascader w-full",
                    classNames: { popup: { root: "task-repeat-cascader-popup" } },
                    placeholder: "请选择重复方式",
                    onChange: (a) => {
                      const I = String(a[0] ?? "daily"), v = a[1] ? String(a[1]) : "";
                      C({ ...o, repeatMode: I, repeatSubValue: I === "weekly" ? v || (o.repeatMode === "weekly" ? o.repeatSubValue : "mon") || "mon" : I === "monthly" ? v || (o.repeatMode === "monthly" ? o.repeatSubValue : "1") || "1" : "" });
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  vt,
                  {
                    value: fe(o.runAt, "HH:mm"),
                    format: "HH:mm",
                    minuteStep: 1,
                    allowClear: !1,
                    onChange: (a) => C({ ...o, runAt: a ? a.format("HH:mm") : o.runAt }),
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
                  onChange: (a) => C({ ...o, taskPrompt: a.target.value }),
                  placeholder: "输入任何内容，使用 '/' 选择技能或 '@' 引用资源...",
                  rows: 5,
                  className: "w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-3 z-20", children: /* @__PURE__ */ e(
                te,
                {
                  open: i,
                  onOpenChange: n,
                  placement: "top-start",
                  width: 260,
                  trigger: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight", children: [
                    /* @__PURE__ */ e(nt, { size: 14 }),
                    /* @__PURE__ */ e("span", { className: "max-w-[140px] truncate", children: (w == null ? void 0 : w.name) ?? "工作项目" }),
                    /* @__PURE__ */ e(me, { size: 14 })
                  ] }),
                  items: z,
                  onItemClick: u,
                  className: "!inline-flex",
                  listClassName: "max-h-[220px] overflow-y-auto",
                  footerItems: d
                }
              ) })
            ] })
          ] })
        ] }),
        h && /* @__PURE__ */ t(ce, { children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "订阅来源" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(Be).map((a) => {
              const I = Be[a], v = l.sourceTypes.includes(a);
              return /* @__PURE__ */ t("button", { type: "button", onClick: () => {
                const B = c ? [a] : v ? l.sourceTypes.filter((P) => P !== a) : [...l.sourceTypes, a];
                N({ ...l, sourceTypes: B });
              }, className: `flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors ${v ? "border-primary bg-primary-soft-strong" : "border-borderGray bg-white hover:border-borderSoft"}`, children: [
                /* @__PURE__ */ e("span", { className: `mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${v ? "border-primary bg-primary text-white" : "border-controlBorder text-transparent"}`, children: v && /* @__PURE__ */ e(it, { size: 11, strokeWidth: 3, "aria-hidden": "true" }) }),
                /* @__PURE__ */ t("span", { children: [
                  /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: I.label }),
                  /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: I.desc })
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
                value: l.keywords,
                onChange: (a) => N({ ...l, keywords: a.target.value }),
                placeholder: "例：CRISPR, prime editing, base editor",
                className: "w-full rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          l.sourceTypes.includes("pubmed") && /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "PubMed 匹配方式" }),
            /* @__PURE__ */ e(Ee.Group, { value: l.pubmedMatchMode, onChange: (a) => N({ ...l, pubmedMatchMode: a.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: sr.map((a) => /* @__PURE__ */ e(Ee, { value: a.value, children: a.label }, a.value)) }) })
          ] }),
          l.sourceTypes.includes("pubmed") && l.pubmedMatchMode === "advanced" && /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: [
              "PubMed 高级表达式",
              /* @__PURE__ */ e("span", { className: "text-danger", children: " *" })
            ] }),
            /* @__PURE__ */ e(
              "textarea",
              {
                value: l.advancedQuery,
                onChange: (a) => N({ ...l, advancedQuery: a.target.value }),
                placeholder: '例如：("inflammatory bowel disease"[Title/Abstract]) AND ("stromal cell"[Title/Abstract])',
                rows: 3,
                className: "w-full resize-y rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "关联项目" }),
            /* @__PURE__ */ e("div", { className: "max-h-[150px] space-y-1 overflow-y-auto rounded-lg border border-borderGray p-2", children: T.length > 0 ? T.map((a) => {
              const I = l.projectNodeIds.includes(a.id);
              return /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primaryText hover:bg-bgLight", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: I,
                    onChange: () => N({ ...l, projectNodeIds: I ? l.projectNodeIds.filter((v) => v !== a.id) : [...l.projectNodeIds, a.id] }),
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
                checked: l.enabled,
                onChange: (a) => N({ ...l, enabled: a.target.checked }),
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
function Sr({
  visible: r,
  description: s,
  confirmLoading: c = !1,
  onCancel: l,
  onConfirm: o
}) {
  return /* @__PURE__ */ e(
    G,
    {
      visible: r,
      title: "确认删除任务",
      width: 420,
      maskClosable: !1,
      cancelText: "取消",
      okText: "删除",
      confirmLoading: c,
      onCancel: l,
      onConfirm: o,
      okButtonProps: {
        className: "!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover"
      },
      children: /* @__PURE__ */ e("p", { className: "text-sm text-primaryText", children: s })
    }
  );
}
function _r({
  projects: r,
  isSidebarOpen: s,
  loading: c = !1,
  error: l,
  onOpenSidebar: o,
  onOpenProject: y,
  onCreateProject: T,
  onRetry: N
}) {
  const [C, f] = p(!1), [k, x] = p(""), [i, n] = p(""), [h, w] = p([]), [g, b] = p(""), [z, d] = p(!1), u = () => {
    x(""), n(""), w([]), b(""), f(!0);
  }, a = () => {
    z || (f(!1), b(""));
  }, I = async () => {
    const v = k.trim();
    if (!v) {
      b("请输入项目名称");
      return;
    }
    d(!0), b("");
    try {
      await T({
        name: v,
        description: i.trim(),
        documents: h
      }), f(!1);
    } catch (B) {
      b(B instanceof Error ? B.message : "项目创建失败");
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ e(L, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(ie, { size: 14 }), className: "shrink-0", onClick: u, children: "创建新项目" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      l && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: l }),
        N && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: N, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": c, children: [
        r.map((v) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => y(v.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: v.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: v.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  v.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  v.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          v.id
        )),
        !c && !l && r.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      G,
      {
        visible: C,
        title: "创建新项目",
        width: 560,
        maskClosable: !1,
        okText: z ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: a,
        onConfirm: () => {
          I();
        },
        okButtonProps: { disabled: z },
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
                value: k,
                placeholder: "请输入项目名称",
                disabled: z,
                onChange: (v) => {
                  x(v.target.value), g && b("");
                }
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目描述（选填）" }),
            /* @__PURE__ */ e(
              "textarea",
              {
                value: i,
                onChange: (v) => n(v.target.value),
                placeholder: "请输入项目描述",
                rows: 4,
                disabled: z,
                className: "w-full resize-none rounded-lg border border-borderGray bg-white px-3 py-2 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目文档（选填）" }),
            /* @__PURE__ */ e(
              ke,
              {
                value: h,
                maxCount: 5,
                maxSize: 20 * 1024 * 1024,
                disabled: z,
                onChange: w,
                onError: (v) => b(v.message)
              }
            )
          ] }),
          g && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: g })
        ] })
      }
    )
  ] });
}
const Oe = 84, ir = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, de = (r) => String(r).padStart(2, "0"), q = (r) => `${r.getFullYear()}年${de(r.getMonth() + 1)}月${de(r.getDate())}日 ${de(r.getHours())}:${de(r.getMinutes())}`;
function Re(r, s, c = /* @__PURE__ */ new Date()) {
  const l = r.trim(), o = (i, n) => {
    const h = n.match(/^(\d{1,2}):(\d{2})$/);
    return h ? (i.setHours(Number(h[1]), Number(h[2]), 0, 0), i) : null;
  };
  if (l === "刚刚") return q(c);
  const y = l.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (y) return q(o(new Date(c), y[1]) ?? c);
  const T = l.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (T) {
    const i = new Date(c);
    return i.setDate(i.getDate() - 1), q(o(i, T[1]) ?? c);
  }
  const N = l.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (N) {
    const i = new Date(c);
    let n = i.getDay() - ir[N[2]];
    return n < 0 && (n += 7), i.setDate(i.getDate() - n - (N[1] ? 7 : 0)), q(o(i, N[3]) ?? c);
  }
  const C = l.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (C) return q(new Date(Number(C[1]), Number(C[2]) - 1, Number(C[3]), Number(C[4]), Number(C[5])));
  const f = l.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (f) return q(new Date(c.getFullYear(), Number(f[1]) - 1, Number(f[2]), Number(f[3]), Number(f[4])));
  const k = s.match(/^c-(\d{13})$/);
  if (k) {
    const i = new Date(Number(k[1]));
    if (!Number.isNaN(i.getTime())) return q(i);
  }
  const x = new Date(l);
  return q(Number.isNaN(x.getTime()) ? c : x);
}
function Mr({
  project: r,
  documents: s,
  conversations: c,
  memberCount: l,
  isSidebarOpen: o,
  onOpenSidebar: y,
  onBackToProjects: T,
  onOpenMemberManagement: N,
  onOpenDocument: C,
  onOpenConversation: f,
  onCreateDocument: k,
  onCreateConversation: x,
  onImportDocuments: i,
  onUpdateProjectName: n,
  onUpdateProjectDescription: h,
  documentImportAccept: w,
  documentImportMaxSize: g,
  documentImportDescription: b,
  showMemberManagement: z = !0
}) {
  const [d, u] = p("documents"), [a, I] = p(""), [v, B] = p("all"), [P, M] = p(!1), [R, O] = p(!1), [S, D] = p(!1), [H, U] = p([]), [re, W] = p(""), [Q, oe] = p(!1), [j, X] = p((r == null ? void 0 : r.name) ?? ""), [ae, J] = p((r == null ? void 0 : r.description) ?? ""), [ue, V] = p(!1), [_, $] = p(!1), [ee, Z] = p(""), Se = pe(null);
  ne(() => {
    X((r == null ? void 0 : r.name) ?? ""), J((r == null ? void 0 : r.description) ?? ""), V(!1), $(!1), Z("");
  }, [r]);
  const _e = A(() => ["all", ...Array.from(new Set(s.flatMap((m) => m.tags)))], [s]), Me = A(() => {
    const m = a.trim().toLowerCase();
    return s.filter((E) => (v === "all" || E.tags.includes(v)) && (!m || [E.title, E.summary, ...E.tags].join(" ").toLowerCase().includes(m)));
  }, [s, a, v]), ze = A(() => {
    const m = a.trim().toLowerCase();
    return m ? c.filter((E) => [E.title, E.date, Re(E.date, E.id)].join(" ").toLowerCase().includes(m)) : c;
  }, [c, a]);
  ne(() => {
    if (d !== "documents") return;
    const m = () => {
      const E = Se.current;
      if (!E) return O(!1);
      const De = E.scrollHeight > Oe + 1;
      O(De), De || M(!1);
    };
    return m(), window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [d, _e]);
  const Ie = async () => {
    const m = j.trim() || (r == null ? void 0 : r.name) || "";
    if (X(m), V(!1), m && m !== (r == null ? void 0 : r.name)) {
      Z("");
      try {
        await n(m);
      } catch (E) {
        X((r == null ? void 0 : r.name) ?? ""), Z(E instanceof Error ? E.message : "项目名称更新失败");
      }
    }
  }, Pe = async () => {
    const m = ae.trim() || (r == null ? void 0 : r.description) || "";
    if (J(m), $(!1), m && m !== (r == null ? void 0 : r.description)) {
      Z("");
      try {
        await h(m);
      } catch (E) {
        J((r == null ? void 0 : r.description) ?? ""), Z(E instanceof Error ? E.message : "项目描述更新失败");
      }
    }
  }, We = async () => {
    if (!H.length) return W("请先选择至少一个文件");
    oe(!0), W("");
    try {
      await i(H), D(!1), U([]);
    } catch (m) {
      W(m instanceof Error ? m.message : "文档导入失败");
    } finally {
      oe(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: T, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: j || (r == null ? void 0 : r.name) || "详情" })
        ] })
      ] }),
      r && z && /* @__PURE__ */ t("button", { type: "button", onClick: N, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
        /* @__PURE__ */ e(Ae, { size: 15 }),
        /* @__PURE__ */ e("span", { children: "管理成员" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: r ? /* @__PURE__ */ t("section", { children: [
      ue ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: j,
          onChange: (m) => X(m.target.value),
          onBlur: () => {
            Ie();
          },
          onKeyDown: (m) => {
            m.key === "Enter" && (m.preventDefault(), Ie()), m.key === "Escape" && (X(r.name), V(!1));
          },
          autoFocus: !0,
          className: "w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative block w-fit max-w-full", children: [
        /* @__PURE__ */ e("h2", { className: "cursor-text text-2xl font-semibold text-primaryText", onClick: () => V(!0), children: j || r.name }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目名称" })
      ] }),
      _ ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: ae,
          onChange: (m) => J(m.target.value),
          onBlur: () => {
            Pe();
          },
          onKeyDown: (m) => {
            m.key === "Enter" && (m.preventDefault(), Pe()), m.key === "Escape" && (J(r.description), $(!1));
          },
          autoFocus: !0,
          className: "mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative mt-1 block max-w-[760px]", children: [
        /* @__PURE__ */ e("p", { className: "cursor-text text-sm text-tertiaryText", onClick: () => $(!0), children: ae || r.description }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目描述" })
      ] }),
      ee && /* @__PURE__ */ e("div", { role: "alert", className: "mt-2 text-sm text-danger", children: ee }),
      /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
        /* @__PURE__ */ e(Ae, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          l,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => u("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${d === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          s.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => u("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${d === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          c.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(ot, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: a, onChange: (m) => I(m.target.value), placeholder: `搜索${d === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(L, { type: "ghost", size: "small", rounded: "large", icon: d === "documents" ? /* @__PURE__ */ e(ie, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: d === "documents" ? k : x, children: d === "documents" ? "新建" : "发起对话" }),
          d === "documents" && /* @__PURE__ */ t(ce, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              U([]), W(""), D(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(dt, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      d === "documents" && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: Se, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: P || !R ? void 0 : `${Oe}px` }, children: _e.map((m) => /* @__PURE__ */ e("button", { type: "button", onClick: () => B(m), className: `h-7 rounded-full border px-3 text-xs transition-colors ${v === m ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: m === "all" ? "全部" : m }, m)) }),
        R && /* @__PURE__ */ e("button", { type: "button", onClick: () => M((m) => !m), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: P ? "收起" : "展开" })
      ] }) }),
      d === "documents" ? Me.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: Me.map((m) => /* @__PURE__ */ t("button", { type: "button", onClick: () => C(m.kbNodeId), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: m.title }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: m.summary }),
        m.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: m.tags.map((E) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: E }, `${m.id}-${E}`)) })
      ] }, m.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(le, { description: "暂无匹配的文档" }) }) : ze.length ? /* @__PURE__ */ e("div", { className: "mt-4 space-y-2", children: ze.map((m) => /* @__PURE__ */ t("button", { type: "button", onClick: () => f(m.id), className: "-ml-2 w-[calc(100%+0.5rem)] rounded-lg px-2 py-3 text-left transition-colors hover:bg-projectConversationHover", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: m.title }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Re(m.date, m.id) })
      ] }, m.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(le, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(le, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      G,
      {
        visible: S,
        title: "导入文档",
        width: 500,
        maskClosable: !1,
        cancelText: "取消",
        okText: Q ? "导入中…" : "导入",
        onCancel: () => {
          Q || (D(!1), U([]), W(""));
        },
        onConfirm: () => {
          We();
        },
        okButtonProps: { disabled: Q },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(ke, { value: H, accept: w, maxCount: 5, maxSize: g ?? 20 * 1024 * 1024, uploadDescription: b, disabled: Q, onChange: U, onError: (m) => W(m.message) }),
          re && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: re })
        ] })
      }
    )
  ] });
}
const or = {
  disabled: /* @__PURE__ */ e(ut, { size: 14 }),
  pending: /* @__PURE__ */ e(ht, { size: 14 }),
  indexed: /* @__PURE__ */ e(pt, { size: 14 })
};
function zr({
  projectName: r,
  document: s,
  isSidebarOpen: c,
  onOpenSidebar: l,
  onBackToProjects: o,
  onBackToProject: y,
  onEdit: T,
  onDelete: N,
  onOpenAttachment: C
}) {
  const [f, k] = p(!1), [x, i] = p(!1), [n, h] = p(!1), [w, g] = p(""), b = pe(null);
  ne(() => () => {
    b.current !== null && window.clearTimeout(b.current);
  }, []);
  const z = () => {
    k(!0), b.current !== null && window.clearTimeout(b.current), b.current = window.setTimeout(() => k(!1), 700);
  }, d = async () => {
    h(!0), g("");
    try {
      await N(), i(!1);
    } catch (u) {
      g(u instanceof Error ? u.message : "文档删除失败");
    } finally {
      h(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: l, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "shrink-0 text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "max-w-56 truncate text-tertiaryText transition-colors hover:text-primaryText", children: r }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "truncate font-medium text-primaryText", children: s.title })
        ] })
      ] }),
      s.canEdit && /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(L, { type: "secondary", size: "small", rounded: "large", onClick: () => {
          g(""), i(!0);
        }, children: "删除" }),
        /* @__PURE__ */ e(L, { type: "primary", size: "small", rounded: "large", onClick: T, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0 px-[120px]", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: s.title }),
        /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            s.updatedAt
          ] }),
          /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5", title: s.index.detail, children: [
            or[s.index.status],
            s.index.statusLabel
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: z, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${f ? "is-scrolling" : ""}`, children: [
        s.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${Qe.preview} px-[120px]`, children: /* @__PURE__ */ e(Fe, { remarkPlugins: [Ge], children: s.markdown }) }) : /* @__PURE__ */ e("div", { className: "mx-[120px] rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(le, { description: "正文暂无内容" }) }),
        /* @__PURE__ */ t("div", { className: "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
          s.attachments.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: s.attachments.map((u) => /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => C(u.id),
              className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText transition-colors hover:border-controlBorder hover:text-primaryText",
              title: `${u.statusLabel} · ${u.sizeLabel}`,
              children: [
                /* @__PURE__ */ e(ct, { size: 14, className: "shrink-0" }),
                /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: u.name }),
                /* @__PURE__ */ e("span", { className: "text-xs text-tertiaryText", children: u.sizeLabel }),
                u.status === "processing" ? /* @__PURE__ */ e(mt, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ e(xt, { size: 13 })
              ]
            },
            u.id
          )) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ t(
      G,
      {
        visible: x,
        title: "删除文档",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          n || i(!1);
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(L, { type: "secondary", size: "medium", disabled: n, onClick: () => i(!1), children: "取消" }),
          /* @__PURE__ */ e(L, { type: "danger", size: "medium", disabled: n, onClick: () => {
            d();
          }, children: n ? "删除中…" : "删除" })
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可恢复，确认删除当前文档吗？" }),
          w && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: w })
        ]
      }
    )
  ] });
}
const Ke = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], dr = [...Ke, { label: "移除", value: "移除" }];
function Ir({
  visible: r,
  members: s,
  directory: c,
  onClose: l,
  onInvite: o,
  onChangePermission: y,
  onRemove: T
}) {
  const [N, C] = p([]), [f, k] = p("浏览"), [x, i] = p(""), [n, h] = p(""), w = A(() => {
    const d = new Set(s.map((u) => u.id));
    return c.filter((u) => !d.has(u.id)).map((u) => ({
      label: `${u.name}（${u.email}）`,
      value: u.id,
      searchText: `${u.name} ${u.email}`
    }));
  }, [c, s]), g = () => {
    n || (C([]), k("浏览"), i(""), l());
  }, b = async () => {
    if (!N.length) {
      i("请先选择要邀请的成员");
      return;
    }
    h("invite"), i("");
    try {
      await o(N, f), C([]), k("浏览");
    } catch (d) {
      i(d instanceof Error ? d.message : "邀请成员失败");
    } finally {
      h("");
    }
  }, z = async (d, u) => {
    h(d), i("");
    try {
      u === "移除" ? await T(d) : await y(d, u);
    } catch (a) {
      i(a instanceof Error ? a.message : "成员操作失败");
    } finally {
      h("");
    }
  };
  return /* @__PURE__ */ e(G, { visible: r, title: "管理成员", width: 560, maskClosable: !1, footer: null, onCancel: g, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    /* @__PURE__ */ t("section", { className: "space-y-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "加入新成员" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1", children: [
          /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
            be,
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
              onChange: (d) => {
                C(d), x && i("");
              },
              disabled: !!n,
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "mx-2 h-5 w-px bg-lineSoft" }),
          /* @__PURE__ */ e(
            be,
            {
              variant: "borderless",
              value: f,
              options: Ke,
              onChange: (d) => k(d),
              disabled: !!n,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(L, { type: "primary", size: "medium", disabled: !!n, onClick: () => {
          b();
        }, children: n === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      x && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: x })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: s.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: s.map((d) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: d.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      d.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: d.roleLabel || d.permission }) : /* @__PURE__ */ e(
        be,
        {
          variant: "borderless",
          value: d.permission,
          options: dr,
          onChange: (u) => {
            z(d.id, String(u));
          },
          disabled: !!n,
          className: "member-permission-action-select w-[84px]",
          classNames: { popup: { root: "project-member-permission-dropdown" } },
          getPopupContainer: () => document.body
        }
      )
    ] }, d.id)) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText", children: "暂无成员" }) })
  ] }) });
}
const cr = (r) => r.find((s) => s.status !== "实验结束") ?? r[0] ?? null;
function Pr({
  project: r,
  experiment: s,
  isSidebarOpen: c,
  onOpenSidebar: l,
  onBackToProjects: o,
  onBackToProject: y,
  onDelete: T,
  onEdit: N
}) {
  const [C, f] = p(!1), [k, x] = p(!1), i = pe(null), n = A(
    () => s ? cr(s.timeline) : null,
    [s]
  ), h = (n == null ? void 0 : n.actor) || (s == null ? void 0 : s.ownerName) || "未知成员";
  ne(() => () => {
    i.current !== null && window.clearTimeout(i.current);
  }, []);
  const w = () => {
    f(!0), i.current !== null && window.clearTimeout(i.current), i.current = window.setTimeout(() => f(!1), 700);
  }, g = () => {
    x(!1), T();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: l, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: y, disabled: !r, className: `transition-colors ${r ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (r == null ? void 0 : r.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (s == null ? void 0 : s.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(L, { type: "secondary", size: "small", rounded: "large", onClick: () => x(!0), children: "删除" }),
        /* @__PURE__ */ e(L, { type: "primary", size: "small", rounded: "large", onClick: N, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: !r || !s ? /* @__PURE__ */ e("div", { className: "w-full rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(le, { description: "实验不存在或已被删除" }) }) : /* @__PURE__ */ t(ce, { children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: (n == null ? void 0 : n.detailTitle) ?? s.title }),
        /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between gap-4", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "创建人: ",
            h
          ] }),
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            h
          ] }),
          /* @__PURE__ */ e("span", { children: (n == null ? void 0 : n.updatedAt) ?? s.updatedAt })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: w, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${C ? "is-scrolling" : ""}`, children: [
        n != null && n.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(Fe, { remarkPlugins: [Ge], children: n.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((n == null ? void 0 : n.detailSections) ?? []).map((b) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: b.title }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: b.content })
        ] }, b.title)) }),
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
          /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: ((n == null ? void 0 : n.attachments) ?? []).map((b) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: b }, b)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(G, { visible: k, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => x(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(L, { type: "secondary", size: "medium", onClick: () => x(!1), children: "取消" }),
      /* @__PURE__ */ e(L, { type: "danger", size: "medium", onClick: g, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function He({ label: r, description: s, children: c }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: r }),
      s && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: s })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: c })
  ] });
}
function Dr({
  isSidebarOpen: r,
  avatarText: s = "研",
  avatarUrl: c,
  avatarUploading: l = !1,
  actionError: o,
  onOpenSidebar: y,
  onChangePassword: T,
  onChangeAvatar: N
}) {
  const [C, f] = p(!1), [k, x] = p(""), [i, n] = p(""), [h, w] = p(""), [g, b] = p(!1), [z, d] = p(""), [u, a] = p(""), [I, v] = p(""), B = pe(null), P = h.length > 0 && i !== h, M = i.length > 0 && i.trim().length < 6, R = !!(k.trim() && i.trim() && h.trim() && !M && !P && !g), O = () => {
    g || (f(!1), x(""), n(""), w(""), d(""), a(""), v(""));
  }, S = async () => {
    if (R) {
      b(!0), d(""), a(""), v("");
      try {
        const D = await (T == null ? void 0 : T({ currentPassword: k.trim(), newPassword: i.trim() }));
        if (D && !D.ok) {
          D.field === "currentPassword" ? a(D.message) : D.field === "newPassword" ? v(D.message) : d(D.message);
          return;
        }
        f(!1), x(""), n(""), w("");
      } catch (D) {
        d(D instanceof Error ? D.message : "密码修改失败");
      } finally {
        b(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "更多设置" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[720px] py-0", children: /* @__PURE__ */ e("div", { className: "space-y-6", children: /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("h3", { className: "mb-2 mt-4 text-base font-semibold text-primaryText", children: "账户" }),
      /* @__PURE__ */ t("div", { className: "rounded-lg bg-surface", children: [
        /* @__PURE__ */ e(He, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(L, { type: "secondary", size: "small", rounded: "large", onClick: () => f(!0), children: "修改" }) }),
        /* @__PURE__ */ e(He, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: c ? /* @__PURE__ */ e("img", { src: c, alt: "当前头像", className: "h-full w-full object-cover" }) : s }),
          /* @__PURE__ */ e(
            L,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: l,
              disabled: l,
              onClick: () => {
                var D;
                return (D = B.current) == null ? void 0 : D.click();
              },
              children: l ? "上传中" : "上传"
            }
          )
        ] }) }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: B,
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            className: "hidden",
            onChange: async (D) => {
              var U;
              const H = (U = D.target.files) == null ? void 0 : U[0];
              if (D.target.value = "", !(!H || l))
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
      G,
      {
        visible: C,
        title: "修改密码",
        onClose: O,
        onCancel: O,
        onConfirm: () => {
          S();
        },
        cancelText: "取消",
        okText: g ? "保存中…" : "保存",
        okButtonProps: { disabled: !R },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(
            se,
            {
              label: "当前密码",
              type: "password",
              value: k,
              onChange: (D) => {
                x(D.target.value), a(""), d("");
              },
              placeholder: "请输入当前密码",
              size: "medium",
              error: !!u,
              helperText: u || void 0,
              disabled: g
            }
          ),
          /* @__PURE__ */ e(
            se,
            {
              label: "新密码",
              type: "password",
              value: i,
              onChange: (D) => {
                n(D.target.value), v(""), d("");
              },
              placeholder: "请输入新密码",
              size: "medium",
              error: !!I || M,
              helperText: I || (M ? "新密码至少需要 6 位" : void 0),
              disabled: g
            }
          ),
          /* @__PURE__ */ e(
            se,
            {
              label: "确认新密码",
              type: "password",
              value: h,
              onChange: (D) => w(D.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: P,
              helperText: P ? "两次输入的新密码不一致" : void 0,
              disabled: g
            }
          ),
          z && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: z })
        ] })
      }
    )
  ] });
}
function Ar({ onOpenAiUsage: r, onOpenMembers: s, onLogout: c }) {
  return /* @__PURE__ */ t("div", { className: "mx-auto max-w-2xl p-8", children: [
    /* @__PURE__ */ e("h1", { className: "mb-8 text-3xl font-bold", children: "⚙️ 系统设置" }),
    /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: r, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "AI用量统计" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "项目成员管理" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft", children: "退出登录" })
    ] })
  ] });
}
const ye = (r) => new Intl.NumberFormat("en-US").format(Math.round(r));
function mr({ points: r, labels: s, totalAmount: c }) {
  const [f, k] = p(null), x = A(() => Math.max(...r, 1), [r]), i = A(() => r.length <= 10 ? 1 : Math.ceil(r.length / 6), [r.length]), n = A(() => r.length <= 1 ? 0 : Math.min(6, 928 / r.length / 2.5), [928, r.length]), h = A(() => r.length === 0 ? 0 : Math.max(3, (928 - (r.length - 1) * n) / r.length), [n, 928, r.length]), w = (g) => g >= 1e4 ? `${(g / 1e4).toFixed(1)}万` : ye(g);
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-primaryText", children: "月度用量" }),
      /* @__PURE__ */ t("div", { className: "mt-1 text-xs text-tertiaryText", children: [
        "Token 消耗",
        /* @__PURE__ */ e("span", { className: "ml-1 text-primaryText", children: ye(c) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative h-[190px] w-full", children: [
      /* @__PURE__ */ t("svg", { viewBox: "0 0 1000 190", preserveAspectRatio: "none", className: "h-full w-full", children: [
        [x, 0].map((g) => {
          const b = 156 - g / x * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: b.toFixed(2), y2: b.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: b + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: w(g) })
          ] }, g);
        }),
        r.map((g, b) => {
          const z = g / x * 138, d = 52 + b * (h + n), u = 156 - z, a = s[b] ?? "", I = b % i === 0 || b === r.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => k(b), onMouseLeave: () => k(null), children: [
            /* @__PURE__ */ e("rect", { x: d.toFixed(2), y: u.toFixed(2), width: h.toFixed(2), height: Math.max(1, z).toFixed(2), rx: "1.5", fill: f === b ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            I && /* @__PURE__ */ e("text", { x: (d + h / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: a })
          ] }, `${a}-${b}`);
        })
      ] }),
      f !== null && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md", style: { left: `${(52 + f * (h + n) + h / 2) / 1e3 * 100}%` }, children: [
        /* @__PURE__ */ e("div", { className: "text-tertiaryText", children: s[f] }),
        /* @__PURE__ */ t("div", { className: "mt-0.5 font-semibold text-aiUsageBar", children: [
          ye(r[f]),
          " Token"
        ] })
      ] })
    ] })
  ] });
}
function Er({
  isSidebarOpen: r,
  overviewCards: s,
  memberOptions: c,
  monthOptions: l,
  selectedMember: o,
  selectedMonth: y,
  trendPoints: T,
  trendLabels: N,
  trendTotal: C,
  rechargeRecords: f,
  onOpenSidebar: k,
  onMemberChange: x,
  onMonthChange: i
}) {
  var R, O;
  const [n, h] = p("analysis"), [w, g] = p(!1), [b, z] = p(!1), d = ((R = c.find((S) => S.value === o)) == null ? void 0 : R.label) ?? "全部成员", u = ((O = l.find((S) => S.value === y)) == null ? void 0 : O.label) ?? y, a = A(() => c.map((S) => ({ key: `member-${S.value}`, label: S.label, active: S.value === o })), [c, o]), I = A(() => l.map((S) => ({ key: `month-${S.value}`, label: S.label, active: S.value === y })), [l, y]), v = Ne((S) => {
    x(S.key.replace("member-", "")), g(!1);
  }, [x]), B = Ne((S) => {
    i(S.key.replace("month-", "")), z(!1);
  }, [i]), P = A(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (S) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(S) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (S) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(S) }) }
  ], []), M = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: k, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: s.map((S) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: S.title }),
          S.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(bt, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: S.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: S.value }),
          S.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: S.warningLabel })
        ] }),
        S.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: S.helper })
      ] }) }, S.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => h("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => h("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        n === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(te, { open: w, onOpenChange: g, items: a, onItemClick: v, placement: "bottom-start", width: 172, portal: !0, menuClassName: M, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: d }),
            /* @__PURE__ */ e(me, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${w ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(te, { open: b, onOpenChange: z, items: I, onItemClick: B, placement: "bottom-start", width: 172, portal: !0, menuClassName: M, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: u }),
            /* @__PURE__ */ e(me, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${b ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        n === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(mr, { points: T, labels: N, totalAmount: C }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(xe, { className: "task-table-scroll min-w-[760px]", columns: P, dataSource: f, rowKey: "id" }) }) })
      ] })
    ] }) })
  ] });
}
function $r({ isSidebarOpen: r, result: s, onOpenSidebar: c, onBack: l, onRun: o, onReset: y }) {
  const T = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: l, className: `rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${r ? "-ml-2" : ""}`, "aria-label": "返回任务列表", children: /* @__PURE__ */ e(ft, { size: 20 }) }),
      /* @__PURE__ */ e("h1", { className: "text-3xl font-normal text-primaryText", children: "序列比对助手" })
    ] }),
    /* @__PURE__ */ e("p", { className: "mb-10 ml-10 text-base text-secondaryText", children: "快速进行 DNA/RNA 序列比对与同源性分析" }),
    /* @__PURE__ */ t("div", { className: "space-y-6 rounded-2xl border border-borderGray p-8", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 1" }),
        /* @__PURE__ */ e("textarea", { className: T, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 2" }),
        /* @__PURE__ */ e("textarea", { className: T, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex gap-4 pt-2", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: o, className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95", children: [
          /* @__PURE__ */ e(gt, { size: 16, className: "fill-current" }),
          "运行比对"
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: y, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e(he, { size: 16 }),
          "重置"
        ] })
      ] }),
      s && /* @__PURE__ */ t("div", { className: "mt-8 border-t border-borderGray pt-8", children: [
        /* @__PURE__ */ e("h3", { className: "mb-4 font-medium text-primaryText", children: "运行结果" }),
        /* @__PURE__ */ t("div", { className: "my-4 overflow-hidden rounded-lg border border-borderGray bg-toolCodeSurface", children: [
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-bgLight px-4 py-2 text-xs font-medium text-secondaryText", children: "结果" }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto whitespace-pre-line p-4 font-mono text-sm text-primaryText", children: s })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Er as AiUsagePage,
  Or as AppShell,
  Rr as AssistantActions,
  te as BaseActionMenu,
  L as BaseButton,
  Hr as BaseCard,
  ke as BaseDocumentUpload,
  le as BaseEmpty,
  se as BaseInput,
  G as BaseModal,
  qe as BasePagination,
  Fr as BaseSegmented,
  Gr as BaseSelect,
  xe as BaseTable,
  Ce as BaseToggle,
  Ye as BaseUpload,
  Ur as CHAT_FILE_OPTIONS,
  Kr as CHAT_INPUT_GUIDE_TEXT,
  Wr as CHAT_QUICK_PROMPTS,
  Yr as CHAT_RECENT_FILE_OPTIONS,
  qr as CHAT_SKILL_OPTIONS,
  Qr as ChatComposerDock,
  Xr as ChatConversationViewport,
  Jr as ChatHomePage,
  Zr as ChatPreviewPanel,
  jr as ChatProjectFilesPanel,
  Vr as ChatShareControls,
  ea as ChatTimelineNavigation,
  ta as ChatWorkspaceFrame,
  ra as ChatWorkspaceHeader,
  aa as ChatWorkspaceHeaderAction,
  sa as ChatWorkspaceSidePanel,
  Pr as ExperimentDetailPage,
  la as ForgotPasswordPage,
  na as InputArea,
  Vt as LiteratureSubscriptionsTable,
  ia as LoginPage,
  Tr as MemberManagementPage,
  oa as MessageItem,
  da as MessageList,
  vr as NavigationProvider,
  Mr as ProjectDetailPage,
  ca as ProjectDocumentEditor,
  zr as ProjectDocumentPreview,
  Ir as ProjectMemberManagementModal,
  _r as ProjectsPage,
  ma as QuickPrompts,
  xa as RegisterPage,
  Sr as ScheduledTaskDeleteModal,
  Cr as ScheduledTaskEditorModal,
  kr as ScheduledTasksOverview,
  Ar as SettingsPage,
  pa as SkillPage,
  Dr as SystemSettingsDetailPage,
  ha as ThinkingIndicator,
  $r as ToolPage,
  tr as buildTaskPromptPreview,
  Re as formatProjectConversationDate,
  ua as insertFileReference,
  ba as insertSkillCommand,
  fa as resolveAtQuery,
  ga as resolveSlashQuery,
  wr as useNavigation
};
