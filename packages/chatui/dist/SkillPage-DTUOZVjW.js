import { jsxs as r, Fragment as Xe, jsx as e } from "react/jsx-runtime";
import Re, { useMemo as be, useState as y, useRef as fe, useCallback as Me, useEffect as ge, useLayoutEffect as Xt, forwardRef as cr, useId as _r } from "react";
import $e from "classnames";
import { Check as ft, Copy as Pt, RefreshCcw as Ir, ThumbsUp as Rr, ThumbsDown as Dr, ArrowUpRight as jr, Info as Fr, Ban as Hr, TriangleAlert as Wt, CircleCheckBig as Lt, ShieldCheck as dr, CircleHelp as ur, FileText as Bt, LoaderCircle as mr, Puzzle as pr, AtSign as hr, AlertCircle as qr, Paperclip as fr, ArrowRight as xr, ChevronDown as zt, ChevronRight as $t, CircleX as br, Sparkles as gr, Loader2 as it, Clock3 as _t, Search as dt, BookOpen as Gt, ListChecks as Wr, Globe as Ur, Minus as Vr, Menu as yr, Upload as Or, Trash2 as vr, CheckCircle2 as gt, SearchX as Kr, FlaskConical as Xr, X as bt, Plus as wr, Square as Gr, Send as Yr, UserPlus as Qr, Building2 as Zr, Folder as Dt, PanelLeftClose as Jr, SquarePen as en, AlertTriangle as tn, Settings as rn, Pin as jt, MoreHorizontal as nn, Pencil as an, Share2 as sn } from "lucide-react";
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
const xn = "_button_3tg6r_1", bn = "_primary_3tg6r_5", gn = "_disabled_3tg6r_9", yn = "_secondary_3tg6r_17", vn = "_ghost_3tg6r_25", wn = "_danger_3tg6r_33", Nn = "_small_3tg6r_41", kn = "_medium_3tg6r_45", Tn = "_large_3tg6r_49", Cn = "_roundedSquare_3tg6r_53", Sn = "_roundedSmall_3tg6r_57", Mn = "_roundedMedium_3tg6r_61", $n = "_roundedLarge_3tg6r_62", Ln = "_roundedFull_3tg6r_66", zn = "_loadingSpinner_3tg6r_67", An = "_loading_3tg6r_67", En = "_fullWidth_3tg6r_90", Pn = "_icon_3tg6r_94", Be = {
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
  primary: Be.primary,
  secondary: Be.secondary,
  ghost: Be.ghost,
  danger: Be.danger
}, _n = {
  small: Be.small,
  medium: Be.medium,
  large: Be.large
}, In = {
  square: Be.roundedSquare,
  small: Be.roundedSmall,
  medium: Be.roundedMedium,
  large: Be.roundedLarge,
  full: Be.roundedFull
}, He = Re.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: s,
    loading: o,
    disabled: l = !1,
    children: u,
    icon: f,
    iconPosition: N = "left",
    className: m,
    fullWidth: p = !1,
    rounded: x = "medium",
    onClick: h,
    ...k
  }, $) => {
    const H = s ?? o ?? !1, z = l || H, D = be(() => H ? /* @__PURE__ */ r(Xe, { children: [
      /* @__PURE__ */ e("span", { className: Be.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: u })
    ] }) : f ? /* @__PURE__ */ r(Xe, { children: [
      N === "left" && /* @__PURE__ */ e("span", { className: Be.icon, children: f }),
      u && /* @__PURE__ */ e("span", { children: u }),
      N === "right" && /* @__PURE__ */ e("span", { className: Be.icon, children: f })
    ] }) : u, [u, H, f, N]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: $,
        className: $e(
          Be.button,
          Bn[t],
          _n[n],
          In[x],
          {
            [Be.fullWidth]: p,
            [Be.loading]: H,
            [Be.disabled]: z
          },
          m
        ),
        disabled: z,
        onClick: h,
        ...k,
        children: D
      }
    );
  }
);
He.displayName = "BaseButton";
const Rn = { small: "h-8", medium: "h-9", large: "h-14" }, Tr = Re.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: s,
    defaultValue: o,
    disabled: l = !1,
    readOnly: u = !1,
    error: f = !1,
    size: N = "medium",
    prefix: m,
    suffix: p,
    prefixIcon: x,
    suffixIcon: h,
    onChange: k,
    onFocus: $,
    onBlur: H,
    onClear: z,
    className: D,
    containerClassName: V,
    clearable: Q = !1,
    label: F,
    helperText: E,
    ...J
  }, G) => {
    const [j, M] = y(!1), ee = fe(null), b = Me((ce) => {
      ee.current = ce, typeof G == "function" ? G(ce) : G && (G.current = ce);
    }, [G]), X = Me(() => {
      var S, A;
      const ce = ee.current;
      ce && ((A = (S = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : S.set) == null || A.call(ce, ""), ce.dispatchEvent(new Event("input", { bubbles: !0 })), ce.focus(), z == null || z());
    }, [z]), le = be(
      () => {
        var ce;
        return Q && j && String(s ?? ((ce = ee.current) == null ? void 0 : ce.value) ?? "").length > 0;
      },
      [Q, j, s]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      F && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: F }),
      /* @__PURE__ */ r(
        "div",
        {
          className: $e(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Rn[N],
            !l && !f && "hover:border-controlBorder",
            j && !l && !f && "border-primary ring-2 ring-brandFocus",
            f && "border-danger",
            f && j && "ring-2 ring-dangerFocus",
            l && "cursor-not-allowed bg-surfaceMuted",
            V
          ),
          children: [
            (m || x) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: m || x }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: b,
                type: t,
                placeholder: n,
                value: s,
                defaultValue: o,
                disabled: l,
                readOnly: u,
                className: $e("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", D),
                onFocus: (ce) => {
                  M(!0), $ == null || $(ce);
                },
                onBlur: (ce) => {
                  M(!1), H == null || H(ce);
                },
                onChange: k,
                ...J
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              le && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (ce) => ce.preventDefault(), onClick: X, "aria-label": "清空", children: "✕" }),
              p || h
            ] })
          ]
        }
      ),
      E && /* @__PURE__ */ e("div", { className: $e("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: E })
    ] });
  }
);
Tr.displayName = "BaseInput";
const Dn = { small: "h-8", medium: "h-9", large: "h-14" }, jn = Re.forwardRef(
  ({ options: t = [], value: n, defaultValue: s, placeholder: o, disabled: l = !1, error: u = !1, size: f = "medium", label: N, helperText: m, onChange: p, className: x, ...h }, k) => {
    const $ = Me((H) => {
      const z = H.target.value, D = t.find((V) => String(V.value) === z);
      p == null || p(z === "" ? "" : (D == null ? void 0 : D.value) ?? z);
    }, [p, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      N && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: N }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: k,
            className: $e(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              u && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Dn[f],
              x
            ),
            value: n ?? s ?? "",
            disabled: l,
            onChange: $,
            ...h,
            children: [
              o && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: o }),
              t.map((H) => /* @__PURE__ */ e("option", { value: H.value, disabled: H.disabled, children: H.label }, H.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      m && /* @__PURE__ */ e("div", { className: $e("text-xs leading-6", u ? "text-danger" : "text-mutedText"), children: m })
    ] });
  }
);
jn.displayName = "BaseSelect";
const Fn = "_container_ykn59_1", Hn = "_item_ykn59_10", qn = "_itemActive_ykn59_27", Wn = "_itemDisabled_ykn59_27", Un = "_sizeSmall_ykn59_43", Vn = "_sizeMiddle_ykn59_49", On = "_sizeLarge_ykn59_55", ct = {
  container: Fn,
  item: Hn,
  itemActive: qn,
  itemDisabled: Wn,
  sizeSmall: Un,
  sizeMiddle: Vn,
  sizeLarge: On
}, Kn = {
  small: ct.sizeSmall,
  middle: ct.sizeMiddle,
  large: ct.sizeLarge
};
function fs({
  options: t,
  value: n,
  defaultValue: s,
  onChange: o,
  size: l = "middle",
  disabled: u = !1,
  className: f
}) {
  var h;
  const [N, m] = y(
    s ?? ((h = t[0]) == null ? void 0 : h.value) ?? ""
  ), p = n ?? N, x = (k) => {
    u || (n === void 0 && m(k), o == null || o(k));
  };
  return /* @__PURE__ */ e("div", { className: $e(ct.container, Kn[l], f), children: t.map((k) => {
    const $ = p === k.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: $e(ct.item, $ && ct.itemActive, u && ct.itemDisabled),
        onClick: () => x(k.value),
        disabled: u,
        "aria-pressed": $,
        children: k.label
      },
      k.value
    );
  }) });
}
const Xn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Gn = Re.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: s = !1, onChange: o, onError: l, maxSize: u, children: f, className: N, dragable: m = !0, placeholderTitle: p, placeholderDescription: x, placeholderIcon: h, maxCount: k }, $) => {
    const H = fe(null), [z, D] = y(!1), V = Me((F) => {
      if (k && F.length > k) {
        l == null || l(new Error(`单次最多上传 ${k} 个文件`));
        return;
      }
      if (u) {
        for (const E of Array.from(F))
          if (E.size > u) {
            l == null || l(new Error(`文件“${E.name}”超过大小限制（${Xn(u)}）`));
            return;
          }
      }
      o == null || o(F);
    }, [k, u, o, l]), Q = () => {
      var F;
      s || (F = H.current) == null || F.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: $,
        className: $e(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          z && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          s && "cursor-not-allowed opacity-60",
          N
        ),
        onClick: Q,
        onKeyDown: (F) => {
          !s && (F.key === "Enter" || F.key === " ") && (F.preventDefault(), Q());
        },
        onDragOver: (F) => {
          m && !s && (F.preventDefault(), D(!0));
        },
        onDragLeave: () => D(!1),
        onDrop: (F) => {
          m && !s && (F.preventDefault(), D(!1), V(F.dataTransfer.files));
        },
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        children: [
          /* @__PURE__ */ e("input", { ref: H, type: "file", accept: t, multiple: n, disabled: s, onChange: (F) => F.target.files && V(F.target.files), className: "hidden" }),
          f || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: h ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: p ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: x ?? "支持单文件或批量上传" })
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
  show: s = n,
  title: o,
  width: l = 520,
  centered: u = !0,
  destroyOnClose: f = !1,
  mask: N = !0,
  maskClosable: m = !0,
  okText: p = "确认",
  cancelText: x = "取消",
  confirmLoading: h = !1,
  okButtonProps: k,
  cancelButtonProps: $,
  onConfirm: H,
  onCancel: z,
  onClose: D,
  onOk: V,
  onDismiss: Q,
  children: F,
  footer: E,
  className: J,
  bodyClassName: G
}) => {
  const j = s ?? !1, M = Me(async () => {
    try {
      H ? await H() : V && await V();
    } catch (X) {
      console.error("Modal confirm error:", X);
    }
  }, [H, V]), ee = Me(() => {
    z ? z() : D ? D() : Q == null || Q();
  }, [z, D, Q]), b = be(() => {
    if (E === null) return null;
    if (E) return E;
    const { type: X, ...le } = $ ?? {}, { type: ce, ...S } = k ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(He, { type: "secondary", size: "medium", onClick: ee, ...le, children: x }),
      /* @__PURE__ */ e(He, { type: "primary", size: "medium", isLoading: h, onClick: M, ...S, children: h ? "加载中..." : p })
    ] });
  }, [$, x, h, E, ee, M, k, p]);
  return !j && f || !j ? null : /* @__PURE__ */ r(Xe, { children: [
    N && /* @__PURE__ */ e("div", { className: $e("fixed inset-0 z-[1000] bg-overlayMask", Jt.maskAnimation), onClick: () => m && ee(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: $e(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          u && "left-1/2 top-1/2",
          Jt.modalAnimation,
          J
        ),
        style: { width: l },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          o && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: o }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: ee, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: $e("min-h-20 p-5 text-primaryText", G), children: F }),
          b
        ]
      }
    )
  ] });
};
Ut.displayName = "BaseModal";
const Zn = ({ title: t, extra: n, children: s, hoverable: o = !1, loading: l = !1, bordered: u = !0, className: f, bodyClassName: N, onClick: m }) => /* @__PURE__ */ r(
  "div",
  {
    className: $e(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      u && "border border-borderGray",
      o && "cursor-pointer hover:border-borderGray hover:shadow-md",
      l && "pointer-events-none opacity-60",
      f
    ),
    onClick: m,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: $e("p-4 text-primaryText", (t || n) && "pt-1", N), children: s })
    ]
  }
);
Zn.displayName = "BaseCard";
const Jn = ({ columns: t, dataSource: n = [], rowKey: s = "id", loading: o = !1, bordered: l = !0, striped: u = !0, className: f, onRow: N }, m) => /* @__PURE__ */ r("div", { ref: m, className: $e("relative w-full overflow-x-auto bg-surface", f), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: l ? "border-b border-lineSubtle" : void 0, children: t.map((p) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: p.width, textAlign: p.align }, children: p.title }, p.key || String(p.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((p, x) => {
      const h = String(typeof s == "string" ? p[s] ?? x : x);
      return /* @__PURE__ */ e("tr", { className: $e(l && "border-b border-lineSoft last:border-b-0", u && "odd:bg-surface"), ...(N == null ? void 0 : N(p, x)) || {}, children: t.map((k) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: k.align }, children: k.render ? k.render(p[k.dataIndex], p, x) : String(p[k.dataIndex] ?? "") }, k.key || String(k.dataIndex))) }, h);
    }) })
  ] }),
  o && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), xs = Re.forwardRef(Jn), ea = ({ current: t = 1, pageSize: n = 10, total: s = 0, onChange: o, showSizeChanger: l = !1, pageSizeOptions: u = [10, 20, 50, 100], onShowSizeChange: f, disabled: N = !1, className: m }) => {
  const p = be(() => Math.ceil(s / n) || 1, [n, s]), x = Me((k) => f == null ? void 0 : f(1, Number(k.target.value)), [f]), h = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: $e("flex flex-wrap items-center justify-center gap-4 p-4", m), children: [
    /* @__PURE__ */ e("button", { type: "button", className: h, onClick: () => t > 1 && (o == null ? void 0 : o(t - 1)), disabled: N || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      p,
      " 页，共 ",
      s,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: h, onClick: () => t < p && (o == null ? void 0 : o(t + 1)), disabled: N || t >= p, children: "下一页 →" }),
    l && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: x, disabled: N, children: u.map((k) => /* @__PURE__ */ r("option", { value: k, children: [
      k,
      " 条/页"
    ] }, k)) })
  ] });
};
ea.displayName = "BasePagination";
const Vt = ({ description: t = "暂无数据", image: n, children: s }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  s
] });
Vt.displayName = "BaseEmpty";
const At = ({ trigger: t, items: n, footerItems: s = [], open: o = !1, onOpenChange: l, onTriggerClick: u, onItemClick: f, placement: N = "bottom-start", width: m, portal: p = !1, className: x, triggerClassName: h, menuClassName: k, listClassName: $, footerClassName: H }) => {
  const z = fe(null), D = fe(null), [V, Q] = y({}), F = N.endsWith("end"), E = N.startsWith("top");
  ge(() => {
    if (!o || !p || !z.current) return;
    const M = z.current.getBoundingClientRect();
    Q({ position: "fixed", left: F ? M.right : M.left, top: E ? M.top : M.bottom, transform: F ? "translateX(-100%)" : void 0 });
  }, [E, F, o, p, N]), ge(() => {
    !o || !p || !E || !D.current || Q((M) => ({ ...M, top: Number(M.top) - D.current.offsetHeight - 8 }));
  }, [E, o, p]), ge(() => {
    if (!o || !l) return;
    const M = (ee) => {
      var X, le;
      const b = ee.target;
      (X = z.current) != null && X.contains(b) || (le = D.current) != null && le.contains(b) || l(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [l, o]);
  const J = be(() => m ? { width: typeof m == "number" ? `${m}px` : m } : void 0, [m]), G = Me((M) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: $e(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !M.danger && !M.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !M.danger && M.active && "bg-primary-soft font-medium text-primary",
        M.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (ee) => f == null ? void 0 : f(M, ee),
      disabled: M.disabled,
      children: [
        M.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: M.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: M.label })
      ]
    },
    M.key
  ), [f]), j = o ? /* @__PURE__ */ r(
    "div",
    {
      ref: D,
      className: $e(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !p && "absolute",
        !p && !E && "top-[calc(100%+8px)]",
        !p && E && "bottom-[calc(100%+8px)]",
        !p && F ? "right-0" : p ? void 0 : "left-0",
        k
      ),
      style: p ? { ...V, ...J } : J,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: $e("flex min-h-0 flex-col gap-1", $), children: n.map(G) }),
        s.length > 0 && /* @__PURE__ */ e("div", { className: $e("flex flex-col gap-1 border-t border-lineSoft pt-2", H), children: s.map(G) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: z, className: $e("relative inline-block", x), children: [
    /* @__PURE__ */ e("button", { type: "button", className: $e("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", h), onClick: (M) => {
      u == null || u(M), l == null || l(!o);
    }, "aria-haspopup": "menu", "aria-expanded": o, children: t }),
    p ? j && on(j, document.body) : j
  ] });
};
At.displayName = "BaseActionMenu";
const ta = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: s,
  feedback: o,
  onFeedback: l,
  disabled: u = !1
}) => {
  const [f, N] = y(!1), m = !!(s || l), p = Me(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), N(!0), window.setTimeout(() => N(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${m ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: p,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: f ? "已复制" : n,
            children: f ? /* @__PURE__ */ e(ft, { size: 15 }) : /* @__PURE__ */ e(Pt, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: s,
            disabled: u,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(Ir, { size: 15 })
          }
        ),
        l && /* @__PURE__ */ r(Xe, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Rr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(Dr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, er = Re.memo(ta), ra = {
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
    icon: /* @__PURE__ */ e(Wt, { size: 16 }),
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
function na({ card: t, actionPending: n = !1, onAction: s }) {
  const o = ra[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${o.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${o.iconClassName}`, "aria-hidden": "true", children: o.icon }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ e("h3", { className: "m-0 text-sm font-semibold leading-5 text-primaryText", children: t.title }),
        t.statusLabel && /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText", children: t.statusLabel })
      ] }),
      t.summary && /* @__PURE__ */ e("p", { className: "m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText", children: t.summary }),
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((l, u) => /* @__PURE__ */ e("li", { children: l }, `${u}-${l}`)) }),
      t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.links.map((l) => /* @__PURE__ */ r(
        "a",
        {
          href: l.href,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary",
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: l.label }),
            /* @__PURE__ */ e(jr, { size: 12, className: "shrink-0" })
          ]
        },
        `${l.href}-${l.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((l) => /* @__PURE__ */ e(
        He,
        {
          type: l.tone ?? "secondary",
          size: "small",
          disabled: n || !s,
          onClick: () => s == null ? void 0 : s(t.actionKey, l.id),
          children: l.label
        },
        l.id
      )) })
    ] })
  ] }) });
}
function aa({ draft: t, onPreview: n, onConfirm: s, onCancel: o }) {
  const l = t.status === "saving", u = t.status === "saved", f = t.actionable ?? !0, N = t.previewable ?? !0, m = l || u || !f || !s;
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
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: u ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !u && f && o && /* @__PURE__ */ e(
          He,
          {
            type: "secondary",
            size: "small",
            disabled: l,
            onClick: () => o(t.actionKey),
            children: "取消"
          }
        ),
        (f || u) && /* @__PURE__ */ e(
          He,
          {
            type: u ? "secondary" : "primary",
            size: "small",
            disabled: m,
            onClick: () => s == null ? void 0 : s(t.actionKey),
            children: l ? /* @__PURE__ */ r(Xe, { children: [
              /* @__PURE__ */ e(mr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : u ? /* @__PURE__ */ r(Xe, { children: [
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
}, Et = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => Et(n)).join("") : Re.isValidElement(t) ? Et(t.props.children) : "", nr = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, ia = ({ href: t, label: n }) => {
  const s = be(() => {
    const o = n.trim();
    if (o) return o;
    try {
      const u = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (u) return decodeURIComponent(u);
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
        children: /* @__PURE__ */ e(xr, { size: 14 })
      }
    )
  ] });
}, ca = ({ language: t, rawCode: n, className: s, children: o }) => {
  const [l, u] = y(!1), f = Me(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), u(!0), window.setTimeout(() => u(!1), 1200);
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
          className: `code-block-copy-btn ${l ? "copied" : ""}`,
          title: l ? "已复制代码" : "复制代码",
          children: [
            l ? /* @__PURE__ */ e(ft, { size: 12 }) : /* @__PURE__ */ e(Pt, { size: 12 }),
            l ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${s ?? ""}`.trim(), children: o }) })
  ] });
}, da = ({ rawCode: t }) => {
  const [n, s] = y(!1), o = Me(async () => {
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
          onClick: o,
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
  const n = typeof t.title == "string" ? t.title.trim() : "", s = typeof t.pmid == "string" ? t.pmid.trim() : "", o = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !s || !o ? null : { title: n, pmid: s, doi: o };
}, ar = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((o) => o.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const s = [];
  return n.forEach((o, l) => {
    var h;
    const u = o.match(/PMID\s*[:：]\s*(\d{4,})/i), f = o.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!u || !f) return;
    const N = o.slice(0, u.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), m = ((h = n[l - 1]) == null ? void 0 : h.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", x = Cr({
      title: N || m,
      pmid: u[1],
      doi: f[1]
    });
    x && s.push(x);
  }), s.length === 0 ? null : { items: s };
}, ua = (t) => {
  if (!t.startsWith(tr))
    return ar(t);
  const n = t.slice(tr.length).trim();
  if (!n) return null;
  try {
    const s = JSON.parse(n);
    if (!Array.isArray(s.items)) return null;
    const o = s.items.map((l) => Cr(l)).filter((l) => l !== null);
    return o.length === 0 ? null : { items: o };
  } catch {
    return ar(n);
  }
}, Sr = ({
  msg: t,
  actionKey: n,
  feedback: s,
  onFeedback: o,
  onRefresh: l,
  onConfirmMiraDraft: u,
  onPreviewMiraDraft: f,
  onCancelMiraDraft: N,
  pendingDisplayActionKey: m,
  onDisplayCardAction: p,
  isTyping: x = !1,
  isStreaming: h
}) => {
  var A, B;
  const k = t.role === "user", $ = h ?? x, H = fe(null), [z, D] = y(null), [V, Q] = y(null), [F, E] = y(null), [J, G] = y(!1), j = be(() => /```\s*mermaid/i.test(t.content), [t.content]), M = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), ee = be(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), b = be(
    () => k ? null : ua(t.content),
    [k, t.content]
  ), X = !!(b && b.items.length > 0);
  ge(() => {
    if (!M || z || V) return;
    let g = !1;
    return sa().then((v) => {
      g || (D(() => v.remark), Q(() => v.rehype));
    }).catch(() => {
    }), () => {
      g = !0;
    };
  }, [M, z, V]), ge(() => {
    if (!ee || J) return;
    let g = !1;
    return la().then((v) => {
      g || (v && E(() => v), G(!0));
    }), () => {
      g = !0;
    };
  }, [ee, J]);
  const le = be(() => {
    const g = [kr];
    return F && g.push(F), z && g.push(z), g;
  }, [F, z]), ce = be(() => {
    const g = [ln];
    return V && g.push(V), g;
  }, [V]), S = be(
    () => ({
      table: ({ node: g, ...v }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...v }) }),
      tr: ({ node: g, ...v }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...v }),
      th: ({ node: g, ...v }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...v
        }
      ),
      td: ({ node: g, ...v }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...v }),
      blockquote: ({ node: g, ...v }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...v
        }
      ),
      input: ({ node: g, type: v, checked: w, ...he }) => v === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!w,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...he
        }
      ) : /* @__PURE__ */ e("input", { type: v, ...he }),
      section: ({ node: g, ...v }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...v }),
      p: ({ node: g, children: v, ...w }) => {
        const he = Re.Children.toArray(v);
        if (he.length === 1 && Re.isValidElement(he[0])) {
          const ye = he[0];
          if (typeof ye.props.href == "string" && nr(ye.props.href)) {
            const re = Et(ye.props.children).trim();
            return /* @__PURE__ */ e(ia, { href: ye.props.href, label: re });
          }
        }
        return /* @__PURE__ */ e("p", { ...w, children: v });
      },
      a: ({ node: g, href: v, ...w }) => {
        const he = v ?? "", ye = /^https?:\/\/(dx\.)?doi\.org\//i.test(he) || /^doi:/i.test(he), re = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(he) || /\/pmc\/|\/pmid\//i.test(he), L = nr(he);
        return ye || re || L ? /* @__PURE__ */ e(
          "a",
          {
            href: v,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...w
          }
        ) : /* @__PURE__ */ e("a", { href: v, target: "_blank", rel: "noreferrer", ...w });
      },
      pre({ children: g, ...v }) {
        const w = Re.Children.toArray(g).find(
          (W) => Re.isValidElement(W) && typeof W.props.className == "string" && W.props.className.includes("language-")
        );
        if (!w)
          return /* @__PURE__ */ e("pre", { ...v, children: g });
        const he = w.props.className ?? "", ye = he.match(/language-([\w-]+)/), re = ye ? ye[1].toLowerCase() : "code", L = Et(w.props.children).replace(/\n$/, "");
        return re === "mermaid" ? /* @__PURE__ */ e(da, { rawCode: L }) : /* @__PURE__ */ e(ca, { language: re, rawCode: L, className: he, children: w.props.children });
      },
      code({ children: g, className: v, ...w }) {
        return v ? /* @__PURE__ */ e("code", { className: v, ...w, children: g }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...w,
            children: g
          }
        );
      }
    }),
    []
  );
  return ge(() => {
    if (k || $ || !j) return;
    const g = H.current;
    if (!g) return;
    const v = Array.from(g.querySelectorAll(".mermaid")).filter(
      (w) => w.dataset.processed !== "true"
    );
    v.length !== 0 && oa().then(async (w) => {
      await Promise.all(
        v.map(async (he, ye) => {
          var I;
          const re = (I = he.textContent) == null ? void 0 : I.trim();
          if (!re) return;
          const L = `mermaid-${Date.now()}-${ye}`, { svg: W } = await w.render(L, re);
          he.innerHTML = W, he.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [k, $, j, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${k ? "justify-end" : "justify-start"}`, children: k ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (A = t.references) == null ? void 0 : A.map((g) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${g.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              g.type === "skill" ? /* @__PURE__ */ e(pr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: g.label, children: g.label })
            ]
          },
          g.id
        )),
        (B = t.attachments) == null ? void 0 : B.map((g) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${g.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: g.status === "error" ? "alert" : void 0,
            title: g.errorMessage,
            children: [
              g.status === "uploading" ? /* @__PURE__ */ e(mr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : g.status === "error" ? /* @__PURE__ */ e(qr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : g.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: g.previewUrl, alt: g.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(fr, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: g.name, children: g.name }),
              g.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              g.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          g.id
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
    X && b ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: b.items.map((g, v) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: g.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${g.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: g.pmid
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
                  href: `https://doi.org/${g.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: g.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${g.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(xr, { size: 14 })
            }
          )
        ]
      },
      `${g.pmid}-${v}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: H,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Nr,
          {
            remarkPlugins: le,
            rehypePlugins: ce,
            components: S,
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
        onConfirm: u,
        onCancel: N
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      na,
      {
        card: t.displayCard,
        actionPending: m === t.displayCard.actionKey,
        onAction: p
      }
    ),
    !X && t.content && !$ && /* @__PURE__ */ e(
      er,
      {
        markdownContent: t.content,
        onRefresh: l,
        feedback: s,
        onFeedback: n && o ? (g) => o(n, g) : void 0,
        disabled: $
      }
    )
  ] }) }) });
}, ma = Re.memo(Sr), pa = {
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
  thinking: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(gr, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(ur, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(Lt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(dr, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Wt, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(br, { size: 14, className: "text-danger" })
}, sr = {
  knowledge: {
    icon: /* @__PURE__ */ e(Gt, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Ur, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(dt, { size: 13 }),
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
    icon: /* @__PURE__ */ e(dt, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, fa = {
  running: {
    icon: /* @__PURE__ */ e(it, { size: 13, className: "animate-spin" }),
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
    icon: /* @__PURE__ */ e(Vr, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e(Wt, { size: 13 }),
    colorClass: "text-warning"
  }
}, Ht = ({
  phase: t,
  searchSteps: n = [],
  label: s,
  defaultExpanded: o = !0
}) => {
  const [l, u] = y(o), f = fe(null);
  ge(() => {
    n.length > 0 && u(!0);
  }, [n.length]);
  const N = n.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: ha[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: s || pa[t] }),
      N && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => u((m) => !m),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            l ? /* @__PURE__ */ e(zt, { size: 12 }) : /* @__PURE__ */ e($t, { size: 12 }),
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
        ref: f,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${l ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((m, p) => {
          const x = sr[m.type] ?? sr.tool, h = m.status ? fa[m.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${x.colorClass}`, children: x.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: m.label }),
                    h && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${h.colorClass}`,
                        "aria-label": m.status,
                        children: h.icon
                      }
                    )
                  ] }),
                  (m.detail || m.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    m.detail,
                    m.detail && m.resultCount !== void 0 ? " · " : "",
                    m.resultCount !== void 0 ? `${m.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            m.id ?? `${m.type}-${p}-${m.label}`
          );
        })
      }
    )
  ] });
}, xa = Re.memo(Ht);
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
  statusPhase: s = "thinking",
  statusLabel: o,
  statusVisible: l,
  searchSteps: u = [],
  hasReceivedAssistantChunk: f = !1,
  contentMaxWidth: N = 800,
  selection: m,
  scrollbar: p,
  feedbackByMessageKey: x,
  getMessageKey: h = (G, j) => String(j),
  onFeedback: k,
  onRegenerate: $,
  onConfirmMiraDraft: H,
  onPreviewMiraDraft: z,
  onCancelMiraDraft: D,
  pendingDisplayActionKey: V,
  onDisplayCardAction: Q,
  onScroll: F,
  scrollContainerRef: E,
  onMessageElement: J
}) {
  var ye, re;
  const G = !!m, j = fe(null), M = fe(null), ee = fe(/* @__PURE__ */ new Map()), b = fe(), [X, le] = y(), S = n && (l ?? !f) || l === !0 && (s === "awaiting_clarification" || s === "awaiting_confirmation" || s === "awaiting_approval" || s === "warning" || s === "failed");
  let A = -1, B = -1;
  if (n) {
    for (let L = t.length - 1; L >= 0; L -= 1)
      if (((ye = t[L]) == null ? void 0 : ye.role) === "user") {
        B = L;
        break;
      }
    for (let L = t.length - 1; L > B; L -= 1)
      if (((re = t[L]) == null ? void 0 : re.role) === "assistant") {
        A = L;
        break;
      }
  }
  const g = B >= 0 ? h(t[B], B) : void 0, v = A >= 0 ? h(t[A], A) : void 0, w = g && v ? `${g}:${v}` : void 0, he = Me(
    (L) => {
      j.current = L, ba(E, L);
    },
    [E]
  );
  return Xt(() => {
    if (!w || !v || B < 0 || A < 0)
      return;
    const L = j.current, W = M.current, I = ee.current.get(B);
    if (!L || !W || !I) return;
    const we = () => {
      const Te = window.getComputedStyle(L), Ne = window.getComputedStyle(W), K = L.clientHeight - Ft(Te.paddingTop) - Ft(Te.paddingBottom), Z = Ft(Ne.rowGap || Ne.gap), Y = Math.max(
        0,
        Math.floor(K - I.offsetHeight - Z)
      );
      le(
        (R) => (R == null ? void 0 : R.assistantKey) === v && R.minHeight === Y ? R : { assistantKey: v, minHeight: Y }
      );
    };
    we();
    const ke = new ResizeObserver(we);
    return ke.observe(L), ke.observe(I), () => ke.disconnect();
  }, [
    A,
    v,
    w,
    B
  ]), Xt(() => {
    if (!w || !v || (X == null ? void 0 : X.assistantKey) !== v || B < 0 || b.current === w)
      return;
    const L = j.current, W = ee.current.get(B);
    !L || !W || (L.scrollTo({ top: W.offsetTop, behavior: "auto" }), b.current = w);
  }, [v, w, B, X]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: he,
        "data-chat-scroll-container": !0,
        onScroll: F,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: M,
            className: `flex w-full flex-col ${G ? "gap-3" : "gap-8"}`,
            style: { maxWidth: N },
            children: [
              t.map((L, W) => {
                const I = h(L, W), we = (m == null ? void 0 : m.selectedMessageKeys.has(I)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": W,
                    "data-chat-turn-reserved": (X == null ? void 0 : X.assistantKey) === I ? "true" : void 0,
                    ref: (ke) => {
                      ke ? ee.current.set(W, ke) : ee.current.delete(W), J == null || J(W, ke);
                    },
                    className: G ? "flex w-full items-start gap-2" : void 0,
                    style: (X == null ? void 0 : X.assistantKey) === I ? { minHeight: X.minHeight } : void 0,
                    children: [
                      m && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => m.onToggleMessage(I),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": we ? "取消选择消息" : "选择消息",
                          children: we ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ft, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: m ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${we ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${L.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Sr,
                              {
                                msg: L,
                                actionKey: I,
                                feedback: x == null ? void 0 : x[I],
                                onFeedback: k,
                                onRefresh: $ ? () => $(W) : void 0,
                                onConfirmMiraDraft: H,
                                onPreviewMiraDraft: z,
                                onCancelMiraDraft: D,
                                pendingDisplayActionKey: V,
                                onDisplayCardAction: Q,
                                isTyping: n && W === A
                              }
                            ),
                            W === A && S && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              Ht,
                              {
                                phase: s,
                                label: o,
                                searchSteps: [...u]
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  I
                );
              }),
              A < 0 && S && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                Ht,
                {
                  phase: s,
                  label: o,
                  searchSteps: [...u]
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
Re.memo(ga);
function bs({
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
const gs = cr(
  function({ header: n, children: s, sidePanels: o }, l) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: l, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: s }),
        o
      ] })
    ] });
  }
), ys = cr(
  function({ open: n, width: s, resizing: o = !1, overlay: l = !1, overlayRight: u = 0, children: f }, N) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: N,
        "data-overlay": l ? "true" : "false",
        style: { width: n ? s : 0, ...l ? { right: u } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${l ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${o ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: s }, className: "h-full min-w-0", children: f })
      }
    );
  }
);
function ya({
  isSidebarOpen: t,
  title: n,
  editingTitle: s,
  titleInputRef: o,
  divided: l = !1,
  actions: u,
  onOpenSidebar: f,
  onStartEditTitle: N,
  onEditingTitleChange: m,
  onCommitTitle: p,
  onEditingTitleKeyDown: x
}) {
  return /* @__PURE__ */ r(
    "header",
    {
      className: `z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${l ? "border-b border-chatWorkspaceDivider" : ""}`,
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
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: s !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: o,
              value: s,
              onChange: (k) => m == null ? void 0 : m(k.target.value),
              onBlur: p,
              onKeyDown: x,
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
        u && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: u })
      ]
    }
  );
}
function vs({ active: t = !1, icon: n, label: s, onClick: o }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: o,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: s })
      ]
    }
  );
}
function ws({
  items: t,
  activeMessageIndex: n,
  initiallyExpanded: s = !1,
  onSelect: o
}) {
  const [l, u] = y(s), [f, N] = y(null), [m, p] = y(0), [x, h] = y(0), [k, $] = y(!1), H = fe(null), z = fe({}), D = fe(null), V = Me(() => {
    const E = H.current;
    if (!E) {
      p(0), h(0);
      return;
    }
    const { scrollTop: J, scrollHeight: G, clientHeight: j } = E;
    if (G <= j || j <= 0) {
      p(0), h(0);
      return;
    }
    const M = Math.max(j / G * j, 24), ee = j - M, b = J / Math.max(G - j, 1);
    p(M), h(ee * b);
  }, []), Q = Me(() => {
    V(), $(!0), D.current !== null && window.clearTimeout(D.current), D.current = window.setTimeout(() => $(!1), 650);
  }, [V]), F = () => {
    D.current !== null && (window.clearTimeout(D.current), D.current = null), u(!1), N(null), $(!1);
  };
  return ge(() => {
    if (!l) return;
    const E = window.requestAnimationFrame(V);
    return () => window.cancelAnimationFrame(E);
  }, [l, t.length, V]), ge(() => {
    const E = H.current, J = z.current[n];
    if (!E || !J) return;
    const G = E.scrollTop, j = G + E.clientHeight, M = J.offsetTop, ee = M + J.offsetHeight, b = 16;
    M < G + b ? E.scrollTo({ top: Math.max(M - b, 0), behavior: "auto" }) : ee > j - b && E.scrollTo({
      top: Math.max(ee - E.clientHeight + b, 0),
      behavior: "auto"
    });
  }, [n, t.length]), ge(() => () => {
    D.current !== null && window.clearTimeout(D.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => u(!0),
      onMouseLeave: F,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: H,
          onScroll: Q,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${l ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((E) => {
              const J = E.messageIndex === n, G = f === E.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (j) => {
                    z.current[E.messageIndex] = j;
                  },
                  type: "button",
                  onClick: () => o(E.messageIndex),
                  onMouseEnter: () => N(E.messageIndex),
                  onMouseLeave: () => N(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${l ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${E.messageIndex + 1} 条用户消息`,
                  title: E.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${l ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${J ? "text-primary" : G ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: E.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${J ? "h-[4px] w-[12px] bg-primary" : G ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                E.messageIndex
              );
            }) }),
            l && m > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${k ? "opacity-100" : "opacity-0"}`,
                style: { height: m, transform: `translateY(${x}px)` }
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
  modalOpen: s,
  copied: o = !1,
  contentMaxWidth: l = 840,
  onCancel: u,
  onCreateLink: f,
  onCloseModal: N,
  onCopyLink: m
}) {
  return /* @__PURE__ */ r(Xe, { children: [
    /* @__PURE__ */ e("div", { className: "w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur", children: /* @__PURE__ */ r(
      "div",
      {
        className: "mx-auto flex w-full items-center justify-between gap-4",
        style: { maxWidth: l },
        children: [
          /* @__PURE__ */ r("div", { className: "min-w-0 text-sm text-secondaryText", children: [
            "已选择 ",
            t,
            " 条对话"
          ] }),
          /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(He, { type: "secondary", size: "small", onClick: u, children: "取消" }),
            /* @__PURE__ */ e(
              He,
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
                onClick: m,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  o ? /* @__PURE__ */ e(ft, { size: 14 }) : /* @__PURE__ */ e(Pt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: o ? "已复制" : "复制" })
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
  uploading: s = !1,
  deletingAttachmentId: o,
  unavailableHint: l,
  error: u,
  onRequestUpload: f,
  onDeleteAttachment: N
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ r("div", { className: f ? "pr-28" : void 0, children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      f && /* @__PURE__ */ e("div", { className: "absolute right-0 top-6", children: /* @__PURE__ */ e(
        He,
        {
          type: "secondary",
          size: "small",
          disabled: s,
          onClick: f,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            s ? /* @__PURE__ */ e(it, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Or, { size: 14 }),
            s ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${f ? "pr-28" : ""}`, children: t.map((m) => {
      const p = o === m.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: m.statusLabel,
          children: [
            /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: m.name }),
            m.status === "processing" && /* @__PURE__ */ e(it, { size: 12, className: "animate-spin" }),
            N && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: p,
                onClick: () => N(m.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${m.name}`,
                title: "删除附件",
                children: p ? /* @__PURE__ */ e(it, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(vr, { size: 13 })
              }
            )
          ]
        },
        m.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    l && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: l }),
    u && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: u })
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
  updatedAt: s,
  index: o
}) {
  return !t && !n && !s && !o ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    n && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      n
    ] }),
    s && /* @__PURE__ */ e("span", { children: s }),
    o && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: o.detail, children: [
      va[o.status],
      o.statusLabel
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
  const [s, o] = y(!1), l = fe(null), u = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => () => {
    l.current !== null && window.clearTimeout(l.current);
  }, []);
  const f = () => {
    o(!0), l.current !== null && window.clearTimeout(l.current), l.current = window.setTimeout(() => o(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${u}`, children: [
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
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${s ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${Lr.preview} ${u}`, children: /* @__PURE__ */ e(Nr, { remarkPlugins: [kr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Vt, { description: "正文暂无内容" }) }),
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
  onSelectTab: s,
  onCloseTab: o,
  onClose: l,
  pendingActionKey: u,
  onAction: f,
  resolveActions: N,
  renderContent: m,
  onResizeStart: p
}) {
  const x = t.find(($) => $.key === n) ?? null, h = x ? (N == null ? void 0 : N(x)) ?? x.actions : void 0, k = x ? m == null ? void 0 : m(x) : void 0;
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
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map(($) => {
        const H = $.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => s($.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${H ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
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
              onClick: (z) => {
                z.stopPropagation(), o($.key);
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
        x && (h == null ? void 0 : h.map(($) => /* @__PURE__ */ e(
          He,
          {
            type: $.tone ?? "secondary",
            size: "small",
            disabled: u === x.key || !f,
            onClick: () => f == null ? void 0 : f(x.key, $.id),
            children: $.label
          },
          $.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: l,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(bt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: x ? k || (x.document ? /* @__PURE__ */ e(ka, { document: x.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: x.loading ? "正在加载文档…" : x.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Ts({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: s,
  knowledgeDocs: o,
  experiments: l,
  activePreviewKey: u,
  onSearchQueryChange: f,
  onOpenKnowledge: N,
  onOpenExperiment: m,
  onResizeStart: p
}) {
  const x = o.length + l.length;
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
          /* @__PURE__ */ e(dt, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (h) => f(h.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: s ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: s }) : x === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Xe, { children: [
        o.map((h) => {
          const k = `knowledge:${h.id}`, $ = u === k;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => N(h.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${$ ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${$ ? "font-semibold" : "font-normal"}`, children: h.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: h.tags[0] ?? "未分类" })
              ]
            },
            h.id
          );
        }),
        l.map((h) => {
          const k = `experiment:${h.id}`, $ = u === k;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => m(h.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${$ ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${$ ? "font-semibold" : "font-normal"}`, children: h.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: h.tags[0] ?? h.status })
              ]
            },
            h.id
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
  const o = t.slice(0, n).match($a);
  return o ? o[1] : null;
}, Aa = (t, n) => {
  const o = t.slice(0, n).match(La);
  return o ? o[1] : null;
}, Cs = (t, n, s, o) => {
  const l = t.slice(0, n), u = t.slice(s), f = l.match(/(?:^|\s)\/[^\s/]*$/);
  if (!f) {
    const h = `/${o} `;
    return { value: `${l}${h}${u}`, cursor: l.length + h.length };
  }
  const N = l.length - f[0].length, p = `${f[0].startsWith(" ") ? " " : ""}/${o} `, x = `${l.slice(0, N)}${p}`;
  return {
    value: `${x}${u}`,
    cursor: x.length
  };
}, Ss = (t, n, s, o) => {
  const l = t.slice(0, n), u = t.slice(s), f = l.match(/(?:^|\s)@[^\s@]*$/);
  if (!f) {
    const h = `@${o} `;
    return { value: `${l}${h}${u}`, cursor: l.length + h.length };
  }
  const N = l.length - f[0].length, p = `${f[0].startsWith(" ") ? " " : ""}@${o} `, x = `${l.slice(0, N)}${p}`;
  return {
    value: `${x}${u}`,
    cursor: x.length
  };
}, Ea = [], Ms = [], zr = ({
  onSend: t,
  disabled: n,
  isStreaming: s = !1,
  onCancel: o,
  leadingControls: l,
  skillOptions: u = Ma,
  fileOptions: f = Ea,
  uploadAccept: N,
  validateUploadFile: m,
  onUploadValidationError: p
}) => {
  const [x, h] = y(""), [k, $] = y(!1), [H, z] = y(!1), [D, V] = y(""), [Q, F] = y(-1), [E, J] = y(!1), [G, j] = y(""), [M, ee] = y(-1), [b, X] = y([]), [le, ce] = y([]), [S, A] = y([]), [B, g] = y(!1), v = fe(null), w = fe(null), he = _r(), ye = fe([]), re = s, L = re && !!o;
  ge(() => {
    ye.current = b;
  }, [b]), ge(() => () => {
    ye.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const W = be(() => {
    const i = D.trim().toLowerCase();
    return i ? u.filter((T) => `${T.id} ${T.description} ${T.source}`.toLowerCase().includes(i)) : u;
  }, [u, D]), I = be(() => {
    const i = G.trim().toLowerCase();
    return i ? f.filter((T) => `${T.name} ${T.projectName} ${T.sourceType} ${T.operatorName ?? ""} ${T.operatedAt ?? ""}`.toLowerCase().includes(i)) : f.filter((T) => T.isRecent).slice(0, 10);
  }, [f, G]), we = Me((i, T) => {
    const oe = T ?? i.length, ue = za(i, oe);
    if (ue !== null) {
      z(!0), V(ue), F(-1), J(!1), j(""), ee(-1);
      return;
    }
    const se = Aa(i, oe);
    if (se !== null) {
      J(!0), j(se), ee(-1), z(!1), V(""), F(-1);
      return;
    }
    z(!1), V(""), F(-1), J(!1), j(""), ee(-1);
  }, []), ke = Me((i) => {
    if (i.disabled) return;
    const T = v.current, oe = (T == null ? void 0 : T.selectionStart) ?? x.length, ue = (T == null ? void 0 : T.selectionEnd) ?? oe, se = x.slice(0, oe), Ce = x.slice(ue), xe = (() => {
      const de = se.match(/(?:^|\s)\/[^\s/]*$/);
      if (!de)
        return { value: x, cursor: oe };
      const pe = se.length - de[0].length, U = de[0].startsWith(" ") ? " " : "", _e = `${se.slice(0, pe)}${U}`;
      return {
        value: `${_e}${Ce}`,
        cursor: _e.length
      };
    })();
    ce((de) => {
      const pe = `skill-${i.id}`;
      return de.some((U) => U.id === pe) ? de : [...de, { id: pe, type: "skill", label: i.id, sourceId: i.id }];
    }), h(xe.value), z(!1), V(""), F(-1), requestAnimationFrame(() => {
      T && (T.focus(), T.setSelectionRange(xe.cursor, xe.cursor));
    });
  }, [x]), Te = Me((i) => {
    const T = v.current, oe = (T == null ? void 0 : T.selectionStart) ?? x.length, ue = (T == null ? void 0 : T.selectionEnd) ?? oe, se = x.slice(0, oe), Ce = x.slice(ue), xe = (() => {
      const de = se.match(/(?:^|\s)@[^\s@]*$/);
      if (!de)
        return { value: x, cursor: oe };
      const pe = se.length - de[0].length, U = de[0].startsWith(" ") ? " " : "", _e = `${se.slice(0, pe)}${U}`;
      return {
        value: `${_e}${Ce}`,
        cursor: _e.length
      };
    })();
    A((de) => {
      const pe = `doc-${i.id}`;
      return de.some((U) => U.id === pe) ? de : [...de, { id: pe, type: "doc", label: i.name, sourceId: i.id }];
    }), h(xe.value), J(!1), j(""), ee(-1), requestAnimationFrame(() => {
      T && (T.focus(), T.setSelectionRange(xe.cursor, xe.cursor));
    });
  }, [x]), Ne = Me(() => {
    g(!1);
    const i = w.current;
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
  }, []), K = Me((i) => {
    const T = Array.from(i.target.files ?? []);
    if (T.length === 0) return;
    const oe = T.filter((ue) => {
      const se = m == null ? void 0 : m(ue);
      return se ? (p == null || p(se), !1) : !0;
    });
    X((ue) => {
      const se = new Set(ue.map((xe) => xe.id)), Ce = [...ue];
      return oe.forEach((xe) => {
        if (xe.size > Ca || Ce.length >= Ta) return;
        const de = `${xe.name}-${xe.size}-${xe.lastModified}`;
        if (se.has(de)) return;
        const pe = xe.type.startsWith("image/");
        se.add(de), Ce.push({
          id: de,
          name: xe.name,
          mimeType: xe.type || "application/octet-stream",
          previewUrl: pe ? URL.createObjectURL(xe) : void 0,
          file: xe
        });
      }), Ce;
    }), i.target.value = "";
  }, [p, m]), Z = Me((i) => {
    X((T) => {
      const oe = T.find((ue) => ue.id === i);
      return oe != null && oe.previewUrl && URL.revokeObjectURL(oe.previewUrl), T.filter((ue) => ue.id !== i);
    });
  }, []), Y = Me((i) => {
    ce((T) => T.filter((oe) => oe.id !== i));
  }, []), R = Me((i) => {
    A((T) => T.filter((oe) => oe.id !== i));
  }, []), Le = Me(() => {
    !x.trim() || n || s || (t({
      content: x,
      attachments: b.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...le, ...S]
    }), h(""), X([]), ce([]), A([]), z(!1), V(""), F(-1), J(!1), j(""), ee(-1));
  }, [x, n, s, t, b, S, le]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: he,
        ref: w,
        type: "file",
        multiple: !0,
        accept: N,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: K
      }
    ),
    (b.length > 0 || le.length > 0 || S.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      le.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(pr, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Y(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
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
            /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => R(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${i.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      b.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            i.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: i.previewUrl, alt: i.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(fr, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: i.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: i.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Z(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${i.name}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
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
        ref: v,
        value: x,
        onChange: (i) => {
          const T = i.target.value;
          h(T), we(T, i.target.selectionStart);
        },
        onClick: (i) => {
          we(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyUp: (i) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(i.key) || we(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyDown: (i) => {
          if (i.key === "Enter" && (i.shiftKey || i.metaKey || i.ctrlKey)) {
            i.preventDefault();
            const T = i.currentTarget, oe = T.selectionStart ?? x.length, ue = T.selectionEnd ?? oe, se = `${x.slice(0, oe)}
${x.slice(ue)}`, Ce = oe + 1;
            h(se), we(se, Ce), requestAnimationFrame(() => {
              T.setSelectionRange(Ce, Ce);
            });
            return;
          }
          if (H) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), F((T) => W.length === 0 ? -1 : T < 0 ? 0 : (T + 1) % W.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), F((T) => W.length === 0 ? -1 : T < 0 ? W.length - 1 : (T - 1 + W.length) % W.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), z(!1), V(""), F(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const T = Q >= 0 ? W[Q] : void 0;
              T && ke(T);
              return;
            }
          }
          if (E) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), ee((T) => I.length === 0 ? -1 : T < 0 ? 0 : (T + 1) % I.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), ee((T) => I.length === 0 ? -1 : T < 0 ? I.length - 1 : (T - 1 + I.length) % I.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), J(!1), j(""), ee(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const T = M >= 0 ? I[M] : void 0;
              T && Te(T);
              return;
            }
          }
          i.key === "Enter" && !i.shiftKey && (i.preventDefault(), Le());
        },
        disabled: n,
        onFocus: () => $(!0),
        onBlur: () => {
          $(!1), z(!1), J(!1);
        },
        placeholder: k ? Sa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${b.length > 0 || le.length > 0 || S.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    H && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(dt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: D ? `搜索 skill：${D}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: W.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : W.map((i, T) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : T === Q ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => ke(i),
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
    E && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(dt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: G ? `搜索文件：${G}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !G && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(_t, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        I.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : I.map((i, T) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${T === M ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => Te(i),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Bt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: i.name }),
              !G && i.operatorName && i.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${i.operatorName} ${i.operatedAt}` })
            ]
          },
          i.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
        l,
        /* @__PURE__ */ r(
          "div",
          {
            className: "relative",
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Ne,
                  "aria-controls": he,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(wr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${B ? "block" : "hidden"}`,
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
          onClick: re ? o : Le,
          disabled: re ? !L : n || !x.trim(),
          "aria-label": re ? "停止生成" : "发送消息",
          title: re ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${L || !re && x.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: re ? /* @__PURE__ */ e(Gr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Yr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
Re.memo(zr);
const Pa = ({ messages: t, isTyping: n, statusPhase: s = "thinking", searchSteps: o = [] }) => {
  const l = fe(null);
  ge(() => {
    var f;
    (f = l.current) == null || f.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const u = be(() => t.map((f, N) => /* @__PURE__ */ e(ma, { msg: f }, `${N}-${f.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    u,
    n && /* @__PURE__ */ e(xa, { phase: s, searchSteps: o }),
    /* @__PURE__ */ e("div", { ref: l })
  ] });
};
Re.memo(Pa);
const Ba = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], Ar = ({ onSelect: t, prompts: n = Ba, disabled: s = !1 }) => {
  const o = Me((l) => {
    t(l);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((l) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => o(l),
      disabled: s,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: l
    },
    l
  )) });
};
Re.memo(Ar);
const _a = (t, n) => {
  const s = Math.random() * t, o = Math.random() * n;
  return {
    x: s,
    y: o,
    baseX: s,
    baseY: o,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function $s({ onLogin: t, onLoginSuccess: n, onNavigate: s }) {
  const o = fe(null), l = fe(null), [u, f] = y(""), [N, m] = y(""), [p, x] = y(!0), [h, k] = y(!1), [$, H] = y(!1), [z, D] = y(null), V = fe(null), [Q, F] = y(!1), [E, J] = y("email"), [G, j] = y(""), [M, ee] = y(""), [b, X] = y(""), [le, ce] = y(""), [S, A] = y(0), [B, g] = y(!1), v = be(() => u.trim().length > 0 && N.trim().length > 0 && !h, [
    u,
    h,
    N
  ]);
  ge(() => {
    if (S <= 0) return;
    const L = window.setTimeout(() => A((W) => W - 1), 1e3);
    return () => clearTimeout(L);
  }, [S]), ge(
    () => () => {
      V.current !== null && window.clearTimeout(V.current);
    },
    []
  ), ge(() => {
    const L = o.current, W = l.current;
    if (!L || !W) return;
    const I = L.getContext("2d");
    if (!I) return;
    const we = window.getComputedStyle(document.documentElement), ke = we.getPropertyValue("--chatui-color-auth-particle-active").trim(), Te = we.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Ne = we.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let K = 0, Z = 0, Y = 0, R = window.devicePixelRatio || 1, Le = [];
    const i = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, T = 150, oe = () => {
      const pe = W.getBoundingClientRect();
      R = window.devicePixelRatio || 1, Z = pe.width, Y = pe.height, L.width = Z * R, L.height = Y * R, L.style.width = `${Z}px`, L.style.height = `${Y}px`, I.setTransform(R, 0, 0, R, 0, 0);
      const U = Z < 768 ? 40 : 90;
      Le = Array.from({ length: U }, () => _a(Z, Y));
    }, ue = (pe) => {
      I.beginPath(), I.arc(pe.x, pe.y, pe.size, 0, Math.PI * 2), I.closePath(), I.fill();
    }, se = () => {
      I.clearRect(0, 0, Z, Y);
      for (let pe = 0; pe < Le.length; pe += 1) {
        const U = Le[pe];
        U.x += U.vx, U.y += U.vy, (U.x < 0 || U.x > Z) && (U.vx = -U.vx), (U.y < 0 || U.y > Y) && (U.vy = -U.vy);
        const _e = i.x - U.x, qe = i.y - U.y, We = Math.sqrt(_e * _e + qe * qe) || 1, Ge = _e / We, Ue = qe / We, Se = (i.radius - We) / i.radius, te = Ge * Se * U.density, et = Ue * Se * U.density;
        if (We < i.radius)
          U.x -= te * 0.5, U.y -= et * 0.5, I.fillStyle = ke, U.size = Math.min(U.size + 0.1, 2.5);
        else {
          if (U.x !== U.baseX) {
            const De = U.x - U.baseX;
            U.x -= De / 50;
          }
          if (U.y !== U.baseY) {
            const De = U.y - U.baseY;
            U.y -= De / 50;
          }
          I.fillStyle = Te, U.size = Math.max(U.size - 0.05, 1);
        }
        ue(U);
        for (let De = pe; De < Le.length; De += 1) {
          const Pe = Le[De], Ye = U.x - Pe.x, Ve = U.y - Pe.y, Qe = Math.sqrt(Ye * Ye + Ve * Ve);
          if (Qe < T) {
            const at = (1 - Qe / T) * 0.4;
            I.beginPath(), I.strokeStyle = Ne, I.globalAlpha = at, I.lineWidth = 1, I.moveTo(U.x, U.y), I.lineTo(Pe.x, Pe.y), I.stroke(), I.globalAlpha = 1, I.closePath();
          }
        }
      }
      K = window.requestAnimationFrame(se);
    }, Ce = (pe) => {
      const U = W.getBoundingClientRect();
      i.x = pe.clientX - U.left, i.y = pe.clientY - U.top;
    }, xe = () => {
      i.x = -1e3, i.y = -1e3;
    }, de = (pe) => {
      if (pe.touches.length < 1) return;
      const U = W.getBoundingClientRect();
      i.x = pe.touches[0].clientX - U.left, i.y = pe.touches[0].clientY - U.top;
    };
    return oe(), se(), window.addEventListener("resize", oe), W.addEventListener("mousemove", Ce), W.addEventListener("mouseleave", xe), W.addEventListener("touchmove", de, { passive: !0 }), W.addEventListener("touchend", xe), () => {
      window.cancelAnimationFrame(K), window.removeEventListener("resize", oe), W.removeEventListener("mousemove", Ce), W.removeEventListener("mouseleave", xe), W.removeEventListener("touchmove", de), W.removeEventListener("touchend", xe);
    };
  }, []);
  const w = async (L) => {
    if (L.preventDefault(), !!v) {
      k(!0), D(null);
      try {
        const W = await t({ email: u.trim(), password: N, rememberLogin: p });
        if (!W.ok) {
          D(W.message);
          return;
        }
        H(!0), V.current = window.setTimeout(() => {
          H(!1), n();
        }, 900);
      } catch {
        D("登录失败，请稍后重试。");
      } finally {
        k(!1);
      }
    }
  }, he = async () => {
    !G.trim() || S > 0 || (k(!0), await new Promise((L) => window.setTimeout(L, 1e3)), k(!1), g(!0), A(60));
  }, ye = async () => {
    if (E === "email") {
      if (!G.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G) || !M.trim() || M.length < 6 || !b.trim() || b.length < 6 || b !== le) return;
      J("success");
    }
  }, re = () => {
    F(!1), J("email"), j(""), ee(""), X(""), ce(""), A(0), g(!1);
  };
  return /* @__PURE__ */ r("div", { ref: l, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: o, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ r("form", { onSubmit: w, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: u,
              onChange: (L) => {
                f(L.target.value), D(null);
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
              onChange: (L) => {
                m(L.target.value), D(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        z && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: z }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: p,
                  onChange: (L) => x(L.target.checked),
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
            disabled: !v,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: h ? "认证中..." : "登录" }),
              h && /* @__PURE__ */ r(
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
      !Q && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
              onClick: () => s("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Zr, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      Q && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: re,
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
                value: G,
                onChange: (L) => j(L.target.value),
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
                  onChange: (L) => ee(L.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: he,
                disabled: S > 0 || h || !G.trim(),
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
                value: b,
                onChange: (L) => X(L.target.value),
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
                onChange: (L) => ce(L.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${le.length > 0 && b !== le ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          le.length > 0 && b !== le && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ye,
              disabled: !G.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G) || !M.trim() || M.length < 6 || !b.trim() || b.length < 6 || b !== le,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        E === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
              onClick: re,
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
  const s = Math.random() * t, o = Math.random() * n;
  return {
    x: s,
    y: o,
    baseX: s,
    baseY: o,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Ls({
  mode: t = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: s,
  onRegister: o,
  onEnterWorkspace: l,
  onNavigate: u
}) {
  const f = fe(null), N = fe(null), m = fe(null), [p, x] = y("identity"), [h, k] = y(""), [$, H] = y(""), [z, D] = y(""), [V, Q] = y(""), [F, E] = y(""), [J, G] = y(""), j = t === "create-lab", [M, ee] = y(""), [b, X] = y(""), [le, ce] = y(!1), [S, A] = y(0), [B, g] = y(""), [v, w] = y(null), he = M.length > 0 && M.trim().length < 6;
  ge(() => {
    if (S <= 0) return;
    const K = window.setTimeout(() => A((Z) => Z - 1), 1e3);
    return () => clearTimeout(K);
  }, [S]), ge(
    () => () => {
      m.current !== null && window.clearTimeout(m.current);
    },
    []
  ), ge(() => {
    const K = f.current, Z = N.current;
    if (!K || !Z) return;
    const Y = K.getContext("2d");
    if (!Y) return;
    const R = window.getComputedStyle(document.documentElement), Le = R.getPropertyValue("--chatui-color-auth-particle-active").trim(), i = R.getPropertyValue("--chatui-color-auth-particle-idle").trim(), T = R.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let oe = 0, ue = 0, se = 0, Ce = window.devicePixelRatio || 1, xe = [];
    const de = { x: -1e3, y: -1e3, radius: 120 }, pe = 150, U = () => {
      const Se = Z.getBoundingClientRect();
      Ce = window.devicePixelRatio || 1, ue = Se.width, se = Se.height, K.width = ue * Ce, K.height = se * Ce, K.style.width = `${ue}px`, K.style.height = `${se}px`, Y.setTransform(Ce, 0, 0, Ce, 0, 0);
      const te = ue < 768 ? 40 : 90;
      xe = Array.from({ length: te }, () => Ia(ue, se));
    }, _e = (Se) => {
      Y.beginPath(), Y.arc(Se.x, Se.y, Se.size, 0, Math.PI * 2), Y.closePath(), Y.fill();
    }, qe = () => {
      Y.clearRect(0, 0, ue, se);
      for (let Se = 0; Se < xe.length; Se += 1) {
        const te = xe[Se];
        te.x += te.vx, te.y += te.vy, (te.x < 0 || te.x > ue) && (te.vx = -te.vx), (te.y < 0 || te.y > se) && (te.vy = -te.vy);
        const et = de.x - te.x, De = de.y - te.y, Pe = Math.sqrt(et * et + De * De) || 1, Ye = et / Pe, Ve = De / Pe, Qe = (de.radius - Pe) / de.radius, at = Ye * Qe * te.density, tt = Ve * Qe * te.density;
        Pe < de.radius ? (te.x -= at * 0.5, te.y -= tt * 0.5, Y.fillStyle = Le, te.size = Math.min(te.size + 0.1, 2.5)) : (te.x !== te.baseX && (te.x -= (te.x - te.baseX) / 50), te.y !== te.baseY && (te.y -= (te.y - te.baseY) / 50), Y.fillStyle = i, te.size = Math.max(te.size - 0.05, 1)), _e(te);
        for (let st = Se; st < xe.length; st += 1) {
          const Ke = xe[st], rt = te.x - Ke.x, Ze = te.y - Ke.y, Oe = Math.sqrt(rt * rt + Ze * Ze);
          if (Oe < pe) {
            const lt = (1 - Oe / pe) * 0.4;
            Y.beginPath(), Y.strokeStyle = T, Y.globalAlpha = lt, Y.lineWidth = 1, Y.moveTo(te.x, te.y), Y.lineTo(Ke.x, Ke.y), Y.stroke(), Y.globalAlpha = 1, Y.closePath();
          }
        }
      }
      oe = window.requestAnimationFrame(qe);
    }, We = (Se) => {
      const te = Z.getBoundingClientRect();
      de.x = Se.clientX - te.left, de.y = Se.clientY - te.top;
    }, Ge = () => {
      de.x = -1e3, de.y = -1e3;
    }, Ue = (Se) => {
      if (Se.touches.length < 1) return;
      const te = Z.getBoundingClientRect();
      de.x = Se.touches[0].clientX - te.left, de.y = Se.touches[0].clientY - te.top;
    };
    return U(), qe(), window.addEventListener("resize", U), Z.addEventListener("mousemove", We), Z.addEventListener("mouseleave", Ge), Z.addEventListener("touchmove", Ue, { passive: !0 }), Z.addEventListener("touchend", Ge), () => {
      window.cancelAnimationFrame(oe), window.removeEventListener("resize", U), Z.removeEventListener("mousemove", We), Z.removeEventListener("mouseleave", Ge), Z.removeEventListener("touchmove", Ue), Z.removeEventListener("touchend", Ge);
    };
  }, []);
  const ye = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(z) || S > 0)) {
      ce(!0), w(null);
      try {
        const K = await n(z);
        if (!K.ok) {
          w(K);
          return;
        }
        A(K.resendAfterSeconds ?? 60), g(K.message ?? "短信验证码已发送");
      } catch {
        w({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ce(!1);
      }
    }
  }, re = () => ({
    email: h.trim(),
    name: $.trim(),
    phoneNumber: z,
    phoneVerificationCode: V.trim(),
    mode: t,
    ...j ? { labName: J.trim() } : { inviteCode: F.trim() }
  }), L = () => {
    const K = ["identity", "password", "success"], Z = K.indexOf(p);
    Z < K.length - 1 && x(K[Z + 1]);
  }, W = be(() => {
    if (le) return !1;
    switch (p) {
      case "identity":
        return j ? h.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && $.trim().length > 0 && /^1[3-9]\d{9}$/.test(z) && V.length === 6 && J.trim().length > 0 : h.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && $.trim().length > 0 && /^1[3-9]\d{9}$/.test(z) && V.length === 6 && F.trim().length > 0;
      case "password":
        return M.trim().length >= 6 && M === b;
      default:
        return !1;
    }
  }, [p, h, $, z, V, F, J, j, M, b, le]), I = async (K) => {
    if (K.preventDefault(), !!W) {
      ce(!0), w(null);
      try {
        const Z = re(), Y = p === "password" ? await o({ ...Z, password: M }) : await s(Z);
        if (!Y.ok) {
          w(Y);
          return;
        }
        L();
      } catch {
        w({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ce(!1);
      }
    }
  }, we = {
    identity: j ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, ke = {
    identity: "",
    password: "",
    success: ""
  }, Te = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", Ne = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: N, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: f, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: we[p] }),
        ke[p] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: ke[p] })
      ] }),
      p !== "success" && /* @__PURE__ */ r("form", { onSubmit: I, className: "space-y-5", children: [
        p === "identity" && /* @__PURE__ */ r(Xe, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: h,
                onChange: (K) => {
                  k(K.target.value), w(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: $,
                onChange: (K) => {
                  H(K.target.value), w(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: z,
                  onChange: (K) => {
                    D(K.target.value.replace(/\D/g, "").slice(0, 11)), g(""), w(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Te
                }
              ),
              /* @__PURE__ */ e("span", { className: Ne, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ye,
                disabled: S > 0 || le || !/^1[3-9]\d{9}$/.test(z),
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
                value: V,
                onChange: (K) => {
                  Q(K.target.value.replace(/\D/g, "").slice(0, 6)), w(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "短信验证码" })
          ] }),
          B && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: B }),
          j ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: J,
                onChange: (K) => {
                  G(K.target.value), w(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: F,
                onChange: (K) => {
                  E(K.target.value), w(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Te
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "邀请码" })
          ] })
        ] }),
        p === "password" && /* @__PURE__ */ r(Xe, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: M,
                onChange: (K) => {
                  ee(K.target.value), w(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Te} ${(v == null ? void 0 : v.field) === "password" || he ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "设置密码" }),
            ((v == null ? void 0 : v.field) === "password" || he) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (v == null ? void 0 : v.field) === "password" ? v.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: b,
                onChange: (K) => {
                  X(K.target.value), w(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Te} ${b.length > 0 && M !== b ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Ne, children: "确认密码" }),
            b.length > 0 && M !== b && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        v && v.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: v.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !W,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: le ? "处理中..." : p === "password" ? "完成注册" : "下一步" }),
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
      p === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
              m.current = window.setTimeout(l, 1e3);
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
            onClick: () => u("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const Ra = (t, n) => {
  const s = Math.random() * t, o = Math.random() * n;
  return { x: s, y: o, baseX: s, baseY: o, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function zs({ onSendCode: t, onResetPassword: n, onBackToLogin: s }) {
  const o = fe(null), l = fe(null), u = fe(null), [f, N] = y("phone"), [m, p] = y(""), [x, h] = y(""), [k, $] = y(""), [H, z] = y(""), [D, V] = y(!1), [Q, F] = y(0), [E, J] = y(""), [G, j] = y(null);
  ge(() => {
    if (Q <= 0) return;
    const S = window.setTimeout(() => F((A) => A - 1), 1e3);
    return () => window.clearTimeout(S);
  }, [Q]), ge(() => {
    const S = o.current, A = l.current;
    if (!S || !A) return;
    const B = S.getContext("2d");
    if (!B) return;
    const g = window.getComputedStyle(document.documentElement), v = g.getPropertyValue("--chatui-color-auth-particle-active").trim(), w = g.getPropertyValue("--chatui-color-auth-particle-idle").trim(), he = g.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ye = 0, re = 0, L = 0, W = [];
    const I = { x: -1e3, y: -1e3, radius: 120 }, we = 150, ke = () => {
      const Y = A.getBoundingClientRect(), R = window.devicePixelRatio || 1;
      re = Y.width, L = Y.height, S.width = re * R, S.height = L * R, S.style.width = `${re}px`, S.style.height = `${L}px`, B.setTransform(R, 0, 0, R, 0, 0), W = Array.from({ length: re < 768 ? 40 : 90 }, () => Ra(re, L));
    }, Te = () => {
      B.clearRect(0, 0, re, L);
      for (let Y = 0; Y < W.length; Y += 1) {
        const R = W[Y];
        R.x += R.vx, R.y += R.vy, (R.x < 0 || R.x > re) && (R.vx = -R.vx), (R.y < 0 || R.y > L) && (R.vy = -R.vy);
        const Le = I.x - R.x, i = I.y - R.y, T = Math.sqrt(Le * Le + i * i) || 1, oe = (I.radius - T) / I.radius;
        T < I.radius ? (R.x -= Le / T * oe * R.density * 0.5, R.y -= i / T * oe * R.density * 0.5, B.fillStyle = v, R.size = Math.min(R.size + 0.1, 2.5)) : (R.x -= (R.x - R.baseX) / 50, R.y -= (R.y - R.baseY) / 50, B.fillStyle = w, R.size = Math.max(R.size - 0.05, 1)), B.beginPath(), B.arc(R.x, R.y, R.size, 0, Math.PI * 2), B.fill();
        for (let ue = Y; ue < W.length; ue += 1) {
          const se = W[ue], Ce = R.x - se.x, xe = R.y - se.y, de = Math.sqrt(Ce * Ce + xe * xe);
          de >= we || (B.beginPath(), B.globalAlpha = (1 - de / we) * 0.4, B.strokeStyle = he, B.lineWidth = 1, B.moveTo(R.x, R.y), B.lineTo(se.x, se.y), B.stroke(), B.globalAlpha = 1);
        }
      }
      ye = window.requestAnimationFrame(Te);
    }, Ne = (Y) => {
      const R = A.getBoundingClientRect();
      I.x = Y.clientX - R.left, I.y = Y.clientY - R.top;
    }, K = (Y) => {
      if (!Y.touches.length) return;
      const R = A.getBoundingClientRect();
      I.x = Y.touches[0].clientX - R.left, I.y = Y.touches[0].clientY - R.top;
    }, Z = () => {
      I.x = -1e3, I.y = -1e3;
    };
    return ke(), Te(), window.addEventListener("resize", ke), A.addEventListener("mousemove", Ne), A.addEventListener("mouseleave", Z), A.addEventListener("touchmove", K, { passive: !0 }), A.addEventListener("touchend", Z), () => {
      window.cancelAnimationFrame(ye), window.removeEventListener("resize", ke), A.removeEventListener("mousemove", Ne), A.removeEventListener("mouseleave", Z), A.removeEventListener("touchmove", K), A.removeEventListener("touchend", Z);
    };
  }, []), ge(() => () => {
    u.current !== null && window.clearTimeout(u.current);
  }, []);
  const M = be(() => /^1[3-9]\d{9}$/.test(m) && x.length === 6 && k.length >= 6 && k === H, [H, k, m, x]), ee = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", b = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: l, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: o, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      f === "phone" ? /* @__PURE__ */ r(Xe, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (S) => {
          if (S.preventDefault(), !(!M || D)) {
            V(!0), j(null);
            try {
              const A = await n({ phoneNumber: m, phoneVerificationCode: x, newPassword: k });
              if (!A.ok) {
                j(A.message);
                return;
              }
              N("success");
            } catch {
              j("密码重置失败，请稍后重试。");
            } finally {
              V(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: m, onChange: (S) => {
                p(S.target.value.replace(/\D/g, "").slice(0, 11)), J(""), j(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: ee }),
              /* @__PURE__ */ e("span", { className: b, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(m) || Q > 0 || D)) {
                V(!0), j(null);
                try {
                  const S = await t(m);
                  if (!S.ok) {
                    j(S.message);
                    return;
                  }
                  F(S.resendAfterSeconds ?? 60), J(S.message ?? "短信验证码已发送");
                } catch {
                  j("验证码发送失败，请稍后重试。");
                } finally {
                  V(!1);
                }
              }
            }, disabled: Q > 0 || D || !/^1[3-9]\d{9}$/.test(m), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${Q > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: Q > 0 ? `${Q}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: x, onChange: (S) => {
              h(S.target.value.replace(/\D/g, "").slice(0, 6)), j(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: ee }),
            /* @__PURE__ */ e("span", { className: b, children: "短信验证码" })
          ] }),
          E && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: E }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: k, onChange: (S) => {
              $(S.target.value), j(null);
            }, required: !0, placeholder: " ", className: ee }),
            /* @__PURE__ */ e("span", { className: b, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: H, onChange: (S) => {
              z(S.target.value), j(null);
            }, required: !0, placeholder: " ", className: `${ee} ${H.length > 0 && k !== H ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: b, children: "确认新密码" }),
            H.length > 0 && k !== H && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          G && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: G }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !M || D, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: D ? "处理中..." : "重置密码" }),
            D && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(gt, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          u.current = window.setTimeout(() => s({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const lr = 10, or = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function As({
  currentPath: t,
  projects: n,
  initialChats: s,
  logoUrl: o,
  user: l,
  children: u,
  initialAiUsageWarningActive: f = !1,
  aiUsageWarningActive: N,
  canViewAiUsage: m = !0,
  canManageMembers: p = !0,
  chatActions: x = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: h,
  onLogout: k,
  onChatsChange: $,
  onRenameChat: H,
  onTogglePinChat: z,
  onShareChat: D,
  onDeleteChat: V
}) {
  const [Q, F] = y(!0), [E, J] = y(240), [G, j] = y(!1), M = fe(0), ee = fe(240), [b, X] = y(() => {
    const c = { unassigned: !0 };
    return n.forEach((q) => {
      c[q.id] = !0;
    }), c;
  }), [le, ce] = y(!1), [S, A] = y(() => [...s]), [B, g] = y(null), [v, w] = y("time"), [he, ye] = y(!1), [re, L] = y(null), [W, I] = y(""), [we, ke] = y(!1), [Te, Ne] = y(""), [K, Z] = y(!1), [Y, R] = y(f), [Le, i] = y(!1), T = N ?? Y, oe = fe(null), ue = fe(null), se = fe(null), Ce = !!(x.rename || x.share || x.pin || x.delete), xe = () => {
    ce(!1), k();
  }, de = (c) => {
    X((q) => ({ ...q, [c]: !q[c] }));
  }, pe = (c) => {
    var O;
    A((C) => C.filter((ne) => ne.id !== c)), g(null), re === c && (L(null), I("")), V == null || V(c), ((O = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : O[1]) === c && h("/chat/new", { replace: !0 });
  }, U = (c) => {
    const q = S.find((C) => C.id === c);
    if (!q) return;
    const O = !q.isPinned;
    A((C) => C.map(
      (ze) => ze.id === c ? { ...ze, isPinned: O } : ze
    )), z == null || z(c, O), g(null);
  }, _e = (c) => {
    L(c.id), I(c.title), g(null);
  }, qe = () => {
    L(null), I("");
  }, We = (c) => {
    const q = W.trim();
    q && (A((O) => O.map((C) => C.id === c ? { ...C, title: q } : C)), H == null || H(c, q)), qe();
  }, Ge = (c, q) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), We(q);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), qe());
  }, Ue = (c) => {
    var q;
    if (re === c) {
      (q = oe.current) == null || q.focus();
      return;
    }
    h(`/chat/${c}`);
  }, Se = (c, q = !1) => re === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (C) => {
        var ne;
        C.stopPropagation(), (ne = oe.current) == null || ne.focus();
      },
      children: [
        q && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: oe,
            value: W,
            onChange: (C) => I(C.target.value),
            onKeyDown: (C) => Ge(C, c.id),
            onBlur: () => We(c.id),
            onClick: (C) => C.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    q && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), te = (c) => {
    M.current = c.clientX, ee.current = E, j(!0);
  };
  ge(() => {
    if (!G) return;
    const c = 200, q = 440, O = (ne) => {
      const ze = ne.clientX - M.current, Ae = Math.min(q, Math.max(c, ee.current + ze));
      J(Ae);
    }, C = () => {
      j(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", O), window.addEventListener("mouseup", C), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", C);
    };
  }, [G, E]), ge(() => {
    Q || J(240);
  }, [Q]), ge(() => {
    $ == null || $(S);
  }, [S, $]), ge(() => {
    A([...s]);
  }, [s]), ge(() => {
    if (!re) return;
    const c = window.requestAnimationFrame(() => {
      var q;
      (q = oe.current) == null || q.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [re]), ge(() => () => {
    ue.current !== null && window.clearTimeout(ue.current), se.current !== null && window.clearTimeout(se.current);
  }, []);
  const et = () => {
    ye(!0), ue.current !== null && window.clearTimeout(ue.current), ue.current = window.setTimeout(() => {
      ye(!1);
    }, 600);
  }, De = () => {
    Z(!0), se.current !== null && window.clearTimeout(se.current), se.current = window.setTimeout(() => {
      Z(!1);
    }, 600);
  };
  ge(() => {
    T || i(!1);
  }, [T]);
  const Pe = () => {
    i(!0), h("/ai-usage");
  }, Ye = be(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...m ? [{
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
  ], [p, m]), Ve = (c) => {
    if (ce(!1), c.key === "skills") {
      h("/skills");
      return;
    }
    if (c.key === "ai-usage") {
      h("/ai-usage");
      return;
    }
    if (c.key === "members") {
      h("/members");
      return;
    }
    if (c.key === "system-settings") {
      h("/system-settings");
      return;
    }
    c.key === "logout" && xe();
  }, Qe = be(() => x.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(vr, { size: 14 }), danger: !0 }] : [], [x.delete]), at = (c) => {
    const q = [];
    return x.rename && q.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(an, { size: 14 }) }), x.share && q.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(sn, { size: 14 }) }), x.pin && q.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(jt, { size: 14 })
    }), q;
  }, tt = (c, q) => {
    const O = or(c);
    return !Ce && !O ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${O ? "ml-6" : "ml-2"}`, children: [
      O && !q && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Ce && /* @__PURE__ */ e(
        At,
        {
          open: q,
          onOpenChange: (C) => g(C ? c.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, E - 56)),
          trigger: /* @__PURE__ */ e(nn, { size: 14 }),
          onTriggerClick: (C) => {
            C.stopPropagation();
          },
          items: at(c),
          footerItems: Qe,
          onItemClick: (C, ne) => {
            if (ne.stopPropagation(), C.key === "rename") {
              _e(c);
              return;
            }
            if (C.key === "share") {
              D ? D(c.id) : h(`/chat/${c.id}?share=1`), g(null);
              return;
            }
            if (C.key === "pin") {
              U(c.id);
              return;
            }
            if (C.key === "delete") {
              pe(c.id);
              return;
            }
            g(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${q ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, st = [
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
  ], Ke = be(() => {
    const c = t.match(/^\/chat\/([^/]+)$/);
    return c ? S.find((q) => q.id === c[1]) ?? null : null;
  }, [S, t]), rt = be(
    () => S.filter((c) => c.isPinned),
    [S]
  ), Ze = be(
    () => S.filter((c) => !c.isPinned),
    [S]
  ), Oe = be(
    () => v === "time" ? rt.slice(0, lr) : rt,
    [rt, v]
  ), lt = be(() => {
    if (v !== "time") return [];
    const c = Math.max(lr - Oe.length, 0);
    return Ze.slice(0, c);
  }, [v, Ze, Oe.length]), a = be(
    () => Oe.length + lt.length,
    [Oe.length, lt.length]
  ), d = v === "time" && S.length > a, _ = be(() => new Map(n.map((c) => [c.id, c.name])), [n]), P = Te.trim().toLowerCase(), ie = be(() => P ? S.filter((c) => {
    const q = c.projectId ? _.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${q} ${c.date}`.toLowerCase().includes(P);
  }) : S, [S, P, _]);
  ge(() => {
    if (!Ke) return;
    const c = Ke.projectId ?? "unassigned";
    X((q) => q[c] !== !1 ? q : { ...q, [c]: !0 });
  }, [Ke]);
  const ae = () => {
    Ne(""), ke(!0);
  }, me = () => {
    ke(!1), Z(!1), se.current !== null && (window.clearTimeout(se.current), se.current = null);
  }, ve = (c) => {
    ke(!1), h(`/chat/${c}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: Q ? E : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${Q ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: E, minWidth: E },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => h("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: o, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => F(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Jr, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => h("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(en, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: st.map((c) => {
                  const q = c.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => h(c.path),
                      className: `nav-item ${q ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
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
                    onScroll: et,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${he ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Oe.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Oe.map((c) => {
                          const q = t === `/chat/${c.id}`, O = B === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ue(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${re === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : q ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Se(c, v !== "time"),
                                re !== c.id && tt(c, O)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      v === "project" && n.map((c) => {
                        const q = S.filter((C) => C.projectId === c.id && !C.isPinned), O = b[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => de(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: O ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          O && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: q.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : q.map((C) => {
                            const ne = t === `/chat/${C.id}`, ze = B === C.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ue(C.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${re === C.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ne ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Se(C),
                                  re !== C.id && tt(C, ze)
                                ]
                              }
                            ) }, C.id);
                          }) })
                        ] }, c.id);
                      }),
                      v === "project" && (() => {
                        const c = S.filter((O) => !O.projectId && !O.isPinned);
                        if (c.length === 0) return null;
                        const q = b.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => de("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: q ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          q && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((O) => {
                            const C = t === `/chat/${O.id}`, ne = B === O.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ue(O.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${re === O.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : C ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Se(O),
                                  re !== O.id && tt(O, ne)
                                ]
                              }
                            ) }, O.id);
                          }) })
                        ] });
                      })(),
                      v === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        lt.map((c) => {
                          const q = t === `/chat/${c.id}`, O = B === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ue(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${re === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : q ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Se(c),
                                re !== c.id && tt(c, O)
                              ]
                            }
                          ) }, c.id);
                        }),
                        d && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: ae,
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
                T && !Le && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(tn, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Pe,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  At,
                  {
                    open: le,
                    onOpenChange: ce,
                    placement: "top-start",
                    width: E - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: l.avatarUrl ? /* @__PURE__ */ e("img", { src: l.avatarUrl, alt: `${l.name}头像`, className: "h-full w-full object-cover" }) : l.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: l.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(rn, { size: 18 }) })
                    ] }),
                    items: Ye,
                    onItemClick: Ve,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          Q && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: te,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${Q ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof u == "function" ? u({ isSidebarOpen: Q, setIsSidebarOpen: F, chats: S, setChats: A, setAiUsageWarningActive: R }) : u }) }) }),
    /* @__PURE__ */ e(
      Ut,
      {
        visible: we,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: me,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              dt,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: Te,
                onChange: (c) => Ne(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          ie.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: De,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${K ? "is-scrolling is-scrolling-thin" : ""}`,
              children: ie.map((c) => {
                const q = c.projectId ? _.get(c.projectId) ?? "未分组" : "未分组", O = or(c);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => ve(c.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: c.title }),
                        O && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: q }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: c.date })
                      ] })
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
function Es({
  projects: t,
  selectedProjectId: n,
  disabled: s = !1,
  embedded: o = !1,
  isSidebarOpen: l = !0,
  skillOptions: u,
  fileOptions: f,
  quickPrompts: N,
  uploadAccept: m,
  validateUploadFile: p,
  onUploadValidationError: x,
  onSelectProject: h,
  onCreateProject: k,
  onOpenSidebar: $,
  onSelectQuickPrompt: H,
  onSend: z
}) {
  const [D, V] = y(!1), [Q, F] = y(!1), [E, J] = y(""), G = fe(null), j = fe(null), M = be(
    () => t.find((A) => A.id === n) ?? null,
    [t, n]
  ), ee = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !M
    },
    ...t.map((A) => ({
      key: A.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: A.name }),
      active: (M == null ? void 0 : M.id) === A.id
    }))
  ], [t, M]), b = be(() => k ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(wr, { size: 16 }) }] : [], [k]), X = () => {
    F(!1), J("");
  }, le = (A) => {
    if (A.key === "create") {
      F(!0), J("");
      return;
    }
    const B = A.key === "none" ? null : String(A.key);
    h(B), V(!1);
  }, ce = () => {
    const A = E.trim();
    if (!A) return;
    const B = t.find(
      (g) => g.name.trim().toLowerCase() === A.toLowerCase()
    );
    B ? h(B.id) : k == null || k(A), X(), V(!1);
  };
  ge(() => {
    if (!Q) return;
    const A = (B) => {
      var v, w;
      const g = B.target;
      (v = j.current) != null && v.contains(g) || (w = G.current) != null && w.contains(g) || (X(), V(!1));
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, [Q]);
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
      /* @__PURE__ */ e("div", { ref: G, className: "relative", children: Q && /* @__PURE__ */ e(
        "div",
        {
          ref: j,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Tr,
                {
                  value: E,
                  onChange: (A) => J(A.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(He, { type: "secondary", size: "small", onClick: X, children: "取消" }),
              /* @__PURE__ */ e(
                He,
                {
                  type: "primary",
                  size: "small",
                  onClick: ce,
                  disabled: !E.trim(),
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
          onSend: z,
          disabled: s,
          skillOptions: u,
          fileOptions: f,
          uploadAccept: m,
          validateUploadFile: p,
          onUploadValidationError: x,
          leadingControls: /* @__PURE__ */ e(
            At,
            {
              open: D,
              onOpenChange: (A) => {
                !A && Q || (V(A), A ? F(!1) : X());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: M ? M.name : "工作项目" }),
                /* @__PURE__ */ e(zt, { size: 14 })
              ] }),
              items: ee,
              footerItems: b,
              onItemClick: le,
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
        onSelect: H ?? z,
        prompts: N,
        disabled: s
      }
    )
  ] });
  return o ? S : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      ya,
      {
        isSidebarOpen: l,
        onOpenSidebar: $ ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: S })
  ] });
}
const Da = "_shell_1a2mx_1", ja = "_header_1a2mx_9", Fa = "_headerActions_1a2mx_17", Ha = "_saveError_1a2mx_25", qa = "_viewport_1a2mx_33", Wa = "_editorCanvas_1a2mx_41", Ua = "_titleInput_1a2mx_49", Va = "_milkdownHost_1a2mx_57", ot = {
  shell: Da,
  header: ja,
  headerActions: Fa,
  saveError: Ha,
  viewport: qa,
  editorCanvas: Wa,
  titleInput: Ua,
  milkdownHost: Va
}, Oa = {
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
`, qt = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="8" y="23" fill="currentColor" font-family="inherit" font-size="22" font-weight="500">T</text>
  </svg>
`, Ka = `
  <span class="chatui-selection-block-type-current">${qt}</span>
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
  createdByName: s,
  updatedByName: o,
  updatedAt: l,
  index: u,
  attachments: f = [],
  attachmentAccept: N,
  attachmentUnavailableHint: m,
  saving: p = !1,
  saveError: x,
  layout: h = "page",
  showHeaderActions: k = !0,
  onTitleChange: $,
  onMarkdownChange: H,
  onUploadAttachments: z,
  onDeleteAttachment: D,
  onSave: V,
  onClose: Q
}) {
  const F = fe(null), E = fe(null), J = fe(n), G = fe(H), [j, M] = y(!1), [ee, b] = y(null), [X, le] = y(""), ce = h === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => {
    G.current = H;
  }, [H]), ge(() => {
    const B = F.current;
    if (!B) return;
    const g = /* @__PURE__ */ new Map(), v = new wt({
      root: B,
      defaultValue: J.current,
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
              a.build().flatMap((O) => O.items).map((O) => [O.key, O])
            ), _ = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), P = (O) => {
              const C = O.get(Nt), ne = I, Ae = (ne != null && ne.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? ne : ne == null ? void 0 : ne.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (ne instanceof HTMLElement ? ne : null);
              if (!Ae) return C;
              try {
                const Ee = C.posAtDOM(Ae, 0), Ie = C.state.doc.resolve(
                  Math.min(
                    Math.max(Ee, 0),
                    C.state.doc.content.size
                  )
                );
                C.dispatch(
                  C.state.tr.setSelection(
                    Yt.near(Ie)
                  )
                );
              } catch {
              }
              return C;
            }, ie = (O) => {
              const C = P(O), ne = kt.type(O), ze = (Ie) => {
                const { $from: je } = C.state.selection;
                for (let Fe = je.depth; Fe > 0; Fe -= 1)
                  if (je.node(Fe).type.name === Ie) return !0;
                return !1;
              };
              for (let Ie = 0; Ie < 10 && !(!ze(ne.name) || !un(ne)(
                C.state,
                C.dispatch
              )); Ie += 1)
                ;
              for (let Ie = 0; Ie < 10 && !(!ze("blockquote") || !dn(C.state, C.dispatch)); Ie += 1)
                ;
              const Ae = pn.type(O), Ee = C.state.selection.$from.parent;
              Ee.isTextblock && Ee.type !== Ae && O.get(cn).call(hn.key, {
                nodeType: Ae
              });
            };
            g.set(
              "paragraph",
              ie
            );
            const ae = (O) => {
              const C = P(O), { selection: ne } = C.state, ze = kt.type(O), { $from: Ae } = ne;
              let Ee = -1;
              for (let je = Ae.depth; je > 0; je -= 1)
                if (Ae.node(je).type.name === ze.name) {
                  Ee = je;
                  break;
                }
              if (Ee > 0) {
                const je = Ee - 1, Fe = je > 0 && Ae.node(je).childCount === 1 ? je : Ee;
                C.dispatch(
                  C.state.tr.delete(
                    Ae.before(Fe),
                    Ae.after(Fe)
                  )
                );
                return;
              }
              if (!ne.empty) {
                C.dispatch(
                  C.state.tr.delete(ne.from, ne.to)
                );
                return;
              }
              const Ie = Math.min(1, Ae.depth);
              Ie < 1 || C.dispatch(
                C.state.tr.delete(
                  Ae.before(Ie),
                  Ae.after(Ie)
                )
              );
            }, me = (O, C, ne) => {
              const ze = d.get(C);
              if (!ze) return;
              const { key: Ae, ...Ee } = ze, Ie = (ne == null ? void 0 : ne.icon) ?? Ee.icon, je = [
                ht(C),
                ne == null ? void 0 : ne.iconClass
              ].filter(Boolean).join(" "), Fe = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(C), ut = _.has(C) ? (Je) => {
                var Ot;
                if (ie(Je), !Fe) {
                  if (C === "quote") {
                    const nt = Je.get(Nt), { $from: mt } = nt.state.selection, yt = mt.parent, Rt = mt.before(mt.depth), Kt = nt.state.schema.nodes.blockquote;
                    if (!Kt) return;
                    const Br = Kt.create(null, yt), vt = nt.state.tr.replaceWith(
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
                  (Ot = Ee.onRun) == null || Ot.call(Ee, Je);
                  return;
                }
                const xt = Je.get(Nt), Er = C === "ordered-list" ? Qt.type(Je) : Zt.type(Je);
                if (!mn(Er)(
                  xt.state,
                  xt.dispatch
                ) || C !== "task-list") return;
                const Pr = kt.type(Je), { $from: It } = xt.state.selection;
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
              } : Ee.onRun;
              _.has(C) && ut && g.set(
                C,
                ut
              ), O.addItem(C, {
                ...Ee,
                label: (ne == null ? void 0 : ne.label) ?? Ee.label,
                icon: Mt(Ie, je),
                onRun: ut
              });
            };
            a.clear();
            const ve = a.addGroup("basic", "基础");
            ve.addItem("paragraph", {
              label: "正文",
              icon: Mt(
                qt,
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
            ].forEach(({ key: O, icon: C, label: ne }) => {
              me(ve, O, { icon: C, label: ne });
            });
            const c = a.addGroup("common", "常用");
            me(c, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), me(c, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), a.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Mt(
                Ga,
                "chatui-document-menu-action-delete"
              ),
              onRun: ae
            });
          }
        }
      }
    });
    v.on((a) => {
      a.markdownUpdated((d, _, P) => {
        _ !== P && G.current(_);
      });
    });
    const w = B.ownerDocument;
    let he = "", ye = null, re = null, L = !0, W = !1, I = null, we = null, ke = null, Te = null, Ne = null, K = null, Z = null, Y = null;
    const R = (a) => {
      const d = a == null ? void 0 : a.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Le = () => B.querySelector(".ProseMirror"), i = (a) => {
      const d = Le();
      if (!a || !(d != null && d.contains(a))) return null;
      const _ = a.closest(".milkdown-list-item-block");
      if (_ && d.contains(_)) return _;
      let P = a;
      for (; P != null && P.parentElement && P.parentElement !== d; )
        P = P.parentElement;
      return !P || P.parentElement !== d || P.classList.contains("prosemirror-virtual-cursor") ? null : P;
    }, T = () => {
      const a = Le();
      return a ? Array.from(a.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const _ = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return _.length ? _ : [d];
      }) : [];
    }, oe = (a) => {
      var P;
      const d = T(), _ = d.map((ie) => ({ block: ie, rect: ie.getBoundingClientRect() })).filter(({ rect: ie }) => a >= ie.top && a <= ie.bottom).sort((ie, ae) => ie.rect.height - ae.rect.height);
      return _[0] ? _[0].block : ((P = d.map((ie) => {
        const ae = ie.getBoundingClientRect(), me = Math.min(
          Math.abs(a - ae.top),
          Math.abs(a - ae.bottom)
        );
        return { block: ie, distance: me };
      }).sort((ie, ae) => ie.distance - ae.distance)[0]) == null ? void 0 : P.block) ?? null;
    }, ue = (a, d = L) => {
      var q, O, C, ne;
      const _ = I, P = _ ? R(_) : a, ie = _ ? _.matches("p") : d, ae = w.querySelector(
        ".milkdown-slash-menu"
      );
      (O = (q = ae == null ? void 0 : ae.querySelector(`svg.${ht("paragraph")}`)) == null ? void 0 : q.closest("li")) == null || O.toggleAttribute(
        "hidden",
        P === null && ie
      ), ae == null || ae.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (ze) => ze.removeAttribute("data-chatui-selected")
      ), P && ((ne = (C = ae == null ? void 0 : ae.querySelector(`svg.${ht(P)}`)) == null ? void 0 : C.closest("li")) == null || ne.setAttribute("data-chatui-selected", "true"));
      const me = w.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!me) return;
      he || (he = me.innerHTML);
      const ve = P ? ae == null ? void 0 : ae.querySelector(
        `svg.${ht(P)}`
      ) : null, c = P ?? "default";
      me.dataset.chatuiBlockType !== c && (me.innerHTML = (ve == null ? void 0 : ve.outerHTML) ?? he, me.dataset.chatuiBlockType = c);
    }, se = (a) => {
      a !== re && (re = a, ye = R(a), L = (a == null ? void 0 : a.matches("p")) ?? !1), ue(ye, L);
    }, Ce = () => {
      var _;
      const a = (_ = w.getSelection()) == null ? void 0 : _.anchorNode, d = a instanceof Element ? a : a == null ? void 0 : a.parentElement;
      se(i(d ?? null));
    }, xe = (a) => {
      const { $from: d } = a.get(Nt).state.selection, _ = kt.type(a), P = Qt.type(a), ie = Zt.type(a);
      for (let me = d.depth; me > 0; me -= 1) {
        const ve = d.node(me);
        if (ve.type === _ && typeof ve.attrs.checked == "boolean")
          return "task-list";
      }
      for (let me = d.depth; me > 0; me -= 1) {
        const ve = d.node(me);
        if (ve.type === P) return "ordered-list";
        if (ve.type === ie) return "bullet-list";
        if (ve.type.name === "blockquote") return "quote";
      }
      const ae = d.parent;
      if (ae.type === fn.type(a)) {
        const me = Number(ae.attrs.level);
        if (me === 1 || me === 2 || me === 3)
          return `h${me}`;
      }
      return ae.type.name === "code_block" ? "code" : "paragraph";
    }, de = (a) => {
      var d;
      return a === "paragraph" ? Mt(
        qt,
        "chatui-selection-block-type-paragraph"
      ) : a === "h1" ? pt(1) : a === "h2" ? pt(2) : a === "h3" ? pt(3) : a === "code" ? ir : ((d = w.querySelector(
        `.milkdown-slash-menu svg.${ht(a)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${a === "quote" ? "“" : "•"}</text></svg>`;
    }, pe = () => {
      var a;
      return ((a = w.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : a.closest(".toolbar-item")) ?? null;
    }, U = () => {
      const a = pe();
      if (!a) return;
      a.classList.add("chatui-selection-block-type-trigger"), a.setAttribute("aria-haspopup", "menu"), a.setAttribute("aria-label", "切换当前块类型");
      const d = a.closest(".milkdown-toolbar"), _ = a.previousElementSibling instanceof HTMLElement && a.previousElementSibling.classList.contains("divider") ? a.previousElementSibling : null;
      d && d.firstElementChild !== a && (d.prepend(a), _ && a.after(_));
      let P = "paragraph";
      v.editor.action((ae) => {
        P = xe(ae);
      }), a.dataset.chatuiBlockType = P;
      const ie = a.querySelector(
        ".chatui-selection-block-type-current"
      );
      ie && (ie.innerHTML = de(P)), K == null || K.querySelectorAll("[data-block-type]").forEach((ae) => {
        ae.dataset.active = ae.dataset.blockType === P ? "true" : "false";
      });
    }, _e = () => {
      var a;
      Z !== null && (window.clearTimeout(Z), Z = null), K && (K.dataset.show = "false"), (a = pe()) == null || a.setAttribute("aria-expanded", "false");
    }, qe = () => {
      Z !== null && window.clearTimeout(Z), Z = window.setTimeout(
        _e,
        120
      );
    }, We = () => {
      if (K) return K;
      const a = w.createElement("div");
      return a.className = "chatui-selection-block-type-menu", a.dataset.show = "false", a.setAttribute("role", "menu"), Ya.forEach(({ key: d, label: _ }) => {
        const P = w.createElement("button");
        P.type = "button", P.dataset.blockType = d, P.setAttribute("role", "menuitem"), P.innerHTML = `<span class="chatui-selection-block-type-option-icon">${de(d)}</span><span>${_}</span>`, P.addEventListener("pointerdown", (ie) => {
          ie.preventDefault(), ie.stopPropagation(), v.editor.action((ae) => {
            var me;
            (me = g.get(d)) == null || me(ae);
          }), _e(), window.requestAnimationFrame(U);
        }), a.append(P);
      }), a.addEventListener("pointerenter", () => {
        Z !== null && (window.clearTimeout(Z), Z = null);
      }), a.addEventListener("pointerleave", qe), w.body.append(a), K = a, a;
    }, Ge = () => {
      const a = pe();
      if (!a) return;
      Z !== null && (window.clearTimeout(Z), Z = null);
      const d = We();
      U(), d.dataset.show = "true", d.style.visibility = "hidden";
      const _ = a.getBoundingClientRect(), P = d.getBoundingClientRect(), ie = 6, ae = 8, me = _.top >= P.height + ie + ae, ve = Math.min(
        Math.max(_.left, ae),
        w.documentElement.clientWidth - P.width - ae
      ), c = me ? _.top - P.height - ie : _.bottom + ie;
      d.style.left = `${ve}px`, d.style.top = `${c}px`, d.style.visibility = "visible", d.dataset.placement = me ? "top" : "bottom", a.setAttribute("aria-expanded", "true");
    }, Ue = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && Ge();
    }, Se = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const _ = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      _ != null && _.closest(".chatui-selection-block-type-menu") || qe();
    }, te = () => {
      window.requestAnimationFrame(U);
    }, et = () => {
      const a = we, d = w.querySelector(
        ".milkdown-slash-menu"
      );
      if (!a || !d || d.dataset.show !== "true") return;
      const _ = d.getBoundingClientRect();
      if (!_.width || !_.height) return;
      const P = a.getBoundingClientRect(), ie = w.defaultView, ae = (ie == null ? void 0 : ie.innerWidth) ?? w.documentElement.clientWidth, me = (ie == null ? void 0 : ie.innerHeight) ?? w.documentElement.clientHeight, ve = 12, c = 8, q = Math.max(
        ve,
        ae - _.width - ve
      ), O = Math.max(
        ve,
        me - _.height - ve
      ), C = (Fe) => Math.min(Math.max(Fe, ve), q), ne = (Fe) => Math.min(Math.max(Fe, ve), O);
      let ze = "left", Ae = P.left - _.width - c, Ee = ne(P.top);
      if (Ae < ve) {
        const Fe = P.top - c - ve, ut = me - P.bottom - c - ve, Je = ut >= _.height || ut >= Fe;
        ze = Je ? "bottom" : "top", Ae = C(P.left), Ee = ne(Je ? P.bottom + c : P.top - _.height - c);
      }
      const Ie = `${Ae}px`, je = `${Ee}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== Ie && d.style.setProperty("--chatui-block-menu-left", Ie), d.style.getPropertyValue("--chatui-block-menu-top") !== je && d.style.setProperty("--chatui-block-menu-top", je), d.dataset.chatuiPlacement = ze;
    }, De = () => {
      const a = w.querySelector(
        ".milkdown-slash-menu"
      );
      a && (a.style.removeProperty("--chatui-block-menu-left"), a.style.removeProperty("--chatui-block-menu-top"), delete a.dataset.chatuiPlacement);
    }, Pe = (a) => {
      a !== Ne && (Ne == null || Ne.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), Ne = a, Ne == null || Ne.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Ye = () => {
      Te !== null && window.cancelAnimationFrame(Te), Te = window.requestAnimationFrame(() => {
        Te = null, et();
      });
    }, Ve = (a) => {
      w.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        a && d.contains(a) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, Qe = () => {
      we = null, W = !1, I = null, Pe(null), v.editor.action((a) => {
        a.get("menuAPICtx").hide();
      }), De(), Ve(null);
    }, at = (a) => {
      const d = a.target instanceof Element ? a.target : null, _ = w.querySelector(
        ".milkdown-slash-menu"
      );
      if (_) {
        const ae = _.getBoundingClientRect(), me = ae.width > 0 && ae.height > 0, ve = a.clientX >= ae.left && a.clientX <= ae.right && a.clientY >= ae.top && a.clientY <= ae.bottom;
        if (me) {
          if (ve) {
            Pe(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), W = !0;
            return;
          }
          if (Pe(null), d != null && d.closest(".milkdown-block-handle")) return;
          const c = Le(), q = d && (c != null && c.contains(d)) ? i(d) ?? oe(a.clientY) : null;
          if (q && I && q !== I) {
            Qe();
            return;
          }
          if (q === I) return;
          W && Qe();
          return;
        }
        W = !1, Pe(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        ue(ye);
        return;
      }
      const P = Le();
      if (!d || !(P != null && P.contains(d))) return;
      const ie = i(d) ?? oe(a.clientY);
      se(ie);
    }, tt = (a) => {
      var ve;
      const d = w.querySelector(
        ".milkdown-slash-menu"
      );
      if (we === a && (d == null ? void 0 : d.dataset.show) === "true") {
        Ve(a), Ye();
        return;
      }
      const _ = a.getBoundingClientRect(), P = oe(
        _.top + _.height / 2
      );
      P && se(P);
      const ie = ye, ae = L;
      we = a, I = P ?? re, Ve(a);
      const me = ((ve = w.defaultView) == null ? void 0 : ve.PointerEvent) ?? PointerEvent;
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
        ue(ie, ae), Ye();
      }, 0);
    }, st = (a) => {
      const d = a.target instanceof Element ? a.target : null, _ = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (_) {
        tt(_);
        return;
      }
      Pe(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, Ke = (a) => {
      const d = a.target instanceof Element ? a.target : null, _ = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!_) return;
      const P = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      if (P && _.contains(P)) return;
      const ie = P == null ? void 0 : P.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      Pe(ie ?? null);
    }, rt = (a) => {
      const d = a.target instanceof Element ? a.target : null, _ = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      _ && tt(_);
    }, Ze = (a) => {
      if (!a.isTrusted) return;
      const d = a.target instanceof Element ? a.target : null, _ = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), P = w.querySelector(
        ".milkdown-slash-menu"
      );
      _ && we === _ && (P == null ? void 0 : P.dataset.show) === "true" && (a.preventDefault(), a.stopImmediatePropagation());
    }, Oe = (a) => {
      a.key === "/" && window.setTimeout(Ce, 0);
    };
    w.addEventListener("pointermove", at), w.addEventListener("pointerover", st), w.addEventListener("pointerout", Ke), w.addEventListener(
      "pointerover",
      Ue
    ), w.addEventListener(
      "pointerout",
      Se
    ), w.addEventListener(
      "selectionchange",
      te
    ), w.addEventListener(
      "pointerdown",
      Ze,
      !0
    ), w.addEventListener(
      "pointerup",
      Ze,
      !0
    ), w.addEventListener("click", rt), B.addEventListener("keyup", Oe);
    const lt = v.create();
    return lt.then(() => {
      var _;
      (_ = B.querySelector(".ProseMirror")) == null || _.focus();
      const a = w.querySelector(
        ".milkdown-slash-menu"
      );
      a && (ke = new MutationObserver(() => {
        if (a.dataset.show === "true" && we) {
          Ve(we), Ye();
          return;
        }
        a.dataset.show !== "true" && (we = null, I = null, Pe(null), De(), Ve(null));
      }), ke.observe(a, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = w.querySelector(
        ".milkdown-toolbar"
      );
      d && (Y = new MutationObserver(() => {
        d.dataset.show === "true" ? U() : _e();
      }), Y.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), Ce(), U();
    }), () => {
      w.removeEventListener("pointermove", at), w.removeEventListener(
        "pointerover",
        st
      ), w.removeEventListener("pointerout", Ke), w.removeEventListener(
        "pointerover",
        Ue
      ), w.removeEventListener(
        "pointerout",
        Se
      ), w.removeEventListener(
        "selectionchange",
        te
      ), w.removeEventListener(
        "pointerdown",
        Ze,
        !0
      ), w.removeEventListener(
        "pointerup",
        Ze,
        !0
      ), w.removeEventListener("click", rt), B.removeEventListener("keyup", Oe), _e(), K == null || K.remove(), K = null, lt.then(() => {
        ke == null || ke.disconnect(), Y == null || Y.disconnect(), Te !== null && window.cancelAnimationFrame(Te), v.destroy();
      });
    };
  }, []);
  const S = async (B) => {
    const g = Array.from(B.target.files ?? []);
    if (B.target.value = "", !(!g.length || !z)) {
      M(!0), le("");
      try {
        await z(g);
      } catch (v) {
        le(
          v instanceof Error ? v.message : "附件上传失败"
        );
      } finally {
        M(!1);
      }
    }
  }, A = async (B) => {
    if (D) {
      b(B), le("");
      try {
        await D(B);
      } catch (g) {
        le(
          g instanceof Error ? g.message : "附件删除失败"
        );
      } finally {
        b(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: ot.shell, "aria-label": "项目文档编辑器", children: [
    k && /* @__PURE__ */ e("header", { className: ot.header, children: /* @__PURE__ */ r("div", { className: ot.headerActions, children: [
      /* @__PURE__ */ e(
        He,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: Q,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        He,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: V,
          children: p ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${ot.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          x && /* @__PURE__ */ e("div", { className: ot.saveError, children: x }),
          /* @__PURE__ */ r("div", { className: ot.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${ce}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (B) => $(B.target.value),
                  placeholder: "请输入标题",
                  className: ot.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                $r,
                {
                  createdByName: s,
                  updatedByName: o,
                  updatedAt: l,
                  index: u
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: F,
                  className: `${ot.milkdownHost} ${Lr.editor} ${ce} chatui-project-document-editor`,
                  style: Oa
                }
              ),
              z && /* @__PURE__ */ e(
                "input",
                {
                  ref: E,
                  type: "file",
                  multiple: !0,
                  accept: N,
                  className: "hidden",
                  onChange: (B) => {
                    S(B);
                  }
                }
              ),
              /* @__PURE__ */ e(
                Mr,
                {
                  attachments: f,
                  className: `${h === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: j,
                  deletingAttachmentId: ee,
                  unavailableHint: m,
                  error: X,
                  onRequestUpload: z ? () => {
                    var B;
                    return (B = E.current) == null ? void 0 : B.click();
                  } : void 0,
                  onDeleteAttachment: D ? (B) => {
                    A(B);
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
  loading: s = !1,
  error: o,
  pendingSkillIds: l = [],
  onOpenSidebar: u,
  onInstall: f,
  onUninstall: N,
  onRetry: m
}) {
  const [p, x] = y("installed"), [h, k] = y(""), [$, H] = y(!1), [z, D] = y([]), [V, Q] = y(null), F = be(() => new Set(l), [l]), E = be(() => {
    const b = h.trim().toLowerCase();
    return n.filter((X) => p === "installed" !== X.installed ? !1 : b ? [X.name, X.source, X.description, ...X.tags].join(" ").toLowerCase().includes(b) : !0);
  }, [p, h, n]), J = (b) => {
    x(b), H(!1), D([]);
  }, G = () => {
    H((b) => !b), D([]);
  }, j = (b) => D((X) => X.includes(b) ? X.filter((le) => le !== b) : [...X, b]), M = (b) => b.installed ? N([b.id]) : f([b.id]), ee = () => {
    z.length && (p === "installed" ? N(z) : f(z), D([]), H(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: u, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(yr, { size: 20 }) }),
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
          /* @__PURE__ */ e(dt, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: h, onChange: (b) => k(b.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => J("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${p === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => J("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${p === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: $, onChange: (b) => {
                H(b.target.checked), D([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        o && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: o }),
          m && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: m, children: "重新加载" })
        ] }),
        !o && s && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (b, X) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, X)) }),
        !o && !s && E.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": l.length > 0, children: E.map((b) => {
          const X = z.includes(b.id), le = F.has(b.id), ce = X ? "border-skillSelectedBorder bg-skillSelectedSurface" : V === b.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${ce}`, onMouseEnter: () => Q(b.id), onMouseLeave: () => Q((S) => S === b.id ? null : S), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: b.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: b.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Za[b.riskLevel]}`, children: Qa[b.riskLevel] }),
                $ && /* @__PURE__ */ e("button", { type: "button", onClick: () => j(b.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": X ? `取消选择 ${b.name}` : `选择 ${b.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${X ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: b.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: b.tags.map((S) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: S }, `${b.id}-${S}`)) }),
              !$ && /* @__PURE__ */ e("button", { type: "button", disabled: le, onClick: () => M(b), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${V === b.id || le ? "inline-flex" : "hidden"} ${b.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: le ? "处理中..." : b.installed ? "卸载" : "安装" })
            ] })
          ] }, b.id);
        }) }) : !o && !s ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    $ && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        z.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: G, disabled: l.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: ee, disabled: !z.length || l.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: l.length > 0 ? "处理中..." : p === "installed" ? "批量卸载" : "批量安装" })
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
  Ht as T,
  Aa as U,
  za as V,
  At as a,
  He as b,
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
