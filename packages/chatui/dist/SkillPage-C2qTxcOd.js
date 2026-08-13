import { jsxs as r, Fragment as Ye, jsx as e } from "react/jsx-runtime";
import qe, { useMemo as be, useState as g, useRef as de, useCallback as ze, useLayoutEffect as Ht, useEffect as ge, forwardRef as dr, useId as Ir } from "react";
import Be from "classnames";
import { Check as ft, Copy as Pt, RefreshCcw as Rr, ThumbsUp as Dr, ThumbsDown as jr, ArrowUpRight as Fr, Info as Hr, Ban as qr, TriangleAlert as Ot, CircleCheckBig as zt, ShieldCheck as ur, CircleHelp as mr, FileText as Bt, LoaderCircle as pr, Puzzle as hr, AtSign as fr, AlertCircle as Wr, Paperclip as xr, ArrowRight as br, ChevronDown as yt, ChevronRight as bt, CircleX as gr, Sparkles as yr, Loader2 as ot, Clock3 as _t, Search as ct, BookOpen as Xt, ListChecks as Or, Globe as Ur, Minus as Vr, Menu as vr, Upload as Kr, Trash2 as wr, CheckCircle2 as vt, SearchX as Gr, FlaskConical as Xr, X as gt, Plus as Nr, Square as Yr, Send as Qr, UserPlus as Zr, Building2 as Jr, Folder as Dt, PanelLeftClose as en, SquarePen as tn, AlertTriangle as rn, Settings as nn, Pin as jt, MoreHorizontal as an, Pencil as sn, Share2 as ln } from "lucide-react";
import kr from "react-markdown";
import Tr from "remark-gfm";
import on from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as cn } from "react-dom";
import { Crepe as kt } from "@milkdown/crepe";
import { commandsCtx as dn, editorViewCtx as Tt } from "@milkdown/kit/core";
import { lift as un } from "@milkdown/kit/prose/commands";
import { liftListItem as mn, wrapInList as pn } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Yt } from "@milkdown/kit/prose/state";
import { listItemSchema as Ct, paragraphSchema as hn, setBlockTypeCommand as fn, orderedListSchema as Qt, bulletListSchema as Zt, headingSchema as xn } from "@milkdown/kit/preset/commonmark";
const bn = "_button_3tg6r_1", gn = "_primary_3tg6r_5", yn = "_disabled_3tg6r_9", vn = "_secondary_3tg6r_17", wn = "_ghost_3tg6r_25", Nn = "_danger_3tg6r_33", kn = "_small_3tg6r_41", Tn = "_medium_3tg6r_45", Cn = "_large_3tg6r_49", Sn = "_roundedSquare_3tg6r_53", Mn = "_roundedSmall_3tg6r_57", $n = "_roundedMedium_3tg6r_61", Ln = "_roundedLarge_3tg6r_62", zn = "_roundedFull_3tg6r_66", En = "_loadingSpinner_3tg6r_67", An = "_loading_3tg6r_67", Pn = "_fullWidth_3tg6r_90", Bn = "_icon_3tg6r_94", De = {
  button: bn,
  primary: gn,
  disabled: yn,
  secondary: vn,
  ghost: wn,
  danger: Nn,
  small: kn,
  medium: Tn,
  large: Cn,
  roundedSquare: Sn,
  roundedSmall: Mn,
  roundedMedium: $n,
  roundedLarge: Ln,
  roundedFull: zn,
  loadingSpinner: En,
  loading: An,
  fullWidth: Pn,
  icon: Bn
}, _n = {
  primary: De.primary,
  secondary: De.secondary,
  ghost: De.ghost,
  danger: De.danger
}, In = {
  small: De.small,
  medium: De.medium,
  large: De.large
}, Rn = {
  square: De.roundedSquare,
  small: De.roundedSmall,
  medium: De.roundedMedium,
  large: De.roundedLarge,
  full: De.roundedFull
}, Ue = qe.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: o,
    loading: l,
    disabled: s = !1,
    children: m,
    icon: h,
    iconPosition: w = "left",
    className: b,
    fullWidth: p = !1,
    rounded: M = "medium",
    onClick: u,
    ...v
  }, T) => {
    const F = o ?? l ?? !1, N = s || F, R = be(() => F ? /* @__PURE__ */ r(Ye, { children: [
      /* @__PURE__ */ e("span", { className: De.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: m })
    ] }) : h ? /* @__PURE__ */ r(Ye, { children: [
      w === "left" && /* @__PURE__ */ e("span", { className: De.icon, children: h }),
      m && /* @__PURE__ */ e("span", { children: m }),
      w === "right" && /* @__PURE__ */ e("span", { className: De.icon, children: h })
    ] }) : m, [m, F, h, w]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: T,
        className: Be(
          De.button,
          _n[t],
          In[n],
          Rn[M],
          {
            [De.fullWidth]: p,
            [De.loading]: F,
            [De.disabled]: N
          },
          b
        ),
        disabled: N,
        onClick: u,
        ...v,
        children: R
      }
    );
  }
);
Ue.displayName = "BaseButton";
const Dn = { small: "h-8", medium: "h-9", large: "h-14" }, Cr = qe.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: o,
    defaultValue: l,
    disabled: s = !1,
    readOnly: m = !1,
    error: h = !1,
    size: w = "medium",
    prefix: b,
    suffix: p,
    prefixIcon: M,
    suffixIcon: u,
    onChange: v,
    onFocus: T,
    onBlur: F,
    onClear: N,
    className: R,
    containerClassName: Y,
    clearable: X = !1,
    label: O,
    helperText: E,
    ...le
  }, Q) => {
    const [H, B] = g(!1), J = de(null), f = ze((oe) => {
      J.current = oe, typeof Q == "function" ? Q(oe) : Q && (Q.current = oe);
    }, [Q]), re = ze(() => {
      var L, ne;
      const oe = J.current;
      oe && ((ne = (L = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : L.set) == null || ne.call(oe, ""), oe.dispatchEvent(new Event("input", { bubbles: !0 })), oe.focus(), N == null || N());
    }, [N]), Z = be(
      () => {
        var oe;
        return X && H && String(o ?? ((oe = J.current) == null ? void 0 : oe.value) ?? "").length > 0;
      },
      [X, H, o]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      O && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: O }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Be(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Dn[w],
            !s && !h && "hover:border-controlBorder",
            H && !s && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && H && "ring-2 ring-dangerFocus",
            s && "cursor-not-allowed bg-surfaceMuted",
            Y
          ),
          children: [
            (b || M) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: b || M }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: f,
                type: t,
                placeholder: n,
                value: o,
                defaultValue: l,
                disabled: s,
                readOnly: m,
                className: Be("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", R),
                onFocus: (oe) => {
                  B(!0), T == null || T(oe);
                },
                onBlur: (oe) => {
                  B(!1), F == null || F(oe);
                },
                onChange: v,
                ...le
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              Z && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (oe) => oe.preventDefault(), onClick: re, "aria-label": "清空", children: "✕" }),
              p || u
            ] })
          ]
        }
      ),
      E && /* @__PURE__ */ e("div", { className: Be("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: E })
    ] });
  }
);
Cr.displayName = "BaseInput";
const jn = { small: "h-8", medium: "h-9", large: "h-14" }, Fn = qe.forwardRef(
  ({ options: t = [], value: n, defaultValue: o, placeholder: l, disabled: s = !1, error: m = !1, size: h = "medium", label: w, helperText: b, onChange: p, className: M, ...u }, v) => {
    const T = ze((F) => {
      const N = F.target.value, R = t.find((Y) => String(Y.value) === N);
      p == null || p(N === "" ? "" : (R == null ? void 0 : R.value) ?? N);
    }, [p, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      w && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: w }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: v,
            className: Be(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              m && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              jn[h],
              M
            ),
            value: n ?? o ?? "",
            disabled: s,
            onChange: T,
            ...u,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((F) => /* @__PURE__ */ e("option", { value: F.value, disabled: F.disabled, children: F.label }, F.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      b && /* @__PURE__ */ e("div", { className: Be("text-xs leading-6", m ? "text-danger" : "text-mutedText"), children: b })
    ] });
  }
);
Fn.displayName = "BaseSelect";
const Hn = "_container_ykn59_1", qn = "_item_ykn59_10", Wn = "_itemActive_ykn59_27", On = "_itemDisabled_ykn59_27", Un = "_sizeSmall_ykn59_43", Vn = "_sizeMiddle_ykn59_49", Kn = "_sizeLarge_ykn59_55", it = {
  container: Hn,
  item: qn,
  itemActive: Wn,
  itemDisabled: On,
  sizeSmall: Un,
  sizeMiddle: Vn,
  sizeLarge: Kn
}, Gn = {
  small: it.sizeSmall,
  middle: it.sizeMiddle,
  large: it.sizeLarge
};
function xs({
  options: t,
  value: n,
  defaultValue: o,
  onChange: l,
  size: s = "middle",
  disabled: m = !1,
  className: h
}) {
  var u;
  const [w, b] = g(
    o ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), p = n ?? w, M = (v) => {
    m || (n === void 0 && b(v), l == null || l(v));
  };
  return /* @__PURE__ */ e("div", { className: Be(it.container, Gn[s], h), children: t.map((v) => {
    const T = p === v.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Be(it.item, T && it.itemActive, m && it.itemDisabled),
        onClick: () => M(v.value),
        disabled: m,
        "aria-pressed": T,
        children: v.label
      },
      v.value
    );
  }) });
}
const Xn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Yn = qe.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: o = !1, onChange: l, onError: s, maxSize: m, children: h, className: w, dragable: b = !0, placeholderTitle: p, placeholderDescription: M, placeholderIcon: u, maxCount: v }, T) => {
    const F = de(null), [N, R] = g(!1), Y = ze((O) => {
      if (v && O.length > v) {
        s == null || s(new Error(`单次最多上传 ${v} 个文件`));
        return;
      }
      if (m) {
        for (const E of Array.from(O))
          if (E.size > m) {
            s == null || s(new Error(`文件“${E.name}”超过大小限制（${Xn(m)}）`));
            return;
          }
      }
      l == null || l(O);
    }, [v, m, l, s]), X = () => {
      var O;
      o || (O = F.current) == null || O.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: T,
        className: Be(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          N && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          w
        ),
        onClick: X,
        onKeyDown: (O) => {
          !o && (O.key === "Enter" || O.key === " ") && (O.preventDefault(), X());
        },
        onDragOver: (O) => {
          b && !o && (O.preventDefault(), R(!0));
        },
        onDragLeave: () => R(!1),
        onDrop: (O) => {
          b && !o && (O.preventDefault(), R(!1), Y(O.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: F, type: "file", accept: t, multiple: n, disabled: o, onChange: (O) => O.target.files && Y(O.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: u ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: p ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: M ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Yn.displayName = "BaseUpload";
const Qn = "_maskAnimation_1h49h_1", Zn = "_modalAnimation_1h49h_5", Jt = {
  maskAnimation: Qn,
  modalAnimation: Zn
}, Ut = ({
  visible: t,
  open: n = t,
  show: o = n,
  title: l,
  width: s = 520,
  centered: m = !0,
  destroyOnClose: h = !1,
  mask: w = !0,
  maskClosable: b = !0,
  okText: p = "确认",
  cancelText: M = "取消",
  confirmLoading: u = !1,
  okButtonProps: v,
  cancelButtonProps: T,
  onConfirm: F,
  onCancel: N,
  onClose: R,
  onOk: Y,
  onDismiss: X,
  children: O,
  footer: E,
  className: le,
  bodyClassName: Q
}) => {
  const H = o ?? !1, B = ze(async () => {
    try {
      F ? await F() : Y && await Y();
    } catch (re) {
      console.error("Modal confirm error:", re);
    }
  }, [F, Y]), J = ze(() => {
    N ? N() : R ? R() : X == null || X();
  }, [N, R, X]), f = be(() => {
    if (E === null) return null;
    if (E) return E;
    const { type: re, ...Z } = T ?? {}, { type: oe, ...L } = v ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Ue, { type: "secondary", size: "medium", onClick: J, ...Z, children: M }),
      /* @__PURE__ */ e(Ue, { type: "primary", size: "medium", isLoading: u, onClick: B, ...L, children: u ? "加载中..." : p })
    ] });
  }, [T, M, u, E, J, B, v, p]);
  return !H && h || !H ? null : /* @__PURE__ */ r(Ye, { children: [
    w && /* @__PURE__ */ e("div", { className: Be("fixed inset-0 z-[1000] bg-overlayMask", Jt.maskAnimation), onClick: () => b && J(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Be(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          m && "left-1/2 top-1/2",
          Jt.modalAnimation,
          le
        ),
        style: { width: s },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: J, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Be("min-h-20 p-5 text-primaryText", Q), children: O }),
          f
        ]
      }
    )
  ] });
};
Ut.displayName = "BaseModal";
const Jn = ({ title: t, extra: n, children: o, hoverable: l = !1, loading: s = !1, bordered: m = !0, className: h, bodyClassName: w, onClick: b }) => /* @__PURE__ */ r(
  "div",
  {
    className: Be(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      m && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      s && "pointer-events-none opacity-60",
      h
    ),
    onClick: b,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Be("p-4 text-primaryText", (t || n) && "pt-1", w), children: o })
    ]
  }
);
Jn.displayName = "BaseCard";
const ea = ({ columns: t, dataSource: n = [], rowKey: o = "id", loading: l = !1, bordered: s = !0, striped: m = !0, className: h, onRow: w }, b) => /* @__PURE__ */ r("div", { ref: b, className: Be("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: s ? "border-b border-lineSubtle" : void 0, children: t.map((p) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: p.width, textAlign: p.align }, children: p.title }, p.key || String(p.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((p, M) => {
      const u = String(typeof o == "string" ? p[o] ?? M : M);
      return /* @__PURE__ */ e("tr", { className: Be(s && "border-b border-lineSoft last:border-b-0", m && "odd:bg-surface"), ...(w == null ? void 0 : w(p, M)) || {}, children: t.map((v) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: v.align }, children: v.render ? v.render(p[v.dataIndex], p, M) : String(p[v.dataIndex] ?? "") }, v.key || String(v.dataIndex))) }, u);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), bs = qe.forwardRef(ea), ta = ({ current: t = 1, pageSize: n = 10, total: o = 0, onChange: l, showSizeChanger: s = !1, pageSizeOptions: m = [10, 20, 50, 100], onShowSizeChange: h, disabled: w = !1, className: b }) => {
  const p = be(() => Math.ceil(o / n) || 1, [n, o]), M = ze((v) => h == null ? void 0 : h(1, Number(v.target.value)), [h]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Be("flex flex-wrap items-center justify-center gap-4 p-4", b), children: [
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: w || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      p,
      " 页，共 ",
      o,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t < p && (l == null ? void 0 : l(t + 1)), disabled: w || t >= p, children: "下一页 →" }),
    s && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: M, disabled: w, children: m.map((v) => /* @__PURE__ */ r("option", { value: v, children: [
      v,
      " 条/页"
    ] }, v)) })
  ] });
};
ta.displayName = "BasePagination";
const Vt = ({ description: t = "暂无数据", image: n, children: o }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  o
] });
Vt.displayName = "BaseEmpty";
const Et = ({ trigger: t, items: n, footerItems: o = [], open: l = !1, onOpenChange: s, onTriggerClick: m, onItemClick: h, placement: w = "bottom-start", width: b, portal: p = !1, className: M, triggerClassName: u, menuClassName: v, listClassName: T, footerClassName: F }) => {
  const N = de(null), R = de(null), [Y, X] = g({}), O = w.endsWith("end"), E = w.startsWith("top");
  Ht(() => {
    var f;
    if (!l || !p || !N.current) return;
    const B = N.current.getBoundingClientRect(), J = E ? ((f = R.current) == null ? void 0 : f.offsetHeight) ?? 0 : 0;
    X({
      position: "fixed",
      left: O ? B.right : B.left,
      top: E ? B.top - J - 8 : B.bottom,
      transform: O ? "translateX(-100%)" : void 0
    });
  }, [E, O, l, p, w]), ge(() => {
    if (!l || !s) return;
    const B = (J) => {
      var re, Z;
      const f = J.target;
      (re = N.current) != null && re.contains(f) || (Z = R.current) != null && Z.contains(f) || s(!1);
    };
    return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, [s, l]);
  const le = be(() => b ? { width: typeof b == "number" ? `${b}px` : b } : void 0, [b]), Q = ze((B) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Be(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !B.danger && !B.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !B.danger && B.active && "bg-primary-soft font-medium text-primary",
        B.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (J) => h == null ? void 0 : h(B, J),
      disabled: B.disabled,
      children: [
        B.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: B.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: B.label })
      ]
    },
    B.key
  ), [h]), H = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: R,
      className: Be(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !p && "absolute",
        !p && !E && "top-[calc(100%+8px)]",
        !p && E && "bottom-[calc(100%+8px)]",
        !p && O ? "right-0" : p ? void 0 : "left-0",
        v
      ),
      style: p ? { ...Y, ...le } : le,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Be("flex min-h-0 flex-col gap-1", T), children: n.map(Q) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: Be("flex flex-col gap-1 border-t border-lineSoft pt-2", F), children: o.map(Q) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: N, className: Be("relative inline-block", M), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Be("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (B) => {
      m == null || m(B), s == null || s(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    p ? H && cn(H, document.body) : H
  ] });
};
Et.displayName = "BaseActionMenu";
const ra = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: o,
  feedback: l,
  onFeedback: s,
  disabled: m = !1
}) => {
  const [h, w] = g(!1), b = !!(o || s), p = ze(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), w(!0), window.setTimeout(() => w(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${b ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: p,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制" : n,
            children: h ? /* @__PURE__ */ e(ft, { size: 15 }) : /* @__PURE__ */ e(Pt, { size: 15 })
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
            children: /* @__PURE__ */ e(Rr, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ r(Ye, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Dr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(jr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, er = qe.memo(ra), na = {
  clarification: {
    icon: /* @__PURE__ */ e(mr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(zt, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(ur, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(zt, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ot, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  blocked: {
    icon: /* @__PURE__ */ e(qr, { size: 16 }),
    className: "border-danger bg-danger-soft",
    iconClassName: "text-danger"
  },
  info: {
    icon: /* @__PURE__ */ e(Hr, { size: 16 }),
    className: "border-lineSubtle bg-surfaceMuted",
    iconClassName: "text-secondaryText"
  }
};
function aa({ card: t, actionPending: n = !1, onAction: o }) {
  const l = na[t.kind];
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
            /* @__PURE__ */ e(Fr, { size: 12, className: "shrink-0" })
          ]
        },
        `${s.href}-${s.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((s) => /* @__PURE__ */ e(
        Ue,
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
function sa({ draft: t, onPreview: n, onConfirm: o, onCancel: l }) {
  const s = t.status === "saving", m = t.status === "saved", h = t.actionable ?? !0, w = t.previewable ?? !0, b = s || m || !h || !o;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !n || !w,
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
        !m && h && l && /* @__PURE__ */ e(
          Ue,
          {
            type: "secondary",
            size: "small",
            disabled: s,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (h || m) && /* @__PURE__ */ e(
          Ue,
          {
            type: m ? "secondary" : "primary",
            size: "small",
            disabled: b,
            onClick: () => o == null ? void 0 : o(t.actionKey),
            children: s ? /* @__PURE__ */ r(Ye, { children: [
              /* @__PURE__ */ e(pr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : m ? /* @__PURE__ */ r(Ye, { children: [
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
let rr = !1, St = null, Mt = null, $t = null;
const la = async () => (Mt || (Mt = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw Mt = null, t;
})), Mt), oa = async () => ($t || ($t = import("remark-emoji").then((t) => t.default).catch(() => ($t = null, null))), $t), ia = async () => {
  St || (St = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw St = null, n;
  }));
  const t = await St;
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
}, At = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => At(n)).join("") : qe.isValidElement(t) ? At(t.props.children) : "", nr = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, ca = ({ href: t, label: n }) => {
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
        children: /* @__PURE__ */ e(br, { size: 14 })
      }
    )
  ] });
}, da = ({ language: t, rawCode: n, className: o, children: l }) => {
  const [s, m] = g(!1), h = ze(async () => {
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
          onClick: h,
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
}, ua = ({ rawCode: t }) => {
  const [n, o] = g(!1), l = ze(async () => {
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
}, Sr = (t) => {
  const n = typeof t.title == "string" ? t.title.trim() : "", o = typeof t.pmid == "string" ? t.pmid.trim() : "", l = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !o || !l ? null : { title: n, pmid: o, doi: l };
}, ar = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const o = [];
  return n.forEach((l, s) => {
    var u;
    const m = l.match(/PMID\s*[:：]\s*(\d{4,})/i), h = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!m || !h) return;
    const w = l.slice(0, m.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), b = ((u = n[s - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", M = Sr({
      title: w || b,
      pmid: m[1],
      doi: h[1]
    });
    M && o.push(M);
  }), o.length === 0 ? null : { items: o };
}, ma = (t) => {
  if (!t.startsWith(tr))
    return ar(t);
  const n = t.slice(tr.length).trim();
  if (!n) return null;
  try {
    const o = JSON.parse(n);
    if (!Array.isArray(o.items)) return null;
    const l = o.items.map((s) => Sr(s)).filter((s) => s !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return ar(n);
  }
}, Mr = ({
  msg: t,
  actionKey: n,
  feedback: o,
  onFeedback: l,
  onRefresh: s,
  onConfirmMiraDraft: m,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: w,
  pendingDisplayActionKey: b,
  onDisplayCardAction: p,
  isTyping: M = !1,
  isStreaming: u
}) => {
  var ne, $;
  const v = t.role === "user", T = u ?? M, F = de(null), [N, R] = g(null), [Y, X] = g(null), [O, E] = g(null), [le, Q] = g(!1), H = be(() => /```\s*mermaid/i.test(t.content), [t.content]), B = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), J = be(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), f = be(
    () => v ? null : ma(t.content),
    [v, t.content]
  ), re = !!(f && f.items.length > 0);
  ge(() => {
    if (!B || N || Y) return;
    let y = !1;
    return la().then((k) => {
      y || (R(() => k.remark), X(() => k.rehype));
    }).catch(() => {
    }), () => {
      y = !0;
    };
  }, [B, N, Y]), ge(() => {
    if (!J || le) return;
    let y = !1;
    return oa().then((k) => {
      y || (k && E(() => k), Q(!0));
    }), () => {
      y = !0;
    };
  }, [J, le]);
  const Z = be(() => {
    const y = [Tr];
    return O && y.push(O), N && y.push(N), y;
  }, [O, N]), oe = be(() => {
    const y = [on];
    return Y && y.push(Y), y;
  }, [Y]), L = be(
    () => ({
      table: ({ node: y, ...k }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...k }) }),
      tr: ({ node: y, ...k }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...k }),
      th: ({ node: y, ...k }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...k
        }
      ),
      td: ({ node: y, ...k }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...k }),
      blockquote: ({ node: y, ...k }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...k
        }
      ),
      input: ({ node: y, type: k, checked: x, ...se }) => k === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!x,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...se
        }
      ) : /* @__PURE__ */ e("input", { type: k, ...se }),
      section: ({ node: y, ...k }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...k }),
      p: ({ node: y, children: k, ...x }) => {
        const se = qe.Children.toArray(k);
        if (se.length === 1 && qe.isValidElement(se[0])) {
          const pe = se[0];
          if (typeof pe.props.href == "string" && nr(pe.props.href)) {
            const me = At(pe.props.children).trim();
            return /* @__PURE__ */ e(ca, { href: pe.props.href, label: me });
          }
        }
        return /* @__PURE__ */ e("p", { ...x, children: k });
      },
      a: ({ node: y, href: k, ...x }) => {
        const se = k ?? "", pe = /^https?:\/\/(dx\.)?doi\.org\//i.test(se) || /^doi:/i.test(se), me = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(se) || /\/pmc\/|\/pmid\//i.test(se), V = nr(se);
        return pe || me || V ? /* @__PURE__ */ e(
          "a",
          {
            href: k,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...x
          }
        ) : /* @__PURE__ */ e("a", { href: k, target: "_blank", rel: "noreferrer", ...x });
      },
      pre({ children: y, ...k }) {
        const x = qe.Children.toArray(y).find(
          (K) => qe.isValidElement(K) && typeof K.props.className == "string" && K.props.className.includes("language-")
        );
        if (!x)
          return /* @__PURE__ */ e("pre", { ...k, children: y });
        const se = x.props.className ?? "", pe = se.match(/language-([\w-]+)/), me = pe ? pe[1].toLowerCase() : "code", V = At(x.props.children).replace(/\n$/, "");
        return me === "mermaid" ? /* @__PURE__ */ e(ua, { rawCode: V }) : /* @__PURE__ */ e(da, { language: me, rawCode: V, className: se, children: x.props.children });
      },
      code({ children: y, className: k, ...x }) {
        return k ? /* @__PURE__ */ e("code", { className: k, ...x, children: y }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...x,
            children: y
          }
        );
      }
    }),
    []
  );
  return ge(() => {
    if (v || T || !H) return;
    const y = F.current;
    if (!y) return;
    const k = Array.from(y.querySelectorAll(".mermaid")).filter(
      (x) => x.dataset.processed !== "true"
    );
    k.length !== 0 && ia().then(async (x) => {
      await Promise.all(
        k.map(async (se, pe) => {
          var te;
          const me = (te = se.textContent) == null ? void 0 : te.trim();
          if (!me) return;
          const V = `mermaid-${Date.now()}-${pe}`, { svg: K } = await x.render(V, me);
          se.innerHTML = K, se.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [v, T, H, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${v ? "justify-end" : "justify-start"}`, children: v ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (ne = t.references) == null ? void 0 : ne.map((y) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${y.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              y.type === "skill" ? /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(fr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: y.label, children: y.label })
            ]
          },
          y.id
        )),
        ($ = t.attachments) == null ? void 0 : $.map((y) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${y.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: y.status === "error" ? "alert" : void 0,
            title: y.errorMessage,
            children: [
              y.status === "uploading" ? /* @__PURE__ */ e(pr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : y.status === "error" ? /* @__PURE__ */ e(Wr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : y.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: y.previewUrl, alt: y.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(xr, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: y.name, children: y.name }),
              y.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              y.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          y.id
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
    re && f ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: f.items.map((y, k) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: y.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${y.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: y.pmid
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
                  href: `https://doi.org/${y.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: y.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${y.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(br, { size: 14 })
            }
          )
        ]
      },
      `${y.pmid}-${k}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: F,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          kr,
          {
            remarkPlugins: Z,
            rehypePlugins: oe,
            components: L,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      sa,
      {
        draft: t.miraDraft,
        onPreview: h,
        onConfirm: m,
        onCancel: w
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      aa,
      {
        card: t.displayCard,
        actionPending: b === t.displayCard.actionKey,
        onAction: p
      }
    ),
    !re && t.content && !T && /* @__PURE__ */ e(
      er,
      {
        markdownContent: t.content,
        onRefresh: s,
        feedback: o,
        onFeedback: n && l ? (y) => l(n, y) : void 0,
        disabled: T
      }
    )
  ] }) }) });
}, pa = qe.memo(Mr), ha = {
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
}, fa = {
  queued: /* @__PURE__ */ e(_t, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(yr, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(mr, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(zt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(ur, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Ot, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(gr, { size: 14, className: "text-danger" })
}, sr = {
  knowledge: {
    icon: /* @__PURE__ */ e(Xt, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Ur, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(Or, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(Xt, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(yr, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, xa = {
  running: {
    icon: /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(zt, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(gr, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(Vr, { size: 13 }),
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
  defaultExpanded: l = !0,
  elapsedSeconds: s,
  reasoning: m
}) => {
  const [h, w] = g(l), [b, p] = g(!1), M = de(null);
  ge(() => {
    n.length > 0 && w(!0);
  }, [n.length]);
  const u = n.length > 0, v = s === void 0 ? void 0 : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`, T = (m == null ? void 0 : m.split(/\r?\n/).map((N) => N.trim()).filter(Boolean)) ?? [], F = T[T.length - 1] ?? "";
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: fa[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: o || ha[t] }),
      v && /* @__PURE__ */ e(
        "span",
        {
          className: "text-[12px] tabular-nums leading-5 text-tertiaryText select-none",
          "aria-label": `已用时 ${v}`,
          children: v
        }
      ),
      u && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => w((N) => !N),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            h ? /* @__PURE__ */ e(yt, { size: 12 }) : /* @__PURE__ */ e(bt, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    m && /* @__PURE__ */ r("div", { className: "mt-1 w-full max-w-[680px] rounded-xl border border-lineSubtle bg-surfaceMuted px-3 py-2.5", children: [
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => p((N) => !N),
          className: "flex w-full items-center gap-1.5 text-left text-[13px] font-medium text-secondaryText",
          "aria-expanded": b,
          children: [
            b ? /* @__PURE__ */ e(yt, { size: 14 }) : /* @__PURE__ */ e(bt, { size: 14 }),
            /* @__PURE__ */ e("span", { className: "shrink-0", children: "Thinking" }),
            !b && F && /* @__PURE__ */ r("span", { className: "relative ml-2 min-w-0 flex-1 overflow-hidden text-left text-[12px] font-normal text-tertiaryText", children: [
              /* @__PURE__ */ e("span", { className: "block whitespace-nowrap", children: F }),
              /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: "pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-surfaceMuted"
                }
              )
            ] })
          ]
        }
      ),
      b && /* @__PURE__ */ e("div", { className: "mt-2 whitespace-pre-wrap border-t border-lineSubtle pt-2 text-[13px] leading-6 text-secondaryText", children: m })
    ] }),
    u && /* @__PURE__ */ e(
      "div",
      {
        ref: M,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${h ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((N, R) => {
          const Y = sr[N.type] ?? sr.tool, X = N.status ? xa[N.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${Y.colorClass}`, children: Y.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: N.label }),
                    X && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${X.colorClass}`,
                        "aria-label": N.status,
                        children: X.icon
                      }
                    )
                  ] }),
                  (N.detail || N.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    N.detail,
                    N.detail && N.resultCount !== void 0 ? " · " : "",
                    N.resultCount !== void 0 ? `${N.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            N.id ?? `${N.type}-${R}-${N.label}`
          );
        })
      }
    )
  ] });
}, ba = qe.memo(qt);
function ga(t, n) {
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
function ya({
  messages: t,
  isTyping: n,
  statusPhase: o = "thinking",
  statusLabel: l,
  statusVisible: s,
  searchSteps: m = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: w = 800,
  selection: b,
  scrollbar: p,
  feedbackByMessageKey: M,
  getMessageKey: u = (Q, H) => String(H),
  onFeedback: v,
  onRegenerate: T,
  onConfirmMiraDraft: F,
  onPreviewMiraDraft: N,
  onCancelMiraDraft: R,
  pendingDisplayActionKey: Y,
  onDisplayCardAction: X,
  onScroll: O,
  scrollContainerRef: E,
  onMessageElement: le
}) {
  var Ne, Te;
  const Q = !!b, H = de(null), B = de(null), J = de(/* @__PURE__ */ new Map()), f = de(), re = de(), [Z, oe] = g(), [L, ne] = g(0), $ = o === "awaiting_clarification" || o === "awaiting_confirmation" || o === "awaiting_approval" || o === "warning" || o === "failed", y = n && (s ?? !h) || s === !0 && $;
  let k = -1, x = -1;
  if (n) {
    for (let U = t.length - 1; U >= 0; U -= 1)
      if (((Ne = t[U]) == null ? void 0 : Ne.role) === "user") {
        x = U;
        break;
      }
    for (let U = t.length - 1; U > x; U -= 1)
      if (((Te = t[U]) == null ? void 0 : Te.role) === "assistant") {
        k = U;
        break;
      }
  }
  const se = x >= 0 ? u(t[x], x) : void 0, pe = k >= 0 ? u(t[k], k) : void 0, me = se && pe ? `${se}:${pe}` : void 0, V = k >= 0 ? t[k] : void 0, K = !!(V != null && V.reasoning && !V.content), te = y && (!h || K || $);
  ge(() => {
    if (!n) {
      re.current = void 0, ne(0);
      return;
    }
    re.current = Date.now(), ne(0);
    const U = window.setInterval(() => {
      const C = re.current;
      C !== void 0 && ne(Math.floor((Date.now() - C) / 1e3));
    }, 1e3);
    return () => window.clearInterval(U);
  }, [n]);
  const Le = ze(
    (U) => {
      H.current = U, ga(E, U);
    },
    [E]
  );
  return Ht(() => {
    if (!me || !pe || x < 0 || k < 0)
      return;
    const U = H.current, C = B.current, W = J.current.get(x);
    if (!U || !C || !W) return;
    const G = () => {
      const Ee = window.getComputedStyle(U), Ce = window.getComputedStyle(C), Fe = U.clientHeight - Ft(Ee.paddingTop) - Ft(Ee.paddingBottom), _e = Ft(Ce.rowGap || Ce.gap), Me = Math.max(
        0,
        Math.floor(Fe - W.offsetHeight - _e)
      );
      oe(
        (ye) => (ye == null ? void 0 : ye.assistantKey) === pe && ye.minHeight === Me ? ye : { assistantKey: pe, minHeight: Me }
      );
    };
    G();
    const I = new ResizeObserver(G);
    return I.observe(U), I.observe(W), () => I.disconnect();
  }, [
    k,
    pe,
    me,
    x
  ]), Ht(() => {
    if (!me || !pe || (Z == null ? void 0 : Z.assistantKey) !== pe || x < 0 || f.current === me)
      return;
    const U = H.current, C = J.current.get(x);
    !U || !C || (U.scrollTo({ top: C.offsetTop, behavior: "auto" }), f.current = me);
  }, [pe, me, x, Z]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: Le,
        "data-chat-scroll-container": !0,
        onScroll: O,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: B,
            className: `flex w-full flex-col ${Q ? "gap-3" : "gap-8"}`,
            style: { maxWidth: w },
            children: [
              t.map((U, C) => {
                const W = u(U, C), G = (b == null ? void 0 : b.selectedMessageKeys.has(W)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": C,
                    "data-chat-turn-reserved": (Z == null ? void 0 : Z.assistantKey) === W ? "true" : void 0,
                    ref: (I) => {
                      I ? J.current.set(C, I) : J.current.delete(C), le == null || le(C, I);
                    },
                    className: Q ? "flex w-full items-start gap-2" : void 0,
                    style: (Z == null ? void 0 : Z.assistantKey) === W ? { minHeight: Z.minHeight } : void 0,
                    children: [
                      b && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => b.onToggleMessage(W),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": G ? "取消选择消息" : "选择消息",
                          children: G ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ft, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: b ? `relative min-w-0 flex-1 rounded-xl px-2 transition-colors ${G ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${U.role === "user" ? "py-2.5" : "py-1.5"}` : "relative",
                          children: [
                            C === k && te && /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 z-10 flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              qt,
                              {
                                phase: o,
                                label: l,
                                searchSteps: K ? [] : [...m],
                                elapsedSeconds: n ? L : void 0,
                                reasoning: K ? V == null ? void 0 : V.reasoning : void 0
                              }
                            ) }),
                            /* @__PURE__ */ e(
                              Mr,
                              {
                                msg: U,
                                actionKey: W,
                                feedback: M == null ? void 0 : M[W],
                                onFeedback: v,
                                onRefresh: T ? () => T(C) : void 0,
                                onConfirmMiraDraft: F,
                                onPreviewMiraDraft: N,
                                onCancelMiraDraft: R,
                                pendingDisplayActionKey: Y,
                                onDisplayCardAction: X,
                                isTyping: n && C === k
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  W
                );
              }),
              k < 0 && y && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                qt,
                {
                  phase: o,
                  label: l,
                  searchSteps: K ? [] : [...m],
                  elapsedSeconds: n ? L : void 0
                }
              ) }) })
            ]
          }
        )
      }
    ),
    p && p.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${p.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: p.height,
          transform: `translateY(${p.top}px)`
        }
      }
    )
  ] });
}
qe.memo(ya);
function gs({
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
const ys = dr(
  function({ header: n, children: o, sidePanels: l }, s) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: s, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: o }),
        l
      ] })
    ] });
  }
), vs = dr(
  function({ open: n, width: o, resizing: l = !1, overlay: s = !1, overlayRight: m = 0, children: h }, w) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: w,
        "data-overlay": s ? "true" : "false",
        style: { width: n ? o : 0, ...s ? { right: m } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${s ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: o }, className: "h-full min-w-0", children: h })
      }
    );
  }
);
function va({
  isSidebarOpen: t,
  title: n,
  editingTitle: o,
  titleInputRef: l,
  divided: s = !1,
  actions: m,
  onOpenSidebar: h,
  onStartEditTitle: w,
  onEditingTitleChange: b,
  onCommitTitle: p,
  onEditingTitleKeyDown: M
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
              onClick: h,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(vr, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: o !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: o,
              onChange: (v) => b == null ? void 0 : b(v.target.value),
              onBlur: p,
              onKeyDown: M,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${w ? "cursor-pointer" : ""}`,
              onClick: w,
              title: w ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        m && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: m })
      ]
    }
  );
}
function ws({ active: t = !1, icon: n, label: o, onClick: l }) {
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
function Ns({
  items: t,
  activeMessageIndex: n,
  initiallyExpanded: o = !1,
  onSelect: l
}) {
  const [s, m] = g(o), [h, w] = g(null), [b, p] = g(0), [M, u] = g(0), [v, T] = g(!1), F = de(null), N = de({}), R = de(null), Y = ze(() => {
    const E = F.current;
    if (!E) {
      p(0), u(0);
      return;
    }
    const { scrollTop: le, scrollHeight: Q, clientHeight: H } = E;
    if (Q <= H || H <= 0) {
      p(0), u(0);
      return;
    }
    const B = Math.max(H / Q * H, 24), J = H - B, f = le / Math.max(Q - H, 1);
    p(B), u(J * f);
  }, []), X = ze(() => {
    Y(), T(!0), R.current !== null && window.clearTimeout(R.current), R.current = window.setTimeout(() => T(!1), 650);
  }, [Y]), O = () => {
    R.current !== null && (window.clearTimeout(R.current), R.current = null), m(!1), w(null), T(!1);
  };
  return ge(() => {
    if (!s) return;
    const E = window.requestAnimationFrame(Y);
    return () => window.cancelAnimationFrame(E);
  }, [s, t.length, Y]), ge(() => {
    const E = F.current, le = N.current[n];
    if (!E || !le) return;
    const Q = E.scrollTop, H = Q + E.clientHeight, B = le.offsetTop, J = B + le.offsetHeight, f = 16;
    B < Q + f ? E.scrollTo({ top: Math.max(B - f, 0), behavior: "auto" }) : J > H - f && E.scrollTo({
      top: Math.max(J - E.clientHeight + f, 0),
      behavior: "auto"
    });
  }, [n, t.length]), ge(() => () => {
    R.current !== null && window.clearTimeout(R.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => m(!0),
      onMouseLeave: O,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: F,
          onScroll: X,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${s ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((E) => {
              const le = E.messageIndex === n, Q = h === E.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (H) => {
                    N.current[E.messageIndex] = H;
                  },
                  type: "button",
                  onClick: () => l(E.messageIndex),
                  onMouseEnter: () => w(E.messageIndex),
                  onMouseLeave: () => w(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${s ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${E.messageIndex + 1} 条用户消息`,
                  title: E.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${s ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${le ? "text-primary" : Q ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: E.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${le ? "h-[4px] w-[12px] bg-primary" : Q ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                E.messageIndex
              );
            }) }),
            s && b > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${v ? "opacity-100" : "opacity-0"}`,
                style: { height: b, transform: `translateY(${M}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function ks({
  selectedCount: t,
  shareLink: n,
  modalOpen: o,
  copied: l = !1,
  contentMaxWidth: s = 840,
  onCancel: m,
  onCreateLink: h,
  onCloseModal: w,
  onCopyLink: b
}) {
  return /* @__PURE__ */ r(Ye, { children: [
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
            /* @__PURE__ */ e(Ue, { type: "secondary", size: "small", onClick: m, children: "取消" }),
            /* @__PURE__ */ e(
              Ue,
              {
                type: "primary",
                size: "small",
                disabled: t <= 0,
                onClick: h,
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
        onCancel: w,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: b,
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
function $r({
  attachments: t,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: o = !1,
  deletingAttachmentId: l,
  unavailableHint: s,
  error: m,
  onRequestUpload: h,
  onDeleteAttachment: w
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ r("div", { className: h ? "pr-28" : void 0, children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      h && /* @__PURE__ */ e("div", { className: "absolute right-0 top-6", children: /* @__PURE__ */ e(
        Ue,
        {
          type: "secondary",
          size: "small",
          disabled: o,
          onClick: h,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            o ? /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Kr, { size: 14 }),
            o ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${h ? "pr-28" : ""}`, children: t.map((b) => {
      const p = l === b.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: b.statusLabel,
          children: [
            /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: b.name }),
            b.status === "processing" && /* @__PURE__ */ e(ot, { size: 12, className: "animate-spin" }),
            w && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: p,
                onClick: () => w(b.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${b.name}`,
                title: "删除附件",
                children: p ? /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(wr, { size: 13 })
              }
            )
          ]
        },
        b.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    s && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: s }),
    m && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: m })
  ] });
}
const wa = {
  disabled: /* @__PURE__ */ e(Gr, { size: 14 }),
  pending: /* @__PURE__ */ e(_t, { size: 14 }),
  indexed: /* @__PURE__ */ e(vt, { size: 14 })
};
function Lr({
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
      wa[l.status],
      l.statusLabel
    ] })
  ] });
}
const Na = "_preview_a55vk_1", ka = "_editor_a55vk_3", zr = {
  preview: Na,
  editor: ka
};
function Ta({
  document: t,
  layout: n = "page"
}) {
  const [o, l] = g(!1), s = de(null), m = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => () => {
    s.current !== null && window.clearTimeout(s.current);
  }, []);
  const h = () => {
    l(!0), s.current !== null && window.clearTimeout(s.current), s.current = window.setTimeout(() => l(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${m}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        Lr,
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
        onScroll: h,
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${o ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${zr.preview} ${m}`, children: /* @__PURE__ */ e(kr, { remarkPlugins: [Tr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Vt, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            $r,
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
function Ts({
  tabs: t,
  activeKey: n,
  onSelectTab: o,
  onCloseTab: l,
  onClose: s,
  pendingActionKey: m,
  onAction: h,
  resolveActions: w,
  renderContent: b,
  onResizeStart: p
}) {
  const M = t.find((T) => T.key === n) ?? null, u = M ? (w == null ? void 0 : w(M)) ?? M.actions : void 0, v = M ? b == null ? void 0 : b(M) : void 0;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: p,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((T) => {
        const F = T.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => o(T.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${F ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                T.type === "knowledge" || T.type === "draft" ? /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Xr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: T.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (N) => {
                N.stopPropagation(), l(T.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${T.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(gt, { size: 12 })
            }
          )
        ] }, T.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        M && (u == null ? void 0 : u.map((T) => /* @__PURE__ */ e(
          Ue,
          {
            type: T.tone ?? "secondary",
            size: "small",
            disabled: m === M.key || !h,
            onClick: () => h == null ? void 0 : h(M.key, T.id),
            children: T.label
          },
          T.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: s,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(gt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: M ? v || (M.document ? /* @__PURE__ */ e(Ta, { document: M.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: M.loading ? "正在加载文档…" : M.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Cs({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: o,
  knowledgeDocs: l,
  experiments: s,
  activePreviewKey: m,
  onSearchQueryChange: h,
  onOpenKnowledge: w,
  onOpenExperiment: b,
  onResizeStart: p
}) {
  const M = l.length + s.length;
  return /* @__PURE__ */ r("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: p,
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
              onChange: (u) => h(u.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : M === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ye, { children: [
        l.map((u) => {
          const v = `knowledge:${u.id}`, T = m === v;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => w(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${T ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${T ? "font-semibold" : "font-normal"}`, children: u.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: u.tags[0] ?? "未分类" })
              ]
            },
            u.id
          );
        }),
        s.map((u) => {
          const v = `experiment:${u.id}`, T = m === v;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => b(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${T ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${T ? "font-semibold" : "font-normal"}`, children: u.title }),
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
const Ca = 50, Sa = 100 * 1024 * 1024, Ma = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", $a = [
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
], La = /(?:^|\s)\/([^\s/]*)$/, za = /(?:^|\s)@([^\s@]*)$/, Ea = (t, n) => {
  const l = t.slice(0, n).match(La);
  return l ? l[1] : null;
}, Aa = (t, n) => {
  const l = t.slice(0, n).match(za);
  return l ? l[1] : null;
}, Ss = (t, n, o, l) => {
  const s = t.slice(0, n), m = t.slice(o), h = s.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const u = `/${l} `;
    return { value: `${s}${u}${m}`, cursor: s.length + u.length };
  }
  const w = s.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}/${l} `, M = `${s.slice(0, w)}${p}`;
  return {
    value: `${M}${m}`,
    cursor: M.length
  };
}, Ms = (t, n, o, l) => {
  const s = t.slice(0, n), m = t.slice(o), h = s.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const u = `@${l} `;
    return { value: `${s}${u}${m}`, cursor: s.length + u.length };
  }
  const w = s.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}@${l} `, M = `${s.slice(0, w)}${p}`;
  return {
    value: `${M}${m}`,
    cursor: M.length
  };
}, Pa = [], $s = [], Er = ({
  onSend: t,
  disabled: n,
  autoFocus: o = !1,
  isStreaming: l = !1,
  onCancel: s,
  leadingControls: m,
  skillOptions: h = $a,
  fileOptions: w = Pa,
  uploadAccept: b,
  validateUploadFile: p,
  onUploadValidationError: M
}) => {
  const [u, v] = g(""), [T, F] = g(!1), [N, R] = g(!1), [Y, X] = g(""), [O, E] = g(-1), [le, Q] = g(!1), [H, B] = g(""), [J, f] = g(-1), [re, Z] = g([]), [oe, L] = g([]), [ne, $] = g([]), [y, k] = g(!1), [x, se] = g("low"), pe = de(null), me = de(!1), V = de(0), K = de(null), te = Ir(), Le = de([]), Ne = l, Te = Ne && !!s;
  ge(() => {
    Le.current = re;
  }, [re]), ge(() => () => {
    Le.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const U = be(() => {
    const i = Y.trim().toLowerCase();
    return i ? h.filter((P) => `${P.id} ${P.description} ${P.source}`.toLowerCase().includes(i)) : h;
  }, [h, Y]), C = be(() => {
    const i = H.trim().toLowerCase();
    return i ? w.filter((P) => `${P.name} ${P.projectName} ${P.sourceType} ${P.operatorName ?? ""} ${P.operatedAt ?? ""}`.toLowerCase().includes(i)) : w.filter((P) => P.isRecent).slice(0, 10);
  }, [w, H]), W = ze((i, P) => {
    const q = P ?? i.length, ie = Ea(i, q);
    if (ie !== null) {
      R(!0), X(ie), E(-1), Q(!1), B(""), f(-1);
      return;
    }
    const _ = Aa(i, q);
    if (_ !== null) {
      Q(!0), B(_), f(-1), R(!1), X(""), E(-1);
      return;
    }
    R(!1), X(""), E(-1), Q(!1), B(""), f(-1);
  }, []), G = ze((i) => {
    if (i.disabled) return;
    const P = pe.current, q = (P == null ? void 0 : P.selectionStart) ?? u.length, ie = (P == null ? void 0 : P.selectionEnd) ?? q, _ = u.slice(0, q), Ae = u.slice(ie), he = (() => {
      const xe = _.match(/(?:^|\s)\/[^\s/]*$/);
      if (!xe)
        return { value: u, cursor: q };
      const Pe = _.length - xe[0].length, He = xe[0].startsWith(" ") ? " " : "", fe = `${_.slice(0, Pe)}${He}`;
      return {
        value: `${fe}${Ae}`,
        cursor: fe.length
      };
    })();
    L((xe) => {
      const Pe = `skill-${i.id}`;
      return xe.some((He) => He.id === Pe) ? xe : [...xe, { id: Pe, type: "skill", label: i.id, sourceId: i.id }];
    }), v(he.value), R(!1), X(""), E(-1), requestAnimationFrame(() => {
      P && (P.focus(), P.setSelectionRange(he.cursor, he.cursor));
    });
  }, [u]), I = ze((i) => {
    const P = pe.current, q = (P == null ? void 0 : P.selectionStart) ?? u.length, ie = (P == null ? void 0 : P.selectionEnd) ?? q, _ = u.slice(0, q), Ae = u.slice(ie), he = (() => {
      const xe = _.match(/(?:^|\s)@[^\s@]*$/);
      if (!xe)
        return { value: u, cursor: q };
      const Pe = _.length - xe[0].length, He = xe[0].startsWith(" ") ? " " : "", fe = `${_.slice(0, Pe)}${He}`;
      return {
        value: `${fe}${Ae}`,
        cursor: fe.length
      };
    })();
    $((xe) => {
      const Pe = `doc-${i.id}`;
      return xe.some((He) => He.id === Pe) ? xe : [...xe, { id: Pe, type: "doc", label: i.name, sourceId: i.id }];
    }), v(he.value), Q(!1), B(""), f(-1), requestAnimationFrame(() => {
      P && (P.focus(), P.setSelectionRange(he.cursor, he.cursor));
    });
  }, [u]), Ee = ze(() => {
    k(!1);
    const i = K.current;
    if (i) {
      try {
        if ("showPicker" in i && typeof i.showPicker == "function") {
          i.showPicker();
          return;
        }
      } catch {
      }
      i.click();
    }
  }, []), Ce = ze((i) => {
    const P = Array.from(i.target.files ?? []);
    if (P.length === 0) return;
    const q = P.filter((ie) => {
      const _ = p == null ? void 0 : p(ie);
      return _ ? (M == null || M(_), !1) : !0;
    });
    Z((ie) => {
      const _ = new Set(ie.map((he) => he.id)), Ae = [...ie];
      return q.forEach((he) => {
        if (he.size > Sa || Ae.length >= Ca) return;
        const xe = `${he.name}-${he.size}-${he.lastModified}`;
        if (_.has(xe)) return;
        const Pe = he.type.startsWith("image/");
        _.add(xe), Ae.push({
          id: xe,
          name: he.name,
          mimeType: he.type || "application/octet-stream",
          previewUrl: Pe ? URL.createObjectURL(he) : void 0,
          file: he
        });
      }), Ae;
    }), i.target.value = "";
  }, [M, p]), Fe = ze((i) => {
    Z((P) => {
      const q = P.find((ie) => ie.id === i);
      return q != null && q.previewUrl && URL.revokeObjectURL(q.previewUrl), P.filter((ie) => ie.id !== i);
    });
  }, []), _e = ze((i) => {
    L((P) => P.filter((q) => q.id !== i));
  }, []), Me = ze((i) => {
    $((P) => P.filter((q) => q.id !== i));
  }, []), ye = ze(() => {
    !u.trim() || n || l || (t({
      content: u,
      attachments: re.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...oe, ...ne],
      thinkingLevel: x
    }), v(""), Z([]), L([]), $([]), R(!1), X(""), E(-1), Q(!1), B(""), f(-1));
  }, [u, n, l, t, re, ne, oe, x]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: te,
        ref: K,
        type: "file",
        multiple: !0,
        accept: b,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Ce
      }
    ),
    (re.length > 0 || oe.length > 0 || ne.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      oe.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => _e(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(gt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      ne.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(fr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Me(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${i.label}`,
                children: /* @__PURE__ */ e(gt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      re.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            i.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: i.previewUrl, alt: i.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(xr, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: i.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: i.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Fe(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${i.name}`,
                children: /* @__PURE__ */ e(gt, { size: 12 })
              }
            )
          ]
        },
        i.id
      ))
    ] }) }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: pe,
        autoFocus: o,
        value: u,
        onCompositionStart: () => {
          me.current = !0;
        },
        onCompositionEnd: (i) => {
          me.current = !1, V.current = performance.now(), W(
            i.currentTarget.value,
            i.currentTarget.selectionStart
          );
        },
        onChange: (i) => {
          const P = i.target.value;
          v(P), W(P, i.target.selectionStart);
        },
        onClick: (i) => {
          W(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyUp: (i) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(i.key) || W(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyDown: (i) => {
          const P = i.nativeEvent;
          if (!(me.current || P.isComposing || P.keyCode === 229 || i.key === "Enter" && performance.now() - V.current < 50)) {
            if (i.key === "Enter" && (i.shiftKey || i.metaKey || i.ctrlKey)) {
              i.preventDefault();
              const q = i.currentTarget, ie = q.selectionStart ?? u.length, _ = q.selectionEnd ?? ie, Ae = `${u.slice(0, ie)}
${u.slice(_)}`, he = ie + 1;
              v(Ae), W(Ae, he), requestAnimationFrame(() => {
                q.setSelectionRange(he, he);
              });
              return;
            }
            if (N) {
              if (i.key === "ArrowDown") {
                i.preventDefault(), E((q) => U.length === 0 ? -1 : q < 0 ? 0 : (q + 1) % U.length);
                return;
              }
              if (i.key === "ArrowUp") {
                i.preventDefault(), E((q) => U.length === 0 ? -1 : q < 0 ? U.length - 1 : (q - 1 + U.length) % U.length);
                return;
              }
              if (i.key === "Escape") {
                i.preventDefault(), R(!1), X(""), E(-1);
                return;
              }
              if (i.key === "Enter" && !i.shiftKey) {
                i.preventDefault();
                const q = O >= 0 ? U[O] : void 0;
                q && G(q);
                return;
              }
            }
            if (le) {
              if (i.key === "ArrowDown") {
                i.preventDefault(), f((q) => C.length === 0 ? -1 : q < 0 ? 0 : (q + 1) % C.length);
                return;
              }
              if (i.key === "ArrowUp") {
                i.preventDefault(), f((q) => C.length === 0 ? -1 : q < 0 ? C.length - 1 : (q - 1 + C.length) % C.length);
                return;
              }
              if (i.key === "Escape") {
                i.preventDefault(), Q(!1), B(""), f(-1);
                return;
              }
              if (i.key === "Enter" && !i.shiftKey) {
                i.preventDefault();
                const q = J >= 0 ? C[J] : void 0;
                q && I(q);
                return;
              }
            }
            i.key === "Enter" && !i.shiftKey && (i.preventDefault(), ye());
          }
        },
        disabled: n,
        onFocus: () => F(!0),
        onBlur: () => {
          F(!1), R(!1), Q(!1);
        },
        placeholder: T ? Ma : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${re.length > 0 || oe.length > 0 || ne.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    N && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: Y ? `搜索 skill：${Y}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: U.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : U.map((i, P) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : P === O ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => G(i),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: i.badge }),
            /* @__PURE__ */ r("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: i.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: i.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: i.disabledReason || i.source })
          ]
        },
        i.id
      )) })
    ] }) }),
    le && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: H ? `搜索文件：${H}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !H && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(_t, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        C.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : C.map((i, P) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${P === J ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => I(i),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Bt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: i.name }),
              !H && i.operatorName && i.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${i.operatorName} ${i.operatedAt}` })
            ]
          },
          i.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
        m,
        /* @__PURE__ */ r("label", { className: "inline-flex h-8 items-center rounded-full border border-borderGray bg-white px-2.5 text-[12px] text-secondaryText transition-colors hover:bg-bgLight", children: [
          /* @__PURE__ */ e("span", { className: "mr-1.5 whitespace-nowrap", children: "推理" }),
          /* @__PURE__ */ r(
            "select",
            {
              value: x,
              disabled: l,
              onChange: (i) => se(i.target.value),
              "aria-label": "推理程度",
              className: "cursor-pointer appearance-none bg-transparent pr-1 font-medium text-primaryText outline-none disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ e("option", { value: "low", children: "低" }),
                /* @__PURE__ */ e("option", { value: "medium", children: "中" }),
                /* @__PURE__ */ e("option", { value: "high", children: "高" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            className: "relative",
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Ee,
                  "aria-controls": te,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Nr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${y ? "block" : "hidden"}`,
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
          onClick: Ne ? s : ye,
          disabled: Ne ? !Te : n || !u.trim(),
          "aria-label": Ne ? "停止生成" : "发送消息",
          title: Ne ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Te || !Ne && u.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: Ne ? /* @__PURE__ */ e(Yr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Qr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
qe.memo(Er);
const Ba = ({ messages: t, isTyping: n, statusPhase: o = "thinking", searchSteps: l = [] }) => {
  const s = de(null);
  ge(() => {
    var h;
    (h = s.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const m = be(() => t.map((h, w) => /* @__PURE__ */ e(pa, { msg: h }, `${w}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    m,
    n && /* @__PURE__ */ e(ba, { phase: o, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: s })
  ] });
};
qe.memo(Ba);
const _a = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], Ar = ({ onSelect: t, prompts: n = _a, disabled: o = !1 }) => {
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
qe.memo(Ar);
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
}, lr = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary peer-autofill:left-4 peer-autofill:top-0 peer-autofill:-translate-y-1/2 peer-autofill:rounded peer-autofill:bg-surface peer-autofill:px-1.5 peer-autofill:text-xs peer-autofill:font-medium peer-autofill:text-primary";
function Ls({ onLogin: t, onLoginSuccess: n, onNavigate: o }) {
  const l = de(null), s = de(null), [m, h] = g(""), [w, b] = g(""), [p, M] = g(!0), [u, v] = g(!1), [T, F] = g(!1), [N, R] = g(null), Y = de(null), [X, O] = g(!1), [E, le] = g("email"), [Q, H] = g(""), [B, J] = g(""), [f, re] = g(""), [Z, oe] = g(""), [L, ne] = g(0), [$, y] = g(!1), k = be(() => m.trim().length > 0 && w.trim().length > 0 && !u, [
    m,
    u,
    w
  ]);
  ge(() => {
    if (L <= 0) return;
    const V = window.setTimeout(() => ne((K) => K - 1), 1e3);
    return () => clearTimeout(V);
  }, [L]), ge(
    () => () => {
      Y.current !== null && window.clearTimeout(Y.current);
    },
    []
  ), ge(() => {
    const V = l.current, K = s.current;
    if (!V || !K) return;
    const te = V.getContext("2d");
    if (!te) return;
    const Le = window.getComputedStyle(document.documentElement), Ne = Le.getPropertyValue("--chatui-color-auth-particle-active").trim(), Te = Le.getPropertyValue("--chatui-color-auth-particle-idle").trim(), U = Le.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let C = 0, W = 0, G = 0, I = window.devicePixelRatio || 1, Ee = [];
    const Ce = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, Fe = 150, _e = () => {
      const ie = K.getBoundingClientRect();
      I = window.devicePixelRatio || 1, W = ie.width, G = ie.height, V.width = W * I, V.height = G * I, V.style.width = `${W}px`, V.style.height = `${G}px`, te.setTransform(I, 0, 0, I, 0, 0);
      const _ = W < 768 ? 40 : 90;
      Ee = Array.from({ length: _ }, () => Ia(W, G));
    }, Me = (ie) => {
      te.beginPath(), te.arc(ie.x, ie.y, ie.size, 0, Math.PI * 2), te.closePath(), te.fill();
    }, ye = () => {
      te.clearRect(0, 0, W, G);
      for (let ie = 0; ie < Ee.length; ie += 1) {
        const _ = Ee[ie];
        _.x += _.vx, _.y += _.vy, (_.x < 0 || _.x > W) && (_.vx = -_.vx), (_.y < 0 || _.y > G) && (_.vy = -_.vy);
        const Ae = Ce.x - _.x, he = Ce.y - _.y, xe = Math.sqrt(Ae * Ae + he * he) || 1, Pe = Ae / xe, He = he / xe, fe = (Ce.radius - xe) / Ce.radius, ee = Pe * fe * _.density, et = He * fe * _.density;
        if (xe < Ce.radius)
          _.x -= ee * 0.5, _.y -= et * 0.5, te.fillStyle = Ne, _.size = Math.min(_.size + 0.1, 2.5);
        else {
          if (_.x !== _.baseX) {
            const We = _.x - _.baseX;
            _.x -= We / 50;
          }
          if (_.y !== _.baseY) {
            const We = _.y - _.baseY;
            _.y -= We / 50;
          }
          te.fillStyle = Te, _.size = Math.max(_.size - 0.05, 1);
        }
        Me(_);
        for (let We = ie; We < Ee.length; We += 1) {
          const Ie = Ee[We], Qe = _.x - Ie.x, Ve = _.y - Ie.y, Ze = Math.sqrt(Qe * Qe + Ve * Ve);
          if (Ze < Fe) {
            const at = (1 - Ze / Fe) * 0.4;
            te.beginPath(), te.strokeStyle = U, te.globalAlpha = at, te.lineWidth = 1, te.moveTo(_.x, _.y), te.lineTo(Ie.x, Ie.y), te.stroke(), te.globalAlpha = 1, te.closePath();
          }
        }
      }
      C = window.requestAnimationFrame(ye);
    }, i = (ie) => {
      const _ = K.getBoundingClientRect();
      Ce.x = ie.clientX - _.left, Ce.y = ie.clientY - _.top;
    }, P = () => {
      Ce.x = -1e3, Ce.y = -1e3;
    }, q = (ie) => {
      if (ie.touches.length < 1) return;
      const _ = K.getBoundingClientRect();
      Ce.x = ie.touches[0].clientX - _.left, Ce.y = ie.touches[0].clientY - _.top;
    };
    return _e(), ye(), window.addEventListener("resize", _e), K.addEventListener("mousemove", i), K.addEventListener("mouseleave", P), K.addEventListener("touchmove", q, { passive: !0 }), K.addEventListener("touchend", P), () => {
      window.cancelAnimationFrame(C), window.removeEventListener("resize", _e), K.removeEventListener("mousemove", i), K.removeEventListener("mouseleave", P), K.removeEventListener("touchmove", q), K.removeEventListener("touchend", P);
    };
  }, []);
  const x = async (V) => {
    if (V.preventDefault(), !!k) {
      v(!0), R(null);
      try {
        const K = await t({ email: m.trim(), password: w, rememberLogin: p });
        if (!K.ok) {
          R(K.message);
          return;
        }
        F(!0), Y.current = window.setTimeout(() => {
          F(!1), n();
        }, 900);
      } catch {
        R("登录失败，请稍后重试。");
      } finally {
        v(!1);
      }
    }
  }, se = async () => {
    !Q.trim() || L > 0 || (v(!0), await new Promise((V) => window.setTimeout(V, 1e3)), v(!1), y(!0), ne(60));
  }, pe = async () => {
    if (E === "email") {
      if (!Q.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q) || !B.trim() || B.length < 6 || !f.trim() || f.length < 6 || f !== Z) return;
      le("success");
    }
  }, me = () => {
    O(!1), le("email"), H(""), J(""), re(""), oe(""), ne(0), y(!1);
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
      /* @__PURE__ */ r("form", { onSubmit: x, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: m,
              onChange: (V) => {
                h(V.target.value), R(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "username",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: lr, children: "邮箱" })
        ] }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "password",
              value: w,
              onChange: (V) => {
                b(V.target.value), R(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "current-password",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: lr, children: "密码" })
        ] }),
        N && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: N }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: p,
                  onChange: (V) => M(V.target.checked),
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
            disabled: !k,
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
      !X && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
                /* @__PURE__ */ e(Zr, { size: 16, className: "text-authTextFaint" }),
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
                /* @__PURE__ */ e(Jr, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      X && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: me,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        E === "email" && /* @__PURE__ */ r("div", { className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: Q,
                onChange: (V) => H(V.target.value),
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
                  value: B,
                  onChange: (V) => J(V.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: se,
                disabled: L > 0 || u || !Q.trim(),
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
                value: f,
                onChange: (V) => re(V.target.value),
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
                value: Z,
                onChange: (V) => oe(V.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${Z.length > 0 && f !== Z ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          Z.length > 0 && f !== Z && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: pe,
              disabled: !Q.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q) || !B.trim() || B.length < 6 || !f.trim() || f.length < 6 || f !== Z,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        E === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(vt, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: me,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${T ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(vt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const Ra = (t, n) => {
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
function zs({
  mode: t = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: o,
  onRegister: l,
  onEnterWorkspace: s,
  onNavigate: m
}) {
  const h = de(null), w = de(null), b = de(null), [p, M] = g("identity"), [u, v] = g(""), [T, F] = g(""), [N, R] = g(""), [Y, X] = g(""), [O, E] = g(""), [le, Q] = g(""), H = t === "create-lab", [B, J] = g(""), [f, re] = g(""), [Z, oe] = g(!1), [L, ne] = g(0), [$, y] = g(""), [k, x] = g(null), se = B.length > 0 && B.trim().length < 6;
  ge(() => {
    if (L <= 0) return;
    const C = window.setTimeout(() => ne((W) => W - 1), 1e3);
    return () => clearTimeout(C);
  }, [L]), ge(
    () => () => {
      b.current !== null && window.clearTimeout(b.current);
    },
    []
  ), ge(() => {
    const C = h.current, W = w.current;
    if (!C || !W) return;
    const G = C.getContext("2d");
    if (!G) return;
    const I = window.getComputedStyle(document.documentElement), Ee = I.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ce = I.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Fe = I.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let _e = 0, Me = 0, ye = 0, i = window.devicePixelRatio || 1, P = [];
    const q = { x: -1e3, y: -1e3, radius: 120 }, ie = 150, _ = () => {
      const fe = W.getBoundingClientRect();
      i = window.devicePixelRatio || 1, Me = fe.width, ye = fe.height, C.width = Me * i, C.height = ye * i, C.style.width = `${Me}px`, C.style.height = `${ye}px`, G.setTransform(i, 0, 0, i, 0, 0);
      const ee = Me < 768 ? 40 : 90;
      P = Array.from({ length: ee }, () => Ra(Me, ye));
    }, Ae = (fe) => {
      G.beginPath(), G.arc(fe.x, fe.y, fe.size, 0, Math.PI * 2), G.closePath(), G.fill();
    }, he = () => {
      G.clearRect(0, 0, Me, ye);
      for (let fe = 0; fe < P.length; fe += 1) {
        const ee = P[fe];
        ee.x += ee.vx, ee.y += ee.vy, (ee.x < 0 || ee.x > Me) && (ee.vx = -ee.vx), (ee.y < 0 || ee.y > ye) && (ee.vy = -ee.vy);
        const et = q.x - ee.x, We = q.y - ee.y, Ie = Math.sqrt(et * et + We * We) || 1, Qe = et / Ie, Ve = We / Ie, Ze = (q.radius - Ie) / q.radius, at = Qe * Ze * ee.density, dt = Ve * Ze * ee.density;
        Ie < q.radius ? (ee.x -= at * 0.5, ee.y -= dt * 0.5, G.fillStyle = Ee, ee.size = Math.min(ee.size + 0.1, 2.5)) : (ee.x !== ee.baseX && (ee.x -= (ee.x - ee.baseX) / 50), ee.y !== ee.baseY && (ee.y -= (ee.y - ee.baseY) / 50), G.fillStyle = Ce, ee.size = Math.max(ee.size - 0.05, 1)), Ae(ee);
        for (let Ke = fe; Ke < P.length; Ke += 1) {
          const tt = P[Ke], rt = ee.x - tt.x, Ge = ee.y - tt.y, st = Math.sqrt(rt * rt + Ge * Ge);
          if (st < ie) {
            const Xe = (1 - st / ie) * 0.4;
            G.beginPath(), G.strokeStyle = Fe, G.globalAlpha = Xe, G.lineWidth = 1, G.moveTo(ee.x, ee.y), G.lineTo(tt.x, tt.y), G.stroke(), G.globalAlpha = 1, G.closePath();
          }
        }
      }
      _e = window.requestAnimationFrame(he);
    }, xe = (fe) => {
      const ee = W.getBoundingClientRect();
      q.x = fe.clientX - ee.left, q.y = fe.clientY - ee.top;
    }, Pe = () => {
      q.x = -1e3, q.y = -1e3;
    }, He = (fe) => {
      if (fe.touches.length < 1) return;
      const ee = W.getBoundingClientRect();
      q.x = fe.touches[0].clientX - ee.left, q.y = fe.touches[0].clientY - ee.top;
    };
    return _(), he(), window.addEventListener("resize", _), W.addEventListener("mousemove", xe), W.addEventListener("mouseleave", Pe), W.addEventListener("touchmove", He, { passive: !0 }), W.addEventListener("touchend", Pe), () => {
      window.cancelAnimationFrame(_e), window.removeEventListener("resize", _), W.removeEventListener("mousemove", xe), W.removeEventListener("mouseleave", Pe), W.removeEventListener("touchmove", He), W.removeEventListener("touchend", Pe);
    };
  }, []);
  const pe = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(N) || L > 0)) {
      oe(!0), x(null);
      try {
        const C = await n(N);
        if (!C.ok) {
          x(C);
          return;
        }
        ne(C.resendAfterSeconds ?? 60), y(C.message ?? "短信验证码已发送");
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        oe(!1);
      }
    }
  }, me = () => ({
    email: u.trim(),
    name: T.trim(),
    phoneNumber: N,
    phoneVerificationCode: Y.trim(),
    mode: t,
    ...H ? { labName: le.trim() } : { inviteCode: O.trim() }
  }), V = () => {
    const C = ["identity", "password", "success"], W = C.indexOf(p);
    W < C.length - 1 && M(C[W + 1]);
  }, K = be(() => {
    if (Z) return !1;
    switch (p) {
      case "identity":
        return H ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(N) && Y.length === 6 && le.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(N) && Y.length === 6 && O.trim().length > 0;
      case "password":
        return B.trim().length >= 6 && B === f;
      default:
        return !1;
    }
  }, [p, u, T, N, Y, O, le, H, B, f, Z]), te = async (C) => {
    if (C.preventDefault(), !!K) {
      oe(!0), x(null);
      try {
        const W = me(), G = p === "password" ? await l({ ...W, password: B }) : await o(W);
        if (!G.ok) {
          x(G);
          return;
        }
        V();
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        oe(!1);
      }
    }
  }, Le = {
    identity: H ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, Ne = {
    identity: "",
    password: "",
    success: ""
  }, Te = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", U = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: w, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: h, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Le[p] }),
        Ne[p] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: Ne[p] })
      ] }),
      p !== "success" && /* @__PURE__ */ r("form", { onSubmit: te, className: "space-y-5", children: [
        p === "identity" && /* @__PURE__ */ r(Ye, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (C) => {
                  v(C.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: T,
                onChange: (C) => {
                  F(C.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: N,
                  onChange: (C) => {
                    R(C.target.value.replace(/\D/g, "").slice(0, 11)), y(""), x(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Te
                }
              ),
              /* @__PURE__ */ e("span", { className: U, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: pe,
                disabled: L > 0 || Z || !/^1[3-9]\d{9}$/.test(N),
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
                value: Y,
                onChange: (C) => {
                  X(C.target.value.replace(/\D/g, "").slice(0, 6)), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "短信验证码" })
          ] }),
          $ && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: $ }),
          H ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: le,
                onChange: (C) => {
                  Q(C.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: O,
                onChange: (C) => {
                  E(C.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "邀请码" })
          ] })
        ] }),
        p === "password" && /* @__PURE__ */ r(Ye, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: B,
                onChange: (C) => {
                  J(C.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Te} ${(k == null ? void 0 : k.field) === "password" || se ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "设置密码" }),
            ((k == null ? void 0 : k.field) === "password" || se) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (k == null ? void 0 : k.field) === "password" ? k.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (C) => {
                  re(C.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Te} ${f.length > 0 && B !== f ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: U, children: "确认密码" }),
            f.length > 0 && B !== f && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        k && k.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: k.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !K,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: Z ? "处理中..." : p === "password" ? "完成注册" : "下一步" }),
              Z && /* @__PURE__ */ r(
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
      p === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(vt, { size: 40, className: "text-primary" }) })
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
              b.current = window.setTimeout(s, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      p !== "success" && /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
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
const Da = (t, n) => {
  const o = Math.random() * t, l = Math.random() * n;
  return { x: o, y: l, baseX: o, baseY: l, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Es({ onSendCode: t, onResetPassword: n, onBackToLogin: o }) {
  const l = de(null), s = de(null), m = de(null), [h, w] = g("phone"), [b, p] = g(""), [M, u] = g(""), [v, T] = g(""), [F, N] = g(""), [R, Y] = g(!1), [X, O] = g(0), [E, le] = g(""), [Q, H] = g(null);
  ge(() => {
    if (X <= 0) return;
    const L = window.setTimeout(() => O((ne) => ne - 1), 1e3);
    return () => window.clearTimeout(L);
  }, [X]), ge(() => {
    const L = l.current, ne = s.current;
    if (!L || !ne) return;
    const $ = L.getContext("2d");
    if (!$) return;
    const y = window.getComputedStyle(document.documentElement), k = y.getPropertyValue("--chatui-color-auth-particle-active").trim(), x = y.getPropertyValue("--chatui-color-auth-particle-idle").trim(), se = y.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let pe = 0, me = 0, V = 0, K = [];
    const te = { x: -1e3, y: -1e3, radius: 120 }, Le = 150, Ne = () => {
      const G = ne.getBoundingClientRect(), I = window.devicePixelRatio || 1;
      me = G.width, V = G.height, L.width = me * I, L.height = V * I, L.style.width = `${me}px`, L.style.height = `${V}px`, $.setTransform(I, 0, 0, I, 0, 0), K = Array.from({ length: me < 768 ? 40 : 90 }, () => Da(me, V));
    }, Te = () => {
      $.clearRect(0, 0, me, V);
      for (let G = 0; G < K.length; G += 1) {
        const I = K[G];
        I.x += I.vx, I.y += I.vy, (I.x < 0 || I.x > me) && (I.vx = -I.vx), (I.y < 0 || I.y > V) && (I.vy = -I.vy);
        const Ee = te.x - I.x, Ce = te.y - I.y, Fe = Math.sqrt(Ee * Ee + Ce * Ce) || 1, _e = (te.radius - Fe) / te.radius;
        Fe < te.radius ? (I.x -= Ee / Fe * _e * I.density * 0.5, I.y -= Ce / Fe * _e * I.density * 0.5, $.fillStyle = k, I.size = Math.min(I.size + 0.1, 2.5)) : (I.x -= (I.x - I.baseX) / 50, I.y -= (I.y - I.baseY) / 50, $.fillStyle = x, I.size = Math.max(I.size - 0.05, 1)), $.beginPath(), $.arc(I.x, I.y, I.size, 0, Math.PI * 2), $.fill();
        for (let Me = G; Me < K.length; Me += 1) {
          const ye = K[Me], i = I.x - ye.x, P = I.y - ye.y, q = Math.sqrt(i * i + P * P);
          q >= Le || ($.beginPath(), $.globalAlpha = (1 - q / Le) * 0.4, $.strokeStyle = se, $.lineWidth = 1, $.moveTo(I.x, I.y), $.lineTo(ye.x, ye.y), $.stroke(), $.globalAlpha = 1);
        }
      }
      pe = window.requestAnimationFrame(Te);
    }, U = (G) => {
      const I = ne.getBoundingClientRect();
      te.x = G.clientX - I.left, te.y = G.clientY - I.top;
    }, C = (G) => {
      if (!G.touches.length) return;
      const I = ne.getBoundingClientRect();
      te.x = G.touches[0].clientX - I.left, te.y = G.touches[0].clientY - I.top;
    }, W = () => {
      te.x = -1e3, te.y = -1e3;
    };
    return Ne(), Te(), window.addEventListener("resize", Ne), ne.addEventListener("mousemove", U), ne.addEventListener("mouseleave", W), ne.addEventListener("touchmove", C, { passive: !0 }), ne.addEventListener("touchend", W), () => {
      window.cancelAnimationFrame(pe), window.removeEventListener("resize", Ne), ne.removeEventListener("mousemove", U), ne.removeEventListener("mouseleave", W), ne.removeEventListener("touchmove", C), ne.removeEventListener("touchend", W);
    };
  }, []), ge(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const B = be(() => /^1[3-9]\d{9}$/.test(b) && M.length === 6 && v.length >= 6 && v === F, [F, v, b, M]), J = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", f = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: s, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(Ye, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (L) => {
          if (L.preventDefault(), !(!B || R)) {
            Y(!0), H(null);
            try {
              const ne = await n({ phoneNumber: b, phoneVerificationCode: M, newPassword: v });
              if (!ne.ok) {
                H(ne.message);
                return;
              }
              w("success");
            } catch {
              H("密码重置失败，请稍后重试。");
            } finally {
              Y(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: b, onChange: (L) => {
                p(L.target.value.replace(/\D/g, "").slice(0, 11)), le(""), H(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: J }),
              /* @__PURE__ */ e("span", { className: f, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(b) || X > 0 || R)) {
                Y(!0), H(null);
                try {
                  const L = await t(b);
                  if (!L.ok) {
                    H(L.message);
                    return;
                  }
                  O(L.resendAfterSeconds ?? 60), le(L.message ?? "短信验证码已发送");
                } catch {
                  H("验证码发送失败，请稍后重试。");
                } finally {
                  Y(!1);
                }
              }
            }, disabled: X > 0 || R || !/^1[3-9]\d{9}$/.test(b), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${X > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: X > 0 ? `${X}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: M, onChange: (L) => {
              u(L.target.value.replace(/\D/g, "").slice(0, 6)), H(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: J }),
            /* @__PURE__ */ e("span", { className: f, children: "短信验证码" })
          ] }),
          E && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: E }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: v, onChange: (L) => {
              T(L.target.value), H(null);
            }, required: !0, placeholder: " ", className: J }),
            /* @__PURE__ */ e("span", { className: f, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: F, onChange: (L) => {
              N(L.target.value), H(null);
            }, required: !0, placeholder: " ", className: `${J} ${F.length > 0 && v !== F ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: f, children: "确认新密码" }),
            F.length > 0 && v !== F && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          Q && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: Q }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !B || R, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: R ? "处理中..." : "重置密码" }),
            R && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(vt, { size: 40, className: "text-primary" }) })
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
const or = 10, ir = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function As({
  currentPath: t,
  projects: n,
  initialChats: o,
  logoUrl: l,
  user: s,
  children: m,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: w,
  canViewAiUsage: b = !0,
  canManageMembers: p = !0,
  chatActions: M = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: v,
  onChatsChange: T,
  onRenameChat: F,
  onTogglePinChat: N,
  onShareChat: R,
  onDeleteChat: Y
}) {
  const [X, O] = g(!0), [E, le] = g(240), [Q, H] = g(!1), B = de(0), J = de(240), [f, re] = g(() => {
    const c = { unassigned: !0 };
    return n.forEach((A) => {
      c[A.id] = !0;
    }), c;
  }), [Z, oe] = g(!1), [L, ne] = g(() => [...o]), [$, y] = g(null), [k, x] = g(null), [se, pe] = g("time"), [me, V] = g(!1), [K, te] = g(null), [Le, Ne] = g(""), [Te, U] = g(!1), [C, W] = g(""), [G, I] = g(!1), [Ee, Ce] = g(h), [Fe, _e] = g(!1), Me = w ?? Ee, ye = de(null), i = de(null), P = de(null), q = () => {
    oe(!1), v();
  }, ie = (c) => {
    re((A) => ({ ...A, [c]: !A[c] }));
  }, _ = (c) => {
    var S;
    ne((z) => z.filter((we) => we.id !== c)), y(null), K === c && (te(null), Ne("")), Y == null || Y(c), ((S = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : S[1]) === c && u("/chat/new", { replace: !0 });
  }, Ae = (c) => {
    const A = L.find((z) => z.id === c);
    if (!A) return;
    const S = !A.isPinned;
    ne((z) => z.map(
      (ke) => ke.id === c ? { ...ke, isPinned: S } : ke
    )), N == null || N(c, S), y(null);
  }, he = (c) => {
    te(c.id), Ne(c.title), y(null);
  }, xe = () => {
    te(null), Ne("");
  }, Pe = (c) => {
    const A = Le.trim();
    A && (ne((S) => S.map((z) => z.id === c ? { ...z, title: A } : z)), F == null || F(c, A)), xe();
  }, He = (c, A) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), Pe(A);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), xe());
  }, fe = (c) => {
    var A;
    if (K === c) {
      (A = ye.current) == null || A.focus();
      return;
    }
    u(`/chat/${c}`);
  }, ee = (c, A = !1) => K === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (z) => {
        var we;
        z.stopPropagation(), (we = ye.current) == null || we.focus();
      },
      children: [
        A && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: ye,
            value: Le,
            onChange: (z) => Ne(z.target.value),
            onKeyDown: (z) => He(z, c.id),
            onBlur: () => Pe(c.id),
            onClick: (z) => z.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    A && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), et = (c) => {
    B.current = c.clientX, J.current = E, H(!0);
  };
  ge(() => {
    if (!Q) return;
    const c = 200, A = 440, S = (we) => {
      const ke = we.clientX - B.current, $e = Math.min(A, Math.max(c, J.current + ke));
      le($e);
    }, z = () => {
      H(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", S), window.addEventListener("mouseup", z), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", z);
    };
  }, [Q, E]), ge(() => {
    X || le(240);
  }, [X]), ge(() => {
    T == null || T(L);
  }, [L, T]), ge(() => {
    ne([...o]);
  }, [o]), ge(() => {
    if (!K) return;
    const c = window.requestAnimationFrame(() => {
      var A;
      (A = ye.current) == null || A.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [K]), ge(() => () => {
    i.current !== null && window.clearTimeout(i.current), P.current !== null && window.clearTimeout(P.current);
  }, []);
  const We = () => {
    V(!0), i.current !== null && window.clearTimeout(i.current), i.current = window.setTimeout(() => {
      V(!1);
    }, 600);
  }, Ie = () => {
    I(!0), P.current !== null && window.clearTimeout(P.current), P.current = window.setTimeout(() => {
      I(!1);
    }, 600);
  };
  ge(() => {
    Me || _e(!1);
  }, [Me]);
  const Qe = () => {
    _e(!0), u("/ai-usage");
  }, Ve = be(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...b ? [{
      key: "ai-usage",
      label: "AI用量"
    }] : [],
    ...p ? [{
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
  ], [p, b]), Ze = (c) => {
    if (oe(!1), c.key === "skills") {
      u("/skills");
      return;
    }
    if (c.key === "ai-usage") {
      u("/ai-usage");
      return;
    }
    if (c.key === "members") {
      u("/members");
      return;
    }
    if (c.key === "system-settings") {
      u("/system-settings");
      return;
    }
    c.key === "logout" && q();
  }, at = (c) => c.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(wr, { size: 14 }), danger: !0 }] : [], dt = (c, A = M) => {
    const S = [];
    return A.rename && S.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(sn, { size: 14 }) }), A.share && S.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(ln, { size: 14 }) }), A.pin && S.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(jt, { size: 14 })
    }), S;
  }, Ke = (c, A, S = {}) => {
    const z = S.actions ?? M, we = S.onMenuOpenIdChange ?? y, ke = !!(z.rename || z.share || z.pin || z.delete), $e = S.showTaskBadge !== !1 && ir(c);
    return !ke && !$e ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${$e ? "ml-6" : "ml-2"}`, children: [
      $e && !A && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      ke && /* @__PURE__ */ e(
        Et,
        {
          open: A,
          onOpenChange: (Se) => we(Se ? c.id : null),
          placement: "bottom-end",
          width: S.width ?? Math.max(140, Math.min(176, E - 56)),
          portal: S.portal,
          trigger: /* @__PURE__ */ e(an, { size: 14 }),
          onTriggerClick: (Se) => {
            Se.stopPropagation();
          },
          items: dt(c, z),
          footerItems: at(z),
          onItemClick: (Se, je) => {
            if (je.stopPropagation(), Se.key === "rename") {
              he(c), we(null);
              return;
            }
            if (Se.key === "share") {
              R ? R(c.id) : u(`/chat/${c.id}?share=1`), we(null);
              return;
            }
            if (Se.key === "pin") {
              Ae(c.id), we(null);
              return;
            }
            if (Se.key === "delete") {
              _(c.id), we(null);
              return;
            }
            we(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${A ? "inline-flex" : "hidden group-hover:inline-flex"}`,
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
    const c = t.match(/^\/chat\/([^/]+)$/);
    return c ? L.find((A) => A.id === c[1]) ?? null : null;
  }, [L, t]), Ge = be(
    () => L.filter((c) => c.isPinned),
    [L]
  ), st = be(
    () => L.filter((c) => !c.isPinned),
    [L]
  ), Xe = be(
    () => se === "time" ? Ge.slice(0, or) : Ge,
    [Ge, se]
  ), a = be(() => {
    if (se !== "time") return [];
    const c = Math.max(or - Xe.length, 0);
    return st.slice(0, c);
  }, [se, st, Xe.length]), d = be(
    () => Xe.length + a.length,
    [Xe.length, a.length]
  ), j = se === "time" && L.length > d, D = be(() => new Map(n.map((c) => [c.id, c.name])), [n]), ce = C.trim().toLowerCase(), ae = be(() => ce ? L.filter((c) => {
    const A = c.projectId ? D.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${A} ${c.date}`.toLowerCase().includes(ce);
  }) : L, [L, ce, D]);
  ge(() => {
    if (!rt) return;
    const c = rt.projectId ?? "unassigned";
    re((A) => A[c] !== !1 ? A : { ...A, [c]: !0 });
  }, [rt]);
  const ue = () => {
    W(""), U(!0);
  }, ve = () => {
    U(!1), x(null), xe(), I(!1), P.current !== null && (window.clearTimeout(P.current), P.current = null);
  }, Re = (c) => {
    U(!1), x(null), u(`/chat/${c}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: X ? E : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${X ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: E, minWidth: E },
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
                      children: /* @__PURE__ */ e(en, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => u("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(tn, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: tt.map((c) => {
                  const A = c.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => u(c.path),
                      className: `nav-item ${A ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        c.icon,
                        /* @__PURE__ */ e("span", { children: c.label })
                      ]
                    },
                    c.path
                  );
                }) }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    onScroll: We,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${me ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Xe.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Xe.map((c) => {
                          const A = t === `/chat/${c.id}`, S = $ === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => fe(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${K === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : A ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ee(c, se !== "time"),
                                K !== c.id && Ke(c, S)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      se === "project" && n.map((c) => {
                        const A = L.filter((z) => z.projectId === c.id && !z.isPinned), S = f[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ie(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: S ? /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(bt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          S && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: A.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : A.map((z) => {
                            const we = t === `/chat/${z.id}`, ke = $ === z.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => fe(z.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${K === z.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : we ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ee(z),
                                  K !== z.id && Ke(z, ke)
                                ]
                              }
                            ) }, z.id);
                          }) })
                        ] }, c.id);
                      }),
                      se === "project" && (() => {
                        const c = L.filter((S) => !S.projectId && !S.isPinned);
                        if (c.length === 0) return null;
                        const A = f.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ie("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: A ? /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(bt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          A && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((S) => {
                            const z = t === `/chat/${S.id}`, we = $ === S.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => fe(S.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${K === S.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : z ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ee(S),
                                  K !== S.id && Ke(S, we)
                                ]
                              }
                            ) }, S.id);
                          }) })
                        ] });
                      })(),
                      se === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        a.map((c) => {
                          const A = t === `/chat/${c.id}`, S = $ === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => fe(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${K === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : A ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ee(c),
                                K !== c.id && Ke(c, S)
                              ]
                            }
                          ) }, c.id);
                        }),
                        j && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: ue,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(bt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                Me && !Fe && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(rn, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Qe,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  Et,
                  {
                    open: Z,
                    onOpenChange: oe,
                    placement: "top-start",
                    width: E - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: s.avatarUrl ? /* @__PURE__ */ e("img", { src: s.avatarUrl, alt: `${s.name}头像`, className: "h-full w-full object-cover" }) : s.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: s.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(nn, { size: 18 }) })
                    ] }),
                    items: Ve,
                    onItemClick: Ze,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          X && /* @__PURE__ */ e(
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
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${X ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof m == "function" ? m({ isSidebarOpen: X, setIsSidebarOpen: O, chats: L, setChats: ne, setAiUsageWarningActive: Ce }) : m }) }) }),
    /* @__PURE__ */ e(
      Ut,
      {
        visible: Te,
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
                value: C,
                onChange: (c) => W(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          ae.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ie,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${G ? "is-scrolling is-scrolling-thin" : ""}`,
              children: ae.map((c) => {
                const A = c.projectId ? D.get(c.projectId) ?? "未分组" : "未分组", S = ir(c), z = k === c.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => Re(c.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          ee(c, c.isPinned),
                          S && K !== c.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: A }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: c.date })
                        ] })
                      ] }),
                      K !== c.id && Ke(c, z, {
                        actions: { rename: !0, pin: !0, delete: !0 },
                        portal: !0,
                        showTaskBadge: !1,
                        width: 160,
                        onMenuOpenIdChange: x
                      })
                    ]
                  },
                  c.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Vt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Ps({
  projects: t,
  selectedProjectId: n,
  autoFocusInput: o = !1,
  disabled: l = !1,
  embedded: s = !1,
  isSidebarOpen: m = !0,
  skillOptions: h,
  fileOptions: w,
  quickPrompts: b,
  uploadAccept: p,
  validateUploadFile: M,
  onUploadValidationError: u,
  onSelectProject: v,
  onCreateProject: T,
  onOpenSidebar: F,
  onSelectQuickPrompt: N,
  onSend: R
}) {
  const [Y, X] = g(!1), [O, E] = g(!1), [le, Q] = g(""), H = de(null), B = de(null), J = be(
    () => t.find(($) => $.id === n) ?? null,
    [t, n]
  ), f = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !J
    },
    ...t.map(($) => ({
      key: $.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: $.name }),
      active: (J == null ? void 0 : J.id) === $.id
    }))
  ], [t, J]), re = be(() => T ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Nr, { size: 16 }) }] : [], [T]), Z = () => {
    E(!1), Q("");
  }, oe = ($) => {
    if ($.key === "create") {
      E(!0), Q("");
      return;
    }
    const y = $.key === "none" ? null : String($.key);
    v(y), X(!1);
  }, L = () => {
    const $ = le.trim();
    if (!$) return;
    const y = t.find(
      (k) => k.name.trim().toLowerCase() === $.toLowerCase()
    );
    y ? v(y.id) : T == null || T($), Z(), X(!1);
  };
  ge(() => {
    if (!O) return;
    const $ = (y) => {
      var x, se;
      const k = y.target;
      (x = B.current) != null && x.contains(k) || (se = H.current) != null && se.contains(k) || (Z(), X(!1));
    };
    return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
  }, [O]);
  const ne = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: H, className: "relative", children: O && /* @__PURE__ */ e(
        "div",
        {
          ref: B,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Cr,
                {
                  value: le,
                  onChange: ($) => Q($.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Ue, { type: "secondary", size: "small", onClick: Z, children: "取消" }),
              /* @__PURE__ */ e(
                Ue,
                {
                  type: "primary",
                  size: "small",
                  onClick: L,
                  disabled: !le.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Er,
        {
          onSend: R,
          disabled: l,
          autoFocus: o,
          skillOptions: h,
          fileOptions: w,
          uploadAccept: p,
          validateUploadFile: M,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            Et,
            {
              open: Y,
              onOpenChange: ($) => {
                !$ && O || (X($), $ ? E(!1) : Z());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: J ? J.name : "工作项目" }),
                /* @__PURE__ */ e(yt, { size: 14 })
              ] }),
              items: f,
              footerItems: re,
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
        onSelect: N ?? R,
        prompts: b,
        disabled: l
      }
    )
  ] });
  return s ? ne : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      va,
      {
        isSidebarOpen: m,
        onOpenSidebar: F ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: ne })
  ] });
}
const ja = "_shell_1a2mx_1", Fa = "_header_1a2mx_9", Ha = "_headerActions_1a2mx_17", qa = "_saveError_1a2mx_25", Wa = "_viewport_1a2mx_33", Oa = "_editorCanvas_1a2mx_41", Ua = "_titleInput_1a2mx_49", Va = "_milkdownHost_1a2mx_57", lt = {
  shell: ja,
  header: Fa,
  headerActions: Ha,
  saveError: qa,
  viewport: Wa,
  editorCanvas: Oa,
  titleInput: Ua,
  milkdownHost: Va
}, Ka = {
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
}, Lt = (t, n) => t.replace("<svg", `<svg class="${n}"`), pt = (t) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${t}</tspan>
    </text>
  </svg>
`, Wt = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="8" y="23" fill="currentColor" font-family="inherit" font-size="22" font-weight="500">T</text>
  </svg>
`, Ga = `
  <span class="chatui-selection-block-type-current">${Wt}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, cr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, Xa = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, Ya = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Qa = [
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
function Bs({
  title: t,
  initialMarkdown: n = "",
  createdByName: o,
  updatedByName: l,
  updatedAt: s,
  index: m,
  attachments: h = [],
  attachmentAccept: w,
  attachmentUnavailableHint: b,
  saving: p = !1,
  saveError: M,
  layout: u = "page",
  showHeaderActions: v = !0,
  onTitleChange: T,
  onMarkdownChange: F,
  onUploadAttachments: N,
  onDeleteAttachment: R,
  onSave: Y,
  onClose: X
}) {
  const O = de(null), E = de(null), le = de(n), Q = de(F), [H, B] = g(!1), [J, f] = g(null), [re, Z] = g(""), oe = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => {
    Q.current = F;
  }, [F]), ge(() => {
    const $ = O.current;
    if (!$) return;
    const y = /* @__PURE__ */ new Map(), k = new kt({
      root: $,
      defaultValue: le.current,
      features: {
        [kt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [kt.Feature.Toolbar]: {
          buildToolbar: (a) => {
            a.addGroup(
              "block-type",
              "块类型"
            ).addItem("block-type-dropdown", {
              icon: Ga,
              active: () => !1,
              onRun: () => {
              }
            });
          }
        },
        [kt.Feature.BlockEdit]: {
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
              a.build().flatMap((A) => A.items).map((A) => [A.key, A])
            ), j = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), D = (A) => {
              const S = A.get(Tt), z = te, ke = (z != null && z.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? z : z == null ? void 0 : z.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (z instanceof HTMLElement ? z : null);
              if (!ke) return S;
              try {
                const $e = S.posAtDOM(ke, 0), Se = S.state.doc.resolve(
                  Math.min(
                    Math.max($e, 0),
                    S.state.doc.content.size
                  )
                );
                S.dispatch(
                  S.state.tr.setSelection(
                    Yt.near(Se)
                  )
                );
              } catch {
              }
              return S;
            }, ce = (A) => {
              const S = D(A), z = Ct.type(A), we = (Se) => {
                const { $from: je } = S.state.selection;
                for (let Oe = je.depth; Oe > 0; Oe -= 1)
                  if (je.node(Oe).type.name === Se) return !0;
                return !1;
              };
              for (let Se = 0; Se < 10 && !(!we(z.name) || !mn(z)(
                S.state,
                S.dispatch
              )); Se += 1)
                ;
              for (let Se = 0; Se < 10 && !(!we("blockquote") || !un(S.state, S.dispatch)); Se += 1)
                ;
              const ke = hn.type(A), $e = S.state.selection.$from.parent;
              $e.isTextblock && $e.type !== ke && A.get(dn).call(fn.key, {
                nodeType: ke
              });
            };
            y.set(
              "paragraph",
              ce
            );
            const ae = (A) => {
              const S = D(A), { selection: z } = S.state, we = Ct.type(A), { $from: ke } = z;
              let $e = -1;
              for (let je = ke.depth; je > 0; je -= 1)
                if (ke.node(je).type.name === we.name) {
                  $e = je;
                  break;
                }
              if ($e > 0) {
                const je = $e - 1, Oe = je > 0 && ke.node(je).childCount === 1 ? je : $e;
                S.dispatch(
                  S.state.tr.delete(
                    ke.before(Oe),
                    ke.after(Oe)
                  )
                );
                return;
              }
              if (!z.empty) {
                S.dispatch(
                  S.state.tr.delete(z.from, z.to)
                );
                return;
              }
              const Se = Math.min(1, ke.depth);
              Se < 1 || S.dispatch(
                S.state.tr.delete(
                  ke.before(Se),
                  ke.after(Se)
                )
              );
            }, ue = (A, S, z) => {
              const we = d.get(S);
              if (!we) return;
              const { key: ke, ...$e } = we, Se = (z == null ? void 0 : z.icon) ?? $e.icon, je = [
                ht(S),
                z == null ? void 0 : z.iconClass
              ].filter(Boolean).join(" "), Oe = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(S), ut = j.has(S) ? (Je) => {
                var Kt;
                if (ce(Je), !Oe) {
                  if (S === "quote") {
                    const nt = Je.get(Tt), { $from: mt } = nt.state.selection, wt = mt.parent, Rt = mt.before(mt.depth), Gt = nt.state.schema.nodes.blockquote;
                    if (!Gt) return;
                    const _r = Gt.create(null, wt), Nt = nt.state.tr.replaceWith(
                      Rt,
                      Rt + wt.nodeSize,
                      _r
                    );
                    Nt.setSelection(
                      Yt.near(
                        Nt.doc.resolve(
                          Math.min(
                            Rt + 2,
                            Nt.doc.content.size
                          )
                        )
                      )
                    ), nt.dispatch(Nt);
                    return;
                  }
                  (Kt = $e.onRun) == null || Kt.call($e, Je);
                  return;
                }
                const xt = Je.get(Tt), Pr = S === "ordered-list" ? Qt.type(Je) : Zt.type(Je);
                if (!pn(Pr)(
                  xt.state,
                  xt.dispatch
                ) || S !== "task-list") return;
                const Br = Ct.type(Je), { $from: It } = xt.state.selection;
                for (let nt = It.depth; nt > 0; nt -= 1) {
                  const mt = It.node(nt);
                  if (mt.type !== Br) continue;
                  const wt = It.before(nt);
                  xt.dispatch(
                    xt.state.tr.setNodeMarkup(wt, void 0, {
                      ...mt.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : $e.onRun;
              j.has(S) && ut && y.set(
                S,
                ut
              ), A.addItem(S, {
                ...$e,
                label: (z == null ? void 0 : z.label) ?? $e.label,
                icon: Lt(Se, je),
                onRun: ut
              });
            };
            a.clear();
            const ve = a.addGroup("basic", "基础");
            ve.addItem("paragraph", {
              label: "正文",
              icon: Lt(
                Wt,
                ht("paragraph")
              ),
              onRun: ce
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
                icon: cr,
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
            ].forEach(({ key: A, icon: S, label: z }) => {
              ue(ve, A, { icon: S, label: z });
            });
            const Re = a.addGroup("common", "常用");
            ue(Re, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), ue(Re, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), a.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Lt(
                Ya,
                "chatui-document-menu-action-delete"
              ),
              onRun: ae
            });
          }
        }
      }
    });
    k.on((a) => {
      a.markdownUpdated((d, j, D) => {
        j !== D && Q.current(j);
      });
    });
    const x = $.ownerDocument;
    let se = "", pe = null, me = null, V = !0, K = !1, te = null, Le = null, Ne = null, Te = null, U = null, C = null, W = null, G = null;
    const I = (a) => {
      const d = a == null ? void 0 : a.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Ee = () => $.querySelector(".ProseMirror"), Ce = (a) => {
      const d = Ee();
      if (!a || !(d != null && d.contains(a))) return null;
      const j = a.closest(".milkdown-list-item-block");
      if (j && d.contains(j)) return j;
      let D = a;
      for (; D != null && D.parentElement && D.parentElement !== d; )
        D = D.parentElement;
      return !D || D.parentElement !== d || D.classList.contains("prosemirror-virtual-cursor") ? null : D;
    }, Fe = () => {
      const a = Ee();
      return a ? Array.from(a.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const j = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return j.length ? j : [d];
      }) : [];
    }, _e = (a) => {
      var D;
      const d = Fe(), j = d.map((ce) => ({ block: ce, rect: ce.getBoundingClientRect() })).filter(({ rect: ce }) => a >= ce.top && a <= ce.bottom).sort((ce, ae) => ce.rect.height - ae.rect.height);
      return j[0] ? j[0].block : ((D = d.map((ce) => {
        const ae = ce.getBoundingClientRect(), ue = Math.min(
          Math.abs(a - ae.top),
          Math.abs(a - ae.bottom)
        );
        return { block: ce, distance: ue };
      }).sort((ce, ae) => ce.distance - ae.distance)[0]) == null ? void 0 : D.block) ?? null;
    }, Me = (a, d = V) => {
      var c, A, S, z;
      const j = te, D = j ? I(j) : a, ce = j ? j.matches("p") : d, ae = x.querySelector(
        ".milkdown-slash-menu"
      );
      (A = (c = ae == null ? void 0 : ae.querySelector(`svg.${ht("paragraph")}`)) == null ? void 0 : c.closest("li")) == null || A.toggleAttribute(
        "hidden",
        D === null && ce
      ), ae == null || ae.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (we) => we.removeAttribute("data-chatui-selected")
      ), D && ((z = (S = ae == null ? void 0 : ae.querySelector(`svg.${ht(D)}`)) == null ? void 0 : S.closest("li")) == null || z.setAttribute("data-chatui-selected", "true"));
      const ue = x.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!ue) return;
      se || (se = ue.innerHTML);
      const ve = D ? ae == null ? void 0 : ae.querySelector(
        `svg.${ht(D)}`
      ) : null, Re = D ?? "default";
      ue.dataset.chatuiBlockType !== Re && (ue.innerHTML = (ve == null ? void 0 : ve.outerHTML) ?? se, ue.dataset.chatuiBlockType = Re);
    }, ye = (a) => {
      a !== me && (me = a, pe = I(a), V = (a == null ? void 0 : a.matches("p")) ?? !1), Me(pe, V);
    }, i = () => {
      var j;
      const a = (j = x.getSelection()) == null ? void 0 : j.anchorNode, d = a instanceof Element ? a : a == null ? void 0 : a.parentElement;
      ye(Ce(d ?? null));
    }, P = (a) => {
      const { $from: d } = a.get(Tt).state.selection, j = Ct.type(a), D = Qt.type(a), ce = Zt.type(a);
      for (let ue = d.depth; ue > 0; ue -= 1) {
        const ve = d.node(ue);
        if (ve.type === j && typeof ve.attrs.checked == "boolean")
          return "task-list";
      }
      for (let ue = d.depth; ue > 0; ue -= 1) {
        const ve = d.node(ue);
        if (ve.type === D) return "ordered-list";
        if (ve.type === ce) return "bullet-list";
        if (ve.type.name === "blockquote") return "quote";
      }
      const ae = d.parent;
      if (ae.type === xn.type(a)) {
        const ue = Number(ae.attrs.level);
        if (ue === 1 || ue === 2 || ue === 3)
          return `h${ue}`;
      }
      return ae.type.name === "code_block" ? "code" : "paragraph";
    }, q = (a) => {
      var d;
      return a === "paragraph" ? Lt(
        Wt,
        "chatui-selection-block-type-paragraph"
      ) : a === "h1" ? pt(1) : a === "h2" ? pt(2) : a === "h3" ? pt(3) : a === "code" ? cr : ((d = x.querySelector(
        `.milkdown-slash-menu svg.${ht(a)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${a === "quote" ? "“" : "•"}</text></svg>`;
    }, ie = () => {
      var a;
      return ((a = x.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : a.closest(".toolbar-item")) ?? null;
    }, _ = () => {
      const a = ie();
      if (!a) return;
      a.classList.add("chatui-selection-block-type-trigger"), a.setAttribute("aria-haspopup", "menu"), a.setAttribute("aria-label", "切换当前块类型");
      const d = a.closest(".milkdown-toolbar"), j = a.previousElementSibling instanceof HTMLElement && a.previousElementSibling.classList.contains("divider") ? a.previousElementSibling : null;
      d && d.firstElementChild !== a && (d.prepend(a), j && a.after(j));
      let D = "paragraph";
      k.editor.action((ae) => {
        D = P(ae);
      }), a.dataset.chatuiBlockType = D;
      const ce = a.querySelector(
        ".chatui-selection-block-type-current"
      );
      ce && (ce.innerHTML = q(D)), C == null || C.querySelectorAll("[data-block-type]").forEach((ae) => {
        ae.dataset.active = ae.dataset.blockType === D ? "true" : "false";
      });
    }, Ae = () => {
      var a;
      W !== null && (window.clearTimeout(W), W = null), C && (C.dataset.show = "false"), (a = ie()) == null || a.setAttribute("aria-expanded", "false");
    }, he = () => {
      W !== null && window.clearTimeout(W), W = window.setTimeout(
        Ae,
        120
      );
    }, xe = () => {
      if (C) return C;
      const a = x.createElement("div");
      return a.className = "chatui-selection-block-type-menu", a.dataset.show = "false", a.setAttribute("role", "menu"), Qa.forEach(({ key: d, label: j }) => {
        const D = x.createElement("button");
        D.type = "button", D.dataset.blockType = d, D.setAttribute("role", "menuitem"), D.innerHTML = `<span class="chatui-selection-block-type-option-icon">${q(d)}</span><span>${j}</span>`, D.addEventListener("pointerdown", (ce) => {
          ce.preventDefault(), ce.stopPropagation(), k.editor.action((ae) => {
            var ue;
            (ue = y.get(d)) == null || ue(ae);
          }), Ae(), window.requestAnimationFrame(_);
        }), a.append(D);
      }), a.addEventListener("pointerenter", () => {
        W !== null && (window.clearTimeout(W), W = null);
      }), a.addEventListener("pointerleave", he), x.body.append(a), C = a, a;
    }, Pe = () => {
      const a = ie();
      if (!a) return;
      W !== null && (window.clearTimeout(W), W = null);
      const d = xe();
      _(), d.dataset.show = "true", d.style.visibility = "hidden";
      const j = a.getBoundingClientRect(), D = d.getBoundingClientRect(), ce = 6, ae = 8, ue = j.top >= D.height + ce + ae, ve = Math.min(
        Math.max(j.left, ae),
        x.documentElement.clientWidth - D.width - ae
      ), Re = ue ? j.top - D.height - ce : j.bottom + ce;
      d.style.left = `${ve}px`, d.style.top = `${Re}px`, d.style.visibility = "visible", d.dataset.placement = ue ? "top" : "bottom", a.setAttribute("aria-expanded", "true");
    }, He = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && Pe();
    }, fe = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const j = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      j != null && j.closest(".chatui-selection-block-type-menu") || he();
    }, ee = () => {
      window.requestAnimationFrame(_);
    }, et = () => {
      const a = Le, d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (!a || !d || d.dataset.show !== "true") return;
      const j = d.getBoundingClientRect();
      if (!j.width || !j.height) return;
      const D = a.getBoundingClientRect(), ce = x.defaultView, ae = (ce == null ? void 0 : ce.innerWidth) ?? x.documentElement.clientWidth, ue = (ce == null ? void 0 : ce.innerHeight) ?? x.documentElement.clientHeight, ve = 12, Re = 8, c = Math.max(
        ve,
        ae - j.width - ve
      ), A = Math.max(
        ve,
        ue - j.height - ve
      ), S = (Oe) => Math.min(Math.max(Oe, ve), c), z = (Oe) => Math.min(Math.max(Oe, ve), A);
      let we = "left", ke = D.left - j.width - Re, $e = z(D.top);
      if (ke < ve) {
        const Oe = D.top - Re - ve, ut = ue - D.bottom - Re - ve, Je = ut >= j.height || ut >= Oe;
        we = Je ? "bottom" : "top", ke = S(D.left), $e = z(Je ? D.bottom + Re : D.top - j.height - Re);
      }
      const Se = `${ke}px`, je = `${$e}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== Se && d.style.setProperty("--chatui-block-menu-left", Se), d.style.getPropertyValue("--chatui-block-menu-top") !== je && d.style.setProperty("--chatui-block-menu-top", je), d.dataset.chatuiPlacement = we;
    }, We = () => {
      const a = x.querySelector(
        ".milkdown-slash-menu"
      );
      a && (a.style.removeProperty("--chatui-block-menu-left"), a.style.removeProperty("--chatui-block-menu-top"), delete a.dataset.chatuiPlacement);
    }, Ie = (a) => {
      a !== U && (U == null || U.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), U = a, U == null || U.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Qe = () => {
      Te !== null && window.cancelAnimationFrame(Te), Te = window.requestAnimationFrame(() => {
        Te = null, et();
      });
    }, Ve = (a) => {
      x.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        a && d.contains(a) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, Ze = () => {
      Le = null, K = !1, te = null, Ie(null), k.editor.action((a) => {
        a.get("menuAPICtx").hide();
      }), We(), Ve(null);
    }, at = (a) => {
      const d = a.target instanceof Element ? a.target : null, j = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (j) {
        const ae = j.getBoundingClientRect(), ue = ae.width > 0 && ae.height > 0, ve = a.clientX >= ae.left && a.clientX <= ae.right && a.clientY >= ae.top && a.clientY <= ae.bottom;
        if (ue) {
          if (ve) {
            Ie(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), K = !0;
            return;
          }
          if (Ie(null), d != null && d.closest(".milkdown-block-handle")) return;
          const Re = Ee(), c = d && (Re != null && Re.contains(d)) ? Ce(d) ?? _e(a.clientY) : null;
          if (c && te && c !== te) {
            Ze();
            return;
          }
          if (c === te) return;
          K && Ze();
          return;
        }
        K = !1, Ie(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        Me(pe);
        return;
      }
      const D = Ee();
      if (!d || !(D != null && D.contains(d))) return;
      const ce = Ce(d) ?? _e(a.clientY);
      ye(ce);
    }, dt = (a) => {
      var ve;
      const d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (Le === a && (d == null ? void 0 : d.dataset.show) === "true") {
        Ve(a), Qe();
        return;
      }
      const j = a.getBoundingClientRect(), D = _e(
        j.top + j.height / 2
      );
      D && ye(D);
      const ce = pe, ae = V;
      Le = a, te = D ?? me, Ve(a);
      const ue = ((ve = x.defaultView) == null ? void 0 : ve.PointerEvent) ?? PointerEvent;
      a.dispatchEvent(
        new ue("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), a.dispatchEvent(
        new ue("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        Me(ce, ae), Qe();
      }, 0);
    }, Ke = (a) => {
      const d = a.target instanceof Element ? a.target : null, j = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (j) {
        dt(j);
        return;
      }
      Ie(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, tt = (a) => {
      const d = a.target instanceof Element ? a.target : null, j = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!j) return;
      const D = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      if (D && j.contains(D)) return;
      const ce = D == null ? void 0 : D.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      Ie(ce ?? null);
    }, rt = (a) => {
      const d = a.target instanceof Element ? a.target : null, j = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      j && dt(j);
    }, Ge = (a) => {
      if (!a.isTrusted) return;
      const d = a.target instanceof Element ? a.target : null, j = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), D = x.querySelector(
        ".milkdown-slash-menu"
      );
      j && Le === j && (D == null ? void 0 : D.dataset.show) === "true" && (a.preventDefault(), a.stopImmediatePropagation());
    }, st = (a) => {
      a.key === "/" && window.setTimeout(i, 0);
    };
    x.addEventListener("pointermove", at), x.addEventListener("pointerover", Ke), x.addEventListener("pointerout", tt), x.addEventListener(
      "pointerover",
      He
    ), x.addEventListener(
      "pointerout",
      fe
    ), x.addEventListener(
      "selectionchange",
      ee
    ), x.addEventListener(
      "pointerdown",
      Ge,
      !0
    ), x.addEventListener(
      "pointerup",
      Ge,
      !0
    ), x.addEventListener("click", rt), $.addEventListener("keyup", st);
    const Xe = k.create();
    return Xe.then(() => {
      var j;
      (j = $.querySelector(".ProseMirror")) == null || j.focus();
      const a = x.querySelector(
        ".milkdown-slash-menu"
      );
      a && (Ne = new MutationObserver(() => {
        if (a.dataset.show === "true" && Le) {
          Ve(Le), Qe();
          return;
        }
        a.dataset.show !== "true" && (Le = null, te = null, Ie(null), We(), Ve(null));
      }), Ne.observe(a, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = x.querySelector(
        ".milkdown-toolbar"
      );
      d && (G = new MutationObserver(() => {
        d.dataset.show === "true" ? _() : Ae();
      }), G.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), i(), _();
    }), () => {
      x.removeEventListener("pointermove", at), x.removeEventListener(
        "pointerover",
        Ke
      ), x.removeEventListener("pointerout", tt), x.removeEventListener(
        "pointerover",
        He
      ), x.removeEventListener(
        "pointerout",
        fe
      ), x.removeEventListener(
        "selectionchange",
        ee
      ), x.removeEventListener(
        "pointerdown",
        Ge,
        !0
      ), x.removeEventListener(
        "pointerup",
        Ge,
        !0
      ), x.removeEventListener("click", rt), $.removeEventListener("keyup", st), Ae(), C == null || C.remove(), C = null, Xe.then(() => {
        Ne == null || Ne.disconnect(), G == null || G.disconnect(), Te !== null && window.cancelAnimationFrame(Te), k.destroy();
      });
    };
  }, []);
  const L = async ($) => {
    const y = Array.from($.target.files ?? []);
    if ($.target.value = "", !(!y.length || !N)) {
      B(!0), Z("");
      try {
        await N(y);
      } catch (k) {
        Z(
          k instanceof Error ? k.message : "附件上传失败"
        );
      } finally {
        B(!1);
      }
    }
  }, ne = async ($) => {
    if (R) {
      f($), Z("");
      try {
        await R($);
      } catch (y) {
        Z(
          y instanceof Error ? y.message : "附件删除失败"
        );
      } finally {
        f(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: lt.shell, "aria-label": "项目文档编辑器", children: [
    v && /* @__PURE__ */ e("header", { className: lt.header, children: /* @__PURE__ */ r("div", { className: lt.headerActions, children: [
      /* @__PURE__ */ e(
        Ue,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: X,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Ue,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: Y,
          children: p ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${lt.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          M && /* @__PURE__ */ e("div", { className: lt.saveError, children: M }),
          /* @__PURE__ */ r("div", { className: lt.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${oe}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: ($) => T($.target.value),
                  placeholder: "请输入标题",
                  className: lt.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                Lr,
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
                  className: `${lt.milkdownHost} ${zr.editor} ${oe} chatui-project-document-editor`,
                  style: Ka
                }
              ),
              N && /* @__PURE__ */ e(
                "input",
                {
                  ref: E,
                  type: "file",
                  multiple: !0,
                  accept: w,
                  className: "hidden",
                  onChange: ($) => {
                    L($);
                  }
                }
              ),
              /* @__PURE__ */ e(
                $r,
                {
                  attachments: h,
                  className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: H,
                  deletingAttachmentId: J,
                  unavailableHint: b,
                  error: re,
                  onRequestUpload: N ? () => {
                    var $;
                    return ($ = E.current) == null ? void 0 : $.click();
                  } : void 0,
                  onDeleteAttachment: R ? ($) => {
                    ne($);
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
const Za = { low: "低风险", medium: "中风险", high: "高风险" }, Ja = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function _s({
  isSidebarOpen: t,
  skills: n,
  loading: o = !1,
  error: l,
  pendingSkillIds: s = [],
  onOpenSidebar: m,
  onInstall: h,
  onUninstall: w,
  onRetry: b
}) {
  const [p, M] = g("installed"), [u, v] = g(""), [T, F] = g(!1), [N, R] = g([]), [Y, X] = g(null), O = be(() => new Set(s), [s]), E = be(() => {
    const f = u.trim().toLowerCase();
    return n.filter((re) => p === "installed" !== re.installed ? !1 : f ? [re.name, re.source, re.description, ...re.tags].join(" ").toLowerCase().includes(f) : !0);
  }, [p, u, n]), le = (f) => {
    M(f), F(!1), R([]);
  }, Q = () => {
    F((f) => !f), R([]);
  }, H = (f) => R((re) => re.includes(f) ? re.filter((Z) => Z !== f) : [...re, f]), B = (f) => f.installed ? w([f.id]) : h([f.id]), J = () => {
    N.length && (p === "installed" ? w(N) : h(N), R([]), F(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: m, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(vr, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${T ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ r("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(ct, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: u, onChange: (f) => v(f.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => le("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${p === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => le("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${p === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: T, onChange: (f) => {
                F(f.target.checked), R([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          b && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: b, children: "重新加载" })
        ] }),
        !l && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (f, re) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, re)) }),
        !l && !o && E.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": s.length > 0, children: E.map((f) => {
          const re = N.includes(f.id), Z = O.has(f.id), oe = re ? "border-skillSelectedBorder bg-skillSelectedSurface" : Y === f.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${oe}`, onMouseEnter: () => X(f.id), onMouseLeave: () => X((L) => L === f.id ? null : L), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: f.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: f.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Ja[f.riskLevel]}`, children: Za[f.riskLevel] }),
                T && /* @__PURE__ */ e("button", { type: "button", onClick: () => H(f.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": re ? `取消选择 ${f.name}` : `选择 ${f.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${re ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: f.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: f.tags.map((L) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: L }, `${f.id}-${L}`)) }),
              !T && /* @__PURE__ */ e("button", { type: "button", disabled: Z, onClick: () => B(f), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${Y === f.id || Z ? "inline-flex" : "hidden"} ${f.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: Z ? "处理中..." : f.installed ? "卸载" : "安装" })
            ] })
          ] }, f.id);
        }) }) : !l && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    T && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        N.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: Q, disabled: s.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: !N.length || s.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: s.length > 0 ? "处理中..." : p === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  As as A,
  Yn as B,
  Pa as C,
  vs as D,
  Ba as E,
  Es as F,
  sa as G,
  $r as H,
  Er as I,
  Bs as J,
  Lr as K,
  Ls as L,
  Mr as M,
  Ms as N,
  Ss as O,
  Ta as P,
  Ar as Q,
  zs as R,
  _s as S,
  qt as T,
  Aa as U,
  Ea as V,
  Et as a,
  Ue as b,
  bs as c,
  ta as d,
  Ut as e,
  Cr as f,
  Vt as g,
  ra as h,
  Jn as i,
  xs as j,
  Fn as k,
  Ma as l,
  _a as m,
  $s as n,
  $a as o,
  gs as p,
  ya as q,
  aa as r,
  Ps as s,
  Ts as t,
  Cs as u,
  ks as v,
  Ns as w,
  ys as x,
  va as y,
  ws as z
};
