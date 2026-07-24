import { B as Ge, a as re, b as H, c as Ne, d as Ye, e as G, f as ae, g as de } from "./SkillPage-DDq17yuq.js";
import { A as wa, h as Ta, i as ka, j as Ca, k as Sa, C as _a, l as Ma, m as za, n as Ia, o as Pa, p as Da, q as Aa, r as Ea, s as Oa, t as La, u as $a, v as Ba, w as Ra, x as Ha, y as Fa, z as Ga, F as Ya, I as Ua, L as Wa, M as Ka, D as qa, Q as Xa, R as Qa, S as Ja, T as Za, E as ja, G as Va, H as er, J as tr } from "./SkillPage-DDq17yuq.js";
import { jsxs as t, jsx as e, Fragment as ce } from "react/jsx-runtime";
import Ue, { useState as h, useMemo as D, useCallback as ge, useContext as We, createContext as Ke, useEffect as me, useRef as ve } from "react";
import { Inbox as qe, Paperclip as Xe, X as Qe, Pencil as Le, Trash2 as we, HelpCircle as Je, MoreHorizontal as $e, Menu as q, Plus as se, AlertCircle as Ze, ShieldCheck as je, Folder as Ve, ChevronDown as pe, Users as Me, Search as et, Upload as tt, CircleHelp as at, ArrowLeft as rt, Play as st } from "lucide-react";
import ye from "classnames";
import lt from "react-markdown";
import nt from "remark-gfm";
import { DatePicker as it, Cascader as ot, TimePicker as dt, Radio as ie, Select as ue } from "antd";
import te from "dayjs";
const ct = "_wrapper_g5uno_1", mt = "_uploadContent_g5uno_7", pt = "_uploadIcon_g5uno_17", xt = "_uploadTitle_g5uno_18", ht = "_uploadDescription_g5uno_19", ut = "_fileList_g5uno_20", ft = "_fileItem_g5uno_21", bt = "_fileItemIcon_g5uno_22", gt = "_fileName_g5uno_23", yt = "_fileSize_g5uno_24", Nt = "_removeButton_g5uno_25", F = {
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
    maxSize: T = wt,
    maxCount: y = ze,
    disabled: k = !1,
    className: S,
    uploadTitle: f = "点击或拖拽文件到此上传",
    uploadDescription: b = `支持单文件或批量上传，单次最多 ${ze} 个，单个文件不超过 20MB`,
    uploadIcon: N
  }, m) => {
    const [l, u] = h(s), _ = a !== void 0, i = D(() => (_ ? a : l) ?? [], [l, _, a]), x = (p) => {
      _ || u(p), c == null || c(p);
    }, C = (p) => {
      const r = [...i];
      if (Array.from(p).forEach((v) => {
        r.some((I) => Ie(I, v)) || r.push(v);
      }), r.length > y) {
        n == null || n(new Error(`最多上传 ${y} 个文件，请删除后再继续添加`));
        return;
      }
      x(r);
    };
    return /* @__PURE__ */ t("div", { className: ye(F.wrapper, S), children: [
      /* @__PURE__ */ e(Ge, { ref: m, accept: o, multiple: !0, disabled: k, maxSize: T, maxCount: y, onChange: C, onError: n, children: /* @__PURE__ */ t("div", { className: F.uploadContent, children: [
        N ?? /* @__PURE__ */ e(qe, { size: 30, strokeWidth: 2.2, className: F.uploadIcon }),
        /* @__PURE__ */ e("div", { className: F.uploadTitle, children: f }),
        /* @__PURE__ */ e("div", { className: F.uploadDescription, children: b })
      ] }) }),
      i.length > 0 && /* @__PURE__ */ e("div", { className: F.fileList, children: i.map((p, r) => /* @__PURE__ */ t("div", { className: F.fileItem, children: [
        /* @__PURE__ */ e(Xe, { size: 14, className: F.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: F.fileName, children: p.name }),
        /* @__PURE__ */ e("span", { className: F.fileSize, children: Tt(p.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => x(i.filter((v) => !Ie(v, p))), className: F.removeButton, "aria-label": `移除文件 ${p.name}`, disabled: k, children: /* @__PURE__ */ e(Qe, { size: 14 }) })
      ] }, `${p.name}-${p.lastModified}-${r}`)) })
    ] });
  }
);
Te.displayName = "BaseDocumentUpload";
const kt = "_toggle_198gd_1", Ct = "_toggleSmall_198gd_18", St = "_toggleRegular_198gd_23", _t = "_toggleMedium_198gd_28", Mt = "_toggleOff_198gd_33", zt = "_toggleOn_198gd_37", It = "_toggleDisabled_198gd_41", Pt = "_thumb_198gd_46", Dt = "_thumbSmall_198gd_54", At = "_thumbRegular_198gd_59", Et = "_thumbMedium_198gd_64", Ot = "_thumbOffSmall_198gd_69", Lt = "_thumbOffRegular_198gd_70", $t = "_thumbOffMedium_198gd_71", Bt = "_thumbOnSmall_198gd_75", Rt = "_thumbOnRegular_198gd_79", Ht = "_thumbOnMedium_198gd_83", W = {
  toggle: kt,
  toggleSmall: Ct,
  toggleRegular: St,
  toggleMedium: _t,
  toggleOff: Mt,
  toggleOn: zt,
  toggleDisabled: It,
  thumb: Pt,
  thumbSmall: Dt,
  thumbRegular: At,
  thumbMedium: Et,
  thumbOffSmall: Ot,
  thumbOffRegular: Lt,
  thumbOffMedium: $t,
  thumbOnSmall: Bt,
  thumbOnRegular: Rt,
  thumbOnMedium: Ht
}, Be = ({
  checked: a,
  defaultChecked: s = !1,
  size: c = "medium",
  disabled: n = !1,
  onChange: o,
  className: T,
  ...y
}) => {
  const [k, S] = h(s), f = a !== void 0, b = f ? a : k, N = `${c.charAt(0).toUpperCase()}${c.slice(1)}`, m = ge(() => {
    if (n) return;
    const _ = !b;
    f || S(_), o == null || o(_);
  }, [n, b, f, o]), l = D(
    () => ye(
      W.toggle,
      W[`toggle${N}`],
      b ? W.toggleOn : W.toggleOff,
      n && W.toggleDisabled,
      T
    ),
    [T, n, b, N]
  ), u = D(
    () => ye(
      W.thumb,
      W[`thumb${N}`],
      W[`thumb${b ? "On" : "Off"}${N}`]
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
const Re = Ke(null);
function na({
  adapter: a,
  children: s
}) {
  return /* @__PURE__ */ e(Re.Provider, { value: a, children: s });
}
function ia() {
  const a = We(Re);
  if (!a)
    throw new Error("useNavigation must be used within NavigationProvider");
  return a;
}
function oa({
  labName: a,
  members: s,
  inviteCode: c,
  isSidebarOpen: n,
  loading: o = !1,
  error: T,
  actionError: y,
  canManage: k = !1,
  onOpenSidebar: S,
  onRetry: f,
  onRegenerateInvite: b,
  onUpdateRole: N,
  onRemoveMember: m
}) {
  const [l, u] = h(!1), [_, i] = h(!1), [x, C] = h(!1), [p, r] = h(!1), [v, I] = h(null), [z, L] = h("成员"), [$, O] = h(null), [B, R] = h(null), [w, M] = h(1), [E, Y] = h(10), V = s.filter((g) => g.role === "管理员").length, Q = D(() => {
    const g = (w - 1) * E;
    return s.slice(g, g + E);
  }, [w, s, E]), U = D(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(Le, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(we, { size: 14 }), danger: !0 }
    ],
    []
  );
  me(() => {
    const g = Math.max(1, Math.ceil(s.length / E));
    w > g && M(g);
  }, [w, s.length, E]);
  const ee = (g) => {
    I(g), L(g.role), C(!0);
  }, X = (g) => {
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
    O("invite");
    try {
      await b(), i(!1);
    } finally {
      O(null);
    }
  }, he = async () => {
    if (v) {
      O("edit");
      try {
        await N(v.id, z), C(!1);
      } finally {
        O(null);
      }
    }
  }, Z = async () => {
    if (v) {
      O("remove");
      try {
        await m(v.id), r(!1);
      } finally {
        O(null);
      }
    }
  }, le = D(
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
            open: B === A.id,
            onOpenChange: (j) => R(j ? A.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e($e, { size: 16 }) }),
            items: U,
            onItemClick: (j, ne) => {
              ne.stopPropagation(), R(null), j.key === "edit" ? ee(A) : X(A);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [B, U]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !n && /* @__PURE__ */ e("button", { type: "button", onClick: S, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "成员管理" })
        ] })
      ] }),
      k && /* @__PURE__ */ e(H, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(se, { size: 14 }), className: "shrink-0", onClick: () => u(!0), children: "邀请新成员" })
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
      T && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: T }),
        f && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: f, children: "重新加载" })
      ] }),
      !T && V < 2 && !o && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
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
            current: w,
            total: s.length,
            pageSize: E,
            onChange: M,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (g, A) => {
              Y(A), M(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(je, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(G, { visible: l, title: "邀请新成员", width: 360, onCancel: () => u(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (c || "------").split("").map((g, A) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: g }, `${g}-${A}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      y && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: y }),
      /* @__PURE__ */ e(H, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: xe, disabled: !c, children: _ ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: $ === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: $ === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(G, { visible: x && !!v, title: "编辑成员信息", width: 560, maskClosable: !1, cancelText: "取消", okText: "保存修改", confirmLoading: $ === "edit", onCancel: () => C(!1), onConfirm: he, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((g) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: g, checked: z === g, onChange: () => L(g), className: "h-4 w-4 accent-primary" }),
          g
        ] }, g)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-mutedText", children: "项目归属接口暂未开放" })
      ] }),
      y && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: y })
    ] }) }),
    /* @__PURE__ */ t(G, { visible: p && !!v, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: $ === "remove", onCancel: () => r(!1), onConfirm: Z, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
      v && /* @__PURE__ */ t("p", { className: "text-sm text-secondaryText", children: [
        "您正在将成员 ",
        /* @__PURE__ */ t("span", { className: "font-semibold text-primaryText", children: [
          v.name,
          " (",
          v.email,
          ")"
        ] }),
        " 移出该科研团队，此操作执行后无法撤销。"
      ] }),
      y && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: y })
    ] })
  ] });
}
const fe = 30, Ft = 3;
function Gt(a) {
  const s = Array.from(a ?? ""), c = fe * Ft, n = s.length > c ? [...s.slice(0, Math.max(c - 3, 0)), ".", ".", "."] : s, o = [];
  for (let T = 0; T < n.length; T += fe)
    o.push(n.slice(T, T + fe).join(""));
  return o.join(`
`);
}
function da({
  templates: a,
  tasks: s,
  isSidebarOpen: c,
  loading: n = !1,
  error: o,
  pendingTaskId: T,
  onOpenSidebar: y,
  onCreateCustom: k,
  onCreateFromTemplate: S,
  onToggleTask: f,
  onEditTask: b,
  onDeleteTask: N,
  onRetry: m
}) {
  const [l, u] = h(null), _ = D(
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
        render: (i) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: Gt(String(i ?? "")) })
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
        render: (i, x) => /* @__PURE__ */ e(
          Be,
          {
            size: "small",
            checked: x.isEnabled,
            disabled: x.isToggleDisabled || T === x.id,
            onChange: () => f(x.id),
            "aria-label": x.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "3%",
        align: "right",
        render: (i, x) => {
          const C = [
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(Le, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(we, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            re,
            {
              open: l === x.id,
              onOpenChange: (p) => u(p ? x.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e($e, { size: 16 }) }),
              items: C,
              onItemClick: (p) => {
                u(null), p.key === "edit" ? b(x.id) : N(x.id);
              }
            }
          );
        }
      }
    ],
    [l, N, b, f, T]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(H, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(se, { size: 14 }), className: "shrink-0", onClick: k, children: "新建任务" })
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
        /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(Ne, { className: "task-table-scroll w-full [&_table]:min-w-[940px]", columns: _, dataSource: s, rowKey: "id", striped: !1, loading: n }) })
      ] })
    ] }) })
  ] });
}
const { RangePicker: Pe } = it, Yt = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" },
  { value: "monthly", label: "每月" }
], De = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, Ut = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], Wt = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([a, s]) => ({ value: a, label: s })), Kt = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周", children: Wt },
  { value: "monthly", label: "每月", children: Array.from({ length: 28 }, (a, s) => ({ value: String(s + 1), label: `${s + 1}号` })) }
];
function ca({
  visible: a,
  kind: s,
  editing: c = !1,
  literatureValue: n,
  scheduleValue: o,
  projects: T = [],
  onLiteratureChange: y,
  onScheduleChange: k,
  onCancel: S,
  onConfirm: f,
  onCreateProject: b
}) {
  const [N, m] = h(!1), l = s === "literature", u = T.find((r) => r.id === o.projectId) ?? null, _ = l ? c ? "修改文献订阅任务" : "设置文献订阅任务" : c ? "修改定时任务" : "新建定时任务", i = o.repeatMode === "weekly" || o.repeatMode === "monthly" ? [o.repeatMode, o.repeatSubValue || (o.repeatMode === "weekly" ? "mon" : "1")] : [o.repeatMode], x = D(() => [
    { key: "none", label: "不选择项目", active: !u },
    ...T.map((r) => ({ key: r.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: r.name }), active: (u == null ? void 0 : u.id) === r.id }))
  ], [T, u]), C = D(() => b ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(se, { size: 16 }) }] : [], [b]), p = (r) => {
    if (m(!1), r.key === "create") return b == null ? void 0 : b();
    k({ ...o, projectId: r.key === "none" ? null : r.key });
  };
  return /* @__PURE__ */ e(
    G,
    {
      visible: a,
      title: _,
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
                  children: Yt.map((r) => /* @__PURE__ */ e("option", { value: r.value, children: r.label }, r.value))
                }
              ),
              /* @__PURE__ */ e(pe, { size: 16, className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
            /* @__PURE__ */ e(
              Pe,
              {
                format: "YYYY-MM-DD",
                className: "task-period-picker w-full",
                classNames: { popup: { root: "task-period-picker-popup" } },
                value: [n.periodStart ? te(n.periodStart, "YYYY-MM-DD") : null, n.periodEnd ? te(n.periodEnd, "YYYY-MM-DD") : null],
                onChange: (r, [v, I]) => y({ ...n, periodStart: v, periodEnd: I }),
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
                Pe,
                {
                  format: "YYYY/MM/DD",
                  className: "task-period-picker w-full",
                  classNames: { popup: { root: "task-period-picker-popup" } },
                  value: [o.startDate ? te(o.startDate, "YYYY-MM-DD") : null, o.endDate ? te(o.endDate, "YYYY-MM-DD") : null],
                  onChange: (r, [v, I]) => k({ ...o, startDate: v, endDate: I })
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
                    options: Kt,
                    className: "task-repeat-cascader w-full",
                    classNames: { popup: { root: "task-repeat-cascader-popup" } },
                    placeholder: "请选择重复方式",
                    onChange: (r) => {
                      const v = String(r[0] ?? "daily"), I = r[1] ? String(r[1]) : "";
                      k({ ...o, repeatMode: v, repeatSubValue: v === "weekly" ? I || (o.repeatMode === "weekly" ? o.repeatSubValue : "mon") || "mon" : v === "monthly" ? I || (o.repeatMode === "monthly" ? o.repeatSubValue : "1") || "1" : "" });
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
                  items: x,
                  onItemClick: p,
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
            /* @__PURE__ */ e(ie.Group, { value: n.sourceType, onChange: (r) => y({ ...n, sourceType: r.target.value }), className: "task-radio-group w-full", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(De).map((r) => {
              const v = De[r];
              return /* @__PURE__ */ t("label", { className: "flex items-start gap-2.5 rounded-lg border border-borderGray bg-white px-3.5 py-3 hover:border-borderSoft", children: [
                /* @__PURE__ */ e(ie, { value: r, className: "mt-0.5" }),
                /* @__PURE__ */ t("span", { children: [
                  /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: v.label }),
                  /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: v.desc })
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
            /* @__PURE__ */ e(ie.Group, { value: n.pubmedMatchMode, onChange: (r) => y({ ...n, pubmedMatchMode: r.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: Ut.map((r) => /* @__PURE__ */ e(ie, { value: r.value, children: r.label }, r.value)) }) })
          ] })
        ] })
      ] })
    }
  );
}
function ma({
  visible: a,
  description: s,
  confirmLoading: c = !1,
  onCancel: n,
  onConfirm: o
}) {
  return /* @__PURE__ */ e(
    G,
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
function pa({
  projects: a,
  isSidebarOpen: s,
  loading: c = !1,
  error: n,
  onOpenSidebar: o,
  onOpenProject: T,
  onCreateProject: y,
  onRetry: k
}) {
  const [S, f] = h(!1), [b, N] = h(""), [m, l] = h(""), [u, _] = h([]), [i, x] = h(""), [C, p] = h(!1), r = () => {
    N(""), l(""), _([]), x(""), f(!0);
  }, v = () => {
    C || (f(!1), x(""));
  }, I = async () => {
    const z = b.trim();
    if (!z) {
      x("请输入项目名称");
      return;
    }
    p(!0), x("");
    try {
      await y({
        name: z,
        description: m.trim(),
        documents: u
      }), f(!1);
    } catch (L) {
      x(L instanceof Error ? L.message : "项目创建失败");
    } finally {
      p(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ e(H, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(se, { size: 14 }), className: "shrink-0", onClick: r, children: "创建新项目" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      n && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: n }),
        k && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: k, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": c, children: [
        a.map((z) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => T(z.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: z.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: z.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  z.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  z.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          z.id
        )),
        !c && !n && a.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      G,
      {
        visible: S,
        title: "创建新项目",
        width: 560,
        maskClosable: !1,
        okText: C ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: v,
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
                onChange: (z) => {
                  N(z.target.value), i && x("");
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
                onChange: (z) => l(z.target.value),
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
                onChange: _,
                onError: (z) => x(z.message)
              }
            )
          ] }),
          i && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: i })
        ] })
      }
    )
  ] });
}
const Ae = 84, qt = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, oe = (a) => String(a).padStart(2, "0"), K = (a) => `${a.getFullYear()}年${oe(a.getMonth() + 1)}月${oe(a.getDate())}日 ${oe(a.getHours())}:${oe(a.getMinutes())}`;
function Ee(a, s, c = /* @__PURE__ */ new Date()) {
  const n = a.trim(), o = (m, l) => {
    const u = l.match(/^(\d{1,2}):(\d{2})$/);
    return u ? (m.setHours(Number(u[1]), Number(u[2]), 0, 0), m) : null;
  };
  if (n === "刚刚") return K(c);
  const T = n.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (T) return K(o(new Date(c), T[1]) ?? c);
  const y = n.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (y) {
    const m = new Date(c);
    return m.setDate(m.getDate() - 1), K(o(m, y[1]) ?? c);
  }
  const k = n.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (k) {
    const m = new Date(c);
    let l = m.getDay() - qt[k[2]];
    return l < 0 && (l += 7), m.setDate(m.getDate() - l - (k[1] ? 7 : 0)), K(o(m, k[3]) ?? c);
  }
  const S = n.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (S) return K(new Date(Number(S[1]), Number(S[2]) - 1, Number(S[3]), Number(S[4]), Number(S[5])));
  const f = n.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (f) return K(new Date(c.getFullYear(), Number(f[1]) - 1, Number(f[2]), Number(f[3]), Number(f[4])));
  const b = s.match(/^c-(\d{13})$/);
  if (b) {
    const m = new Date(Number(b[1]));
    if (!Number.isNaN(m.getTime())) return K(m);
  }
  const N = new Date(n);
  return K(Number.isNaN(N.getTime()) ? c : N);
}
function xa({
  project: a,
  documents: s,
  conversations: c,
  memberCount: n,
  isSidebarOpen: o,
  onOpenSidebar: T,
  onBackToProjects: y,
  onOpenMemberManagement: k,
  onOpenDocument: S,
  onOpenConversation: f,
  onCreateDocument: b,
  onCreateConversation: N,
  onImportDocuments: m,
  onUpdateProjectName: l,
  onUpdateProjectDescription: u,
  showMemberManagement: _ = !0
}) {
  const [i, x] = h("documents"), [C, p] = h(""), [r, v] = h("all"), [I, z] = h(!1), [L, $] = h(!1), [O, B] = h(!1), [R, w] = h([]), [M, E] = h(""), [Y, V] = h(!1), [Q, U] = h((a == null ? void 0 : a.name) ?? ""), [ee, X] = h((a == null ? void 0 : a.description) ?? ""), [xe, J] = h(!1), [he, Z] = h(!1), [le, g] = h(""), A = ve(null);
  me(() => {
    U((a == null ? void 0 : a.name) ?? ""), X((a == null ? void 0 : a.description) ?? ""), J(!1), Z(!1), g("");
  }, [a]);
  const j = D(() => ["all", ...Array.from(new Set(s.flatMap((d) => d.tags)))], [s]), ne = D(() => {
    const d = C.trim().toLowerCase();
    return s.filter((P) => (r === "all" || P.tags.includes(r)) && (!d || [P.title, P.summary, ...P.tags].join(" ").toLowerCase().includes(d)));
  }, [s, C, r]), ke = D(() => {
    const d = C.trim().toLowerCase();
    return d ? c.filter((P) => [P.title, P.date, Ee(P.date, P.id)].join(" ").toLowerCase().includes(d)) : c;
  }, [c, C]);
  me(() => {
    if (i !== "documents") return;
    const d = () => {
      const P = A.current;
      if (!P) return $(!1);
      const _e = P.scrollHeight > Ae + 1;
      $(_e), _e || z(!1);
    };
    return d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [i, j]);
  const Ce = async () => {
    const d = Q.trim() || (a == null ? void 0 : a.name) || "";
    if (U(d), J(!1), d && d !== (a == null ? void 0 : a.name)) {
      g("");
      try {
        await l(d);
      } catch (P) {
        U((a == null ? void 0 : a.name) ?? ""), g(P instanceof Error ? P.message : "项目名称更新失败");
      }
    }
  }, Se = async () => {
    const d = ee.trim() || (a == null ? void 0 : a.description) || "";
    if (X(d), Z(!1), d && d !== (a == null ? void 0 : a.description)) {
      g("");
      try {
        await u(d);
      } catch (P) {
        X((a == null ? void 0 : a.description) ?? ""), g(P instanceof Error ? P.message : "项目描述更新失败");
      }
    }
  }, Fe = async () => {
    if (!R.length) return E("请先选择至少一个文件");
    V(!0), E("");
    try {
      await m(R), B(!1), w([]);
    } catch (d) {
      E(d instanceof Error ? d.message : "文档导入失败");
    } finally {
      V(!1);
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !o && /* @__PURE__ */ e("button", { type: "button", onClick: T, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: y, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: Q || (a == null ? void 0 : a.name) || "详情" })
        ] })
      ] }),
      a && _ && /* @__PURE__ */ t("button", { type: "button", onClick: k, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
        /* @__PURE__ */ e(Me, { size: 15 }),
        /* @__PURE__ */ e("span", { children: "管理成员" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: a ? /* @__PURE__ */ t("section", { children: [
      xe ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: Q,
          onChange: (d) => U(d.target.value),
          onBlur: () => {
            Ce();
          },
          onKeyDown: (d) => {
            d.key === "Enter" && (d.preventDefault(), Ce()), d.key === "Escape" && (U(a.name), J(!1));
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
          onChange: (d) => X(d.target.value),
          onBlur: () => {
            Se();
          },
          onKeyDown: (d) => {
            d.key === "Enter" && (d.preventDefault(), Se()), d.key === "Escape" && (X(a.description), Z(!1));
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
        /* @__PURE__ */ e(Me, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          n,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => x("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${i === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          s.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => x("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${i === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          c.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(et, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: C, onChange: (d) => p(d.target.value), placeholder: `搜索${i === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(H, { type: "ghost", size: "small", rounded: "large", icon: i === "documents" ? /* @__PURE__ */ e(se, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: i === "documents" ? b : N, children: i === "documents" ? "新建" : "发起对话" }),
          i === "documents" && /* @__PURE__ */ t(ce, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              w([]), E(""), B(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(tt, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      i === "documents" && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: A, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: I || !L ? void 0 : `${Ae}px` }, children: j.map((d) => /* @__PURE__ */ e("button", { type: "button", onClick: () => v(d), className: `h-7 rounded-full border px-3 text-xs transition-colors ${r === d ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: d === "all" ? "全部" : d }, d)) }),
        L && /* @__PURE__ */ e("button", { type: "button", onClick: () => z((d) => !d), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: I ? "收起" : "展开" })
      ] }) }),
      i === "documents" ? ne.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: ne.map((d) => /* @__PURE__ */ t("button", { type: "button", onClick: () => S(d.id), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: d.title }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: d.summary }),
        d.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: d.tags.map((P) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: P }, `${d.id}-${P}`)) })
      ] }, d.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "暂无匹配的文档" }) }) : ke.length ? /* @__PURE__ */ e("div", { className: "mt-4 space-y-2", children: ke.map((d) => /* @__PURE__ */ t("button", { type: "button", onClick: () => f(d.id), className: "-ml-2 w-[calc(100%+0.5rem)] rounded-lg px-2 py-3 text-left transition-colors hover:bg-projectConversationHover", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: d.title }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Ee(d.date, d.id) })
      ] }, d.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(de, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      G,
      {
        visible: O,
        title: "导入文档",
        width: 500,
        maskClosable: !1,
        cancelText: "取消",
        okText: Y ? "导入中…" : "导入",
        onCancel: () => {
          Y || (B(!1), w([]), E(""));
        },
        onConfirm: () => {
          Fe();
        },
        okButtonProps: { disabled: Y },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(Te, { value: R, maxCount: 5, maxSize: 20 * 1024 * 1024, disabled: Y, onChange: w, onError: (d) => E(d.message) }),
          M && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: M })
        ] })
      }
    )
  ] });
}
const He = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], Xt = [...He, { label: "移除", value: "移除" }];
function ha({
  visible: a,
  members: s,
  directory: c,
  onClose: n,
  onInvite: o,
  onChangePermission: T,
  onRemove: y
}) {
  const [k, S] = h([]), [f, b] = h("浏览"), [N, m] = h(""), [l, u] = h(""), _ = D(() => {
    const p = new Set(s.map((r) => r.id));
    return c.filter((r) => !p.has(r.id)).map((r) => ({
      label: `${r.name}（${r.email}）`,
      value: r.id,
      searchText: `${r.name} ${r.email}`
    }));
  }, [c, s]), i = () => {
    l || (S([]), b("浏览"), m(""), n());
  }, x = async () => {
    if (!k.length) {
      m("请先选择要邀请的成员");
      return;
    }
    u("invite"), m("");
    try {
      await o(k, f), S([]), b("浏览");
    } catch (p) {
      m(p instanceof Error ? p.message : "邀请成员失败");
    } finally {
      u("");
    }
  }, C = async (p, r) => {
    u(p), m("");
    try {
      r === "移除" ? await y(p) : await T(p, r);
    } catch (v) {
      m(v instanceof Error ? v.message : "成员操作失败");
    } finally {
      u("");
    }
  };
  return /* @__PURE__ */ e(G, { visible: a, title: "管理成员", width: 560, maskClosable: !1, footer: null, onCancel: i, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
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
              options: _,
              optionFilterProp: "searchText",
              classNames: { popup: { root: "project-invite-member-dropdown" } },
              suffixIcon: null,
              placeholder: "搜索姓名/邮箱并选择成员",
              onChange: (p) => {
                S(p), N && m("");
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
              options: He,
              onChange: (p) => b(p),
              disabled: !!l,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(H, { type: "primary", size: "medium", disabled: !!l, onClick: () => {
          x();
        }, children: l === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      N && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: N })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: s.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: s.map((p) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: p.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      p.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: p.roleLabel || p.permission }) : /* @__PURE__ */ e(
        ue,
        {
          variant: "borderless",
          value: p.permission,
          options: Xt,
          onChange: (r) => {
            C(p.id, String(r));
          },
          disabled: !!l,
          className: "member-permission-action-select w-[84px]",
          classNames: { popup: { root: "project-member-permission-dropdown" } },
          getPopupContainer: () => document.body
        }
      )
    ] }, p.id)) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText", children: "暂无成员" }) })
  ] }) });
}
const Qt = (a) => a.find((s) => s.status !== "实验结束") ?? a[0] ?? null;
function ua({
  project: a,
  experiment: s,
  isSidebarOpen: c,
  onOpenSidebar: n,
  onBackToProjects: o,
  onBackToProject: T,
  onDelete: y,
  onEdit: k
}) {
  const [S, f] = h(!1), [b, N] = h(!1), m = ve(null), l = D(
    () => s ? Qt(s.timeline) : null,
    [s]
  ), u = (l == null ? void 0 : l.actor) || (s == null ? void 0 : s.ownerName) || "未知成员";
  me(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const _ = () => {
    f(!0), m.current !== null && window.clearTimeout(m.current), m.current = window.setTimeout(() => f(!1), 700);
  }, i = () => {
    N(!1), y();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: n, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: T, disabled: !a, className: `transition-colors ${a ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (a == null ? void 0 : a.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (s == null ? void 0 : s.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(H, { type: "secondary", size: "small", rounded: "large", onClick: () => N(!0), children: "删除" }),
        /* @__PURE__ */ e(H, { type: "primary", size: "small", rounded: "large", onClick: k, children: "编辑" })
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
      /* @__PURE__ */ t("section", { onScroll: _, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${S ? "is-scrolling" : ""}`, children: [
        l != null && l.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(lt, { remarkPlugins: [nt], children: l.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((l == null ? void 0 : l.detailSections) ?? []).map((x) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: x.title }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm leading-6 text-secondaryText", children: x.content })
        ] }, x.title)) }),
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
          /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: ((l == null ? void 0 : l.attachments) ?? []).map((x) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: x }, x)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(G, { visible: b, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => N(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(H, { type: "secondary", size: "medium", onClick: () => N(!1), children: "取消" }),
      /* @__PURE__ */ e(H, { type: "danger", size: "medium", onClick: i, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function Oe({ label: a, description: s, children: c }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: a }),
      s && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: s })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: c })
  ] });
}
function fa({
  isSidebarOpen: a,
  avatarText: s = "研",
  avatarUrl: c,
  avatarUploading: n = !1,
  actionError: o,
  onOpenSidebar: T,
  onChangePassword: y,
  onChangeAvatar: k
}) {
  const [S, f] = h(!1), [b, N] = h(""), [m, l] = h(""), [u, _] = h(""), [i, x] = h(!1), [C, p] = h(""), [r, v] = h(""), [I, z] = h(""), L = ve(null), $ = u.length > 0 && m !== u, O = m.length > 0 && m.trim().length < 6, B = !!(b.trim() && m.trim() && u.trim() && !O && !$ && !i), R = () => {
    i || (f(!1), N(""), l(""), _(""), p(""), v(""), z(""));
  }, w = async () => {
    if (B) {
      x(!0), p(""), v(""), z("");
      try {
        const M = await (y == null ? void 0 : y({ currentPassword: b.trim(), newPassword: m.trim() }));
        if (M && !M.ok) {
          M.field === "currentPassword" ? v(M.message) : M.field === "newPassword" ? z(M.message) : p(M.message);
          return;
        }
        f(!1), N(""), l(""), _("");
      } catch (M) {
        p(M instanceof Error ? M.message : "密码修改失败");
      } finally {
        x(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !a && /* @__PURE__ */ e("button", { type: "button", onClick: T, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "更多设置" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[720px] py-0", children: /* @__PURE__ */ e("div", { className: "space-y-6", children: /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("h3", { className: "mb-2 mt-4 text-base font-semibold text-primaryText", children: "账户" }),
      /* @__PURE__ */ t("div", { className: "rounded-lg bg-surface", children: [
        /* @__PURE__ */ e(Oe, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(H, { type: "secondary", size: "small", rounded: "large", onClick: () => f(!0), children: "修改" }) }),
        /* @__PURE__ */ e(Oe, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: c ? /* @__PURE__ */ e("img", { src: c, alt: "当前头像", className: "h-full w-full object-cover" }) : s }),
          /* @__PURE__ */ e(
            H,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: n,
              disabled: n,
              onClick: () => {
                var M;
                return (M = L.current) == null ? void 0 : M.click();
              },
              children: n ? "上传中" : "上传"
            }
          )
        ] }) }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: L,
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            className: "hidden",
            onChange: async (M) => {
              var Y;
              const E = (Y = M.target.files) == null ? void 0 : Y[0];
              if (M.target.value = "", !(!E || n))
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
      G,
      {
        visible: S,
        title: "修改密码",
        onClose: R,
        onCancel: R,
        onConfirm: () => {
          w();
        },
        cancelText: "取消",
        okText: i ? "保存中…" : "保存",
        okButtonProps: { disabled: !B },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(
            ae,
            {
              label: "当前密码",
              type: "password",
              value: b,
              onChange: (M) => {
                N(M.target.value), v(""), p("");
              },
              placeholder: "请输入当前密码",
              size: "medium",
              error: !!r,
              helperText: r || void 0,
              disabled: i
            }
          ),
          /* @__PURE__ */ e(
            ae,
            {
              label: "新密码",
              type: "password",
              value: m,
              onChange: (M) => {
                l(M.target.value), z(""), p("");
              },
              placeholder: "请输入新密码",
              size: "medium",
              error: !!I || O,
              helperText: I || (O ? "新密码至少需要 6 位" : void 0),
              disabled: i
            }
          ),
          /* @__PURE__ */ e(
            ae,
            {
              label: "确认新密码",
              type: "password",
              value: u,
              onChange: (M) => _(M.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: $,
              helperText: $ ? "两次输入的新密码不一致" : void 0,
              disabled: i
            }
          ),
          C && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: C })
        ] })
      }
    )
  ] });
}
function ba({ onOpenAiUsage: a, onOpenMembers: s, onLogout: c }) {
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
function Jt({ points: a, labels: s, totalAmount: c }) {
  const [f, b] = h(null), N = D(() => Math.max(...a, 1), [a]), m = D(() => a.length <= 10 ? 1 : Math.ceil(a.length / 6), [a.length]), l = D(() => a.length <= 1 ? 0 : Math.min(6, 928 / a.length / 2.5), [928, a.length]), u = D(() => a.length === 0 ? 0 : Math.max(3, (928 - (a.length - 1) * l) / a.length), [l, 928, a.length]), _ = (i) => i >= 1e4 ? `￥${(i / 1e4).toFixed(1)}万` : `￥${be(i)}`;
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
          const x = 156 - i / N * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: x.toFixed(2), y2: x.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: x + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: _(i) })
          ] }, i);
        }),
        a.map((i, x) => {
          const C = i / N * 138, p = 52 + x * (u + l), r = 156 - C, v = s[x] ?? "", I = x % m === 0 || x === a.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => b(x), onMouseLeave: () => b(null), children: [
            /* @__PURE__ */ e("rect", { x: p.toFixed(2), y: r.toFixed(2), width: u.toFixed(2), height: Math.max(1, C).toFixed(2), rx: "1.5", fill: f === x ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            I && /* @__PURE__ */ e("text", { x: (p + u / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: v })
          ] }, `${v}-${x}`);
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
function ga({
  isSidebarOpen: a,
  overviewCards: s,
  memberOptions: c,
  monthOptions: n,
  selectedMember: o,
  selectedMonth: T,
  trendPoints: y,
  trendLabels: k,
  trendTotal: S,
  rechargeRecords: f,
  onOpenSidebar: b,
  onMemberChange: N,
  onMonthChange: m
}) {
  var B, R;
  const [l, u] = h("analysis"), [_, i] = h(!1), [x, C] = h(!1), p = ((B = c.find((w) => w.value === o)) == null ? void 0 : B.label) ?? "全部成员", r = ((R = n.find((w) => w.value === T)) == null ? void 0 : R.label) ?? T, v = D(() => c.map((w) => ({ key: `member-${w.value}`, label: w.label, active: w.value === o })), [c, o]), I = D(() => n.map((w) => ({ key: `month-${w.value}`, label: w.label, active: w.value === T })), [n, T]), z = ge((w) => {
    N(w.key.replace("member-", "")), i(!1);
  }, [N]), L = ge((w) => {
    m(w.key.replace("month-", "")), C(!1);
  }, [m]), $ = D(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (w) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(w) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (w) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(w) }) }
  ], []), O = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !a && /* @__PURE__ */ e("button", { type: "button", onClick: b, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: s.map((w) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: w.title }),
          w.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(at, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: w.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: w.value }),
          w.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: w.warningLabel })
        ] }),
        w.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: w.helper })
      ] }) }, w.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${l === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${l === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        l === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(re, { open: _, onOpenChange: i, items: v, onItemClick: z, placement: "bottom-start", width: 172, portal: !0, menuClassName: O, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: p }),
            /* @__PURE__ */ e(pe, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${_ ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(re, { open: x, onOpenChange: C, items: I, onItemClick: L, placement: "bottom-start", width: 172, portal: !0, menuClassName: O, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: r }),
            /* @__PURE__ */ e(pe, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${x ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        l === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(Jt, { points: y, labels: k, totalAmount: S }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(Ne, { className: "task-table-scroll min-w-[760px]", columns: $, dataSource: f, rowKey: "id" }) }) })
      ] })
    ] }) })
  ] });
}
function ya({ isSidebarOpen: a, result: s, onOpenSidebar: c, onBack: n, onRun: o, onReset: T }) {
  const y = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !a && /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(q, { size: 20 }) }),
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
        /* @__PURE__ */ t("button", { type: "button", onClick: T, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
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
  ga as AiUsagePage,
  wa as AppShell,
  Ta as AssistantActions,
  re as BaseActionMenu,
  H as BaseButton,
  ka as BaseCard,
  Te as BaseDocumentUpload,
  de as BaseEmpty,
  ae as BaseInput,
  G as BaseModal,
  Ye as BasePagination,
  Ca as BaseSegmented,
  Sa as BaseSelect,
  Ne as BaseTable,
  Be as BaseToggle,
  Ge as BaseUpload,
  _a as CHAT_FILE_OPTIONS,
  Ma as CHAT_INPUT_GUIDE_TEXT,
  za as CHAT_QUICK_PROMPTS,
  Ia as CHAT_RECENT_FILE_OPTIONS,
  Pa as CHAT_SKILL_OPTIONS,
  Da as ChatComposerDock,
  Aa as ChatConversationViewport,
  Ea as ChatHomePage,
  Oa as ChatPreviewPanel,
  La as ChatProjectFilesPanel,
  $a as ChatShareControls,
  Ba as ChatTimelineNavigation,
  Ra as ChatWorkspaceFrame,
  Ha as ChatWorkspaceHeader,
  Fa as ChatWorkspaceHeaderAction,
  Ga as ChatWorkspaceSidePanel,
  ua as ExperimentDetailPage,
  Ya as ForgotPasswordPage,
  Ua as InputArea,
  Wa as LoginPage,
  oa as MemberManagementPage,
  Ka as MessageItem,
  qa as MessageList,
  na as NavigationProvider,
  xa as ProjectDetailPage,
  ha as ProjectMemberManagementModal,
  pa as ProjectsPage,
  Xa as QuickPrompts,
  Qa as RegisterPage,
  ma as ScheduledTaskDeleteModal,
  ca as ScheduledTaskEditorModal,
  da as ScheduledTasksOverview,
  ba as SettingsPage,
  Ja as SkillPage,
  fa as SystemSettingsDetailPage,
  Za as ThinkingIndicator,
  ya as ToolPage,
  Gt as buildTaskPromptPreview,
  Ee as formatProjectConversationDate,
  ja as insertFileReference,
  Va as insertSkillCommand,
  er as resolveAtQuery,
  tr as resolveSlashQuery,
  ia as useNavigation
};
