import { B as tt, a as ee, b as E, c as be, d as rt, e as F, f as le, g as ne, P as at, m as st, h as lt } from "./SkillPage-Dv10Rj0g.js";
import { A as Ur, i as Kr, j as Wr, k as Yr, l as qr, C as Qr, n as Xr, o as Jr, p as Zr, q as jr, r as Vr, s as ea, t as ta, u as ra, v as aa, w as sa, x as la, y as na, z as ia, D as oa, E as da, F as ca, I as ma, L as xa, M as ha, G as pa, H as ua, J as ba, Q as fa, R as ga, S as ya, T as Na, K as va, N as wa, O as Ta, U as ka } from "./SkillPage-Dv10Rj0g.js";
import { jsxs as t, jsx as e, Fragment as pe } from "react/jsx-runtime";
import nt, { useState as p, useMemo as A, useCallback as ke, useContext as it, createContext as ot, useEffect as te, useRef as fe } from "react";
import { Inbox as dt, Paperclip as ct, X as mt, Pencil as Me, Trash2 as ie, HelpCircle as xt, MoreHorizontal as _e, Menu as K, Plus as oe, AlertCircle as ht, ShieldCheck as pt, RefreshCw as ut, MessageCircle as bt, Folder as ft, ChevronDown as ue, Check as Ce, Users as He, Search as gt, Upload as yt, FileText as Nt, CircleHelp as vt, ArrowLeft as wt, Play as Tt } from "lucide-react";
import Se from "classnames";
import Qe from "react-markdown";
import Xe from "remark-gfm";
import { DatePicker as kt, Cascader as Ct, TimePicker as St, Radio as Fe, Select as Ne } from "antd";
import ve from "dayjs";
const Mt = "_wrapper_g5uno_1", _t = "_uploadContent_g5uno_7", zt = "_uploadIcon_g5uno_17", It = "_uploadTitle_g5uno_18", Pt = "_uploadDescription_g5uno_19", Dt = "_fileList_g5uno_20", At = "_fileItem_g5uno_21", Et = "_fileItemIcon_g5uno_22", Bt = "_fileName_g5uno_23", $t = "_fileSize_g5uno_24", Ot = "_removeButton_g5uno_25", G = {
  wrapper: Mt,
  uploadContent: _t,
  uploadIcon: zt,
  uploadTitle: It,
  uploadDescription: Pt,
  fileList: Dt,
  fileItem: At,
  fileItemIcon: Et,
  fileName: Bt,
  fileSize: $t,
  removeButton: Ot
}, Lt = ".pdf,.doc,.docx,.txt,.md,.csv", Rt = 20 * 1024 * 1024, Ge = 5, Ue = (r, s) => r.name === s.name && r.size === s.size && r.lastModified === s.lastModified && r.type === s.type, Ht = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`, ze = nt.forwardRef(
  ({
    value: r,
    defaultValue: s = [],
    onChange: o,
    onError: l,
    accept: d = Lt,
    maxSize: N = Rt,
    maxCount: T = Ge,
    disabled: y = !1,
    className: C,
    uploadTitle: g = "点击或拖拽文件到此上传",
    uploadDescription: w = `支持单文件或批量上传，单次最多 ${Ge} 个，单个文件不超过 20MB`,
    uploadIcon: m
  }, i) => {
    const [n, u] = p(s), v = r !== void 0, b = A(() => (v ? r : n) ?? [], [n, v, r]), f = (x) => {
      v || u(x), o == null || o(x);
    }, z = (x) => {
      const c = [...b];
      if (Array.from(x).forEach((a) => {
        c.some((_) => Ue(_, a)) || c.push(a);
      }), c.length > T) {
        l == null || l(new Error(`最多上传 ${T} 个文件，请删除后再继续添加`));
        return;
      }
      f(c);
    };
    return /* @__PURE__ */ t("div", { className: Se(G.wrapper, C), children: [
      /* @__PURE__ */ e(tt, { ref: i, accept: d, multiple: !0, disabled: y, maxSize: N, maxCount: T, onChange: z, onError: l, children: /* @__PURE__ */ t("div", { className: G.uploadContent, children: [
        m ?? /* @__PURE__ */ e(dt, { size: 30, strokeWidth: 2.2, className: G.uploadIcon }),
        /* @__PURE__ */ e("div", { className: G.uploadTitle, children: g }),
        /* @__PURE__ */ e("div", { className: G.uploadDescription, children: w })
      ] }) }),
      b.length > 0 && /* @__PURE__ */ e("div", { className: G.fileList, children: b.map((x, c) => /* @__PURE__ */ t("div", { className: G.fileItem, children: [
        /* @__PURE__ */ e(ct, { size: 14, className: G.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: G.fileName, children: x.name }),
        /* @__PURE__ */ e("span", { className: G.fileSize, children: Ht(x.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => f(b.filter((a) => !Ue(a, x))), className: G.removeButton, "aria-label": `移除文件 ${x.name}`, disabled: y, children: /* @__PURE__ */ e(mt, { size: 14 }) })
      ] }, `${x.name}-${x.lastModified}-${c}`)) })
    ] });
  }
);
ze.displayName = "BaseDocumentUpload";
const Ft = "_toggle_198gd_1", Gt = "_toggleSmall_198gd_18", Ut = "_toggleRegular_198gd_23", Kt = "_toggleMedium_198gd_28", Wt = "_toggleOff_198gd_33", Yt = "_toggleOn_198gd_37", qt = "_toggleDisabled_198gd_41", Qt = "_thumb_198gd_46", Xt = "_thumbSmall_198gd_54", Jt = "_thumbRegular_198gd_59", Zt = "_thumbMedium_198gd_64", jt = "_thumbOffSmall_198gd_69", Vt = "_thumbOffRegular_198gd_70", er = "_thumbOffMedium_198gd_71", tr = "_thumbOnSmall_198gd_75", rr = "_thumbOnRegular_198gd_79", ar = "_thumbOnMedium_198gd_83", q = {
  toggle: Ft,
  toggleSmall: Gt,
  toggleRegular: Ut,
  toggleMedium: Kt,
  toggleOff: Wt,
  toggleOn: Yt,
  toggleDisabled: qt,
  thumb: Qt,
  thumbSmall: Xt,
  thumbRegular: Jt,
  thumbMedium: Zt,
  thumbOffSmall: jt,
  thumbOffRegular: Vt,
  thumbOffMedium: er,
  thumbOnSmall: tr,
  thumbOnRegular: rr,
  thumbOnMedium: ar
}, Ie = ({
  checked: r,
  defaultChecked: s = !1,
  size: o = "medium",
  disabled: l = !1,
  onChange: d,
  className: N,
  ...T
}) => {
  const [y, C] = p(s), g = r !== void 0, w = g ? r : y, m = `${o.charAt(0).toUpperCase()}${o.slice(1)}`, i = ke(() => {
    if (l) return;
    const v = !w;
    g || C(v), d == null || d(v);
  }, [l, w, g, d]), n = A(
    () => Se(
      q.toggle,
      q[`toggle${m}`],
      w ? q.toggleOn : q.toggleOff,
      l && q.toggleDisabled,
      N
    ),
    [N, l, w, m]
  ), u = A(
    () => Se(
      q.thumb,
      q[`thumb${m}`],
      q[`thumb${w ? "On" : "Off"}${m}`]
    ),
    [w, m]
  );
  return /* @__PURE__ */ e(
    "button",
    {
      ...T,
      type: "button",
      role: "switch",
      "aria-checked": w,
      className: n,
      onClick: i,
      disabled: l,
      children: /* @__PURE__ */ e("span", { className: u })
    }
  );
};
Ie.displayName = "BaseToggle";
const Je = ot(null);
function Cr({
  adapter: r,
  children: s
}) {
  return /* @__PURE__ */ e(Je.Provider, { value: r, children: s });
}
function Sr() {
  const r = it(Je);
  if (!r)
    throw new Error("useNavigation must be used within NavigationProvider");
  return r;
}
function Mr({
  labName: r,
  members: s,
  inviteCode: o,
  isSidebarOpen: l,
  loading: d = !1,
  error: N,
  actionError: T,
  canManage: y = !1,
  onOpenSidebar: C,
  onRetry: g,
  onRegenerateInvite: w,
  onUpdateRole: m,
  onRemoveMember: i
}) {
  const [n, u] = p(!1), [v, b] = p(!1), [f, z] = p(!1), [x, c] = p(!1), [a, _] = p(null), [k, $] = p("成员"), [P, I] = p(null), [R, L] = p(null), [M, D] = p(1), [H, W] = p(10), X = s.filter((S) => S.role === "管理员").length, de = A(() => {
    const S = (M - 1) * H;
    return s.slice(S, S + H);
  }, [M, s, H]), U = A(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(Me, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(ie, { size: 14 }), danger: !0 }
    ],
    []
  );
  te(() => {
    const S = Math.max(1, Math.ceil(s.length / H));
    M > S && D(S);
  }, [M, s.length, H]);
  const j = (S) => {
    _(S), $(S.role), z(!0);
  }, ce = (S) => {
    _(S), c(!0);
  }, V = async () => {
    if (o) {
      try {
        await navigator.clipboard.writeText(o);
      } catch {
        const S = document.createElement("textarea");
        S.value = o, S.style.position = "fixed", S.style.opacity = "0", document.body.appendChild(S), S.focus(), S.select(), document.execCommand("copy"), document.body.removeChild(S);
      }
      b(!0), window.setTimeout(() => b(!1), 1500);
    }
  }, J = async () => {
    I("invite");
    try {
      await w(), b(!1);
    } finally {
      I(null);
    }
  }, re = async () => {
    if (a) {
      I("edit");
      try {
        await m(a.id, k), z(!1);
      } finally {
        I(null);
      }
    }
  }, Z = async () => {
    if (a) {
      I("remove");
      try {
        await i(a.id), c(!1);
      } finally {
        I(null);
      }
    }
  }, ge = A(
    () => [
      {
        title: "姓名",
        dataIndex: "name",
        width: "25%",
        render: (S, O) => /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center pr-2", children: [
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
          /* @__PURE__ */ e("span", { className: "text-mutedText", title: "管理员可管理成员和实验室设置；成员可使用工作区。", children: /* @__PURE__ */ e(xt, { size: 14 }) })
        ] }),
        dataIndex: "role",
        width: "16%"
      },
      {
        title: "加入时间",
        dataIndex: "joinedAt",
        width: "18%",
        render: (S) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(S) })
      },
      {
        title: "归属项目",
        dataIndex: "projectsLabel",
        width: "31%",
        render: (S) => /* @__PURE__ */ e("span", { className: "block truncate text-secondaryText", title: String(S || "暂未提供"), children: String(S || "暂未提供") })
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "10%",
        render: (S, O) => O.canManage ? /* @__PURE__ */ e(
          ee,
          {
            open: R === O.id,
            onOpenChange: (Y) => L(Y ? O.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(_e, { size: 16 }) }),
            items: U,
            onItemClick: (Y, me) => {
              me.stopPropagation(), L(null), Y.key === "edit" ? j(O) : ce(O);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [R, U]
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
      y && /* @__PURE__ */ e(E, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(oe, { size: 14 }), className: "shrink-0", onClick: () => u(!0), children: "邀请新成员" })
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
      N && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: N }),
        g && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: g, children: "重新加载" })
      ] }),
      !N && X < 2 && !d && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
        /* @__PURE__ */ e(ht, { size: 16, className: "shrink-0" }),
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
            columns: ge,
            dataSource: de,
            rowKey: "id",
            striped: !1,
            loading: d
          }
        ),
        /* @__PURE__ */ e(
          rt,
          {
            current: M,
            total: s.length,
            pageSize: H,
            onChange: D,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (S, O) => {
              W(O), D(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(pt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: n, title: "邀请新成员", width: 360, onCancel: () => u(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (o || "------").split("").map((S, O) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: S }, `${S}-${O}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      T && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: T }),
      /* @__PURE__ */ e(E, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: V, disabled: !o, children: v ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: P === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: P === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(F, { visible: f && !!a, title: "编辑成员信息", width: 560, maskClosable: !1, cancelText: "取消", okText: "保存修改", confirmLoading: P === "edit", onCancel: () => z(!1), onConfirm: re, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((S) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: S, checked: k === S, onChange: () => $(S), className: "h-4 w-4 accent-primary" }),
          S
        ] }, S)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-mutedText", children: "项目归属接口暂未开放" })
      ] }),
      T && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: T })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: x && !!a, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: P === "remove", onCancel: () => c(!1), onConfirm: Z, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
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
function sr({
  items: r,
  loading: s = !1,
  pendingId: o,
  onCreate: l,
  onFetch: d,
  onToggle: N,
  onEdit: T,
  onDelete: y
}) {
  const [C, g] = p(null), w = A(() => [
    {
      title: "订阅名称",
      dataIndex: "name",
      width: "19%",
      render: (m, i) => /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate font-medium text-primaryText", children: String(m) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: i.source })
      ] })
    },
    {
      title: "关键词",
      dataIndex: "keywords",
      width: "22%",
      render: (m) => /* @__PURE__ */ e("span", { className: "line-clamp-2 break-all text-secondaryText", children: String(m) || "未设置" })
    },
    {
      title: "抓取设置",
      dataIndex: "schedule",
      width: "14%",
      render: (m) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(m) })
    },
    {
      title: "内容统计",
      dataIndex: "itemStats",
      width: "16%",
      render: (m, i) => /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "text-secondaryText", children: String(m) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: i.projectStats })
      ] })
    },
    {
      title: "最近抓取",
      dataIndex: "lastFetch",
      width: "14%",
      render: (m) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(m) })
    },
    {
      title: "状态",
      dataIndex: "isEnabled",
      width: "7%",
      render: (m, i) => /* @__PURE__ */ e(
        Ie,
        {
          size: "small",
          checked: i.isEnabled,
          disabled: o === i.id,
          onChange: () => N(i.id),
          "aria-label": i.isEnabled ? "停用文献订阅" : "启用文献订阅"
        }
      )
    },
    {
      title: "操作",
      dataIndex: "id",
      width: "8%",
      align: "right",
      render: (m, i) => {
        const n = [
          { key: "fetch", label: "立即抓取", icon: /* @__PURE__ */ e(ut, { size: 14 }) },
          { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(Me, { size: 14 }) },
          { key: "delete", label: "删除", icon: /* @__PURE__ */ e(ie, { size: 14 }), danger: !0 }
        ];
        return /* @__PURE__ */ e(
          ee,
          {
            open: C === i.id,
            onOpenChange: (u) => g(u ? i.id : null),
            placement: "bottom-end",
            width: 140,
            portal: !0,
            menuClassName: "!min-w-[140px]",
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(_e, { size: 16 }) }),
            items: n,
            onItemClick: (u) => {
              g(null), u.key === "fetch" ? d(i.id) : u.key === "edit" ? T(i.id) : y(i.id);
            }
          }
        );
      }
    }
  ], [C, y, T, d, N, o]);
  return /* @__PURE__ */ t("section", { className: "space-y-3", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "文献订阅" }),
        /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "按来源和关键词定期抓取文献，字段与旧版知识追踪保持一致。" })
      ] }),
      /* @__PURE__ */ e(E, { type: "secondary", size: "small", onClick: l, children: "新建订阅" })
    ] }),
    /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(
      be,
      {
        className: "task-table-scroll w-full [&_table]:min-w-[1080px]",
        columns: w,
        dataSource: r,
        rowKey: "id",
        striped: !1,
        loading: s
      }
    ) })
  ] });
}
const we = 30, lr = 3;
function nr(r) {
  const s = Array.from(r ?? ""), o = we * lr, l = s.length > o ? [...s.slice(0, Math.max(o - 3, 0)), ".", ".", "."] : s, d = [];
  for (let N = 0; N < l.length; N += we)
    d.push(l.slice(N, N + we).join(""));
  return d.join(`
`);
}
function _r({
  templates: r,
  tasks: s,
  isSidebarOpen: o,
  loading: l = !1,
  error: d,
  pendingTaskId: N,
  literatureSubscriptions: T = [],
  literatureLoading: y = !1,
  pendingLiteratureId: C,
  onOpenSidebar: g,
  onCreateCustom: w,
  onCreateFromTemplate: m,
  onToggleTask: i,
  onEditTask: n,
  onDeleteTask: u,
  onOpenTaskChat: v,
  onCreateLiterature: b,
  onFetchLiterature: f,
  onToggleLiterature: z,
  onEditLiterature: x,
  onDeleteLiterature: c,
  onRetry: a
}) {
  const [_, k] = p(null), $ = A(
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
        render: (P) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: nr(String(P ?? "")) })
      },
      {
        title: "下次运行",
        dataIndex: "nextRun",
        width: "14%",
        render: (P, I) => /* @__PURE__ */ t("span", { children: [
          /* @__PURE__ */ e("span", { className: "block text-secondaryText", children: String(P) }),
          I.scheduleEnd && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-tertiaryText", children: I.scheduleEnd })
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
        render: (P, I) => /* @__PURE__ */ e(
          Ie,
          {
            size: "small",
            checked: I.isEnabled,
            disabled: I.isToggleDisabled || N === I.id,
            onChange: () => i(I.id),
            "aria-label": I.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "3%",
        align: "right",
        render: (P, I) => {
          const R = [
            ...I.mainSessionId && v ? [{ key: "chat", label: "打开对话", icon: /* @__PURE__ */ e(bt, { size: 14 }) }] : [],
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(Me, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(ie, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            ee,
            {
              open: _ === I.id,
              onOpenChange: (L) => k(L ? I.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(_e, { size: 16 }) }),
              items: R,
              onItemClick: (L) => {
                k(null), L.key === "chat" && I.mainSessionId ? v == null || v(I.mainSessionId) : L.key === "edit" ? n(I.id) : u(I.id);
              }
            }
          );
        }
      }
    ],
    [_, u, n, v, i, N]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: g, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(E, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(oe, { size: 14 }), className: "shrink-0", onClick: w, children: "新建任务" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-10", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "定时任务" }),
        /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3", children: r.map((P) => /* @__PURE__ */ t("button", { type: "button", onClick: () => m(P.id), className: "flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-[17px] font-medium text-primaryText", children: P.name }),
          /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText", children: P.description })
        ] }, P.id)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "已设置任务" }),
        d && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: d }),
          a && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: a, children: "重新加载" })
        ] }),
        /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(be, { className: "task-table-scroll w-full [&_table]:min-w-[940px]", columns: $, dataSource: s, rowKey: "id", striped: !1, loading: l }) })
      ] }),
      b && f && z && x && c && /* @__PURE__ */ e(
        sr,
        {
          items: T,
          loading: y,
          pendingId: C,
          onCreate: b,
          onFetch: f,
          onToggle: z,
          onEdit: x,
          onDelete: c
        }
      )
    ] }) })
  ] });
}
const { RangePicker: ir } = kt, or = [
  { value: "hourly", label: "每小时" },
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" }
], Ke = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, dr = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], cr = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([r, s]) => ({ value: r, label: s })), mr = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周", children: cr },
  { value: "monthly", label: "每月", children: Array.from({ length: 28 }, (r, s) => ({ value: String(s + 1), label: `${s + 1}号` })) }
];
function zr({
  visible: r,
  kind: s,
  editing: o = !1,
  literatureValue: l,
  scheduleValue: d,
  projects: N = [],
  literatureProjects: T = [],
  onLiteratureChange: y,
  onScheduleChange: C,
  onCancel: g,
  onConfirm: w,
  onCreateProject: m
}) {
  const [i, n] = p(!1), u = s === "literature", v = N.find((a) => a.id === d.projectId) ?? null, b = u ? o ? "修改文献订阅任务" : "设置文献订阅任务" : o ? "修改定时任务" : "新建定时任务", f = d.repeatMode === "weekly" || d.repeatMode === "monthly" ? [d.repeatMode, d.repeatSubValue || (d.repeatMode === "weekly" ? "mon" : "1")] : [d.repeatMode], z = A(() => [
    { key: "none", label: "不选择项目", active: !v },
    ...N.map((a) => ({ key: a.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: a.name }), active: (v == null ? void 0 : v.id) === a.id }))
  ], [N, v]), x = A(() => m ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(oe, { size: 16 }) }] : [], [m]), c = (a) => {
    if (n(!1), a.key === "create") return m == null ? void 0 : m();
    C({ ...d, projectId: a.key === "none" ? null : a.key });
  };
  return /* @__PURE__ */ e(
    F,
    {
      visible: r,
      title: b,
      width: 600,
      className: "tools-task-modal",
      okText: o ? "保存修改" : u ? "创建订阅" : "创建任务",
      cancelText: "取消",
      onCancel: g,
      onConfirm: w,
      okButtonProps: { disabled: !l.topic.trim() || (u ? !l.keywords.trim() || l.sourceTypes.length === 0 || l.sourceTypes.includes("pubmed") && l.pubmedMatchMode === "advanced" && !l.advancedQuery.trim() : !d.taskPrompt.trim()) },
      children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务名称" }),
          /* @__PURE__ */ e(
            le,
            {
              value: l.topic,
              onChange: (a) => y({ ...l, topic: a.target.value }),
              placeholder: "请输入任务名称",
              size: "medium",
              containerClassName: "!px-3.5"
            }
          )
        ] }),
        u ? /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "抓取频率" }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(
                "select",
                {
                  value: l.frequency,
                  onChange: (a) => y({ ...l, frequency: a.target.value }),
                  className: "h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary",
                  children: or.map((a) => /* @__PURE__ */ e("option", { value: a.value, children: a.label }, a.value))
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
                value: String(l.lookbackDays),
                onChange: (a) => y({ ...l, lookbackDays: Math.max(1, Math.min(365, Number(a.target.value) || 1)) }),
                className: "h-9 w-full rounded-lg border border-borderGray bg-white px-3.5 text-sm text-primaryText outline-none transition-colors focus:border-primary"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ t(pe, { children: [
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
              /* @__PURE__ */ e(
                ir,
                {
                  format: "YYYY/MM/DD",
                  className: "task-period-picker w-full",
                  classNames: { popup: { root: "task-period-picker-popup" } },
                  value: [d.startDate ? ve(d.startDate, "YYYY-MM-DD") : null, d.endDate ? ve(d.endDate, "YYYY-MM-DD") : null],
                  onChange: (a, [_, k]) => C({ ...d, startDate: _, endDate: k })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "触发时间" }),
              /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ e(
                  Ct,
                  {
                    value: f,
                    options: mr,
                    className: "task-repeat-cascader w-full",
                    classNames: { popup: { root: "task-repeat-cascader-popup" } },
                    placeholder: "请选择重复方式",
                    onChange: (a) => {
                      const _ = String(a[0] ?? "daily"), k = a[1] ? String(a[1]) : "";
                      C({ ...d, repeatMode: _, repeatSubValue: _ === "weekly" ? k || (d.repeatMode === "weekly" ? d.repeatSubValue : "mon") || "mon" : _ === "monthly" ? k || (d.repeatMode === "monthly" ? d.repeatSubValue : "1") || "1" : "" });
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  St,
                  {
                    value: ve(d.runAt, "HH:mm"),
                    format: "HH:mm",
                    minuteStep: 1,
                    allowClear: !1,
                    onChange: (a) => C({ ...d, runAt: a ? a.format("HH:mm") : d.runAt }),
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
                  onChange: (a) => C({ ...d, taskPrompt: a.target.value }),
                  placeholder: "输入任何内容，使用 '/' 选择技能或 '@' 引用资源...",
                  rows: 5,
                  className: "w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-3 z-20", children: /* @__PURE__ */ e(
                ee,
                {
                  open: i,
                  onOpenChange: n,
                  placement: "top-start",
                  width: 260,
                  trigger: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight", children: [
                    /* @__PURE__ */ e(ft, { size: 14 }),
                    /* @__PURE__ */ e("span", { className: "max-w-[140px] truncate", children: (v == null ? void 0 : v.name) ?? "工作项目" }),
                    /* @__PURE__ */ e(ue, { size: 14 })
                  ] }),
                  items: z,
                  onItemClick: c,
                  className: "!inline-flex",
                  listClassName: "max-h-[220px] overflow-y-auto",
                  footerItems: x
                }
              ) })
            ] })
          ] })
        ] }),
        u && /* @__PURE__ */ t(pe, { children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "订阅来源" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(Ke).map((a) => {
              const _ = Ke[a], k = l.sourceTypes.includes(a);
              return /* @__PURE__ */ t("button", { type: "button", onClick: () => {
                const $ = o ? [a] : k ? l.sourceTypes.filter((P) => P !== a) : [...l.sourceTypes, a];
                y({ ...l, sourceTypes: $ });
              }, className: `flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors ${k ? "border-primary bg-primary-soft-strong" : "border-borderGray bg-white hover:border-borderSoft"}`, children: [
                /* @__PURE__ */ e("span", { className: `mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${k ? "border-primary bg-primary text-white" : "border-controlBorder text-transparent"}`, children: k && /* @__PURE__ */ e(Ce, { size: 11, strokeWidth: 3, "aria-hidden": "true" }) }),
                /* @__PURE__ */ t("span", { children: [
                  /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: _.label }),
                  /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: _.desc })
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
                onChange: (a) => y({ ...l, keywords: a.target.value }),
                placeholder: "例：CRISPR, prime editing, base editor",
                className: "w-full rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          l.sourceTypes.includes("pubmed") && /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "PubMed 匹配方式" }),
            /* @__PURE__ */ e(Fe.Group, { value: l.pubmedMatchMode, onChange: (a) => y({ ...l, pubmedMatchMode: a.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: dr.map((a) => /* @__PURE__ */ e(Fe, { value: a.value, children: a.label }, a.value)) }) })
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
                onChange: (a) => y({ ...l, advancedQuery: a.target.value }),
                placeholder: '例如：("inflammatory bowel disease"[Title/Abstract]) AND ("stromal cell"[Title/Abstract])',
                rows: 3,
                className: "w-full resize-y rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "关联项目" }),
            /* @__PURE__ */ e("div", { className: "max-h-[150px] space-y-1 overflow-y-auto rounded-lg border border-borderGray p-2", children: T.length > 0 ? T.map((a) => {
              const _ = l.projectNodeIds.includes(a.id);
              return /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primaryText hover:bg-bgLight", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: _,
                    onChange: () => y({ ...l, projectNodeIds: _ ? l.projectNodeIds.filter((k) => k !== a.id) : [...l.projectNodeIds, a.id] }),
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
                onChange: (a) => y({ ...l, enabled: a.target.checked }),
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
function Ir({
  visible: r,
  description: s,
  confirmLoading: o = !1,
  onCancel: l,
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
      onCancel: l,
      onConfirm: d,
      okButtonProps: {
        className: "!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover"
      },
      children: /* @__PURE__ */ e("p", { className: "text-sm text-primaryText", children: s })
    }
  );
}
function Pr({
  projects: r,
  isSidebarOpen: s,
  loading: o = !1,
  error: l,
  onOpenSidebar: d,
  onOpenProject: N,
  onCreateProject: T,
  onRetry: y
}) {
  const [C, g] = p(!1), [w, m] = p(""), [i, n] = p(""), [u, v] = p([]), [b, f] = p(""), [z, x] = p(!1), c = () => {
    m(""), n(""), v([]), f(""), g(!0);
  }, a = () => {
    z || (g(!1), f(""));
  }, _ = async () => {
    const k = w.trim();
    if (!k) {
      f("请输入项目名称");
      return;
    }
    x(!0), f("");
    try {
      await T({
        name: k,
        description: i.trim(),
        documents: u
      }), g(!1);
    } catch ($) {
      f($ instanceof Error ? $.message : "项目创建失败");
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ e(E, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(oe, { size: 14 }), className: "shrink-0", onClick: c, children: "创建新项目" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      l && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: l }),
        y && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: y, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": o, children: [
        r.map((k) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => N(k.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: k.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: k.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  k.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  k.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          k.id
        )),
        !o && !l && r.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: C,
        title: "创建新项目",
        width: 560,
        maskClosable: !1,
        okText: z ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: a,
        onConfirm: () => {
          _();
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
              le,
              {
                value: w,
                placeholder: "请输入项目名称",
                disabled: z,
                onChange: (k) => {
                  m(k.target.value), b && f("");
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
                onChange: (k) => n(k.target.value),
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
              ze,
              {
                value: u,
                maxCount: 5,
                maxSize: 20 * 1024 * 1024,
                disabled: z,
                onChange: v,
                onError: (k) => f(k.message)
              }
            )
          ] }),
          b && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: b })
        ] })
      }
    )
  ] });
}
const We = 84, xr = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, he = (r) => String(r).padStart(2, "0"), Q = (r) => `${r.getFullYear()}年${he(r.getMonth() + 1)}月${he(r.getDate())}日 ${he(r.getHours())}:${he(r.getMinutes())}`;
function Ye(r, s, o = /* @__PURE__ */ new Date()) {
  const l = r.trim(), d = (i, n) => {
    const u = n.match(/^(\d{1,2}):(\d{2})$/);
    return u ? (i.setHours(Number(u[1]), Number(u[2]), 0, 0), i) : null;
  };
  if (l === "刚刚") return Q(o);
  const N = l.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (N) return Q(d(new Date(o), N[1]) ?? o);
  const T = l.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (T) {
    const i = new Date(o);
    return i.setDate(i.getDate() - 1), Q(d(i, T[1]) ?? o);
  }
  const y = l.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (y) {
    const i = new Date(o);
    let n = i.getDay() - xr[y[2]];
    return n < 0 && (n += 7), i.setDate(i.getDate() - n - (y[1] ? 7 : 0)), Q(d(i, y[3]) ?? o);
  }
  const C = l.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (C) return Q(new Date(Number(C[1]), Number(C[2]) - 1, Number(C[3]), Number(C[4]), Number(C[5])));
  const g = l.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (g) return Q(new Date(o.getFullYear(), Number(g[1]) - 1, Number(g[2]), Number(g[3]), Number(g[4])));
  const w = s.match(/^c-(\d{13})$/);
  if (w) {
    const i = new Date(Number(w[1]));
    if (!Number.isNaN(i.getTime())) return Q(i);
  }
  const m = new Date(l);
  return Q(Number.isNaN(m.getTime()) ? o : m);
}
function Dr({
  project: r,
  documents: s,
  conversations: o,
  memberCount: l,
  isSidebarOpen: d,
  onOpenSidebar: N,
  onBackToProjects: T,
  onOpenMemberManagement: y,
  onOpenDocument: C,
  onOpenConversation: g,
  onCreateDocument: w,
  onCreateConversation: m,
  onImportDocuments: i,
  onUpdateProjectName: n,
  onUpdateProjectDescription: u,
  documentImportAccept: v,
  documentImportMaxSize: b,
  documentImportDescription: f,
  showMemberManagement: z = !0,
  onDeleteProject: x
}) {
  const [c, a] = p("documents"), [_, k] = p(""), [$, P] = p("all"), [I, R] = p(!1), [L, M] = p(!1), [D, H] = p(!1), [W, X] = p([]), [de, U] = p(""), [j, ce] = p(!1), [V, J] = p((r == null ? void 0 : r.name) ?? ""), [re, Z] = p((r == null ? void 0 : r.description) ?? ""), [ge, S] = p(!1), [O, Y] = p(!1), [me, ae] = p(""), [je, ye] = p(!1), [xe, Pe] = p(!1), [De, se] = p(""), Ae = fe(null);
  te(() => {
    J((r == null ? void 0 : r.name) ?? ""), Z((r == null ? void 0 : r.description) ?? ""), S(!1), Y(!1), ae("");
  }, [r]);
  const Ee = A(() => ["all", ...Array.from(new Set(s.flatMap((h) => h.tags)))], [s]), Be = A(() => {
    const h = _.trim().toLowerCase();
    return s.filter((B) => ($ === "all" || B.tags.includes($)) && (!h || [B.title, B.summary, ...B.tags].join(" ").toLowerCase().includes(h)));
  }, [s, _, $]), $e = A(() => {
    const h = _.trim().toLowerCase();
    return h ? o.filter((B) => [B.title, B.date, Ye(B.date, B.id)].join(" ").toLowerCase().includes(h)) : o;
  }, [o, _]);
  te(() => {
    if (c !== "documents") return;
    const h = () => {
      const B = Ae.current;
      if (!B) return M(!1);
      const Re = B.scrollHeight > We + 1;
      M(Re), Re || R(!1);
    };
    return h(), window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, [c, Ee]);
  const Oe = async () => {
    const h = V.trim() || (r == null ? void 0 : r.name) || "";
    if (J(h), S(!1), h && h !== (r == null ? void 0 : r.name)) {
      ae("");
      try {
        await n(h);
      } catch (B) {
        J((r == null ? void 0 : r.name) ?? ""), ae(B instanceof Error ? B.message : "项目名称更新失败");
      }
    }
  }, Le = async () => {
    const h = re.trim() || (r == null ? void 0 : r.description) || "";
    if (Z(h), Y(!1), h && h !== (r == null ? void 0 : r.description)) {
      ae("");
      try {
        await u(h);
      } catch (B) {
        Z((r == null ? void 0 : r.description) ?? ""), ae(B instanceof Error ? B.message : "项目描述更新失败");
      }
    }
  }, Ve = async () => {
    if (!W.length) return U("请先选择至少一个文件");
    ce(!0), U("");
    try {
      await i(W), H(!1), X([]);
    } catch (h) {
      U(h instanceof Error ? h.message : "文档导入失败");
    } finally {
      ce(!1);
    }
  }, et = async () => {
    if (!(!x || xe)) {
      Pe(!0), se("");
      try {
        await x();
      } catch (h) {
        se(h instanceof Error ? h.message : "项目删除失败"), Pe(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !d && /* @__PURE__ */ e("button", { type: "button", onClick: N, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: T, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: V || (r == null ? void 0 : r.name) || "详情" })
        ] })
      ] }),
      r && (z || x) && /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
        z && /* @__PURE__ */ t("button", { type: "button", onClick: y, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
          /* @__PURE__ */ e(He, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "管理成员" })
        ] }),
        x && /* @__PURE__ */ t("button", { type: "button", onClick: () => {
          se(""), ye(!0);
        }, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-danger transition-colors hover:text-danger-hover", children: [
          /* @__PURE__ */ e(ie, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "删除项目" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: r ? /* @__PURE__ */ t("section", { children: [
      ge ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: V,
          onChange: (h) => J(h.target.value),
          onBlur: () => {
            Oe();
          },
          onKeyDown: (h) => {
            h.key === "Enter" && (h.preventDefault(), Oe()), h.key === "Escape" && (J(r.name), S(!1));
          },
          autoFocus: !0,
          className: "w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative block w-fit max-w-full", children: [
        /* @__PURE__ */ e("h2", { className: "cursor-text text-2xl font-semibold text-primaryText", onClick: () => S(!0), children: V || r.name }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目名称" })
      ] }),
      O ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: re,
          onChange: (h) => Z(h.target.value),
          onBlur: () => {
            Le();
          },
          onKeyDown: (h) => {
            h.key === "Enter" && (h.preventDefault(), Le()), h.key === "Escape" && (Z(r.description), Y(!1));
          },
          autoFocus: !0,
          className: "mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative mt-1 block max-w-[760px]", children: [
        /* @__PURE__ */ e("p", { className: "cursor-text text-sm text-tertiaryText", onClick: () => Y(!0), children: re || r.description }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目描述" })
      ] }),
      me && /* @__PURE__ */ e("div", { role: "alert", className: "mt-2 text-sm text-danger", children: me }),
      /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
        /* @__PURE__ */ e(He, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          l,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => a("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${c === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          s.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => a("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${c === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          o.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(gt, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: _, onChange: (h) => k(h.target.value), placeholder: `搜索${c === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(E, { type: "ghost", size: "small", rounded: "large", icon: c === "documents" ? /* @__PURE__ */ e(oe, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: c === "documents" ? w : m, children: c === "documents" ? "新建" : "发起对话" }),
          c === "documents" && /* @__PURE__ */ t(pe, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              X([]), U(""), H(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(yt, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      c === "documents" && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: Ae, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: I || !L ? void 0 : `${We}px` }, children: Ee.map((h) => /* @__PURE__ */ e("button", { type: "button", onClick: () => P(h), className: `h-7 rounded-full border px-3 text-xs transition-colors ${$ === h ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: h === "all" ? "全部" : h }, h)) }),
        L && /* @__PURE__ */ e("button", { type: "button", onClick: () => R((h) => !h), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: I ? "收起" : "展开" })
      ] }) }),
      c === "documents" ? Be.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: Be.map((h) => /* @__PURE__ */ t("button", { type: "button", onClick: () => C(h.kbNodeId), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: h.title }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: h.summary }),
        h.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: h.tags.map((B) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: B }, `${h.id}-${B}`)) })
      ] }, h.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(ne, { description: "暂无匹配的文档" }) }) : $e.length ? /* @__PURE__ */ e("div", { className: "mt-4 space-y-2", children: $e.map((h) => /* @__PURE__ */ t("button", { type: "button", onClick: () => g(h.id), className: "-ml-2 w-[calc(100%+0.5rem)] rounded-lg px-2 py-3 text-left transition-colors hover:bg-projectConversationHover", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: h.title }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Ye(h.date, h.id) })
      ] }, h.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(ne, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(ne, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: D,
        title: "导入文档",
        width: 500,
        maskClosable: !1,
        cancelText: "取消",
        okText: j ? "导入中…" : "导入",
        onCancel: () => {
          j || (H(!1), X([]), U(""));
        },
        onConfirm: () => {
          Ve();
        },
        okButtonProps: { disabled: j },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(ze, { value: W, accept: v, maxCount: 5, maxSize: b ?? 20 * 1024 * 1024, uploadDescription: f, disabled: j, onChange: X, onError: (h) => U(h.message) }),
          de && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: de })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      F,
      {
        visible: je,
        title: "删除项目",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          xe || (ye(!1), se(""));
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(E, { type: "secondary", size: "medium", disabled: xe, onClick: () => {
            ye(!1), se("");
          }, children: "取消" }),
          /* @__PURE__ */ e(E, { type: "danger", size: "medium", isLoading: xe, onClick: () => {
            et();
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
function Ar({
  visible: r,
  typeOptions: s,
  templates: o,
  loading: l = !1,
  error: d = "",
  defaultKnowledgeType: N,
  defaultTemplateId: T,
  onClose: y,
  onRetry: C,
  onContinue: g
}) {
  var f, z, x;
  const w = N || ((f = s[0]) == null ? void 0 : f.value) || "", m = T || ((z = o.find((c) => c.id === "blank")) == null ? void 0 : z.id) || ((x = o[0]) == null ? void 0 : x.id) || "", [i, n] = p(w), [u, v] = p(m);
  te(() => {
    r && (n(w), v(m));
  }, [m, w, r]);
  const b = A(
    () => o.find((c) => c.id === u) ?? null,
    [u, o]
  );
  return /* @__PURE__ */ e(
    F,
    {
      visible: r,
      title: "新建文档",
      width: 760,
      maskClosable: !1,
      footer: null,
      onCancel: y,
      bodyClassName: "!p-0",
      children: /* @__PURE__ */ t("div", { className: "flex max-h-[min(720px,calc(90vh-64px))] min-h-0 flex-col", children: [
        /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-y-auto px-6 py-5", children: [
          /* @__PURE__ */ t("section", { children: [
            /* @__PURE__ */ t("div", { className: "mb-3", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-primaryText", children: "选择文档类型" }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "文档类型用于项目内分类和后续检索。" })
            ] }),
            /* @__PURE__ */ e("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: s.map((c) => {
              const a = c.value === i;
              return /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: [
                    "rounded-lg border px-3 py-2.5 text-left transition",
                    a ? "border-primary bg-primary-soft" : "border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted"
                  ].join(" "),
                  onClick: () => n(c.value),
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm font-medium text-primaryText", children: c.label }),
                      a && /* @__PURE__ */ e(Ce, { size: 15, className: "shrink-0 text-primary" })
                    ] }),
                    /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText", children: c.description })
                  ]
                },
                c.value
              );
            }) })
          ] }),
          /* @__PURE__ */ t("section", { className: "mt-6 border-t border-lineSoft pt-5", children: [
            /* @__PURE__ */ t("div", { className: "mb-3", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-primaryText", children: "选择模板" }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "模板只提供初始内容，进入编辑器后可以自由修改。" })
            ] }),
            l ? /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "正在加载模板…" }) : d ? /* @__PURE__ */ t("div", { className: "rounded-lg border border-danger bg-danger-soft px-4 py-4", children: [
              /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: d }),
              C && /* @__PURE__ */ e(E, { type: "secondary", size: "small", className: "mt-3", onClick: C, children: "重新加载" })
            ] }) : o.length ? /* @__PURE__ */ e("div", { className: "grid gap-3 sm:grid-cols-2", children: o.map((c) => {
              var _;
              const a = c.id === u;
              return /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: [
                    "rounded-lg border p-3 text-left transition",
                    a ? "border-primary bg-primary-soft" : "border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted"
                  ].join(" "),
                  onClick: () => v(c.id),
                  children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surfaceMuted text-base text-secondaryText", children: c.icon || /* @__PURE__ */ e(Nt, { size: 17 }) }),
                    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: c.name }),
                        c.source === "workspace" && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-primary", children: "自定义" }),
                        a && /* @__PURE__ */ e(Ce, { size: 15, className: "ml-auto shrink-0 text-primary" })
                      ] }),
                      /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText", children: c.description }),
                      (_ = c.structure) != null && _.length ? /* @__PURE__ */ e("div", { className: "mt-2 flex flex-wrap gap-1.5", children: c.structure.slice(0, 3).map((k) => /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-xs text-secondaryText", children: k }, k)) }) : null
                    ] })
                  ] })
                },
                c.id
              );
            }) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无可用模板" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center justify-between gap-4 border-t border-lineSoft px-6 py-4", children: [
          /* @__PURE__ */ e("p", { className: "min-w-0 truncate text-xs text-tertiaryText", children: b ? `已选择：${b.name}` : "请选择一个模板" }),
          /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(E, { type: "secondary", size: "medium", onClick: y, children: "取消" }),
            /* @__PURE__ */ e(
              E,
              {
                type: "primary",
                size: "medium",
                disabled: l || !!d || !i || !u,
                onClick: () => g({ knowledgeType: i, templateId: u }),
                children: "继续编辑"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Er({
  projectName: r,
  document: s,
  isSidebarOpen: o,
  onOpenSidebar: l,
  onBackToProjects: d,
  onBackToProject: N,
  onEdit: T,
  onDelete: y
}) {
  const [C, g] = p(!1), [w, m] = p(!1), [i, n] = p(!1), [u, v] = p(""), b = fe(null);
  te(() => () => {
    b.current !== null && window.clearTimeout(b.current);
  }, []);
  const f = () => {
    g(!0), b.current !== null && window.clearTimeout(b.current), b.current = window.setTimeout(() => g(!1), 700);
  }, z = async () => {
    n(!0), v("");
    try {
      await y(), m(!1);
    } catch (x) {
      v(x instanceof Error ? x.message : "文档删除失败");
    } finally {
      n(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: l, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "shrink-0 text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: N, className: "max-w-56 truncate text-tertiaryText transition-colors hover:text-primaryText", children: r }),
          /* @__PURE__ */ e("span", { className: "shrink-0 text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "truncate font-medium text-primaryText", children: s.title })
        ] })
      ] }),
      s.canEdit && /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(E, { type: "secondary", size: "small", rounded: "large", onClick: () => {
          v(""), m(!0);
        }, children: "删除" }),
        /* @__PURE__ */ e(E, { type: "primary", size: "small", rounded: "large", onClick: T, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0 px-[120px]", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: s.title }),
        /* @__PURE__ */ e(
          at,
          {
            createdByName: s.createdByName,
            updatedByName: s.updatedByName,
            updatedAt: s.updatedAt,
            index: s.index
          }
        ),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: f, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${C ? "is-scrolling" : ""}`, children: [
        s.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${st.preview} px-[120px]`, children: /* @__PURE__ */ e(Qe, { remarkPlugins: [Xe], children: s.markdown }) }) : /* @__PURE__ */ e("div", { className: "mx-[120px] rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(ne, { description: "正文暂无内容" }) }),
        /* @__PURE__ */ e(lt, { attachments: s.attachments })
      ] })
    ] }) }),
    /* @__PURE__ */ t(
      F,
      {
        visible: w,
        title: "删除文档",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          i || m(!1);
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(E, { type: "secondary", size: "medium", disabled: i, onClick: () => m(!1), children: "取消" }),
          /* @__PURE__ */ e(E, { type: "danger", size: "medium", disabled: i, onClick: () => {
            z();
          }, children: i ? "删除中…" : "删除" })
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可恢复，确认删除当前文档吗？" }),
          u && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: u })
        ]
      }
    )
  ] });
}
const Ze = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], hr = [...Ze, { label: "移除", value: "移除" }];
function Br({
  visible: r,
  members: s,
  directory: o,
  onClose: l,
  onInvite: d,
  onChangePermission: N,
  onRemove: T
}) {
  const [y, C] = p([]), [g, w] = p("浏览"), [m, i] = p(""), [n, u] = p(""), v = A(() => {
    const x = new Set(s.map((c) => c.id));
    return o.filter((c) => !x.has(c.id)).map((c) => ({
      label: `${c.name}（${c.email}）`,
      value: c.id,
      searchText: `${c.name} ${c.email}`
    }));
  }, [o, s]), b = () => {
    n || (C([]), w("浏览"), i(""), l());
  }, f = async () => {
    if (!y.length) {
      i("请先选择要邀请的成员");
      return;
    }
    u("invite"), i("");
    try {
      await d(y, g), C([]), w("浏览");
    } catch (x) {
      i(x instanceof Error ? x.message : "邀请成员失败");
    } finally {
      u("");
    }
  }, z = async (x, c) => {
    u(x), i("");
    try {
      c === "移除" ? await T(x) : await N(x, c);
    } catch (a) {
      i(a instanceof Error ? a.message : "成员操作失败");
    } finally {
      u("");
    }
  };
  return /* @__PURE__ */ e(F, { visible: r, title: "管理成员", width: 560, maskClosable: !1, footer: null, onCancel: b, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    /* @__PURE__ */ t("section", { className: "space-y-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "加入新成员" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1", children: [
          /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
            Ne,
            {
              mode: "multiple",
              showSearch: !0,
              variant: "borderless",
              value: y,
              options: v,
              optionFilterProp: "searchText",
              classNames: { popup: { root: "project-invite-member-dropdown" } },
              suffixIcon: null,
              placeholder: "搜索姓名/邮箱并选择成员",
              onChange: (x) => {
                C(x), m && i("");
              },
              disabled: !!n,
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "mx-2 h-5 w-px bg-lineSoft" }),
          /* @__PURE__ */ e(
            Ne,
            {
              variant: "borderless",
              value: g,
              options: Ze,
              onChange: (x) => w(x),
              disabled: !!n,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(E, { type: "primary", size: "medium", disabled: !!n, onClick: () => {
          f();
        }, children: n === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      m && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: m })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: s.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: s.map((x) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: x.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      x.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: x.roleLabel || x.permission }) : /* @__PURE__ */ e(
        Ne,
        {
          variant: "borderless",
          value: x.permission,
          options: hr,
          onChange: (c) => {
            z(x.id, String(c));
          },
          disabled: !!n,
          className: "member-permission-action-select w-[84px]",
          classNames: { popup: { root: "project-member-permission-dropdown" } },
          getPopupContainer: () => document.body
        }
      )
    ] }, x.id)) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText", children: "暂无成员" }) })
  ] }) });
}
const pr = (r) => r.find((s) => s.status !== "实验结束") ?? r[0] ?? null;
function $r({
  project: r,
  experiment: s,
  isSidebarOpen: o,
  onOpenSidebar: l,
  onBackToProjects: d,
  onBackToProject: N,
  onDelete: T,
  onEdit: y
}) {
  const [C, g] = p(!1), [w, m] = p(!1), i = fe(null), n = A(
    () => s ? pr(s.timeline) : null,
    [s]
  ), u = (n == null ? void 0 : n.actor) || (s == null ? void 0 : s.ownerName) || "未知成员";
  te(() => () => {
    i.current !== null && window.clearTimeout(i.current);
  }, []);
  const v = () => {
    g(!0), i.current !== null && window.clearTimeout(i.current), i.current = window.setTimeout(() => g(!1), 700);
  }, b = () => {
    m(!1), T();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: l, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: N, disabled: !r, className: `transition-colors ${r ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (r == null ? void 0 : r.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (s == null ? void 0 : s.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(E, { type: "secondary", size: "small", rounded: "large", onClick: () => m(!0), children: "删除" }),
        /* @__PURE__ */ e(E, { type: "primary", size: "small", rounded: "large", onClick: y, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: !r || !s ? /* @__PURE__ */ e("div", { className: "w-full rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(ne, { description: "实验不存在或已被删除" }) }) : /* @__PURE__ */ t(pe, { children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: (n == null ? void 0 : n.detailTitle) ?? s.title }),
        /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between gap-4", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "创建人: ",
            u
          ] }),
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            u
          ] }),
          /* @__PURE__ */ e("span", { children: (n == null ? void 0 : n.updatedAt) ?? s.updatedAt })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: v, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${C ? "is-scrolling" : ""}`, children: [
        n != null && n.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(Qe, { remarkPlugins: [Xe], children: n.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((n == null ? void 0 : n.detailSections) ?? []).map((f) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: f.title }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: f.content })
        ] }, f.title)) }),
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
          /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: ((n == null ? void 0 : n.attachments) ?? []).map((f) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: f }, f)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(F, { visible: w, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => m(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(E, { type: "secondary", size: "medium", onClick: () => m(!1), children: "取消" }),
      /* @__PURE__ */ e(E, { type: "danger", size: "medium", onClick: b, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function qe({ label: r, description: s, children: o }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: r }),
      s && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: s })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: o })
  ] });
}
function Or({
  isSidebarOpen: r,
  avatarText: s = "研",
  avatarUrl: o,
  avatarUploading: l = !1,
  actionError: d,
  onOpenSidebar: N,
  onChangePassword: T,
  onChangeAvatar: y
}) {
  const [C, g] = p(!1), [w, m] = p(""), [i, n] = p(""), [u, v] = p(""), [b, f] = p(!1), [z, x] = p(""), [c, a] = p(""), [_, k] = p(""), $ = fe(null), P = u.length > 0 && i !== u, I = i.length > 0 && i.trim().length < 6, R = !!(w.trim() && i.trim() && u.trim() && !I && !P && !b), L = () => {
    b || (g(!1), m(""), n(""), v(""), x(""), a(""), k(""));
  }, M = async () => {
    if (R) {
      f(!0), x(""), a(""), k("");
      try {
        const D = await (T == null ? void 0 : T({ currentPassword: w.trim(), newPassword: i.trim() }));
        if (D && !D.ok) {
          D.field === "currentPassword" ? a(D.message) : D.field === "newPassword" ? k(D.message) : x(D.message);
          return;
        }
        g(!1), m(""), n(""), v("");
      } catch (D) {
        x(D instanceof Error ? D.message : "密码修改失败");
      } finally {
        f(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: N, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "更多设置" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[720px] py-0", children: /* @__PURE__ */ e("div", { className: "space-y-6", children: /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("h3", { className: "mb-2 mt-4 text-base font-semibold text-primaryText", children: "账户" }),
      /* @__PURE__ */ t("div", { className: "rounded-lg bg-surface", children: [
        /* @__PURE__ */ e(qe, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(E, { type: "secondary", size: "small", rounded: "large", onClick: () => g(!0), children: "修改" }) }),
        /* @__PURE__ */ e(qe, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: o ? /* @__PURE__ */ e("img", { src: o, alt: "当前头像", className: "h-full w-full object-cover" }) : s }),
          /* @__PURE__ */ e(
            E,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: l,
              disabled: l,
              onClick: () => {
                var D;
                return (D = $.current) == null ? void 0 : D.click();
              },
              children: l ? "上传中" : "上传"
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
            onChange: async (D) => {
              var W;
              const H = (W = D.target.files) == null ? void 0 : W[0];
              if (D.target.value = "", !(!H || l))
                try {
                  await (y == null ? void 0 : y(H));
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
        visible: C,
        title: "修改密码",
        onClose: L,
        onCancel: L,
        onConfirm: () => {
          M();
        },
        cancelText: "取消",
        okText: b ? "保存中…" : "保存",
        okButtonProps: { disabled: !R },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(
            le,
            {
              label: "当前密码",
              type: "password",
              value: w,
              onChange: (D) => {
                m(D.target.value), a(""), x("");
              },
              placeholder: "请输入当前密码",
              size: "medium",
              error: !!c,
              helperText: c || void 0,
              disabled: b
            }
          ),
          /* @__PURE__ */ e(
            le,
            {
              label: "新密码",
              type: "password",
              value: i,
              onChange: (D) => {
                n(D.target.value), k(""), x("");
              },
              placeholder: "请输入新密码",
              size: "medium",
              error: !!_ || I,
              helperText: _ || (I ? "新密码至少需要 6 位" : void 0),
              disabled: b
            }
          ),
          /* @__PURE__ */ e(
            le,
            {
              label: "确认新密码",
              type: "password",
              value: u,
              onChange: (D) => v(D.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: P,
              helperText: P ? "两次输入的新密码不一致" : void 0,
              disabled: b
            }
          ),
          z && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: z })
        ] })
      }
    )
  ] });
}
function Lr({ onOpenAiUsage: r, onOpenMembers: s, onLogout: o }) {
  return /* @__PURE__ */ t("div", { className: "mx-auto max-w-2xl p-8", children: [
    /* @__PURE__ */ e("h1", { className: "mb-8 text-3xl font-bold", children: "⚙️ 系统设置" }),
    /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: r, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "AI用量统计" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "项目成员管理" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft", children: "退出登录" })
    ] })
  ] });
}
const Te = (r) => new Intl.NumberFormat("en-US").format(Math.round(r));
function ur({ points: r, labels: s, totalAmount: o }) {
  const [g, w] = p(null), m = A(() => Math.max(...r, 1), [r]), i = A(() => r.length <= 10 ? 1 : Math.ceil(r.length / 6), [r.length]), n = A(() => r.length <= 1 ? 0 : Math.min(6, 928 / r.length / 2.5), [928, r.length]), u = A(() => r.length === 0 ? 0 : Math.max(3, (928 - (r.length - 1) * n) / r.length), [n, 928, r.length]), v = (b) => b >= 1e4 ? `${(b / 1e4).toFixed(1)}万` : Te(b);
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-primaryText", children: "月度用量" }),
      /* @__PURE__ */ t("div", { className: "mt-1 text-xs text-tertiaryText", children: [
        "Token 消耗",
        /* @__PURE__ */ e("span", { className: "ml-1 text-primaryText", children: Te(o) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative h-[190px] w-full", children: [
      /* @__PURE__ */ t("svg", { viewBox: "0 0 1000 190", preserveAspectRatio: "none", className: "h-full w-full", children: [
        [m, 0].map((b) => {
          const f = 156 - b / m * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: f.toFixed(2), y2: f.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: f + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: v(b) })
          ] }, b);
        }),
        r.map((b, f) => {
          const z = b / m * 138, x = 52 + f * (u + n), c = 156 - z, a = s[f] ?? "", _ = f % i === 0 || f === r.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => w(f), onMouseLeave: () => w(null), children: [
            /* @__PURE__ */ e("rect", { x: x.toFixed(2), y: c.toFixed(2), width: u.toFixed(2), height: Math.max(1, z).toFixed(2), rx: "1.5", fill: g === f ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            _ && /* @__PURE__ */ e("text", { x: (x + u / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: a })
          ] }, `${a}-${f}`);
        })
      ] }),
      g !== null && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md", style: { left: `${(52 + g * (u + n) + u / 2) / 1e3 * 100}%` }, children: [
        /* @__PURE__ */ e("div", { className: "text-tertiaryText", children: s[g] }),
        /* @__PURE__ */ t("div", { className: "mt-0.5 font-semibold text-aiUsageBar", children: [
          Te(r[g]),
          " Token"
        ] })
      ] })
    ] })
  ] });
}
function Rr({
  isSidebarOpen: r,
  overviewCards: s,
  memberOptions: o,
  monthOptions: l,
  selectedMember: d,
  selectedMonth: N,
  trendPoints: T,
  trendLabels: y,
  trendTotal: C,
  rechargeRecords: g,
  onOpenSidebar: w,
  onMemberChange: m,
  onMonthChange: i
}) {
  var R, L;
  const [n, u] = p("analysis"), [v, b] = p(!1), [f, z] = p(!1), x = ((R = o.find((M) => M.value === d)) == null ? void 0 : R.label) ?? "全部成员", c = ((L = l.find((M) => M.value === N)) == null ? void 0 : L.label) ?? N, a = A(() => o.map((M) => ({ key: `member-${M.value}`, label: M.label, active: M.value === d })), [o, d]), _ = A(() => l.map((M) => ({ key: `month-${M.value}`, label: M.label, active: M.value === N })), [l, N]), k = ke((M) => {
    m(M.key.replace("member-", "")), b(!1);
  }, [m]), $ = ke((M) => {
    i(M.key.replace("month-", "")), z(!1);
  }, [i]), P = A(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (M) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(M) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (M) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(M) }) }
  ], []), I = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: w, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: s.map((M) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: M.title }),
          M.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(vt, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: M.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: M.value }),
          M.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: M.warningLabel })
        ] }),
        M.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: M.helper })
      ] }) }, M.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        n === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(ee, { open: v, onOpenChange: b, items: a, onItemClick: k, placement: "bottom-start", width: 172, portal: !0, menuClassName: I, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: x }),
            /* @__PURE__ */ e(ue, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${v ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(ee, { open: f, onOpenChange: z, items: _, onItemClick: $, placement: "bottom-start", width: 172, portal: !0, menuClassName: I, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: c }),
            /* @__PURE__ */ e(ue, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${f ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        n === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(ur, { points: T, labels: y, totalAmount: C }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(be, { className: "task-table-scroll min-w-[760px]", columns: P, dataSource: g, rowKey: "id" }) }) })
      ] })
    ] }) })
  ] });
}
function Hr({ isSidebarOpen: r, result: s, onOpenSidebar: o, onBack: l, onRun: d, onReset: N }) {
  const T = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: l, className: `rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${r ? "-ml-2" : ""}`, "aria-label": "返回任务列表", children: /* @__PURE__ */ e(wt, { size: 20 }) }),
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
        /* @__PURE__ */ t("button", { type: "button", onClick: d, className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95", children: [
          /* @__PURE__ */ e(Tt, { size: 16, className: "fill-current" }),
          "运行比对"
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: N, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e(ie, { size: 16 }),
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
  Rr as AiUsagePage,
  Ur as AppShell,
  Kr as AssistantActions,
  ee as BaseActionMenu,
  E as BaseButton,
  Wr as BaseCard,
  ze as BaseDocumentUpload,
  ne as BaseEmpty,
  le as BaseInput,
  F as BaseModal,
  rt as BasePagination,
  Yr as BaseSegmented,
  qr as BaseSelect,
  be as BaseTable,
  Ie as BaseToggle,
  tt as BaseUpload,
  Qr as CHAT_FILE_OPTIONS,
  Xr as CHAT_INPUT_GUIDE_TEXT,
  Jr as CHAT_QUICK_PROMPTS,
  Zr as CHAT_RECENT_FILE_OPTIONS,
  jr as CHAT_SKILL_OPTIONS,
  Vr as ChatComposerDock,
  ea as ChatConversationViewport,
  ta as ChatHomePage,
  ra as ChatPreviewPanel,
  aa as ChatProjectFilesPanel,
  sa as ChatShareControls,
  la as ChatTimelineNavigation,
  na as ChatWorkspaceFrame,
  ia as ChatWorkspaceHeader,
  oa as ChatWorkspaceHeaderAction,
  da as ChatWorkspaceSidePanel,
  $r as ExperimentDetailPage,
  ca as ForgotPasswordPage,
  ma as InputArea,
  sr as LiteratureSubscriptionsTable,
  xa as LoginPage,
  Mr as MemberManagementPage,
  ha as MessageItem,
  pa as MessageList,
  ua as MiraDraftCard,
  Cr as NavigationProvider,
  Dr as ProjectDetailPage,
  lt as ProjectDocumentAttachments,
  Ar as ProjectDocumentCreateModal,
  ba as ProjectDocumentEditor,
  at as ProjectDocumentMetadata,
  Er as ProjectDocumentPreview,
  Br as ProjectMemberManagementModal,
  Pr as ProjectsPage,
  fa as QuickPrompts,
  ga as RegisterPage,
  Ir as ScheduledTaskDeleteModal,
  zr as ScheduledTaskEditorModal,
  _r as ScheduledTasksOverview,
  Lr as SettingsPage,
  ya as SkillPage,
  Or as SystemSettingsDetailPage,
  Na as ThinkingIndicator,
  Hr as ToolPage,
  nr as buildTaskPromptPreview,
  Ye as formatProjectConversationDate,
  va as insertFileReference,
  wa as insertSkillCommand,
  Ta as resolveAtQuery,
  ka as resolveSlashQuery,
  Sr as useNavigation
};
