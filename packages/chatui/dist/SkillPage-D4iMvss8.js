import { jsxs as r, Fragment as Ge, jsx as e } from "react/jsx-runtime";
import je, { useMemo as be, useState as y, useRef as pe, useCallback as ze, useLayoutEffect as Ht, useEffect as Ne, forwardRef as cr, useId as _r } from "react";
import Ae from "classnames";
import { Check as ft, Copy as Pt, RefreshCcw as Ir, ThumbsUp as Rr, ThumbsDown as Dr, ArrowUpRight as jr, Info as Fr, Ban as Hr, TriangleAlert as Ot, CircleCheckBig as Lt, ShieldCheck as dr, CircleHelp as ur, FileText as Bt, LoaderCircle as mr, Puzzle as pr, AtSign as hr, AlertCircle as qr, Paperclip as fr, ArrowRight as xr, ChevronDown as zt, ChevronRight as $t, CircleX as br, Sparkles as gr, Loader2 as ot, Clock3 as _t, Search as ct, BookOpen as Gt, ListChecks as Wr, Globe as Or, Minus as Ur, Menu as yr, Upload as Vr, Trash2 as vr, CheckCircle2 as gt, SearchX as Kr, FlaskConical as Xr, X as bt, Plus as wr, Square as Gr, Send as Yr, UserPlus as Qr, Building2 as Zr, Folder as Dt, PanelLeftClose as Jr, SquarePen as en, AlertTriangle as tn, Settings as rn, Pin as jt, MoreHorizontal as nn, Pencil as an, Share2 as sn } from "lucide-react";
import Nr from "react-markdown";
import kr from "remark-gfm";
import ln from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as on } from "react-dom";
import { Crepe as wt } from "@milkdown/crepe";
import { commandsCtx as cn, editorViewCtx as Nt } from "@milkdown/kit/core";
import { lift as dn } from "@milkdown/kit/prose/commands";
import { liftListItem as un, wrapInList as mn } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Yt } from "@milkdown/kit/prose/state";
import { listItemSchema as kt, paragraphSchema as pn, setBlockTypeCommand as hn, orderedListSchema as Qt, bulletListSchema as Zt, headingSchema as fn } from "@milkdown/kit/preset/commonmark";
const xn = "_button_3tg6r_1", bn = "_primary_3tg6r_5", gn = "_disabled_3tg6r_9", yn = "_secondary_3tg6r_17", vn = "_ghost_3tg6r_25", wn = "_danger_3tg6r_33", Nn = "_small_3tg6r_41", kn = "_medium_3tg6r_45", Tn = "_large_3tg6r_49", Cn = "_roundedSquare_3tg6r_53", Sn = "_roundedSmall_3tg6r_57", Mn = "_roundedMedium_3tg6r_61", $n = "_roundedLarge_3tg6r_62", Ln = "_roundedFull_3tg6r_66", zn = "_loadingSpinner_3tg6r_67", An = "_loading_3tg6r_67", En = "_fullWidth_3tg6r_90", Pn = "_icon_3tg6r_94", Ie = {
  button: xn,
  primary: bn,
  disabled: gn,
  secondary: yn,
  ghost: vn,
  danger: wn,
  small: Nn,
  medium: kn,
  large: Tn,
  roundedSquare: Cn,
  roundedSmall: Sn,
  roundedMedium: Mn,
  roundedLarge: $n,
  roundedFull: Ln,
  loadingSpinner: zn,
  loading: An,
  fullWidth: En,
  icon: Pn
}, Bn = {
  primary: Ie.primary,
  secondary: Ie.secondary,
  ghost: Ie.ghost,
  danger: Ie.danger
}, _n = {
  small: Ie.small,
  medium: Ie.medium,
  large: Ie.large
}, In = {
  square: Ie.roundedSquare,
  small: Ie.roundedSmall,
  medium: Ie.roundedMedium,
  large: Ie.roundedLarge,
  full: Ie.roundedFull
}, qe = je.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: o,
    loading: l,
    disabled: s = !1,
    children: m,
    icon: f,
    iconPosition: v = "left",
    className: p,
    fullWidth: h = !1,
    rounded: S = "medium",
    onClick: u,
    ...N
  }, $) => {
    const W = o ?? l ?? !1, D = s || W, _ = be(() => W ? /* @__PURE__ */ r(Ge, { children: [
      /* @__PURE__ */ e("span", { className: Ie.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: m })
    ] }) : f ? /* @__PURE__ */ r(Ge, { children: [
      v === "left" && /* @__PURE__ */ e("span", { className: Ie.icon, children: f }),
      m && /* @__PURE__ */ e("span", { children: m }),
      v === "right" && /* @__PURE__ */ e("span", { className: Ie.icon, children: f })
    ] }) : m, [m, W, f, v]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: $,
        className: Ae(
          Ie.button,
          Bn[t],
          _n[n],
          In[S],
          {
            [Ie.fullWidth]: h,
            [Ie.loading]: W,
            [Ie.disabled]: D
          },
          p
        ),
        disabled: D,
        onClick: u,
        ...N,
        children: _
      }
    );
  }
);
qe.displayName = "BaseButton";
const Rn = { small: "h-8", medium: "h-9", large: "h-14" }, Tr = je.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: o,
    defaultValue: l,
    disabled: s = !1,
    readOnly: m = !1,
    error: f = !1,
    size: v = "medium",
    prefix: p,
    suffix: h,
    prefixIcon: S,
    suffixIcon: u,
    onChange: N,
    onFocus: $,
    onBlur: W,
    onClear: D,
    className: _,
    containerClassName: G,
    clearable: Y = !1,
    label: O,
    helperText: A,
    ...ae
  }, V) => {
    const [q, P] = y(!1), Q = pe(null), x = ze((oe) => {
      Q.current = oe, typeof V == "function" ? V(oe) : V && (V.current = oe);
    }, [V]), K = ze(() => {
      var L, X;
      const oe = Q.current;
      oe && ((X = (L = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : L.set) == null || X.call(oe, ""), oe.dispatchEvent(new Event("input", { bubbles: !0 })), oe.focus(), D == null || D());
    }, [D]), le = be(
      () => {
        var oe;
        return Y && q && String(o ?? ((oe = Q.current) == null ? void 0 : oe.value) ?? "").length > 0;
      },
      [Y, q, o]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      O && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: O }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Ae(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Rn[v],
            !s && !f && "hover:border-controlBorder",
            q && !s && !f && "border-primary ring-2 ring-brandFocus",
            f && "border-danger",
            f && q && "ring-2 ring-dangerFocus",
            s && "cursor-not-allowed bg-surfaceMuted",
            G
          ),
          children: [
            (p || S) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: p || S }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: x,
                type: t,
                placeholder: n,
                value: o,
                defaultValue: l,
                disabled: s,
                readOnly: m,
                className: Ae("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", _),
                onFocus: (oe) => {
                  P(!0), $ == null || $(oe);
                },
                onBlur: (oe) => {
                  P(!1), W == null || W(oe);
                },
                onChange: N,
                ...ae
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              le && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (oe) => oe.preventDefault(), onClick: K, "aria-label": "清空", children: "✕" }),
              h || u
            ] })
          ]
        }
      ),
      A && /* @__PURE__ */ e("div", { className: Ae("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: A })
    ] });
  }
);
Tr.displayName = "BaseInput";
const Dn = { small: "h-8", medium: "h-9", large: "h-14" }, jn = je.forwardRef(
  ({ options: t = [], value: n, defaultValue: o, placeholder: l, disabled: s = !1, error: m = !1, size: f = "medium", label: v, helperText: p, onChange: h, className: S, ...u }, N) => {
    const $ = ze((W) => {
      const D = W.target.value, _ = t.find((G) => String(G.value) === D);
      h == null || h(D === "" ? "" : (_ == null ? void 0 : _.value) ?? D);
    }, [h, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      v && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: v }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: N,
            className: Ae(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              m && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Dn[f],
              S
            ),
            value: n ?? o ?? "",
            disabled: s,
            onChange: $,
            ...u,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((W) => /* @__PURE__ */ e("option", { value: W.value, disabled: W.disabled, children: W.label }, W.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      p && /* @__PURE__ */ e("div", { className: Ae("text-xs leading-6", m ? "text-danger" : "text-mutedText"), children: p })
    ] });
  }
);
jn.displayName = "BaseSelect";
const Fn = "_container_ykn59_1", Hn = "_item_ykn59_10", qn = "_itemActive_ykn59_27", Wn = "_itemDisabled_ykn59_27", On = "_sizeSmall_ykn59_43", Un = "_sizeMiddle_ykn59_49", Vn = "_sizeLarge_ykn59_55", it = {
  container: Fn,
  item: Hn,
  itemActive: qn,
  itemDisabled: Wn,
  sizeSmall: On,
  sizeMiddle: Un,
  sizeLarge: Vn
}, Kn = {
  small: it.sizeSmall,
  middle: it.sizeMiddle,
  large: it.sizeLarge
};
function fs({
  options: t,
  value: n,
  defaultValue: o,
  onChange: l,
  size: s = "middle",
  disabled: m = !1,
  className: f
}) {
  var u;
  const [v, p] = y(
    o ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), h = n ?? v, S = (N) => {
    m || (n === void 0 && p(N), l == null || l(N));
  };
  return /* @__PURE__ */ e("div", { className: Ae(it.container, Kn[s], f), children: t.map((N) => {
    const $ = h === N.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Ae(it.item, $ && it.itemActive, m && it.itemDisabled),
        onClick: () => S(N.value),
        disabled: m,
        "aria-pressed": $,
        children: N.label
      },
      N.value
    );
  }) });
}
const Xn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Gn = je.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: o = !1, onChange: l, onError: s, maxSize: m, children: f, className: v, dragable: p = !0, placeholderTitle: h, placeholderDescription: S, placeholderIcon: u, maxCount: N }, $) => {
    const W = pe(null), [D, _] = y(!1), G = ze((O) => {
      if (N && O.length > N) {
        s == null || s(new Error(`单次最多上传 ${N} 个文件`));
        return;
      }
      if (m) {
        for (const A of Array.from(O))
          if (A.size > m) {
            s == null || s(new Error(`文件“${A.name}”超过大小限制（${Xn(m)}）`));
            return;
          }
      }
      l == null || l(O);
    }, [N, m, l, s]), Y = () => {
      var O;
      o || (O = W.current) == null || O.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: $,
        className: Ae(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          D && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          v
        ),
        onClick: Y,
        onKeyDown: (O) => {
          !o && (O.key === "Enter" || O.key === " ") && (O.preventDefault(), Y());
        },
        onDragOver: (O) => {
          p && !o && (O.preventDefault(), _(!0));
        },
        onDragLeave: () => _(!1),
        onDrop: (O) => {
          p && !o && (O.preventDefault(), _(!1), G(O.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: W, type: "file", accept: t, multiple: n, disabled: o, onChange: (O) => O.target.files && G(O.target.files), className: "hidden" }),
          f || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: u ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: h ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: S ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Gn.displayName = "BaseUpload";
const Yn = "_maskAnimation_1h49h_1", Qn = "_modalAnimation_1h49h_5", Jt = {
  maskAnimation: Yn,
  modalAnimation: Qn
}, Ut = ({
  visible: t,
  open: n = t,
  show: o = n,
  title: l,
  width: s = 520,
  centered: m = !0,
  destroyOnClose: f = !1,
  mask: v = !0,
  maskClosable: p = !0,
  okText: h = "确认",
  cancelText: S = "取消",
  confirmLoading: u = !1,
  okButtonProps: N,
  cancelButtonProps: $,
  onConfirm: W,
  onCancel: D,
  onClose: _,
  onOk: G,
  onDismiss: Y,
  children: O,
  footer: A,
  className: ae,
  bodyClassName: V
}) => {
  const q = o ?? !1, P = ze(async () => {
    try {
      W ? await W() : G && await G();
    } catch (K) {
      console.error("Modal confirm error:", K);
    }
  }, [W, G]), Q = ze(() => {
    D ? D() : _ ? _() : Y == null || Y();
  }, [D, _, Y]), x = be(() => {
    if (A === null) return null;
    if (A) return A;
    const { type: K, ...le } = $ ?? {}, { type: oe, ...L } = N ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(qe, { type: "secondary", size: "medium", onClick: Q, ...le, children: S }),
      /* @__PURE__ */ e(qe, { type: "primary", size: "medium", isLoading: u, onClick: P, ...L, children: u ? "加载中..." : h })
    ] });
  }, [$, S, u, A, Q, P, N, h]);
  return !q && f || !q ? null : /* @__PURE__ */ r(Ge, { children: [
    v && /* @__PURE__ */ e("div", { className: Ae("fixed inset-0 z-[1000] bg-overlayMask", Jt.maskAnimation), onClick: () => p && Q(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Ae(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          m && "left-1/2 top-1/2",
          Jt.modalAnimation,
          ae
        ),
        style: { width: s },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: Q, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Ae("min-h-20 p-5 text-primaryText", V), children: O }),
          x
        ]
      }
    )
  ] });
};
Ut.displayName = "BaseModal";
const Zn = ({ title: t, extra: n, children: o, hoverable: l = !1, loading: s = !1, bordered: m = !0, className: f, bodyClassName: v, onClick: p }) => /* @__PURE__ */ r(
  "div",
  {
    className: Ae(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      m && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      s && "pointer-events-none opacity-60",
      f
    ),
    onClick: p,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Ae("p-4 text-primaryText", (t || n) && "pt-1", v), children: o })
    ]
  }
);
Zn.displayName = "BaseCard";
const Jn = ({ columns: t, dataSource: n = [], rowKey: o = "id", loading: l = !1, bordered: s = !0, striped: m = !0, className: f, onRow: v }, p) => /* @__PURE__ */ r("div", { ref: p, className: Ae("relative w-full overflow-x-auto bg-surface", f), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: s ? "border-b border-lineSubtle" : void 0, children: t.map((h) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: h.width, textAlign: h.align }, children: h.title }, h.key || String(h.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((h, S) => {
      const u = String(typeof o == "string" ? h[o] ?? S : S);
      return /* @__PURE__ */ e("tr", { className: Ae(s && "border-b border-lineSoft last:border-b-0", m && "odd:bg-surface"), ...(v == null ? void 0 : v(h, S)) || {}, children: t.map((N) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: N.align }, children: N.render ? N.render(h[N.dataIndex], h, S) : String(h[N.dataIndex] ?? "") }, N.key || String(N.dataIndex))) }, u);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), xs = je.forwardRef(Jn), ea = ({ current: t = 1, pageSize: n = 10, total: o = 0, onChange: l, showSizeChanger: s = !1, pageSizeOptions: m = [10, 20, 50, 100], onShowSizeChange: f, disabled: v = !1, className: p }) => {
  const h = be(() => Math.ceil(o / n) || 1, [n, o]), S = ze((N) => f == null ? void 0 : f(1, Number(N.target.value)), [f]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Ae("flex flex-wrap items-center justify-center gap-4 p-4", p), children: [
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: v || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      h,
      " 页，共 ",
      o,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t < h && (l == null ? void 0 : l(t + 1)), disabled: v || t >= h, children: "下一页 →" }),
    s && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: S, disabled: v, children: m.map((N) => /* @__PURE__ */ r("option", { value: N, children: [
      N,
      " 条/页"
    ] }, N)) })
  ] });
};
ea.displayName = "BasePagination";
const Vt = ({ description: t = "暂无数据", image: n, children: o }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  o
] });
Vt.displayName = "BaseEmpty";
const At = ({ trigger: t, items: n, footerItems: o = [], open: l = !1, onOpenChange: s, onTriggerClick: m, onItemClick: f, placement: v = "bottom-start", width: p, portal: h = !1, className: S, triggerClassName: u, menuClassName: N, listClassName: $, footerClassName: W }) => {
  const D = pe(null), _ = pe(null), [G, Y] = y({}), O = v.endsWith("end"), A = v.startsWith("top");
  Ht(() => {
    var x;
    if (!l || !h || !D.current) return;
    const P = D.current.getBoundingClientRect(), Q = A ? ((x = _.current) == null ? void 0 : x.offsetHeight) ?? 0 : 0;
    Y({
      position: "fixed",
      left: O ? P.right : P.left,
      top: A ? P.top - Q - 8 : P.bottom,
      transform: O ? "translateX(-100%)" : void 0
    });
  }, [A, O, l, h, v]), Ne(() => {
    if (!l || !s) return;
    const P = (Q) => {
      var K, le;
      const x = Q.target;
      (K = D.current) != null && K.contains(x) || (le = _.current) != null && le.contains(x) || s(!1);
    };
    return document.addEventListener("mousedown", P), () => document.removeEventListener("mousedown", P);
  }, [s, l]);
  const ae = be(() => p ? { width: typeof p == "number" ? `${p}px` : p } : void 0, [p]), V = ze((P) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Ae(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !P.danger && !P.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !P.danger && P.active && "bg-primary-soft font-medium text-primary",
        P.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (Q) => f == null ? void 0 : f(P, Q),
      disabled: P.disabled,
      children: [
        P.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: P.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: P.label })
      ]
    },
    P.key
  ), [f]), q = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: _,
      className: Ae(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !h && "absolute",
        !h && !A && "top-[calc(100%+8px)]",
        !h && A && "bottom-[calc(100%+8px)]",
        !h && O ? "right-0" : h ? void 0 : "left-0",
        N
      ),
      style: h ? { ...G, ...ae } : ae,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Ae("flex min-h-0 flex-col gap-1", $), children: n.map(V) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: Ae("flex flex-col gap-1 border-t border-lineSoft pt-2", W), children: o.map(V) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: D, className: Ae("relative inline-block", S), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Ae("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (P) => {
      m == null || m(P), s == null || s(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    h ? q && on(q, document.body) : q
  ] });
};
At.displayName = "BaseActionMenu";
const ta = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: o,
  feedback: l,
  onFeedback: s,
  disabled: m = !1
}) => {
  const [f, v] = y(!1), p = !!(o || s), h = ze(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), v(!0), window.setTimeout(() => v(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${p ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: h,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: f ? "已复制" : n,
            children: f ? /* @__PURE__ */ e(ft, { size: 15 }) : /* @__PURE__ */ e(Pt, { size: 15 })
          }
        ),
        o && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            disabled: m,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(Ir, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Rr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(Dr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, er = je.memo(ta), ra = {
  clarification: {
    icon: /* @__PURE__ */ e(ur, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(Lt, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(dr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(Lt, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ot, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  blocked: {
    icon: /* @__PURE__ */ e(Hr, { size: 16 }),
    className: "border-danger bg-danger-soft",
    iconClassName: "text-danger"
  },
  info: {
    icon: /* @__PURE__ */ e(Fr, { size: 16 }),
    className: "border-lineSubtle bg-surfaceMuted",
    iconClassName: "text-secondaryText"
  }
};
function na({ card: t, actionPending: n = !1, onAction: o }) {
  const l = ra[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${l.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${l.iconClassName}`, "aria-hidden": "true", children: l.icon }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ e("h3", { className: "m-0 text-sm font-semibold leading-5 text-primaryText", children: t.title }),
        t.statusLabel && /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText", children: t.statusLabel })
      ] }),
      t.summary && /* @__PURE__ */ e("p", { className: "m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText", children: t.summary }),
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((s, m) => /* @__PURE__ */ e("li", { children: s }, `${m}-${s}`)) }),
      t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.links.map((s) => /* @__PURE__ */ r(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary",
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: s.label }),
            /* @__PURE__ */ e(jr, { size: 12, className: "shrink-0" })
          ]
        },
        `${s.href}-${s.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((s) => /* @__PURE__ */ e(
        qe,
        {
          type: s.tone ?? "secondary",
          size: "small",
          disabled: n || !o,
          onClick: () => o == null ? void 0 : o(t.actionKey, s.id),
          children: s.label
        },
        s.id
      )) })
    ] })
  ] }) });
}
function aa({ draft: t, onPreview: n, onConfirm: o, onCancel: l }) {
  const s = t.status === "saving", m = t.status === "saved", f = t.actionable ?? !0, v = t.previewable ?? !0, p = s || m || !f || !o;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !n || !v,
        onClick: () => n == null ? void 0 : n(t.actionKey),
        className: "flex w-full min-w-0 items-start gap-3 rounded-lg text-left outline-none transition-colors enabled:hover:bg-bgLight enabled:focus-visible:ring-2 enabled:focus-visible:ring-primary-soft-strong disabled:cursor-default",
        "aria-label": `预览草稿：${t.title}`,
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(Bt, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Mira 文档草稿" }),
            /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: t.title }),
            t.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: t.summary })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: m ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !m && f && l && /* @__PURE__ */ e(
          qe,
          {
            type: "secondary",
            size: "small",
            disabled: s,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (f || m) && /* @__PURE__ */ e(
          qe,
          {
            type: m ? "secondary" : "primary",
            size: "small",
            disabled: p,
            onClick: () => o == null ? void 0 : o(t.actionKey),
            children: s ? /* @__PURE__ */ r(Ge, { children: [
              /* @__PURE__ */ e(mr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : m ? /* @__PURE__ */ r(Ge, { children: [
              /* @__PURE__ */ e(ft, { size: 14, "aria-hidden": "true" }),
              "已保存"
            ] }) : "确认保存"
          }
        )
      ] })
    ] }),
    t.status === "error" && t.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: t.errorMessage })
  ] });
}
const tr = "[[PAPER_LIST_JSON]]";
let rr = !1, Tt = null, Ct = null, St = null;
const sa = async () => (Ct || (Ct = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw Ct = null, t;
})), Ct), la = async () => (St || (St = import("remark-emoji").then((t) => t.default).catch(() => (St = null, null))), St), oa = async () => {
  Tt || (Tt = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw Tt = null, n;
  }));
  const t = await Tt;
  if (!rr) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), rr = !0;
  }
  return t;
}, Et = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => Et(n)).join("") : je.isValidElement(t) ? Et(t.props.children) : "", nr = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, ia = ({ href: t, label: n }) => {
  const o = be(() => {
    const l = n.trim();
    if (l) return l;
    try {
      const m = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (m) return decodeURIComponent(m);
    } catch {
    }
    return t;
  }, [t, n]);
  return /* @__PURE__ */ r("div", { className: "group not-prose my-2 inline-flex w-[340px] max-w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2 shadow-sm", children: [
    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-warning text-xs font-semibold tracking-wide text-white", children: "PDF" }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: o }),
      /* @__PURE__ */ e("p", { className: "m-0 text-xs text-secondaryText", children: "PDF 文档" })
    ] }),
    /* @__PURE__ */ e(
      "a",
      {
        href: t,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "新窗口打开 PDF",
        className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
        children: /* @__PURE__ */ e(xr, { size: 14 })
      }
    )
  ] });
}, ca = ({ language: t, rawCode: n, className: o, children: l }) => {
  const [s, m] = y(!1), f = ze(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), m(!0), window.setTimeout(() => m(!1), 1200);
      } catch {
      }
  }, [n]);
  return /* @__PURE__ */ r("div", { className: "code-block-wrapper not-prose", children: [
    /* @__PURE__ */ r("div", { className: "code-block-header", children: [
      /* @__PURE__ */ e("span", { className: "code-block-lang-tag", children: t || "code" }),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: f,
          className: `code-block-copy-btn ${s ? "copied" : ""}`,
          title: s ? "已复制代码" : "复制代码",
          children: [
            s ? /* @__PURE__ */ e(ft, { size: 12 }) : /* @__PURE__ */ e(Pt, { size: 12 }),
            s ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${o ?? ""}`.trim(), children: l }) })
  ] });
}, da = ({ rawCode: t }) => {
  const [n, o] = y(!1), l = ze(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), o(!0), window.setTimeout(() => o(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r("div", { className: "code-block-wrapper not-prose", children: [
    /* @__PURE__ */ r("div", { className: "code-block-header", children: [
      /* @__PURE__ */ e("span", { className: "code-block-lang-tag", children: "mermaid" }),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: l,
          className: `code-block-copy-btn ${n ? "copied" : ""}`,
          title: n ? "已复制图表代码" : "复制图表代码",
          children: [
            n ? /* @__PURE__ */ e(ft, { size: 12 }) : /* @__PURE__ */ e(Pt, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, Cr = (t) => {
  const n = typeof t.title == "string" ? t.title.trim() : "", o = typeof t.pmid == "string" ? t.pmid.trim() : "", l = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !o || !l ? null : { title: n, pmid: o, doi: l };
}, ar = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const o = [];
  return n.forEach((l, s) => {
    var u;
    const m = l.match(/PMID\s*[:：]\s*(\d{4,})/i), f = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!m || !f) return;
    const v = l.slice(0, m.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), p = ((u = n[s - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", S = Cr({
      title: v || p,
      pmid: m[1],
      doi: f[1]
    });
    S && o.push(S);
  }), o.length === 0 ? null : { items: o };
}, ua = (t) => {
  if (!t.startsWith(tr))
    return ar(t);
  const n = t.slice(tr.length).trim();
  if (!n) return null;
  try {
    const o = JSON.parse(n);
    if (!Array.isArray(o.items)) return null;
    const l = o.items.map((s) => Cr(s)).filter((s) => s !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return ar(n);
  }
}, Sr = ({
  msg: t,
  actionKey: n,
  feedback: o,
  onFeedback: l,
  onRefresh: s,
  onConfirmMiraDraft: m,
  onPreviewMiraDraft: f,
  onCancelMiraDraft: v,
  pendingDisplayActionKey: p,
  onDisplayCardAction: h,
  isTyping: S = !1,
  isStreaming: u
}) => {
  var X, w;
  const N = t.role === "user", $ = u ?? S, W = pe(null), [D, _] = y(null), [G, Y] = y(null), [O, A] = y(null), [ae, V] = y(!1), q = be(() => /```\s*mermaid/i.test(t.content), [t.content]), P = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), Q = be(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), x = be(
    () => N ? null : ua(t.content),
    [N, t.content]
  ), K = !!(x && x.items.length > 0);
  Ne(() => {
    if (!P || D || G) return;
    let b = !1;
    return sa().then((T) => {
      b || (_(() => T.remark), Y(() => T.rehype));
    }).catch(() => {
    }), () => {
      b = !0;
    };
  }, [P, D, G]), Ne(() => {
    if (!Q || ae) return;
    let b = !1;
    return la().then((T) => {
      b || (T && A(() => T), V(!0));
    }), () => {
      b = !0;
    };
  }, [Q, ae]);
  const le = be(() => {
    const b = [kr];
    return O && b.push(O), D && b.push(D), b;
  }, [O, D]), oe = be(() => {
    const b = [ln];
    return G && b.push(G), b;
  }, [G]), L = be(
    () => ({
      table: ({ node: b, ...T }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...T }) }),
      tr: ({ node: b, ...T }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...T }),
      th: ({ node: b, ...T }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...T
        }
      ),
      td: ({ node: b, ...T }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...T }),
      blockquote: ({ node: b, ...T }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...T
        }
      ),
      input: ({ node: b, type: T, checked: g, ...re }) => T === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!g,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...re
        }
      ) : /* @__PURE__ */ e("input", { type: T, ...re }),
      section: ({ node: b, ...T }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...T }),
      p: ({ node: b, children: T, ...g }) => {
        const re = je.Children.toArray(T);
        if (re.length === 1 && je.isValidElement(re[0])) {
          const ke = re[0];
          if (typeof ke.props.href == "string" && nr(ke.props.href)) {
            const xe = Et(ke.props.children).trim();
            return /* @__PURE__ */ e(ia, { href: ke.props.href, label: xe });
          }
        }
        return /* @__PURE__ */ e("p", { ...g, children: T });
      },
      a: ({ node: b, href: T, ...g }) => {
        const re = T ?? "", ke = /^https?:\/\/(dx\.)?doi\.org\//i.test(re) || /^doi:/i.test(re), xe = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(re) || /\/pmc\/|\/pmid\//i.test(re), M = nr(re);
        return ke || xe || M ? /* @__PURE__ */ e(
          "a",
          {
            href: T,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...g
          }
        ) : /* @__PURE__ */ e("a", { href: T, target: "_blank", rel: "noreferrer", ...g });
      },
      pre({ children: b, ...T }) {
        const g = je.Children.toArray(b).find(
          (I) => je.isValidElement(I) && typeof I.props.className == "string" && I.props.className.includes("language-")
        );
        if (!g)
          return /* @__PURE__ */ e("pre", { ...T, children: b });
        const re = g.props.className ?? "", ke = re.match(/language-([\w-]+)/), xe = ke ? ke[1].toLowerCase() : "code", M = Et(g.props.children).replace(/\n$/, "");
        return xe === "mermaid" ? /* @__PURE__ */ e(da, { rawCode: M }) : /* @__PURE__ */ e(ca, { language: xe, rawCode: M, className: re, children: g.props.children });
      },
      code({ children: b, className: T, ...g }) {
        return T ? /* @__PURE__ */ e("code", { className: T, ...g, children: b }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...g,
            children: b
          }
        );
      }
    }),
    []
  );
  return Ne(() => {
    if (N || $ || !q) return;
    const b = W.current;
    if (!b) return;
    const T = Array.from(b.querySelectorAll(".mermaid")).filter(
      (g) => g.dataset.processed !== "true"
    );
    T.length !== 0 && oa().then(async (g) => {
      await Promise.all(
        T.map(async (re, ke) => {
          var j;
          const xe = (j = re.textContent) == null ? void 0 : j.trim();
          if (!xe) return;
          const M = `mermaid-${Date.now()}-${ke}`, { svg: I } = await g.render(M, xe);
          re.innerHTML = I, re.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [N, $, q, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${N ? "justify-end" : "justify-start"}`, children: N ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (X = t.references) == null ? void 0 : X.map((b) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${b.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              b.type === "skill" ? /* @__PURE__ */ e(pr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: b.label, children: b.label })
            ]
          },
          b.id
        )),
        (w = t.attachments) == null ? void 0 : w.map((b) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${b.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: b.status === "error" ? "alert" : void 0,
            title: b.errorMessage,
            children: [
              b.status === "uploading" ? /* @__PURE__ */ e(mr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : b.status === "error" ? /* @__PURE__ */ e(qr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : b.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: b.previewUrl, alt: b.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(fr, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: b.name, children: b.name }),
              b.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              b.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          b.id
        ))
      ] }),
      /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: t.content })
    ] }),
    t.content && /* @__PURE__ */ e(
      er,
      {
        markdownContent: t.content,
        copyLabel: "复制消息"
      }
    )
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    K && x ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: x.items.map((b, T) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: b.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${b.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: b.pmid
                }
              ),
              "  ",
              "|",
              "  ",
              "DOI:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://doi.org/${b.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: b.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${b.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(xr, { size: 14 })
            }
          )
        ]
      },
      `${b.pmid}-${T}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: W,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Nr,
          {
            remarkPlugins: le,
            rehypePlugins: oe,
            components: L,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      aa,
      {
        draft: t.miraDraft,
        onPreview: f,
        onConfirm: m,
        onCancel: v
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      na,
      {
        card: t.displayCard,
        actionPending: p === t.displayCard.actionKey,
        onAction: h
      }
    ),
    !K && t.content && !$ && /* @__PURE__ */ e(
      er,
      {
        markdownContent: t.content,
        onRefresh: s,
        feedback: o,
        onFeedback: n && l ? (b) => l(n, b) : void 0,
        disabled: $
      }
    )
  ] }) }) });
}, ma = je.memo(Sr), pa = {
  queued: "等待中…",
  thinking: "思考中…",
  analyzing: "分析中…",
  searching: "搜索中…",
  executing: "执行中…",
  generating: "生成中…",
  awaiting_clarification: "等待补充信息",
  awaiting_confirmation: "等待确认",
  awaiting_approval: "等待审批",
  warning: "处理时出现提醒",
  failed: "处理失败"
}, ha = {
  queued: /* @__PURE__ */ e(_t, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(gr, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(ur, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(Lt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(dr, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Ot, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(br, { size: 14, className: "text-danger" })
}, sr = {
  knowledge: {
    icon: /* @__PURE__ */ e(Gt, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Or, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(Wr, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(Gt, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(gr, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, fa = {
  running: {
    icon: /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(Lt, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(br, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(Ur, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ot, { size: 13 }),
    colorClass: "text-warning"
  }
}, qt = ({
  phase: t,
  searchSteps: n = [],
  label: o,
  defaultExpanded: l = !0
}) => {
  const [s, m] = y(l), f = pe(null);
  Ne(() => {
    n.length > 0 && m(!0);
  }, [n.length]);
  const v = n.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: ha[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: o || pa[t] }),
      v && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => m((p) => !p),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            s ? /* @__PURE__ */ e(zt, { size: 12 }) : /* @__PURE__ */ e($t, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    v && /* @__PURE__ */ e(
      "div",
      {
        ref: f,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${s ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((p, h) => {
          const S = sr[p.type] ?? sr.tool, u = p.status ? fa[p.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${S.colorClass}`, children: S.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: p.label }),
                    u && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${u.colorClass}`,
                        "aria-label": p.status,
                        children: u.icon
                      }
                    )
                  ] }),
                  (p.detail || p.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    p.detail,
                    p.detail && p.resultCount !== void 0 ? " · " : "",
                    p.resultCount !== void 0 ? `${p.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            p.id ?? `${p.type}-${h}-${p.label}`
          );
        })
      }
    )
  ] });
}, xa = je.memo(qt);
function ba(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t && (t.current = n);
}
function Ft(t) {
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : 0;
}
function ga({
  messages: t,
  isTyping: n,
  statusPhase: o = "thinking",
  statusLabel: l,
  statusVisible: s,
  searchSteps: m = [],
  hasReceivedAssistantChunk: f = !1,
  contentMaxWidth: v = 800,
  selection: p,
  scrollbar: h,
  feedbackByMessageKey: S,
  getMessageKey: u = (V, q) => String(q),
  onFeedback: N,
  onRegenerate: $,
  onConfirmMiraDraft: W,
  onPreviewMiraDraft: D,
  onCancelMiraDraft: _,
  pendingDisplayActionKey: G,
  onDisplayCardAction: Y,
  onScroll: O,
  scrollContainerRef: A,
  onMessageElement: ae
}) {
  var ke, xe;
  const V = !!p, q = pe(null), P = pe(null), Q = pe(/* @__PURE__ */ new Map()), x = pe(), [K, le] = y(), L = n && (s ?? !f) || s === !0 && (o === "awaiting_clarification" || o === "awaiting_confirmation" || o === "awaiting_approval" || o === "warning" || o === "failed");
  let X = -1, w = -1;
  if (n) {
    for (let M = t.length - 1; M >= 0; M -= 1)
      if (((ke = t[M]) == null ? void 0 : ke.role) === "user") {
        w = M;
        break;
      }
    for (let M = t.length - 1; M > w; M -= 1)
      if (((xe = t[M]) == null ? void 0 : xe.role) === "assistant") {
        X = M;
        break;
      }
  }
  const b = w >= 0 ? u(t[w], w) : void 0, T = X >= 0 ? u(t[X], X) : void 0, g = b && T ? `${b}:${T}` : void 0, re = ze(
    (M) => {
      q.current = M, ba(A, M);
    },
    [A]
  );
  return Ht(() => {
    if (!g || !T || w < 0 || X < 0)
      return;
    const M = q.current, I = P.current, j = Q.current.get(w);
    if (!M || !I || !j) return;
    const he = () => {
      const Se = window.getComputedStyle(M), ye = window.getComputedStyle(I), U = M.clientHeight - Ft(Se.paddingTop) - Ft(Se.paddingBottom), ee = Ft(ye.rowGap || ye.gap), Z = Math.max(
        0,
        Math.floor(U - j.offsetHeight - ee)
      );
      le(
        (R) => (R == null ? void 0 : R.assistantKey) === T && R.minHeight === Z ? R : { assistantKey: T, minHeight: Z }
      );
    };
    he();
    const ge = new ResizeObserver(he);
    return ge.observe(M), ge.observe(j), () => ge.disconnect();
  }, [
    X,
    T,
    g,
    w
  ]), Ht(() => {
    if (!g || !T || (K == null ? void 0 : K.assistantKey) !== T || w < 0 || x.current === g)
      return;
    const M = q.current, I = Q.current.get(w);
    !M || !I || (M.scrollTo({ top: I.offsetTop, behavior: "auto" }), x.current = g);
  }, [T, g, w, K]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: re,
        "data-chat-scroll-container": !0,
        onScroll: O,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: P,
            className: `flex w-full flex-col ${V ? "gap-3" : "gap-8"}`,
            style: { maxWidth: v },
            children: [
              t.map((M, I) => {
                const j = u(M, I), he = (p == null ? void 0 : p.selectedMessageKeys.has(j)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": I,
                    "data-chat-turn-reserved": (K == null ? void 0 : K.assistantKey) === j ? "true" : void 0,
                    ref: (ge) => {
                      ge ? Q.current.set(I, ge) : Q.current.delete(I), ae == null || ae(I, ge);
                    },
                    className: V ? "flex w-full items-start gap-2" : void 0,
                    style: (K == null ? void 0 : K.assistantKey) === j ? { minHeight: K.minHeight } : void 0,
                    children: [
                      p && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => p.onToggleMessage(j),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": he ? "取消选择消息" : "选择消息",
                          children: he ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ft, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: p ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${he ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${M.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Sr,
                              {
                                msg: M,
                                actionKey: j,
                                feedback: S == null ? void 0 : S[j],
                                onFeedback: N,
                                onRefresh: $ ? () => $(I) : void 0,
                                onConfirmMiraDraft: W,
                                onPreviewMiraDraft: D,
                                onCancelMiraDraft: _,
                                pendingDisplayActionKey: G,
                                onDisplayCardAction: Y,
                                isTyping: n && I === X
                              }
                            ),
                            I === X && L && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              qt,
                              {
                                phase: o,
                                label: l,
                                searchSteps: [...m]
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  j
                );
              }),
              X < 0 && L && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                qt,
                {
                  phase: o,
                  label: l,
                  searchSteps: [...m]
                }
              ) }) })
            ]
          }
        )
      }
    ),
    h && h.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${h.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: h.height,
          transform: `translateY(${h.top}px)`
        }
      }
    )
  ] });
}
je.memo(ga);
function bs({
  children: t,
  maxWidth: n = 840,
  disclaimer: o = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: n },
      children: [
        t,
        o && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: o })
      ]
    }
  );
}
const gs = cr(
  function({ header: n, children: o, sidePanels: l }, s) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: s, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: o }),
        l
      ] })
    ] });
  }
), ys = cr(
  function({ open: n, width: o, resizing: l = !1, overlay: s = !1, overlayRight: m = 0, children: f }, v) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: v,
        "data-overlay": s ? "true" : "false",
        style: { width: n ? o : 0, ...s ? { right: m } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${s ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: o }, className: "h-full min-w-0", children: f })
      }
    );
  }
);
function ya({
  isSidebarOpen: t,
  title: n,
  editingTitle: o,
  titleInputRef: l,
  divided: s = !1,
  actions: m,
  onOpenSidebar: f,
  onStartEditTitle: v,
  onEditingTitleChange: p,
  onCommitTitle: h,
  onEditingTitleKeyDown: S
}) {
  return /* @__PURE__ */ r(
    "header",
    {
      className: `z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${s ? "border-b border-chatWorkspaceDivider" : ""}`,
      children: [
        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
          !t && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: f,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(yr, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: o !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: o,
              onChange: (N) => p == null ? void 0 : p(N.target.value),
              onBlur: h,
              onKeyDown: S,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${v ? "cursor-pointer" : ""}`,
              onClick: v,
              title: v ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        m && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: m })
      ]
    }
  );
}
function vs({ active: t = !1, icon: n, label: o, onClick: l }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: l,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: o })
      ]
    }
  );
}
function ws({
  items: t,
  activeMessageIndex: n,
  initiallyExpanded: o = !1,
  onSelect: l
}) {
  const [s, m] = y(o), [f, v] = y(null), [p, h] = y(0), [S, u] = y(0), [N, $] = y(!1), W = pe(null), D = pe({}), _ = pe(null), G = ze(() => {
    const A = W.current;
    if (!A) {
      h(0), u(0);
      return;
    }
    const { scrollTop: ae, scrollHeight: V, clientHeight: q } = A;
    if (V <= q || q <= 0) {
      h(0), u(0);
      return;
    }
    const P = Math.max(q / V * q, 24), Q = q - P, x = ae / Math.max(V - q, 1);
    h(P), u(Q * x);
  }, []), Y = ze(() => {
    G(), $(!0), _.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => $(!1), 650);
  }, [G]), O = () => {
    _.current !== null && (window.clearTimeout(_.current), _.current = null), m(!1), v(null), $(!1);
  };
  return Ne(() => {
    if (!s) return;
    const A = window.requestAnimationFrame(G);
    return () => window.cancelAnimationFrame(A);
  }, [s, t.length, G]), Ne(() => {
    const A = W.current, ae = D.current[n];
    if (!A || !ae) return;
    const V = A.scrollTop, q = V + A.clientHeight, P = ae.offsetTop, Q = P + ae.offsetHeight, x = 16;
    P < V + x ? A.scrollTo({ top: Math.max(P - x, 0), behavior: "auto" }) : Q > q - x && A.scrollTo({
      top: Math.max(Q - A.clientHeight + x, 0),
      behavior: "auto"
    });
  }, [n, t.length]), Ne(() => () => {
    _.current !== null && window.clearTimeout(_.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => m(!0),
      onMouseLeave: O,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: W,
          onScroll: Y,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${s ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((A) => {
              const ae = A.messageIndex === n, V = f === A.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (q) => {
                    D.current[A.messageIndex] = q;
                  },
                  type: "button",
                  onClick: () => l(A.messageIndex),
                  onMouseEnter: () => v(A.messageIndex),
                  onMouseLeave: () => v(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${s ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${A.messageIndex + 1} 条用户消息`,
                  title: A.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${s ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${ae ? "text-primary" : V ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: A.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${ae ? "h-[4px] w-[12px] bg-primary" : V ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                A.messageIndex
              );
            }) }),
            s && p > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${N ? "opacity-100" : "opacity-0"}`,
                style: { height: p, transform: `translateY(${S}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Ns({
  selectedCount: t,
  shareLink: n,
  modalOpen: o,
  copied: l = !1,
  contentMaxWidth: s = 840,
  onCancel: m,
  onCreateLink: f,
  onCloseModal: v,
  onCopyLink: p
}) {
  return /* @__PURE__ */ r(Ge, { children: [
    /* @__PURE__ */ e("div", { className: "w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur", children: /* @__PURE__ */ r(
      "div",
      {
        className: "mx-auto flex w-full items-center justify-between gap-4",
        style: { maxWidth: s },
        children: [
          /* @__PURE__ */ r("div", { className: "min-w-0 text-sm text-secondaryText", children: [
            "已选择 ",
            t,
            " 条对话"
          ] }),
          /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(qe, { type: "secondary", size: "small", onClick: m, children: "取消" }),
            /* @__PURE__ */ e(
              qe,
              {
                type: "primary",
                size: "small",
                disabled: t <= 0,
                onClick: f,
                children: "创建分享链接"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e(
      Ut,
      {
        visible: o,
        title: "创建分享链接",
        width: 450,
        onCancel: v,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: p,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  l ? /* @__PURE__ */ e(ft, { size: 14 }) : /* @__PURE__ */ e(Pt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l ? "已复制" : "复制" })
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function Mr({
  attachments: t,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: o = !1,
  deletingAttachmentId: l,
  unavailableHint: s,
  error: m,
  onRequestUpload: f,
  onDeleteAttachment: v
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ r("div", { className: f ? "pr-28" : void 0, children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      f && /* @__PURE__ */ e("div", { className: "absolute right-0 top-6", children: /* @__PURE__ */ e(
        qe,
        {
          type: "secondary",
          size: "small",
          disabled: o,
          onClick: f,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            o ? /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Vr, { size: 14 }),
            o ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${f ? "pr-28" : ""}`, children: t.map((p) => {
      const h = l === p.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: p.statusLabel,
          children: [
            /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: p.name }),
            p.status === "processing" && /* @__PURE__ */ e(ot, { size: 12, className: "animate-spin" }),
            v && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: h,
                onClick: () => v(p.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${p.name}`,
                title: "删除附件",
                children: h ? /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(vr, { size: 13 })
              }
            )
          ]
        },
        p.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    s && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: s }),
    m && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: m })
  ] });
}
const va = {
  disabled: /* @__PURE__ */ e(Kr, { size: 14 }),
  pending: /* @__PURE__ */ e(_t, { size: 14 }),
  indexed: /* @__PURE__ */ e(gt, { size: 14 })
};
function $r({
  createdByName: t,
  updatedByName: n,
  updatedAt: o,
  index: l
}) {
  return !t && !n && !o && !l ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    n && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      n
    ] }),
    o && /* @__PURE__ */ e("span", { children: o }),
    l && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: l.detail, children: [
      va[l.status],
      l.statusLabel
    ] })
  ] });
}
const wa = "_preview_a55vk_1", Na = "_editor_a55vk_3", Lr = {
  preview: wa,
  editor: Na
};
function ka({
  document: t,
  layout: n = "page"
}) {
  const [o, l] = y(!1), s = pe(null), m = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  Ne(() => () => {
    s.current !== null && window.clearTimeout(s.current);
  }, []);
  const f = () => {
    l(!0), s.current !== null && window.clearTimeout(s.current), s.current = window.setTimeout(() => l(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${m}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        $r,
        {
          createdByName: t.createdByName,
          updatedByName: t.updatedByName,
          updatedAt: t.updatedAt,
          index: t.index
        }
      ),
      /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
    ] }),
    /* @__PURE__ */ r(
      "section",
      {
        onScroll: f,
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${o ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${Lr.preview} ${m}`, children: /* @__PURE__ */ e(Nr, { remarkPlugins: [kr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Vt, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            Mr,
            {
              attachments: t.attachments,
              className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`
            }
          )
        ]
      }
    )
  ] });
}
function ks({
  tabs: t,
  activeKey: n,
  onSelectTab: o,
  onCloseTab: l,
  onClose: s,
  pendingActionKey: m,
  onAction: f,
  resolveActions: v,
  renderContent: p,
  onResizeStart: h
}) {
  const S = t.find(($) => $.key === n) ?? null, u = S ? (v == null ? void 0 : v(S)) ?? S.actions : void 0, N = S ? p == null ? void 0 : p(S) : void 0;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: h,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map(($) => {
        const W = $.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => o($.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${W ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                $.type === "knowledge" || $.type === "draft" ? /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Xr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: $.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (D) => {
                D.stopPropagation(), l($.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${$.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(bt, { size: 12 })
            }
          )
        ] }, $.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        S && (u == null ? void 0 : u.map(($) => /* @__PURE__ */ e(
          qe,
          {
            type: $.tone ?? "secondary",
            size: "small",
            disabled: m === S.key || !f,
            onClick: () => f == null ? void 0 : f(S.key, $.id),
            children: $.label
          },
          $.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: s,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(bt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: S ? N || (S.document ? /* @__PURE__ */ e(ka, { document: S.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: S.loading ? "正在加载文档…" : S.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Ts({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: o,
  knowledgeDocs: l,
  experiments: s,
  activePreviewKey: m,
  onSearchQueryChange: f,
  onOpenKnowledge: v,
  onOpenExperiment: p,
  onResizeStart: h
}) {
  const S = l.length + s.length;
  return /* @__PURE__ */ r("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: h,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ r("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ r("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: t }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(ct, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (u) => f(u.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : S === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ge, { children: [
        l.map((u) => {
          const N = `knowledge:${u.id}`, $ = m === N;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => v(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${$ ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${$ ? "font-semibold" : "font-normal"}`, children: u.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: u.tags[0] ?? "未分类" })
              ]
            },
            u.id
          );
        }),
        s.map((u) => {
          const N = `experiment:${u.id}`, $ = m === N;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => p(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${$ ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${$ ? "font-semibold" : "font-normal"}`, children: u.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: u.tags[0] ?? u.status })
              ]
            },
            u.id
          );
        })
      ] }) }) })
    ] }) })
  ] });
}
const Ta = 50, Ca = 100 * 1024 * 1024, Sa = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", Ma = [
  { id: "docx", badge: "D", description: "文档创建、编辑与分析，支持批注和修订。", source: "内置" },
  { id: "pdf", badge: "P", description: "PDF 提取、合并拆分、表单处理与批量分析。", source: "内置" },
  { id: "pptx", badge: "P", description: "演示文稿创建与编辑，支持布局和演讲备注。", source: "内置" },
  { id: "skill-creator", badge: "S", description: "快速创建或迭代 Agent Skill 的结构与说明。", source: "内置" },
  { id: "xlsx", badge: "X", description: "表格计算、公式处理和数据分析。", source: "内置" },
  { id: "code-quality-checker", badge: "C", description: "检查代码风格、潜在问题和质量风险。", source: "内置" },
  { id: "design-prd-analyst", badge: "A", description: "分析 PRD 并提炼可执行的研发要点。", source: "内置" },
  { id: "home-delivery", badge: "H", description: "外卖与生活配送场景的智能推荐。", source: "内置" },
  { id: "life-assistant", badge: "L", description: "生活事务分发与跨技能场景协作。", source: "内置" },
  { id: "reminders", badge: "R", description: "提醒创建、查看和完成状态管理。", source: "内置" }
], $a = /(?:^|\s)\/([^\s/]*)$/, La = /(?:^|\s)@([^\s@]*)$/, za = (t, n) => {
  const l = t.slice(0, n).match($a);
  return l ? l[1] : null;
}, Aa = (t, n) => {
  const l = t.slice(0, n).match(La);
  return l ? l[1] : null;
}, Cs = (t, n, o, l) => {
  const s = t.slice(0, n), m = t.slice(o), f = s.match(/(?:^|\s)\/[^\s/]*$/);
  if (!f) {
    const u = `/${l} `;
    return { value: `${s}${u}${m}`, cursor: s.length + u.length };
  }
  const v = s.length - f[0].length, h = `${f[0].startsWith(" ") ? " " : ""}/${l} `, S = `${s.slice(0, v)}${h}`;
  return {
    value: `${S}${m}`,
    cursor: S.length
  };
}, Ss = (t, n, o, l) => {
  const s = t.slice(0, n), m = t.slice(o), f = s.match(/(?:^|\s)@[^\s@]*$/);
  if (!f) {
    const u = `@${l} `;
    return { value: `${s}${u}${m}`, cursor: s.length + u.length };
  }
  const v = s.length - f[0].length, h = `${f[0].startsWith(" ") ? " " : ""}@${l} `, S = `${s.slice(0, v)}${h}`;
  return {
    value: `${S}${m}`,
    cursor: S.length
  };
}, Ea = [], Ms = [], zr = ({
  onSend: t,
  disabled: n,
  autoFocus: o = !1,
  isStreaming: l = !1,
  onCancel: s,
  leadingControls: m,
  skillOptions: f = Ma,
  fileOptions: v = Ea,
  uploadAccept: p,
  validateUploadFile: h,
  onUploadValidationError: S
}) => {
  const [u, N] = y(""), [$, W] = y(!1), [D, _] = y(!1), [G, Y] = y(""), [O, A] = y(-1), [ae, V] = y(!1), [q, P] = y(""), [Q, x] = y(-1), [K, le] = y([]), [oe, L] = y([]), [X, w] = y([]), [b, T] = y(!1), g = pe(null), re = pe(null), ke = _r(), xe = pe([]), M = l, I = M && !!s;
  Ne(() => {
    xe.current = K;
  }, [K]), Ne(() => () => {
    xe.current.forEach((c) => {
      c.previewUrl && URL.revokeObjectURL(c.previewUrl);
    });
  }, []);
  const j = be(() => {
    const c = G.trim().toLowerCase();
    return c ? f.filter((k) => `${k.id} ${k.description} ${k.source}`.toLowerCase().includes(c)) : f;
  }, [f, G]), he = be(() => {
    const c = q.trim().toLowerCase();
    return c ? v.filter((k) => `${k.name} ${k.projectName} ${k.sourceType} ${k.operatorName ?? ""} ${k.operatedAt ?? ""}`.toLowerCase().includes(c)) : v.filter((k) => k.isRecent).slice(0, 10);
  }, [v, q]), ge = ze((c, k) => {
    const ne = k ?? c.length, de = za(c, ne);
    if (de !== null) {
      _(!0), Y(de), A(-1), V(!1), P(""), x(-1);
      return;
    }
    const ue = Aa(c, ne);
    if (ue !== null) {
      V(!0), P(ue), x(-1), _(!1), Y(""), A(-1);
      return;
    }
    _(!1), Y(""), A(-1), V(!1), P(""), x(-1);
  }, []), Se = ze((c) => {
    if (c.disabled) return;
    const k = g.current, ne = (k == null ? void 0 : k.selectionStart) ?? u.length, de = (k == null ? void 0 : k.selectionEnd) ?? ne, ue = u.slice(0, ne), fe = u.slice(de), ce = (() => {
      const se = ue.match(/(?:^|\s)\/[^\s/]*$/);
      if (!se)
        return { value: u, cursor: ne };
      const H = ue.length - se[0].length, Pe = se[0].startsWith(" ") ? " " : "", De = `${ue.slice(0, H)}${Pe}`;
      return {
        value: `${De}${fe}`,
        cursor: De.length
      };
    })();
    L((se) => {
      const H = `skill-${c.id}`;
      return se.some((Pe) => Pe.id === H) ? se : [...se, { id: H, type: "skill", label: c.id, sourceId: c.id }];
    }), N(ce.value), _(!1), Y(""), A(-1), requestAnimationFrame(() => {
      k && (k.focus(), k.setSelectionRange(ce.cursor, ce.cursor));
    });
  }, [u]), ye = ze((c) => {
    const k = g.current, ne = (k == null ? void 0 : k.selectionStart) ?? u.length, de = (k == null ? void 0 : k.selectionEnd) ?? ne, ue = u.slice(0, ne), fe = u.slice(de), ce = (() => {
      const se = ue.match(/(?:^|\s)@[^\s@]*$/);
      if (!se)
        return { value: u, cursor: ne };
      const H = ue.length - se[0].length, Pe = se[0].startsWith(" ") ? " " : "", De = `${ue.slice(0, H)}${Pe}`;
      return {
        value: `${De}${fe}`,
        cursor: De.length
      };
    })();
    w((se) => {
      const H = `doc-${c.id}`;
      return se.some((Pe) => Pe.id === H) ? se : [...se, { id: H, type: "doc", label: c.name, sourceId: c.id }];
    }), N(ce.value), V(!1), P(""), x(-1), requestAnimationFrame(() => {
      k && (k.focus(), k.setSelectionRange(ce.cursor, ce.cursor));
    });
  }, [u]), U = ze(() => {
    T(!1);
    const c = re.current;
    if (c) {
      try {
        if ("showPicker" in c && typeof c.showPicker == "function") {
          c.showPicker();
          return;
        }
      } catch {
      }
      c.click();
    }
  }, []), ee = ze((c) => {
    const k = Array.from(c.target.files ?? []);
    if (k.length === 0) return;
    const ne = k.filter((de) => {
      const ue = h == null ? void 0 : h(de);
      return ue ? (S == null || S(ue), !1) : !0;
    });
    le((de) => {
      const ue = new Set(de.map((ce) => ce.id)), fe = [...de];
      return ne.forEach((ce) => {
        if (ce.size > Ca || fe.length >= Ta) return;
        const se = `${ce.name}-${ce.size}-${ce.lastModified}`;
        if (ue.has(se)) return;
        const H = ce.type.startsWith("image/");
        ue.add(se), fe.push({
          id: se,
          name: ce.name,
          mimeType: ce.type || "application/octet-stream",
          previewUrl: H ? URL.createObjectURL(ce) : void 0,
          file: ce
        });
      }), fe;
    }), c.target.value = "";
  }, [S, h]), Z = ze((c) => {
    le((k) => {
      const ne = k.find((de) => de.id === c);
      return ne != null && ne.previewUrl && URL.revokeObjectURL(ne.previewUrl), k.filter((de) => de.id !== c);
    });
  }, []), R = ze((c) => {
    L((k) => k.filter((ne) => ne.id !== c));
  }, []), Ee = ze((c) => {
    w((k) => k.filter((ne) => ne.id !== c));
  }, []), $e = ze(() => {
    !u.trim() || n || l || (t({
      content: u,
      attachments: K.map((c) => ({
        id: c.id,
        name: c.name,
        mimeType: c.mimeType,
        previewUrl: c.previewUrl,
        file: c.file
      })),
      references: [...oe, ...X]
    }), N(""), le([]), L([]), w([]), _(!1), Y(""), A(-1), V(!1), P(""), x(-1));
  }, [u, n, l, t, K, X, oe]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: ke,
        ref: re,
        type: "file",
        multiple: !0,
        accept: p,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: ee
      }
    ),
    (K.length > 0 || oe.length > 0 || X.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      oe.map((c) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(pr, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: c.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => R(c.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${c.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        c.id
      )),
      X.map((c) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: c.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ee(c.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${c.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        c.id
      )),
      K.map((c) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            c.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: c.previewUrl, alt: c.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(fr, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: c.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: c.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Z(c.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${c.name}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        c.id
      ))
    ] }) }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: g,
        autoFocus: o,
        value: u,
        onChange: (c) => {
          const k = c.target.value;
          N(k), ge(k, c.target.selectionStart);
        },
        onClick: (c) => {
          ge(c.currentTarget.value, c.currentTarget.selectionStart);
        },
        onKeyUp: (c) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(c.key) || ge(c.currentTarget.value, c.currentTarget.selectionStart);
        },
        onKeyDown: (c) => {
          if (c.key === "Enter" && (c.shiftKey || c.metaKey || c.ctrlKey)) {
            c.preventDefault();
            const k = c.currentTarget, ne = k.selectionStart ?? u.length, de = k.selectionEnd ?? ne, ue = `${u.slice(0, ne)}
${u.slice(de)}`, fe = ne + 1;
            N(ue), ge(ue, fe), requestAnimationFrame(() => {
              k.setSelectionRange(fe, fe);
            });
            return;
          }
          if (D) {
            if (c.key === "ArrowDown") {
              c.preventDefault(), A((k) => j.length === 0 ? -1 : k < 0 ? 0 : (k + 1) % j.length);
              return;
            }
            if (c.key === "ArrowUp") {
              c.preventDefault(), A((k) => j.length === 0 ? -1 : k < 0 ? j.length - 1 : (k - 1 + j.length) % j.length);
              return;
            }
            if (c.key === "Escape") {
              c.preventDefault(), _(!1), Y(""), A(-1);
              return;
            }
            if (c.key === "Enter" && !c.shiftKey) {
              c.preventDefault();
              const k = O >= 0 ? j[O] : void 0;
              k && Se(k);
              return;
            }
          }
          if (ae) {
            if (c.key === "ArrowDown") {
              c.preventDefault(), x((k) => he.length === 0 ? -1 : k < 0 ? 0 : (k + 1) % he.length);
              return;
            }
            if (c.key === "ArrowUp") {
              c.preventDefault(), x((k) => he.length === 0 ? -1 : k < 0 ? he.length - 1 : (k - 1 + he.length) % he.length);
              return;
            }
            if (c.key === "Escape") {
              c.preventDefault(), V(!1), P(""), x(-1);
              return;
            }
            if (c.key === "Enter" && !c.shiftKey) {
              c.preventDefault();
              const k = Q >= 0 ? he[Q] : void 0;
              k && ye(k);
              return;
            }
          }
          c.key === "Enter" && !c.shiftKey && (c.preventDefault(), $e());
        },
        disabled: n,
        onFocus: () => W(!0),
        onBlur: () => {
          W(!1), _(!1), V(!1);
        },
        placeholder: $ ? Sa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${K.length > 0 || oe.length > 0 || X.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    D && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (c) => c.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: G ? `搜索 skill：${G}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : j.map((c, k) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: c.disabled,
          title: c.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${c.disabled ? "cursor-not-allowed opacity-50" : k === O ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Se(c),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: c.badge }),
            /* @__PURE__ */ r("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: c.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: c.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: c.disabledReason || c.source })
          ]
        },
        c.id
      )) })
    ] }) }),
    ae && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (c) => c.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: q ? `搜索文件：${q}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !q && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(_t, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        he.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : he.map((c, k) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${k === Q ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => ye(c),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Bt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: c.name }),
              !q && c.operatorName && c.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${c.operatorName} ${c.operatedAt}` })
            ]
          },
          c.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
        m,
        /* @__PURE__ */ r(
          "div",
          {
            className: "relative",
            onMouseEnter: () => T(!0),
            onMouseLeave: () => T(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: U,
                  "aria-controls": ke,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(wr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${b ? "block" : "hidden"}`,
                  children: [
                    /* @__PURE__ */ e("div", { children: "上传文件，支持各类文档和图片" }),
                    /* @__PURE__ */ e("div", { children: "最多 50 个，每个 100 MB" })
                  ]
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: M ? s : $e,
          disabled: M ? !I : n || !u.trim(),
          "aria-label": M ? "停止生成" : "发送消息",
          title: M ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${I || !M && u.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: M ? /* @__PURE__ */ e(Gr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Yr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
je.memo(zr);
const Pa = ({ messages: t, isTyping: n, statusPhase: o = "thinking", searchSteps: l = [] }) => {
  const s = pe(null);
  Ne(() => {
    var f;
    (f = s.current) == null || f.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const m = be(() => t.map((f, v) => /* @__PURE__ */ e(ma, { msg: f }, `${v}-${f.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    m,
    n && /* @__PURE__ */ e(xa, { phase: o, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: s })
  ] });
};
je.memo(Pa);
const Ba = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], Ar = ({ onSelect: t, prompts: n = Ba, disabled: o = !1 }) => {
  const l = ze((s) => {
    t(s);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((s) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => l(s),
      disabled: o,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: s
    },
    s
  )) });
};
je.memo(Ar);
const _a = (t, n) => {
  const o = Math.random() * t, l = Math.random() * n;
  return {
    x: o,
    y: l,
    baseX: o,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function $s({ onLogin: t, onLoginSuccess: n, onNavigate: o }) {
  const l = pe(null), s = pe(null), [m, f] = y(""), [v, p] = y(""), [h, S] = y(!0), [u, N] = y(!1), [$, W] = y(!1), [D, _] = y(null), G = pe(null), [Y, O] = y(!1), [A, ae] = y("email"), [V, q] = y(""), [P, Q] = y(""), [x, K] = y(""), [le, oe] = y(""), [L, X] = y(0), [w, b] = y(!1), T = be(() => m.trim().length > 0 && v.trim().length > 0 && !u, [
    m,
    u,
    v
  ]);
  Ne(() => {
    if (L <= 0) return;
    const M = window.setTimeout(() => X((I) => I - 1), 1e3);
    return () => clearTimeout(M);
  }, [L]), Ne(
    () => () => {
      G.current !== null && window.clearTimeout(G.current);
    },
    []
  ), Ne(() => {
    const M = l.current, I = s.current;
    if (!M || !I) return;
    const j = M.getContext("2d");
    if (!j) return;
    const he = window.getComputedStyle(document.documentElement), ge = he.getPropertyValue("--chatui-color-auth-particle-active").trim(), Se = he.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ye = he.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let U = 0, ee = 0, Z = 0, R = window.devicePixelRatio || 1, Ee = [];
    const $e = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, c = 150, k = () => {
      const se = I.getBoundingClientRect();
      R = window.devicePixelRatio || 1, ee = se.width, Z = se.height, M.width = ee * R, M.height = Z * R, M.style.width = `${ee}px`, M.style.height = `${Z}px`, j.setTransform(R, 0, 0, R, 0, 0);
      const H = ee < 768 ? 40 : 90;
      Ee = Array.from({ length: H }, () => _a(ee, Z));
    }, ne = (se) => {
      j.beginPath(), j.arc(se.x, se.y, se.size, 0, Math.PI * 2), j.closePath(), j.fill();
    }, de = () => {
      j.clearRect(0, 0, ee, Z);
      for (let se = 0; se < Ee.length; se += 1) {
        const H = Ee[se];
        H.x += H.vx, H.y += H.vy, (H.x < 0 || H.x > ee) && (H.vx = -H.vx), (H.y < 0 || H.y > Z) && (H.vy = -H.vy);
        const Pe = $e.x - H.x, De = $e.y - H.y, We = Math.sqrt(Pe * Pe + De * De) || 1, Ve = Pe / We, Je = De / We, Ce = ($e.radius - We) / $e.radius, J = Ve * Ce * H.density, et = Je * Ce * H.density;
        if (We < $e.radius)
          H.x -= J * 0.5, H.y -= et * 0.5, j.fillStyle = ge, H.size = Math.min(H.size + 0.1, 2.5);
        else {
          if (H.x !== H.baseX) {
            const Fe = H.x - H.baseX;
            H.x -= Fe / 50;
          }
          if (H.y !== H.baseY) {
            const Fe = H.y - H.baseY;
            H.y -= Fe / 50;
          }
          j.fillStyle = Se, H.size = Math.max(H.size - 0.05, 1);
        }
        ne(H);
        for (let Fe = se; Fe < Ee.length; Fe += 1) {
          const Be = Ee[Fe], Ye = H.x - Be.x, Oe = H.y - Be.y, Qe = Math.sqrt(Ye * Ye + Oe * Oe);
          if (Qe < c) {
            const at = (1 - Qe / c) * 0.4;
            j.beginPath(), j.strokeStyle = ye, j.globalAlpha = at, j.lineWidth = 1, j.moveTo(H.x, H.y), j.lineTo(Be.x, Be.y), j.stroke(), j.globalAlpha = 1, j.closePath();
          }
        }
      }
      U = window.requestAnimationFrame(de);
    }, ue = (se) => {
      const H = I.getBoundingClientRect();
      $e.x = se.clientX - H.left, $e.y = se.clientY - H.top;
    }, fe = () => {
      $e.x = -1e3, $e.y = -1e3;
    }, ce = (se) => {
      if (se.touches.length < 1) return;
      const H = I.getBoundingClientRect();
      $e.x = se.touches[0].clientX - H.left, $e.y = se.touches[0].clientY - H.top;
    };
    return k(), de(), window.addEventListener("resize", k), I.addEventListener("mousemove", ue), I.addEventListener("mouseleave", fe), I.addEventListener("touchmove", ce, { passive: !0 }), I.addEventListener("touchend", fe), () => {
      window.cancelAnimationFrame(U), window.removeEventListener("resize", k), I.removeEventListener("mousemove", ue), I.removeEventListener("mouseleave", fe), I.removeEventListener("touchmove", ce), I.removeEventListener("touchend", fe);
    };
  }, []);
  const g = async (M) => {
    if (M.preventDefault(), !!T) {
      N(!0), _(null);
      try {
        const I = await t({ email: m.trim(), password: v, rememberLogin: h });
        if (!I.ok) {
          _(I.message);
          return;
        }
        W(!0), G.current = window.setTimeout(() => {
          W(!1), n();
        }, 900);
      } catch {
        _("登录失败，请稍后重试。");
      } finally {
        N(!1);
      }
    }
  }, re = async () => {
    !V.trim() || L > 0 || (N(!0), await new Promise((M) => window.setTimeout(M, 1e3)), N(!1), b(!0), X(60));
  }, ke = async () => {
    if (A === "email") {
      if (!V.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V) || !P.trim() || P.length < 6 || !x.trim() || x.length < 6 || x !== le) return;
      ae("success");
    }
  }, xe = () => {
    O(!1), ae("email"), q(""), Q(""), K(""), oe(""), X(0), b(!1);
  };
  return /* @__PURE__ */ r("div", { ref: s, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ r("form", { onSubmit: g, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: m,
              onChange: (M) => {
                f(M.target.value), _(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "off",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "邮箱" })
        ] }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "password",
              value: v,
              onChange: (M) => {
                p(M.target.value), _(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        D && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: D }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: h,
                  onChange: (M) => S(M.target.checked),
                  className: "peer absolute inset-0 cursor-pointer opacity-0"
                }
              ),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: "h-3 w-3 text-primary opacity-0 transition-opacity peer-checked:opacity-100",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", d: "M5 13l4 4L19 7" })
                }
              )
            ] }),
            /* @__PURE__ */ e("span", { className: "text-sm text-authTextDefault transition-colors group-hover:text-authTextStrong", children: "记住我" })
          ] }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => o("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !T,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: u ? "认证中..." : "登录" }),
              u && /* @__PURE__ */ r(
                "svg",
                {
                  className: "ml-2 h-5 w-5 animate-spin text-white",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ e(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }),
      !Y && /* @__PURE__ */ r("div", { className: "mt-7", children: [
        /* @__PURE__ */ r("div", { className: "flex items-center justify-center text-sm text-authTextFaint", children: [
          /* @__PURE__ */ e("span", { className: "h-px w-12 bg-authDivider" }),
          /* @__PURE__ */ e("span", { className: "mx-3", children: "首次使用？" }),
          /* @__PURE__ */ e("span", { className: "h-px w-12 bg-authDivider" })
        ] }),
        /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-center gap-6", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => o("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Qr, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-lineSubtle", "aria-hidden": "true" }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => o("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Zr, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      Y && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: xe,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        A === "email" && /* @__PURE__ */ r("div", { className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: V,
                onChange: (M) => q(M.target.value),
                placeholder: " ",
                autoComplete: "off",
                className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: P,
                  onChange: (M) => Q(M.target.value.replace(/\D/g, "").slice(0, 6)),
                  placeholder: " ",
                  autoComplete: "off",
                  maxLength: 6,
                  className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
                }
              ),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "验证码" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: re,
                disabled: L > 0 || u || !V.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${L > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: L > 0 ? `${L}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (M) => K(M.target.value),
                placeholder: " ",
                className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: le,
                onChange: (M) => oe(M.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${le.length > 0 && x !== le ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          le.length > 0 && x !== le && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ke,
              disabled: !V.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V) || !P.trim() || P.length < 6 || !x.trim() || x.length < 6 || x !== le,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        A === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(gt, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: xe,
              className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg",
              children: "返回登录"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${$ ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(gt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const Ia = (t, n) => {
  const o = Math.random() * t, l = Math.random() * n;
  return {
    x: o,
    y: l,
    baseX: o,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Ls({
  mode: t = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: o,
  onRegister: l,
  onEnterWorkspace: s,
  onNavigate: m
}) {
  const f = pe(null), v = pe(null), p = pe(null), [h, S] = y("identity"), [u, N] = y(""), [$, W] = y(""), [D, _] = y(""), [G, Y] = y(""), [O, A] = y(""), [ae, V] = y(""), q = t === "create-lab", [P, Q] = y(""), [x, K] = y(""), [le, oe] = y(!1), [L, X] = y(0), [w, b] = y(""), [T, g] = y(null), re = P.length > 0 && P.trim().length < 6;
  Ne(() => {
    if (L <= 0) return;
    const U = window.setTimeout(() => X((ee) => ee - 1), 1e3);
    return () => clearTimeout(U);
  }, [L]), Ne(
    () => () => {
      p.current !== null && window.clearTimeout(p.current);
    },
    []
  ), Ne(() => {
    const U = f.current, ee = v.current;
    if (!U || !ee) return;
    const Z = U.getContext("2d");
    if (!Z) return;
    const R = window.getComputedStyle(document.documentElement), Ee = R.getPropertyValue("--chatui-color-auth-particle-active").trim(), $e = R.getPropertyValue("--chatui-color-auth-particle-idle").trim(), c = R.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let k = 0, ne = 0, de = 0, ue = window.devicePixelRatio || 1, fe = [];
    const ce = { x: -1e3, y: -1e3, radius: 120 }, se = 150, H = () => {
      const Ce = ee.getBoundingClientRect();
      ue = window.devicePixelRatio || 1, ne = Ce.width, de = Ce.height, U.width = ne * ue, U.height = de * ue, U.style.width = `${ne}px`, U.style.height = `${de}px`, Z.setTransform(ue, 0, 0, ue, 0, 0);
      const J = ne < 768 ? 40 : 90;
      fe = Array.from({ length: J }, () => Ia(ne, de));
    }, Pe = (Ce) => {
      Z.beginPath(), Z.arc(Ce.x, Ce.y, Ce.size, 0, Math.PI * 2), Z.closePath(), Z.fill();
    }, De = () => {
      Z.clearRect(0, 0, ne, de);
      for (let Ce = 0; Ce < fe.length; Ce += 1) {
        const J = fe[Ce];
        J.x += J.vx, J.y += J.vy, (J.x < 0 || J.x > ne) && (J.vx = -J.vx), (J.y < 0 || J.y > de) && (J.vy = -J.vy);
        const et = ce.x - J.x, Fe = ce.y - J.y, Be = Math.sqrt(et * et + Fe * Fe) || 1, Ye = et / Be, Oe = Fe / Be, Qe = (ce.radius - Be) / ce.radius, at = Ye * Qe * J.density, dt = Oe * Qe * J.density;
        Be < ce.radius ? (J.x -= at * 0.5, J.y -= dt * 0.5, Z.fillStyle = Ee, J.size = Math.min(J.size + 0.1, 2.5)) : (J.x !== J.baseX && (J.x -= (J.x - J.baseX) / 50), J.y !== J.baseY && (J.y -= (J.y - J.baseY) / 50), Z.fillStyle = $e, J.size = Math.max(J.size - 0.05, 1)), Pe(J);
        for (let Ue = Ce; Ue < fe.length; Ue += 1) {
          const tt = fe[Ue], rt = J.x - tt.x, Ke = J.y - tt.y, st = Math.sqrt(rt * rt + Ke * Ke);
          if (st < se) {
            const Xe = (1 - st / se) * 0.4;
            Z.beginPath(), Z.strokeStyle = c, Z.globalAlpha = Xe, Z.lineWidth = 1, Z.moveTo(J.x, J.y), Z.lineTo(tt.x, tt.y), Z.stroke(), Z.globalAlpha = 1, Z.closePath();
          }
        }
      }
      k = window.requestAnimationFrame(De);
    }, We = (Ce) => {
      const J = ee.getBoundingClientRect();
      ce.x = Ce.clientX - J.left, ce.y = Ce.clientY - J.top;
    }, Ve = () => {
      ce.x = -1e3, ce.y = -1e3;
    }, Je = (Ce) => {
      if (Ce.touches.length < 1) return;
      const J = ee.getBoundingClientRect();
      ce.x = Ce.touches[0].clientX - J.left, ce.y = Ce.touches[0].clientY - J.top;
    };
    return H(), De(), window.addEventListener("resize", H), ee.addEventListener("mousemove", We), ee.addEventListener("mouseleave", Ve), ee.addEventListener("touchmove", Je, { passive: !0 }), ee.addEventListener("touchend", Ve), () => {
      window.cancelAnimationFrame(k), window.removeEventListener("resize", H), ee.removeEventListener("mousemove", We), ee.removeEventListener("mouseleave", Ve), ee.removeEventListener("touchmove", Je), ee.removeEventListener("touchend", Ve);
    };
  }, []);
  const ke = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(D) || L > 0)) {
      oe(!0), g(null);
      try {
        const U = await n(D);
        if (!U.ok) {
          g(U);
          return;
        }
        X(U.resendAfterSeconds ?? 60), b(U.message ?? "短信验证码已发送");
      } catch {
        g({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        oe(!1);
      }
    }
  }, xe = () => ({
    email: u.trim(),
    name: $.trim(),
    phoneNumber: D,
    phoneVerificationCode: G.trim(),
    mode: t,
    ...q ? { labName: ae.trim() } : { inviteCode: O.trim() }
  }), M = () => {
    const U = ["identity", "password", "success"], ee = U.indexOf(h);
    ee < U.length - 1 && S(U[ee + 1]);
  }, I = be(() => {
    if (le) return !1;
    switch (h) {
      case "identity":
        return q ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && $.trim().length > 0 && /^1[3-9]\d{9}$/.test(D) && G.length === 6 && ae.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && $.trim().length > 0 && /^1[3-9]\d{9}$/.test(D) && G.length === 6 && O.trim().length > 0;
      case "password":
        return P.trim().length >= 6 && P === x;
      default:
        return !1;
    }
  }, [h, u, $, D, G, O, ae, q, P, x, le]), j = async (U) => {
    if (U.preventDefault(), !!I) {
      oe(!0), g(null);
      try {
        const ee = xe(), Z = h === "password" ? await l({ ...ee, password: P }) : await o(ee);
        if (!Z.ok) {
          g(Z);
          return;
        }
        M();
      } catch {
        g({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        oe(!1);
      }
    }
  }, he = {
    identity: q ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, ge = {
    identity: "",
    password: "",
    success: ""
  }, Se = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", ye = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: v, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: f, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: he[h] }),
        ge[h] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: ge[h] })
      ] }),
      h !== "success" && /* @__PURE__ */ r("form", { onSubmit: j, className: "space-y-5", children: [
        h === "identity" && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (U) => {
                  N(U.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: $,
                onChange: (U) => {
                  W(U.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: D,
                  onChange: (U) => {
                    _(U.target.value.replace(/\D/g, "").slice(0, 11)), b(""), g(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Se
                }
              ),
              /* @__PURE__ */ e("span", { className: ye, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ke,
                disabled: L > 0 || le || !/^1[3-9]\d{9}$/.test(D),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${L > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: L > 0 ? `${L}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                value: G,
                onChange: (U) => {
                  Y(U.target.value.replace(/\D/g, "").slice(0, 6)), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "短信验证码" })
          ] }),
          w && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: w }),
          q ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: ae,
                onChange: (U) => {
                  V(U.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: O,
                onChange: (U) => {
                  A(U.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "邀请码" })
          ] })
        ] }),
        h === "password" && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: P,
                onChange: (U) => {
                  Q(U.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Se} ${(T == null ? void 0 : T.field) === "password" || re ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "设置密码" }),
            ((T == null ? void 0 : T.field) === "password" || re) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (T == null ? void 0 : T.field) === "password" ? T.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (U) => {
                  K(U.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Se} ${x.length > 0 && P !== x ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ye, children: "确认密码" }),
            x.length > 0 && P !== x && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        T && T.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: T.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !I,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: le ? "处理中..." : h === "password" ? "完成注册" : "下一步" }),
              le && /* @__PURE__ */ r(
                "svg",
                {
                  className: "h-5 w-5 animate-spin text-white",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ e(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }),
      h === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(gt, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "注册成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "欢迎加入科研工作台" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => {
              p.current = window.setTimeout(s, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      h !== "success" && /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
        "已有账号？",
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => m("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const Ra = (t, n) => {
  const o = Math.random() * t, l = Math.random() * n;
  return { x: o, y: l, baseX: o, baseY: l, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function zs({ onSendCode: t, onResetPassword: n, onBackToLogin: o }) {
  const l = pe(null), s = pe(null), m = pe(null), [f, v] = y("phone"), [p, h] = y(""), [S, u] = y(""), [N, $] = y(""), [W, D] = y(""), [_, G] = y(!1), [Y, O] = y(0), [A, ae] = y(""), [V, q] = y(null);
  Ne(() => {
    if (Y <= 0) return;
    const L = window.setTimeout(() => O((X) => X - 1), 1e3);
    return () => window.clearTimeout(L);
  }, [Y]), Ne(() => {
    const L = l.current, X = s.current;
    if (!L || !X) return;
    const w = L.getContext("2d");
    if (!w) return;
    const b = window.getComputedStyle(document.documentElement), T = b.getPropertyValue("--chatui-color-auth-particle-active").trim(), g = b.getPropertyValue("--chatui-color-auth-particle-idle").trim(), re = b.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ke = 0, xe = 0, M = 0, I = [];
    const j = { x: -1e3, y: -1e3, radius: 120 }, he = 150, ge = () => {
      const Z = X.getBoundingClientRect(), R = window.devicePixelRatio || 1;
      xe = Z.width, M = Z.height, L.width = xe * R, L.height = M * R, L.style.width = `${xe}px`, L.style.height = `${M}px`, w.setTransform(R, 0, 0, R, 0, 0), I = Array.from({ length: xe < 768 ? 40 : 90 }, () => Ra(xe, M));
    }, Se = () => {
      w.clearRect(0, 0, xe, M);
      for (let Z = 0; Z < I.length; Z += 1) {
        const R = I[Z];
        R.x += R.vx, R.y += R.vy, (R.x < 0 || R.x > xe) && (R.vx = -R.vx), (R.y < 0 || R.y > M) && (R.vy = -R.vy);
        const Ee = j.x - R.x, $e = j.y - R.y, c = Math.sqrt(Ee * Ee + $e * $e) || 1, k = (j.radius - c) / j.radius;
        c < j.radius ? (R.x -= Ee / c * k * R.density * 0.5, R.y -= $e / c * k * R.density * 0.5, w.fillStyle = T, R.size = Math.min(R.size + 0.1, 2.5)) : (R.x -= (R.x - R.baseX) / 50, R.y -= (R.y - R.baseY) / 50, w.fillStyle = g, R.size = Math.max(R.size - 0.05, 1)), w.beginPath(), w.arc(R.x, R.y, R.size, 0, Math.PI * 2), w.fill();
        for (let ne = Z; ne < I.length; ne += 1) {
          const de = I[ne], ue = R.x - de.x, fe = R.y - de.y, ce = Math.sqrt(ue * ue + fe * fe);
          ce >= he || (w.beginPath(), w.globalAlpha = (1 - ce / he) * 0.4, w.strokeStyle = re, w.lineWidth = 1, w.moveTo(R.x, R.y), w.lineTo(de.x, de.y), w.stroke(), w.globalAlpha = 1);
        }
      }
      ke = window.requestAnimationFrame(Se);
    }, ye = (Z) => {
      const R = X.getBoundingClientRect();
      j.x = Z.clientX - R.left, j.y = Z.clientY - R.top;
    }, U = (Z) => {
      if (!Z.touches.length) return;
      const R = X.getBoundingClientRect();
      j.x = Z.touches[0].clientX - R.left, j.y = Z.touches[0].clientY - R.top;
    }, ee = () => {
      j.x = -1e3, j.y = -1e3;
    };
    return ge(), Se(), window.addEventListener("resize", ge), X.addEventListener("mousemove", ye), X.addEventListener("mouseleave", ee), X.addEventListener("touchmove", U, { passive: !0 }), X.addEventListener("touchend", ee), () => {
      window.cancelAnimationFrame(ke), window.removeEventListener("resize", ge), X.removeEventListener("mousemove", ye), X.removeEventListener("mouseleave", ee), X.removeEventListener("touchmove", U), X.removeEventListener("touchend", ee);
    };
  }, []), Ne(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const P = be(() => /^1[3-9]\d{9}$/.test(p) && S.length === 6 && N.length >= 6 && N === W, [W, N, p, S]), Q = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", x = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: s, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      f === "phone" ? /* @__PURE__ */ r(Ge, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (L) => {
          if (L.preventDefault(), !(!P || _)) {
            G(!0), q(null);
            try {
              const X = await n({ phoneNumber: p, phoneVerificationCode: S, newPassword: N });
              if (!X.ok) {
                q(X.message);
                return;
              }
              v("success");
            } catch {
              q("密码重置失败，请稍后重试。");
            } finally {
              G(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: p, onChange: (L) => {
                h(L.target.value.replace(/\D/g, "").slice(0, 11)), ae(""), q(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: Q }),
              /* @__PURE__ */ e("span", { className: x, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(p) || Y > 0 || _)) {
                G(!0), q(null);
                try {
                  const L = await t(p);
                  if (!L.ok) {
                    q(L.message);
                    return;
                  }
                  O(L.resendAfterSeconds ?? 60), ae(L.message ?? "短信验证码已发送");
                } catch {
                  q("验证码发送失败，请稍后重试。");
                } finally {
                  G(!1);
                }
              }
            }, disabled: Y > 0 || _ || !/^1[3-9]\d{9}$/.test(p), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${Y > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: Y > 0 ? `${Y}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: S, onChange: (L) => {
              u(L.target.value.replace(/\D/g, "").slice(0, 6)), q(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: Q }),
            /* @__PURE__ */ e("span", { className: x, children: "短信验证码" })
          ] }),
          A && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: A }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: N, onChange: (L) => {
              $(L.target.value), q(null);
            }, required: !0, placeholder: " ", className: Q }),
            /* @__PURE__ */ e("span", { className: x, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: W, onChange: (L) => {
              D(L.target.value), q(null);
            }, required: !0, placeholder: " ", className: `${Q} ${W.length > 0 && N !== W ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: x, children: "确认新密码" }),
            W.length > 0 && N !== W && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          V && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: V }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !P || _, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: _ ? "处理中..." : "重置密码" }),
            _ && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => o(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
        ] })
      ] }) : /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-primary-soft opacity-70" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(gt, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          m.current = window.setTimeout(() => o({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const lr = 10, or = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function As({
  currentPath: t,
  projects: n,
  initialChats: o,
  logoUrl: l,
  user: s,
  children: m,
  initialAiUsageWarningActive: f = !1,
  aiUsageWarningActive: v,
  canViewAiUsage: p = !0,
  canManageMembers: h = !0,
  chatActions: S = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: N,
  onChatsChange: $,
  onRenameChat: W,
  onTogglePinChat: D,
  onShareChat: _,
  onDeleteChat: G
}) {
  const [Y, O] = y(!0), [A, ae] = y(240), [V, q] = y(!1), P = pe(0), Q = pe(240), [x, K] = y(() => {
    const i = { unassigned: !0 };
    return n.forEach((E) => {
      i[E.id] = !0;
    }), i;
  }), [le, oe] = y(!1), [L, X] = y(() => [...o]), [w, b] = y(null), [T, g] = y(null), [re, ke] = y("time"), [xe, M] = y(!1), [I, j] = y(null), [he, ge] = y(""), [Se, ye] = y(!1), [U, ee] = y(""), [Z, R] = y(!1), [Ee, $e] = y(f), [c, k] = y(!1), ne = v ?? Ee, de = pe(null), ue = pe(null), fe = pe(null), ce = () => {
    oe(!1), N();
  }, se = (i) => {
    K((E) => ({ ...E, [i]: !E[i] }));
  }, H = (i) => {
    var C;
    X((z) => z.filter((we) => we.id !== i)), b(null), I === i && (j(null), ge("")), G == null || G(i), ((C = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : C[1]) === i && u("/chat/new", { replace: !0 });
  }, Pe = (i) => {
    const E = L.find((z) => z.id === i);
    if (!E) return;
    const C = !E.isPinned;
    X((z) => z.map(
      (Te) => Te.id === i ? { ...Te, isPinned: C } : Te
    )), D == null || D(i, C), b(null);
  }, De = (i) => {
    j(i.id), ge(i.title), b(null);
  }, We = () => {
    j(null), ge("");
  }, Ve = (i) => {
    const E = he.trim();
    E && (X((C) => C.map((z) => z.id === i ? { ...z, title: E } : z)), W == null || W(i, E)), We();
  }, Je = (i, E) => {
    if (i.stopPropagation(), i.key === "Enter") {
      i.preventDefault(), Ve(E);
      return;
    }
    i.key === "Escape" && (i.preventDefault(), We());
  }, Ce = (i) => {
    var E;
    if (I === i) {
      (E = de.current) == null || E.focus();
      return;
    }
    u(`/chat/${i}`);
  }, J = (i, E = !1) => I === i.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (z) => {
        var we;
        z.stopPropagation(), (we = de.current) == null || we.focus();
      },
      children: [
        E && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: de,
            value: he,
            onChange: (z) => ge(z.target.value),
            onKeyDown: (z) => Je(z, i.id),
            onBlur: () => Ve(i.id),
            onClick: (z) => z.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    E && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: i.title })
  ] }), et = (i) => {
    P.current = i.clientX, Q.current = A, q(!0);
  };
  Ne(() => {
    if (!V) return;
    const i = 200, E = 440, C = (we) => {
      const Te = we.clientX - P.current, Le = Math.min(E, Math.max(i, Q.current + Te));
      ae(Le);
    }, z = () => {
      q(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", C), window.addEventListener("mouseup", z), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", z);
    };
  }, [V, A]), Ne(() => {
    Y || ae(240);
  }, [Y]), Ne(() => {
    $ == null || $(L);
  }, [L, $]), Ne(() => {
    X([...o]);
  }, [o]), Ne(() => {
    if (!I) return;
    const i = window.requestAnimationFrame(() => {
      var E;
      (E = de.current) == null || E.focus();
    });
    return () => {
      window.cancelAnimationFrame(i);
    };
  }, [I]), Ne(() => () => {
    ue.current !== null && window.clearTimeout(ue.current), fe.current !== null && window.clearTimeout(fe.current);
  }, []);
  const Fe = () => {
    M(!0), ue.current !== null && window.clearTimeout(ue.current), ue.current = window.setTimeout(() => {
      M(!1);
    }, 600);
  }, Be = () => {
    R(!0), fe.current !== null && window.clearTimeout(fe.current), fe.current = window.setTimeout(() => {
      R(!1);
    }, 600);
  };
  Ne(() => {
    ne || k(!1);
  }, [ne]);
  const Ye = () => {
    k(!0), u("/ai-usage");
  }, Oe = be(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...p ? [{
      key: "ai-usage",
      label: "AI用量"
    }] : [],
    ...h ? [{
      key: "members",
      label: "成员管理"
    }] : [],
    {
      key: "system-settings",
      label: "更多系统设置"
    },
    {
      key: "logout",
      label: "退出登录",
      danger: !0
    }
  ], [h, p]), Qe = (i) => {
    if (oe(!1), i.key === "skills") {
      u("/skills");
      return;
    }
    if (i.key === "ai-usage") {
      u("/ai-usage");
      return;
    }
    if (i.key === "members") {
      u("/members");
      return;
    }
    if (i.key === "system-settings") {
      u("/system-settings");
      return;
    }
    i.key === "logout" && ce();
  }, at = (i) => i.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(vr, { size: 14 }), danger: !0 }] : [], dt = (i, E = S) => {
    const C = [];
    return E.rename && C.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(an, { size: 14 }) }), E.share && C.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(sn, { size: 14 }) }), E.pin && C.push({
      key: "pin",
      label: i.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(jt, { size: 14 })
    }), C;
  }, Ue = (i, E, C = {}) => {
    const z = C.actions ?? S, we = C.onMenuOpenIdChange ?? b, Te = !!(z.rename || z.share || z.pin || z.delete), Le = C.showTaskBadge !== !1 && or(i);
    return !Te && !Le ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${Le ? "ml-6" : "ml-2"}`, children: [
      Le && !E && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Te && /* @__PURE__ */ e(
        At,
        {
          open: E,
          onOpenChange: (Me) => we(Me ? i.id : null),
          placement: "bottom-end",
          width: C.width ?? Math.max(140, Math.min(176, A - 56)),
          portal: C.portal,
          trigger: /* @__PURE__ */ e(nn, { size: 14 }),
          onTriggerClick: (Me) => {
            Me.stopPropagation();
          },
          items: dt(i, z),
          footerItems: at(z),
          onItemClick: (Me, Re) => {
            if (Re.stopPropagation(), Me.key === "rename") {
              De(i), we(null);
              return;
            }
            if (Me.key === "share") {
              _ ? _(i.id) : u(`/chat/${i.id}?share=1`), we(null);
              return;
            }
            if (Me.key === "pin") {
              Pe(i.id), we(null);
              return;
            }
            if (Me.key === "delete") {
              H(i.id), we(null);
              return;
            }
            we(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${E ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, tt = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(Dt, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(_t, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], rt = be(() => {
    const i = t.match(/^\/chat\/([^/]+)$/);
    return i ? L.find((E) => E.id === i[1]) ?? null : null;
  }, [L, t]), Ke = be(
    () => L.filter((i) => i.isPinned),
    [L]
  ), st = be(
    () => L.filter((i) => !i.isPinned),
    [L]
  ), Xe = be(
    () => re === "time" ? Ke.slice(0, lr) : Ke,
    [Ke, re]
  ), a = be(() => {
    if (re !== "time") return [];
    const i = Math.max(lr - Xe.length, 0);
    return st.slice(0, i);
  }, [re, st, Xe.length]), d = be(
    () => Xe.length + a.length,
    [Xe.length, a.length]
  ), F = re === "time" && L.length > d, B = be(() => new Map(n.map((i) => [i.id, i.name])), [n]), ie = U.trim().toLowerCase(), te = be(() => ie ? L.filter((i) => {
    const E = i.projectId ? B.get(i.projectId) ?? "未分组" : "未分组";
    return `${i.title} ${E} ${i.date}`.toLowerCase().includes(ie);
  }) : L, [L, ie, B]);
  Ne(() => {
    if (!rt) return;
    const i = rt.projectId ?? "unassigned";
    K((E) => E[i] !== !1 ? E : { ...E, [i]: !0 });
  }, [rt]);
  const me = () => {
    ee(""), ye(!0);
  }, ve = () => {
    ye(!1), g(null), We(), R(!1), fe.current !== null && (window.clearTimeout(fe.current), fe.current = null);
  }, _e = (i) => {
    ye(!1), g(null), u(`/chat/${i}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: Y ? A : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${Y ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: A, minWidth: A },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => u("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: l, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => O(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Jr, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => u("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(en, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: tt.map((i) => {
                  const E = i.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => u(i.path),
                      className: `nav-item ${E ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        i.icon,
                        /* @__PURE__ */ e("span", { children: i.label })
                      ]
                    },
                    i.path
                  );
                }) }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    onScroll: Fe,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${xe ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Xe.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Xe.map((i) => {
                          const E = t === `/chat/${i.id}`, C = w === i.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ce(i.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${I === i.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                J(i, re !== "time"),
                                I !== i.id && Ue(i, C)
                              ]
                            }
                          ) }, i.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      re === "project" && n.map((i) => {
                        const E = L.filter((z) => z.projectId === i.id && !z.isPinned), C = x[i.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => se(i.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: C ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: i.name })
                              ]
                            }
                          ),
                          C && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: E.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : E.map((z) => {
                            const we = t === `/chat/${z.id}`, Te = w === z.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ce(z.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${I === z.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : we ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  J(z),
                                  I !== z.id && Ue(z, Te)
                                ]
                              }
                            ) }, z.id);
                          }) })
                        ] }, i.id);
                      }),
                      re === "project" && (() => {
                        const i = L.filter((C) => !C.projectId && !C.isPinned);
                        if (i.length === 0) return null;
                        const E = x.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => se("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: E ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          E && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: i.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : i.map((C) => {
                            const z = t === `/chat/${C.id}`, we = w === C.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ce(C.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${I === C.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : z ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  J(C),
                                  I !== C.id && Ue(C, we)
                                ]
                              }
                            ) }, C.id);
                          }) })
                        ] });
                      })(),
                      re === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        a.map((i) => {
                          const E = t === `/chat/${i.id}`, C = w === i.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ce(i.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${I === i.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                J(i),
                                I !== i.id && Ue(i, C)
                              ]
                            }
                          ) }, i.id);
                        }),
                        F && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: me,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e($t, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                ne && !c && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(tn, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Ye,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  At,
                  {
                    open: le,
                    onOpenChange: oe,
                    placement: "top-start",
                    width: A - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: s.avatarUrl ? /* @__PURE__ */ e("img", { src: s.avatarUrl, alt: `${s.name}头像`, className: "h-full w-full object-cover" }) : s.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: s.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(rn, { size: 18 }) })
                    ] }),
                    items: Oe,
                    onItemClick: Qe,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          Y && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: et,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${Y ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof m == "function" ? m({ isSidebarOpen: Y, setIsSidebarOpen: O, chats: L, setChats: X, setAiUsageWarningActive: $e }) : m }) }) }),
    /* @__PURE__ */ e(
      Ut,
      {
        visible: Se,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: ve,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              ct,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: U,
                onChange: (i) => ee(i.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          te.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Be,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Z ? "is-scrolling is-scrolling-thin" : ""}`,
              children: te.map((i) => {
                const E = i.projectId ? B.get(i.projectId) ?? "未分组" : "未分组", C = or(i), z = T === i.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => _e(i.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          J(i, i.isPinned),
                          C && I !== i.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: E }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: i.date })
                        ] })
                      ] }),
                      I !== i.id && Ue(i, z, {
                        actions: { rename: !0, pin: !0, delete: !0 },
                        portal: !0,
                        showTaskBadge: !1,
                        width: 160,
                        onMenuOpenIdChange: g
                      })
                    ]
                  },
                  i.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Vt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Es({
  projects: t,
  selectedProjectId: n,
  autoFocusInput: o = !1,
  disabled: l = !1,
  embedded: s = !1,
  isSidebarOpen: m = !0,
  skillOptions: f,
  fileOptions: v,
  quickPrompts: p,
  uploadAccept: h,
  validateUploadFile: S,
  onUploadValidationError: u,
  onSelectProject: N,
  onCreateProject: $,
  onOpenSidebar: W,
  onSelectQuickPrompt: D,
  onSend: _
}) {
  const [G, Y] = y(!1), [O, A] = y(!1), [ae, V] = y(""), q = pe(null), P = pe(null), Q = be(
    () => t.find((w) => w.id === n) ?? null,
    [t, n]
  ), x = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !Q
    },
    ...t.map((w) => ({
      key: w.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: w.name }),
      active: (Q == null ? void 0 : Q.id) === w.id
    }))
  ], [t, Q]), K = be(() => $ ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(wr, { size: 16 }) }] : [], [$]), le = () => {
    A(!1), V("");
  }, oe = (w) => {
    if (w.key === "create") {
      A(!0), V("");
      return;
    }
    const b = w.key === "none" ? null : String(w.key);
    N(b), Y(!1);
  }, L = () => {
    const w = ae.trim();
    if (!w) return;
    const b = t.find(
      (T) => T.name.trim().toLowerCase() === w.toLowerCase()
    );
    b ? N(b.id) : $ == null || $(w), le(), Y(!1);
  };
  Ne(() => {
    if (!O) return;
    const w = (b) => {
      var g, re;
      const T = b.target;
      (g = P.current) != null && g.contains(T) || (re = q.current) != null && re.contains(T) || (le(), Y(!1));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [O]);
  const X = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: q, className: "relative", children: O && /* @__PURE__ */ e(
        "div",
        {
          ref: P,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Tr,
                {
                  value: ae,
                  onChange: (w) => V(w.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(qe, { type: "secondary", size: "small", onClick: le, children: "取消" }),
              /* @__PURE__ */ e(
                qe,
                {
                  type: "primary",
                  size: "small",
                  onClick: L,
                  disabled: !ae.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        zr,
        {
          onSend: _,
          disabled: l,
          autoFocus: o,
          skillOptions: f,
          fileOptions: v,
          uploadAccept: h,
          validateUploadFile: S,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            At,
            {
              open: G,
              onOpenChange: (w) => {
                !w && O || (Y(w), w ? A(!1) : le());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: Q ? Q.name : "工作项目" }),
                /* @__PURE__ */ e(zt, { size: 14 })
              ] }),
              items: x,
              footerItems: K,
              onItemClick: oe,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(
      Ar,
      {
        onSelect: D ?? _,
        prompts: p,
        disabled: l
      }
    )
  ] });
  return s ? X : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      ya,
      {
        isSidebarOpen: m,
        onOpenSidebar: W ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: X })
  ] });
}
const Da = "_shell_1a2mx_1", ja = "_header_1a2mx_9", Fa = "_headerActions_1a2mx_17", Ha = "_saveError_1a2mx_25", qa = "_viewport_1a2mx_33", Wa = "_editorCanvas_1a2mx_41", Oa = "_titleInput_1a2mx_49", Ua = "_milkdownHost_1a2mx_57", lt = {
  shell: Da,
  header: ja,
  headerActions: Fa,
  saveError: Ha,
  viewport: qa,
  editorCanvas: Wa,
  titleInput: Oa,
  milkdownHost: Ua
}, Va = {
  "--crepe-color-background": "var(--chatui-color-surface)",
  "--crepe-color-on-background": "var(--chatui-color-text-primary)",
  "--crepe-color-surface": "var(--chatui-color-surface-muted)",
  "--crepe-color-surface-low": "var(--chatui-color-line-soft)",
  "--crepe-color-on-surface": "var(--chatui-color-text-primary)",
  "--crepe-color-on-surface-variant": "var(--chatui-color-text-secondary)",
  "--crepe-color-outline": "var(--chatui-color-control-border)",
  "--crepe-color-primary": "var(--chatui-color-brand-primary)",
  "--crepe-color-secondary": "var(--chatui-color-brand-primary-soft-strong)",
  "--crepe-color-on-secondary": "var(--chatui-color-text-primary)",
  "--crepe-color-inverse": "var(--chatui-color-chat-floating-surface)",
  "--crepe-color-on-inverse": "var(--chatui-color-static-white)",
  "--crepe-color-inline-code": "var(--chatui-color-status-danger)",
  "--crepe-color-error": "var(--chatui-color-status-danger)",
  "--crepe-color-hover": "var(--chatui-color-project-conversation-hover)",
  "--crepe-color-selected": "var(--chatui-color-brand-primary-soft-strong)",
  "--crepe-color-inline-area": "var(--chatui-color-line-soft)",
  "--crepe-font-title": "inherit",
  "--crepe-font-default": "inherit",
  "--crepe-font-code": "inherit",
  "--crepe-shadow-1": "var(--chatui-shadow-sm)",
  "--crepe-shadow-2": "var(--chatui-shadow-md)"
}, Mt = (t, n) => t.replace("<svg", `<svg class="${n}"`), pt = (t) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${t}</tspan>
    </text>
  </svg>
`, Wt = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="8" y="23" fill="currentColor" font-family="inherit" font-size="22" font-weight="500">T</text>
  </svg>
`, Ka = `
  <span class="chatui-selection-block-type-current">${Wt}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, ir = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, Xa = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, Ga = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Ya = [
  { key: "paragraph", label: "正文" },
  { key: "h1", label: "一级标题" },
  { key: "h2", label: "二级标题" },
  { key: "h3", label: "三级标题" },
  { key: "bullet-list", label: "无序列表" },
  { key: "ordered-list", label: "有序列表" },
  { key: "task-list", label: "任务列表" },
  { key: "quote", label: "引用" },
  { key: "code", label: "代码块" }
], ht = (t) => `chatui-document-menu-type-${t}`;
function Ps({
  title: t,
  initialMarkdown: n = "",
  createdByName: o,
  updatedByName: l,
  updatedAt: s,
  index: m,
  attachments: f = [],
  attachmentAccept: v,
  attachmentUnavailableHint: p,
  saving: h = !1,
  saveError: S,
  layout: u = "page",
  showHeaderActions: N = !0,
  onTitleChange: $,
  onMarkdownChange: W,
  onUploadAttachments: D,
  onDeleteAttachment: _,
  onSave: G,
  onClose: Y
}) {
  const O = pe(null), A = pe(null), ae = pe(n), V = pe(W), [q, P] = y(!1), [Q, x] = y(null), [K, le] = y(""), oe = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  Ne(() => {
    V.current = W;
  }, [W]), Ne(() => {
    const w = O.current;
    if (!w) return;
    const b = /* @__PURE__ */ new Map(), T = new wt({
      root: w,
      defaultValue: ae.current,
      features: {
        [wt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [wt.Feature.Toolbar]: {
          buildToolbar: (a) => {
            a.addGroup(
              "block-type",
              "块类型"
            ).addItem("block-type-dropdown", {
              icon: Ka,
              active: () => !1,
              onRun: () => {
              }
            });
          }
        },
        [wt.Feature.BlockEdit]: {
          addOnCurrentBlock: !0,
          preserveCurrentBlockContent: !0,
          textGroup: {
            label: "基础",
            text: null,
            h1: { label: "一级标题" },
            h2: { label: "二级标题" },
            h3: { label: "三级标题" },
            h4: null,
            h5: null,
            h6: null,
            quote: { label: "引用" },
            divider: { label: "分割线" }
          },
          listGroup: {
            label: "列表",
            bulletList: { label: "无序列表" },
            orderedList: { label: "有序列表" },
            taskList: { label: "任务" }
          },
          advancedGroup: {
            label: "常用",
            image: null,
            codeBlock: { label: "代码块" },
            table: null,
            math: { label: "公式" }
          },
          buildMenu: (a) => {
            const d = new Map(
              a.build().flatMap((E) => E.items).map((E) => [E.key, E])
            ), F = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), B = (E) => {
              const C = E.get(Nt), z = j, Te = (z != null && z.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? z : z == null ? void 0 : z.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (z instanceof HTMLElement ? z : null);
              if (!Te) return C;
              try {
                const Le = C.posAtDOM(Te, 0), Me = C.state.doc.resolve(
                  Math.min(
                    Math.max(Le, 0),
                    C.state.doc.content.size
                  )
                );
                C.dispatch(
                  C.state.tr.setSelection(
                    Yt.near(Me)
                  )
                );
              } catch {
              }
              return C;
            }, ie = (E) => {
              const C = B(E), z = kt.type(E), we = (Me) => {
                const { $from: Re } = C.state.selection;
                for (let He = Re.depth; He > 0; He -= 1)
                  if (Re.node(He).type.name === Me) return !0;
                return !1;
              };
              for (let Me = 0; Me < 10 && !(!we(z.name) || !un(z)(
                C.state,
                C.dispatch
              )); Me += 1)
                ;
              for (let Me = 0; Me < 10 && !(!we("blockquote") || !dn(C.state, C.dispatch)); Me += 1)
                ;
              const Te = pn.type(E), Le = C.state.selection.$from.parent;
              Le.isTextblock && Le.type !== Te && E.get(cn).call(hn.key, {
                nodeType: Te
              });
            };
            b.set(
              "paragraph",
              ie
            );
            const te = (E) => {
              const C = B(E), { selection: z } = C.state, we = kt.type(E), { $from: Te } = z;
              let Le = -1;
              for (let Re = Te.depth; Re > 0; Re -= 1)
                if (Te.node(Re).type.name === we.name) {
                  Le = Re;
                  break;
                }
              if (Le > 0) {
                const Re = Le - 1, He = Re > 0 && Te.node(Re).childCount === 1 ? Re : Le;
                C.dispatch(
                  C.state.tr.delete(
                    Te.before(He),
                    Te.after(He)
                  )
                );
                return;
              }
              if (!z.empty) {
                C.dispatch(
                  C.state.tr.delete(z.from, z.to)
                );
                return;
              }
              const Me = Math.min(1, Te.depth);
              Me < 1 || C.dispatch(
                C.state.tr.delete(
                  Te.before(Me),
                  Te.after(Me)
                )
              );
            }, me = (E, C, z) => {
              const we = d.get(C);
              if (!we) return;
              const { key: Te, ...Le } = we, Me = (z == null ? void 0 : z.icon) ?? Le.icon, Re = [
                ht(C),
                z == null ? void 0 : z.iconClass
              ].filter(Boolean).join(" "), He = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(C), ut = F.has(C) ? (Ze) => {
                var Kt;
                if (ie(Ze), !He) {
                  if (C === "quote") {
                    const nt = Ze.get(Nt), { $from: mt } = nt.state.selection, yt = mt.parent, Rt = mt.before(mt.depth), Xt = nt.state.schema.nodes.blockquote;
                    if (!Xt) return;
                    const Br = Xt.create(null, yt), vt = nt.state.tr.replaceWith(
                      Rt,
                      Rt + yt.nodeSize,
                      Br
                    );
                    vt.setSelection(
                      Yt.near(
                        vt.doc.resolve(
                          Math.min(
                            Rt + 2,
                            vt.doc.content.size
                          )
                        )
                      )
                    ), nt.dispatch(vt);
                    return;
                  }
                  (Kt = Le.onRun) == null || Kt.call(Le, Ze);
                  return;
                }
                const xt = Ze.get(Nt), Er = C === "ordered-list" ? Qt.type(Ze) : Zt.type(Ze);
                if (!mn(Er)(
                  xt.state,
                  xt.dispatch
                ) || C !== "task-list") return;
                const Pr = kt.type(Ze), { $from: It } = xt.state.selection;
                for (let nt = It.depth; nt > 0; nt -= 1) {
                  const mt = It.node(nt);
                  if (mt.type !== Pr) continue;
                  const yt = It.before(nt);
                  xt.dispatch(
                    xt.state.tr.setNodeMarkup(yt, void 0, {
                      ...mt.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Le.onRun;
              F.has(C) && ut && b.set(
                C,
                ut
              ), E.addItem(C, {
                ...Le,
                label: (z == null ? void 0 : z.label) ?? Le.label,
                icon: Mt(Me, Re),
                onRun: ut
              });
            };
            a.clear();
            const ve = a.addGroup("basic", "基础");
            ve.addItem("paragraph", {
              label: "正文",
              icon: Mt(
                Wt,
                ht("paragraph")
              ),
              onRun: ie
            }), [
              {
                key: "h1",
                icon: pt(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: pt(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: pt(3),
                label: `三级标题 (Ctrl + Alt + 3)
Markdown: ### 空格`
              },
              {
                key: "ordered-list",
                label: `有序列表
Markdown: 1. 空格`
              },
              {
                key: "bullet-list",
                label: `无序列表
Markdown: - 空格`
              },
              {
                key: "task-list",
                label: `任务列表
Markdown: - [ ] 空格`
              },
              {
                key: "code",
                icon: ir,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: Xa,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: E, icon: C, label: z }) => {
              me(ve, E, { icon: C, label: z });
            });
            const _e = a.addGroup("common", "常用");
            me(_e, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), me(_e, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), a.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Mt(
                Ga,
                "chatui-document-menu-action-delete"
              ),
              onRun: te
            });
          }
        }
      }
    });
    T.on((a) => {
      a.markdownUpdated((d, F, B) => {
        F !== B && V.current(F);
      });
    });
    const g = w.ownerDocument;
    let re = "", ke = null, xe = null, M = !0, I = !1, j = null, he = null, ge = null, Se = null, ye = null, U = null, ee = null, Z = null;
    const R = (a) => {
      const d = a == null ? void 0 : a.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Ee = () => w.querySelector(".ProseMirror"), $e = (a) => {
      const d = Ee();
      if (!a || !(d != null && d.contains(a))) return null;
      const F = a.closest(".milkdown-list-item-block");
      if (F && d.contains(F)) return F;
      let B = a;
      for (; B != null && B.parentElement && B.parentElement !== d; )
        B = B.parentElement;
      return !B || B.parentElement !== d || B.classList.contains("prosemirror-virtual-cursor") ? null : B;
    }, c = () => {
      const a = Ee();
      return a ? Array.from(a.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const F = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return F.length ? F : [d];
      }) : [];
    }, k = (a) => {
      var B;
      const d = c(), F = d.map((ie) => ({ block: ie, rect: ie.getBoundingClientRect() })).filter(({ rect: ie }) => a >= ie.top && a <= ie.bottom).sort((ie, te) => ie.rect.height - te.rect.height);
      return F[0] ? F[0].block : ((B = d.map((ie) => {
        const te = ie.getBoundingClientRect(), me = Math.min(
          Math.abs(a - te.top),
          Math.abs(a - te.bottom)
        );
        return { block: ie, distance: me };
      }).sort((ie, te) => ie.distance - te.distance)[0]) == null ? void 0 : B.block) ?? null;
    }, ne = (a, d = M) => {
      var i, E, C, z;
      const F = j, B = F ? R(F) : a, ie = F ? F.matches("p") : d, te = g.querySelector(
        ".milkdown-slash-menu"
      );
      (E = (i = te == null ? void 0 : te.querySelector(`svg.${ht("paragraph")}`)) == null ? void 0 : i.closest("li")) == null || E.toggleAttribute(
        "hidden",
        B === null && ie
      ), te == null || te.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (we) => we.removeAttribute("data-chatui-selected")
      ), B && ((z = (C = te == null ? void 0 : te.querySelector(`svg.${ht(B)}`)) == null ? void 0 : C.closest("li")) == null || z.setAttribute("data-chatui-selected", "true"));
      const me = g.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!me) return;
      re || (re = me.innerHTML);
      const ve = B ? te == null ? void 0 : te.querySelector(
        `svg.${ht(B)}`
      ) : null, _e = B ?? "default";
      me.dataset.chatuiBlockType !== _e && (me.innerHTML = (ve == null ? void 0 : ve.outerHTML) ?? re, me.dataset.chatuiBlockType = _e);
    }, de = (a) => {
      a !== xe && (xe = a, ke = R(a), M = (a == null ? void 0 : a.matches("p")) ?? !1), ne(ke, M);
    }, ue = () => {
      var F;
      const a = (F = g.getSelection()) == null ? void 0 : F.anchorNode, d = a instanceof Element ? a : a == null ? void 0 : a.parentElement;
      de($e(d ?? null));
    }, fe = (a) => {
      const { $from: d } = a.get(Nt).state.selection, F = kt.type(a), B = Qt.type(a), ie = Zt.type(a);
      for (let me = d.depth; me > 0; me -= 1) {
        const ve = d.node(me);
        if (ve.type === F && typeof ve.attrs.checked == "boolean")
          return "task-list";
      }
      for (let me = d.depth; me > 0; me -= 1) {
        const ve = d.node(me);
        if (ve.type === B) return "ordered-list";
        if (ve.type === ie) return "bullet-list";
        if (ve.type.name === "blockquote") return "quote";
      }
      const te = d.parent;
      if (te.type === fn.type(a)) {
        const me = Number(te.attrs.level);
        if (me === 1 || me === 2 || me === 3)
          return `h${me}`;
      }
      return te.type.name === "code_block" ? "code" : "paragraph";
    }, ce = (a) => {
      var d;
      return a === "paragraph" ? Mt(
        Wt,
        "chatui-selection-block-type-paragraph"
      ) : a === "h1" ? pt(1) : a === "h2" ? pt(2) : a === "h3" ? pt(3) : a === "code" ? ir : ((d = g.querySelector(
        `.milkdown-slash-menu svg.${ht(a)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${a === "quote" ? "“" : "•"}</text></svg>`;
    }, se = () => {
      var a;
      return ((a = g.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : a.closest(".toolbar-item")) ?? null;
    }, H = () => {
      const a = se();
      if (!a) return;
      a.classList.add("chatui-selection-block-type-trigger"), a.setAttribute("aria-haspopup", "menu"), a.setAttribute("aria-label", "切换当前块类型");
      const d = a.closest(".milkdown-toolbar"), F = a.previousElementSibling instanceof HTMLElement && a.previousElementSibling.classList.contains("divider") ? a.previousElementSibling : null;
      d && d.firstElementChild !== a && (d.prepend(a), F && a.after(F));
      let B = "paragraph";
      T.editor.action((te) => {
        B = fe(te);
      }), a.dataset.chatuiBlockType = B;
      const ie = a.querySelector(
        ".chatui-selection-block-type-current"
      );
      ie && (ie.innerHTML = ce(B)), U == null || U.querySelectorAll("[data-block-type]").forEach((te) => {
        te.dataset.active = te.dataset.blockType === B ? "true" : "false";
      });
    }, Pe = () => {
      var a;
      ee !== null && (window.clearTimeout(ee), ee = null), U && (U.dataset.show = "false"), (a = se()) == null || a.setAttribute("aria-expanded", "false");
    }, De = () => {
      ee !== null && window.clearTimeout(ee), ee = window.setTimeout(
        Pe,
        120
      );
    }, We = () => {
      if (U) return U;
      const a = g.createElement("div");
      return a.className = "chatui-selection-block-type-menu", a.dataset.show = "false", a.setAttribute("role", "menu"), Ya.forEach(({ key: d, label: F }) => {
        const B = g.createElement("button");
        B.type = "button", B.dataset.blockType = d, B.setAttribute("role", "menuitem"), B.innerHTML = `<span class="chatui-selection-block-type-option-icon">${ce(d)}</span><span>${F}</span>`, B.addEventListener("pointerdown", (ie) => {
          ie.preventDefault(), ie.stopPropagation(), T.editor.action((te) => {
            var me;
            (me = b.get(d)) == null || me(te);
          }), Pe(), window.requestAnimationFrame(H);
        }), a.append(B);
      }), a.addEventListener("pointerenter", () => {
        ee !== null && (window.clearTimeout(ee), ee = null);
      }), a.addEventListener("pointerleave", De), g.body.append(a), U = a, a;
    }, Ve = () => {
      const a = se();
      if (!a) return;
      ee !== null && (window.clearTimeout(ee), ee = null);
      const d = We();
      H(), d.dataset.show = "true", d.style.visibility = "hidden";
      const F = a.getBoundingClientRect(), B = d.getBoundingClientRect(), ie = 6, te = 8, me = F.top >= B.height + ie + te, ve = Math.min(
        Math.max(F.left, te),
        g.documentElement.clientWidth - B.width - te
      ), _e = me ? F.top - B.height - ie : F.bottom + ie;
      d.style.left = `${ve}px`, d.style.top = `${_e}px`, d.style.visibility = "visible", d.dataset.placement = me ? "top" : "bottom", a.setAttribute("aria-expanded", "true");
    }, Je = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && Ve();
    }, Ce = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const F = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      F != null && F.closest(".chatui-selection-block-type-menu") || De();
    }, J = () => {
      window.requestAnimationFrame(H);
    }, et = () => {
      const a = he, d = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (!a || !d || d.dataset.show !== "true") return;
      const F = d.getBoundingClientRect();
      if (!F.width || !F.height) return;
      const B = a.getBoundingClientRect(), ie = g.defaultView, te = (ie == null ? void 0 : ie.innerWidth) ?? g.documentElement.clientWidth, me = (ie == null ? void 0 : ie.innerHeight) ?? g.documentElement.clientHeight, ve = 12, _e = 8, i = Math.max(
        ve,
        te - F.width - ve
      ), E = Math.max(
        ve,
        me - F.height - ve
      ), C = (He) => Math.min(Math.max(He, ve), i), z = (He) => Math.min(Math.max(He, ve), E);
      let we = "left", Te = B.left - F.width - _e, Le = z(B.top);
      if (Te < ve) {
        const He = B.top - _e - ve, ut = me - B.bottom - _e - ve, Ze = ut >= F.height || ut >= He;
        we = Ze ? "bottom" : "top", Te = C(B.left), Le = z(Ze ? B.bottom + _e : B.top - F.height - _e);
      }
      const Me = `${Te}px`, Re = `${Le}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== Me && d.style.setProperty("--chatui-block-menu-left", Me), d.style.getPropertyValue("--chatui-block-menu-top") !== Re && d.style.setProperty("--chatui-block-menu-top", Re), d.dataset.chatuiPlacement = we;
    }, Fe = () => {
      const a = g.querySelector(
        ".milkdown-slash-menu"
      );
      a && (a.style.removeProperty("--chatui-block-menu-left"), a.style.removeProperty("--chatui-block-menu-top"), delete a.dataset.chatuiPlacement);
    }, Be = (a) => {
      a !== ye && (ye == null || ye.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), ye = a, ye == null || ye.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Ye = () => {
      Se !== null && window.cancelAnimationFrame(Se), Se = window.requestAnimationFrame(() => {
        Se = null, et();
      });
    }, Oe = (a) => {
      g.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        a && d.contains(a) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, Qe = () => {
      he = null, I = !1, j = null, Be(null), T.editor.action((a) => {
        a.get("menuAPICtx").hide();
      }), Fe(), Oe(null);
    }, at = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (F) {
        const te = F.getBoundingClientRect(), me = te.width > 0 && te.height > 0, ve = a.clientX >= te.left && a.clientX <= te.right && a.clientY >= te.top && a.clientY <= te.bottom;
        if (me) {
          if (ve) {
            Be(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), I = !0;
            return;
          }
          if (Be(null), d != null && d.closest(".milkdown-block-handle")) return;
          const _e = Ee(), i = d && (_e != null && _e.contains(d)) ? $e(d) ?? k(a.clientY) : null;
          if (i && j && i !== j) {
            Qe();
            return;
          }
          if (i === j) return;
          I && Qe();
          return;
        }
        I = !1, Be(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        ne(ke);
        return;
      }
      const B = Ee();
      if (!d || !(B != null && B.contains(d))) return;
      const ie = $e(d) ?? k(a.clientY);
      de(ie);
    }, dt = (a) => {
      var ve;
      const d = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (he === a && (d == null ? void 0 : d.dataset.show) === "true") {
        Oe(a), Ye();
        return;
      }
      const F = a.getBoundingClientRect(), B = k(
        F.top + F.height / 2
      );
      B && de(B);
      const ie = ke, te = M;
      he = a, j = B ?? xe, Oe(a);
      const me = ((ve = g.defaultView) == null ? void 0 : ve.PointerEvent) ?? PointerEvent;
      a.dispatchEvent(
        new me("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), a.dispatchEvent(
        new me("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        ne(ie, te), Ye();
      }, 0);
    }, Ue = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (F) {
        dt(F);
        return;
      }
      Be(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, tt = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!F) return;
      const B = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      if (B && F.contains(B)) return;
      const ie = B == null ? void 0 : B.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      Be(ie ?? null);
    }, rt = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      F && dt(F);
    }, Ke = (a) => {
      if (!a.isTrusted) return;
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), B = g.querySelector(
        ".milkdown-slash-menu"
      );
      F && he === F && (B == null ? void 0 : B.dataset.show) === "true" && (a.preventDefault(), a.stopImmediatePropagation());
    }, st = (a) => {
      a.key === "/" && window.setTimeout(ue, 0);
    };
    g.addEventListener("pointermove", at), g.addEventListener("pointerover", Ue), g.addEventListener("pointerout", tt), g.addEventListener(
      "pointerover",
      Je
    ), g.addEventListener(
      "pointerout",
      Ce
    ), g.addEventListener(
      "selectionchange",
      J
    ), g.addEventListener(
      "pointerdown",
      Ke,
      !0
    ), g.addEventListener(
      "pointerup",
      Ke,
      !0
    ), g.addEventListener("click", rt), w.addEventListener("keyup", st);
    const Xe = T.create();
    return Xe.then(() => {
      var F;
      (F = w.querySelector(".ProseMirror")) == null || F.focus();
      const a = g.querySelector(
        ".milkdown-slash-menu"
      );
      a && (ge = new MutationObserver(() => {
        if (a.dataset.show === "true" && he) {
          Oe(he), Ye();
          return;
        }
        a.dataset.show !== "true" && (he = null, j = null, Be(null), Fe(), Oe(null));
      }), ge.observe(a, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = g.querySelector(
        ".milkdown-toolbar"
      );
      d && (Z = new MutationObserver(() => {
        d.dataset.show === "true" ? H() : Pe();
      }), Z.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), ue(), H();
    }), () => {
      g.removeEventListener("pointermove", at), g.removeEventListener(
        "pointerover",
        Ue
      ), g.removeEventListener("pointerout", tt), g.removeEventListener(
        "pointerover",
        Je
      ), g.removeEventListener(
        "pointerout",
        Ce
      ), g.removeEventListener(
        "selectionchange",
        J
      ), g.removeEventListener(
        "pointerdown",
        Ke,
        !0
      ), g.removeEventListener(
        "pointerup",
        Ke,
        !0
      ), g.removeEventListener("click", rt), w.removeEventListener("keyup", st), Pe(), U == null || U.remove(), U = null, Xe.then(() => {
        ge == null || ge.disconnect(), Z == null || Z.disconnect(), Se !== null && window.cancelAnimationFrame(Se), T.destroy();
      });
    };
  }, []);
  const L = async (w) => {
    const b = Array.from(w.target.files ?? []);
    if (w.target.value = "", !(!b.length || !D)) {
      P(!0), le("");
      try {
        await D(b);
      } catch (T) {
        le(
          T instanceof Error ? T.message : "附件上传失败"
        );
      } finally {
        P(!1);
      }
    }
  }, X = async (w) => {
    if (_) {
      x(w), le("");
      try {
        await _(w);
      } catch (b) {
        le(
          b instanceof Error ? b.message : "附件删除失败"
        );
      } finally {
        x(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: lt.shell, "aria-label": "项目文档编辑器", children: [
    N && /* @__PURE__ */ e("header", { className: lt.header, children: /* @__PURE__ */ r("div", { className: lt.headerActions, children: [
      /* @__PURE__ */ e(
        qe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: h,
          onClick: Y,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        qe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: h,
          onClick: G,
          children: h ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${lt.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          S && /* @__PURE__ */ e("div", { className: lt.saveError, children: S }),
          /* @__PURE__ */ r("div", { className: lt.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${oe}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (w) => $(w.target.value),
                  placeholder: "请输入标题",
                  className: lt.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                $r,
                {
                  createdByName: o,
                  updatedByName: l,
                  updatedAt: s,
                  index: m
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: O,
                  className: `${lt.milkdownHost} ${Lr.editor} ${oe} chatui-project-document-editor`,
                  style: Va
                }
              ),
              D && /* @__PURE__ */ e(
                "input",
                {
                  ref: A,
                  type: "file",
                  multiple: !0,
                  accept: v,
                  className: "hidden",
                  onChange: (w) => {
                    L(w);
                  }
                }
              ),
              /* @__PURE__ */ e(
                Mr,
                {
                  attachments: f,
                  className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: q,
                  deletingAttachmentId: Q,
                  unavailableHint: p,
                  error: K,
                  onRequestUpload: D ? () => {
                    var w;
                    return (w = A.current) == null ? void 0 : w.click();
                  } : void 0,
                  onDeleteAttachment: _ ? (w) => {
                    X(w);
                  } : void 0
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const Qa = { low: "低风险", medium: "中风险", high: "高风险" }, Za = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function Bs({
  isSidebarOpen: t,
  skills: n,
  loading: o = !1,
  error: l,
  pendingSkillIds: s = [],
  onOpenSidebar: m,
  onInstall: f,
  onUninstall: v,
  onRetry: p
}) {
  const [h, S] = y("installed"), [u, N] = y(""), [$, W] = y(!1), [D, _] = y([]), [G, Y] = y(null), O = be(() => new Set(s), [s]), A = be(() => {
    const x = u.trim().toLowerCase();
    return n.filter((K) => h === "installed" !== K.installed ? !1 : x ? [K.name, K.source, K.description, ...K.tags].join(" ").toLowerCase().includes(x) : !0);
  }, [h, u, n]), ae = (x) => {
    S(x), W(!1), _([]);
  }, V = () => {
    W((x) => !x), _([]);
  }, q = (x) => _((K) => K.includes(x) ? K.filter((le) => le !== x) : [...K, x]), P = (x) => x.installed ? v([x.id]) : f([x.id]), Q = () => {
    D.length && (h === "installed" ? v(D) : f(D), _([]), W(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: m, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(yr, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${$ ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ r("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(ct, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: u, onChange: (x) => N(x.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => ae("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${h === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => ae("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${h === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: $, onChange: (x) => {
                W(x.target.checked), _([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          p && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: p, children: "重新加载" })
        ] }),
        !l && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (x, K) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, K)) }),
        !l && !o && A.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": s.length > 0, children: A.map((x) => {
          const K = D.includes(x.id), le = O.has(x.id), oe = K ? "border-skillSelectedBorder bg-skillSelectedSurface" : G === x.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${oe}`, onMouseEnter: () => Y(x.id), onMouseLeave: () => Y((L) => L === x.id ? null : L), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: x.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: x.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Za[x.riskLevel]}`, children: Qa[x.riskLevel] }),
                $ && /* @__PURE__ */ e("button", { type: "button", onClick: () => q(x.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": K ? `取消选择 ${x.name}` : `选择 ${x.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${K ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: x.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: x.tags.map((L) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: L }, `${x.id}-${L}`)) }),
              !$ && /* @__PURE__ */ e("button", { type: "button", disabled: le, onClick: () => P(x), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${G === x.id || le ? "inline-flex" : "hidden"} ${x.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: le ? "处理中..." : x.installed ? "卸载" : "安装" })
            ] })
          ] }, x.id);
        }) }) : !l && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    $ && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        D.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: V, disabled: s.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: Q, disabled: !D.length || s.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: s.length > 0 ? "处理中..." : h === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  As as A,
  Gn as B,
  Ea as C,
  ys as D,
  Pa as E,
  zs as F,
  aa as G,
  Mr as H,
  zr as I,
  Ps as J,
  $r as K,
  $s as L,
  Sr as M,
  Ss as N,
  Cs as O,
  ka as P,
  Ar as Q,
  Ls as R,
  Bs as S,
  qt as T,
  Aa as U,
  za as V,
  At as a,
  qe as b,
  xs as c,
  ea as d,
  Ut as e,
  Tr as f,
  Vt as g,
  ta as h,
  Zn as i,
  fs as j,
  jn as k,
  Sa as l,
  Ba as m,
  Ms as n,
  Ma as o,
  bs as p,
  ga as q,
  na as r,
  Es as s,
  ks as t,
  Ts as u,
  Ns as v,
  ws as w,
  gs as x,
  ya as y,
  vs as z
};
