import { jsxs as r, Fragment as De, jsx as e } from "react/jsx-runtime";
import pe, { useMemo as V, useState as v, useRef as ee, useCallback as ae, useEffect as Z, useId as zt } from "react";
import le from "classnames";
import { Check as Ge, Copy as nt, RefreshCcw as Et, ThumbsUp as _t, ThumbsDown as Rt, Puzzle as pt, AtSign as ht, LoaderCircle as jt, AlertCircle as Bt, Paperclip as ft, ArrowRight as xt, Sparkles as Dt, Loader2 as It, ChevronDown as qe, ChevronRight as He, Search as Xe, Globe as Ft, BookOpen as Ut, X as Je, Clock3 as gt, FileText as Wt, Plus as bt, Square as Ht, Send as qt, UserPlus as Xt, Building2 as Vt, CheckCircle2 as rt, Trash2 as Ot, Folder as et, PanelLeftClose as Gt, SquarePen as Yt, AlertTriangle as Kt, Settings as Qt, Menu as Zt, Pin as tt, MoreHorizontal as Jt, Pencil as er, Share2 as tr } from "lucide-react";
import rr from "react-markdown";
import nr from "remark-gfm";
import sr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as ar } from "react-dom";
const lr = "_button_3tg6r_1", or = "_primary_3tg6r_5", ir = "_disabled_3tg6r_9", cr = "_secondary_3tg6r_17", dr = "_ghost_3tg6r_25", ur = "_danger_3tg6r_33", mr = "_small_3tg6r_41", pr = "_medium_3tg6r_45", hr = "_large_3tg6r_49", fr = "_roundedSquare_3tg6r_53", xr = "_roundedSmall_3tg6r_57", gr = "_roundedMedium_3tg6r_61", br = "_roundedLarge_3tg6r_62", yr = "_roundedFull_3tg6r_66", vr = "_loadingSpinner_3tg6r_67", wr = "_loading_3tg6r_67", Nr = "_fullWidth_3tg6r_90", kr = "_icon_3tg6r_94", ie = {
  button: lr,
  primary: or,
  disabled: ir,
  secondary: cr,
  ghost: dr,
  danger: ur,
  small: mr,
  medium: pr,
  large: hr,
  roundedSquare: fr,
  roundedSmall: xr,
  roundedMedium: gr,
  roundedLarge: br,
  roundedFull: yr,
  loadingSpinner: vr,
  loading: wr,
  fullWidth: Nr,
  icon: kr
}, Tr = {
  primary: ie.primary,
  secondary: ie.secondary,
  ghost: ie.ghost,
  danger: ie.danger
}, Cr = {
  small: ie.small,
  medium: ie.medium,
  large: ie.large
}, Sr = {
  square: ie.roundedSquare,
  small: ie.roundedSmall,
  medium: ie.roundedMedium,
  large: ie.roundedLarge,
  full: ie.roundedFull
}, Ie = pe.forwardRef(
  ({
    type: t = "primary",
    size: a = "medium",
    isLoading: u,
    loading: l,
    disabled: m = !1,
    children: f,
    icon: h,
    iconPosition: o = "left",
    className: g,
    fullWidth: p = !1,
    rounded: $ = "medium",
    onClick: T,
    ...y
  }, F) => {
    const C = u ?? l ?? !1, A = m || C, M = V(() => C ? /* @__PURE__ */ r(De, { children: [
      /* @__PURE__ */ e("span", { className: ie.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: f })
    ] }) : h ? /* @__PURE__ */ r(De, { children: [
      o === "left" && /* @__PURE__ */ e("span", { className: ie.icon, children: h }),
      f && /* @__PURE__ */ e("span", { children: f }),
      o === "right" && /* @__PURE__ */ e("span", { className: ie.icon, children: h })
    ] }) : f, [f, C, h, o]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: F,
        className: le(
          ie.button,
          Tr[t],
          Cr[a],
          Sr[$],
          {
            [ie.fullWidth]: p,
            [ie.loading]: C,
            [ie.disabled]: A
          },
          g
        ),
        disabled: A,
        onClick: T,
        ...y,
        children: M
      }
    );
  }
);
Ie.displayName = "BaseButton";
const $r = { small: "h-8", medium: "h-9", large: "h-14" }, yt = pe.forwardRef(
  ({
    type: t = "text",
    placeholder: a,
    value: u,
    defaultValue: l,
    disabled: m = !1,
    readOnly: f = !1,
    error: h = !1,
    size: o = "medium",
    prefix: g,
    suffix: p,
    prefixIcon: $,
    suffixIcon: T,
    onChange: y,
    onFocus: F,
    onBlur: C,
    onClear: A,
    className: M,
    containerClassName: X,
    clearable: E = !1,
    label: S,
    helperText: L,
    ...Q
  }, w) => {
    const [U, b] = v(!1), W = ee(null), D = ae((x) => {
      W.current = x, typeof w == "function" ? w(x) : w && (w.current = x);
    }, [w]), G = ae(() => {
      var I, q;
      const x = W.current;
      x && ((q = (I = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : I.set) == null || q.call(x, ""), x.dispatchEvent(new Event("input", { bubbles: !0 })), x.focus(), A == null || A());
    }, [A]), d = V(
      () => {
        var x;
        return E && U && String(u ?? ((x = W.current) == null ? void 0 : x.value) ?? "").length > 0;
      },
      [E, U, u]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      S && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: S }),
      /* @__PURE__ */ r(
        "div",
        {
          className: le(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            $r[o],
            !m && !h && "hover:border-controlBorder",
            U && !m && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && U && "ring-2 ring-dangerFocus",
            m && "cursor-not-allowed bg-surfaceMuted",
            X
          ),
          children: [
            (g || $) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: g || $ }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: D,
                type: t,
                placeholder: a,
                value: u,
                defaultValue: l,
                disabled: m,
                readOnly: f,
                className: le("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", M),
                onFocus: (x) => {
                  b(!0), F == null || F(x);
                },
                onBlur: (x) => {
                  b(!1), C == null || C(x);
                },
                onChange: y,
                ...Q
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              d && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (x) => x.preventDefault(), onClick: G, "aria-label": "清空", children: "✕" }),
              p || T
            ] })
          ]
        }
      ),
      L && /* @__PURE__ */ e("div", { className: le("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: L })
    ] });
  }
);
yt.displayName = "BaseInput";
const Mr = { small: "h-8", medium: "h-9", large: "h-14" }, Ar = pe.forwardRef(
  ({ options: t = [], value: a, defaultValue: u, placeholder: l, disabled: m = !1, error: f = !1, size: h = "medium", label: o, helperText: g, onChange: p, className: $, ...T }, y) => {
    const F = ae((C) => {
      const A = C.target.value, M = t.find((X) => String(X.value) === A);
      p == null || p(A === "" ? "" : (M == null ? void 0 : M.value) ?? A);
    }, [p, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      o && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: o }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: y,
            className: le(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              f && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Mr[h],
              $
            ),
            value: a ?? u ?? "",
            disabled: m,
            onChange: F,
            ...T,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((C) => /* @__PURE__ */ e("option", { value: C.value, disabled: C.disabled, children: C.label }, C.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      g && /* @__PURE__ */ e("div", { className: le("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: g })
    ] });
  }
);
Ar.displayName = "BaseSelect";
const Lr = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Pr = pe.forwardRef(
  ({ accept: t, multiple: a = !1, disabled: u = !1, onChange: l, onError: m, maxSize: f, children: h, className: o, dragable: g = !0, placeholderTitle: p, placeholderDescription: $, placeholderIcon: T, maxCount: y }, F) => {
    const C = ee(null), [A, M] = v(!1), X = ae((S) => {
      if (y && S.length > y) {
        m == null || m(new Error(`单次最多上传 ${y} 个文件`));
        return;
      }
      if (f) {
        for (const L of Array.from(S))
          if (L.size > f) {
            m == null || m(new Error(`文件“${L.name}”超过大小限制（${Lr(f)}）`));
            return;
          }
      }
      l == null || l(S);
    }, [y, f, l, m]), E = () => {
      var S;
      u || (S = C.current) == null || S.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: F,
        className: le(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          A && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          u && "cursor-not-allowed opacity-60",
          o
        ),
        onClick: E,
        onKeyDown: (S) => {
          !u && (S.key === "Enter" || S.key === " ") && (S.preventDefault(), E());
        },
        onDragOver: (S) => {
          g && !u && (S.preventDefault(), M(!0));
        },
        onDragLeave: () => M(!1),
        onDrop: (S) => {
          g && !u && (S.preventDefault(), M(!1), X(S.dataTransfer.files));
        },
        role: "button",
        tabIndex: u ? -1 : 0,
        "aria-disabled": u,
        children: [
          /* @__PURE__ */ e("input", { ref: C, type: "file", accept: t, multiple: a, disabled: u, onChange: (S) => S.target.files && X(S.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: T ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: p ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: $ ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Pr.displayName = "BaseUpload";
const zr = "_maskAnimation_1h49h_1", Er = "_modalAnimation_1h49h_5", at = {
  maskAnimation: zr,
  modalAnimation: Er
}, vt = ({
  visible: t,
  open: a = t,
  show: u = a,
  title: l,
  width: m = 520,
  centered: f = !0,
  destroyOnClose: h = !1,
  mask: o = !0,
  maskClosable: g = !0,
  okText: p = "确认",
  cancelText: $ = "取消",
  confirmLoading: T = !1,
  okButtonProps: y,
  cancelButtonProps: F,
  onConfirm: C,
  onCancel: A,
  onClose: M,
  onOk: X,
  onDismiss: E,
  children: S,
  footer: L,
  className: Q,
  bodyClassName: w
}) => {
  const U = u ?? !1, b = ae(async () => {
    try {
      C ? await C() : X && await X();
    } catch (G) {
      console.error("Modal confirm error:", G);
    }
  }, [C, X]), W = ae(() => {
    A ? A() : M ? M() : E == null || E();
  }, [A, M, E]), D = V(() => {
    if (L === null) return null;
    if (L) return L;
    const { type: G, ...d } = F ?? {}, { type: x, ...I } = y ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Ie, { type: "secondary", size: "medium", onClick: W, ...d, children: $ }),
      /* @__PURE__ */ e(Ie, { type: "primary", size: "medium", isLoading: T, onClick: b, ...I, children: T ? "加载中..." : p })
    ] });
  }, [F, $, T, L, W, b, y, p]);
  return !U && h || !U ? null : /* @__PURE__ */ r(De, { children: [
    o && /* @__PURE__ */ e("div", { className: le("fixed inset-0 z-[1000] bg-overlayMask", at.maskAnimation), onClick: () => g && W(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: le(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          f && "left-1/2 top-1/2",
          at.modalAnimation,
          Q
        ),
        style: { width: m },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: W, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: le("min-h-20 p-5 text-primaryText", w), children: S }),
          D
        ]
      }
    )
  ] });
};
vt.displayName = "BaseModal";
const _r = ({ title: t, extra: a, children: u, hoverable: l = !1, loading: m = !1, bordered: f = !0, className: h, bodyClassName: o, onClick: g }) => /* @__PURE__ */ r(
  "div",
  {
    className: le(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      f && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      m && "pointer-events-none opacity-60",
      h
    ),
    onClick: g,
    children: [
      (t || a) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
      ] }),
      /* @__PURE__ */ e("div", { className: le("p-4 text-primaryText", (t || a) && "pt-1", o), children: u })
    ]
  }
);
_r.displayName = "BaseCard";
const Rr = ({ columns: t, dataSource: a = [], rowKey: u = "id", loading: l = !1, bordered: m = !0, striped: f = !0, className: h, onRow: o }, g) => /* @__PURE__ */ r("div", { ref: g, className: le("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: m ? "border-b border-lineSubtle" : void 0, children: t.map((p) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: p.width, textAlign: p.align }, children: p.title }, p.key || String(p.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: a.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : a.map((p, $) => {
      const T = String(typeof u == "string" ? p[u] ?? $ : $);
      return /* @__PURE__ */ e("tr", { className: le(m && "border-b border-lineSoft last:border-b-0", f && "odd:bg-surface"), ...(o == null ? void 0 : o(p, $)) || {}, children: t.map((y) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: y.align }, children: y.render ? y.render(p[y.dataIndex], p, $) : String(p[y.dataIndex] ?? "") }, y.key || String(y.dataIndex))) }, T);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), vn = pe.forwardRef(Rr), jr = ({ current: t = 1, pageSize: a = 10, total: u = 0, onChange: l, showSizeChanger: m = !1, pageSizeOptions: f = [10, 20, 50, 100], onShowSizeChange: h, disabled: o = !1, className: g }) => {
  const p = V(() => Math.ceil(u / a) || 1, [a, u]), $ = ae((y) => h == null ? void 0 : h(1, Number(y.target.value)), [h]), T = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: le("flex flex-wrap items-center justify-center gap-4 p-4", g), children: [
    /* @__PURE__ */ e("button", { type: "button", className: T, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: o || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      p,
      " 页，共 ",
      u,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: T, onClick: () => t < p && (l == null ? void 0 : l(t + 1)), disabled: o || t >= p, children: "下一页 →" }),
    m && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: a, onChange: $, disabled: o, children: f.map((y) => /* @__PURE__ */ r("option", { value: y, children: [
      y,
      " 条/页"
    ] }, y)) })
  ] });
};
jr.displayName = "BasePagination";
const wt = ({ description: t = "暂无数据", image: a, children: u }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  a && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: a }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  u
] });
wt.displayName = "BaseEmpty";
const Ve = ({ trigger: t, items: a, footerItems: u = [], open: l = !1, onOpenChange: m, onTriggerClick: f, onItemClick: h, placement: o = "bottom-start", width: g, portal: p = !1, className: $, triggerClassName: T, menuClassName: y, listClassName: F, footerClassName: C }) => {
  const A = ee(null), M = ee(null), [X, E] = v({}), S = o.endsWith("end"), L = o.startsWith("top");
  Z(() => {
    if (!l || !p || !A.current) return;
    const b = A.current.getBoundingClientRect();
    E({ position: "fixed", left: S ? b.right : b.left, top: L ? b.top : b.bottom, transform: S ? "translateX(-100%)" : void 0 });
  }, [L, S, l, p, o]), Z(() => {
    !l || !p || !L || !M.current || E((b) => ({ ...b, top: Number(b.top) - M.current.offsetHeight - 8 }));
  }, [L, l, p]), Z(() => {
    if (!l || !m) return;
    const b = (W) => {
      var G, d;
      const D = W.target;
      (G = A.current) != null && G.contains(D) || (d = M.current) != null && d.contains(D) || m(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [m, l]);
  const Q = V(() => g ? { width: typeof g == "number" ? `${g}px` : g } : void 0, [g]), w = ae((b) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: le(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 bg-transparent px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !b.danger && !b.active && "text-primaryText hover:bg-surfaceMuted",
        !b.danger && b.active && "bg-primary-soft font-medium text-primary",
        b.danger && "text-danger hover:bg-danger-soft"
      ),
      onClick: (W) => h == null ? void 0 : h(b, W),
      disabled: b.disabled,
      children: [
        b.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: b.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: b.label })
      ]
    },
    b.key
  ), [h]), U = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: M,
      className: le(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !p && "absolute",
        !p && !L && "top-[calc(100%+8px)]",
        !p && L && "bottom-[calc(100%+8px)]",
        !p && S ? "right-0" : p ? void 0 : "left-0",
        y
      ),
      style: p ? { ...X, ...Q } : Q,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: le("flex min-h-0 flex-col gap-1", F), children: a.map(w) }),
        u.length > 0 && /* @__PURE__ */ e("div", { className: le("flex flex-col gap-1 border-t border-lineSoft pt-2", C), children: u.map(w) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: A, className: le("relative inline-block", $), children: [
    /* @__PURE__ */ e("button", { type: "button", className: le("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", T), onClick: (b) => {
      f == null || f(b), m == null || m(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    p ? U && ar(U, document.body) : U
  ] });
};
Ve.displayName = "BaseActionMenu";
const Br = ({
  markdownContent: t,
  onRefresh: a,
  feedback: u,
  onFeedback: l,
  disabled: m = !1
}) => {
  const [f, h] = v(!1), o = ae(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), h(!0), window.setTimeout(() => h(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r("div", { className: "inline-flex items-center gap-1 rounded-full bg-white py-1 text-tertiaryText", children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: o,
        className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
        title: f ? "已复制 Markdown" : "复制 Markdown",
        children: f ? /* @__PURE__ */ e(Ge, { size: 15 }) : /* @__PURE__ */ e(nt, { size: 15 })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: a,
        disabled: m,
        className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
        title: "重新生成",
        children: /* @__PURE__ */ e(Et, { size: 15 })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => l("like"),
        className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${u === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
        title: "有帮助",
        children: /* @__PURE__ */ e(_t, { size: 15 })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => l("dislike"),
        className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${u === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
        title: "需改进",
        children: /* @__PURE__ */ e(Rt, { size: 15 })
      }
    )
  ] });
}, Dr = pe.memo(Br), lt = "[[PAPER_LIST_JSON]]";
let ot = !1, Fe = null, Ue = null, We = null;
const Ir = async () => (Ue || (Ue = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, a]) => ({
  remark: t.default,
  rehype: a.default
})).catch((t) => {
  throw Ue = null, t;
})), Ue), Fr = async () => (We || (We = import("remark-emoji").then((t) => t.default).catch(() => (We = null, null))), We), Ur = async () => {
  Fe || (Fe = import("mermaid").then((a) => a.default ?? a).catch((a) => {
    throw Fe = null, a;
  }));
  const t = await Fe;
  if (!ot) {
    const a = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: a ? { primaryColor: a, primaryBorderColor: a } : void 0
    }), ot = !0;
  }
  return t;
}, Oe = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((a) => Oe(a)).join("") : pe.isValidElement(t) ? Oe(t.props.children) : "", it = (t) => {
  const a = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(a);
}, Wr = ({ href: t, label: a }) => {
  const u = V(() => {
    const l = a.trim();
    if (l) return l;
    try {
      const f = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (f) return decodeURIComponent(f);
    } catch {
    }
    return t;
  }, [t, a]);
  return /* @__PURE__ */ r("div", { className: "group not-prose my-2 inline-flex w-[340px] max-w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2 shadow-sm", children: [
    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-warning text-xs font-semibold tracking-wide text-white", children: "PDF" }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: u }),
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
        children: /* @__PURE__ */ e(xt, { size: 14 })
      }
    )
  ] });
}, Hr = ({ language: t, rawCode: a, className: u, children: l }) => {
  const [m, f] = v(!1), h = ae(async () => {
    if (a.trim())
      try {
        await navigator.clipboard.writeText(a), f(!0), window.setTimeout(() => f(!1), 1200);
      } catch {
      }
  }, [a]);
  return /* @__PURE__ */ r("div", { className: "code-block-wrapper not-prose", children: [
    /* @__PURE__ */ r("div", { className: "code-block-header", children: [
      /* @__PURE__ */ e("span", { className: "code-block-lang-tag", children: t || "code" }),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: h,
          className: `code-block-copy-btn ${m ? "copied" : ""}`,
          title: m ? "已复制代码" : "复制代码",
          children: [
            m ? /* @__PURE__ */ e(Ge, { size: 12 }) : /* @__PURE__ */ e(nt, { size: 12 }),
            m ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${u ?? ""}`.trim(), children: l }) })
  ] });
}, qr = ({ rawCode: t }) => {
  const [a, u] = v(!1), l = ae(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), u(!0), window.setTimeout(() => u(!1), 1200);
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
          className: `code-block-copy-btn ${a ? "copied" : ""}`,
          title: a ? "已复制图表代码" : "复制图表代码",
          children: [
            a ? /* @__PURE__ */ e(Ge, { size: 12 }) : /* @__PURE__ */ e(nt, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, Nt = (t) => {
  const a = typeof t.title == "string" ? t.title.trim() : "", u = typeof t.pmid == "string" ? t.pmid.trim() : "", l = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !a || !u || !l ? null : { title: a, pmid: u, doi: l };
}, ct = (t) => {
  const a = t.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (a.length === 0) return null;
  const u = [];
  return a.forEach((l, m) => {
    var T;
    const f = l.match(/PMID\s*[:：]\s*(\d{4,})/i), h = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!f || !h) return;
    const o = l.slice(0, f.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), g = ((T = a[m - 1]) == null ? void 0 : T.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", $ = Nt({
      title: o || g,
      pmid: f[1],
      doi: h[1]
    });
    $ && u.push($);
  }), u.length === 0 ? null : { items: u };
}, Xr = (t) => {
  if (!t.startsWith(lt))
    return ct(t);
  const a = t.slice(lt.length).trim();
  if (!a) return null;
  try {
    const u = JSON.parse(a);
    if (!Array.isArray(u.items)) return null;
    const l = u.items.map((m) => Nt(m)).filter((m) => m !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return ct(a);
  }
}, kt = ({
  msg: t,
  actionKey: a,
  feedback: u,
  onFeedback: l,
  onRefresh: m,
  isTyping: f = !1,
  isStreaming: h
}) => {
  var D, G;
  const o = t.role === "user", g = h ?? f, p = ee(null), [$, T] = v(null), [y, F] = v(null), [C, A] = v(null), [M, X] = v(!1), E = V(() => /```\s*mermaid/i.test(t.content), [t.content]), S = V(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), L = V(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), Q = V(
    () => o ? null : Xr(t.content),
    [o, t.content]
  ), w = !!(Q && Q.items.length > 0);
  Z(() => {
    if (!S || $ || y) return;
    let d = !1;
    return Ir().then((x) => {
      d || (T(() => x.remark), F(() => x.rehype));
    }).catch(() => {
    }), () => {
      d = !0;
    };
  }, [S, $, y]), Z(() => {
    if (!L || M) return;
    let d = !1;
    return Fr().then((x) => {
      d || (x && A(() => x), X(!0));
    }), () => {
      d = !0;
    };
  }, [L, M]);
  const U = V(() => {
    const d = [nr];
    return C && d.push(C), $ && d.push($), d;
  }, [C, $]), b = V(() => {
    const d = [sr];
    return y && d.push(y), d;
  }, [y]), W = V(
    () => ({
      table: ({ node: d, ...x }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...x }) }),
      tr: ({ node: d, ...x }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...x }),
      th: ({ node: d, ...x }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...x
        }
      ),
      td: ({ node: d, ...x }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...x }),
      blockquote: ({ node: d, ...x }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...x
        }
      ),
      input: ({ node: d, type: x, checked: I, ...q }) => x === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!I,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...q
        }
      ) : /* @__PURE__ */ e("input", { type: x, ...q }),
      section: ({ node: d, ...x }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...x }),
      p: ({ node: d, children: x, ...I }) => {
        const q = pe.Children.toArray(x);
        if (q.length === 1 && pe.isValidElement(q[0])) {
          const O = q[0];
          if (typeof O.props.href == "string" && it(O.props.href)) {
            const te = Oe(O.props.children).trim();
            return /* @__PURE__ */ e(Wr, { href: O.props.href, label: te });
          }
        }
        return /* @__PURE__ */ e("p", { ...I, children: x });
      },
      a: ({ node: d, href: x, ...I }) => {
        const q = x ?? "", O = /^https?:\/\/(dx\.)?doi\.org\//i.test(q) || /^doi:/i.test(q), te = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(q) || /\/pmc\/|\/pmid\//i.test(q), de = it(q);
        return O || te || de ? /* @__PURE__ */ e(
          "a",
          {
            href: x,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...I
          }
        ) : /* @__PURE__ */ e("a", { href: x, target: "_blank", rel: "noreferrer", ...I });
      },
      pre({ children: d, ...x }) {
        const I = pe.Children.toArray(d).find(
          (ne) => pe.isValidElement(ne) && typeof ne.props.className == "string" && ne.props.className.includes("language-")
        );
        if (!I)
          return /* @__PURE__ */ e("pre", { ...x, children: d });
        const q = I.props.className ?? "", O = q.match(/language-([\w-]+)/), te = O ? O[1].toLowerCase() : "code", de = Oe(I.props.children).replace(/\n$/, "");
        return te === "mermaid" ? /* @__PURE__ */ e(qr, { rawCode: de }) : /* @__PURE__ */ e(Hr, { language: te, rawCode: de, className: q, children: I.props.children });
      },
      code({ children: d, className: x, ...I }) {
        return x ? /* @__PURE__ */ e("code", { className: x, ...I, children: d }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...I,
            children: d
          }
        );
      }
    }),
    []
  );
  return Z(() => {
    if (o || g || !E) return;
    const d = p.current;
    if (!d) return;
    const x = Array.from(d.querySelectorAll(".mermaid")).filter(
      (I) => I.dataset.processed !== "true"
    );
    x.length !== 0 && Ur().then(async (I) => {
      await Promise.all(
        x.map(async (q, O) => {
          var oe;
          const te = (oe = q.textContent) == null ? void 0 : oe.trim();
          if (!te) return;
          const de = `mermaid-${Date.now()}-${O}`, { svg: ne } = await I.render(de, te);
          q.innerHTML = ne, q.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [o, g, E, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${o ? "justify-end" : "justify-start"}`, children: o ? /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
    (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
      (D = t.references) == null ? void 0 : D.map((d) => /* @__PURE__ */ r(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${d.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
          children: [
            d.type === "skill" ? /* @__PURE__ */ e(pt, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(ht, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: d.label, children: d.label })
          ]
        },
        d.id
      )),
      (G = t.attachments) == null ? void 0 : G.map((d) => /* @__PURE__ */ r(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${d.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
          role: d.status === "error" ? "alert" : void 0,
          title: d.errorMessage,
          children: [
            d.status === "uploading" ? /* @__PURE__ */ e(jt, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : d.status === "error" ? /* @__PURE__ */ e(Bt, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : d.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: d.previewUrl, alt: d.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(ft, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: d.name, children: d.name }),
            d.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
            d.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
          ]
        },
        d.id
      ))
    ] }),
    /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: t.content })
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    w && Q ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: Q.items.map((d, x) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: d.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: d.pmid
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
                  href: `https://doi.org/${d.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: d.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(xt, { size: 14 })
            }
          )
        ]
      },
      `${d.pmid}-${x}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: p,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          rr,
          {
            remarkPlugins: U,
            rehypePlugins: b,
            components: W,
            children: t.content
          }
        )
      }
    ),
    !w && t.content && !g && a && l && m && /* @__PURE__ */ e(
      Dr,
      {
        markdownContent: t.content,
        onRefresh: m,
        feedback: u,
        onFeedback: (d) => l(a, d),
        disabled: g
      }
    )
  ] }) }) });
}, Vr = pe.memo(kt), Or = {
  thinking: "思考中…",
  searching: "搜索中…",
  generating: "生成中…"
}, dt = {
  knowledge: {
    icon: /* @__PURE__ */ e(Ut, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Ft, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Xe, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Tt = ({
  phase: t,
  searchSteps: a = [],
  defaultExpanded: u = !0
}) => {
  const [l, m] = v(u), f = ee(null);
  Z(() => {
    a.length > 0 && m(!0);
  }, [a.length]);
  const h = a.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: t === "generating" ? /* @__PURE__ */ e(Dt, { size: 14, className: "text-primary animate-pulse" }) : /* @__PURE__ */ e(It, { size: 14, className: "animate-spin text-primary" }) }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: Or[t] }),
      h && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => m((o) => !o),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            l ? /* @__PURE__ */ e(qe, { size: 12 }) : /* @__PURE__ */ e(He, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              a.length,
              " 条结果"
            ] })
          ]
        }
      )
    ] }),
    h && /* @__PURE__ */ e(
      "div",
      {
        ref: f,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${l ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: a.map((o, g) => {
          const p = dt[o.type] ?? dt.tool;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-center gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: p.colorClass, children: p.icon }),
                /* @__PURE__ */ e("span", { className: "truncate max-w-[480px]", children: o.label })
              ]
            },
            `${o.type}-${g}-${o.label}`
          );
        })
      }
    )
  ] });
}, Gr = pe.memo(Tt);
function Yr(t, a) {
  if (typeof t == "function") {
    t(a);
    return;
  }
  t && (t.current = a);
}
function Kr({
  messages: t,
  isTyping: a,
  statusPhase: u = "thinking",
  searchSteps: l = [],
  hasReceivedAssistantChunk: m = !1,
  contentMaxWidth: f = 800,
  selection: h,
  scrollbar: o,
  feedbackByMessageKey: g,
  getMessageKey: p = (A, M) => String(M),
  onFeedback: $,
  onRegenerate: T,
  onScroll: y,
  scrollContainerRef: F,
  onMessageElement: C
}) {
  const A = !!h;
  return /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: (M) => Yr(F, M),
        onScroll: y,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            className: `flex w-full flex-col ${A ? "gap-3" : "gap-8"}`,
            style: { maxWidth: f },
            children: [
              t.map((M, X) => {
                const E = p(M, X), S = (h == null ? void 0 : h.selectedMessageKeys.has(E)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    ref: (L) => C == null ? void 0 : C(X, L),
                    className: A ? "flex w-full items-start gap-2" : void 0,
                    children: [
                      h && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => h.onToggleMessage(E),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": S ? "取消选择消息" : "选择消息",
                          children: S ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Ge, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ e(
                        "div",
                        {
                          className: h ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${S ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${M.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: /* @__PURE__ */ e(
                            kt,
                            {
                              msg: M,
                              actionKey: E,
                              feedback: g == null ? void 0 : g[E],
                              onFeedback: $,
                              onRefresh: T ? () => T(X) : void 0,
                              isTyping: a
                            }
                          )
                        }
                      )
                    ]
                  },
                  E
                );
              }),
              a && !(u === "generating" && m) && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(Tt, { phase: u, searchSteps: [...l] }) }) })
            ]
          }
        )
      }
    ),
    o && o.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${o.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: o.height,
          transform: `translateY(${o.top}px)`
        }
      }
    )
  ] });
}
pe.memo(Kr);
const Qr = 50, Zr = 100 * 1024 * 1024, Jr = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", en = [
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
], tn = /(?:^|\s)\/([^\s/]*)$/, rn = /(?:^|\s)@([^\s@]*)$/, nn = (t, a) => {
  const l = t.slice(0, a).match(tn);
  return l ? l[1] : null;
}, sn = (t, a) => {
  const l = t.slice(0, a).match(rn);
  return l ? l[1] : null;
}, wn = (t, a, u, l) => {
  const m = t.slice(0, a), f = t.slice(u), h = m.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const T = `/${l} `;
    return { value: `${m}${T}${f}`, cursor: m.length + T.length };
  }
  const o = m.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}/${l} `, $ = `${m.slice(0, o)}${p}`;
  return {
    value: `${$}${f}`,
    cursor: $.length
  };
}, Nn = (t, a, u, l) => {
  const m = t.slice(0, a), f = t.slice(u), h = m.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const T = `@${l} `;
    return { value: `${m}${T}${f}`, cursor: m.length + T.length };
  }
  const o = m.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}@${l} `, $ = `${m.slice(0, o)}${p}`;
  return {
    value: `${$}${f}`,
    cursor: $.length
  };
}, an = [], kn = [], Ct = ({
  onSend: t,
  disabled: a,
  isStreaming: u = !1,
  onCancel: l,
  leadingControls: m,
  skillOptions: f = en,
  fileOptions: h = an
}) => {
  const [o, g] = v(""), [p, $] = v(!1), [T, y] = v(!1), [F, C] = v(""), [A, M] = v(-1), [X, E] = v(!1), [S, L] = v(""), [Q, w] = v(-1), [U, b] = v([]), [W, D] = v([]), [G, d] = v([]), [x, I] = v(!1), q = ee(null), O = ee(null), te = zt(), de = ee([]), ne = u && !!l;
  Z(() => {
    de.current = U;
  }, [U]), Z(() => () => {
    de.current.forEach((n) => {
      n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    });
  }, []);
  const oe = V(() => {
    const n = F.trim().toLowerCase();
    return n ? f.filter((i) => `${i.id} ${i.description} ${i.source}`.toLowerCase().includes(n)) : f;
  }, [f, F]), re = V(() => {
    const n = S.trim().toLowerCase();
    return n ? h.filter((i) => `${i.name} ${i.projectName} ${i.sourceType} ${i.operatorName ?? ""} ${i.operatedAt ?? ""}`.toLowerCase().includes(n)) : h.filter((i) => i.isRecent).slice(0, 10);
  }, [h, S]), ue = ae((n, i) => {
    const R = i ?? n.length, Y = nn(n, R);
    if (Y !== null) {
      y(!0), C(Y), M(-1), E(!1), L(""), w(-1);
      return;
    }
    const z = sn(n, R);
    if (z !== null) {
      E(!0), L(z), w(-1), y(!1), C(""), M(-1);
      return;
    }
    y(!1), C(""), M(-1), E(!1), L(""), w(-1);
  }, []), N = ae((n) => {
    const i = q.current, R = (i == null ? void 0 : i.selectionStart) ?? o.length, Y = (i == null ? void 0 : i.selectionEnd) ?? R, z = o.slice(0, R), K = o.slice(Y), se = (() => {
      const J = z.match(/(?:^|\s)\/[^\s/]*$/);
      if (!J)
        return { value: o, cursor: R };
      const ce = z.length - J[0].length, he = J[0].startsWith(" ") ? " " : "", me = `${z.slice(0, ce)}${he}`;
      return {
        value: `${me}${K}`,
        cursor: me.length
      };
    })();
    D((J) => {
      const ce = `skill-${n}`;
      return J.some((he) => he.id === ce) ? J : [...J, { id: ce, type: "skill", label: n }];
    }), g(se.value), y(!1), C(""), M(-1), requestAnimationFrame(() => {
      i && (i.focus(), i.setSelectionRange(se.cursor, se.cursor));
    });
  }, [o]), _ = ae((n) => {
    const i = q.current, R = (i == null ? void 0 : i.selectionStart) ?? o.length, Y = (i == null ? void 0 : i.selectionEnd) ?? R, z = o.slice(0, R), K = o.slice(Y), se = (() => {
      const J = z.match(/(?:^|\s)@[^\s@]*$/);
      if (!J)
        return { value: o, cursor: R };
      const ce = z.length - J[0].length, he = J[0].startsWith(" ") ? " " : "", me = `${z.slice(0, ce)}${he}`;
      return {
        value: `${me}${K}`,
        cursor: me.length
      };
    })();
    d((J) => {
      const ce = `doc-${n}`;
      return J.some((he) => he.id === ce) ? J : [...J, { id: ce, type: "doc", label: n }];
    }), g(se.value), E(!1), L(""), w(-1), requestAnimationFrame(() => {
      i && (i.focus(), i.setSelectionRange(se.cursor, se.cursor));
    });
  }, [o]), P = ae(() => {
    I(!1);
    const n = O.current;
    if (n) {
      try {
        if ("showPicker" in n && typeof n.showPicker == "function") {
          n.showPicker();
          return;
        }
      } catch {
      }
      n.click();
    }
  }, []), xe = ae((n) => {
    const i = Array.from(n.target.files ?? []);
    i.length !== 0 && (b((R) => {
      const Y = new Set(R.map((K) => K.id)), z = [...R];
      return i.forEach((K) => {
        if (K.size > Zr || z.length >= Qr) return;
        const se = `${K.name}-${K.size}-${K.lastModified}`;
        if (Y.has(se)) return;
        const J = K.type.startsWith("image/");
        Y.add(se), z.push({
          id: se,
          name: K.name,
          mimeType: K.type || "application/octet-stream",
          previewUrl: J ? URL.createObjectURL(K) : void 0,
          file: K
        });
      }), z;
    }), n.target.value = "");
  }, []), Le = ae((n) => {
    b((i) => {
      const R = i.find((Y) => Y.id === n);
      return R != null && R.previewUrl && URL.revokeObjectURL(R.previewUrl), i.filter((Y) => Y.id !== n);
    });
  }, []), Pe = ae((n) => {
    D((i) => i.filter((R) => R.id !== n));
  }, []), $e = ae((n) => {
    d((i) => i.filter((R) => R.id !== n));
  }, []), ge = ae(() => {
    !o.trim() || a || (t({
      content: o,
      attachments: U.map((n) => ({
        id: n.id,
        name: n.name,
        mimeType: n.mimeType,
        previewUrl: n.previewUrl,
        file: n.file
      })),
      references: [...W, ...G]
    }), g(""), b([]), D([]), d([]), y(!1), C(""), M(-1), E(!1), L(""), w(-1));
  }, [o, a, t, U, G, W]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: te,
        ref: O,
        type: "file",
        multiple: !0,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: xe
      }
    ),
    (U.length > 0 || W.length > 0 || G.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      W.map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(pt, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: n.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Pe(n.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${n.label}`,
                children: /* @__PURE__ */ e(Je, { size: 12 })
              }
            )
          ]
        },
        n.id
      )),
      G.map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(ht, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: n.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => $e(n.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${n.label}`,
                children: /* @__PURE__ */ e(Je, { size: 12 })
              }
            )
          ]
        },
        n.id
      )),
      U.map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            n.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: n.previewUrl, alt: n.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(ft, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: n.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: n.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Le(n.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${n.name}`,
                children: /* @__PURE__ */ e(Je, { size: 12 })
              }
            )
          ]
        },
        n.id
      ))
    ] }) }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: q,
        value: o,
        onChange: (n) => {
          const i = n.target.value;
          g(i), ue(i, n.target.selectionStart);
        },
        onClick: (n) => {
          ue(n.currentTarget.value, n.currentTarget.selectionStart);
        },
        onKeyUp: (n) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(n.key) || ue(n.currentTarget.value, n.currentTarget.selectionStart);
        },
        onKeyDown: (n) => {
          if (n.key === "Enter" && (n.shiftKey || n.metaKey || n.ctrlKey)) {
            n.preventDefault();
            const i = n.currentTarget, R = i.selectionStart ?? o.length, Y = i.selectionEnd ?? R, z = `${o.slice(0, R)}
${o.slice(Y)}`, K = R + 1;
            g(z), ue(z, K), requestAnimationFrame(() => {
              i.setSelectionRange(K, K);
            });
            return;
          }
          if (T) {
            if (n.key === "ArrowDown") {
              n.preventDefault(), M((i) => oe.length === 0 ? -1 : i < 0 ? 0 : (i + 1) % oe.length);
              return;
            }
            if (n.key === "ArrowUp") {
              n.preventDefault(), M((i) => oe.length === 0 ? -1 : i < 0 ? oe.length - 1 : (i - 1 + oe.length) % oe.length);
              return;
            }
            if (n.key === "Escape") {
              n.preventDefault(), y(!1), C(""), M(-1);
              return;
            }
            if (n.key === "Enter" && !n.shiftKey) {
              n.preventDefault();
              const i = A >= 0 ? oe[A] : void 0;
              i && N(i.id);
              return;
            }
          }
          if (X) {
            if (n.key === "ArrowDown") {
              n.preventDefault(), w((i) => re.length === 0 ? -1 : i < 0 ? 0 : (i + 1) % re.length);
              return;
            }
            if (n.key === "ArrowUp") {
              n.preventDefault(), w((i) => re.length === 0 ? -1 : i < 0 ? re.length - 1 : (i - 1 + re.length) % re.length);
              return;
            }
            if (n.key === "Escape") {
              n.preventDefault(), E(!1), L(""), w(-1);
              return;
            }
            if (n.key === "Enter" && !n.shiftKey) {
              n.preventDefault();
              const i = Q >= 0 ? re[Q] : void 0;
              i && _(i.name);
              return;
            }
          }
          n.key === "Enter" && !n.shiftKey && (n.preventDefault(), ge());
        },
        disabled: a,
        onFocus: () => $(!0),
        onBlur: () => {
          $(!1), y(!1), E(!1);
        },
        placeholder: p ? Jr : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${U.length > 0 || W.length > 0 || G.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    T && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (n) => n.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Xe, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: F ? `搜索 skill：${F}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: oe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : oe.map((n, i) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i === A ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => N(n.id),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: n.badge }),
            /* @__PURE__ */ r("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: n.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: n.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: n.source })
          ]
        },
        n.id
      )) })
    ] }) }),
    X && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (n) => n.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Xe, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: S ? `搜索文件：${S}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !S && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(gt, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        re.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : re.map((n, i) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i === Q ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => _(n.name),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Wt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: n.name }),
              !S && n.operatorName && n.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${n.operatorName} ${n.operatedAt}` })
            ]
          },
          n.id
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
            onMouseEnter: () => I(!0),
            onMouseLeave: () => I(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: P,
                  "aria-controls": te,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(bt, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${x ? "block" : "hidden"}`,
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
          onClick: ne ? l : ge,
          disabled: ne ? !1 : a || !o.trim(),
          "aria-label": ne ? "停止生成" : "发送消息",
          title: ne ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${ne || o.trim() && !a ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: ne ? /* @__PURE__ */ e(Ht, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(qt, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
pe.memo(Ct);
const ln = ({ messages: t, isTyping: a, statusPhase: u = "thinking", searchSteps: l = [] }) => {
  const m = ee(null);
  Z(() => {
    var h;
    (h = m.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, a]);
  const f = V(() => t.map((h, o) => /* @__PURE__ */ e(Vr, { msg: h }, `${o}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    f,
    a && /* @__PURE__ */ e(Gr, { phase: u, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: m })
  ] });
};
pe.memo(ln);
const on = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "生成项目日报"
], St = ({ onSelect: t, prompts: a = on }) => {
  const u = ae((l) => {
    t(l);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: a.map((l) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => u(l),
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm",
      children: l
    },
    l
  )) });
};
pe.memo(St);
const cn = (t, a) => {
  const u = Math.random() * t, l = Math.random() * a;
  return {
    x: u,
    y: l,
    baseX: u,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Tn({ onLogin: t, onLoginSuccess: a, onNavigate: u }) {
  const l = ee(null), m = ee(null), [f, h] = v(""), [o, g] = v(""), [p, $] = v(!0), [T, y] = v(!1), [F, C] = v(!1), [A, M] = v(null), X = ee(null), [E, S] = v(!1), [L, Q] = v("email"), [w, U] = v(""), [b, W] = v(""), [D, G] = v(""), [d, x] = v(""), [I, q] = v(0), [O, te] = v(!1), de = V(() => f.trim().length > 0 && o.trim().length > 0 && !T, [
    f,
    T,
    o
  ]);
  Z(() => {
    if (I <= 0) return;
    const N = window.setTimeout(() => q((_) => _ - 1), 1e3);
    return () => clearTimeout(N);
  }, [I]), Z(
    () => () => {
      X.current !== null && window.clearTimeout(X.current);
    },
    []
  ), Z(() => {
    const N = l.current, _ = m.current;
    if (!N || !_) return;
    const P = N.getContext("2d");
    if (!P) return;
    const xe = window.getComputedStyle(document.documentElement), Le = xe.getPropertyValue("--chatui-color-auth-particle-active").trim(), Pe = xe.getPropertyValue("--chatui-color-auth-particle-idle").trim(), $e = xe.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ge = 0, n = 0, i = 0, R = window.devicePixelRatio || 1, Y = [];
    const z = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, K = 150, se = () => {
      const j = _.getBoundingClientRect();
      R = window.devicePixelRatio || 1, n = j.width, i = j.height, N.width = n * R, N.height = i * R, N.style.width = `${n}px`, N.style.height = `${i}px`, P.setTransform(R, 0, 0, R, 0, 0);
      const c = n < 768 ? 40 : 90;
      Y = Array.from({ length: c }, () => cn(n, i));
    }, J = (j) => {
      P.beginPath(), P.arc(j.x, j.y, j.size, 0, Math.PI * 2), P.closePath(), P.fill();
    }, ce = () => {
      P.clearRect(0, 0, n, i);
      for (let j = 0; j < Y.length; j += 1) {
        const c = Y[j];
        c.x += c.vx, c.y += c.vy, (c.x < 0 || c.x > n) && (c.vx = -c.vx), (c.y < 0 || c.y > i) && (c.vy = -c.vy);
        const ke = z.x - c.x, Te = z.y - c.y, we = Math.sqrt(ke * ke + Te * Te) || 1, _e = ke / we, Re = Te / we, ze = (z.radius - we) / z.radius, je = _e * ze * c.density, Me = Re * ze * c.density;
        if (we < z.radius)
          c.x -= je * 0.5, c.y -= Me * 0.5, P.fillStyle = Le, c.size = Math.min(c.size + 0.1, 2.5);
        else {
          if (c.x !== c.baseX) {
            const be = c.x - c.baseX;
            c.x -= be / 50;
          }
          if (c.y !== c.baseY) {
            const be = c.y - c.baseY;
            c.y -= be / 50;
          }
          P.fillStyle = Pe, c.size = Math.max(c.size - 0.05, 1);
        }
        J(c);
        for (let be = j; be < Y.length; be += 1) {
          const ye = Y[be], Ce = c.x - ye.x, Ae = c.y - ye.y, ve = Math.sqrt(Ce * Ce + Ae * Ae);
          if (ve < K) {
            const Ee = (1 - ve / K) * 0.4;
            P.beginPath(), P.strokeStyle = $e, P.globalAlpha = Ee, P.lineWidth = 1, P.moveTo(c.x, c.y), P.lineTo(ye.x, ye.y), P.stroke(), P.globalAlpha = 1, P.closePath();
          }
        }
      }
      ge = window.requestAnimationFrame(ce);
    }, he = (j) => {
      const c = _.getBoundingClientRect();
      z.x = j.clientX - c.left, z.y = j.clientY - c.top;
    }, me = () => {
      z.x = -1e3, z.y = -1e3;
    }, Ne = (j) => {
      if (j.touches.length < 1) return;
      const c = _.getBoundingClientRect();
      z.x = j.touches[0].clientX - c.left, z.y = j.touches[0].clientY - c.top;
    };
    return se(), ce(), window.addEventListener("resize", se), _.addEventListener("mousemove", he), _.addEventListener("mouseleave", me), _.addEventListener("touchmove", Ne, { passive: !0 }), _.addEventListener("touchend", me), () => {
      window.cancelAnimationFrame(ge), window.removeEventListener("resize", se), _.removeEventListener("mousemove", he), _.removeEventListener("mouseleave", me), _.removeEventListener("touchmove", Ne), _.removeEventListener("touchend", me);
    };
  }, []);
  const ne = async (N) => {
    if (N.preventDefault(), !!de) {
      y(!0), M(null);
      try {
        const _ = await t({ email: f.trim(), password: o, rememberLogin: p });
        if (!_.ok) {
          M(_.message);
          return;
        }
        C(!0), X.current = window.setTimeout(() => {
          C(!1), a();
        }, 900);
      } catch {
        M("登录失败，请稍后重试。");
      } finally {
        y(!1);
      }
    }
  }, oe = async () => {
    !w.trim() || I > 0 || (y(!0), await new Promise((N) => window.setTimeout(N, 1e3)), y(!1), te(!0), q(60));
  }, re = async () => {
    if (L === "email") {
      if (!w.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w) || !b.trim() || b.length < 6 || !D.trim() || D.length < 6 || D !== d) return;
      Q("success");
    }
  }, ue = () => {
    S(!1), Q("email"), U(""), W(""), G(""), x(""), q(0), te(!1);
  };
  return /* @__PURE__ */ r("div", { ref: m, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ r("form", { onSubmit: ne, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: f,
              onChange: (N) => {
                h(N.target.value), M(null);
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
              value: o,
              onChange: (N) => {
                g(N.target.value), M(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        A && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: A }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: p,
                  onChange: (N) => $(N.target.checked),
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
          /* @__PURE__ */ e("button", { type: "button", onClick: () => u("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !de,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: T ? "认证中..." : "登录" }),
              T && /* @__PURE__ */ r(
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
      !E && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
              onClick: () => u("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Xt, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-[var(--color-line-subtle)]", "aria-hidden": "true" }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => u("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Vt, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      E && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: ue,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        L === "email" && /* @__PURE__ */ r("div", { className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: w,
                onChange: (N) => U(N.target.value),
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
                  value: b,
                  onChange: (N) => W(N.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: oe,
                disabled: I > 0 || T || !w.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${I > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: I > 0 ? `${I}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: D,
                onChange: (N) => G(N.target.value),
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
                value: d,
                onChange: (N) => x(N.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${d.length > 0 && D !== d ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          d.length > 0 && D !== d && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: re,
              disabled: !w.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w) || !b.trim() || b.length < 6 || !D.trim() || D.length < 6 || D !== d,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        L === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(rt, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ue,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${F ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(rt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const dn = (t, a) => {
  const u = Math.random() * t, l = Math.random() * a;
  return {
    x: u,
    y: l,
    baseX: u,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Cn({
  mode: t = "join-lab",
  onSendVerificationCode: a,
  onVerifyIdentity: u,
  onRegister: l,
  onEnterWorkspace: m,
  onNavigate: f
}) {
  const h = ee(null), o = ee(null), g = ee(null), [p, $] = v("email"), [T, y] = v(""), [F, C] = v(""), [A, M] = v(""), [X, E] = v(""), S = t === "create-lab", [L, Q] = v(""), [w, U] = v(""), [b, W] = v(!1), [D, G] = v(0), [d, x] = v(null);
  Z(() => {
    if (D <= 0) return;
    const N = window.setTimeout(() => G((_) => _ - 1), 1e3);
    return () => clearTimeout(N);
  }, [D]), Z(
    () => () => {
      g.current !== null && window.clearTimeout(g.current);
    },
    []
  ), Z(() => {
    const N = h.current, _ = o.current;
    if (!N || !_) return;
    const P = N.getContext("2d");
    if (!P) return;
    const xe = window.getComputedStyle(document.documentElement), Le = xe.getPropertyValue("--chatui-color-auth-particle-active").trim(), Pe = xe.getPropertyValue("--chatui-color-auth-particle-idle").trim(), $e = xe.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ge = 0, n = 0, i = 0, R = window.devicePixelRatio || 1, Y = [];
    const z = { x: -1e3, y: -1e3, radius: 120 }, K = 150, se = () => {
      const j = _.getBoundingClientRect();
      R = window.devicePixelRatio || 1, n = j.width, i = j.height, N.width = n * R, N.height = i * R, N.style.width = `${n}px`, N.style.height = `${i}px`, P.setTransform(R, 0, 0, R, 0, 0);
      const c = n < 768 ? 40 : 90;
      Y = Array.from({ length: c }, () => dn(n, i));
    }, J = (j) => {
      P.beginPath(), P.arc(j.x, j.y, j.size, 0, Math.PI * 2), P.closePath(), P.fill();
    }, ce = () => {
      P.clearRect(0, 0, n, i);
      for (let j = 0; j < Y.length; j += 1) {
        const c = Y[j];
        c.x += c.vx, c.y += c.vy, (c.x < 0 || c.x > n) && (c.vx = -c.vx), (c.y < 0 || c.y > i) && (c.vy = -c.vy);
        const ke = z.x - c.x, Te = z.y - c.y, we = Math.sqrt(ke * ke + Te * Te) || 1, _e = ke / we, Re = Te / we, ze = (z.radius - we) / z.radius, je = _e * ze * c.density, Me = Re * ze * c.density;
        we < z.radius ? (c.x -= je * 0.5, c.y -= Me * 0.5, P.fillStyle = Le, c.size = Math.min(c.size + 0.1, 2.5)) : (c.x !== c.baseX && (c.x -= (c.x - c.baseX) / 50), c.y !== c.baseY && (c.y -= (c.y - c.baseY) / 50), P.fillStyle = Pe, c.size = Math.max(c.size - 0.05, 1)), J(c);
        for (let be = j; be < Y.length; be += 1) {
          const ye = Y[be], Ce = c.x - ye.x, Ae = c.y - ye.y, ve = Math.sqrt(Ce * Ce + Ae * Ae);
          if (ve < K) {
            const Ee = (1 - ve / K) * 0.4;
            P.beginPath(), P.strokeStyle = $e, P.globalAlpha = Ee, P.lineWidth = 1, P.moveTo(c.x, c.y), P.lineTo(ye.x, ye.y), P.stroke(), P.globalAlpha = 1, P.closePath();
          }
        }
      }
      ge = window.requestAnimationFrame(ce);
    }, he = (j) => {
      const c = _.getBoundingClientRect();
      z.x = j.clientX - c.left, z.y = j.clientY - c.top;
    }, me = () => {
      z.x = -1e3, z.y = -1e3;
    }, Ne = (j) => {
      if (j.touches.length < 1) return;
      const c = _.getBoundingClientRect();
      z.x = j.touches[0].clientX - c.left, z.y = j.touches[0].clientY - c.top;
    };
    return se(), ce(), window.addEventListener("resize", se), _.addEventListener("mousemove", he), _.addEventListener("mouseleave", me), _.addEventListener("touchmove", Ne, { passive: !0 }), _.addEventListener("touchend", me), () => {
      window.cancelAnimationFrame(ge), window.removeEventListener("resize", se), _.removeEventListener("mousemove", he), _.removeEventListener("mouseleave", me), _.removeEventListener("touchmove", Ne), _.removeEventListener("touchend", me);
    };
  }, []);
  const I = async () => {
    if (!(!T.trim() || D > 0)) {
      W(!0), x(null);
      try {
        const N = await a(T.trim());
        if (!N.ok) {
          x(N.message);
          return;
        }
        G(60);
      } catch {
        x("操作失败，请稍后重试。");
      } finally {
        W(!1);
      }
    }
  }, q = () => ({
    email: T.trim(),
    verificationCode: F.trim(),
    mode: t,
    ...S ? { labName: X.trim() } : { inviteCode: A.trim() }
  }), O = () => {
    const N = ["email", "password", "success"], _ = N.indexOf(p);
    _ < N.length - 1 && $(N[_ + 1]);
  }, te = V(() => {
    if (b) return !1;
    switch (p) {
      case "email":
        return S ? T.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T) && F.trim().length >= 6 && X.trim().length > 0 : T.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T) && F.trim().length >= 6 && A.trim().length > 0;
      case "password":
        return L.trim().length >= 6 && L === w;
      default:
        return !1;
    }
  }, [p, T, F, A, X, S, L, w, b]), de = async (N) => {
    if (N.preventDefault(), !!te) {
      W(!0), x(null);
      try {
        const _ = q(), P = p === "password" ? await l({ ..._, password: L }) : await u(_);
        if (!P.ok) {
          x(P.message);
          return;
        }
        O();
      } catch {
        x("操作失败，请稍后重试。");
      } finally {
        W(!1);
      }
    }
  }, ne = {
    email: S ? "创建实验室" : "验证您的邮箱",
    password: "设置登录密码",
    success: ""
  }, oe = {
    email: "",
    password: "",
    success: ""
  }, re = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", ue = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: o, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: h, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: ne[p] }),
        oe[p] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: oe[p] })
      ] }),
      p !== "success" && /* @__PURE__ */ r("form", { onSubmit: de, className: "space-y-5", children: [
        p === "email" && /* @__PURE__ */ r(De, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: T,
                onChange: (N) => {
                  y(N.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: re
              }
            ),
            /* @__PURE__ */ e("span", { className: ue, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: F,
                  onChange: (N) => {
                    C(N.target.value.replace(/\D/g, "").slice(0, 6)), x(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "off",
                  maxLength: 6,
                  className: re
                }
              ),
              /* @__PURE__ */ e("span", { className: ue, children: "验证码" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: I,
                disabled: D > 0 || b,
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${D > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: D > 0 ? `${D}s后获取` : "获取验证码"
              }
            )
          ] }),
          S ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: X,
                onChange: (N) => {
                  E(N.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: re
              }
            ),
            /* @__PURE__ */ e("span", { className: ue, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: A,
                onChange: (N) => {
                  M(N.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: re
              }
            ),
            /* @__PURE__ */ e("span", { className: ue, children: "邀请码" })
          ] })
        ] }),
        p === "password" && /* @__PURE__ */ r(De, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: L,
                onChange: (N) => {
                  Q(N.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: re
              }
            ),
            /* @__PURE__ */ e("span", { className: ue, children: "设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: w,
                onChange: (N) => {
                  U(N.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${re} ${w.length > 0 && L !== w ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ue, children: "确认密码" }),
            w.length > 0 && L !== w && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        d && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: d }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !te,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: b ? "处理中..." : p === "password" ? "完成注册" : "下一步" }),
              b && /* @__PURE__ */ r(
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(rt, { size: 40, className: "text-primary" }) })
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
              g.current = window.setTimeout(m, 1e3);
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
            onClick: () => f("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const ut = 10, mt = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function Sn({
  currentPath: t,
  projects: a,
  initialChats: u,
  logoUrl: l,
  user: m,
  children: f,
  initialAiUsageWarningActive: h = !1,
  chatActions: o = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: g,
  onLogout: p,
  onChatsChange: $,
  onDeleteChat: T
}) {
  const [y, F] = v(!0), [C, A] = v(240), [M, X] = v(!1), E = ee(0), S = ee(240), [L, Q] = v(() => {
    const s = { unassigned: !0 };
    return a.forEach((k) => {
      s[k.id] = !0;
    }), s;
  }), [w, U] = v(!1), [b, W] = v(() => [...u]), [D, G] = v(null), [d, x] = v("time"), [I, q] = v(!1), [O, te] = v(null), [de, ne] = v(""), [oe, re] = v(!1), [ue, N] = v(""), [_, P] = v(!1), [xe, Le] = v(h), [Pe, $e] = v(!1), ge = ee(null), n = ee(null), i = ee(null), R = !!(o.rename || o.share || o.pin || o.delete), Y = () => {
    U(!1), p();
  }, z = (s) => {
    Q((k) => ({ ...k, [s]: !k[s] }));
  }, K = (s) => {
    var H;
    W((B) => B.filter((fe) => fe.id !== s)), G(null), O === s && (te(null), ne("")), T == null || T(s), ((H = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : H[1]) === s && g("/chat/new", { replace: !0 });
  }, se = (s) => {
    W((k) => {
      const H = k.find((Se) => Se.id === s);
      if (!H) return k;
      const B = !H.isPinned, fe = k.map(
        (Se) => Se.id === s ? { ...Se, isPinned: B } : Se
      ), Be = fe.filter((Se) => Se.isPinned), Ze = fe.filter((Se) => !Se.isPinned);
      return [...Be, ...Ze];
    }), G(null);
  }, J = (s) => {
    te(s.id), ne(s.title), G(null);
  }, ce = () => {
    te(null), ne("");
  }, he = (s) => {
    const k = de.trim();
    k && W((H) => H.map((B) => B.id === s ? { ...B, title: k } : B)), ce();
  }, me = (s, k) => {
    if (s.stopPropagation(), s.key === "Enter") {
      s.preventDefault(), he(k);
      return;
    }
    s.key === "Escape" && (s.preventDefault(), ce());
  }, Ne = (s) => {
    var k;
    if (O === s) {
      (k = ge.current) == null || k.focus();
      return;
    }
    g(`/chat/${s}`);
  }, j = (s, k = !1) => O === s.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (B) => {
        var fe;
        B.stopPropagation(), (fe = ge.current) == null || fe.focus();
      },
      children: [
        k && /* @__PURE__ */ e(tt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: ge,
            value: de,
            onChange: (B) => ne(B.target.value),
            onKeyDown: (B) => me(B, s.id),
            onBlur: () => he(s.id),
            onClick: (B) => B.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    k && /* @__PURE__ */ e(tt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: s.title })
  ] }), c = (s) => {
    E.current = s.clientX, S.current = C, X(!0);
  };
  Z(() => {
    if (!M) return;
    const s = 200, k = 440, H = (fe) => {
      const Be = fe.clientX - E.current, Ze = Math.min(k, Math.max(s, S.current + Be));
      A(Ze);
    }, B = () => {
      X(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", H), window.addEventListener("mouseup", B), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", B);
    };
  }, [M, C]), Z(() => {
    y || A(240);
  }, [y]), Z(() => {
    $ == null || $(b);
  }, [b, $]), Z(() => {
    W([...u]);
  }, [u]), Z(() => {
    if (!O) return;
    const s = window.requestAnimationFrame(() => {
      var k;
      (k = ge.current) == null || k.focus();
    });
    return () => {
      window.cancelAnimationFrame(s);
    };
  }, [O]), Z(() => () => {
    n.current !== null && window.clearTimeout(n.current), i.current !== null && window.clearTimeout(i.current);
  }, []);
  const ke = () => {
    q(!0), n.current !== null && window.clearTimeout(n.current), n.current = window.setTimeout(() => {
      q(!1);
    }, 600);
  }, Te = () => {
    P(!0), i.current !== null && window.clearTimeout(i.current), i.current = window.setTimeout(() => {
      P(!1);
    }, 600);
  };
  Z(() => {
    xe || $e(!1);
  }, [xe]);
  const we = () => {
    $e(!0), g("/ai-usage");
  }, _e = V(() => [
    {
      key: "skills",
      label: "Skill"
    },
    {
      key: "ai-usage",
      label: "AI用量"
    },
    {
      key: "members",
      label: "成员管理"
    },
    {
      key: "system-settings",
      label: "更多系统设置"
    },
    {
      key: "logout",
      label: "退出登录",
      danger: !0
    }
  ], []), Re = (s) => {
    if (U(!1), s.key === "skills") {
      g("/skills");
      return;
    }
    if (s.key === "ai-usage") {
      g("/ai-usage");
      return;
    }
    if (s.key === "members") {
      g("/members");
      return;
    }
    if (s.key === "system-settings") {
      g("/system-settings");
      return;
    }
    s.key === "logout" && Y();
  }, ze = V(() => o.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Ot, { size: 14 }), danger: !0 }] : [], [o.delete]), je = (s) => {
    const k = [];
    return o.rename && k.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(er, { size: 14 }) }), o.share && k.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(tr, { size: 14 }) }), o.pin && k.push({
      key: "pin",
      label: s.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(tt, { size: 14 })
    }), k;
  }, Me = (s, k) => {
    const H = mt(s);
    return !R && !H ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${H ? "ml-6" : "ml-2"}`, children: [
      H && !k && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      R && /* @__PURE__ */ e(
        Ve,
        {
          open: k,
          onOpenChange: (B) => G(B ? s.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, C - 56)),
          trigger: /* @__PURE__ */ e(Jt, { size: 14 }),
          onTriggerClick: (B) => {
            B.stopPropagation();
          },
          items: je(s),
          footerItems: ze,
          onItemClick: (B, fe) => {
            if (fe.stopPropagation(), B.key === "rename") {
              J(s);
              return;
            }
            if (B.key === "share") {
              g(`/chat/${s.id}?share=1`), G(null);
              return;
            }
            if (B.key === "pin") {
              se(s.id);
              return;
            }
            if (B.key === "delete") {
              K(s.id);
              return;
            }
            G(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${k ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, be = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(et, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/project/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(gt, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], ye = V(() => {
    const s = t.match(/^\/chat\/([^/]+)$/);
    return s ? b.find((k) => k.id === s[1]) ?? null : null;
  }, [b, t]), Ce = V(
    () => b.filter((s) => s.isPinned),
    [b]
  ), Ae = V(
    () => b.filter((s) => !s.isPinned).slice().sort((s, k) => k.id.localeCompare(s.id)),
    [b]
  ), ve = V(
    () => d === "time" ? Ce.slice(0, ut) : Ce,
    [Ce, d]
  ), Ee = V(() => {
    if (d !== "time") return [];
    const s = Math.max(ut - ve.length, 0);
    return Ae.slice(0, s);
  }, [d, Ae, ve.length]), $t = V(
    () => ve.length + Ee.length,
    [ve.length, Ee.length]
  ), Mt = d === "time" && b.length > $t, Ye = V(() => new Map(a.map((s) => [s.id, s.name])), [a]), Ke = V(() => b.slice().sort((s, k) => k.id.localeCompare(s.id)), [b]), Qe = ue.trim().toLowerCase(), st = V(() => Qe ? Ke.filter((s) => {
    const k = s.projectId ? Ye.get(s.projectId) ?? "未分组" : "未分组";
    return `${s.title} ${k} ${s.date}`.toLowerCase().includes(Qe);
  }) : Ke, [Ke, Qe, Ye]);
  Z(() => {
    if (!ye) return;
    const s = ye.projectId ?? "unassigned";
    Q((k) => k[s] !== !1 ? k : { ...k, [s]: !0 });
  }, [ye]);
  const At = () => {
    N(""), re(!0);
  }, Lt = () => {
    re(!1), P(!1), i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, Pt = (s) => {
    re(!1), g(`/chat/${s}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: y ? C : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${y ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: C, minWidth: C },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => g("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: l, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => F(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Gt, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => g("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(Yt, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: be.map((s) => {
                  const k = s.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => g(s.path),
                      className: `nav-item ${k ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        s.icon,
                        /* @__PURE__ */ e("span", { children: s.label })
                      ]
                    },
                    s.path
                  );
                }) }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    onScroll: ke,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${I ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      ve.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: ve.map((s) => {
                          const k = t === `/chat/${s.id}`, H = D === s.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ne(s.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${O === s.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : k ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                j(s, d !== "time"),
                                O !== s.id && Me(s, H)
                              ]
                            }
                          ) }, s.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      d === "project" && a.map((s) => {
                        const k = b.filter((B) => B.projectId === s.id && !B.isPinned), H = L[s.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => z(s.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(et, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: H ? /* @__PURE__ */ e(qe, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(He, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: s.name })
                              ]
                            }
                          ),
                          H && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: k.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : k.map((B) => {
                            const fe = t === `/chat/${B.id}`, Be = D === B.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ne(B.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${O === B.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : fe ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  j(B),
                                  O !== B.id && Me(B, Be)
                                ]
                              }
                            ) }, B.id);
                          }) })
                        ] }, s.id);
                      }),
                      d === "project" && (() => {
                        const s = b.filter((H) => !H.projectId && !H.isPinned);
                        if (s.length === 0) return null;
                        const k = L.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => z("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(et, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: k ? /* @__PURE__ */ e(qe, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(He, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          k && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: s.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : s.map((H) => {
                            const B = t === `/chat/${H.id}`, fe = D === H.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ne(H.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${O === H.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : B ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  j(H),
                                  O !== H.id && Me(H, fe)
                                ]
                              }
                            ) }, H.id);
                          }) })
                        ] });
                      })(),
                      d === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        Ee.map((s) => {
                          const k = t === `/chat/${s.id}`, H = D === s.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ne(s.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${O === s.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : k ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                j(s),
                                O !== s.id && Me(s, H)
                              ]
                            }
                          ) }, s.id);
                        }),
                        Mt && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: At,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(He, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                xe && !Pe && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(Kt, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: we,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  Ve,
                  {
                    open: w,
                    onOpenChange: U,
                    placement: "top-start",
                    width: C - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: m.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: m.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(Qt, { size: 18 }) })
                    ] }),
                    items: _e,
                    onItemClick: Re,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          y && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: c,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${y ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ r("div", { className: "flex h-full w-full", children: [
      !y && /* @__PURE__ */ e(
        "button",
        {
          onClick: () => F(!0),
          "aria-label": "展开边栏",
          className: "absolute left-4 top-4 z-30 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
          title: "展开边栏",
          children: /* @__PURE__ */ e(Zt, { size: 20 })
        }
      ),
      typeof f == "function" ? f({ isSidebarOpen: y, setIsSidebarOpen: F, chats: b, setChats: W, setAiUsageWarningActive: Le }) : f
    ] }) }) }),
    /* @__PURE__ */ e(
      vt,
      {
        visible: oe,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Lt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Xe,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: ue,
                onChange: (s) => N(s.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          st.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Te,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${_ ? "is-scrolling is-scrolling-thin" : ""}`,
              children: st.map((s) => {
                const k = s.projectId ? Ye.get(s.projectId) ?? "未分组" : "未分组", H = mt(s);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => Pt(s.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: s.title }),
                        H && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: k }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: s.date })
                      ] })
                    ]
                  },
                  s.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(wt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function $n({
  projects: t,
  selectedProjectId: a,
  disabled: u = !1,
  embedded: l = !1,
  onSelectProject: m,
  onCreateProject: f,
  onSend: h
}) {
  const [o, g] = v(!1), [p, $] = v(!1), [T, y] = v(""), F = ee(null), C = ee(null), A = V(
    () => t.find((w) => w.id === a) ?? null,
    [t, a]
  ), M = V(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !A
    },
    ...t.map((w) => ({
      key: w.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: w.name }),
      active: (A == null ? void 0 : A.id) === w.id
    }))
  ], [t, A]), X = V(() => f ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(bt, { size: 16 }) }] : [], [f]), E = () => {
    $(!1), y("");
  }, S = (w) => {
    if (w.key === "create") {
      $(!0), y("");
      return;
    }
    const U = w.key === "none" ? null : String(w.key);
    m(U), g(!1);
  }, L = () => {
    const w = T.trim();
    if (!w) return;
    const U = t.find(
      (b) => b.name.trim().toLowerCase() === w.toLowerCase()
    );
    U ? m(U.id) : f == null || f(w), E(), g(!1);
  };
  Z(() => {
    if (!p) return;
    const w = (U) => {
      var W, D;
      const b = U.target;
      (W = C.current) != null && W.contains(b) || (D = F.current) != null && D.contains(b) || (E(), g(!1));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [p]);
  const Q = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: F, className: "relative", children: p && /* @__PURE__ */ e(
        "div",
        {
          ref: C,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                yt,
                {
                  value: T,
                  onChange: (w) => y(w.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Ie, { type: "secondary", size: "small", onClick: E, children: "取消" }),
              /* @__PURE__ */ e(
                Ie,
                {
                  type: "primary",
                  size: "small",
                  onClick: L,
                  disabled: !T.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Ct,
        {
          onSend: h,
          disabled: u,
          leadingControls: /* @__PURE__ */ e(
            Ve,
            {
              open: o,
              onOpenChange: (w) => {
                !w && p || (g(w), w ? $(!1) : E());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: A ? A.name : "工作项目" }),
                /* @__PURE__ */ e(qe, { size: 14 })
              ] }),
              items: M,
              footerItems: X,
              onItemClick: S,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(St, { onSelect: h })
  ] });
  return l ? Q : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm" }),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: Q })
  ] });
}
export {
  Sn as A,
  Ve as B,
  an as C,
  Ct as I,
  Tn as L,
  kt as M,
  St as Q,
  Cn as R,
  Tt as T,
  Br as a,
  Ie as b,
  _r as c,
  wt as d,
  yt as e,
  vt as f,
  jr as g,
  Ar as h,
  vn as i,
  Pr as j,
  Jr as k,
  on as l,
  kn as m,
  en as n,
  Kr as o,
  $n as p,
  ln as q,
  Nn as r,
  wn as s,
  sn as t,
  nn as u
};
