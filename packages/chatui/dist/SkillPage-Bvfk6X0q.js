import { jsxs as r, Fragment as Ue, jsx as e } from "react/jsx-runtime";
import De, { useMemo as ge, useState as v, useRef as me, useCallback as Le, useEffect as ye, useLayoutEffect as Lt, forwardRef as Wt, useId as pr } from "react";
import Pe from "classnames";
import { Check as et, Copy as pt, RefreshCcw as hr, ThumbsUp as fr, ThumbsDown as xr, ArrowUpRight as br, Info as gr, Ban as yr, TriangleAlert as St, CircleCheckBig as ct, ShieldCheck as Ut, CircleHelp as Vt, FileText as ht, LoaderCircle as Kt, Puzzle as Ot, AtSign as Xt, AlertCircle as vr, Paperclip as Gt, ArrowRight as Yt, ChevronDown as dt, ChevronRight as ot, CircleX as Qt, Sparkles as Zt, Loader2 as Xe, Clock3 as ft, Search as Ze, BookOpen as At, ListChecks as wr, Globe as Nr, Minus as kr, Menu as Jt, Upload as Tr, Trash2 as er, CheckCircle2 as at, SearchX as Cr, FlaskConical as Sr, X as nt, Plus as tr, Square as Mr, Send as $r, UserPlus as zr, Building2 as Lr, Folder as bt, PanelLeftClose as Ar, SquarePen as Pr, AlertTriangle as Er, Settings as _r, Pin as gt, MoreHorizontal as Br, Pencil as Ir, Share2 as Rr } from "lucide-react";
import rr from "react-markdown";
import nr from "remark-gfm";
import jr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as Dr } from "react-dom";
import { Crepe as yt } from "@milkdown/crepe";
import { editorViewCtx as vt, commandsCtx as Fr } from "@milkdown/kit/core";
import { lift as Hr } from "@milkdown/kit/prose/commands";
import { wrapInList as qr, liftListItem as Wr } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Pt } from "@milkdown/kit/prose/state";
import { orderedListSchema as Ur, bulletListSchema as Vr, listItemSchema as wt, paragraphSchema as Kr, setBlockTypeCommand as Or } from "@milkdown/kit/preset/commonmark";
const Xr = "_button_3tg6r_1", Gr = "_primary_3tg6r_5", Yr = "_disabled_3tg6r_9", Qr = "_secondary_3tg6r_17", Zr = "_ghost_3tg6r_25", Jr = "_danger_3tg6r_33", en = "_small_3tg6r_41", tn = "_medium_3tg6r_45", rn = "_large_3tg6r_49", nn = "_roundedSquare_3tg6r_53", an = "_roundedSmall_3tg6r_57", sn = "_roundedMedium_3tg6r_61", ln = "_roundedLarge_3tg6r_62", on = "_roundedFull_3tg6r_66", cn = "_loadingSpinner_3tg6r_67", dn = "_loading_3tg6r_67", un = "_fullWidth_3tg6r_90", mn = "_icon_3tg6r_94", je = {
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
  primary: je.primary,
  secondary: je.secondary,
  ghost: je.ghost,
  danger: je.danger
}, hn = {
  small: je.small,
  medium: je.medium,
  large: je.large
}, fn = {
  square: je.roundedSquare,
  small: je.roundedSmall,
  medium: je.roundedMedium,
  large: je.roundedLarge,
  full: je.roundedFull
}, Fe = De.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: s,
    loading: l,
    disabled: a = !1,
    children: u,
    icon: f,
    iconPosition: k = "left",
    className: d,
    fullWidth: m = !1,
    rounded: p = "medium",
    onClick: h,
    ...N
  }, E) => {
    const j = s ?? l ?? !1, z = a || j, _ = ge(() => j ? /* @__PURE__ */ r(Ue, { children: [
      /* @__PURE__ */ e("span", { className: je.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: u })
    ] }) : f ? /* @__PURE__ */ r(Ue, { children: [
      k === "left" && /* @__PURE__ */ e("span", { className: je.icon, children: f }),
      u && /* @__PURE__ */ e("span", { children: u }),
      k === "right" && /* @__PURE__ */ e("span", { className: je.icon, children: f })
    ] }) : u, [u, j, f, k]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: E,
        className: Pe(
          je.button,
          pn[t],
          hn[n],
          fn[p],
          {
            [je.fullWidth]: m,
            [je.loading]: j,
            [je.disabled]: z
          },
          d
        ),
        disabled: z,
        onClick: h,
        ...N,
        children: _
      }
    );
  }
);
Fe.displayName = "BaseButton";
const xn = { small: "h-8", medium: "h-9", large: "h-14" }, ar = De.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: s,
    defaultValue: l,
    disabled: a = !1,
    readOnly: u = !1,
    error: f = !1,
    size: k = "medium",
    prefix: d,
    suffix: m,
    prefixIcon: p,
    suffixIcon: h,
    onChange: N,
    onFocus: E,
    onBlur: j,
    onClear: z,
    className: _,
    containerClassName: D,
    clearable: V = !1,
    label: B,
    helperText: $,
    ...K
  }, W) => {
    const [P, M] = v(!1), O = me(null), x = Le((I) => {
      O.current = I, typeof W == "function" ? W(I) : W && (W.current = I);
    }, [W]), q = Le(() => {
      var w, g;
      const I = O.current;
      I && ((g = (w = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : w.set) == null || g.call(I, ""), I.dispatchEvent(new Event("input", { bubbles: !0 })), I.focus(), z == null || z());
    }, [z]), ne = ge(
      () => {
        var I;
        return V && P && String(s ?? ((I = O.current) == null ? void 0 : I.value) ?? "").length > 0;
      },
      [V, P, s]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      B && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: B }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Pe(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            xn[k],
            !a && !f && "hover:border-controlBorder",
            P && !a && !f && "border-primary ring-2 ring-brandFocus",
            f && "border-danger",
            f && P && "ring-2 ring-dangerFocus",
            a && "cursor-not-allowed bg-surfaceMuted",
            D
          ),
          children: [
            (d || p) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: d || p }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: x,
                type: t,
                placeholder: n,
                value: s,
                defaultValue: l,
                disabled: a,
                readOnly: u,
                className: Pe("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", _),
                onFocus: (I) => {
                  M(!0), E == null || E(I);
                },
                onBlur: (I) => {
                  M(!1), j == null || j(I);
                },
                onChange: N,
                ...K
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              ne && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (I) => I.preventDefault(), onClick: q, "aria-label": "清空", children: "✕" }),
              m || h
            ] })
          ]
        }
      ),
      $ && /* @__PURE__ */ e("div", { className: Pe("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: $ })
    ] });
  }
);
ar.displayName = "BaseInput";
const bn = { small: "h-8", medium: "h-9", large: "h-14" }, gn = De.forwardRef(
  ({ options: t = [], value: n, defaultValue: s, placeholder: l, disabled: a = !1, error: u = !1, size: f = "medium", label: k, helperText: d, onChange: m, className: p, ...h }, N) => {
    const E = Le((j) => {
      const z = j.target.value, _ = t.find((D) => String(D.value) === z);
      m == null || m(z === "" ? "" : (_ == null ? void 0 : _.value) ?? z);
    }, [m, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      k && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: k }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: N,
            className: Pe(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              u && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              bn[f],
              p
            ),
            value: n ?? s ?? "",
            disabled: a,
            onChange: E,
            ...h,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((j) => /* @__PURE__ */ e("option", { value: j.value, disabled: j.disabled, children: j.label }, j.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      d && /* @__PURE__ */ e("div", { className: Pe("text-xs leading-6", u ? "text-danger" : "text-mutedText"), children: d })
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
  disabled: u = !1,
  className: f
}) {
  var h;
  const [k, d] = v(
    s ?? ((h = t[0]) == null ? void 0 : h.value) ?? ""
  ), m = n ?? k, p = (N) => {
    u || (n === void 0 && d(N), l == null || l(N));
  };
  return /* @__PURE__ */ e("div", { className: Pe(Qe.container, Sn[a], f), children: t.map((N) => {
    const E = m === N.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Pe(Qe.item, E && Qe.itemActive, u && Qe.itemDisabled),
        onClick: () => p(N.value),
        disabled: u,
        "aria-pressed": E,
        children: N.label
      },
      N.value
    );
  }) });
}
const Mn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, $n = De.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: s = !1, onChange: l, onError: a, maxSize: u, children: f, className: k, dragable: d = !0, placeholderTitle: m, placeholderDescription: p, placeholderIcon: h, maxCount: N }, E) => {
    const j = me(null), [z, _] = v(!1), D = Le((B) => {
      if (N && B.length > N) {
        a == null || a(new Error(`单次最多上传 ${N} 个文件`));
        return;
      }
      if (u) {
        for (const $ of Array.from(B))
          if ($.size > u) {
            a == null || a(new Error(`文件“${$.name}”超过大小限制（${Mn(u)}）`));
            return;
          }
      }
      l == null || l(B);
    }, [N, u, l, a]), V = () => {
      var B;
      s || (B = j.current) == null || B.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: E,
        className: Pe(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          z && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          s && "cursor-not-allowed opacity-60",
          k
        ),
        onClick: V,
        onKeyDown: (B) => {
          !s && (B.key === "Enter" || B.key === " ") && (B.preventDefault(), V());
        },
        onDragOver: (B) => {
          d && !s && (B.preventDefault(), _(!0));
        },
        onDragLeave: () => _(!1),
        onDrop: (B) => {
          d && !s && (B.preventDefault(), _(!1), D(B.dataTransfer.files));
        },
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        children: [
          /* @__PURE__ */ e("input", { ref: j, type: "file", accept: t, multiple: n, disabled: s, onChange: (B) => B.target.files && D(B.target.files), className: "hidden" }),
          f || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: h ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: m ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: p ?? "支持单文件或批量上传" })
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
}, Mt = ({
  visible: t,
  open: n = t,
  show: s = n,
  title: l,
  width: a = 520,
  centered: u = !0,
  destroyOnClose: f = !1,
  mask: k = !0,
  maskClosable: d = !0,
  okText: m = "确认",
  cancelText: p = "取消",
  confirmLoading: h = !1,
  okButtonProps: N,
  cancelButtonProps: E,
  onConfirm: j,
  onCancel: z,
  onClose: _,
  onOk: D,
  onDismiss: V,
  children: B,
  footer: $,
  className: K,
  bodyClassName: W
}) => {
  const P = s ?? !1, M = Le(async () => {
    try {
      j ? await j() : D && await D();
    } catch (q) {
      console.error("Modal confirm error:", q);
    }
  }, [j, D]), O = Le(() => {
    z ? z() : _ ? _() : V == null || V();
  }, [z, _, V]), x = ge(() => {
    if ($ === null) return null;
    if ($) return $;
    const { type: q, ...ne } = E ?? {}, { type: I, ...w } = N ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Fe, { type: "secondary", size: "medium", onClick: O, ...ne, children: p }),
      /* @__PURE__ */ e(Fe, { type: "primary", size: "medium", isLoading: h, onClick: M, ...w, children: h ? "加载中..." : m })
    ] });
  }, [E, p, h, $, O, M, N, m]);
  return !P && f || !P ? null : /* @__PURE__ */ r(Ue, { children: [
    k && /* @__PURE__ */ e("div", { className: Pe("fixed inset-0 z-[1000] bg-overlayMask", Et.maskAnimation), onClick: () => d && O(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Pe(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          u && "left-1/2 top-1/2",
          Et.modalAnimation,
          K
        ),
        style: { width: a },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: O, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Pe("min-h-20 p-5 text-primaryText", W), children: B }),
          x
        ]
      }
    )
  ] });
};
Mt.displayName = "BaseModal";
const An = ({ title: t, extra: n, children: s, hoverable: l = !1, loading: a = !1, bordered: u = !0, className: f, bodyClassName: k, onClick: d }) => /* @__PURE__ */ r(
  "div",
  {
    className: Pe(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      u && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      a && "pointer-events-none opacity-60",
      f
    ),
    onClick: d,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Pe("p-4 text-primaryText", (t || n) && "pt-1", k), children: s })
    ]
  }
);
An.displayName = "BaseCard";
const Pn = ({ columns: t, dataSource: n = [], rowKey: s = "id", loading: l = !1, bordered: a = !0, striped: u = !0, className: f, onRow: k }, d) => /* @__PURE__ */ r("div", { ref: d, className: Pe("relative w-full overflow-x-auto bg-surface", f), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: a ? "border-b border-lineSubtle" : void 0, children: t.map((m) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: m.width, textAlign: m.align }, children: m.title }, m.key || String(m.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((m, p) => {
      const h = String(typeof s == "string" ? m[s] ?? p : p);
      return /* @__PURE__ */ e("tr", { className: Pe(a && "border-b border-lineSoft last:border-b-0", u && "odd:bg-surface"), ...(k == null ? void 0 : k(m, p)) || {}, children: t.map((N) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: N.align }, children: N.render ? N.render(m[N.dataIndex], m, p) : String(m[N.dataIndex] ?? "") }, N.key || String(N.dataIndex))) }, h);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Oa = De.forwardRef(Pn), En = ({ current: t = 1, pageSize: n = 10, total: s = 0, onChange: l, showSizeChanger: a = !1, pageSizeOptions: u = [10, 20, 50, 100], onShowSizeChange: f, disabled: k = !1, className: d }) => {
  const m = ge(() => Math.ceil(s / n) || 1, [n, s]), p = Le((N) => f == null ? void 0 : f(1, Number(N.target.value)), [f]), h = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Pe("flex flex-wrap items-center justify-center gap-4 p-4", d), children: [
    /* @__PURE__ */ e("button", { type: "button", className: h, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: k || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      m,
      " 页，共 ",
      s,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: h, onClick: () => t < m && (l == null ? void 0 : l(t + 1)), disabled: k || t >= m, children: "下一页 →" }),
    a && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: p, disabled: k, children: u.map((N) => /* @__PURE__ */ r("option", { value: N, children: [
      N,
      " 条/页"
    ] }, N)) })
  ] });
};
En.displayName = "BasePagination";
const $t = ({ description: t = "暂无数据", image: n, children: s }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  s
] });
$t.displayName = "BaseEmpty";
const ut = ({ trigger: t, items: n, footerItems: s = [], open: l = !1, onOpenChange: a, onTriggerClick: u, onItemClick: f, placement: k = "bottom-start", width: d, portal: m = !1, className: p, triggerClassName: h, menuClassName: N, listClassName: E, footerClassName: j }) => {
  const z = me(null), _ = me(null), [D, V] = v({}), B = k.endsWith("end"), $ = k.startsWith("top");
  ye(() => {
    if (!l || !m || !z.current) return;
    const M = z.current.getBoundingClientRect();
    V({ position: "fixed", left: B ? M.right : M.left, top: $ ? M.top : M.bottom, transform: B ? "translateX(-100%)" : void 0 });
  }, [$, B, l, m, k]), ye(() => {
    !l || !m || !$ || !_.current || V((M) => ({ ...M, top: Number(M.top) - _.current.offsetHeight - 8 }));
  }, [$, l, m]), ye(() => {
    if (!l || !a) return;
    const M = (O) => {
      var q, ne;
      const x = O.target;
      (q = z.current) != null && q.contains(x) || (ne = _.current) != null && ne.contains(x) || a(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [a, l]);
  const K = ge(() => d ? { width: typeof d == "number" ? `${d}px` : d } : void 0, [d]), W = Le((M) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Pe(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !M.danger && !M.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !M.danger && M.active && "bg-primary-soft font-medium text-primary",
        M.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (O) => f == null ? void 0 : f(M, O),
      disabled: M.disabled,
      children: [
        M.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: M.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: M.label })
      ]
    },
    M.key
  ), [f]), P = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: _,
      className: Pe(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !m && "absolute",
        !m && !$ && "top-[calc(100%+8px)]",
        !m && $ && "bottom-[calc(100%+8px)]",
        !m && B ? "right-0" : m ? void 0 : "left-0",
        N
      ),
      style: m ? { ...D, ...K } : K,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Pe("flex min-h-0 flex-col gap-1", E), children: n.map(W) }),
        s.length > 0 && /* @__PURE__ */ e("div", { className: Pe("flex flex-col gap-1 border-t border-lineSoft pt-2", j), children: s.map(W) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: z, className: Pe("relative inline-block", p), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Pe("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", h), onClick: (M) => {
      u == null || u(M), a == null || a(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    m ? P && Dr(P, document.body) : P
  ] });
};
ut.displayName = "BaseActionMenu";
const _n = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: s,
  feedback: l,
  onFeedback: a,
  disabled: u = !1
}) => {
  const [f, k] = v(!1), d = !!(s || a), m = Le(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), k(!0), window.setTimeout(() => k(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${d ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: m,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: f ? "已复制" : n,
            children: f ? /* @__PURE__ */ e(et, { size: 15 }) : /* @__PURE__ */ e(pt, { size: 15 })
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
            children: /* @__PURE__ */ e(hr, { size: 15 })
          }
        ),
        a && /* @__PURE__ */ r(Ue, { children: [
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
}, _t = De.memo(_n), Bn = {
  clarification: {
    icon: /* @__PURE__ */ e(Vt, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(ct, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(Ut, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(ct, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(St, { size: 16 }),
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
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((a, u) => /* @__PURE__ */ e("li", { children: a }, `${u}-${a}`)) }),
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
  const a = t.status === "saving", u = t.status === "saved", f = t.actionable ?? !0, k = t.previewable ?? !0, d = a || u || !f || !s;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !n || !k,
        onClick: () => n == null ? void 0 : n(t.actionKey),
        className: "flex w-full min-w-0 items-start gap-3 rounded-lg text-left outline-none transition-colors enabled:hover:bg-bgLight enabled:focus-visible:ring-2 enabled:focus-visible:ring-primary-soft-strong disabled:cursor-default",
        "aria-label": `预览草稿：${t.title}`,
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(ht, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
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
        !u && f && l && /* @__PURE__ */ e(
          Fe,
          {
            type: "secondary",
            size: "small",
            disabled: a,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (f || u) && /* @__PURE__ */ e(
          Fe,
          {
            type: u ? "secondary" : "primary",
            size: "small",
            disabled: d,
            onClick: () => s == null ? void 0 : s(t.actionKey),
            children: a ? /* @__PURE__ */ r(Ue, { children: [
              /* @__PURE__ */ e(Kt, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : u ? /* @__PURE__ */ r(Ue, { children: [
              /* @__PURE__ */ e(et, { size: 14, "aria-hidden": "true" }),
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
let It = !1, st = null, lt = null, it = null;
const jn = async () => (lt || (lt = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw lt = null, t;
})), lt), Dn = async () => (it || (it = import("remark-emoji").then((t) => t.default).catch(() => (it = null, null))), it), Fn = async () => {
  st || (st = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw st = null, n;
  }));
  const t = await st;
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
}, mt = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => mt(n)).join("") : De.isValidElement(t) ? mt(t.props.children) : "", Rt = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, Hn = ({ href: t, label: n }) => {
  const s = ge(() => {
    const l = n.trim();
    if (l) return l;
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
        children: /* @__PURE__ */ e(Yt, { size: 14 })
      }
    )
  ] });
}, qn = ({ language: t, rawCode: n, className: s, children: l }) => {
  const [a, u] = v(!1), f = Le(async () => {
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
          className: `code-block-copy-btn ${a ? "copied" : ""}`,
          title: a ? "已复制代码" : "复制代码",
          children: [
            a ? /* @__PURE__ */ e(et, { size: 12 }) : /* @__PURE__ */ e(pt, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${s ?? ""}`.trim(), children: l }) })
  ] });
}, Wn = ({ rawCode: t }) => {
  const [n, s] = v(!1), l = Le(async () => {
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
            n ? /* @__PURE__ */ e(et, { size: 12 }) : /* @__PURE__ */ e(pt, { size: 12 }),
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
    var h;
    const u = l.match(/PMID\s*[:：]\s*(\d{4,})/i), f = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!u || !f) return;
    const k = l.slice(0, u.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), d = ((h = n[a - 1]) == null ? void 0 : h.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", p = sr({
      title: k || d,
      pmid: u[1],
      doi: f[1]
    });
    p && s.push(p);
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
  onConfirmMiraDraft: u,
  onPreviewMiraDraft: f,
  onCancelMiraDraft: k,
  pendingDisplayActionKey: d,
  onDisplayCardAction: m,
  isTyping: p = !1,
  isStreaming: h
}) => {
  var g, X;
  const N = t.role === "user", E = h ?? p, j = me(null), [z, _] = v(null), [D, V] = v(null), [B, $] = v(null), [K, W] = v(!1), P = ge(() => /```\s*mermaid/i.test(t.content), [t.content]), M = ge(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), O = ge(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), x = ge(
    () => N ? null : Un(t.content),
    [N, t.content]
  ), q = !!(x && x.items.length > 0);
  ye(() => {
    if (!M || z || D) return;
    let y = !1;
    return jn().then((S) => {
      y || (_(() => S.remark), V(() => S.rehype));
    }).catch(() => {
    }), () => {
      y = !0;
    };
  }, [M, z, D]), ye(() => {
    if (!O || K) return;
    let y = !1;
    return Dn().then((S) => {
      y || (S && $(() => S), W(!0));
    }), () => {
      y = !0;
    };
  }, [O, K]);
  const ne = ge(() => {
    const y = [nr];
    return B && y.push(B), z && y.push(z), y;
  }, [B, z]), I = ge(() => {
    const y = [jr];
    return D && y.push(D), y;
  }, [D]), w = ge(
    () => ({
      table: ({ node: y, ...S }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...S }) }),
      tr: ({ node: y, ...S }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...S }),
      th: ({ node: y, ...S }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...S
        }
      ),
      td: ({ node: y, ...S }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...S }),
      blockquote: ({ node: y, ...S }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...S
        }
      ),
      input: ({ node: y, type: S, checked: U, ...ae }) => S === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!U,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...ae
        }
      ) : /* @__PURE__ */ e("input", { type: S, ...ae }),
      section: ({ node: y, ...S }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...S }),
      p: ({ node: y, children: S, ...U }) => {
        const ae = De.Children.toArray(S);
        if (ae.length === 1 && De.isValidElement(ae[0])) {
          const ve = ae[0];
          if (typeof ve.props.href == "string" && Rt(ve.props.href)) {
            const Q = mt(ve.props.children).trim();
            return /* @__PURE__ */ e(Hn, { href: ve.props.href, label: Q });
          }
        }
        return /* @__PURE__ */ e("p", { ...U, children: S });
      },
      a: ({ node: y, href: S, ...U }) => {
        const ae = S ?? "", ve = /^https?:\/\/(dx\.)?doi\.org\//i.test(ae) || /^doi:/i.test(ae), Q = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(ae) || /\/pmc\/|\/pmid\//i.test(ae), T = Rt(ae);
        return ve || Q || T ? /* @__PURE__ */ e(
          "a",
          {
            href: S,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...U
          }
        ) : /* @__PURE__ */ e("a", { href: S, target: "_blank", rel: "noreferrer", ...U });
      },
      pre({ children: y, ...S }) {
        const U = De.Children.toArray(y).find(
          (L) => De.isValidElement(L) && typeof L.props.className == "string" && L.props.className.includes("language-")
        );
        if (!U)
          return /* @__PURE__ */ e("pre", { ...S, children: y });
        const ae = U.props.className ?? "", ve = ae.match(/language-([\w-]+)/), Q = ve ? ve[1].toLowerCase() : "code", T = mt(U.props.children).replace(/\n$/, "");
        return Q === "mermaid" ? /* @__PURE__ */ e(Wn, { rawCode: T }) : /* @__PURE__ */ e(qn, { language: Q, rawCode: T, className: ae, children: U.props.children });
      },
      code({ children: y, className: S, ...U }) {
        return S ? /* @__PURE__ */ e("code", { className: S, ...U, children: y }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...U,
            children: y
          }
        );
      }
    }),
    []
  );
  return ye(() => {
    if (N || E || !P) return;
    const y = j.current;
    if (!y) return;
    const S = Array.from(y.querySelectorAll(".mermaid")).filter(
      (U) => U.dataset.processed !== "true"
    );
    S.length !== 0 && Fn().then(async (U) => {
      await Promise.all(
        S.map(async (ae, ve) => {
          var F;
          const Q = (F = ae.textContent) == null ? void 0 : F.trim();
          if (!Q) return;
          const T = `mermaid-${Date.now()}-${ve}`, { svg: L } = await U.render(T, Q);
          ae.innerHTML = L, ae.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [N, E, P, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${N ? "justify-end" : "justify-start"}`, children: N ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (g = t.references) == null ? void 0 : g.map((y) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${y.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              y.type === "skill" ? /* @__PURE__ */ e(Ot, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(Xt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: y.label, children: y.label })
            ]
          },
          y.id
        )),
        (X = t.attachments) == null ? void 0 : X.map((y) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${y.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: y.status === "error" ? "alert" : void 0,
            title: y.errorMessage,
            children: [
              y.status === "uploading" ? /* @__PURE__ */ e(Kt, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : y.status === "error" ? /* @__PURE__ */ e(vr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : y.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: y.previewUrl, alt: y.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Gt, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
      _t,
      {
        markdownContent: t.content,
        copyLabel: "复制消息"
      }
    )
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    q && x ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: x.items.map((y, S) => /* @__PURE__ */ r(
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
              children: /* @__PURE__ */ e(Yt, { size: 14 })
            }
          )
        ]
      },
      `${y.pmid}-${S}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: j,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          rr,
          {
            remarkPlugins: ne,
            rehypePlugins: I,
            components: w,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      Rn,
      {
        draft: t.miraDraft,
        onPreview: f,
        onConfirm: u,
        onCancel: k
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      In,
      {
        card: t.displayCard,
        actionPending: d === t.displayCard.actionKey,
        onAction: m
      }
    ),
    !q && t.content && !E && /* @__PURE__ */ e(
      _t,
      {
        markdownContent: t.content,
        onRefresh: a,
        feedback: s,
        onFeedback: n && l ? (y) => l(n, y) : void 0,
        disabled: E
      }
    )
  ] }) }) });
}, Vn = De.memo(lr), Kn = {
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
  queued: /* @__PURE__ */ e(ft, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(Xe, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(Xe, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(Xe, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(Xe, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(Zt, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(Vt, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(ct, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(Ut, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(St, { size: 14, className: "text-warning" }),
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
    icon: /* @__PURE__ */ e(Xe, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(ct, { size: 13 }),
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
    icon: /* @__PURE__ */ e(St, { size: 13 }),
    colorClass: "text-warning"
  }
}, Ct = ({
  phase: t,
  searchSteps: n = [],
  label: s,
  defaultExpanded: l = !0
}) => {
  const [a, u] = v(l), f = me(null);
  ye(() => {
    n.length > 0 && u(!0);
  }, [n.length]);
  const k = n.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: On[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: s || Kn[t] }),
      k && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => u((d) => !d),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            a ? /* @__PURE__ */ e(dt, { size: 12 }) : /* @__PURE__ */ e(ot, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    k && /* @__PURE__ */ e(
      "div",
      {
        ref: f,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${a ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((d, m) => {
          const p = Dt[d.type] ?? Dt.tool, h = d.status ? Xn[d.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${p.colorClass}`, children: p.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: d.label }),
                    h && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${h.colorClass}`,
                        "aria-label": d.status,
                        children: h.icon
                      }
                    )
                  ] }),
                  (d.detail || d.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    d.detail,
                    d.detail && d.resultCount !== void 0 ? " · " : "",
                    d.resultCount !== void 0 ? `${d.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            d.id ?? `${d.type}-${m}-${d.label}`
          );
        })
      }
    )
  ] });
}, Gn = De.memo(Ct);
function Yn(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t && (t.current = n);
}
function Nt(t) {
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : 0;
}
function Qn({
  messages: t,
  isTyping: n,
  statusPhase: s = "thinking",
  statusLabel: l,
  statusVisible: a,
  searchSteps: u = [],
  hasReceivedAssistantChunk: f = !1,
  contentMaxWidth: k = 800,
  selection: d,
  scrollbar: m,
  feedbackByMessageKey: p,
  getMessageKey: h = (W, P) => String(P),
  onFeedback: N,
  onRegenerate: E,
  onConfirmMiraDraft: j,
  onPreviewMiraDraft: z,
  onCancelMiraDraft: _,
  pendingDisplayActionKey: D,
  onDisplayCardAction: V,
  onScroll: B,
  scrollContainerRef: $,
  onMessageElement: K
}) {
  var ve, Q;
  const W = !!d, P = me(null), M = me(null), O = me(/* @__PURE__ */ new Map()), x = me(), [q, ne] = v(), w = n && (a ?? !f) || a === !0 && (s === "awaiting_clarification" || s === "awaiting_confirmation" || s === "awaiting_approval" || s === "warning" || s === "failed");
  let g = -1, X = -1;
  if (n) {
    for (let T = t.length - 1; T >= 0; T -= 1)
      if (((ve = t[T]) == null ? void 0 : ve.role) === "user") {
        X = T;
        break;
      }
    for (let T = t.length - 1; T > X; T -= 1)
      if (((Q = t[T]) == null ? void 0 : Q.role) === "assistant") {
        g = T;
        break;
      }
  }
  const y = X >= 0 ? h(t[X], X) : void 0, S = g >= 0 ? h(t[g], g) : void 0, U = y && S ? `${y}:${S}` : void 0, ae = Le(
    (T) => {
      P.current = T, Yn($, T);
    },
    [$]
  );
  return Lt(() => {
    if (!U || !S || X < 0 || g < 0)
      return;
    const T = P.current, L = M.current, F = O.current.get(X);
    if (!T || !L || !F) return;
    const Ce = () => {
      const Ae = window.getComputedStyle(T), $e = window.getComputedStyle(L), Z = T.clientHeight - Nt(Ae.paddingTop) - Nt(Ae.paddingBottom), te = Nt($e.rowGap || $e.gap), G = Math.max(
        0,
        Math.floor(Z - F.offsetHeight - te)
      );
      ne(
        (A) => (A == null ? void 0 : A.assistantKey) === S && A.minHeight === G ? A : { assistantKey: S, minHeight: G }
      );
    };
    Ce();
    const ke = new ResizeObserver(Ce);
    return ke.observe(T), ke.observe(F), () => ke.disconnect();
  }, [
    g,
    S,
    U,
    X
  ]), Lt(() => {
    if (!U || !S || (q == null ? void 0 : q.assistantKey) !== S || X < 0 || x.current === U)
      return;
    const T = P.current, L = O.current.get(X);
    !T || !L || (T.scrollTo({ top: L.offsetTop, behavior: "auto" }), x.current = U);
  }, [S, U, X, q]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: ae,
        "data-chat-scroll-container": !0,
        onScroll: B,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: M,
            className: `flex w-full flex-col ${W ? "gap-3" : "gap-8"}`,
            style: { maxWidth: k },
            children: [
              t.map((T, L) => {
                const F = h(T, L), Ce = (d == null ? void 0 : d.selectedMessageKeys.has(F)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": L,
                    "data-chat-turn-reserved": (q == null ? void 0 : q.assistantKey) === F ? "true" : void 0,
                    ref: (ke) => {
                      ke ? O.current.set(L, ke) : O.current.delete(L), K == null || K(L, ke);
                    },
                    className: W ? "flex w-full items-start gap-2" : void 0,
                    style: (q == null ? void 0 : q.assistantKey) === F ? { minHeight: q.minHeight } : void 0,
                    children: [
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => d.onToggleMessage(F),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": Ce ? "取消选择消息" : "选择消息",
                          children: Ce ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(et, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: d ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${Ce ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${T.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              lr,
                              {
                                msg: T,
                                actionKey: F,
                                feedback: p == null ? void 0 : p[F],
                                onFeedback: N,
                                onRefresh: E ? () => E(L) : void 0,
                                onConfirmMiraDraft: j,
                                onPreviewMiraDraft: z,
                                onCancelMiraDraft: _,
                                pendingDisplayActionKey: D,
                                onDisplayCardAction: V,
                                isTyping: n && L === g
                              }
                            ),
                            L === g && w && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              Ct,
                              {
                                phase: s,
                                label: l,
                                searchSteps: [...u]
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  F
                );
              }),
              g < 0 && w && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                Ct,
                {
                  phase: s,
                  label: l,
                  searchSteps: [...u]
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
De.memo(Qn);
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
  function({ open: n, width: s, resizing: l = !1, overlay: a = !1, overlayRight: u = 0, children: f }, k) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: k,
        "data-overlay": a ? "true" : "false",
        style: { width: n ? s : 0, ...a ? { right: u } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${a ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: s }, className: "h-full min-w-0", children: f })
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
  actions: u,
  onOpenSidebar: f,
  onStartEditTitle: k,
  onEditingTitleChange: d,
  onCommitTitle: m,
  onEditingTitleKeyDown: p
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
              onClick: f,
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
              onChange: (N) => d == null ? void 0 : d(N.target.value),
              onBlur: m,
              onKeyDown: p,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${k ? "cursor-pointer" : ""}`,
              onClick: k,
              title: k ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        u && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: u })
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
  const [a, u] = v(s), [f, k] = v(null), [d, m] = v(0), [p, h] = v(0), [N, E] = v(!1), j = me(null), z = me({}), _ = me(null), D = Le(() => {
    const $ = j.current;
    if (!$) {
      m(0), h(0);
      return;
    }
    const { scrollTop: K, scrollHeight: W, clientHeight: P } = $;
    if (W <= P || P <= 0) {
      m(0), h(0);
      return;
    }
    const M = Math.max(P / W * P, 24), O = P - M, x = K / Math.max(W - P, 1);
    m(M), h(O * x);
  }, []), V = Le(() => {
    D(), E(!0), _.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => E(!1), 650);
  }, [D]), B = () => {
    _.current !== null && (window.clearTimeout(_.current), _.current = null), u(!1), k(null), E(!1);
  };
  return ye(() => {
    if (!a) return;
    const $ = window.requestAnimationFrame(D);
    return () => window.cancelAnimationFrame($);
  }, [a, t.length, D]), ye(() => {
    const $ = j.current, K = z.current[n];
    if (!$ || !K) return;
    const W = $.scrollTop, P = W + $.clientHeight, M = K.offsetTop, O = M + K.offsetHeight, x = 16;
    M < W + x ? $.scrollTo({ top: Math.max(M - x, 0), behavior: "auto" }) : O > P - x && $.scrollTo({
      top: Math.max(O - $.clientHeight + x, 0),
      behavior: "auto"
    });
  }, [n, t.length]), ye(() => () => {
    _.current !== null && window.clearTimeout(_.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => u(!0),
      onMouseLeave: B,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: j,
          onScroll: V,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${a ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map(($) => {
              const K = $.messageIndex === n, W = f === $.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (P) => {
                    z.current[$.messageIndex] = P;
                  },
                  type: "button",
                  onClick: () => l($.messageIndex),
                  onMouseEnter: () => k($.messageIndex),
                  onMouseLeave: () => k(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${a ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${$.messageIndex + 1} 条用户消息`,
                  title: $.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${a ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${K ? "text-primary" : W ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: $.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${K ? "h-[4px] w-[12px] bg-primary" : W ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                $.messageIndex
              );
            }) }),
            a && d > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${N ? "opacity-100" : "opacity-0"}`,
                style: { height: d, transform: `translateY(${p}px)` }
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
  onCancel: u,
  onCreateLink: f,
  onCloseModal: k,
  onCopyLink: d
}) {
  return /* @__PURE__ */ r(Ue, { children: [
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
            /* @__PURE__ */ e(Fe, { type: "secondary", size: "small", onClick: u, children: "取消" }),
            /* @__PURE__ */ e(
              Fe,
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
      Mt,
      {
        visible: s,
        title: "创建分享链接",
        width: 450,
        onCancel: k,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: d,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  l ? /* @__PURE__ */ e(et, { size: 14 }) : /* @__PURE__ */ e(pt, { size: 14 }),
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
  error: u,
  onRequestUpload: f,
  onDeleteAttachment: k
}) {
  return /* @__PURE__ */ r("div", { className: n, children: [
    /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      f && /* @__PURE__ */ e(
        Fe,
        {
          type: "secondary",
          size: "small",
          disabled: s,
          onClick: f,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            s ? /* @__PURE__ */ e(Xe, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Tr, { size: 14 }),
            s ? "上传中" : "上传附件"
          ] })
        }
      )
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: t.map((d) => {
      const m = l === d.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: d.statusLabel,
          children: [
            /* @__PURE__ */ e(ht, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: d.name }),
            d.status === "processing" && /* @__PURE__ */ e(Xe, { size: 12, className: "animate-spin" }),
            k && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: m,
                onClick: () => k(d.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${d.name}`,
                title: "删除附件",
                children: m ? /* @__PURE__ */ e(Xe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(er, { size: 13 })
              }
            )
          ]
        },
        d.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    a && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: a }),
    u && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: u })
  ] });
}
const Jn = {
  disabled: /* @__PURE__ */ e(Cr, { size: 14 }),
  pending: /* @__PURE__ */ e(ft, { size: 14 }),
  indexed: /* @__PURE__ */ e(at, { size: 14 })
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
  const [s, l] = v(!1), a = me(null), u = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ye(() => () => {
    a.current !== null && window.clearTimeout(a.current);
  }, []);
  const f = () => {
    l(!0), a.current !== null && window.clearTimeout(a.current), a.current = window.setTimeout(() => l(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${u}`, children: [
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
        onScroll: f,
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${s ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${cr.preview} ${u}`, children: /* @__PURE__ */ e(rr, { remarkPlugins: [nr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e($t, { description: "正文暂无内容" }) }),
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
  pendingActionKey: u,
  onAction: f,
  onResizeStart: k
}) {
  var m;
  const d = t.find((p) => p.key === n) ?? null;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: k,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((p) => {
        const h = p.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => s(p.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${h ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                p.type === "knowledge" || p.type === "draft" ? /* @__PURE__ */ e(ht, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Sr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: p.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (N) => {
                N.stopPropagation(), l(p.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${p.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(nt, { size: 12 })
            }
          )
        ] }, p.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        (m = d == null ? void 0 : d.actions) == null ? void 0 : m.map((p) => /* @__PURE__ */ e(
          Fe,
          {
            type: p.tone ?? "secondary",
            size: "small",
            disabled: u === d.key || !f,
            onClick: () => f == null ? void 0 : f(d.key, p.id),
            children: p.label
          },
          p.id
        )),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: a,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(nt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: d ? d.document ? /* @__PURE__ */ e(ra, { document: d.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: d.loading ? "正在加载文档…" : d.error || "文档暂时无法预览" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function ts({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: s,
  knowledgeDocs: l,
  experiments: a,
  activePreviewKey: u,
  onSearchQueryChange: f,
  onOpenKnowledge: k,
  onOpenExperiment: d,
  onResizeStart: m
}) {
  const p = l.length + a.length;
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
          /* @__PURE__ */ e(Ze, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
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
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: s ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: s }) : p === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ue, { children: [
        l.map((h) => {
          const N = `knowledge:${h.id}`, E = u === N;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => k(h.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${E ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${E ? "font-semibold" : "font-normal"}`, children: h.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: h.tags[0] ?? "未分类" })
              ]
            },
            h.id
          );
        }),
        a.map((h) => {
          const N = `experiment:${h.id}`, E = u === N;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => d(h.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${E ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${E ? "font-semibold" : "font-normal"}`, children: h.title }),
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
  const a = t.slice(0, n), u = t.slice(s), f = a.match(/(?:^|\s)\/[^\s/]*$/);
  if (!f) {
    const h = `/${l} `;
    return { value: `${a}${h}${u}`, cursor: a.length + h.length };
  }
  const k = a.length - f[0].length, m = `${f[0].startsWith(" ") ? " " : ""}/${l} `, p = `${a.slice(0, k)}${m}`;
  return {
    value: `${p}${u}`,
    cursor: p.length
  };
}, ns = (t, n, s, l) => {
  const a = t.slice(0, n), u = t.slice(s), f = a.match(/(?:^|\s)@[^\s@]*$/);
  if (!f) {
    const h = `@${l} `;
    return { value: `${a}${h}${u}`, cursor: a.length + h.length };
  }
  const k = a.length - f[0].length, m = `${f[0].startsWith(" ") ? " " : ""}@${l} `, p = `${a.slice(0, k)}${m}`;
  return {
    value: `${p}${u}`,
    cursor: p.length
  };
}, ua = [], as = [], dr = ({
  onSend: t,
  disabled: n,
  isStreaming: s = !1,
  onCancel: l,
  leadingControls: a,
  skillOptions: u = la,
  fileOptions: f = ua,
  uploadAccept: k,
  validateUploadFile: d,
  onUploadValidationError: m
}) => {
  const [p, h] = v(""), [N, E] = v(!1), [j, z] = v(!1), [_, D] = v(""), [V, B] = v(-1), [$, K] = v(!1), [W, P] = v(""), [M, O] = v(-1), [x, q] = v([]), [ne, I] = v([]), [w, g] = v([]), [X, y] = v(!1), S = me(null), U = me(null), ae = pr(), ve = me([]), Q = s && !!l;
  ye(() => {
    ve.current = x;
  }, [x]), ye(() => () => {
    ve.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const T = ge(() => {
    const i = _.trim().toLowerCase();
    return i ? u.filter((b) => `${b.id} ${b.description} ${b.source}`.toLowerCase().includes(i)) : u;
  }, [u, _]), L = ge(() => {
    const i = W.trim().toLowerCase();
    return i ? f.filter((b) => `${b.name} ${b.projectName} ${b.sourceType} ${b.operatorName ?? ""} ${b.operatedAt ?? ""}`.toLowerCase().includes(i)) : f.filter((b) => b.isRecent).slice(0, 10);
  }, [f, W]), F = Le((i, b) => {
    const re = b ?? i.length, fe = ca(i, re);
    if (fe !== null) {
      z(!0), D(fe), B(-1), K(!1), P(""), O(-1);
      return;
    }
    const se = da(i, re);
    if (se !== null) {
      K(!0), P(se), O(-1), z(!1), D(""), B(-1);
      return;
    }
    z(!1), D(""), B(-1), K(!1), P(""), O(-1);
  }, []), Ce = Le((i) => {
    if (i.disabled) return;
    const b = S.current, re = (b == null ? void 0 : b.selectionStart) ?? p.length, fe = (b == null ? void 0 : b.selectionEnd) ?? re, se = p.slice(0, re), de = p.slice(fe), pe = (() => {
      const ue = se.match(/(?:^|\s)\/[^\s/]*$/);
      if (!ue)
        return { value: p, cursor: re };
      const xe = se.length - ue[0].length, be = ue[0].startsWith(" ") ? " " : "", o = `${se.slice(0, xe)}${be}`;
      return {
        value: `${o}${de}`,
        cursor: o.length
      };
    })();
    I((ue) => {
      const xe = `skill-${i.id}`;
      return ue.some((be) => be.id === xe) ? ue : [...ue, { id: xe, type: "skill", label: i.id, sourceId: i.id }];
    }), h(pe.value), z(!1), D(""), B(-1), requestAnimationFrame(() => {
      b && (b.focus(), b.setSelectionRange(pe.cursor, pe.cursor));
    });
  }, [p]), ke = Le((i) => {
    const b = S.current, re = (b == null ? void 0 : b.selectionStart) ?? p.length, fe = (b == null ? void 0 : b.selectionEnd) ?? re, se = p.slice(0, re), de = p.slice(fe), pe = (() => {
      const ue = se.match(/(?:^|\s)@[^\s@]*$/);
      if (!ue)
        return { value: p, cursor: re };
      const xe = se.length - ue[0].length, be = ue[0].startsWith(" ") ? " " : "", o = `${se.slice(0, xe)}${be}`;
      return {
        value: `${o}${de}`,
        cursor: o.length
      };
    })();
    g((ue) => {
      const xe = `doc-${i.id}`;
      return ue.some((be) => be.id === xe) ? ue : [...ue, { id: xe, type: "doc", label: i.name, sourceId: i.id }];
    }), h(pe.value), K(!1), P(""), O(-1), requestAnimationFrame(() => {
      b && (b.focus(), b.setSelectionRange(pe.cursor, pe.cursor));
    });
  }, [p]), Ae = Le(() => {
    y(!1);
    const i = U.current;
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
  }, []), $e = Le((i) => {
    const b = Array.from(i.target.files ?? []);
    if (b.length === 0) return;
    const re = b.filter((fe) => {
      const se = d == null ? void 0 : d(fe);
      return se ? (m == null || m(se), !1) : !0;
    });
    q((fe) => {
      const se = new Set(fe.map((pe) => pe.id)), de = [...fe];
      return re.forEach((pe) => {
        if (pe.size > aa || de.length >= na) return;
        const ue = `${pe.name}-${pe.size}-${pe.lastModified}`;
        if (se.has(ue)) return;
        const xe = pe.type.startsWith("image/");
        se.add(ue), de.push({
          id: ue,
          name: pe.name,
          mimeType: pe.type || "application/octet-stream",
          previewUrl: xe ? URL.createObjectURL(pe) : void 0,
          file: pe
        });
      }), de;
    }), i.target.value = "";
  }, [m, d]), Z = Le((i) => {
    q((b) => {
      const re = b.find((fe) => fe.id === i);
      return re != null && re.previewUrl && URL.revokeObjectURL(re.previewUrl), b.filter((fe) => fe.id !== i);
    });
  }, []), te = Le((i) => {
    I((b) => b.filter((re) => re.id !== i));
  }, []), G = Le((i) => {
    g((b) => b.filter((re) => re.id !== i));
  }, []), A = Le(() => {
    !p.trim() || n || (t({
      content: p,
      attachments: x.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...ne, ...w]
    }), h(""), q([]), I([]), g([]), z(!1), D(""), B(-1), K(!1), P(""), O(-1));
  }, [p, n, t, x, w, ne]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: ae,
        ref: U,
        type: "file",
        multiple: !0,
        accept: k,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: $e
      }
    ),
    (x.length > 0 || ne.length > 0 || w.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      ne.map((i) => /* @__PURE__ */ r(
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
                onClick: () => te(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(nt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      w.map((i) => /* @__PURE__ */ r(
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
                onClick: () => G(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${i.label}`,
                children: /* @__PURE__ */ e(nt, { size: 12 })
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
                onClick: () => Z(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${i.name}`,
                children: /* @__PURE__ */ e(nt, { size: 12 })
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
        ref: S,
        value: p,
        onChange: (i) => {
          const b = i.target.value;
          h(b), F(b, i.target.selectionStart);
        },
        onClick: (i) => {
          F(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyUp: (i) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(i.key) || F(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyDown: (i) => {
          if (i.key === "Enter" && (i.shiftKey || i.metaKey || i.ctrlKey)) {
            i.preventDefault();
            const b = i.currentTarget, re = b.selectionStart ?? p.length, fe = b.selectionEnd ?? re, se = `${p.slice(0, re)}
${p.slice(fe)}`, de = re + 1;
            h(se), F(se, de), requestAnimationFrame(() => {
              b.setSelectionRange(de, de);
            });
            return;
          }
          if (j) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), B((b) => T.length === 0 ? -1 : b < 0 ? 0 : (b + 1) % T.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), B((b) => T.length === 0 ? -1 : b < 0 ? T.length - 1 : (b - 1 + T.length) % T.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), z(!1), D(""), B(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const b = V >= 0 ? T[V] : void 0;
              b && Ce(b);
              return;
            }
          }
          if ($) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), O((b) => L.length === 0 ? -1 : b < 0 ? 0 : (b + 1) % L.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), O((b) => L.length === 0 ? -1 : b < 0 ? L.length - 1 : (b - 1 + L.length) % L.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), K(!1), P(""), O(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const b = M >= 0 ? L[M] : void 0;
              b && ke(b);
              return;
            }
          }
          i.key === "Enter" && !i.shiftKey && (i.preventDefault(), A());
        },
        disabled: n,
        onFocus: () => E(!0),
        onBlur: () => {
          E(!1), z(!1), K(!1);
        },
        placeholder: N ? sa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${x.length > 0 || ne.length > 0 || w.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    j && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: _ ? `搜索 skill：${_}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: T.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : T.map((i, b) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : b === V ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Ce(i),
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
    $ && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: W ? `搜索文件：${W}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !W && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(ft, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        L.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : L.map((i, b) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${b === M ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => ke(i),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(ht, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: i.name }),
              !W && i.operatorName && i.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${i.operatorName} ${i.operatedAt}` })
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
            onMouseEnter: () => y(!0),
            onMouseLeave: () => y(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Ae,
                  "aria-controls": ae,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(tr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${X ? "block" : "hidden"}`,
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
          onClick: Q ? l : A,
          disabled: Q ? !1 : n || !p.trim(),
          "aria-label": Q ? "停止生成" : "发送消息",
          title: Q ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Q || p.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: Q ? /* @__PURE__ */ e(Mr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e($r, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
De.memo(dr);
const ma = ({ messages: t, isTyping: n, statusPhase: s = "thinking", searchSteps: l = [] }) => {
  const a = me(null);
  ye(() => {
    var f;
    (f = a.current) == null || f.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const u = ge(() => t.map((f, k) => /* @__PURE__ */ e(Vn, { msg: f }, `${k}-${f.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    u,
    n && /* @__PURE__ */ e(Gn, { phase: s, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: a })
  ] });
};
De.memo(ma);
const pa = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], ur = ({ onSelect: t, prompts: n = pa, disabled: s = !1 }) => {
  const l = Le((a) => {
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
De.memo(ur);
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
  const l = me(null), a = me(null), [u, f] = v(""), [k, d] = v(""), [m, p] = v(!0), [h, N] = v(!1), [E, j] = v(!1), [z, _] = v(null), D = me(null), [V, B] = v(!1), [$, K] = v("email"), [W, P] = v(""), [M, O] = v(""), [x, q] = v(""), [ne, I] = v(""), [w, g] = v(0), [X, y] = v(!1), S = ge(() => u.trim().length > 0 && k.trim().length > 0 && !h, [
    u,
    h,
    k
  ]);
  ye(() => {
    if (w <= 0) return;
    const T = window.setTimeout(() => g((L) => L - 1), 1e3);
    return () => clearTimeout(T);
  }, [w]), ye(
    () => () => {
      D.current !== null && window.clearTimeout(D.current);
    },
    []
  ), ye(() => {
    const T = l.current, L = a.current;
    if (!T || !L) return;
    const F = T.getContext("2d");
    if (!F) return;
    const Ce = window.getComputedStyle(document.documentElement), ke = Ce.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ae = Ce.getPropertyValue("--chatui-color-auth-particle-idle").trim(), $e = Ce.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Z = 0, te = 0, G = 0, A = window.devicePixelRatio || 1, i = [];
    const b = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, re = 150, fe = () => {
      const be = L.getBoundingClientRect();
      A = window.devicePixelRatio || 1, te = be.width, G = be.height, T.width = te * A, T.height = G * A, T.style.width = `${te}px`, T.style.height = `${G}px`, F.setTransform(A, 0, 0, A, 0, 0);
      const o = te < 768 ? 40 : 90;
      i = Array.from({ length: o }, () => ha(te, G));
    }, se = (be) => {
      F.beginPath(), F.arc(be.x, be.y, be.size, 0, Math.PI * 2), F.closePath(), F.fill();
    }, de = () => {
      F.clearRect(0, 0, te, G);
      for (let be = 0; be < i.length; be += 1) {
        const o = i[be];
        o.x += o.vx, o.y += o.vy, (o.x < 0 || o.x > te) && (o.vx = -o.vx), (o.y < 0 || o.y > G) && (o.vy = -o.vy);
        const C = b.x - o.x, J = b.y - o.y, Y = Math.sqrt(C * C + J * J) || 1, he = C / Y, Ne = J / Y, ie = (b.radius - Y) / b.radius, R = he * ie * o.density, _e = Ne * ie * o.density;
        if (Y < b.radius)
          o.x -= R * 0.5, o.y -= _e * 0.5, F.fillStyle = ke, o.size = Math.min(o.size + 0.1, 2.5);
        else {
          if (o.x !== o.baseX) {
            const Be = o.x - o.baseX;
            o.x -= Be / 50;
          }
          if (o.y !== o.baseY) {
            const Be = o.y - o.baseY;
            o.y -= Be / 50;
          }
          F.fillStyle = Ae, o.size = Math.max(o.size - 0.05, 1);
        }
        se(o);
        for (let Be = be; Be < i.length; Be += 1) {
          const we = i[Be], le = o.x - we.x, oe = o.y - we.y, Re = Math.sqrt(le * le + oe * oe);
          if (Re < re) {
            const Se = (1 - Re / re) * 0.4;
            F.beginPath(), F.strokeStyle = $e, F.globalAlpha = Se, F.lineWidth = 1, F.moveTo(o.x, o.y), F.lineTo(we.x, we.y), F.stroke(), F.globalAlpha = 1, F.closePath();
          }
        }
      }
      Z = window.requestAnimationFrame(de);
    }, pe = (be) => {
      const o = L.getBoundingClientRect();
      b.x = be.clientX - o.left, b.y = be.clientY - o.top;
    }, ue = () => {
      b.x = -1e3, b.y = -1e3;
    }, xe = (be) => {
      if (be.touches.length < 1) return;
      const o = L.getBoundingClientRect();
      b.x = be.touches[0].clientX - o.left, b.y = be.touches[0].clientY - o.top;
    };
    return fe(), de(), window.addEventListener("resize", fe), L.addEventListener("mousemove", pe), L.addEventListener("mouseleave", ue), L.addEventListener("touchmove", xe, { passive: !0 }), L.addEventListener("touchend", ue), () => {
      window.cancelAnimationFrame(Z), window.removeEventListener("resize", fe), L.removeEventListener("mousemove", pe), L.removeEventListener("mouseleave", ue), L.removeEventListener("touchmove", xe), L.removeEventListener("touchend", ue);
    };
  }, []);
  const U = async (T) => {
    if (T.preventDefault(), !!S) {
      N(!0), _(null);
      try {
        const L = await t({ email: u.trim(), password: k, rememberLogin: m });
        if (!L.ok) {
          _(L.message);
          return;
        }
        j(!0), D.current = window.setTimeout(() => {
          j(!1), n();
        }, 900);
      } catch {
        _("登录失败，请稍后重试。");
      } finally {
        N(!1);
      }
    }
  }, ae = async () => {
    !W.trim() || w > 0 || (N(!0), await new Promise((T) => window.setTimeout(T, 1e3)), N(!1), y(!0), g(60));
  }, ve = async () => {
    if ($ === "email") {
      if (!W.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(W) || !M.trim() || M.length < 6 || !x.trim() || x.length < 6 || x !== ne) return;
      K("success");
    }
  }, Q = () => {
    B(!1), K("email"), P(""), O(""), q(""), I(""), g(0), y(!1);
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
      /* @__PURE__ */ r("form", { onSubmit: U, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: u,
              onChange: (T) => {
                f(T.target.value), _(null);
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
              value: k,
              onChange: (T) => {
                d(T.target.value), _(null);
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
                  checked: m,
                  onChange: (T) => p(T.target.checked),
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
            disabled: !S,
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
      !V && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
      V && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: Q,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        $ === "email" && /* @__PURE__ */ r("div", { className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: W,
                onChange: (T) => P(T.target.value),
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
                  onChange: (T) => O(T.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: ae,
                disabled: w > 0 || h || !W.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${w > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: w > 0 ? `${w}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (T) => q(T.target.value),
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
                value: ne,
                onChange: (T) => I(T.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${ne.length > 0 && x !== ne ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          ne.length > 0 && x !== ne && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ve,
              disabled: !W.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(W) || !M.trim() || M.length < 6 || !x.trim() || x.length < 6 || x !== ne,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        $ === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(at, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: Q,
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
          /* @__PURE__ */ e(at, { size: 18, className: "text-primary" }),
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
  onNavigate: u
}) {
  const f = me(null), k = me(null), d = me(null), [m, p] = v("identity"), [h, N] = v(""), [E, j] = v(""), [z, _] = v(""), [D, V] = v(""), [B, $] = v(""), [K, W] = v(""), P = t === "create-lab", [M, O] = v(""), [x, q] = v(""), [ne, I] = v(!1), [w, g] = v(0), [X, y] = v(""), [S, U] = v(null), ae = M.length > 0 && M.trim().length < 6;
  ye(() => {
    if (w <= 0) return;
    const Z = window.setTimeout(() => g((te) => te - 1), 1e3);
    return () => clearTimeout(Z);
  }, [w]), ye(
    () => () => {
      d.current !== null && window.clearTimeout(d.current);
    },
    []
  ), ye(() => {
    const Z = f.current, te = k.current;
    if (!Z || !te) return;
    const G = Z.getContext("2d");
    if (!G) return;
    const A = window.getComputedStyle(document.documentElement), i = A.getPropertyValue("--chatui-color-auth-particle-active").trim(), b = A.getPropertyValue("--chatui-color-auth-particle-idle").trim(), re = A.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let fe = 0, se = 0, de = 0, pe = window.devicePixelRatio || 1, ue = [];
    const xe = { x: -1e3, y: -1e3, radius: 120 }, be = 150, o = () => {
      const ie = te.getBoundingClientRect();
      pe = window.devicePixelRatio || 1, se = ie.width, de = ie.height, Z.width = se * pe, Z.height = de * pe, Z.style.width = `${se}px`, Z.style.height = `${de}px`, G.setTransform(pe, 0, 0, pe, 0, 0);
      const R = se < 768 ? 40 : 90;
      ue = Array.from({ length: R }, () => fa(se, de));
    }, C = (ie) => {
      G.beginPath(), G.arc(ie.x, ie.y, ie.size, 0, Math.PI * 2), G.closePath(), G.fill();
    }, J = () => {
      G.clearRect(0, 0, se, de);
      for (let ie = 0; ie < ue.length; ie += 1) {
        const R = ue[ie];
        R.x += R.vx, R.y += R.vy, (R.x < 0 || R.x > se) && (R.vx = -R.vx), (R.y < 0 || R.y > de) && (R.vy = -R.vy);
        const _e = xe.x - R.x, Be = xe.y - R.y, we = Math.sqrt(_e * _e + Be * Be) || 1, le = _e / we, oe = Be / we, Re = (xe.radius - we) / xe.radius, Se = le * Re * R.density, Te = oe * Re * R.density;
        we < xe.radius ? (R.x -= Se * 0.5, R.y -= Te * 0.5, G.fillStyle = i, R.size = Math.min(R.size + 0.1, 2.5)) : (R.x !== R.baseX && (R.x -= (R.x - R.baseX) / 50), R.y !== R.baseY && (R.y -= (R.y - R.baseY) / 50), G.fillStyle = b, R.size = Math.max(R.size - 0.05, 1)), C(R);
        for (let ze = ie; ze < ue.length; ze += 1) {
          const Me = ue[ze], Ee = R.x - Me.x, Ve = R.y - Me.y, Ie = Math.sqrt(Ee * Ee + Ve * Ve);
          if (Ie < be) {
            const qe = (1 - Ie / be) * 0.4;
            G.beginPath(), G.strokeStyle = re, G.globalAlpha = qe, G.lineWidth = 1, G.moveTo(R.x, R.y), G.lineTo(Me.x, Me.y), G.stroke(), G.globalAlpha = 1, G.closePath();
          }
        }
      }
      fe = window.requestAnimationFrame(J);
    }, Y = (ie) => {
      const R = te.getBoundingClientRect();
      xe.x = ie.clientX - R.left, xe.y = ie.clientY - R.top;
    }, he = () => {
      xe.x = -1e3, xe.y = -1e3;
    }, Ne = (ie) => {
      if (ie.touches.length < 1) return;
      const R = te.getBoundingClientRect();
      xe.x = ie.touches[0].clientX - R.left, xe.y = ie.touches[0].clientY - R.top;
    };
    return o(), J(), window.addEventListener("resize", o), te.addEventListener("mousemove", Y), te.addEventListener("mouseleave", he), te.addEventListener("touchmove", Ne, { passive: !0 }), te.addEventListener("touchend", he), () => {
      window.cancelAnimationFrame(fe), window.removeEventListener("resize", o), te.removeEventListener("mousemove", Y), te.removeEventListener("mouseleave", he), te.removeEventListener("touchmove", Ne), te.removeEventListener("touchend", he);
    };
  }, []);
  const ve = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(z) || w > 0)) {
      I(!0), U(null);
      try {
        const Z = await n(z);
        if (!Z.ok) {
          U(Z);
          return;
        }
        g(Z.resendAfterSeconds ?? 60), y(Z.message ?? "短信验证码已发送");
      } catch {
        U({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        I(!1);
      }
    }
  }, Q = () => ({
    email: h.trim(),
    name: E.trim(),
    phoneNumber: z,
    phoneVerificationCode: D.trim(),
    mode: t,
    ...P ? { labName: K.trim() } : { inviteCode: B.trim() }
  }), T = () => {
    const Z = ["identity", "password", "success"], te = Z.indexOf(m);
    te < Z.length - 1 && p(Z[te + 1]);
  }, L = ge(() => {
    if (ne) return !1;
    switch (m) {
      case "identity":
        return P ? h.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && E.trim().length > 0 && /^1[3-9]\d{9}$/.test(z) && D.length === 6 && K.trim().length > 0 : h.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && E.trim().length > 0 && /^1[3-9]\d{9}$/.test(z) && D.length === 6 && B.trim().length > 0;
      case "password":
        return M.trim().length >= 6 && M === x;
      default:
        return !1;
    }
  }, [m, h, E, z, D, B, K, P, M, x, ne]), F = async (Z) => {
    if (Z.preventDefault(), !!L) {
      I(!0), U(null);
      try {
        const te = Q(), G = m === "password" ? await l({ ...te, password: M }) : await s(te);
        if (!G.ok) {
          U(G);
          return;
        }
        T();
      } catch {
        U({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        I(!1);
      }
    }
  }, Ce = {
    identity: P ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, ke = {
    identity: "",
    password: "",
    success: ""
  }, Ae = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", $e = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: k, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: f, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Ce[m] }),
        ke[m] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: ke[m] })
      ] }),
      m !== "success" && /* @__PURE__ */ r("form", { onSubmit: F, className: "space-y-5", children: [
        m === "identity" && /* @__PURE__ */ r(Ue, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: h,
                onChange: (Z) => {
                  N(Z.target.value), U(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: E,
                onChange: (Z) => {
                  j(Z.target.value), U(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: z,
                  onChange: (Z) => {
                    _(Z.target.value.replace(/\D/g, "").slice(0, 11)), y(""), U(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Ae
                }
              ),
              /* @__PURE__ */ e("span", { className: $e, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ve,
                disabled: w > 0 || ne || !/^1[3-9]\d{9}$/.test(z),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${w > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: w > 0 ? `${w}s后获取` : "获取验证码"
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
                onChange: (Z) => {
                  V(Z.target.value.replace(/\D/g, "").slice(0, 6)), U(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "短信验证码" })
          ] }),
          X && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: X }),
          P ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: K,
                onChange: (Z) => {
                  W(Z.target.value), U(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: B,
                onChange: (Z) => {
                  $(Z.target.value), U(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "邀请码" })
          ] })
        ] }),
        m === "password" && /* @__PURE__ */ r(Ue, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: M,
                onChange: (Z) => {
                  O(Z.target.value), U(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ae} ${(S == null ? void 0 : S.field) === "password" || ae ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "设置密码" }),
            ((S == null ? void 0 : S.field) === "password" || ae) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (S == null ? void 0 : S.field) === "password" ? S.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (Z) => {
                  q(Z.target.value), U(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ae} ${x.length > 0 && M !== x ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "确认密码" }),
            x.length > 0 && M !== x && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        S && S.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: S.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !L,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: ne ? "处理中..." : m === "password" ? "完成注册" : "下一步" }),
              ne && /* @__PURE__ */ r(
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(at, { size: 40, className: "text-primary" }) })
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
              d.current = window.setTimeout(a, 1e3);
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
            onClick: () => u("/login"),
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
  const l = me(null), a = me(null), u = me(null), [f, k] = v("phone"), [d, m] = v(""), [p, h] = v(""), [N, E] = v(""), [j, z] = v(""), [_, D] = v(!1), [V, B] = v(0), [$, K] = v(""), [W, P] = v(null);
  ye(() => {
    if (V <= 0) return;
    const w = window.setTimeout(() => B((g) => g - 1), 1e3);
    return () => window.clearTimeout(w);
  }, [V]), ye(() => {
    const w = l.current, g = a.current;
    if (!w || !g) return;
    const X = w.getContext("2d");
    if (!X) return;
    const y = window.getComputedStyle(document.documentElement), S = y.getPropertyValue("--chatui-color-auth-particle-active").trim(), U = y.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ae = y.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ve = 0, Q = 0, T = 0, L = [];
    const F = { x: -1e3, y: -1e3, radius: 120 }, Ce = 150, ke = () => {
      const G = g.getBoundingClientRect(), A = window.devicePixelRatio || 1;
      Q = G.width, T = G.height, w.width = Q * A, w.height = T * A, w.style.width = `${Q}px`, w.style.height = `${T}px`, X.setTransform(A, 0, 0, A, 0, 0), L = Array.from({ length: Q < 768 ? 40 : 90 }, () => xa(Q, T));
    }, Ae = () => {
      X.clearRect(0, 0, Q, T);
      for (let G = 0; G < L.length; G += 1) {
        const A = L[G];
        A.x += A.vx, A.y += A.vy, (A.x < 0 || A.x > Q) && (A.vx = -A.vx), (A.y < 0 || A.y > T) && (A.vy = -A.vy);
        const i = F.x - A.x, b = F.y - A.y, re = Math.sqrt(i * i + b * b) || 1, fe = (F.radius - re) / F.radius;
        re < F.radius ? (A.x -= i / re * fe * A.density * 0.5, A.y -= b / re * fe * A.density * 0.5, X.fillStyle = S, A.size = Math.min(A.size + 0.1, 2.5)) : (A.x -= (A.x - A.baseX) / 50, A.y -= (A.y - A.baseY) / 50, X.fillStyle = U, A.size = Math.max(A.size - 0.05, 1)), X.beginPath(), X.arc(A.x, A.y, A.size, 0, Math.PI * 2), X.fill();
        for (let se = G; se < L.length; se += 1) {
          const de = L[se], pe = A.x - de.x, ue = A.y - de.y, xe = Math.sqrt(pe * pe + ue * ue);
          xe >= Ce || (X.beginPath(), X.globalAlpha = (1 - xe / Ce) * 0.4, X.strokeStyle = ae, X.lineWidth = 1, X.moveTo(A.x, A.y), X.lineTo(de.x, de.y), X.stroke(), X.globalAlpha = 1);
        }
      }
      ve = window.requestAnimationFrame(Ae);
    }, $e = (G) => {
      const A = g.getBoundingClientRect();
      F.x = G.clientX - A.left, F.y = G.clientY - A.top;
    }, Z = (G) => {
      if (!G.touches.length) return;
      const A = g.getBoundingClientRect();
      F.x = G.touches[0].clientX - A.left, F.y = G.touches[0].clientY - A.top;
    }, te = () => {
      F.x = -1e3, F.y = -1e3;
    };
    return ke(), Ae(), window.addEventListener("resize", ke), g.addEventListener("mousemove", $e), g.addEventListener("mouseleave", te), g.addEventListener("touchmove", Z, { passive: !0 }), g.addEventListener("touchend", te), () => {
      window.cancelAnimationFrame(ve), window.removeEventListener("resize", ke), g.removeEventListener("mousemove", $e), g.removeEventListener("mouseleave", te), g.removeEventListener("touchmove", Z), g.removeEventListener("touchend", te);
    };
  }, []), ye(() => () => {
    u.current !== null && window.clearTimeout(u.current);
  }, []);
  const M = ge(() => /^1[3-9]\d{9}$/.test(d) && p.length === 6 && N.length >= 6 && N === j, [j, N, d, p]), O = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", x = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: a, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      f === "phone" ? /* @__PURE__ */ r(Ue, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (w) => {
          if (w.preventDefault(), !(!M || _)) {
            D(!0), P(null);
            try {
              const g = await n({ phoneNumber: d, phoneVerificationCode: p, newPassword: N });
              if (!g.ok) {
                P(g.message);
                return;
              }
              k("success");
            } catch {
              P("密码重置失败，请稍后重试。");
            } finally {
              D(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: d, onChange: (w) => {
                m(w.target.value.replace(/\D/g, "").slice(0, 11)), K(""), P(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: O }),
              /* @__PURE__ */ e("span", { className: x, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(d) || V > 0 || _)) {
                D(!0), P(null);
                try {
                  const w = await t(d);
                  if (!w.ok) {
                    P(w.message);
                    return;
                  }
                  B(w.resendAfterSeconds ?? 60), K(w.message ?? "短信验证码已发送");
                } catch {
                  P("验证码发送失败，请稍后重试。");
                } finally {
                  D(!1);
                }
              }
            }, disabled: V > 0 || _ || !/^1[3-9]\d{9}$/.test(d), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${V > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: V > 0 ? `${V}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: p, onChange: (w) => {
              h(w.target.value.replace(/\D/g, "").slice(0, 6)), P(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: O }),
            /* @__PURE__ */ e("span", { className: x, children: "短信验证码" })
          ] }),
          $ && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: $ }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: N, onChange: (w) => {
              E(w.target.value), P(null);
            }, required: !0, placeholder: " ", className: O }),
            /* @__PURE__ */ e("span", { className: x, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: j, onChange: (w) => {
              z(w.target.value), P(null);
            }, required: !0, placeholder: " ", className: `${O} ${j.length > 0 && N !== j ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: x, children: "确认新密码" }),
            j.length > 0 && N !== j && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          W && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: W }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !M || _, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: _ ? "处理中..." : "重置密码" }),
            _ && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(at, { size: 40, className: "text-primary" }) })
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
const Ft = 10, Ht = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function os({
  currentPath: t,
  projects: n,
  initialChats: s,
  logoUrl: l,
  user: a,
  children: u,
  initialAiUsageWarningActive: f = !1,
  aiUsageWarningActive: k,
  canViewAiUsage: d = !0,
  canManageMembers: m = !0,
  chatActions: p = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: h,
  onLogout: N,
  onChatsChange: E,
  onRenameChat: j,
  onTogglePinChat: z,
  onShareChat: _,
  onDeleteChat: D
}) {
  const [V, B] = v(!0), [$, K] = v(240), [W, P] = v(!1), M = me(0), O = me(240), [x, q] = v(() => {
    const c = { unassigned: !0 };
    return n.forEach((H) => {
      c[H.id] = !0;
    }), c;
  }), [ne, I] = v(!1), [w, g] = v(() => [...s]), [X, y] = v(null), [S, U] = v("time"), [ae, ve] = v(!1), [Q, T] = v(null), [L, F] = v(""), [Ce, ke] = v(!1), [Ae, $e] = v(""), [Z, te] = v(!1), [G, A] = v(f), [i, b] = v(!1), re = k ?? G, fe = me(null), se = me(null), de = me(null), pe = !!(p.rename || p.share || p.pin || p.delete), ue = () => {
    I(!1), N();
  }, xe = (c) => {
    q((H) => ({ ...H, [c]: !H[c] }));
  }, be = (c) => {
    var ce;
    g((ee) => ee.filter((He) => He.id !== c)), y(null), Q === c && (T(null), F("")), D == null || D(c), ((ce = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : ce[1]) === c && h("/chat/new", { replace: !0 });
  }, o = (c) => {
    const H = w.find((ee) => ee.id === c);
    if (!H) return;
    const ce = !H.isPinned;
    g((ee) => ee.map(
      (Ye) => Ye.id === c ? { ...Ye, isPinned: ce } : Ye
    )), z == null || z(c, ce), y(null);
  }, C = (c) => {
    T(c.id), F(c.title), y(null);
  }, J = () => {
    T(null), F("");
  }, Y = (c) => {
    const H = L.trim();
    H && (g((ce) => ce.map((ee) => ee.id === c ? { ...ee, title: H } : ee)), j == null || j(c, H)), J();
  }, he = (c, H) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), Y(H);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), J());
  }, Ne = (c) => {
    var H;
    if (Q === c) {
      (H = fe.current) == null || H.focus();
      return;
    }
    h(`/chat/${c}`);
  }, ie = (c, H = !1) => Q === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (ee) => {
        var He;
        ee.stopPropagation(), (He = fe.current) == null || He.focus();
      },
      children: [
        H && /* @__PURE__ */ e(gt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: fe,
            value: L,
            onChange: (ee) => F(ee.target.value),
            onKeyDown: (ee) => he(ee, c.id),
            onBlur: () => Y(c.id),
            onClick: (ee) => ee.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    H && /* @__PURE__ */ e(gt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), R = (c) => {
    M.current = c.clientX, O.current = $, P(!0);
  };
  ye(() => {
    if (!W) return;
    const c = 200, H = 440, ce = (He) => {
      const Ye = He.clientX - M.current, mr = Math.min(H, Math.max(c, O.current + Ye));
      K(mr);
    }, ee = () => {
      P(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", ce), window.addEventListener("mouseup", ee), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", ce), window.removeEventListener("mouseup", ee);
    };
  }, [W, $]), ye(() => {
    V || K(240);
  }, [V]), ye(() => {
    E == null || E(w);
  }, [w, E]), ye(() => {
    g([...s]);
  }, [s]), ye(() => {
    if (!Q) return;
    const c = window.requestAnimationFrame(() => {
      var H;
      (H = fe.current) == null || H.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [Q]), ye(() => () => {
    se.current !== null && window.clearTimeout(se.current), de.current !== null && window.clearTimeout(de.current);
  }, []);
  const _e = () => {
    ve(!0), se.current !== null && window.clearTimeout(se.current), se.current = window.setTimeout(() => {
      ve(!1);
    }, 600);
  }, Be = () => {
    te(!0), de.current !== null && window.clearTimeout(de.current), de.current = window.setTimeout(() => {
      te(!1);
    }, 600);
  };
  ye(() => {
    re || b(!1);
  }, [re]);
  const we = () => {
    b(!0), h("/ai-usage");
  }, le = ge(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...d ? [{
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
  ], [m, d]), oe = (c) => {
    if (I(!1), c.key === "skills") {
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
    c.key === "logout" && ue();
  }, Re = ge(() => p.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(er, { size: 14 }), danger: !0 }] : [], [p.delete]), Se = (c) => {
    const H = [];
    return p.rename && H.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(Ir, { size: 14 }) }), p.share && H.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(Rr, { size: 14 }) }), p.pin && H.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(gt, { size: 14 })
    }), H;
  }, Te = (c, H) => {
    const ce = Ht(c);
    return !pe && !ce ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${ce ? "ml-6" : "ml-2"}`, children: [
      ce && !H && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      pe && /* @__PURE__ */ e(
        ut,
        {
          open: H,
          onOpenChange: (ee) => y(ee ? c.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, $ - 56)),
          trigger: /* @__PURE__ */ e(Br, { size: 14 }),
          onTriggerClick: (ee) => {
            ee.stopPropagation();
          },
          items: Se(c),
          footerItems: Re,
          onItemClick: (ee, He) => {
            if (He.stopPropagation(), ee.key === "rename") {
              C(c);
              return;
            }
            if (ee.key === "share") {
              _ ? _(c.id) : h(`/chat/${c.id}?share=1`), y(null);
              return;
            }
            if (ee.key === "pin") {
              o(c.id);
              return;
            }
            if (ee.key === "delete") {
              be(c.id);
              return;
            }
            y(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${H ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, ze = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(bt, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(ft, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], Me = ge(() => {
    const c = t.match(/^\/chat\/([^/]+)$/);
    return c ? w.find((H) => H.id === c[1]) ?? null : null;
  }, [w, t]), Ee = ge(
    () => w.filter((c) => c.isPinned),
    [w]
  ), Ve = ge(
    () => w.filter((c) => !c.isPinned),
    [w]
  ), Ie = ge(
    () => S === "time" ? Ee.slice(0, Ft) : Ee,
    [Ee, S]
  ), qe = ge(() => {
    if (S !== "time") return [];
    const c = Math.max(Ft - Ie.length, 0);
    return Ve.slice(0, c);
  }, [S, Ve, Ie.length]), xt = ge(
    () => Ie.length + qe.length,
    [Ie.length, qe.length]
  ), zt = S === "time" && w.length > xt, tt = ge(() => new Map(n.map((c) => [c.id, c.name])), [n]), Ge = Ae.trim().toLowerCase(), rt = ge(() => Ge ? w.filter((c) => {
    const H = c.projectId ? tt.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${H} ${c.date}`.toLowerCase().includes(Ge);
  }) : w, [w, Ge, tt]);
  ye(() => {
    if (!Me) return;
    const c = Me.projectId ?? "unassigned";
    q((H) => H[c] !== !1 ? H : { ...H, [c]: !0 });
  }, [Me]);
  const We = () => {
    $e(""), ke(!0);
  }, Ke = () => {
    ke(!1), te(!1), de.current !== null && (window.clearTimeout(de.current), de.current = null);
  }, Je = (c) => {
    ke(!1), h(`/chat/${c}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: V ? $ : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${V ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: $, minWidth: $ },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => h("/chat/new"), children: [
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
                    onClick: () => h("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(Pr, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: ze.map((c) => {
                  const H = c.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => h(c.path),
                      className: `nav-item ${H ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
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
                    onScroll: _e,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ae ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Ie.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Ie.map((c) => {
                          const H = t === `/chat/${c.id}`, ce = X === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ne(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : H ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ie(c, S !== "time"),
                                Q !== c.id && Te(c, ce)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      S === "project" && n.map((c) => {
                        const H = w.filter((ee) => ee.projectId === c.id && !ee.isPinned), ce = x[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => xe(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(bt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: ce ? /* @__PURE__ */ e(dt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(ot, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          ce && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: H.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : H.map((ee) => {
                            const He = t === `/chat/${ee.id}`, Ye = X === ee.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ne(ee.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === ee.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : He ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ie(ee),
                                  Q !== ee.id && Te(ee, Ye)
                                ]
                              }
                            ) }, ee.id);
                          }) })
                        ] }, c.id);
                      }),
                      S === "project" && (() => {
                        const c = w.filter((ce) => !ce.projectId && !ce.isPinned);
                        if (c.length === 0) return null;
                        const H = x.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => xe("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(bt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: H ? /* @__PURE__ */ e(dt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(ot, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          H && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((ce) => {
                            const ee = t === `/chat/${ce.id}`, He = X === ce.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ne(ce.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === ce.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ee ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ie(ce),
                                  Q !== ce.id && Te(ce, He)
                                ]
                              }
                            ) }, ce.id);
                          }) })
                        ] });
                      })(),
                      S === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        qe.map((c) => {
                          const H = t === `/chat/${c.id}`, ce = X === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ne(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : H ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ie(c),
                                Q !== c.id && Te(c, ce)
                              ]
                            }
                          ) }, c.id);
                        }),
                        zt && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: We,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(ot, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                re && !i && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(Er, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
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
                  ut,
                  {
                    open: ne,
                    onOpenChange: I,
                    placement: "top-start",
                    width: $ - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: a.avatarUrl ? /* @__PURE__ */ e("img", { src: a.avatarUrl, alt: `${a.name}头像`, className: "h-full w-full object-cover" }) : a.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: a.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(_r, { size: 18 }) })
                    ] }),
                    items: le,
                    onItemClick: oe,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          V && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: R,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${V ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof u == "function" ? u({ isSidebarOpen: V, setIsSidebarOpen: B, chats: w, setChats: g, setAiUsageWarningActive: A }) : u }) }) }),
    /* @__PURE__ */ e(
      Mt,
      {
        visible: Ce,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Ke,
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
                value: Ae,
                onChange: (c) => $e(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          rt.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Be,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Z ? "is-scrolling is-scrolling-thin" : ""}`,
              children: rt.map((c) => {
                const H = c.projectId ? tt.get(c.projectId) ?? "未分组" : "未分组", ce = Ht(c);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => Je(c.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: c.title }),
                        ce && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: H }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: c.date })
                      ] })
                    ]
                  },
                  c.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e($t, { description: "暂无匹配的历史对话" }) })
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
  skillOptions: u,
  fileOptions: f,
  quickPrompts: k,
  uploadAccept: d,
  validateUploadFile: m,
  onUploadValidationError: p,
  onSelectProject: h,
  onCreateProject: N,
  onOpenSidebar: E,
  onSelectQuickPrompt: j,
  onSend: z
}) {
  const [_, D] = v(!1), [V, B] = v(!1), [$, K] = v(""), W = me(null), P = me(null), M = ge(
    () => t.find((g) => g.id === n) ?? null,
    [t, n]
  ), O = ge(() => [
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
  ], [t, M]), x = ge(() => N ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(tr, { size: 16 }) }] : [], [N]), q = () => {
    B(!1), K("");
  }, ne = (g) => {
    if (g.key === "create") {
      B(!0), K("");
      return;
    }
    const X = g.key === "none" ? null : String(g.key);
    h(X), D(!1);
  }, I = () => {
    const g = $.trim();
    if (!g) return;
    const X = t.find(
      (y) => y.name.trim().toLowerCase() === g.toLowerCase()
    );
    X ? h(X.id) : N == null || N(g), q(), D(!1);
  };
  ye(() => {
    if (!V) return;
    const g = (X) => {
      var S, U;
      const y = X.target;
      (S = P.current) != null && S.contains(y) || (U = W.current) != null && U.contains(y) || (q(), D(!1));
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [V]);
  const w = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: W, className: "relative", children: V && /* @__PURE__ */ e(
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
                  value: $,
                  onChange: (g) => K(g.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Fe, { type: "secondary", size: "small", onClick: q, children: "取消" }),
              /* @__PURE__ */ e(
                Fe,
                {
                  type: "primary",
                  size: "small",
                  onClick: I,
                  disabled: !$.trim(),
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
          onSend: z,
          disabled: s,
          skillOptions: u,
          fileOptions: f,
          uploadAccept: d,
          validateUploadFile: m,
          onUploadValidationError: p,
          leadingControls: /* @__PURE__ */ e(
            ut,
            {
              open: _,
              onOpenChange: (g) => {
                !g && V || (D(g), g ? B(!1) : q());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: M ? M.name : "工作项目" }),
                /* @__PURE__ */ e(dt, { size: 14 })
              ] }),
              items: O,
              footerItems: x,
              onItemClick: ne,
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
        onSelect: j ?? z,
        prompts: k,
        disabled: s
      }
    )
  ] });
  return l ? w : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Zn,
      {
        isSidebarOpen: a,
        onOpenSidebar: E ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: w })
  ] });
}
const ba = "_shell_63t8u_1", ga = "_header_63t8u_5", ya = "_headerActions_63t8u_9", va = "_saveError_63t8u_13", wa = "_viewport_63t8u_17", Na = "_editorCanvas_63t8u_21", ka = "_titleInput_63t8u_25", Ta = "_milkdownHost_63t8u_29", Oe = {
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
}, qt = (t, n) => t.replace("<svg", `<svg class="${n}"`), kt = (t) => `
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
`, Tt = (t) => `chatui-document-menu-type-${t}`;
function ds({
  title: t,
  initialMarkdown: n = "",
  createdByName: s,
  updatedByName: l,
  updatedAt: a,
  index: u,
  attachments: f = [],
  attachmentAccept: k,
  attachmentUnavailableHint: d,
  saving: m = !1,
  saveError: p,
  onTitleChange: h,
  onMarkdownChange: N,
  onUploadAttachments: E,
  onDeleteAttachment: j,
  onSave: z,
  onClose: _
}) {
  const D = me(null), V = me(null), B = me(n), $ = me(N), [K, W] = v(!1), [P, M] = v(null), [O, x] = v("");
  ye(() => {
    $.current = N;
  }, [N]), ye(() => {
    const I = D.current;
    if (!I) return;
    const w = new yt({
      root: I,
      defaultValue: B.current,
      features: {
        [yt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [yt.Feature.BlockEdit]: {
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
          buildMenu: (o) => {
            const C = new Map(
              o.build().flatMap((we) => we.items).map((we) => [we.key, we])
            ), J = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), Y = (we) => {
              const le = we.get(vt), oe = ae, Se = (oe != null && oe.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? oe : oe == null ? void 0 : oe.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (oe instanceof HTMLElement ? oe : null);
              if (!Se) return le;
              try {
                const Te = le.posAtDOM(Se, 0), ze = le.state.doc.resolve(
                  Math.min(
                    Math.max(Te, 0),
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
            }, he = (we) => {
              const le = Y(we), oe = wt.type(we), Re = (ze) => {
                const { $from: Me } = le.state.selection;
                for (let Ee = Me.depth; Ee > 0; Ee -= 1)
                  if (Me.node(Ee).type.name === ze) return !0;
                return !1;
              };
              for (let ze = 0; ze < 10 && !(!Re(oe.name) || !Wr(oe)(
                le.state,
                le.dispatch
              )); ze += 1)
                ;
              for (let ze = 0; ze < 10 && !(!Re("blockquote") || !Hr(le.state, le.dispatch)); ze += 1)
                ;
              const Se = Kr.type(we), Te = le.state.selection.$from.parent;
              Te.isTextblock && Te.type !== Se && we.get(Fr).call(Or.key, {
                nodeType: Se
              });
            }, Ne = (we) => {
              const le = Y(we), { selection: oe } = le.state, Re = wt.type(we), { $from: Se } = oe;
              let Te = -1;
              for (let Me = Se.depth; Me > 0; Me -= 1)
                if (Se.node(Me).type.name === Re.name) {
                  Te = Me;
                  break;
                }
              if (Te > 0) {
                const Me = Te - 1, Ee = Me > 0 && Se.node(Me).childCount === 1 ? Me : Te;
                le.dispatch(
                  le.state.tr.delete(
                    Se.before(Ee),
                    Se.after(Ee)
                  )
                );
                return;
              }
              if (!oe.empty) {
                le.dispatch(
                  le.state.tr.delete(oe.from, oe.to)
                );
                return;
              }
              const ze = Math.min(1, Se.depth);
              ze < 1 || le.dispatch(
                le.state.tr.delete(
                  Se.before(ze),
                  Se.after(ze)
                )
              );
            }, ie = (we, le, oe) => {
              const Re = C.get(le);
              if (!Re) return;
              const { key: Se, ...Te } = Re, ze = (oe == null ? void 0 : oe.icon) ?? Te.icon, Me = [
                Tt(le),
                oe == null ? void 0 : oe.iconClass
              ].filter(Boolean).join(" "), Ee = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(le), Ve = J.has(le) ? (Ie) => {
                var rt;
                if (he(Ie), !Ee) {
                  if (le === "quote") {
                    const We = Ie.get(vt), { $from: Ke } = We.state.selection, Je = Ke.parent, c = Ke.before(Ke.depth), H = We.state.schema.nodes.blockquote;
                    if (!H) return;
                    const ce = H.create(null, Je), ee = We.state.tr.replaceWith(
                      c,
                      c + Je.nodeSize,
                      ce
                    );
                    ee.setSelection(
                      Pt.near(
                        ee.doc.resolve(
                          Math.min(
                            c + 2,
                            ee.doc.content.size
                          )
                        )
                      )
                    ), We.dispatch(ee);
                    return;
                  }
                  (rt = Te.onRun) == null || rt.call(Te, Ie);
                  return;
                }
                const qe = Ie.get(vt), xt = le === "ordered-list" ? Ur.type(Ie) : Vr.type(Ie);
                if (!qr(xt)(
                  qe.state,
                  qe.dispatch
                ) || le !== "task-list") return;
                const tt = wt.type(Ie), { $from: Ge } = qe.state.selection;
                for (let We = Ge.depth; We > 0; We -= 1) {
                  const Ke = Ge.node(We);
                  if (Ke.type !== tt) continue;
                  const Je = Ge.before(We);
                  qe.dispatch(
                    qe.state.tr.setNodeMarkup(Je, void 0, {
                      ...Ke.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Te.onRun;
              we.addItem(le, {
                ...Te,
                label: (oe == null ? void 0 : oe.label) ?? Te.label,
                icon: qt(ze, Me),
                onRun: Ve
              });
            };
            o.clear();
            const R = o.addGroup("basic", "基础");
            [
              {
                key: "h1",
                icon: kt(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: kt(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: kt(3),
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
            ].forEach(({ key: we, icon: le, label: oe }) => {
              ie(R, we, { icon: le, label: oe });
            });
            const _e = o.addGroup("common", "常用");
            ie(_e, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), ie(_e, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), o.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: qt(
                $a,
                "chatui-document-menu-action-delete"
              ),
              onRun: Ne
            });
          }
        }
      }
    });
    w.on((o) => {
      o.markdownUpdated((C, J, Y) => {
        J !== Y && $.current(J);
      });
    });
    const g = I.ownerDocument;
    let X = "", y = null, S = null, U = !1, ae = null, ve = null, Q = null, T = null, L = null;
    const F = (o) => {
      const C = o == null ? void 0 : o.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !C || !C.closest(".ProseMirror") ? null : C.matches("h1") ? "h1" : C.matches("h2") ? "h2" : C.matches("h3") ? "h3" : C.matches("blockquote") ? "quote" : C.matches("pre, .milkdown-code-block") || C.querySelector("pre, .milkdown-code-block") ? "code" : C.querySelector('input[type="checkbox"]') ? "task-list" : C.querySelector(".label.ordered") ? "ordered-list" : C.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Ce = () => I.querySelector(".ProseMirror"), ke = (o) => {
      const C = Ce();
      if (!o || !(C != null && C.contains(o))) return null;
      const J = o.closest(".milkdown-list-item-block");
      if (J && C.contains(J)) return J;
      let Y = o;
      for (; Y != null && Y.parentElement && Y.parentElement !== C; )
        Y = Y.parentElement;
      return !Y || Y.parentElement !== C || Y.classList.contains("prosemirror-virtual-cursor") ? null : Y;
    }, Ae = () => {
      const o = Ce();
      return o ? Array.from(o.children).flatMap((C) => {
        if (C.classList.contains("prosemirror-virtual-cursor")) return [];
        const J = Array.from(
          C.querySelectorAll(".milkdown-list-item-block")
        );
        return J.length ? J : [C];
      }) : [];
    }, $e = (o) => {
      var Y;
      const C = Ae(), J = C.map((he) => ({ block: he, rect: he.getBoundingClientRect() })).filter(({ rect: he }) => o >= he.top && o <= he.bottom).sort((he, Ne) => he.rect.height - Ne.rect.height);
      return J[0] ? J[0].block : ((Y = C.map((he) => {
        const Ne = he.getBoundingClientRect(), ie = Math.min(
          Math.abs(o - Ne.top),
          Math.abs(o - Ne.bottom)
        );
        return { block: he, distance: ie };
      }).sort((he, Ne) => he.distance - Ne.distance)[0]) == null ? void 0 : Y.block) ?? null;
    }, Z = (o) => {
      var Ne, ie;
      const C = g.querySelector(
        ".milkdown-slash-menu"
      );
      C == null || C.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (R) => R.removeAttribute("data-chatui-selected")
      ), o && ((ie = (Ne = C == null ? void 0 : C.querySelector(`svg.${Tt(o)}`)) == null ? void 0 : Ne.closest("li")) == null || ie.setAttribute("data-chatui-selected", "true"));
      const J = g.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!J) return;
      X || (X = J.innerHTML);
      const Y = o ? C == null ? void 0 : C.querySelector(
        `svg.${Tt(o)}`
      ) : null, he = o ?? "default";
      J.dataset.chatuiBlockType !== he && (J.innerHTML = (Y == null ? void 0 : Y.outerHTML) ?? X, J.dataset.chatuiBlockType = he);
    }, te = (o) => {
      o !== S && (S = o, y = F(o)), Z(y);
    }, G = () => {
      var J;
      const o = (J = g.getSelection()) == null ? void 0 : J.anchorNode, C = o instanceof Element ? o : o == null ? void 0 : o.parentElement;
      te(ke(C ?? null));
    }, A = () => {
      const o = ve, C = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (!o || !C || C.dataset.show !== "true") return;
      const J = C.getBoundingClientRect();
      if (!J.width || !J.height) return;
      const Y = o.getBoundingClientRect(), he = g.defaultView, Ne = (he == null ? void 0 : he.innerWidth) ?? g.documentElement.clientWidth, ie = (he == null ? void 0 : he.innerHeight) ?? g.documentElement.clientHeight, R = 12, _e = 8, Be = Math.max(
        R,
        Ne - J.width - R
      ), we = Math.max(
        R,
        ie - J.height - R
      ), le = (Ee) => Math.min(Math.max(Ee, R), Be), oe = (Ee) => Math.min(Math.max(Ee, R), we);
      let Re = "left", Se = Y.left - J.width - _e, Te = oe(Y.top);
      if (Se < R) {
        const Ee = Y.top - _e - R, Ve = ie - Y.bottom - _e - R, Ie = Ve >= J.height || Ve >= Ee;
        Re = Ie ? "bottom" : "top", Se = le(Y.left), Te = oe(Ie ? Y.bottom + _e : Y.top - J.height - _e);
      }
      const ze = `${Se}px`, Me = `${Te}px`;
      C.style.getPropertyValue("--chatui-block-menu-left") !== ze && C.style.setProperty("--chatui-block-menu-left", ze), C.style.getPropertyValue("--chatui-block-menu-top") !== Me && C.style.setProperty("--chatui-block-menu-top", Me), C.dataset.chatuiPlacement = Re;
    }, i = () => {
      const o = g.querySelector(
        ".milkdown-slash-menu"
      );
      o && (o.style.removeProperty("--chatui-block-menu-left"), o.style.removeProperty("--chatui-block-menu-top"), delete o.dataset.chatuiPlacement);
    }, b = (o) => {
      o !== L && (L == null || L.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), L = o, L == null || L.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, re = () => {
      T !== null && window.cancelAnimationFrame(T), T = window.requestAnimationFrame(() => {
        T = null, A();
      });
    }, fe = () => {
      ve = null, U = !1, ae = null, b(null), w.editor.action((o) => {
        o.get("menuAPICtx").hide();
      }), i();
    }, se = (o) => {
      const C = o.target instanceof Element ? o.target : null, J = g.querySelector(
        ".milkdown-slash-menu"
      );
      if (J) {
        const Ne = J.getBoundingClientRect(), ie = Ne.width > 0 && Ne.height > 0, R = o.clientX >= Ne.left && o.clientX <= Ne.right && o.clientY >= Ne.top && o.clientY <= Ne.bottom;
        if (ie) {
          if (R) {
            b(
              (C == null ? void 0 : C.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), U = !0;
            return;
          }
          if (b(null), C != null && C.closest(".milkdown-block-handle")) return;
          const _e = Ce(), Be = C && (_e != null && _e.contains(C)) ? ke(C) ?? $e(o.clientY) : null;
          if (Be && ae && Be !== ae) {
            fe();
            return;
          }
          if (Be === ae) return;
          U && fe();
          return;
        }
        U = !1, b(null);
      }
      if (C != null && C.closest(".milkdown-block-handle")) {
        Z(y);
        return;
      }
      const Y = Ce();
      if (!C || !(Y != null && Y.contains(C))) return;
      const he = ke(C) ?? $e(o.clientY);
      te(he);
    }, de = (o) => {
      const C = o.target instanceof Element ? o.target : null;
      b(
        (C == null ? void 0 : C.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, pe = (o) => {
      const C = o.target instanceof Element ? o.target : null, J = C == null ? void 0 : C.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!J) return;
      const Y = o.relatedTarget instanceof Element ? o.relatedTarget : null;
      if (Y && J.contains(Y)) return;
      const he = Y == null ? void 0 : Y.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      b(he ?? null);
    }, ue = (o) => {
      const C = o.target instanceof Element ? o.target : null, J = C == null ? void 0 : C.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (J) {
        const Y = y;
        ve = J, ae = S, window.setTimeout(() => {
          Z(Y), re();
        }, 0);
      }
    }, xe = (o) => {
      o.key === "/" && window.setTimeout(G, 0);
    };
    g.addEventListener("pointermove", se), g.addEventListener("pointerover", de), g.addEventListener("pointerout", pe), g.addEventListener("click", ue), I.addEventListener("keyup", xe);
    const be = w.create();
    return be.then(() => {
      var C;
      (C = I.querySelector(".ProseMirror")) == null || C.focus();
      const o = g.querySelector(
        ".milkdown-slash-menu"
      );
      o && (Q = new MutationObserver(() => {
        if (o.dataset.show === "true" && ve) {
          re();
          return;
        }
        o.dataset.show !== "true" && (ve = null, ae = null, b(null), i());
      }), Q.observe(o, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      })), G();
    }), () => {
      g.removeEventListener("pointermove", se), g.removeEventListener(
        "pointerover",
        de
      ), g.removeEventListener("pointerout", pe), g.removeEventListener("click", ue), I.removeEventListener("keyup", xe), be.then(() => {
        Q == null || Q.disconnect(), T !== null && window.cancelAnimationFrame(T), w.destroy();
      });
    };
  }, []);
  const q = async (I) => {
    const w = Array.from(I.target.files ?? []);
    if (I.target.value = "", !(!w.length || !E)) {
      W(!0), x("");
      try {
        await E(w);
      } catch (g) {
        x(
          g instanceof Error ? g.message : "附件上传失败"
        );
      } finally {
        W(!1);
      }
    }
  }, ne = async (I) => {
    if (j) {
      M(I), x("");
      try {
        await j(I);
      } catch (w) {
        x(
          w instanceof Error ? w.message : "附件删除失败"
        );
      } finally {
        M(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: Oe.shell, "aria-label": "项目文档编辑器", children: [
    /* @__PURE__ */ e("header", { className: Oe.header, children: /* @__PURE__ */ r("div", { className: Oe.headerActions, children: [
      /* @__PURE__ */ e(
        Fe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: m,
          onClick: _,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Fe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: m,
          onClick: z,
          children: m ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${Oe.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          p && /* @__PURE__ */ e("div", { className: Oe.saveError, children: p }),
          /* @__PURE__ */ r("div", { className: Oe.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: "mb-4 shrink-0 px-[120px]", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (I) => h(I.target.value),
                  placeholder: "请输入标题",
                  className: Oe.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                or,
                {
                  createdByName: s,
                  updatedByName: l,
                  updatedAt: a,
                  index: u
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: D,
                  className: `${Oe.milkdownHost} ${cr.editor} chatui-project-document-editor`,
                  style: Ca
                }
              ),
              E && /* @__PURE__ */ e(
                "input",
                {
                  ref: V,
                  type: "file",
                  multiple: !0,
                  accept: k,
                  className: "hidden",
                  onChange: (I) => {
                    q(I);
                  }
                }
              ),
              /* @__PURE__ */ e(
                ir,
                {
                  attachments: f,
                  uploading: K,
                  deletingAttachmentId: P,
                  unavailableHint: d,
                  error: O,
                  onRequestUpload: E ? () => {
                    var I;
                    return (I = V.current) == null ? void 0 : I.click();
                  } : void 0,
                  onDeleteAttachment: j ? (I) => {
                    ne(I);
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
  onOpenSidebar: u,
  onInstall: f,
  onUninstall: k,
  onRetry: d
}) {
  const [m, p] = v("installed"), [h, N] = v(""), [E, j] = v(!1), [z, _] = v([]), [D, V] = v(null), B = ge(() => new Set(a), [a]), $ = ge(() => {
    const x = h.trim().toLowerCase();
    return n.filter((q) => m === "installed" !== q.installed ? !1 : x ? [q.name, q.source, q.description, ...q.tags].join(" ").toLowerCase().includes(x) : !0);
  }, [m, h, n]), K = (x) => {
    p(x), j(!1), _([]);
  }, W = () => {
    j((x) => !x), _([]);
  }, P = (x) => _((q) => q.includes(x) ? q.filter((ne) => ne !== x) : [...q, x]), M = (x) => x.installed ? k([x.id]) : f([x.id]), O = () => {
    z.length && (m === "installed" ? k(z) : f(z), _([]), j(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: u, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(Jt, { size: 20 }) }),
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
          /* @__PURE__ */ e("input", { value: h, onChange: (x) => N(x.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => K("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => K("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: E, onChange: (x) => {
                j(x.target.checked), _([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          d && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: d, children: "重新加载" })
        ] }),
        !l && s && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (x, q) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, q)) }),
        !l && !s && $.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": a.length > 0, children: $.map((x) => {
          const q = z.includes(x.id), ne = B.has(x.id), I = q ? "border-skillSelectedBorder bg-skillSelectedSurface" : D === x.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${I}`, onMouseEnter: () => V(x.id), onMouseLeave: () => V((w) => w === x.id ? null : w), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: x.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: x.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${La[x.riskLevel]}`, children: za[x.riskLevel] }),
                E && /* @__PURE__ */ e("button", { type: "button", onClick: () => P(x.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": q ? `取消选择 ${x.name}` : `选择 ${x.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${q ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: x.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: x.tags.map((w) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: w }, `${x.id}-${w}`)) }),
              !E && /* @__PURE__ */ e("button", { type: "button", disabled: ne, onClick: () => M(x), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${D === x.id || ne ? "inline-flex" : "hidden"} ${x.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: ne ? "处理中..." : x.installed ? "卸载" : "安装" })
            ] })
          ] }, x.id);
        }) }) : !l && !s ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    E && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        z.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: W, disabled: a.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: O, disabled: !z.length || a.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: a.length > 0 ? "处理中..." : m === "installed" ? "批量卸载" : "批量安装" })
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
  Ct as T,
  da as U,
  ca as V,
  ut as a,
  Fe as b,
  Oa as c,
  En as d,
  Mt as e,
  ar as f,
  $t as g,
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
