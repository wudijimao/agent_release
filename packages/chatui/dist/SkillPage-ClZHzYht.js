import { jsxs as r, Fragment as Ve, jsx as e } from "react/jsx-runtime";
import je, { useMemo as ge, useState as v, useRef as he, useCallback as Pe, useEffect as ye, useLayoutEffect as Lt, forwardRef as Wt, useId as pr } from "react";
import Ee from "classnames";
import { Check as Je, Copy as ft, RefreshCcw as hr, ThumbsUp as fr, ThumbsDown as xr, ArrowUpRight as br, Info as gr, Ban as yr, TriangleAlert as Mt, CircleCheckBig as ut, ShieldCheck as Ut, CircleHelp as Vt, FileText as xt, LoaderCircle as Kt, Puzzle as Ot, AtSign as Xt, AlertCircle as vr, Paperclip as Gt, ArrowRight as Yt, ChevronDown as mt, ChevronRight as dt, CircleX as Qt, Sparkles as Zt, Loader2 as Ge, Clock3 as bt, Search as Ze, BookOpen as At, ListChecks as wr, Globe as Nr, Minus as kr, Menu as Jt, Upload as Tr, Trash2 as er, CheckCircle2 as nt, SearchX as Cr, FlaskConical as Sr, X as rt, Plus as tr, Square as Mr, Send as $r, UserPlus as zr, Building2 as Lr, Folder as gt, PanelLeftClose as Ar, SquarePen as Pr, AlertTriangle as Er, Settings as _r, Pin as yt, MoreHorizontal as Br, Pencil as Ir, Share2 as Rr } from "lucide-react";
import rr from "react-markdown";
import nr from "remark-gfm";
import jr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as Dr } from "react-dom";
import { Crepe as vt } from "@milkdown/crepe";
import { editorViewCtx as wt, commandsCtx as Fr } from "@milkdown/kit/core";
import { lift as Hr } from "@milkdown/kit/prose/commands";
import { wrapInList as qr, liftListItem as Wr } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Pt } from "@milkdown/kit/prose/state";
import { orderedListSchema as Ur, bulletListSchema as Vr, listItemSchema as Nt, paragraphSchema as Kr, setBlockTypeCommand as Or } from "@milkdown/kit/preset/commonmark";
const Xr = "_button_3tg6r_1", Gr = "_primary_3tg6r_5", Yr = "_disabled_3tg6r_9", Qr = "_secondary_3tg6r_17", Zr = "_ghost_3tg6r_25", Jr = "_danger_3tg6r_33", en = "_small_3tg6r_41", tn = "_medium_3tg6r_45", rn = "_large_3tg6r_49", nn = "_roundedSquare_3tg6r_53", an = "_roundedSmall_3tg6r_57", sn = "_roundedMedium_3tg6r_61", ln = "_roundedLarge_3tg6r_62", on = "_roundedFull_3tg6r_66", cn = "_loadingSpinner_3tg6r_67", dn = "_loading_3tg6r_67", un = "_fullWidth_3tg6r_90", mn = "_icon_3tg6r_94", Ie = {
  button: Xr,
  primary: Gr,
  disabled: Yr,
  secondary: Qr,
  ghost: Zr,
  danger: Jr,
  small: en,
  medium: tn,
  large: rn,
  roundedSquare: nn,
  roundedSmall: an,
  roundedMedium: sn,
  roundedLarge: ln,
  roundedFull: on,
  loadingSpinner: cn,
  loading: dn,
  fullWidth: un,
  icon: mn
}, pn = {
  primary: Ie.primary,
  secondary: Ie.secondary,
  ghost: Ie.ghost,
  danger: Ie.danger
}, hn = {
  small: Ie.small,
  medium: Ie.medium,
  large: Ie.large
}, fn = {
  square: Ie.roundedSquare,
  small: Ie.roundedSmall,
  medium: Ie.roundedMedium,
  large: Ie.roundedLarge,
  full: Ie.roundedFull
}, Fe = je.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: s,
    loading: l,
    disabled: a = !1,
    children: d,
    icon: h,
    iconPosition: N = "left",
    className: u,
    fullWidth: c = !1,
    rounded: b = "medium",
    onClick: p,
    ...f
  }, E) => {
    const _ = s ?? l ?? !1, $ = a || _, I = ge(() => _ ? /* @__PURE__ */ r(Ve, { children: [
      /* @__PURE__ */ e("span", { className: Ie.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: d })
    ] }) : h ? /* @__PURE__ */ r(Ve, { children: [
      N === "left" && /* @__PURE__ */ e("span", { className: Ie.icon, children: h }),
      d && /* @__PURE__ */ e("span", { children: d }),
      N === "right" && /* @__PURE__ */ e("span", { className: Ie.icon, children: h })
    ] }) : d, [d, _, h, N]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: E,
        className: Ee(
          Ie.button,
          pn[t],
          hn[n],
          fn[b],
          {
            [Ie.fullWidth]: c,
            [Ie.loading]: _,
            [Ie.disabled]: $
          },
          u
        ),
        disabled: $,
        onClick: p,
        ...f,
        children: I
      }
    );
  }
);
Fe.displayName = "BaseButton";
const xn = { small: "h-8", medium: "h-9", large: "h-14" }, ar = je.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: s,
    defaultValue: l,
    disabled: a = !1,
    readOnly: d = !1,
    error: h = !1,
    size: N = "medium",
    prefix: u,
    suffix: c,
    prefixIcon: b,
    suffixIcon: p,
    onChange: f,
    onFocus: E,
    onBlur: _,
    onClear: $,
    className: I,
    containerClassName: D,
    clearable: K = !1,
    label: B,
    helperText: z,
    ...X
  }, U) => {
    const [P, M] = v(!1), G = he(null), x = Pe((ne) => {
      G.current = ne, typeof U == "function" ? U(ne) : U && (U.current = ne);
    }, [U]), F = Pe(() => {
      var S, g;
      const ne = G.current;
      ne && ((g = (S = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : S.set) == null || g.call(ne, ""), ne.dispatchEvent(new Event("input", { bubbles: !0 })), ne.focus(), $ == null || $());
    }, [$]), re = ge(
      () => {
        var ne;
        return K && P && String(s ?? ((ne = G.current) == null ? void 0 : ne.value) ?? "").length > 0;
      },
      [K, P, s]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      B && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: B }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Ee(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            xn[N],
            !a && !h && "hover:border-controlBorder",
            P && !a && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && P && "ring-2 ring-dangerFocus",
            a && "cursor-not-allowed bg-surfaceMuted",
            D
          ),
          children: [
            (u || b) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: u || b }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: x,
                type: t,
                placeholder: n,
                value: s,
                defaultValue: l,
                disabled: a,
                readOnly: d,
                className: Ee("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", I),
                onFocus: (ne) => {
                  M(!0), E == null || E(ne);
                },
                onBlur: (ne) => {
                  M(!1), _ == null || _(ne);
                },
                onChange: f,
                ...X
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              re && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (ne) => ne.preventDefault(), onClick: F, "aria-label": "清空", children: "✕" }),
              c || p
            ] })
          ]
        }
      ),
      z && /* @__PURE__ */ e("div", { className: Ee("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: z })
    ] });
  }
);
ar.displayName = "BaseInput";
const bn = { small: "h-8", medium: "h-9", large: "h-14" }, gn = je.forwardRef(
  ({ options: t = [], value: n, defaultValue: s, placeholder: l, disabled: a = !1, error: d = !1, size: h = "medium", label: N, helperText: u, onChange: c, className: b, ...p }, f) => {
    const E = Pe((_) => {
      const $ = _.target.value, I = t.find((D) => String(D.value) === $);
      c == null || c($ === "" ? "" : (I == null ? void 0 : I.value) ?? $);
    }, [c, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      N && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: N }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: f,
            className: Ee(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              d && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              bn[h],
              b
            ),
            value: n ?? s ?? "",
            disabled: a,
            onChange: E,
            ...p,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      u && /* @__PURE__ */ e("div", { className: Ee("text-xs leading-6", d ? "text-danger" : "text-mutedText"), children: u })
    ] });
  }
);
gn.displayName = "BaseSelect";
const yn = "_container_ykn59_1", vn = "_item_ykn59_10", wn = "_itemActive_ykn59_27", Nn = "_itemDisabled_ykn59_27", kn = "_sizeSmall_ykn59_43", Tn = "_sizeMiddle_ykn59_49", Cn = "_sizeLarge_ykn59_55", Qe = {
  container: yn,
  item: vn,
  itemActive: wn,
  itemDisabled: Nn,
  sizeSmall: kn,
  sizeMiddle: Tn,
  sizeLarge: Cn
}, Sn = {
  small: Qe.sizeSmall,
  middle: Qe.sizeMiddle,
  large: Qe.sizeLarge
};
function Ka({
  options: t,
  value: n,
  defaultValue: s,
  onChange: l,
  size: a = "middle",
  disabled: d = !1,
  className: h
}) {
  var p;
  const [N, u] = v(
    s ?? ((p = t[0]) == null ? void 0 : p.value) ?? ""
  ), c = n ?? N, b = (f) => {
    d || (n === void 0 && u(f), l == null || l(f));
  };
  return /* @__PURE__ */ e("div", { className: Ee(Qe.container, Sn[a], h), children: t.map((f) => {
    const E = c === f.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Ee(Qe.item, E && Qe.itemActive, d && Qe.itemDisabled),
        onClick: () => b(f.value),
        disabled: d,
        "aria-pressed": E,
        children: f.label
      },
      f.value
    );
  }) });
}
const Mn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, $n = je.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: s = !1, onChange: l, onError: a, maxSize: d, children: h, className: N, dragable: u = !0, placeholderTitle: c, placeholderDescription: b, placeholderIcon: p, maxCount: f }, E) => {
    const _ = he(null), [$, I] = v(!1), D = Pe((B) => {
      if (f && B.length > f) {
        a == null || a(new Error(`单次最多上传 ${f} 个文件`));
        return;
      }
      if (d) {
        for (const z of Array.from(B))
          if (z.size > d) {
            a == null || a(new Error(`文件“${z.name}”超过大小限制（${Mn(d)}）`));
            return;
          }
      }
      l == null || l(B);
    }, [f, d, l, a]), K = () => {
      var B;
      s || (B = _.current) == null || B.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: E,
        className: Ee(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          $ && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          s && "cursor-not-allowed opacity-60",
          N
        ),
        onClick: K,
        onKeyDown: (B) => {
          !s && (B.key === "Enter" || B.key === " ") && (B.preventDefault(), K());
        },
        onDragOver: (B) => {
          u && !s && (B.preventDefault(), I(!0));
        },
        onDragLeave: () => I(!1),
        onDrop: (B) => {
          u && !s && (B.preventDefault(), I(!1), D(B.dataTransfer.files));
        },
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        children: [
          /* @__PURE__ */ e("input", { ref: _, type: "file", accept: t, multiple: n, disabled: s, onChange: (B) => B.target.files && D(B.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: p ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: c ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: b ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
$n.displayName = "BaseUpload";
const zn = "_maskAnimation_1h49h_1", Ln = "_modalAnimation_1h49h_5", Et = {
  maskAnimation: zn,
  modalAnimation: Ln
}, $t = ({
  visible: t,
  open: n = t,
  show: s = n,
  title: l,
  width: a = 520,
  centered: d = !0,
  destroyOnClose: h = !1,
  mask: N = !0,
  maskClosable: u = !0,
  okText: c = "确认",
  cancelText: b = "取消",
  confirmLoading: p = !1,
  okButtonProps: f,
  cancelButtonProps: E,
  onConfirm: _,
  onCancel: $,
  onClose: I,
  onOk: D,
  onDismiss: K,
  children: B,
  footer: z,
  className: X,
  bodyClassName: U
}) => {
  const P = s ?? !1, M = Pe(async () => {
    try {
      _ ? await _() : D && await D();
    } catch (F) {
      console.error("Modal confirm error:", F);
    }
  }, [_, D]), G = Pe(() => {
    $ ? $() : I ? I() : K == null || K();
  }, [$, I, K]), x = ge(() => {
    if (z === null) return null;
    if (z) return z;
    const { type: F, ...re } = E ?? {}, { type: ne, ...S } = f ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Fe, { type: "secondary", size: "medium", onClick: G, ...re, children: b }),
      /* @__PURE__ */ e(Fe, { type: "primary", size: "medium", isLoading: p, onClick: M, ...S, children: p ? "加载中..." : c })
    ] });
  }, [E, b, p, z, G, M, f, c]);
  return !P && h || !P ? null : /* @__PURE__ */ r(Ve, { children: [
    N && /* @__PURE__ */ e("div", { className: Ee("fixed inset-0 z-[1000] bg-overlayMask", Et.maskAnimation), onClick: () => u && G(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Ee(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          d && "left-1/2 top-1/2",
          Et.modalAnimation,
          X
        ),
        style: { width: a },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: G, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Ee("min-h-20 p-5 text-primaryText", U), children: B }),
          x
        ]
      }
    )
  ] });
};
$t.displayName = "BaseModal";
const An = ({ title: t, extra: n, children: s, hoverable: l = !1, loading: a = !1, bordered: d = !0, className: h, bodyClassName: N, onClick: u }) => /* @__PURE__ */ r(
  "div",
  {
    className: Ee(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      d && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      a && "pointer-events-none opacity-60",
      h
    ),
    onClick: u,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Ee("p-4 text-primaryText", (t || n) && "pt-1", N), children: s })
    ]
  }
);
An.displayName = "BaseCard";
const Pn = ({ columns: t, dataSource: n = [], rowKey: s = "id", loading: l = !1, bordered: a = !0, striped: d = !0, className: h, onRow: N }, u) => /* @__PURE__ */ r("div", { ref: u, className: Ee("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: a ? "border-b border-lineSubtle" : void 0, children: t.map((c) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: c.width, textAlign: c.align }, children: c.title }, c.key || String(c.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((c, b) => {
      const p = String(typeof s == "string" ? c[s] ?? b : b);
      return /* @__PURE__ */ e("tr", { className: Ee(a && "border-b border-lineSoft last:border-b-0", d && "odd:bg-surface"), ...(N == null ? void 0 : N(c, b)) || {}, children: t.map((f) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: f.align }, children: f.render ? f.render(c[f.dataIndex], c, b) : String(c[f.dataIndex] ?? "") }, f.key || String(f.dataIndex))) }, p);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Oa = je.forwardRef(Pn), En = ({ current: t = 1, pageSize: n = 10, total: s = 0, onChange: l, showSizeChanger: a = !1, pageSizeOptions: d = [10, 20, 50, 100], onShowSizeChange: h, disabled: N = !1, className: u }) => {
  const c = ge(() => Math.ceil(s / n) || 1, [n, s]), b = Pe((f) => h == null ? void 0 : h(1, Number(f.target.value)), [h]), p = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Ee("flex flex-wrap items-center justify-center gap-4 p-4", u), children: [
    /* @__PURE__ */ e("button", { type: "button", className: p, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: N || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      c,
      " 页，共 ",
      s,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: p, onClick: () => t < c && (l == null ? void 0 : l(t + 1)), disabled: N || t >= c, children: "下一页 →" }),
    a && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: b, disabled: N, children: d.map((f) => /* @__PURE__ */ r("option", { value: f, children: [
      f,
      " 条/页"
    ] }, f)) })
  ] });
};
En.displayName = "BasePagination";
const zt = ({ description: t = "暂无数据", image: n, children: s }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  s
] });
zt.displayName = "BaseEmpty";
const pt = ({ trigger: t, items: n, footerItems: s = [], open: l = !1, onOpenChange: a, onTriggerClick: d, onItemClick: h, placement: N = "bottom-start", width: u, portal: c = !1, className: b, triggerClassName: p, menuClassName: f, listClassName: E, footerClassName: _ }) => {
  const $ = he(null), I = he(null), [D, K] = v({}), B = N.endsWith("end"), z = N.startsWith("top");
  ye(() => {
    if (!l || !c || !$.current) return;
    const M = $.current.getBoundingClientRect();
    K({ position: "fixed", left: B ? M.right : M.left, top: z ? M.top : M.bottom, transform: B ? "translateX(-100%)" : void 0 });
  }, [z, B, l, c, N]), ye(() => {
    !l || !c || !z || !I.current || K((M) => ({ ...M, top: Number(M.top) - I.current.offsetHeight - 8 }));
  }, [z, l, c]), ye(() => {
    if (!l || !a) return;
    const M = (G) => {
      var F, re;
      const x = G.target;
      (F = $.current) != null && F.contains(x) || (re = I.current) != null && re.contains(x) || a(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [a, l]);
  const X = ge(() => u ? { width: typeof u == "number" ? `${u}px` : u } : void 0, [u]), U = Pe((M) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Ee(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !M.danger && !M.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !M.danger && M.active && "bg-primary-soft font-medium text-primary",
        M.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (G) => h == null ? void 0 : h(M, G),
      disabled: M.disabled,
      children: [
        M.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: M.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: M.label })
      ]
    },
    M.key
  ), [h]), P = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: I,
      className: Ee(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !c && "absolute",
        !c && !z && "top-[calc(100%+8px)]",
        !c && z && "bottom-[calc(100%+8px)]",
        !c && B ? "right-0" : c ? void 0 : "left-0",
        f
      ),
      style: c ? { ...D, ...X } : X,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Ee("flex min-h-0 flex-col gap-1", E), children: n.map(U) }),
        s.length > 0 && /* @__PURE__ */ e("div", { className: Ee("flex flex-col gap-1 border-t border-lineSoft pt-2", _), children: s.map(U) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: $, className: Ee("relative inline-block", b), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Ee("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", p), onClick: (M) => {
      d == null || d(M), a == null || a(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    c ? P && Dr(P, document.body) : P
  ] });
};
pt.displayName = "BaseActionMenu";
const _n = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: s,
  feedback: l,
  onFeedback: a,
  disabled: d = !1
}) => {
  const [h, N] = v(!1), u = !!(s || a), c = Pe(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), N(!0), window.setTimeout(() => N(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${u ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: c,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制" : n,
            children: h ? /* @__PURE__ */ e(Je, { size: 15 }) : /* @__PURE__ */ e(ft, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: s,
            disabled: d,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(hr, { size: 15 })
          }
        ),
        a && /* @__PURE__ */ r(Ve, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => a("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(fr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => a("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(xr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, _t = je.memo(_n), Bn = {
  clarification: {
    icon: /* @__PURE__ */ e(Vt, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(ut, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(Ut, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(ut, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(Mt, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  blocked: {
    icon: /* @__PURE__ */ e(yr, { size: 16 }),
    className: "border-danger bg-danger-soft",
    iconClassName: "text-danger"
  },
  info: {
    icon: /* @__PURE__ */ e(gr, { size: 16 }),
    className: "border-lineSubtle bg-surfaceMuted",
    iconClassName: "text-secondaryText"
  }
};
function In({ card: t, actionPending: n = !1, onAction: s }) {
  const l = Bn[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${l.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${l.iconClassName}`, "aria-hidden": "true", children: l.icon }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ e("h3", { className: "m-0 text-sm font-semibold leading-5 text-primaryText", children: t.title }),
        t.statusLabel && /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText", children: t.statusLabel })
      ] }),
      t.summary && /* @__PURE__ */ e("p", { className: "m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText", children: t.summary }),
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((a, d) => /* @__PURE__ */ e("li", { children: a }, `${d}-${a}`)) }),
      t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.links.map((a) => /* @__PURE__ */ r(
        "a",
        {
          href: a.href,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary",
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: a.label }),
            /* @__PURE__ */ e(br, { size: 12, className: "shrink-0" })
          ]
        },
        `${a.href}-${a.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((a) => /* @__PURE__ */ e(
        Fe,
        {
          type: a.tone ?? "secondary",
          size: "small",
          disabled: n || !s,
          onClick: () => s == null ? void 0 : s(t.actionKey, a.id),
          children: a.label
        },
        a.id
      )) })
    ] })
  ] }) });
}
function Rn({ draft: t, onPreview: n, onConfirm: s, onCancel: l }) {
  const a = t.status === "saving", d = t.status === "saved", h = t.actionable ?? !0, N = t.previewable ?? !0, u = a || d || !h || !s;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !n || !N,
        onClick: () => n == null ? void 0 : n(t.actionKey),
        className: "flex w-full min-w-0 items-start gap-3 rounded-lg text-left outline-none transition-colors enabled:hover:bg-bgLight enabled:focus-visible:ring-2 enabled:focus-visible:ring-primary-soft-strong disabled:cursor-default",
        "aria-label": `预览草稿：${t.title}`,
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(xt, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Mira 文档草稿" }),
            /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: t.title }),
            t.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: t.summary })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: d ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !d && h && l && /* @__PURE__ */ e(
          Fe,
          {
            type: "secondary",
            size: "small",
            disabled: a,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (h || d) && /* @__PURE__ */ e(
          Fe,
          {
            type: d ? "secondary" : "primary",
            size: "small",
            disabled: u,
            onClick: () => s == null ? void 0 : s(t.actionKey),
            children: a ? /* @__PURE__ */ r(Ve, { children: [
              /* @__PURE__ */ e(Kt, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : d ? /* @__PURE__ */ r(Ve, { children: [
              /* @__PURE__ */ e(Je, { size: 14, "aria-hidden": "true" }),
              "已保存"
            ] }) : "确认保存"
          }
        )
      ] })
    ] }),
    t.status === "error" && t.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: t.errorMessage })
  ] });
}
const Bt = "[[PAPER_LIST_JSON]]";
let It = !1, it = null, ot = null, ct = null;
const jn = async () => (ot || (ot = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw ot = null, t;
})), ot), Dn = async () => (ct || (ct = import("remark-emoji").then((t) => t.default).catch(() => (ct = null, null))), ct), Fn = async () => {
  it || (it = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw it = null, n;
  }));
  const t = await it;
  if (!It) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), It = !0;
  }
  return t;
}, ht = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => ht(n)).join("") : je.isValidElement(t) ? ht(t.props.children) : "", Rt = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, Hn = ({ href: t, label: n }) => {
  const s = ge(() => {
    const l = n.trim();
    if (l) return l;
    try {
      const d = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (d) return decodeURIComponent(d);
    } catch {
    }
    return t;
  }, [t, n]);
  return /* @__PURE__ */ r("div", { className: "group not-prose my-2 inline-flex w-[340px] max-w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2 shadow-sm", children: [
    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-warning text-xs font-semibold tracking-wide text-white", children: "PDF" }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: s }),
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
        children: /* @__PURE__ */ e(Yt, { size: 14 })
      }
    )
  ] });
}, qn = ({ language: t, rawCode: n, className: s, children: l }) => {
  const [a, d] = v(!1), h = Pe(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), d(!0), window.setTimeout(() => d(!1), 1200);
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
          className: `code-block-copy-btn ${a ? "copied" : ""}`,
          title: a ? "已复制代码" : "复制代码",
          children: [
            a ? /* @__PURE__ */ e(Je, { size: 12 }) : /* @__PURE__ */ e(ft, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${s ?? ""}`.trim(), children: l }) })
  ] });
}, Wn = ({ rawCode: t }) => {
  const [n, s] = v(!1), l = Pe(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), s(!0), window.setTimeout(() => s(!1), 1200);
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
            n ? /* @__PURE__ */ e(Je, { size: 12 }) : /* @__PURE__ */ e(ft, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, sr = (t) => {
  const n = typeof t.title == "string" ? t.title.trim() : "", s = typeof t.pmid == "string" ? t.pmid.trim() : "", l = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !s || !l ? null : { title: n, pmid: s, doi: l };
}, jt = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const s = [];
  return n.forEach((l, a) => {
    var p;
    const d = l.match(/PMID\s*[:：]\s*(\d{4,})/i), h = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!d || !h) return;
    const N = l.slice(0, d.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), u = ((p = n[a - 1]) == null ? void 0 : p.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", b = sr({
      title: N || u,
      pmid: d[1],
      doi: h[1]
    });
    b && s.push(b);
  }), s.length === 0 ? null : { items: s };
}, Un = (t) => {
  if (!t.startsWith(Bt))
    return jt(t);
  const n = t.slice(Bt.length).trim();
  if (!n) return null;
  try {
    const s = JSON.parse(n);
    if (!Array.isArray(s.items)) return null;
    const l = s.items.map((a) => sr(a)).filter((a) => a !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return jt(n);
  }
}, lr = ({
  msg: t,
  actionKey: n,
  feedback: s,
  onFeedback: l,
  onRefresh: a,
  onConfirmMiraDraft: d,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: N,
  pendingDisplayActionKey: u,
  onDisplayCardAction: c,
  isTyping: b = !1,
  isStreaming: p
}) => {
  var g, q;
  const f = t.role === "user", E = p ?? b, _ = he(null), [$, I] = v(null), [D, K] = v(null), [B, z] = v(null), [X, U] = v(!1), P = ge(() => /```\s*mermaid/i.test(t.content), [t.content]), M = ge(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), G = ge(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), x = ge(
    () => f ? null : Un(t.content),
    [f, t.content]
  ), F = !!(x && x.items.length > 0);
  ye(() => {
    if (!M || $ || D) return;
    let m = !1;
    return jn().then((T) => {
      m || (I(() => T.remark), K(() => T.rehype));
    }).catch(() => {
    }), () => {
      m = !0;
    };
  }, [M, $, D]), ye(() => {
    if (!G || X) return;
    let m = !1;
    return Dn().then((T) => {
      m || (T && z(() => T), U(!0));
    }), () => {
      m = !0;
    };
  }, [G, X]);
  const re = ge(() => {
    const m = [nr];
    return B && m.push(B), $ && m.push($), m;
  }, [B, $]), ne = ge(() => {
    const m = [jr];
    return D && m.push(D), m;
  }, [D]), S = ge(
    () => ({
      table: ({ node: m, ...T }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...T }) }),
      tr: ({ node: m, ...T }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...T }),
      th: ({ node: m, ...T }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...T
        }
      ),
      td: ({ node: m, ...T }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...T }),
      blockquote: ({ node: m, ...T }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...T
        }
      ),
      input: ({ node: m, type: T, checked: V, ...ue }) => T === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!V,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...ue
        }
      ) : /* @__PURE__ */ e("input", { type: T, ...ue }),
      section: ({ node: m, ...T }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...T }),
      p: ({ node: m, children: T, ...V }) => {
        const ue = je.Children.toArray(T);
        if (ue.length === 1 && je.isValidElement(ue[0])) {
          const ve = ue[0];
          if (typeof ve.props.href == "string" && Rt(ve.props.href)) {
            const Y = ht(ve.props.children).trim();
            return /* @__PURE__ */ e(Hn, { href: ve.props.href, label: Y });
          }
        }
        return /* @__PURE__ */ e("p", { ...V, children: T });
      },
      a: ({ node: m, href: T, ...V }) => {
        const ue = T ?? "", ve = /^https?:\/\/(dx\.)?doi\.org\//i.test(ue) || /^doi:/i.test(ue), Y = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(ue) || /\/pmc\/|\/pmid\//i.test(ue), C = Rt(ue);
        return ve || Y || C ? /* @__PURE__ */ e(
          "a",
          {
            href: T,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...V
          }
        ) : /* @__PURE__ */ e("a", { href: T, target: "_blank", rel: "noreferrer", ...V });
      },
      pre({ children: m, ...T }) {
        const V = je.Children.toArray(m).find(
          (R) => je.isValidElement(R) && typeof R.props.className == "string" && R.props.className.includes("language-")
        );
        if (!V)
          return /* @__PURE__ */ e("pre", { ...T, children: m });
        const ue = V.props.className ?? "", ve = ue.match(/language-([\w-]+)/), Y = ve ? ve[1].toLowerCase() : "code", C = ht(V.props.children).replace(/\n$/, "");
        return Y === "mermaid" ? /* @__PURE__ */ e(Wn, { rawCode: C }) : /* @__PURE__ */ e(qn, { language: Y, rawCode: C, className: ue, children: V.props.children });
      },
      code({ children: m, className: T, ...V }) {
        return T ? /* @__PURE__ */ e("code", { className: T, ...V, children: m }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...V,
            children: m
          }
        );
      }
    }),
    []
  );
  return ye(() => {
    if (f || E || !P) return;
    const m = _.current;
    if (!m) return;
    const T = Array.from(m.querySelectorAll(".mermaid")).filter(
      (V) => V.dataset.processed !== "true"
    );
    T.length !== 0 && Fn().then(async (V) => {
      await Promise.all(
        T.map(async (ue, ve) => {
          var j;
          const Y = (j = ue.textContent) == null ? void 0 : j.trim();
          if (!Y) return;
          const C = `mermaid-${Date.now()}-${ve}`, { svg: R } = await V.render(C, Y);
          ue.innerHTML = R, ue.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [f, E, P, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${f ? "justify-end" : "justify-start"}`, children: f ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (g = t.references) == null ? void 0 : g.map((m) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${m.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              m.type === "skill" ? /* @__PURE__ */ e(Ot, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(Xt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: m.label, children: m.label })
            ]
          },
          m.id
        )),
        (q = t.attachments) == null ? void 0 : q.map((m) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${m.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: m.status === "error" ? "alert" : void 0,
            title: m.errorMessage,
            children: [
              m.status === "uploading" ? /* @__PURE__ */ e(Kt, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : m.status === "error" ? /* @__PURE__ */ e(vr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : m.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: m.previewUrl, alt: m.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Gt, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: m.name, children: m.name }),
              m.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              m.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          m.id
        ))
      ] }),
      /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: t.content })
    ] }),
    t.content && /* @__PURE__ */ e(
      _t,
      {
        markdownContent: t.content,
        copyLabel: "复制消息"
      }
    )
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    F && x ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: x.items.map((m, T) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: m.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${m.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: m.pmid
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
                  href: `https://doi.org/${m.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: m.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${m.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(Yt, { size: 14 })
            }
          )
        ]
      },
      `${m.pmid}-${T}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: _,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          rr,
          {
            remarkPlugins: re,
            rehypePlugins: ne,
            components: S,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      Rn,
      {
        draft: t.miraDraft,
        onPreview: h,
        onConfirm: d,
        onCancel: N
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      In,
      {
        card: t.displayCard,
        actionPending: u === t.displayCard.actionKey,
        onAction: c
      }
    ),
    !F && t.content && !E && /* @__PURE__ */ e(
      _t,
      {
        markdownContent: t.content,
        onRefresh: a,
        feedback: s,
        onFeedback: n && l ? (m) => l(n, m) : void 0,
        disabled: E
      }
    )
  ] }) }) });
}, Vn = je.memo(lr), Kn = {
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
}, On = {
  queued: /* @__PURE__ */ e(bt, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(Zt, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(Vt, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(ut, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(Ut, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Mt, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(Qt, { size: 14, className: "text-danger" })
}, Dt = {
  knowledge: {
    icon: /* @__PURE__ */ e(At, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Nr, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Ze, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(wr, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(At, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(Zt, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(Ze, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Xn = {
  running: {
    icon: /* @__PURE__ */ e(Ge, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(ut, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(Qt, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(kr, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e(Mt, { size: 13 }),
    colorClass: "text-warning"
  }
}, St = ({
  phase: t,
  searchSteps: n = [],
  label: s,
  defaultExpanded: l = !0
}) => {
  const [a, d] = v(l), h = he(null);
  ye(() => {
    n.length > 0 && d(!0);
  }, [n.length]);
  const N = n.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: On[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: s || Kn[t] }),
      N && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => d((u) => !u),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            a ? /* @__PURE__ */ e(mt, { size: 12 }) : /* @__PURE__ */ e(dt, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    N && /* @__PURE__ */ e(
      "div",
      {
        ref: h,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${a ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((u, c) => {
          const b = Dt[u.type] ?? Dt.tool, p = u.status ? Xn[u.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${b.colorClass}`, children: b.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: u.label }),
                    p && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${p.colorClass}`,
                        "aria-label": u.status,
                        children: p.icon
                      }
                    )
                  ] }),
                  (u.detail || u.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    u.detail,
                    u.detail && u.resultCount !== void 0 ? " · " : "",
                    u.resultCount !== void 0 ? `${u.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            u.id ?? `${u.type}-${c}-${u.label}`
          );
        })
      }
    )
  ] });
}, Gn = je.memo(St);
function Yn(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t && (t.current = n);
}
function kt(t) {
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : 0;
}
function Qn({
  messages: t,
  isTyping: n,
  statusPhase: s = "thinking",
  statusLabel: l,
  statusVisible: a,
  searchSteps: d = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: N = 800,
  selection: u,
  scrollbar: c,
  feedbackByMessageKey: b,
  getMessageKey: p = (U, P) => String(P),
  onFeedback: f,
  onRegenerate: E,
  onConfirmMiraDraft: _,
  onPreviewMiraDraft: $,
  onCancelMiraDraft: I,
  pendingDisplayActionKey: D,
  onDisplayCardAction: K,
  onScroll: B,
  scrollContainerRef: z,
  onMessageElement: X
}) {
  var ve, Y;
  const U = !!u, P = he(null), M = he(null), G = he(/* @__PURE__ */ new Map()), x = he(), [F, re] = v(), S = n && (a ?? !h) || a === !0 && (s === "awaiting_clarification" || s === "awaiting_confirmation" || s === "awaiting_approval" || s === "warning" || s === "failed");
  let g = -1, q = -1;
  if (n) {
    for (let C = t.length - 1; C >= 0; C -= 1)
      if (((ve = t[C]) == null ? void 0 : ve.role) === "user") {
        q = C;
        break;
      }
    for (let C = t.length - 1; C > q; C -= 1)
      if (((Y = t[C]) == null ? void 0 : Y.role) === "assistant") {
        g = C;
        break;
      }
  }
  const m = q >= 0 ? p(t[q], q) : void 0, T = g >= 0 ? p(t[g], g) : void 0, V = m && T ? `${m}:${T}` : void 0, ue = Pe(
    (C) => {
      P.current = C, Yn(z, C);
    },
    [z]
  );
  return Lt(() => {
    if (!V || !T || q < 0 || g < 0)
      return;
    const C = P.current, R = M.current, j = G.current.get(q);
    if (!C || !R || !j) return;
    const we = () => {
      const Ce = window.getComputedStyle(C), Me = window.getComputedStyle(R), J = C.clientHeight - kt(Ce.paddingTop) - kt(Ce.paddingBottom), ae = kt(Me.rowGap || Me.gap), Q = Math.max(
        0,
        Math.floor(J - j.offsetHeight - ae)
      );
      re(
        (L) => (L == null ? void 0 : L.assistantKey) === T && L.minHeight === Q ? L : { assistantKey: T, minHeight: Q }
      );
    };
    we();
    const Se = new ResizeObserver(we);
    return Se.observe(C), Se.observe(j), () => Se.disconnect();
  }, [
    g,
    T,
    V,
    q
  ]), Lt(() => {
    if (!V || !T || (F == null ? void 0 : F.assistantKey) !== T || q < 0 || x.current === V)
      return;
    const C = P.current, R = G.current.get(q);
    !C || !R || (C.scrollTo({ top: R.offsetTop, behavior: "auto" }), x.current = V);
  }, [T, V, q, F]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: ue,
        "data-chat-scroll-container": !0,
        onScroll: B,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: M,
            className: `flex w-full flex-col ${U ? "gap-3" : "gap-8"}`,
            style: { maxWidth: N },
            children: [
              t.map((C, R) => {
                const j = p(C, R), we = (u == null ? void 0 : u.selectedMessageKeys.has(j)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": R,
                    "data-chat-turn-reserved": (F == null ? void 0 : F.assistantKey) === j ? "true" : void 0,
                    ref: (Se) => {
                      Se ? G.current.set(R, Se) : G.current.delete(R), X == null || X(R, Se);
                    },
                    className: U ? "flex w-full items-start gap-2" : void 0,
                    style: (F == null ? void 0 : F.assistantKey) === j ? { minHeight: F.minHeight } : void 0,
                    children: [
                      u && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => u.onToggleMessage(j),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": we ? "取消选择消息" : "选择消息",
                          children: we ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Je, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: u ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${we ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${C.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              lr,
                              {
                                msg: C,
                                actionKey: j,
                                feedback: b == null ? void 0 : b[j],
                                onFeedback: f,
                                onRefresh: E ? () => E(R) : void 0,
                                onConfirmMiraDraft: _,
                                onPreviewMiraDraft: $,
                                onCancelMiraDraft: I,
                                pendingDisplayActionKey: D,
                                onDisplayCardAction: K,
                                isTyping: n && R === g
                              }
                            ),
                            R === g && S && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              St,
                              {
                                phase: s,
                                label: l,
                                searchSteps: [...d]
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
              g < 0 && S && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                St,
                {
                  phase: s,
                  label: l,
                  searchSteps: [...d]
                }
              ) }) })
            ]
          }
        )
      }
    ),
    c && c.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${c.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: c.height,
          transform: `translateY(${c.top}px)`
        }
      }
    )
  ] });
}
je.memo(Qn);
function Xa({
  children: t,
  maxWidth: n = 840,
  disclaimer: s = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: n },
      children: [
        t,
        s && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: s })
      ]
    }
  );
}
const Ga = Wt(
  function({ header: n, children: s, sidePanels: l }, a) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: a, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: s }),
        l
      ] })
    ] });
  }
), Ya = Wt(
  function({ open: n, width: s, resizing: l = !1, overlay: a = !1, overlayRight: d = 0, children: h }, N) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: N,
        "data-overlay": a ? "true" : "false",
        style: { width: n ? s : 0, ...a ? { right: d } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${a ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: s }, className: "h-full min-w-0", children: h })
      }
    );
  }
);
function Zn({
  isSidebarOpen: t,
  title: n,
  editingTitle: s,
  titleInputRef: l,
  divided: a = !1,
  actions: d,
  onOpenSidebar: h,
  onStartEditTitle: N,
  onEditingTitleChange: u,
  onCommitTitle: c,
  onEditingTitleKeyDown: b
}) {
  return /* @__PURE__ */ r(
    "header",
    {
      className: `z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${a ? "border-b border-chatWorkspaceDivider" : ""}`,
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
              children: /* @__PURE__ */ e(Jt, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: s !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: s,
              onChange: (f) => u == null ? void 0 : u(f.target.value),
              onBlur: c,
              onKeyDown: b,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${N ? "cursor-pointer" : ""}`,
              onClick: N,
              title: N ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: d })
      ]
    }
  );
}
function Qa({ active: t = !1, icon: n, label: s, onClick: l }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: l,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: s })
      ]
    }
  );
}
function Za({
  items: t,
  activeMessageIndex: n,
  initiallyExpanded: s = !1,
  onSelect: l
}) {
  const [a, d] = v(s), [h, N] = v(null), [u, c] = v(0), [b, p] = v(0), [f, E] = v(!1), _ = he(null), $ = he({}), I = he(null), D = Pe(() => {
    const z = _.current;
    if (!z) {
      c(0), p(0);
      return;
    }
    const { scrollTop: X, scrollHeight: U, clientHeight: P } = z;
    if (U <= P || P <= 0) {
      c(0), p(0);
      return;
    }
    const M = Math.max(P / U * P, 24), G = P - M, x = X / Math.max(U - P, 1);
    c(M), p(G * x);
  }, []), K = Pe(() => {
    D(), E(!0), I.current !== null && window.clearTimeout(I.current), I.current = window.setTimeout(() => E(!1), 650);
  }, [D]), B = () => {
    I.current !== null && (window.clearTimeout(I.current), I.current = null), d(!1), N(null), E(!1);
  };
  return ye(() => {
    if (!a) return;
    const z = window.requestAnimationFrame(D);
    return () => window.cancelAnimationFrame(z);
  }, [a, t.length, D]), ye(() => {
    const z = _.current, X = $.current[n];
    if (!z || !X) return;
    const U = z.scrollTop, P = U + z.clientHeight, M = X.offsetTop, G = M + X.offsetHeight, x = 16;
    M < U + x ? z.scrollTo({ top: Math.max(M - x, 0), behavior: "auto" }) : G > P - x && z.scrollTo({
      top: Math.max(G - z.clientHeight + x, 0),
      behavior: "auto"
    });
  }, [n, t.length]), ye(() => () => {
    I.current !== null && window.clearTimeout(I.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => d(!0),
      onMouseLeave: B,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: _,
          onScroll: K,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${a ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((z) => {
              const X = z.messageIndex === n, U = h === z.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (P) => {
                    $.current[z.messageIndex] = P;
                  },
                  type: "button",
                  onClick: () => l(z.messageIndex),
                  onMouseEnter: () => N(z.messageIndex),
                  onMouseLeave: () => N(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${a ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${z.messageIndex + 1} 条用户消息`,
                  title: z.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${a ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${X ? "text-primary" : U ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: z.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${X ? "h-[4px] w-[12px] bg-primary" : U ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                z.messageIndex
              );
            }) }),
            a && u > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${f ? "opacity-100" : "opacity-0"}`,
                style: { height: u, transform: `translateY(${b}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Ja({
  selectedCount: t,
  shareLink: n,
  modalOpen: s,
  copied: l = !1,
  contentMaxWidth: a = 840,
  onCancel: d,
  onCreateLink: h,
  onCloseModal: N,
  onCopyLink: u
}) {
  return /* @__PURE__ */ r(Ve, { children: [
    /* @__PURE__ */ e("div", { className: "w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur", children: /* @__PURE__ */ r(
      "div",
      {
        className: "mx-auto flex w-full items-center justify-between gap-4",
        style: { maxWidth: a },
        children: [
          /* @__PURE__ */ r("div", { className: "min-w-0 text-sm text-secondaryText", children: [
            "已选择 ",
            t,
            " 条对话"
          ] }),
          /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(Fe, { type: "secondary", size: "small", onClick: d, children: "取消" }),
            /* @__PURE__ */ e(
              Fe,
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
      $t,
      {
        visible: s,
        title: "创建分享链接",
        width: 450,
        onCancel: N,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: u,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  l ? /* @__PURE__ */ e(Je, { size: 14 }) : /* @__PURE__ */ e(ft, { size: 14 }),
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
function ir({
  attachments: t,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: s = !1,
  deletingAttachmentId: l,
  unavailableHint: a,
  error: d,
  onRequestUpload: h,
  onDeleteAttachment: N
}) {
  return /* @__PURE__ */ r("div", { className: n, children: [
    /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      h && /* @__PURE__ */ e(
        Fe,
        {
          type: "secondary",
          size: "small",
          disabled: s,
          onClick: h,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            s ? /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Tr, { size: 14 }),
            s ? "上传中" : "上传附件"
          ] })
        }
      )
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: t.map((u) => {
      const c = l === u.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: u.statusLabel,
          children: [
            /* @__PURE__ */ e(xt, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: u.name }),
            u.status === "processing" && /* @__PURE__ */ e(Ge, { size: 12, className: "animate-spin" }),
            N && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: c,
                onClick: () => N(u.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${u.name}`,
                title: "删除附件",
                children: c ? /* @__PURE__ */ e(Ge, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(er, { size: 13 })
              }
            )
          ]
        },
        u.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    a && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: a }),
    d && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: d })
  ] });
}
const Jn = {
  disabled: /* @__PURE__ */ e(Cr, { size: 14 }),
  pending: /* @__PURE__ */ e(bt, { size: 14 }),
  indexed: /* @__PURE__ */ e(nt, { size: 14 })
};
function or({
  createdByName: t,
  updatedByName: n,
  updatedAt: s,
  index: l
}) {
  return !t && !n && !s && !l ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    n && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      n
    ] }),
    s && /* @__PURE__ */ e("span", { children: s }),
    l && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: l.detail, children: [
      Jn[l.status],
      l.statusLabel
    ] })
  ] });
}
const ea = "_preview_1bdn0_1", ta = "_editor_1bdn0_2", cr = {
  preview: ea,
  editor: ta
};
function ra({
  document: t,
  layout: n = "page"
}) {
  const [s, l] = v(!1), a = he(null), d = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ye(() => () => {
    a.current !== null && window.clearTimeout(a.current);
  }, []);
  const h = () => {
    l(!0), a.current !== null && window.clearTimeout(a.current), a.current = window.setTimeout(() => l(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${d}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        or,
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
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${s ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${cr.preview} ${d}`, children: /* @__PURE__ */ e(rr, { remarkPlugins: [nr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(zt, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            ir,
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
function es({
  tabs: t,
  activeKey: n,
  onSelectTab: s,
  onCloseTab: l,
  onClose: a,
  pendingActionKey: d,
  onAction: h,
  renderContent: N,
  onResizeStart: u
}) {
  var p;
  const c = t.find((f) => f.key === n) ?? null, b = c ? N == null ? void 0 : N(c) : void 0;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: u,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((f) => {
        const E = f.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => s(f.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${E ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                f.type === "knowledge" || f.type === "draft" ? /* @__PURE__ */ e(xt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Sr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: f.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (_) => {
                _.stopPropagation(), l(f.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${f.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(rt, { size: 12 })
            }
          )
        ] }, f.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !b && ((p = c == null ? void 0 : c.actions) == null ? void 0 : p.map((f) => /* @__PURE__ */ e(
          Fe,
          {
            type: f.tone ?? "secondary",
            size: "small",
            disabled: d === c.key || !h,
            onClick: () => h == null ? void 0 : h(c.key, f.id),
            children: f.label
          },
          f.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: a,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(rt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: c ? b || (c.document ? /* @__PURE__ */ e(ra, { document: c.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: c.loading ? "正在加载文档…" : c.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function ts({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: s,
  knowledgeDocs: l,
  experiments: a,
  activePreviewKey: d,
  onSearchQueryChange: h,
  onOpenKnowledge: N,
  onOpenExperiment: u,
  onResizeStart: c
}) {
  const b = l.length + a.length;
  return /* @__PURE__ */ r("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: c,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ r("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ r("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: t }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Ze, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (p) => h(p.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: s ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: s }) : b === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ve, { children: [
        l.map((p) => {
          const f = `knowledge:${p.id}`, E = d === f;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => N(p.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${E ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${E ? "font-semibold" : "font-normal"}`, children: p.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: p.tags[0] ?? "未分类" })
              ]
            },
            p.id
          );
        }),
        a.map((p) => {
          const f = `experiment:${p.id}`, E = d === f;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => u(p.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${E ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${E ? "font-semibold" : "font-normal"}`, children: p.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: p.tags[0] ?? p.status })
              ]
            },
            p.id
          );
        })
      ] }) }) })
    ] }) })
  ] });
}
const na = 50, aa = 100 * 1024 * 1024, sa = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", la = [
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
], ia = /(?:^|\s)\/([^\s/]*)$/, oa = /(?:^|\s)@([^\s@]*)$/, ca = (t, n) => {
  const l = t.slice(0, n).match(ia);
  return l ? l[1] : null;
}, da = (t, n) => {
  const l = t.slice(0, n).match(oa);
  return l ? l[1] : null;
}, rs = (t, n, s, l) => {
  const a = t.slice(0, n), d = t.slice(s), h = a.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const p = `/${l} `;
    return { value: `${a}${p}${d}`, cursor: a.length + p.length };
  }
  const N = a.length - h[0].length, c = `${h[0].startsWith(" ") ? " " : ""}/${l} `, b = `${a.slice(0, N)}${c}`;
  return {
    value: `${b}${d}`,
    cursor: b.length
  };
}, ns = (t, n, s, l) => {
  const a = t.slice(0, n), d = t.slice(s), h = a.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const p = `@${l} `;
    return { value: `${a}${p}${d}`, cursor: a.length + p.length };
  }
  const N = a.length - h[0].length, c = `${h[0].startsWith(" ") ? " " : ""}@${l} `, b = `${a.slice(0, N)}${c}`;
  return {
    value: `${b}${d}`,
    cursor: b.length
  };
}, ua = [], as = [], dr = ({
  onSend: t,
  disabled: n,
  isStreaming: s = !1,
  onCancel: l,
  leadingControls: a,
  skillOptions: d = la,
  fileOptions: h = ua,
  uploadAccept: N,
  validateUploadFile: u,
  onUploadValidationError: c
}) => {
  const [b, p] = v(""), [f, E] = v(!1), [_, $] = v(!1), [I, D] = v(""), [K, B] = v(-1), [z, X] = v(!1), [U, P] = v(""), [M, G] = v(-1), [x, F] = v([]), [re, ne] = v([]), [S, g] = v([]), [q, m] = v(!1), T = he(null), V = he(null), ue = pr(), ve = he([]), Y = s && !!l;
  ye(() => {
    ve.current = x;
  }, [x]), ye(() => () => {
    ve.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const C = ge(() => {
    const i = I.trim().toLowerCase();
    return i ? d.filter((y) => `${y.id} ${y.description} ${y.source}`.toLowerCase().includes(i)) : d;
  }, [d, I]), R = ge(() => {
    const i = U.trim().toLowerCase();
    return i ? h.filter((y) => `${y.name} ${y.projectName} ${y.sourceType} ${y.operatorName ?? ""} ${y.operatedAt ?? ""}`.toLowerCase().includes(i)) : h.filter((y) => y.isRecent).slice(0, 10);
  }, [h, U]), j = Pe((i, y) => {
    const se = y ?? i.length, ce = ca(i, se);
    if (ce !== null) {
      $(!0), D(ce), B(-1), X(!1), P(""), G(-1);
      return;
    }
    const ie = da(i, se);
    if (ie !== null) {
      X(!0), P(ie), G(-1), $(!1), D(""), B(-1);
      return;
    }
    $(!1), D(""), B(-1), X(!1), P(""), G(-1);
  }, []), we = Pe((i) => {
    if (i.disabled) return;
    const y = T.current, se = (y == null ? void 0 : y.selectionStart) ?? b.length, ce = (y == null ? void 0 : y.selectionEnd) ?? se, ie = b.slice(0, se), me = b.slice(ce), fe = (() => {
      const pe = ie.match(/(?:^|\s)\/[^\s/]*$/);
      if (!pe)
        return { value: b, cursor: se };
      const xe = ie.length - pe[0].length, be = pe[0].startsWith(" ") ? " " : "", W = `${ie.slice(0, xe)}${be}`;
      return {
        value: `${W}${me}`,
        cursor: W.length
      };
    })();
    ne((pe) => {
      const xe = `skill-${i.id}`;
      return pe.some((be) => be.id === xe) ? pe : [...pe, { id: xe, type: "skill", label: i.id, sourceId: i.id }];
    }), p(fe.value), $(!1), D(""), B(-1), requestAnimationFrame(() => {
      y && (y.focus(), y.setSelectionRange(fe.cursor, fe.cursor));
    });
  }, [b]), Se = Pe((i) => {
    const y = T.current, se = (y == null ? void 0 : y.selectionStart) ?? b.length, ce = (y == null ? void 0 : y.selectionEnd) ?? se, ie = b.slice(0, se), me = b.slice(ce), fe = (() => {
      const pe = ie.match(/(?:^|\s)@[^\s@]*$/);
      if (!pe)
        return { value: b, cursor: se };
      const xe = ie.length - pe[0].length, be = pe[0].startsWith(" ") ? " " : "", W = `${ie.slice(0, xe)}${be}`;
      return {
        value: `${W}${me}`,
        cursor: W.length
      };
    })();
    g((pe) => {
      const xe = `doc-${i.id}`;
      return pe.some((be) => be.id === xe) ? pe : [...pe, { id: xe, type: "doc", label: i.name, sourceId: i.id }];
    }), p(fe.value), X(!1), P(""), G(-1), requestAnimationFrame(() => {
      y && (y.focus(), y.setSelectionRange(fe.cursor, fe.cursor));
    });
  }, [b]), Ce = Pe(() => {
    m(!1);
    const i = V.current;
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
  }, []), Me = Pe((i) => {
    const y = Array.from(i.target.files ?? []);
    if (y.length === 0) return;
    const se = y.filter((ce) => {
      const ie = u == null ? void 0 : u(ce);
      return ie ? (c == null || c(ie), !1) : !0;
    });
    F((ce) => {
      const ie = new Set(ce.map((fe) => fe.id)), me = [...ce];
      return se.forEach((fe) => {
        if (fe.size > aa || me.length >= na) return;
        const pe = `${fe.name}-${fe.size}-${fe.lastModified}`;
        if (ie.has(pe)) return;
        const xe = fe.type.startsWith("image/");
        ie.add(pe), me.push({
          id: pe,
          name: fe.name,
          mimeType: fe.type || "application/octet-stream",
          previewUrl: xe ? URL.createObjectURL(fe) : void 0,
          file: fe
        });
      }), me;
    }), i.target.value = "";
  }, [c, u]), J = Pe((i) => {
    F((y) => {
      const se = y.find((ce) => ce.id === i);
      return se != null && se.previewUrl && URL.revokeObjectURL(se.previewUrl), y.filter((ce) => ce.id !== i);
    });
  }, []), ae = Pe((i) => {
    ne((y) => y.filter((se) => se.id !== i));
  }, []), Q = Pe((i) => {
    g((y) => y.filter((se) => se.id !== i));
  }, []), L = Pe(() => {
    !b.trim() || n || (t({
      content: b,
      attachments: x.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...re, ...S]
    }), p(""), F([]), ne([]), g([]), $(!1), D(""), B(-1), X(!1), P(""), G(-1));
  }, [b, n, t, x, S, re]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: ue,
        ref: V,
        type: "file",
        multiple: !0,
        accept: N,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Me
      }
    ),
    (x.length > 0 || re.length > 0 || S.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      re.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Ot, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => ae(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(rt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      S.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Xt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Q(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${i.label}`,
                children: /* @__PURE__ */ e(rt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      x.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            i.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: i.previewUrl, alt: i.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Gt, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: i.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: i.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => J(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${i.name}`,
                children: /* @__PURE__ */ e(rt, { size: 12 })
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
        ref: T,
        value: b,
        onChange: (i) => {
          const y = i.target.value;
          p(y), j(y, i.target.selectionStart);
        },
        onClick: (i) => {
          j(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyUp: (i) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(i.key) || j(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyDown: (i) => {
          if (i.key === "Enter" && (i.shiftKey || i.metaKey || i.ctrlKey)) {
            i.preventDefault();
            const y = i.currentTarget, se = y.selectionStart ?? b.length, ce = y.selectionEnd ?? se, ie = `${b.slice(0, se)}
${b.slice(ce)}`, me = se + 1;
            p(ie), j(ie, me), requestAnimationFrame(() => {
              y.setSelectionRange(me, me);
            });
            return;
          }
          if (_) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), B((y) => C.length === 0 ? -1 : y < 0 ? 0 : (y + 1) % C.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), B((y) => C.length === 0 ? -1 : y < 0 ? C.length - 1 : (y - 1 + C.length) % C.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), $(!1), D(""), B(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const y = K >= 0 ? C[K] : void 0;
              y && we(y);
              return;
            }
          }
          if (z) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), G((y) => R.length === 0 ? -1 : y < 0 ? 0 : (y + 1) % R.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), G((y) => R.length === 0 ? -1 : y < 0 ? R.length - 1 : (y - 1 + R.length) % R.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), X(!1), P(""), G(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const y = M >= 0 ? R[M] : void 0;
              y && Se(y);
              return;
            }
          }
          i.key === "Enter" && !i.shiftKey && (i.preventDefault(), L());
        },
        disabled: n,
        onFocus: () => E(!0),
        onBlur: () => {
          E(!1), $(!1), X(!1);
        },
        placeholder: f ? sa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${x.length > 0 || re.length > 0 || S.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    _ && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: I ? `搜索 skill：${I}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: C.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : C.map((i, y) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : y === K ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => we(i),
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
    z && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: U ? `搜索文件：${U}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !U && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(bt, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        R.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : R.map((i, y) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${y === M ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => Se(i),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(xt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: i.name }),
              !U && i.operatorName && i.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${i.operatorName} ${i.operatedAt}` })
            ]
          },
          i.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
        a,
        /* @__PURE__ */ r(
          "div",
          {
            className: "relative",
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Ce,
                  "aria-controls": ue,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(tr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${q ? "block" : "hidden"}`,
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
          onClick: Y ? l : L,
          disabled: Y ? !1 : n || !b.trim(),
          "aria-label": Y ? "停止生成" : "发送消息",
          title: Y ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Y || b.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: Y ? /* @__PURE__ */ e(Mr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e($r, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
je.memo(dr);
const ma = ({ messages: t, isTyping: n, statusPhase: s = "thinking", searchSteps: l = [] }) => {
  const a = he(null);
  ye(() => {
    var h;
    (h = a.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const d = ge(() => t.map((h, N) => /* @__PURE__ */ e(Vn, { msg: h }, `${N}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    d,
    n && /* @__PURE__ */ e(Gn, { phase: s, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: a })
  ] });
};
je.memo(ma);
const pa = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], ur = ({ onSelect: t, prompts: n = pa, disabled: s = !1 }) => {
  const l = Pe((a) => {
    t(a);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((a) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => l(a),
      disabled: s,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: a
    },
    a
  )) });
};
je.memo(ur);
const ha = (t, n) => {
  const s = Math.random() * t, l = Math.random() * n;
  return {
    x: s,
    y: l,
    baseX: s,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function ss({ onLogin: t, onLoginSuccess: n, onNavigate: s }) {
  const l = he(null), a = he(null), [d, h] = v(""), [N, u] = v(""), [c, b] = v(!0), [p, f] = v(!1), [E, _] = v(!1), [$, I] = v(null), D = he(null), [K, B] = v(!1), [z, X] = v("email"), [U, P] = v(""), [M, G] = v(""), [x, F] = v(""), [re, ne] = v(""), [S, g] = v(0), [q, m] = v(!1), T = ge(() => d.trim().length > 0 && N.trim().length > 0 && !p, [
    d,
    p,
    N
  ]);
  ye(() => {
    if (S <= 0) return;
    const C = window.setTimeout(() => g((R) => R - 1), 1e3);
    return () => clearTimeout(C);
  }, [S]), ye(
    () => () => {
      D.current !== null && window.clearTimeout(D.current);
    },
    []
  ), ye(() => {
    const C = l.current, R = a.current;
    if (!C || !R) return;
    const j = C.getContext("2d");
    if (!j) return;
    const we = window.getComputedStyle(document.documentElement), Se = we.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ce = we.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Me = we.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let J = 0, ae = 0, Q = 0, L = window.devicePixelRatio || 1, i = [];
    const y = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, se = 150, ce = () => {
      const be = R.getBoundingClientRect();
      L = window.devicePixelRatio || 1, ae = be.width, Q = be.height, C.width = ae * L, C.height = Q * L, C.style.width = `${ae}px`, C.style.height = `${Q}px`, j.setTransform(L, 0, 0, L, 0, 0);
      const W = ae < 768 ? 40 : 90;
      i = Array.from({ length: W }, () => ha(ae, Q));
    }, ie = (be) => {
      j.beginPath(), j.arc(be.x, be.y, be.size, 0, Math.PI * 2), j.closePath(), j.fill();
    }, me = () => {
      j.clearRect(0, 0, ae, Q);
      for (let be = 0; be < i.length; be += 1) {
        const W = i[be];
        W.x += W.vx, W.y += W.vy, (W.x < 0 || W.x > ae) && (W.vx = -W.vx), (W.y < 0 || W.y > Q) && (W.vy = -W.vy);
        const Ke = y.x - W.x, k = y.y - W.y, w = Math.sqrt(Ke * Ke + k * k) || 1, ee = Ke / w, Z = k / w, O = (y.radius - w) / y.radius, A = ee * O * W.density, Be = Z * O * W.density;
        if (w < y.radius)
          W.x -= A * 0.5, W.y -= Be * 0.5, j.fillStyle = Se, W.size = Math.min(W.size + 0.1, 2.5);
        else {
          if (W.x !== W.baseX) {
            const Ne = W.x - W.baseX;
            W.x -= Ne / 50;
          }
          if (W.y !== W.baseY) {
            const Ne = W.y - W.baseY;
            W.y -= Ne / 50;
          }
          j.fillStyle = Ce, W.size = Math.max(W.size - 0.05, 1);
        }
        ie(W);
        for (let Ne = be; Ne < i.length; Ne += 1) {
          const Le = i[Ne], He = W.x - Le.x, Te = W.y - Le.y, le = Math.sqrt(He * He + Te * Te);
          if (le < se) {
            const de = (1 - le / se) * 0.4;
            j.beginPath(), j.strokeStyle = Me, j.globalAlpha = de, j.lineWidth = 1, j.moveTo(W.x, W.y), j.lineTo(Le.x, Le.y), j.stroke(), j.globalAlpha = 1, j.closePath();
          }
        }
      }
      J = window.requestAnimationFrame(me);
    }, fe = (be) => {
      const W = R.getBoundingClientRect();
      y.x = be.clientX - W.left, y.y = be.clientY - W.top;
    }, pe = () => {
      y.x = -1e3, y.y = -1e3;
    }, xe = (be) => {
      if (be.touches.length < 1) return;
      const W = R.getBoundingClientRect();
      y.x = be.touches[0].clientX - W.left, y.y = be.touches[0].clientY - W.top;
    };
    return ce(), me(), window.addEventListener("resize", ce), R.addEventListener("mousemove", fe), R.addEventListener("mouseleave", pe), R.addEventListener("touchmove", xe, { passive: !0 }), R.addEventListener("touchend", pe), () => {
      window.cancelAnimationFrame(J), window.removeEventListener("resize", ce), R.removeEventListener("mousemove", fe), R.removeEventListener("mouseleave", pe), R.removeEventListener("touchmove", xe), R.removeEventListener("touchend", pe);
    };
  }, []);
  const V = async (C) => {
    if (C.preventDefault(), !!T) {
      f(!0), I(null);
      try {
        const R = await t({ email: d.trim(), password: N, rememberLogin: c });
        if (!R.ok) {
          I(R.message);
          return;
        }
        _(!0), D.current = window.setTimeout(() => {
          _(!1), n();
        }, 900);
      } catch {
        I("登录失败，请稍后重试。");
      } finally {
        f(!1);
      }
    }
  }, ue = async () => {
    !U.trim() || S > 0 || (f(!0), await new Promise((C) => window.setTimeout(C, 1e3)), f(!1), m(!0), g(60));
  }, ve = async () => {
    if (z === "email") {
      if (!U.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U) || !M.trim() || M.length < 6 || !x.trim() || x.length < 6 || x !== re) return;
      X("success");
    }
  }, Y = () => {
    B(!1), X("email"), P(""), G(""), F(""), ne(""), g(0), m(!1);
  };
  return /* @__PURE__ */ r("div", { ref: a, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ r("form", { onSubmit: V, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: d,
              onChange: (C) => {
                h(C.target.value), I(null);
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
              value: N,
              onChange: (C) => {
                u(C.target.value), I(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        $ && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: $ }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: c,
                  onChange: (C) => b(C.target.checked),
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
          /* @__PURE__ */ e("button", { type: "button", onClick: () => s("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !T,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: p ? "认证中..." : "登录" }),
              p && /* @__PURE__ */ r(
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
      !K && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
              onClick: () => s("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(zr, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-lineSubtle", "aria-hidden": "true" }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => s("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Lr, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      K && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: Y,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        z === "email" && /* @__PURE__ */ r("div", { className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: U,
                onChange: (C) => P(C.target.value),
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
                  value: M,
                  onChange: (C) => G(C.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: ue,
                disabled: S > 0 || p || !U.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${S > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: S > 0 ? `${S}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (C) => F(C.target.value),
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
                value: re,
                onChange: (C) => ne(C.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${re.length > 0 && x !== re ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          re.length > 0 && x !== re && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ve,
              disabled: !U.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U) || !M.trim() || M.length < 6 || !x.trim() || x.length < 6 || x !== re,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        z === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(nt, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: Y,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${E ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(nt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const fa = (t, n) => {
  const s = Math.random() * t, l = Math.random() * n;
  return {
    x: s,
    y: l,
    baseX: s,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function ls({
  mode: t = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: s,
  onRegister: l,
  onEnterWorkspace: a,
  onNavigate: d
}) {
  const h = he(null), N = he(null), u = he(null), [c, b] = v("identity"), [p, f] = v(""), [E, _] = v(""), [$, I] = v(""), [D, K] = v(""), [B, z] = v(""), [X, U] = v(""), P = t === "create-lab", [M, G] = v(""), [x, F] = v(""), [re, ne] = v(!1), [S, g] = v(0), [q, m] = v(""), [T, V] = v(null), ue = M.length > 0 && M.trim().length < 6;
  ye(() => {
    if (S <= 0) return;
    const J = window.setTimeout(() => g((ae) => ae - 1), 1e3);
    return () => clearTimeout(J);
  }, [S]), ye(
    () => () => {
      u.current !== null && window.clearTimeout(u.current);
    },
    []
  ), ye(() => {
    const J = h.current, ae = N.current;
    if (!J || !ae) return;
    const Q = J.getContext("2d");
    if (!Q) return;
    const L = window.getComputedStyle(document.documentElement), i = L.getPropertyValue("--chatui-color-auth-particle-active").trim(), y = L.getPropertyValue("--chatui-color-auth-particle-idle").trim(), se = L.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ce = 0, ie = 0, me = 0, fe = window.devicePixelRatio || 1, pe = [];
    const xe = { x: -1e3, y: -1e3, radius: 120 }, be = 150, W = () => {
      const O = ae.getBoundingClientRect();
      fe = window.devicePixelRatio || 1, ie = O.width, me = O.height, J.width = ie * fe, J.height = me * fe, J.style.width = `${ie}px`, J.style.height = `${me}px`, Q.setTransform(fe, 0, 0, fe, 0, 0);
      const A = ie < 768 ? 40 : 90;
      pe = Array.from({ length: A }, () => fa(ie, me));
    }, Ke = (O) => {
      Q.beginPath(), Q.arc(O.x, O.y, O.size, 0, Math.PI * 2), Q.closePath(), Q.fill();
    }, k = () => {
      Q.clearRect(0, 0, ie, me);
      for (let O = 0; O < pe.length; O += 1) {
        const A = pe[O];
        A.x += A.vx, A.y += A.vy, (A.x < 0 || A.x > ie) && (A.vx = -A.vx), (A.y < 0 || A.y > me) && (A.vy = -A.vy);
        const Be = xe.x - A.x, Ne = xe.y - A.y, Le = Math.sqrt(Be * Be + Ne * Ne) || 1, He = Be / Le, Te = Ne / Le, le = (xe.radius - Le) / xe.radius, de = He * le * A.density, Re = Te * le * A.density;
        Le < xe.radius ? (A.x -= de * 0.5, A.y -= Re * 0.5, Q.fillStyle = i, A.size = Math.min(A.size + 0.1, 2.5)) : (A.x !== A.baseX && (A.x -= (A.x - A.baseX) / 50), A.y !== A.baseY && (A.y -= (A.y - A.baseY) / 50), Q.fillStyle = y, A.size = Math.max(A.size - 0.05, 1)), Ke(A);
        for (let $e = O; $e < pe.length; $e += 1) {
          const ke = pe[$e], ze = A.x - ke.x, _e = A.y - ke.y, Ae = Math.sqrt(ze * ze + _e * _e);
          if (Ae < be) {
            const Oe = (1 - Ae / be) * 0.4;
            Q.beginPath(), Q.strokeStyle = se, Q.globalAlpha = Oe, Q.lineWidth = 1, Q.moveTo(A.x, A.y), Q.lineTo(ke.x, ke.y), Q.stroke(), Q.globalAlpha = 1, Q.closePath();
          }
        }
      }
      ce = window.requestAnimationFrame(k);
    }, w = (O) => {
      const A = ae.getBoundingClientRect();
      xe.x = O.clientX - A.left, xe.y = O.clientY - A.top;
    }, ee = () => {
      xe.x = -1e3, xe.y = -1e3;
    }, Z = (O) => {
      if (O.touches.length < 1) return;
      const A = ae.getBoundingClientRect();
      xe.x = O.touches[0].clientX - A.left, xe.y = O.touches[0].clientY - A.top;
    };
    return W(), k(), window.addEventListener("resize", W), ae.addEventListener("mousemove", w), ae.addEventListener("mouseleave", ee), ae.addEventListener("touchmove", Z, { passive: !0 }), ae.addEventListener("touchend", ee), () => {
      window.cancelAnimationFrame(ce), window.removeEventListener("resize", W), ae.removeEventListener("mousemove", w), ae.removeEventListener("mouseleave", ee), ae.removeEventListener("touchmove", Z), ae.removeEventListener("touchend", ee);
    };
  }, []);
  const ve = async () => {
    if (!(!/^1[3-9]\d{9}$/.test($) || S > 0)) {
      ne(!0), V(null);
      try {
        const J = await n($);
        if (!J.ok) {
          V(J);
          return;
        }
        g(J.resendAfterSeconds ?? 60), m(J.message ?? "短信验证码已发送");
      } catch {
        V({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ne(!1);
      }
    }
  }, Y = () => ({
    email: p.trim(),
    name: E.trim(),
    phoneNumber: $,
    phoneVerificationCode: D.trim(),
    mode: t,
    ...P ? { labName: X.trim() } : { inviteCode: B.trim() }
  }), C = () => {
    const J = ["identity", "password", "success"], ae = J.indexOf(c);
    ae < J.length - 1 && b(J[ae + 1]);
  }, R = ge(() => {
    if (re) return !1;
    switch (c) {
      case "identity":
        return P ? p.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && E.trim().length > 0 && /^1[3-9]\d{9}$/.test($) && D.length === 6 && X.trim().length > 0 : p.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && E.trim().length > 0 && /^1[3-9]\d{9}$/.test($) && D.length === 6 && B.trim().length > 0;
      case "password":
        return M.trim().length >= 6 && M === x;
      default:
        return !1;
    }
  }, [c, p, E, $, D, B, X, P, M, x, re]), j = async (J) => {
    if (J.preventDefault(), !!R) {
      ne(!0), V(null);
      try {
        const ae = Y(), Q = c === "password" ? await l({ ...ae, password: M }) : await s(ae);
        if (!Q.ok) {
          V(Q);
          return;
        }
        C();
      } catch {
        V({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ne(!1);
      }
    }
  }, we = {
    identity: P ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, Se = {
    identity: "",
    password: "",
    success: ""
  }, Ce = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", Me = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: N, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: h, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: we[c] }),
        Se[c] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: Se[c] })
      ] }),
      c !== "success" && /* @__PURE__ */ r("form", { onSubmit: j, className: "space-y-5", children: [
        c === "identity" && /* @__PURE__ */ r(Ve, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: p,
                onChange: (J) => {
                  f(J.target.value), V(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ce
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: E,
                onChange: (J) => {
                  _(J.target.value), V(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Ce
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: $,
                  onChange: (J) => {
                    I(J.target.value.replace(/\D/g, "").slice(0, 11)), m(""), V(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Ce
                }
              ),
              /* @__PURE__ */ e("span", { className: Me, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ve,
                disabled: S > 0 || re || !/^1[3-9]\d{9}$/.test($),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${S > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: S > 0 ? `${S}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                value: D,
                onChange: (J) => {
                  K(J.target.value.replace(/\D/g, "").slice(0, 6)), V(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Ce
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "短信验证码" })
          ] }),
          q && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: q }),
          P ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: X,
                onChange: (J) => {
                  U(J.target.value), V(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ce
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: B,
                onChange: (J) => {
                  z(J.target.value), V(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ce
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "邀请码" })
          ] })
        ] }),
        c === "password" && /* @__PURE__ */ r(Ve, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: M,
                onChange: (J) => {
                  G(J.target.value), V(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ce} ${(T == null ? void 0 : T.field) === "password" || ue ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "设置密码" }),
            ((T == null ? void 0 : T.field) === "password" || ue) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (T == null ? void 0 : T.field) === "password" ? T.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (J) => {
                  F(J.target.value), V(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ce} ${x.length > 0 && M !== x ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Me, children: "确认密码" }),
            x.length > 0 && M !== x && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        T && T.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: T.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !R,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: re ? "处理中..." : c === "password" ? "完成注册" : "下一步" }),
              re && /* @__PURE__ */ r(
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
      c === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(nt, { size: 40, className: "text-primary" }) })
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
              u.current = window.setTimeout(a, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      c !== "success" && /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
        "已有账号？",
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => d("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const xa = (t, n) => {
  const s = Math.random() * t, l = Math.random() * n;
  return { x: s, y: l, baseX: s, baseY: l, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function is({ onSendCode: t, onResetPassword: n, onBackToLogin: s }) {
  const l = he(null), a = he(null), d = he(null), [h, N] = v("phone"), [u, c] = v(""), [b, p] = v(""), [f, E] = v(""), [_, $] = v(""), [I, D] = v(!1), [K, B] = v(0), [z, X] = v(""), [U, P] = v(null);
  ye(() => {
    if (K <= 0) return;
    const S = window.setTimeout(() => B((g) => g - 1), 1e3);
    return () => window.clearTimeout(S);
  }, [K]), ye(() => {
    const S = l.current, g = a.current;
    if (!S || !g) return;
    const q = S.getContext("2d");
    if (!q) return;
    const m = window.getComputedStyle(document.documentElement), T = m.getPropertyValue("--chatui-color-auth-particle-active").trim(), V = m.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ue = m.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ve = 0, Y = 0, C = 0, R = [];
    const j = { x: -1e3, y: -1e3, radius: 120 }, we = 150, Se = () => {
      const Q = g.getBoundingClientRect(), L = window.devicePixelRatio || 1;
      Y = Q.width, C = Q.height, S.width = Y * L, S.height = C * L, S.style.width = `${Y}px`, S.style.height = `${C}px`, q.setTransform(L, 0, 0, L, 0, 0), R = Array.from({ length: Y < 768 ? 40 : 90 }, () => xa(Y, C));
    }, Ce = () => {
      q.clearRect(0, 0, Y, C);
      for (let Q = 0; Q < R.length; Q += 1) {
        const L = R[Q];
        L.x += L.vx, L.y += L.vy, (L.x < 0 || L.x > Y) && (L.vx = -L.vx), (L.y < 0 || L.y > C) && (L.vy = -L.vy);
        const i = j.x - L.x, y = j.y - L.y, se = Math.sqrt(i * i + y * y) || 1, ce = (j.radius - se) / j.radius;
        se < j.radius ? (L.x -= i / se * ce * L.density * 0.5, L.y -= y / se * ce * L.density * 0.5, q.fillStyle = T, L.size = Math.min(L.size + 0.1, 2.5)) : (L.x -= (L.x - L.baseX) / 50, L.y -= (L.y - L.baseY) / 50, q.fillStyle = V, L.size = Math.max(L.size - 0.05, 1)), q.beginPath(), q.arc(L.x, L.y, L.size, 0, Math.PI * 2), q.fill();
        for (let ie = Q; ie < R.length; ie += 1) {
          const me = R[ie], fe = L.x - me.x, pe = L.y - me.y, xe = Math.sqrt(fe * fe + pe * pe);
          xe >= we || (q.beginPath(), q.globalAlpha = (1 - xe / we) * 0.4, q.strokeStyle = ue, q.lineWidth = 1, q.moveTo(L.x, L.y), q.lineTo(me.x, me.y), q.stroke(), q.globalAlpha = 1);
        }
      }
      ve = window.requestAnimationFrame(Ce);
    }, Me = (Q) => {
      const L = g.getBoundingClientRect();
      j.x = Q.clientX - L.left, j.y = Q.clientY - L.top;
    }, J = (Q) => {
      if (!Q.touches.length) return;
      const L = g.getBoundingClientRect();
      j.x = Q.touches[0].clientX - L.left, j.y = Q.touches[0].clientY - L.top;
    }, ae = () => {
      j.x = -1e3, j.y = -1e3;
    };
    return Se(), Ce(), window.addEventListener("resize", Se), g.addEventListener("mousemove", Me), g.addEventListener("mouseleave", ae), g.addEventListener("touchmove", J, { passive: !0 }), g.addEventListener("touchend", ae), () => {
      window.cancelAnimationFrame(ve), window.removeEventListener("resize", Se), g.removeEventListener("mousemove", Me), g.removeEventListener("mouseleave", ae), g.removeEventListener("touchmove", J), g.removeEventListener("touchend", ae);
    };
  }, []), ye(() => () => {
    d.current !== null && window.clearTimeout(d.current);
  }, []);
  const M = ge(() => /^1[3-9]\d{9}$/.test(u) && b.length === 6 && f.length >= 6 && f === _, [_, f, u, b]), G = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", x = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: a, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(Ve, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (S) => {
          if (S.preventDefault(), !(!M || I)) {
            D(!0), P(null);
            try {
              const g = await n({ phoneNumber: u, phoneVerificationCode: b, newPassword: f });
              if (!g.ok) {
                P(g.message);
                return;
              }
              N("success");
            } catch {
              P("密码重置失败，请稍后重试。");
            } finally {
              D(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: u, onChange: (S) => {
                c(S.target.value.replace(/\D/g, "").slice(0, 11)), X(""), P(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: G }),
              /* @__PURE__ */ e("span", { className: x, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(u) || K > 0 || I)) {
                D(!0), P(null);
                try {
                  const S = await t(u);
                  if (!S.ok) {
                    P(S.message);
                    return;
                  }
                  B(S.resendAfterSeconds ?? 60), X(S.message ?? "短信验证码已发送");
                } catch {
                  P("验证码发送失败，请稍后重试。");
                } finally {
                  D(!1);
                }
              }
            }, disabled: K > 0 || I || !/^1[3-9]\d{9}$/.test(u), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${K > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: K > 0 ? `${K}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: b, onChange: (S) => {
              p(S.target.value.replace(/\D/g, "").slice(0, 6)), P(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: G }),
            /* @__PURE__ */ e("span", { className: x, children: "短信验证码" })
          ] }),
          z && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: z }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: f, onChange: (S) => {
              E(S.target.value), P(null);
            }, required: !0, placeholder: " ", className: G }),
            /* @__PURE__ */ e("span", { className: x, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: _, onChange: (S) => {
              $(S.target.value), P(null);
            }, required: !0, placeholder: " ", className: `${G} ${_.length > 0 && f !== _ ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: x, children: "确认新密码" }),
            _.length > 0 && f !== _ && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          U && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: U }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !M || I, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: I ? "处理中..." : "重置密码" }),
            I && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => s(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
        ] })
      ] }) : /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-primary-soft opacity-70" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(nt, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          d.current = window.setTimeout(() => s({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const Ft = 10, Ht = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function os({
  currentPath: t,
  projects: n,
  initialChats: s,
  logoUrl: l,
  user: a,
  children: d,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: N,
  canViewAiUsage: u = !0,
  canManageMembers: c = !0,
  chatActions: b = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: p,
  onLogout: f,
  onChatsChange: E,
  onRenameChat: _,
  onTogglePinChat: $,
  onShareChat: I,
  onDeleteChat: D
}) {
  const [K, B] = v(!0), [z, X] = v(240), [U, P] = v(!1), M = he(0), G = he(240), [x, F] = v(() => {
    const o = { unassigned: !0 };
    return n.forEach((H) => {
      o[H.id] = !0;
    }), o;
  }), [re, ne] = v(!1), [S, g] = v(() => [...s]), [q, m] = v(null), [T, V] = v("time"), [ue, ve] = v(!1), [Y, C] = v(null), [R, j] = v(""), [we, Se] = v(!1), [Ce, Me] = v(""), [J, ae] = v(!1), [Q, L] = v(h), [i, y] = v(!1), se = N ?? Q, ce = he(null), ie = he(null), me = he(null), fe = !!(b.rename || b.share || b.pin || b.delete), pe = () => {
    ne(!1), f();
  }, xe = (o) => {
    F((H) => ({ ...H, [o]: !H[o] }));
  }, be = (o) => {
    var oe;
    g((te) => te.filter((De) => De.id !== o)), m(null), Y === o && (C(null), j("")), D == null || D(o), ((oe = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : oe[1]) === o && p("/chat/new", { replace: !0 });
  }, W = (o) => {
    const H = S.find((te) => te.id === o);
    if (!H) return;
    const oe = !H.isPinned;
    g((te) => te.map(
      (We) => We.id === o ? { ...We, isPinned: oe } : We
    )), $ == null || $(o, oe), m(null);
  }, Ke = (o) => {
    C(o.id), j(o.title), m(null);
  }, k = () => {
    C(null), j("");
  }, w = (o) => {
    const H = R.trim();
    H && (g((oe) => oe.map((te) => te.id === o ? { ...te, title: H } : te)), _ == null || _(o, H)), k();
  }, ee = (o, H) => {
    if (o.stopPropagation(), o.key === "Enter") {
      o.preventDefault(), w(H);
      return;
    }
    o.key === "Escape" && (o.preventDefault(), k());
  }, Z = (o) => {
    var H;
    if (Y === o) {
      (H = ce.current) == null || H.focus();
      return;
    }
    p(`/chat/${o}`);
  }, O = (o, H = !1) => Y === o.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (te) => {
        var De;
        te.stopPropagation(), (De = ce.current) == null || De.focus();
      },
      children: [
        H && /* @__PURE__ */ e(yt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: ce,
            value: R,
            onChange: (te) => j(te.target.value),
            onKeyDown: (te) => ee(te, o.id),
            onBlur: () => w(o.id),
            onClick: (te) => te.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    H && /* @__PURE__ */ e(yt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: o.title })
  ] }), A = (o) => {
    M.current = o.clientX, G.current = z, P(!0);
  };
  ye(() => {
    if (!U) return;
    const o = 200, H = 440, oe = (De) => {
      const We = De.clientX - M.current, mr = Math.min(H, Math.max(o, G.current + We));
      X(mr);
    }, te = () => {
      P(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", oe), window.addEventListener("mouseup", te), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", oe), window.removeEventListener("mouseup", te);
    };
  }, [U, z]), ye(() => {
    K || X(240);
  }, [K]), ye(() => {
    E == null || E(S);
  }, [S, E]), ye(() => {
    g([...s]);
  }, [s]), ye(() => {
    if (!Y) return;
    const o = window.requestAnimationFrame(() => {
      var H;
      (H = ce.current) == null || H.focus();
    });
    return () => {
      window.cancelAnimationFrame(o);
    };
  }, [Y]), ye(() => () => {
    ie.current !== null && window.clearTimeout(ie.current), me.current !== null && window.clearTimeout(me.current);
  }, []);
  const Be = () => {
    ve(!0), ie.current !== null && window.clearTimeout(ie.current), ie.current = window.setTimeout(() => {
      ve(!1);
    }, 600);
  }, Ne = () => {
    ae(!0), me.current !== null && window.clearTimeout(me.current), me.current = window.setTimeout(() => {
      ae(!1);
    }, 600);
  };
  ye(() => {
    se || y(!1);
  }, [se]);
  const Le = () => {
    y(!0), p("/ai-usage");
  }, He = ge(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...u ? [{
      key: "ai-usage",
      label: "AI用量"
    }] : [],
    ...c ? [{
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
  ], [c, u]), Te = (o) => {
    if (ne(!1), o.key === "skills") {
      p("/skills");
      return;
    }
    if (o.key === "ai-usage") {
      p("/ai-usage");
      return;
    }
    if (o.key === "members") {
      p("/members");
      return;
    }
    if (o.key === "system-settings") {
      p("/system-settings");
      return;
    }
    o.key === "logout" && pe();
  }, le = ge(() => b.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(er, { size: 14 }), danger: !0 }] : [], [b.delete]), de = (o) => {
    const H = [];
    return b.rename && H.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(Ir, { size: 14 }) }), b.share && H.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(Rr, { size: 14 }) }), b.pin && H.push({
      key: "pin",
      label: o.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(yt, { size: 14 })
    }), H;
  }, Re = (o, H) => {
    const oe = Ht(o);
    return !fe && !oe ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${oe ? "ml-6" : "ml-2"}`, children: [
      oe && !H && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      fe && /* @__PURE__ */ e(
        pt,
        {
          open: H,
          onOpenChange: (te) => m(te ? o.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, z - 56)),
          trigger: /* @__PURE__ */ e(Br, { size: 14 }),
          onTriggerClick: (te) => {
            te.stopPropagation();
          },
          items: de(o),
          footerItems: le,
          onItemClick: (te, De) => {
            if (De.stopPropagation(), te.key === "rename") {
              Ke(o);
              return;
            }
            if (te.key === "share") {
              I ? I(o.id) : p(`/chat/${o.id}?share=1`), m(null);
              return;
            }
            if (te.key === "pin") {
              W(o.id);
              return;
            }
            if (te.key === "delete") {
              be(o.id);
              return;
            }
            m(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${H ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, $e = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(gt, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(bt, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], ke = ge(() => {
    const o = t.match(/^\/chat\/([^/]+)$/);
    return o ? S.find((H) => H.id === o[1]) ?? null : null;
  }, [S, t]), ze = ge(
    () => S.filter((o) => o.isPinned),
    [S]
  ), _e = ge(
    () => S.filter((o) => !o.isPinned),
    [S]
  ), Ae = ge(
    () => T === "time" ? ze.slice(0, Ft) : ze,
    [ze, T]
  ), Oe = ge(() => {
    if (T !== "time") return [];
    const o = Math.max(Ft - Ae.length, 0);
    return _e.slice(0, o);
  }, [T, _e, Ae.length]), qe = ge(
    () => Ae.length + Oe.length,
    [Ae.length, Oe.length]
  ), Ye = T === "time" && S.length > qe, et = ge(() => new Map(n.map((o) => [o.id, o.name])), [n]), at = Ce.trim().toLowerCase(), st = ge(() => at ? S.filter((o) => {
    const H = o.projectId ? et.get(o.projectId) ?? "未分组" : "未分组";
    return `${o.title} ${H} ${o.date}`.toLowerCase().includes(at);
  }) : S, [S, at, et]);
  ye(() => {
    if (!ke) return;
    const o = ke.projectId ?? "unassigned";
    F((H) => H[o] !== !1 ? H : { ...H, [o]: !0 });
  }, [ke]);
  const tt = () => {
    Me(""), Se(!0);
  }, lt = () => {
    Se(!1), ae(!1), me.current !== null && (window.clearTimeout(me.current), me.current = null);
  }, Ue = (o) => {
    Se(!1), p(`/chat/${o}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: K ? z : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${K ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: z, minWidth: z },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => p("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: l, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => B(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Ar, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => p("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(Pr, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: $e.map((o) => {
                  const H = o.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => p(o.path),
                      className: `nav-item ${H ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        o.icon,
                        /* @__PURE__ */ e("span", { children: o.label })
                      ]
                    },
                    o.path
                  );
                }) }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    onScroll: Be,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ue ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Ae.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Ae.map((o) => {
                          const H = t === `/chat/${o.id}`, oe = q === o.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Z(o.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Y === o.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : H ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                O(o, T !== "time"),
                                Y !== o.id && Re(o, oe)
                              ]
                            }
                          ) }, o.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      T === "project" && n.map((o) => {
                        const H = S.filter((te) => te.projectId === o.id && !te.isPinned), oe = x[o.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => xe(o.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(gt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: oe ? /* @__PURE__ */ e(mt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(dt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: o.name })
                              ]
                            }
                          ),
                          oe && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: H.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : H.map((te) => {
                            const De = t === `/chat/${te.id}`, We = q === te.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Z(te.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Y === te.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : De ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  O(te),
                                  Y !== te.id && Re(te, We)
                                ]
                              }
                            ) }, te.id);
                          }) })
                        ] }, o.id);
                      }),
                      T === "project" && (() => {
                        const o = S.filter((oe) => !oe.projectId && !oe.isPinned);
                        if (o.length === 0) return null;
                        const H = x.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => xe("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(gt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: H ? /* @__PURE__ */ e(mt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(dt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          H && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: o.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : o.map((oe) => {
                            const te = t === `/chat/${oe.id}`, De = q === oe.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Z(oe.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Y === oe.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : te ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  O(oe),
                                  Y !== oe.id && Re(oe, De)
                                ]
                              }
                            ) }, oe.id);
                          }) })
                        ] });
                      })(),
                      T === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        Oe.map((o) => {
                          const H = t === `/chat/${o.id}`, oe = q === o.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Z(o.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Y === o.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : H ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                O(o),
                                Y !== o.id && Re(o, oe)
                              ]
                            }
                          ) }, o.id);
                        }),
                        Ye && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: tt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(dt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                se && !i && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(Er, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Le,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  pt,
                  {
                    open: re,
                    onOpenChange: ne,
                    placement: "top-start",
                    width: z - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: a.avatarUrl ? /* @__PURE__ */ e("img", { src: a.avatarUrl, alt: `${a.name}头像`, className: "h-full w-full object-cover" }) : a.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: a.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(_r, { size: 18 }) })
                    ] }),
                    items: He,
                    onItemClick: Te,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          K && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: A,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${K ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof d == "function" ? d({ isSidebarOpen: K, setIsSidebarOpen: B, chats: S, setChats: g, setAiUsageWarningActive: L }) : d }) }) }),
    /* @__PURE__ */ e(
      $t,
      {
        visible: we,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: lt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Ze,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: Ce,
                onChange: (o) => Me(o.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          st.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ne,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${J ? "is-scrolling is-scrolling-thin" : ""}`,
              children: st.map((o) => {
                const H = o.projectId ? et.get(o.projectId) ?? "未分组" : "未分组", oe = Ht(o);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => Ue(o.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: o.title }),
                        oe && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: H }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: o.date })
                      ] })
                    ]
                  },
                  o.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(zt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function cs({
  projects: t,
  selectedProjectId: n,
  disabled: s = !1,
  embedded: l = !1,
  isSidebarOpen: a = !0,
  skillOptions: d,
  fileOptions: h,
  quickPrompts: N,
  uploadAccept: u,
  validateUploadFile: c,
  onUploadValidationError: b,
  onSelectProject: p,
  onCreateProject: f,
  onOpenSidebar: E,
  onSelectQuickPrompt: _,
  onSend: $
}) {
  const [I, D] = v(!1), [K, B] = v(!1), [z, X] = v(""), U = he(null), P = he(null), M = ge(
    () => t.find((g) => g.id === n) ?? null,
    [t, n]
  ), G = ge(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !M
    },
    ...t.map((g) => ({
      key: g.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: g.name }),
      active: (M == null ? void 0 : M.id) === g.id
    }))
  ], [t, M]), x = ge(() => f ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(tr, { size: 16 }) }] : [], [f]), F = () => {
    B(!1), X("");
  }, re = (g) => {
    if (g.key === "create") {
      B(!0), X("");
      return;
    }
    const q = g.key === "none" ? null : String(g.key);
    p(q), D(!1);
  }, ne = () => {
    const g = z.trim();
    if (!g) return;
    const q = t.find(
      (m) => m.name.trim().toLowerCase() === g.toLowerCase()
    );
    q ? p(q.id) : f == null || f(g), F(), D(!1);
  };
  ye(() => {
    if (!K) return;
    const g = (q) => {
      var T, V;
      const m = q.target;
      (T = P.current) != null && T.contains(m) || (V = U.current) != null && V.contains(m) || (F(), D(!1));
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [K]);
  const S = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: U, className: "relative", children: K && /* @__PURE__ */ e(
        "div",
        {
          ref: P,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                ar,
                {
                  value: z,
                  onChange: (g) => X(g.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Fe, { type: "secondary", size: "small", onClick: F, children: "取消" }),
              /* @__PURE__ */ e(
                Fe,
                {
                  type: "primary",
                  size: "small",
                  onClick: ne,
                  disabled: !z.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        dr,
        {
          onSend: $,
          disabled: s,
          skillOptions: d,
          fileOptions: h,
          uploadAccept: u,
          validateUploadFile: c,
          onUploadValidationError: b,
          leadingControls: /* @__PURE__ */ e(
            pt,
            {
              open: I,
              onOpenChange: (g) => {
                !g && K || (D(g), g ? B(!1) : F());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: M ? M.name : "工作项目" }),
                /* @__PURE__ */ e(mt, { size: 14 })
              ] }),
              items: G,
              footerItems: x,
              onItemClick: re,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(
      ur,
      {
        onSelect: _ ?? $,
        prompts: N,
        disabled: s
      }
    )
  ] });
  return l ? S : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Zn,
      {
        isSidebarOpen: a,
        onOpenSidebar: E ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: S })
  ] });
}
const ba = "_shell_63t8u_1", ga = "_header_63t8u_5", ya = "_headerActions_63t8u_9", va = "_saveError_63t8u_13", wa = "_viewport_63t8u_17", Na = "_editorCanvas_63t8u_21", ka = "_titleInput_63t8u_25", Ta = "_milkdownHost_63t8u_29", Xe = {
  shell: ba,
  header: ga,
  headerActions: ya,
  saveError: va,
  viewport: wa,
  editorCanvas: Na,
  titleInput: ka,
  milkdownHost: Ta
}, Ca = {
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
}, qt = (t, n) => t.replace("<svg", `<svg class="${n}"`), Tt = (t) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${t}</tspan>
    </text>
  </svg>
`, Sa = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, Ma = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, $a = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Ct = (t) => `chatui-document-menu-type-${t}`;
function ds({
  title: t,
  initialMarkdown: n = "",
  createdByName: s,
  updatedByName: l,
  updatedAt: a,
  index: d,
  attachments: h = [],
  attachmentAccept: N,
  attachmentUnavailableHint: u,
  saving: c = !1,
  saveError: b,
  layout: p = "page",
  onTitleChange: f,
  onMarkdownChange: E,
  onUploadAttachments: _,
  onDeleteAttachment: $,
  onSave: I,
  onClose: D
}) {
  const K = he(null), B = he(null), z = he(n), X = he(E), [U, P] = v(!1), [M, G] = v(null), [x, F] = v(""), re = p === "page" ? "px-[120px]" : "px-6 md:px-8";
  ye(() => {
    X.current = E;
  }, [E]), ye(() => {
    const g = K.current;
    if (!g) return;
    const q = new vt({
      root: g,
      defaultValue: z.current,
      features: {
        [vt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [vt.Feature.BlockEdit]: {
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
          buildMenu: (k) => {
            const w = new Map(
              k.build().flatMap((Te) => Te.items).map((Te) => [Te.key, Te])
            ), ee = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), Z = (Te) => {
              const le = Te.get(wt), de = Y, $e = (de != null && de.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? de : de == null ? void 0 : de.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (de instanceof HTMLElement ? de : null);
              if (!$e) return le;
              try {
                const ke = le.posAtDOM($e, 0), ze = le.state.doc.resolve(
                  Math.min(
                    Math.max(ke, 0),
                    le.state.doc.content.size
                  )
                );
                le.dispatch(
                  le.state.tr.setSelection(
                    Pt.near(ze)
                  )
                );
              } catch {
              }
              return le;
            }, O = (Te) => {
              const le = Z(Te), de = Nt.type(Te), Re = (ze) => {
                const { $from: _e } = le.state.selection;
                for (let Ae = _e.depth; Ae > 0; Ae -= 1)
                  if (_e.node(Ae).type.name === ze) return !0;
                return !1;
              };
              for (let ze = 0; ze < 10 && !(!Re(de.name) || !Wr(de)(
                le.state,
                le.dispatch
              )); ze += 1)
                ;
              for (let ze = 0; ze < 10 && !(!Re("blockquote") || !Hr(le.state, le.dispatch)); ze += 1)
                ;
              const $e = Kr.type(Te), ke = le.state.selection.$from.parent;
              ke.isTextblock && ke.type !== $e && Te.get(Fr).call(Or.key, {
                nodeType: $e
              });
            }, A = (Te) => {
              const le = Z(Te), { selection: de } = le.state, Re = Nt.type(Te), { $from: $e } = de;
              let ke = -1;
              for (let _e = $e.depth; _e > 0; _e -= 1)
                if ($e.node(_e).type.name === Re.name) {
                  ke = _e;
                  break;
                }
              if (ke > 0) {
                const _e = ke - 1, Ae = _e > 0 && $e.node(_e).childCount === 1 ? _e : ke;
                le.dispatch(
                  le.state.tr.delete(
                    $e.before(Ae),
                    $e.after(Ae)
                  )
                );
                return;
              }
              if (!de.empty) {
                le.dispatch(
                  le.state.tr.delete(de.from, de.to)
                );
                return;
              }
              const ze = Math.min(1, $e.depth);
              ze < 1 || le.dispatch(
                le.state.tr.delete(
                  $e.before(ze),
                  $e.after(ze)
                )
              );
            }, Be = (Te, le, de) => {
              const Re = w.get(le);
              if (!Re) return;
              const { key: $e, ...ke } = Re, ze = (de == null ? void 0 : de.icon) ?? ke.icon, _e = [
                Ct(le),
                de == null ? void 0 : de.iconClass
              ].filter(Boolean).join(" "), Ae = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(le), Oe = ee.has(le) ? (qe) => {
                var lt;
                if (O(qe), !Ae) {
                  if (le === "quote") {
                    const Ue = qe.get(wt), { $from: o } = Ue.state.selection, H = o.parent, oe = o.before(o.depth), te = Ue.state.schema.nodes.blockquote;
                    if (!te) return;
                    const De = te.create(null, H), We = Ue.state.tr.replaceWith(
                      oe,
                      oe + H.nodeSize,
                      De
                    );
                    We.setSelection(
                      Pt.near(
                        We.doc.resolve(
                          Math.min(
                            oe + 2,
                            We.doc.content.size
                          )
                        )
                      )
                    ), Ue.dispatch(We);
                    return;
                  }
                  (lt = ke.onRun) == null || lt.call(ke, qe);
                  return;
                }
                const Ye = qe.get(wt), et = le === "ordered-list" ? Ur.type(qe) : Vr.type(qe);
                if (!qr(et)(
                  Ye.state,
                  Ye.dispatch
                ) || le !== "task-list") return;
                const st = Nt.type(qe), { $from: tt } = Ye.state.selection;
                for (let Ue = tt.depth; Ue > 0; Ue -= 1) {
                  const o = tt.node(Ue);
                  if (o.type !== st) continue;
                  const H = tt.before(Ue);
                  Ye.dispatch(
                    Ye.state.tr.setNodeMarkup(H, void 0, {
                      ...o.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : ke.onRun;
              Te.addItem(le, {
                ...ke,
                label: (de == null ? void 0 : de.label) ?? ke.label,
                icon: qt(ze, _e),
                onRun: Oe
              });
            };
            k.clear();
            const Ne = k.addGroup("basic", "基础");
            [
              {
                key: "h1",
                icon: Tt(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: Tt(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: Tt(3),
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
                icon: Sa,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: Ma,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: Te, icon: le, label: de }) => {
              Be(Ne, Te, { icon: le, label: de });
            });
            const Le = k.addGroup("common", "常用");
            Be(Le, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), Be(Le, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), k.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: qt(
                $a,
                "chatui-document-menu-action-delete"
              ),
              onRun: A
            });
          }
        }
      }
    });
    q.on((k) => {
      k.markdownUpdated((w, ee, Z) => {
        ee !== Z && X.current(ee);
      });
    });
    const m = g.ownerDocument;
    let T = "", V = null, ue = null, ve = !1, Y = null, C = null, R = null, j = null, we = null;
    const Se = (k) => {
      const w = k == null ? void 0 : k.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !w || !w.closest(".ProseMirror") ? null : w.matches("h1") ? "h1" : w.matches("h2") ? "h2" : w.matches("h3") ? "h3" : w.matches("blockquote") ? "quote" : w.matches("pre, .milkdown-code-block") || w.querySelector("pre, .milkdown-code-block") ? "code" : w.querySelector('input[type="checkbox"]') ? "task-list" : w.querySelector(".label.ordered") ? "ordered-list" : w.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Ce = () => g.querySelector(".ProseMirror"), Me = (k) => {
      const w = Ce();
      if (!k || !(w != null && w.contains(k))) return null;
      const ee = k.closest(".milkdown-list-item-block");
      if (ee && w.contains(ee)) return ee;
      let Z = k;
      for (; Z != null && Z.parentElement && Z.parentElement !== w; )
        Z = Z.parentElement;
      return !Z || Z.parentElement !== w || Z.classList.contains("prosemirror-virtual-cursor") ? null : Z;
    }, J = () => {
      const k = Ce();
      return k ? Array.from(k.children).flatMap((w) => {
        if (w.classList.contains("prosemirror-virtual-cursor")) return [];
        const ee = Array.from(
          w.querySelectorAll(".milkdown-list-item-block")
        );
        return ee.length ? ee : [w];
      }) : [];
    }, ae = (k) => {
      var Z;
      const w = J(), ee = w.map((O) => ({ block: O, rect: O.getBoundingClientRect() })).filter(({ rect: O }) => k >= O.top && k <= O.bottom).sort((O, A) => O.rect.height - A.rect.height);
      return ee[0] ? ee[0].block : ((Z = w.map((O) => {
        const A = O.getBoundingClientRect(), Be = Math.min(
          Math.abs(k - A.top),
          Math.abs(k - A.bottom)
        );
        return { block: O, distance: Be };
      }).sort((O, A) => O.distance - A.distance)[0]) == null ? void 0 : Z.block) ?? null;
    }, Q = (k) => {
      var A, Be;
      const w = m.querySelector(
        ".milkdown-slash-menu"
      );
      w == null || w.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (Ne) => Ne.removeAttribute("data-chatui-selected")
      ), k && ((Be = (A = w == null ? void 0 : w.querySelector(`svg.${Ct(k)}`)) == null ? void 0 : A.closest("li")) == null || Be.setAttribute("data-chatui-selected", "true"));
      const ee = m.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!ee) return;
      T || (T = ee.innerHTML);
      const Z = k ? w == null ? void 0 : w.querySelector(
        `svg.${Ct(k)}`
      ) : null, O = k ?? "default";
      ee.dataset.chatuiBlockType !== O && (ee.innerHTML = (Z == null ? void 0 : Z.outerHTML) ?? T, ee.dataset.chatuiBlockType = O);
    }, L = (k) => {
      k !== ue && (ue = k, V = Se(k)), Q(V);
    }, i = () => {
      var ee;
      const k = (ee = m.getSelection()) == null ? void 0 : ee.anchorNode, w = k instanceof Element ? k : k == null ? void 0 : k.parentElement;
      L(Me(w ?? null));
    }, y = () => {
      const k = C, w = m.querySelector(
        ".milkdown-slash-menu"
      );
      if (!k || !w || w.dataset.show !== "true") return;
      const ee = w.getBoundingClientRect();
      if (!ee.width || !ee.height) return;
      const Z = k.getBoundingClientRect(), O = m.defaultView, A = (O == null ? void 0 : O.innerWidth) ?? m.documentElement.clientWidth, Be = (O == null ? void 0 : O.innerHeight) ?? m.documentElement.clientHeight, Ne = 12, Le = 8, He = Math.max(
        Ne,
        A - ee.width - Ne
      ), Te = Math.max(
        Ne,
        Be - ee.height - Ne
      ), le = (Ae) => Math.min(Math.max(Ae, Ne), He), de = (Ae) => Math.min(Math.max(Ae, Ne), Te);
      let Re = "left", $e = Z.left - ee.width - Le, ke = de(Z.top);
      if ($e < Ne) {
        const Ae = Z.top - Le - Ne, Oe = Be - Z.bottom - Le - Ne, qe = Oe >= ee.height || Oe >= Ae;
        Re = qe ? "bottom" : "top", $e = le(Z.left), ke = de(qe ? Z.bottom + Le : Z.top - ee.height - Le);
      }
      const ze = `${$e}px`, _e = `${ke}px`;
      w.style.getPropertyValue("--chatui-block-menu-left") !== ze && w.style.setProperty("--chatui-block-menu-left", ze), w.style.getPropertyValue("--chatui-block-menu-top") !== _e && w.style.setProperty("--chatui-block-menu-top", _e), w.dataset.chatuiPlacement = Re;
    }, se = () => {
      const k = m.querySelector(
        ".milkdown-slash-menu"
      );
      k && (k.style.removeProperty("--chatui-block-menu-left"), k.style.removeProperty("--chatui-block-menu-top"), delete k.dataset.chatuiPlacement);
    }, ce = (k) => {
      k !== we && (we == null || we.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), we = k, we == null || we.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, ie = () => {
      j !== null && window.cancelAnimationFrame(j), j = window.requestAnimationFrame(() => {
        j = null, y();
      });
    }, me = () => {
      C = null, ve = !1, Y = null, ce(null), q.editor.action((k) => {
        k.get("menuAPICtx").hide();
      }), se();
    }, fe = (k) => {
      const w = k.target instanceof Element ? k.target : null, ee = m.querySelector(
        ".milkdown-slash-menu"
      );
      if (ee) {
        const A = ee.getBoundingClientRect(), Be = A.width > 0 && A.height > 0, Ne = k.clientX >= A.left && k.clientX <= A.right && k.clientY >= A.top && k.clientY <= A.bottom;
        if (Be) {
          if (Ne) {
            ce(
              (w == null ? void 0 : w.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), ve = !0;
            return;
          }
          if (ce(null), w != null && w.closest(".milkdown-block-handle")) return;
          const Le = Ce(), He = w && (Le != null && Le.contains(w)) ? Me(w) ?? ae(k.clientY) : null;
          if (He && Y && He !== Y) {
            me();
            return;
          }
          if (He === Y) return;
          ve && me();
          return;
        }
        ve = !1, ce(null);
      }
      if (w != null && w.closest(".milkdown-block-handle")) {
        Q(V);
        return;
      }
      const Z = Ce();
      if (!w || !(Z != null && Z.contains(w))) return;
      const O = Me(w) ?? ae(k.clientY);
      L(O);
    }, pe = (k) => {
      const w = k.target instanceof Element ? k.target : null;
      ce(
        (w == null ? void 0 : w.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, xe = (k) => {
      const w = k.target instanceof Element ? k.target : null, ee = w == null ? void 0 : w.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!ee) return;
      const Z = k.relatedTarget instanceof Element ? k.relatedTarget : null;
      if (Z && ee.contains(Z)) return;
      const O = Z == null ? void 0 : Z.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      ce(O ?? null);
    }, be = (k) => {
      const w = k.target instanceof Element ? k.target : null, ee = w == null ? void 0 : w.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (ee) {
        const Z = V;
        C = ee, Y = ue, window.setTimeout(() => {
          Q(Z), ie();
        }, 0);
      }
    }, W = (k) => {
      k.key === "/" && window.setTimeout(i, 0);
    };
    m.addEventListener("pointermove", fe), m.addEventListener("pointerover", pe), m.addEventListener("pointerout", xe), m.addEventListener("click", be), g.addEventListener("keyup", W);
    const Ke = q.create();
    return Ke.then(() => {
      var w;
      (w = g.querySelector(".ProseMirror")) == null || w.focus();
      const k = m.querySelector(
        ".milkdown-slash-menu"
      );
      k && (R = new MutationObserver(() => {
        if (k.dataset.show === "true" && C) {
          ie();
          return;
        }
        k.dataset.show !== "true" && (C = null, Y = null, ce(null), se());
      }), R.observe(k, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      })), i();
    }), () => {
      m.removeEventListener("pointermove", fe), m.removeEventListener(
        "pointerover",
        pe
      ), m.removeEventListener("pointerout", xe), m.removeEventListener("click", be), g.removeEventListener("keyup", W), Ke.then(() => {
        R == null || R.disconnect(), j !== null && window.cancelAnimationFrame(j), q.destroy();
      });
    };
  }, []);
  const ne = async (g) => {
    const q = Array.from(g.target.files ?? []);
    if (g.target.value = "", !(!q.length || !_)) {
      P(!0), F("");
      try {
        await _(q);
      } catch (m) {
        F(
          m instanceof Error ? m.message : "附件上传失败"
        );
      } finally {
        P(!1);
      }
    }
  }, S = async (g) => {
    if ($) {
      G(g), F("");
      try {
        await $(g);
      } catch (q) {
        F(
          q instanceof Error ? q.message : "附件删除失败"
        );
      } finally {
        G(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: Xe.shell, "aria-label": "项目文档编辑器", children: [
    /* @__PURE__ */ e("header", { className: Xe.header, children: /* @__PURE__ */ r("div", { className: Xe.headerActions, children: [
      /* @__PURE__ */ e(
        Fe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: c,
          onClick: D,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Fe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: c,
          onClick: I,
          children: c ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${Xe.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          b && /* @__PURE__ */ e("div", { className: Xe.saveError, children: b }),
          /* @__PURE__ */ r("div", { className: Xe.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${re}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (g) => f(g.target.value),
                  placeholder: "请输入标题",
                  className: Xe.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                or,
                {
                  createdByName: s,
                  updatedByName: l,
                  updatedAt: a,
                  index: d
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: K,
                  className: `${Xe.milkdownHost} ${cr.editor} ${re} chatui-project-document-editor`,
                  style: Ca
                }
              ),
              _ && /* @__PURE__ */ e(
                "input",
                {
                  ref: B,
                  type: "file",
                  multiple: !0,
                  accept: N,
                  className: "hidden",
                  onChange: (g) => {
                    ne(g);
                  }
                }
              ),
              /* @__PURE__ */ e(
                ir,
                {
                  attachments: h,
                  className: `${p === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: U,
                  deletingAttachmentId: M,
                  unavailableHint: u,
                  error: x,
                  onRequestUpload: _ ? () => {
                    var g;
                    return (g = B.current) == null ? void 0 : g.click();
                  } : void 0,
                  onDeleteAttachment: $ ? (g) => {
                    S(g);
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
const za = { low: "低风险", medium: "中风险", high: "高风险" }, La = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function us({
  isSidebarOpen: t,
  skills: n,
  loading: s = !1,
  error: l,
  pendingSkillIds: a = [],
  onOpenSidebar: d,
  onInstall: h,
  onUninstall: N,
  onRetry: u
}) {
  const [c, b] = v("installed"), [p, f] = v(""), [E, _] = v(!1), [$, I] = v([]), [D, K] = v(null), B = ge(() => new Set(a), [a]), z = ge(() => {
    const x = p.trim().toLowerCase();
    return n.filter((F) => c === "installed" !== F.installed ? !1 : x ? [F.name, F.source, F.description, ...F.tags].join(" ").toLowerCase().includes(x) : !0);
  }, [c, p, n]), X = (x) => {
    b(x), _(!1), I([]);
  }, U = () => {
    _((x) => !x), I([]);
  }, P = (x) => I((F) => F.includes(x) ? F.filter((re) => re !== x) : [...F, x]), M = (x) => x.installed ? N([x.id]) : h([x.id]), G = () => {
    $.length && (c === "installed" ? N($) : h($), I([]), _(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: d, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(Jt, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${E ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ r("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Ze, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: p, onChange: (x) => f(x.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => X("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${c === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => X("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${c === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: E, onChange: (x) => {
                _(x.target.checked), I([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          u && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: u, children: "重新加载" })
        ] }),
        !l && s && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (x, F) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, F)) }),
        !l && !s && z.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": a.length > 0, children: z.map((x) => {
          const F = $.includes(x.id), re = B.has(x.id), ne = F ? "border-skillSelectedBorder bg-skillSelectedSurface" : D === x.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${ne}`, onMouseEnter: () => K(x.id), onMouseLeave: () => K((S) => S === x.id ? null : S), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: x.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: x.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${La[x.riskLevel]}`, children: za[x.riskLevel] }),
                E && /* @__PURE__ */ e("button", { type: "button", onClick: () => P(x.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": F ? `取消选择 ${x.name}` : `选择 ${x.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${F ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: x.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: x.tags.map((S) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: S }, `${x.id}-${S}`)) }),
              !E && /* @__PURE__ */ e("button", { type: "button", disabled: re, onClick: () => M(x), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${D === x.id || re ? "inline-flex" : "hidden"} ${x.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: re ? "处理中..." : x.installed ? "卸载" : "安装" })
            ] })
          ] }, x.id);
        }) }) : !l && !s ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    E && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        $.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: U, disabled: a.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: G, disabled: !$.length || a.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: a.length > 0 ? "处理中..." : c === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  os as A,
  $n as B,
  ua as C,
  Ya as D,
  ma as E,
  is as F,
  Rn as G,
  ir as H,
  dr as I,
  ds as J,
  or as K,
  ss as L,
  lr as M,
  ns as N,
  rs as O,
  ra as P,
  ur as Q,
  ls as R,
  us as S,
  St as T,
  da as U,
  ca as V,
  pt as a,
  Fe as b,
  Oa as c,
  En as d,
  $t as e,
  ar as f,
  zt as g,
  _n as h,
  An as i,
  Ka as j,
  gn as k,
  sa as l,
  pa as m,
  as as n,
  la as o,
  Xa as p,
  Qn as q,
  In as r,
  cs as s,
  es as t,
  ts as u,
  Ja as v,
  Za as w,
  Ga as x,
  Zn as y,
  Qa as z
};
