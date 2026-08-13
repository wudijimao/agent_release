import { jsxs as r, Fragment as Ge, jsx as e } from "react/jsx-runtime";
import Fe, { useMemo as be, useState as y, useRef as ue, useCallback as Le, useLayoutEffect as Ht, useEffect as we, forwardRef as dr, useId as Ir } from "react";
import Ae from "classnames";
import { Check as ft, Copy as Pt, RefreshCcw as Rr, ThumbsUp as Dr, ThumbsDown as jr, ArrowUpRight as Fr, Info as Hr, Ban as qr, TriangleAlert as Ot, CircleCheckBig as Lt, ShieldCheck as ur, CircleHelp as mr, FileText as Bt, LoaderCircle as pr, Puzzle as hr, AtSign as fr, AlertCircle as Wr, Paperclip as xr, ArrowRight as br, ChevronDown as zt, ChevronRight as $t, CircleX as gr, Sparkles as yr, Loader2 as ot, Clock3 as _t, Search as ct, BookOpen as Gt, ListChecks as Or, Globe as Ur, Minus as Vr, Menu as vr, Upload as Kr, Trash2 as wr, CheckCircle2 as gt, SearchX as Xr, FlaskConical as Gr, X as bt, Plus as Nr, Square as Yr, Send as Qr, UserPlus as Zr, Building2 as Jr, Folder as Dt, PanelLeftClose as en, SquarePen as tn, AlertTriangle as rn, Settings as nn, Pin as jt, MoreHorizontal as an, Pencil as sn, Share2 as ln } from "lucide-react";
import kr from "react-markdown";
import Tr from "remark-gfm";
import on from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as cn } from "react-dom";
import { Crepe as wt } from "@milkdown/crepe";
import { commandsCtx as dn, editorViewCtx as Nt } from "@milkdown/kit/core";
import { lift as un } from "@milkdown/kit/prose/commands";
import { liftListItem as mn, wrapInList as pn } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Yt } from "@milkdown/kit/prose/state";
import { listItemSchema as kt, paragraphSchema as hn, setBlockTypeCommand as fn, orderedListSchema as Qt, bulletListSchema as Zt, headingSchema as xn } from "@milkdown/kit/preset/commonmark";
const bn = "_button_3tg6r_1", gn = "_primary_3tg6r_5", yn = "_disabled_3tg6r_9", vn = "_secondary_3tg6r_17", wn = "_ghost_3tg6r_25", Nn = "_danger_3tg6r_33", kn = "_small_3tg6r_41", Tn = "_medium_3tg6r_45", Cn = "_large_3tg6r_49", Sn = "_roundedSquare_3tg6r_53", Mn = "_roundedSmall_3tg6r_57", $n = "_roundedMedium_3tg6r_61", Ln = "_roundedLarge_3tg6r_62", zn = "_roundedFull_3tg6r_66", An = "_loadingSpinner_3tg6r_67", En = "_loading_3tg6r_67", Pn = "_fullWidth_3tg6r_90", Bn = "_icon_3tg6r_94", Re = {
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
  loadingSpinner: An,
  loading: En,
  fullWidth: Pn,
  icon: Bn
}, _n = {
  primary: Re.primary,
  secondary: Re.secondary,
  ghost: Re.ghost,
  danger: Re.danger
}, In = {
  small: Re.small,
  medium: Re.medium,
  large: Re.large
}, Rn = {
  square: Re.roundedSquare,
  small: Re.roundedSmall,
  medium: Re.roundedMedium,
  large: Re.roundedLarge,
  full: Re.roundedFull
}, Oe = Fe.forwardRef(
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
    rounded: C = "medium",
    onClick: u,
    ...N
  }, S) => {
    const W = o ?? l ?? !1, j = s || W, I = be(() => W ? /* @__PURE__ */ r(Ge, { children: [
      /* @__PURE__ */ e("span", { className: Re.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: m })
    ] }) : f ? /* @__PURE__ */ r(Ge, { children: [
      v === "left" && /* @__PURE__ */ e("span", { className: Re.icon, children: f }),
      m && /* @__PURE__ */ e("span", { children: m }),
      v === "right" && /* @__PURE__ */ e("span", { className: Re.icon, children: f })
    ] }) : m, [m, W, f, v]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: S,
        className: Ae(
          Re.button,
          _n[t],
          In[n],
          Rn[C],
          {
            [Re.fullWidth]: h,
            [Re.loading]: W,
            [Re.disabled]: j
          },
          p
        ),
        disabled: j,
        onClick: u,
        ...N,
        children: I
      }
    );
  }
);
Oe.displayName = "BaseButton";
const Dn = { small: "h-8", medium: "h-9", large: "h-14" }, Cr = Fe.forwardRef(
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
    prefixIcon: C,
    suffixIcon: u,
    onChange: N,
    onFocus: S,
    onBlur: W,
    onClear: j,
    className: I,
    containerClassName: Y,
    clearable: Q = !1,
    label: U,
    helperText: z,
    ...ae
  }, K) => {
    const [H, P] = y(!1), Z = ue(null), x = Le((le) => {
      Z.current = le, typeof K == "function" ? K(le) : K && (K.current = le);
    }, [K]), X = Le(() => {
      var $, G;
      const le = Z.current;
      le && ((G = ($ = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : $.set) == null || G.call(le, ""), le.dispatchEvent(new Event("input", { bubbles: !0 })), le.focus(), j == null || j());
    }, [j]), se = be(
      () => {
        var le;
        return Q && H && String(o ?? ((le = Z.current) == null ? void 0 : le.value) ?? "").length > 0;
      },
      [Q, H, o]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      U && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: U }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Ae(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Dn[v],
            !s && !f && "hover:border-controlBorder",
            H && !s && !f && "border-primary ring-2 ring-brandFocus",
            f && "border-danger",
            f && H && "ring-2 ring-dangerFocus",
            s && "cursor-not-allowed bg-surfaceMuted",
            Y
          ),
          children: [
            (p || C) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: p || C }),
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
                className: Ae("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", I),
                onFocus: (le) => {
                  P(!0), S == null || S(le);
                },
                onBlur: (le) => {
                  P(!1), W == null || W(le);
                },
                onChange: N,
                ...ae
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              se && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (le) => le.preventDefault(), onClick: X, "aria-label": "清空", children: "✕" }),
              h || u
            ] })
          ]
        }
      ),
      z && /* @__PURE__ */ e("div", { className: Ae("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: z })
    ] });
  }
);
Cr.displayName = "BaseInput";
const jn = { small: "h-8", medium: "h-9", large: "h-14" }, Fn = Fe.forwardRef(
  ({ options: t = [], value: n, defaultValue: o, placeholder: l, disabled: s = !1, error: m = !1, size: f = "medium", label: v, helperText: p, onChange: h, className: C, ...u }, N) => {
    const S = Le((W) => {
      const j = W.target.value, I = t.find((Y) => String(Y.value) === j);
      h == null || h(j === "" ? "" : (I == null ? void 0 : I.value) ?? j);
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
              jn[f],
              C
            ),
            value: n ?? o ?? "",
            disabled: s,
            onChange: S,
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
Fn.displayName = "BaseSelect";
const Hn = "_container_ykn59_1", qn = "_item_ykn59_10", Wn = "_itemActive_ykn59_27", On = "_itemDisabled_ykn59_27", Un = "_sizeSmall_ykn59_43", Vn = "_sizeMiddle_ykn59_49", Kn = "_sizeLarge_ykn59_55", it = {
  container: Hn,
  item: qn,
  itemActive: Wn,
  itemDisabled: On,
  sizeSmall: Un,
  sizeMiddle: Vn,
  sizeLarge: Kn
}, Xn = {
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
  className: f
}) {
  var u;
  const [v, p] = y(
    o ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), h = n ?? v, C = (N) => {
    m || (n === void 0 && p(N), l == null || l(N));
  };
  return /* @__PURE__ */ e("div", { className: Ae(it.container, Xn[s], f), children: t.map((N) => {
    const S = h === N.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Ae(it.item, S && it.itemActive, m && it.itemDisabled),
        onClick: () => C(N.value),
        disabled: m,
        "aria-pressed": S,
        children: N.label
      },
      N.value
    );
  }) });
}
const Gn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Yn = Fe.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: o = !1, onChange: l, onError: s, maxSize: m, children: f, className: v, dragable: p = !0, placeholderTitle: h, placeholderDescription: C, placeholderIcon: u, maxCount: N }, S) => {
    const W = ue(null), [j, I] = y(!1), Y = Le((U) => {
      if (N && U.length > N) {
        s == null || s(new Error(`单次最多上传 ${N} 个文件`));
        return;
      }
      if (m) {
        for (const z of Array.from(U))
          if (z.size > m) {
            s == null || s(new Error(`文件“${z.name}”超过大小限制（${Gn(m)}）`));
            return;
          }
      }
      l == null || l(U);
    }, [N, m, l, s]), Q = () => {
      var U;
      o || (U = W.current) == null || U.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: S,
        className: Ae(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          j && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          v
        ),
        onClick: Q,
        onKeyDown: (U) => {
          !o && (U.key === "Enter" || U.key === " ") && (U.preventDefault(), Q());
        },
        onDragOver: (U) => {
          p && !o && (U.preventDefault(), I(!0));
        },
        onDragLeave: () => I(!1),
        onDrop: (U) => {
          p && !o && (U.preventDefault(), I(!1), Y(U.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: W, type: "file", accept: t, multiple: n, disabled: o, onChange: (U) => U.target.files && Y(U.target.files), className: "hidden" }),
          f || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: u ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: h ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: C ?? "支持单文件或批量上传" })
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
  destroyOnClose: f = !1,
  mask: v = !0,
  maskClosable: p = !0,
  okText: h = "确认",
  cancelText: C = "取消",
  confirmLoading: u = !1,
  okButtonProps: N,
  cancelButtonProps: S,
  onConfirm: W,
  onCancel: j,
  onClose: I,
  onOk: Y,
  onDismiss: Q,
  children: U,
  footer: z,
  className: ae,
  bodyClassName: K
}) => {
  const H = o ?? !1, P = Le(async () => {
    try {
      W ? await W() : Y && await Y();
    } catch (X) {
      console.error("Modal confirm error:", X);
    }
  }, [W, Y]), Z = Le(() => {
    j ? j() : I ? I() : Q == null || Q();
  }, [j, I, Q]), x = be(() => {
    if (z === null) return null;
    if (z) return z;
    const { type: X, ...se } = S ?? {}, { type: le, ...$ } = N ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Oe, { type: "secondary", size: "medium", onClick: Z, ...se, children: C }),
      /* @__PURE__ */ e(Oe, { type: "primary", size: "medium", isLoading: u, onClick: P, ...$, children: u ? "加载中..." : h })
    ] });
  }, [S, C, u, z, Z, P, N, h]);
  return !H && f || !H ? null : /* @__PURE__ */ r(Ge, { children: [
    v && /* @__PURE__ */ e("div", { className: Ae("fixed inset-0 z-[1000] bg-overlayMask", Jt.maskAnimation), onClick: () => p && Z(), role: "presentation" }),
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
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: Z, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Ae("min-h-20 p-5 text-primaryText", K), children: U }),
          x
        ]
      }
    )
  ] });
};
Ut.displayName = "BaseModal";
const Jn = ({ title: t, extra: n, children: o, hoverable: l = !1, loading: s = !1, bordered: m = !0, className: f, bodyClassName: v, onClick: p }) => /* @__PURE__ */ r(
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
Jn.displayName = "BaseCard";
const ea = ({ columns: t, dataSource: n = [], rowKey: o = "id", loading: l = !1, bordered: s = !0, striped: m = !0, className: f, onRow: v }, p) => /* @__PURE__ */ r("div", { ref: p, className: Ae("relative w-full overflow-x-auto bg-surface", f), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: s ? "border-b border-lineSubtle" : void 0, children: t.map((h) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: h.width, textAlign: h.align }, children: h.title }, h.key || String(h.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((h, C) => {
      const u = String(typeof o == "string" ? h[o] ?? C : C);
      return /* @__PURE__ */ e("tr", { className: Ae(s && "border-b border-lineSoft last:border-b-0", m && "odd:bg-surface"), ...(v == null ? void 0 : v(h, C)) || {}, children: t.map((N) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: N.align }, children: N.render ? N.render(h[N.dataIndex], h, C) : String(h[N.dataIndex] ?? "") }, N.key || String(N.dataIndex))) }, u);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), bs = Fe.forwardRef(ea), ta = ({ current: t = 1, pageSize: n = 10, total: o = 0, onChange: l, showSizeChanger: s = !1, pageSizeOptions: m = [10, 20, 50, 100], onShowSizeChange: f, disabled: v = !1, className: p }) => {
  const h = be(() => Math.ceil(o / n) || 1, [n, o]), C = Le((N) => f == null ? void 0 : f(1, Number(N.target.value)), [f]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
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
    s && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: C, disabled: v, children: m.map((N) => /* @__PURE__ */ r("option", { value: N, children: [
      N,
      " 条/页"
    ] }, N)) })
  ] });
};
ta.displayName = "BasePagination";
const Vt = ({ description: t = "暂无数据", image: n, children: o }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  o
] });
Vt.displayName = "BaseEmpty";
const At = ({ trigger: t, items: n, footerItems: o = [], open: l = !1, onOpenChange: s, onTriggerClick: m, onItemClick: f, placement: v = "bottom-start", width: p, portal: h = !1, className: C, triggerClassName: u, menuClassName: N, listClassName: S, footerClassName: W }) => {
  const j = ue(null), I = ue(null), [Y, Q] = y({}), U = v.endsWith("end"), z = v.startsWith("top");
  Ht(() => {
    var x;
    if (!l || !h || !j.current) return;
    const P = j.current.getBoundingClientRect(), Z = z ? ((x = I.current) == null ? void 0 : x.offsetHeight) ?? 0 : 0;
    Q({
      position: "fixed",
      left: U ? P.right : P.left,
      top: z ? P.top - Z - 8 : P.bottom,
      transform: U ? "translateX(-100%)" : void 0
    });
  }, [z, U, l, h, v]), we(() => {
    if (!l || !s) return;
    const P = (Z) => {
      var X, se;
      const x = Z.target;
      (X = j.current) != null && X.contains(x) || (se = I.current) != null && se.contains(x) || s(!1);
    };
    return document.addEventListener("mousedown", P), () => document.removeEventListener("mousedown", P);
  }, [s, l]);
  const ae = be(() => p ? { width: typeof p == "number" ? `${p}px` : p } : void 0, [p]), K = Le((P) => /* @__PURE__ */ r(
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
      onClick: (Z) => f == null ? void 0 : f(P, Z),
      disabled: P.disabled,
      children: [
        P.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: P.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: P.label })
      ]
    },
    P.key
  ), [f]), H = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: I,
      className: Ae(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !h && "absolute",
        !h && !z && "top-[calc(100%+8px)]",
        !h && z && "bottom-[calc(100%+8px)]",
        !h && U ? "right-0" : h ? void 0 : "left-0",
        N
      ),
      style: h ? { ...Y, ...ae } : ae,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Ae("flex min-h-0 flex-col gap-1", S), children: n.map(K) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: Ae("flex flex-col gap-1 border-t border-lineSoft pt-2", W), children: o.map(K) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: j, className: Ae("relative inline-block", C), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Ae("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (P) => {
      m == null || m(P), s == null || s(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    h ? H && cn(H, document.body) : H
  ] });
};
At.displayName = "BaseActionMenu";
const ra = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: o,
  feedback: l,
  onFeedback: s,
  disabled: m = !1
}) => {
  const [f, v] = y(!1), p = !!(o || s), h = Le(async () => {
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
            children: /* @__PURE__ */ e(Rr, { size: 15 })
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
}, er = Fe.memo(ra), na = {
  clarification: {
    icon: /* @__PURE__ */ e(mr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(Lt, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(ur, { size: 16 }),
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
        Oe,
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
          Oe,
          {
            type: "secondary",
            size: "small",
            disabled: s,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (f || m) && /* @__PURE__ */ e(
          Oe,
          {
            type: m ? "secondary" : "primary",
            size: "small",
            disabled: p,
            onClick: () => o == null ? void 0 : o(t.actionKey),
            children: s ? /* @__PURE__ */ r(Ge, { children: [
              /* @__PURE__ */ e(pr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
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
const la = async () => (Ct || (Ct = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw Ct = null, t;
})), Ct), oa = async () => (St || (St = import("remark-emoji").then((t) => t.default).catch(() => (St = null, null))), St), ia = async () => {
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
}, Et = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => Et(n)).join("") : Fe.isValidElement(t) ? Et(t.props.children) : "", nr = (t) => {
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
  const [s, m] = y(!1), f = Le(async () => {
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
}, ua = ({ rawCode: t }) => {
  const [n, o] = y(!1), l = Le(async () => {
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
    const m = l.match(/PMID\s*[:：]\s*(\d{4,})/i), f = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!m || !f) return;
    const v = l.slice(0, m.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), p = ((u = n[s - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", C = Sr({
      title: v || p,
      pmid: m[1],
      doi: f[1]
    });
    C && o.push(C);
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
  onPreviewMiraDraft: f,
  onCancelMiraDraft: v,
  pendingDisplayActionKey: p,
  onDisplayCardAction: h,
  isTyping: C = !1,
  isStreaming: u
}) => {
  var G, w;
  const N = t.role === "user", S = u ?? C, W = ue(null), [j, I] = y(null), [Y, Q] = y(null), [U, z] = y(null), [ae, K] = y(!1), H = be(() => /```\s*mermaid/i.test(t.content), [t.content]), P = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), Z = be(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), x = be(
    () => N ? null : ma(t.content),
    [N, t.content]
  ), X = !!(x && x.items.length > 0);
  we(() => {
    if (!P || j || Y) return;
    let b = !1;
    return la().then((k) => {
      b || (I(() => k.remark), Q(() => k.rehype));
    }).catch(() => {
    }), () => {
      b = !0;
    };
  }, [P, j, Y]), we(() => {
    if (!Z || ae) return;
    let b = !1;
    return oa().then((k) => {
      b || (k && z(() => k), K(!0));
    }), () => {
      b = !0;
    };
  }, [Z, ae]);
  const se = be(() => {
    const b = [Tr];
    return U && b.push(U), j && b.push(j), b;
  }, [U, j]), le = be(() => {
    const b = [on];
    return Y && b.push(Y), b;
  }, [Y]), $ = be(
    () => ({
      table: ({ node: b, ...k }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...k }) }),
      tr: ({ node: b, ...k }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...k }),
      th: ({ node: b, ...k }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...k
        }
      ),
      td: ({ node: b, ...k }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...k }),
      blockquote: ({ node: b, ...k }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...k
        }
      ),
      input: ({ node: b, type: k, checked: g, ...re }) => k === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!g,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...re
        }
      ) : /* @__PURE__ */ e("input", { type: k, ...re }),
      section: ({ node: b, ...k }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...k }),
      p: ({ node: b, children: k, ...g }) => {
        const re = Fe.Children.toArray(k);
        if (re.length === 1 && Fe.isValidElement(re[0])) {
          const Ne = re[0];
          if (typeof Ne.props.href == "string" && nr(Ne.props.href)) {
            const xe = Et(Ne.props.children).trim();
            return /* @__PURE__ */ e(ca, { href: Ne.props.href, label: xe });
          }
        }
        return /* @__PURE__ */ e("p", { ...g, children: k });
      },
      a: ({ node: b, href: k, ...g }) => {
        const re = k ?? "", Ne = /^https?:\/\/(dx\.)?doi\.org\//i.test(re) || /^doi:/i.test(re), xe = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(re) || /\/pmc\/|\/pmid\//i.test(re), E = nr(re);
        return Ne || xe || E ? /* @__PURE__ */ e(
          "a",
          {
            href: k,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...g
          }
        ) : /* @__PURE__ */ e("a", { href: k, target: "_blank", rel: "noreferrer", ...g });
      },
      pre({ children: b, ...k }) {
        const g = Fe.Children.toArray(b).find(
          (R) => Fe.isValidElement(R) && typeof R.props.className == "string" && R.props.className.includes("language-")
        );
        if (!g)
          return /* @__PURE__ */ e("pre", { ...k, children: b });
        const re = g.props.className ?? "", Ne = re.match(/language-([\w-]+)/), xe = Ne ? Ne[1].toLowerCase() : "code", E = Et(g.props.children).replace(/\n$/, "");
        return xe === "mermaid" ? /* @__PURE__ */ e(ua, { rawCode: E }) : /* @__PURE__ */ e(da, { language: xe, rawCode: E, className: re, children: g.props.children });
      },
      code({ children: b, className: k, ...g }) {
        return k ? /* @__PURE__ */ e("code", { className: k, ...g, children: b }) : /* @__PURE__ */ e(
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
  return we(() => {
    if (N || S || !H) return;
    const b = W.current;
    if (!b) return;
    const k = Array.from(b.querySelectorAll(".mermaid")).filter(
      (g) => g.dataset.processed !== "true"
    );
    k.length !== 0 && ia().then(async (g) => {
      await Promise.all(
        k.map(async (re, Ne) => {
          var q;
          const xe = (q = re.textContent) == null ? void 0 : q.trim();
          if (!xe) return;
          const E = `mermaid-${Date.now()}-${Ne}`, { svg: R } = await g.render(E, xe);
          re.innerHTML = R, re.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [N, S, H, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${N ? "justify-end" : "justify-start"}`, children: N ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (G = t.references) == null ? void 0 : G.map((b) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${b.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              b.type === "skill" ? /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(fr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
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
              b.status === "uploading" ? /* @__PURE__ */ e(pr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : b.status === "error" ? /* @__PURE__ */ e(Wr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : b.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: b.previewUrl, alt: b.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(xr, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
    X && x ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: x.items.map((b, k) => /* @__PURE__ */ r(
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
              children: /* @__PURE__ */ e(br, { size: 14 })
            }
          )
        ]
      },
      `${b.pmid}-${k}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: W,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          kr,
          {
            remarkPlugins: se,
            rehypePlugins: le,
            components: $,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      sa,
      {
        draft: t.miraDraft,
        onPreview: f,
        onConfirm: m,
        onCancel: v
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      aa,
      {
        card: t.displayCard,
        actionPending: p === t.displayCard.actionKey,
        onAction: h
      }
    ),
    !X && t.content && !S && /* @__PURE__ */ e(
      er,
      {
        markdownContent: t.content,
        onRefresh: s,
        feedback: o,
        onFeedback: n && l ? (b) => l(n, b) : void 0,
        disabled: S
      }
    )
  ] }) }) });
}, pa = Fe.memo(Mr), ha = {
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
  awaiting_confirmation: /* @__PURE__ */ e(Lt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(ur, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Ot, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(gr, { size: 14, className: "text-danger" })
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
    icon: /* @__PURE__ */ e(ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(Or, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(Gt, { size: 13 }),
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
    icon: /* @__PURE__ */ e(Lt, { size: 13 }),
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
  defaultExpanded: l = !0
}) => {
  const [s, m] = y(l), f = ue(null);
  we(() => {
    n.length > 0 && m(!0);
  }, [n.length]);
  const v = n.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: fa[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: o || ha[t] }),
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
          const C = sr[p.type] ?? sr.tool, u = p.status ? xa[p.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${C.colorClass}`, children: C.icon }),
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
}, ba = Fe.memo(qt);
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
  hasReceivedAssistantChunk: f = !1,
  contentMaxWidth: v = 800,
  selection: p,
  scrollbar: h,
  feedbackByMessageKey: C,
  getMessageKey: u = (K, H) => String(H),
  onFeedback: N,
  onRegenerate: S,
  onConfirmMiraDraft: W,
  onPreviewMiraDraft: j,
  onCancelMiraDraft: I,
  pendingDisplayActionKey: Y,
  onDisplayCardAction: Q,
  onScroll: U,
  scrollContainerRef: z,
  onMessageElement: ae
}) {
  var Ne, xe;
  const K = !!p, H = ue(null), P = ue(null), Z = ue(/* @__PURE__ */ new Map()), x = ue(), [X, se] = y(), $ = n && (s ?? !f) || s === !0 && (o === "awaiting_clarification" || o === "awaiting_confirmation" || o === "awaiting_approval" || o === "warning" || o === "failed");
  let G = -1, w = -1;
  if (n) {
    for (let E = t.length - 1; E >= 0; E -= 1)
      if (((Ne = t[E]) == null ? void 0 : Ne.role) === "user") {
        w = E;
        break;
      }
    for (let E = t.length - 1; E > w; E -= 1)
      if (((xe = t[E]) == null ? void 0 : xe.role) === "assistant") {
        G = E;
        break;
      }
  }
  const b = w >= 0 ? u(t[w], w) : void 0, k = G >= 0 ? u(t[G], G) : void 0, g = b && k ? `${b}:${k}` : void 0, re = Le(
    (E) => {
      H.current = E, ga(z, E);
    },
    [z]
  );
  return Ht(() => {
    if (!g || !k || w < 0 || G < 0)
      return;
    const E = H.current, R = P.current, q = Z.current.get(w);
    if (!E || !R || !q) return;
    const ke = () => {
      const he = window.getComputedStyle(E), fe = window.getComputedStyle(R), V = E.clientHeight - Ft(he.paddingTop) - Ft(he.paddingBottom), te = Ft(fe.rowGap || fe.gap), J = Math.max(
        0,
        Math.floor(V - q.offsetHeight - te)
      );
      se(
        (D) => (D == null ? void 0 : D.assistantKey) === k && D.minHeight === J ? D : { assistantKey: k, minHeight: J }
      );
    };
    ke();
    const pe = new ResizeObserver(ke);
    return pe.observe(E), pe.observe(q), () => pe.disconnect();
  }, [
    G,
    k,
    g,
    w
  ]), Ht(() => {
    if (!g || !k || (X == null ? void 0 : X.assistantKey) !== k || w < 0 || x.current === g)
      return;
    const E = H.current, R = Z.current.get(w);
    !E || !R || (E.scrollTo({ top: R.offsetTop, behavior: "auto" }), x.current = g);
  }, [k, g, w, X]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: re,
        "data-chat-scroll-container": !0,
        onScroll: U,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: P,
            className: `flex w-full flex-col ${K ? "gap-3" : "gap-8"}`,
            style: { maxWidth: v },
            children: [
              t.map((E, R) => {
                const q = u(E, R), ke = (p == null ? void 0 : p.selectedMessageKeys.has(q)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": R,
                    "data-chat-turn-reserved": (X == null ? void 0 : X.assistantKey) === q ? "true" : void 0,
                    ref: (pe) => {
                      pe ? Z.current.set(R, pe) : Z.current.delete(R), ae == null || ae(R, pe);
                    },
                    className: K ? "flex w-full items-start gap-2" : void 0,
                    style: (X == null ? void 0 : X.assistantKey) === q ? { minHeight: X.minHeight } : void 0,
                    children: [
                      p && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => p.onToggleMessage(q),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": ke ? "取消选择消息" : "选择消息",
                          children: ke ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ft, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: p ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${ke ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${E.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Mr,
                              {
                                msg: E,
                                actionKey: q,
                                feedback: C == null ? void 0 : C[q],
                                onFeedback: N,
                                onRefresh: S ? () => S(R) : void 0,
                                onConfirmMiraDraft: W,
                                onPreviewMiraDraft: j,
                                onCancelMiraDraft: I,
                                pendingDisplayActionKey: Y,
                                onDisplayCardAction: Q,
                                isTyping: n && R === G
                              }
                            ),
                            R === G && $ && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
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
                  q
                );
              }),
              G < 0 && $ && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
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
Fe.memo(ya);
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
function va({
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
  onEditingTitleKeyDown: C
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
              children: /* @__PURE__ */ e(vr, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: o !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: o,
              onChange: (N) => p == null ? void 0 : p(N.target.value),
              onBlur: h,
              onKeyDown: C,
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
  const [s, m] = y(o), [f, v] = y(null), [p, h] = y(0), [C, u] = y(0), [N, S] = y(!1), W = ue(null), j = ue({}), I = ue(null), Y = Le(() => {
    const z = W.current;
    if (!z) {
      h(0), u(0);
      return;
    }
    const { scrollTop: ae, scrollHeight: K, clientHeight: H } = z;
    if (K <= H || H <= 0) {
      h(0), u(0);
      return;
    }
    const P = Math.max(H / K * H, 24), Z = H - P, x = ae / Math.max(K - H, 1);
    h(P), u(Z * x);
  }, []), Q = Le(() => {
    Y(), S(!0), I.current !== null && window.clearTimeout(I.current), I.current = window.setTimeout(() => S(!1), 650);
  }, [Y]), U = () => {
    I.current !== null && (window.clearTimeout(I.current), I.current = null), m(!1), v(null), S(!1);
  };
  return we(() => {
    if (!s) return;
    const z = window.requestAnimationFrame(Y);
    return () => window.cancelAnimationFrame(z);
  }, [s, t.length, Y]), we(() => {
    const z = W.current, ae = j.current[n];
    if (!z || !ae) return;
    const K = z.scrollTop, H = K + z.clientHeight, P = ae.offsetTop, Z = P + ae.offsetHeight, x = 16;
    P < K + x ? z.scrollTo({ top: Math.max(P - x, 0), behavior: "auto" }) : Z > H - x && z.scrollTo({
      top: Math.max(Z - z.clientHeight + x, 0),
      behavior: "auto"
    });
  }, [n, t.length]), we(() => () => {
    I.current !== null && window.clearTimeout(I.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => m(!0),
      onMouseLeave: U,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: W,
          onScroll: Q,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${s ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((z) => {
              const ae = z.messageIndex === n, K = f === z.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (H) => {
                    j.current[z.messageIndex] = H;
                  },
                  type: "button",
                  onClick: () => l(z.messageIndex),
                  onMouseEnter: () => v(z.messageIndex),
                  onMouseLeave: () => v(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${s ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${z.messageIndex + 1} 条用户消息`,
                  title: z.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${s ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${ae ? "text-primary" : K ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: z.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${ae ? "h-[4px] w-[12px] bg-primary" : K ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                z.messageIndex
              );
            }) }),
            s && p > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${N ? "opacity-100" : "opacity-0"}`,
                style: { height: p, transform: `translateY(${C}px)` }
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
            /* @__PURE__ */ e(Oe, { type: "secondary", size: "small", onClick: m, children: "取消" }),
            /* @__PURE__ */ e(
              Oe,
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
function $r({
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
        Oe,
        {
          type: "secondary",
          size: "small",
          disabled: o,
          onClick: f,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            o ? /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Kr, { size: 14 }),
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
                children: h ? /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(wr, { size: 13 })
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
const wa = {
  disabled: /* @__PURE__ */ e(Xr, { size: 14 }),
  pending: /* @__PURE__ */ e(_t, { size: 14 }),
  indexed: /* @__PURE__ */ e(gt, { size: 14 })
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
  const [o, l] = y(!1), s = ue(null), m = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  we(() => () => {
    s.current !== null && window.clearTimeout(s.current);
  }, []);
  const f = () => {
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
        onScroll: f,
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
  onAction: f,
  resolveActions: v,
  renderContent: p,
  onResizeStart: h
}) {
  const C = t.find((S) => S.key === n) ?? null, u = C ? (v == null ? void 0 : v(C)) ?? C.actions : void 0, N = C ? p == null ? void 0 : p(C) : void 0;
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
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((S) => {
        const W = S.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => o(S.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${W ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                S.type === "knowledge" || S.type === "draft" ? /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Gr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: S.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (j) => {
                j.stopPropagation(), l(S.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${S.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(bt, { size: 12 })
            }
          )
        ] }, S.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        C && (u == null ? void 0 : u.map((S) => /* @__PURE__ */ e(
          Oe,
          {
            type: S.tone ?? "secondary",
            size: "small",
            disabled: m === C.key || !f,
            onClick: () => f == null ? void 0 : f(C.key, S.id),
            children: S.label
          },
          S.id
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
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: C ? N || (C.document ? /* @__PURE__ */ e(Ta, { document: C.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: C.loading ? "正在加载文档…" : C.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Cs({
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
  const C = l.length + s.length;
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
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : C === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ge, { children: [
        l.map((u) => {
          const N = `knowledge:${u.id}`, S = m === N;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => v(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${S ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${S ? "font-semibold" : "font-normal"}`, children: u.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: u.tags[0] ?? "未分类" })
              ]
            },
            u.id
          );
        }),
        s.map((u) => {
          const N = `experiment:${u.id}`, S = m === N;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => p(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${S ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${S ? "font-semibold" : "font-normal"}`, children: u.title }),
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
], La = /(?:^|\s)\/([^\s/]*)$/, za = /(?:^|\s)@([^\s@]*)$/, Aa = (t, n) => {
  const l = t.slice(0, n).match(La);
  return l ? l[1] : null;
}, Ea = (t, n) => {
  const l = t.slice(0, n).match(za);
  return l ? l[1] : null;
}, Ss = (t, n, o, l) => {
  const s = t.slice(0, n), m = t.slice(o), f = s.match(/(?:^|\s)\/[^\s/]*$/);
  if (!f) {
    const u = `/${l} `;
    return { value: `${s}${u}${m}`, cursor: s.length + u.length };
  }
  const v = s.length - f[0].length, h = `${f[0].startsWith(" ") ? " " : ""}/${l} `, C = `${s.slice(0, v)}${h}`;
  return {
    value: `${C}${m}`,
    cursor: C.length
  };
}, Ms = (t, n, o, l) => {
  const s = t.slice(0, n), m = t.slice(o), f = s.match(/(?:^|\s)@[^\s@]*$/);
  if (!f) {
    const u = `@${l} `;
    return { value: `${s}${u}${m}`, cursor: s.length + u.length };
  }
  const v = s.length - f[0].length, h = `${f[0].startsWith(" ") ? " " : ""}@${l} `, C = `${s.slice(0, v)}${h}`;
  return {
    value: `${C}${m}`,
    cursor: C.length
  };
}, Pa = [], $s = [], Ar = ({
  onSend: t,
  disabled: n,
  autoFocus: o = !1,
  isStreaming: l = !1,
  onCancel: s,
  leadingControls: m,
  skillOptions: f = $a,
  fileOptions: v = Pa,
  uploadAccept: p,
  validateUploadFile: h,
  onUploadValidationError: C
}) => {
  const [u, N] = y(""), [S, W] = y(!1), [j, I] = y(!1), [Y, Q] = y(""), [U, z] = y(-1), [ae, K] = y(!1), [H, P] = y(""), [Z, x] = y(-1), [X, se] = y([]), [le, $] = y([]), [G, w] = y([]), [b, k] = y(!1), g = ue(null), re = ue(!1), Ne = ue(0), xe = ue(null), E = Ir(), R = ue([]), q = l, ke = q && !!s;
  we(() => {
    R.current = X;
  }, [X]), we(() => () => {
    R.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const pe = be(() => {
    const i = Y.trim().toLowerCase();
    return i ? f.filter((B) => `${B.id} ${B.description} ${B.source}`.toLowerCase().includes(i)) : f;
  }, [f, Y]), he = be(() => {
    const i = H.trim().toLowerCase();
    return i ? v.filter((B) => `${B.name} ${B.projectName} ${B.sourceType} ${B.operatorName ?? ""} ${B.operatedAt ?? ""}`.toLowerCase().includes(i)) : v.filter((B) => B.isRecent).slice(0, 10);
  }, [v, H]), fe = Le((i, B) => {
    const O = B ?? i.length, ie = Aa(i, O);
    if (ie !== null) {
      I(!0), Q(ie), z(-1), K(!1), P(""), x(-1);
      return;
    }
    const ce = Ea(i, O);
    if (ce !== null) {
      K(!0), P(ce), x(-1), I(!1), Q(""), z(-1);
      return;
    }
    I(!1), Q(""), z(-1), K(!1), P(""), x(-1);
  }, []), V = Le((i) => {
    if (i.disabled) return;
    const B = g.current, O = (B == null ? void 0 : B.selectionStart) ?? u.length, ie = (B == null ? void 0 : B.selectionEnd) ?? O, ce = u.slice(0, O), me = u.slice(ie), M = (() => {
      const ge = ce.match(/(?:^|\s)\/[^\s/]*$/);
      if (!ge)
        return { value: u, cursor: O };
      const ze = ce.length - ge[0].length, Ee = ge[0].startsWith(" ") ? " " : "", je = `${ce.slice(0, ze)}${Ee}`;
      return {
        value: `${je}${me}`,
        cursor: je.length
      };
    })();
    $((ge) => {
      const ze = `skill-${i.id}`;
      return ge.some((Ee) => Ee.id === ze) ? ge : [...ge, { id: ze, type: "skill", label: i.id, sourceId: i.id }];
    }), N(M.value), I(!1), Q(""), z(-1), requestAnimationFrame(() => {
      B && (B.focus(), B.setSelectionRange(M.cursor, M.cursor));
    });
  }, [u]), te = Le((i) => {
    const B = g.current, O = (B == null ? void 0 : B.selectionStart) ?? u.length, ie = (B == null ? void 0 : B.selectionEnd) ?? O, ce = u.slice(0, O), me = u.slice(ie), M = (() => {
      const ge = ce.match(/(?:^|\s)@[^\s@]*$/);
      if (!ge)
        return { value: u, cursor: O };
      const ze = ce.length - ge[0].length, Ee = ge[0].startsWith(" ") ? " " : "", je = `${ce.slice(0, ze)}${Ee}`;
      return {
        value: `${je}${me}`,
        cursor: je.length
      };
    })();
    w((ge) => {
      const ze = `doc-${i.id}`;
      return ge.some((Ee) => Ee.id === ze) ? ge : [...ge, { id: ze, type: "doc", label: i.name, sourceId: i.id }];
    }), N(M.value), K(!1), P(""), x(-1), requestAnimationFrame(() => {
      B && (B.focus(), B.setSelectionRange(M.cursor, M.cursor));
    });
  }, [u]), J = Le(() => {
    k(!1);
    const i = xe.current;
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
  }, []), D = Le((i) => {
    const B = Array.from(i.target.files ?? []);
    if (B.length === 0) return;
    const O = B.filter((ie) => {
      const ce = h == null ? void 0 : h(ie);
      return ce ? (C == null || C(ce), !1) : !0;
    });
    se((ie) => {
      const ce = new Set(ie.map((M) => M.id)), me = [...ie];
      return O.forEach((M) => {
        if (M.size > Sa || me.length >= Ca) return;
        const ge = `${M.name}-${M.size}-${M.lastModified}`;
        if (ce.has(ge)) return;
        const ze = M.type.startsWith("image/");
        ce.add(ge), me.push({
          id: ge,
          name: M.name,
          mimeType: M.type || "application/octet-stream",
          previewUrl: ze ? URL.createObjectURL(M) : void 0,
          file: M
        });
      }), me;
    }), i.target.value = "";
  }, [C, h]), Pe = Le((i) => {
    se((B) => {
      const O = B.find((ie) => ie.id === i);
      return O != null && O.previewUrl && URL.revokeObjectURL(O.previewUrl), B.filter((ie) => ie.id !== i);
    });
  }, []), $e = Le((i) => {
    $((B) => B.filter((O) => O.id !== i));
  }, []), qe = Le((i) => {
    w((B) => B.filter((O) => O.id !== i));
  }, []), Be = Le(() => {
    !u.trim() || n || l || (t({
      content: u,
      attachments: X.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...le, ...G]
    }), N(""), se([]), $([]), w([]), I(!1), Q(""), z(-1), K(!1), P(""), x(-1));
  }, [u, n, l, t, X, G, le]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: E,
        ref: xe,
        type: "file",
        multiple: !0,
        accept: p,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: D
      }
    ),
    (X.length > 0 || le.length > 0 || G.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      le.map((i) => /* @__PURE__ */ r(
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
                onClick: () => $e(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      G.map((i) => /* @__PURE__ */ r(
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
                onClick: () => qe(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${i.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      X.map((i) => /* @__PURE__ */ r(
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
                onClick: () => Pe(i.id),
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
        ref: g,
        autoFocus: o,
        value: u,
        onCompositionStart: () => {
          re.current = !0;
        },
        onCompositionEnd: (i) => {
          re.current = !1, Ne.current = performance.now(), fe(
            i.currentTarget.value,
            i.currentTarget.selectionStart
          );
        },
        onChange: (i) => {
          const B = i.target.value;
          N(B), fe(B, i.target.selectionStart);
        },
        onClick: (i) => {
          fe(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyUp: (i) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(i.key) || fe(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyDown: (i) => {
          const B = i.nativeEvent;
          if (!(re.current || B.isComposing || B.keyCode === 229 || i.key === "Enter" && performance.now() - Ne.current < 50)) {
            if (i.key === "Enter" && (i.shiftKey || i.metaKey || i.ctrlKey)) {
              i.preventDefault();
              const O = i.currentTarget, ie = O.selectionStart ?? u.length, ce = O.selectionEnd ?? ie, me = `${u.slice(0, ie)}
${u.slice(ce)}`, M = ie + 1;
              N(me), fe(me, M), requestAnimationFrame(() => {
                O.setSelectionRange(M, M);
              });
              return;
            }
            if (j) {
              if (i.key === "ArrowDown") {
                i.preventDefault(), z((O) => pe.length === 0 ? -1 : O < 0 ? 0 : (O + 1) % pe.length);
                return;
              }
              if (i.key === "ArrowUp") {
                i.preventDefault(), z((O) => pe.length === 0 ? -1 : O < 0 ? pe.length - 1 : (O - 1 + pe.length) % pe.length);
                return;
              }
              if (i.key === "Escape") {
                i.preventDefault(), I(!1), Q(""), z(-1);
                return;
              }
              if (i.key === "Enter" && !i.shiftKey) {
                i.preventDefault();
                const O = U >= 0 ? pe[U] : void 0;
                O && V(O);
                return;
              }
            }
            if (ae) {
              if (i.key === "ArrowDown") {
                i.preventDefault(), x((O) => he.length === 0 ? -1 : O < 0 ? 0 : (O + 1) % he.length);
                return;
              }
              if (i.key === "ArrowUp") {
                i.preventDefault(), x((O) => he.length === 0 ? -1 : O < 0 ? he.length - 1 : (O - 1 + he.length) % he.length);
                return;
              }
              if (i.key === "Escape") {
                i.preventDefault(), K(!1), P(""), x(-1);
                return;
              }
              if (i.key === "Enter" && !i.shiftKey) {
                i.preventDefault();
                const O = Z >= 0 ? he[Z] : void 0;
                O && te(O);
                return;
              }
            }
            i.key === "Enter" && !i.shiftKey && (i.preventDefault(), Be());
          }
        },
        disabled: n,
        onFocus: () => W(!0),
        onBlur: () => {
          W(!1), I(!1), K(!1);
        },
        placeholder: S ? Ma : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${X.length > 0 || le.length > 0 || G.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    j && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: Y ? `搜索 skill：${Y}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: pe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : pe.map((i, B) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : B === U ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => V(i),
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
    ae && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: H ? `搜索文件：${H}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !H && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(_t, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        he.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : he.map((i, B) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${B === Z ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => te(i),
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
                  onClick: J,
                  "aria-controls": E,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Nr, { size: 16 })
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
          onClick: q ? s : Be,
          disabled: q ? !ke : n || !u.trim(),
          "aria-label": q ? "停止生成" : "发送消息",
          title: q ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${ke || !q && u.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: q ? /* @__PURE__ */ e(Yr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Qr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
Fe.memo(Ar);
const Ba = ({ messages: t, isTyping: n, statusPhase: o = "thinking", searchSteps: l = [] }) => {
  const s = ue(null);
  we(() => {
    var f;
    (f = s.current) == null || f.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const m = be(() => t.map((f, v) => /* @__PURE__ */ e(pa, { msg: f }, `${v}-${f.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    m,
    n && /* @__PURE__ */ e(ba, { phase: o, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: s })
  ] });
};
Fe.memo(Ba);
const _a = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], Er = ({ onSelect: t, prompts: n = _a, disabled: o = !1 }) => {
  const l = Le((s) => {
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
Fe.memo(Er);
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
  const l = ue(null), s = ue(null), [m, f] = y(""), [v, p] = y(""), [h, C] = y(!0), [u, N] = y(!1), [S, W] = y(!1), [j, I] = y(null), Y = ue(null), [Q, U] = y(!1), [z, ae] = y("email"), [K, H] = y(""), [P, Z] = y(""), [x, X] = y(""), [se, le] = y(""), [$, G] = y(0), [w, b] = y(!1), k = be(() => m.trim().length > 0 && v.trim().length > 0 && !u, [
    m,
    u,
    v
  ]);
  we(() => {
    if ($ <= 0) return;
    const E = window.setTimeout(() => G((R) => R - 1), 1e3);
    return () => clearTimeout(E);
  }, [$]), we(
    () => () => {
      Y.current !== null && window.clearTimeout(Y.current);
    },
    []
  ), we(() => {
    const E = l.current, R = s.current;
    if (!E || !R) return;
    const q = E.getContext("2d");
    if (!q) return;
    const ke = window.getComputedStyle(document.documentElement), pe = ke.getPropertyValue("--chatui-color-auth-particle-active").trim(), he = ke.getPropertyValue("--chatui-color-auth-particle-idle").trim(), fe = ke.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let V = 0, te = 0, J = 0, D = window.devicePixelRatio || 1, Pe = [];
    const $e = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, qe = 150, Be = () => {
      const me = R.getBoundingClientRect();
      D = window.devicePixelRatio || 1, te = me.width, J = me.height, E.width = te * D, E.height = J * D, E.style.width = `${te}px`, E.style.height = `${J}px`, q.setTransform(D, 0, 0, D, 0, 0);
      const M = te < 768 ? 40 : 90;
      Pe = Array.from({ length: M }, () => Ia(te, J));
    }, i = (me) => {
      q.beginPath(), q.arc(me.x, me.y, me.size, 0, Math.PI * 2), q.closePath(), q.fill();
    }, B = () => {
      q.clearRect(0, 0, te, J);
      for (let me = 0; me < Pe.length; me += 1) {
        const M = Pe[me];
        M.x += M.vx, M.y += M.vy, (M.x < 0 || M.x > te) && (M.vx = -M.vx), (M.y < 0 || M.y > J) && (M.vy = -M.vy);
        const ge = $e.x - M.x, ze = $e.y - M.y, Ee = Math.sqrt(ge * ge + ze * ze) || 1, je = ge / Ee, Je = ze / Ee, Ce = ($e.radius - Ee) / $e.radius, ee = je * Ce * M.density, et = Je * Ce * M.density;
        if (Ee < $e.radius)
          M.x -= ee * 0.5, M.y -= et * 0.5, q.fillStyle = pe, M.size = Math.min(M.size + 0.1, 2.5);
        else {
          if (M.x !== M.baseX) {
            const He = M.x - M.baseX;
            M.x -= He / 50;
          }
          if (M.y !== M.baseY) {
            const He = M.y - M.baseY;
            M.y -= He / 50;
          }
          q.fillStyle = he, M.size = Math.max(M.size - 0.05, 1);
        }
        i(M);
        for (let He = me; He < Pe.length; He += 1) {
          const _e = Pe[He], Ye = M.x - _e.x, Ue = M.y - _e.y, Qe = Math.sqrt(Ye * Ye + Ue * Ue);
          if (Qe < qe) {
            const at = (1 - Qe / qe) * 0.4;
            q.beginPath(), q.strokeStyle = fe, q.globalAlpha = at, q.lineWidth = 1, q.moveTo(M.x, M.y), q.lineTo(_e.x, _e.y), q.stroke(), q.globalAlpha = 1, q.closePath();
          }
        }
      }
      V = window.requestAnimationFrame(B);
    }, O = (me) => {
      const M = R.getBoundingClientRect();
      $e.x = me.clientX - M.left, $e.y = me.clientY - M.top;
    }, ie = () => {
      $e.x = -1e3, $e.y = -1e3;
    }, ce = (me) => {
      if (me.touches.length < 1) return;
      const M = R.getBoundingClientRect();
      $e.x = me.touches[0].clientX - M.left, $e.y = me.touches[0].clientY - M.top;
    };
    return Be(), B(), window.addEventListener("resize", Be), R.addEventListener("mousemove", O), R.addEventListener("mouseleave", ie), R.addEventListener("touchmove", ce, { passive: !0 }), R.addEventListener("touchend", ie), () => {
      window.cancelAnimationFrame(V), window.removeEventListener("resize", Be), R.removeEventListener("mousemove", O), R.removeEventListener("mouseleave", ie), R.removeEventListener("touchmove", ce), R.removeEventListener("touchend", ie);
    };
  }, []);
  const g = async (E) => {
    if (E.preventDefault(), !!k) {
      N(!0), I(null);
      try {
        const R = await t({ email: m.trim(), password: v, rememberLogin: h });
        if (!R.ok) {
          I(R.message);
          return;
        }
        W(!0), Y.current = window.setTimeout(() => {
          W(!1), n();
        }, 900);
      } catch {
        I("登录失败，请稍后重试。");
      } finally {
        N(!1);
      }
    }
  }, re = async () => {
    !K.trim() || $ > 0 || (N(!0), await new Promise((E) => window.setTimeout(E, 1e3)), N(!1), b(!0), G(60));
  }, Ne = async () => {
    if (z === "email") {
      if (!K.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(K) || !P.trim() || P.length < 6 || !x.trim() || x.length < 6 || x !== se) return;
      ae("success");
    }
  }, xe = () => {
    U(!1), ae("email"), H(""), Z(""), X(""), le(""), G(0), b(!1);
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
              onChange: (E) => {
                f(E.target.value), I(null);
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
              value: v,
              onChange: (E) => {
                p(E.target.value), I(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "current-password",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: lr, children: "密码" })
        ] }),
        j && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: j }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: h,
                  onChange: (E) => C(E.target.checked),
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
      Q && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: xe,
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
                value: K,
                onChange: (E) => H(E.target.value),
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
                  onChange: (E) => Z(E.target.value.replace(/\D/g, "").slice(0, 6)),
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
                disabled: $ > 0 || u || !K.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${$ > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: $ > 0 ? `${$}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (E) => X(E.target.value),
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
                value: se,
                onChange: (E) => le(E.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${se.length > 0 && x !== se ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          se.length > 0 && x !== se && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: Ne,
              disabled: !K.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(K) || !P.trim() || P.length < 6 || !x.trim() || x.length < 6 || x !== se,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        z === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${S ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(gt, { size: 18, className: "text-primary" }),
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
  const f = ue(null), v = ue(null), p = ue(null), [h, C] = y("identity"), [u, N] = y(""), [S, W] = y(""), [j, I] = y(""), [Y, Q] = y(""), [U, z] = y(""), [ae, K] = y(""), H = t === "create-lab", [P, Z] = y(""), [x, X] = y(""), [se, le] = y(!1), [$, G] = y(0), [w, b] = y(""), [k, g] = y(null), re = P.length > 0 && P.trim().length < 6;
  we(() => {
    if ($ <= 0) return;
    const V = window.setTimeout(() => G((te) => te - 1), 1e3);
    return () => clearTimeout(V);
  }, [$]), we(
    () => () => {
      p.current !== null && window.clearTimeout(p.current);
    },
    []
  ), we(() => {
    const V = f.current, te = v.current;
    if (!V || !te) return;
    const J = V.getContext("2d");
    if (!J) return;
    const D = window.getComputedStyle(document.documentElement), Pe = D.getPropertyValue("--chatui-color-auth-particle-active").trim(), $e = D.getPropertyValue("--chatui-color-auth-particle-idle").trim(), qe = D.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Be = 0, i = 0, B = 0, O = window.devicePixelRatio || 1, ie = [];
    const ce = { x: -1e3, y: -1e3, radius: 120 }, me = 150, M = () => {
      const Ce = te.getBoundingClientRect();
      O = window.devicePixelRatio || 1, i = Ce.width, B = Ce.height, V.width = i * O, V.height = B * O, V.style.width = `${i}px`, V.style.height = `${B}px`, J.setTransform(O, 0, 0, O, 0, 0);
      const ee = i < 768 ? 40 : 90;
      ie = Array.from({ length: ee }, () => Ra(i, B));
    }, ge = (Ce) => {
      J.beginPath(), J.arc(Ce.x, Ce.y, Ce.size, 0, Math.PI * 2), J.closePath(), J.fill();
    }, ze = () => {
      J.clearRect(0, 0, i, B);
      for (let Ce = 0; Ce < ie.length; Ce += 1) {
        const ee = ie[Ce];
        ee.x += ee.vx, ee.y += ee.vy, (ee.x < 0 || ee.x > i) && (ee.vx = -ee.vx), (ee.y < 0 || ee.y > B) && (ee.vy = -ee.vy);
        const et = ce.x - ee.x, He = ce.y - ee.y, _e = Math.sqrt(et * et + He * He) || 1, Ye = et / _e, Ue = He / _e, Qe = (ce.radius - _e) / ce.radius, at = Ye * Qe * ee.density, dt = Ue * Qe * ee.density;
        _e < ce.radius ? (ee.x -= at * 0.5, ee.y -= dt * 0.5, J.fillStyle = Pe, ee.size = Math.min(ee.size + 0.1, 2.5)) : (ee.x !== ee.baseX && (ee.x -= (ee.x - ee.baseX) / 50), ee.y !== ee.baseY && (ee.y -= (ee.y - ee.baseY) / 50), J.fillStyle = $e, ee.size = Math.max(ee.size - 0.05, 1)), ge(ee);
        for (let Ve = Ce; Ve < ie.length; Ve += 1) {
          const tt = ie[Ve], rt = ee.x - tt.x, Ke = ee.y - tt.y, st = Math.sqrt(rt * rt + Ke * Ke);
          if (st < me) {
            const Xe = (1 - st / me) * 0.4;
            J.beginPath(), J.strokeStyle = qe, J.globalAlpha = Xe, J.lineWidth = 1, J.moveTo(ee.x, ee.y), J.lineTo(tt.x, tt.y), J.stroke(), J.globalAlpha = 1, J.closePath();
          }
        }
      }
      Be = window.requestAnimationFrame(ze);
    }, Ee = (Ce) => {
      const ee = te.getBoundingClientRect();
      ce.x = Ce.clientX - ee.left, ce.y = Ce.clientY - ee.top;
    }, je = () => {
      ce.x = -1e3, ce.y = -1e3;
    }, Je = (Ce) => {
      if (Ce.touches.length < 1) return;
      const ee = te.getBoundingClientRect();
      ce.x = Ce.touches[0].clientX - ee.left, ce.y = Ce.touches[0].clientY - ee.top;
    };
    return M(), ze(), window.addEventListener("resize", M), te.addEventListener("mousemove", Ee), te.addEventListener("mouseleave", je), te.addEventListener("touchmove", Je, { passive: !0 }), te.addEventListener("touchend", je), () => {
      window.cancelAnimationFrame(Be), window.removeEventListener("resize", M), te.removeEventListener("mousemove", Ee), te.removeEventListener("mouseleave", je), te.removeEventListener("touchmove", Je), te.removeEventListener("touchend", je);
    };
  }, []);
  const Ne = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(j) || $ > 0)) {
      le(!0), g(null);
      try {
        const V = await n(j);
        if (!V.ok) {
          g(V);
          return;
        }
        G(V.resendAfterSeconds ?? 60), b(V.message ?? "短信验证码已发送");
      } catch {
        g({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        le(!1);
      }
    }
  }, xe = () => ({
    email: u.trim(),
    name: S.trim(),
    phoneNumber: j,
    phoneVerificationCode: Y.trim(),
    mode: t,
    ...H ? { labName: ae.trim() } : { inviteCode: U.trim() }
  }), E = () => {
    const V = ["identity", "password", "success"], te = V.indexOf(h);
    te < V.length - 1 && C(V[te + 1]);
  }, R = be(() => {
    if (se) return !1;
    switch (h) {
      case "identity":
        return H ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && S.trim().length > 0 && /^1[3-9]\d{9}$/.test(j) && Y.length === 6 && ae.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && S.trim().length > 0 && /^1[3-9]\d{9}$/.test(j) && Y.length === 6 && U.trim().length > 0;
      case "password":
        return P.trim().length >= 6 && P === x;
      default:
        return !1;
    }
  }, [h, u, S, j, Y, U, ae, H, P, x, se]), q = async (V) => {
    if (V.preventDefault(), !!R) {
      le(!0), g(null);
      try {
        const te = xe(), J = h === "password" ? await l({ ...te, password: P }) : await o(te);
        if (!J.ok) {
          g(J);
          return;
        }
        E();
      } catch {
        g({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        le(!1);
      }
    }
  }, ke = {
    identity: H ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, pe = {
    identity: "",
    password: "",
    success: ""
  }, he = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", fe = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
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
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: ke[h] }),
        pe[h] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: pe[h] })
      ] }),
      h !== "success" && /* @__PURE__ */ r("form", { onSubmit: q, className: "space-y-5", children: [
        h === "identity" && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (V) => {
                  N(V.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: he
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: S,
                onChange: (V) => {
                  W(V.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: he
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: j,
                  onChange: (V) => {
                    I(V.target.value.replace(/\D/g, "").slice(0, 11)), b(""), g(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: he
                }
              ),
              /* @__PURE__ */ e("span", { className: fe, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: Ne,
                disabled: $ > 0 || se || !/^1[3-9]\d{9}$/.test(j),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${$ > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: $ > 0 ? `${$}s后获取` : "获取验证码"
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
                onChange: (V) => {
                  Q(V.target.value.replace(/\D/g, "").slice(0, 6)), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: he
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "短信验证码" })
          ] }),
          w && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: w }),
          H ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: ae,
                onChange: (V) => {
                  K(V.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: he
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: U,
                onChange: (V) => {
                  z(V.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: he
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "邀请码" })
          ] })
        ] }),
        h === "password" && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: P,
                onChange: (V) => {
                  Z(V.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                className: `${he} ${(k == null ? void 0 : k.field) === "password" || re ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "设置密码" }),
            ((k == null ? void 0 : k.field) === "password" || re) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (k == null ? void 0 : k.field) === "password" ? k.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (V) => {
                  X(V.target.value), g(null);
                },
                required: !0,
                placeholder: " ",
                className: `${he} ${x.length > 0 && P !== x ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "确认密码" }),
            x.length > 0 && P !== x && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        k && k.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: k.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !R,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: se ? "处理中..." : h === "password" ? "完成注册" : "下一步" }),
              se && /* @__PURE__ */ r(
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
const Da = (t, n) => {
  const o = Math.random() * t, l = Math.random() * n;
  return { x: o, y: l, baseX: o, baseY: l, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function As({ onSendCode: t, onResetPassword: n, onBackToLogin: o }) {
  const l = ue(null), s = ue(null), m = ue(null), [f, v] = y("phone"), [p, h] = y(""), [C, u] = y(""), [N, S] = y(""), [W, j] = y(""), [I, Y] = y(!1), [Q, U] = y(0), [z, ae] = y(""), [K, H] = y(null);
  we(() => {
    if (Q <= 0) return;
    const $ = window.setTimeout(() => U((G) => G - 1), 1e3);
    return () => window.clearTimeout($);
  }, [Q]), we(() => {
    const $ = l.current, G = s.current;
    if (!$ || !G) return;
    const w = $.getContext("2d");
    if (!w) return;
    const b = window.getComputedStyle(document.documentElement), k = b.getPropertyValue("--chatui-color-auth-particle-active").trim(), g = b.getPropertyValue("--chatui-color-auth-particle-idle").trim(), re = b.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Ne = 0, xe = 0, E = 0, R = [];
    const q = { x: -1e3, y: -1e3, radius: 120 }, ke = 150, pe = () => {
      const J = G.getBoundingClientRect(), D = window.devicePixelRatio || 1;
      xe = J.width, E = J.height, $.width = xe * D, $.height = E * D, $.style.width = `${xe}px`, $.style.height = `${E}px`, w.setTransform(D, 0, 0, D, 0, 0), R = Array.from({ length: xe < 768 ? 40 : 90 }, () => Da(xe, E));
    }, he = () => {
      w.clearRect(0, 0, xe, E);
      for (let J = 0; J < R.length; J += 1) {
        const D = R[J];
        D.x += D.vx, D.y += D.vy, (D.x < 0 || D.x > xe) && (D.vx = -D.vx), (D.y < 0 || D.y > E) && (D.vy = -D.vy);
        const Pe = q.x - D.x, $e = q.y - D.y, qe = Math.sqrt(Pe * Pe + $e * $e) || 1, Be = (q.radius - qe) / q.radius;
        qe < q.radius ? (D.x -= Pe / qe * Be * D.density * 0.5, D.y -= $e / qe * Be * D.density * 0.5, w.fillStyle = k, D.size = Math.min(D.size + 0.1, 2.5)) : (D.x -= (D.x - D.baseX) / 50, D.y -= (D.y - D.baseY) / 50, w.fillStyle = g, D.size = Math.max(D.size - 0.05, 1)), w.beginPath(), w.arc(D.x, D.y, D.size, 0, Math.PI * 2), w.fill();
        for (let i = J; i < R.length; i += 1) {
          const B = R[i], O = D.x - B.x, ie = D.y - B.y, ce = Math.sqrt(O * O + ie * ie);
          ce >= ke || (w.beginPath(), w.globalAlpha = (1 - ce / ke) * 0.4, w.strokeStyle = re, w.lineWidth = 1, w.moveTo(D.x, D.y), w.lineTo(B.x, B.y), w.stroke(), w.globalAlpha = 1);
        }
      }
      Ne = window.requestAnimationFrame(he);
    }, fe = (J) => {
      const D = G.getBoundingClientRect();
      q.x = J.clientX - D.left, q.y = J.clientY - D.top;
    }, V = (J) => {
      if (!J.touches.length) return;
      const D = G.getBoundingClientRect();
      q.x = J.touches[0].clientX - D.left, q.y = J.touches[0].clientY - D.top;
    }, te = () => {
      q.x = -1e3, q.y = -1e3;
    };
    return pe(), he(), window.addEventListener("resize", pe), G.addEventListener("mousemove", fe), G.addEventListener("mouseleave", te), G.addEventListener("touchmove", V, { passive: !0 }), G.addEventListener("touchend", te), () => {
      window.cancelAnimationFrame(Ne), window.removeEventListener("resize", pe), G.removeEventListener("mousemove", fe), G.removeEventListener("mouseleave", te), G.removeEventListener("touchmove", V), G.removeEventListener("touchend", te);
    };
  }, []), we(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const P = be(() => /^1[3-9]\d{9}$/.test(p) && C.length === 6 && N.length >= 6 && N === W, [W, N, p, C]), Z = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", x = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
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
        /* @__PURE__ */ r("form", { onSubmit: async ($) => {
          if ($.preventDefault(), !(!P || I)) {
            Y(!0), H(null);
            try {
              const G = await n({ phoneNumber: p, phoneVerificationCode: C, newPassword: N });
              if (!G.ok) {
                H(G.message);
                return;
              }
              v("success");
            } catch {
              H("密码重置失败，请稍后重试。");
            } finally {
              Y(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: p, onChange: ($) => {
                h($.target.value.replace(/\D/g, "").slice(0, 11)), ae(""), H(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: Z }),
              /* @__PURE__ */ e("span", { className: x, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(p) || Q > 0 || I)) {
                Y(!0), H(null);
                try {
                  const $ = await t(p);
                  if (!$.ok) {
                    H($.message);
                    return;
                  }
                  U($.resendAfterSeconds ?? 60), ae($.message ?? "短信验证码已发送");
                } catch {
                  H("验证码发送失败，请稍后重试。");
                } finally {
                  Y(!1);
                }
              }
            }, disabled: Q > 0 || I || !/^1[3-9]\d{9}$/.test(p), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${Q > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: Q > 0 ? `${Q}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: C, onChange: ($) => {
              u($.target.value.replace(/\D/g, "").slice(0, 6)), H(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: Z }),
            /* @__PURE__ */ e("span", { className: x, children: "短信验证码" })
          ] }),
          z && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: z }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: N, onChange: ($) => {
              S($.target.value), H(null);
            }, required: !0, placeholder: " ", className: Z }),
            /* @__PURE__ */ e("span", { className: x, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: W, onChange: ($) => {
              j($.target.value), H(null);
            }, required: !0, placeholder: " ", className: `${Z} ${W.length > 0 && N !== W ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: x, children: "确认新密码" }),
            W.length > 0 && N !== W && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          K && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: K }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !P || I, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: I ? "处理中..." : "重置密码" }),
            I && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
const or = 10, ir = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function Es({
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
  chatActions: C = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: N,
  onChatsChange: S,
  onRenameChat: W,
  onTogglePinChat: j,
  onShareChat: I,
  onDeleteChat: Y
}) {
  const [Q, U] = y(!0), [z, ae] = y(240), [K, H] = y(!1), P = ue(0), Z = ue(240), [x, X] = y(() => {
    const c = { unassigned: !0 };
    return n.forEach((A) => {
      c[A.id] = !0;
    }), c;
  }), [se, le] = y(!1), [$, G] = y(() => [...o]), [w, b] = y(null), [k, g] = y(null), [re, Ne] = y("time"), [xe, E] = y(!1), [R, q] = y(null), [ke, pe] = y(""), [he, fe] = y(!1), [V, te] = y(""), [J, D] = y(!1), [Pe, $e] = y(f), [qe, Be] = y(!1), i = v ?? Pe, B = ue(null), O = ue(null), ie = ue(null), ce = () => {
    le(!1), N();
  }, me = (c) => {
    X((A) => ({ ...A, [c]: !A[c] }));
  }, M = (c) => {
    var T;
    G((L) => L.filter((ve) => ve.id !== c)), b(null), R === c && (q(null), pe("")), Y == null || Y(c), ((T = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : T[1]) === c && u("/chat/new", { replace: !0 });
  }, ge = (c) => {
    const A = $.find((L) => L.id === c);
    if (!A) return;
    const T = !A.isPinned;
    G((L) => L.map(
      (Te) => Te.id === c ? { ...Te, isPinned: T } : Te
    )), j == null || j(c, T), b(null);
  }, ze = (c) => {
    q(c.id), pe(c.title), b(null);
  }, Ee = () => {
    q(null), pe("");
  }, je = (c) => {
    const A = ke.trim();
    A && (G((T) => T.map((L) => L.id === c ? { ...L, title: A } : L)), W == null || W(c, A)), Ee();
  }, Je = (c, A) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), je(A);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), Ee());
  }, Ce = (c) => {
    var A;
    if (R === c) {
      (A = B.current) == null || A.focus();
      return;
    }
    u(`/chat/${c}`);
  }, ee = (c, A = !1) => R === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (L) => {
        var ve;
        L.stopPropagation(), (ve = B.current) == null || ve.focus();
      },
      children: [
        A && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: B,
            value: ke,
            onChange: (L) => pe(L.target.value),
            onKeyDown: (L) => Je(L, c.id),
            onBlur: () => je(c.id),
            onClick: (L) => L.stopPropagation(),
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
    P.current = c.clientX, Z.current = z, H(!0);
  };
  we(() => {
    if (!K) return;
    const c = 200, A = 440, T = (ve) => {
      const Te = ve.clientX - P.current, Me = Math.min(A, Math.max(c, Z.current + Te));
      ae(Me);
    }, L = () => {
      H(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", T), window.addEventListener("mouseup", L), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", L);
    };
  }, [K, z]), we(() => {
    Q || ae(240);
  }, [Q]), we(() => {
    S == null || S($);
  }, [$, S]), we(() => {
    G([...o]);
  }, [o]), we(() => {
    if (!R) return;
    const c = window.requestAnimationFrame(() => {
      var A;
      (A = B.current) == null || A.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [R]), we(() => () => {
    O.current !== null && window.clearTimeout(O.current), ie.current !== null && window.clearTimeout(ie.current);
  }, []);
  const He = () => {
    E(!0), O.current !== null && window.clearTimeout(O.current), O.current = window.setTimeout(() => {
      E(!1);
    }, 600);
  }, _e = () => {
    D(!0), ie.current !== null && window.clearTimeout(ie.current), ie.current = window.setTimeout(() => {
      D(!1);
    }, 600);
  };
  we(() => {
    i || Be(!1);
  }, [i]);
  const Ye = () => {
    Be(!0), u("/ai-usage");
  }, Ue = be(() => [
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
  ], [h, p]), Qe = (c) => {
    if (le(!1), c.key === "skills") {
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
    c.key === "logout" && ce();
  }, at = (c) => c.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(wr, { size: 14 }), danger: !0 }] : [], dt = (c, A = C) => {
    const T = [];
    return A.rename && T.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(sn, { size: 14 }) }), A.share && T.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(ln, { size: 14 }) }), A.pin && T.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(jt, { size: 14 })
    }), T;
  }, Ve = (c, A, T = {}) => {
    const L = T.actions ?? C, ve = T.onMenuOpenIdChange ?? b, Te = !!(L.rename || L.share || L.pin || L.delete), Me = T.showTaskBadge !== !1 && ir(c);
    return !Te && !Me ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${Me ? "ml-6" : "ml-2"}`, children: [
      Me && !A && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Te && /* @__PURE__ */ e(
        At,
        {
          open: A,
          onOpenChange: (Se) => ve(Se ? c.id : null),
          placement: "bottom-end",
          width: T.width ?? Math.max(140, Math.min(176, z - 56)),
          portal: T.portal,
          trigger: /* @__PURE__ */ e(an, { size: 14 }),
          onTriggerClick: (Se) => {
            Se.stopPropagation();
          },
          items: dt(c, L),
          footerItems: at(L),
          onItemClick: (Se, De) => {
            if (De.stopPropagation(), Se.key === "rename") {
              ze(c), ve(null);
              return;
            }
            if (Se.key === "share") {
              I ? I(c.id) : u(`/chat/${c.id}?share=1`), ve(null);
              return;
            }
            if (Se.key === "pin") {
              ge(c.id), ve(null);
              return;
            }
            if (Se.key === "delete") {
              M(c.id), ve(null);
              return;
            }
            ve(null);
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
    return c ? $.find((A) => A.id === c[1]) ?? null : null;
  }, [$, t]), Ke = be(
    () => $.filter((c) => c.isPinned),
    [$]
  ), st = be(
    () => $.filter((c) => !c.isPinned),
    [$]
  ), Xe = be(
    () => re === "time" ? Ke.slice(0, or) : Ke,
    [Ke, re]
  ), a = be(() => {
    if (re !== "time") return [];
    const c = Math.max(or - Xe.length, 0);
    return st.slice(0, c);
  }, [re, st, Xe.length]), d = be(
    () => Xe.length + a.length,
    [Xe.length, a.length]
  ), F = re === "time" && $.length > d, _ = be(() => new Map(n.map((c) => [c.id, c.name])), [n]), oe = V.trim().toLowerCase(), ne = be(() => oe ? $.filter((c) => {
    const A = c.projectId ? _.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${A} ${c.date}`.toLowerCase().includes(oe);
  }) : $, [$, oe, _]);
  we(() => {
    if (!rt) return;
    const c = rt.projectId ?? "unassigned";
    X((A) => A[c] !== !1 ? A : { ...A, [c]: !0 });
  }, [rt]);
  const de = () => {
    te(""), fe(!0);
  }, ye = () => {
    fe(!1), g(null), Ee(), D(!1), ie.current !== null && (window.clearTimeout(ie.current), ie.current = null);
  }, Ie = (c) => {
    fe(!1), g(null), u(`/chat/${c}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: Q ? z : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${Q ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: z, minWidth: z },
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
                      onClick: () => U(!1),
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
                    onScroll: He,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${xe ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Xe.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Xe.map((c) => {
                          const A = t === `/chat/${c.id}`, T = w === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ce(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${R === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : A ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ee(c, re !== "time"),
                                R !== c.id && Ve(c, T)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      re === "project" && n.map((c) => {
                        const A = $.filter((L) => L.projectId === c.id && !L.isPinned), T = x[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => me(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: T ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          T && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: A.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : A.map((L) => {
                            const ve = t === `/chat/${L.id}`, Te = w === L.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ce(L.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${R === L.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ve ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ee(L),
                                  R !== L.id && Ve(L, Te)
                                ]
                              }
                            ) }, L.id);
                          }) })
                        ] }, c.id);
                      }),
                      re === "project" && (() => {
                        const c = $.filter((T) => !T.projectId && !T.isPinned);
                        if (c.length === 0) return null;
                        const A = x.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => me("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: A ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          A && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((T) => {
                            const L = t === `/chat/${T.id}`, ve = w === T.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ce(T.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${R === T.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : L ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ee(T),
                                  R !== T.id && Ve(T, ve)
                                ]
                              }
                            ) }, T.id);
                          }) })
                        ] });
                      })(),
                      re === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        a.map((c) => {
                          const A = t === `/chat/${c.id}`, T = w === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ce(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${R === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : A ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ee(c),
                                R !== c.id && Ve(c, T)
                              ]
                            }
                          ) }, c.id);
                        }),
                        F && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: de,
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
                i && !qe && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(rn, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
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
                    open: se,
                    onOpenChange: le,
                    placement: "top-start",
                    width: z - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: s.avatarUrl ? /* @__PURE__ */ e("img", { src: s.avatarUrl, alt: `${s.name}头像`, className: "h-full w-full object-cover" }) : s.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: s.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(nn, { size: 18 }) })
                    ] }),
                    items: Ue,
                    onItemClick: Qe,
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
              onMouseDown: et,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${Q ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof m == "function" ? m({ isSidebarOpen: Q, setIsSidebarOpen: U, chats: $, setChats: G, setAiUsageWarningActive: $e }) : m }) }) }),
    /* @__PURE__ */ e(
      Ut,
      {
        visible: he,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: ye,
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
                value: V,
                onChange: (c) => te(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          ne.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: _e,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${J ? "is-scrolling is-scrolling-thin" : ""}`,
              children: ne.map((c) => {
                const A = c.projectId ? _.get(c.projectId) ?? "未分组" : "未分组", T = ir(c), L = k === c.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => Ie(c.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          ee(c, c.isPinned),
                          T && R !== c.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: A }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: c.date })
                        ] })
                      ] }),
                      R !== c.id && Ve(c, L, {
                        actions: { rename: !0, pin: !0, delete: !0 },
                        portal: !0,
                        showTaskBadge: !1,
                        width: 160,
                        onMenuOpenIdChange: g
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
  skillOptions: f,
  fileOptions: v,
  quickPrompts: p,
  uploadAccept: h,
  validateUploadFile: C,
  onUploadValidationError: u,
  onSelectProject: N,
  onCreateProject: S,
  onOpenSidebar: W,
  onSelectQuickPrompt: j,
  onSend: I
}) {
  const [Y, Q] = y(!1), [U, z] = y(!1), [ae, K] = y(""), H = ue(null), P = ue(null), Z = be(
    () => t.find((w) => w.id === n) ?? null,
    [t, n]
  ), x = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !Z
    },
    ...t.map((w) => ({
      key: w.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: w.name }),
      active: (Z == null ? void 0 : Z.id) === w.id
    }))
  ], [t, Z]), X = be(() => S ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Nr, { size: 16 }) }] : [], [S]), se = () => {
    z(!1), K("");
  }, le = (w) => {
    if (w.key === "create") {
      z(!0), K("");
      return;
    }
    const b = w.key === "none" ? null : String(w.key);
    N(b), Q(!1);
  }, $ = () => {
    const w = ae.trim();
    if (!w) return;
    const b = t.find(
      (k) => k.name.trim().toLowerCase() === w.toLowerCase()
    );
    b ? N(b.id) : S == null || S(w), se(), Q(!1);
  };
  we(() => {
    if (!U) return;
    const w = (b) => {
      var g, re;
      const k = b.target;
      (g = P.current) != null && g.contains(k) || (re = H.current) != null && re.contains(k) || (se(), Q(!1));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [U]);
  const G = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: H, className: "relative", children: U && /* @__PURE__ */ e(
        "div",
        {
          ref: P,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Cr,
                {
                  value: ae,
                  onChange: (w) => K(w.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Oe, { type: "secondary", size: "small", onClick: se, children: "取消" }),
              /* @__PURE__ */ e(
                Oe,
                {
                  type: "primary",
                  size: "small",
                  onClick: $,
                  disabled: !ae.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Ar,
        {
          onSend: I,
          disabled: l,
          autoFocus: o,
          skillOptions: f,
          fileOptions: v,
          uploadAccept: h,
          validateUploadFile: C,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            At,
            {
              open: Y,
              onOpenChange: (w) => {
                !w && U || (Q(w), w ? z(!1) : se());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: Z ? Z.name : "工作项目" }),
                /* @__PURE__ */ e(zt, { size: 14 })
              ] }),
              items: x,
              footerItems: X,
              onItemClick: le,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(
      Er,
      {
        onSelect: j ?? I,
        prompts: p,
        disabled: l
      }
    )
  ] });
  return s ? G : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      va,
      {
        isSidebarOpen: m,
        onOpenSidebar: W ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: G })
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
`, Xa = `
  <span class="chatui-selection-block-type-current">${Wt}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, cr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, Ga = `
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
  attachments: f = [],
  attachmentAccept: v,
  attachmentUnavailableHint: p,
  saving: h = !1,
  saveError: C,
  layout: u = "page",
  showHeaderActions: N = !0,
  onTitleChange: S,
  onMarkdownChange: W,
  onUploadAttachments: j,
  onDeleteAttachment: I,
  onSave: Y,
  onClose: Q
}) {
  const U = ue(null), z = ue(null), ae = ue(n), K = ue(W), [H, P] = y(!1), [Z, x] = y(null), [X, se] = y(""), le = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  we(() => {
    K.current = W;
  }, [W]), we(() => {
    const w = U.current;
    if (!w) return;
    const b = /* @__PURE__ */ new Map(), k = new wt({
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
              icon: Xa,
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
              a.build().flatMap((A) => A.items).map((A) => [A.key, A])
            ), F = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), _ = (A) => {
              const T = A.get(Nt), L = q, Te = (L != null && L.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? L : L == null ? void 0 : L.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (L instanceof HTMLElement ? L : null);
              if (!Te) return T;
              try {
                const Me = T.posAtDOM(Te, 0), Se = T.state.doc.resolve(
                  Math.min(
                    Math.max(Me, 0),
                    T.state.doc.content.size
                  )
                );
                T.dispatch(
                  T.state.tr.setSelection(
                    Yt.near(Se)
                  )
                );
              } catch {
              }
              return T;
            }, oe = (A) => {
              const T = _(A), L = kt.type(A), ve = (Se) => {
                const { $from: De } = T.state.selection;
                for (let We = De.depth; We > 0; We -= 1)
                  if (De.node(We).type.name === Se) return !0;
                return !1;
              };
              for (let Se = 0; Se < 10 && !(!ve(L.name) || !mn(L)(
                T.state,
                T.dispatch
              )); Se += 1)
                ;
              for (let Se = 0; Se < 10 && !(!ve("blockquote") || !un(T.state, T.dispatch)); Se += 1)
                ;
              const Te = hn.type(A), Me = T.state.selection.$from.parent;
              Me.isTextblock && Me.type !== Te && A.get(dn).call(fn.key, {
                nodeType: Te
              });
            };
            b.set(
              "paragraph",
              oe
            );
            const ne = (A) => {
              const T = _(A), { selection: L } = T.state, ve = kt.type(A), { $from: Te } = L;
              let Me = -1;
              for (let De = Te.depth; De > 0; De -= 1)
                if (Te.node(De).type.name === ve.name) {
                  Me = De;
                  break;
                }
              if (Me > 0) {
                const De = Me - 1, We = De > 0 && Te.node(De).childCount === 1 ? De : Me;
                T.dispatch(
                  T.state.tr.delete(
                    Te.before(We),
                    Te.after(We)
                  )
                );
                return;
              }
              if (!L.empty) {
                T.dispatch(
                  T.state.tr.delete(L.from, L.to)
                );
                return;
              }
              const Se = Math.min(1, Te.depth);
              Se < 1 || T.dispatch(
                T.state.tr.delete(
                  Te.before(Se),
                  Te.after(Se)
                )
              );
            }, de = (A, T, L) => {
              const ve = d.get(T);
              if (!ve) return;
              const { key: Te, ...Me } = ve, Se = (L == null ? void 0 : L.icon) ?? Me.icon, De = [
                ht(T),
                L == null ? void 0 : L.iconClass
              ].filter(Boolean).join(" "), We = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(T), ut = F.has(T) ? (Ze) => {
                var Kt;
                if (oe(Ze), !We) {
                  if (T === "quote") {
                    const nt = Ze.get(Nt), { $from: mt } = nt.state.selection, yt = mt.parent, Rt = mt.before(mt.depth), Xt = nt.state.schema.nodes.blockquote;
                    if (!Xt) return;
                    const _r = Xt.create(null, yt), vt = nt.state.tr.replaceWith(
                      Rt,
                      Rt + yt.nodeSize,
                      _r
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
                  (Kt = Me.onRun) == null || Kt.call(Me, Ze);
                  return;
                }
                const xt = Ze.get(Nt), Pr = T === "ordered-list" ? Qt.type(Ze) : Zt.type(Ze);
                if (!pn(Pr)(
                  xt.state,
                  xt.dispatch
                ) || T !== "task-list") return;
                const Br = kt.type(Ze), { $from: It } = xt.state.selection;
                for (let nt = It.depth; nt > 0; nt -= 1) {
                  const mt = It.node(nt);
                  if (mt.type !== Br) continue;
                  const yt = It.before(nt);
                  xt.dispatch(
                    xt.state.tr.setNodeMarkup(yt, void 0, {
                      ...mt.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Me.onRun;
              F.has(T) && ut && b.set(
                T,
                ut
              ), A.addItem(T, {
                ...Me,
                label: (L == null ? void 0 : L.label) ?? Me.label,
                icon: Mt(Se, De),
                onRun: ut
              });
            };
            a.clear();
            const ye = a.addGroup("basic", "基础");
            ye.addItem("paragraph", {
              label: "正文",
              icon: Mt(
                Wt,
                ht("paragraph")
              ),
              onRun: oe
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
                icon: Ga,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: A, icon: T, label: L }) => {
              de(ye, A, { icon: T, label: L });
            });
            const Ie = a.addGroup("common", "常用");
            de(Ie, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), de(Ie, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), a.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Mt(
                Ya,
                "chatui-document-menu-action-delete"
              ),
              onRun: ne
            });
          }
        }
      }
    });
    k.on((a) => {
      a.markdownUpdated((d, F, _) => {
        F !== _ && K.current(F);
      });
    });
    const g = w.ownerDocument;
    let re = "", Ne = null, xe = null, E = !0, R = !1, q = null, ke = null, pe = null, he = null, fe = null, V = null, te = null, J = null;
    const D = (a) => {
      const d = a == null ? void 0 : a.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Pe = () => w.querySelector(".ProseMirror"), $e = (a) => {
      const d = Pe();
      if (!a || !(d != null && d.contains(a))) return null;
      const F = a.closest(".milkdown-list-item-block");
      if (F && d.contains(F)) return F;
      let _ = a;
      for (; _ != null && _.parentElement && _.parentElement !== d; )
        _ = _.parentElement;
      return !_ || _.parentElement !== d || _.classList.contains("prosemirror-virtual-cursor") ? null : _;
    }, qe = () => {
      const a = Pe();
      return a ? Array.from(a.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const F = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return F.length ? F : [d];
      }) : [];
    }, Be = (a) => {
      var _;
      const d = qe(), F = d.map((oe) => ({ block: oe, rect: oe.getBoundingClientRect() })).filter(({ rect: oe }) => a >= oe.top && a <= oe.bottom).sort((oe, ne) => oe.rect.height - ne.rect.height);
      return F[0] ? F[0].block : ((_ = d.map((oe) => {
        const ne = oe.getBoundingClientRect(), de = Math.min(
          Math.abs(a - ne.top),
          Math.abs(a - ne.bottom)
        );
        return { block: oe, distance: de };
      }).sort((oe, ne) => oe.distance - ne.distance)[0]) == null ? void 0 : _.block) ?? null;
    }, i = (a, d = E) => {
      var c, A, T, L;
      const F = q, _ = F ? D(F) : a, oe = F ? F.matches("p") : d, ne = g.querySelector(
        ".milkdown-slash-menu"
      );
      (A = (c = ne == null ? void 0 : ne.querySelector(`svg.${ht("paragraph")}`)) == null ? void 0 : c.closest("li")) == null || A.toggleAttribute(
        "hidden",
        _ === null && oe
      ), ne == null || ne.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (ve) => ve.removeAttribute("data-chatui-selected")
      ), _ && ((L = (T = ne == null ? void 0 : ne.querySelector(`svg.${ht(_)}`)) == null ? void 0 : T.closest("li")) == null || L.setAttribute("data-chatui-selected", "true"));
      const de = g.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!de) return;
      re || (re = de.innerHTML);
      const ye = _ ? ne == null ? void 0 : ne.querySelector(
        `svg.${ht(_)}`
      ) : null, Ie = _ ?? "default";
      de.dataset.chatuiBlockType !== Ie && (de.innerHTML = (ye == null ? void 0 : ye.outerHTML) ?? re, de.dataset.chatuiBlockType = Ie);
    }, B = (a) => {
      a !== xe && (xe = a, Ne = D(a), E = (a == null ? void 0 : a.matches("p")) ?? !1), i(Ne, E);
    }, O = () => {
      var F;
      const a = (F = g.getSelection()) == null ? void 0 : F.anchorNode, d = a instanceof Element ? a : a == null ? void 0 : a.parentElement;
      B($e(d ?? null));
    }, ie = (a) => {
      const { $from: d } = a.get(Nt).state.selection, F = kt.type(a), _ = Qt.type(a), oe = Zt.type(a);
      for (let de = d.depth; de > 0; de -= 1) {
        const ye = d.node(de);
        if (ye.type === F && typeof ye.attrs.checked == "boolean")
          return "task-list";
      }
      for (let de = d.depth; de > 0; de -= 1) {
        const ye = d.node(de);
        if (ye.type === _) return "ordered-list";
        if (ye.type === oe) return "bullet-list";
        if (ye.type.name === "blockquote") return "quote";
      }
      const ne = d.parent;
      if (ne.type === xn.type(a)) {
        const de = Number(ne.attrs.level);
        if (de === 1 || de === 2 || de === 3)
          return `h${de}`;
      }
      return ne.type.name === "code_block" ? "code" : "paragraph";
    }, ce = (a) => {
      var d;
      return a === "paragraph" ? Mt(
        Wt,
        "chatui-selection-block-type-paragraph"
      ) : a === "h1" ? pt(1) : a === "h2" ? pt(2) : a === "h3" ? pt(3) : a === "code" ? cr : ((d = g.querySelector(
        `.milkdown-slash-menu svg.${ht(a)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${a === "quote" ? "“" : "•"}</text></svg>`;
    }, me = () => {
      var a;
      return ((a = g.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : a.closest(".toolbar-item")) ?? null;
    }, M = () => {
      const a = me();
      if (!a) return;
      a.classList.add("chatui-selection-block-type-trigger"), a.setAttribute("aria-haspopup", "menu"), a.setAttribute("aria-label", "切换当前块类型");
      const d = a.closest(".milkdown-toolbar"), F = a.previousElementSibling instanceof HTMLElement && a.previousElementSibling.classList.contains("divider") ? a.previousElementSibling : null;
      d && d.firstElementChild !== a && (d.prepend(a), F && a.after(F));
      let _ = "paragraph";
      k.editor.action((ne) => {
        _ = ie(ne);
      }), a.dataset.chatuiBlockType = _;
      const oe = a.querySelector(
        ".chatui-selection-block-type-current"
      );
      oe && (oe.innerHTML = ce(_)), V == null || V.querySelectorAll("[data-block-type]").forEach((ne) => {
        ne.dataset.active = ne.dataset.blockType === _ ? "true" : "false";
      });
    }, ge = () => {
      var a;
      te !== null && (window.clearTimeout(te), te = null), V && (V.dataset.show = "false"), (a = me()) == null || a.setAttribute("aria-expanded", "false");
    }, ze = () => {
      te !== null && window.clearTimeout(te), te = window.setTimeout(
        ge,
        120
      );
    }, Ee = () => {
      if (V) return V;
      const a = g.createElement("div");
      return a.className = "chatui-selection-block-type-menu", a.dataset.show = "false", a.setAttribute("role", "menu"), Qa.forEach(({ key: d, label: F }) => {
        const _ = g.createElement("button");
        _.type = "button", _.dataset.blockType = d, _.setAttribute("role", "menuitem"), _.innerHTML = `<span class="chatui-selection-block-type-option-icon">${ce(d)}</span><span>${F}</span>`, _.addEventListener("pointerdown", (oe) => {
          oe.preventDefault(), oe.stopPropagation(), k.editor.action((ne) => {
            var de;
            (de = b.get(d)) == null || de(ne);
          }), ge(), window.requestAnimationFrame(M);
        }), a.append(_);
      }), a.addEventListener("pointerenter", () => {
        te !== null && (window.clearTimeout(te), te = null);
      }), a.addEventListener("pointerleave", ze), g.body.append(a), V = a, a;
    }, je = () => {
      const a = me();
      if (!a) return;
      te !== null && (window.clearTimeout(te), te = null);
      const d = Ee();
      M(), d.dataset.show = "true", d.style.visibility = "hidden";
      const F = a.getBoundingClientRect(), _ = d.getBoundingClientRect(), oe = 6, ne = 8, de = F.top >= _.height + oe + ne, ye = Math.min(
        Math.max(F.left, ne),
        g.documentElement.clientWidth - _.width - ne
      ), Ie = de ? F.top - _.height - oe : F.bottom + oe;
      d.style.left = `${ye}px`, d.style.top = `${Ie}px`, d.style.visibility = "visible", d.dataset.placement = de ? "top" : "bottom", a.setAttribute("aria-expanded", "true");
    }, Je = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && je();
    }, Ce = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const F = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      F != null && F.closest(".chatui-selection-block-type-menu") || ze();
    }, ee = () => {
      window.requestAnimationFrame(M);
    }, et = () => {
      const a = ke, d = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (!a || !d || d.dataset.show !== "true") return;
      const F = d.getBoundingClientRect();
      if (!F.width || !F.height) return;
      const _ = a.getBoundingClientRect(), oe = g.defaultView, ne = (oe == null ? void 0 : oe.innerWidth) ?? g.documentElement.clientWidth, de = (oe == null ? void 0 : oe.innerHeight) ?? g.documentElement.clientHeight, ye = 12, Ie = 8, c = Math.max(
        ye,
        ne - F.width - ye
      ), A = Math.max(
        ye,
        de - F.height - ye
      ), T = (We) => Math.min(Math.max(We, ye), c), L = (We) => Math.min(Math.max(We, ye), A);
      let ve = "left", Te = _.left - F.width - Ie, Me = L(_.top);
      if (Te < ye) {
        const We = _.top - Ie - ye, ut = de - _.bottom - Ie - ye, Ze = ut >= F.height || ut >= We;
        ve = Ze ? "bottom" : "top", Te = T(_.left), Me = L(Ze ? _.bottom + Ie : _.top - F.height - Ie);
      }
      const Se = `${Te}px`, De = `${Me}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== Se && d.style.setProperty("--chatui-block-menu-left", Se), d.style.getPropertyValue("--chatui-block-menu-top") !== De && d.style.setProperty("--chatui-block-menu-top", De), d.dataset.chatuiPlacement = ve;
    }, He = () => {
      const a = g.querySelector(
        ".milkdown-slash-menu"
      );
      a && (a.style.removeProperty("--chatui-block-menu-left"), a.style.removeProperty("--chatui-block-menu-top"), delete a.dataset.chatuiPlacement);
    }, _e = (a) => {
      a !== fe && (fe == null || fe.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), fe = a, fe == null || fe.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Ye = () => {
      he !== null && window.cancelAnimationFrame(he), he = window.requestAnimationFrame(() => {
        he = null, et();
      });
    }, Ue = (a) => {
      g.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        a && d.contains(a) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, Qe = () => {
      ke = null, R = !1, q = null, _e(null), k.editor.action((a) => {
        a.get("menuAPICtx").hide();
      }), He(), Ue(null);
    }, at = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (F) {
        const ne = F.getBoundingClientRect(), de = ne.width > 0 && ne.height > 0, ye = a.clientX >= ne.left && a.clientX <= ne.right && a.clientY >= ne.top && a.clientY <= ne.bottom;
        if (de) {
          if (ye) {
            _e(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), R = !0;
            return;
          }
          if (_e(null), d != null && d.closest(".milkdown-block-handle")) return;
          const Ie = Pe(), c = d && (Ie != null && Ie.contains(d)) ? $e(d) ?? Be(a.clientY) : null;
          if (c && q && c !== q) {
            Qe();
            return;
          }
          if (c === q) return;
          R && Qe();
          return;
        }
        R = !1, _e(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        i(Ne);
        return;
      }
      const _ = Pe();
      if (!d || !(_ != null && _.contains(d))) return;
      const oe = $e(d) ?? Be(a.clientY);
      B(oe);
    }, dt = (a) => {
      var ye;
      const d = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (ke === a && (d == null ? void 0 : d.dataset.show) === "true") {
        Ue(a), Ye();
        return;
      }
      const F = a.getBoundingClientRect(), _ = Be(
        F.top + F.height / 2
      );
      _ && B(_);
      const oe = Ne, ne = E;
      ke = a, q = _ ?? xe, Ue(a);
      const de = ((ye = g.defaultView) == null ? void 0 : ye.PointerEvent) ?? PointerEvent;
      a.dispatchEvent(
        new de("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), a.dispatchEvent(
        new de("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        i(oe, ne), Ye();
      }, 0);
    }, Ve = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (F) {
        dt(F);
        return;
      }
      _e(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, tt = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!F) return;
      const _ = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      if (_ && F.contains(_)) return;
      const oe = _ == null ? void 0 : _.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      _e(oe ?? null);
    }, rt = (a) => {
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      F && dt(F);
    }, Ke = (a) => {
      if (!a.isTrusted) return;
      const d = a.target instanceof Element ? a.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), _ = g.querySelector(
        ".milkdown-slash-menu"
      );
      F && ke === F && (_ == null ? void 0 : _.dataset.show) === "true" && (a.preventDefault(), a.stopImmediatePropagation());
    }, st = (a) => {
      a.key === "/" && window.setTimeout(O, 0);
    };
    g.addEventListener("pointermove", at), g.addEventListener("pointerover", Ve), g.addEventListener("pointerout", tt), g.addEventListener(
      "pointerover",
      Je
    ), g.addEventListener(
      "pointerout",
      Ce
    ), g.addEventListener(
      "selectionchange",
      ee
    ), g.addEventListener(
      "pointerdown",
      Ke,
      !0
    ), g.addEventListener(
      "pointerup",
      Ke,
      !0
    ), g.addEventListener("click", rt), w.addEventListener("keyup", st);
    const Xe = k.create();
    return Xe.then(() => {
      var F;
      (F = w.querySelector(".ProseMirror")) == null || F.focus();
      const a = g.querySelector(
        ".milkdown-slash-menu"
      );
      a && (pe = new MutationObserver(() => {
        if (a.dataset.show === "true" && ke) {
          Ue(ke), Ye();
          return;
        }
        a.dataset.show !== "true" && (ke = null, q = null, _e(null), He(), Ue(null));
      }), pe.observe(a, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = g.querySelector(
        ".milkdown-toolbar"
      );
      d && (J = new MutationObserver(() => {
        d.dataset.show === "true" ? M() : ge();
      }), J.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), O(), M();
    }), () => {
      g.removeEventListener("pointermove", at), g.removeEventListener(
        "pointerover",
        Ve
      ), g.removeEventListener("pointerout", tt), g.removeEventListener(
        "pointerover",
        Je
      ), g.removeEventListener(
        "pointerout",
        Ce
      ), g.removeEventListener(
        "selectionchange",
        ee
      ), g.removeEventListener(
        "pointerdown",
        Ke,
        !0
      ), g.removeEventListener(
        "pointerup",
        Ke,
        !0
      ), g.removeEventListener("click", rt), w.removeEventListener("keyup", st), ge(), V == null || V.remove(), V = null, Xe.then(() => {
        pe == null || pe.disconnect(), J == null || J.disconnect(), he !== null && window.cancelAnimationFrame(he), k.destroy();
      });
    };
  }, []);
  const $ = async (w) => {
    const b = Array.from(w.target.files ?? []);
    if (w.target.value = "", !(!b.length || !j)) {
      P(!0), se("");
      try {
        await j(b);
      } catch (k) {
        se(
          k instanceof Error ? k.message : "附件上传失败"
        );
      } finally {
        P(!1);
      }
    }
  }, G = async (w) => {
    if (I) {
      x(w), se("");
      try {
        await I(w);
      } catch (b) {
        se(
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
        Oe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: h,
          onClick: Q,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Oe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: h,
          onClick: Y,
          children: h ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${lt.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          C && /* @__PURE__ */ e("div", { className: lt.saveError, children: C }),
          /* @__PURE__ */ r("div", { className: lt.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${le}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (w) => S(w.target.value),
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
                  ref: U,
                  className: `${lt.milkdownHost} ${zr.editor} ${le} chatui-project-document-editor`,
                  style: Ka
                }
              ),
              j && /* @__PURE__ */ e(
                "input",
                {
                  ref: z,
                  type: "file",
                  multiple: !0,
                  accept: v,
                  className: "hidden",
                  onChange: (w) => {
                    $(w);
                  }
                }
              ),
              /* @__PURE__ */ e(
                $r,
                {
                  attachments: f,
                  className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: H,
                  deletingAttachmentId: Z,
                  unavailableHint: p,
                  error: X,
                  onRequestUpload: j ? () => {
                    var w;
                    return (w = z.current) == null ? void 0 : w.click();
                  } : void 0,
                  onDeleteAttachment: I ? (w) => {
                    G(w);
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
  onInstall: f,
  onUninstall: v,
  onRetry: p
}) {
  const [h, C] = y("installed"), [u, N] = y(""), [S, W] = y(!1), [j, I] = y([]), [Y, Q] = y(null), U = be(() => new Set(s), [s]), z = be(() => {
    const x = u.trim().toLowerCase();
    return n.filter((X) => h === "installed" !== X.installed ? !1 : x ? [X.name, X.source, X.description, ...X.tags].join(" ").toLowerCase().includes(x) : !0);
  }, [h, u, n]), ae = (x) => {
    C(x), W(!1), I([]);
  }, K = () => {
    W((x) => !x), I([]);
  }, H = (x) => I((X) => X.includes(x) ? X.filter((se) => se !== x) : [...X, x]), P = (x) => x.installed ? v([x.id]) : f([x.id]), Z = () => {
    j.length && (h === "installed" ? v(j) : f(j), I([]), W(!1));
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
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${S ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
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
              /* @__PURE__ */ e("input", { type: "checkbox", checked: S, onChange: (x) => {
                W(x.target.checked), I([]);
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
        !l && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (x, X) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, X)) }),
        !l && !o && z.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": s.length > 0, children: z.map((x) => {
          const X = j.includes(x.id), se = U.has(x.id), le = X ? "border-skillSelectedBorder bg-skillSelectedSurface" : Y === x.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${le}`, onMouseEnter: () => Q(x.id), onMouseLeave: () => Q(($) => $ === x.id ? null : $), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: x.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: x.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Ja[x.riskLevel]}`, children: Za[x.riskLevel] }),
                S && /* @__PURE__ */ e("button", { type: "button", onClick: () => H(x.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": X ? `取消选择 ${x.name}` : `选择 ${x.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${X ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: x.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: x.tags.map(($) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: $ }, `${x.id}-${$}`)) }),
              !S && /* @__PURE__ */ e("button", { type: "button", disabled: se, onClick: () => P(x), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${Y === x.id || se ? "inline-flex" : "hidden"} ${x.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: se ? "处理中..." : x.installed ? "卸载" : "安装" })
            ] })
          ] }, x.id);
        }) }) : !l && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    S && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        j.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: K, disabled: s.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: Z, disabled: !j.length || s.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: s.length > 0 ? "处理中..." : h === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Es as A,
  Yn as B,
  Pa as C,
  vs as D,
  Ba as E,
  As as F,
  sa as G,
  $r as H,
  Ar as I,
  Bs as J,
  Lr as K,
  Ls as L,
  Mr as M,
  Ms as N,
  Ss as O,
  Ta as P,
  Er as Q,
  zs as R,
  _s as S,
  qt as T,
  Ea as U,
  Aa as V,
  At as a,
  Oe as b,
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
