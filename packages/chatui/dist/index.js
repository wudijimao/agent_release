import { B as Re, a as re, b as B, c as Ne, d as Ye, e as F, f as ae, g as de } from "./SkillPage-DjrvkSHU.js";
import { A as ga, h as ya, i as Na, j as va, k as wa, C as Ta, l as ka, m as Ca, n as Sa, o as Ma, p as _a, q as za, r as Ia, s as Da, t as Pa, u as Aa, v as Ea, w as La, x as $a, y as Oa, z as Ba, D as Ha, E as Fa, F as Ga, I as Ra, L as Ya, M as Ua, G as Ka, Q as Wa, R as qa, S as Xa, T as Qa, H as Ja, J as Za, K as ja, N as Va } from "./SkillPage-DjrvkSHU.js";
import { jsxs as t, jsx as e, Fragment as ce } from "react/jsx-runtime";
import Ue, { useState as h, useMemo as P, useCallback as ge, useContext as Ke, createContext as We, useEffect as me, useRef as ve } from "react";
import { Inbox as qe, Paperclip as Xe, X as Qe, Pencil as $e, Trash2 as we, HelpCircle as Je, MoreHorizontal as Oe, Menu as K, Plus as se, AlertCircle as Ze, ShieldCheck as je, Folder as Ve, ChevronDown as pe, Users as _e, Search as et, Upload as tt, CircleHelp as at, ArrowLeft as rt, Play as st } from "lucide-react";
import ye from "classnames";
import lt from "react-markdown";
import nt from "remark-gfm";
import { DatePicker as it, Cascader as ot, TimePicker as dt, Radio as ie, Select as ue } from "antd";
import te from "dayjs";
const ct = "_wrapper_g5uno_1", mt = "_uploadContent_g5uno_7", pt = "_uploadIcon_g5uno_17", xt = "_uploadTitle_g5uno_18", ht = "_uploadDescription_g5uno_19", ut = "_fileList_g5uno_20", ft = "_fileItem_g5uno_21", bt = "_fileItemIcon_g5uno_22", gt = "_fileName_g5uno_23", yt = "_fileSize_g5uno_24", Nt = "_removeButton_g5uno_25", H = {
  wrapper: ct,
  uploadContent: mt,
  uploadIcon: pt,
  uploadTitle: xt,
  uploadDescription: ht,
  fileList: ut,
  fileItem: ft,
  fileItemIcon: bt,
  fileName: gt,
  fileSize: yt,
  removeButton: Nt
}, vt = ".pdf,.doc,.docx,.txt,.md,.csv", wt = 20 * 1024 * 1024, ze = 5, Ie = (a, s) => a.name === s.name && a.size === s.size && a.lastModified === s.lastModified && a.type === s.type, Tt = (a) => a < 1024 ? `${a} B` : a < 1024 * 1024 ? `${(a / 1024).toFixed(1)} KB` : `${(a / (1024 * 1024)).toFixed(1)} MB`, Te = Ue.forwardRef(
  ({
    value: a,
    defaultValue: s = [],
    onChange: c,
    onError: n,
    accept: o = vt,
    maxSize: v = wt,
    maxCount: y = ze,
    disabled: k = !1,
    className: S,
    uploadTitle: f = "点击或拖拽文件到此上传",
    uploadDescription: b = `支持单文件或批量上传，单次最多 ${ze} 个，单个文件不超过 20MB`,
    uploadIcon: N
  }, m) => {
    const [l, u] = h(s), M = a !== void 0, i = P(() => (M ? a : l) ?? [], [l, M, a]), p = (x) => {
      M || u(x), c == null || c(x);
    }, C = (x) => {
      const r = [...i];
      if (Array.from(x).forEach((w) => {
        r.some((I) => Ie(I, w)) || r.push(w);
      }), r.length > y) {
        n == null || n(new Error(`最多上传 ${y} 个文件，请删除后再继续添加`));
        return;
      }
      p(r);
    };
    return /* @__PURE__ */ t("div", { className: ye(H.wrapper, S), children: [
      /* @__PURE__ */ e(Re, { ref: m, accept: o, multiple: !0, disabled: k, maxSize: v, maxCount: y, onChange: C, onError: n, children: /* @__PURE__ */ t("div", { className: H.uploadContent, children: [
        N ?? /* @__PURE__ */ e(qe, { size: 30, strokeWidth: 2.2, className: H.uploadIcon }),
        /* @__PURE__ */ e("div", { className: H.uploadTitle, children: f }),
        /* @__PURE__ */ e("div", { className: H.uploadDescription, children: b })
      ] }) }),
      i.length > 0 && /* @__PURE__ */ e("div", { className: H.fileList, children: i.map((x, r) => /* @__PURE__ */ t("div", { className: H.fileItem, children: [
        /* @__PURE__ */ e(Xe, { size: 14, className: H.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: H.fileName, children: x.name }),
        /* @__PURE__ */ e("span", { className: H.fileSize, children: Tt(x.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => p(i.filter((w) => !Ie(w, x))), className: H.removeButton, "aria-label": `移除文件 ${x.name}`, disabled: k, children: /* @__PURE__ */ e(Qe, { size: 14 }) })
      ] }, `${x.name}-${x.lastModified}-${r}`)) })
    ] });
  }
);
Te.displayName = "BaseDocumentUpload";
const kt = "_toggle_16lvf_1", Ct = "_toggleSmall_16lvf_18", St = "_toggleMedium_16lvf_23", Mt = "_toggleOff_16lvf_28", _t = "_toggleOn_16lvf_32", zt = "_toggleDisabled_16lvf_36", It = "_thumb_16lvf_41", Dt = "_thumbSmall_16lvf_49", Pt = "_thumbMedium_16lvf_54", At = "_thumbOffSmall_16lvf_59", Et = "_thumbOffMedium_16lvf_60", Lt = "_thumbOnSmall_16lvf_64", $t = "_thumbOnMedium_16lvf_68", Y = {
  toggle: kt,
  toggleSmall: Ct,
  toggleMedium: St,
  toggleOff: Mt,
  toggleOn: _t,
  toggleDisabled: zt,
  thumb: It,
  thumbSmall: Dt,
  thumbMedium: Pt,
  thumbOffSmall: At,
  thumbOffMedium: Et,
  thumbOnSmall: Lt,
  thumbOnMedium: $t
}, Be = ({
  checked: a,
  defaultChecked: s = !1,
  size: c = "medium",
  disabled: n = !1,
  onChange: o,
  className: v,
  ...y
}) => {
  const [k, S] = h(s), f = a !== void 0, b = f ? a : k, N = `${c.charAt(0).toUpperCase()}${c.slice(1)}`, m = ge(() => {
    if (n) return;
    const M = !b;
    f || S(M), o == null || o(M);
  }, [n, b, f, o]), l = P(
    () => ye(
      Y.toggle,
      Y[`toggle${N}`],
      b ? Y.toggleOn : Y.toggleOff,
      n && Y.toggleDisabled,
      v
    ),
    [v, n, b, N]
  ), u = P(
    () => ye(
      Y.thumb,
      Y[`thumb${N}`],
      Y[`thumb${b ? "On" : "Off"}${N}`]
    ),
    [b, N]
  );
  return /* @__PURE__ */ e(
    "button",
    {
      ...y,
      type: "button",
      role: "switch",
      "aria-checked": b,
      className: l,
      onClick: m,
      disabled: n,
      children: /* @__PURE__ */ e("span", { className: u })
    }
  );
};
Be.displayName = "BaseToggle";
const He = We(null);
function aa({
  adapter: a,
  children: s
}) {
  return /* @__PURE__ */ e(He.Provider, { value: a, children: s });
}
function ra() {
  const a = Ke(He);
  if (!a)
    throw new Error("useNavigation must be used within NavigationProvider");
  return a;
}
function sa({
  labName: a,
  members: s,
  inviteCode: c,
  isSidebarOpen: n,
  loading: o = !1,
  error: v,
  actionError: y,
  canManage: k = !1,
  onOpenSidebar: S,
  onRetry: f,
  onRegenerateInvite: b,
  onUpdateRole: N,
  onRemoveMember: m
}) {
  const [l, u] = h(!1), [M, i] = h(!1), [p, C] = h(!1), [x, r] = h(!1), [w, I] = h(null), [_, $] = h("成员"), [z, E] = h(null), [O, G] = h(null), [T, q] = h(1), [L, X] = h(10), V = s.filter((g) => g.role === "管理员").length, Q = P(() => {
    const g = (T - 1) * L;
    return s.slice(g, g + L);
  }, [T, s, L]), R = P(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e($e, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(we, { size: 14 }), danger: !0 }
    ],
    []
  );
  me(() => {
    const g = Math.max(1, Math.ceil(s.length / L));
    T > g && q(g);
  }, [T, s.length, L]);
  const ee = (g) => {
    I(g), $(g.role), C(!0);
  }, W = (g) => {
    I(g), r(!0);
  }, xe = async () => {
    if (c) {
      try {
        await navigator.clipboard.writeText(c);
      } catch {
        const g = document.createElement("textarea");
        g.value = c, g.style.position = "fixed", g.style.opacity = "0", document.body.appendChild(g), g.focus(), g.select(), document.execCommand("copy"), document.body.removeChild(g);
      }
      i(!0), window.setTimeout(() => i(!1), 1500);
    }
  }, J = async () => {
    E("invite");
    try {
      await b(), i(!1);
    } finally {
      E(null);
    }
  }, he = async () => {
    if (w) {
      E("edit");
      try {
        await N(w.id, _), C(!1);
      } finally {
        E(null);
      }
    }
  }, Z = async () => {
    if (w) {
      E("remove");
      try {
        await m(w.id), r(!1);
      } finally {
        E(null);
      }
    }
  }, le = P(
    () => [
      {
        title: "姓名",
        dataIndex: "name",
        width: "25%",
        render: (g, A) => /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center pr-2", children: [
          /* @__PURE__ */ e("div", { className: "mr-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lineSubtle bg-bgLight text-[11px] font-medium text-secondaryText", children: A.avatarUrl ? /* @__PURE__ */ e("img", { className: "h-full w-full object-cover", src: A.avatarUrl, alt: "" }) : A.name.slice(0, 2) }),
          /* @__PURE__ */ t("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "truncate font-medium text-primaryText", children: A.name }),
            /* @__PURE__ */ e("p", { className: "mt-0.5 truncate text-[13px] text-secondaryText", children: A.email })
          ] })
        ] })
      },
      {
        title: /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
          "团队角色",
          /* @__PURE__ */ e("span", { className: "text-mutedText", title: "管理员可管理成员和实验室设置；成员可使用工作区。", children: /* @__PURE__ */ e(Je, { size: 14 }) })
        ] }),
        dataIndex: "role",
        width: "16%"
      },
      {
        title: "加入时间",
        dataIndex: "joinedAt",
        width: "18%",
        render: (g) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(g) })
      },
      {
        title: "归属项目",
        dataIndex: "projectsLabel",
        width: "31%",
        render: (g) => /* @__PURE__ */ e("span", { className: "block truncate text-secondaryText", title: String(g || "暂未提供"), children: String(g || "暂未提供") })
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "10%",
        render: (g, A) => A.canManage ? /* @__PURE__ */ e(
          re,
          {
            open: O === A.id,
            onOpenChange: (j) => G(j ? A.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Oe, { size: 16 }) }),
            items: R,
            onItemClick: (j, ne) => {
              ne.stopPropagation(), G(null), j.key === "edit" ? ee(A) : W(A);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [O, R]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !n && /* @__PURE__ */ e("button", { type: "button", onClick: S, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "成员管理" })
        ] })
      ] }),
      k && /* @__PURE__ */ e(B, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(se, { size: 14 }), className: "shrink-0", onClick: () => u(!0), children: "邀请新成员" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-primaryText md:text-2xl", children: a || "实验室成员" }),
        /* @__PURE__ */ t("span", { className: "shrink-0 rounded-full bg-surfaceMuted px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
          "共",
          s.length,
          "人"
        ] })
      ] }),
      v && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: v }),
        f && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: f, children: "重新加载" })
      ] }),
      !v && V < 2 && !o && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
        /* @__PURE__ */ e(Ze, { size: 16, className: "shrink-0" }),
        /* @__PURE__ */ t("span", { children: [
          "当前管理员",
          V,
          "名，建议至少保留2名管理员，避免团队配置和成员管理只有单点负责人"
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          Ne,
          {
            className: "task-table-scroll w-full [&_table]:min-w-[860px] [&_thead_th]:py-2 [&_thead_th]:text-[13px] [&_tbody_td]:py-2.5 [&_tbody_td]:text-[13px]",
            columns: le,
            dataSource: Q,
            rowKey: "id",
            striped: !1,
            loading: o
          }
        ),
        /* @__PURE__ */ e(
          Ye,
          {
            current: T,
            total: s.length,
            pageSize: L,
            onChange: q,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (g, A) => {
              X(A), q(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(je, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: l, title: "邀请新成员", width: 360, onCancel: () => u(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (c || "------").split("").map((g, A) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: g }, `${g}-${A}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      y && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: y }),
      /* @__PURE__ */ e(B, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: xe, disabled: !c, children: M ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: z === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: z === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(F, { visible: p && !!w, title: "编辑成员信息", width: 560, maskClosable: !1, cancelText: "取消", okText: "保存修改", confirmLoading: z === "edit", onCancel: () => C(!1), onConfirm: he, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((g) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: g, checked: _ === g, onChange: () => $(g), className: "h-4 w-4 accent-primary" }),
          g
        ] }, g)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-mutedText", children: "项目归属接口暂未开放" })
      ] }),
      y && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: y })
    ] }) }),
    /* @__PURE__ */ t(F, { visible: x && !!w, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: z === "remove", onCancel: () => r(!1), onConfirm: Z, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
      w && /* @__PURE__ */ t("p", { className: "text-sm text-secondaryText", children: [
        "您正在将成员 ",
        /* @__PURE__ */ t("span", { className: "font-semibold text-primaryText", children: [
          w.name,
          " (",
          w.email,
          ")"
        ] }),
        " 移出该科研团队，此操作执行后无法撤销。"
      ] }),
      y && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: y })
    ] })
  ] });
}
const fe = 30, Ot = 3;
function Bt(a) {
  const s = Array.from(a ?? ""), c = fe * Ot, n = s.length > c ? [...s.slice(0, Math.max(c - 3, 0)), ".", ".", "."] : s, o = [];
  for (let v = 0; v < n.length; v += fe)
    o.push(n.slice(v, v + fe).join(""));
  return o.join(`
`);
}
function la({
  templates: a,
  tasks: s,
  isSidebarOpen: c,
  loading: n = !1,
  error: o,
  pendingTaskId: v,
  onOpenSidebar: y,
  onCreateCustom: k,
  onCreateFromTemplate: S,
  onToggleTask: f,
  onEditTask: b,
  onDeleteTask: N,
  onRetry: m
}) {
  const [l, u] = h(null), M = P(
    () => [
      {
        title: "任务名称",
        dataIndex: "name",
        width: "20%",
        render: (i) => /* @__PURE__ */ e("span", { className: "truncate text-primaryText", children: String(i) })
      },
      {
        title: "任务内容",
        dataIndex: "prompt",
        width: "40%",
        render: (i) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: Bt(String(i ?? "")) })
      },
      {
        title: "下次运行",
        dataIndex: "nextRun",
        width: "14%",
        render: (i) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(i) })
      },
      {
        title: "触发方式",
        dataIndex: "trigger",
        width: "16%",
        render: (i) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(i) })
      },
      {
        title: "状态",
        dataIndex: "isEnabled",
        width: "7%",
        render: (i, p) => /* @__PURE__ */ e(
          Be,
          {
            size: "small",
            checked: p.isEnabled,
            disabled: p.isToggleDisabled || v === p.id,
            onChange: () => f(p.id),
            "aria-label": p.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "3%",
        align: "right",
        render: (i, p) => {
          const C = [
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e($e, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(we, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            re,
            {
              open: l === p.id,
              onOpenChange: (x) => u(x ? p.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Oe, { size: 16 }) }),
              items: C,
              onItemClick: (x) => {
                u(null), x.key === "edit" ? b(p.id) : N(p.id);
              }
            }
          );
        }
      }
    ],
    [l, N, b, f, v]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(B, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(se, { size: 14 }), className: "shrink-0", onClick: k, children: "新建任务" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-10", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "定时任务" }),
        /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3", children: a.map((i) => /* @__PURE__ */ t("button", { type: "button", onClick: () => S(i.id), className: "flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-[17px] font-medium text-primaryText", children: i.name }),
          /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText", children: i.description })
        ] }, i.id)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "已设置任务" }),
        o && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: o }),
          m && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: m, children: "重新加载" })
        ] }),
        /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(Ne, { className: "task-table-scroll w-full [&_table]:min-w-[940px]", columns: M, dataSource: s, rowKey: "id", striped: !1, loading: n }) })
      ] })
    ] }) })
  ] });
}
const { RangePicker: De } = it, Ht = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" },
  { value: "hourly", label: "每小时" }
], Pe = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, Ft = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], Gt = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([a, s]) => ({ value: a, label: s })), Rt = [
  { value: "none", label: "不重复" },
  { value: "weekly", label: "每周", children: Gt },
  { value: "monthly", label: "每月", children: Array.from({ length: 31 }, (a, s) => ({ value: String(s + 1), label: `${s + 1}号` })) },
  { value: "hourly", label: "每小时" }
];
function na({
  visible: a,
  kind: s,
  editing: c = !1,
  literatureValue: n,
  scheduleValue: o,
  projects: v = [],
  onLiteratureChange: y,
  onScheduleChange: k,
  onCancel: S,
  onConfirm: f,
  onCreateProject: b
}) {
  const [N, m] = h(!1), l = s === "literature", u = v.find((r) => r.id === o.projectId) ?? null, M = l ? c ? "修改文献订阅任务" : "设置文献订阅任务" : c ? "修改定时任务" : "新建定时任务", i = o.repeatMode === "weekly" || o.repeatMode === "monthly" ? [o.repeatMode, o.repeatSubValue || (o.repeatMode === "weekly" ? "mon" : "1")] : [o.repeatMode], p = P(() => [
    { key: "none", label: "不选择项目", active: !u },
    ...v.map((r) => ({ key: r.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: r.name }), active: (u == null ? void 0 : u.id) === r.id }))
  ], [v, u]), C = P(() => b ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(se, { size: 16 }) }] : [], [b]), x = (r) => {
    if (m(!1), r.key === "create") return b == null ? void 0 : b();
    k({ ...o, projectId: r.key === "none" ? null : r.key });
  };
  return /* @__PURE__ */ e(
    F,
    {
      visible: a,
      title: M,
      width: 600,
      className: "tools-task-modal",
      okText: c ? "保存修改" : "创建任务",
      cancelText: "取消",
      onCancel: S,
      onConfirm: f,
      okButtonProps: { disabled: !n.topic.trim() || (l ? !n.keywords.trim() : !o.taskPrompt.trim()) },
      children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务名称" }),
          /* @__PURE__ */ e(
            ae,
            {
              value: n.topic,
              onChange: (r) => y({ ...n, topic: r.target.value }),
              placeholder: "请输入任务名称",
              size: "medium",
              containerClassName: "!px-3.5"
            }
          )
        ] }),
        l ? /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "抓取频率" }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(
                "select",
                {
                  value: n.frequency,
                  onChange: (r) => y({ ...n, frequency: r.target.value }),
                  className: "h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary",
                  children: Ht.map((r) => /* @__PURE__ */ e("option", { value: r.value, children: r.label }, r.value))
                }
              ),
              /* @__PURE__ */ e(pe, { size: 16, className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
            /* @__PURE__ */ e(
              De,
              {
                format: "YYYY-MM-DD",
                className: "task-period-picker w-full",
                classNames: { popup: { root: "task-period-picker-popup" } },
                value: [n.periodStart ? te(n.periodStart, "YYYY-MM-DD") : null, n.periodEnd ? te(n.periodEnd, "YYYY-MM-DD") : null],
                onChange: (r, [w, I]) => y({ ...n, periodStart: w, periodEnd: I }),
                placeholder: ["开始日期", "结束日期"],
                allowClear: !1
              }
            )
          ] })
        ] }) : /* @__PURE__ */ t(ce, { children: [
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
              /* @__PURE__ */ e(
                De,
                {
                  format: "YYYY/MM/DD",
                  className: "task-period-picker w-full",
                  classNames: { popup: { root: "task-period-picker-popup" } },
                  value: [o.startDate ? te(o.startDate, "YYYY-MM-DD") : null, o.endDate ? te(o.endDate, "YYYY-MM-DD") : null],
                  onChange: (r, [w, I]) => k({ ...o, startDate: w, endDate: I })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "触发时间" }),
              /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ e(
                  ot,
                  {
                    value: i,
                    options: Rt,
                    className: "task-repeat-cascader w-full",
                    classNames: { popup: { root: "task-repeat-cascader-popup" } },
                    placeholder: "请选择重复方式",
                    onChange: (r) => {
                      const w = String(r[0] ?? "none"), I = r[1] ? String(r[1]) : "";
                      k({ ...o, repeatMode: w, repeatSubValue: w === "weekly" ? I || (o.repeatMode === "weekly" ? o.repeatSubValue : "mon") || "mon" : w === "monthly" ? I || (o.repeatMode === "monthly" ? o.repeatSubValue : "1") || "1" : "" });
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  dt,
                  {
                    value: te(o.runAt, "HH:mm"),
                    format: "HH:mm",
                    minuteStep: 1,
                    allowClear: !1,
                    onChange: (r) => k({ ...o, runAt: r ? r.format("HH:mm") : o.runAt }),
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
                  onChange: (r) => k({ ...o, taskPrompt: r.target.value }),
                  placeholder: "输入任何内容，使用 '/' 选择技能或 '@' 引用资源...",
                  rows: 5,
                  className: "w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-3 z-20", children: /* @__PURE__ */ e(
                re,
                {
                  open: N,
                  onOpenChange: m,
                  placement: "top-start",
                  width: 260,
                  trigger: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight", children: [
                    /* @__PURE__ */ e(Ve, { size: 14 }),
                    /* @__PURE__ */ e("span", { className: "max-w-[140px] truncate", children: (u == null ? void 0 : u.name) ?? "工作项目" }),
                    /* @__PURE__ */ e(pe, { size: 14 })
                  ] }),
                  items: p,
                  onItemClick: x,
                  className: "!inline-flex",
                  listClassName: "max-h-[220px] overflow-y-auto",
                  footerItems: C
                }
              ) })
            ] })
          ] })
        ] }),
        l && /* @__PURE__ */ t(ce, { children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "订阅来源" }),
            /* @__PURE__ */ e(ie.Group, { value: n.sourceType, onChange: (r) => y({ ...n, sourceType: r.target.value }), className: "task-radio-group w-full", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(Pe).map((r) => {
              const w = Pe[r];
              return /* @__PURE__ */ t("label", { className: "flex items-start gap-2.5 rounded-lg border border-borderGray bg-white px-3.5 py-3 hover:border-borderSoft", children: [
                /* @__PURE__ */ e(ie, { value: r, className: "mt-0.5" }),
                /* @__PURE__ */ t("span", { children: [
                  /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: w.label }),
                  /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: w.desc })
                ] })
              ] }, r);
            }) }) }),
            /* @__PURE__ */ e("p", { className: "mt-1.5 text-[13px] text-tertiaryText", children: "当前版本支持 PubMed 和 bioRxiv，单次任务请选择一个来源。" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "关键词" }),
            /* @__PURE__ */ e(
              "input",
              {
                value: n.keywords,
                onChange: (r) => y({ ...n, keywords: r.target.value }),
                placeholder: "例：CRISPR, prime editing, base editor",
                className: "w-full rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "PubMed 匹配方式" }),
            /* @__PURE__ */ e(ie.Group, { value: n.pubmedMatchMode, onChange: (r) => y({ ...n, pubmedMatchMode: r.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: Ft.map((r) => /* @__PURE__ */ e(ie, { value: r.value, children: r.label }, r.value)) }) })
          ] })
        ] })
      ] })
    }
  );
}
function ia({
  visible: a,
  description: s,
  confirmLoading: c = !1,
  onCancel: n,
  onConfirm: o
}) {
  return /* @__PURE__ */ e(
    F,
    {
      visible: a,
      title: "确认删除任务",
      width: 420,
      maskClosable: !1,
      cancelText: "取消",
      okText: "删除",
      confirmLoading: c,
      onCancel: n,
      onConfirm: o,
      okButtonProps: {
        className: "!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover"
      },
      children: /* @__PURE__ */ e("p", { className: "text-sm text-primaryText", children: s })
    }
  );
}
function oa({
  projects: a,
  isSidebarOpen: s,
  loading: c = !1,
  error: n,
  onOpenSidebar: o,
  onOpenProject: v,
  onCreateProject: y,
  onRetry: k
}) {
  const [S, f] = h(!1), [b, N] = h(""), [m, l] = h(""), [u, M] = h([]), [i, p] = h(""), [C, x] = h(!1), r = () => {
    N(""), l(""), M([]), p(""), f(!0);
  }, w = () => {
    C || (f(!1), p(""));
  }, I = async () => {
    const _ = b.trim();
    if (!_) {
      p("请输入项目名称");
      return;
    }
    x(!0), p("");
    try {
      await y({
        name: _,
        description: m.trim(),
        documents: u
      }), f(!1);
    } catch ($) {
      p($ instanceof Error ? $.message : "项目创建失败");
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ e(B, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(se, { size: 14 }), className: "shrink-0", onClick: r, children: "创建新项目" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      n && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: n }),
        k && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: k, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": c, children: [
        a.map((_) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => v(_.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: _.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: _.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  _.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  _.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          _.id
        )),
        !c && !n && a.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: S,
        title: "创建新项目",
        width: 560,
        maskClosable: !1,
        okText: C ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: w,
        onConfirm: () => {
          I();
        },
        okButtonProps: { disabled: C },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "text-sm font-medium text-primaryText", children: [
              "项目名称 ",
              /* @__PURE__ */ e("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ e(
              ae,
              {
                value: b,
                placeholder: "请输入项目名称",
                disabled: C,
                onChange: (_) => {
                  N(_.target.value), i && p("");
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
                onChange: (_) => l(_.target.value),
                placeholder: "请输入项目描述",
                rows: 4,
                disabled: C,
                className: "w-full resize-none rounded-lg border border-borderGray bg-white px-3 py-2 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目文档（选填）" }),
            /* @__PURE__ */ e(
              Te,
              {
                value: u,
                maxCount: 5,
                maxSize: 20 * 1024 * 1024,
                disabled: C,
                onChange: M,
                onError: (_) => p(_.message)
              }
            )
          ] }),
          i && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: i })
        ] })
      }
    )
  ] });
}
const Ae = 84, Yt = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, oe = (a) => String(a).padStart(2, "0"), U = (a) => `${a.getFullYear()}年${oe(a.getMonth() + 1)}月${oe(a.getDate())}日 ${oe(a.getHours())}:${oe(a.getMinutes())}`;
function Ee(a, s, c = /* @__PURE__ */ new Date()) {
  const n = a.trim(), o = (m, l) => {
    const u = l.match(/^(\d{1,2}):(\d{2})$/);
    return u ? (m.setHours(Number(u[1]), Number(u[2]), 0, 0), m) : null;
  };
  if (n === "刚刚") return U(c);
  const v = n.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (v) return U(o(new Date(c), v[1]) ?? c);
  const y = n.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (y) {
    const m = new Date(c);
    return m.setDate(m.getDate() - 1), U(o(m, y[1]) ?? c);
  }
  const k = n.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (k) {
    const m = new Date(c);
    let l = m.getDay() - Yt[k[2]];
    return l < 0 && (l += 7), m.setDate(m.getDate() - l - (k[1] ? 7 : 0)), U(o(m, k[3]) ?? c);
  }
  const S = n.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (S) return U(new Date(Number(S[1]), Number(S[2]) - 1, Number(S[3]), Number(S[4]), Number(S[5])));
  const f = n.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (f) return U(new Date(c.getFullYear(), Number(f[1]) - 1, Number(f[2]), Number(f[3]), Number(f[4])));
  const b = s.match(/^c-(\d{13})$/);
  if (b) {
    const m = new Date(Number(b[1]));
    if (!Number.isNaN(m.getTime())) return U(m);
  }
  const N = new Date(n);
  return U(Number.isNaN(N.getTime()) ? c : N);
}
function da({
  project: a,
  documents: s,
  conversations: c,
  memberCount: n,
  isSidebarOpen: o,
  onOpenSidebar: v,
  onBackToProjects: y,
  onOpenMemberManagement: k,
  onOpenDocument: S,
  onOpenConversation: f,
  onCreateDocument: b,
  onCreateConversation: N,
  onImportDocuments: m,
  onUpdateProjectName: l,
  onUpdateProjectDescription: u,
  showMemberManagement: M = !0
}) {
  const [i, p] = h("documents"), [C, x] = h(""), [r, w] = h("all"), [I, _] = h(!1), [$, z] = h(!1), [E, O] = h(!1), [G, T] = h([]), [q, L] = h(""), [X, V] = h(!1), [Q, R] = h((a == null ? void 0 : a.name) ?? ""), [ee, W] = h((a == null ? void 0 : a.description) ?? ""), [xe, J] = h(!1), [he, Z] = h(!1), [le, g] = h(""), A = ve(null);
  me(() => {
    R((a == null ? void 0 : a.name) ?? ""), W((a == null ? void 0 : a.description) ?? ""), J(!1), Z(!1), g("");
  }, [a]);
  const j = P(() => ["all", ...Array.from(new Set(s.flatMap((d) => d.tags)))], [s]), ne = P(() => {
    const d = C.trim().toLowerCase();
    return s.filter((D) => (r === "all" || D.tags.includes(r)) && (!d || [D.title, D.summary, ...D.tags].join(" ").toLowerCase().includes(d)));
  }, [s, C, r]), ke = P(() => {
    const d = C.trim().toLowerCase();
    return d ? c.filter((D) => [D.title, D.date, Ee(D.date, D.id)].join(" ").toLowerCase().includes(d)) : c;
  }, [c, C]);
  me(() => {
    if (i !== "documents") return;
    const d = () => {
      const D = A.current;
      if (!D) return z(!1);
      const Me = D.scrollHeight > Ae + 1;
      z(Me), Me || _(!1);
    };
    return d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [i, j]);
  const Ce = async () => {
    const d = Q.trim() || (a == null ? void 0 : a.name) || "";
    if (R(d), J(!1), d && d !== (a == null ? void 0 : a.name)) {
      g("");
      try {
        await l(d);
      } catch (D) {
        R((a == null ? void 0 : a.name) ?? ""), g(D instanceof Error ? D.message : "项目名称更新失败");
      }
    }
  }, Se = async () => {
    const d = ee.trim() || (a == null ? void 0 : a.description) || "";
    if (W(d), Z(!1), d && d !== (a == null ? void 0 : a.description)) {
      g("");
      try {
        await u(d);
      } catch (D) {
        W((a == null ? void 0 : a.description) ?? ""), g(D instanceof Error ? D.message : "项目描述更新失败");
      }
    }
  }, Ge = async () => {
    if (!G.length) return L("请先选择至少一个文件");
    V(!0), L("");
    try {
      await m(G), O(!1), T([]);
    } catch (d) {
      L(d instanceof Error ? d.message : "文档导入失败");
    } finally {
      V(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: Q || (a == null ? void 0 : a.name) || "详情" })
        ] })
      ] }),
      a && M && /* @__PURE__ */ t("button", { type: "button", onClick: k, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
        /* @__PURE__ */ e(_e, { size: 15 }),
        /* @__PURE__ */ e("span", { children: "管理成员" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: a ? /* @__PURE__ */ t("section", { children: [
      xe ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: Q,
          onChange: (d) => R(d.target.value),
          onBlur: () => {
            Ce();
          },
          onKeyDown: (d) => {
            d.key === "Enter" && (d.preventDefault(), Ce()), d.key === "Escape" && (R(a.name), J(!1));
          },
          autoFocus: !0,
          className: "w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative block w-fit max-w-full", children: [
        /* @__PURE__ */ e("h2", { className: "cursor-text text-2xl font-semibold text-primaryText", onClick: () => J(!0), children: Q || a.name }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目名称" })
      ] }),
      he ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: ee,
          onChange: (d) => W(d.target.value),
          onBlur: () => {
            Se();
          },
          onKeyDown: (d) => {
            d.key === "Enter" && (d.preventDefault(), Se()), d.key === "Escape" && (W(a.description), Z(!1));
          },
          autoFocus: !0,
          className: "mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative mt-1 block max-w-[760px]", children: [
        /* @__PURE__ */ e("p", { className: "cursor-text text-sm text-tertiaryText", onClick: () => Z(!0), children: ee || a.description }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目描述" })
      ] }),
      le && /* @__PURE__ */ e("div", { role: "alert", className: "mt-2 text-sm text-danger", children: le }),
      /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
        /* @__PURE__ */ e(_e, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          n,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => p("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${i === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          s.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => p("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${i === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          c.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(et, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: C, onChange: (d) => x(d.target.value), placeholder: `搜索${i === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(B, { type: "ghost", size: "small", rounded: "large", icon: i === "documents" ? /* @__PURE__ */ e(se, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: i === "documents" ? b : N, children: i === "documents" ? "新建" : "发起对话" }),
          i === "documents" && /* @__PURE__ */ t(ce, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              T([]), L(""), O(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(tt, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      i === "documents" && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: A, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: I || !$ ? void 0 : `${Ae}px` }, children: j.map((d) => /* @__PURE__ */ e("button", { type: "button", onClick: () => w(d), className: `h-7 rounded-full border px-3 text-xs transition-colors ${r === d ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: d === "all" ? "全部" : d }, d)) }),
        $ && /* @__PURE__ */ e("button", { type: "button", onClick: () => _((d) => !d), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: I ? "收起" : "展开" })
      ] }) }),
      i === "documents" ? ne.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: ne.map((d) => /* @__PURE__ */ t("button", { type: "button", onClick: () => S(d.id), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: d.title }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: d.summary }),
        d.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: d.tags.map((D) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: D }, `${d.id}-${D}`)) })
      ] }, d.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "暂无匹配的文档" }) }) : ke.length ? /* @__PURE__ */ e("div", { className: "mt-4 space-y-2", children: ke.map((d) => /* @__PURE__ */ t("button", { type: "button", onClick: () => f(d.id), className: "-ml-2 w-[calc(100%+0.5rem)] rounded-lg px-2 py-3 text-left transition-colors hover:bg-projectConversationHover", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: d.title }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Ee(d.date, d.id) })
      ] }, d.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      F,
      {
        visible: E,
        title: "导入文档",
        width: 500,
        maskClosable: !1,
        cancelText: "取消",
        okText: X ? "导入中…" : "导入",
        onCancel: () => {
          X || (O(!1), T([]), L(""));
        },
        onConfirm: () => {
          Ge();
        },
        okButtonProps: { disabled: X },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(Te, { value: G, maxCount: 5, maxSize: 20 * 1024 * 1024, disabled: X, onChange: T, onError: (d) => L(d.message) }),
          q && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: q })
        ] })
      }
    )
  ] });
}
const Fe = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], Ut = [...Fe, { label: "移除", value: "移除" }];
function ca({
  visible: a,
  members: s,
  directory: c,
  onClose: n,
  onInvite: o,
  onChangePermission: v,
  onRemove: y
}) {
  const [k, S] = h([]), [f, b] = h("浏览"), [N, m] = h(""), [l, u] = h(""), M = P(() => {
    const x = new Set(s.map((r) => r.id));
    return c.filter((r) => !x.has(r.id)).map((r) => ({
      label: `${r.name}（${r.email}）`,
      value: r.id,
      searchText: `${r.name} ${r.email}`
    }));
  }, [c, s]), i = () => {
    l || (S([]), b("浏览"), m(""), n());
  }, p = async () => {
    if (!k.length) {
      m("请先选择要邀请的成员");
      return;
    }
    u("invite"), m("");
    try {
      await o(k, f), S([]), b("浏览");
    } catch (x) {
      m(x instanceof Error ? x.message : "邀请成员失败");
    } finally {
      u("");
    }
  }, C = async (x, r) => {
    u(x), m("");
    try {
      r === "移除" ? await y(x) : await v(x, r);
    } catch (w) {
      m(w instanceof Error ? w.message : "成员操作失败");
    } finally {
      u("");
    }
  };
  return /* @__PURE__ */ e(F, { visible: a, title: "管理成员", width: 560, maskClosable: !1, footer: null, onCancel: i, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    /* @__PURE__ */ t("section", { className: "space-y-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "加入新成员" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1", children: [
          /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
            ue,
            {
              mode: "multiple",
              showSearch: !0,
              variant: "borderless",
              value: k,
              options: M,
              optionFilterProp: "searchText",
              classNames: { popup: { root: "project-invite-member-dropdown" } },
              suffixIcon: null,
              placeholder: "搜索姓名/邮箱并选择成员",
              onChange: (x) => {
                S(x), N && m("");
              },
              disabled: !!l,
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "mx-2 h-5 w-px bg-lineSoft" }),
          /* @__PURE__ */ e(
            ue,
            {
              variant: "borderless",
              value: f,
              options: Fe,
              onChange: (x) => b(x),
              disabled: !!l,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(B, { type: "primary", size: "medium", disabled: !!l, onClick: () => {
          p();
        }, children: l === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      N && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: N })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: s.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: s.map((x) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: x.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      x.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: x.roleLabel || x.permission }) : /* @__PURE__ */ e(
        ue,
        {
          variant: "borderless",
          value: x.permission,
          options: Ut,
          onChange: (r) => {
            C(x.id, String(r));
          },
          disabled: !!l,
          className: "member-permission-action-select w-[84px]",
          classNames: { popup: { root: "project-member-permission-dropdown" } },
          getPopupContainer: () => document.body
        }
      )
    ] }, x.id)) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText", children: "暂无成员" }) })
  ] }) });
}
const Kt = (a) => a.find((s) => s.status !== "实验结束") ?? a[0] ?? null;
function ma({
  project: a,
  experiment: s,
  isSidebarOpen: c,
  onOpenSidebar: n,
  onBackToProjects: o,
  onBackToProject: v,
  onDelete: y,
  onEdit: k
}) {
  const [S, f] = h(!1), [b, N] = h(!1), m = ve(null), l = P(
    () => s ? Kt(s.timeline) : null,
    [s]
  ), u = (l == null ? void 0 : l.actor) || (s == null ? void 0 : s.ownerName) || "未知成员";
  me(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const M = () => {
    f(!0), m.current !== null && window.clearTimeout(m.current), m.current = window.setTimeout(() => f(!1), 700);
  }, i = () => {
    N(!1), y();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: n, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: v, disabled: !a, className: `transition-colors ${a ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (a == null ? void 0 : a.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (s == null ? void 0 : s.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(B, { type: "secondary", size: "small", rounded: "large", onClick: () => N(!0), children: "删除" }),
        /* @__PURE__ */ e(B, { type: "primary", size: "small", rounded: "large", onClick: k, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: !a || !s ? /* @__PURE__ */ e("div", { className: "w-full rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "实验不存在或已被删除" }) }) : /* @__PURE__ */ t(ce, { children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: (l == null ? void 0 : l.detailTitle) ?? s.title }),
        /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between gap-4", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "创建人: ",
            u
          ] }),
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            u
          ] }),
          /* @__PURE__ */ e("span", { children: (l == null ? void 0 : l.updatedAt) ?? s.updatedAt })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: M, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${S ? "is-scrolling" : ""}`, children: [
        l != null && l.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(lt, { remarkPlugins: [nt], children: l.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((l == null ? void 0 : l.detailSections) ?? []).map((p) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: p.title }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: p.content })
        ] }, p.title)) }),
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
          /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: ((l == null ? void 0 : l.attachments) ?? []).map((p) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: p }, p)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(F, { visible: b, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => N(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(B, { type: "secondary", size: "medium", onClick: () => N(!1), children: "取消" }),
      /* @__PURE__ */ e(B, { type: "danger", size: "medium", onClick: i, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function Le({ label: a, description: s, children: c }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: a }),
      s && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: s })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: c })
  ] });
}
function pa({
  isSidebarOpen: a,
  avatarText: s = "研",
  avatarUrl: c,
  avatarUploading: n = !1,
  actionError: o,
  onOpenSidebar: v,
  onChangePassword: y,
  onChangeAvatar: k
}) {
  const [S, f] = h(!1), [b, N] = h(""), [m, l] = h(""), [u, M] = h(""), [i, p] = h(!1), [C, x] = h(""), r = ve(null), w = u.length > 0 && m !== u, I = !!(b.trim() && m.trim() && u.trim() && !w && !i), _ = () => {
    i || (f(!1), N(""), l(""), M(""), x(""));
  }, $ = async () => {
    if (I) {
      p(!0), x("");
      try {
        await (y == null ? void 0 : y({ currentPassword: b.trim(), newPassword: m.trim() })), f(!1), N(""), l(""), M("");
      } catch (z) {
        x(z instanceof Error ? z.message : "密码修改失败");
      } finally {
        p(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !a && /* @__PURE__ */ e("button", { type: "button", onClick: v, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "更多设置" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[720px] py-0", children: /* @__PURE__ */ e("div", { className: "space-y-6", children: /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("h3", { className: "mb-2 mt-4 text-base font-semibold text-primaryText", children: "账户" }),
      /* @__PURE__ */ t("div", { className: "rounded-lg bg-surface", children: [
        /* @__PURE__ */ e(Le, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(B, { type: "secondary", size: "small", rounded: "large", onClick: () => f(!0), children: "修改" }) }),
        /* @__PURE__ */ e(Le, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: c ? /* @__PURE__ */ e("img", { src: c, alt: "当前头像", className: "h-full w-full object-cover" }) : s }),
          /* @__PURE__ */ e(
            B,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: n,
              disabled: n,
              onClick: () => {
                var z;
                return (z = r.current) == null ? void 0 : z.click();
              },
              children: n ? "上传中" : "上传"
            }
          )
        ] }) }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: r,
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            className: "hidden",
            onChange: async (z) => {
              var O;
              const E = (O = z.target.files) == null ? void 0 : O[0];
              if (z.target.value = "", !(!E || n))
                try {
                  await (k == null ? void 0 : k(E));
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
        visible: S,
        title: "修改密码",
        onClose: _,
        onCancel: _,
        onConfirm: () => {
          $();
        },
        cancelText: "取消",
        okText: i ? "保存中…" : "保存",
        okButtonProps: { disabled: !I },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(ae, { label: "当前密码", type: "password", value: b, onChange: (z) => N(z.target.value), placeholder: "请输入当前密码", size: "medium", disabled: i }),
          /* @__PURE__ */ e(ae, { label: "新密码", type: "password", value: m, onChange: (z) => l(z.target.value), placeholder: "请输入新密码", size: "medium", disabled: i }),
          /* @__PURE__ */ e(
            ae,
            {
              label: "确认新密码",
              type: "password",
              value: u,
              onChange: (z) => M(z.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: w,
              helperText: w ? "两次输入的新密码不一致" : void 0,
              disabled: i
            }
          ),
          C && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: C })
        ] })
      }
    )
  ] });
}
function xa({ onOpenAiUsage: a, onOpenMembers: s, onLogout: c }) {
  return /* @__PURE__ */ t("div", { className: "mx-auto max-w-2xl p-8", children: [
    /* @__PURE__ */ e("h1", { className: "mb-8 text-3xl font-bold", children: "⚙️ 系统设置" }),
    /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: a, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "AI用量统计" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "项目成员管理" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft", children: "退出登录" })
    ] })
  ] });
}
const be = (a) => new Intl.NumberFormat("en-US").format(Math.round(a));
function Wt({ points: a, labels: s, totalAmount: c }) {
  const [f, b] = h(null), N = P(() => Math.max(...a, 1), [a]), m = P(() => a.length <= 10 ? 1 : Math.ceil(a.length / 6), [a.length]), l = P(() => a.length <= 1 ? 0 : Math.min(6, 928 / a.length / 2.5), [928, a.length]), u = P(() => a.length === 0 ? 0 : Math.max(3, (928 - (a.length - 1) * l) / a.length), [l, 928, a.length]), M = (i) => i >= 1e4 ? `￥${(i / 1e4).toFixed(1)}万` : `￥${be(i)}`;
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-primaryText", children: "月度用量" }),
      /* @__PURE__ */ t("div", { className: "mt-1 text-xs text-tertiaryText", children: [
        "消耗金额",
        /* @__PURE__ */ t("span", { className: "ml-1 text-primaryText", children: [
          "￥",
          be(c)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative h-[190px] w-full", children: [
      /* @__PURE__ */ t("svg", { viewBox: "0 0 1000 190", preserveAspectRatio: "none", className: "h-full w-full", children: [
        [N, 0].map((i) => {
          const p = 156 - i / N * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: p.toFixed(2), y2: p.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: p + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: M(i) })
          ] }, i);
        }),
        a.map((i, p) => {
          const C = i / N * 138, x = 52 + p * (u + l), r = 156 - C, w = s[p] ?? "", I = p % m === 0 || p === a.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => b(p), onMouseLeave: () => b(null), children: [
            /* @__PURE__ */ e("rect", { x: x.toFixed(2), y: r.toFixed(2), width: u.toFixed(2), height: Math.max(1, C).toFixed(2), rx: "1.5", fill: f === p ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            I && /* @__PURE__ */ e("text", { x: (x + u / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: w })
          ] }, `${w}-${p}`);
        })
      ] }),
      f !== null && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md", style: { left: `${(52 + f * (u + l) + u / 2) / 1e3 * 100}%` }, children: [
        /* @__PURE__ */ e("div", { className: "text-tertiaryText", children: s[f] }),
        /* @__PURE__ */ t("div", { className: "mt-0.5 font-semibold text-aiUsageBar", children: [
          "￥",
          be(a[f])
        ] })
      ] })
    ] })
  ] });
}
function ha({
  isSidebarOpen: a,
  overviewCards: s,
  memberOptions: c,
  monthOptions: n,
  selectedMember: o,
  selectedMonth: v,
  trendPoints: y,
  trendLabels: k,
  trendTotal: S,
  rechargeRecords: f,
  onOpenSidebar: b,
  onMemberChange: N,
  onMonthChange: m
}) {
  var O, G;
  const [l, u] = h("analysis"), [M, i] = h(!1), [p, C] = h(!1), x = ((O = c.find((T) => T.value === o)) == null ? void 0 : O.label) ?? "全部成员", r = ((G = n.find((T) => T.value === v)) == null ? void 0 : G.label) ?? v, w = P(() => c.map((T) => ({ key: `member-${T.value}`, label: T.label, active: T.value === o })), [c, o]), I = P(() => n.map((T) => ({ key: `month-${T.value}`, label: T.label, active: T.value === v })), [n, v]), _ = ge((T) => {
    N(T.key.replace("member-", "")), i(!1);
  }, [N]), $ = ge((T) => {
    m(T.key.replace("month-", "")), C(!1);
  }, [m]), z = P(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (T) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(T) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (T) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(T) }) }
  ], []), E = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !a && /* @__PURE__ */ e("button", { type: "button", onClick: b, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: s.map((T) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: T.title }),
          T.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(at, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: T.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: T.value }),
          T.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: T.warningLabel })
        ] }),
        T.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: T.helper })
      ] }) }, T.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${l === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${l === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        l === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(re, { open: M, onOpenChange: i, items: w, onItemClick: _, placement: "bottom-start", width: 172, portal: !0, menuClassName: E, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: x }),
            /* @__PURE__ */ e(pe, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${M ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(re, { open: p, onOpenChange: C, items: I, onItemClick: $, placement: "bottom-start", width: 172, portal: !0, menuClassName: E, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: r }),
            /* @__PURE__ */ e(pe, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${p ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        l === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(Wt, { points: y, labels: k, totalAmount: S }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(Ne, { className: "task-table-scroll min-w-[760px]", columns: z, dataSource: f, rowKey: "id" }) }) })
      ] })
    ] }) })
  ] });
}
function ua({ isSidebarOpen: a, result: s, onOpenSidebar: c, onBack: n, onRun: o, onReset: v }) {
  const y = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !a && /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(K, { size: 20 }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: n, className: `rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${a ? "-ml-2" : ""}`, "aria-label": "返回任务列表", children: /* @__PURE__ */ e(rt, { size: 20 }) }),
      /* @__PURE__ */ e("h1", { className: "text-3xl font-normal text-primaryText", children: "序列比对助手" })
    ] }),
    /* @__PURE__ */ e("p", { className: "mb-10 ml-10 text-base text-secondaryText", children: "快速进行 DNA/RNA 序列比对与同源性分析" }),
    /* @__PURE__ */ t("div", { className: "space-y-6 rounded-2xl border border-borderGray p-8", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 1" }),
        /* @__PURE__ */ e("textarea", { className: y, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 2" }),
        /* @__PURE__ */ e("textarea", { className: y, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex gap-4 pt-2", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: o, className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95", children: [
          /* @__PURE__ */ e(st, { size: 16, className: "fill-current" }),
          "运行比对"
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: v, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e(we, { size: 16 }),
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
  ha as AiUsagePage,
  ga as AppShell,
  ya as AssistantActions,
  re as BaseActionMenu,
  B as BaseButton,
  Na as BaseCard,
  Te as BaseDocumentUpload,
  de as BaseEmpty,
  ae as BaseInput,
  F as BaseModal,
  Ye as BasePagination,
  va as BaseSegmented,
  wa as BaseSelect,
  Ne as BaseTable,
  Be as BaseToggle,
  Re as BaseUpload,
  Ta as CHAT_FILE_OPTIONS,
  ka as CHAT_INPUT_GUIDE_TEXT,
  Ca as CHAT_QUICK_PROMPTS,
  Sa as CHAT_RECENT_FILE_OPTIONS,
  Ma as CHAT_SKILL_OPTIONS,
  _a as ChatAttachmentManager,
  za as ChatAttachmentManagerTrigger,
  Ia as ChatComposerDock,
  Da as ChatConversationViewport,
  Pa as ChatHomePage,
  Aa as ChatPreviewPanel,
  Ea as ChatProjectFilesPanel,
  La as ChatShareControls,
  $a as ChatTimelineNavigation,
  Oa as ChatWorkspaceFrame,
  Ba as ChatWorkspaceHeader,
  Ha as ChatWorkspaceHeaderAction,
  Fa as ChatWorkspaceSidePanel,
  ma as ExperimentDetailPage,
  Ga as ForgotPasswordPage,
  Ra as InputArea,
  Ya as LoginPage,
  sa as MemberManagementPage,
  Ua as MessageItem,
  Ka as MessageList,
  aa as NavigationProvider,
  da as ProjectDetailPage,
  ca as ProjectMemberManagementModal,
  oa as ProjectsPage,
  Wa as QuickPrompts,
  qa as RegisterPage,
  ia as ScheduledTaskDeleteModal,
  na as ScheduledTaskEditorModal,
  la as ScheduledTasksOverview,
  xa as SettingsPage,
  Xa as SkillPage,
  pa as SystemSettingsDetailPage,
  Qa as ThinkingIndicator,
  ua as ToolPage,
  Bt as buildTaskPromptPreview,
  Ee as formatProjectConversationDate,
  Ja as insertFileReference,
  Za as insertSkillCommand,
  ja as resolveAtQuery,
  Va as resolveSlashQuery,
  ra as useNavigation
};
