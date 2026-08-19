import { jsxs as r, Fragment as dt, jsx as e } from "react/jsx-runtime";
import Ye, { useMemo as Se, useState as g, useRef as ue, useCallback as Re, useLayoutEffect as Gt, useEffect as we, forwardRef as _r, useId as ln } from "react";
import je from "classnames";
import { Check as kt, Copy as Jt, RefreshCcw as on, ThumbsUp as cn, ThumbsDown as dn, ArrowUpRight as un, Info as mn, Ban as pn, TriangleAlert as ur, CircleCheckBig as Yt, ShieldCheck as Ir, CircleHelp as Rr, FileText as Pt, LoaderCircle as Dr, Puzzle as jr, AtSign as Fr, AlertCircle as hn, Paperclip as Hr, ArrowRight as qr, ChevronDown as Bt, ChevronRight as Lt, CircleX as Wr, Sparkles as Or, Loader2 as pt, Clock3 as er, Search as Nt, BookOpen as br, ListChecks as fn, Globe as xn, Minus as bn, Menu as Vr, Upload as gn, Download as yn, Trash2 as Ur, CheckCircle2 as _t, SearchX as vn, FlaskConical as wn, X as At, Plus as Kr, Cpu as gr, ChevronUp as Nn, Brain as kn, Square as Tn, Send as Cn, UserPlus as Sn, Building2 as Mn, Folder as ar, PanelLeftClose as $n, SquarePen as Ln, AlertTriangle as zn, Settings as En, Pin as sr, MoreHorizontal as An, Pencil as Pn, Share2 as Bn } from "lucide-react";
import Xr from "react-markdown";
import Gr from "remark-gfm";
import _n from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as In } from "react-dom";
import { Crepe as qt } from "@milkdown/crepe";
import { commandsCtx as lr, editorViewCtx as Mt } from "@milkdown/kit/core";
import { lift as Rn } from "@milkdown/kit/prose/commands";
import { liftListItem as Dn, wrapInList as jn } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Wt } from "@milkdown/kit/prose/state";
import { listItemSchema as Ot, paragraphSchema as yr, setBlockTypeCommand as Fn, orderedListSchema as vr, bulletListSchema as wr, headingSchema as Hn, addBlockTypeCommand as qn, selectTextNearPosCommand as Wn } from "@milkdown/kit/preset/commonmark";
import { createTable as On } from "@milkdown/kit/preset/gfm";
import { trailingConfig as Nr } from "@milkdown/kit/plugin/trailing";
const Vn = "_button_3tg6r_1", Un = "_primary_3tg6r_5", Kn = "_disabled_3tg6r_9", Xn = "_secondary_3tg6r_17", Gn = "_ghost_3tg6r_25", Yn = "_danger_3tg6r_33", Zn = "_small_3tg6r_41", Qn = "_medium_3tg6r_45", Jn = "_large_3tg6r_49", ea = "_roundedSquare_3tg6r_53", ta = "_roundedSmall_3tg6r_57", ra = "_roundedMedium_3tg6r_61", na = "_roundedLarge_3tg6r_62", aa = "_roundedFull_3tg6r_66", sa = "_loadingSpinner_3tg6r_67", la = "_loading_3tg6r_67", oa = "_fullWidth_3tg6r_90", ia = "_icon_3tg6r_94", Ve = {
  button: Vn,
  primary: Un,
  disabled: Kn,
  secondary: Xn,
  ghost: Gn,
  danger: Yn,
  small: Zn,
  medium: Qn,
  large: Jn,
  roundedSquare: ea,
  roundedSmall: ta,
  roundedMedium: ra,
  roundedLarge: na,
  roundedFull: aa,
  loadingSpinner: sa,
  loading: la,
  fullWidth: oa,
  icon: ia
}, ca = {
  primary: Ve.primary,
  secondary: Ve.secondary,
  ghost: Ve.ghost,
  danger: Ve.danger
}, da = {
  small: Ve.small,
  medium: Ve.medium,
  large: Ve.large
}, ua = {
  square: Ve.roundedSquare,
  small: Ve.roundedSmall,
  medium: Ve.roundedMedium,
  large: Ve.roundedLarge,
  full: Ve.roundedFull
}, at = Ye.forwardRef(
  ({
    type: t = "primary",
    size: a = "medium",
    isLoading: c,
    loading: i,
    disabled: o = !1,
    children: p,
    icon: h,
    iconPosition: v = "left",
    className: N,
    fullWidth: m = !1,
    rounded: _ = "medium",
    onClick: u,
    ...w
  }, I) => {
    const S = c ?? i ?? !1, T = o || S, P = Se(() => S ? /* @__PURE__ */ r(dt, { children: [
      /* @__PURE__ */ e("span", { className: Ve.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: p })
    ] }) : h ? /* @__PURE__ */ r(dt, { children: [
      v === "left" && /* @__PURE__ */ e("span", { className: Ve.icon, children: h }),
      p && /* @__PURE__ */ e("span", { children: p }),
      v === "right" && /* @__PURE__ */ e("span", { className: Ve.icon, children: h })
    ] }) : p, [p, S, h, v]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: I,
        className: je(
          Ve.button,
          ca[t],
          da[a],
          ua[_],
          {
            [Ve.fullWidth]: m,
            [Ve.loading]: S,
            [Ve.disabled]: T
          },
          N
        ),
        disabled: T,
        onClick: u,
        ...w,
        children: P
      }
    );
  }
);
at.displayName = "BaseButton";
const ma = { small: "h-8", medium: "h-9", large: "h-14" }, Yr = Ye.forwardRef(
  ({
    type: t = "text",
    placeholder: a,
    value: c,
    defaultValue: i,
    disabled: o = !1,
    readOnly: p = !1,
    error: h = !1,
    size: v = "medium",
    prefix: N,
    suffix: m,
    prefixIcon: _,
    suffixIcon: u,
    onChange: w,
    onFocus: I,
    onBlur: S,
    onClear: T,
    className: P,
    containerClassName: V,
    clearable: K = !1,
    label: H,
    helperText: E,
    ...ce
  }, G) => {
    const [j, L] = g(!1), J = ue(null), f = Re((Q) => {
      J.current = Q, typeof G == "function" ? G(Q) : G && (G.current = Q);
    }, [G]), le = Re(() => {
      var z, oe;
      const Q = J.current;
      Q && ((oe = (z = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : z.set) == null || oe.call(Q, ""), Q.dispatchEvent(new Event("input", { bubbles: !0 })), Q.focus(), T == null || T());
    }, [T]), me = Se(
      () => {
        var Q;
        return K && j && String(c ?? ((Q = J.current) == null ? void 0 : Q.value) ?? "").length > 0;
      },
      [K, j, c]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      H && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: H }),
      /* @__PURE__ */ r(
        "div",
        {
          className: je(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            ma[v],
            !o && !h && "hover:border-controlBorder",
            j && !o && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && j && "ring-2 ring-dangerFocus",
            o && "cursor-not-allowed bg-surfaceMuted",
            V
          ),
          children: [
            (N || _) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: N || _ }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: f,
                type: t,
                placeholder: a,
                value: c,
                defaultValue: i,
                disabled: o,
                readOnly: p,
                className: je("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", P),
                onFocus: (Q) => {
                  L(!0), I == null || I(Q);
                },
                onBlur: (Q) => {
                  L(!1), S == null || S(Q);
                },
                onChange: w,
                ...ce
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              me && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (Q) => Q.preventDefault(), onClick: le, "aria-label": "清空", children: "✕" }),
              m || u
            ] })
          ]
        }
      ),
      E && /* @__PURE__ */ e("div", { className: je("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: E })
    ] });
  }
);
Yr.displayName = "BaseInput";
const pa = { small: "h-8", medium: "h-9", large: "h-14" }, ha = Ye.forwardRef(
  ({ options: t = [], value: a, defaultValue: c, placeholder: i, disabled: o = !1, error: p = !1, size: h = "medium", label: v, helperText: N, onChange: m, className: _, ...u }, w) => {
    const I = Re((S) => {
      const T = S.target.value, P = t.find((V) => String(V.value) === T);
      m == null || m(T === "" ? "" : (P == null ? void 0 : P.value) ?? T);
    }, [m, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      v && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: v }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: w,
            className: je(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              p && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              pa[h],
              _
            ),
            value: a ?? c ?? "",
            disabled: o,
            onChange: I,
            ...u,
            children: [
              i && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: i }),
              t.map((S) => /* @__PURE__ */ e("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      N && /* @__PURE__ */ e("div", { className: je("text-xs leading-6", p ? "text-danger" : "text-mutedText"), children: N })
    ] });
  }
);
ha.displayName = "BaseSelect";
const fa = "_container_ykn59_1", xa = "_item_ykn59_10", ba = "_itemActive_ykn59_27", ga = "_itemDisabled_ykn59_27", ya = "_sizeSmall_ykn59_43", va = "_sizeMiddle_ykn59_49", wa = "_sizeLarge_ykn59_55", wt = {
  container: fa,
  item: xa,
  itemActive: ba,
  itemDisabled: ga,
  sizeSmall: ya,
  sizeMiddle: va,
  sizeLarge: wa
}, Na = {
  small: wt.sizeSmall,
  middle: wt.sizeMiddle,
  large: wt.sizeLarge
};
function Ys({
  options: t,
  value: a,
  defaultValue: c,
  onChange: i,
  size: o = "middle",
  disabled: p = !1,
  className: h
}) {
  var u;
  const [v, N] = g(
    c ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), m = a ?? v, _ = (w) => {
    p || (a === void 0 && N(w), i == null || i(w));
  };
  return /* @__PURE__ */ e("div", { className: je(wt.container, Na[o], h), children: t.map((w) => {
    const I = m === w.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: je(wt.item, I && wt.itemActive, p && wt.itemDisabled),
        onClick: () => _(w.value),
        disabled: p,
        "aria-pressed": I,
        children: w.label
      },
      w.value
    );
  }) });
}
const ka = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Ta = Ye.forwardRef(
  ({ accept: t, multiple: a = !1, disabled: c = !1, onChange: i, onError: o, maxSize: p, children: h, className: v, dragable: N = !0, placeholderTitle: m, placeholderDescription: _, placeholderIcon: u, maxCount: w }, I) => {
    const S = ue(null), [T, P] = g(!1), V = Re((H) => {
      if (w && H.length > w) {
        o == null || o(new Error(`单次最多上传 ${w} 个文件`));
        return;
      }
      if (p) {
        for (const E of Array.from(H))
          if (E.size > p) {
            o == null || o(new Error(`文件“${E.name}”超过大小限制（${ka(p)}）`));
            return;
          }
      }
      i == null || i(H);
    }, [w, p, i, o]), K = () => {
      var H;
      c || (H = S.current) == null || H.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: I,
        className: je(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          T && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          c && "cursor-not-allowed opacity-60",
          v
        ),
        onClick: K,
        onKeyDown: (H) => {
          !c && (H.key === "Enter" || H.key === " ") && (H.preventDefault(), K());
        },
        onDragOver: (H) => {
          N && !c && (H.preventDefault(), P(!0));
        },
        onDragLeave: () => P(!1),
        onDrop: (H) => {
          N && !c && (H.preventDefault(), P(!1), V(H.dataTransfer.files));
        },
        role: "button",
        tabIndex: c ? -1 : 0,
        "aria-disabled": c,
        children: [
          /* @__PURE__ */ e("input", { ref: S, type: "file", accept: t, multiple: a, disabled: c, onChange: (H) => H.target.files && V(H.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: u ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: m ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: _ ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Ta.displayName = "BaseUpload";
const Ca = "_maskAnimation_1h49h_1", Sa = "_modalAnimation_1h49h_5", kr = {
  maskAnimation: Ca,
  modalAnimation: Sa
}, mr = ({
  visible: t,
  open: a = t,
  show: c = a,
  title: i,
  width: o = 520,
  centered: p = !0,
  destroyOnClose: h = !1,
  mask: v = !0,
  maskClosable: N = !0,
  okText: m = "确认",
  cancelText: _ = "取消",
  confirmLoading: u = !1,
  okButtonProps: w,
  cancelButtonProps: I,
  onConfirm: S,
  onCancel: T,
  onClose: P,
  onOk: V,
  onDismiss: K,
  children: H,
  footer: E,
  className: ce,
  bodyClassName: G
}) => {
  const j = c ?? !1, L = Re(async () => {
    try {
      S ? await S() : V && await V();
    } catch (le) {
      console.error("Modal confirm error:", le);
    }
  }, [S, V]), J = Re(() => {
    T ? T() : P ? P() : K == null || K();
  }, [T, P, K]), f = Se(() => {
    if (E === null) return null;
    if (E) return E;
    const { type: le, ...me } = I ?? {}, { type: Q, ...z } = w ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(at, { type: "secondary", size: "medium", onClick: J, ...me, children: _ }),
      /* @__PURE__ */ e(at, { type: "primary", size: "medium", isLoading: u, onClick: L, ...z, children: u ? "加载中..." : m })
    ] });
  }, [I, _, u, E, J, L, w, m]);
  return !j && h || !j ? null : /* @__PURE__ */ r(dt, { children: [
    v && /* @__PURE__ */ e("div", { className: je("fixed inset-0 z-[1000] bg-overlayMask", kr.maskAnimation), onClick: () => N && J(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: je(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          p && "left-1/2 top-1/2",
          kr.modalAnimation,
          ce
        ),
        style: { width: o },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          i && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: i }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: J, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: je("min-h-20 p-5 text-primaryText", G), children: H }),
          f
        ]
      }
    )
  ] });
};
mr.displayName = "BaseModal";
const Ma = ({ title: t, extra: a, children: c, hoverable: i = !1, loading: o = !1, bordered: p = !0, className: h, bodyClassName: v, onClick: N }) => /* @__PURE__ */ r(
  "div",
  {
    className: je(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      p && "border border-borderGray",
      i && "cursor-pointer hover:border-borderGray hover:shadow-md",
      o && "pointer-events-none opacity-60",
      h
    ),
    onClick: N,
    children: [
      (t || a) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
      ] }),
      /* @__PURE__ */ e("div", { className: je("p-4 text-primaryText", (t || a) && "pt-1", v), children: c })
    ]
  }
);
Ma.displayName = "BaseCard";
const $a = ({ columns: t, dataSource: a = [], rowKey: c = "id", loading: i = !1, bordered: o = !0, striped: p = !0, className: h, onRow: v }, N) => /* @__PURE__ */ r("div", { ref: N, className: je("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: o ? "border-b border-lineSubtle" : void 0, children: t.map((m) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: m.width, textAlign: m.align }, children: m.title }, m.key || String(m.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: a.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : a.map((m, _) => {
      const u = String(typeof c == "string" ? m[c] ?? _ : _);
      return /* @__PURE__ */ e("tr", { className: je(o && "border-b border-lineSoft last:border-b-0", p && "odd:bg-surface"), ...(v == null ? void 0 : v(m, _)) || {}, children: t.map((w) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: w.align }, children: w.render ? w.render(m[w.dataIndex], m, _) : String(m[w.dataIndex] ?? "") }, w.key || String(w.dataIndex))) }, u);
    }) })
  ] }),
  i && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Zs = Ye.forwardRef($a), La = ({ current: t = 1, pageSize: a = 10, total: c = 0, onChange: i, showSizeChanger: o = !1, pageSizeOptions: p = [10, 20, 50, 100], onShowSizeChange: h, disabled: v = !1, className: N }) => {
  const m = Se(() => Math.ceil(c / a) || 1, [a, c]), _ = Re((w) => h == null ? void 0 : h(1, Number(w.target.value)), [h]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: je("flex flex-wrap items-center justify-center gap-4 p-4", N), children: [
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t > 1 && (i == null ? void 0 : i(t - 1)), disabled: v || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      m,
      " 页，共 ",
      c,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t < m && (i == null ? void 0 : i(t + 1)), disabled: v || t >= m, children: "下一页 →" }),
    o && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: a, onChange: _, disabled: v, children: p.map((w) => /* @__PURE__ */ r("option", { value: w, children: [
      w,
      " 条/页"
    ] }, w)) })
  ] });
};
La.displayName = "BasePagination";
const pr = ({ description: t = "暂无数据", image: a, children: c }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  a && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: a }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  c
] });
pr.displayName = "BaseEmpty";
const Zt = ({ trigger: t, items: a, footerItems: c = [], open: i = !1, onOpenChange: o, onTriggerClick: p, onItemClick: h, placement: v = "bottom-start", width: N, portal: m = !1, className: _, triggerClassName: u, menuClassName: w, listClassName: I, footerClassName: S }) => {
  const T = ue(null), P = ue(null), [V, K] = g({}), H = v.endsWith("end"), E = v.startsWith("top");
  Gt(() => {
    var f;
    if (!i || !m || !T.current) return;
    const L = T.current.getBoundingClientRect(), J = E ? ((f = P.current) == null ? void 0 : f.offsetHeight) ?? 0 : 0;
    K({
      position: "fixed",
      left: H ? L.right : L.left,
      top: E ? L.top - J - 8 : L.bottom,
      transform: H ? "translateX(-100%)" : void 0
    });
  }, [E, H, i, m, v]), we(() => {
    if (!i || !o) return;
    const L = (J) => {
      var le, me;
      const f = J.target;
      (le = T.current) != null && le.contains(f) || (me = P.current) != null && me.contains(f) || o(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [o, i]);
  const ce = Se(() => N ? { width: typeof N == "number" ? `${N}px` : N } : void 0, [N]), G = Re((L) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: je(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !L.danger && !L.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !L.danger && L.active && "bg-primary-soft font-medium text-primary",
        L.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (J) => h == null ? void 0 : h(L, J),
      disabled: L.disabled,
      children: [
        L.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: L.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: L.label })
      ]
    },
    L.key
  ), [h]), j = i ? /* @__PURE__ */ r(
    "div",
    {
      ref: P,
      className: je(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !m && "absolute",
        !m && !E && "top-[calc(100%+8px)]",
        !m && E && "bottom-[calc(100%+8px)]",
        !m && H ? "right-0" : m ? void 0 : "left-0",
        w
      ),
      style: m ? { ...V, ...ce } : ce,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: je("flex min-h-0 flex-col gap-1", I), children: a.map(G) }),
        c.length > 0 && /* @__PURE__ */ e("div", { className: je("flex flex-col gap-1 border-t border-lineSoft pt-2", S), children: c.map(G) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: T, className: je("relative inline-block", _), children: [
    /* @__PURE__ */ e("button", { type: "button", className: je("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (L) => {
      p == null || p(L), o == null || o(!i);
    }, "aria-haspopup": "menu", "aria-expanded": i, children: t }),
    m ? j && In(j, document.body) : j
  ] });
};
Zt.displayName = "BaseActionMenu";
const za = ({
  markdownContent: t,
  copyLabel: a = "复制 Markdown",
  onRefresh: c,
  feedback: i,
  onFeedback: o,
  disabled: p = !1
}) => {
  const [h, v] = g(!1), N = !!(c || o), m = Re(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), v(!0), window.setTimeout(() => v(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${N ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: m,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制" : a,
            children: h ? /* @__PURE__ */ e(kt, { size: 15 }) : /* @__PURE__ */ e(Jt, { size: 15 })
          }
        ),
        c && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: c,
            disabled: p,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(on, { size: 15 })
          }
        ),
        o && /* @__PURE__ */ r(dt, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => o("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(cn, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => o("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(dn, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, Tr = Ye.memo(za), Ea = {
  clarification: {
    icon: /* @__PURE__ */ e(Rr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(Yt, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(Ir, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(Yt, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(ur, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  blocked: {
    icon: /* @__PURE__ */ e(pn, { size: 16 }),
    className: "border-danger bg-danger-soft",
    iconClassName: "text-danger"
  },
  info: {
    icon: /* @__PURE__ */ e(mn, { size: 16 }),
    className: "border-lineSubtle bg-surfaceMuted",
    iconClassName: "text-secondaryText"
  }
};
function Aa({ card: t, actionPending: a = !1, onAction: c }) {
  const i = Ea[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${i.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${i.iconClassName}`, "aria-hidden": "true", children: i.icon }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ e("h3", { className: "m-0 text-sm font-semibold leading-5 text-primaryText", children: t.title }),
        t.statusLabel && /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText", children: t.statusLabel })
      ] }),
      t.summary && /* @__PURE__ */ e("p", { className: "m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText", children: t.summary }),
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((o, p) => /* @__PURE__ */ e("li", { children: o }, `${p}-${o}`)) }),
      t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.links.map((o) => /* @__PURE__ */ r(
        "a",
        {
          href: o.href,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary",
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: o.label }),
            /* @__PURE__ */ e(un, { size: 12, className: "shrink-0" })
          ]
        },
        `${o.href}-${o.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((o) => /* @__PURE__ */ e(
        at,
        {
          type: o.tone ?? "secondary",
          size: "small",
          disabled: a || !c,
          onClick: () => c == null ? void 0 : c(t.actionKey, o.id),
          children: o.label
        },
        o.id
      )) })
    ] })
  ] }) });
}
function Pa({ draft: t, onPreview: a, onConfirm: c, onCancel: i }) {
  const o = t.status === "saving", p = t.status === "saved", h = t.actionable ?? !0, v = t.previewable ?? !0, N = o || p || !h || !c;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !a || !v,
        onClick: () => a == null ? void 0 : a(t.actionKey),
        className: "flex w-full min-w-0 items-start gap-3 rounded-lg text-left outline-none transition-colors enabled:hover:bg-bgLight enabled:focus-visible:ring-2 enabled:focus-visible:ring-primary-soft-strong disabled:cursor-default",
        "aria-label": `预览草稿：${t.title}`,
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(Pt, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Helia 文档草稿" }),
            /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: t.title }),
            t.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: t.summary })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: p ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !p && h && i && /* @__PURE__ */ e(
          at,
          {
            type: "secondary",
            size: "small",
            disabled: o,
            onClick: () => i(t.actionKey),
            children: "取消"
          }
        ),
        (h || p) && /* @__PURE__ */ e(
          at,
          {
            type: p ? "secondary" : "primary",
            size: "small",
            disabled: N,
            onClick: () => c == null ? void 0 : c(t.actionKey),
            children: o ? /* @__PURE__ */ r(dt, { children: [
              /* @__PURE__ */ e(Dr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : p ? /* @__PURE__ */ r(dt, { children: [
              /* @__PURE__ */ e(kt, { size: 14, "aria-hidden": "true" }),
              "已保存"
            ] }) : "确认保存"
          }
        )
      ] })
    ] }),
    t.status === "error" && t.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: t.errorMessage })
  ] });
}
const Cr = "[[PAPER_LIST_JSON]]";
let Sr = !1, Vt = null, Ut = null, Kt = null;
const Ba = async () => (Ut || (Ut = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, a]) => ({
  remark: t.default,
  rehype: a.default
})).catch((t) => {
  throw Ut = null, t;
})), Ut), _a = async () => (Kt || (Kt = import("remark-emoji").then((t) => t.default).catch(() => (Kt = null, null))), Kt), Ia = async () => {
  Vt || (Vt = import("mermaid").then((a) => a.default ?? a).catch((a) => {
    throw Vt = null, a;
  }));
  const t = await Vt;
  if (!Sr) {
    const a = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: a ? { primaryColor: a, primaryBorderColor: a } : void 0
    }), Sr = !0;
  }
  return t;
}, Qt = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((a) => Qt(a)).join("") : Ye.isValidElement(t) ? Qt(t.props.children) : "", Mr = (t) => {
  const a = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(a);
}, Ra = ({ href: t, label: a }) => {
  const c = Se(() => {
    const i = a.trim();
    if (i) return i;
    try {
      const p = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (p) return decodeURIComponent(p);
    } catch {
    }
    return t;
  }, [t, a]);
  return /* @__PURE__ */ r("div", { className: "group not-prose my-2 inline-flex w-[340px] max-w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2 shadow-sm", children: [
    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-warning text-xs font-semibold tracking-wide text-white", children: "PDF" }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: c }),
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
        children: /* @__PURE__ */ e(qr, { size: 14 })
      }
    )
  ] });
}, Da = ({ language: t, rawCode: a, className: c, children: i }) => {
  const [o, p] = g(!1), h = Re(async () => {
    if (a.trim())
      try {
        await navigator.clipboard.writeText(a), p(!0), window.setTimeout(() => p(!1), 1200);
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
          className: `code-block-copy-btn ${o ? "copied" : ""}`,
          title: o ? "已复制代码" : "复制代码",
          children: [
            o ? /* @__PURE__ */ e(kt, { size: 12 }) : /* @__PURE__ */ e(Jt, { size: 12 }),
            o ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${c ?? ""}`.trim(), children: i }) })
  ] });
}, ja = ({ rawCode: t }) => {
  const [a, c] = g(!1), i = Re(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), c(!0), window.setTimeout(() => c(!1), 1200);
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
          onClick: i,
          className: `code-block-copy-btn ${a ? "copied" : ""}`,
          title: a ? "已复制图表代码" : "复制图表代码",
          children: [
            a ? /* @__PURE__ */ e(kt, { size: 12 }) : /* @__PURE__ */ e(Jt, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, Zr = (t) => {
  const a = typeof t.title == "string" ? t.title.trim() : "", c = typeof t.pmid == "string" ? t.pmid.trim() : "", i = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !a || !c || !i ? null : { title: a, pmid: c, doi: i };
}, $r = (t) => {
  const a = t.replace(/\r/g, "").split(`
`).map((i) => i.trim()).filter(Boolean);
  if (a.length === 0) return null;
  const c = [];
  return a.forEach((i, o) => {
    var u;
    const p = i.match(/PMID\s*[:：]\s*(\d{4,})/i), h = i.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!p || !h) return;
    const v = i.slice(0, p.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), N = ((u = a[o - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", _ = Zr({
      title: v || N,
      pmid: p[1],
      doi: h[1]
    });
    _ && c.push(_);
  }), c.length === 0 ? null : { items: c };
}, Fa = (t) => {
  if (!t.startsWith(Cr))
    return $r(t);
  const a = t.slice(Cr.length).trim();
  if (!a) return null;
  try {
    const c = JSON.parse(a);
    if (!Array.isArray(c.items)) return null;
    const i = c.items.map((o) => Zr(o)).filter((o) => o !== null);
    return i.length === 0 ? null : { items: i };
  } catch {
    return $r(a);
  }
}, Qr = ({
  msg: t,
  actionKey: a,
  feedback: c,
  onFeedback: i,
  onRefresh: o,
  onConfirmMiraDraft: p,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: v,
  pendingDisplayActionKey: N,
  onDisplayCardAction: m,
  isTyping: _ = !1,
  isStreaming: u
}) => {
  var oe, q;
  const w = t.role === "user", I = u ?? _, S = ue(null), [T, P] = g(null), [V, K] = g(null), [H, E] = g(null), [ce, G] = g(!1), j = Se(() => /```\s*mermaid/i.test(t.content), [t.content]), L = Se(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), J = Se(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), f = Se(
    () => w ? null : Fa(t.content),
    [w, t.content]
  ), le = !!(f && f.items.length > 0);
  we(() => {
    if (!L || T || V) return;
    let k = !1;
    return Ba().then((R) => {
      k || (P(() => R.remark), K(() => R.rehype));
    }).catch(() => {
    }), () => {
      k = !0;
    };
  }, [L, T, V]), we(() => {
    if (!J || ce) return;
    let k = !1;
    return _a().then((R) => {
      k || (R && E(() => R), G(!0));
    }), () => {
      k = !0;
    };
  }, [J, ce]);
  const me = Se(() => {
    const k = [Gr];
    return H && k.push(H), T && k.push(T), k;
  }, [H, T]), Q = Se(() => {
    const k = [_n];
    return V && k.push(V), k;
  }, [V]), z = Se(
    () => ({
      table: ({ node: k, ...R }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...R }) }),
      tr: ({ node: k, ...R }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...R }),
      th: ({ node: k, ...R }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...R
        }
      ),
      td: ({ node: k, ...R }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...R }),
      blockquote: ({ node: k, ...R }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...R
        }
      ),
      input: ({ node: k, type: R, checked: W, ...ee }) => R === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!W,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...ee
        }
      ) : /* @__PURE__ */ e("input", { type: R, ...ee }),
      section: ({ node: k, ...R }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...R }),
      p: ({ node: k, children: R, ...W }) => {
        const ee = Ye.Children.toArray(R);
        if (ee.length === 1 && Ye.isValidElement(ee[0])) {
          const ne = ee[0];
          if (typeof ne.props.href == "string" && Mr(ne.props.href)) {
            const ie = Qt(ne.props.children).trim();
            return /* @__PURE__ */ e(Ra, { href: ne.props.href, label: ie });
          }
        }
        return /* @__PURE__ */ e("p", { ...W, children: R });
      },
      a: ({ node: k, href: R, ...W }) => {
        const ee = R ?? "", ne = /^https?:\/\/(dx\.)?doi\.org\//i.test(ee) || /^doi:/i.test(ee), ie = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(ee) || /\/pmc\/|\/pmid\//i.test(ee), O = Mr(ee);
        return ne || ie || O ? /* @__PURE__ */ e(
          "a",
          {
            href: R,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...W
          }
        ) : /* @__PURE__ */ e("a", { href: R, target: "_blank", rel: "noreferrer", ...W });
      },
      pre({ children: k, ...R }) {
        const W = Ye.Children.toArray(k).find(
          (B) => Ye.isValidElement(B) && typeof B.props.className == "string" && B.props.className.includes("language-")
        );
        if (!W)
          return /* @__PURE__ */ e("pre", { ...R, children: k });
        const ee = W.props.className ?? "", ne = ee.match(/language-([\w-]+)/), ie = ne ? ne[1].toLowerCase() : "code", O = Qt(W.props.children).replace(/\n$/, "");
        return ie === "mermaid" ? /* @__PURE__ */ e(ja, { rawCode: O }) : /* @__PURE__ */ e(Da, { language: ie, rawCode: O, className: ee, children: W.props.children });
      },
      code({ children: k, className: R, ...W }) {
        return R ? /* @__PURE__ */ e("code", { className: R, ...W, children: k }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...W,
            children: k
          }
        );
      }
    }),
    []
  );
  return we(() => {
    if (w || I || !j) return;
    const k = S.current;
    if (!k) return;
    const R = Array.from(k.querySelectorAll(".mermaid")).filter(
      (W) => W.dataset.processed !== "true"
    );
    R.length !== 0 && Ia().then(async (W) => {
      await Promise.all(
        R.map(async (ee, ne) => {
          var x;
          const ie = (x = ee.textContent) == null ? void 0 : x.trim();
          if (!ie) return;
          const O = `mermaid-${Date.now()}-${ne}`, { svg: B } = await W.render(O, ie);
          ee.innerHTML = B, ee.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [w, I, j, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${w ? "justify-end" : "justify-start"}`, children: w ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (oe = t.references) == null ? void 0 : oe.map((k) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${k.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              k.type === "skill" ? /* @__PURE__ */ e(jr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(Fr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: k.label, children: k.label })
            ]
          },
          k.id
        )),
        (q = t.attachments) == null ? void 0 : q.map((k) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${k.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: k.status === "error" ? "alert" : void 0,
            title: k.errorMessage,
            children: [
              k.status === "uploading" ? /* @__PURE__ */ e(Dr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : k.status === "error" ? /* @__PURE__ */ e(hn, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : k.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: k.previewUrl, alt: k.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Hr, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: k.name, children: k.name }),
              k.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              k.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          k.id
        ))
      ] }),
      /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: t.content })
    ] }),
    t.content && /* @__PURE__ */ e(
      Tr,
      {
        markdownContent: t.content,
        copyLabel: "复制消息"
      }
    )
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    le && f ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: f.items.map((k, R) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: k.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${k.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: k.pmid
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
                  href: `https://doi.org/${k.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: k.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${k.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(qr, { size: 14 })
            }
          )
        ]
      },
      `${k.pmid}-${R}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: S,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Xr,
          {
            remarkPlugins: me,
            rehypePlugins: Q,
            components: z,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      Pa,
      {
        draft: t.miraDraft,
        onPreview: h,
        onConfirm: p,
        onCancel: v
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      Aa,
      {
        card: t.displayCard,
        actionPending: N === t.displayCard.actionKey,
        onAction: m
      }
    ),
    !le && t.content && !I && /* @__PURE__ */ e(
      Tr,
      {
        markdownContent: t.content,
        onRefresh: o,
        feedback: c,
        onFeedback: a && i ? (k) => i(a, k) : void 0,
        disabled: I
      }
    )
  ] }) }) });
}, Ha = Ye.memo(Qr), qa = {
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
}, Wa = {
  queued: /* @__PURE__ */ e(er, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(pt, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(pt, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(pt, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(pt, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(Or, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(Rr, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(Yt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(Ir, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(ur, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(Wr, { size: 14, className: "text-danger" })
}, Lr = {
  knowledge: {
    icon: /* @__PURE__ */ e(br, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(xn, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Nt, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(fn, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(br, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(Or, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(Nt, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Oa = {
  running: {
    icon: /* @__PURE__ */ e(pt, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(Yt, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(Wr, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(bn, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e(ur, { size: 13 }),
    colorClass: "text-warning"
  }
}, cr = ({
  phase: t,
  searchSteps: a = [],
  label: c,
  defaultExpanded: i = !0,
  elapsedSeconds: o,
  reasoning: p
}) => {
  const [h, v] = g(i), [N, m] = g(!1), _ = ue(null);
  we(() => {
    a.length > 0 && v(!0);
  }, [a.length]);
  const u = a.length > 0, w = o === void 0 ? void 0 : `${Math.floor(o / 60)}:${String(o % 60).padStart(2, "0")}`, I = (p == null ? void 0 : p.split(/\r?\n/).map((T) => T.trim()).filter(Boolean)) ?? [], S = I[I.length - 1] ?? "";
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: Wa[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: c || qa[t] }),
      w && /* @__PURE__ */ e(
        "span",
        {
          className: "text-[12px] tabular-nums leading-5 text-tertiaryText select-none",
          "aria-label": `已用时 ${w}`,
          children: w
        }
      ),
      u && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => v((T) => !T),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            h ? /* @__PURE__ */ e(Bt, { size: 12 }) : /* @__PURE__ */ e(Lt, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              a.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    p && /* @__PURE__ */ r("div", { className: "mt-1 w-full max-w-[680px] rounded-xl border border-lineSubtle bg-surfaceMuted px-3 py-2.5", children: [
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => m((T) => !T),
          className: "flex w-full items-center gap-1.5 text-left text-[13px] font-medium text-secondaryText",
          "aria-expanded": N,
          children: [
            N ? /* @__PURE__ */ e(Bt, { size: 14 }) : /* @__PURE__ */ e(Lt, { size: 14 }),
            /* @__PURE__ */ e("span", { className: "shrink-0", children: "Thinking" }),
            !N && S && /* @__PURE__ */ r("span", { className: "relative ml-2 min-w-0 flex-1 overflow-hidden text-left text-[12px] font-normal text-tertiaryText", children: [
              /* @__PURE__ */ e("span", { className: "block whitespace-nowrap", children: S }),
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
      N && /* @__PURE__ */ e("div", { className: "mt-2 whitespace-pre-wrap border-t border-lineSubtle pt-2 text-[13px] leading-6 text-secondaryText", children: p })
    ] }),
    u && /* @__PURE__ */ e(
      "div",
      {
        ref: _,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${h ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: a.map((T, P) => {
          const V = Lr[T.type] ?? Lr.tool, K = T.status ? Oa[T.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${V.colorClass}`, children: V.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: T.label }),
                    K && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${K.colorClass}`,
                        "aria-label": T.status,
                        children: K.icon
                      }
                    )
                  ] }),
                  (T.detail || T.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    T.detail,
                    T.detail && T.resultCount !== void 0 ? " · " : "",
                    T.resultCount !== void 0 ? `${T.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            T.id ?? `${T.type}-${P}-${T.label}`
          );
        })
      }
    )
  ] });
}, Va = Ye.memo(cr);
function Ua(t, a) {
  if (typeof t == "function") {
    t(a);
    return;
  }
  t && (t.current = a);
}
const Ka = 24;
function or(t) {
  const a = Number.parseFloat(t);
  return Number.isFinite(a) ? a : 0;
}
function Xa({
  messages: t,
  isTyping: a,
  statusPhase: c = "thinking",
  statusLabel: i,
  statusVisible: o,
  searchSteps: p = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: v = 800,
  selection: N,
  scrollbar: m,
  feedbackByMessageKey: _,
  getMessageKey: u = (G, j) => String(j),
  onFeedback: w,
  onRegenerate: I,
  onConfirmMiraDraft: S,
  onPreviewMiraDraft: T,
  onCancelMiraDraft: P,
  pendingDisplayActionKey: V,
  onDisplayCardAction: K,
  onScroll: H,
  scrollContainerRef: E,
  onMessageElement: ce
}) {
  var Ee, te;
  const G = !!N, j = ue(null), L = ue(null), J = ue(/* @__PURE__ */ new Map()), f = ue(), le = ue(), me = ue(!0), [Q, z] = g(), [oe, q] = g(0), k = c === "awaiting_clarification" || c === "awaiting_confirmation" || c === "awaiting_approval" || c === "warning" || c === "failed", R = a && (o ?? !h) || o === !0 && k;
  let W = -1, ee = -1;
  if (a) {
    for (let M = t.length - 1; M >= 0; M -= 1)
      if (((Ee = t[M]) == null ? void 0 : Ee.role) === "user") {
        ee = M;
        break;
      }
    for (let M = t.length - 1; M > ee; M -= 1)
      if (((te = t[M]) == null ? void 0 : te.role) === "assistant") {
        W = M;
        break;
      }
  }
  const ne = ee >= 0 ? u(t[ee], ee) : void 0, ie = W >= 0 ? u(t[W], W) : void 0, O = ne && ie ? `${ne}:${ie}` : void 0, B = W >= 0 ? t[W] : void 0, x = !!(B != null && B.reasoning && !B.content), Oe = R && (!h || x || k);
  we(() => {
    if (!a) {
      le.current = void 0, q(0);
      return;
    }
    le.current = Date.now(), q(0);
    const M = window.setInterval(() => {
      const $ = le.current;
      $ !== void 0 && q(Math.floor((Date.now() - $) / 1e3));
    }, 1e3);
    return () => window.clearInterval(M);
  }, [a]);
  const De = Re(
    (M) => {
      j.current = M, Ua(E, M);
    },
    [E]
  ), Ie = Re(
    (M) => {
      const $ = M.currentTarget, C = $.scrollHeight - $.scrollTop - $.clientHeight;
      me.current = C <= Ka, H == null || H(M);
    },
    [H]
  );
  return Gt(() => {
    const M = j.current, $ = L.current;
    if (!M || !$) return;
    const C = () => {
      me.current && (M.scrollTop = M.scrollHeight);
    };
    C();
    const Ne = new ResizeObserver(C);
    return Ne.observe($), () => Ne.disconnect();
  }, []), Gt(() => {
    if (!O || !ie || ee < 0 || W < 0)
      return;
    const M = j.current, $ = L.current, C = J.current.get(ee);
    if (!M || !$ || !C) return;
    const Ne = () => {
      const ye = window.getComputedStyle(M), ve = window.getComputedStyle($), Ae = M.clientHeight - or(ye.paddingTop) - or(ye.paddingBottom), fe = or(ve.rowGap || ve.gap), xe = Math.max(
        0,
        Math.floor(Ae - C.offsetHeight - fe)
      );
      z(
        (be) => (be == null ? void 0 : be.assistantKey) === ie && be.minHeight === xe ? be : { assistantKey: ie, minHeight: xe }
      );
    };
    Ne();
    const ge = new ResizeObserver(Ne);
    return ge.observe(M), ge.observe(C), () => ge.disconnect();
  }, [
    W,
    ie,
    O,
    ee
  ]), Gt(() => {
    if (!O || !ie || (Q == null ? void 0 : Q.assistantKey) !== ie || ee < 0 || f.current === O)
      return;
    const M = j.current, $ = J.current.get(ee);
    !M || !$ || (M.scrollTo({ top: $.offsetTop, behavior: "auto" }), f.current = O);
  }, [ie, O, ee, Q]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: De,
        "data-chat-scroll-container": !0,
        onScroll: Ie,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: L,
            className: `flex w-full flex-col ${G ? "gap-3" : "gap-8"}`,
            style: { maxWidth: v },
            children: [
              t.map((M, $) => {
                const C = u(M, $), Ne = (N == null ? void 0 : N.selectedMessageKeys.has(C)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": $,
                    "data-chat-turn-reserved": (Q == null ? void 0 : Q.assistantKey) === C ? "true" : void 0,
                    ref: (ge) => {
                      ge ? J.current.set($, ge) : J.current.delete($), ce == null || ce($, ge);
                    },
                    className: G ? "flex w-full items-start gap-2" : void 0,
                    style: (Q == null ? void 0 : Q.assistantKey) === C ? { minHeight: Q.minHeight } : void 0,
                    children: [
                      N && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => N.onToggleMessage(C),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": Ne ? "取消选择消息" : "选择消息",
                          children: Ne ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(kt, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: N ? `relative min-w-0 flex-1 rounded-xl px-2 transition-colors ${Ne ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${M.role === "user" ? "py-2.5" : "py-1.5"}` : "relative",
                          children: [
                            $ === W && Oe && /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 z-10 flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              cr,
                              {
                                phase: c,
                                label: i,
                                searchSteps: x ? [] : [...p],
                                elapsedSeconds: a ? oe : void 0,
                                reasoning: x ? B == null ? void 0 : B.reasoning : void 0
                              }
                            ) }),
                            /* @__PURE__ */ e(
                              Qr,
                              {
                                msg: M,
                                actionKey: C,
                                feedback: _ == null ? void 0 : _[C],
                                onFeedback: w,
                                onRefresh: I ? () => I($) : void 0,
                                onConfirmMiraDraft: S,
                                onPreviewMiraDraft: T,
                                onCancelMiraDraft: P,
                                pendingDisplayActionKey: V,
                                onDisplayCardAction: K,
                                isTyping: a && $ === W
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  C
                );
              }),
              W < 0 && R && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                cr,
                {
                  phase: c,
                  label: i,
                  searchSteps: x ? [] : [...p],
                  elapsedSeconds: a ? oe : void 0
                }
              ) }) })
            ]
          }
        )
      }
    ),
    m && m.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${m.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: m.height,
          transform: `translateY(${m.top}px)`
        }
      }
    )
  ] });
}
Ye.memo(Xa);
function Qs({
  children: t,
  maxWidth: a = 840,
  disclaimer: c = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: a },
      children: [
        t,
        c && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: c })
      ]
    }
  );
}
const Js = _r(
  function({ header: a, children: c, sidePanels: i }, o) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      a,
      /* @__PURE__ */ r("div", { ref: o, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: c }),
        i
      ] })
    ] });
  }
), el = _r(
  function({ open: a, width: c, resizing: i = !1, overlay: o = !1, overlayRight: p = 0, children: h }, v) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: v,
        "data-overlay": o ? "true" : "false",
        style: { width: a ? c : 0, ...o ? { right: p } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${o ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${i ? "transition-none" : "transition-[width] duration-300 ease-out"} ${a ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: c }, className: "h-full min-w-0", children: h })
      }
    );
  }
);
function Ga({
  isSidebarOpen: t,
  title: a,
  editingTitle: c,
  titleInputRef: i,
  divided: o = !1,
  actions: p,
  onOpenSidebar: h,
  onStartEditTitle: v,
  onEditingTitleChange: N,
  onCommitTitle: m,
  onEditingTitleKeyDown: _
}) {
  return /* @__PURE__ */ r(
    "header",
    {
      className: `z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${o ? "border-b border-chatWorkspaceDivider" : ""}`,
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
              children: /* @__PURE__ */ e(Vr, { size: 20 })
            }
          ),
          a !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: c !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: i,
              value: c,
              onChange: (w) => N == null ? void 0 : N(w.target.value),
              onBlur: m,
              onKeyDown: _,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${v ? "cursor-pointer" : ""}`,
              onClick: v,
              title: v ? "点击编辑对话名称" : a,
              children: a
            }
          ) })
        ] }),
        p && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: p })
      ]
    }
  );
}
function tl({ active: t = !1, icon: a, label: c, onClick: i }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: i,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        a,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: c })
      ]
    }
  );
}
function rl({
  items: t,
  activeMessageIndex: a,
  initiallyExpanded: c = !1,
  onSelect: i
}) {
  const [o, p] = g(c), [h, v] = g(null), [N, m] = g(0), [_, u] = g(0), [w, I] = g(!1), S = ue(null), T = ue({}), P = ue(null), V = Re(() => {
    const E = S.current;
    if (!E) {
      m(0), u(0);
      return;
    }
    const { scrollTop: ce, scrollHeight: G, clientHeight: j } = E;
    if (G <= j || j <= 0) {
      m(0), u(0);
      return;
    }
    const L = Math.max(j / G * j, 24), J = j - L, f = ce / Math.max(G - j, 1);
    m(L), u(J * f);
  }, []), K = Re(() => {
    V(), I(!0), P.current !== null && window.clearTimeout(P.current), P.current = window.setTimeout(() => I(!1), 650);
  }, [V]), H = () => {
    P.current !== null && (window.clearTimeout(P.current), P.current = null), p(!1), v(null), I(!1);
  };
  return we(() => {
    if (!o) return;
    const E = window.requestAnimationFrame(V);
    return () => window.cancelAnimationFrame(E);
  }, [o, t.length, V]), we(() => {
    const E = S.current, ce = T.current[a];
    if (!E || !ce) return;
    const G = E.scrollTop, j = G + E.clientHeight, L = ce.offsetTop, J = L + ce.offsetHeight, f = 16;
    L < G + f ? E.scrollTo({ top: Math.max(L - f, 0), behavior: "auto" }) : J > j - f && E.scrollTo({
      top: Math.max(J - E.clientHeight + f, 0),
      behavior: "auto"
    });
  }, [a, t.length]), we(() => () => {
    P.current !== null && window.clearTimeout(P.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => p(!0),
      onMouseLeave: H,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: S,
          onScroll: K,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${o ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((E) => {
              const ce = E.messageIndex === a, G = h === E.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (j) => {
                    T.current[E.messageIndex] = j;
                  },
                  type: "button",
                  onClick: () => i(E.messageIndex),
                  onMouseEnter: () => v(E.messageIndex),
                  onMouseLeave: () => v(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${o ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${E.messageIndex + 1} 条用户消息`,
                  title: E.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${o ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${ce ? "text-primary" : G ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: E.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${ce ? "h-[4px] w-[12px] bg-primary" : G ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                E.messageIndex
              );
            }) }),
            o && N > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${w ? "opacity-100" : "opacity-0"}`,
                style: { height: N, transform: `translateY(${_}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function nl({
  selectedCount: t,
  shareLink: a,
  modalOpen: c,
  copied: i = !1,
  contentMaxWidth: o = 840,
  onCancel: p,
  onCreateLink: h,
  onCloseModal: v,
  onCopyLink: N
}) {
  return /* @__PURE__ */ r(dt, { children: [
    /* @__PURE__ */ e("div", { className: "w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur", children: /* @__PURE__ */ r(
      "div",
      {
        className: "mx-auto flex w-full items-center justify-between gap-4",
        style: { maxWidth: o },
        children: [
          /* @__PURE__ */ r("div", { className: "min-w-0 text-sm text-secondaryText", children: [
            "已选择 ",
            t,
            " 条对话"
          ] }),
          /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(at, { type: "secondary", size: "small", onClick: p, children: "取消" }),
            /* @__PURE__ */ e(
              at,
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
      mr,
      {
        visible: c,
        title: "创建分享链接",
        width: 450,
        onCancel: v,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: a }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: N,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  i ? /* @__PURE__ */ e(kt, { size: 14 }) : /* @__PURE__ */ e(Jt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: i ? "已复制" : "复制" })
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function Jr({
  attachments: t,
  className: a = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: c = !1,
  deletingAttachmentId: i,
  unavailableHint: o,
  error: p,
  onRequestUpload: h,
  onDownloadAttachment: v,
  onDeleteAttachment: N
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${a}`, children: [
    /* @__PURE__ */ r("div", { className: h ? "pr-28" : void 0, children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      h && /* @__PURE__ */ e("div", { className: "absolute right-0 top-6", children: /* @__PURE__ */ e(
        at,
        {
          type: "secondary",
          size: "small",
          disabled: c,
          onClick: h,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            c ? /* @__PURE__ */ e(pt, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(gn, { size: 14 }),
            c ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${h ? "pr-28" : ""}`, children: t.map((m) => {
      const _ = i === m.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center rounded-full border border-lineSubtle bg-surface text-sm text-secondaryText",
          title: m.statusLabel,
          children: [
            v ? /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: () => v(m.id),
                className: "inline-flex min-w-0 items-center gap-2 rounded-full py-1.5 pl-3 pr-2 transition-colors hover:text-primaryText",
                "aria-label": `下载附件 ${m.name}`,
                title: `下载附件 ${m.name}`,
                children: [
                  /* @__PURE__ */ e(Pt, { size: 14, className: "shrink-0" }),
                  /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: m.name }),
                  m.status === "processing" ? /* @__PURE__ */ e(pt, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ e(yn, { size: 13 })
                ]
              }
            ) : /* @__PURE__ */ r("span", { className: "inline-flex min-w-0 items-center gap-2 px-3 py-1.5", children: [
              /* @__PURE__ */ e(Pt, { size: 14, className: "shrink-0" }),
              /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: m.name }),
              m.status === "processing" && /* @__PURE__ */ e(pt, { size: 12, className: "animate-spin" })
            ] }),
            N && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: _,
                onClick: () => N(m.id),
                className: "mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${m.name}`,
                title: "删除附件",
                children: _ ? /* @__PURE__ */ e(pt, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(Ur, { size: 13 })
              }
            )
          ]
        },
        m.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    o && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: o }),
    p && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: p })
  ] });
}
const Ya = {
  disabled: /* @__PURE__ */ e(vn, { size: 14 }),
  pending: /* @__PURE__ */ e(er, { size: 14 }),
  indexed: /* @__PURE__ */ e(_t, { size: 14 })
};
function en({
  createdByName: t,
  updatedByName: a,
  updatedAt: c,
  index: i
}) {
  return !t && !a && !c && !i ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    a && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      a
    ] }),
    c && /* @__PURE__ */ e("span", { children: c }),
    i && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: i.detail, children: [
      Ya[i.status],
      i.statusLabel
    ] })
  ] });
}
const Za = "_preview_gpk4w_1", Qa = "_editor_gpk4w_3", Ja = "_tableContainer_gpk4w_628", hr = {
  preview: Za,
  editor: Qa,
  tableContainer: Ja
}, es = {
  table: ({ node: t, ...a }) => /* @__PURE__ */ e("div", { className: hr.tableContainer, children: /* @__PURE__ */ e("table", { ...a }) })
};
function ts({
  document: t,
  layout: a = "page",
  onDownloadAttachment: c
}) {
  const [i, o] = g(!1), p = ue(null), h = a === "page" ? "px-[120px]" : "px-6 md:px-8";
  we(() => () => {
    p.current !== null && window.clearTimeout(p.current);
  }, []);
  const v = () => {
    o(!0), p.current !== null && window.clearTimeout(p.current), p.current = window.setTimeout(() => o(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${h}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        en,
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
        onScroll: v,
        className: `document-preview-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${i ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${hr.preview} ${h}`, children: /* @__PURE__ */ e(Xr, { remarkPlugins: [Gr], components: es, children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${a === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(pr, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            Jr,
            {
              attachments: t.attachments,
              onDownloadAttachment: c,
              className: `${a === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`
            }
          )
        ]
      }
    )
  ] });
}
function al({
  tabs: t,
  activeKey: a,
  onSelectTab: c,
  onCloseTab: i,
  onClose: o,
  pendingActionKey: p,
  onAction: h,
  resolveActions: v,
  renderContent: N,
  onDownloadAttachment: m,
  onResizeStart: _
}) {
  const u = t.find((S) => S.key === a) ?? null, w = u ? (v == null ? void 0 : v(u)) ?? u.actions : void 0, I = u ? N == null ? void 0 : N(u) : void 0;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: _,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((S) => {
        const T = S.key === a;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => c(S.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${T ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                S.type === "knowledge" || S.type === "draft" ? /* @__PURE__ */ e(Pt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(wn, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: S.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (P) => {
                P.stopPropagation(), i(S.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${S.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(At, { size: 12 })
            }
          )
        ] }, S.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        u && (w == null ? void 0 : w.map((S) => /* @__PURE__ */ e(
          at,
          {
            type: S.tone ?? "secondary",
            size: "small",
            disabled: p === u.key || !h,
            onClick: () => h == null ? void 0 : h(u.key, S.id),
            children: S.label
          },
          S.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(At, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: u ? I || (u.document ? /* @__PURE__ */ e(
      ts,
      {
        document: u.document,
        layout: "panel",
        onDownloadAttachment: m
      }
    ) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: u.loading ? "正在加载文档…" : u.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function sl({
  projectName: t = "个人工作台",
  searchQuery: a,
  error: c,
  knowledgeDocs: i,
  experiments: o,
  activePreviewKey: p,
  onSearchQueryChange: h,
  onOpenKnowledge: v,
  onOpenExperiment: N,
  onResizeStart: m
}) {
  const _ = i.length + o.length;
  return /* @__PURE__ */ r("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: m,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ r("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ r("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: t }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Nt, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: a,
              onChange: (u) => h(u.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: c ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: c }) : _ === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: a.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(dt, { children: [
        i.map((u) => {
          const w = `knowledge:${u.id}`, I = p === w;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => v(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${I ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${I ? "font-semibold" : "font-normal"}`, children: u.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: u.tags[0] ?? "未分类" })
              ]
            },
            u.id
          );
        }),
        o.map((u) => {
          const w = `experiment:${u.id}`, I = p === w;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => N(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${I ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${I ? "font-semibold" : "font-normal"}`, children: u.title }),
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
const rs = 50, ns = 100 * 1024 * 1024, as = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", ss = [
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
], ls = /(?:^|\s)\/([^\s/]*)$/, os = /(?:^|\s)@([^\s@]*)$/, is = (t, a) => {
  const i = t.slice(0, a).match(ls);
  return i ? i[1] : null;
}, cs = (t, a) => {
  const i = t.slice(0, a).match(os);
  return i ? i[1] : null;
}, ll = (t, a, c, i) => {
  const o = t.slice(0, a), p = t.slice(c), h = o.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const u = `/${i} `;
    return { value: `${o}${u}${p}`, cursor: o.length + u.length };
  }
  const v = o.length - h[0].length, m = `${h[0].startsWith(" ") ? " " : ""}/${i} `, _ = `${o.slice(0, v)}${m}`;
  return {
    value: `${_}${p}`,
    cursor: _.length
  };
}, ol = (t, a, c, i) => {
  const o = t.slice(0, a), p = t.slice(c), h = o.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const u = `@${i} `;
    return { value: `${o}${u}${p}`, cursor: o.length + u.length };
  }
  const v = o.length - h[0].length, m = `${h[0].startsWith(" ") ? " " : ""}@${i} `, _ = `${o.slice(0, v)}${m}`;
  return {
    value: `${_}${p}`,
    cursor: _.length
  };
}, ds = [], il = [], ir = [
  { id: "low", label: "Fast", desc: "快速响应，适合简单问题" },
  { id: "medium", label: "Deep", desc: "深度分析，平衡速度与质量" },
  { id: "high", label: "Max", desc: "最强推理，适合复杂任务" }
], zr = "DeepSeek V4", tn = ({
  onSend: t,
  disabled: a,
  autoFocus: c = !1,
  isStreaming: i = !1,
  onCancel: o,
  leadingControls: p,
  skillOptions: h = ss,
  fileOptions: v = ds,
  uploadAccept: N,
  validateUploadFile: m,
  onUploadValidationError: _
}) => {
  var Te, Y;
  const [u, w] = g(""), [I, S] = g(!1), [T, P] = g(!1), [V, K] = g(""), [H, E] = g(-1), [ce, G] = g(!1), [j, L] = g(""), [J, f] = g(-1), [le, me] = g([]), [Q, z] = g([]), [oe, q] = g([]), [k, R] = g(!1), [W, ee] = g("medium"), [ne, ie] = g(!1), [O, B] = g(!1), [x, Oe] = g(null), De = ue(null), Ie = ue(!1), Ee = ue(0), te = ue(null), M = ln(), $ = ue([]), C = ue(null), Ne = ue(null), ge = ue(null), ye = ue(null), ve = i, Ae = ve && !!o;
  we(() => {
    $.current = le;
  }, [le]), we(() => () => {
    $.current.forEach((l) => {
      l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    });
  }, []), we(() => {
    if (!ne) return;
    const l = (A) => {
      C.current && !C.current.contains(A.target) && (ie(!1), B(!1));
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [ne]), we(() => () => {
    ye.current && clearTimeout(ye.current);
  }, []);
  const fe = Se(() => {
    const l = V.trim().toLowerCase();
    return l ? h.filter((A) => `${A.id} ${A.description} ${A.source}`.toLowerCase().includes(l)) : h;
  }, [h, V]), xe = Se(() => {
    const l = j.trim().toLowerCase();
    return l ? v.filter((A) => `${A.name} ${A.projectName} ${A.sourceType} ${A.operatorName ?? ""} ${A.operatedAt ?? ""}`.toLowerCase().includes(l)) : v.filter((A) => A.isRecent).slice(0, 10);
  }, [v, j]), be = Re((l, A) => {
    const U = A ?? l.length, Le = is(l, U);
    if (Le !== null) {
      P(!0), K(Le), E(-1), G(!1), L(""), f(-1);
      return;
    }
    const Pe = cs(l, U);
    if (Pe !== null) {
      G(!0), L(Pe), f(-1), P(!1), K(""), E(-1);
      return;
    }
    P(!1), K(""), E(-1), G(!1), L(""), f(-1);
  }, []), $e = Re((l) => {
    if (l.disabled) return;
    const A = De.current, U = (A == null ? void 0 : A.selectionStart) ?? u.length, Le = (A == null ? void 0 : A.selectionEnd) ?? U, Pe = u.slice(0, U), Fe = u.slice(Le), Ce = (() => {
      const ze = Pe.match(/(?:^|\s)\/[^\s/]*$/);
      if (!ze)
        return { value: u, cursor: U };
      const _e = Pe.length - ze[0].length, Ke = ze[0].startsWith(" ") ? " " : "", rt = `${Pe.slice(0, _e)}${Ke}`;
      return {
        value: `${rt}${Fe}`,
        cursor: rt.length
      };
    })();
    z((ze) => {
      const _e = `skill-${l.id}`;
      return ze.some((Ke) => Ke.id === _e) ? ze : [...ze, { id: _e, type: "skill", label: l.id, sourceId: l.id }];
    }), w(Ce.value), P(!1), K(""), E(-1), requestAnimationFrame(() => {
      A && (A.focus(), A.setSelectionRange(Ce.cursor, Ce.cursor));
    });
  }, [u]), Me = Re((l) => {
    const A = De.current, U = (A == null ? void 0 : A.selectionStart) ?? u.length, Le = (A == null ? void 0 : A.selectionEnd) ?? U, Pe = u.slice(0, U), Fe = u.slice(Le), Ce = (() => {
      const ze = Pe.match(/(?:^|\s)@[^\s@]*$/);
      if (!ze)
        return { value: u, cursor: U };
      const _e = Pe.length - ze[0].length, Ke = ze[0].startsWith(" ") ? " " : "", rt = `${Pe.slice(0, _e)}${Ke}`;
      return {
        value: `${rt}${Fe}`,
        cursor: rt.length
      };
    })();
    q((ze) => {
      const _e = `doc-${l.id}`;
      return ze.some((Ke) => Ke.id === _e) ? ze : [...ze, { id: _e, type: "doc", label: l.name, sourceId: l.id }];
    }), w(Ce.value), G(!1), L(""), f(-1), requestAnimationFrame(() => {
      A && (A.focus(), A.setSelectionRange(Ce.cursor, Ce.cursor));
    });
  }, [u]), X = Re(() => {
    R(!1);
    const l = te.current;
    if (l) {
      try {
        if ("showPicker" in l && typeof l.showPicker == "function") {
          l.showPicker();
          return;
        }
      } catch {
      }
      l.click();
    }
  }, []), st = Re((l) => {
    const A = Array.from(l.target.files ?? []);
    if (A.length === 0) return;
    const U = A.filter((Le) => {
      const Pe = m == null ? void 0 : m(Le);
      return Pe ? (_ == null || _(Pe), !1) : !0;
    });
    me((Le) => {
      const Pe = new Set(Le.map((Ce) => Ce.id)), Fe = [...Le];
      return U.forEach((Ce) => {
        if (Ce.size > ns || Fe.length >= rs) return;
        const ze = `${Ce.name}-${Ce.size}-${Ce.lastModified}`;
        if (Pe.has(ze)) return;
        const _e = Ce.type.startsWith("image/");
        Pe.add(ze), Fe.push({
          id: ze,
          name: Ce.name,
          mimeType: Ce.type || "application/octet-stream",
          previewUrl: _e ? URL.createObjectURL(Ce) : void 0,
          file: Ce
        });
      }), Fe;
    }), l.target.value = "";
  }, [_, m]), lt = Re((l) => {
    me((A) => {
      const U = A.find((Le) => Le.id === l);
      return U != null && U.previewUrl && URL.revokeObjectURL(U.previewUrl), A.filter((Le) => Le.id !== l);
    });
  }, []), Ze = Re((l) => {
    z((A) => A.filter((U) => U.id !== l));
  }, []), tt = Re((l) => {
    q((A) => A.filter((U) => U.id !== l));
  }, []), Qe = Re(() => {
    !u.trim() || a || i || (t({
      content: u,
      attachments: le.map((l) => ({
        id: l.id,
        name: l.name,
        mimeType: l.mimeType,
        previewUrl: l.previewUrl,
        file: l.file
      })),
      references: [...Q, ...oe],
      thinkingLevel: W
    }), w(""), me([]), z([]), q([]), P(!1), K(""), E(-1), G(!1), L(""), f(-1));
  }, [u, a, i, t, le, oe, Q, W]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: M,
        ref: te,
        type: "file",
        multiple: !0,
        accept: N,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: st
      }
    ),
    (le.length > 0 || Q.length > 0 || oe.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      Q.map((l) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(jr, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: l.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ze(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${l.label}`,
                children: /* @__PURE__ */ e(At, { size: 12 })
              }
            )
          ]
        },
        l.id
      )),
      oe.map((l) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Fr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: l.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => tt(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${l.label}`,
                children: /* @__PURE__ */ e(At, { size: 12 })
              }
            )
          ]
        },
        l.id
      )),
      le.map((l) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            l.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: l.previewUrl, alt: l.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Hr, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: l.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: l.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => lt(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${l.name}`,
                children: /* @__PURE__ */ e(At, { size: 12 })
              }
            )
          ]
        },
        l.id
      ))
    ] }) }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: De,
        autoFocus: c,
        value: u,
        onCompositionStart: () => {
          Ie.current = !0;
        },
        onCompositionEnd: (l) => {
          Ie.current = !1, Ee.current = performance.now(), be(
            l.currentTarget.value,
            l.currentTarget.selectionStart
          );
        },
        onChange: (l) => {
          const A = l.target.value;
          w(A), be(A, l.target.selectionStart);
        },
        onClick: (l) => {
          be(l.currentTarget.value, l.currentTarget.selectionStart);
        },
        onKeyUp: (l) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(l.key) || be(l.currentTarget.value, l.currentTarget.selectionStart);
        },
        onKeyDown: (l) => {
          const A = l.nativeEvent;
          if (!(Ie.current || A.isComposing || A.keyCode === 229 || l.key === "Enter" && performance.now() - Ee.current < 50)) {
            if (l.key === "Enter" && (l.shiftKey || l.metaKey || l.ctrlKey)) {
              l.preventDefault();
              const U = l.currentTarget, Le = U.selectionStart ?? u.length, Pe = U.selectionEnd ?? Le, Fe = `${u.slice(0, Le)}
${u.slice(Pe)}`, Ce = Le + 1;
              w(Fe), be(Fe, Ce), requestAnimationFrame(() => {
                U.setSelectionRange(Ce, Ce);
              });
              return;
            }
            if (T) {
              if (l.key === "ArrowDown") {
                l.preventDefault(), E((U) => fe.length === 0 ? -1 : U < 0 ? 0 : (U + 1) % fe.length);
                return;
              }
              if (l.key === "ArrowUp") {
                l.preventDefault(), E((U) => fe.length === 0 ? -1 : U < 0 ? fe.length - 1 : (U - 1 + fe.length) % fe.length);
                return;
              }
              if (l.key === "Escape") {
                l.preventDefault(), P(!1), K(""), E(-1);
                return;
              }
              if (l.key === "Enter" && !l.shiftKey) {
                l.preventDefault();
                const U = H >= 0 ? fe[H] : void 0;
                U && $e(U);
                return;
              }
            }
            if (ce) {
              if (l.key === "ArrowDown") {
                l.preventDefault(), f((U) => xe.length === 0 ? -1 : U < 0 ? 0 : (U + 1) % xe.length);
                return;
              }
              if (l.key === "ArrowUp") {
                l.preventDefault(), f((U) => xe.length === 0 ? -1 : U < 0 ? xe.length - 1 : (U - 1 + xe.length) % xe.length);
                return;
              }
              if (l.key === "Escape") {
                l.preventDefault(), G(!1), L(""), f(-1);
                return;
              }
              if (l.key === "Enter" && !l.shiftKey) {
                l.preventDefault();
                const U = J >= 0 ? xe[J] : void 0;
                U && Me(U);
                return;
              }
            }
            l.key === "Enter" && !l.shiftKey && (l.preventDefault(), Qe());
          }
        },
        disabled: a,
        onFocus: () => S(!0),
        onBlur: () => {
          S(!1), P(!1), G(!1);
        },
        placeholder: I ? as : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${le.length > 0 || Q.length > 0 || oe.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    T && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (l) => l.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Nt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: V ? `搜索 skill：${V}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: fe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : fe.map((l, A) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: l.disabled,
          title: l.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${l.disabled ? "cursor-not-allowed opacity-50" : A === H ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => $e(l),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: l.badge }),
            /* @__PURE__ */ r("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: l.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: l.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: l.disabledReason || l.source })
          ]
        },
        l.id
      )) })
    ] }) }),
    ce && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (l) => l.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Nt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: j ? `搜索文件：${j}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !j && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(er, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        xe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : xe.map((l, A) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${A === J ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => Me(l),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Pt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: l.name }),
              !j && l.operatorName && l.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${l.operatorName} ${l.operatedAt}` })
            ]
          },
          l.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
        p,
        /* @__PURE__ */ r(
          "div",
          {
            className: "relative",
            onMouseEnter: () => R(!0),
            onMouseLeave: () => R(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: X,
                  "aria-controls": M,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Kr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${k ? "block" : "hidden"}`,
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
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r("div", { ref: C, className: "relative", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: i,
              onClick: () => {
                ie((l) => !l), B(!1);
              },
              "aria-haspopup": "menu",
              "aria-expanded": ne,
              className: `flex h-8 select-none items-center gap-1.5 rounded-full border px-2.5 text-[13px] font-medium transition-all disabled:cursor-not-allowed disabled:opacity-60 ${ne ? "border-controlBorderHover bg-primary-soft text-primary" : "border-borderGray bg-white text-secondaryText hover:border-controlBorder hover:bg-bgLight"}`,
              children: [
                /* @__PURE__ */ e(gr, { size: 13, className: "shrink-0" }),
                /* @__PURE__ */ e("span", { className: "max-w-[90px] truncate leading-none", children: zr }),
                /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center rounded bg-bgLight px-1 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (Te = ir.find((l) => l.id === W)) == null ? void 0 : Te.label }),
                /* @__PURE__ */ e(
                  Nn,
                  {
                    size: 12,
                    className: `shrink-0 transition-transform duration-200 ${ne ? "rotate-0" : "rotate-180"}`
                  }
                )
              ]
            }
          ),
          ne && /* @__PURE__ */ r(
            "div",
            {
              ref: Ne,
              role: "menu",
              className: "absolute bottom-full right-0 z-50 mb-2 w-[220px] rounded-xl border border-[#e6ecf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
              onMouseDown: (l) => l.preventDefault(),
              children: [
                /* @__PURE__ */ e("div", { className: "px-3 pb-1 pt-2.5", children: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-tertiaryText", children: [
                  /* @__PURE__ */ e(gr, { size: 11 }),
                  "模型"
                ] }) }),
                /* @__PURE__ */ e("div", { className: "px-1.5 pb-1", children: /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "menuitemradio",
                    "aria-checked": "true",
                    onClick: () => {
                      ie(!1), B(!1);
                    },
                    className: "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-primaryText transition-colors hover:bg-[#f4f7fb]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "truncate text-[13px] font-medium leading-tight", children: zr }),
                      /* @__PURE__ */ e("span", { className: "flex w-4 shrink-0 items-center gap-1.5", children: /* @__PURE__ */ e(kt, { size: 14, className: "shrink-0 text-primaryText" }) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "mx-3 border-t border-[#eef2f6]" }),
                /* @__PURE__ */ e("div", { className: "px-1.5 py-1.5", children: /* @__PURE__ */ r(
                  "div",
                  {
                    ref: ge,
                    className: "relative",
                    onMouseEnter: () => {
                      if (ye.current && clearTimeout(ye.current), Ne.current) {
                        const l = Ne.current.getBoundingClientRect();
                        Oe({
                          bottom: window.innerHeight - l.bottom,
                          left: l.left - 209
                        });
                      }
                      B(!0);
                    },
                    onMouseLeave: () => {
                      ye.current = setTimeout(() => B(!1), 120);
                    },
                    children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: `flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 transition-colors ${O ? "bg-[#f4f7fb]" : "hover:bg-[#f4f7fb]"}`,
                          children: [
                            /* @__PURE__ */ r("span", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ e(kn, { size: 13, className: "shrink-0 text-tertiaryText" }),
                              /* @__PURE__ */ e("span", { className: "text-[13px] font-medium leading-tight text-primaryText", children: "思考深度" })
                            ] }),
                            /* @__PURE__ */ r("span", { className: "flex shrink-0 items-center gap-1.5", children: [
                              /* @__PURE__ */ e("span", { className: "rounded bg-bgLight px-1.5 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (Y = ir.find((l) => l.id === W)) == null ? void 0 : Y.label }),
                              /* @__PURE__ */ e(Lt, { size: 13, className: "text-tertiaryText" })
                            ] })
                          ]
                        }
                      ),
                      O && x && /* @__PURE__ */ e(
                        "div",
                        {
                          role: "menu",
                          style: {
                            position: "fixed",
                            bottom: `${x.bottom}px`,
                            left: `${x.left}px`
                          },
                          className: "z-[9999] w-[200px] overflow-hidden rounded-xl border border-[#e6ecf2] bg-white py-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
                          onMouseEnter: () => {
                            ye.current && clearTimeout(ye.current), B(!0);
                          },
                          onMouseLeave: () => {
                            ye.current = setTimeout(() => B(!1), 120);
                          },
                          children: ir.map((l) => {
                            const A = W === l.id;
                            return /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                role: "menuitemradio",
                                "aria-checked": A,
                                onClick: () => {
                                  ee(l.id), B(!1), ie(!1);
                                },
                                className: `mx-1.5 flex w-[calc(100%-0.75rem)] items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${A ? "bg-[#f4f7fb]" : "hover:bg-[#f8fafc]"}`,
                                children: /* @__PURE__ */ r("span", { className: "flex min-w-0 flex-col gap-0.5", children: [
                                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                                    /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: l.label }),
                                    A && /* @__PURE__ */ e("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-tertiaryText" })
                                  ] }),
                                  /* @__PURE__ */ e("span", { className: "text-[11px] leading-tight text-tertiaryText", children: l.desc })
                                ] })
                              },
                              l.id
                            );
                          })
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: ve ? o : Qe,
            disabled: ve ? !Ae : a || !u.trim(),
            "aria-label": ve ? "停止生成" : "发送消息",
            title: ve ? "停止生成" : "发送消息",
            className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Ae || !ve && u.trim() && !a ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
            children: ve ? /* @__PURE__ */ e(Tn, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Cn, { size: 16 })
          }
        )
      ] })
    ] })
  ] }) });
};
Ye.memo(tn);
const us = ({ messages: t, isTyping: a, statusPhase: c = "thinking", searchSteps: i = [] }) => {
  const o = ue(null);
  we(() => {
    var h;
    (h = o.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, a]);
  const p = Se(() => t.map((h, v) => /* @__PURE__ */ e(Ha, { msg: h }, `${v}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    p,
    a && /* @__PURE__ */ e(Va, { phase: c, searchSteps: i }),
    /* @__PURE__ */ e("div", { ref: o })
  ] });
};
Ye.memo(us);
const ms = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], rn = ({ onSelect: t, prompts: a = ms, disabled: c = !1 }) => {
  const i = Re((o) => {
    t(o);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: a.map((o) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => i(o),
      disabled: c,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: o
    },
    o
  )) });
};
Ye.memo(rn);
const ps = (t, a) => {
  const c = Math.random() * t, i = Math.random() * a;
  return {
    x: c,
    y: i,
    baseX: c,
    baseY: i,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
}, Er = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary peer-autofill:left-4 peer-autofill:top-0 peer-autofill:-translate-y-1/2 peer-autofill:rounded peer-autofill:bg-surface peer-autofill:px-1.5 peer-autofill:text-xs peer-autofill:font-medium peer-autofill:text-primary";
function cl({ onLogin: t, onLoginSuccess: a, onNavigate: c }) {
  const i = ue(null), o = ue(null), [p, h] = g(""), [v, N] = g(""), [m, _] = g(!0), [u, w] = g(!1), [I, S] = g(!1), [T, P] = g(null), V = ue(null), [K, H] = g(!1), [E, ce] = g("email"), [G, j] = g(""), [L, J] = g(""), [f, le] = g(""), [me, Q] = g(""), [z, oe] = g(0), [q, k] = g(!1), R = Se(() => p.trim().length > 0 && v.trim().length > 0 && !u, [
    p,
    u,
    v
  ]);
  we(() => {
    if (z <= 0) return;
    const O = window.setTimeout(() => oe((B) => B - 1), 1e3);
    return () => clearTimeout(O);
  }, [z]), we(
    () => () => {
      V.current !== null && window.clearTimeout(V.current);
    },
    []
  ), we(() => {
    const O = i.current, B = o.current;
    if (!O || !B) return;
    const x = O.getContext("2d");
    if (!x) return;
    const Oe = window.getComputedStyle(document.documentElement), De = Oe.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ie = Oe.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Ee = Oe.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let te = 0, M = 0, $ = 0, C = window.devicePixelRatio || 1, Ne = [];
    const ge = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, ye = 150, ve = () => {
      const Me = B.getBoundingClientRect();
      C = window.devicePixelRatio || 1, M = Me.width, $ = Me.height, O.width = M * C, O.height = $ * C, O.style.width = `${M}px`, O.style.height = `${$}px`, x.setTransform(C, 0, 0, C, 0, 0);
      const X = M < 768 ? 40 : 90;
      Ne = Array.from({ length: X }, () => ps(M, $));
    }, Ae = (Me) => {
      x.beginPath(), x.arc(Me.x, Me.y, Me.size, 0, Math.PI * 2), x.closePath(), x.fill();
    }, fe = () => {
      x.clearRect(0, 0, M, $);
      for (let Me = 0; Me < Ne.length; Me += 1) {
        const X = Ne[Me];
        X.x += X.vx, X.y += X.vy, (X.x < 0 || X.x > M) && (X.vx = -X.vx), (X.y < 0 || X.y > $) && (X.vy = -X.vy);
        const st = ge.x - X.x, lt = ge.y - X.y, Ze = Math.sqrt(st * st + lt * lt) || 1, tt = st / Ze, Qe = lt / Ze, Te = (ge.radius - Ze) / ge.radius, Y = tt * Te * X.density, l = Qe * Te * X.density;
        if (Ze < ge.radius)
          X.x -= Y * 0.5, X.y -= l * 0.5, x.fillStyle = De, X.size = Math.min(X.size + 0.1, 2.5);
        else {
          if (X.x !== X.baseX) {
            const A = X.x - X.baseX;
            X.x -= A / 50;
          }
          if (X.y !== X.baseY) {
            const A = X.y - X.baseY;
            X.y -= A / 50;
          }
          x.fillStyle = Ie, X.size = Math.max(X.size - 0.05, 1);
        }
        Ae(X);
        for (let A = Me; A < Ne.length; A += 1) {
          const U = Ne[A], Le = X.x - U.x, Pe = X.y - U.y, Fe = Math.sqrt(Le * Le + Pe * Pe);
          if (Fe < ye) {
            const Ce = (1 - Fe / ye) * 0.4;
            x.beginPath(), x.strokeStyle = Ee, x.globalAlpha = Ce, x.lineWidth = 1, x.moveTo(X.x, X.y), x.lineTo(U.x, U.y), x.stroke(), x.globalAlpha = 1, x.closePath();
          }
        }
      }
      te = window.requestAnimationFrame(fe);
    }, xe = (Me) => {
      const X = B.getBoundingClientRect();
      ge.x = Me.clientX - X.left, ge.y = Me.clientY - X.top;
    }, be = () => {
      ge.x = -1e3, ge.y = -1e3;
    }, $e = (Me) => {
      if (Me.touches.length < 1) return;
      const X = B.getBoundingClientRect();
      ge.x = Me.touches[0].clientX - X.left, ge.y = Me.touches[0].clientY - X.top;
    };
    return ve(), fe(), window.addEventListener("resize", ve), B.addEventListener("mousemove", xe), B.addEventListener("mouseleave", be), B.addEventListener("touchmove", $e, { passive: !0 }), B.addEventListener("touchend", be), () => {
      window.cancelAnimationFrame(te), window.removeEventListener("resize", ve), B.removeEventListener("mousemove", xe), B.removeEventListener("mouseleave", be), B.removeEventListener("touchmove", $e), B.removeEventListener("touchend", be);
    };
  }, []);
  const W = async (O) => {
    if (O.preventDefault(), !!R) {
      w(!0), P(null);
      try {
        const B = await t({ email: p.trim(), password: v, rememberLogin: m });
        if (!B.ok) {
          P(B.message);
          return;
        }
        S(!0), V.current = window.setTimeout(() => {
          S(!1), a();
        }, 900);
      } catch {
        P("登录失败，请稍后重试。");
      } finally {
        w(!1);
      }
    }
  }, ee = async () => {
    !G.trim() || z > 0 || (w(!0), await new Promise((O) => window.setTimeout(O, 1e3)), w(!1), k(!0), oe(60));
  }, ne = async () => {
    if (E === "email") {
      if (!G.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G) || !L.trim() || L.length < 6 || !f.trim() || f.length < 6 || f !== me) return;
      ce("success");
    }
  }, ie = () => {
    H(!1), ce("email"), j(""), J(""), le(""), Q(""), oe(0), k(!1);
  };
  return /* @__PURE__ */ r("div", { ref: o, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: i, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ r("form", { onSubmit: W, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: p,
              onChange: (O) => {
                h(O.target.value), P(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "username",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: Er, children: "邮箱" })
        ] }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "password",
              value: v,
              onChange: (O) => {
                N(O.target.value), P(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "current-password",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: Er, children: "密码" })
        ] }),
        T && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: T }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: m,
                  onChange: (O) => _(O.target.checked),
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
          /* @__PURE__ */ e("button", { type: "button", onClick: () => c("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !R,
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
              onClick: () => c("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Sn, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-lineSubtle", "aria-hidden": "true" }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => c("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Mn, { size: 16, className: "text-authTextFaint" }),
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
            onClick: ie,
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
                onChange: (O) => j(O.target.value),
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
                  value: L,
                  onChange: (O) => J(O.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: ee,
                disabled: z > 0 || u || !G.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${z > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: z > 0 ? `${z}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (O) => le(O.target.value),
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
                value: me,
                onChange: (O) => Q(O.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${me.length > 0 && f !== me ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          me.length > 0 && f !== me && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ne,
              disabled: !G.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G) || !L.trim() || L.length < 6 || !f.trim() || f.length < 6 || f !== me,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        E === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(_t, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ie,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${I ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(_t, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const hs = (t, a) => {
  const c = Math.random() * t, i = Math.random() * a;
  return {
    x: c,
    y: i,
    baseX: c,
    baseY: i,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function dl({
  mode: t = "join-lab",
  onSendVerificationCode: a,
  onVerifyIdentity: c,
  onRegister: i,
  onEnterWorkspace: o,
  onNavigate: p
}) {
  const h = ue(null), v = ue(null), N = ue(null), [m, _] = g("identity"), [u, w] = g(""), [I, S] = g(""), [T, P] = g(""), [V, K] = g(""), [H, E] = g(""), [ce, G] = g(""), j = t === "create-lab", [L, J] = g(""), [f, le] = g(""), [me, Q] = g(!1), [z, oe] = g(0), [q, k] = g(""), [R, W] = g(null), ee = L.length > 0 && L.trim().length < 6;
  we(() => {
    if (z <= 0) return;
    const te = window.setTimeout(() => oe((M) => M - 1), 1e3);
    return () => clearTimeout(te);
  }, [z]), we(
    () => () => {
      N.current !== null && window.clearTimeout(N.current);
    },
    []
  ), we(() => {
    const te = h.current, M = v.current;
    if (!te || !M) return;
    const $ = te.getContext("2d");
    if (!$) return;
    const C = window.getComputedStyle(document.documentElement), Ne = C.getPropertyValue("--chatui-color-auth-particle-active").trim(), ge = C.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ye = C.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ve = 0, Ae = 0, fe = 0, xe = window.devicePixelRatio || 1, be = [];
    const $e = { x: -1e3, y: -1e3, radius: 120 }, Me = 150, X = () => {
      const Te = M.getBoundingClientRect();
      xe = window.devicePixelRatio || 1, Ae = Te.width, fe = Te.height, te.width = Ae * xe, te.height = fe * xe, te.style.width = `${Ae}px`, te.style.height = `${fe}px`, $.setTransform(xe, 0, 0, xe, 0, 0);
      const Y = Ae < 768 ? 40 : 90;
      be = Array.from({ length: Y }, () => hs(Ae, fe));
    }, st = (Te) => {
      $.beginPath(), $.arc(Te.x, Te.y, Te.size, 0, Math.PI * 2), $.closePath(), $.fill();
    }, lt = () => {
      $.clearRect(0, 0, Ae, fe);
      for (let Te = 0; Te < be.length; Te += 1) {
        const Y = be[Te];
        Y.x += Y.vx, Y.y += Y.vy, (Y.x < 0 || Y.x > Ae) && (Y.vx = -Y.vx), (Y.y < 0 || Y.y > fe) && (Y.vy = -Y.vy);
        const l = $e.x - Y.x, A = $e.y - Y.y, U = Math.sqrt(l * l + A * A) || 1, Le = l / U, Pe = A / U, Fe = ($e.radius - U) / $e.radius, Ce = Le * Fe * Y.density, ze = Pe * Fe * Y.density;
        U < $e.radius ? (Y.x -= Ce * 0.5, Y.y -= ze * 0.5, $.fillStyle = Ne, Y.size = Math.min(Y.size + 0.1, 2.5)) : (Y.x !== Y.baseX && (Y.x -= (Y.x - Y.baseX) / 50), Y.y !== Y.baseY && (Y.y -= (Y.y - Y.baseY) / 50), $.fillStyle = ge, Y.size = Math.max(Y.size - 0.05, 1)), st(Y);
        for (let _e = Te; _e < be.length; _e += 1) {
          const Ke = be[_e], rt = Y.x - Ke.x, ht = Y.y - Ke.y, ft = Math.sqrt(rt * rt + ht * ht);
          if (ft < Me) {
            const ot = (1 - ft / Me) * 0.4;
            $.beginPath(), $.strokeStyle = ye, $.globalAlpha = ot, $.lineWidth = 1, $.moveTo(Y.x, Y.y), $.lineTo(Ke.x, Ke.y), $.stroke(), $.globalAlpha = 1, $.closePath();
          }
        }
      }
      ve = window.requestAnimationFrame(lt);
    }, Ze = (Te) => {
      const Y = M.getBoundingClientRect();
      $e.x = Te.clientX - Y.left, $e.y = Te.clientY - Y.top;
    }, tt = () => {
      $e.x = -1e3, $e.y = -1e3;
    }, Qe = (Te) => {
      if (Te.touches.length < 1) return;
      const Y = M.getBoundingClientRect();
      $e.x = Te.touches[0].clientX - Y.left, $e.y = Te.touches[0].clientY - Y.top;
    };
    return X(), lt(), window.addEventListener("resize", X), M.addEventListener("mousemove", Ze), M.addEventListener("mouseleave", tt), M.addEventListener("touchmove", Qe, { passive: !0 }), M.addEventListener("touchend", tt), () => {
      window.cancelAnimationFrame(ve), window.removeEventListener("resize", X), M.removeEventListener("mousemove", Ze), M.removeEventListener("mouseleave", tt), M.removeEventListener("touchmove", Qe), M.removeEventListener("touchend", tt);
    };
  }, []);
  const ne = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(T) || z > 0)) {
      Q(!0), W(null);
      try {
        const te = await a(T);
        if (!te.ok) {
          W(te);
          return;
        }
        oe(te.resendAfterSeconds ?? 60), k(te.message ?? "短信验证码已发送");
      } catch {
        W({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        Q(!1);
      }
    }
  }, ie = () => ({
    email: u.trim(),
    name: I.trim(),
    phoneNumber: T,
    phoneVerificationCode: V.trim(),
    mode: t,
    ...j ? { labName: ce.trim() } : { inviteCode: H.trim() }
  }), O = () => {
    const te = ["identity", "password", "success"], M = te.indexOf(m);
    M < te.length - 1 && _(te[M + 1]);
  }, B = Se(() => {
    if (me) return !1;
    switch (m) {
      case "identity":
        return j ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && I.trim().length > 0 && /^1[3-9]\d{9}$/.test(T) && V.length === 6 && ce.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && I.trim().length > 0 && /^1[3-9]\d{9}$/.test(T) && V.length === 6 && H.trim().length > 0;
      case "password":
        return L.trim().length >= 6 && L === f;
      default:
        return !1;
    }
  }, [m, u, I, T, V, H, ce, j, L, f, me]), x = async (te) => {
    if (te.preventDefault(), !!B) {
      Q(!0), W(null);
      try {
        const M = ie(), $ = m === "password" ? await i({ ...M, password: L }) : await c(M);
        if (!$.ok) {
          W($);
          return;
        }
        O();
      } catch {
        W({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        Q(!1);
      }
    }
  }, Oe = {
    identity: j ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, De = {
    identity: "",
    password: "",
    success: ""
  }, Ie = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", Ee = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: v, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: h, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Oe[m] }),
        De[m] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: De[m] })
      ] }),
      m !== "success" && /* @__PURE__ */ r("form", { onSubmit: x, className: "space-y-5", children: [
        m === "identity" && /* @__PURE__ */ r(dt, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (te) => {
                  w(te.target.value), W(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ie
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: I,
                onChange: (te) => {
                  S(te.target.value), W(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Ie
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: T,
                  onChange: (te) => {
                    P(te.target.value.replace(/\D/g, "").slice(0, 11)), k(""), W(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Ie
                }
              ),
              /* @__PURE__ */ e("span", { className: Ee, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ne,
                disabled: z > 0 || me || !/^1[3-9]\d{9}$/.test(T),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${z > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: z > 0 ? `${z}s后获取` : "获取验证码"
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
                onChange: (te) => {
                  K(te.target.value.replace(/\D/g, "").slice(0, 6)), W(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Ie
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "短信验证码" })
          ] }),
          q && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: q }),
          j ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: ce,
                onChange: (te) => {
                  G(te.target.value), W(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ie
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: H,
                onChange: (te) => {
                  E(te.target.value), W(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ie
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "邀请码" })
          ] })
        ] }),
        m === "password" && /* @__PURE__ */ r(dt, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: L,
                onChange: (te) => {
                  J(te.target.value), W(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ie} ${(R == null ? void 0 : R.field) === "password" || ee ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "设置密码" }),
            ((R == null ? void 0 : R.field) === "password" || ee) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (R == null ? void 0 : R.field) === "password" ? R.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (te) => {
                  le(te.target.value), W(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ie} ${f.length > 0 && L !== f ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Ee, children: "确认密码" }),
            f.length > 0 && L !== f && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        R && R.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: R.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !B,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: me ? "处理中..." : m === "password" ? "完成注册" : "下一步" }),
              me && /* @__PURE__ */ r(
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
      m === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(_t, { size: 40, className: "text-primary" }) })
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
              N.current = window.setTimeout(o, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      m !== "success" && /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
        "已有账号？",
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => p("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const fs = (t, a) => {
  const c = Math.random() * t, i = Math.random() * a;
  return { x: c, y: i, baseX: c, baseY: i, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function ul({ onSendCode: t, onResetPassword: a, onBackToLogin: c }) {
  const i = ue(null), o = ue(null), p = ue(null), [h, v] = g("phone"), [N, m] = g(""), [_, u] = g(""), [w, I] = g(""), [S, T] = g(""), [P, V] = g(!1), [K, H] = g(0), [E, ce] = g(""), [G, j] = g(null);
  we(() => {
    if (K <= 0) return;
    const z = window.setTimeout(() => H((oe) => oe - 1), 1e3);
    return () => window.clearTimeout(z);
  }, [K]), we(() => {
    const z = i.current, oe = o.current;
    if (!z || !oe) return;
    const q = z.getContext("2d");
    if (!q) return;
    const k = window.getComputedStyle(document.documentElement), R = k.getPropertyValue("--chatui-color-auth-particle-active").trim(), W = k.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ee = k.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ne = 0, ie = 0, O = 0, B = [];
    const x = { x: -1e3, y: -1e3, radius: 120 }, Oe = 150, De = () => {
      const $ = oe.getBoundingClientRect(), C = window.devicePixelRatio || 1;
      ie = $.width, O = $.height, z.width = ie * C, z.height = O * C, z.style.width = `${ie}px`, z.style.height = `${O}px`, q.setTransform(C, 0, 0, C, 0, 0), B = Array.from({ length: ie < 768 ? 40 : 90 }, () => fs(ie, O));
    }, Ie = () => {
      q.clearRect(0, 0, ie, O);
      for (let $ = 0; $ < B.length; $ += 1) {
        const C = B[$];
        C.x += C.vx, C.y += C.vy, (C.x < 0 || C.x > ie) && (C.vx = -C.vx), (C.y < 0 || C.y > O) && (C.vy = -C.vy);
        const Ne = x.x - C.x, ge = x.y - C.y, ye = Math.sqrt(Ne * Ne + ge * ge) || 1, ve = (x.radius - ye) / x.radius;
        ye < x.radius ? (C.x -= Ne / ye * ve * C.density * 0.5, C.y -= ge / ye * ve * C.density * 0.5, q.fillStyle = R, C.size = Math.min(C.size + 0.1, 2.5)) : (C.x -= (C.x - C.baseX) / 50, C.y -= (C.y - C.baseY) / 50, q.fillStyle = W, C.size = Math.max(C.size - 0.05, 1)), q.beginPath(), q.arc(C.x, C.y, C.size, 0, Math.PI * 2), q.fill();
        for (let Ae = $; Ae < B.length; Ae += 1) {
          const fe = B[Ae], xe = C.x - fe.x, be = C.y - fe.y, $e = Math.sqrt(xe * xe + be * be);
          $e >= Oe || (q.beginPath(), q.globalAlpha = (1 - $e / Oe) * 0.4, q.strokeStyle = ee, q.lineWidth = 1, q.moveTo(C.x, C.y), q.lineTo(fe.x, fe.y), q.stroke(), q.globalAlpha = 1);
        }
      }
      ne = window.requestAnimationFrame(Ie);
    }, Ee = ($) => {
      const C = oe.getBoundingClientRect();
      x.x = $.clientX - C.left, x.y = $.clientY - C.top;
    }, te = ($) => {
      if (!$.touches.length) return;
      const C = oe.getBoundingClientRect();
      x.x = $.touches[0].clientX - C.left, x.y = $.touches[0].clientY - C.top;
    }, M = () => {
      x.x = -1e3, x.y = -1e3;
    };
    return De(), Ie(), window.addEventListener("resize", De), oe.addEventListener("mousemove", Ee), oe.addEventListener("mouseleave", M), oe.addEventListener("touchmove", te, { passive: !0 }), oe.addEventListener("touchend", M), () => {
      window.cancelAnimationFrame(ne), window.removeEventListener("resize", De), oe.removeEventListener("mousemove", Ee), oe.removeEventListener("mouseleave", M), oe.removeEventListener("touchmove", te), oe.removeEventListener("touchend", M);
    };
  }, []), we(() => () => {
    p.current !== null && window.clearTimeout(p.current);
  }, []);
  const L = Se(() => /^1[3-9]\d{9}$/.test(N) && _.length === 6 && w.length >= 6 && w === S, [S, w, N, _]), J = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", f = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: o, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: i, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(dt, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (z) => {
          if (z.preventDefault(), !(!L || P)) {
            V(!0), j(null);
            try {
              const oe = await a({ phoneNumber: N, phoneVerificationCode: _, newPassword: w });
              if (!oe.ok) {
                j(oe.message);
                return;
              }
              v("success");
            } catch {
              j("密码重置失败，请稍后重试。");
            } finally {
              V(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: N, onChange: (z) => {
                m(z.target.value.replace(/\D/g, "").slice(0, 11)), ce(""), j(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: J }),
              /* @__PURE__ */ e("span", { className: f, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(N) || K > 0 || P)) {
                V(!0), j(null);
                try {
                  const z = await t(N);
                  if (!z.ok) {
                    j(z.message);
                    return;
                  }
                  H(z.resendAfterSeconds ?? 60), ce(z.message ?? "短信验证码已发送");
                } catch {
                  j("验证码发送失败，请稍后重试。");
                } finally {
                  V(!1);
                }
              }
            }, disabled: K > 0 || P || !/^1[3-9]\d{9}$/.test(N), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${K > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: K > 0 ? `${K}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: _, onChange: (z) => {
              u(z.target.value.replace(/\D/g, "").slice(0, 6)), j(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: J }),
            /* @__PURE__ */ e("span", { className: f, children: "短信验证码" })
          ] }),
          E && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: E }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: w, onChange: (z) => {
              I(z.target.value), j(null);
            }, required: !0, placeholder: " ", className: J }),
            /* @__PURE__ */ e("span", { className: f, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: S, onChange: (z) => {
              T(z.target.value), j(null);
            }, required: !0, placeholder: " ", className: `${J} ${S.length > 0 && w !== S ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: f, children: "确认新密码" }),
            S.length > 0 && w !== S && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          G && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: G }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !L || P, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: P ? "处理中..." : "重置密码" }),
            P && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => c(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
        ] })
      ] }) : /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-primary-soft opacity-70" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(_t, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          p.current = window.setTimeout(() => c({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const Ar = 10, Pr = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function ml({
  currentPath: t,
  projects: a,
  initialChats: c,
  logoUrl: i,
  user: o,
  children: p,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: v,
  canViewAiUsage: N = !0,
  canManageMembers: m = !0,
  chatActions: _ = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: w,
  onChatsChange: I,
  onRenameChat: S,
  onTogglePinChat: T,
  onShareChat: P,
  onDeleteChat: V
}) {
  const [K, H] = g(!0), [E, ce] = g(240), [G, j] = g(!1), L = ue(0), J = ue(240), [f, le] = g(() => {
    const d = { unassigned: !0 };
    return a.forEach((Z) => {
      d[Z.id] = !0;
    }), d;
  }), [me, Q] = g(!1), [z, oe] = g(() => [...c]), [q, k] = g(null), [R, W] = g(null), [ee, ne] = g("time"), [ie, O] = g(!1), [B, x] = g(null), [Oe, De] = g(""), [Ie, Ee] = g(!1), [te, M] = g(""), [$, C] = g(!1), [Ne, ge] = g(h), [ye, ve] = g(!1), Ae = v ?? Ne, fe = ue(null), xe = ue(null), be = ue(null), $e = () => {
    Q(!1), w();
  }, Me = (d) => {
    le((Z) => ({ ...Z, [d]: !Z[d] }));
  }, X = (d) => {
    var de;
    oe((pe) => pe.filter((He) => He.id !== d)), k(null), B === d && (x(null), De("")), V == null || V(d), ((de = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : de[1]) === d && u("/chat/new", { replace: !0 });
  }, st = (d) => {
    const Z = z.find((pe) => pe.id === d);
    if (!Z) return;
    const de = !Z.isPinned;
    oe((pe) => pe.map(
      (et) => et.id === d ? { ...et, isPinned: de } : et
    )), T == null || T(d, de), k(null);
  }, lt = (d) => {
    x(d.id), De(d.title), k(null);
  }, Ze = () => {
    x(null), De("");
  }, tt = (d) => {
    const Z = Oe.trim();
    Z && (oe((de) => de.map((pe) => pe.id === d ? { ...pe, title: Z } : pe)), S == null || S(d, Z)), Ze();
  }, Qe = (d, Z) => {
    if (d.stopPropagation(), d.key === "Enter") {
      d.preventDefault(), tt(Z);
      return;
    }
    d.key === "Escape" && (d.preventDefault(), Ze());
  }, Te = (d) => {
    var Z;
    if (B === d) {
      (Z = fe.current) == null || Z.focus();
      return;
    }
    u(`/chat/${d}`);
  }, Y = (d, Z = !1) => B === d.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (pe) => {
        var He;
        pe.stopPropagation(), (He = fe.current) == null || He.focus();
      },
      children: [
        Z && /* @__PURE__ */ e(sr, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: fe,
            value: Oe,
            onChange: (pe) => De(pe.target.value),
            onKeyDown: (pe) => Qe(pe, d.id),
            onBlur: () => tt(d.id),
            onClick: (pe) => pe.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    Z && /* @__PURE__ */ e(sr, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: d.title })
  ] }), l = (d) => {
    L.current = d.clientX, J.current = E, j(!0);
  };
  we(() => {
    if (!G) return;
    const d = 200, Z = 440, de = (He) => {
      const et = He.clientX - L.current, bt = Math.min(Z, Math.max(d, J.current + et));
      ce(bt);
    }, pe = () => {
      j(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", de), window.addEventListener("mouseup", pe), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", de), window.removeEventListener("mouseup", pe);
    };
  }, [G, E]), we(() => {
    K || ce(240);
  }, [K]), we(() => {
    I == null || I(z);
  }, [z, I]), we(() => {
    oe([...c]);
  }, [c]), we(() => {
    if (!B) return;
    const d = window.requestAnimationFrame(() => {
      var Z;
      (Z = fe.current) == null || Z.focus();
    });
    return () => {
      window.cancelAnimationFrame(d);
    };
  }, [B]), we(() => () => {
    xe.current !== null && window.clearTimeout(xe.current), be.current !== null && window.clearTimeout(be.current);
  }, []);
  const A = () => {
    O(!0), xe.current !== null && window.clearTimeout(xe.current), xe.current = window.setTimeout(() => {
      O(!1);
    }, 600);
  }, U = () => {
    C(!0), be.current !== null && window.clearTimeout(be.current), be.current = window.setTimeout(() => {
      C(!1);
    }, 600);
  };
  we(() => {
    Ae || ve(!1);
  }, [Ae]);
  const Le = () => {
    ve(!0), u("/ai-usage");
  }, Pe = Se(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...N ? [{
      key: "ai-usage",
      label: "AI用量"
    }] : [],
    ...m ? [{
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
  ], [m, N]), Fe = (d) => {
    if (Q(!1), d.key === "skills") {
      u("/skills");
      return;
    }
    if (d.key === "ai-usage") {
      u("/ai-usage");
      return;
    }
    if (d.key === "members") {
      u("/members");
      return;
    }
    if (d.key === "system-settings") {
      u("/system-settings");
      return;
    }
    d.key === "logout" && $e();
  }, Ce = (d) => d.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Ur, { size: 14 }), danger: !0 }] : [], ze = (d, Z = _) => {
    const de = [];
    return Z.rename && de.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(Pn, { size: 14 }) }), Z.share && de.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(Bn, { size: 14 }) }), Z.pin && de.push({
      key: "pin",
      label: d.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(sr, { size: 14 })
    }), de;
  }, _e = (d, Z, de = {}) => {
    const pe = de.actions ?? _, He = de.onMenuOpenIdChange ?? k, et = !!(pe.rename || pe.share || pe.pin || pe.delete), bt = de.showTaskBadge !== !1 && Pr(d);
    return !et && !bt ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${bt ? "ml-6" : "ml-2"}`, children: [
      bt && !Z && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      et && /* @__PURE__ */ e(
        Zt,
        {
          open: Z,
          onOpenChange: (ct) => He(ct ? d.id : null),
          placement: "bottom-end",
          width: de.width ?? Math.max(140, Math.min(176, E - 56)),
          portal: de.portal,
          trigger: /* @__PURE__ */ e(An, { size: 14 }),
          onTriggerClick: (ct) => {
            ct.stopPropagation();
          },
          items: ze(d, pe),
          footerItems: Ce(pe),
          onItemClick: (ct, jt) => {
            if (jt.stopPropagation(), ct.key === "rename") {
              lt(d), He(null);
              return;
            }
            if (ct.key === "share") {
              P ? P(d.id) : u(`/chat/${d.id}?share=1`), He(null);
              return;
            }
            if (ct.key === "pin") {
              st(d.id), He(null);
              return;
            }
            if (ct.key === "delete") {
              X(d.id), He(null);
              return;
            }
            He(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${Z ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Ke = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(ar, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(er, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], rt = Se(() => {
    const d = t.match(/^\/chat\/([^/]+)$/);
    return d ? z.find((Z) => Z.id === d[1]) ?? null : null;
  }, [z, t]), ht = Se(
    () => z.filter((d) => d.isPinned),
    [z]
  ), ft = Se(
    () => z.filter((d) => !d.isPinned),
    [z]
  ), ot = Se(
    () => ee === "time" ? ht.slice(0, Ar) : ht,
    [ht, ee]
  ), Tt = Se(() => {
    if (ee !== "time") return [];
    const d = Math.max(Ar - ot.length, 0);
    return ft.slice(0, d);
  }, [ee, ft, ot.length]), tr = Se(
    () => ot.length + Tt.length,
    [ot.length, Tt.length]
  ), It = ee === "time" && z.length > tr, it = Se(() => new Map(a.map((d) => [d.id, d.name])), [a]), yt = te.trim().toLowerCase(), xt = Se(() => yt ? z.filter((d) => {
    const Z = d.projectId ? it.get(d.projectId) ?? "未分组" : "未分组";
    return `${d.title} ${Z} ${d.date}`.toLowerCase().includes(yt);
  }) : z, [z, yt, it]);
  we(() => {
    if (!rt) return;
    const d = rt.projectId ?? "unassigned";
    le((Z) => Z[d] !== !1 ? Z : { ...Z, [d]: !0 });
  }, [rt]);
  const zt = () => {
    M(""), Ee(!0);
  }, Rt = () => {
    Ee(!1), W(null), Ze(), C(!1), be.current !== null && (window.clearTimeout(be.current), be.current = null);
  }, Dt = (d) => {
    Ee(!1), W(null), u(`/chat/${d}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: K ? E : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${K ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: E, minWidth: E },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => u("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: i, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => H(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e($n, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => u("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(Ln, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Ke.map((d) => {
                  const Z = d.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => u(d.path),
                      className: `nav-item ${Z ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        d.icon,
                        /* @__PURE__ */ e("span", { children: d.label })
                      ]
                    },
                    d.path
                  );
                }) }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    onScroll: A,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ie ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      ot.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: ot.map((d) => {
                          const Z = t === `/chat/${d.id}`, de = q === d.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Te(d.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${B === d.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Z ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Y(d, ee !== "time"),
                                B !== d.id && _e(d, de)
                              ]
                            }
                          ) }, d.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      ee === "project" && a.map((d) => {
                        const Z = z.filter((pe) => pe.projectId === d.id && !pe.isPinned), de = f[d.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => Me(d.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(ar, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: de ? /* @__PURE__ */ e(Bt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Lt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: d.name })
                              ]
                            }
                          ),
                          de && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Z.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : Z.map((pe) => {
                            const He = t === `/chat/${pe.id}`, et = q === pe.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Te(pe.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${B === pe.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : He ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Y(pe),
                                  B !== pe.id && _e(pe, et)
                                ]
                              }
                            ) }, pe.id);
                          }) })
                        ] }, d.id);
                      }),
                      ee === "project" && (() => {
                        const d = z.filter((de) => !de.projectId && !de.isPinned);
                        if (d.length === 0) return null;
                        const Z = f.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => Me("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(ar, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: Z ? /* @__PURE__ */ e(Bt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Lt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          Z && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: d.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : d.map((de) => {
                            const pe = t === `/chat/${de.id}`, He = q === de.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Te(de.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${B === de.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : pe ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Y(de),
                                  B !== de.id && _e(de, He)
                                ]
                              }
                            ) }, de.id);
                          }) })
                        ] });
                      })(),
                      ee === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        Tt.map((d) => {
                          const Z = t === `/chat/${d.id}`, de = q === d.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Te(d.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${B === d.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Z ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Y(d),
                                B !== d.id && _e(d, de)
                              ]
                            }
                          ) }, d.id);
                        }),
                        It && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: zt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(Lt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                Ae && !ye && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(zn, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
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
                  Zt,
                  {
                    open: me,
                    onOpenChange: Q,
                    placement: "top-start",
                    width: E - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: o.avatarUrl ? /* @__PURE__ */ e("img", { src: o.avatarUrl, alt: `${o.name}头像`, className: "h-full w-full object-cover" }) : o.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: o.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(En, { size: 18 }) })
                    ] }),
                    items: Pe,
                    onItemClick: Fe,
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
              onMouseDown: l,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${K ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof p == "function" ? p({ isSidebarOpen: K, setIsSidebarOpen: H, chats: z, setChats: oe, setAiUsageWarningActive: ge }) : p }) }) }),
    /* @__PURE__ */ e(
      mr,
      {
        visible: Ie,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Rt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Nt,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: te,
                onChange: (d) => M(d.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          xt.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: U,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${$ ? "is-scrolling is-scrolling-thin" : ""}`,
              children: xt.map((d) => {
                const Z = d.projectId ? it.get(d.projectId) ?? "未分组" : "未分组", de = Pr(d), pe = R === d.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => Dt(d.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          Y(d, d.isPinned),
                          de && B !== d.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: Z }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: d.date })
                        ] })
                      ] }),
                      B !== d.id && _e(d, pe, {
                        actions: { rename: !0, pin: !0, delete: !0 },
                        portal: !0,
                        showTaskBadge: !1,
                        width: 160,
                        onMenuOpenIdChange: W
                      })
                    ]
                  },
                  d.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(pr, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function pl({
  projects: t,
  selectedProjectId: a,
  autoFocusInput: c = !1,
  disabled: i = !1,
  embedded: o = !1,
  isSidebarOpen: p = !0,
  skillOptions: h,
  fileOptions: v,
  quickPrompts: N,
  uploadAccept: m,
  validateUploadFile: _,
  onUploadValidationError: u,
  onSelectProject: w,
  onCreateProject: I,
  onOpenSidebar: S,
  onSelectQuickPrompt: T,
  onSend: P
}) {
  const [V, K] = g(!1), [H, E] = g(!1), [ce, G] = g(""), j = ue(null), L = ue(null), J = Se(
    () => t.find((q) => q.id === a) ?? null,
    [t, a]
  ), f = Se(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !J
    },
    ...t.map((q) => ({
      key: q.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: q.name }),
      active: (J == null ? void 0 : J.id) === q.id
    }))
  ], [t, J]), le = Se(() => I ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Kr, { size: 16 }) }] : [], [I]), me = () => {
    E(!1), G("");
  }, Q = (q) => {
    if (q.key === "create") {
      E(!0), G("");
      return;
    }
    const k = q.key === "none" ? null : String(q.key);
    w(k), K(!1);
  }, z = () => {
    const q = ce.trim();
    if (!q) return;
    const k = t.find(
      (R) => R.name.trim().toLowerCase() === q.toLowerCase()
    );
    k ? w(k.id) : I == null || I(q), me(), K(!1);
  };
  we(() => {
    if (!H) return;
    const q = (k) => {
      var W, ee;
      const R = k.target;
      (W = L.current) != null && W.contains(R) || (ee = j.current) != null && ee.contains(R) || (me(), K(!1));
    };
    return document.addEventListener("mousedown", q), () => document.removeEventListener("mousedown", q);
  }, [H]);
  const oe = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: j, className: "relative", children: H && /* @__PURE__ */ e(
        "div",
        {
          ref: L,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Yr,
                {
                  value: ce,
                  onChange: (q) => G(q.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(at, { type: "secondary", size: "small", onClick: me, children: "取消" }),
              /* @__PURE__ */ e(
                at,
                {
                  type: "primary",
                  size: "small",
                  onClick: z,
                  disabled: !ce.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        tn,
        {
          onSend: P,
          disabled: i,
          autoFocus: c,
          skillOptions: h,
          fileOptions: v,
          uploadAccept: m,
          validateUploadFile: _,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            Zt,
            {
              open: V,
              onOpenChange: (q) => {
                !q && H || (K(q), q ? E(!1) : me());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: J ? J.name : "工作项目" }),
                /* @__PURE__ */ e(Bt, { size: 14 })
              ] }),
              items: f,
              footerItems: le,
              onItemClick: Q,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(
      rn,
      {
        onSelect: T ?? P,
        prompts: N,
        disabled: i
      }
    )
  ] });
  return o ? oe : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Ga,
      {
        isSidebarOpen: p,
        onOpenSidebar: S ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: oe })
  ] });
}
const xs = "_shell_vbm8z_1", bs = "_header_vbm8z_5", gs = "_headerActions_vbm8z_9", ys = "_saveError_vbm8z_13", vs = "_viewport_vbm8z_17", ws = "_editorCanvas_vbm8z_21", Ns = "_titleInput_vbm8z_25", ks = "_milkdownHost_vbm8z_29", gt = {
  shell: xs,
  header: bs,
  headerActions: gs,
  saveError: ys,
  viewport: vs,
  editorCanvas: ws,
  titleInput: Ns,
  milkdownHost: ks
}, Ts = {
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
}, Xt = (t, a) => t.replace("<svg", `<svg class="${a}"`), vt = (t) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${t}</tspan>
    </text>
  </svg>
`, dr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="8" y="23" fill="currentColor" font-family="inherit" font-size="22" font-weight="500">T</text>
  </svg>
`, Cs = `
  <span class="chatui-selection-block-type-current">${dr}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Br = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, Ss = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, Ms = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z" />
  </svg>
`, $s = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Ls = [
  { key: "paragraph", label: "正文" },
  { key: "h1", label: "一级标题" },
  { key: "h2", label: "二级标题" },
  { key: "h3", label: "三级标题" },
  { key: "h4", label: "四级标题" },
  { key: "h5", label: "五级标题" },
  { key: "h6", label: "六级标题" },
  { key: "bullet-list", label: "无序列表" },
  { key: "ordered-list", label: "有序列表" },
  { key: "task-list", label: "任务列表" },
  { key: "quote", label: "引用" },
  { key: "code", label: "代码块" }
], $t = (t) => `chatui-document-menu-type-${t}`;
function hl({
  title: t,
  initialMarkdown: a = "",
  createdByName: c,
  updatedByName: i,
  updatedAt: o,
  index: p,
  attachments: h = [],
  attachmentAccept: v,
  attachmentUnavailableHint: N,
  saving: m = !1,
  saveError: _,
  layout: u = "page",
  showHeaderActions: w = !0,
  onTitleChange: I,
  onMarkdownChange: S,
  onDownloadAttachment: T,
  onUploadAttachments: P,
  onDeleteAttachment: V,
  onSave: K,
  onClose: H
}) {
  const E = ue(null), ce = ue(null), G = ue(a), j = ue(S), L = ue(null), [J, f] = g(!1), [le, me] = g(!1), [Q, z] = g(null), [oe, q] = g(""), k = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  we(() => {
    j.current = S;
  }, [S]), we(
    () => () => {
      L.current !== null && window.clearTimeout(L.current);
    },
    []
  );
  const R = () => {
    f(!0), L.current !== null && window.clearTimeout(L.current), L.current = window.setTimeout(
      () => f(!1),
      700
    );
  };
  we(() => {
    const ne = E.current;
    if (!ne) return;
    let ie = null;
    const O = /* @__PURE__ */ new Map(), B = new qt({
      root: ne,
      defaultValue: G.current,
      features: {
        [qt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [qt.Feature.Toolbar]: {
          buildToolbar: (n) => {
            n.addGroup(
              "block-type",
              "块类型"
            ).addItem("block-type-dropdown", {
              icon: Cs,
              active: () => !1,
              onRun: () => {
              }
            });
          }
        },
        [qt.Feature.BlockEdit]: {
          addOnCurrentBlock: !0,
          preserveCurrentBlockContent: !0,
          textGroup: {
            label: "基础",
            text: null,
            h1: { label: "一级标题" },
            h2: { label: "二级标题" },
            h3: { label: "三级标题" },
            h4: { label: "四级标题" },
            h5: { label: "五级标题" },
            h6: { label: "六级标题" },
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
            table: { label: "表格" },
            math: { label: "公式" }
          },
          buildMenu: (n) => {
            const s = new Map(
              n.build().flatMap((ke) => ke.items).map((ke) => [ke.key, ke])
            ), y = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), b = (ke) => {
              const ae = ke.get(Mt), se = M, qe = (se != null && se.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? se : se == null ? void 0 : se.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] h4, [data-content-dom="true"] h5, [data-content-dom="true"] h6, [data-content-dom="true"] pre'
              )) ?? (se instanceof HTMLElement ? se : null);
              if (!qe) return ae;
              try {
                const We = ae.posAtDOM(qe, 0), Ue = ae.state.doc.resolve(
                  Math.min(
                    Math.max(We, 0),
                    ae.state.doc.content.size
                  )
                );
                ae.dispatch(
                  ae.state.tr.setSelection(
                    Wt.near(Ue)
                  )
                );
              } catch {
              }
              return ae;
            }, F = (ke) => {
              const ae = b(ke), se = Ot.type(ke), Ge = (Ue) => {
                const { $from: Je } = ae.state.selection;
                for (let nt = Je.depth; nt > 0; nt -= 1)
                  if (Je.node(nt).type.name === Ue) return !0;
                return !1;
              };
              for (let Ue = 0; Ue < 10 && !(!Ge(se.name) || !Dn(se)(
                ae.state,
                ae.dispatch
              )); Ue += 1)
                ;
              for (let Ue = 0; Ue < 10 && !(!Ge("blockquote") || !Rn(ae.state, ae.dispatch)); Ue += 1)
                ;
              const qe = yr.type(ke), We = ae.state.selection.$from.parent;
              We.isTextblock && We.type !== qe && ke.get(lr).call(Fn.key, {
                nodeType: qe
              });
            };
            ie = (ke, ae, se) => {
              const Ge = b(ke), { from: qe } = Ge.state.selection;
              ke.get(lr).call(qn.key, {
                nodeType: On(ke, ae, se)
              }), ke.get(lr).call(Wn.key, {
                pos: qe
              });
            }, O.set(
              "paragraph",
              F
            );
            const D = (ke) => {
              const ae = b(ke), { selection: se } = ae.state, Ge = Ot.type(ke), { $from: qe } = se;
              let We = -1;
              for (let Je = qe.depth; Je > 0; Je -= 1)
                if (qe.node(Je).type.name === Ge.name) {
                  We = Je;
                  break;
                }
              if (We > 0) {
                const Je = We - 1, nt = Je > 0 && qe.node(Je).childCount === 1 ? Je : We;
                ae.dispatch(
                  ae.state.tr.delete(
                    qe.before(nt),
                    qe.after(nt)
                  )
                );
                return;
              }
              if (!se.empty) {
                ae.dispatch(
                  ae.state.tr.delete(se.from, se.to)
                );
                return;
              }
              const Ue = Math.min(1, qe.depth);
              Ue < 1 || ae.dispatch(
                ae.state.tr.delete(
                  qe.before(Ue),
                  qe.after(Ue)
                )
              );
            }, re = (ke, ae, se) => {
              const Ge = s.get(ae);
              if (!Ge) return;
              const { key: qe, ...We } = Ge, Ue = (se == null ? void 0 : se.icon) ?? We.icon, Je = [
                $t(ae),
                se == null ? void 0 : se.iconClass
              ].filter(Boolean).join(" "), nt = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(ae), Ct = y.has(ae) ? (ut) => {
                var fr;
                if (F(ut), !nt) {
                  if (ae === "quote") {
                    const mt = ut.get(Mt), { $from: St } = mt.state.selection, Ft = St.parent, nr = St.before(St.depth), xr = mt.state.schema.nodes.blockquote;
                    if (!xr) return;
                    const sn = xr.create(null, Ft), Ht = mt.state.tr.replaceWith(
                      nr,
                      nr + Ft.nodeSize,
                      sn
                    );
                    Ht.setSelection(
                      Wt.near(
                        Ht.doc.resolve(
                          Math.min(
                            nr + 2,
                            Ht.doc.content.size
                          )
                        )
                      )
                    ), mt.dispatch(Ht);
                    return;
                  }
                  (fr = We.onRun) == null || fr.call(We, ut);
                  return;
                }
                const Et = ut.get(Mt), nn = ae === "ordered-list" ? vr.type(ut) : wr.type(ut);
                if (!jn(nn)(
                  Et.state,
                  Et.dispatch
                ) || ae !== "task-list") return;
                const an = Ot.type(ut), { $from: rr } = Et.state.selection;
                for (let mt = rr.depth; mt > 0; mt -= 1) {
                  const St = rr.node(mt);
                  if (St.type !== an) continue;
                  const Ft = rr.before(mt);
                  Et.dispatch(
                    Et.state.tr.setNodeMarkup(Ft, void 0, {
                      ...St.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : (se == null ? void 0 : se.onRun) ?? We.onRun;
              y.has(ae) && Ct && O.set(
                ae,
                Ct
              ), ke.addItem(ae, {
                ...We,
                label: (se == null ? void 0 : se.label) ?? We.label,
                icon: Xt(Ue, Je),
                onRun: Ct
              });
            };
            n.clear();
            const he = n.addGroup("basic", "基础");
            he.addItem("paragraph", {
              label: "正文",
              icon: Xt(
                dr,
                $t("paragraph")
              ),
              onRun: F
            }), [
              {
                key: "h1",
                icon: vt(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: vt(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: vt(3),
                label: `三级标题 (Ctrl + Alt + 3)
Markdown: ### 空格`
              },
              {
                key: "h4",
                icon: vt(4),
                label: `四级标题 (Ctrl + Alt + 4)
Markdown: #### 空格`
              },
              {
                key: "h5",
                icon: vt(5),
                label: `五级标题 (Ctrl + Alt + 5)
Markdown: ##### 空格`
              },
              {
                key: "h6",
                icon: vt(6),
                label: `六级标题 (Ctrl + Alt + 6)
Markdown: ###### 空格`
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
                icon: Br,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: Ss,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: ke, icon: ae, label: se }) => {
              re(he, ke, { icon: ae, label: se });
            });
            const Be = n.addGroup("common", "常用");
            re(Be, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), re(Be, "table", {
              icon: Ms,
              iconClass: "chatui-document-menu-icon-table",
              onRun: () => {
              }
            }), re(Be, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), n.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Xt(
                $s,
                "chatui-document-menu-action-delete"
              ),
              onRun: D
            });
          }
        }
      }
    });
    B.editor.config((n) => {
      const s = n.get(Nr.key);
      n.set(Nr.key, {
        ...s,
        shouldAppend: (y, b) => (y == null ? void 0 : y.type.name) === "table" ? !1 : s.shouldAppend(y, b)
      });
    }), B.on((n) => {
      n.markdownUpdated((s, y, b) => {
        y !== b && j.current(y);
      });
    });
    const x = ne.ownerDocument;
    let Oe = "", De = null, Ie = null, Ee = !0, te = !1, M = null, $ = null, C = null, Ne = null, ge = null, ye = null, ve = null, Ae = null, fe = null, xe = null;
    const be = 8, $e = () => {
      var n;
      return ((n = x.querySelector(
        ".milkdown-slash-menu svg.chatui-document-menu-icon-table"
      )) == null ? void 0 : n.closest("li")) ?? null;
    }, Me = (n, s) => {
      if (!fe) return;
      fe.querySelectorAll("[data-table-row]").forEach((b) => {
        const F = Number(b.dataset.tableRow), D = Number(b.dataset.tableColumn);
        b.dataset.active = F <= n && D <= s ? "true" : "false", b.tabIndex = F === n && D === s ? 0 : -1;
      });
      const y = fe.querySelector(
        ".chatui-table-size-menu-status"
      );
      y && (y.textContent = `${n} × ${s}`);
    }, X = () => {
      var n;
      xe !== null && (window.clearTimeout(xe), xe = null), fe && (fe.dataset.show = "false"), (n = $e()) == null || n.setAttribute("aria-expanded", "false");
    }, st = () => {
      xe !== null && window.clearTimeout(xe), xe = window.setTimeout(X, 140);
    }, lt = () => {
      if (fe) return fe;
      const n = x.createElement("div");
      n.className = "chatui-table-size-menu", n.dataset.show = "false", n.setAttribute("role", "menu"), n.setAttribute("aria-label", "选择表格尺寸");
      const s = x.createElement("div");
      s.className = "chatui-table-size-menu-heading", s.innerHTML = '<span>插入表格</span><span class="chatui-table-size-menu-status">1 × 1</span>', n.append(s);
      const y = x.createElement("div");
      y.className = "chatui-table-size-menu-grid", y.setAttribute("role", "grid"), y.setAttribute("aria-rowcount", String(be)), y.setAttribute("aria-colcount", String(be));
      for (let b = 1; b <= be; b += 1)
        for (let F = 1; F <= be; F += 1) {
          const D = x.createElement("button");
          D.type = "button", D.dataset.tableRow = String(b), D.dataset.tableColumn = String(F), D.setAttribute("role", "gridcell"), D.setAttribute("aria-label", `插入 ${b} × ${F} 表格`), D.addEventListener("pointerenter", () => {
            Me(b, F);
          }), D.addEventListener("focus", () => {
            Me(b, F);
          }), D.addEventListener("keydown", (re) => {
            var ae, se;
            if (re.key === "Escape") {
              re.preventDefault(), X(), (ae = $e()) == null || ae.focus();
              return;
            }
            const Be = {
              ArrowUp: [-1, 0],
              ArrowDown: [1, 0],
              ArrowLeft: [0, -1],
              ArrowRight: [0, 1]
            }[re.key];
            if (!Be) return;
            re.preventDefault();
            const Xe = Math.min(
              be,
              Math.max(1, b + Be[0])
            ), ke = Math.min(
              be,
              Math.max(1, F + Be[1])
            );
            (se = n.querySelector(
              `[data-table-row="${Xe}"][data-table-column="${ke}"]`
            )) == null || se.focus();
          }), D.addEventListener("pointerdown", (re) => {
            re.preventDefault(), re.stopPropagation(), B.editor.action((he) => {
              ie == null || ie(he, b, F);
            }), X(), zt();
          }), y.append(D);
        }
      return n.append(y), n.addEventListener("pointerenter", () => {
        xe !== null && (window.clearTimeout(xe), xe = null);
      }), n.addEventListener("pointerleave", st), x.body.append(n), fe = n, Me(1, 1), n;
    }, Ze = () => {
      var ae, se;
      const n = $e();
      if (!n) return;
      xe !== null && (window.clearTimeout(xe), xe = null), n.dataset.chatuiSubmenu = "true", n.setAttribute("aria-haspopup", "menu"), n.setAttribute("aria-expanded", "true");
      const s = lt();
      Me(1, 1), s.dataset.show = "true", s.style.visibility = "hidden";
      const y = n.getBoundingClientRect(), b = s.getBoundingClientRect(), F = ((ae = x.defaultView) == null ? void 0 : ae.innerWidth) ?? x.documentElement.clientWidth, D = ((se = x.defaultView) == null ? void 0 : se.innerHeight) ?? x.documentElement.clientHeight, re = 8, he = 8, Be = y.right + re + b.width + he <= F, Xe = Be ? y.right + re : Math.max(he, y.left - b.width - re), ke = Math.min(
        Math.max(y.top, he),
        Math.max(he, D - b.height - he)
      );
      s.style.left = `${Xe}px`, s.style.top = `${ke}px`, s.style.visibility = "visible", s.dataset.placement = Be ? "right" : "left";
    }, tt = (n) => {
      const s = n == null ? void 0 : n.closest(
        "h1, h2, h3, h4, h5, h6, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !s || !s.closest(".ProseMirror") ? null : s.matches("h1") ? "h1" : s.matches("h2") ? "h2" : s.matches("h3") ? "h3" : s.matches("h4") ? "h4" : s.matches("h5") ? "h5" : s.matches("h6") ? "h6" : s.matches("blockquote") ? "quote" : s.matches("pre, .milkdown-code-block") || s.querySelector("pre, .milkdown-code-block") ? "code" : s.querySelector('input[type="checkbox"]') ? "task-list" : s.querySelector(".label.ordered") ? "ordered-list" : s.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Qe = () => ne.querySelector(".ProseMirror"), Te = (n) => {
      const s = Qe();
      if (!n || !(s != null && s.contains(n))) return null;
      const y = n.closest(".milkdown-list-item-block");
      if (y && s.contains(y)) return y;
      let b = n;
      for (; b != null && b.parentElement && b.parentElement !== s; )
        b = b.parentElement;
      return !b || b.parentElement !== s || b.classList.contains("prosemirror-virtual-cursor") ? null : b;
    }, Y = () => {
      const n = Qe();
      return n ? Array.from(n.children).flatMap((s) => {
        if (s.classList.contains("prosemirror-virtual-cursor")) return [];
        const y = Array.from(
          s.querySelectorAll(".milkdown-list-item-block")
        );
        return y.length ? y : [s];
      }) : [];
    }, l = (n) => {
      var b;
      const s = Y(), y = s.map((F) => ({ block: F, rect: F.getBoundingClientRect() })).filter(({ rect: F }) => n >= F.top && n <= F.bottom).sort((F, D) => F.rect.height - D.rect.height);
      return y[0] ? y[0].block : ((b = s.map((F) => {
        const D = F.getBoundingClientRect(), re = Math.min(
          Math.abs(n - D.top),
          Math.abs(n - D.bottom)
        );
        return { block: F, distance: re };
      }).sort((F, D) => F.distance - D.distance)[0]) == null ? void 0 : b.block) ?? null;
    }, A = (n, s = Ee) => {
      var Xe, ke, ae, se;
      const y = M, b = y ? tt(y) : n, F = y ? y.matches("p") : s, D = x.querySelector(
        ".milkdown-slash-menu"
      );
      (ke = (Xe = D == null ? void 0 : D.querySelector(`svg.${$t("paragraph")}`)) == null ? void 0 : Xe.closest("li")) == null || ke.toggleAttribute(
        "hidden",
        b === null && F
      ), D == null || D.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (Ge) => Ge.removeAttribute("data-chatui-selected")
      ), b && ((se = (ae = D == null ? void 0 : D.querySelector(`svg.${$t(b)}`)) == null ? void 0 : ae.closest("li")) == null || se.setAttribute("data-chatui-selected", "true"));
      const re = x.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!re) return;
      Oe || (Oe = re.innerHTML);
      const he = b ? D == null ? void 0 : D.querySelector(
        `svg.${$t(b)}`
      ) : null, Be = b ?? "default";
      re.dataset.chatuiBlockType !== Be && (re.innerHTML = (he == null ? void 0 : he.outerHTML) ?? Oe, re.dataset.chatuiBlockType = Be);
    }, U = (n) => {
      n !== Ie && (Ie = n, De = tt(n), Ee = (n == null ? void 0 : n.matches("p")) ?? !1), A(De, Ee);
    }, Le = () => {
      var y;
      const n = (y = x.getSelection()) == null ? void 0 : y.anchorNode, s = n instanceof Element ? n : n == null ? void 0 : n.parentElement;
      U(Te(s ?? null));
    }, Pe = (n) => {
      const { $from: s } = n.get(Mt).state.selection, y = Ot.type(n), b = vr.type(n), F = wr.type(n);
      for (let re = s.depth; re > 0; re -= 1) {
        const he = s.node(re);
        if (he.type === y && typeof he.attrs.checked == "boolean")
          return "task-list";
      }
      for (let re = s.depth; re > 0; re -= 1) {
        const he = s.node(re);
        if (he.type === b) return "ordered-list";
        if (he.type === F) return "bullet-list";
        if (he.type.name === "blockquote") return "quote";
      }
      const D = s.parent;
      if (D.type === Hn.type(n)) {
        const re = Number(D.attrs.level);
        if (re >= 1 && re <= 6)
          return `h${re}`;
      }
      return D.type.name === "code_block" ? "code" : "paragraph";
    }, Fe = (n) => {
      var s;
      return n === "paragraph" ? Xt(
        dr,
        "chatui-selection-block-type-paragraph"
      ) : /^h[1-6]$/.test(n) ? vt(Number(n.slice(1))) : n === "code" ? Br : ((s = x.querySelector(
        `.milkdown-slash-menu svg.${$t(n)}`
      )) == null ? void 0 : s.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${n === "quote" ? "“" : "•"}</text></svg>`;
    }, Ce = () => {
      var n;
      return ((n = x.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : n.closest(".toolbar-item")) ?? null;
    }, ze = () => {
      const n = Ce();
      if (!n) return;
      n.classList.add("chatui-selection-block-type-trigger"), n.setAttribute("aria-haspopup", "menu"), n.setAttribute("aria-label", "切换当前块类型");
      const s = n.closest(".milkdown-toolbar"), y = n.previousElementSibling instanceof HTMLElement && n.previousElementSibling.classList.contains("divider") ? n.previousElementSibling : null;
      s && s.firstElementChild !== n && (s.prepend(n), y && n.after(y));
      let b = "paragraph";
      B.editor.action((D) => {
        b = Pe(D);
      }), n.dataset.chatuiBlockType = b;
      const F = n.querySelector(
        ".chatui-selection-block-type-current"
      );
      F && (F.innerHTML = Fe(b)), ye == null || ye.querySelectorAll("[data-block-type]").forEach((D) => {
        D.dataset.active = D.dataset.blockType === b ? "true" : "false";
      });
    }, _e = () => {
      var n;
      ve !== null && (window.clearTimeout(ve), ve = null), ye && (ye.dataset.show = "false"), (n = Ce()) == null || n.setAttribute("aria-expanded", "false");
    }, Ke = () => {
      ve !== null && window.clearTimeout(ve), ve = window.setTimeout(
        _e,
        120
      );
    }, rt = () => {
      if (ye) return ye;
      const n = x.createElement("div");
      return n.className = "chatui-selection-block-type-menu", n.dataset.show = "false", n.setAttribute("role", "menu"), Ls.forEach(({ key: s, label: y }) => {
        const b = x.createElement("button");
        b.type = "button", b.dataset.blockType = s, b.setAttribute("role", "menuitem"), b.innerHTML = `<span class="chatui-selection-block-type-option-icon">${Fe(s)}</span><span>${y}</span>`, b.addEventListener("pointerdown", (F) => {
          F.preventDefault(), F.stopPropagation(), B.editor.action((D) => {
            var re;
            (re = O.get(s)) == null || re(D);
          }), _e(), window.requestAnimationFrame(ze);
        }), n.append(b);
      }), n.addEventListener("pointerenter", () => {
        ve !== null && (window.clearTimeout(ve), ve = null);
      }), n.addEventListener("pointerleave", Ke), x.body.append(n), ye = n, n;
    }, ht = () => {
      const n = Ce();
      if (!n) return;
      ve !== null && (window.clearTimeout(ve), ve = null);
      const s = rt();
      ze(), s.dataset.show = "true", s.style.visibility = "hidden";
      const y = n.getBoundingClientRect(), b = s.getBoundingClientRect(), F = 6, D = 8, re = y.top >= b.height + F + D, he = Math.min(
        Math.max(y.left, D),
        x.documentElement.clientWidth - b.width - D
      ), Be = re ? y.top - b.height - F : y.bottom + F;
      s.style.left = `${he}px`, s.style.top = `${Be}px`, s.style.visibility = "visible", s.dataset.placement = re ? "top" : "bottom", n.setAttribute("aria-expanded", "true");
    }, ft = (n) => {
      const s = n.target instanceof Element ? n.target : null;
      s != null && s.closest(".chatui-selection-block-type-trigger") && ht();
    }, ot = (n) => {
      const s = n.target instanceof Element ? n.target : null;
      if (!(s != null && s.closest(".chatui-selection-block-type-trigger"))) return;
      const y = n.relatedTarget instanceof Element ? n.relatedTarget : null;
      y != null && y.closest(".chatui-selection-block-type-menu") || Ke();
    }, Tt = () => {
      window.requestAnimationFrame(ze);
    }, tr = () => {
      const n = $, s = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (!n || !s || s.dataset.show !== "true") return;
      const y = s.getBoundingClientRect();
      if (!y.width || !y.height) return;
      const b = n.getBoundingClientRect(), F = x.defaultView, D = (F == null ? void 0 : F.innerWidth) ?? x.documentElement.clientWidth, re = (F == null ? void 0 : F.innerHeight) ?? x.documentElement.clientHeight, he = 12, Be = 8, Xe = Math.max(
        he,
        D - y.width - he
      ), ke = Math.max(
        he,
        re - y.height - he
      ), ae = (nt) => Math.min(Math.max(nt, he), Xe), se = (nt) => Math.min(Math.max(nt, he), ke);
      let Ge = "left", qe = b.left - y.width - Be, We = se(b.top);
      if (qe < he) {
        const nt = b.top - Be - he, Ct = re - b.bottom - Be - he, ut = Ct >= y.height || Ct >= nt;
        Ge = ut ? "bottom" : "top", qe = ae(b.left), We = se(ut ? b.bottom + Be : b.top - y.height - Be);
      }
      const Ue = `${qe}px`, Je = `${We}px`;
      s.style.getPropertyValue("--chatui-block-menu-left") !== Ue && s.style.setProperty("--chatui-block-menu-left", Ue), s.style.getPropertyValue("--chatui-block-menu-top") !== Je && s.style.setProperty("--chatui-block-menu-top", Je), s.dataset.chatuiPlacement = Ge;
    }, It = () => {
      const n = x.querySelector(
        ".milkdown-slash-menu"
      );
      n && (n.style.removeProperty("--chatui-block-menu-left"), n.style.removeProperty("--chatui-block-menu-top"), delete n.dataset.chatuiPlacement);
    }, it = (n) => {
      n !== ge && (ge == null || ge.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), ge = n, ge == null || ge.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, yt = () => {
      Ne !== null && window.cancelAnimationFrame(Ne), Ne = window.requestAnimationFrame(() => {
        Ne = null, tr();
      });
    }, xt = (n) => {
      x.querySelectorAll(".milkdown-block-handle").forEach((s) => {
        n && s.contains(n) ? s.dataset.chatuiMenuOpen = "true" : delete s.dataset.chatuiMenuOpen;
      });
    }, zt = () => {
      X(), $ = null, te = !1, M = null, it(null), B.editor.action((n) => {
        n.get("menuAPICtx").hide();
      }), It(), xt(null);
    }, Rt = (n) => {
      const s = n.target instanceof Element ? n.target : null;
      if (s != null && s.closest(".chatui-table-size-menu")) {
        te = !0;
        return;
      }
      const y = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (y) {
        const D = y.getBoundingClientRect(), re = D.width > 0 && D.height > 0, he = n.clientX >= D.left && n.clientX <= D.right && n.clientY >= D.top && n.clientY <= D.bottom;
        if (re) {
          if (he) {
            it(
              (s == null ? void 0 : s.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), te = !0;
            return;
          }
          if (it(null), s != null && s.closest(".milkdown-block-handle")) return;
          const Be = Qe(), Xe = s && (Be != null && Be.contains(s)) ? Te(s) ?? l(n.clientY) : null;
          if (Xe && M && Xe !== M) {
            zt();
            return;
          }
          if (Xe === M) return;
          te && zt();
          return;
        }
        te = !1, it(null);
      }
      if (s != null && s.closest(".milkdown-block-handle")) {
        A(De);
        return;
      }
      const b = Qe();
      if (!s || !(b != null && b.contains(s))) return;
      const F = Te(s) ?? l(n.clientY);
      U(F);
    }, Dt = (n) => {
      var he;
      const s = x.querySelector(
        ".milkdown-slash-menu"
      );
      if ($ === n && (s == null ? void 0 : s.dataset.show) === "true") {
        xt(n), yt();
        return;
      }
      const y = n.getBoundingClientRect(), b = l(
        y.top + y.height / 2
      );
      b && U(b);
      const F = De, D = Ee;
      $ = n, M = b ?? Ie, xt(n);
      const re = ((he = x.defaultView) == null ? void 0 : he.PointerEvent) ?? PointerEvent;
      n.dispatchEvent(
        new re("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), n.dispatchEvent(
        new re("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        A(F, D), yt();
      }, 0);
    }, d = (n) => {
      const s = n.target instanceof Element ? n.target : null, y = s == null ? void 0 : s.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (y) {
        Dt(y);
        return;
      }
      const b = (s == null ? void 0 : s.closest(
        ".milkdown-slash-menu .menu-groups li"
      )) ?? null;
      it(b), b === $e() ? Ze() : s != null && s.closest(".chatui-table-size-menu") || st();
    }, Z = (n) => {
      const s = n.target instanceof Element ? n.target : null, y = s == null ? void 0 : s.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!y) return;
      const b = n.relatedTarget instanceof Element ? n.relatedTarget : null;
      if (b && y.contains(b) || y === $e() && (b != null && b.closest(".chatui-table-size-menu")))
        return;
      y === $e() && st();
      const F = b == null ? void 0 : b.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      it(F ?? null);
    }, de = (n) => {
      const s = n.target instanceof Element ? n.target : null, y = s == null ? void 0 : s.closest(
        ".milkdown-slash-menu .menu-groups li"
      ), b = $e();
      !y || !b || y !== b || (n.preventDefault(), n.stopImmediatePropagation(), Ze());
    }, pe = (n) => {
      if (n.button !== 0) return;
      const s = n.target instanceof Element ? n.target : null, y = Qe();
      !s || !(y != null && y.contains(s)) || s.closest(
        'button, input, select, textarea, a, [contenteditable="false"]'
      ) || B.editor.action((b) => {
        const F = b.get(Mt), D = F.posAtCoords({
          left: n.clientX,
          top: n.clientY
        });
        if (!D) return;
        const re = F.state.doc.resolve(
          Math.min(
            Math.max(D.pos, 0),
            F.state.doc.content.size
          )
        );
        F.dispatch(
          F.state.tr.setSelection(
            Wt.near(re)
          )
        ), F.focus();
      });
    }, He = (n) => {
      const s = n.target instanceof Element ? n.target : null, y = s == null ? void 0 : s.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      y && Dt(y);
    }, et = (n) => {
      if (!n.isTrusted) return;
      const s = n.target instanceof Element ? n.target : null, y = s == null ? void 0 : s.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), b = x.querySelector(
        ".milkdown-slash-menu"
      );
      y && $ === y && (b == null ? void 0 : b.dataset.show) === "true" && (n.preventDefault(), n.stopImmediatePropagation());
    }, bt = (n) => {
      n.key === "/" && window.setTimeout(Le, 0);
    }, ct = (n) => {
      if (n.key !== "Backspace" || n.defaultPrevented || n.isComposing)
        return;
      const s = n.target instanceof Element ? n.target : null, y = Qe();
      if (!s || !(y != null && y.contains(s))) return;
      let b = !1;
      B.editor.action((F) => {
        const D = F.get(Mt), { selection: re } = D.state, { $from: he } = re, Be = yr.type(F);
        if (!re.empty || he.depth !== 1 || he.parent.type !== Be || he.parent.content.size !== 0 || he.parentOffset !== 0)
          return;
        const Xe = he.before(1), ke = he.after(1), ae = D.state.doc.resolve(Xe).nodeBefore;
        if ((ae == null ? void 0 : ae.type.name) !== "table") return;
        const se = D.state.tr.delete(
          Xe,
          ke
        ), Ge = Math.min(
          Xe,
          se.doc.content.size
        );
        se.setSelection(
          Wt.near(
            se.doc.resolve(Ge),
            -1
          )
        ), D.dispatch(se), D.focus(), b = !0;
      }), b && (n.preventDefault(), n.stopImmediatePropagation());
    };
    x.addEventListener("pointermove", Rt), x.addEventListener("pointerover", d), x.addEventListener("pointerout", Z), x.addEventListener(
      "pointerover",
      ft
    ), x.addEventListener(
      "pointerout",
      ot
    ), x.addEventListener(
      "selectionchange",
      Tt
    ), x.addEventListener(
      "keydown",
      ct,
      !0
    ), x.addEventListener(
      "pointerdown",
      pe,
      !0
    ), x.addEventListener(
      "pointerdown",
      et,
      !0
    ), x.addEventListener(
      "pointerdown",
      de,
      !0
    ), x.addEventListener(
      "pointerup",
      et,
      !0
    ), x.addEventListener("click", He), ne.addEventListener("keyup", bt);
    const jt = B.create();
    return jt.then(() => {
      var y;
      (y = ne.querySelector(".ProseMirror")) == null || y.focus();
      const n = x.querySelector(
        ".milkdown-slash-menu"
      );
      n && (C = new MutationObserver(() => {
        if (n.dataset.show === "true" && $) {
          xt($), yt();
          return;
        }
        n.dataset.show !== "true" && (X(), $ = null, M = null, it(null), It(), xt(null));
      }), C.observe(n, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const s = x.querySelector(
        ".milkdown-toolbar"
      );
      s && (Ae = new MutationObserver(() => {
        s.dataset.show === "true" ? ze() : _e();
      }), Ae.observe(s, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), Le(), ze();
    }), () => {
      x.removeEventListener("pointermove", Rt), x.removeEventListener(
        "pointerover",
        d
      ), x.removeEventListener("pointerout", Z), x.removeEventListener(
        "pointerover",
        ft
      ), x.removeEventListener(
        "pointerout",
        ot
      ), x.removeEventListener(
        "selectionchange",
        Tt
      ), x.removeEventListener(
        "keydown",
        ct,
        !0
      ), x.removeEventListener(
        "pointerdown",
        pe,
        !0
      ), x.removeEventListener(
        "pointerdown",
        et,
        !0
      ), x.removeEventListener(
        "pointerdown",
        de,
        !0
      ), x.removeEventListener(
        "pointerup",
        et,
        !0
      ), x.removeEventListener("click", He), ne.removeEventListener("keyup", bt), _e(), ye == null || ye.remove(), ye = null, X(), fe == null || fe.remove(), fe = null, jt.then(() => {
        C == null || C.disconnect(), Ae == null || Ae.disconnect(), Ne !== null && window.cancelAnimationFrame(Ne), B.destroy();
      });
    };
  }, []);
  const W = async (ne) => {
    const ie = Array.from(ne.target.files ?? []);
    if (ne.target.value = "", !(!ie.length || !P)) {
      me(!0), q("");
      try {
        await P(ie);
      } catch (O) {
        q(
          O instanceof Error ? O.message : "附件上传失败"
        );
      } finally {
        me(!1);
      }
    }
  }, ee = async (ne) => {
    if (V) {
      z(ne), q("");
      try {
        await V(ne);
      } catch (ie) {
        q(
          ie instanceof Error ? ie.message : "附件删除失败"
        );
      } finally {
        z(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: gt.shell, "aria-label": "项目文档编辑器", children: [
    w && /* @__PURE__ */ e("header", { className: gt.header, children: /* @__PURE__ */ r("div", { className: gt.headerActions, children: [
      /* @__PURE__ */ e(
        at,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: m,
          onClick: H,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        at,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: m,
          onClick: K,
          children: m ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${gt.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          _ && /* @__PURE__ */ e("div", { className: gt.saveError, children: _ }),
          /* @__PURE__ */ r("div", { className: gt.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${k}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (ne) => I(ne.target.value),
                  placeholder: "请输入标题",
                  className: gt.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                en,
                {
                  createdByName: c,
                  updatedByName: i,
                  updatedAt: o,
                  index: p
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r(
              "section",
              {
                onScroll: R,
                className: `document-preview-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${J ? "is-scrolling" : ""}`,
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      ref: E,
                      className: `${gt.milkdownHost} ${hr.editor} ${k} chatui-project-document-editor`,
                      style: Ts
                    }
                  ),
                  P && /* @__PURE__ */ e(
                    "input",
                    {
                      ref: ce,
                      type: "file",
                      multiple: !0,
                      accept: v,
                      className: "hidden",
                      onChange: (ne) => {
                        W(ne);
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    Jr,
                    {
                      attachments: h,
                      className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                      uploading: le,
                      deletingAttachmentId: Q,
                      unavailableHint: N,
                      error: oe,
                      onDownloadAttachment: T,
                      onRequestUpload: P ? () => {
                        var ne;
                        return (ne = ce.current) == null ? void 0 : ne.click();
                      } : void 0,
                      onDeleteAttachment: V ? (ne) => {
                        ee(ne);
                      } : void 0
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const zs = { low: "低风险", medium: "中风险", high: "高风险" }, Es = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function fl({
  isSidebarOpen: t,
  skills: a,
  loading: c = !1,
  error: i,
  pendingSkillIds: o = [],
  onOpenSidebar: p,
  onInstall: h,
  onUninstall: v,
  onRetry: N
}) {
  const [m, _] = g("installed"), [u, w] = g(""), [I, S] = g(!1), [T, P] = g([]), [V, K] = g(null), H = Se(() => new Set(o), [o]), E = Se(() => {
    const f = u.trim().toLowerCase();
    return a.filter((le) => m === "installed" !== le.installed ? !1 : f ? [le.name, le.source, le.description, ...le.tags].join(" ").toLowerCase().includes(f) : !0);
  }, [m, u, a]), ce = (f) => {
    _(f), S(!1), P([]);
  }, G = () => {
    S((f) => !f), P([]);
  }, j = (f) => P((le) => le.includes(f) ? le.filter((me) => me !== f) : [...le, f]), L = (f) => f.installed ? v([f.id]) : h([f.id]), J = () => {
    T.length && (m === "installed" ? v(T) : h(T), P([]), S(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: p, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(Vr, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${I ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ r("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Nt, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: u, onChange: (f) => w(f.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => ce("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => ce("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: I, onChange: (f) => {
                S(f.target.checked), P([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        i && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: i }),
          N && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: N, children: "重新加载" })
        ] }),
        !i && c && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (f, le) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, le)) }),
        !i && !c && E.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": o.length > 0, children: E.map((f) => {
          const le = T.includes(f.id), me = H.has(f.id), Q = le ? "border-skillSelectedBorder bg-skillSelectedSurface" : V === f.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${Q}`, onMouseEnter: () => K(f.id), onMouseLeave: () => K((z) => z === f.id ? null : z), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: f.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: f.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Es[f.riskLevel]}`, children: zs[f.riskLevel] }),
                I && /* @__PURE__ */ e("button", { type: "button", onClick: () => j(f.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": le ? `取消选择 ${f.name}` : `选择 ${f.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${le ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: f.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: f.tags.map((z) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: z }, `${f.id}-${z}`)) }),
              !I && /* @__PURE__ */ e("button", { type: "button", disabled: me, onClick: () => L(f), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${V === f.id || me ? "inline-flex" : "hidden"} ${f.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: me ? "处理中..." : f.installed ? "卸载" : "安装" })
            ] })
          ] }, f.id);
        }) }) : !i && !c ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    I && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        T.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: G, disabled: o.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: !T.length || o.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: o.length > 0 ? "处理中..." : m === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  ml as A,
  Ta as B,
  ds as C,
  el as D,
  us as E,
  ul as F,
  Pa as G,
  Jr as H,
  tn as I,
  hl as J,
  en as K,
  cl as L,
  Qr as M,
  ol as N,
  ll as O,
  ts as P,
  rn as Q,
  dl as R,
  fl as S,
  cr as T,
  cs as U,
  is as V,
  Zt as a,
  at as b,
  Zs as c,
  La as d,
  mr as e,
  Yr as f,
  pr as g,
  za as h,
  Ma as i,
  Ys as j,
  ha as k,
  as as l,
  ms as m,
  il as n,
  ss as o,
  Qs as p,
  Xa as q,
  Aa as r,
  pl as s,
  al as t,
  sl as u,
  nl as v,
  rl as w,
  Js as x,
  Ga as y,
  tl as z
};
