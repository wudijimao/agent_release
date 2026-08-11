import { B as ft, a as V, b as A, c as ve, d as gt, e as F, f as ce, g as fe, P as yt } from "./SkillPage-D4iMvss8.js";
import { A as la, h as na, i as ia, j as oa, k as da, C as ca, l as ma, m as xa, n as ha, o as pa, p as ua, q as ba, r as fa, s as ga, t as ya, u as Na, v as va, w as wa, x as Ta, y as ka, z as Ca, D as Sa, F as Ma, I as _a, L as Ia, M as za, E as Pa, G as Da, H as Ea, J as Aa, K as Ba, Q as $a, R as Oa, S as La, T as Ha, N as Ra, O as Fa, U as Ga, V as Ua } from "./SkillPage-D4iMvss8.js";
import { jsxs as t, jsx as e, Fragment as ge } from "react/jsx-runtime";
import Nt, { useState as x, useMemo as D, useCallback as Ae, useContext as vt, createContext as wt, useEffect as ae, useRef as ye } from "react";
import { Inbox as Tt, Paperclip as kt, X as Ct, Pencil as we, Trash2 as se, HelpCircle as St, MoreHorizontal as Te, Menu as W, Plus as me, AlertCircle as Mt, ShieldCheck as _t, RefreshCw as It, MessageCircle as zt, Folder as Pt, ChevronDown as Ne, Check as Be, Users as Ve, Search as Dt, Upload as Et, FileText as At, CircleHelp as Bt, ArrowLeft as $t, Play as Ot } from "lucide-react";
import $e from "classnames";
import Lt from "react-markdown";
import Ht from "remark-gfm";
import { DatePicker as Rt, Cascader as Ft, TimePicker as Gt, Radio as et, Select as Ie } from "antd";
import ze from "dayjs";
const Ut = "_wrapper_g5uno_1", Kt = "_uploadContent_g5uno_7", Wt = "_uploadIcon_g5uno_17", Yt = "_uploadTitle_g5uno_18", qt = "_uploadDescription_g5uno_19", Qt = "_fileList_g5uno_20", Xt = "_fileItem_g5uno_21", Jt = "_fileItemIcon_g5uno_22", Zt = "_fileName_g5uno_23", jt = "_fileSize_g5uno_24", Vt = "_removeButton_g5uno_25", K = {
  wrapper: Ut,
  uploadContent: Kt,
  uploadIcon: Wt,
  uploadTitle: Yt,
  uploadDescription: qt,
  fileList: Qt,
  fileItem: Xt,
  fileItemIcon: Jt,
  fileName: Zt,
  fileSize: jt,
  removeButton: Vt
}, er = ".pdf,.doc,.docx,.txt,.md,.csv", tr = 20 * 1024 * 1024, tt = 5, rt = (r, n) => r.name === n.name && r.size === n.size && r.lastModified === n.lastModified && r.type === n.type, rr = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`, nt = Nt.forwardRef(
  ({
    value: r,
    defaultValue: n = [],
    onChange: o,
    onError: s,
    accept: d = er,
    maxSize: v = tr,
    maxCount: k = tt,
    disabled: N = !1,
    className: M,
    uploadTitle: g = "点击或拖拽文件到此上传",
    uploadDescription: p = `支持单文件或批量上传，单次最多 ${tt} 个，单个文件不超过 20MB`,
    uploadIcon: m
  }, c) => {
    const [l, b] = x(n), y = r !== void 0, w = D(() => (y ? r : l) ?? [], [l, y, r]), C = (u) => {
      y || b(u), o == null || o(u);
    }, P = (u) => {
      const h = [...w];
      if (Array.from(u).forEach((a) => {
        h.some((S) => rt(S, a)) || h.push(a);
      }), h.length > k) {
        s == null || s(new Error(`最多上传 ${k} 个文件，请删除后再继续添加`));
        return;
      }
      C(h);
    };
    return /* @__PURE__ */ t("div", { className: $e(K.wrapper, M), children: [
      /* @__PURE__ */ e(ft, { ref: c, accept: d, multiple: !0, disabled: N, maxSize: v, maxCount: k, onChange: P, onError: s, children: /* @__PURE__ */ t("div", { className: K.uploadContent, children: [
        m ?? /* @__PURE__ */ e(Tt, { size: 30, strokeWidth: 2.2, className: K.uploadIcon }),
        /* @__PURE__ */ e("div", { className: K.uploadTitle, children: g }),
        /* @__PURE__ */ e("div", { className: K.uploadDescription, children: p })
      ] }) }),
      w.length > 0 && /* @__PURE__ */ e("div", { className: K.fileList, children: w.map((u, h) => /* @__PURE__ */ t("div", { className: K.fileItem, children: [
        /* @__PURE__ */ e(kt, { size: 14, className: K.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: K.fileName, children: u.name }),
        /* @__PURE__ */ e("span", { className: K.fileSize, children: rr(u.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => C(w.filter((a) => !rt(a, u))), className: K.removeButton, "aria-label": `移除文件 ${u.name}`, disabled: N, children: /* @__PURE__ */ e(Ct, { size: 14 }) })
      ] }, `${u.name}-${u.lastModified}-${h}`)) })
    ] });
  }
);
nt.displayName = "BaseDocumentUpload";
const ar = "_toggle_198gd_1", sr = "_toggleSmall_198gd_18", lr = "_toggleRegular_198gd_23", nr = "_toggleMedium_198gd_28", ir = "_toggleOff_198gd_33", or = "_toggleOn_198gd_37", dr = "_toggleDisabled_198gd_41", cr = "_thumb_198gd_46", mr = "_thumbSmall_198gd_54", xr = "_thumbRegular_198gd_59", hr = "_thumbMedium_198gd_64", pr = "_thumbOffSmall_198gd_69", ur = "_thumbOffRegular_198gd_70", br = "_thumbOffMedium_198gd_71", fr = "_thumbOnSmall_198gd_75", gr = "_thumbOnRegular_198gd_79", yr = "_thumbOnMedium_198gd_83", X = {
  toggle: ar,
  toggleSmall: sr,
  toggleRegular: lr,
  toggleMedium: nr,
  toggleOff: ir,
  toggleOn: or,
  toggleDisabled: dr,
  thumb: cr,
  thumbSmall: mr,
  thumbRegular: xr,
  thumbMedium: hr,
  thumbOffSmall: pr,
  thumbOffRegular: ur,
  thumbOffMedium: br,
  thumbOnSmall: fr,
  thumbOnRegular: gr,
  thumbOnMedium: yr
}, Oe = ({
  checked: r,
  defaultChecked: n = !1,
  size: o = "medium",
  disabled: s = !1,
  onChange: d,
  className: v,
  ...k
}) => {
  const [N, M] = x(n), g = r !== void 0, p = g ? r : N, m = `${o.charAt(0).toUpperCase()}${o.slice(1)}`, c = Ae(() => {
    if (s) return;
    const y = !p;
    g || M(y), d == null || d(y);
  }, [s, p, g, d]), l = D(
    () => $e(
      X.toggle,
      X[`toggle${m}`],
      p ? X.toggleOn : X.toggleOff,
      s && X.toggleDisabled,
      v
    ),
    [v, s, p, m]
  ), b = D(
    () => $e(
      X.thumb,
      X[`thumb${m}`],
      X[`thumb${p ? "On" : "Off"}${m}`]
    ),
    [p, m]
  );
  return /* @__PURE__ */ e(
    "button",
    {
      ...k,
      type: "button",
      role: "switch",
      "aria-checked": p,
      className: l,
      onClick: c,
      disabled: s,
      children: /* @__PURE__ */ e("span", { className: b })
    }
  );
};
Oe.displayName = "BaseToggle";
const it = wt(null);
function Fr({
  adapter: r,
  children: n
}) {
  return /* @__PURE__ */ e(it.Provider, { value: r, children: n });
}
function Gr() {
  const r = vt(it);
  if (!r)
    throw new Error("useNavigation must be used within NavigationProvider");
  return r;
}
function Ur({
  labName: r,
  members: n,
  inviteCode: o,
  isSidebarOpen: s,
  loading: d = !1,
  error: v,
  actionError: k,
  canManage: N = !1,
  onOpenSidebar: M,
  onRetry: g,
  onRegenerateInvite: p,
  onUpdateRole: m,
  onRemoveMember: c
}) {
  const [l, b] = x(!1), [y, w] = x(!1), [C, P] = x(!1), [u, h] = x(!1), [a, S] = x(null), [z, B] = x("成员"), [$, E] = x(null), [L, R] = x(null), [f, T] = x(1), [H, G] = x(10), ee = n.filter((_) => _.role === "管理员").length, le = D(() => {
    const _ = (f - 1) * H;
    return n.slice(_, _ + H);
  }, [f, n, H]), Z = D(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(we, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(se, { size: 14 }), danger: !0 }
    ],
    []
  );
  ae(() => {
    const _ = Math.max(1, Math.ceil(n.length / H));
    f > _ && T(_);
  }, [f, n.length, H]);
  const xe = (_) => {
    S(_), B(_.role), P(!0);
  }, Y = (_) => {
    S(_), h(!0);
  }, te = async () => {
    if (o) {
      try {
        await navigator.clipboard.writeText(o);
      } catch {
        const _ = document.createElement("textarea");
        _.value = o, _.style.position = "fixed", _.style.opacity = "0", document.body.appendChild(_), _.focus(), _.select(), document.execCommand("copy"), document.body.removeChild(_);
      }
      w(!0), window.setTimeout(() => w(!1), 1500);
    }
  }, he = async () => {
    E("invite");
    try {
      await p(), w(!1);
    } finally {
      E(null);
    }
  }, re = async () => {
    if (a) {
      E("edit");
      try {
        await m(a.id, z), P(!1);
      } finally {
        E(null);
      }
    }
  }, j = async () => {
    if (a) {
      E("remove");
      try {
        await c(a.id), h(!1);
      } finally {
        E(null);
      }
    }
  }, ne = D(
    () => [
      {
        title: "姓名",
        dataIndex: "name",
        width: "25%",
        render: (_, O) => /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center pr-2", children: [
          /* @__PURE__ */ e("div", { className: "mr-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lineSubtle bg-bgLight text-[11px] font-medium text-secondaryText", children: O.avatarUrl ? /* @__PURE__ */ e("img", { className: "h-full w-full object-cover", src: O.avatarUrl, alt: "" }) : O.name.slice(0, 2) }),
          /* @__PURE__ */ t("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "truncate font-medium text-primaryText", children: O.name }),
            /* @__PURE__ */ e("p", { className: "mt-0.5 truncate text-[13px] text-secondaryText", children: O.email })
          ] })
        ] })
      },
      {
        title: /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
          "团队角色",
          /* @__PURE__ */ e("span", { className: "text-mutedText", title: "管理员可管理成员和实验室设置；成员可使用工作区。", children: /* @__PURE__ */ e(St, { size: 14 }) })
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
        render: (_, O) => O.canManage ? /* @__PURE__ */ e(
          V,
          {
            open: L === O.id,
            onOpenChange: (q) => R(q ? O.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Te, { size: 16 }) }),
            items: Z,
            onItemClick: (q, ke) => {
              ke.stopPropagation(), R(null), q.key === "edit" ? xe(O) : Y(O);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [L, Z]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: M, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "成员管理" })
        ] })
      ] }),
      N && /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(me, { size: 14 }), className: "shrink-0", onClick: () => b(!0), children: "邀请新成员" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-primaryText md:text-2xl", children: r || "实验室成员" }),
        /* @__PURE__ */ t("span", { className: "shrink-0 rounded-full bg-surfaceMuted px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
          "共",
          n.length,
          "人"
        ] })
      ] }),
      v && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: v }),
        g && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: g, children: "重新加载" })
      ] }),
      !v && ee < 2 && !d && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
        /* @__PURE__ */ e(Mt, { size: 16, className: "shrink-0" }),
        /* @__PURE__ */ t("span", { children: [
          "当前管理员",
          ee,
          "名，建议至少保留2名管理员，避免团队配置和成员管理只有单点负责人"
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          ve,
          {
            className: "task-table-scroll w-full [&_table]:min-w-[860px] [&_thead_th]:py-2 [&_thead_th]:text-[13px] [&_tbody_td]:py-2.5 [&_tbody_td]:text-[13px]",
            columns: ne,
            dataSource: le,
            rowKey: "id",
            striped: !1,
            loading: d
          }
        ),
        /* @__PURE__ */ e(
          gt,
          {
            current: f,
            total: n.length,
            pageSize: H,
            onChange: T,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (_, O) => {
              G(O), T(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(_t, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: l, title: "邀请新成员", width: 360, onCancel: () => b(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (o || "------").split("").map((_, O) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: _ }, `${_}-${O}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      k && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: k }),
      /* @__PURE__ */ e(A, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: te, disabled: !o, children: y ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: he, disabled: $ === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: $ === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(F, { visible: C && !!a, title: "编辑成员信息", width: 560, maskClosable: !1, cancelText: "取消", okText: "保存修改", confirmLoading: $ === "edit", onCancel: () => P(!1), onConfirm: re, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((_) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: _, checked: z === _, onChange: () => B(_), className: "h-4 w-4 accent-primary" }),
          _
        ] }, _)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-secondaryText", children: (a == null ? void 0 : a.projectsLabel) || "未参与项目" })
      ] }),
      k && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: k })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: u && !!a, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: $ === "remove", onCancel: () => h(!1), onConfirm: j, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
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
function Nr({
  items: r,
  loading: n = !1,
  pendingId: o,
  onFetch: s,
  onToggle: d,
  onEdit: v,
  onDelete: k
}) {
  const [N, M] = x(null), g = D(() => [
    {
      title: "订阅名称",
      dataIndex: "name",
      width: "19%",
      render: (p, m) => /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate font-medium text-primaryText", children: String(p) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: m.source })
      ] })
    },
    {
      title: "关键词",
      dataIndex: "keywords",
      width: "22%",
      render: (p) => /* @__PURE__ */ e("span", { className: "line-clamp-2 break-all text-secondaryText", children: String(p) || "未设置" })
    },
    {
      title: "抓取设置",
      dataIndex: "schedule",
      width: "14%",
      render: (p) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(p) })
    },
    {
      title: "内容统计",
      dataIndex: "itemStats",
      width: "16%",
      render: (p, m) => /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "text-secondaryText", children: String(p) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: m.projectStats })
      ] })
    },
    {
      title: "最近抓取",
      dataIndex: "lastFetch",
      width: "14%",
      render: (p) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(p) })
    },
    {
      title: "状态",
      dataIndex: "isEnabled",
      width: "7%",
      render: (p, m) => /* @__PURE__ */ e(
        Oe,
        {
          size: "small",
          checked: m.isEnabled,
          disabled: o === m.id,
          onChange: () => d(m.id),
          "aria-label": m.isEnabled ? "停用文献订阅" : "启用文献订阅"
        }
      )
    },
    {
      title: "操作",
      dataIndex: "id",
      width: "8%",
      align: "right",
      render: (p, m) => {
        const c = [
          { key: "fetch", label: "立即抓取", icon: /* @__PURE__ */ e(It, { size: 14 }) },
          { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(we, { size: 14 }) },
          { key: "delete", label: "删除", icon: /* @__PURE__ */ e(se, { size: 14 }), danger: !0 }
        ];
        return /* @__PURE__ */ e(
          V,
          {
            open: N === m.id,
            onOpenChange: (l) => M(l ? m.id : null),
            placement: "bottom-end",
            width: 140,
            portal: !0,
            menuClassName: "!min-w-[140px]",
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Te, { size: 16 }) }),
            items: c,
            onItemClick: (l) => {
              M(null), l.key === "fetch" ? s(m.id) : l.key === "edit" ? v(m.id) : k(m.id);
            }
          }
        );
      }
    }
  ], [N, k, v, s, d, o]);
  return /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(
    ve,
    {
      className: "task-table-scroll w-full [&_table]:min-w-[1080px]",
      columns: g,
      dataSource: r,
      rowKey: "id",
      striped: !1,
      loading: n
    }
  ) }) });
}
const Pe = 30, vr = 3;
function wr(r) {
  const n = Array.from(r ?? ""), o = Pe * vr, s = n.length > o ? [...n.slice(0, Math.max(o - 3, 0)), ".", ".", "."] : n, d = [];
  for (let v = 0; v < s.length; v += Pe)
    d.push(s.slice(v, v + Pe).join(""));
  return d.join(`
`);
}
function Kr({
  templates: r,
  tasks: n,
  isSidebarOpen: o,
  loading: s = !1,
  error: d,
  pendingTaskId: v,
  literatureSubscriptions: k = [],
  literatureLoading: N = !1,
  pendingLiteratureId: M,
  onOpenSidebar: g,
  onCreateCustom: p,
  onCreateFromTemplate: m,
  onToggleTask: c,
  onEditTask: l,
  onDeleteTask: b,
  onOpenTaskChat: y,
  onCreateLiterature: w,
  onFetchLiterature: C,
  onToggleLiterature: P,
  onEditLiterature: u,
  onDeleteLiterature: h,
  onRetry: a
}) {
  const [S, z] = x(null), [B, $] = x("scheduled"), E = !!(w && C && P && u && h), L = E ? B : "scheduled", R = D(
    () => [
      {
        title: "任务名称",
        dataIndex: "name",
        width: "20%",
        render: (f) => /* @__PURE__ */ e("span", { className: "truncate text-primaryText", children: String(f) })
      },
      {
        title: "任务内容",
        dataIndex: "prompt",
        width: "40%",
        render: (f) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: wr(String(f ?? "")) })
      },
      {
        title: "下次运行",
        dataIndex: "nextRun",
        width: "14%",
        render: (f, T) => /* @__PURE__ */ t("span", { children: [
          /* @__PURE__ */ e("span", { className: "block text-secondaryText", children: String(f) }),
          T.scheduleEnd && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-tertiaryText", children: T.scheduleEnd })
        ] })
      },
      {
        title: "触发方式",
        dataIndex: "trigger",
        width: "16%",
        render: (f) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(f) })
      },
      {
        title: "状态",
        dataIndex: "isEnabled",
        width: "7%",
        render: (f, T) => /* @__PURE__ */ e(
          Oe,
          {
            size: "small",
            checked: T.isEnabled,
            disabled: T.isToggleDisabled || v === T.id,
            onChange: () => c(T.id),
            "aria-label": T.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "3%",
        align: "right",
        render: (f, T) => {
          const H = [
            ...T.mainSessionId && y ? [{ key: "chat", label: "打开对话", icon: /* @__PURE__ */ e(zt, { size: 14 }) }] : [],
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(we, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(se, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            V,
            {
              open: S === T.id,
              onOpenChange: (G) => z(G ? T.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Te, { size: 16 }) }),
              items: H,
              onItemClick: (G) => {
                z(null), G.key === "chat" && T.mainSessionId ? y == null || y(T.mainSessionId) : G.key === "edit" ? l(T.id) : b(T.id);
              }
            }
          );
        }
      }
    ],
    [S, b, l, y, c, v]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: g, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(
        A,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          icon: /* @__PURE__ */ e(me, { size: 14 }),
          className: "shrink-0",
          onClick: p,
          children: "新建任务"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "定时任务" }),
        /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3", children: r.map((f) => /* @__PURE__ */ t("button", { type: "button", onClick: () => m(f.id), className: "flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-[17px] font-medium text-primaryText", children: f.name }),
          /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText", children: f.description })
        ] }, f.id)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-10", children: [
        E && /* @__PURE__ */ t("div", { className: "mb-5 flex items-center gap-6 border-b border-lineSubtle", role: "tablist", "aria-label": "任务列表类型", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": L === "scheduled",
              onClick: () => $("scheduled"),
              className: `border-b-2 pb-3 text-sm font-medium transition-colors ${L === "scheduled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText hover:text-secondaryText"}`,
              children: "定时任务"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": L === "literature",
              onClick: () => $("literature"),
              className: `border-b-2 pb-3 text-sm font-medium transition-colors ${L === "literature" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText hover:text-secondaryText"}`,
              children: "文献订阅"
            }
          )
        ] }),
        L === "scheduled" ? /* @__PURE__ */ t("div", { className: "space-y-3", role: "tabpanel", children: [
          !E && /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "已设置任务" }),
          d && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
            /* @__PURE__ */ e("span", { children: d }),
            a && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: a, children: "重新加载" })
          ] }),
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(ve, { className: "task-table-scroll w-full [&_table]:min-w-[940px]", columns: R, dataSource: n, rowKey: "id", striped: !1, loading: s }) })
        ] }) : w && C && P && u && h && /* @__PURE__ */ e("div", { role: "tabpanel", children: /* @__PURE__ */ e(
          Nr,
          {
            items: k,
            loading: N,
            pendingId: M,
            onFetch: C,
            onToggle: P,
            onEdit: u,
            onDelete: h
          }
        ) })
      ] })
    ] }) })
  ] });
}
const { RangePicker: Tr } = Rt, kr = [
  { value: "hourly", label: "每小时" },
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" }
], at = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, Cr = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], Sr = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([r, n]) => ({ value: r, label: n })), Mr = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周", children: Sr },
  { value: "monthly", label: "每月", children: Array.from({ length: 28 }, (r, n) => ({ value: String(n + 1), label: `${n + 1}号` })) }
];
function Wr({
  visible: r,
  kind: n,
  editing: o = !1,
  literatureValue: s,
  scheduleValue: d,
  projects: v = [],
  literatureProjects: k = [],
  onLiteratureChange: N,
  onScheduleChange: M,
  onCancel: g,
  onConfirm: p,
  onCreateProject: m
}) {
  const [c, l] = x(!1), b = n === "literature", y = v.find((a) => a.id === d.projectId) ?? null, w = b ? o ? "修改文献订阅任务" : "设置文献订阅任务" : o ? "修改定时任务" : "新建定时任务", C = d.repeatMode === "weekly" || d.repeatMode === "monthly" ? [d.repeatMode, d.repeatSubValue || (d.repeatMode === "weekly" ? "mon" : "1")] : [d.repeatMode], P = D(() => [
    { key: "none", label: "不选择项目", active: !y },
    ...v.map((a) => ({ key: a.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: a.name }), active: (y == null ? void 0 : y.id) === a.id }))
  ], [v, y]), u = D(() => m ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(me, { size: 16 }) }] : [], [m]), h = (a) => {
    if (l(!1), a.key === "create") return m == null ? void 0 : m();
    M({ ...d, projectId: a.key === "none" ? null : a.key });
  };
  return /* @__PURE__ */ e(
    F,
    {
      visible: r,
      title: w,
      width: 600,
      className: "tools-task-modal",
      okText: o ? "保存修改" : b ? "创建订阅" : "创建任务",
      cancelText: "取消",
      onCancel: g,
      onConfirm: p,
      okButtonProps: { disabled: !s.topic.trim() || (b ? !s.keywords.trim() || s.sourceTypes.length === 0 || s.sourceTypes.includes("pubmed") && s.pubmedMatchMode === "advanced" && !s.advancedQuery.trim() : !d.taskPrompt.trim()) },
      children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务名称" }),
          /* @__PURE__ */ e(
            ce,
            {
              value: s.topic,
              onChange: (a) => N({ ...s, topic: a.target.value }),
              placeholder: "请输入任务名称",
              size: "medium",
              containerClassName: "!px-3.5"
            }
          )
        ] }),
        b ? /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "抓取频率" }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(
                "select",
                {
                  value: s.frequency,
                  onChange: (a) => N({ ...s, frequency: a.target.value }),
                  className: "h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary",
                  children: kr.map((a) => /* @__PURE__ */ e("option", { value: a.value, children: a.label }, a.value))
                }
              ),
              /* @__PURE__ */ e(Ne, { size: 16, className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" })
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
        ] }) : /* @__PURE__ */ t(ge, { children: [
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
              /* @__PURE__ */ e(
                Tr,
                {
                  format: "YYYY/MM/DD",
                  className: "task-period-picker w-full",
                  classNames: { popup: { root: "task-period-picker-popup" } },
                  value: [d.startDate ? ze(d.startDate, "YYYY-MM-DD") : null, d.endDate ? ze(d.endDate, "YYYY-MM-DD") : null],
                  onChange: (a, [S, z]) => M({ ...d, startDate: S, endDate: z })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "触发时间" }),
              /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ e(
                  Ft,
                  {
                    value: C,
                    options: Mr,
                    className: "task-repeat-cascader w-full",
                    classNames: { popup: { root: "task-repeat-cascader-popup" } },
                    placeholder: "请选择重复方式",
                    onChange: (a) => {
                      const S = String(a[0] ?? "daily"), z = a[1] ? String(a[1]) : "";
                      M({ ...d, repeatMode: S, repeatSubValue: S === "weekly" ? z || (d.repeatMode === "weekly" ? d.repeatSubValue : "mon") || "mon" : S === "monthly" ? z || (d.repeatMode === "monthly" ? d.repeatSubValue : "1") || "1" : "" });
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  Gt,
                  {
                    value: ze(d.runAt, "HH:mm"),
                    format: "HH:mm",
                    minuteStep: 1,
                    allowClear: !1,
                    onChange: (a) => M({ ...d, runAt: a ? a.format("HH:mm") : d.runAt }),
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
                  value: d.taskPrompt,
                  onChange: (a) => M({ ...d, taskPrompt: a.target.value }),
                  placeholder: "输入任何内容，使用 '/' 选择技能或 '@' 引用资源...",
                  rows: 5,
                  className: "w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-3 z-20", children: /* @__PURE__ */ e(
                V,
                {
                  open: c,
                  onOpenChange: l,
                  placement: "top-start",
                  width: 260,
                  trigger: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight", children: [
                    /* @__PURE__ */ e(Pt, { size: 14 }),
                    /* @__PURE__ */ e("span", { className: "max-w-[140px] truncate", children: (y == null ? void 0 : y.name) ?? "工作项目" }),
                    /* @__PURE__ */ e(Ne, { size: 14 })
                  ] }),
                  items: P,
                  onItemClick: h,
                  className: "!inline-flex",
                  listClassName: "max-h-[220px] overflow-y-auto",
                  footerItems: u
                }
              ) })
            ] })
          ] })
        ] }),
        b && /* @__PURE__ */ t(ge, { children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "订阅来源" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(at).map((a) => {
              const S = at[a], z = s.sourceTypes.includes(a);
              return /* @__PURE__ */ t("button", { type: "button", onClick: () => {
                const B = o ? [a] : z ? s.sourceTypes.filter(($) => $ !== a) : [...s.sourceTypes, a];
                N({ ...s, sourceTypes: B });
              }, className: `flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors ${z ? "border-primary bg-primary-soft-strong" : "border-borderGray bg-white hover:border-borderSoft"}`, children: [
                /* @__PURE__ */ e("span", { className: `mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${z ? "border-primary bg-primary text-white" : "border-controlBorder text-transparent"}`, children: z && /* @__PURE__ */ e(Be, { size: 11, strokeWidth: 3, "aria-hidden": "true" }) }),
                /* @__PURE__ */ t("span", { children: [
                  /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: S.label }),
                  /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: S.desc })
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
            /* @__PURE__ */ e(et.Group, { value: s.pubmedMatchMode, onChange: (a) => N({ ...s, pubmedMatchMode: a.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: Cr.map((a) => /* @__PURE__ */ e(et, { value: a.value, children: a.label }, a.value)) }) })
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
              const S = s.projectNodeIds.includes(a.id);
              return /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primaryText hover:bg-bgLight", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: S,
                    onChange: () => N({ ...s, projectNodeIds: S ? s.projectNodeIds.filter((z) => z !== a.id) : [...s.projectNodeIds, a.id] }),
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
function Yr({
  visible: r,
  description: n,
  confirmLoading: o = !1,
  onCancel: s,
  onConfirm: d
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
      confirmLoading: o,
      onCancel: s,
      onConfirm: d,
      okButtonProps: {
        className: "!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover"
      },
      children: /* @__PURE__ */ e("p", { className: "text-sm text-primaryText", children: n })
    }
  );
}
function qr({
  projects: r,
  isSidebarOpen: n,
  loading: o = !1,
  error: s,
  onOpenSidebar: d,
  onOpenProject: v,
  onCreateProject: k,
  onRetry: N
}) {
  const [M, g] = x(!1), [p, m] = x(""), [c, l] = x(""), [b, y] = x(""), [w, C] = x(!1), P = () => {
    m(""), l(""), y(""), g(!0);
  }, u = () => {
    w || (g(!1), y(""));
  }, h = async () => {
    const a = p.trim();
    if (!a) {
      y("请输入项目名称");
      return;
    }
    C(!0), y("");
    try {
      await k({
        name: a,
        description: c.trim()
      }), g(!1);
    } catch (S) {
      y(S instanceof Error ? S.message : "项目创建失败");
    } finally {
      C(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !n && /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(me, { size: 14 }), className: "shrink-0", onClick: P, children: "创建新项目" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      s && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: s }),
        N && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: N, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": o, children: [
        r.map((a) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => v(a.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: a.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: a.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  a.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  a.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          a.id
        )),
        !o && !s && r.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: M,
        title: "创建新项目",
        width: 560,
        maskClosable: !1,
        okText: w ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: u,
        onConfirm: () => {
          h();
        },
        okButtonProps: { disabled: w },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "text-sm font-medium text-primaryText", children: [
              "项目名称 ",
              /* @__PURE__ */ e("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ e(
              ce,
              {
                value: p,
                placeholder: "请输入项目名称",
                disabled: w,
                onChange: (a) => {
                  m(a.target.value), b && y("");
                }
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目描述（选填）" }),
            /* @__PURE__ */ e(
              "textarea",
              {
                value: c,
                onChange: (a) => l(a.target.value),
                placeholder: "请输入项目描述",
                rows: 4,
                disabled: w,
                className: "w-full resize-none rounded-lg border border-borderGray bg-white px-3 py-2 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              }
            )
          ] }),
          b && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: b })
        ] })
      }
    )
  ] });
}
const st = 84, _r = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, be = (r) => String(r).padStart(2, "0"), J = (r) => `${r.getFullYear()}年${be(r.getMonth() + 1)}月${be(r.getDate())}日 ${be(r.getHours())}:${be(r.getMinutes())}`;
function De(r, n, o = /* @__PURE__ */ new Date()) {
  const s = r.trim(), d = (c, l) => {
    const b = l.match(/^(\d{1,2}):(\d{2})$/);
    return b ? (c.setHours(Number(b[1]), Number(b[2]), 0, 0), c) : null;
  };
  if (s === "刚刚") return J(o);
  const v = s.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (v) return J(d(new Date(o), v[1]) ?? o);
  const k = s.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (k) {
    const c = new Date(o);
    return c.setDate(c.getDate() - 1), J(d(c, k[1]) ?? o);
  }
  const N = s.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (N) {
    const c = new Date(o);
    let l = c.getDay() - _r[N[2]];
    return l < 0 && (l += 7), c.setDate(c.getDate() - l - (N[1] ? 7 : 0)), J(d(c, N[3]) ?? o);
  }
  const M = s.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (M) return J(new Date(Number(M[1]), Number(M[2]) - 1, Number(M[3]), Number(M[4]), Number(M[5])));
  const g = s.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (g) return J(new Date(o.getFullYear(), Number(g[1]) - 1, Number(g[2]), Number(g[3]), Number(g[4])));
  const p = n.match(/^c-(\d{13})$/);
  if (p) {
    const c = new Date(Number(p[1]));
    if (!Number.isNaN(c.getTime())) return J(c);
  }
  const m = new Date(s);
  return J(Number.isNaN(m.getTime()) ? o : m);
}
function Qr({
  project: r,
  documents: n,
  conversations: o,
  memberCount: s,
  isSidebarOpen: d,
  onOpenSidebar: v,
  onBackToProjects: k,
  onOpenMemberManagement: N,
  onOpenDocument: M,
  onOpenConversation: g,
  onCreateDocument: p,
  onCreateConversation: m,
  onRenameConversation: c,
  onDeleteConversation: l,
  onImportDocuments: b,
  onUpdateProjectName: y,
  onUpdateProjectDescription: w,
  documentImportAccept: C,
  documentImportMaxSize: P,
  documentImportDescription: u,
  showMemberManagement: h = !0,
  onDeleteProject: a
}) {
  const [S, z] = x("documents"), [B, $] = x(""), [E, L] = x("all"), [R, f] = x(!1), [T, H] = x(!1), [G, ee] = x(!1), [le, Z] = x([]), [xe, Y] = x(""), [te, he] = x(!1), [re, j] = x((r == null ? void 0 : r.name) ?? ""), [ne, _] = x((r == null ? void 0 : r.description) ?? ""), [O, q] = x(!1), [ke, pe] = x(!1), [Le, ie] = x(""), [dt, Ce] = x(!1), [ue, He] = x(!1), [Re, oe] = x(""), [ct, Se] = x(null), [Me, Fe] = x(null), [Ge, _e] = x(""), [Ue, de] = x(""), Ke = ye(null), We = ye(null);
  ae(() => {
    j((r == null ? void 0 : r.name) ?? ""), _((r == null ? void 0 : r.description) ?? ""), q(!1), pe(!1), ie("");
  }, [r]), ae(() => {
    if (!Me) return;
    const i = window.requestAnimationFrame(() => {
      var I;
      return (I = We.current) == null ? void 0 : I.focus();
    });
    return () => window.cancelAnimationFrame(i);
  }, [Me]);
  const Ye = D(() => ["all", ...Array.from(new Set(n.flatMap((i) => i.tags)))], [n]), qe = D(() => {
    const i = B.trim().toLowerCase();
    return n.filter((I) => (E === "all" || I.tags.includes(E)) && (!i || [I.title, I.summary, ...I.tags].join(" ").toLowerCase().includes(i)));
  }, [n, B, E]), Qe = D(() => {
    const i = B.trim().toLowerCase();
    return i ? o.filter((I) => [I.title, I.date, De(I.date, I.id)].join(" ").toLowerCase().includes(i)) : o;
  }, [o, B]);
  ae(() => {
    if (S !== "documents") return;
    const i = () => {
      const I = Ke.current;
      if (!I) return H(!1);
      const Q = I.scrollHeight > st + 1;
      H(Q), Q || f(!1);
    };
    return i(), window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [S, Ye]);
  const Xe = async () => {
    const i = re.trim() || (r == null ? void 0 : r.name) || "";
    if (j(i), q(!1), i && i !== (r == null ? void 0 : r.name)) {
      ie("");
      try {
        await y(i);
      } catch (I) {
        j((r == null ? void 0 : r.name) ?? ""), ie(I instanceof Error ? I.message : "项目名称更新失败");
      }
    }
  }, Je = async () => {
    const i = ne.trim() || (r == null ? void 0 : r.description) || "";
    if (_(i), pe(!1), i && i !== (r == null ? void 0 : r.description)) {
      ie("");
      try {
        await w(i);
      } catch (I) {
        _((r == null ? void 0 : r.description) ?? ""), ie(I instanceof Error ? I.message : "项目描述更新失败");
      }
    }
  }, mt = async () => {
    if (!le.length) return Y("请先选择至少一个文件");
    he(!0), Y("");
    try {
      await b(le), ee(!1), Z([]);
    } catch (i) {
      Y(i instanceof Error ? i.message : "文档导入失败");
    } finally {
      he(!1);
    }
  }, xt = async () => {
    if (!(!a || ue)) {
      He(!0), oe("");
      try {
        await a();
      } catch (i) {
        oe(i instanceof Error ? i.message : "项目删除失败"), He(!1);
      }
    }
  }, ht = (i) => {
    de(""), Fe(i.id), _e(i.title), Se(null);
  }, Ze = () => {
    Fe(null), _e("");
  }, je = async (i) => {
    const I = Ge.trim();
    if (Ze(), !(!I || I === i.title || !c)) {
      de("");
      try {
        await c(i.id, I);
      } catch (Q) {
        de(Q instanceof Error ? Q.message : "对话重命名失败");
      }
    }
  }, pt = async (i) => {
    if (l) {
      Se(null), de("");
      try {
        await l(i);
      } catch (I) {
        de(I instanceof Error ? I.message : "对话删除失败");
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !d && /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: k, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: re || (r == null ? void 0 : r.name) || "详情" })
        ] })
      ] }),
      r && (h || a) && /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
        h && /* @__PURE__ */ t("button", { type: "button", onClick: N, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
          /* @__PURE__ */ e(Ve, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "管理成员" })
        ] }),
        a && /* @__PURE__ */ t("button", { type: "button", onClick: () => {
          oe(""), Ce(!0);
        }, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-danger transition-colors hover:text-danger-hover", children: [
          /* @__PURE__ */ e(se, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "删除项目" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: r ? /* @__PURE__ */ t("section", { children: [
      O ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: re,
          onChange: (i) => j(i.target.value),
          onBlur: () => {
            Xe();
          },
          onKeyDown: (i) => {
            i.key === "Enter" && (i.preventDefault(), Xe()), i.key === "Escape" && (j(r.name), q(!1));
          },
          autoFocus: !0,
          className: "w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative block w-fit max-w-full", children: [
        /* @__PURE__ */ e("h2", { className: "cursor-text text-2xl font-semibold text-primaryText", onClick: () => q(!0), children: re || r.name }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目名称" })
      ] }),
      ke ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: ne,
          onChange: (i) => _(i.target.value),
          onBlur: () => {
            Je();
          },
          onKeyDown: (i) => {
            i.key === "Enter" && (i.preventDefault(), Je()), i.key === "Escape" && (_(r.description), pe(!1));
          },
          autoFocus: !0,
          className: "mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative mt-1 block max-w-[760px]", children: [
        /* @__PURE__ */ e("p", { className: "cursor-text text-sm text-tertiaryText", onClick: () => pe(!0), children: ne || r.description }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目描述" })
      ] }),
      Le && /* @__PURE__ */ e("div", { role: "alert", className: "mt-2 text-sm text-danger", children: Le }),
      /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
        /* @__PURE__ */ e(Ve, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          s,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => z("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${S === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          n.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => z("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${S === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          o.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(Dt, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: B, onChange: (i) => $(i.target.value), placeholder: `搜索${S === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(A, { type: "ghost", size: "small", rounded: "large", icon: S === "documents" ? /* @__PURE__ */ e(me, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: S === "documents" ? p : m, children: S === "documents" ? "新建" : "发起对话" }),
          S === "documents" && /* @__PURE__ */ t(ge, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              Z([]), Y(""), ee(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(Et, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      S === "documents" && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: Ke, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: R || !T ? void 0 : `${st}px` }, children: Ye.map((i) => /* @__PURE__ */ e("button", { type: "button", onClick: () => L(i), className: `h-7 rounded-full border px-3 text-xs transition-colors ${E === i ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: i === "all" ? "全部" : i }, i)) }),
        T && /* @__PURE__ */ e("button", { type: "button", onClick: () => f((i) => !i), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: R ? "收起" : "展开" })
      ] }) }),
      S === "documents" ? qe.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: qe.map((i) => /* @__PURE__ */ t("button", { type: "button", onClick: () => M(i.kbNodeId), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: i.title }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: i.summary }),
        i.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: i.tags.map((I) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: I }, `${i.id}-${I}`)) })
      ] }, i.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(fe, { description: "暂无匹配的文档" }) }) : Qe.length ? /* @__PURE__ */ t("div", { className: "mt-4 space-y-2", children: [
        Ue && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: Ue }),
        Qe.map((i) => {
          const I = Me === i.id, Q = ct === i.id, ut = !!(c || l);
          return /* @__PURE__ */ t("div", { className: "group -ml-2 flex w-[calc(100%+0.5rem)] items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-projectConversationHover", children: [
            I ? /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  ref: We,
                  value: Ge,
                  onChange: (U) => _e(U.target.value),
                  onBlur: () => {
                    je(i);
                  },
                  onKeyDown: (U) => {
                    U.key === "Enter" && (U.preventDefault(), je(i)), U.key === "Escape" && (U.preventDefault(), Ze());
                  },
                  className: "w-full rounded-md border border-shellChatEditBorder bg-white px-2 py-1 text-sm font-medium text-primaryText outline-none",
                  maxLength: 80,
                  "aria-label": "重命名对话"
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: De(i.date, i.id) })
            ] }) : /* @__PURE__ */ t("button", { type: "button", onClick: () => g(i.id), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: i.title }),
              /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: De(i.date, i.id) })
            ] }),
            !I && ut && /* @__PURE__ */ e(
              V,
              {
                open: Q,
                onOpenChange: (U) => Se(U ? i.id : null),
                placement: "bottom-end",
                portal: !0,
                width: 160,
                trigger: /* @__PURE__ */ e(Te, { size: 16 }),
                items: c ? [{ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(we, { size: 14 }) }] : [],
                footerItems: l ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(se, { size: 14 }), danger: !0 }] : [],
                onItemClick: (U, bt) => {
                  bt.stopPropagation(), U.key === "rename" && ht(i), U.key === "delete" && pt(i.id);
                },
                triggerClassName: `h-6 w-6 rounded-md text-secondaryText hover:bg-bgLight hover:text-primaryText ${Q ? "inline-flex" : "hidden group-hover:inline-flex"}`,
                className: "relative z-40 shrink-0",
                menuClassName: "!min-w-0"
              }
            )
          ] }, i.id);
        })
      ] }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(fe, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(fe, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: G,
        title: "导入文档",
        width: 500,
        maskClosable: !1,
        cancelText: "取消",
        okText: te ? "导入中…" : "导入",
        onCancel: () => {
          te || (ee(!1), Z([]), Y(""));
        },
        onConfirm: () => {
          mt();
        },
        okButtonProps: { disabled: te },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(nt, { value: le, accept: C, maxCount: 5, maxSize: P ?? 20 * 1024 * 1024, uploadDescription: u, disabled: te, onChange: Z, onError: (i) => Y(i.message) }),
          xe && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: xe })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      F,
      {
        visible: dt,
        title: "删除项目",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          ue || (Ce(!1), oe(""));
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(A, { type: "secondary", size: "medium", disabled: ue, onClick: () => {
            Ce(!1), oe("");
          }, children: "取消" }),
          /* @__PURE__ */ e(A, { type: "danger", size: "medium", isLoading: ue, onClick: () => {
            xt();
          }, children: "删除" })
        ] }),
        children: /* @__PURE__ */ t("div", { className: "space-y-3 text-sm leading-6 text-secondaryText", children: [
          /* @__PURE__ */ t("p", { children: [
            "删除后，项目“",
            r == null ? void 0 : r.name,
            "”将不再显示。确认删除当前项目吗？"
          ] }),
          Re && /* @__PURE__ */ e("p", { role: "alert", className: "text-danger", children: Re })
        ] })
      }
    )
  ] });
}
function Xr({
  visible: r,
  typeOptions: n,
  templates: o,
  loading: s = !1,
  error: d = "",
  defaultKnowledgeType: v,
  defaultTemplateId: k,
  onClose: N,
  onRetry: M,
  onContinue: g
}) {
  var C, P, u;
  const p = v || ((C = n[0]) == null ? void 0 : C.value) || "", m = k || ((P = o.find((h) => h.id === "blank")) == null ? void 0 : P.id) || ((u = o[0]) == null ? void 0 : u.id) || "", [c, l] = x(p), [b, y] = x(m);
  ae(() => {
    r && (l(p), y(m));
  }, [m, p, r]);
  const w = D(
    () => o.find((h) => h.id === b) ?? null,
    [b, o]
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
            /* @__PURE__ */ e("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: n.map((h) => {
              const a = h.value === c;
              return /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: [
                    "rounded-lg border px-3 py-2.5 text-left transition",
                    a ? "border-primary bg-primary-soft" : "border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted"
                  ].join(" "),
                  onClick: () => l(h.value),
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm font-medium text-primaryText", children: h.label }),
                      a && /* @__PURE__ */ e(Be, { size: 15, className: "shrink-0 text-primary" })
                    ] }),
                    /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText", children: h.description })
                  ]
                },
                h.value
              );
            }) })
          ] }),
          /* @__PURE__ */ t("section", { className: "mt-6 border-t border-lineSoft pt-5", children: [
            /* @__PURE__ */ t("div", { className: "mb-3", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-primaryText", children: "选择模板" }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "模板只提供初始内容，进入编辑器后可以自由修改。" })
            ] }),
            s ? /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "正在加载模板…" }) : d ? /* @__PURE__ */ t("div", { className: "rounded-lg border border-danger bg-danger-soft px-4 py-4", children: [
              /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: d }),
              M && /* @__PURE__ */ e(A, { type: "secondary", size: "small", className: "mt-3", onClick: M, children: "重新加载" })
            ] }) : o.length ? /* @__PURE__ */ e("div", { className: "grid gap-3 sm:grid-cols-2", children: o.map((h) => {
              var S;
              const a = h.id === b;
              return /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: [
                    "rounded-lg border p-3 text-left transition",
                    a ? "border-primary bg-primary-soft" : "border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted"
                  ].join(" "),
                  onClick: () => y(h.id),
                  children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surfaceMuted text-base text-secondaryText", children: h.icon || /* @__PURE__ */ e(At, { size: 17 }) }),
                    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: h.name }),
                        h.source === "workspace" && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-primary", children: "自定义" }),
                        a && /* @__PURE__ */ e(Be, { size: 15, className: "ml-auto shrink-0 text-primary" })
                      ] }),
                      /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText", children: h.description }),
                      (S = h.structure) != null && S.length ? /* @__PURE__ */ e("div", { className: "mt-2 flex flex-wrap gap-1.5", children: h.structure.slice(0, 3).map((z) => /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-xs text-secondaryText", children: z }, z)) }) : null
                    ] })
                  ] })
                },
                h.id
              );
            }) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无可用模板" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center justify-between gap-4 border-t border-lineSoft px-6 py-4", children: [
          /* @__PURE__ */ e("p", { className: "min-w-0 truncate text-xs text-tertiaryText", children: w ? `已选择：${w.name}` : "请选择一个模板" }),
          /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(A, { type: "secondary", size: "medium", onClick: N, children: "取消" }),
            /* @__PURE__ */ e(
              A,
              {
                type: "primary",
                size: "medium",
                disabled: s || !!d || !c || !b,
                onClick: () => g({ knowledgeType: c, templateId: b }),
                children: "继续编辑"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Jr({
  projectName: r,
  document: n,
  isSidebarOpen: o,
  onOpenSidebar: s,
  onBackToProjects: d,
  onBackToProject: v,
  onEdit: k,
  onDelete: N
}) {
  const [M, g] = x(!1), [p, m] = x(!1), [c, l] = x(""), b = async () => {
    m(!0), l("");
    try {
      await N(), g(!1);
    } catch (y) {
      l(y instanceof Error ? y.message : "文档删除失败");
    } finally {
      m(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "shrink-0 text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "max-w-56 truncate text-tertiaryText transition-colors hover:text-primaryText", children: r }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "truncate font-medium text-primaryText", children: n.title })
        ] })
      ] }),
      n.canEdit && /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(A, { type: "secondary", size: "small", rounded: "large", onClick: () => {
          l(""), g(!0);
        }, children: "删除" }),
        /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", onClick: k, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: /* @__PURE__ */ e(yt, { document: n }) }) }),
    /* @__PURE__ */ t(
      F,
      {
        visible: M,
        title: "删除文档",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          p || g(!1);
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(A, { type: "secondary", size: "medium", disabled: p, onClick: () => g(!1), children: "取消" }),
          /* @__PURE__ */ e(A, { type: "danger", size: "medium", disabled: p, onClick: () => {
            b();
          }, children: p ? "删除中…" : "删除" })
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可恢复，确认删除当前文档吗？" }),
          c && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: c })
        ]
      }
    )
  ] });
}
const ot = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], Ir = [...ot, { label: "移除", value: "移除" }];
function Zr({
  visible: r,
  members: n,
  directory: o,
  onClose: s,
  onInvite: d,
  onChangePermission: v,
  onRemove: k
}) {
  const [N, M] = x([]), [g, p] = x("浏览"), [m, c] = x(""), [l, b] = x(""), y = D(() => {
    const u = new Set(n.map((h) => h.id));
    return o.filter((h) => !u.has(h.id)).map((h) => ({
      label: `${h.name}（${h.email}）`,
      value: h.id,
      searchText: `${h.name} ${h.email}`
    }));
  }, [o, n]), w = () => {
    l || (M([]), p("浏览"), c(""), s());
  }, C = async () => {
    if (!N.length) {
      c("请先选择要邀请的成员");
      return;
    }
    b("invite"), c("");
    try {
      await d(N, g), M([]), p("浏览");
    } catch (u) {
      c(u instanceof Error ? u.message : "邀请成员失败");
    } finally {
      b("");
    }
  }, P = async (u, h) => {
    b(u), c("");
    try {
      h === "移除" ? await k(u) : await v(u, h);
    } catch (a) {
      c(a instanceof Error ? a.message : "成员操作失败");
    } finally {
      b("");
    }
  };
  return /* @__PURE__ */ e(F, { visible: r, title: "管理成员", width: 560, maskClosable: !1, footer: null, onCancel: w, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    /* @__PURE__ */ t("section", { className: "space-y-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "加入新成员" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1", children: [
          /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
            Ie,
            {
              mode: "multiple",
              showSearch: !0,
              variant: "borderless",
              value: N,
              options: y,
              optionFilterProp: "searchText",
              classNames: { popup: { root: "project-invite-member-dropdown" } },
              suffixIcon: null,
              placeholder: "搜索姓名/邮箱并选择成员",
              onChange: (u) => {
                M(u), m && c("");
              },
              disabled: !!l,
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "mx-2 h-5 w-px bg-lineSoft" }),
          /* @__PURE__ */ e(
            Ie,
            {
              variant: "borderless",
              value: g,
              options: ot,
              onChange: (u) => p(u),
              disabled: !!l,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(A, { type: "primary", size: "medium", disabled: !!l, onClick: () => {
          C();
        }, children: l === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      m && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: m })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: n.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: n.map((u) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: u.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      u.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: u.roleLabel || u.permission }) : /* @__PURE__ */ e(
        Ie,
        {
          variant: "borderless",
          value: u.permission,
          options: Ir,
          onChange: (h) => {
            P(u.id, String(h));
          },
          disabled: !!l,
          className: "member-permission-action-select w-[84px]",
          classNames: { popup: { root: "project-member-permission-dropdown" } },
          getPopupContainer: () => document.body
        }
      )
    ] }, u.id)) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText", children: "暂无成员" }) })
  ] }) });
}
const zr = (r) => r.find((n) => n.status !== "实验结束") ?? r[0] ?? null;
function jr({
  project: r,
  experiment: n,
  isSidebarOpen: o,
  onOpenSidebar: s,
  onBackToProjects: d,
  onBackToProject: v,
  onDelete: k,
  onEdit: N
}) {
  const [M, g] = x(!1), [p, m] = x(!1), c = ye(null), l = D(
    () => n ? zr(n.timeline) : null,
    [n]
  ), b = (l == null ? void 0 : l.actor) || (n == null ? void 0 : n.ownerName) || "未知成员";
  ae(() => () => {
    c.current !== null && window.clearTimeout(c.current);
  }, []);
  const y = () => {
    g(!0), c.current !== null && window.clearTimeout(c.current), c.current = window.setTimeout(() => g(!1), 700);
  }, w = () => {
    m(!1), k();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: v, disabled: !r, className: `transition-colors ${r ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (r == null ? void 0 : r.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (n == null ? void 0 : n.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(A, { type: "secondary", size: "small", rounded: "large", onClick: () => m(!0), children: "删除" }),
        /* @__PURE__ */ e(A, { type: "primary", size: "small", rounded: "large", onClick: N, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: !r || !n ? /* @__PURE__ */ e("div", { className: "w-full rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(fe, { description: "实验不存在或已被删除" }) }) : /* @__PURE__ */ t(ge, { children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: (l == null ? void 0 : l.detailTitle) ?? n.title }),
        /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between gap-4", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "创建人: ",
            b
          ] }),
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            b
          ] }),
          /* @__PURE__ */ e("span", { children: (l == null ? void 0 : l.updatedAt) ?? n.updatedAt })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: y, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${M ? "is-scrolling" : ""}`, children: [
        l != null && l.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(Lt, { remarkPlugins: [Ht], children: l.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((l == null ? void 0 : l.detailSections) ?? []).map((C) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: C.title }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: C.content })
        ] }, C.title)) }),
        /* @__PURE__ */ t("div", { className: "mt-8 border-t border-lineSubtle pt-6", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "记录摘要" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: l == null ? void 0 : l.summary }),
          /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-4 text-xs text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { children: [
              "更新人 ",
              l == null ? void 0 : l.actor
            ] }),
            /* @__PURE__ */ t("span", { children: [
              "更新时间 ",
              l == null ? void 0 : l.updatedAt
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mb-6 mt-8 border-t border-lineSubtle pt-6", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
          /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: ((l == null ? void 0 : l.attachments) ?? []).map((C) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: C }, C)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(F, { visible: p, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => m(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(A, { type: "secondary", size: "medium", onClick: () => m(!1), children: "取消" }),
      /* @__PURE__ */ e(A, { type: "danger", size: "medium", onClick: w, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function lt({ label: r, description: n, children: o }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: r }),
      n && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: o })
  ] });
}
function Vr({
  isSidebarOpen: r,
  avatarText: n = "研",
  avatarUrl: o,
  avatarUploading: s = !1,
  actionError: d,
  onOpenSidebar: v,
  onChangePassword: k,
  onChangeAvatar: N
}) {
  const [M, g] = x(!1), [p, m] = x(""), [c, l] = x(""), [b, y] = x(""), [w, C] = x(!1), [P, u] = x(""), [h, a] = x(""), [S, z] = x(""), B = ye(null), $ = b.length > 0 && c !== b, E = c.length > 0 && c.trim().length < 6, L = !!(p.trim() && c.trim() && b.trim() && !E && !$ && !w), R = () => {
    w || (g(!1), m(""), l(""), y(""), u(""), a(""), z(""));
  }, f = async () => {
    if (L) {
      C(!0), u(""), a(""), z("");
      try {
        const T = await (k == null ? void 0 : k({ currentPassword: p.trim(), newPassword: c.trim() }));
        if (T && !T.ok) {
          T.field === "currentPassword" ? a(T.message) : T.field === "newPassword" ? z(T.message) : u(T.message);
          return;
        }
        g(!1), m(""), l(""), y("");
      } catch (T) {
        u(T instanceof Error ? T.message : "密码修改失败");
      } finally {
        C(!1);
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
        /* @__PURE__ */ e(lt, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(A, { type: "secondary", size: "small", rounded: "large", onClick: () => g(!0), children: "修改" }) }),
        /* @__PURE__ */ e(lt, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: o ? /* @__PURE__ */ e("img", { src: o, alt: "当前头像", className: "h-full w-full object-cover" }) : n }),
          /* @__PURE__ */ e(
            A,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: s,
              disabled: s,
              onClick: () => {
                var T;
                return (T = B.current) == null ? void 0 : T.click();
              },
              children: s ? "上传中" : "上传"
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
            onChange: async (T) => {
              var G;
              const H = (G = T.target.files) == null ? void 0 : G[0];
              if (T.target.value = "", !(!H || s))
                try {
                  await (N == null ? void 0 : N(H));
                } catch {
                }
            }
          }
        )
      ] }),
      d && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: d })
    ] }) }) }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: M,
        title: "修改密码",
        onClose: R,
        onCancel: R,
        onConfirm: () => {
          f();
        },
        cancelText: "取消",
        okText: w ? "保存中…" : "保存",
        okButtonProps: { disabled: !L },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(
            ce,
            {
              label: "当前密码",
              type: "password",
              value: p,
              onChange: (T) => {
                m(T.target.value), a(""), u("");
              },
              placeholder: "请输入当前密码",
              size: "medium",
              error: !!h,
              helperText: h || void 0,
              disabled: w
            }
          ),
          /* @__PURE__ */ e(
            ce,
            {
              label: "新密码",
              type: "password",
              value: c,
              onChange: (T) => {
                l(T.target.value), z(""), u("");
              },
              placeholder: "请输入新密码",
              size: "medium",
              error: !!S || E,
              helperText: S || (E ? "新密码至少需要 6 位" : void 0),
              disabled: w
            }
          ),
          /* @__PURE__ */ e(
            ce,
            {
              label: "确认新密码",
              type: "password",
              value: b,
              onChange: (T) => y(T.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: $,
              helperText: $ ? "两次输入的新密码不一致" : void 0,
              disabled: w
            }
          ),
          P && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: P })
        ] })
      }
    )
  ] });
}
function ea({ onOpenAiUsage: r, onOpenMembers: n, onLogout: o }) {
  return /* @__PURE__ */ t("div", { className: "mx-auto max-w-2xl p-8", children: [
    /* @__PURE__ */ e("h1", { className: "mb-8 text-3xl font-bold", children: "⚙️ 系统设置" }),
    /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: r, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "AI用量统计" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: n, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "项目成员管理" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft", children: "退出登录" })
    ] })
  ] });
}
const Ee = (r) => new Intl.NumberFormat("en-US").format(Math.round(r));
function Pr({ points: r, labels: n, totalAmount: o }) {
  const [g, p] = x(null), m = D(() => Math.max(...r, 1), [r]), c = D(() => r.length <= 10 ? 1 : Math.ceil(r.length / 6), [r.length]), l = D(() => r.length <= 1 ? 0 : Math.min(6, 928 / r.length / 2.5), [928, r.length]), b = D(() => r.length === 0 ? 0 : Math.max(3, (928 - (r.length - 1) * l) / r.length), [l, 928, r.length]), y = (w) => w >= 1e4 ? `${(w / 1e4).toFixed(1)}万` : Ee(w);
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-primaryText", children: "月度用量" }),
      /* @__PURE__ */ t("div", { className: "mt-1 text-xs text-tertiaryText", children: [
        "Token 消耗",
        /* @__PURE__ */ e("span", { className: "ml-1 text-primaryText", children: Ee(o) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative h-[190px] w-full", children: [
      /* @__PURE__ */ t("svg", { viewBox: "0 0 1000 190", preserveAspectRatio: "none", className: "h-full w-full", children: [
        [m, 0].map((w) => {
          const C = 156 - w / m * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: C.toFixed(2), y2: C.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: C + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: y(w) })
          ] }, w);
        }),
        r.map((w, C) => {
          const P = w / m * 138, u = 52 + C * (b + l), h = 156 - P, a = n[C] ?? "", S = C % c === 0 || C === r.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => p(C), onMouseLeave: () => p(null), children: [
            /* @__PURE__ */ e("rect", { x: u.toFixed(2), y: h.toFixed(2), width: b.toFixed(2), height: Math.max(1, P).toFixed(2), rx: "1.5", fill: g === C ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            S && /* @__PURE__ */ e("text", { x: (u + b / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: a })
          ] }, `${a}-${C}`);
        })
      ] }),
      g !== null && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md", style: { left: `${(52 + g * (b + l) + b / 2) / 1e3 * 100}%` }, children: [
        /* @__PURE__ */ e("div", { className: "text-tertiaryText", children: n[g] }),
        /* @__PURE__ */ t("div", { className: "mt-0.5 font-semibold text-aiUsageBar", children: [
          Ee(r[g]),
          " Token"
        ] })
      ] })
    ] })
  ] });
}
function ta({
  isSidebarOpen: r,
  overviewCards: n,
  memberOptions: o,
  monthOptions: s,
  selectedMember: d,
  selectedMonth: v,
  trendPoints: k,
  trendLabels: N,
  trendTotal: M,
  rechargeRecords: g,
  onOpenSidebar: p,
  onMemberChange: m,
  onMonthChange: c
}) {
  var L, R;
  const [l, b] = x("analysis"), [y, w] = x(!1), [C, P] = x(!1), u = ((L = o.find((f) => f.value === d)) == null ? void 0 : L.label) ?? "全部成员", h = ((R = s.find((f) => f.value === v)) == null ? void 0 : R.label) ?? v, a = D(() => o.map((f) => ({ key: `member-${f.value}`, label: f.label, active: f.value === d })), [o, d]), S = D(() => s.map((f) => ({ key: `month-${f.value}`, label: f.label, active: f.value === v })), [s, v]), z = Ae((f) => {
    m(f.key.replace("member-", "")), w(!1);
  }, [m]), B = Ae((f) => {
    c(f.key.replace("month-", "")), P(!1);
  }, [c]), $ = D(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (f) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(f) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (f) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(f) }) }
  ], []), E = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: p, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: n.map((f) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: f.title }),
          f.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(Bt, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: f.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: f.value }),
          f.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: f.warningLabel })
        ] }),
        f.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: f.helper })
      ] }) }, f.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => b("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${l === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => b("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${l === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        l === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(V, { open: y, onOpenChange: w, items: a, onItemClick: z, placement: "bottom-start", width: 172, portal: !0, menuClassName: E, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: u }),
            /* @__PURE__ */ e(Ne, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${y ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(V, { open: C, onOpenChange: P, items: S, onItemClick: B, placement: "bottom-start", width: 172, portal: !0, menuClassName: E, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: h }),
            /* @__PURE__ */ e(Ne, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${C ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        l === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(Pr, { points: k, labels: N, totalAmount: M }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: g.length > 0 ? /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(ve, { className: "task-table-scroll min-w-[760px]", columns: $, dataSource: g, rowKey: "id" }) }) : /* @__PURE__ */ e("div", { className: "flex min-h-[180px] items-center justify-center text-sm text-tertiaryText", children: "暂无充值记录" }) })
      ] })
    ] }) })
  ] });
}
function ra({ isSidebarOpen: r, result: n, onOpenSidebar: o, onBack: s, onRun: d, onReset: v }) {
  const k = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(W, { size: 20 }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: s, className: `rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${r ? "-ml-2" : ""}`, "aria-label": "返回任务列表", children: /* @__PURE__ */ e($t, { size: 20 }) }),
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
        /* @__PURE__ */ t("button", { type: "button", onClick: d, className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95", children: [
          /* @__PURE__ */ e(Ot, { size: 16, className: "fill-current" }),
          "运行比对"
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: v, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e(se, { size: 16 }),
          "重置"
        ] })
      ] }),
      n && /* @__PURE__ */ t("div", { className: "mt-8 border-t border-borderGray pt-8", children: [
        /* @__PURE__ */ e("h3", { className: "mb-4 font-medium text-primaryText", children: "运行结果" }),
        /* @__PURE__ */ t("div", { className: "my-4 overflow-hidden rounded-lg border border-borderGray bg-toolCodeSurface", children: [
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-bgLight px-4 py-2 text-xs font-medium text-secondaryText", children: "结果" }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto whitespace-pre-line p-4 font-mono text-sm text-primaryText", children: n })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ta as AiUsagePage,
  la as AppShell,
  na as AssistantActions,
  V as BaseActionMenu,
  A as BaseButton,
  ia as BaseCard,
  nt as BaseDocumentUpload,
  fe as BaseEmpty,
  ce as BaseInput,
  F as BaseModal,
  gt as BasePagination,
  oa as BaseSegmented,
  da as BaseSelect,
  ve as BaseTable,
  Oe as BaseToggle,
  ft as BaseUpload,
  ca as CHAT_FILE_OPTIONS,
  ma as CHAT_INPUT_GUIDE_TEXT,
  xa as CHAT_QUICK_PROMPTS,
  ha as CHAT_RECENT_FILE_OPTIONS,
  pa as CHAT_SKILL_OPTIONS,
  ua as ChatComposerDock,
  ba as ChatConversationViewport,
  fa as ChatDisplayCard,
  ga as ChatHomePage,
  ya as ChatPreviewPanel,
  Na as ChatProjectFilesPanel,
  va as ChatShareControls,
  wa as ChatTimelineNavigation,
  Ta as ChatWorkspaceFrame,
  ka as ChatWorkspaceHeader,
  Ca as ChatWorkspaceHeaderAction,
  Sa as ChatWorkspaceSidePanel,
  jr as ExperimentDetailPage,
  Ma as ForgotPasswordPage,
  _a as InputArea,
  Nr as LiteratureSubscriptionsTable,
  Ia as LoginPage,
  Ur as MemberManagementPage,
  za as MessageItem,
  Pa as MessageList,
  Da as MiraDraftCard,
  Fr as NavigationProvider,
  Qr as ProjectDetailPage,
  Ea as ProjectDocumentAttachments,
  Xr as ProjectDocumentCreateModal,
  Aa as ProjectDocumentEditor,
  Ba as ProjectDocumentMetadata,
  Jr as ProjectDocumentPreview,
  yt as ProjectDocumentPreviewContent,
  Zr as ProjectMemberManagementModal,
  qr as ProjectsPage,
  $a as QuickPrompts,
  Oa as RegisterPage,
  Yr as ScheduledTaskDeleteModal,
  Wr as ScheduledTaskEditorModal,
  Kr as ScheduledTasksOverview,
  ea as SettingsPage,
  La as SkillPage,
  Vr as SystemSettingsDetailPage,
  Ha as ThinkingIndicator,
  ra as ToolPage,
  wr as buildTaskPromptPreview,
  De as formatProjectConversationDate,
  Ra as insertFileReference,
  Fa as insertSkillCommand,
  Ga as resolveAtQuery,
  Ua as resolveSlashQuery,
  Gr as useNavigation
};
