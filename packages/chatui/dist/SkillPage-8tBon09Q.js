import { jsxs as r, Fragment as nt, jsx as e } from "react/jsx-runtime";
import Ve, { useMemo as fe, useState as b, useRef as ce, useCallback as je, useLayoutEffect as qt, useEffect as he, forwardRef as pr, useId as jr } from "react";
import Fe from "classnames";
import { Check as ut, Copy as Pt, RefreshCcw as Fr, ThumbsUp as Hr, ThumbsDown as qr, ArrowUpRight as Wr, Info as Or, Ban as Ur, TriangleAlert as Ut, CircleCheckBig as zt, ShieldCheck as hr, CircleHelp as fr, FileText as Bt, LoaderCircle as xr, Puzzle as br, AtSign as gr, AlertCircle as Vr, Paperclip as yr, ArrowRight as vr, ChevronDown as yt, ChevronRight as xt, CircleX as wr, Sparkles as Nr, Loader2 as ot, Clock3 as _t, Search as dt, BookOpen as Yt, ListChecks as Kr, Globe as Gr, Minus as Xr, Menu as kr, Upload as Yr, Trash2 as Tr, CheckCircle2 as vt, SearchX as Qr, FlaskConical as Zr, X as gt, Plus as Cr, Cpu as Qt, ChevronUp as Jr, Brain as en, Square as tn, Send as rn, UserPlus as nn, Building2 as an, Folder as Dt, PanelLeftClose as sn, SquarePen as ln, AlertTriangle as on, Settings as cn, Pin as jt, MoreHorizontal as dn, Pencil as un, Share2 as mn } from "lucide-react";
import Sr from "react-markdown";
import Mr from "remark-gfm";
import pn from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as hn } from "react-dom";
import { Crepe as kt } from "@milkdown/crepe";
import { commandsCtx as fn, editorViewCtx as Tt } from "@milkdown/kit/core";
import { lift as xn } from "@milkdown/kit/prose/commands";
import { liftListItem as bn, wrapInList as gn } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Zt } from "@milkdown/kit/prose/state";
import { listItemSchema as Ct, paragraphSchema as yn, setBlockTypeCommand as vn, orderedListSchema as Jt, bulletListSchema as er, headingSchema as wn } from "@milkdown/kit/preset/commonmark";
const Nn = "_button_3tg6r_1", kn = "_primary_3tg6r_5", Tn = "_disabled_3tg6r_9", Cn = "_secondary_3tg6r_17", Sn = "_ghost_3tg6r_25", Mn = "_danger_3tg6r_33", $n = "_small_3tg6r_41", Ln = "_medium_3tg6r_45", zn = "_large_3tg6r_49", En = "_roundedSquare_3tg6r_53", An = "_roundedSmall_3tg6r_57", Pn = "_roundedMedium_3tg6r_61", Bn = "_roundedLarge_3tg6r_62", _n = "_roundedFull_3tg6r_66", In = "_loadingSpinner_3tg6r_67", Rn = "_loading_3tg6r_67", Dn = "_fullWidth_3tg6r_90", jn = "_icon_3tg6r_94", We = {
  button: Nn,
  primary: kn,
  disabled: Tn,
  secondary: Cn,
  ghost: Sn,
  danger: Mn,
  small: $n,
  medium: Ln,
  large: zn,
  roundedSquare: En,
  roundedSmall: An,
  roundedMedium: Pn,
  roundedLarge: Bn,
  roundedFull: _n,
  loadingSpinner: In,
  loading: Rn,
  fullWidth: Dn,
  icon: jn
}, Fn = {
  primary: We.primary,
  secondary: We.secondary,
  ghost: We.ghost,
  danger: We.danger
}, Hn = {
  small: We.small,
  medium: We.medium,
  large: We.large
}, qn = {
  square: We.roundedSquare,
  small: We.roundedSmall,
  medium: We.roundedMedium,
  large: We.roundedLarge,
  full: We.roundedFull
}, Qe = Ve.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: o,
    loading: i,
    disabled: l = !1,
    children: m,
    icon: h,
    iconPosition: w = "left",
    className: g,
    fullWidth: p = !1,
    rounded: S = "medium",
    onClick: u,
    ...v
  }, T) => {
    const j = o ?? i ?? !1, N = l || j, I = fe(() => j ? /* @__PURE__ */ r(nt, { children: [
      /* @__PURE__ */ e("span", { className: We.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: m })
    ] }) : h ? /* @__PURE__ */ r(nt, { children: [
      w === "left" && /* @__PURE__ */ e("span", { className: We.icon, children: h }),
      m && /* @__PURE__ */ e("span", { children: m }),
      w === "right" && /* @__PURE__ */ e("span", { className: We.icon, children: h })
    ] }) : m, [m, j, h, w]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: T,
        className: Fe(
          We.button,
          Fn[t],
          Hn[n],
          qn[S],
          {
            [We.fullWidth]: p,
            [We.loading]: j,
            [We.disabled]: N
          },
          g
        ),
        disabled: N,
        onClick: u,
        ...v,
        children: I
      }
    );
  }
);
Qe.displayName = "BaseButton";
const Wn = { small: "h-8", medium: "h-9", large: "h-14" }, $r = Ve.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: o,
    defaultValue: i,
    disabled: l = !1,
    readOnly: m = !1,
    error: h = !1,
    size: w = "medium",
    prefix: g,
    suffix: p,
    prefixIcon: S,
    suffixIcon: u,
    onChange: v,
    onFocus: T,
    onBlur: j,
    onClear: N,
    className: I,
    containerClassName: G,
    clearable: K = !1,
    label: O,
    helperText: z,
    ...le
  }, X) => {
    const [F, P] = b(!1), J = ce(null), f = je((ie) => {
      J.current = ie, typeof X == "function" ? X(ie) : X && (X.current = ie);
    }, [X]), re = je(() => {
      var $, ne;
      const ie = J.current;
      ie && ((ne = ($ = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : $.set) == null || ne.call(ie, ""), ie.dispatchEvent(new Event("input", { bubbles: !0 })), ie.focus(), N == null || N());
    }, [N]), Z = fe(
      () => {
        var ie;
        return K && F && String(o ?? ((ie = J.current) == null ? void 0 : ie.value) ?? "").length > 0;
      },
      [K, F, o]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      O && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: O }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Fe(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Wn[w],
            !l && !h && "hover:border-controlBorder",
            F && !l && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && F && "ring-2 ring-dangerFocus",
            l && "cursor-not-allowed bg-surfaceMuted",
            G
          ),
          children: [
            (g || S) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: g || S }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: f,
                type: t,
                placeholder: n,
                value: o,
                defaultValue: i,
                disabled: l,
                readOnly: m,
                className: Fe("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", I),
                onFocus: (ie) => {
                  P(!0), T == null || T(ie);
                },
                onBlur: (ie) => {
                  P(!1), j == null || j(ie);
                },
                onChange: v,
                ...le
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              Z && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (ie) => ie.preventDefault(), onClick: re, "aria-label": "清空", children: "✕" }),
              p || u
            ] })
          ]
        }
      ),
      z && /* @__PURE__ */ e("div", { className: Fe("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: z })
    ] });
  }
);
$r.displayName = "BaseInput";
const On = { small: "h-8", medium: "h-9", large: "h-14" }, Un = Ve.forwardRef(
  ({ options: t = [], value: n, defaultValue: o, placeholder: i, disabled: l = !1, error: m = !1, size: h = "medium", label: w, helperText: g, onChange: p, className: S, ...u }, v) => {
    const T = je((j) => {
      const N = j.target.value, I = t.find((G) => String(G.value) === N);
      p == null || p(N === "" ? "" : (I == null ? void 0 : I.value) ?? N);
    }, [p, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      w && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: w }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: v,
            className: Fe(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              m && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              On[h],
              S
            ),
            value: n ?? o ?? "",
            disabled: l,
            onChange: T,
            ...u,
            children: [
              i && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: i }),
              t.map((j) => /* @__PURE__ */ e("option", { value: j.value, disabled: j.disabled, children: j.label }, j.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      g && /* @__PURE__ */ e("div", { className: Fe("text-xs leading-6", m ? "text-danger" : "text-mutedText"), children: g })
    ] });
  }
);
Un.displayName = "BaseSelect";
const Vn = "_container_ykn59_1", Kn = "_item_ykn59_10", Gn = "_itemActive_ykn59_27", Xn = "_itemDisabled_ykn59_27", Yn = "_sizeSmall_ykn59_43", Qn = "_sizeMiddle_ykn59_49", Zn = "_sizeLarge_ykn59_55", ct = {
  container: Vn,
  item: Kn,
  itemActive: Gn,
  itemDisabled: Xn,
  sizeSmall: Yn,
  sizeMiddle: Qn,
  sizeLarge: Zn
}, Jn = {
  small: ct.sizeSmall,
  middle: ct.sizeMiddle,
  large: ct.sizeLarge
};
function ws({
  options: t,
  value: n,
  defaultValue: o,
  onChange: i,
  size: l = "middle",
  disabled: m = !1,
  className: h
}) {
  var u;
  const [w, g] = b(
    o ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), p = n ?? w, S = (v) => {
    m || (n === void 0 && g(v), i == null || i(v));
  };
  return /* @__PURE__ */ e("div", { className: Fe(ct.container, Jn[l], h), children: t.map((v) => {
    const T = p === v.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Fe(ct.item, T && ct.itemActive, m && ct.itemDisabled),
        onClick: () => S(v.value),
        disabled: m,
        "aria-pressed": T,
        children: v.label
      },
      v.value
    );
  }) });
}
const ea = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, ta = Ve.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: o = !1, onChange: i, onError: l, maxSize: m, children: h, className: w, dragable: g = !0, placeholderTitle: p, placeholderDescription: S, placeholderIcon: u, maxCount: v }, T) => {
    const j = ce(null), [N, I] = b(!1), G = je((O) => {
      if (v && O.length > v) {
        l == null || l(new Error(`单次最多上传 ${v} 个文件`));
        return;
      }
      if (m) {
        for (const z of Array.from(O))
          if (z.size > m) {
            l == null || l(new Error(`文件“${z.name}”超过大小限制（${ea(m)}）`));
            return;
          }
      }
      i == null || i(O);
    }, [v, m, i, l]), K = () => {
      var O;
      o || (O = j.current) == null || O.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: T,
        className: Fe(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          N && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          w
        ),
        onClick: K,
        onKeyDown: (O) => {
          !o && (O.key === "Enter" || O.key === " ") && (O.preventDefault(), K());
        },
        onDragOver: (O) => {
          g && !o && (O.preventDefault(), I(!0));
        },
        onDragLeave: () => I(!1),
        onDrop: (O) => {
          g && !o && (O.preventDefault(), I(!1), G(O.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: j, type: "file", accept: t, multiple: n, disabled: o, onChange: (O) => O.target.files && G(O.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: u ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: p ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: S ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
ta.displayName = "BaseUpload";
const ra = "_maskAnimation_1h49h_1", na = "_modalAnimation_1h49h_5", tr = {
  maskAnimation: ra,
  modalAnimation: na
}, Vt = ({
  visible: t,
  open: n = t,
  show: o = n,
  title: i,
  width: l = 520,
  centered: m = !0,
  destroyOnClose: h = !1,
  mask: w = !0,
  maskClosable: g = !0,
  okText: p = "确认",
  cancelText: S = "取消",
  confirmLoading: u = !1,
  okButtonProps: v,
  cancelButtonProps: T,
  onConfirm: j,
  onCancel: N,
  onClose: I,
  onOk: G,
  onDismiss: K,
  children: O,
  footer: z,
  className: le,
  bodyClassName: X
}) => {
  const F = o ?? !1, P = je(async () => {
    try {
      j ? await j() : G && await G();
    } catch (re) {
      console.error("Modal confirm error:", re);
    }
  }, [j, G]), J = je(() => {
    N ? N() : I ? I() : K == null || K();
  }, [N, I, K]), f = fe(() => {
    if (z === null) return null;
    if (z) return z;
    const { type: re, ...Z } = T ?? {}, { type: ie, ...$ } = v ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Qe, { type: "secondary", size: "medium", onClick: J, ...Z, children: S }),
      /* @__PURE__ */ e(Qe, { type: "primary", size: "medium", isLoading: u, onClick: P, ...$, children: u ? "加载中..." : p })
    ] });
  }, [T, S, u, z, J, P, v, p]);
  return !F && h || !F ? null : /* @__PURE__ */ r(nt, { children: [
    w && /* @__PURE__ */ e("div", { className: Fe("fixed inset-0 z-[1000] bg-overlayMask", tr.maskAnimation), onClick: () => g && J(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Fe(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          m && "left-1/2 top-1/2",
          tr.modalAnimation,
          le
        ),
        style: { width: l },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          i && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: i }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: J, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Fe("min-h-20 p-5 text-primaryText", X), children: O }),
          f
        ]
      }
    )
  ] });
};
Vt.displayName = "BaseModal";
const aa = ({ title: t, extra: n, children: o, hoverable: i = !1, loading: l = !1, bordered: m = !0, className: h, bodyClassName: w, onClick: g }) => /* @__PURE__ */ r(
  "div",
  {
    className: Fe(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      m && "border border-borderGray",
      i && "cursor-pointer hover:border-borderGray hover:shadow-md",
      l && "pointer-events-none opacity-60",
      h
    ),
    onClick: g,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Fe("p-4 text-primaryText", (t || n) && "pt-1", w), children: o })
    ]
  }
);
aa.displayName = "BaseCard";
const sa = ({ columns: t, dataSource: n = [], rowKey: o = "id", loading: i = !1, bordered: l = !0, striped: m = !0, className: h, onRow: w }, g) => /* @__PURE__ */ r("div", { ref: g, className: Fe("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: l ? "border-b border-lineSubtle" : void 0, children: t.map((p) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: p.width, textAlign: p.align }, children: p.title }, p.key || String(p.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((p, S) => {
      const u = String(typeof o == "string" ? p[o] ?? S : S);
      return /* @__PURE__ */ e("tr", { className: Fe(l && "border-b border-lineSoft last:border-b-0", m && "odd:bg-surface"), ...(w == null ? void 0 : w(p, S)) || {}, children: t.map((v) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: v.align }, children: v.render ? v.render(p[v.dataIndex], p, S) : String(p[v.dataIndex] ?? "") }, v.key || String(v.dataIndex))) }, u);
    }) })
  ] }),
  i && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Ns = Ve.forwardRef(sa), la = ({ current: t = 1, pageSize: n = 10, total: o = 0, onChange: i, showSizeChanger: l = !1, pageSizeOptions: m = [10, 20, 50, 100], onShowSizeChange: h, disabled: w = !1, className: g }) => {
  const p = fe(() => Math.ceil(o / n) || 1, [n, o]), S = je((v) => h == null ? void 0 : h(1, Number(v.target.value)), [h]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Fe("flex flex-wrap items-center justify-center gap-4 p-4", g), children: [
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t > 1 && (i == null ? void 0 : i(t - 1)), disabled: w || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      p,
      " 页，共 ",
      o,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t < p && (i == null ? void 0 : i(t + 1)), disabled: w || t >= p, children: "下一页 →" }),
    l && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: S, disabled: w, children: m.map((v) => /* @__PURE__ */ r("option", { value: v, children: [
      v,
      " 条/页"
    ] }, v)) })
  ] });
};
la.displayName = "BasePagination";
const Kt = ({ description: t = "暂无数据", image: n, children: o }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  o
] });
Kt.displayName = "BaseEmpty";
const Et = ({ trigger: t, items: n, footerItems: o = [], open: i = !1, onOpenChange: l, onTriggerClick: m, onItemClick: h, placement: w = "bottom-start", width: g, portal: p = !1, className: S, triggerClassName: u, menuClassName: v, listClassName: T, footerClassName: j }) => {
  const N = ce(null), I = ce(null), [G, K] = b({}), O = w.endsWith("end"), z = w.startsWith("top");
  qt(() => {
    var f;
    if (!i || !p || !N.current) return;
    const P = N.current.getBoundingClientRect(), J = z ? ((f = I.current) == null ? void 0 : f.offsetHeight) ?? 0 : 0;
    K({
      position: "fixed",
      left: O ? P.right : P.left,
      top: z ? P.top - J - 8 : P.bottom,
      transform: O ? "translateX(-100%)" : void 0
    });
  }, [z, O, i, p, w]), he(() => {
    if (!i || !l) return;
    const P = (J) => {
      var re, Z;
      const f = J.target;
      (re = N.current) != null && re.contains(f) || (Z = I.current) != null && Z.contains(f) || l(!1);
    };
    return document.addEventListener("mousedown", P), () => document.removeEventListener("mousedown", P);
  }, [l, i]);
  const le = fe(() => g ? { width: typeof g == "number" ? `${g}px` : g } : void 0, [g]), X = je((P) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Fe(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !P.danger && !P.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !P.danger && P.active && "bg-primary-soft font-medium text-primary",
        P.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (J) => h == null ? void 0 : h(P, J),
      disabled: P.disabled,
      children: [
        P.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: P.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: P.label })
      ]
    },
    P.key
  ), [h]), F = i ? /* @__PURE__ */ r(
    "div",
    {
      ref: I,
      className: Fe(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !p && "absolute",
        !p && !z && "top-[calc(100%+8px)]",
        !p && z && "bottom-[calc(100%+8px)]",
        !p && O ? "right-0" : p ? void 0 : "left-0",
        v
      ),
      style: p ? { ...G, ...le } : le,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Fe("flex min-h-0 flex-col gap-1", T), children: n.map(X) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: Fe("flex flex-col gap-1 border-t border-lineSoft pt-2", j), children: o.map(X) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: N, className: Fe("relative inline-block", S), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Fe("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (P) => {
      m == null || m(P), l == null || l(!i);
    }, "aria-haspopup": "menu", "aria-expanded": i, children: t }),
    p ? F && hn(F, document.body) : F
  ] });
};
Et.displayName = "BaseActionMenu";
const ia = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: o,
  feedback: i,
  onFeedback: l,
  disabled: m = !1
}) => {
  const [h, w] = b(!1), g = !!(o || l), p = je(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), w(!0), window.setTimeout(() => w(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${g ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: p,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制" : n,
            children: h ? /* @__PURE__ */ e(ut, { size: 15 }) : /* @__PURE__ */ e(Pt, { size: 15 })
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
            children: /* @__PURE__ */ e(Fr, { size: 15 })
          }
        ),
        l && /* @__PURE__ */ r(nt, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Hr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(qr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, rr = Ve.memo(ia), oa = {
  clarification: {
    icon: /* @__PURE__ */ e(fr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(zt, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(hr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(zt, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ut, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  blocked: {
    icon: /* @__PURE__ */ e(Ur, { size: 16 }),
    className: "border-danger bg-danger-soft",
    iconClassName: "text-danger"
  },
  info: {
    icon: /* @__PURE__ */ e(Or, { size: 16 }),
    className: "border-lineSubtle bg-surfaceMuted",
    iconClassName: "text-secondaryText"
  }
};
function ca({ card: t, actionPending: n = !1, onAction: o }) {
  const i = oa[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${i.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${i.iconClassName}`, "aria-hidden": "true", children: i.icon }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ e("h3", { className: "m-0 text-sm font-semibold leading-5 text-primaryText", children: t.title }),
        t.statusLabel && /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText", children: t.statusLabel })
      ] }),
      t.summary && /* @__PURE__ */ e("p", { className: "m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText", children: t.summary }),
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((l, m) => /* @__PURE__ */ e("li", { children: l }, `${m}-${l}`)) }),
      t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.links.map((l) => /* @__PURE__ */ r(
        "a",
        {
          href: l.href,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary",
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: l.label }),
            /* @__PURE__ */ e(Wr, { size: 12, className: "shrink-0" })
          ]
        },
        `${l.href}-${l.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((l) => /* @__PURE__ */ e(
        Qe,
        {
          type: l.tone ?? "secondary",
          size: "small",
          disabled: n || !o,
          onClick: () => o == null ? void 0 : o(t.actionKey, l.id),
          children: l.label
        },
        l.id
      )) })
    ] })
  ] }) });
}
function da({ draft: t, onPreview: n, onConfirm: o, onCancel: i }) {
  const l = t.status === "saving", m = t.status === "saved", h = t.actionable ?? !0, w = t.previewable ?? !0, g = l || m || !h || !o;
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
        !m && h && i && /* @__PURE__ */ e(
          Qe,
          {
            type: "secondary",
            size: "small",
            disabled: l,
            onClick: () => i(t.actionKey),
            children: "取消"
          }
        ),
        (h || m) && /* @__PURE__ */ e(
          Qe,
          {
            type: m ? "secondary" : "primary",
            size: "small",
            disabled: g,
            onClick: () => o == null ? void 0 : o(t.actionKey),
            children: l ? /* @__PURE__ */ r(nt, { children: [
              /* @__PURE__ */ e(xr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : m ? /* @__PURE__ */ r(nt, { children: [
              /* @__PURE__ */ e(ut, { size: 14, "aria-hidden": "true" }),
              "已保存"
            ] }) : "确认保存"
          }
        )
      ] })
    ] }),
    t.status === "error" && t.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: t.errorMessage })
  ] });
}
const nr = "[[PAPER_LIST_JSON]]";
let ar = !1, St = null, Mt = null, $t = null;
const ua = async () => (Mt || (Mt = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw Mt = null, t;
})), Mt), ma = async () => ($t || ($t = import("remark-emoji").then((t) => t.default).catch(() => ($t = null, null))), $t), pa = async () => {
  St || (St = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw St = null, n;
  }));
  const t = await St;
  if (!ar) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), ar = !0;
  }
  return t;
}, At = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => At(n)).join("") : Ve.isValidElement(t) ? At(t.props.children) : "", sr = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, ha = ({ href: t, label: n }) => {
  const o = fe(() => {
    const i = n.trim();
    if (i) return i;
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
        children: /* @__PURE__ */ e(vr, { size: 14 })
      }
    )
  ] });
}, fa = ({ language: t, rawCode: n, className: o, children: i }) => {
  const [l, m] = b(!1), h = je(async () => {
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
          className: `code-block-copy-btn ${l ? "copied" : ""}`,
          title: l ? "已复制代码" : "复制代码",
          children: [
            l ? /* @__PURE__ */ e(ut, { size: 12 }) : /* @__PURE__ */ e(Pt, { size: 12 }),
            l ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${o ?? ""}`.trim(), children: i }) })
  ] });
}, xa = ({ rawCode: t }) => {
  const [n, o] = b(!1), i = je(async () => {
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
          onClick: i,
          className: `code-block-copy-btn ${n ? "copied" : ""}`,
          title: n ? "已复制图表代码" : "复制图表代码",
          children: [
            n ? /* @__PURE__ */ e(ut, { size: 12 }) : /* @__PURE__ */ e(Pt, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, Lr = (t) => {
  const n = typeof t.title == "string" ? t.title.trim() : "", o = typeof t.pmid == "string" ? t.pmid.trim() : "", i = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !o || !i ? null : { title: n, pmid: o, doi: i };
}, lr = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((i) => i.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const o = [];
  return n.forEach((i, l) => {
    var u;
    const m = i.match(/PMID\s*[:：]\s*(\d{4,})/i), h = i.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!m || !h) return;
    const w = i.slice(0, m.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), g = ((u = n[l - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", S = Lr({
      title: w || g,
      pmid: m[1],
      doi: h[1]
    });
    S && o.push(S);
  }), o.length === 0 ? null : { items: o };
}, ba = (t) => {
  if (!t.startsWith(nr))
    return lr(t);
  const n = t.slice(nr.length).trim();
  if (!n) return null;
  try {
    const o = JSON.parse(n);
    if (!Array.isArray(o.items)) return null;
    const i = o.items.map((l) => Lr(l)).filter((l) => l !== null);
    return i.length === 0 ? null : { items: i };
  } catch {
    return lr(n);
  }
}, zr = ({
  msg: t,
  actionKey: n,
  feedback: o,
  onFeedback: i,
  onRefresh: l,
  onConfirmMiraDraft: m,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: w,
  pendingDisplayActionKey: g,
  onDisplayCardAction: p,
  isTyping: S = !1,
  isStreaming: u
}) => {
  var ne, M;
  const v = t.role === "user", T = u ?? S, j = ce(null), [N, I] = b(null), [G, K] = b(null), [O, z] = b(null), [le, X] = b(!1), F = fe(() => /```\s*mermaid/i.test(t.content), [t.content]), P = fe(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), J = fe(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), f = fe(
    () => v ? null : ba(t.content),
    [v, t.content]
  ), re = !!(f && f.items.length > 0);
  he(() => {
    if (!P || N || G) return;
    let y = !1;
    return ua().then((k) => {
      y || (I(() => k.remark), K(() => k.rehype));
    }).catch(() => {
    }), () => {
      y = !0;
    };
  }, [P, N, G]), he(() => {
    if (!J || le) return;
    let y = !1;
    return ma().then((k) => {
      y || (k && z(() => k), X(!0));
    }), () => {
      y = !0;
    };
  }, [J, le]);
  const Z = fe(() => {
    const y = [Mr];
    return O && y.push(O), N && y.push(N), y;
  }, [O, N]), ie = fe(() => {
    const y = [pn];
    return G && y.push(G), y;
  }, [G]), $ = fe(
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
        const se = Ve.Children.toArray(k);
        if (se.length === 1 && Ve.isValidElement(se[0])) {
          const de = se[0];
          if (typeof de.props.href == "string" && sr(de.props.href)) {
            const ue = At(de.props.children).trim();
            return /* @__PURE__ */ e(ha, { href: de.props.href, label: ue });
          }
        }
        return /* @__PURE__ */ e("p", { ...x, children: k });
      },
      a: ({ node: y, href: k, ...x }) => {
        const se = k ?? "", de = /^https?:\/\/(dx\.)?doi\.org\//i.test(se) || /^doi:/i.test(se), ue = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(se) || /\/pmc\/|\/pmid\//i.test(se), U = sr(se);
        return de || ue || U ? /* @__PURE__ */ e(
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
        const x = Ve.Children.toArray(y).find(
          (H) => Ve.isValidElement(H) && typeof H.props.className == "string" && H.props.className.includes("language-")
        );
        if (!x)
          return /* @__PURE__ */ e("pre", { ...k, children: y });
        const se = x.props.className ?? "", de = se.match(/language-([\w-]+)/), ue = de ? de[1].toLowerCase() : "code", U = At(x.props.children).replace(/\n$/, "");
        return ue === "mermaid" ? /* @__PURE__ */ e(xa, { rawCode: U }) : /* @__PURE__ */ e(fa, { language: ue, rawCode: U, className: se, children: x.props.children });
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
  return he(() => {
    if (v || T || !F) return;
    const y = j.current;
    if (!y) return;
    const k = Array.from(y.querySelectorAll(".mermaid")).filter(
      (x) => x.dataset.processed !== "true"
    );
    k.length !== 0 && pa().then(async (x) => {
      await Promise.all(
        k.map(async (se, de) => {
          var te;
          const ue = (te = se.textContent) == null ? void 0 : te.trim();
          if (!ue) return;
          const U = `mermaid-${Date.now()}-${de}`, { svg: H } = await x.render(U, ue);
          se.innerHTML = H, se.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [v, T, F, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${v ? "justify-end" : "justify-start"}`, children: v ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (ne = t.references) == null ? void 0 : ne.map((y) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${y.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              y.type === "skill" ? /* @__PURE__ */ e(br, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(gr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: y.label, children: y.label })
            ]
          },
          y.id
        )),
        (M = t.attachments) == null ? void 0 : M.map((y) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${y.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: y.status === "error" ? "alert" : void 0,
            title: y.errorMessage,
            children: [
              y.status === "uploading" ? /* @__PURE__ */ e(xr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : y.status === "error" ? /* @__PURE__ */ e(Vr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : y.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: y.previewUrl, alt: y.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(yr, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
      rr,
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
              children: /* @__PURE__ */ e(vr, { size: 14 })
            }
          )
        ]
      },
      `${y.pmid}-${k}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: j,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Sr,
          {
            remarkPlugins: Z,
            rehypePlugins: ie,
            components: $,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      da,
      {
        draft: t.miraDraft,
        onPreview: h,
        onConfirm: m,
        onCancel: w
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      ca,
      {
        card: t.displayCard,
        actionPending: g === t.displayCard.actionKey,
        onAction: p
      }
    ),
    !re && t.content && !T && /* @__PURE__ */ e(
      rr,
      {
        markdownContent: t.content,
        onRefresh: l,
        feedback: o,
        onFeedback: n && i ? (y) => i(n, y) : void 0,
        disabled: T
      }
    )
  ] }) }) });
}, ga = Ve.memo(zr), ya = {
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
}, va = {
  queued: /* @__PURE__ */ e(_t, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(Nr, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(fr, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(zt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(hr, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Ut, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(wr, { size: 14, className: "text-danger" })
}, ir = {
  knowledge: {
    icon: /* @__PURE__ */ e(Yt, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Gr, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(dt, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(Kr, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(Yt, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(Nr, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(dt, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, wa = {
  running: {
    icon: /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(zt, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(wr, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(Xr, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ut, { size: 13 }),
    colorClass: "text-warning"
  }
}, Wt = ({
  phase: t,
  searchSteps: n = [],
  label: o,
  defaultExpanded: i = !0,
  elapsedSeconds: l,
  reasoning: m
}) => {
  const [h, w] = b(i), [g, p] = b(!1), S = ce(null);
  he(() => {
    n.length > 0 && w(!0);
  }, [n.length]);
  const u = n.length > 0, v = l === void 0 ? void 0 : `${Math.floor(l / 60)}:${String(l % 60).padStart(2, "0")}`, T = (m == null ? void 0 : m.split(/\r?\n/).map((N) => N.trim()).filter(Boolean)) ?? [], j = T[T.length - 1] ?? "";
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: va[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: o || ya[t] }),
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
            h ? /* @__PURE__ */ e(yt, { size: 12 }) : /* @__PURE__ */ e(xt, { size: 12 }),
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
          "aria-expanded": g,
          children: [
            g ? /* @__PURE__ */ e(yt, { size: 14 }) : /* @__PURE__ */ e(xt, { size: 14 }),
            /* @__PURE__ */ e("span", { className: "shrink-0", children: "Thinking" }),
            !g && j && /* @__PURE__ */ r("span", { className: "relative ml-2 min-w-0 flex-1 overflow-hidden text-left text-[12px] font-normal text-tertiaryText", children: [
              /* @__PURE__ */ e("span", { className: "block whitespace-nowrap", children: j }),
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
      g && /* @__PURE__ */ e("div", { className: "mt-2 whitespace-pre-wrap border-t border-lineSubtle pt-2 text-[13px] leading-6 text-secondaryText", children: m })
    ] }),
    u && /* @__PURE__ */ e(
      "div",
      {
        ref: S,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${h ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((N, I) => {
          const G = ir[N.type] ?? ir.tool, K = N.status ? wa[N.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${G.colorClass}`, children: G.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: N.label }),
                    K && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${K.colorClass}`,
                        "aria-label": N.status,
                        children: K.icon
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
            N.id ?? `${N.type}-${I}-${N.label}`
          );
        })
      }
    )
  ] });
}, Na = Ve.memo(Wt);
function ka(t, n) {
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
function Ta({
  messages: t,
  isTyping: n,
  statusPhase: o = "thinking",
  statusLabel: i,
  statusVisible: l,
  searchSteps: m = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: w = 800,
  selection: g,
  scrollbar: p,
  feedbackByMessageKey: S,
  getMessageKey: u = (X, F) => String(F),
  onFeedback: v,
  onRegenerate: T,
  onConfirmMiraDraft: j,
  onPreviewMiraDraft: N,
  onCancelMiraDraft: I,
  pendingDisplayActionKey: G,
  onDisplayCardAction: K,
  onScroll: O,
  scrollContainerRef: z,
  onMessageElement: le
}) {
  var ze, Se;
  const X = !!g, F = ce(null), P = ce(null), J = ce(/* @__PURE__ */ new Map()), f = ce(), re = ce(), [Z, ie] = b(), [$, ne] = b(0), M = o === "awaiting_clarification" || o === "awaiting_confirmation" || o === "awaiting_approval" || o === "warning" || o === "failed", y = n && (l ?? !h) || l === !0 && M;
  let k = -1, x = -1;
  if (n) {
    for (let ee = t.length - 1; ee >= 0; ee -= 1)
      if (((ze = t[ee]) == null ? void 0 : ze.role) === "user") {
        x = ee;
        break;
      }
    for (let ee = t.length - 1; ee > x; ee -= 1)
      if (((Se = t[ee]) == null ? void 0 : Se.role) === "assistant") {
        k = ee;
        break;
      }
  }
  const se = x >= 0 ? u(t[x], x) : void 0, de = k >= 0 ? u(t[k], k) : void 0, ue = se && de ? `${se}:${de}` : void 0, U = k >= 0 ? t[k] : void 0, H = !!(U != null && U.reasoning && !U.content), te = y && (!h || H || M);
  he(() => {
    if (!n) {
      re.current = void 0, ne(0);
      return;
    }
    re.current = Date.now(), ne(0);
    const ee = window.setInterval(() => {
      const A = re.current;
      A !== void 0 && ne(Math.floor((Date.now() - A) / 1e3));
    }, 1e3);
    return () => window.clearInterval(ee);
  }, [n]);
  const Ie = je(
    (ee) => {
      F.current = ee, ka(z, ee);
    },
    [z]
  );
  return qt(() => {
    if (!ue || !de || x < 0 || k < 0)
      return;
    const ee = F.current, A = P.current, W = J.current.get(x);
    if (!ee || !A || !W) return;
    const V = () => {
      const Be = window.getComputedStyle(ee), Me = window.getComputedStyle(A), Re = ee.clientHeight - Ft(Be.paddingTop) - Ft(Be.paddingBottom), Ee = Ft(Me.rowGap || Me.gap), $e = Math.max(
        0,
        Math.floor(Re - W.offsetHeight - Ee)
      );
      ie(
        (pe) => (pe == null ? void 0 : pe.assistantKey) === de && pe.minHeight === $e ? pe : { assistantKey: de, minHeight: $e }
      );
    };
    V();
    const _ = new ResizeObserver(V);
    return _.observe(ee), _.observe(W), () => _.disconnect();
  }, [
    k,
    de,
    ue,
    x
  ]), qt(() => {
    if (!ue || !de || (Z == null ? void 0 : Z.assistantKey) !== de || x < 0 || f.current === ue)
      return;
    const ee = F.current, A = J.current.get(x);
    !ee || !A || (ee.scrollTo({ top: A.offsetTop, behavior: "auto" }), f.current = ue);
  }, [de, ue, x, Z]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: Ie,
        "data-chat-scroll-container": !0,
        onScroll: O,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: P,
            className: `flex w-full flex-col ${X ? "gap-3" : "gap-8"}`,
            style: { maxWidth: w },
            children: [
              t.map((ee, A) => {
                const W = u(ee, A), V = (g == null ? void 0 : g.selectedMessageKeys.has(W)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": A,
                    "data-chat-turn-reserved": (Z == null ? void 0 : Z.assistantKey) === W ? "true" : void 0,
                    ref: (_) => {
                      _ ? J.current.set(A, _) : J.current.delete(A), le == null || le(A, _);
                    },
                    className: X ? "flex w-full items-start gap-2" : void 0,
                    style: (Z == null ? void 0 : Z.assistantKey) === W ? { minHeight: Z.minHeight } : void 0,
                    children: [
                      g && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => g.onToggleMessage(W),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": V ? "取消选择消息" : "选择消息",
                          children: V ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ut, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: g ? `relative min-w-0 flex-1 rounded-xl px-2 transition-colors ${V ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${ee.role === "user" ? "py-2.5" : "py-1.5"}` : "relative",
                          children: [
                            A === k && te && /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 z-10 flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              Wt,
                              {
                                phase: o,
                                label: i,
                                searchSteps: H ? [] : [...m],
                                elapsedSeconds: n ? $ : void 0,
                                reasoning: H ? U == null ? void 0 : U.reasoning : void 0
                              }
                            ) }),
                            /* @__PURE__ */ e(
                              zr,
                              {
                                msg: ee,
                                actionKey: W,
                                feedback: S == null ? void 0 : S[W],
                                onFeedback: v,
                                onRefresh: T ? () => T(A) : void 0,
                                onConfirmMiraDraft: j,
                                onPreviewMiraDraft: N,
                                onCancelMiraDraft: I,
                                pendingDisplayActionKey: G,
                                onDisplayCardAction: K,
                                isTyping: n && A === k
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
                Wt,
                {
                  phase: o,
                  label: i,
                  searchSteps: H ? [] : [...m],
                  elapsedSeconds: n ? $ : void 0
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
Ve.memo(Ta);
function ks({
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
const Ts = pr(
  function({ header: n, children: o, sidePanels: i }, l) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: l, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: o }),
        i
      ] })
    ] });
  }
), Cs = pr(
  function({ open: n, width: o, resizing: i = !1, overlay: l = !1, overlayRight: m = 0, children: h }, w) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: w,
        "data-overlay": l ? "true" : "false",
        style: { width: n ? o : 0, ...l ? { right: m } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${l ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${i ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: o }, className: "h-full min-w-0", children: h })
      }
    );
  }
);
function Ca({
  isSidebarOpen: t,
  title: n,
  editingTitle: o,
  titleInputRef: i,
  divided: l = !1,
  actions: m,
  onOpenSidebar: h,
  onStartEditTitle: w,
  onEditingTitleChange: g,
  onCommitTitle: p,
  onEditingTitleKeyDown: S
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
              onClick: h,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(kr, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: o !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: i,
              value: o,
              onChange: (v) => g == null ? void 0 : g(v.target.value),
              onBlur: p,
              onKeyDown: S,
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
function Ss({ active: t = !1, icon: n, label: o, onClick: i }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: i,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: o })
      ]
    }
  );
}
function Ms({
  items: t,
  activeMessageIndex: n,
  initiallyExpanded: o = !1,
  onSelect: i
}) {
  const [l, m] = b(o), [h, w] = b(null), [g, p] = b(0), [S, u] = b(0), [v, T] = b(!1), j = ce(null), N = ce({}), I = ce(null), G = je(() => {
    const z = j.current;
    if (!z) {
      p(0), u(0);
      return;
    }
    const { scrollTop: le, scrollHeight: X, clientHeight: F } = z;
    if (X <= F || F <= 0) {
      p(0), u(0);
      return;
    }
    const P = Math.max(F / X * F, 24), J = F - P, f = le / Math.max(X - F, 1);
    p(P), u(J * f);
  }, []), K = je(() => {
    G(), T(!0), I.current !== null && window.clearTimeout(I.current), I.current = window.setTimeout(() => T(!1), 650);
  }, [G]), O = () => {
    I.current !== null && (window.clearTimeout(I.current), I.current = null), m(!1), w(null), T(!1);
  };
  return he(() => {
    if (!l) return;
    const z = window.requestAnimationFrame(G);
    return () => window.cancelAnimationFrame(z);
  }, [l, t.length, G]), he(() => {
    const z = j.current, le = N.current[n];
    if (!z || !le) return;
    const X = z.scrollTop, F = X + z.clientHeight, P = le.offsetTop, J = P + le.offsetHeight, f = 16;
    P < X + f ? z.scrollTo({ top: Math.max(P - f, 0), behavior: "auto" }) : J > F - f && z.scrollTo({
      top: Math.max(J - z.clientHeight + f, 0),
      behavior: "auto"
    });
  }, [n, t.length]), he(() => () => {
    I.current !== null && window.clearTimeout(I.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => m(!0),
      onMouseLeave: O,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: j,
          onScroll: K,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${l ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((z) => {
              const le = z.messageIndex === n, X = h === z.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (F) => {
                    N.current[z.messageIndex] = F;
                  },
                  type: "button",
                  onClick: () => i(z.messageIndex),
                  onMouseEnter: () => w(z.messageIndex),
                  onMouseLeave: () => w(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${l ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${z.messageIndex + 1} 条用户消息`,
                  title: z.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${l ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${le ? "text-primary" : X ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: z.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${le ? "h-[4px] w-[12px] bg-primary" : X ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                z.messageIndex
              );
            }) }),
            l && g > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${v ? "opacity-100" : "opacity-0"}`,
                style: { height: g, transform: `translateY(${S}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function $s({
  selectedCount: t,
  shareLink: n,
  modalOpen: o,
  copied: i = !1,
  contentMaxWidth: l = 840,
  onCancel: m,
  onCreateLink: h,
  onCloseModal: w,
  onCopyLink: g
}) {
  return /* @__PURE__ */ r(nt, { children: [
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
            /* @__PURE__ */ e(Qe, { type: "secondary", size: "small", onClick: m, children: "取消" }),
            /* @__PURE__ */ e(
              Qe,
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
      Vt,
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
                onClick: g,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  i ? /* @__PURE__ */ e(ut, { size: 14 }) : /* @__PURE__ */ e(Pt, { size: 14 }),
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
function Er({
  attachments: t,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: o = !1,
  deletingAttachmentId: i,
  unavailableHint: l,
  error: m,
  onRequestUpload: h,
  onDeleteAttachment: w
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ r("div", { className: h ? "pr-28" : void 0, children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      h && /* @__PURE__ */ e("div", { className: "absolute right-0 top-6", children: /* @__PURE__ */ e(
        Qe,
        {
          type: "secondary",
          size: "small",
          disabled: o,
          onClick: h,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            o ? /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Yr, { size: 14 }),
            o ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${h ? "pr-28" : ""}`, children: t.map((g) => {
      const p = i === g.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: g.statusLabel,
          children: [
            /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: g.name }),
            g.status === "processing" && /* @__PURE__ */ e(ot, { size: 12, className: "animate-spin" }),
            w && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: p,
                onClick: () => w(g.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${g.name}`,
                title: "删除附件",
                children: p ? /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(Tr, { size: 13 })
              }
            )
          ]
        },
        g.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    l && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: l }),
    m && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: m })
  ] });
}
const Sa = {
  disabled: /* @__PURE__ */ e(Qr, { size: 14 }),
  pending: /* @__PURE__ */ e(_t, { size: 14 }),
  indexed: /* @__PURE__ */ e(vt, { size: 14 })
};
function Ar({
  createdByName: t,
  updatedByName: n,
  updatedAt: o,
  index: i
}) {
  return !t && !n && !o && !i ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    n && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      n
    ] }),
    o && /* @__PURE__ */ e("span", { children: o }),
    i && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: i.detail, children: [
      Sa[i.status],
      i.statusLabel
    ] })
  ] });
}
const Ma = "_preview_a55vk_1", $a = "_editor_a55vk_3", Pr = {
  preview: Ma,
  editor: $a
};
function La({
  document: t,
  layout: n = "page"
}) {
  const [o, i] = b(!1), l = ce(null), m = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  he(() => () => {
    l.current !== null && window.clearTimeout(l.current);
  }, []);
  const h = () => {
    i(!0), l.current !== null && window.clearTimeout(l.current), l.current = window.setTimeout(() => i(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${m}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        Ar,
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
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${Pr.preview} ${m}`, children: /* @__PURE__ */ e(Sr, { remarkPlugins: [Mr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Kt, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            Er,
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
function Ls({
  tabs: t,
  activeKey: n,
  onSelectTab: o,
  onCloseTab: i,
  onClose: l,
  pendingActionKey: m,
  onAction: h,
  resolveActions: w,
  renderContent: g,
  onResizeStart: p
}) {
  const S = t.find((T) => T.key === n) ?? null, u = S ? (w == null ? void 0 : w(S)) ?? S.actions : void 0, v = S ? g == null ? void 0 : g(S) : void 0;
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
        const j = T.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => o(T.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${j ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                T.type === "knowledge" || T.type === "draft" ? /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Zr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: T.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (N) => {
                N.stopPropagation(), i(T.key);
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
        S && (u == null ? void 0 : u.map((T) => /* @__PURE__ */ e(
          Qe,
          {
            type: T.tone ?? "secondary",
            size: "small",
            disabled: m === S.key || !h,
            onClick: () => h == null ? void 0 : h(S.key, T.id),
            children: T.label
          },
          T.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: l,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(gt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: S ? v || (S.document ? /* @__PURE__ */ e(La, { document: S.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: S.loading ? "正在加载文档…" : S.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function zs({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: o,
  knowledgeDocs: i,
  experiments: l,
  activePreviewKey: m,
  onSearchQueryChange: h,
  onOpenKnowledge: w,
  onOpenExperiment: g,
  onResizeStart: p
}) {
  const S = i.length + l.length;
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
              onChange: (u) => h(u.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : S === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(nt, { children: [
        i.map((u) => {
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
        l.map((u) => {
          const v = `experiment:${u.id}`, T = m === v;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => g(u.id),
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
const za = 50, Ea = 100 * 1024 * 1024, Aa = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", Pa = [
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
], Ba = /(?:^|\s)\/([^\s/]*)$/, _a = /(?:^|\s)@([^\s@]*)$/, Ia = (t, n) => {
  const i = t.slice(0, n).match(Ba);
  return i ? i[1] : null;
}, Ra = (t, n) => {
  const i = t.slice(0, n).match(_a);
  return i ? i[1] : null;
}, Es = (t, n, o, i) => {
  const l = t.slice(0, n), m = t.slice(o), h = l.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const u = `/${i} `;
    return { value: `${l}${u}${m}`, cursor: l.length + u.length };
  }
  const w = l.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}/${i} `, S = `${l.slice(0, w)}${p}`;
  return {
    value: `${S}${m}`,
    cursor: S.length
  };
}, As = (t, n, o, i) => {
  const l = t.slice(0, n), m = t.slice(o), h = l.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const u = `@${i} `;
    return { value: `${l}${u}${m}`, cursor: l.length + u.length };
  }
  const w = l.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}@${i} `, S = `${l.slice(0, w)}${p}`;
  return {
    value: `${S}${m}`,
    cursor: S.length
  };
}, Da = [], Ps = [], Ht = [
  { id: "low", label: "Fast", desc: "快速响应，适合简单问题" },
  { id: "medium", label: "Deep", desc: "深度分析，平衡速度与质量" },
  { id: "high", label: "Max", desc: "最强推理，适合复杂任务" }
], or = "DeepSeek V4", Br = ({
  onSend: t,
  disabled: n,
  autoFocus: o = !1,
  isStreaming: i = !1,
  onCancel: l,
  leadingControls: m,
  skillOptions: h = Pa,
  fileOptions: w = Da,
  uploadAccept: g,
  validateUploadFile: p,
  onUploadValidationError: S
}) => {
  var xe, Q;
  const [u, v] = b(""), [T, j] = b(!1), [N, I] = b(!1), [G, K] = b(""), [O, z] = b(-1), [le, X] = b(!1), [F, P] = b(""), [J, f] = b(-1), [re, Z] = b([]), [ie, $] = b([]), [ne, M] = b([]), [y, k] = b(!1), [x, se] = b("medium"), [de, ue] = b(!1), [U, H] = b(!1), [te, Ie] = b(null), ze = ce(null), Se = ce(!1), ee = ce(0), A = ce(null), W = jr(), V = ce([]), _ = ce(null), Be = ce(null), Me = ce(null), Re = ce(null), Ee = i, $e = Ee && !!l;
  he(() => {
    V.current = re;
  }, [re]), he(() => () => {
    V.current.forEach((a) => {
      a.previewUrl && URL.revokeObjectURL(a.previewUrl);
    });
  }, []), he(() => {
    if (!de) return;
    const a = (B) => {
      _.current && !_.current.contains(B.target) && (ue(!1), H(!1));
    };
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, [de]), he(() => () => {
    Re.current && clearTimeout(Re.current);
  }, []);
  const pe = fe(() => {
    const a = G.trim().toLowerCase();
    return a ? h.filter((B) => `${B.id} ${B.description} ${B.source}`.toLowerCase().includes(a)) : h;
  }, [h, G]), Ne = fe(() => {
    const a = F.trim().toLowerCase();
    return a ? w.filter((B) => `${B.name} ${B.projectName} ${B.sourceType} ${B.operatorName ?? ""} ${B.operatedAt ?? ""}`.toLowerCase().includes(a)) : w.filter((B) => B.isRecent).slice(0, 10);
  }, [w, F]), ke = je((a, B) => {
    const q = B ?? a.length, Te = Ia(a, q);
    if (Te !== null) {
      I(!0), K(Te), z(-1), X(!1), P(""), f(-1);
      return;
    }
    const we = Ra(a, q);
    if (we !== null) {
      X(!0), P(we), f(-1), I(!1), K(""), z(-1);
      return;
    }
    I(!1), K(""), z(-1), X(!1), P(""), f(-1);
  }, []), _e = je((a) => {
    if (a.disabled) return;
    const B = ze.current, q = (B == null ? void 0 : B.selectionStart) ?? u.length, Te = (B == null ? void 0 : B.selectionEnd) ?? q, we = u.slice(0, q), He = u.slice(Te), be = (() => {
      const Ae = we.match(/(?:^|\s)\/[^\s/]*$/);
      if (!Ae)
        return { value: u, cursor: q };
      const De = we.length - Ae[0].length, Ue = Ae[0].startsWith(" ") ? " " : "", Ge = `${we.slice(0, De)}${Ue}`;
      return {
        value: `${Ge}${He}`,
        cursor: Ge.length
      };
    })();
    $((Ae) => {
      const De = `skill-${a.id}`;
      return Ae.some((Ue) => Ue.id === De) ? Ae : [...Ae, { id: De, type: "skill", label: a.id, sourceId: a.id }];
    }), v(be.value), I(!1), K(""), z(-1), requestAnimationFrame(() => {
      B && (B.focus(), B.setSelectionRange(be.cursor, be.cursor));
    });
  }, [u]), ve = je((a) => {
    const B = ze.current, q = (B == null ? void 0 : B.selectionStart) ?? u.length, Te = (B == null ? void 0 : B.selectionEnd) ?? q, we = u.slice(0, q), He = u.slice(Te), be = (() => {
      const Ae = we.match(/(?:^|\s)@[^\s@]*$/);
      if (!Ae)
        return { value: u, cursor: q };
      const De = we.length - Ae[0].length, Ue = Ae[0].startsWith(" ") ? " " : "", Ge = `${we.slice(0, De)}${Ue}`;
      return {
        value: `${Ge}${He}`,
        cursor: Ge.length
      };
    })();
    M((Ae) => {
      const De = `doc-${a.id}`;
      return Ae.some((Ue) => Ue.id === De) ? Ae : [...Ae, { id: De, type: "doc", label: a.name, sourceId: a.id }];
    }), v(be.value), X(!1), P(""), f(-1), requestAnimationFrame(() => {
      B && (B.focus(), B.setSelectionRange(be.cursor, be.cursor));
    });
  }, [u]), Y = je(() => {
    k(!1);
    const a = A.current;
    if (a) {
      try {
        if ("showPicker" in a && typeof a.showPicker == "function") {
          a.showPicker();
          return;
        }
      } catch {
      }
      a.click();
    }
  }, []), Xe = je((a) => {
    const B = Array.from(a.target.files ?? []);
    if (B.length === 0) return;
    const q = B.filter((Te) => {
      const we = p == null ? void 0 : p(Te);
      return we ? (S == null || S(we), !1) : !0;
    });
    Z((Te) => {
      const we = new Set(Te.map((be) => be.id)), He = [...Te];
      return q.forEach((be) => {
        if (be.size > Ea || He.length >= za) return;
        const Ae = `${be.name}-${be.size}-${be.lastModified}`;
        if (we.has(Ae)) return;
        const De = be.type.startsWith("image/");
        we.add(Ae), He.push({
          id: Ae,
          name: be.name,
          mimeType: be.type || "application/octet-stream",
          previewUrl: De ? URL.createObjectURL(be) : void 0,
          file: be
        });
      }), He;
    }), a.target.value = "";
  }, [S, p]), Ze = je((a) => {
    Z((B) => {
      const q = B.find((Te) => Te.id === a);
      return q != null && q.previewUrl && URL.revokeObjectURL(q.previewUrl), B.filter((Te) => Te.id !== a);
    });
  }, []), Ke = je((a) => {
    $((B) => B.filter((q) => q.id !== a));
  }, []), Je = je((a) => {
    M((B) => B.filter((q) => q.id !== a));
  }, []), et = je(() => {
    !u.trim() || n || i || (t({
      content: u,
      attachments: re.map((a) => ({
        id: a.id,
        name: a.name,
        mimeType: a.mimeType,
        previewUrl: a.previewUrl,
        file: a.file
      })),
      references: [...ie, ...ne],
      thinkingLevel: x
    }), v(""), Z([]), $([]), M([]), I(!1), K(""), z(-1), X(!1), P(""), f(-1));
  }, [u, n, i, t, re, ne, ie, x]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: W,
        ref: A,
        type: "file",
        multiple: !0,
        accept: g,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Xe
      }
    ),
    (re.length > 0 || ie.length > 0 || ne.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      ie.map((a) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(br, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: a.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ke(a.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${a.label}`,
                children: /* @__PURE__ */ e(gt, { size: 12 })
              }
            )
          ]
        },
        a.id
      )),
      ne.map((a) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(gr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: a.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Je(a.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${a.label}`,
                children: /* @__PURE__ */ e(gt, { size: 12 })
              }
            )
          ]
        },
        a.id
      )),
      re.map((a) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            a.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: a.previewUrl, alt: a.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(yr, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: a.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: a.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ze(a.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${a.name}`,
                children: /* @__PURE__ */ e(gt, { size: 12 })
              }
            )
          ]
        },
        a.id
      ))
    ] }) }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: ze,
        autoFocus: o,
        value: u,
        onCompositionStart: () => {
          Se.current = !0;
        },
        onCompositionEnd: (a) => {
          Se.current = !1, ee.current = performance.now(), ke(
            a.currentTarget.value,
            a.currentTarget.selectionStart
          );
        },
        onChange: (a) => {
          const B = a.target.value;
          v(B), ke(B, a.target.selectionStart);
        },
        onClick: (a) => {
          ke(a.currentTarget.value, a.currentTarget.selectionStart);
        },
        onKeyUp: (a) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(a.key) || ke(a.currentTarget.value, a.currentTarget.selectionStart);
        },
        onKeyDown: (a) => {
          const B = a.nativeEvent;
          if (!(Se.current || B.isComposing || B.keyCode === 229 || a.key === "Enter" && performance.now() - ee.current < 50)) {
            if (a.key === "Enter" && (a.shiftKey || a.metaKey || a.ctrlKey)) {
              a.preventDefault();
              const q = a.currentTarget, Te = q.selectionStart ?? u.length, we = q.selectionEnd ?? Te, He = `${u.slice(0, Te)}
${u.slice(we)}`, be = Te + 1;
              v(He), ke(He, be), requestAnimationFrame(() => {
                q.setSelectionRange(be, be);
              });
              return;
            }
            if (N) {
              if (a.key === "ArrowDown") {
                a.preventDefault(), z((q) => pe.length === 0 ? -1 : q < 0 ? 0 : (q + 1) % pe.length);
                return;
              }
              if (a.key === "ArrowUp") {
                a.preventDefault(), z((q) => pe.length === 0 ? -1 : q < 0 ? pe.length - 1 : (q - 1 + pe.length) % pe.length);
                return;
              }
              if (a.key === "Escape") {
                a.preventDefault(), I(!1), K(""), z(-1);
                return;
              }
              if (a.key === "Enter" && !a.shiftKey) {
                a.preventDefault();
                const q = O >= 0 ? pe[O] : void 0;
                q && _e(q);
                return;
              }
            }
            if (le) {
              if (a.key === "ArrowDown") {
                a.preventDefault(), f((q) => Ne.length === 0 ? -1 : q < 0 ? 0 : (q + 1) % Ne.length);
                return;
              }
              if (a.key === "ArrowUp") {
                a.preventDefault(), f((q) => Ne.length === 0 ? -1 : q < 0 ? Ne.length - 1 : (q - 1 + Ne.length) % Ne.length);
                return;
              }
              if (a.key === "Escape") {
                a.preventDefault(), X(!1), P(""), f(-1);
                return;
              }
              if (a.key === "Enter" && !a.shiftKey) {
                a.preventDefault();
                const q = J >= 0 ? Ne[J] : void 0;
                q && ve(q);
                return;
              }
            }
            a.key === "Enter" && !a.shiftKey && (a.preventDefault(), et());
          }
        },
        disabled: n,
        onFocus: () => j(!0),
        onBlur: () => {
          j(!1), I(!1), X(!1);
        },
        placeholder: T ? Aa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${re.length > 0 || ie.length > 0 || ne.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    N && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (a) => a.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(dt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: G ? `搜索 skill：${G}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: pe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : pe.map((a, B) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: a.disabled,
          title: a.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${a.disabled ? "cursor-not-allowed opacity-50" : B === O ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => _e(a),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: a.badge }),
            /* @__PURE__ */ r("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: a.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: a.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: a.disabledReason || a.source })
          ]
        },
        a.id
      )) })
    ] }) }),
    le && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (a) => a.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(dt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: F ? `搜索文件：${F}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !F && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(_t, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        Ne.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : Ne.map((a, B) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${B === J ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => ve(a),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Bt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: a.name }),
              !F && a.operatorName && a.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${a.operatorName} ${a.operatedAt}` })
            ]
          },
          a.id
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
                  onClick: Y,
                  "aria-controls": W,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Cr, { size: 16 })
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
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r("div", { ref: _, className: "relative", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: i,
              onClick: () => {
                ue((a) => !a), H(!1);
              },
              "aria-haspopup": "menu",
              "aria-expanded": de,
              className: `flex h-8 select-none items-center gap-1.5 rounded-full border px-2.5 text-[13px] font-medium transition-all disabled:cursor-not-allowed disabled:opacity-60 ${de ? "border-controlBorderHover bg-primary-soft text-primary" : "border-borderGray bg-white text-secondaryText hover:border-controlBorder hover:bg-bgLight"}`,
              children: [
                /* @__PURE__ */ e(Qt, { size: 13, className: "shrink-0" }),
                /* @__PURE__ */ e("span", { className: "max-w-[90px] truncate leading-none", children: or }),
                /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center rounded bg-bgLight px-1 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (xe = Ht.find((a) => a.id === x)) == null ? void 0 : xe.label }),
                /* @__PURE__ */ e(
                  Jr,
                  {
                    size: 12,
                    className: `shrink-0 transition-transform duration-200 ${de ? "rotate-0" : "rotate-180"}`
                  }
                )
              ]
            }
          ),
          de && /* @__PURE__ */ r(
            "div",
            {
              ref: Be,
              role: "menu",
              className: "absolute bottom-full right-0 z-50 mb-2 w-[220px] rounded-xl border border-[#e6ecf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
              onMouseDown: (a) => a.preventDefault(),
              children: [
                /* @__PURE__ */ e("div", { className: "px-3 pb-1 pt-2.5", children: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-tertiaryText", children: [
                  /* @__PURE__ */ e(Qt, { size: 11 }),
                  "模型"
                ] }) }),
                /* @__PURE__ */ e("div", { className: "px-1.5 pb-1", children: /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "menuitemradio",
                    "aria-checked": "true",
                    onClick: () => {
                      ue(!1), H(!1);
                    },
                    className: "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-primaryText transition-colors hover:bg-[#f4f7fb]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "truncate text-[13px] font-medium leading-tight", children: or }),
                      /* @__PURE__ */ e("span", { className: "flex w-4 shrink-0 items-center gap-1.5", children: /* @__PURE__ */ e(ut, { size: 14, className: "shrink-0 text-primaryText" }) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "mx-3 border-t border-[#eef2f6]" }),
                /* @__PURE__ */ e("div", { className: "px-1.5 py-1.5", children: /* @__PURE__ */ r(
                  "div",
                  {
                    ref: Me,
                    className: "relative",
                    onMouseEnter: () => {
                      if (Re.current && clearTimeout(Re.current), Be.current) {
                        const a = Be.current.getBoundingClientRect();
                        Ie({
                          bottom: window.innerHeight - a.bottom,
                          left: a.left - 209
                        });
                      }
                      H(!0);
                    },
                    onMouseLeave: () => {
                      Re.current = setTimeout(() => H(!1), 120);
                    },
                    children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: `flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 transition-colors ${U ? "bg-[#f4f7fb]" : "hover:bg-[#f4f7fb]"}`,
                          children: [
                            /* @__PURE__ */ r("span", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ e(en, { size: 13, className: "shrink-0 text-tertiaryText" }),
                              /* @__PURE__ */ e("span", { className: "text-[13px] font-medium leading-tight text-primaryText", children: "思考深度" })
                            ] }),
                            /* @__PURE__ */ r("span", { className: "flex shrink-0 items-center gap-1.5", children: [
                              /* @__PURE__ */ e("span", { className: "rounded bg-bgLight px-1.5 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (Q = Ht.find((a) => a.id === x)) == null ? void 0 : Q.label }),
                              /* @__PURE__ */ e(xt, { size: 13, className: "text-tertiaryText" })
                            ] })
                          ]
                        }
                      ),
                      U && te && /* @__PURE__ */ e(
                        "div",
                        {
                          role: "menu",
                          style: {
                            position: "fixed",
                            bottom: `${te.bottom}px`,
                            left: `${te.left}px`
                          },
                          className: "z-[9999] w-[200px] overflow-hidden rounded-xl border border-[#e6ecf2] bg-white py-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
                          onMouseEnter: () => {
                            Re.current && clearTimeout(Re.current), H(!0);
                          },
                          onMouseLeave: () => {
                            Re.current = setTimeout(() => H(!1), 120);
                          },
                          children: Ht.map((a) => {
                            const B = x === a.id;
                            return /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                role: "menuitemradio",
                                "aria-checked": B,
                                onClick: () => {
                                  se(a.id), H(!1), ue(!1);
                                },
                                className: `mx-1.5 flex w-[calc(100%-0.75rem)] items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${B ? "bg-[#f4f7fb]" : "hover:bg-[#f8fafc]"}`,
                                children: /* @__PURE__ */ r("span", { className: "flex min-w-0 flex-col gap-0.5", children: [
                                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                                    /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: a.label }),
                                    B && /* @__PURE__ */ e("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-tertiaryText" })
                                  ] }),
                                  /* @__PURE__ */ e("span", { className: "text-[11px] leading-tight text-tertiaryText", children: a.desc })
                                ] })
                              },
                              a.id
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
            onClick: Ee ? l : et,
            disabled: Ee ? !$e : n || !u.trim(),
            "aria-label": Ee ? "停止生成" : "发送消息",
            title: Ee ? "停止生成" : "发送消息",
            className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${$e || !Ee && u.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
            children: Ee ? /* @__PURE__ */ e(tn, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(rn, { size: 16 })
          }
        )
      ] })
    ] })
  ] }) });
};
Ve.memo(Br);
const ja = ({ messages: t, isTyping: n, statusPhase: o = "thinking", searchSteps: i = [] }) => {
  const l = ce(null);
  he(() => {
    var h;
    (h = l.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const m = fe(() => t.map((h, w) => /* @__PURE__ */ e(ga, { msg: h }, `${w}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    m,
    n && /* @__PURE__ */ e(Na, { phase: o, searchSteps: i }),
    /* @__PURE__ */ e("div", { ref: l })
  ] });
};
Ve.memo(ja);
const Fa = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], _r = ({ onSelect: t, prompts: n = Fa, disabled: o = !1 }) => {
  const i = je((l) => {
    t(l);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((l) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => i(l),
      disabled: o,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: l
    },
    l
  )) });
};
Ve.memo(_r);
const Ha = (t, n) => {
  const o = Math.random() * t, i = Math.random() * n;
  return {
    x: o,
    y: i,
    baseX: o,
    baseY: i,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
}, cr = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary peer-autofill:left-4 peer-autofill:top-0 peer-autofill:-translate-y-1/2 peer-autofill:rounded peer-autofill:bg-surface peer-autofill:px-1.5 peer-autofill:text-xs peer-autofill:font-medium peer-autofill:text-primary";
function Bs({ onLogin: t, onLoginSuccess: n, onNavigate: o }) {
  const i = ce(null), l = ce(null), [m, h] = b(""), [w, g] = b(""), [p, S] = b(!0), [u, v] = b(!1), [T, j] = b(!1), [N, I] = b(null), G = ce(null), [K, O] = b(!1), [z, le] = b("email"), [X, F] = b(""), [P, J] = b(""), [f, re] = b(""), [Z, ie] = b(""), [$, ne] = b(0), [M, y] = b(!1), k = fe(() => m.trim().length > 0 && w.trim().length > 0 && !u, [
    m,
    u,
    w
  ]);
  he(() => {
    if ($ <= 0) return;
    const U = window.setTimeout(() => ne((H) => H - 1), 1e3);
    return () => clearTimeout(U);
  }, [$]), he(
    () => () => {
      G.current !== null && window.clearTimeout(G.current);
    },
    []
  ), he(() => {
    const U = i.current, H = l.current;
    if (!U || !H) return;
    const te = U.getContext("2d");
    if (!te) return;
    const Ie = window.getComputedStyle(document.documentElement), ze = Ie.getPropertyValue("--chatui-color-auth-particle-active").trim(), Se = Ie.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ee = Ie.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let A = 0, W = 0, V = 0, _ = window.devicePixelRatio || 1, Be = [];
    const Me = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, Re = 150, Ee = () => {
      const ve = H.getBoundingClientRect();
      _ = window.devicePixelRatio || 1, W = ve.width, V = ve.height, U.width = W * _, U.height = V * _, U.style.width = `${W}px`, U.style.height = `${V}px`, te.setTransform(_, 0, 0, _, 0, 0);
      const Y = W < 768 ? 40 : 90;
      Be = Array.from({ length: Y }, () => Ha(W, V));
    }, $e = (ve) => {
      te.beginPath(), te.arc(ve.x, ve.y, ve.size, 0, Math.PI * 2), te.closePath(), te.fill();
    }, pe = () => {
      te.clearRect(0, 0, W, V);
      for (let ve = 0; ve < Be.length; ve += 1) {
        const Y = Be[ve];
        Y.x += Y.vx, Y.y += Y.vy, (Y.x < 0 || Y.x > W) && (Y.vx = -Y.vx), (Y.y < 0 || Y.y > V) && (Y.vy = -Y.vy);
        const Xe = Me.x - Y.x, Ze = Me.y - Y.y, Ke = Math.sqrt(Xe * Xe + Ze * Ze) || 1, Je = Xe / Ke, et = Ze / Ke, xe = (Me.radius - Ke) / Me.radius, Q = Je * xe * Y.density, a = et * xe * Y.density;
        if (Ke < Me.radius)
          Y.x -= Q * 0.5, Y.y -= a * 0.5, te.fillStyle = ze, Y.size = Math.min(Y.size + 0.1, 2.5);
        else {
          if (Y.x !== Y.baseX) {
            const B = Y.x - Y.baseX;
            Y.x -= B / 50;
          }
          if (Y.y !== Y.baseY) {
            const B = Y.y - Y.baseY;
            Y.y -= B / 50;
          }
          te.fillStyle = Se, Y.size = Math.max(Y.size - 0.05, 1);
        }
        $e(Y);
        for (let B = ve; B < Be.length; B += 1) {
          const q = Be[B], Te = Y.x - q.x, we = Y.y - q.y, He = Math.sqrt(Te * Te + we * we);
          if (He < Re) {
            const be = (1 - He / Re) * 0.4;
            te.beginPath(), te.strokeStyle = ee, te.globalAlpha = be, te.lineWidth = 1, te.moveTo(Y.x, Y.y), te.lineTo(q.x, q.y), te.stroke(), te.globalAlpha = 1, te.closePath();
          }
        }
      }
      A = window.requestAnimationFrame(pe);
    }, Ne = (ve) => {
      const Y = H.getBoundingClientRect();
      Me.x = ve.clientX - Y.left, Me.y = ve.clientY - Y.top;
    }, ke = () => {
      Me.x = -1e3, Me.y = -1e3;
    }, _e = (ve) => {
      if (ve.touches.length < 1) return;
      const Y = H.getBoundingClientRect();
      Me.x = ve.touches[0].clientX - Y.left, Me.y = ve.touches[0].clientY - Y.top;
    };
    return Ee(), pe(), window.addEventListener("resize", Ee), H.addEventListener("mousemove", Ne), H.addEventListener("mouseleave", ke), H.addEventListener("touchmove", _e, { passive: !0 }), H.addEventListener("touchend", ke), () => {
      window.cancelAnimationFrame(A), window.removeEventListener("resize", Ee), H.removeEventListener("mousemove", Ne), H.removeEventListener("mouseleave", ke), H.removeEventListener("touchmove", _e), H.removeEventListener("touchend", ke);
    };
  }, []);
  const x = async (U) => {
    if (U.preventDefault(), !!k) {
      v(!0), I(null);
      try {
        const H = await t({ email: m.trim(), password: w, rememberLogin: p });
        if (!H.ok) {
          I(H.message);
          return;
        }
        j(!0), G.current = window.setTimeout(() => {
          j(!1), n();
        }, 900);
      } catch {
        I("登录失败，请稍后重试。");
      } finally {
        v(!1);
      }
    }
  }, se = async () => {
    !X.trim() || $ > 0 || (v(!0), await new Promise((U) => window.setTimeout(U, 1e3)), v(!1), y(!0), ne(60));
  }, de = async () => {
    if (z === "email") {
      if (!X.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X) || !P.trim() || P.length < 6 || !f.trim() || f.length < 6 || f !== Z) return;
      le("success");
    }
  }, ue = () => {
    O(!1), le("email"), F(""), J(""), re(""), ie(""), ne(0), y(!1);
  };
  return /* @__PURE__ */ r("div", { ref: l, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: i, className: "h-full w-full" }) }),
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
              onChange: (U) => {
                h(U.target.value), I(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "username",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: cr, children: "邮箱" })
        ] }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "password",
              value: w,
              onChange: (U) => {
                g(U.target.value), I(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "current-password",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: cr, children: "密码" })
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
                  onChange: (U) => S(U.target.checked),
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
              onClick: () => o("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(nn, { size: 16, className: "text-authTextFaint" }),
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
                /* @__PURE__ */ e(an, { size: 16, className: "text-authTextFaint" }),
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
            onClick: ue,
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
                value: X,
                onChange: (U) => F(U.target.value),
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
                  onChange: (U) => J(U.target.value.replace(/\D/g, "").slice(0, 6)),
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
                disabled: $ > 0 || u || !X.trim(),
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
                value: f,
                onChange: (U) => re(U.target.value),
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
                onChange: (U) => ie(U.target.value),
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
              onClick: de,
              disabled: !X.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X) || !P.trim() || P.length < 6 || !f.trim() || f.length < 6 || f !== Z,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        z === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${T ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(vt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const qa = (t, n) => {
  const o = Math.random() * t, i = Math.random() * n;
  return {
    x: o,
    y: i,
    baseX: o,
    baseY: i,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function _s({
  mode: t = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: o,
  onRegister: i,
  onEnterWorkspace: l,
  onNavigate: m
}) {
  const h = ce(null), w = ce(null), g = ce(null), [p, S] = b("identity"), [u, v] = b(""), [T, j] = b(""), [N, I] = b(""), [G, K] = b(""), [O, z] = b(""), [le, X] = b(""), F = t === "create-lab", [P, J] = b(""), [f, re] = b(""), [Z, ie] = b(!1), [$, ne] = b(0), [M, y] = b(""), [k, x] = b(null), se = P.length > 0 && P.trim().length < 6;
  he(() => {
    if ($ <= 0) return;
    const A = window.setTimeout(() => ne((W) => W - 1), 1e3);
    return () => clearTimeout(A);
  }, [$]), he(
    () => () => {
      g.current !== null && window.clearTimeout(g.current);
    },
    []
  ), he(() => {
    const A = h.current, W = w.current;
    if (!A || !W) return;
    const V = A.getContext("2d");
    if (!V) return;
    const _ = window.getComputedStyle(document.documentElement), Be = _.getPropertyValue("--chatui-color-auth-particle-active").trim(), Me = _.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Re = _.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Ee = 0, $e = 0, pe = 0, Ne = window.devicePixelRatio || 1, ke = [];
    const _e = { x: -1e3, y: -1e3, radius: 120 }, ve = 150, Y = () => {
      const xe = W.getBoundingClientRect();
      Ne = window.devicePixelRatio || 1, $e = xe.width, pe = xe.height, A.width = $e * Ne, A.height = pe * Ne, A.style.width = `${$e}px`, A.style.height = `${pe}px`, V.setTransform(Ne, 0, 0, Ne, 0, 0);
      const Q = $e < 768 ? 40 : 90;
      ke = Array.from({ length: Q }, () => qa($e, pe));
    }, Xe = (xe) => {
      V.beginPath(), V.arc(xe.x, xe.y, xe.size, 0, Math.PI * 2), V.closePath(), V.fill();
    }, Ze = () => {
      V.clearRect(0, 0, $e, pe);
      for (let xe = 0; xe < ke.length; xe += 1) {
        const Q = ke[xe];
        Q.x += Q.vx, Q.y += Q.vy, (Q.x < 0 || Q.x > $e) && (Q.vx = -Q.vx), (Q.y < 0 || Q.y > pe) && (Q.vy = -Q.vy);
        const a = _e.x - Q.x, B = _e.y - Q.y, q = Math.sqrt(a * a + B * B) || 1, Te = a / q, we = B / q, He = (_e.radius - q) / _e.radius, be = Te * He * Q.density, Ae = we * He * Q.density;
        q < _e.radius ? (Q.x -= be * 0.5, Q.y -= Ae * 0.5, V.fillStyle = Be, Q.size = Math.min(Q.size + 0.1, 2.5)) : (Q.x !== Q.baseX && (Q.x -= (Q.x - Q.baseX) / 50), Q.y !== Q.baseY && (Q.y -= (Q.y - Q.baseY) / 50), V.fillStyle = Me, Q.size = Math.max(Q.size - 0.05, 1)), Xe(Q);
        for (let De = xe; De < ke.length; De += 1) {
          const Ue = ke[De], Ge = Q.x - Ue.x, tt = Q.y - Ue.y, lt = Math.sqrt(Ge * Ge + tt * tt);
          if (lt < ve) {
            const rt = (1 - lt / ve) * 0.4;
            V.beginPath(), V.strokeStyle = Re, V.globalAlpha = rt, V.lineWidth = 1, V.moveTo(Q.x, Q.y), V.lineTo(Ue.x, Ue.y), V.stroke(), V.globalAlpha = 1, V.closePath();
          }
        }
      }
      Ee = window.requestAnimationFrame(Ze);
    }, Ke = (xe) => {
      const Q = W.getBoundingClientRect();
      _e.x = xe.clientX - Q.left, _e.y = xe.clientY - Q.top;
    }, Je = () => {
      _e.x = -1e3, _e.y = -1e3;
    }, et = (xe) => {
      if (xe.touches.length < 1) return;
      const Q = W.getBoundingClientRect();
      _e.x = xe.touches[0].clientX - Q.left, _e.y = xe.touches[0].clientY - Q.top;
    };
    return Y(), Ze(), window.addEventListener("resize", Y), W.addEventListener("mousemove", Ke), W.addEventListener("mouseleave", Je), W.addEventListener("touchmove", et, { passive: !0 }), W.addEventListener("touchend", Je), () => {
      window.cancelAnimationFrame(Ee), window.removeEventListener("resize", Y), W.removeEventListener("mousemove", Ke), W.removeEventListener("mouseleave", Je), W.removeEventListener("touchmove", et), W.removeEventListener("touchend", Je);
    };
  }, []);
  const de = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(N) || $ > 0)) {
      ie(!0), x(null);
      try {
        const A = await n(N);
        if (!A.ok) {
          x(A);
          return;
        }
        ne(A.resendAfterSeconds ?? 60), y(A.message ?? "短信验证码已发送");
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ie(!1);
      }
    }
  }, ue = () => ({
    email: u.trim(),
    name: T.trim(),
    phoneNumber: N,
    phoneVerificationCode: G.trim(),
    mode: t,
    ...F ? { labName: le.trim() } : { inviteCode: O.trim() }
  }), U = () => {
    const A = ["identity", "password", "success"], W = A.indexOf(p);
    W < A.length - 1 && S(A[W + 1]);
  }, H = fe(() => {
    if (Z) return !1;
    switch (p) {
      case "identity":
        return F ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(N) && G.length === 6 && le.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(N) && G.length === 6 && O.trim().length > 0;
      case "password":
        return P.trim().length >= 6 && P === f;
      default:
        return !1;
    }
  }, [p, u, T, N, G, O, le, F, P, f, Z]), te = async (A) => {
    if (A.preventDefault(), !!H) {
      ie(!0), x(null);
      try {
        const W = ue(), V = p === "password" ? await i({ ...W, password: P }) : await o(W);
        if (!V.ok) {
          x(V);
          return;
        }
        U();
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ie(!1);
      }
    }
  }, Ie = {
    identity: F ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, ze = {
    identity: "",
    password: "",
    success: ""
  }, Se = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", ee = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
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
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Ie[p] }),
        ze[p] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: ze[p] })
      ] }),
      p !== "success" && /* @__PURE__ */ r("form", { onSubmit: te, className: "space-y-5", children: [
        p === "identity" && /* @__PURE__ */ r(nt, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (A) => {
                  v(A.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: T,
                onChange: (A) => {
                  j(A.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: N,
                  onChange: (A) => {
                    I(A.target.value.replace(/\D/g, "").slice(0, 11)), y(""), x(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Se
                }
              ),
              /* @__PURE__ */ e("span", { className: ee, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: de,
                disabled: $ > 0 || Z || !/^1[3-9]\d{9}$/.test(N),
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
                value: G,
                onChange: (A) => {
                  K(A.target.value.replace(/\D/g, "").slice(0, 6)), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "短信验证码" })
          ] }),
          M && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: M }),
          F ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: le,
                onChange: (A) => {
                  X(A.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: O,
                onChange: (A) => {
                  z(A.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Se
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "邀请码" })
          ] })
        ] }),
        p === "password" && /* @__PURE__ */ r(nt, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: P,
                onChange: (A) => {
                  J(A.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Se} ${(k == null ? void 0 : k.field) === "password" || se ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "设置密码" }),
            ((k == null ? void 0 : k.field) === "password" || se) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (k == null ? void 0 : k.field) === "password" ? k.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (A) => {
                  re(A.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Se} ${f.length > 0 && P !== f ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ee, children: "确认密码" }),
            f.length > 0 && P !== f && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        k && k.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: k.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !H,
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
              g.current = window.setTimeout(l, 1e3);
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
const Wa = (t, n) => {
  const o = Math.random() * t, i = Math.random() * n;
  return { x: o, y: i, baseX: o, baseY: i, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Is({ onSendCode: t, onResetPassword: n, onBackToLogin: o }) {
  const i = ce(null), l = ce(null), m = ce(null), [h, w] = b("phone"), [g, p] = b(""), [S, u] = b(""), [v, T] = b(""), [j, N] = b(""), [I, G] = b(!1), [K, O] = b(0), [z, le] = b(""), [X, F] = b(null);
  he(() => {
    if (K <= 0) return;
    const $ = window.setTimeout(() => O((ne) => ne - 1), 1e3);
    return () => window.clearTimeout($);
  }, [K]), he(() => {
    const $ = i.current, ne = l.current;
    if (!$ || !ne) return;
    const M = $.getContext("2d");
    if (!M) return;
    const y = window.getComputedStyle(document.documentElement), k = y.getPropertyValue("--chatui-color-auth-particle-active").trim(), x = y.getPropertyValue("--chatui-color-auth-particle-idle").trim(), se = y.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let de = 0, ue = 0, U = 0, H = [];
    const te = { x: -1e3, y: -1e3, radius: 120 }, Ie = 150, ze = () => {
      const V = ne.getBoundingClientRect(), _ = window.devicePixelRatio || 1;
      ue = V.width, U = V.height, $.width = ue * _, $.height = U * _, $.style.width = `${ue}px`, $.style.height = `${U}px`, M.setTransform(_, 0, 0, _, 0, 0), H = Array.from({ length: ue < 768 ? 40 : 90 }, () => Wa(ue, U));
    }, Se = () => {
      M.clearRect(0, 0, ue, U);
      for (let V = 0; V < H.length; V += 1) {
        const _ = H[V];
        _.x += _.vx, _.y += _.vy, (_.x < 0 || _.x > ue) && (_.vx = -_.vx), (_.y < 0 || _.y > U) && (_.vy = -_.vy);
        const Be = te.x - _.x, Me = te.y - _.y, Re = Math.sqrt(Be * Be + Me * Me) || 1, Ee = (te.radius - Re) / te.radius;
        Re < te.radius ? (_.x -= Be / Re * Ee * _.density * 0.5, _.y -= Me / Re * Ee * _.density * 0.5, M.fillStyle = k, _.size = Math.min(_.size + 0.1, 2.5)) : (_.x -= (_.x - _.baseX) / 50, _.y -= (_.y - _.baseY) / 50, M.fillStyle = x, _.size = Math.max(_.size - 0.05, 1)), M.beginPath(), M.arc(_.x, _.y, _.size, 0, Math.PI * 2), M.fill();
        for (let $e = V; $e < H.length; $e += 1) {
          const pe = H[$e], Ne = _.x - pe.x, ke = _.y - pe.y, _e = Math.sqrt(Ne * Ne + ke * ke);
          _e >= Ie || (M.beginPath(), M.globalAlpha = (1 - _e / Ie) * 0.4, M.strokeStyle = se, M.lineWidth = 1, M.moveTo(_.x, _.y), M.lineTo(pe.x, pe.y), M.stroke(), M.globalAlpha = 1);
        }
      }
      de = window.requestAnimationFrame(Se);
    }, ee = (V) => {
      const _ = ne.getBoundingClientRect();
      te.x = V.clientX - _.left, te.y = V.clientY - _.top;
    }, A = (V) => {
      if (!V.touches.length) return;
      const _ = ne.getBoundingClientRect();
      te.x = V.touches[0].clientX - _.left, te.y = V.touches[0].clientY - _.top;
    }, W = () => {
      te.x = -1e3, te.y = -1e3;
    };
    return ze(), Se(), window.addEventListener("resize", ze), ne.addEventListener("mousemove", ee), ne.addEventListener("mouseleave", W), ne.addEventListener("touchmove", A, { passive: !0 }), ne.addEventListener("touchend", W), () => {
      window.cancelAnimationFrame(de), window.removeEventListener("resize", ze), ne.removeEventListener("mousemove", ee), ne.removeEventListener("mouseleave", W), ne.removeEventListener("touchmove", A), ne.removeEventListener("touchend", W);
    };
  }, []), he(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const P = fe(() => /^1[3-9]\d{9}$/.test(g) && S.length === 6 && v.length >= 6 && v === j, [j, v, g, S]), J = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", f = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: l, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: i, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(nt, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async ($) => {
          if ($.preventDefault(), !(!P || I)) {
            G(!0), F(null);
            try {
              const ne = await n({ phoneNumber: g, phoneVerificationCode: S, newPassword: v });
              if (!ne.ok) {
                F(ne.message);
                return;
              }
              w("success");
            } catch {
              F("密码重置失败，请稍后重试。");
            } finally {
              G(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: g, onChange: ($) => {
                p($.target.value.replace(/\D/g, "").slice(0, 11)), le(""), F(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: J }),
              /* @__PURE__ */ e("span", { className: f, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(g) || K > 0 || I)) {
                G(!0), F(null);
                try {
                  const $ = await t(g);
                  if (!$.ok) {
                    F($.message);
                    return;
                  }
                  O($.resendAfterSeconds ?? 60), le($.message ?? "短信验证码已发送");
                } catch {
                  F("验证码发送失败，请稍后重试。");
                } finally {
                  G(!1);
                }
              }
            }, disabled: K > 0 || I || !/^1[3-9]\d{9}$/.test(g), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${K > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: K > 0 ? `${K}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: S, onChange: ($) => {
              u($.target.value.replace(/\D/g, "").slice(0, 6)), F(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: J }),
            /* @__PURE__ */ e("span", { className: f, children: "短信验证码" })
          ] }),
          z && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: z }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: v, onChange: ($) => {
              T($.target.value), F(null);
            }, required: !0, placeholder: " ", className: J }),
            /* @__PURE__ */ e("span", { className: f, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: j, onChange: ($) => {
              N($.target.value), F(null);
            }, required: !0, placeholder: " ", className: `${J} ${j.length > 0 && v !== j ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: f, children: "确认新密码" }),
            j.length > 0 && v !== j && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          X && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: X }),
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
const dr = 10, ur = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function Rs({
  currentPath: t,
  projects: n,
  initialChats: o,
  logoUrl: i,
  user: l,
  children: m,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: w,
  canViewAiUsage: g = !0,
  canManageMembers: p = !0,
  chatActions: S = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: v,
  onChatsChange: T,
  onRenameChat: j,
  onTogglePinChat: N,
  onShareChat: I,
  onDeleteChat: G
}) {
  const [K, O] = b(!0), [z, le] = b(240), [X, F] = b(!1), P = ce(0), J = ce(240), [f, re] = b(() => {
    const c = { unassigned: !0 };
    return n.forEach((E) => {
      c[E.id] = !0;
    }), c;
  }), [Z, ie] = b(!1), [$, ne] = b(() => [...o]), [M, y] = b(null), [k, x] = b(null), [se, de] = b("time"), [ue, U] = b(!1), [H, te] = b(null), [Ie, ze] = b(""), [Se, ee] = b(!1), [A, W] = b(""), [V, _] = b(!1), [Be, Me] = b(h), [Re, Ee] = b(!1), $e = w ?? Be, pe = ce(null), Ne = ce(null), ke = ce(null), _e = () => {
    ie(!1), v();
  }, ve = (c) => {
    re((E) => ({ ...E, [c]: !E[c] }));
  }, Y = (c) => {
    var C;
    ne((L) => L.filter((ye) => ye.id !== c)), y(null), H === c && (te(null), ze("")), G == null || G(c), ((C = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : C[1]) === c && u("/chat/new", { replace: !0 });
  }, Xe = (c) => {
    const E = $.find((L) => L.id === c);
    if (!E) return;
    const C = !E.isPinned;
    ne((L) => L.map(
      (Ce) => Ce.id === c ? { ...Ce, isPinned: C } : Ce
    )), N == null || N(c, C), y(null);
  }, Ze = (c) => {
    te(c.id), ze(c.title), y(null);
  }, Ke = () => {
    te(null), ze("");
  }, Je = (c) => {
    const E = Ie.trim();
    E && (ne((C) => C.map((L) => L.id === c ? { ...L, title: E } : L)), j == null || j(c, E)), Ke();
  }, et = (c, E) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), Je(E);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), Ke());
  }, xe = (c) => {
    var E;
    if (H === c) {
      (E = pe.current) == null || E.focus();
      return;
    }
    u(`/chat/${c}`);
  }, Q = (c, E = !1) => H === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (L) => {
        var ye;
        L.stopPropagation(), (ye = pe.current) == null || ye.focus();
      },
      children: [
        E && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: pe,
            value: Ie,
            onChange: (L) => ze(L.target.value),
            onKeyDown: (L) => et(L, c.id),
            onBlur: () => Je(c.id),
            onClick: (L) => L.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    E && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), a = (c) => {
    P.current = c.clientX, J.current = z, F(!0);
  };
  he(() => {
    if (!X) return;
    const c = 200, E = 440, C = (ye) => {
      const Ce = ye.clientX - P.current, Pe = Math.min(E, Math.max(c, J.current + Ce));
      le(Pe);
    }, L = () => {
      F(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", C), window.addEventListener("mouseup", L), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", L);
    };
  }, [X, z]), he(() => {
    K || le(240);
  }, [K]), he(() => {
    T == null || T($);
  }, [$, T]), he(() => {
    ne([...o]);
  }, [o]), he(() => {
    if (!H) return;
    const c = window.requestAnimationFrame(() => {
      var E;
      (E = pe.current) == null || E.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [H]), he(() => () => {
    Ne.current !== null && window.clearTimeout(Ne.current), ke.current !== null && window.clearTimeout(ke.current);
  }, []);
  const B = () => {
    U(!0), Ne.current !== null && window.clearTimeout(Ne.current), Ne.current = window.setTimeout(() => {
      U(!1);
    }, 600);
  }, q = () => {
    _(!0), ke.current !== null && window.clearTimeout(ke.current), ke.current = window.setTimeout(() => {
      _(!1);
    }, 600);
  };
  he(() => {
    $e || Ee(!1);
  }, [$e]);
  const Te = () => {
    Ee(!0), u("/ai-usage");
  }, we = fe(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...g ? [{
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
  ], [p, g]), He = (c) => {
    if (ie(!1), c.key === "skills") {
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
    c.key === "logout" && _e();
  }, be = (c) => c.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Tr, { size: 14 }), danger: !0 }] : [], Ae = (c, E = S) => {
    const C = [];
    return E.rename && C.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(un, { size: 14 }) }), E.share && C.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(mn, { size: 14 }) }), E.pin && C.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(jt, { size: 14 })
    }), C;
  }, De = (c, E, C = {}) => {
    const L = C.actions ?? S, ye = C.onMenuOpenIdChange ?? y, Ce = !!(L.rename || L.share || L.pin || L.delete), Pe = C.showTaskBadge !== !1 && ur(c);
    return !Ce && !Pe ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${Pe ? "ml-6" : "ml-2"}`, children: [
      Pe && !E && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Ce && /* @__PURE__ */ e(
        Et,
        {
          open: E,
          onOpenChange: (Le) => ye(Le ? c.id : null),
          placement: "bottom-end",
          width: C.width ?? Math.max(140, Math.min(176, z - 56)),
          portal: C.portal,
          trigger: /* @__PURE__ */ e(dn, { size: 14 }),
          onTriggerClick: (Le) => {
            Le.stopPropagation();
          },
          items: Ae(c, L),
          footerItems: be(L),
          onItemClick: (Le, Oe) => {
            if (Oe.stopPropagation(), Le.key === "rename") {
              Ze(c), ye(null);
              return;
            }
            if (Le.key === "share") {
              I ? I(c.id) : u(`/chat/${c.id}?share=1`), ye(null);
              return;
            }
            if (Le.key === "pin") {
              Xe(c.id), ye(null);
              return;
            }
            if (Le.key === "delete") {
              Y(c.id), ye(null);
              return;
            }
            ye(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${E ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Ue = [
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
  ], Ge = fe(() => {
    const c = t.match(/^\/chat\/([^/]+)$/);
    return c ? $.find((E) => E.id === c[1]) ?? null : null;
  }, [$, t]), tt = fe(
    () => $.filter((c) => c.isPinned),
    [$]
  ), lt = fe(
    () => $.filter((c) => !c.isPinned),
    [$]
  ), rt = fe(
    () => se === "time" ? tt.slice(0, dr) : tt,
    [tt, se]
  ), s = fe(() => {
    if (se !== "time") return [];
    const c = Math.max(dr - rt.length, 0);
    return lt.slice(0, c);
  }, [se, lt, rt.length]), d = fe(
    () => rt.length + s.length,
    [rt.length, s.length]
  ), D = se === "time" && $.length > d, R = fe(() => new Map(n.map((c) => [c.id, c.name])), [n]), oe = A.trim().toLowerCase(), ae = fe(() => oe ? $.filter((c) => {
    const E = c.projectId ? R.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${E} ${c.date}`.toLowerCase().includes(oe);
  }) : $, [$, oe, R]);
  he(() => {
    if (!Ge) return;
    const c = Ge.projectId ?? "unassigned";
    re((E) => E[c] !== !1 ? E : { ...E, [c]: !0 });
  }, [Ge]);
  const me = () => {
    W(""), ee(!0);
  }, ge = () => {
    ee(!1), x(null), Ke(), _(!1), ke.current !== null && (window.clearTimeout(ke.current), ke.current = null);
  }, qe = (c) => {
    ee(!1), x(null), u(`/chat/${c}`);
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
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => u("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: i, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => O(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(sn, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => u("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(ln, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Ue.map((c) => {
                  const E = c.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => u(c.path),
                      className: `nav-item ${E ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
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
                    onScroll: B,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ue ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      rt.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: rt.map((c) => {
                          const E = t === `/chat/${c.id}`, C = M === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => xe(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${H === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Q(c, se !== "time"),
                                H !== c.id && De(c, C)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      se === "project" && n.map((c) => {
                        const E = $.filter((L) => L.projectId === c.id && !L.isPinned), C = f[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ve(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: C ? /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(xt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          C && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: E.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : E.map((L) => {
                            const ye = t === `/chat/${L.id}`, Ce = M === L.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => xe(L.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${H === L.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ye ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Q(L),
                                  H !== L.id && De(L, Ce)
                                ]
                              }
                            ) }, L.id);
                          }) })
                        ] }, c.id);
                      }),
                      se === "project" && (() => {
                        const c = $.filter((C) => !C.projectId && !C.isPinned);
                        if (c.length === 0) return null;
                        const E = f.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ve("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: E ? /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(xt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          E && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((C) => {
                            const L = t === `/chat/${C.id}`, ye = M === C.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => xe(C.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${H === C.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : L ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Q(C),
                                  H !== C.id && De(C, ye)
                                ]
                              }
                            ) }, C.id);
                          }) })
                        ] });
                      })(),
                      se === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        s.map((c) => {
                          const E = t === `/chat/${c.id}`, C = M === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => xe(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${H === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Q(c),
                                H !== c.id && De(c, C)
                              ]
                            }
                          ) }, c.id);
                        }),
                        D && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: me,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(xt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                $e && !Re && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(on, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Te,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  Et,
                  {
                    open: Z,
                    onOpenChange: ie,
                    placement: "top-start",
                    width: z - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: l.avatarUrl ? /* @__PURE__ */ e("img", { src: l.avatarUrl, alt: `${l.name}头像`, className: "h-full w-full object-cover" }) : l.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: l.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(cn, { size: 18 }) })
                    ] }),
                    items: we,
                    onItemClick: He,
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
              onMouseDown: a,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${K ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof m == "function" ? m({ isSidebarOpen: K, setIsSidebarOpen: O, chats: $, setChats: ne, setAiUsageWarningActive: Me }) : m }) }) }),
    /* @__PURE__ */ e(
      Vt,
      {
        visible: Se,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: ge,
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
                value: A,
                onChange: (c) => W(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          ae.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: q,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${V ? "is-scrolling is-scrolling-thin" : ""}`,
              children: ae.map((c) => {
                const E = c.projectId ? R.get(c.projectId) ?? "未分组" : "未分组", C = ur(c), L = k === c.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => qe(c.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          Q(c, c.isPinned),
                          C && H !== c.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: E }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: c.date })
                        ] })
                      ] }),
                      H !== c.id && De(c, L, {
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
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Kt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Ds({
  projects: t,
  selectedProjectId: n,
  autoFocusInput: o = !1,
  disabled: i = !1,
  embedded: l = !1,
  isSidebarOpen: m = !0,
  skillOptions: h,
  fileOptions: w,
  quickPrompts: g,
  uploadAccept: p,
  validateUploadFile: S,
  onUploadValidationError: u,
  onSelectProject: v,
  onCreateProject: T,
  onOpenSidebar: j,
  onSelectQuickPrompt: N,
  onSend: I
}) {
  const [G, K] = b(!1), [O, z] = b(!1), [le, X] = b(""), F = ce(null), P = ce(null), J = fe(
    () => t.find((M) => M.id === n) ?? null,
    [t, n]
  ), f = fe(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !J
    },
    ...t.map((M) => ({
      key: M.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: M.name }),
      active: (J == null ? void 0 : J.id) === M.id
    }))
  ], [t, J]), re = fe(() => T ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Cr, { size: 16 }) }] : [], [T]), Z = () => {
    z(!1), X("");
  }, ie = (M) => {
    if (M.key === "create") {
      z(!0), X("");
      return;
    }
    const y = M.key === "none" ? null : String(M.key);
    v(y), K(!1);
  }, $ = () => {
    const M = le.trim();
    if (!M) return;
    const y = t.find(
      (k) => k.name.trim().toLowerCase() === M.toLowerCase()
    );
    y ? v(y.id) : T == null || T(M), Z(), K(!1);
  };
  he(() => {
    if (!O) return;
    const M = (y) => {
      var x, se;
      const k = y.target;
      (x = P.current) != null && x.contains(k) || (se = F.current) != null && se.contains(k) || (Z(), K(!1));
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [O]);
  const ne = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: F, className: "relative", children: O && /* @__PURE__ */ e(
        "div",
        {
          ref: P,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                $r,
                {
                  value: le,
                  onChange: (M) => X(M.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Qe, { type: "secondary", size: "small", onClick: Z, children: "取消" }),
              /* @__PURE__ */ e(
                Qe,
                {
                  type: "primary",
                  size: "small",
                  onClick: $,
                  disabled: !le.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Br,
        {
          onSend: I,
          disabled: i,
          autoFocus: o,
          skillOptions: h,
          fileOptions: w,
          uploadAccept: p,
          validateUploadFile: S,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            Et,
            {
              open: G,
              onOpenChange: (M) => {
                !M && O || (K(M), M ? z(!1) : Z());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: J ? J.name : "工作项目" }),
                /* @__PURE__ */ e(yt, { size: 14 })
              ] }),
              items: f,
              footerItems: re,
              onItemClick: ie,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(
      _r,
      {
        onSelect: N ?? I,
        prompts: g,
        disabled: i
      }
    )
  ] });
  return l ? ne : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Ca,
      {
        isSidebarOpen: m,
        onOpenSidebar: j ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: ne })
  ] });
}
const Oa = "_shell_1a2mx_1", Ua = "_header_1a2mx_9", Va = "_headerActions_1a2mx_17", Ka = "_saveError_1a2mx_25", Ga = "_viewport_1a2mx_33", Xa = "_editorCanvas_1a2mx_41", Ya = "_titleInput_1a2mx_49", Qa = "_milkdownHost_1a2mx_57", it = {
  shell: Oa,
  header: Ua,
  headerActions: Va,
  saveError: Ka,
  viewport: Ga,
  editorCanvas: Xa,
  titleInput: Ya,
  milkdownHost: Qa
}, Za = {
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
}, Lt = (t, n) => t.replace("<svg", `<svg class="${n}"`), ht = (t) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${t}</tspan>
    </text>
  </svg>
`, Ot = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="8" y="23" fill="currentColor" font-family="inherit" font-size="22" font-weight="500">T</text>
  </svg>
`, Ja = `
  <span class="chatui-selection-block-type-current">${Ot}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, mr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, es = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, ts = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, rs = [
  { key: "paragraph", label: "正文" },
  { key: "h1", label: "一级标题" },
  { key: "h2", label: "二级标题" },
  { key: "h3", label: "三级标题" },
  { key: "bullet-list", label: "无序列表" },
  { key: "ordered-list", label: "有序列表" },
  { key: "task-list", label: "任务列表" },
  { key: "quote", label: "引用" },
  { key: "code", label: "代码块" }
], ft = (t) => `chatui-document-menu-type-${t}`;
function js({
  title: t,
  initialMarkdown: n = "",
  createdByName: o,
  updatedByName: i,
  updatedAt: l,
  index: m,
  attachments: h = [],
  attachmentAccept: w,
  attachmentUnavailableHint: g,
  saving: p = !1,
  saveError: S,
  layout: u = "page",
  showHeaderActions: v = !0,
  onTitleChange: T,
  onMarkdownChange: j,
  onUploadAttachments: N,
  onDeleteAttachment: I,
  onSave: G,
  onClose: K
}) {
  const O = ce(null), z = ce(null), le = ce(n), X = ce(j), [F, P] = b(!1), [J, f] = b(null), [re, Z] = b(""), ie = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  he(() => {
    X.current = j;
  }, [j]), he(() => {
    const M = O.current;
    if (!M) return;
    const y = /* @__PURE__ */ new Map(), k = new kt({
      root: M,
      defaultValue: le.current,
      features: {
        [kt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [kt.Feature.Toolbar]: {
          buildToolbar: (s) => {
            s.addGroup(
              "block-type",
              "块类型"
            ).addItem("block-type-dropdown", {
              icon: Ja,
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
          buildMenu: (s) => {
            const d = new Map(
              s.build().flatMap((E) => E.items).map((E) => [E.key, E])
            ), D = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), R = (E) => {
              const C = E.get(Tt), L = te, Ce = (L != null && L.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? L : L == null ? void 0 : L.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (L instanceof HTMLElement ? L : null);
              if (!Ce) return C;
              try {
                const Pe = C.posAtDOM(Ce, 0), Le = C.state.doc.resolve(
                  Math.min(
                    Math.max(Pe, 0),
                    C.state.doc.content.size
                  )
                );
                C.dispatch(
                  C.state.tr.setSelection(
                    Zt.near(Le)
                  )
                );
              } catch {
              }
              return C;
            }, oe = (E) => {
              const C = R(E), L = Ct.type(E), ye = (Le) => {
                const { $from: Oe } = C.state.selection;
                for (let Ye = Oe.depth; Ye > 0; Ye -= 1)
                  if (Oe.node(Ye).type.name === Le) return !0;
                return !1;
              };
              for (let Le = 0; Le < 10 && !(!ye(L.name) || !bn(L)(
                C.state,
                C.dispatch
              )); Le += 1)
                ;
              for (let Le = 0; Le < 10 && !(!ye("blockquote") || !xn(C.state, C.dispatch)); Le += 1)
                ;
              const Ce = yn.type(E), Pe = C.state.selection.$from.parent;
              Pe.isTextblock && Pe.type !== Ce && E.get(fn).call(vn.key, {
                nodeType: Ce
              });
            };
            y.set(
              "paragraph",
              oe
            );
            const ae = (E) => {
              const C = R(E), { selection: L } = C.state, ye = Ct.type(E), { $from: Ce } = L;
              let Pe = -1;
              for (let Oe = Ce.depth; Oe > 0; Oe -= 1)
                if (Ce.node(Oe).type.name === ye.name) {
                  Pe = Oe;
                  break;
                }
              if (Pe > 0) {
                const Oe = Pe - 1, Ye = Oe > 0 && Ce.node(Oe).childCount === 1 ? Oe : Pe;
                C.dispatch(
                  C.state.tr.delete(
                    Ce.before(Ye),
                    Ce.after(Ye)
                  )
                );
                return;
              }
              if (!L.empty) {
                C.dispatch(
                  C.state.tr.delete(L.from, L.to)
                );
                return;
              }
              const Le = Math.min(1, Ce.depth);
              Le < 1 || C.dispatch(
                C.state.tr.delete(
                  Ce.before(Le),
                  Ce.after(Le)
                )
              );
            }, me = (E, C, L) => {
              const ye = d.get(C);
              if (!ye) return;
              const { key: Ce, ...Pe } = ye, Le = (L == null ? void 0 : L.icon) ?? Pe.icon, Oe = [
                ft(C),
                L == null ? void 0 : L.iconClass
              ].filter(Boolean).join(" "), Ye = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(C), mt = D.has(C) ? (at) => {
                var Gt;
                if (oe(at), !Ye) {
                  if (C === "quote") {
                    const st = at.get(Tt), { $from: pt } = st.state.selection, wt = pt.parent, Rt = pt.before(pt.depth), Xt = st.state.schema.nodes.blockquote;
                    if (!Xt) return;
                    const Dr = Xt.create(null, wt), Nt = st.state.tr.replaceWith(
                      Rt,
                      Rt + wt.nodeSize,
                      Dr
                    );
                    Nt.setSelection(
                      Zt.near(
                        Nt.doc.resolve(
                          Math.min(
                            Rt + 2,
                            Nt.doc.content.size
                          )
                        )
                      )
                    ), st.dispatch(Nt);
                    return;
                  }
                  (Gt = Pe.onRun) == null || Gt.call(Pe, at);
                  return;
                }
                const bt = at.get(Tt), Ir = C === "ordered-list" ? Jt.type(at) : er.type(at);
                if (!gn(Ir)(
                  bt.state,
                  bt.dispatch
                ) || C !== "task-list") return;
                const Rr = Ct.type(at), { $from: It } = bt.state.selection;
                for (let st = It.depth; st > 0; st -= 1) {
                  const pt = It.node(st);
                  if (pt.type !== Rr) continue;
                  const wt = It.before(st);
                  bt.dispatch(
                    bt.state.tr.setNodeMarkup(wt, void 0, {
                      ...pt.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Pe.onRun;
              D.has(C) && mt && y.set(
                C,
                mt
              ), E.addItem(C, {
                ...Pe,
                label: (L == null ? void 0 : L.label) ?? Pe.label,
                icon: Lt(Le, Oe),
                onRun: mt
              });
            };
            s.clear();
            const ge = s.addGroup("basic", "基础");
            ge.addItem("paragraph", {
              label: "正文",
              icon: Lt(
                Ot,
                ft("paragraph")
              ),
              onRun: oe
            }), [
              {
                key: "h1",
                icon: ht(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: ht(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: ht(3),
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
                icon: mr,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: es,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: E, icon: C, label: L }) => {
              me(ge, E, { icon: C, label: L });
            });
            const qe = s.addGroup("common", "常用");
            me(qe, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), me(qe, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), s.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Lt(
                ts,
                "chatui-document-menu-action-delete"
              ),
              onRun: ae
            });
          }
        }
      }
    });
    k.on((s) => {
      s.markdownUpdated((d, D, R) => {
        D !== R && X.current(D);
      });
    });
    const x = M.ownerDocument;
    let se = "", de = null, ue = null, U = !0, H = !1, te = null, Ie = null, ze = null, Se = null, ee = null, A = null, W = null, V = null;
    const _ = (s) => {
      const d = s == null ? void 0 : s.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Be = () => M.querySelector(".ProseMirror"), Me = (s) => {
      const d = Be();
      if (!s || !(d != null && d.contains(s))) return null;
      const D = s.closest(".milkdown-list-item-block");
      if (D && d.contains(D)) return D;
      let R = s;
      for (; R != null && R.parentElement && R.parentElement !== d; )
        R = R.parentElement;
      return !R || R.parentElement !== d || R.classList.contains("prosemirror-virtual-cursor") ? null : R;
    }, Re = () => {
      const s = Be();
      return s ? Array.from(s.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const D = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return D.length ? D : [d];
      }) : [];
    }, Ee = (s) => {
      var R;
      const d = Re(), D = d.map((oe) => ({ block: oe, rect: oe.getBoundingClientRect() })).filter(({ rect: oe }) => s >= oe.top && s <= oe.bottom).sort((oe, ae) => oe.rect.height - ae.rect.height);
      return D[0] ? D[0].block : ((R = d.map((oe) => {
        const ae = oe.getBoundingClientRect(), me = Math.min(
          Math.abs(s - ae.top),
          Math.abs(s - ae.bottom)
        );
        return { block: oe, distance: me };
      }).sort((oe, ae) => oe.distance - ae.distance)[0]) == null ? void 0 : R.block) ?? null;
    }, $e = (s, d = U) => {
      var c, E, C, L;
      const D = te, R = D ? _(D) : s, oe = D ? D.matches("p") : d, ae = x.querySelector(
        ".milkdown-slash-menu"
      );
      (E = (c = ae == null ? void 0 : ae.querySelector(`svg.${ft("paragraph")}`)) == null ? void 0 : c.closest("li")) == null || E.toggleAttribute(
        "hidden",
        R === null && oe
      ), ae == null || ae.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (ye) => ye.removeAttribute("data-chatui-selected")
      ), R && ((L = (C = ae == null ? void 0 : ae.querySelector(`svg.${ft(R)}`)) == null ? void 0 : C.closest("li")) == null || L.setAttribute("data-chatui-selected", "true"));
      const me = x.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!me) return;
      se || (se = me.innerHTML);
      const ge = R ? ae == null ? void 0 : ae.querySelector(
        `svg.${ft(R)}`
      ) : null, qe = R ?? "default";
      me.dataset.chatuiBlockType !== qe && (me.innerHTML = (ge == null ? void 0 : ge.outerHTML) ?? se, me.dataset.chatuiBlockType = qe);
    }, pe = (s) => {
      s !== ue && (ue = s, de = _(s), U = (s == null ? void 0 : s.matches("p")) ?? !1), $e(de, U);
    }, Ne = () => {
      var D;
      const s = (D = x.getSelection()) == null ? void 0 : D.anchorNode, d = s instanceof Element ? s : s == null ? void 0 : s.parentElement;
      pe(Me(d ?? null));
    }, ke = (s) => {
      const { $from: d } = s.get(Tt).state.selection, D = Ct.type(s), R = Jt.type(s), oe = er.type(s);
      for (let me = d.depth; me > 0; me -= 1) {
        const ge = d.node(me);
        if (ge.type === D && typeof ge.attrs.checked == "boolean")
          return "task-list";
      }
      for (let me = d.depth; me > 0; me -= 1) {
        const ge = d.node(me);
        if (ge.type === R) return "ordered-list";
        if (ge.type === oe) return "bullet-list";
        if (ge.type.name === "blockquote") return "quote";
      }
      const ae = d.parent;
      if (ae.type === wn.type(s)) {
        const me = Number(ae.attrs.level);
        if (me === 1 || me === 2 || me === 3)
          return `h${me}`;
      }
      return ae.type.name === "code_block" ? "code" : "paragraph";
    }, _e = (s) => {
      var d;
      return s === "paragraph" ? Lt(
        Ot,
        "chatui-selection-block-type-paragraph"
      ) : s === "h1" ? ht(1) : s === "h2" ? ht(2) : s === "h3" ? ht(3) : s === "code" ? mr : ((d = x.querySelector(
        `.milkdown-slash-menu svg.${ft(s)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${s === "quote" ? "“" : "•"}</text></svg>`;
    }, ve = () => {
      var s;
      return ((s = x.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : s.closest(".toolbar-item")) ?? null;
    }, Y = () => {
      const s = ve();
      if (!s) return;
      s.classList.add("chatui-selection-block-type-trigger"), s.setAttribute("aria-haspopup", "menu"), s.setAttribute("aria-label", "切换当前块类型");
      const d = s.closest(".milkdown-toolbar"), D = s.previousElementSibling instanceof HTMLElement && s.previousElementSibling.classList.contains("divider") ? s.previousElementSibling : null;
      d && d.firstElementChild !== s && (d.prepend(s), D && s.after(D));
      let R = "paragraph";
      k.editor.action((ae) => {
        R = ke(ae);
      }), s.dataset.chatuiBlockType = R;
      const oe = s.querySelector(
        ".chatui-selection-block-type-current"
      );
      oe && (oe.innerHTML = _e(R)), A == null || A.querySelectorAll("[data-block-type]").forEach((ae) => {
        ae.dataset.active = ae.dataset.blockType === R ? "true" : "false";
      });
    }, Xe = () => {
      var s;
      W !== null && (window.clearTimeout(W), W = null), A && (A.dataset.show = "false"), (s = ve()) == null || s.setAttribute("aria-expanded", "false");
    }, Ze = () => {
      W !== null && window.clearTimeout(W), W = window.setTimeout(
        Xe,
        120
      );
    }, Ke = () => {
      if (A) return A;
      const s = x.createElement("div");
      return s.className = "chatui-selection-block-type-menu", s.dataset.show = "false", s.setAttribute("role", "menu"), rs.forEach(({ key: d, label: D }) => {
        const R = x.createElement("button");
        R.type = "button", R.dataset.blockType = d, R.setAttribute("role", "menuitem"), R.innerHTML = `<span class="chatui-selection-block-type-option-icon">${_e(d)}</span><span>${D}</span>`, R.addEventListener("pointerdown", (oe) => {
          oe.preventDefault(), oe.stopPropagation(), k.editor.action((ae) => {
            var me;
            (me = y.get(d)) == null || me(ae);
          }), Xe(), window.requestAnimationFrame(Y);
        }), s.append(R);
      }), s.addEventListener("pointerenter", () => {
        W !== null && (window.clearTimeout(W), W = null);
      }), s.addEventListener("pointerleave", Ze), x.body.append(s), A = s, s;
    }, Je = () => {
      const s = ve();
      if (!s) return;
      W !== null && (window.clearTimeout(W), W = null);
      const d = Ke();
      Y(), d.dataset.show = "true", d.style.visibility = "hidden";
      const D = s.getBoundingClientRect(), R = d.getBoundingClientRect(), oe = 6, ae = 8, me = D.top >= R.height + oe + ae, ge = Math.min(
        Math.max(D.left, ae),
        x.documentElement.clientWidth - R.width - ae
      ), qe = me ? D.top - R.height - oe : D.bottom + oe;
      d.style.left = `${ge}px`, d.style.top = `${qe}px`, d.style.visibility = "visible", d.dataset.placement = me ? "top" : "bottom", s.setAttribute("aria-expanded", "true");
    }, et = (s) => {
      const d = s.target instanceof Element ? s.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && Je();
    }, xe = (s) => {
      const d = s.target instanceof Element ? s.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const D = s.relatedTarget instanceof Element ? s.relatedTarget : null;
      D != null && D.closest(".chatui-selection-block-type-menu") || Ze();
    }, Q = () => {
      window.requestAnimationFrame(Y);
    }, a = () => {
      const s = Ie, d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (!s || !d || d.dataset.show !== "true") return;
      const D = d.getBoundingClientRect();
      if (!D.width || !D.height) return;
      const R = s.getBoundingClientRect(), oe = x.defaultView, ae = (oe == null ? void 0 : oe.innerWidth) ?? x.documentElement.clientWidth, me = (oe == null ? void 0 : oe.innerHeight) ?? x.documentElement.clientHeight, ge = 12, qe = 8, c = Math.max(
        ge,
        ae - D.width - ge
      ), E = Math.max(
        ge,
        me - D.height - ge
      ), C = (Ye) => Math.min(Math.max(Ye, ge), c), L = (Ye) => Math.min(Math.max(Ye, ge), E);
      let ye = "left", Ce = R.left - D.width - qe, Pe = L(R.top);
      if (Ce < ge) {
        const Ye = R.top - qe - ge, mt = me - R.bottom - qe - ge, at = mt >= D.height || mt >= Ye;
        ye = at ? "bottom" : "top", Ce = C(R.left), Pe = L(at ? R.bottom + qe : R.top - D.height - qe);
      }
      const Le = `${Ce}px`, Oe = `${Pe}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== Le && d.style.setProperty("--chatui-block-menu-left", Le), d.style.getPropertyValue("--chatui-block-menu-top") !== Oe && d.style.setProperty("--chatui-block-menu-top", Oe), d.dataset.chatuiPlacement = ye;
    }, B = () => {
      const s = x.querySelector(
        ".milkdown-slash-menu"
      );
      s && (s.style.removeProperty("--chatui-block-menu-left"), s.style.removeProperty("--chatui-block-menu-top"), delete s.dataset.chatuiPlacement);
    }, q = (s) => {
      s !== ee && (ee == null || ee.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), ee = s, ee == null || ee.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Te = () => {
      Se !== null && window.cancelAnimationFrame(Se), Se = window.requestAnimationFrame(() => {
        Se = null, a();
      });
    }, we = (s) => {
      x.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        s && d.contains(s) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, He = () => {
      Ie = null, H = !1, te = null, q(null), k.editor.action((s) => {
        s.get("menuAPICtx").hide();
      }), B(), we(null);
    }, be = (s) => {
      const d = s.target instanceof Element ? s.target : null, D = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (D) {
        const ae = D.getBoundingClientRect(), me = ae.width > 0 && ae.height > 0, ge = s.clientX >= ae.left && s.clientX <= ae.right && s.clientY >= ae.top && s.clientY <= ae.bottom;
        if (me) {
          if (ge) {
            q(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), H = !0;
            return;
          }
          if (q(null), d != null && d.closest(".milkdown-block-handle")) return;
          const qe = Be(), c = d && (qe != null && qe.contains(d)) ? Me(d) ?? Ee(s.clientY) : null;
          if (c && te && c !== te) {
            He();
            return;
          }
          if (c === te) return;
          H && He();
          return;
        }
        H = !1, q(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        $e(de);
        return;
      }
      const R = Be();
      if (!d || !(R != null && R.contains(d))) return;
      const oe = Me(d) ?? Ee(s.clientY);
      pe(oe);
    }, Ae = (s) => {
      var ge;
      const d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (Ie === s && (d == null ? void 0 : d.dataset.show) === "true") {
        we(s), Te();
        return;
      }
      const D = s.getBoundingClientRect(), R = Ee(
        D.top + D.height / 2
      );
      R && pe(R);
      const oe = de, ae = U;
      Ie = s, te = R ?? ue, we(s);
      const me = ((ge = x.defaultView) == null ? void 0 : ge.PointerEvent) ?? PointerEvent;
      s.dispatchEvent(
        new me("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), s.dispatchEvent(
        new me("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        $e(oe, ae), Te();
      }, 0);
    }, De = (s) => {
      const d = s.target instanceof Element ? s.target : null, D = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (D) {
        Ae(D);
        return;
      }
      q(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, Ue = (s) => {
      const d = s.target instanceof Element ? s.target : null, D = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!D) return;
      const R = s.relatedTarget instanceof Element ? s.relatedTarget : null;
      if (R && D.contains(R)) return;
      const oe = R == null ? void 0 : R.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      q(oe ?? null);
    }, Ge = (s) => {
      const d = s.target instanceof Element ? s.target : null, D = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      D && Ae(D);
    }, tt = (s) => {
      if (!s.isTrusted) return;
      const d = s.target instanceof Element ? s.target : null, D = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), R = x.querySelector(
        ".milkdown-slash-menu"
      );
      D && Ie === D && (R == null ? void 0 : R.dataset.show) === "true" && (s.preventDefault(), s.stopImmediatePropagation());
    }, lt = (s) => {
      s.key === "/" && window.setTimeout(Ne, 0);
    };
    x.addEventListener("pointermove", be), x.addEventListener("pointerover", De), x.addEventListener("pointerout", Ue), x.addEventListener(
      "pointerover",
      et
    ), x.addEventListener(
      "pointerout",
      xe
    ), x.addEventListener(
      "selectionchange",
      Q
    ), x.addEventListener(
      "pointerdown",
      tt,
      !0
    ), x.addEventListener(
      "pointerup",
      tt,
      !0
    ), x.addEventListener("click", Ge), M.addEventListener("keyup", lt);
    const rt = k.create();
    return rt.then(() => {
      var D;
      (D = M.querySelector(".ProseMirror")) == null || D.focus();
      const s = x.querySelector(
        ".milkdown-slash-menu"
      );
      s && (ze = new MutationObserver(() => {
        if (s.dataset.show === "true" && Ie) {
          we(Ie), Te();
          return;
        }
        s.dataset.show !== "true" && (Ie = null, te = null, q(null), B(), we(null));
      }), ze.observe(s, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = x.querySelector(
        ".milkdown-toolbar"
      );
      d && (V = new MutationObserver(() => {
        d.dataset.show === "true" ? Y() : Xe();
      }), V.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), Ne(), Y();
    }), () => {
      x.removeEventListener("pointermove", be), x.removeEventListener(
        "pointerover",
        De
      ), x.removeEventListener("pointerout", Ue), x.removeEventListener(
        "pointerover",
        et
      ), x.removeEventListener(
        "pointerout",
        xe
      ), x.removeEventListener(
        "selectionchange",
        Q
      ), x.removeEventListener(
        "pointerdown",
        tt,
        !0
      ), x.removeEventListener(
        "pointerup",
        tt,
        !0
      ), x.removeEventListener("click", Ge), M.removeEventListener("keyup", lt), Xe(), A == null || A.remove(), A = null, rt.then(() => {
        ze == null || ze.disconnect(), V == null || V.disconnect(), Se !== null && window.cancelAnimationFrame(Se), k.destroy();
      });
    };
  }, []);
  const $ = async (M) => {
    const y = Array.from(M.target.files ?? []);
    if (M.target.value = "", !(!y.length || !N)) {
      P(!0), Z("");
      try {
        await N(y);
      } catch (k) {
        Z(
          k instanceof Error ? k.message : "附件上传失败"
        );
      } finally {
        P(!1);
      }
    }
  }, ne = async (M) => {
    if (I) {
      f(M), Z("");
      try {
        await I(M);
      } catch (y) {
        Z(
          y instanceof Error ? y.message : "附件删除失败"
        );
      } finally {
        f(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: it.shell, "aria-label": "项目文档编辑器", children: [
    v && /* @__PURE__ */ e("header", { className: it.header, children: /* @__PURE__ */ r("div", { className: it.headerActions, children: [
      /* @__PURE__ */ e(
        Qe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: K,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Qe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: G,
          children: p ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${it.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          S && /* @__PURE__ */ e("div", { className: it.saveError, children: S }),
          /* @__PURE__ */ r("div", { className: it.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${ie}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (M) => T(M.target.value),
                  placeholder: "请输入标题",
                  className: it.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                Ar,
                {
                  createdByName: o,
                  updatedByName: i,
                  updatedAt: l,
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
                  className: `${it.milkdownHost} ${Pr.editor} ${ie} chatui-project-document-editor`,
                  style: Za
                }
              ),
              N && /* @__PURE__ */ e(
                "input",
                {
                  ref: z,
                  type: "file",
                  multiple: !0,
                  accept: w,
                  className: "hidden",
                  onChange: (M) => {
                    $(M);
                  }
                }
              ),
              /* @__PURE__ */ e(
                Er,
                {
                  attachments: h,
                  className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: F,
                  deletingAttachmentId: J,
                  unavailableHint: g,
                  error: re,
                  onRequestUpload: N ? () => {
                    var M;
                    return (M = z.current) == null ? void 0 : M.click();
                  } : void 0,
                  onDeleteAttachment: I ? (M) => {
                    ne(M);
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
const ns = { low: "低风险", medium: "中风险", high: "高风险" }, as = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function Fs({
  isSidebarOpen: t,
  skills: n,
  loading: o = !1,
  error: i,
  pendingSkillIds: l = [],
  onOpenSidebar: m,
  onInstall: h,
  onUninstall: w,
  onRetry: g
}) {
  const [p, S] = b("installed"), [u, v] = b(""), [T, j] = b(!1), [N, I] = b([]), [G, K] = b(null), O = fe(() => new Set(l), [l]), z = fe(() => {
    const f = u.trim().toLowerCase();
    return n.filter((re) => p === "installed" !== re.installed ? !1 : f ? [re.name, re.source, re.description, ...re.tags].join(" ").toLowerCase().includes(f) : !0);
  }, [p, u, n]), le = (f) => {
    S(f), j(!1), I([]);
  }, X = () => {
    j((f) => !f), I([]);
  }, F = (f) => I((re) => re.includes(f) ? re.filter((Z) => Z !== f) : [...re, f]), P = (f) => f.installed ? w([f.id]) : h([f.id]), J = () => {
    N.length && (p === "installed" ? w(N) : h(N), I([]), j(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: m, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(kr, { size: 20 }) }),
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
          /* @__PURE__ */ e(dt, { size: 16, className: "text-tertiaryText" }),
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
                j(f.target.checked), I([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        i && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: i }),
          g && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: g, children: "重新加载" })
        ] }),
        !i && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (f, re) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, re)) }),
        !i && !o && z.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": l.length > 0, children: z.map((f) => {
          const re = N.includes(f.id), Z = O.has(f.id), ie = re ? "border-skillSelectedBorder bg-skillSelectedSurface" : G === f.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${ie}`, onMouseEnter: () => K(f.id), onMouseLeave: () => K(($) => $ === f.id ? null : $), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: f.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: f.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${as[f.riskLevel]}`, children: ns[f.riskLevel] }),
                T && /* @__PURE__ */ e("button", { type: "button", onClick: () => F(f.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": re ? `取消选择 ${f.name}` : `选择 ${f.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${re ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: f.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: f.tags.map(($) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: $ }, `${f.id}-${$}`)) }),
              !T && /* @__PURE__ */ e("button", { type: "button", disabled: Z, onClick: () => P(f), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${G === f.id || Z ? "inline-flex" : "hidden"} ${f.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: Z ? "处理中..." : f.installed ? "卸载" : "安装" })
            ] })
          ] }, f.id);
        }) }) : !i && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    T && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        N.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: X, disabled: l.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: J, disabled: !N.length || l.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: l.length > 0 ? "处理中..." : p === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Rs as A,
  ta as B,
  Da as C,
  Cs as D,
  ja as E,
  Is as F,
  da as G,
  Er as H,
  Br as I,
  js as J,
  Ar as K,
  Bs as L,
  zr as M,
  As as N,
  Es as O,
  La as P,
  _r as Q,
  _s as R,
  Fs as S,
  Wt as T,
  Ra as U,
  Ia as V,
  Et as a,
  Qe as b,
  Ns as c,
  la as d,
  Vt as e,
  $r as f,
  Kt as g,
  ia as h,
  aa as i,
  ws as j,
  Un as k,
  Aa as l,
  Fa as m,
  Ps as n,
  Pa as o,
  ks as p,
  Ta as q,
  ca as r,
  Ds as s,
  Ls as t,
  zs as u,
  $s as v,
  Ms as w,
  Ts as x,
  Ca as y,
  Ss as z
};
