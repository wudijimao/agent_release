import { B as Pt, a as xe, b as O, c as Ue, d as At, e as W, f as De, g as Re, h as yt, P as Bt, i as $t, j as Lt } from "./SkillPage-2cw9L6C8.js";
import { A as Ma, k as _a, l as Ia, m as za, n as Ea, C as Da, o as Pa, p as Aa, q as Ba, r as $a, s as La, t as Oa, u as Ra, v as Ha, w as Fa, x as Ga, y as Ua, z as Wa, D as Ka, E as Ya, F as qa, G as Xa, H as Qa, I as ja, L as Ja, M as Za, J as Va, K as es, N as ts, O as rs, Q as as, R as ss, S as ns, T as ls, U as is, V as os, W as ds, X as cs } from "./SkillPage-2cw9L6C8.js";
import { jsxs as t, jsx as e, Fragment as fe } from "react/jsx-runtime";
import vt, { useState as o, useMemo as R, useCallback as He, useContext as Ot, createContext as Rt, useEffect as ne, useRef as le } from "react";
import { Inbox as Ht, Paperclip as Ft, X as Gt, Check as et, AlertCircle as Nt, Pencil as We, Trash2 as be, HelpCircle as Ut, MoreHorizontal as Pe, Menu as ie, Plus as Me, ShieldCheck as Wt, RefreshCw as Kt, MessageCircle as Yt, Folder as qt, ChevronDown as Fe, LayoutTemplate as Xt, ArrowLeft as Ke, Users as mt, Search as Qt, Upload as jt, FileText as Jt, CircleHelp as Zt, Play as Vt } from "lucide-react";
import Ge from "classnames";
import Ye from "react-markdown";
import qe from "remark-gfm";
import { DatePicker as er, Cascader as tr, TimePicker as rr, Radio as pt, Select as Qe } from "antd";
import je from "dayjs";
const ar = "_wrapper_g5uno_1", sr = "_uploadContent_g5uno_7", nr = "_uploadIcon_g5uno_17", lr = "_uploadTitle_g5uno_18", ir = "_uploadDescription_g5uno_19", or = "_fileList_g5uno_20", dr = "_fileItem_g5uno_21", cr = "_fileItemIcon_g5uno_22", mr = "_fileName_g5uno_23", pr = "_fileSize_g5uno_24", xr = "_removeButton_g5uno_25", V = {
  wrapper: ar,
  uploadContent: sr,
  uploadIcon: nr,
  uploadTitle: lr,
  uploadDescription: ir,
  fileList: or,
  fileItem: dr,
  fileItemIcon: cr,
  fileName: mr,
  fileSize: pr,
  removeButton: xr
}, hr = ".pdf,.doc,.docx,.txt,.md,.csv", ur = 20 * 1024 * 1024, xt = 5, ht = (r, a) => r.name === a.name && r.size === a.size && r.lastModified === a.lastModified && r.type === a.type, fr = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`, wt = vt.forwardRef(
  ({
    value: r,
    defaultValue: a = [],
    onChange: d,
    onError: s,
    accept: c = hr,
    maxSize: g = ur,
    maxCount: f = xt,
    disabled: N = !1,
    className: k,
    uploadTitle: b = "点击或拖拽文件到此上传",
    uploadDescription: h = `支持单文件或批量上传，单次最多 ${xt} 个，单个文件不超过 20MB`,
    uploadIcon: m
  }, p) => {
    const [n, S] = o(a), M = r !== void 0, w = R(() => (M ? r : n) ?? [], [n, M, r]), y = (x) => {
      M || S(x), d == null || d(x);
    }, z = (x) => {
      const v = [...w];
      if (Array.from(x).forEach((T) => {
        v.some((E) => ht(E, T)) || v.push(T);
      }), v.length > f) {
        s == null || s(new Error(`最多上传 ${f} 个文件，请删除后再继续添加`));
        return;
      }
      y(v);
    };
    return /* @__PURE__ */ t("div", { className: Ge(V.wrapper, k), children: [
      /* @__PURE__ */ e(Pt, { ref: p, accept: c, multiple: !0, disabled: N, maxSize: g, maxCount: f, onChange: z, onError: s, children: /* @__PURE__ */ t("div", { className: V.uploadContent, children: [
        m ?? /* @__PURE__ */ e(Ht, { size: 30, strokeWidth: 2.2, className: V.uploadIcon }),
        /* @__PURE__ */ e("div", { className: V.uploadTitle, children: b }),
        /* @__PURE__ */ e("div", { className: V.uploadDescription, children: h })
      ] }) }),
      w.length > 0 && /* @__PURE__ */ e("div", { className: V.fileList, children: w.map((x, v) => /* @__PURE__ */ t("div", { className: V.fileItem, children: [
        /* @__PURE__ */ e(Ft, { size: 14, className: V.fileItemIcon }),
        /* @__PURE__ */ e("span", { className: V.fileName, children: x.name }),
        /* @__PURE__ */ e("span", { className: V.fileSize, children: fr(x.size) }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => y(w.filter((T) => !ht(T, x))), className: V.removeButton, "aria-label": `移除文件 ${x.name}`, disabled: N, children: /* @__PURE__ */ e(Gt, { size: 14 }) })
      ] }, `${x.name}-${x.lastModified}-${v}`)) })
    ] });
  }
);
wt.displayName = "BaseDocumentUpload";
const br = "_toggle_198gd_1", gr = "_toggleSmall_198gd_18", yr = "_toggleRegular_198gd_23", vr = "_toggleMedium_198gd_28", Nr = "_toggleOff_198gd_33", wr = "_toggleOn_198gd_37", Tr = "_toggleDisabled_198gd_41", kr = "_thumb_198gd_46", Cr = "_thumbSmall_198gd_54", Sr = "_thumbRegular_198gd_59", Mr = "_thumbMedium_198gd_64", _r = "_thumbOffSmall_198gd_69", Ir = "_thumbOffRegular_198gd_70", zr = "_thumbOffMedium_198gd_71", Er = "_thumbOnSmall_198gd_75", Dr = "_thumbOnRegular_198gd_79", Pr = "_thumbOnMedium_198gd_83", me = {
  toggle: br,
  toggleSmall: gr,
  toggleRegular: yr,
  toggleMedium: vr,
  toggleOff: Nr,
  toggleOn: wr,
  toggleDisabled: Tr,
  thumb: kr,
  thumbSmall: Cr,
  thumbRegular: Sr,
  thumbMedium: Mr,
  thumbOffSmall: _r,
  thumbOffRegular: Ir,
  thumbOffMedium: zr,
  thumbOnSmall: Er,
  thumbOnRegular: Dr,
  thumbOnMedium: Pr
}, tt = ({
  checked: r,
  defaultChecked: a = !1,
  size: d = "medium",
  disabled: s = !1,
  onChange: c,
  className: g,
  ...f
}) => {
  const [N, k] = o(a), b = r !== void 0, h = b ? r : N, m = `${d.charAt(0).toUpperCase()}${d.slice(1)}`, p = He(() => {
    if (s) return;
    const M = !h;
    b || k(M), c == null || c(M);
  }, [s, h, b, c]), n = R(
    () => Ge(
      me.toggle,
      me[`toggle${m}`],
      h ? me.toggleOn : me.toggleOff,
      s && me.toggleDisabled,
      g
    ),
    [g, s, h, m]
  ), S = R(
    () => Ge(
      me.thumb,
      me[`thumb${m}`],
      me[`thumb${h ? "On" : "Off"}${m}`]
    ),
    [h, m]
  );
  return /* @__PURE__ */ e(
    "button",
    {
      ...f,
      type: "button",
      role: "switch",
      "aria-checked": h,
      className: n,
      onClick: p,
      disabled: s,
      children: /* @__PURE__ */ e("span", { className: S })
    }
  );
};
tt.displayName = "BaseToggle";
const Tt = ({ visible: r, message: a, tone: d = "success" }) => {
  if (!r) return null;
  const s = d === "success", c = s ? et : Nt;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: Ge(
        "pointer-events-none fixed left-1/2 z-[1400] inline-flex -translate-x-1/2 items-center gap-2 py-2.5 text-sm shadow-lg backdrop-blur-sm transition-all duration-200",
        s ? "top-1/2 -translate-y-1/2 rounded-lg bg-toastOverlay px-4 text-white" : "top-5 rounded-full border border-lineSoft bg-overlaySurface px-5 font-medium text-primaryText backdrop-blur-md"
      ),
      children: [
        /* @__PURE__ */ e(
          c,
          {
            size: s ? 16 : 18,
            className: s ? "text-white" : "text-warning",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ e("span", { children: a })
      ]
    }
  );
};
Tt.displayName = "BaseToast";
const kt = Rt(null);
function da({
  adapter: r,
  children: a
}) {
  return /* @__PURE__ */ e(kt.Provider, { value: r, children: a });
}
function ca() {
  const r = Ot(kt);
  if (!r)
    throw new Error("useNavigation must be used within NavigationProvider");
  return r;
}
function ma({
  labName: r,
  members: a,
  inviteCode: d,
  isSidebarOpen: s,
  loading: c = !1,
  error: g,
  actionError: f,
  canManage: N = !1,
  onOpenSidebar: k,
  onRetry: b,
  onRegenerateInvite: h,
  onUpdateRole: m,
  onRemoveMember: p
}) {
  const [n, S] = o(!1), [M, w] = o(!1), [y, z] = o(!1), [x, v] = o(!1), [T, E] = o(null), [L, D] = o("成员"), [_, i] = o(null), [$, P] = o(null), [u, C] = o(1), [G, U] = o(10), X = a.filter((I) => I.role === "管理员").length, ee = R(() => {
    const I = (u - 1) * G;
    return a.slice(I, I + G);
  }, [u, a, G]), Q = R(
    () => [
      { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(We, { size: 14 }) },
      { key: "remove", label: "移除", icon: /* @__PURE__ */ e(be, { size: 14 }), danger: !0 }
    ],
    []
  );
  ne(() => {
    const I = Math.max(1, Math.ceil(a.length / G));
    u > I && C(I);
  }, [u, a.length, G]);
  const re = (I) => {
    E(I), D(I.role), z(!0);
  }, A = (I) => {
    E(I), v(!0);
  }, K = async () => {
    if (d) {
      try {
        await navigator.clipboard.writeText(d);
      } catch {
        const I = document.createElement("textarea");
        I.value = d, I.style.position = "fixed", I.style.opacity = "0", document.body.appendChild(I), I.focus(), I.select(), document.execCommand("copy"), document.body.removeChild(I);
      }
      w(!0), window.setTimeout(() => w(!1), 1500);
    }
  }, ge = async () => {
    i("invite");
    try {
      await h(), w(!1);
    } finally {
      i(null);
    }
  }, ye = async () => {
    if (T) {
      i("edit");
      try {
        await m(T.id, L), z(!1);
      } finally {
        i(null);
      }
    }
  }, ve = async () => {
    if (T) {
      i("remove");
      try {
        await p(T.id), v(!1);
      } finally {
        i(null);
      }
    }
  }, oe = R(
    () => [
      {
        title: "姓名",
        dataIndex: "name",
        width: "25%",
        render: (I, H) => /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center pr-2", children: [
          /* @__PURE__ */ e("div", { className: "mr-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lineSubtle bg-bgLight text-[11px] font-medium text-secondaryText", children: H.avatarUrl ? /* @__PURE__ */ e("img", { className: "h-full w-full object-cover", src: H.avatarUrl, alt: "" }) : H.name.slice(0, 2) }),
          /* @__PURE__ */ t("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "truncate font-medium text-primaryText", children: H.name }),
            /* @__PURE__ */ e("p", { className: "mt-0.5 truncate text-[13px] text-secondaryText", children: H.email })
          ] })
        ] })
      },
      {
        title: /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
          "团队角色",
          /* @__PURE__ */ e("span", { className: "text-mutedText", title: "管理员可管理成员和实验室设置；成员可使用工作区。", children: /* @__PURE__ */ e(Ut, { size: 14 }) })
        ] }),
        dataIndex: "role",
        width: "16%"
      },
      {
        title: "加入时间",
        dataIndex: "joinedAt",
        width: "18%",
        render: (I) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(I) })
      },
      {
        title: "归属项目",
        dataIndex: "projectsLabel",
        width: "31%",
        render: (I) => /* @__PURE__ */ e("span", { className: "block truncate text-secondaryText", title: String(I || "暂未提供"), children: String(I || "暂未提供") })
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "10%",
        render: (I, H) => H.canManage ? /* @__PURE__ */ e(
          xe,
          {
            open: $ === H.id,
            onOpenChange: (j) => P(j ? H.id : null),
            placement: "bottom-end",
            width: 132,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Pe, { size: 16 }) }),
            items: Q,
            onItemClick: (j, Ne) => {
              Ne.stopPropagation(), P(null), j.key === "edit" ? re(H) : A(H);
            }
          }
        ) : /* @__PURE__ */ e("span", { className: "text-mutedText", children: "—" })
      }
    ],
    [$, Q]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !s && /* @__PURE__ */ e("button", { type: "button", onClick: k, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "成员管理" })
        ] })
      ] }),
      N && /* @__PURE__ */ e(O, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(Me, { size: 14 }), className: "shrink-0", onClick: () => S(!0), children: "邀请新成员" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-primaryText md:text-2xl", children: r || "实验室成员" }),
        /* @__PURE__ */ t("span", { className: "shrink-0 rounded-full bg-surfaceMuted px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
          "共",
          a.length,
          "人"
        ] })
      ] }),
      g && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: g }),
        b && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: b, children: "重新加载" })
      ] }),
      !g && X < 2 && !c && /* @__PURE__ */ t("div", { className: "!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm", children: [
        /* @__PURE__ */ e(Nt, { size: 16, className: "shrink-0" }),
        /* @__PURE__ */ t("span", { children: [
          "当前管理员",
          X,
          "名，建议至少保留2名管理员，避免团队配置和成员管理只有单点负责人"
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          Ue,
          {
            className: "task-table-scroll w-full [&_table]:min-w-[860px] [&_thead_th]:py-2 [&_thead_th]:text-[13px] [&_tbody_td]:py-2.5 [&_tbody_td]:text-[13px]",
            columns: oe,
            dataSource: ee,
            rowKey: "id",
            striped: !1,
            loading: c
          }
        ),
        /* @__PURE__ */ e(
          At,
          {
            current: u,
            total: a.length,
            pageSize: G,
            onChange: C,
            showSizeChanger: !0,
            pageSizeOptions: [5, 10, 20],
            onShowSizeChange: (I, H) => {
              U(H), C(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText", children: [
        /* @__PURE__ */ e(Wt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e("span", { children: "所有成员均已纳入实验室合规性审计流水线" })
      ] })
    ] }) }),
    /* @__PURE__ */ t(W, { visible: n, title: "邀请新成员", width: 360, onCancel: () => S(!1), footer: null, bodyClassName: "!px-6 !py-5", children: [
      /* @__PURE__ */ e("h4", { className: "text-[17px] font-semibold text-primaryText", children: "邀请码" }),
      /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-6 gap-2", children: (d || "------").split("").map((I, H) => /* @__PURE__ */ e("div", { className: "flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText", children: I }, `${I}-${H}`)) }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-6 text-tertiaryText", children: "请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限" }),
      f && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: f }),
      /* @__PURE__ */ e(O, { type: "primary", size: "large", rounded: "large", fullWidth: !0, className: "mt-5", onClick: K, disabled: !d, children: M ? "已复制邀请码" : "复制邀请码" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: ge, disabled: _ === "invite", className: "mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50", children: _ === "invite" ? "正在生成..." : "重新生成邀请码" })
    ] }),
    /* @__PURE__ */ e(W, { visible: y && !!T, title: "编辑成员信息", width: 560, maskClosable: _ !== "edit", cancelText: "取消", okText: "保存修改", confirmLoading: _ === "edit", onCancel: () => {
      _ !== "edit" && z(!1);
    }, onConfirm: ye, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "团队角色" }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-8", children: ["成员", "管理员"].map((I) => /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-primaryText", children: [
          /* @__PURE__ */ e("input", { type: "radio", name: "member-role", value: I, checked: L === I, onChange: () => D(I), className: "h-4 w-4 accent-primary" }),
          I
        ] }, I)) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "归属项目" }),
        /* @__PURE__ */ e("div", { className: "rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-secondaryText", children: (T == null ? void 0 : T.projectsLabel) || "未参与项目" })
      ] }),
      f && /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: f })
    ] }) }),
    /* @__PURE__ */ t(W, { visible: x && !!T, title: "确定要移除该成员吗？", width: 420, maskClosable: !1, cancelText: "取消", okText: "确认移除", confirmLoading: _ === "remove", onCancel: () => v(!1), onConfirm: ve, okButtonProps: { className: "!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover" }, children: [
      T && /* @__PURE__ */ t("p", { className: "text-sm text-secondaryText", children: [
        "您正在将成员 ",
        /* @__PURE__ */ t("span", { className: "font-semibold text-primaryText", children: [
          T.name,
          " (",
          T.email,
          ")"
        ] }),
        " 移出该科研团队，此操作执行后无法撤销。"
      ] }),
      f && /* @__PURE__ */ e("p", { className: "mt-3 text-sm text-danger", children: f })
    ] })
  ] });
}
function Ar({
  items: r,
  loading: a = !1,
  pendingId: d,
  onFetch: s,
  onToggle: c,
  onEdit: g,
  onDelete: f
}) {
  const [N, k] = o(null), b = R(() => [
    {
      title: "订阅名称",
      dataIndex: "name",
      width: "19%",
      render: (h, m) => /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate font-medium text-primaryText", children: String(h) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: m.source })
      ] })
    },
    {
      title: "关键词",
      dataIndex: "keywords",
      width: "22%",
      render: (h) => /* @__PURE__ */ e("span", { className: "line-clamp-2 break-all text-secondaryText", children: String(h) || "未设置" })
    },
    {
      title: "抓取设置",
      dataIndex: "schedule",
      width: "14%",
      render: (h) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(h) })
    },
    {
      title: "内容统计",
      dataIndex: "itemStats",
      width: "16%",
      render: (h, m) => /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("div", { className: "text-secondaryText", children: String(h) }),
        /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: m.projectStats })
      ] })
    },
    {
      title: "最近抓取",
      dataIndex: "lastFetch",
      width: "14%",
      render: (h) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(h) })
    },
    {
      title: "状态",
      dataIndex: "isEnabled",
      width: "7%",
      render: (h, m) => /* @__PURE__ */ e(
        tt,
        {
          size: "small",
          checked: m.isEnabled,
          disabled: d === m.id,
          onChange: () => c(m.id),
          "aria-label": m.isEnabled ? "停用文献订阅" : "启用文献订阅"
        }
      )
    },
    {
      title: "操作",
      dataIndex: "id",
      width: "8%",
      align: "right",
      render: (h, m) => {
        const p = [
          { key: "fetch", label: "立即抓取", icon: /* @__PURE__ */ e(Kt, { size: 14 }) },
          { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(We, { size: 14 }) },
          { key: "delete", label: "删除", icon: /* @__PURE__ */ e(be, { size: 14 }), danger: !0 }
        ];
        return /* @__PURE__ */ e(
          xe,
          {
            open: N === m.id,
            onOpenChange: (n) => k(n ? m.id : null),
            placement: "bottom-end",
            width: 140,
            portal: !0,
            menuClassName: "!min-w-[140px]",
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Pe, { size: 16 }) }),
            items: p,
            onItemClick: (n) => {
              k(null), n.key === "fetch" ? s(m.id) : n.key === "edit" ? g(m.id) : f(m.id);
            }
          }
        );
      }
    }
  ], [N, f, g, s, c, d]);
  return /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(
    Ue,
    {
      className: "task-table-scroll w-full [&_table]:min-w-[1080px] [&_table]:table-fixed",
      columns: b,
      dataSource: r,
      rowKey: "id",
      striped: !1,
      loading: a
    }
  ) }) });
}
const Je = 30, Br = 3;
function $r(r) {
  const a = Array.from(r ?? ""), d = Je * Br, s = a.length > d ? [...a.slice(0, Math.max(d - 3, 0)), ".", ".", "."] : a, c = [];
  for (let g = 0; g < s.length; g += Je)
    c.push(s.slice(g, g + Je).join(""));
  return c.join(`
`);
}
function pa({
  templates: r,
  tasks: a,
  isSidebarOpen: d,
  loading: s = !1,
  error: c,
  pendingTaskId: g,
  literatureSubscriptions: f = [],
  literatureLoading: N = !1,
  pendingLiteratureId: k,
  onOpenSidebar: b,
  onCreateCustom: h,
  onCreateFromTemplate: m,
  onToggleTask: p,
  onEditTask: n,
  onDeleteTask: S,
  onOpenTaskChat: M,
  onCreateLiterature: w,
  onFetchLiterature: y,
  onToggleLiterature: z,
  onEditLiterature: x,
  onDeleteLiterature: v,
  onRetry: T
}) {
  const [E, L] = o(null), [D, _] = o("scheduled"), i = !!(w && y && z && x && v), $ = i ? D : "scheduled", P = R(
    () => [
      {
        title: "任务名称",
        dataIndex: "name",
        width: "19%",
        render: (u) => /* @__PURE__ */ e("span", { className: "truncate text-primaryText", children: String(u) })
      },
      {
        title: "任务内容",
        dataIndex: "prompt",
        width: "36%",
        render: (u) => /* @__PURE__ */ e("span", { className: "whitespace-pre-line break-all text-secondaryText", children: $r(String(u ?? "")) })
      },
      {
        title: "下次运行",
        dataIndex: "nextRun",
        width: "16%",
        render: (u, C) => /* @__PURE__ */ t("span", { children: [
          /* @__PURE__ */ e("span", { className: "block text-secondaryText", children: String(u) }),
          C.scheduleEnd && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-tertiaryText", children: C.scheduleEnd })
        ] })
      },
      {
        title: "触发方式",
        dataIndex: "trigger",
        width: "14%",
        render: (u) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(u) })
      },
      {
        title: "状态",
        dataIndex: "isEnabled",
        width: "7%",
        render: (u, C) => /* @__PURE__ */ e(
          tt,
          {
            size: "small",
            checked: C.isEnabled,
            disabled: C.isToggleDisabled || g === C.id,
            onChange: () => p(C.id),
            "aria-label": C.isEnabled ? "关闭任务" : "开启任务"
          }
        )
      },
      {
        title: "操作",
        dataIndex: "id",
        width: "8%",
        align: "right",
        render: (u, C) => {
          const G = [
            ...C.mainSessionId && M ? [{ key: "chat", label: "打开对话", icon: /* @__PURE__ */ e(Yt, { size: 14 }) }] : [],
            { key: "edit", label: "编辑", icon: /* @__PURE__ */ e(We, { size: 14 }) },
            { key: "delete", label: "删除", icon: /* @__PURE__ */ e(be, { size: 14 }), danger: !0 }
          ];
          return /* @__PURE__ */ e(
            xe,
            {
              open: E === C.id,
              onOpenChange: (U) => L(U ? C.id : null),
              placement: "bottom-end",
              width: 132,
              portal: !0,
              menuClassName: "!min-w-[132px]",
              trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Pe, { size: 16 }) }),
              items: G,
              onItemClick: (U) => {
                L(null), U.key === "chat" && C.mainSessionId ? M == null || M(C.mainSessionId) : U.key === "edit" ? n(C.id) : S(C.id);
              }
            }
          );
        }
      }
    ],
    [E, S, n, M, p, g]
  );
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !d && /* @__PURE__ */ e("button", { type: "button", onClick: b, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "任务" }) })
      ] }),
      /* @__PURE__ */ e(
        O,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          icon: /* @__PURE__ */ e(Me, { size: 14 }),
          className: "shrink-0",
          onClick: h,
          children: "新建任务"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "定时任务" }),
        /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3", children: r.map((u) => /* @__PURE__ */ t("button", { type: "button", onClick: () => m(u.id), className: "flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-[17px] font-medium text-primaryText", children: u.name }),
          /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText", children: u.description })
        ] }, u.id)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-10", children: [
        i && /* @__PURE__ */ t("div", { className: "mb-5 flex items-center gap-6 border-b border-lineSubtle", role: "tablist", "aria-label": "任务列表类型", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": $ === "scheduled",
              onClick: () => _("scheduled"),
              className: `border-b-2 pb-3 text-sm font-medium transition-colors ${$ === "scheduled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText hover:text-secondaryText"}`,
              children: "定时任务"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": $ === "literature",
              onClick: () => _("literature"),
              className: `border-b-2 pb-3 text-sm font-medium transition-colors ${$ === "literature" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText hover:text-secondaryText"}`,
              children: "文献订阅"
            }
          )
        ] }),
        $ === "scheduled" ? /* @__PURE__ */ t("div", { className: "space-y-3", role: "tabpanel", children: [
          !i && /* @__PURE__ */ e("h2", { className: "text-[15px] font-medium text-primaryText", children: "已设置任务" }),
          c && /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
            /* @__PURE__ */ e("span", { children: c }),
            T && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: T, children: "重新加载" })
          ] }),
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-white", children: /* @__PURE__ */ e(Ue, { className: "task-table-scroll w-full [&_table]:min-w-[1080px] [&_table]:table-fixed", columns: P, dataSource: a, rowKey: "id", striped: !1, loading: s }) })
        ] }) : w && y && z && x && v && /* @__PURE__ */ e("div", { role: "tabpanel", children: /* @__PURE__ */ e(
          Ar,
          {
            items: f,
            loading: N,
            pendingId: k,
            onFetch: y,
            onToggle: z,
            onEdit: x,
            onDelete: v
          }
        ) })
      ] })
    ] }) })
  ] });
}
const { RangePicker: Lr } = er, Or = [
  { value: "hourly", label: "每小时" },
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周" }
], ut = {
  pubmed: { label: "PubMed 文献", desc: "追踪正式发表论文" },
  biorxiv: { label: "bioRxiv 预印本", desc: "追踪早期研究进展" }
}, Rr = [
  { value: "all", label: "全部关键词" },
  { value: "any", label: "任一关键词" },
  { value: "advanced", label: "高级表达式" }
], Hr = [
  ["mon", "周一"],
  ["tue", "周二"],
  ["wed", "周三"],
  ["thu", "周四"],
  ["fri", "周五"],
  ["sat", "周六"],
  ["sun", "周日"]
].map(([r, a]) => ({ value: r, label: a })), Fr = [
  { value: "daily", label: "每天" },
  { value: "weekly", label: "每周", children: Hr },
  { value: "monthly", label: "每月", children: Array.from({ length: 28 }, (r, a) => ({ value: String(a + 1), label: `${a + 1}号` })) }
];
function xa({
  visible: r,
  kind: a,
  editing: d = !1,
  literatureValue: s,
  scheduleValue: c,
  projects: g = [],
  literatureProjects: f = [],
  onLiteratureChange: N,
  onScheduleChange: k,
  onCancel: b,
  onConfirm: h,
  onCreateProject: m
}) {
  const [p, n] = o(!1), [S, M] = o(!1), w = le(null), y = a === "literature", z = !y && !c.endDate, x = g.find((i) => i.id === c.projectId) ?? null, v = y ? d ? "修改文献订阅任务" : "设置文献订阅任务" : d ? "修改定时任务" : "新建定时任务", T = c.repeatMode === "weekly" || c.repeatMode === "monthly" ? [c.repeatMode, c.repeatSubValue || (c.repeatMode === "weekly" ? "mon" : "1")] : [c.repeatMode], E = R(() => [
    { key: "none", label: "不选择项目", active: !x },
    ...g.map((i) => ({ key: i.id, label: /* @__PURE__ */ e("span", { className: "truncate", children: i.name }), active: (x == null ? void 0 : x.id) === i.id }))
  ], [g, x]), L = R(() => m ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Me, { size: 16 }) }] : [], [m]), D = (i) => {
    if (n(!1), i.key === "create") return m == null ? void 0 : m();
    k({ ...c, projectId: i.key === "none" ? null : i.key });
  }, _ = () => {
    M(!0), w.current && clearTimeout(w.current), w.current = setTimeout(() => {
      M(!1), w.current = null;
    }, 2400);
  };
  return ne(() => () => {
    w.current && clearTimeout(w.current);
  }, []), /* @__PURE__ */ t(fe, { children: [
    /* @__PURE__ */ e(Tt, { visible: S, tone: "warning", message: "请输入任务截止时间" }),
    /* @__PURE__ */ e(
      W,
      {
        visible: r,
        title: v,
        width: 600,
        className: "tools-task-modal",
        okText: d ? "保存修改" : y ? "创建订阅" : "创建任务",
        cancelText: "取消",
        onCancel: b,
        onConfirm: h,
        onDisabledConfirm: z ? _ : void 0,
        okButtonProps: { disabled: !s.topic.trim() || (y ? !s.keywords.trim() || s.sourceTypes.length === 0 || s.sourceTypes.includes("pubmed") && s.pubmedMatchMode === "advanced" && !s.advancedQuery.trim() : !c.taskPrompt.trim() || z) },
        children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务名称" }),
            /* @__PURE__ */ e(
              De,
              {
                value: s.topic,
                onChange: (i) => N({ ...s, topic: i.target.value }),
                placeholder: "请输入任务名称",
                size: "medium",
                containerClassName: "!px-3.5"
              }
            )
          ] }),
          y ? /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "抓取频率" }),
              /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e(
                  "select",
                  {
                    value: s.frequency,
                    onChange: (i) => N({ ...s, frequency: i.target.value }),
                    className: "h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary",
                    children: Or.map((i) => /* @__PURE__ */ e("option", { value: i.value, children: i.label }, i.value))
                  }
                ),
                /* @__PURE__ */ e(Fe, { size: 16, className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" })
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
                  onChange: (i) => N({ ...s, lookbackDays: Math.max(1, Math.min(365, Number(i.target.value) || 1)) }),
                  className: "h-9 w-full rounded-lg border border-borderGray bg-white px-3.5 text-sm text-primaryText outline-none transition-colors focus:border-primary"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ t(fe, { children: [
            /* @__PURE__ */ t("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "任务周期" }),
                /* @__PURE__ */ e(
                  Lr,
                  {
                    format: "YYYY/MM/DD",
                    className: "task-period-picker w-full",
                    classNames: { popup: { root: "task-period-picker-popup" } },
                    value: [c.startDate ? je(c.startDate, "YYYY-MM-DD") : null, c.endDate ? je(c.endDate, "YYYY-MM-DD") : null],
                    onChange: (i, [$, P]) => k({ ...c, startDate: $, endDate: P })
                  }
                )
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "触发时间" }),
                /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2.5", children: [
                  /* @__PURE__ */ e(
                    tr,
                    {
                      value: T,
                      options: Fr,
                      className: "task-repeat-cascader w-full",
                      classNames: { popup: { root: "task-repeat-cascader-popup" } },
                      placeholder: "请选择重复方式",
                      onChange: (i) => {
                        const $ = String(i[0] ?? "daily"), P = i[1] ? String(i[1]) : "";
                        k({ ...c, repeatMode: $, repeatSubValue: $ === "weekly" ? P || (c.repeatMode === "weekly" ? c.repeatSubValue : "mon") || "mon" : $ === "monthly" ? P || (c.repeatMode === "monthly" ? c.repeatSubValue : "1") || "1" : "" });
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    rr,
                    {
                      value: je(c.runAt, "HH:mm"),
                      format: "HH:mm",
                      minuteStep: 1,
                      allowClear: !1,
                      onChange: (i) => k({ ...c, runAt: i ? i.format("HH:mm") : c.runAt }),
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
                    value: c.taskPrompt,
                    onChange: (i) => k({ ...c, taskPrompt: i.target.value }),
                    placeholder: "输入任何内容...",
                    rows: 5,
                    className: "w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                  }
                ),
                /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-3 z-20", children: /* @__PURE__ */ e(
                  xe,
                  {
                    open: p,
                    onOpenChange: n,
                    placement: "top-start",
                    width: 260,
                    trigger: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight", children: [
                      /* @__PURE__ */ e(qt, { size: 14 }),
                      /* @__PURE__ */ e("span", { className: "max-w-[140px] truncate", children: (x == null ? void 0 : x.name) ?? "工作项目" }),
                      /* @__PURE__ */ e(Fe, { size: 14 })
                    ] }),
                    items: E,
                    onItemClick: D,
                    className: "!inline-flex",
                    listClassName: "max-h-[220px] overflow-y-auto",
                    footerItems: L
                  }
                ) })
              ] })
            ] })
          ] }),
          y && /* @__PURE__ */ t(fe, { children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "订阅来源" }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.keys(ut).map((i) => {
                const $ = ut[i], P = s.sourceTypes.includes(i);
                return /* @__PURE__ */ t("button", { type: "button", onClick: () => {
                  const u = d ? [i] : P ? s.sourceTypes.filter((C) => C !== i) : [...s.sourceTypes, i];
                  N({ ...s, sourceTypes: u });
                }, className: `flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors ${P ? "border-primary bg-primary-soft-strong" : "border-borderGray bg-white hover:border-borderSoft"}`, children: [
                  /* @__PURE__ */ e("span", { className: `mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${P ? "border-primary bg-primary text-white" : "border-controlBorder text-transparent"}`, children: P && /* @__PURE__ */ e(et, { size: 11, strokeWidth: 3, "aria-hidden": "true" }) }),
                  /* @__PURE__ */ t("span", { children: [
                    /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-primaryText", children: $.label }),
                    /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[13px] text-secondaryText", children: $.desc })
                  ] })
                ] }, i);
              }) }),
              /* @__PURE__ */ e("p", { className: "mt-1.5 text-[13px] text-tertiaryText", children: "新建时可同时选择多个来源，系统会分别创建订阅。" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-medium text-primaryText", children: "关键词" }),
              /* @__PURE__ */ e(
                "input",
                {
                  value: s.keywords,
                  onChange: (i) => N({ ...s, keywords: i.target.value }),
                  placeholder: "例：CRISPR, prime editing, base editor",
                  className: "w-full rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              )
            ] }),
            s.sourceTypes.includes("pubmed") && /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "PubMed 匹配方式" }),
              /* @__PURE__ */ e(pt.Group, { value: s.pubmedMatchMode, onChange: (i) => N({ ...s, pubmedMatchMode: i.target.value }), className: "task-radio-group", children: /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-5", children: Rr.map((i) => /* @__PURE__ */ e(pt, { value: i.value, children: i.label }, i.value)) }) })
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
                  onChange: (i) => N({ ...s, advancedQuery: i.target.value }),
                  placeholder: '例如：("inflammatory bowel disease"[Title/Abstract]) AND ("stromal cell"[Title/Abstract])',
                  rows: 3,
                  className: "w-full resize-y rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-2 text-sm font-medium text-primaryText", children: "关联项目" }),
              /* @__PURE__ */ e("div", { className: "max-h-[150px] space-y-1 overflow-y-auto rounded-lg border border-borderGray p-2", children: f.length > 0 ? f.map((i) => {
                const $ = s.projectNodeIds.includes(i.id);
                return /* @__PURE__ */ t("label", { className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primaryText hover:bg-bgLight", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "checkbox",
                      checked: $,
                      onChange: () => N({ ...s, projectNodeIds: $ ? s.projectNodeIds.filter((P) => P !== i.id) : [...s.projectNodeIds, i.id] }),
                      className: "h-4 w-4 accent-primary"
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: i.name })
                ] }, i.id);
              }) : /* @__PURE__ */ e("div", { className: "px-2 py-3 text-sm text-tertiaryText", children: "暂无可关联的知识追踪项目" }) })
            ] }),
            /* @__PURE__ */ t("label", { className: "flex items-start gap-3 rounded-lg border border-borderGray px-3.5 py-3", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: s.enabled,
                  onChange: (i) => N({ ...s, enabled: i.target.checked }),
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
    )
  ] });
}
function ha({
  visible: r,
  description: a,
  confirmLoading: d = !1,
  onCancel: s,
  onConfirm: c
}) {
  return /* @__PURE__ */ e(
    W,
    {
      visible: r,
      title: "确认删除任务",
      width: 420,
      maskClosable: !1,
      cancelText: "取消",
      okText: "删除",
      confirmLoading: d,
      onCancel: s,
      onConfirm: c,
      okButtonProps: {
        className: "!border-danger !bg-danger hover:!border-danger-hover hover:!bg-danger-hover"
      },
      children: /* @__PURE__ */ e("p", { className: "text-sm text-primaryText", children: a })
    }
  );
}
const Gr = 0.62, Ur = 20, Wr = 20, Kr = 20, Yr = 48;
function qr(r, a) {
  return r.split(/\r?\n/, a).join(`
`).slice(0, a * Yr);
}
function ft({
  template: r,
  create: a = !1,
  disabled: d = !1,
  onOpen: s
}) {
  const c = le(null), [g, f] = o(Kr), N = R(
    () => qr((r == null ? void 0 : r.markdown) ?? "", g),
    [g, r == null ? void 0 : r.markdown]
  );
  return ne(() => {
    const k = c.current;
    if (!k || a) return;
    const b = () => {
      const m = k.clientHeight / Gr - Ur, p = Math.max(1, Math.floor(m / Wr));
      f((n) => n === p ? n : p);
    };
    b();
    const h = new ResizeObserver(b);
    return h.observe(k), () => h.disconnect();
  }, [a]), a ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      disabled: d,
      onClick: s,
      className: "group flex flex-col overflow-hidden rounded-lg border border-dashed border-borderSoft bg-surfaceMuted text-left transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-50",
      children: [
        /* @__PURE__ */ e("div", { className: "px-3 pt-3", children: /* @__PURE__ */ e("span", { className: "truncate text-sm font-semibold text-primaryText", children: "新建模板" }) }),
        /* @__PURE__ */ e("div", { className: "relative mx-3 mb-3 mt-2.5 aspect-[4/5] overflow-hidden rounded-md bg-surface", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ e(Me, { size: 28, className: "text-controlBorder transition-colors group-hover:text-primary" }) }) })
      ]
    }
  ) : r ? /* @__PURE__ */ t("article", { className: "group flex flex-col overflow-hidden rounded-lg border border-lineSubtle bg-surfaceMuted", children: [
    /* @__PURE__ */ e("div", { className: "px-3 pt-3", children: /* @__PURE__ */ e("h3", { className: "truncate text-sm font-semibold text-primaryText", children: r.name }) }),
    /* @__PURE__ */ t("div", { ref: c, className: "relative mx-3 mb-3 mt-2.5 aspect-[4/5] overflow-hidden rounded-md bg-surface", children: [
      /* @__PURE__ */ e("div", { className: "pointer-events-none origin-top-left scale-[0.62] px-3 py-2.5", style: { width: "161%" }, children: /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-1.5 prose-p:text-xs prose-p:leading-5 prose-li:text-xs prose-li:leading-5 prose-headings:text-primaryText prose-h2:mb-1.5 prose-h2:mt-0 prose-h2:text-sm prose-h2:font-semibold prose-h3:mb-1 prose-h3:mt-2 prose-h3:text-xs prose-h3:font-semibold prose-strong:text-primaryText prose-hr:my-2 prose-li:my-0.5 prose-ol:pl-4 prose-ul:pl-4 prose-table:text-xs prose-th:py-1 prose-td:py-1 prose-blockquote:border-l-2 prose-blockquote:pl-2 prose-blockquote:text-secondaryText", children: N.trim() ? /* @__PURE__ */ e(Ye, { remarkPlugins: [qe], children: N }) : /* @__PURE__ */ e("p", { children: r.description || "暂无内容" }) }) }),
      /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" }),
      /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-overlaySurface opacity-0 backdrop-blur-[1px] transition-opacity group-hover:pointer-events-auto group-hover:opacity-100", children: /* @__PURE__ */ e(O, { type: "primary", size: "small", rounded: "large", onClick: s, children: "查看" }) })
    ] })
  ] }) : null;
}
function ua({
  projects: r,
  isSidebarOpen: a,
  loading: d = !1,
  error: s,
  onOpenSidebar: c,
  onOpenProject: g,
  onCreateProject: f,
  templates: N = [],
  templatesLoading: k = !1,
  templatesError: b = "",
  templatesVisible: h,
  onTemplatesVisibleChange: m,
  onOpenTemplates: p,
  onRetryTemplates: n,
  onOpenTemplate: S,
  onCreateTemplate: M,
  onRetry: w
}) {
  const [y, z] = o(!1), [x, v] = o(""), [T, E] = o(""), [L, D] = o(""), [_, i] = o(!1), [$, P] = o(!1), u = le(0), C = h ?? $, G = He((A) => {
    A && (A.scrollTop = u.current);
  }, []), U = () => {
    v(""), E(""), D(""), z(!0);
  }, X = () => {
    _ || (z(!1), D(""));
  }, ee = async () => {
    const A = x.trim();
    if (!A) {
      D("请输入项目名称");
      return;
    }
    i(!0), D("");
    try {
      await f({
        name: A,
        description: T.trim()
      }), z(!1);
    } catch (K) {
      D(K instanceof Error ? K.message : "项目创建失败");
    } finally {
      i(!1);
    }
  }, Q = () => {
    h === void 0 && P(!0), m == null || m(!0), p == null || p();
  }, re = () => {
    h === void 0 && P(!1), m == null || m(!1);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !a && /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "项目" }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
        p && /* @__PURE__ */ e(O, { type: "secondary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(Xt, { size: 14 }), onClick: Q, children: "文档模板" }),
        /* @__PURE__ */ e(O, { type: "primary", size: "small", rounded: "large", icon: /* @__PURE__ */ e(Me, { size: 14 }), onClick: U, children: "创建新项目" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ e("section", { className: "pb-0", children: /* @__PURE__ */ e("h2", { className: "text-2xl font-semibold text-primaryText", children: "科研项目" }) }),
      s && /* @__PURE__ */ t("div", { className: "mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger", children: [
        /* @__PURE__ */ e("span", { children: s }),
        w && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: w, children: "重新加载" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": d, children: [
        r.map((A) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => g(A.id),
            className: "group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-1", children: /* @__PURE__ */ e("h3", { className: "truncate text-lg font-medium text-primaryText", children: A.name }) }),
              /* @__PURE__ */ e("p", { className: "line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText", children: A.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 flex items-center gap-2 text-sm text-tertiaryText", children: [
                /* @__PURE__ */ t("span", { children: [
                  A.documentCount,
                  "文档"
                ] }),
                /* @__PURE__ */ e("span", { children: "·" }),
                /* @__PURE__ */ t("span", { children: [
                  A.conversationCount,
                  "对话"
                ] })
              ] })
            ]
          },
          A.id
        )),
        !d && !s && r.length === 0 && /* @__PURE__ */ e("div", { className: "col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无项目" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      W,
      {
        visible: y,
        title: "创建新项目",
        width: 560,
        okText: _ ? "创建中…" : "创建",
        cancelText: "取消",
        onCancel: X,
        onConfirm: () => {
          ee();
        },
        okButtonProps: { disabled: _ },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "text-sm font-medium text-primaryText", children: [
              "项目名称 ",
              /* @__PURE__ */ e("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ e(
              De,
              {
                value: x,
                placeholder: "请输入项目名称",
                disabled: _,
                onChange: (A) => {
                  v(A.target.value), L && D("");
                }
              }
            )
          ] }),
          /* @__PURE__ */ t("section", { className: "space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "项目描述（选填）" }),
            /* @__PURE__ */ e(
              "textarea",
              {
                value: T,
                onChange: (A) => E(A.target.value),
                placeholder: "请输入项目描述",
                rows: 4,
                disabled: _,
                className: "w-full resize-none rounded-lg border border-borderGray bg-white px-3 py-2 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              }
            )
          ] }),
          L && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: L })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      W,
      {
        visible: C,
        title: "项目模板",
        width: 1040,
        footer: null,
        onCancel: re,
        bodyClassName: "!h-[720px] !overflow-hidden !p-0",
        children: /* @__PURE__ */ e("div", { className: "flex h-full min-h-0 flex-col px-6 py-5", children: /* @__PURE__ */ e(
          "div",
          {
            ref: G,
            onScroll: (A) => {
              u.current = A.currentTarget.scrollTop;
            },
            className: "min-h-0 flex-1 overflow-y-auto",
            children: k ? /* @__PURE__ */ e("div", { className: "py-16 text-center text-sm text-tertiaryText", children: "正在加载模板…" }) : b ? /* @__PURE__ */ t("div", { className: "rounded-lg border border-danger bg-danger-soft p-4 text-sm text-danger", children: [
              b,
              n && /* @__PURE__ */ e("button", { type: "button", className: "ml-3 font-medium underline", onClick: n, children: "重新加载" })
            ] }) : /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", children: [
              M && /* @__PURE__ */ e(ft, { create: !0, onOpen: M }),
              N.map((A) => /* @__PURE__ */ e(ft, { template: A, onOpen: () => S == null ? void 0 : S(A.id) }, A.id))
            ] })
          }
        ) })
      }
    )
  ] });
}
const bt = 84, Xr = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }, Oe = (r) => String(r).padStart(2, "0"), pe = (r) => `${r.getFullYear()}年${Oe(r.getMonth() + 1)}月${Oe(r.getDate())}日 ${Oe(r.getHours())}:${Oe(r.getMinutes())}`;
function Ze(r, a, d = /* @__PURE__ */ new Date()) {
  const s = r.trim(), c = (p, n) => {
    const S = n.match(/^(\d{1,2}):(\d{2})$/);
    return S ? (p.setHours(Number(S[1]), Number(S[2]), 0, 0), p) : null;
  };
  if (s === "刚刚") return pe(d);
  const g = s.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (g) return pe(c(new Date(d), g[1]) ?? d);
  const f = s.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (f) {
    const p = new Date(d);
    return p.setDate(p.getDate() - 1), pe(c(p, f[1]) ?? d);
  }
  const N = s.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (N) {
    const p = new Date(d);
    let n = p.getDay() - Xr[N[2]];
    return n < 0 && (n += 7), p.setDate(p.getDate() - n - (N[1] ? 7 : 0)), pe(c(p, N[3]) ?? d);
  }
  const k = s.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (k) return pe(new Date(Number(k[1]), Number(k[2]) - 1, Number(k[3]), Number(k[4]), Number(k[5])));
  const b = s.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (b) return pe(new Date(d.getFullYear(), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4])));
  const h = a.match(/^c-(\d{13})$/);
  if (h) {
    const p = new Date(Number(h[1]));
    if (!Number.isNaN(p.getTime())) return pe(p);
  }
  const m = new Date(s);
  return pe(Number.isNaN(m.getTime()) ? d : m);
}
function fa({
  project: r,
  documents: a,
  conversations: d,
  memberCount: s,
  isSidebarOpen: c,
  onOpenSidebar: g,
  onBackToProjects: f,
  onOpenMemberManagement: N,
  onOpenDocument: k,
  onOpenConversation: b,
  onCreateDocument: h,
  onCreateConversation: m,
  onRenameConversation: p,
  onDeleteConversation: n,
  onImportDocuments: S,
  onUpdateProjectName: M,
  onUpdateProjectDescription: w,
  documentImportAccept: y,
  documentImportMaxSize: z,
  documentImportDescription: x,
  showMemberManagement: v = !0,
  onDeleteProject: T
}) {
  const [E, L] = o("documents"), [D, _] = o(""), [i, $] = o("all"), [P, u] = o(!1), [C, G] = o(!1), [U, X] = o(!1), [ee, Q] = o([]), [re, A] = o(""), [K, ge] = o(!1), [ye, ve] = o([]), [oe, I] = o((r == null ? void 0 : r.name) ?? ""), [H, j] = o((r == null ? void 0 : r.description) ?? ""), [Ne, J] = o(!1), [_e, he] = o(!1), [Ie, ue] = o(""), [we, Te] = o(!1), [ae, Ae] = o(!1), [Be, se] = o(""), [Xe, ze] = o(null), [Ee, $e] = o(null), [F, q] = o(""), [ke, Ce] = o(""), [te, Y] = o(null), [Se, de] = o(!1), [St, Le] = o(""), rt = le(null), at = le(null);
  ne(() => {
    I((r == null ? void 0 : r.name) ?? ""), j((r == null ? void 0 : r.description) ?? ""), J(!1), he(!1), ue("");
  }, [r]), ne(() => {
    if (!Ee) return;
    const l = window.requestAnimationFrame(() => {
      var B;
      return (B = at.current) == null ? void 0 : B.focus();
    });
    return () => window.cancelAnimationFrame(l);
  }, [Ee]);
  const st = R(() => ["all", ...Array.from(new Set(a.flatMap((l) => l.tags)))], [a]), nt = R(() => {
    const l = D.trim().toLowerCase();
    return a.filter((B) => (i === "all" || B.tags.includes(i)) && (!l || [B.title, B.summary, ...B.tags].join(" ").toLowerCase().includes(l)));
  }, [a, D, i]), lt = R(() => {
    const l = D.trim().toLowerCase();
    return l ? d.filter((B) => [B.title, B.date, Ze(B.date, B.id)].join(" ").toLowerCase().includes(l)) : d;
  }, [d, D]);
  ne(() => {
    if (E !== "documents") return;
    const l = () => {
      const B = rt.current;
      if (!B) return G(!1);
      const ce = B.scrollHeight > bt + 1;
      G(ce), ce || u(!1);
    };
    return l(), window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [E, st]);
  const it = async () => {
    const l = oe.trim() || (r == null ? void 0 : r.name) || "";
    if (I(l), J(!1), l && l !== (r == null ? void 0 : r.name)) {
      ue("");
      try {
        await M(l);
      } catch (B) {
        I((r == null ? void 0 : r.name) ?? ""), ue(B instanceof Error ? B.message : "项目名称更新失败");
      }
    }
  }, ot = async () => {
    const l = H.trim() || (r == null ? void 0 : r.description) || "";
    if (j(l), he(!1), l && l !== (r == null ? void 0 : r.description)) {
      ue("");
      try {
        await w(l);
      } catch (B) {
        j((r == null ? void 0 : r.description) ?? ""), ue(B instanceof Error ? B.message : "项目描述更新失败");
      }
    }
  }, Mt = async () => {
    if (!ee.length) return A("请先选择至少一个文件");
    ge(!0), A("");
    try {
      const l = await S(ee);
      X(!1), Q([]), l != null && l.length && ve((B) => [
        .../* @__PURE__ */ new Set([...B, ...l])
      ]);
    } catch (l) {
      A(l instanceof Error ? l.message : "文档导入失败");
    } finally {
      ge(!1);
    }
  }, _t = async () => {
    if (!(!T || ae)) {
      Ae(!0), se("");
      try {
        await T();
      } catch (l) {
        se(l instanceof Error ? l.message : "项目删除失败"), Ae(!1);
      }
    }
  }, It = (l) => {
    Ce(""), $e(l.id), q(l.title), ze(null);
  }, dt = () => {
    $e(null), q("");
  }, ct = async (l) => {
    const B = F.trim();
    if (dt(), !(!B || B === l.title || !p)) {
      Ce("");
      try {
        await p(l.id, B);
      } catch (ce) {
        Ce(ce instanceof Error ? ce.message : "对话重命名失败");
      }
    }
  }, zt = async () => {
    if (!(!n || !te || Se)) {
      de(!0), Le("");
      try {
        await n(te.id), Y(null);
      } catch (l) {
        Le(l instanceof Error ? l.message : "对话删除失败");
      } finally {
        de(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !c && /* @__PURE__ */ e("button", { type: "button", onClick: g, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
        /* @__PURE__ */ t("button", { type: "button", onClick: f, className: "inline-flex items-center gap-1 text-sm text-tertiaryText transition-colors hover:text-primaryText", children: [
          /* @__PURE__ */ e(Ke, { size: 16 }),
          "返回"
        ] })
      ] }),
      r && (v || T) && /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
        v && /* @__PURE__ */ t("button", { type: "button", onClick: N, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText", children: [
          /* @__PURE__ */ e(mt, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "管理成员" })
        ] }),
        T && /* @__PURE__ */ t("button", { type: "button", onClick: () => {
          se(""), Te(!0);
        }, className: "inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-danger transition-colors hover:text-danger-hover", children: [
          /* @__PURE__ */ e(be, { size: 15 }),
          /* @__PURE__ */ e("span", { children: "删除项目" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[1240px]", children: r ? /* @__PURE__ */ t("section", { children: [
      Ne ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: oe,
          onChange: (l) => I(l.target.value),
          onBlur: () => {
            it();
          },
          onKeyDown: (l) => {
            l.key === "Enter" && (l.preventDefault(), it()), l.key === "Escape" && (I(r.name), J(!1));
          },
          autoFocus: !0,
          className: "w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative block w-fit max-w-full", children: [
        /* @__PURE__ */ e("h2", { className: "cursor-text text-2xl font-semibold text-primaryText", onClick: () => J(!0), children: oe || r.name }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目名称" })
      ] }),
      _e ? /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: H,
          onChange: (l) => j(l.target.value),
          onBlur: () => {
            ot();
          },
          onKeyDown: (l) => {
            l.key === "Enter" && (l.preventDefault(), ot()), l.key === "Escape" && (j(r.description), he(!1));
          },
          autoFocus: !0,
          className: "mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary"
        }
      ) : /* @__PURE__ */ t("div", { className: "group relative mt-1 block max-w-[760px]", children: [
        /* @__PURE__ */ e("p", { className: "cursor-text text-sm text-tertiaryText", onClick: () => he(!0), children: H || r.description }),
        /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: "点击编辑项目描述" })
      ] }),
      Ie && /* @__PURE__ */ e("div", { role: "alert", className: "mt-2 text-sm text-danger", children: Ie }),
      /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText", children: [
        /* @__PURE__ */ e(mt, { size: 13 }),
        /* @__PURE__ */ t("span", { children: [
          "成员 ",
          s,
          " 人"
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-10 border-b border-lineSubtle", children: /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: () => L("documents"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${E === "documents" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "文档 ",
          a.length
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: () => L("chats"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${E === "chats" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: [
          "对话 ",
          d.length
        ] })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ t("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ e(Qt, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e("input", { type: "text", value: D, onChange: (l) => _(l.target.value), placeholder: `搜索${E === "documents" ? "文档" : "历史对话"}`, className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e(O, { type: "ghost", size: "small", rounded: "large", icon: E === "documents" ? /* @__PURE__ */ e(Me, { size: 16 }) : void 0, className: "!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover", onClick: E === "documents" ? h : m, children: E === "documents" ? "新建" : "发起对话" }),
          E === "documents" && /* @__PURE__ */ t(fe, { children: [
            /* @__PURE__ */ e("span", { className: "h-4 border-l border-lineSubtle", "aria-hidden": "true" }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => {
              Q([]), A(""), X(!0);
            }, className: "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline", children: [
              /* @__PURE__ */ e(jt, { size: 14 }),
              "导入"
            ] })
          ] })
        ] })
      ] }),
      E === "documents" && a.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ e("div", { ref: rt, className: "flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200", style: { maxHeight: P || !C ? void 0 : `${bt}px` }, children: st.map((l) => /* @__PURE__ */ e("button", { type: "button", onClick: () => $(l), className: `h-7 rounded-full border px-3 text-xs transition-colors ${i === l ? "border-primary bg-primary-soft text-primary" : "border-lineSubtle bg-white text-secondaryText hover:border-controlBorder"}`, children: l === "all" ? "全部" : l }, l)) }),
        C && /* @__PURE__ */ e("button", { type: "button", onClick: () => u((l) => !l), className: "shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText", children: P ? "收起" : "展开" })
      ] }) }),
      E === "documents" ? nt.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: nt.map((l) => /* @__PURE__ */ t("button", { type: "button", onClick: () => k(l.kbNodeId), className: "rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm", children: [
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ e("h3", { className: "truncate text-base font-medium text-primaryText", children: l.title }),
          ye.includes(l.kbNodeId) && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-primary px-1.5 py-[2px] text-xs font-medium leading-none text-white", children: "NEW" })
        ] }),
        /* @__PURE__ */ e("p", { className: "mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText", children: l.summary }),
        l.tags.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: l.tags.map((B) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText", children: B }, `${l.id}-${B}`)) })
      ] }, l.id)) }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Re, { description: "暂无匹配的文档" }) }) : lt.length ? /* @__PURE__ */ t("div", { className: "mt-4 space-y-2", children: [
        ke && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: ke }),
        lt.map((l) => {
          const B = Ee === l.id, ce = Xe === l.id, Et = !!(p || n);
          return /* @__PURE__ */ t("div", { className: "group -ml-2 flex w-[calc(100%+0.5rem)] items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-projectConversationHover", children: [
            B ? /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  ref: at,
                  value: F,
                  onChange: (Z) => q(Z.target.value),
                  onBlur: () => {
                    ct(l);
                  },
                  onKeyDown: (Z) => {
                    Z.key === "Enter" && (Z.preventDefault(), ct(l)), Z.key === "Escape" && (Z.preventDefault(), dt());
                  },
                  className: "w-full rounded-md border border-shellChatEditBorder bg-white px-2 py-1 text-sm font-medium text-primaryText outline-none",
                  maxLength: 80,
                  "aria-label": "重命名对话"
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Ze(l.date, l.id) })
            ] }) : /* @__PURE__ */ t("button", { type: "button", onClick: () => b(l.id), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: l.title }),
              /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: Ze(l.date, l.id) })
            ] }),
            !B && Et && /* @__PURE__ */ e(
              xe,
              {
                open: ce,
                onOpenChange: (Z) => ze(Z ? l.id : null),
                placement: "bottom-end",
                portal: !0,
                width: 160,
                trigger: /* @__PURE__ */ e(Pe, { size: 16 }),
                items: p ? [{ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(We, { size: 14 }) }] : [],
                footerItems: n ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(be, { size: 14 }), danger: !0 }] : [],
                onItemClick: (Z, Dt) => {
                  Dt.stopPropagation(), Z.key === "rename" && It(l), Z.key === "delete" && (ze(null), Le(""), Y(l));
                },
                triggerClassName: `h-6 w-6 rounded-md text-secondaryText hover:bg-bgLight hover:text-primaryText ${ce ? "inline-flex" : "hidden group-hover:inline-flex"}`,
                className: "relative z-40 shrink-0",
                menuClassName: "!min-w-0"
              }
            )
          ] }, l.id);
        })
      ] }) : /* @__PURE__ */ e("div", { className: "mt-4 rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Re, { description: "暂无匹配的历史对话" }) })
    ] }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Re, { description: "项目不存在或已被删除" }) }) }) }),
    /* @__PURE__ */ e(
      W,
      {
        visible: U,
        title: "导入文档",
        width: 500,
        cancelText: "取消",
        okText: K ? "导入中…" : "导入",
        onCancel: () => {
          K || (X(!1), Q([]), A(""));
        },
        onConfirm: () => {
          Mt();
        },
        okButtonProps: { disabled: K },
        bodyClassName: "!px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(wt, { value: ee, accept: y, maxCount: 5, maxSize: z ?? 20 * 1024 * 1024, uploadDescription: x, disabled: K, onChange: Q, onError: (l) => A(l.message) }),
          re && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: re })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      W,
      {
        visible: we,
        title: "删除项目",
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          ae || (Te(!1), se(""));
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(O, { type: "secondary", size: "medium", disabled: ae, onClick: () => {
            Te(!1), se("");
          }, children: "取消" }),
          /* @__PURE__ */ e(O, { type: "danger", size: "medium", isLoading: ae, onClick: () => {
            _t();
          }, children: "删除" })
        ] }),
        children: /* @__PURE__ */ t("div", { className: "space-y-3 text-sm leading-6 text-secondaryText", children: [
          /* @__PURE__ */ t("p", { children: [
            "删除后，项目“",
            r == null ? void 0 : r.name,
            "”将不再显示。确认删除当前项目吗？"
          ] }),
          Be && /* @__PURE__ */ e("p", { role: "alert", className: "text-danger", children: Be })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      yt,
      {
        visible: !!te,
        title: "删除对话",
        description: /* @__PURE__ */ t(fe, { children: [
          "删除后，对话“",
          te == null ? void 0 : te.title,
          "”将无法恢复。确认删除当前对话吗？"
        ] }),
        loading: Se,
        error: St,
        onCancel: () => {
          Y(null), Le("");
        },
        onConfirm: zt
      }
    )
  ] });
}
const Qr = vt.memo(function({
  template: a,
  selected: d,
  onSelect: s,
  onPreview: c
}) {
  var g;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "button",
      tabIndex: 0,
      onClick: () => s(a.id),
      onKeyDown: (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), s(a.id));
      },
      className: `group relative flex flex-col overflow-hidden rounded-lg border bg-surfaceMuted text-left transition-all ${d ? "border-primary ring-2 ring-primary-soft" : "border-lineSubtle hover:border-controlBorderHover"}`,
      children: [
        /* @__PURE__ */ e("span", { className: `absolute right-2 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border ${d ? "border-primary bg-primary text-white" : "border-controlBorder bg-white text-transparent"}`, children: /* @__PURE__ */ e(et, { size: 13, strokeWidth: 3 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-3 pt-3 pr-9", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-sm font-semibold text-primaryText", children: a.name }),
          a.source === "workspace" && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-primary", children: "自定义" })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative mx-3 mb-3 mt-2.5 aspect-[4/5] overflow-hidden rounded-md bg-white", children: [
          /* @__PURE__ */ e("div", { className: "pointer-events-none origin-top-left scale-[0.62] px-3 py-2.5", style: { width: "161%" }, children: /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-1.5 prose-p:text-xs prose-p:leading-5 prose-li:text-xs prose-li:leading-5 prose-headings:text-primaryText prose-h2:mt-0 prose-h2:mb-1.5 prose-h2:text-sm prose-h2:font-semibold prose-h3:mt-2 prose-h3:mb-1 prose-h3:text-xs prose-h3:font-semibold prose-strong:text-primaryText prose-li:my-0.5 prose-ol:pl-4 prose-ul:pl-4", children: (g = a.markdown) != null && g.trim() ? /* @__PURE__ */ e(Ye, { remarkPlugins: [qe], children: a.markdown }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-xs text-tertiaryText", children: [
            /* @__PURE__ */ e(Jt, { size: 15 }),
            /* @__PURE__ */ e("span", { children: a.description || "空白文档" })
          ] }) }) }),
          /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" }),
          a.id !== "blank" && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-overlaySurface opacity-0 backdrop-blur-[1px] transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100", children: /* @__PURE__ */ e(O, { type: "secondary", size: "small", rounded: "large", onClick: (f) => {
            f.stopPropagation(), c(a.id);
          }, children: "预览" }) })
        ] })
      ]
    }
  );
});
function ba({
  visible: r,
  typeOptions: a,
  templates: d,
  loading: s = !1,
  error: c = "",
  defaultKnowledgeType: g,
  onClose: f,
  onRetry: N,
  onContinue: k
}) {
  var E, L, D;
  const b = g || "", h = R(
    () => [...d].sort((_, i) => +(i.id === "blank") - +(_.id === "blank")),
    [d]
  ), m = ((E = h.find((_) => _.id === "blank")) == null ? void 0 : E.id) || ((L = h[0]) == null ? void 0 : L.id) || "", [p, n] = o({
    optionValues: b ? [b] : [],
    customTags: []
  }), [S, M] = o(m), [w, y] = o(null);
  ne(() => {
    r && (n({ optionValues: b ? [b] : [], customTags: [] }), M(m), y(null));
  }, [m, b, r]);
  const z = R(
    () => d.find((_) => _.id === w) ?? null,
    [w, d]
  ), x = z ?? d.find((_) => _.id === S) ?? null, v = p.optionValues.map((_) => a.find((i) => i.value === _)).filter((_) => !!_);
  return /* @__PURE__ */ e(
    W,
    {
      visible: r,
      title: "新建文档",
      width: 1040,
      footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 px-6 py-4", children: [
        /* @__PURE__ */ e(O, { type: "secondary", size: "medium", onClick: f, children: "取消" }),
        /* @__PURE__ */ e(O, { type: "primary", size: "medium", disabled: !x || s, onClick: () => {
          const _ = p.optionValues[0] || "other";
          x && k({ knowledgeType: _, tags: [...v.map((i) => i.label), ...p.customTags], templateId: x.id });
        }, children: "新建文档" })
      ] }),
      onCancel: f,
      bodyClassName: "!p-0",
      children: /* @__PURE__ */ t("div", { className: "h-[min(690px,calc(90vh-154px))] overflow-y-auto px-6 py-5", children: [
        !z && /* @__PURE__ */ e("div", { className: "mb-5", children: /* @__PURE__ */ e(
          Bt,
          {
            options: a,
            value: p,
            onChange: n
          }
        ) }),
        z ? /* @__PURE__ */ t("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ t("button", { type: "button", onClick: () => y(null), className: "mb-4 inline-flex shrink-0 items-center gap-1 text-sm text-secondaryText transition-colors hover:text-primaryText", children: [
            /* @__PURE__ */ e(Ke, { size: 16 }),
            "退出预览"
          ] }),
          /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-y-auto", children: /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none pb-2 text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-h2:mt-4 prose-h2:mb-2 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mt-4 prose-h3:mb-2 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-li:my-1 prose-ol:pl-6 prose-ul:pl-6", children: (D = z.markdown) != null && D.trim() ? /* @__PURE__ */ e(Ye, { remarkPlugins: [qe], children: z.markdown }) : /* @__PURE__ */ e("p", { className: "text-sm text-tertiaryText", children: "该模板暂无预览内容" }) }) })
        ] }) : /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e("h3", { className: "mb-3 text-sm font-medium text-primaryText", children: "选择项目模板" }),
          s ? /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "正在加载模板…" }) : c ? /* @__PURE__ */ t("div", { className: "rounded-lg border border-danger bg-danger-soft px-4 py-4", children: [
            /* @__PURE__ */ e("p", { className: "text-sm text-danger", children: c }),
            N && /* @__PURE__ */ e(O, { type: "secondary", size: "small", className: "mt-3", onClick: N, children: "重新加载" })
          ] }) : h.length ? /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4", children: h.map((_) => /* @__PURE__ */ e(
            Qr,
            {
              template: _,
              selected: S === _.id,
              onSelect: M,
              onPreview: y
            },
            _.id
          )) }) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText", children: "暂无可用模板" })
        ] })
      ] })
    }
  );
}
function jr({
  projectName: r,
  document: a,
  isSidebarOpen: d,
  onOpenSidebar: s,
  onBackToProjects: c,
  onBackToProject: g,
  onEdit: f,
  onDelete: N,
  onSaveAsTemplate: k,
  onViewTemplates: b,
  onDownloadAttachment: h,
  editing: m = !1,
  editTitle: p = "",
  editMarkdown: n = "",
  editTags: S,
  saving: M = !1,
  saveError: w,
  attachmentAccept: y,
  onTitleChange: z,
  onMarkdownChange: x,
  onSave: v,
  onUploadAttachments: T,
  onDeleteAttachment: E,
  onTagsChange: L,
  entityLabel: D = "文档",
  layout: _ = "page",
  showTags: i = !0
}) {
  const [$, P] = o(!1), [u, C] = o(!1), [G, U] = o(""), [X, ee] = o(!1), [Q, re] = o(""), [A, K] = o(!1), [ge, ye] = o(!1), [ve, oe] = o(!1), [I, H] = o([]), [j, Ne] = o(""), [J, _e] = o(null), [he, Ie] = o(!1), [ue, we] = o(""), Te = le(null), ae = le({});
  ne(() => () => {
    Object.values(ae.current).forEach((F) => window.clearInterval(F));
  }, []);
  const Ae = async () => {
    if (N) {
      C(!0), U("");
      try {
        await N(), P(!1);
      } catch (F) {
        U(F instanceof Error ? F.message : `${D}删除失败`);
      } finally {
        C(!1);
      }
    }
  }, Be = async () => {
    if (!(!k || X)) {
      ee(!0), re("");
      try {
        await k(), K(!0);
      } catch (F) {
        re(F instanceof Error ? F.message : "模板保存失败");
      } finally {
        ee(!1);
      }
    }
  }, se = async () => {
    !m || !v || M || await v({ keepEditing: !1 });
  }, Xe = async () => {
    !m || !v || M || await v({ keepEditing: !0 });
  }, ze = async (F) => {
    const q = Array.from(F.target.files ?? []);
    if (F.target.value = "", !q.length || !T) return;
    const ke = Date.now(), Ce = q.map((Y, Se) => ({
      id: `${ke}-${Se}-${Y.name}`,
      name: Y.name,
      progress: 0
    }));
    H(Ce), Ce.forEach((Y) => {
      ae.current[Y.id] = window.setInterval(() => {
        H((Se) => Se.map((de) => de.id === Y.id ? { ...de, progress: Math.min(92, de.progress + Math.max(3, Math.ceil((92 - de.progress) / 5))) } : de));
      }, 180);
    }), oe(!0), Ne("");
    const te = () => {
      Object.values(ae.current).forEach((Y) => window.clearInterval(Y)), ae.current = {}, H([]);
    };
    try {
      await T(q, te), te();
    } catch (Y) {
      te(), Ne(Y instanceof Error ? Y.message : "附件上传失败");
    } finally {
      oe(!1);
    }
  }, Ee = (F) => {
    const q = a.attachments.find((ke) => ke.id === F);
    q && (we(""), _e(q));
  }, $e = async () => {
    if (!(!E || !J || he)) {
      Ie(!0), we("");
      try {
        await E(J.id), _e(null);
      } catch (F) {
        we(F instanceof Error ? F.message : "附件删除失败");
      } finally {
        Ie(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    T && /* @__PURE__ */ e(
      "input",
      {
        ref: Te,
        type: "file",
        multiple: !0,
        accept: y,
        className: "hidden",
        onChange: (F) => {
          ze(F);
        }
      }
    ),
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !d && /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
        /* @__PURE__ */ t("button", { type: "button", onClick: g, className: "inline-flex items-center gap-1 text-sm text-tertiaryText transition-colors hover:text-primaryText", children: [
          /* @__PURE__ */ e(Ke, { size: 16 }),
          "返回"
        ] })
      ] }),
      a.canEdit && f && /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-1 rounded-lg bg-bgLight p-0.5", "aria-label": "文档模式", children: [
          /* @__PURE__ */ e("button", { type: "button", disabled: M, onClick: () => {
            se();
          }, className: `rounded-md px-3 py-1 text-sm transition-colors disabled:cursor-wait ${m ? "text-secondaryText hover:text-primaryText" : "bg-surface text-primaryText shadow-sm"}`, children: "浏览" }),
          /* @__PURE__ */ e("button", { type: "button", disabled: M, onClick: f, className: `rounded-md px-3 py-1 text-sm transition-colors disabled:cursor-wait ${m ? "bg-surface text-primaryText shadow-sm" : "text-secondaryText hover:text-primaryText"}`, children: "编辑" })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[88px] shrink-0", children: m && /* @__PURE__ */ e(O, { type: "primary", size: "small", rounded: "large", className: "w-full", disabled: M, onClick: () => {
          Xe();
        }, children: M ? "保存中…" : "保存" }) }),
        N && /* @__PURE__ */ e("button", { type: "button", disabled: M, onClick: () => {
          U(""), P(!0);
        }, className: "inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText disabled:cursor-wait disabled:opacity-50", title: "删除", "aria-label": `删除${D}`, children: /* @__PURE__ */ e(be, { size: 18 }) }),
        (k || T) && /* @__PURE__ */ e(
          xe,
          {
            open: ge,
            onOpenChange: ye,
            placement: "bottom-end",
            width: 160,
            trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(Pe, { size: 20 }) }),
            items: [
              ...T ? [{ key: "uploadAttachment", label: ve ? "上传中…" : "上传附件", disabled: ve }] : [],
              ...k ? [{ key: "saveAsTemplate", label: X ? "保存中…" : "保存为模板", disabled: X }] : []
            ],
            onItemClick: (F) => {
              var q;
              ye(!1), F.key === "uploadAttachment" && ((q = Te.current) == null || q.click()), F.key === "saveAsTemplate" && Be();
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: `mx-auto flex h-full min-h-0 w-full flex-col ${_ === "compact" ? "max-w-[840px]" : "max-w-[1240px]"}`, children: m && z && x ? /* @__PURE__ */ e(
      $t,
      {
        projectName: r,
        title: p,
        initialMarkdown: n,
        createdByName: a.createdByName,
        updatedByName: a.updatedByName,
        updatedAt: a.updatedAt,
        index: a.index,
        attachments: a.attachments,
        attachmentUploads: I,
        attachmentAccept: y,
        saving: M,
        saveError: w,
        layout: _ === "compact" ? "panel" : "page",
        showHeaderActions: !1,
        onTitleChange: z,
        onMarkdownChange: x,
        tags: S ?? a.tags,
        onTagsChange: L,
        showTags: i,
        onDownloadAttachment: h,
        onDeleteAttachment: E ? Ee : void 0,
        onSave: () => {
          se();
        },
        onClose: () => {
          se();
        }
      }
    ) : /* @__PURE__ */ e(
      Lt,
      {
        document: a,
        attachmentUploads: I,
        layout: _ === "compact" ? "panel" : "page",
        showTags: i,
        onDownloadAttachment: h
      }
    ) }) }),
    Q && /* @__PURE__ */ e("div", { role: "alert", className: "absolute bottom-6 left-1/2 z-30 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-danger bg-white px-4 py-2 text-sm text-danger shadow-md", children: Q }),
    j && /* @__PURE__ */ e("div", { role: "alert", className: "absolute bottom-6 left-1/2 z-30 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-danger bg-white px-4 py-2 text-sm text-danger shadow-md", children: j }),
    /* @__PURE__ */ e(
      W,
      {
        visible: A,
        title: "保存成功",
        width: 420,
        maskClosable: !1,
        onCancel: () => K(!1),
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(O, { type: "secondary", size: "medium", onClick: () => K(!1), children: "取消" }),
          /* @__PURE__ */ e(
            O,
            {
              type: "primary",
              size: "medium",
              onClick: () => {
                K(!1), b == null || b();
              },
              children: "去查看"
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { className: "text-sm leading-6 text-secondaryText", children: "文档已保存至个人模板，可前往模板列表查看。" })
      }
    ),
    /* @__PURE__ */ e(
      yt,
      {
        visible: !!J,
        title: "删除附件",
        description: /* @__PURE__ */ t(fe, { children: [
          "删除后，附件“",
          J == null ? void 0 : J.name,
          "”将无法恢复。确认删除当前附件吗？"
        ] }),
        loading: he,
        error: ue,
        onCancel: () => {
          _e(null), we("");
        },
        onConfirm: $e
      }
    ),
    N && /* @__PURE__ */ t(
      W,
      {
        visible: $,
        title: `删除${D}`,
        width: 420,
        maskClosable: !1,
        onCancel: () => {
          u || P(!1);
        },
        footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
          /* @__PURE__ */ e(O, { type: "secondary", size: "medium", disabled: u, onClick: () => P(!1), children: "取消" }),
          /* @__PURE__ */ e(O, { type: "danger", size: "medium", disabled: u, onClick: () => {
            Ae();
          }, children: u ? "删除中…" : "删除" })
        ] }),
        children: [
          /* @__PURE__ */ t("div", { className: "text-sm leading-6 text-secondaryText", children: [
            "删除",
            D,
            "后将不可恢复，确认删除当前",
            D,
            "吗？"
          ] }),
          G && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: G })
        ]
      }
    )
  ] });
}
function ga({
  template: r,
  creating: a = !1,
  isSidebarOpen: d,
  onOpenSidebar: s,
  onBack: c,
  onCreate: g,
  onUpdate: f,
  onDelete: N
}) {
  const [k, b] = o((r == null ? void 0 : r.name) ?? ""), [h, m] = o((r == null ? void 0 : r.markdown) ?? ""), [p, n] = o(a), [S, M] = o(!1), [w, y] = o(""), z = {
    id: (r == null ? void 0 : r.id) ?? "new-template",
    title: k || "未命名模板",
    markdown: h,
    createdByName: (r == null ? void 0 : r.createdByName) ?? ((r == null ? void 0 : r.source) === "system" ? "系统" : "我"),
    updatedByName: (r == null ? void 0 : r.createdByName) ?? ((r == null ? void 0 : r.source) === "system" ? "系统" : "我"),
    updatedAt: (r == null ? void 0 : r.updatedAt) ?? "",
    tags: [],
    canEdit: a ? !!g : !!f,
    attachments: []
  }, x = async (v = !1) => {
    if (S) return;
    const T = k.trim();
    if (!T) {
      y("请输入模板名称");
      return;
    }
    M(!0), y("");
    try {
      if (a && g) {
        await g({ name: T, description: "", markdown: h }), c();
        return;
      }
      !a && f && (await f({ name: T, markdown: h }), n(v));
    } catch (E) {
      y(E instanceof Error ? E.message : a ? "模板创建失败" : "模板更新失败");
    } finally {
      M(!1);
    }
  };
  return /* @__PURE__ */ e(
    jr,
    {
      projectName: "项目模板",
      document: z,
      isSidebarOpen: d,
      onOpenSidebar: s,
      onBackToProjects: c,
      onBackToProject: c,
      onEdit: z.canEdit ? () => n(!0) : void 0,
      onDelete: a ? void 0 : N,
      editing: p,
      editTitle: k,
      editMarkdown: h,
      saving: S,
      saveError: w,
      onTitleChange: (v) => {
        b(v), w && y("");
      },
      onMarkdownChange: m,
      onSave: ({ keepEditing: v = !1 } = {}) => x(v),
      entityLabel: "模板",
      layout: "page",
      showTags: !1
    }
  );
}
const Ct = [{ label: "浏览", value: "浏览" }, { label: "编辑", value: "编辑" }], Jr = [...Ct, { label: "移除", value: "移除" }];
function ya({
  visible: r,
  members: a,
  directory: d,
  onClose: s,
  onInvite: c,
  onChangePermission: g,
  onRemove: f
}) {
  const [N, k] = o([]), [b, h] = o("浏览"), [m, p] = o(""), [n, S] = o(""), M = R(() => {
    const x = new Set(a.map((v) => v.id));
    return d.filter((v) => !x.has(v.id)).map((v) => ({
      label: `${v.name}（${v.email}）`,
      value: v.id,
      searchText: `${v.name} ${v.email}`
    }));
  }, [d, a]), w = () => {
    n || (k([]), h("浏览"), p(""), s());
  }, y = async () => {
    if (!N.length) {
      p("请先选择要邀请的成员");
      return;
    }
    S("invite"), p("");
    try {
      await c(N, b), k([]), h("浏览");
    } catch (x) {
      p(x instanceof Error ? x.message : "邀请成员失败");
    } finally {
      S("");
    }
  }, z = async (x, v) => {
    S(x), p("");
    try {
      v === "移除" ? await f(x) : await g(x, v);
    } catch (T) {
      p(T instanceof Error ? T.message : "成员操作失败");
    } finally {
      S("");
    }
  };
  return /* @__PURE__ */ e(W, { visible: r, title: "管理成员", width: 560, footer: null, onCancel: w, bodyClassName: "!px-6 !py-5", children: /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    /* @__PURE__ */ t("section", { className: "space-y-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "加入新成员" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1", children: [
          /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
            Qe,
            {
              mode: "multiple",
              showSearch: !0,
              variant: "borderless",
              value: N,
              options: M,
              optionFilterProp: "searchText",
              classNames: { popup: { root: "project-invite-member-dropdown" } },
              suffixIcon: null,
              placeholder: "搜索姓名/邮箱并选择成员",
              onChange: (x) => {
                k(x), m && p("");
              },
              disabled: !!n,
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "mx-2 h-5 w-px bg-lineSoft" }),
          /* @__PURE__ */ e(
            Qe,
            {
              variant: "borderless",
              value: b,
              options: Ct,
              onChange: (x) => h(x),
              disabled: !!n,
              className: "w-[76px]",
              classNames: { popup: { root: "project-member-permission-dropdown" } }
            }
          )
        ] }),
        /* @__PURE__ */ e(O, { type: "primary", size: "medium", disabled: !!n, onClick: () => {
          y();
        }, children: n === "invite" ? "邀请中…" : "邀请成员" })
      ] }),
      m && /* @__PURE__ */ e("div", { className: "text-sm text-danger", children: m })
    ] }),
    /* @__PURE__ */ e("section", { className: "space-y-3 border-t border-lineSoft pt-4", children: a.length ? /* @__PURE__ */ e("div", { className: "max-h-64 space-y-2 overflow-y-auto pr-1", children: a.map((x) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-sm font-medium text-primaryText", children: x.name }),
        /* @__PURE__ */ e("div", { className: "mt-0.5 text-xs text-tertiaryText", children: "项目成员" })
      ] }),
      x.editable === !1 ? /* @__PURE__ */ e("span", { className: "px-3 text-sm text-tertiaryText", children: x.roleLabel || x.permission }) : /* @__PURE__ */ e(
        Qe,
        {
          variant: "borderless",
          value: x.permission,
          options: Jr,
          onChange: (v) => {
            z(x.id, String(v));
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
const Zr = (r) => r.find((a) => a.status !== "实验结束") ?? r[0] ?? null;
function va({
  project: r,
  experiment: a,
  isSidebarOpen: d,
  onOpenSidebar: s,
  onBackToProjects: c,
  onBackToProject: g,
  onDelete: f,
  onEdit: N
}) {
  const [k, b] = o(!1), [h, m] = o(!1), p = le(null), n = R(
    () => a ? Zr(a.timeline) : null,
    [a]
  ), S = (n == null ? void 0 : n.actor) || (a == null ? void 0 : a.ownerName) || "未知成员";
  ne(() => () => {
    p.current !== null && window.clearTimeout(p.current);
  }, []);
  const M = () => {
    b(!0), p.current !== null && window.clearTimeout(p.current), p.current = window.setTimeout(() => b(!1), 700);
  }, w = () => {
    m(!1), f();
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !d && /* @__PURE__ */ e("button", { type: "button", onClick: s, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "text-tertiaryText transition-colors hover:text-primaryText", children: "项目" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: g, disabled: !r, className: `transition-colors ${r ? "text-tertiaryText hover:text-primaryText" : "cursor-not-allowed text-tertiaryText opacity-60"}`, children: (r == null ? void 0 : r.name) ?? "实验详情" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: (a == null ? void 0 : a.title) ?? "实验详情" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(O, { type: "secondary", size: "small", rounded: "large", onClick: () => m(!0), children: "删除" }),
        /* @__PURE__ */ e(O, { type: "primary", size: "small", rounded: "large", onClick: N, children: "编辑" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto flex h-full min-h-0 max-w-[1240px] flex-col", children: !r || !a ? /* @__PURE__ */ e("div", { className: "w-full rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Re, { description: "实验不存在或已被删除" }) }) : /* @__PURE__ */ t(fe, { children: [
      /* @__PURE__ */ t("section", { className: "mb-4 shrink-0", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-primaryText", children: (n == null ? void 0 : n.detailTitle) ?? a.title }),
        /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between gap-4", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ t("span", { children: [
            "创建人: ",
            S
          ] }),
          /* @__PURE__ */ t("span", { children: [
            "最近修改: ",
            S
          ] }),
          /* @__PURE__ */ e("span", { children: (n == null ? void 0 : n.updatedAt) ?? a.updatedAt })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
      ] }),
      /* @__PURE__ */ t("section", { onScroll: M, className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${k ? "is-scrolling" : ""}`, children: [
        n != null && n.markdownContent ? /* @__PURE__ */ e("div", { className: "prose prose-slate max-w-none text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-hr:my-5 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-blockquote:border-l-2 prose-blockquote:border-lineSubtle prose-blockquote:pl-3 prose-blockquote:text-secondaryText prose-a:text-primary prose-a:no-underline hover:prose-a:underline", children: /* @__PURE__ */ e(Ye, { remarkPlugins: [qe], children: n.markdownContent }) }) : /* @__PURE__ */ e("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: ((n == null ? void 0 : n.detailSections) ?? []).map((y) => /* @__PURE__ */ t("article", { className: "rounded-xl border border-lineSubtle bg-surface p-4", children: [
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
    /* @__PURE__ */ e(W, { visible: h, title: "删除文档", width: 420, maskClosable: !1, onCancel: () => m(!1), footer: /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(O, { type: "secondary", size: "medium", onClick: () => m(!1), children: "取消" }),
      /* @__PURE__ */ e(O, { type: "danger", size: "medium", onClick: w, children: "删除" })
    ] }), children: /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-secondaryText", children: "删除文档后将不可回复，确认删除当前文档吗？" }) })
  ] });
}
function gt({ label: r, description: a, children: d }) {
  return /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-6 py-5", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 pr-4", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: r }),
      a && /* @__PURE__ */ e("div", { className: "mt-1.5 text-xs leading-relaxed text-tertiaryText", children: a })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end", children: d })
  ] });
}
function Na({
  isSidebarOpen: r,
  avatarText: a = "研",
  avatarUrl: d,
  avatarUploading: s = !1,
  actionError: c,
  onOpenSidebar: g,
  onChangePassword: f,
  onChangeAvatar: N
}) {
  const [k, b] = o(!1), [h, m] = o(""), [p, n] = o(""), [S, M] = o(""), [w, y] = o(!1), [z, x] = o(""), [v, T] = o(""), [E, L] = o(""), D = le(null), _ = S.length > 0 && p !== S, i = p.length > 0 && p.trim().length < 6, $ = !!(h.trim() && p.trim() && S.trim() && !i && !_ && !w), P = () => {
    w || (b(!1), m(""), n(""), M(""), x(""), T(""), L(""));
  }, u = async () => {
    if ($) {
      y(!0), x(""), T(""), L("");
      try {
        const C = await (f == null ? void 0 : f({ currentPassword: h.trim(), newPassword: p.trim() }));
        if (C && !C.ok) {
          C.field === "currentPassword" ? T(C.message) : C.field === "newPassword" ? L(C.message) : x(C.message);
          return;
        }
        b(!1), m(""), n(""), M("");
      } catch (C) {
        x(C instanceof Error ? C.message : "密码修改失败");
      } finally {
        y(!1);
      }
    }
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: g, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "更多设置" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10", children: /* @__PURE__ */ e("div", { className: "mx-auto max-w-[720px] py-0", children: /* @__PURE__ */ e("div", { className: "space-y-6", children: /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("h3", { className: "mb-2 mt-4 text-base font-semibold text-primaryText", children: "账户" }),
      /* @__PURE__ */ t("div", { className: "rounded-lg bg-surface", children: [
        /* @__PURE__ */ e(gt, { label: "修改密码", description: "定期修改密码可提升账户安全性", children: /* @__PURE__ */ e(O, { type: "secondary", size: "small", rounded: "large", onClick: () => b(!0), children: "修改" }) }),
        /* @__PURE__ */ e(gt, { label: "更换头像", description: "上传新的个人头像（支持 PNG/JPG）", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-primary-soft text-xs text-primary", children: d ? /* @__PURE__ */ e("img", { src: d, alt: "当前头像", className: "h-full w-full object-cover" }) : a }),
          /* @__PURE__ */ e(
            O,
            {
              type: "secondary",
              size: "small",
              rounded: "large",
              isLoading: s,
              disabled: s,
              onClick: () => {
                var C;
                return (C = D.current) == null ? void 0 : C.click();
              },
              children: s ? "上传中" : "上传"
            }
          )
        ] }) }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: D,
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            className: "hidden",
            onChange: async (C) => {
              var U;
              const G = (U = C.target.files) == null ? void 0 : U[0];
              if (C.target.value = "", !(!G || s))
                try {
                  await (N == null ? void 0 : N(G));
                } catch {
                }
            }
          }
        )
      ] }),
      c && /* @__PURE__ */ e("div", { role: "alert", className: "mt-3 text-sm text-danger", children: c })
    ] }) }) }) }),
    /* @__PURE__ */ e(
      W,
      {
        visible: k,
        title: "修改密码",
        onClose: P,
        onCancel: P,
        onConfirm: () => {
          u();
        },
        cancelText: "取消",
        okText: w ? "保存中…" : "保存",
        okButtonProps: { disabled: !$ },
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(
            De,
            {
              label: "当前密码",
              type: "password",
              value: h,
              onChange: (C) => {
                m(C.target.value), T(""), x("");
              },
              placeholder: "请输入当前密码",
              size: "medium",
              error: !!v,
              helperText: v || void 0,
              disabled: w
            }
          ),
          /* @__PURE__ */ e(
            De,
            {
              label: "新密码",
              type: "password",
              value: p,
              onChange: (C) => {
                n(C.target.value), L(""), x("");
              },
              placeholder: "请输入新密码",
              size: "medium",
              error: !!E || i,
              helperText: E || (i ? "新密码至少需要 6 位" : void 0),
              disabled: w
            }
          ),
          /* @__PURE__ */ e(
            De,
            {
              label: "确认新密码",
              type: "password",
              value: S,
              onChange: (C) => M(C.target.value),
              placeholder: "请再次输入新密码",
              size: "medium",
              error: _,
              helperText: _ ? "两次输入的新密码不一致" : void 0,
              disabled: w
            }
          ),
          z && /* @__PURE__ */ e("div", { role: "alert", className: "text-sm text-danger", children: z })
        ] })
      }
    )
  ] });
}
function wa({ onOpenAiUsage: r, onOpenMembers: a, onLogout: d }) {
  return /* @__PURE__ */ t("div", { className: "mx-auto max-w-2xl p-8", children: [
    /* @__PURE__ */ e("h1", { className: "mb-8 text-3xl font-bold", children: "⚙️ 系统设置" }),
    /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: r, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "AI用量统计" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: a, className: "w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight", children: "项目成员管理" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft", children: "退出登录" })
    ] })
  ] });
}
const Ve = (r) => new Intl.NumberFormat("en-US").format(Math.round(r));
function Vr({ points: r, labels: a, totalAmount: d }) {
  const [b, h] = o(null), m = R(() => Math.max(...r, 1), [r]), p = R(() => r.length <= 10 ? 1 : Math.ceil(r.length / 6), [r.length]), n = R(() => r.length <= 1 ? 0 : Math.min(6, 928 / r.length / 2.5), [928, r.length]), S = R(() => r.length === 0 ? 0 : Math.max(3, (928 - (r.length - 1) * n) / r.length), [n, 928, r.length]), M = (w) => w >= 1e4 ? `${(w / 1e4).toFixed(1)}万` : Ve(w);
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-primaryText", children: "月度用量" }),
      /* @__PURE__ */ t("div", { className: "mt-1 text-xs text-tertiaryText", children: [
        "Token 消耗",
        /* @__PURE__ */ e("span", { className: "ml-1 text-primaryText", children: Ve(d) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative h-[190px] w-full", children: [
      /* @__PURE__ */ t("svg", { viewBox: "0 0 1000 190", preserveAspectRatio: "none", className: "h-full w-full", children: [
        [m, 0].map((w) => {
          const y = 156 - w / m * 138;
          return /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("line", { x1: 52, x2: 980, y1: y.toFixed(2), y2: y.toFixed(2), stroke: "var(--chatui-color-line-subtle)", strokeWidth: "1" }),
            /* @__PURE__ */ e("text", { x: 44, y: y + 4, textAnchor: "end", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: M(w) })
          ] }, w);
        }),
        r.map((w, y) => {
          const z = w / m * 138, x = 52 + y * (S + n), v = 156 - z, T = a[y] ?? "", E = y % p === 0 || y === r.length - 1;
          return /* @__PURE__ */ t("g", { onMouseEnter: () => h(y), onMouseLeave: () => h(null), children: [
            /* @__PURE__ */ e("rect", { x: x.toFixed(2), y: v.toFixed(2), width: S.toFixed(2), height: Math.max(1, z).toFixed(2), rx: "1.5", fill: b === y ? "var(--chatui-color-ai-usage-bar-hover)" : "var(--chatui-color-ai-usage-bar)" }),
            E && /* @__PURE__ */ e("text", { x: (x + S / 2).toFixed(2), y: 170, textAnchor: "middle", fill: "var(--chatui-color-text-tertiary)", fontSize: "11", children: T })
          ] }, `${T}-${y}`);
        })
      ] }),
      b !== null && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md", style: { left: `${(52 + b * (S + n) + S / 2) / 1e3 * 100}%` }, children: [
        /* @__PURE__ */ e("div", { className: "text-tertiaryText", children: a[b] }),
        /* @__PURE__ */ t("div", { className: "mt-0.5 font-semibold text-aiUsageBar", children: [
          Ve(r[b]),
          " Token"
        ] })
      ] })
    ] })
  ] });
}
function Ta({
  isSidebarOpen: r,
  overviewCards: a,
  memberOptions: d,
  monthOptions: s,
  selectedMember: c,
  selectedMonth: g,
  trendPoints: f,
  trendLabels: N,
  trendTotal: k,
  rechargeRecords: b,
  onOpenSidebar: h,
  onMemberChange: m,
  onMonthChange: p
}) {
  var $, P;
  const [n, S] = o("analysis"), [M, w] = o(!1), [y, z] = o(!1), x = (($ = d.find((u) => u.value === c)) == null ? void 0 : $.label) ?? "全部成员", v = ((P = s.find((u) => u.value === g)) == null ? void 0 : P.label) ?? g, T = R(() => d.map((u) => ({ key: `member-${u.value}`, label: u.label, active: u.value === c })), [d, c]), E = R(() => s.map((u) => ({ key: `month-${u.value}`, label: u.label, active: u.value === g })), [s, g]), L = He((u) => {
    m(u.key.replace("member-", "")), w(!1);
  }, [m]), D = He((u) => {
    p(u.key.replace("month-", "")), z(!1);
  }, [p]), _ = R(() => [
    { title: "充值金额", dataIndex: "amount", width: "50%", render: (u) => /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: String(u) }) },
    { title: "充值时间", dataIndex: "rechargeTime", width: "50%", render: (u) => /* @__PURE__ */ e("span", { className: "text-secondaryText", children: String(u) }) }
  ], []), i = "!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md";
  return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: h, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "AI用量" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px] space-y-5", children: [
      /* @__PURE__ */ e("section", { className: "grid grid-cols-1 gap-3 md:grid-cols-3", children: a.map((u) => /* @__PURE__ */ e("div", { className: "h-[118px] rounded-xl bg-aiUsageCard px-4", children: /* @__PURE__ */ t("div", { className: "flex h-full flex-col justify-center", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-sm text-tertiaryText", children: [
          /* @__PURE__ */ e("span", { children: u.title }),
          u.tooltip && /* @__PURE__ */ t("div", { className: "group relative inline-flex", children: [
            /* @__PURE__ */ e(Zt, { size: 14, className: "cursor-help text-tertiaryText opacity-80" }),
            /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: u.tooltip })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText", children: u.value }),
          u.warningLabel && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger", children: u.warningLabel })
        ] }),
        u.helper && /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-tertiaryText", children: u.helper })
      ] }) }, u.title)) }),
      /* @__PURE__ */ t("section", { className: "rounded-xl bg-surface", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-b border-lineSubtle pt-3", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => S("analysis"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "analysis" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "消耗分析" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => S("recharge"), className: `border-b-2 pb-2.5 text-sm font-medium transition-colors ${n === "recharge" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "充值记录" })
        ] }) }),
        n === "analysis" && /* @__PURE__ */ e("div", { className: "py-5", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 text-sm text-secondaryText", children: [
          /* @__PURE__ */ e(xe, { open: M, onOpenChange: w, items: T, onItemClick: L, placement: "bottom-start", width: 172, portal: !0, menuClassName: i, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: x }),
            /* @__PURE__ */ e(Fe, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${M ? "rotate-180" : ""}` })
          ] }) }),
          /* @__PURE__ */ e(xe, { open: y, onOpenChange: z, items: E, onItemClick: D, placement: "bottom-start", width: 172, portal: !0, menuClassName: i, listClassName: "max-h-[240px] overflow-y-auto", trigger: /* @__PURE__ */ t("span", { className: "inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: v }),
            /* @__PURE__ */ e(Fe, { size: 16, className: `ml-2 shrink-0 text-secondaryText transition-transform ${y ? "rotate-180" : ""}` })
          ] }) })
        ] }) }),
        n === "analysis" ? /* @__PURE__ */ e("div", { className: "py-4", children: /* @__PURE__ */ e(Vr, { points: f, labels: N, totalAmount: k }) }) : /* @__PURE__ */ e("div", { className: "pb-5 pt-4", children: b.length > 0 ? /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-surface", children: /* @__PURE__ */ e(Ue, { className: "task-table-scroll min-w-[760px]", columns: _, dataSource: b, rowKey: "id" }) }) : /* @__PURE__ */ e("div", { className: "flex min-h-[180px] items-center justify-center text-sm text-tertiaryText", children: "暂无充值记录" }) })
      ] })
    ] }) })
  ] });
}
function ka({ isSidebarOpen: r, result: a, onOpenSidebar: d, onBack: s, onRun: c, onReset: g }) {
  const f = "h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
  return /* @__PURE__ */ e("div", { className: "h-full w-full overflow-y-auto bg-surface p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[800px]", children: [
    /* @__PURE__ */ t("div", { className: "mb-2 flex items-center gap-4", children: [
      !r && /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: s, className: `rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${r ? "-ml-2" : ""}`, "aria-label": "返回任务列表", children: /* @__PURE__ */ e(Ke, { size: 20 }) }),
      /* @__PURE__ */ e("h1", { className: "text-3xl font-normal text-primaryText", children: "序列比对助手" })
    ] }),
    /* @__PURE__ */ e("p", { className: "mb-10 ml-10 text-base text-secondaryText", children: "快速进行 DNA/RNA 序列比对与同源性分析" }),
    /* @__PURE__ */ t("div", { className: "space-y-6 rounded-2xl border border-borderGray p-8", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 1" }),
        /* @__PURE__ */ e("textarea", { className: f, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "mb-3 block text-base font-medium text-primaryText", children: "输入序列 2" }),
        /* @__PURE__ */ e("textarea", { className: f, placeholder: "ATCGATCGATCG..." })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex gap-4 pt-2", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: c, className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95", children: [
          /* @__PURE__ */ e(Vt, { size: 16, className: "fill-current" }),
          "运行比对"
        ] }),
        /* @__PURE__ */ t("button", { type: "button", onClick: g, className: "flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e(be, { size: 16 }),
          "重置"
        ] })
      ] }),
      a && /* @__PURE__ */ t("div", { className: "mt-8 border-t border-borderGray pt-8", children: [
        /* @__PURE__ */ e("h3", { className: "mb-4 font-medium text-primaryText", children: "运行结果" }),
        /* @__PURE__ */ t("div", { className: "my-4 overflow-hidden rounded-lg border border-borderGray bg-toolCodeSurface", children: [
          /* @__PURE__ */ e("div", { className: "border-b border-borderGray bg-bgLight px-4 py-2 text-xs font-medium text-secondaryText", children: "结果" }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto whitespace-pre-line p-4 font-mono text-sm text-primaryText", children: a })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Ta as AiUsagePage,
  Ma as AppShell,
  _a as AssistantActions,
  xe as BaseActionMenu,
  O as BaseButton,
  Ia as BaseCard,
  yt as BaseDeleteConfirmModal,
  wt as BaseDocumentUpload,
  Re as BaseEmpty,
  De as BaseInput,
  W as BaseModal,
  At as BasePagination,
  za as BaseSegmented,
  Ea as BaseSelect,
  Ue as BaseTable,
  Tt as BaseToast,
  tt as BaseToggle,
  Pt as BaseUpload,
  Da as CHAT_FILE_OPTIONS,
  Pa as CHAT_INPUT_GUIDE_TEXT,
  Aa as CHAT_QUICK_PROMPTS,
  Ba as CHAT_RECENT_FILE_OPTIONS,
  $a as CHAT_SKILL_OPTIONS,
  La as ChatComposerDock,
  Oa as ChatConversationViewport,
  Ra as ChatDisplayCard,
  Ha as ChatHomePage,
  Fa as ChatPreviewPanel,
  Ga as ChatProjectFilesPanel,
  Ua as ChatShareControls,
  Wa as ChatTimelineNavigation,
  Ka as ChatWorkspaceFrame,
  Ya as ChatWorkspaceHeader,
  qa as ChatWorkspaceHeaderAction,
  Xa as ChatWorkspaceSidePanel,
  va as ExperimentDetailPage,
  Qa as ForgotPasswordPage,
  ja as InputArea,
  Ar as LiteratureSubscriptionsTable,
  Ja as LoginPage,
  ma as MemberManagementPage,
  Za as MessageItem,
  Va as MessageList,
  es as MiraDraftCard,
  da as NavigationProvider,
  fa as ProjectDetailPage,
  ts as ProjectDocumentAttachments,
  ba as ProjectDocumentCreateModal,
  $t as ProjectDocumentEditor,
  rs as ProjectDocumentMetadata,
  jr as ProjectDocumentPreview,
  Lt as ProjectDocumentPreviewContent,
  Bt as ProjectDocumentTagPicker,
  ft as ProjectDocumentTemplateCard,
  ga as ProjectDocumentTemplateWorkspace,
  ya as ProjectMemberManagementModal,
  ua as ProjectsPage,
  as as QuickPrompts,
  ss as RegisterPage,
  ha as ScheduledTaskDeleteModal,
  xa as ScheduledTaskEditorModal,
  pa as ScheduledTasksOverview,
  wa as SettingsPage,
  ns as SkillPage,
  Na as SystemSettingsDetailPage,
  ls as ThinkingIndicator,
  ka as ToolPage,
  $r as buildTaskPromptPreview,
  Ze as formatProjectConversationDate,
  is as insertFileReference,
  os as insertSkillCommand,
  ds as resolveAtQuery,
  cs as resolveSlashQuery,
  ca as useNavigation
};
