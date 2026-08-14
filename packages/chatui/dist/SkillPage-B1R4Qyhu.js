import { jsxs as r, Fragment as nt, jsx as e } from "react/jsx-runtime";
import Ve, { useMemo as be, useState as b, useRef as ie, useCallback as Re, useLayoutEffect as zt, useEffect as pe, forwardRef as pr, useId as jr } from "react";
import Fe from "classnames";
import { Check as ut, Copy as Bt, RefreshCcw as Fr, ThumbsUp as Hr, ThumbsDown as qr, ArrowUpRight as Wr, Info as Or, Ban as Ur, TriangleAlert as Ut, CircleCheckBig as Et, ShieldCheck as hr, CircleHelp as fr, FileText as _t, LoaderCircle as xr, Puzzle as br, AtSign as gr, AlertCircle as Vr, Paperclip as yr, ArrowRight as vr, ChevronDown as yt, ChevronRight as xt, CircleX as wr, Sparkles as Nr, Loader2 as it, Clock3 as It, Search as dt, BookOpen as Yt, ListChecks as Kr, Globe as Gr, Minus as Xr, Menu as kr, Upload as Yr, Trash2 as Tr, CheckCircle2 as vt, SearchX as Qr, FlaskConical as Zr, X as gt, Plus as Cr, Cpu as Qt, ChevronUp as Jr, Brain as en, Square as tn, Send as rn, UserPlus as nn, Building2 as an, Folder as jt, PanelLeftClose as sn, SquarePen as ln, AlertTriangle as on, Settings as cn, Pin as Ft, MoreHorizontal as dn, Pencil as un, Share2 as mn } from "lucide-react";
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
    isLoading: i,
    loading: o,
    disabled: l = !1,
    children: m,
    icon: h,
    iconPosition: w = "left",
    className: g,
    fullWidth: p = !1,
    rounded: M = "medium",
    onClick: u,
    ...v
  }, T) => {
    const H = i ?? o ?? !1, N = l || H, R = be(() => H ? /* @__PURE__ */ r(nt, { children: [
      /* @__PURE__ */ e("span", { className: We.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: m })
    ] }) : h ? /* @__PURE__ */ r(nt, { children: [
      w === "left" && /* @__PURE__ */ e("span", { className: We.icon, children: h }),
      m && /* @__PURE__ */ e("span", { children: m }),
      w === "right" && /* @__PURE__ */ e("span", { className: We.icon, children: h })
    ] }) : m, [m, H, h, w]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: T,
        className: Fe(
          We.button,
          Fn[t],
          Hn[n],
          qn[M],
          {
            [We.fullWidth]: p,
            [We.loading]: H,
            [We.disabled]: N
          },
          g
        ),
        disabled: N,
        onClick: u,
        ...v,
        children: R
      }
    );
  }
);
Qe.displayName = "BaseButton";
const Wn = { small: "h-8", medium: "h-9", large: "h-14" }, $r = Ve.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: i,
    defaultValue: o,
    disabled: l = !1,
    readOnly: m = !1,
    error: h = !1,
    size: w = "medium",
    prefix: g,
    suffix: p,
    prefixIcon: M,
    suffixIcon: u,
    onChange: v,
    onFocus: T,
    onBlur: H,
    onClear: N,
    className: R,
    containerClassName: G,
    clearable: V = !1,
    label: W,
    helperText: E,
    ...se
  }, X) => {
    const [q, _] = b(!1), te = ie(null), f = Re((Z) => {
      te.current = Z, typeof X == "function" ? X(Z) : X && (X.current = Z);
    }, [X]), re = Re(() => {
      var A, ne;
      const Z = te.current;
      Z && ((ne = (A = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : A.set) == null || ne.call(Z, ""), Z.dispatchEvent(new Event("input", { bubbles: !0 })), Z.focus(), N == null || N());
    }, [N]), le = be(
      () => {
        var Z;
        return V && q && String(i ?? ((Z = te.current) == null ? void 0 : Z.value) ?? "").length > 0;
      },
      [V, q, i]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      W && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: W }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Fe(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Wn[w],
            !l && !h && "hover:border-controlBorder",
            q && !l && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && q && "ring-2 ring-dangerFocus",
            l && "cursor-not-allowed bg-surfaceMuted",
            G
          ),
          children: [
            (g || M) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: g || M }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: f,
                type: t,
                placeholder: n,
                value: i,
                defaultValue: o,
                disabled: l,
                readOnly: m,
                className: Fe("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", R),
                onFocus: (Z) => {
                  _(!0), T == null || T(Z);
                },
                onBlur: (Z) => {
                  _(!1), H == null || H(Z);
                },
                onChange: v,
                ...se
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              le && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (Z) => Z.preventDefault(), onClick: re, "aria-label": "清空", children: "✕" }),
              p || u
            ] })
          ]
        }
      ),
      E && /* @__PURE__ */ e("div", { className: Fe("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: E })
    ] });
  }
);
$r.displayName = "BaseInput";
const On = { small: "h-8", medium: "h-9", large: "h-14" }, Un = Ve.forwardRef(
  ({ options: t = [], value: n, defaultValue: i, placeholder: o, disabled: l = !1, error: m = !1, size: h = "medium", label: w, helperText: g, onChange: p, className: M, ...u }, v) => {
    const T = Re((H) => {
      const N = H.target.value, R = t.find((G) => String(G.value) === N);
      p == null || p(N === "" ? "" : (R == null ? void 0 : R.value) ?? N);
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
              M
            ),
            value: n ?? i ?? "",
            disabled: l,
            onChange: T,
            ...u,
            children: [
              o && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: o }),
              t.map((H) => /* @__PURE__ */ e("option", { value: H.value, disabled: H.disabled, children: H.label }, H.value))
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
function Ns({
  options: t,
  value: n,
  defaultValue: i,
  onChange: o,
  size: l = "middle",
  disabled: m = !1,
  className: h
}) {
  var u;
  const [w, g] = b(
    i ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), p = n ?? w, M = (v) => {
    m || (n === void 0 && g(v), o == null || o(v));
  };
  return /* @__PURE__ */ e("div", { className: Fe(ct.container, Jn[l], h), children: t.map((v) => {
    const T = p === v.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Fe(ct.item, T && ct.itemActive, m && ct.itemDisabled),
        onClick: () => M(v.value),
        disabled: m,
        "aria-pressed": T,
        children: v.label
      },
      v.value
    );
  }) });
}
const ea = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, ta = Ve.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: i = !1, onChange: o, onError: l, maxSize: m, children: h, className: w, dragable: g = !0, placeholderTitle: p, placeholderDescription: M, placeholderIcon: u, maxCount: v }, T) => {
    const H = ie(null), [N, R] = b(!1), G = Re((W) => {
      if (v && W.length > v) {
        l == null || l(new Error(`单次最多上传 ${v} 个文件`));
        return;
      }
      if (m) {
        for (const E of Array.from(W))
          if (E.size > m) {
            l == null || l(new Error(`文件“${E.name}”超过大小限制（${ea(m)}）`));
            return;
          }
      }
      o == null || o(W);
    }, [v, m, o, l]), V = () => {
      var W;
      i || (W = H.current) == null || W.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: T,
        className: Fe(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          N && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          i && "cursor-not-allowed opacity-60",
          w
        ),
        onClick: V,
        onKeyDown: (W) => {
          !i && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), V());
        },
        onDragOver: (W) => {
          g && !i && (W.preventDefault(), R(!0));
        },
        onDragLeave: () => R(!1),
        onDrop: (W) => {
          g && !i && (W.preventDefault(), R(!1), G(W.dataTransfer.files));
        },
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-disabled": i,
        children: [
          /* @__PURE__ */ e("input", { ref: H, type: "file", accept: t, multiple: n, disabled: i, onChange: (W) => W.target.files && G(W.target.files), className: "hidden" }),
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
ta.displayName = "BaseUpload";
const ra = "_maskAnimation_1h49h_1", na = "_modalAnimation_1h49h_5", tr = {
  maskAnimation: ra,
  modalAnimation: na
}, Vt = ({
  visible: t,
  open: n = t,
  show: i = n,
  title: o,
  width: l = 520,
  centered: m = !0,
  destroyOnClose: h = !1,
  mask: w = !0,
  maskClosable: g = !0,
  okText: p = "确认",
  cancelText: M = "取消",
  confirmLoading: u = !1,
  okButtonProps: v,
  cancelButtonProps: T,
  onConfirm: H,
  onCancel: N,
  onClose: R,
  onOk: G,
  onDismiss: V,
  children: W,
  footer: E,
  className: se,
  bodyClassName: X
}) => {
  const q = i ?? !1, _ = Re(async () => {
    try {
      H ? await H() : G && await G();
    } catch (re) {
      console.error("Modal confirm error:", re);
    }
  }, [H, G]), te = Re(() => {
    N ? N() : R ? R() : V == null || V();
  }, [N, R, V]), f = be(() => {
    if (E === null) return null;
    if (E) return E;
    const { type: re, ...le } = T ?? {}, { type: Z, ...A } = v ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Qe, { type: "secondary", size: "medium", onClick: te, ...le, children: M }),
      /* @__PURE__ */ e(Qe, { type: "primary", size: "medium", isLoading: u, onClick: _, ...A, children: u ? "加载中..." : p })
    ] });
  }, [T, M, u, E, te, _, v, p]);
  return !q && h || !q ? null : /* @__PURE__ */ r(nt, { children: [
    w && /* @__PURE__ */ e("div", { className: Fe("fixed inset-0 z-[1000] bg-overlayMask", tr.maskAnimation), onClick: () => g && te(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Fe(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          m && "left-1/2 top-1/2",
          tr.modalAnimation,
          se
        ),
        style: { width: l },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          o && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: o }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: te, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Fe("min-h-20 p-5 text-primaryText", X), children: W }),
          f
        ]
      }
    )
  ] });
};
Vt.displayName = "BaseModal";
const aa = ({ title: t, extra: n, children: i, hoverable: o = !1, loading: l = !1, bordered: m = !0, className: h, bodyClassName: w, onClick: g }) => /* @__PURE__ */ r(
  "div",
  {
    className: Fe(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      m && "border border-borderGray",
      o && "cursor-pointer hover:border-borderGray hover:shadow-md",
      l && "pointer-events-none opacity-60",
      h
    ),
    onClick: g,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Fe("p-4 text-primaryText", (t || n) && "pt-1", w), children: i })
    ]
  }
);
aa.displayName = "BaseCard";
const sa = ({ columns: t, dataSource: n = [], rowKey: i = "id", loading: o = !1, bordered: l = !0, striped: m = !0, className: h, onRow: w }, g) => /* @__PURE__ */ r("div", { ref: g, className: Fe("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: l ? "border-b border-lineSubtle" : void 0, children: t.map((p) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: p.width, textAlign: p.align }, children: p.title }, p.key || String(p.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((p, M) => {
      const u = String(typeof i == "string" ? p[i] ?? M : M);
      return /* @__PURE__ */ e("tr", { className: Fe(l && "border-b border-lineSoft last:border-b-0", m && "odd:bg-surface"), ...(w == null ? void 0 : w(p, M)) || {}, children: t.map((v) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: v.align }, children: v.render ? v.render(p[v.dataIndex], p, M) : String(p[v.dataIndex] ?? "") }, v.key || String(v.dataIndex))) }, u);
    }) })
  ] }),
  o && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), ks = Ve.forwardRef(sa), la = ({ current: t = 1, pageSize: n = 10, total: i = 0, onChange: o, showSizeChanger: l = !1, pageSizeOptions: m = [10, 20, 50, 100], onShowSizeChange: h, disabled: w = !1, className: g }) => {
  const p = be(() => Math.ceil(i / n) || 1, [n, i]), M = Re((v) => h == null ? void 0 : h(1, Number(v.target.value)), [h]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Fe("flex flex-wrap items-center justify-center gap-4 p-4", g), children: [
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t > 1 && (o == null ? void 0 : o(t - 1)), disabled: w || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      p,
      " 页，共 ",
      i,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t < p && (o == null ? void 0 : o(t + 1)), disabled: w || t >= p, children: "下一页 →" }),
    l && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: M, disabled: w, children: m.map((v) => /* @__PURE__ */ r("option", { value: v, children: [
      v,
      " 条/页"
    ] }, v)) })
  ] });
};
la.displayName = "BasePagination";
const Kt = ({ description: t = "暂无数据", image: n, children: i }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  i
] });
Kt.displayName = "BaseEmpty";
const At = ({ trigger: t, items: n, footerItems: i = [], open: o = !1, onOpenChange: l, onTriggerClick: m, onItemClick: h, placement: w = "bottom-start", width: g, portal: p = !1, className: M, triggerClassName: u, menuClassName: v, listClassName: T, footerClassName: H }) => {
  const N = ie(null), R = ie(null), [G, V] = b({}), W = w.endsWith("end"), E = w.startsWith("top");
  zt(() => {
    var f;
    if (!o || !p || !N.current) return;
    const _ = N.current.getBoundingClientRect(), te = E ? ((f = R.current) == null ? void 0 : f.offsetHeight) ?? 0 : 0;
    V({
      position: "fixed",
      left: W ? _.right : _.left,
      top: E ? _.top - te - 8 : _.bottom,
      transform: W ? "translateX(-100%)" : void 0
    });
  }, [E, W, o, p, w]), pe(() => {
    if (!o || !l) return;
    const _ = (te) => {
      var re, le;
      const f = te.target;
      (re = N.current) != null && re.contains(f) || (le = R.current) != null && le.contains(f) || l(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [l, o]);
  const se = be(() => g ? { width: typeof g == "number" ? `${g}px` : g } : void 0, [g]), X = Re((_) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Fe(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !_.danger && !_.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !_.danger && _.active && "bg-primary-soft font-medium text-primary",
        _.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (te) => h == null ? void 0 : h(_, te),
      disabled: _.disabled,
      children: [
        _.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: _.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: _.label })
      ]
    },
    _.key
  ), [h]), q = o ? /* @__PURE__ */ r(
    "div",
    {
      ref: R,
      className: Fe(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !p && "absolute",
        !p && !E && "top-[calc(100%+8px)]",
        !p && E && "bottom-[calc(100%+8px)]",
        !p && W ? "right-0" : p ? void 0 : "left-0",
        v
      ),
      style: p ? { ...G, ...se } : se,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Fe("flex min-h-0 flex-col gap-1", T), children: n.map(X) }),
        i.length > 0 && /* @__PURE__ */ e("div", { className: Fe("flex flex-col gap-1 border-t border-lineSoft pt-2", H), children: i.map(X) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: N, className: Fe("relative inline-block", M), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Fe("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (_) => {
      m == null || m(_), l == null || l(!o);
    }, "aria-haspopup": "menu", "aria-expanded": o, children: t }),
    p ? q && hn(q, document.body) : q
  ] });
};
At.displayName = "BaseActionMenu";
const oa = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: i,
  feedback: o,
  onFeedback: l,
  disabled: m = !1
}) => {
  const [h, w] = b(!1), g = !!(i || l), p = Re(async () => {
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
            children: h ? /* @__PURE__ */ e(ut, { size: 15 }) : /* @__PURE__ */ e(Bt, { size: 15 })
          }
        ),
        i && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: i,
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
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Hr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(qr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, rr = Ve.memo(oa), ia = {
  clarification: {
    icon: /* @__PURE__ */ e(fr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(Et, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(hr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(Et, { size: 16 }),
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
function ca({ card: t, actionPending: n = !1, onAction: i }) {
  const o = ia[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${o.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${o.iconClassName}`, "aria-hidden": "true", children: o.icon }),
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
          disabled: n || !i,
          onClick: () => i == null ? void 0 : i(t.actionKey, l.id),
          children: l.label
        },
        l.id
      )) })
    ] })
  ] }) });
}
function da({ draft: t, onPreview: n, onConfirm: i, onCancel: o }) {
  const l = t.status === "saving", m = t.status === "saved", h = t.actionable ?? !0, w = t.previewable ?? !0, g = l || m || !h || !i;
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
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(_t, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
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
        !m && h && o && /* @__PURE__ */ e(
          Qe,
          {
            type: "secondary",
            size: "small",
            disabled: l,
            onClick: () => o(t.actionKey),
            children: "取消"
          }
        ),
        (h || m) && /* @__PURE__ */ e(
          Qe,
          {
            type: m ? "secondary" : "primary",
            size: "small",
            disabled: g,
            onClick: () => i == null ? void 0 : i(t.actionKey),
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
}, Pt = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => Pt(n)).join("") : Ve.isValidElement(t) ? Pt(t.props.children) : "", sr = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, ha = ({ href: t, label: n }) => {
  const i = be(() => {
    const o = n.trim();
    if (o) return o;
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
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: i }),
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
}, fa = ({ language: t, rawCode: n, className: i, children: o }) => {
  const [l, m] = b(!1), h = Re(async () => {
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
            l ? /* @__PURE__ */ e(ut, { size: 12 }) : /* @__PURE__ */ e(Bt, { size: 12 }),
            l ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${i ?? ""}`.trim(), children: o }) })
  ] });
}, xa = ({ rawCode: t }) => {
  const [n, i] = b(!1), o = Re(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), i(!0), window.setTimeout(() => i(!1), 1200);
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
            n ? /* @__PURE__ */ e(ut, { size: 12 }) : /* @__PURE__ */ e(Bt, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, Lr = (t) => {
  const n = typeof t.title == "string" ? t.title.trim() : "", i = typeof t.pmid == "string" ? t.pmid.trim() : "", o = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !i || !o ? null : { title: n, pmid: i, doi: o };
}, lr = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((o) => o.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const i = [];
  return n.forEach((o, l) => {
    var u;
    const m = o.match(/PMID\s*[:：]\s*(\d{4,})/i), h = o.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!m || !h) return;
    const w = o.slice(0, m.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), g = ((u = n[l - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", M = Lr({
      title: w || g,
      pmid: m[1],
      doi: h[1]
    });
    M && i.push(M);
  }), i.length === 0 ? null : { items: i };
}, ba = (t) => {
  if (!t.startsWith(nr))
    return lr(t);
  const n = t.slice(nr.length).trim();
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    if (!Array.isArray(i.items)) return null;
    const o = i.items.map((l) => Lr(l)).filter((l) => l !== null);
    return o.length === 0 ? null : { items: o };
  } catch {
    return lr(n);
  }
}, zr = ({
  msg: t,
  actionKey: n,
  feedback: i,
  onFeedback: o,
  onRefresh: l,
  onConfirmMiraDraft: m,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: w,
  pendingDisplayActionKey: g,
  onDisplayCardAction: p,
  isTyping: M = !1,
  isStreaming: u
}) => {
  var ne, $;
  const v = t.role === "user", T = u ?? M, H = ie(null), [N, R] = b(null), [G, V] = b(null), [W, E] = b(null), [se, X] = b(!1), q = be(() => /```\s*mermaid/i.test(t.content), [t.content]), _ = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), te = be(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), f = be(
    () => v ? null : ba(t.content),
    [v, t.content]
  ), re = !!(f && f.items.length > 0);
  pe(() => {
    if (!_ || N || G) return;
    let y = !1;
    return ua().then((L) => {
      y || (R(() => L.remark), V(() => L.rehype));
    }).catch(() => {
    }), () => {
      y = !0;
    };
  }, [_, N, G]), pe(() => {
    if (!te || se) return;
    let y = !1;
    return ma().then((L) => {
      y || (L && E(() => L), X(!0));
    }), () => {
      y = !0;
    };
  }, [te, se]);
  const le = be(() => {
    const y = [Mr];
    return W && y.push(W), N && y.push(N), y;
  }, [W, N]), Z = be(() => {
    const y = [pn];
    return G && y.push(G), y;
  }, [G]), A = be(
    () => ({
      table: ({ node: y, ...L }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...L }) }),
      tr: ({ node: y, ...L }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...L }),
      th: ({ node: y, ...L }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...L
        }
      ),
      td: ({ node: y, ...L }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...L }),
      blockquote: ({ node: y, ...L }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...L
        }
      ),
      input: ({ node: y, type: L, checked: x, ...J }) => L === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!x,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...J
        }
      ) : /* @__PURE__ */ e("input", { type: L, ...J }),
      section: ({ node: y, ...L }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...L }),
      p: ({ node: y, children: L, ...x }) => {
        const J = Ve.Children.toArray(L);
        if (J.length === 1 && Ve.isValidElement(J[0])) {
          const he = J[0];
          if (typeof he.props.href == "string" && sr(he.props.href)) {
            const ce = Pt(he.props.children).trim();
            return /* @__PURE__ */ e(ha, { href: he.props.href, label: ce });
          }
        }
        return /* @__PURE__ */ e("p", { ...x, children: L });
      },
      a: ({ node: y, href: L, ...x }) => {
        const J = L ?? "", he = /^https?:\/\/(dx\.)?doi\.org\//i.test(J) || /^doi:/i.test(J), ce = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(J) || /\/pmc\/|\/pmid\//i.test(J), K = sr(J);
        return he || ce || K ? /* @__PURE__ */ e(
          "a",
          {
            href: L,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...x
          }
        ) : /* @__PURE__ */ e("a", { href: L, target: "_blank", rel: "noreferrer", ...x });
      },
      pre({ children: y, ...L }) {
        const x = Ve.Children.toArray(y).find(
          (j) => Ve.isValidElement(j) && typeof j.props.className == "string" && j.props.className.includes("language-")
        );
        if (!x)
          return /* @__PURE__ */ e("pre", { ...L, children: y });
        const J = x.props.className ?? "", he = J.match(/language-([\w-]+)/), ce = he ? he[1].toLowerCase() : "code", K = Pt(x.props.children).replace(/\n$/, "");
        return ce === "mermaid" ? /* @__PURE__ */ e(xa, { rawCode: K }) : /* @__PURE__ */ e(fa, { language: ce, rawCode: K, className: J, children: x.props.children });
      },
      code({ children: y, className: L, ...x }) {
        return L ? /* @__PURE__ */ e("code", { className: L, ...x, children: y }) : /* @__PURE__ */ e(
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
  return pe(() => {
    if (v || T || !q) return;
    const y = H.current;
    if (!y) return;
    const L = Array.from(y.querySelectorAll(".mermaid")).filter(
      (x) => x.dataset.processed !== "true"
    );
    L.length !== 0 && pa().then(async (x) => {
      await Promise.all(
        L.map(async (J, he) => {
          var ee;
          const ce = (ee = J.textContent) == null ? void 0 : ee.trim();
          if (!ce) return;
          const K = `mermaid-${Date.now()}-${he}`, { svg: j } = await x.render(K, ce);
          J.innerHTML = j, J.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [v, T, q, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${v ? "justify-end" : "justify-start"}`, children: v ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
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
        ($ = t.attachments) == null ? void 0 : $.map((y) => /* @__PURE__ */ r(
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
    re && f ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: f.items.map((y, L) => /* @__PURE__ */ r(
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
      `${y.pmid}-${L}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: H,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Sr,
          {
            remarkPlugins: le,
            rehypePlugins: Z,
            components: A,
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
        feedback: i,
        onFeedback: n && o ? (y) => o(n, y) : void 0,
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
  queued: /* @__PURE__ */ e(It, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(it, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(Nr, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(fr, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(Et, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(hr, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(Ut, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(wr, { size: 14, className: "text-danger" })
}, or = {
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
    icon: /* @__PURE__ */ e(it, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(Et, { size: 13 }),
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
  label: i,
  defaultExpanded: o = !0,
  elapsedSeconds: l,
  reasoning: m
}) => {
  const [h, w] = b(o), [g, p] = b(!1), M = ie(null);
  pe(() => {
    n.length > 0 && w(!0);
  }, [n.length]);
  const u = n.length > 0, v = l === void 0 ? void 0 : `${Math.floor(l / 60)}:${String(l % 60).padStart(2, "0")}`, T = (m == null ? void 0 : m.split(/\r?\n/).map((N) => N.trim()).filter(Boolean)) ?? [], H = T[T.length - 1] ?? "";
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: va[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: i || ya[t] }),
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
            !g && H && /* @__PURE__ */ r("span", { className: "relative ml-2 min-w-0 flex-1 overflow-hidden text-left text-[12px] font-normal text-tertiaryText", children: [
              /* @__PURE__ */ e("span", { className: "block whitespace-nowrap", children: H }),
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
        ref: M,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${h ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((N, R) => {
          const G = or[N.type] ?? or.tool, V = N.status ? wa[N.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${G.colorClass}`, children: G.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: N.label }),
                    V && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${V.colorClass}`,
                        "aria-label": N.status,
                        children: V.icon
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
}, Na = Ve.memo(Wt);
function ka(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t && (t.current = n);
}
const Ta = 24;
function Ht(t) {
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : 0;
}
function Ca({
  messages: t,
  isTyping: n,
  statusPhase: i = "thinking",
  statusLabel: o,
  statusVisible: l,
  searchSteps: m = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: w = 800,
  selection: g,
  scrollbar: p,
  feedbackByMessageKey: M,
  getMessageKey: u = (X, q) => String(q),
  onFeedback: v,
  onRegenerate: T,
  onConfirmMiraDraft: H,
  onPreviewMiraDraft: N,
  onCancelMiraDraft: R,
  pendingDisplayActionKey: G,
  onDisplayCardAction: V,
  onScroll: W,
  scrollContainerRef: E,
  onMessageElement: se
}) {
  var ge, U;
  const X = !!g, q = ie(null), _ = ie(null), te = ie(/* @__PURE__ */ new Map()), f = ie(), re = ie(), le = ie(!0), [Z, A] = b(), [ne, $] = b(0), y = i === "awaiting_clarification" || i === "awaiting_confirmation" || i === "awaiting_approval" || i === "warning" || i === "failed", L = n && (l ?? !h) || l === !0 && y;
  let x = -1, J = -1;
  if (n) {
    for (let k = t.length - 1; k >= 0; k -= 1)
      if (((ge = t[k]) == null ? void 0 : ge.role) === "user") {
        J = k;
        break;
      }
    for (let k = t.length - 1; k > J; k -= 1)
      if (((U = t[k]) == null ? void 0 : U.role) === "assistant") {
        x = k;
        break;
      }
  }
  const he = J >= 0 ? u(t[J], J) : void 0, ce = x >= 0 ? u(t[x], x) : void 0, K = he && ce ? `${he}:${ce}` : void 0, j = x >= 0 ? t[x] : void 0, ee = !!(j != null && j.reasoning && !j.content), De = L && (!h || ee || y);
  pe(() => {
    if (!n) {
      re.current = void 0, $(0);
      return;
    }
    re.current = Date.now(), $(0);
    const k = window.setInterval(() => {
      const P = re.current;
      P !== void 0 && $(Math.floor((Date.now() - P) / 1e3));
    }, 1e3);
    return () => window.clearInterval(k);
  }, [n]);
  const Be = Re(
    (k) => {
      q.current = k, ka(E, k);
    },
    [E]
  ), $e = Re(
    (k) => {
      const P = k.currentTarget, S = P.scrollHeight - P.scrollTop - P.clientHeight;
      le.current = S <= Ta, W == null || W(k);
    },
    [W]
  );
  return zt(() => {
    const k = q.current, P = _.current;
    if (!k || !P) return;
    const S = () => {
      le.current && (k.scrollTop = k.scrollHeight);
    };
    S();
    const ye = new ResizeObserver(S);
    return ye.observe(P), () => ye.disconnect();
  }, []), zt(() => {
    if (!K || !ce || J < 0 || x < 0)
      return;
    const k = q.current, P = _.current, S = te.current.get(J);
    if (!k || !P || !S) return;
    const ye = () => {
      const _e = window.getComputedStyle(k), Le = window.getComputedStyle(P), Ee = k.clientHeight - Ht(_e.paddingTop) - Ht(_e.paddingBottom), me = Ht(Le.rowGap || Le.gap), xe = Math.max(
        0,
        Math.floor(Ee - S.offsetHeight - me)
      );
      A(
        (ue) => (ue == null ? void 0 : ue.assistantKey) === ce && ue.minHeight === xe ? ue : { assistantKey: ce, minHeight: xe }
      );
    };
    ye();
    const fe = new ResizeObserver(ye);
    return fe.observe(k), fe.observe(S), () => fe.disconnect();
  }, [
    x,
    ce,
    K,
    J
  ]), zt(() => {
    if (!K || !ce || (Z == null ? void 0 : Z.assistantKey) !== ce || J < 0 || f.current === K)
      return;
    const k = q.current, P = te.current.get(J);
    !k || !P || (k.scrollTo({ top: P.offsetTop, behavior: "auto" }), f.current = K);
  }, [ce, K, J, Z]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: Be,
        "data-chat-scroll-container": !0,
        onScroll: $e,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: _,
            className: `flex w-full flex-col ${X ? "gap-3" : "gap-8"}`,
            style: { maxWidth: w },
            children: [
              t.map((k, P) => {
                const S = u(k, P), ye = (g == null ? void 0 : g.selectedMessageKeys.has(S)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": P,
                    "data-chat-turn-reserved": (Z == null ? void 0 : Z.assistantKey) === S ? "true" : void 0,
                    ref: (fe) => {
                      fe ? te.current.set(P, fe) : te.current.delete(P), se == null || se(P, fe);
                    },
                    className: X ? "flex w-full items-start gap-2" : void 0,
                    style: (Z == null ? void 0 : Z.assistantKey) === S ? { minHeight: Z.minHeight } : void 0,
                    children: [
                      g && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => g.onToggleMessage(S),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": ye ? "取消选择消息" : "选择消息",
                          children: ye ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ut, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: g ? `relative min-w-0 flex-1 rounded-xl px-2 transition-colors ${ye ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${k.role === "user" ? "py-2.5" : "py-1.5"}` : "relative",
                          children: [
                            P === x && De && /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 z-10 flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              Wt,
                              {
                                phase: i,
                                label: o,
                                searchSteps: ee ? [] : [...m],
                                elapsedSeconds: n ? ne : void 0,
                                reasoning: ee ? j == null ? void 0 : j.reasoning : void 0
                              }
                            ) }),
                            /* @__PURE__ */ e(
                              zr,
                              {
                                msg: k,
                                actionKey: S,
                                feedback: M == null ? void 0 : M[S],
                                onFeedback: v,
                                onRefresh: T ? () => T(P) : void 0,
                                onConfirmMiraDraft: H,
                                onPreviewMiraDraft: N,
                                onCancelMiraDraft: R,
                                pendingDisplayActionKey: G,
                                onDisplayCardAction: V,
                                isTyping: n && P === x
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  S
                );
              }),
              x < 0 && L && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                Wt,
                {
                  phase: i,
                  label: o,
                  searchSteps: ee ? [] : [...m],
                  elapsedSeconds: n ? ne : void 0
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
Ve.memo(Ca);
function Ts({
  children: t,
  maxWidth: n = 840,
  disclaimer: i = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: n },
      children: [
        t,
        i && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: i })
      ]
    }
  );
}
const Cs = pr(
  function({ header: n, children: i, sidePanels: o }, l) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: l, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: i }),
        o
      ] })
    ] });
  }
), Ss = pr(
  function({ open: n, width: i, resizing: o = !1, overlay: l = !1, overlayRight: m = 0, children: h }, w) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: w,
        "data-overlay": l ? "true" : "false",
        style: { width: n ? i : 0, ...l ? { right: m } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${l ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${o ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: i }, className: "h-full min-w-0", children: h })
      }
    );
  }
);
function Sa({
  isSidebarOpen: t,
  title: n,
  editingTitle: i,
  titleInputRef: o,
  divided: l = !1,
  actions: m,
  onOpenSidebar: h,
  onStartEditTitle: w,
  onEditingTitleChange: g,
  onCommitTitle: p,
  onEditingTitleKeyDown: M
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
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: i !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: o,
              value: i,
              onChange: (v) => g == null ? void 0 : g(v.target.value),
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
function Ms({ active: t = !1, icon: n, label: i, onClick: o }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: o,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: i })
      ]
    }
  );
}
function $s({
  items: t,
  activeMessageIndex: n,
  initiallyExpanded: i = !1,
  onSelect: o
}) {
  const [l, m] = b(i), [h, w] = b(null), [g, p] = b(0), [M, u] = b(0), [v, T] = b(!1), H = ie(null), N = ie({}), R = ie(null), G = Re(() => {
    const E = H.current;
    if (!E) {
      p(0), u(0);
      return;
    }
    const { scrollTop: se, scrollHeight: X, clientHeight: q } = E;
    if (X <= q || q <= 0) {
      p(0), u(0);
      return;
    }
    const _ = Math.max(q / X * q, 24), te = q - _, f = se / Math.max(X - q, 1);
    p(_), u(te * f);
  }, []), V = Re(() => {
    G(), T(!0), R.current !== null && window.clearTimeout(R.current), R.current = window.setTimeout(() => T(!1), 650);
  }, [G]), W = () => {
    R.current !== null && (window.clearTimeout(R.current), R.current = null), m(!1), w(null), T(!1);
  };
  return pe(() => {
    if (!l) return;
    const E = window.requestAnimationFrame(G);
    return () => window.cancelAnimationFrame(E);
  }, [l, t.length, G]), pe(() => {
    const E = H.current, se = N.current[n];
    if (!E || !se) return;
    const X = E.scrollTop, q = X + E.clientHeight, _ = se.offsetTop, te = _ + se.offsetHeight, f = 16;
    _ < X + f ? E.scrollTo({ top: Math.max(_ - f, 0), behavior: "auto" }) : te > q - f && E.scrollTo({
      top: Math.max(te - E.clientHeight + f, 0),
      behavior: "auto"
    });
  }, [n, t.length]), pe(() => () => {
    R.current !== null && window.clearTimeout(R.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => m(!0),
      onMouseLeave: W,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: H,
          onScroll: V,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${l ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((E) => {
              const se = E.messageIndex === n, X = h === E.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (q) => {
                    N.current[E.messageIndex] = q;
                  },
                  type: "button",
                  onClick: () => o(E.messageIndex),
                  onMouseEnter: () => w(E.messageIndex),
                  onMouseLeave: () => w(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${l ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${E.messageIndex + 1} 条用户消息`,
                  title: E.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${l ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${se ? "text-primary" : X ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: E.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${se ? "h-[4px] w-[12px] bg-primary" : X ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                E.messageIndex
              );
            }) }),
            l && g > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${v ? "opacity-100" : "opacity-0"}`,
                style: { height: g, transform: `translateY(${M}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Ls({
  selectedCount: t,
  shareLink: n,
  modalOpen: i,
  copied: o = !1,
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
        visible: i,
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
                  o ? /* @__PURE__ */ e(ut, { size: 14 }) : /* @__PURE__ */ e(Bt, { size: 14 }),
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
function Er({
  attachments: t,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: i = !1,
  deletingAttachmentId: o,
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
          disabled: i,
          onClick: h,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            i ? /* @__PURE__ */ e(it, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Yr, { size: 14 }),
            i ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${h ? "pr-28" : ""}`, children: t.map((g) => {
      const p = o === g.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: g.statusLabel,
          children: [
            /* @__PURE__ */ e(_t, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: g.name }),
            g.status === "processing" && /* @__PURE__ */ e(it, { size: 12, className: "animate-spin" }),
            w && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: p,
                onClick: () => w(g.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${g.name}`,
                title: "删除附件",
                children: p ? /* @__PURE__ */ e(it, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(Tr, { size: 13 })
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
const Ma = {
  disabled: /* @__PURE__ */ e(Qr, { size: 14 }),
  pending: /* @__PURE__ */ e(It, { size: 14 }),
  indexed: /* @__PURE__ */ e(vt, { size: 14 })
};
function Ar({
  createdByName: t,
  updatedByName: n,
  updatedAt: i,
  index: o
}) {
  return !t && !n && !i && !o ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    n && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      n
    ] }),
    i && /* @__PURE__ */ e("span", { children: i }),
    o && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: o.detail, children: [
      Ma[o.status],
      o.statusLabel
    ] })
  ] });
}
const $a = "_preview_a55vk_1", La = "_editor_a55vk_3", Pr = {
  preview: $a,
  editor: La
};
function za({
  document: t,
  layout: n = "page"
}) {
  const [i, o] = b(!1), l = ie(null), m = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  pe(() => () => {
    l.current !== null && window.clearTimeout(l.current);
  }, []);
  const h = () => {
    o(!0), l.current !== null && window.clearTimeout(l.current), l.current = window.setTimeout(() => o(!1), 700);
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
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${i ? "is-scrolling" : ""}`,
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
function zs({
  tabs: t,
  activeKey: n,
  onSelectTab: i,
  onCloseTab: o,
  onClose: l,
  pendingActionKey: m,
  onAction: h,
  resolveActions: w,
  renderContent: g,
  onResizeStart: p
}) {
  const M = t.find((T) => T.key === n) ?? null, u = M ? (w == null ? void 0 : w(M)) ?? M.actions : void 0, v = M ? g == null ? void 0 : g(M) : void 0;
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
        const H = T.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => i(T.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${H ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                T.type === "knowledge" || T.type === "draft" ? /* @__PURE__ */ e(_t, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Zr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: T.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (N) => {
                N.stopPropagation(), o(T.key);
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
          Qe,
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
            onClick: l,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(gt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: M ? v || (M.document ? /* @__PURE__ */ e(za, { document: M.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: M.loading ? "正在加载文档…" : M.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Es({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: i,
  knowledgeDocs: o,
  experiments: l,
  activePreviewKey: m,
  onSearchQueryChange: h,
  onOpenKnowledge: w,
  onOpenExperiment: g,
  onResizeStart: p
}) {
  const M = o.length + l.length;
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
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: i ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: i }) : M === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(nt, { children: [
        o.map((u) => {
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
const Ea = 50, Aa = 100 * 1024 * 1024, Pa = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", Ba = [
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
], _a = /(?:^|\s)\/([^\s/]*)$/, Ia = /(?:^|\s)@([^\s@]*)$/, Ra = (t, n) => {
  const o = t.slice(0, n).match(_a);
  return o ? o[1] : null;
}, Da = (t, n) => {
  const o = t.slice(0, n).match(Ia);
  return o ? o[1] : null;
}, As = (t, n, i, o) => {
  const l = t.slice(0, n), m = t.slice(i), h = l.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const u = `/${o} `;
    return { value: `${l}${u}${m}`, cursor: l.length + u.length };
  }
  const w = l.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}/${o} `, M = `${l.slice(0, w)}${p}`;
  return {
    value: `${M}${m}`,
    cursor: M.length
  };
}, Ps = (t, n, i, o) => {
  const l = t.slice(0, n), m = t.slice(i), h = l.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const u = `@${o} `;
    return { value: `${l}${u}${m}`, cursor: l.length + u.length };
  }
  const w = l.length - h[0].length, p = `${h[0].startsWith(" ") ? " " : ""}@${o} `, M = `${l.slice(0, w)}${p}`;
  return {
    value: `${M}${m}`,
    cursor: M.length
  };
}, ja = [], Bs = [], qt = [
  { id: "low", label: "Fast", desc: "快速响应，适合简单问题" },
  { id: "medium", label: "Deep", desc: "深度分析，平衡速度与质量" },
  { id: "high", label: "Max", desc: "最强推理，适合复杂任务" }
], ir = "DeepSeek V4", Br = ({
  onSend: t,
  disabled: n,
  autoFocus: i = !1,
  isStreaming: o = !1,
  onCancel: l,
  leadingControls: m,
  skillOptions: h = Ba,
  fileOptions: w = ja,
  uploadAccept: g,
  validateUploadFile: p,
  onUploadValidationError: M
}) => {
  var ve, Q;
  const [u, v] = b(""), [T, H] = b(!1), [N, R] = b(!1), [G, V] = b(""), [W, E] = b(-1), [se, X] = b(!1), [q, _] = b(""), [te, f] = b(-1), [re, le] = b([]), [Z, A] = b([]), [ne, $] = b([]), [y, L] = b(!1), [x, J] = b("medium"), [he, ce] = b(!1), [K, j] = b(!1), [ee, De] = b(null), Be = ie(null), $e = ie(!1), ge = ie(0), U = ie(null), k = jr(), P = ie([]), S = ie(null), ye = ie(null), fe = ie(null), _e = ie(null), Le = o, Ee = Le && !!l;
  pe(() => {
    P.current = re;
  }, [re]), pe(() => () => {
    P.current.forEach((a) => {
      a.previewUrl && URL.revokeObjectURL(a.previewUrl);
    });
  }, []), pe(() => {
    if (!he) return;
    const a = (I) => {
      S.current && !S.current.contains(I.target) && (ce(!1), j(!1));
    };
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, [he]), pe(() => () => {
    _e.current && clearTimeout(_e.current);
  }, []);
  const me = be(() => {
    const a = G.trim().toLowerCase();
    return a ? h.filter((I) => `${I.id} ${I.description} ${I.source}`.toLowerCase().includes(a)) : h;
  }, [h, G]), xe = be(() => {
    const a = q.trim().toLowerCase();
    return a ? w.filter((I) => `${I.name} ${I.projectName} ${I.sourceType} ${I.operatorName ?? ""} ${I.operatedAt ?? ""}`.toLowerCase().includes(a)) : w.filter((I) => I.isRecent).slice(0, 10);
  }, [w, q]), ue = Re((a, I) => {
    const O = I ?? a.length, Se = Ra(a, O);
    if (Se !== null) {
      R(!0), V(Se), E(-1), X(!1), _(""), f(-1);
      return;
    }
    const Ce = Da(a, O);
    if (Ce !== null) {
      X(!0), _(Ce), f(-1), R(!1), V(""), E(-1);
      return;
    }
    R(!1), V(""), E(-1), X(!1), _(""), f(-1);
  }, []), Ie = Re((a) => {
    if (a.disabled) return;
    const I = Be.current, O = (I == null ? void 0 : I.selectionStart) ?? u.length, Se = (I == null ? void 0 : I.selectionEnd) ?? O, Ce = u.slice(0, O), He = u.slice(Se), we = (() => {
      const Ae = Ce.match(/(?:^|\s)\/[^\s/]*$/);
      if (!Ae)
        return { value: u, cursor: O };
      const je = Ce.length - Ae[0].length, Ue = Ae[0].startsWith(" ") ? " " : "", Ge = `${Ce.slice(0, je)}${Ue}`;
      return {
        value: `${Ge}${He}`,
        cursor: Ge.length
      };
    })();
    A((Ae) => {
      const je = `skill-${a.id}`;
      return Ae.some((Ue) => Ue.id === je) ? Ae : [...Ae, { id: je, type: "skill", label: a.id, sourceId: a.id }];
    }), v(we.value), R(!1), V(""), E(-1), requestAnimationFrame(() => {
      I && (I.focus(), I.setSelectionRange(we.cursor, we.cursor));
    });
  }, [u]), Te = Re((a) => {
    const I = Be.current, O = (I == null ? void 0 : I.selectionStart) ?? u.length, Se = (I == null ? void 0 : I.selectionEnd) ?? O, Ce = u.slice(0, O), He = u.slice(Se), we = (() => {
      const Ae = Ce.match(/(?:^|\s)@[^\s@]*$/);
      if (!Ae)
        return { value: u, cursor: O };
      const je = Ce.length - Ae[0].length, Ue = Ae[0].startsWith(" ") ? " " : "", Ge = `${Ce.slice(0, je)}${Ue}`;
      return {
        value: `${Ge}${He}`,
        cursor: Ge.length
      };
    })();
    $((Ae) => {
      const je = `doc-${a.id}`;
      return Ae.some((Ue) => Ue.id === je) ? Ae : [...Ae, { id: je, type: "doc", label: a.name, sourceId: a.id }];
    }), v(we.value), X(!1), _(""), f(-1), requestAnimationFrame(() => {
      I && (I.focus(), I.setSelectionRange(we.cursor, we.cursor));
    });
  }, [u]), Y = Re(() => {
    L(!1);
    const a = U.current;
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
  }, []), Xe = Re((a) => {
    const I = Array.from(a.target.files ?? []);
    if (I.length === 0) return;
    const O = I.filter((Se) => {
      const Ce = p == null ? void 0 : p(Se);
      return Ce ? (M == null || M(Ce), !1) : !0;
    });
    le((Se) => {
      const Ce = new Set(Se.map((we) => we.id)), He = [...Se];
      return O.forEach((we) => {
        if (we.size > Aa || He.length >= Ea) return;
        const Ae = `${we.name}-${we.size}-${we.lastModified}`;
        if (Ce.has(Ae)) return;
        const je = we.type.startsWith("image/");
        Ce.add(Ae), He.push({
          id: Ae,
          name: we.name,
          mimeType: we.type || "application/octet-stream",
          previewUrl: je ? URL.createObjectURL(we) : void 0,
          file: we
        });
      }), He;
    }), a.target.value = "";
  }, [M, p]), Ze = Re((a) => {
    le((I) => {
      const O = I.find((Se) => Se.id === a);
      return O != null && O.previewUrl && URL.revokeObjectURL(O.previewUrl), I.filter((Se) => Se.id !== a);
    });
  }, []), Ke = Re((a) => {
    A((I) => I.filter((O) => O.id !== a));
  }, []), Je = Re((a) => {
    $((I) => I.filter((O) => O.id !== a));
  }, []), et = Re(() => {
    !u.trim() || n || o || (t({
      content: u,
      attachments: re.map((a) => ({
        id: a.id,
        name: a.name,
        mimeType: a.mimeType,
        previewUrl: a.previewUrl,
        file: a.file
      })),
      references: [...Z, ...ne],
      thinkingLevel: x
    }), v(""), le([]), A([]), $([]), R(!1), V(""), E(-1), X(!1), _(""), f(-1));
  }, [u, n, o, t, re, ne, Z, x]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: k,
        ref: U,
        type: "file",
        multiple: !0,
        accept: g,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Xe
      }
    ),
    (re.length > 0 || Z.length > 0 || ne.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      Z.map((a) => /* @__PURE__ */ r(
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
        ref: Be,
        autoFocus: i,
        value: u,
        onCompositionStart: () => {
          $e.current = !0;
        },
        onCompositionEnd: (a) => {
          $e.current = !1, ge.current = performance.now(), ue(
            a.currentTarget.value,
            a.currentTarget.selectionStart
          );
        },
        onChange: (a) => {
          const I = a.target.value;
          v(I), ue(I, a.target.selectionStart);
        },
        onClick: (a) => {
          ue(a.currentTarget.value, a.currentTarget.selectionStart);
        },
        onKeyUp: (a) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(a.key) || ue(a.currentTarget.value, a.currentTarget.selectionStart);
        },
        onKeyDown: (a) => {
          const I = a.nativeEvent;
          if (!($e.current || I.isComposing || I.keyCode === 229 || a.key === "Enter" && performance.now() - ge.current < 50)) {
            if (a.key === "Enter" && (a.shiftKey || a.metaKey || a.ctrlKey)) {
              a.preventDefault();
              const O = a.currentTarget, Se = O.selectionStart ?? u.length, Ce = O.selectionEnd ?? Se, He = `${u.slice(0, Se)}
${u.slice(Ce)}`, we = Se + 1;
              v(He), ue(He, we), requestAnimationFrame(() => {
                O.setSelectionRange(we, we);
              });
              return;
            }
            if (N) {
              if (a.key === "ArrowDown") {
                a.preventDefault(), E((O) => me.length === 0 ? -1 : O < 0 ? 0 : (O + 1) % me.length);
                return;
              }
              if (a.key === "ArrowUp") {
                a.preventDefault(), E((O) => me.length === 0 ? -1 : O < 0 ? me.length - 1 : (O - 1 + me.length) % me.length);
                return;
              }
              if (a.key === "Escape") {
                a.preventDefault(), R(!1), V(""), E(-1);
                return;
              }
              if (a.key === "Enter" && !a.shiftKey) {
                a.preventDefault();
                const O = W >= 0 ? me[W] : void 0;
                O && Ie(O);
                return;
              }
            }
            if (se) {
              if (a.key === "ArrowDown") {
                a.preventDefault(), f((O) => xe.length === 0 ? -1 : O < 0 ? 0 : (O + 1) % xe.length);
                return;
              }
              if (a.key === "ArrowUp") {
                a.preventDefault(), f((O) => xe.length === 0 ? -1 : O < 0 ? xe.length - 1 : (O - 1 + xe.length) % xe.length);
                return;
              }
              if (a.key === "Escape") {
                a.preventDefault(), X(!1), _(""), f(-1);
                return;
              }
              if (a.key === "Enter" && !a.shiftKey) {
                a.preventDefault();
                const O = te >= 0 ? xe[te] : void 0;
                O && Te(O);
                return;
              }
            }
            a.key === "Enter" && !a.shiftKey && (a.preventDefault(), et());
          }
        },
        disabled: n,
        onFocus: () => H(!0),
        onBlur: () => {
          H(!1), R(!1), X(!1);
        },
        placeholder: T ? Pa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${re.length > 0 || Z.length > 0 || ne.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    N && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (a) => a.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(dt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: G ? `搜索 skill：${G}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: me.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : me.map((a, I) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: a.disabled,
          title: a.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${a.disabled ? "cursor-not-allowed opacity-50" : I === W ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Ie(a),
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
    se && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (a) => a.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(dt, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: q ? `搜索文件：${q}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !q && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(It, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        xe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : xe.map((a, I) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${I === te ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => Te(a),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(_t, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: a.name }),
              !q && a.operatorName && a.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${a.operatorName} ${a.operatedAt}` })
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
            onMouseEnter: () => L(!0),
            onMouseLeave: () => L(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Y,
                  "aria-controls": k,
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
        /* @__PURE__ */ r("div", { ref: S, className: "relative", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: o,
              onClick: () => {
                ce((a) => !a), j(!1);
              },
              "aria-haspopup": "menu",
              "aria-expanded": he,
              className: `flex h-8 select-none items-center gap-1.5 rounded-full border px-2.5 text-[13px] font-medium transition-all disabled:cursor-not-allowed disabled:opacity-60 ${he ? "border-controlBorderHover bg-primary-soft text-primary" : "border-borderGray bg-white text-secondaryText hover:border-controlBorder hover:bg-bgLight"}`,
              children: [
                /* @__PURE__ */ e(Qt, { size: 13, className: "shrink-0" }),
                /* @__PURE__ */ e("span", { className: "max-w-[90px] truncate leading-none", children: ir }),
                /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center rounded bg-bgLight px-1 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (ve = qt.find((a) => a.id === x)) == null ? void 0 : ve.label }),
                /* @__PURE__ */ e(
                  Jr,
                  {
                    size: 12,
                    className: `shrink-0 transition-transform duration-200 ${he ? "rotate-0" : "rotate-180"}`
                  }
                )
              ]
            }
          ),
          he && /* @__PURE__ */ r(
            "div",
            {
              ref: ye,
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
                      ce(!1), j(!1);
                    },
                    className: "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-primaryText transition-colors hover:bg-[#f4f7fb]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "truncate text-[13px] font-medium leading-tight", children: ir }),
                      /* @__PURE__ */ e("span", { className: "flex w-4 shrink-0 items-center gap-1.5", children: /* @__PURE__ */ e(ut, { size: 14, className: "shrink-0 text-primaryText" }) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "mx-3 border-t border-[#eef2f6]" }),
                /* @__PURE__ */ e("div", { className: "px-1.5 py-1.5", children: /* @__PURE__ */ r(
                  "div",
                  {
                    ref: fe,
                    className: "relative",
                    onMouseEnter: () => {
                      if (_e.current && clearTimeout(_e.current), ye.current) {
                        const a = ye.current.getBoundingClientRect();
                        De({
                          bottom: window.innerHeight - a.bottom,
                          left: a.left - 209
                        });
                      }
                      j(!0);
                    },
                    onMouseLeave: () => {
                      _e.current = setTimeout(() => j(!1), 120);
                    },
                    children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: `flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 transition-colors ${K ? "bg-[#f4f7fb]" : "hover:bg-[#f4f7fb]"}`,
                          children: [
                            /* @__PURE__ */ r("span", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ e(en, { size: 13, className: "shrink-0 text-tertiaryText" }),
                              /* @__PURE__ */ e("span", { className: "text-[13px] font-medium leading-tight text-primaryText", children: "思考深度" })
                            ] }),
                            /* @__PURE__ */ r("span", { className: "flex shrink-0 items-center gap-1.5", children: [
                              /* @__PURE__ */ e("span", { className: "rounded bg-bgLight px-1.5 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (Q = qt.find((a) => a.id === x)) == null ? void 0 : Q.label }),
                              /* @__PURE__ */ e(xt, { size: 13, className: "text-tertiaryText" })
                            ] })
                          ]
                        }
                      ),
                      K && ee && /* @__PURE__ */ e(
                        "div",
                        {
                          role: "menu",
                          style: {
                            position: "fixed",
                            bottom: `${ee.bottom}px`,
                            left: `${ee.left}px`
                          },
                          className: "z-[9999] w-[200px] overflow-hidden rounded-xl border border-[#e6ecf2] bg-white py-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
                          onMouseEnter: () => {
                            _e.current && clearTimeout(_e.current), j(!0);
                          },
                          onMouseLeave: () => {
                            _e.current = setTimeout(() => j(!1), 120);
                          },
                          children: qt.map((a) => {
                            const I = x === a.id;
                            return /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                role: "menuitemradio",
                                "aria-checked": I,
                                onClick: () => {
                                  J(a.id), j(!1), ce(!1);
                                },
                                className: `mx-1.5 flex w-[calc(100%-0.75rem)] items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${I ? "bg-[#f4f7fb]" : "hover:bg-[#f8fafc]"}`,
                                children: /* @__PURE__ */ r("span", { className: "flex min-w-0 flex-col gap-0.5", children: [
                                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                                    /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: a.label }),
                                    I && /* @__PURE__ */ e("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-tertiaryText" })
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
            onClick: Le ? l : et,
            disabled: Le ? !Ee : n || !u.trim(),
            "aria-label": Le ? "停止生成" : "发送消息",
            title: Le ? "停止生成" : "发送消息",
            className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Ee || !Le && u.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
            children: Le ? /* @__PURE__ */ e(tn, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(rn, { size: 16 })
          }
        )
      ] })
    ] })
  ] }) });
};
Ve.memo(Br);
const Fa = ({ messages: t, isTyping: n, statusPhase: i = "thinking", searchSteps: o = [] }) => {
  const l = ie(null);
  pe(() => {
    var h;
    (h = l.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const m = be(() => t.map((h, w) => /* @__PURE__ */ e(ga, { msg: h }, `${w}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    m,
    n && /* @__PURE__ */ e(Na, { phase: i, searchSteps: o }),
    /* @__PURE__ */ e("div", { ref: l })
  ] });
};
Ve.memo(Fa);
const Ha = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], _r = ({ onSelect: t, prompts: n = Ha, disabled: i = !1 }) => {
  const o = Re((l) => {
    t(l);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((l) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => o(l),
      disabled: i,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: l
    },
    l
  )) });
};
Ve.memo(_r);
const qa = (t, n) => {
  const i = Math.random() * t, o = Math.random() * n;
  return {
    x: i,
    y: o,
    baseX: i,
    baseY: o,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
}, cr = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary peer-autofill:left-4 peer-autofill:top-0 peer-autofill:-translate-y-1/2 peer-autofill:rounded peer-autofill:bg-surface peer-autofill:px-1.5 peer-autofill:text-xs peer-autofill:font-medium peer-autofill:text-primary";
function _s({ onLogin: t, onLoginSuccess: n, onNavigate: i }) {
  const o = ie(null), l = ie(null), [m, h] = b(""), [w, g] = b(""), [p, M] = b(!0), [u, v] = b(!1), [T, H] = b(!1), [N, R] = b(null), G = ie(null), [V, W] = b(!1), [E, se] = b("email"), [X, q] = b(""), [_, te] = b(""), [f, re] = b(""), [le, Z] = b(""), [A, ne] = b(0), [$, y] = b(!1), L = be(() => m.trim().length > 0 && w.trim().length > 0 && !u, [
    m,
    u,
    w
  ]);
  pe(() => {
    if (A <= 0) return;
    const K = window.setTimeout(() => ne((j) => j - 1), 1e3);
    return () => clearTimeout(K);
  }, [A]), pe(
    () => () => {
      G.current !== null && window.clearTimeout(G.current);
    },
    []
  ), pe(() => {
    const K = o.current, j = l.current;
    if (!K || !j) return;
    const ee = K.getContext("2d");
    if (!ee) return;
    const De = window.getComputedStyle(document.documentElement), Be = De.getPropertyValue("--chatui-color-auth-particle-active").trim(), $e = De.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ge = De.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let U = 0, k = 0, P = 0, S = window.devicePixelRatio || 1, ye = [];
    const fe = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, _e = 150, Le = () => {
      const Te = j.getBoundingClientRect();
      S = window.devicePixelRatio || 1, k = Te.width, P = Te.height, K.width = k * S, K.height = P * S, K.style.width = `${k}px`, K.style.height = `${P}px`, ee.setTransform(S, 0, 0, S, 0, 0);
      const Y = k < 768 ? 40 : 90;
      ye = Array.from({ length: Y }, () => qa(k, P));
    }, Ee = (Te) => {
      ee.beginPath(), ee.arc(Te.x, Te.y, Te.size, 0, Math.PI * 2), ee.closePath(), ee.fill();
    }, me = () => {
      ee.clearRect(0, 0, k, P);
      for (let Te = 0; Te < ye.length; Te += 1) {
        const Y = ye[Te];
        Y.x += Y.vx, Y.y += Y.vy, (Y.x < 0 || Y.x > k) && (Y.vx = -Y.vx), (Y.y < 0 || Y.y > P) && (Y.vy = -Y.vy);
        const Xe = fe.x - Y.x, Ze = fe.y - Y.y, Ke = Math.sqrt(Xe * Xe + Ze * Ze) || 1, Je = Xe / Ke, et = Ze / Ke, ve = (fe.radius - Ke) / fe.radius, Q = Je * ve * Y.density, a = et * ve * Y.density;
        if (Ke < fe.radius)
          Y.x -= Q * 0.5, Y.y -= a * 0.5, ee.fillStyle = Be, Y.size = Math.min(Y.size + 0.1, 2.5);
        else {
          if (Y.x !== Y.baseX) {
            const I = Y.x - Y.baseX;
            Y.x -= I / 50;
          }
          if (Y.y !== Y.baseY) {
            const I = Y.y - Y.baseY;
            Y.y -= I / 50;
          }
          ee.fillStyle = $e, Y.size = Math.max(Y.size - 0.05, 1);
        }
        Ee(Y);
        for (let I = Te; I < ye.length; I += 1) {
          const O = ye[I], Se = Y.x - O.x, Ce = Y.y - O.y, He = Math.sqrt(Se * Se + Ce * Ce);
          if (He < _e) {
            const we = (1 - He / _e) * 0.4;
            ee.beginPath(), ee.strokeStyle = ge, ee.globalAlpha = we, ee.lineWidth = 1, ee.moveTo(Y.x, Y.y), ee.lineTo(O.x, O.y), ee.stroke(), ee.globalAlpha = 1, ee.closePath();
          }
        }
      }
      U = window.requestAnimationFrame(me);
    }, xe = (Te) => {
      const Y = j.getBoundingClientRect();
      fe.x = Te.clientX - Y.left, fe.y = Te.clientY - Y.top;
    }, ue = () => {
      fe.x = -1e3, fe.y = -1e3;
    }, Ie = (Te) => {
      if (Te.touches.length < 1) return;
      const Y = j.getBoundingClientRect();
      fe.x = Te.touches[0].clientX - Y.left, fe.y = Te.touches[0].clientY - Y.top;
    };
    return Le(), me(), window.addEventListener("resize", Le), j.addEventListener("mousemove", xe), j.addEventListener("mouseleave", ue), j.addEventListener("touchmove", Ie, { passive: !0 }), j.addEventListener("touchend", ue), () => {
      window.cancelAnimationFrame(U), window.removeEventListener("resize", Le), j.removeEventListener("mousemove", xe), j.removeEventListener("mouseleave", ue), j.removeEventListener("touchmove", Ie), j.removeEventListener("touchend", ue);
    };
  }, []);
  const x = async (K) => {
    if (K.preventDefault(), !!L) {
      v(!0), R(null);
      try {
        const j = await t({ email: m.trim(), password: w, rememberLogin: p });
        if (!j.ok) {
          R(j.message);
          return;
        }
        H(!0), G.current = window.setTimeout(() => {
          H(!1), n();
        }, 900);
      } catch {
        R("登录失败，请稍后重试。");
      } finally {
        v(!1);
      }
    }
  }, J = async () => {
    !X.trim() || A > 0 || (v(!0), await new Promise((K) => window.setTimeout(K, 1e3)), v(!1), y(!0), ne(60));
  }, he = async () => {
    if (E === "email") {
      if (!X.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X) || !_.trim() || _.length < 6 || !f.trim() || f.length < 6 || f !== le) return;
      se("success");
    }
  }, ce = () => {
    W(!1), se("email"), q(""), te(""), re(""), Z(""), ne(0), y(!1);
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
      /* @__PURE__ */ r("form", { onSubmit: x, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: m,
              onChange: (K) => {
                h(K.target.value), R(null);
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
              onChange: (K) => {
                g(K.target.value), R(null);
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
                  onChange: (K) => M(K.target.checked),
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
          /* @__PURE__ */ e("button", { type: "button", onClick: () => i("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !L,
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
              onClick: () => i("/register"),
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
              onClick: () => i("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(an, { size: 16, className: "text-authTextFaint" }),
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
            onClick: ce,
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
                value: X,
                onChange: (K) => q(K.target.value),
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
                  value: _,
                  onChange: (K) => te(K.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: J,
                disabled: A > 0 || u || !X.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${A > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: A > 0 ? `${A}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (K) => re(K.target.value),
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
                onChange: (K) => Z(K.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${le.length > 0 && f !== le ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          le.length > 0 && f !== le && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: he,
              disabled: !X.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X) || !_.trim() || _.length < 6 || !f.trim() || f.length < 6 || f !== le,
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
              onClick: ce,
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
const Wa = (t, n) => {
  const i = Math.random() * t, o = Math.random() * n;
  return {
    x: i,
    y: o,
    baseX: i,
    baseY: o,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Is({
  mode: t = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: i,
  onRegister: o,
  onEnterWorkspace: l,
  onNavigate: m
}) {
  const h = ie(null), w = ie(null), g = ie(null), [p, M] = b("identity"), [u, v] = b(""), [T, H] = b(""), [N, R] = b(""), [G, V] = b(""), [W, E] = b(""), [se, X] = b(""), q = t === "create-lab", [_, te] = b(""), [f, re] = b(""), [le, Z] = b(!1), [A, ne] = b(0), [$, y] = b(""), [L, x] = b(null), J = _.length > 0 && _.trim().length < 6;
  pe(() => {
    if (A <= 0) return;
    const U = window.setTimeout(() => ne((k) => k - 1), 1e3);
    return () => clearTimeout(U);
  }, [A]), pe(
    () => () => {
      g.current !== null && window.clearTimeout(g.current);
    },
    []
  ), pe(() => {
    const U = h.current, k = w.current;
    if (!U || !k) return;
    const P = U.getContext("2d");
    if (!P) return;
    const S = window.getComputedStyle(document.documentElement), ye = S.getPropertyValue("--chatui-color-auth-particle-active").trim(), fe = S.getPropertyValue("--chatui-color-auth-particle-idle").trim(), _e = S.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Le = 0, Ee = 0, me = 0, xe = window.devicePixelRatio || 1, ue = [];
    const Ie = { x: -1e3, y: -1e3, radius: 120 }, Te = 150, Y = () => {
      const ve = k.getBoundingClientRect();
      xe = window.devicePixelRatio || 1, Ee = ve.width, me = ve.height, U.width = Ee * xe, U.height = me * xe, U.style.width = `${Ee}px`, U.style.height = `${me}px`, P.setTransform(xe, 0, 0, xe, 0, 0);
      const Q = Ee < 768 ? 40 : 90;
      ue = Array.from({ length: Q }, () => Wa(Ee, me));
    }, Xe = (ve) => {
      P.beginPath(), P.arc(ve.x, ve.y, ve.size, 0, Math.PI * 2), P.closePath(), P.fill();
    }, Ze = () => {
      P.clearRect(0, 0, Ee, me);
      for (let ve = 0; ve < ue.length; ve += 1) {
        const Q = ue[ve];
        Q.x += Q.vx, Q.y += Q.vy, (Q.x < 0 || Q.x > Ee) && (Q.vx = -Q.vx), (Q.y < 0 || Q.y > me) && (Q.vy = -Q.vy);
        const a = Ie.x - Q.x, I = Ie.y - Q.y, O = Math.sqrt(a * a + I * I) || 1, Se = a / O, Ce = I / O, He = (Ie.radius - O) / Ie.radius, we = Se * He * Q.density, Ae = Ce * He * Q.density;
        O < Ie.radius ? (Q.x -= we * 0.5, Q.y -= Ae * 0.5, P.fillStyle = ye, Q.size = Math.min(Q.size + 0.1, 2.5)) : (Q.x !== Q.baseX && (Q.x -= (Q.x - Q.baseX) / 50), Q.y !== Q.baseY && (Q.y -= (Q.y - Q.baseY) / 50), P.fillStyle = fe, Q.size = Math.max(Q.size - 0.05, 1)), Xe(Q);
        for (let je = ve; je < ue.length; je += 1) {
          const Ue = ue[je], Ge = Q.x - Ue.x, tt = Q.y - Ue.y, lt = Math.sqrt(Ge * Ge + tt * tt);
          if (lt < Te) {
            const rt = (1 - lt / Te) * 0.4;
            P.beginPath(), P.strokeStyle = _e, P.globalAlpha = rt, P.lineWidth = 1, P.moveTo(Q.x, Q.y), P.lineTo(Ue.x, Ue.y), P.stroke(), P.globalAlpha = 1, P.closePath();
          }
        }
      }
      Le = window.requestAnimationFrame(Ze);
    }, Ke = (ve) => {
      const Q = k.getBoundingClientRect();
      Ie.x = ve.clientX - Q.left, Ie.y = ve.clientY - Q.top;
    }, Je = () => {
      Ie.x = -1e3, Ie.y = -1e3;
    }, et = (ve) => {
      if (ve.touches.length < 1) return;
      const Q = k.getBoundingClientRect();
      Ie.x = ve.touches[0].clientX - Q.left, Ie.y = ve.touches[0].clientY - Q.top;
    };
    return Y(), Ze(), window.addEventListener("resize", Y), k.addEventListener("mousemove", Ke), k.addEventListener("mouseleave", Je), k.addEventListener("touchmove", et, { passive: !0 }), k.addEventListener("touchend", Je), () => {
      window.cancelAnimationFrame(Le), window.removeEventListener("resize", Y), k.removeEventListener("mousemove", Ke), k.removeEventListener("mouseleave", Je), k.removeEventListener("touchmove", et), k.removeEventListener("touchend", Je);
    };
  }, []);
  const he = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(N) || A > 0)) {
      Z(!0), x(null);
      try {
        const U = await n(N);
        if (!U.ok) {
          x(U);
          return;
        }
        ne(U.resendAfterSeconds ?? 60), y(U.message ?? "短信验证码已发送");
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        Z(!1);
      }
    }
  }, ce = () => ({
    email: u.trim(),
    name: T.trim(),
    phoneNumber: N,
    phoneVerificationCode: G.trim(),
    mode: t,
    ...q ? { labName: se.trim() } : { inviteCode: W.trim() }
  }), K = () => {
    const U = ["identity", "password", "success"], k = U.indexOf(p);
    k < U.length - 1 && M(U[k + 1]);
  }, j = be(() => {
    if (le) return !1;
    switch (p) {
      case "identity":
        return q ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(N) && G.length === 6 && se.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(N) && G.length === 6 && W.trim().length > 0;
      case "password":
        return _.trim().length >= 6 && _ === f;
      default:
        return !1;
    }
  }, [p, u, T, N, G, W, se, q, _, f, le]), ee = async (U) => {
    if (U.preventDefault(), !!j) {
      Z(!0), x(null);
      try {
        const k = ce(), P = p === "password" ? await o({ ...k, password: _ }) : await i(k);
        if (!P.ok) {
          x(P);
          return;
        }
        K();
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        Z(!1);
      }
    }
  }, De = {
    identity: q ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, Be = {
    identity: "",
    password: "",
    success: ""
  }, $e = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", ge = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
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
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: De[p] }),
        Be[p] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: Be[p] })
      ] }),
      p !== "success" && /* @__PURE__ */ r("form", { onSubmit: ee, className: "space-y-5", children: [
        p === "identity" && /* @__PURE__ */ r(nt, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (U) => {
                  v(U.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: $e
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: T,
                onChange: (U) => {
                  H(U.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: $e
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: N,
                  onChange: (U) => {
                    R(U.target.value.replace(/\D/g, "").slice(0, 11)), y(""), x(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: $e
                }
              ),
              /* @__PURE__ */ e("span", { className: ge, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: he,
                disabled: A > 0 || le || !/^1[3-9]\d{9}$/.test(N),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${A > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: A > 0 ? `${A}s后获取` : "获取验证码"
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
                  V(U.target.value.replace(/\D/g, "").slice(0, 6)), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: $e
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "短信验证码" })
          ] }),
          $ && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: $ }),
          q ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: se,
                onChange: (U) => {
                  X(U.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: $e
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: W,
                onChange: (U) => {
                  E(U.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: $e
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "邀请码" })
          ] })
        ] }),
        p === "password" && /* @__PURE__ */ r(nt, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: _,
                onChange: (U) => {
                  te(U.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${$e} ${(L == null ? void 0 : L.field) === "password" || J ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "设置密码" }),
            ((L == null ? void 0 : L.field) === "password" || J) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (L == null ? void 0 : L.field) === "password" ? L.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (U) => {
                  re(U.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${$e} ${f.length > 0 && _ !== f ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ge, children: "确认密码" }),
            f.length > 0 && _ !== f && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        L && L.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: L.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !j,
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
const Oa = (t, n) => {
  const i = Math.random() * t, o = Math.random() * n;
  return { x: i, y: o, baseX: i, baseY: o, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Rs({ onSendCode: t, onResetPassword: n, onBackToLogin: i }) {
  const o = ie(null), l = ie(null), m = ie(null), [h, w] = b("phone"), [g, p] = b(""), [M, u] = b(""), [v, T] = b(""), [H, N] = b(""), [R, G] = b(!1), [V, W] = b(0), [E, se] = b(""), [X, q] = b(null);
  pe(() => {
    if (V <= 0) return;
    const A = window.setTimeout(() => W((ne) => ne - 1), 1e3);
    return () => window.clearTimeout(A);
  }, [V]), pe(() => {
    const A = o.current, ne = l.current;
    if (!A || !ne) return;
    const $ = A.getContext("2d");
    if (!$) return;
    const y = window.getComputedStyle(document.documentElement), L = y.getPropertyValue("--chatui-color-auth-particle-active").trim(), x = y.getPropertyValue("--chatui-color-auth-particle-idle").trim(), J = y.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let he = 0, ce = 0, K = 0, j = [];
    const ee = { x: -1e3, y: -1e3, radius: 120 }, De = 150, Be = () => {
      const P = ne.getBoundingClientRect(), S = window.devicePixelRatio || 1;
      ce = P.width, K = P.height, A.width = ce * S, A.height = K * S, A.style.width = `${ce}px`, A.style.height = `${K}px`, $.setTransform(S, 0, 0, S, 0, 0), j = Array.from({ length: ce < 768 ? 40 : 90 }, () => Oa(ce, K));
    }, $e = () => {
      $.clearRect(0, 0, ce, K);
      for (let P = 0; P < j.length; P += 1) {
        const S = j[P];
        S.x += S.vx, S.y += S.vy, (S.x < 0 || S.x > ce) && (S.vx = -S.vx), (S.y < 0 || S.y > K) && (S.vy = -S.vy);
        const ye = ee.x - S.x, fe = ee.y - S.y, _e = Math.sqrt(ye * ye + fe * fe) || 1, Le = (ee.radius - _e) / ee.radius;
        _e < ee.radius ? (S.x -= ye / _e * Le * S.density * 0.5, S.y -= fe / _e * Le * S.density * 0.5, $.fillStyle = L, S.size = Math.min(S.size + 0.1, 2.5)) : (S.x -= (S.x - S.baseX) / 50, S.y -= (S.y - S.baseY) / 50, $.fillStyle = x, S.size = Math.max(S.size - 0.05, 1)), $.beginPath(), $.arc(S.x, S.y, S.size, 0, Math.PI * 2), $.fill();
        for (let Ee = P; Ee < j.length; Ee += 1) {
          const me = j[Ee], xe = S.x - me.x, ue = S.y - me.y, Ie = Math.sqrt(xe * xe + ue * ue);
          Ie >= De || ($.beginPath(), $.globalAlpha = (1 - Ie / De) * 0.4, $.strokeStyle = J, $.lineWidth = 1, $.moveTo(S.x, S.y), $.lineTo(me.x, me.y), $.stroke(), $.globalAlpha = 1);
        }
      }
      he = window.requestAnimationFrame($e);
    }, ge = (P) => {
      const S = ne.getBoundingClientRect();
      ee.x = P.clientX - S.left, ee.y = P.clientY - S.top;
    }, U = (P) => {
      if (!P.touches.length) return;
      const S = ne.getBoundingClientRect();
      ee.x = P.touches[0].clientX - S.left, ee.y = P.touches[0].clientY - S.top;
    }, k = () => {
      ee.x = -1e3, ee.y = -1e3;
    };
    return Be(), $e(), window.addEventListener("resize", Be), ne.addEventListener("mousemove", ge), ne.addEventListener("mouseleave", k), ne.addEventListener("touchmove", U, { passive: !0 }), ne.addEventListener("touchend", k), () => {
      window.cancelAnimationFrame(he), window.removeEventListener("resize", Be), ne.removeEventListener("mousemove", ge), ne.removeEventListener("mouseleave", k), ne.removeEventListener("touchmove", U), ne.removeEventListener("touchend", k);
    };
  }, []), pe(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const _ = be(() => /^1[3-9]\d{9}$/.test(g) && M.length === 6 && v.length >= 6 && v === H, [H, v, g, M]), te = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", f = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: l, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: o, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(nt, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (A) => {
          if (A.preventDefault(), !(!_ || R)) {
            G(!0), q(null);
            try {
              const ne = await n({ phoneNumber: g, phoneVerificationCode: M, newPassword: v });
              if (!ne.ok) {
                q(ne.message);
                return;
              }
              w("success");
            } catch {
              q("密码重置失败，请稍后重试。");
            } finally {
              G(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: g, onChange: (A) => {
                p(A.target.value.replace(/\D/g, "").slice(0, 11)), se(""), q(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: te }),
              /* @__PURE__ */ e("span", { className: f, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(g) || V > 0 || R)) {
                G(!0), q(null);
                try {
                  const A = await t(g);
                  if (!A.ok) {
                    q(A.message);
                    return;
                  }
                  W(A.resendAfterSeconds ?? 60), se(A.message ?? "短信验证码已发送");
                } catch {
                  q("验证码发送失败，请稍后重试。");
                } finally {
                  G(!1);
                }
              }
            }, disabled: V > 0 || R || !/^1[3-9]\d{9}$/.test(g), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${V > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: V > 0 ? `${V}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: M, onChange: (A) => {
              u(A.target.value.replace(/\D/g, "").slice(0, 6)), q(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: te }),
            /* @__PURE__ */ e("span", { className: f, children: "短信验证码" })
          ] }),
          E && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: E }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: v, onChange: (A) => {
              T(A.target.value), q(null);
            }, required: !0, placeholder: " ", className: te }),
            /* @__PURE__ */ e("span", { className: f, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: H, onChange: (A) => {
              N(A.target.value), q(null);
            }, required: !0, placeholder: " ", className: `${te} ${H.length > 0 && v !== H ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: f, children: "确认新密码" }),
            H.length > 0 && v !== H && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          X && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: X }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !_ || R, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: R ? "处理中..." : "重置密码" }),
            R && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => i(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
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
          m.current = window.setTimeout(() => i({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const dr = 10, ur = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function Ds({
  currentPath: t,
  projects: n,
  initialChats: i,
  logoUrl: o,
  user: l,
  children: m,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: w,
  canViewAiUsage: g = !0,
  canManageMembers: p = !0,
  chatActions: M = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: v,
  onChatsChange: T,
  onRenameChat: H,
  onTogglePinChat: N,
  onShareChat: R,
  onDeleteChat: G
}) {
  const [V, W] = b(!0), [E, se] = b(240), [X, q] = b(!1), _ = ie(0), te = ie(240), [f, re] = b(() => {
    const c = { unassigned: !0 };
    return n.forEach((B) => {
      c[B.id] = !0;
    }), c;
  }), [le, Z] = b(!1), [A, ne] = b(() => [...i]), [$, y] = b(null), [L, x] = b(null), [J, he] = b("time"), [ce, K] = b(!1), [j, ee] = b(null), [De, Be] = b(""), [$e, ge] = b(!1), [U, k] = b(""), [P, S] = b(!1), [ye, fe] = b(h), [_e, Le] = b(!1), Ee = w ?? ye, me = ie(null), xe = ie(null), ue = ie(null), Ie = () => {
    Z(!1), v();
  }, Te = (c) => {
    re((B) => ({ ...B, [c]: !B[c] }));
  }, Y = (c) => {
    var C;
    ne((z) => z.filter((ke) => ke.id !== c)), y(null), j === c && (ee(null), Be("")), G == null || G(c), ((C = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : C[1]) === c && u("/chat/new", { replace: !0 });
  }, Xe = (c) => {
    const B = A.find((z) => z.id === c);
    if (!B) return;
    const C = !B.isPinned;
    ne((z) => z.map(
      (Me) => Me.id === c ? { ...Me, isPinned: C } : Me
    )), N == null || N(c, C), y(null);
  }, Ze = (c) => {
    ee(c.id), Be(c.title), y(null);
  }, Ke = () => {
    ee(null), Be("");
  }, Je = (c) => {
    const B = De.trim();
    B && (ne((C) => C.map((z) => z.id === c ? { ...z, title: B } : z)), H == null || H(c, B)), Ke();
  }, et = (c, B) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), Je(B);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), Ke());
  }, ve = (c) => {
    var B;
    if (j === c) {
      (B = me.current) == null || B.focus();
      return;
    }
    u(`/chat/${c}`);
  }, Q = (c, B = !1) => j === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (z) => {
        var ke;
        z.stopPropagation(), (ke = me.current) == null || ke.focus();
      },
      children: [
        B && /* @__PURE__ */ e(Ft, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: me,
            value: De,
            onChange: (z) => Be(z.target.value),
            onKeyDown: (z) => et(z, c.id),
            onBlur: () => Je(c.id),
            onClick: (z) => z.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    B && /* @__PURE__ */ e(Ft, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), a = (c) => {
    _.current = c.clientX, te.current = E, q(!0);
  };
  pe(() => {
    if (!X) return;
    const c = 200, B = 440, C = (ke) => {
      const Me = ke.clientX - _.current, Pe = Math.min(B, Math.max(c, te.current + Me));
      se(Pe);
    }, z = () => {
      q(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", C), window.addEventListener("mouseup", z), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", z);
    };
  }, [X, E]), pe(() => {
    V || se(240);
  }, [V]), pe(() => {
    T == null || T(A);
  }, [A, T]), pe(() => {
    ne([...i]);
  }, [i]), pe(() => {
    if (!j) return;
    const c = window.requestAnimationFrame(() => {
      var B;
      (B = me.current) == null || B.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [j]), pe(() => () => {
    xe.current !== null && window.clearTimeout(xe.current), ue.current !== null && window.clearTimeout(ue.current);
  }, []);
  const I = () => {
    K(!0), xe.current !== null && window.clearTimeout(xe.current), xe.current = window.setTimeout(() => {
      K(!1);
    }, 600);
  }, O = () => {
    S(!0), ue.current !== null && window.clearTimeout(ue.current), ue.current = window.setTimeout(() => {
      S(!1);
    }, 600);
  };
  pe(() => {
    Ee || Le(!1);
  }, [Ee]);
  const Se = () => {
    Le(!0), u("/ai-usage");
  }, Ce = be(() => [
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
    if (Z(!1), c.key === "skills") {
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
    c.key === "logout" && Ie();
  }, we = (c) => c.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Tr, { size: 14 }), danger: !0 }] : [], Ae = (c, B = M) => {
    const C = [];
    return B.rename && C.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(un, { size: 14 }) }), B.share && C.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(mn, { size: 14 }) }), B.pin && C.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(Ft, { size: 14 })
    }), C;
  }, je = (c, B, C = {}) => {
    const z = C.actions ?? M, ke = C.onMenuOpenIdChange ?? y, Me = !!(z.rename || z.share || z.pin || z.delete), Pe = C.showTaskBadge !== !1 && ur(c);
    return !Me && !Pe ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${Pe ? "ml-6" : "ml-2"}`, children: [
      Pe && !B && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Me && /* @__PURE__ */ e(
        At,
        {
          open: B,
          onOpenChange: (ze) => ke(ze ? c.id : null),
          placement: "bottom-end",
          width: C.width ?? Math.max(140, Math.min(176, E - 56)),
          portal: C.portal,
          trigger: /* @__PURE__ */ e(dn, { size: 14 }),
          onTriggerClick: (ze) => {
            ze.stopPropagation();
          },
          items: Ae(c, z),
          footerItems: we(z),
          onItemClick: (ze, Oe) => {
            if (Oe.stopPropagation(), ze.key === "rename") {
              Ze(c), ke(null);
              return;
            }
            if (ze.key === "share") {
              R ? R(c.id) : u(`/chat/${c.id}?share=1`), ke(null);
              return;
            }
            if (ze.key === "pin") {
              Xe(c.id), ke(null);
              return;
            }
            if (ze.key === "delete") {
              Y(c.id), ke(null);
              return;
            }
            ke(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${B ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Ue = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(jt, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(It, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], Ge = be(() => {
    const c = t.match(/^\/chat\/([^/]+)$/);
    return c ? A.find((B) => B.id === c[1]) ?? null : null;
  }, [A, t]), tt = be(
    () => A.filter((c) => c.isPinned),
    [A]
  ), lt = be(
    () => A.filter((c) => !c.isPinned),
    [A]
  ), rt = be(
    () => J === "time" ? tt.slice(0, dr) : tt,
    [tt, J]
  ), s = be(() => {
    if (J !== "time") return [];
    const c = Math.max(dr - rt.length, 0);
    return lt.slice(0, c);
  }, [J, lt, rt.length]), d = be(
    () => rt.length + s.length,
    [rt.length, s.length]
  ), F = J === "time" && A.length > d, D = be(() => new Map(n.map((c) => [c.id, c.name])), [n]), oe = U.trim().toLowerCase(), ae = be(() => oe ? A.filter((c) => {
    const B = c.projectId ? D.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${B} ${c.date}`.toLowerCase().includes(oe);
  }) : A, [A, oe, D]);
  pe(() => {
    if (!Ge) return;
    const c = Ge.projectId ?? "unassigned";
    re((B) => B[c] !== !1 ? B : { ...B, [c]: !0 });
  }, [Ge]);
  const de = () => {
    k(""), ge(!0);
  }, Ne = () => {
    ge(!1), x(null), Ke(), S(!1), ue.current !== null && (window.clearTimeout(ue.current), ue.current = null);
  }, qe = (c) => {
    ge(!1), x(null), u(`/chat/${c}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: V ? E : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${V ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: E, minWidth: E },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => u("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: o, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => W(!1),
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
                  const B = c.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => u(c.path),
                      className: `nav-item ${B ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
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
                    onScroll: I,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ce ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      rt.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: rt.map((c) => {
                          const B = t === `/chat/${c.id}`, C = $ === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => ve(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${j === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : B ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Q(c, J !== "time"),
                                j !== c.id && je(c, C)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      J === "project" && n.map((c) => {
                        const B = A.filter((z) => z.projectId === c.id && !z.isPinned), C = f[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => Te(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(jt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: C ? /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(xt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          C && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: B.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : B.map((z) => {
                            const ke = t === `/chat/${z.id}`, Me = $ === z.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => ve(z.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${j === z.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ke ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Q(z),
                                  j !== z.id && je(z, Me)
                                ]
                              }
                            ) }, z.id);
                          }) })
                        ] }, c.id);
                      }),
                      J === "project" && (() => {
                        const c = A.filter((C) => !C.projectId && !C.isPinned);
                        if (c.length === 0) return null;
                        const B = f.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => Te("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(jt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: B ? /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(xt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          B && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((C) => {
                            const z = t === `/chat/${C.id}`, ke = $ === C.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => ve(C.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${j === C.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : z ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Q(C),
                                  j !== C.id && je(C, ke)
                                ]
                              }
                            ) }, C.id);
                          }) })
                        ] });
                      })(),
                      J === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        s.map((c) => {
                          const B = t === `/chat/${c.id}`, C = $ === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => ve(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${j === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : B ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Q(c),
                                j !== c.id && je(c, C)
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
                              /* @__PURE__ */ e(xt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                Ee && !_e && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(on, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Se,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  At,
                  {
                    open: le,
                    onOpenChange: Z,
                    placement: "top-start",
                    width: E - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: l.avatarUrl ? /* @__PURE__ */ e("img", { src: l.avatarUrl, alt: `${l.name}头像`, className: "h-full w-full object-cover" }) : l.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: l.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(cn, { size: 18 }) })
                    ] }),
                    items: Ce,
                    onItemClick: He,
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
              onMouseDown: a,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${V ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof m == "function" ? m({ isSidebarOpen: V, setIsSidebarOpen: W, chats: A, setChats: ne, setAiUsageWarningActive: fe }) : m }) }) }),
    /* @__PURE__ */ e(
      Vt,
      {
        visible: $e,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Ne,
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
                value: U,
                onChange: (c) => k(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          ae.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: O,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${P ? "is-scrolling is-scrolling-thin" : ""}`,
              children: ae.map((c) => {
                const B = c.projectId ? D.get(c.projectId) ?? "未分组" : "未分组", C = ur(c), z = L === c.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => qe(c.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          Q(c, c.isPinned),
                          C && j !== c.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: B }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: c.date })
                        ] })
                      ] }),
                      j !== c.id && je(c, z, {
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
function js({
  projects: t,
  selectedProjectId: n,
  autoFocusInput: i = !1,
  disabled: o = !1,
  embedded: l = !1,
  isSidebarOpen: m = !0,
  skillOptions: h,
  fileOptions: w,
  quickPrompts: g,
  uploadAccept: p,
  validateUploadFile: M,
  onUploadValidationError: u,
  onSelectProject: v,
  onCreateProject: T,
  onOpenSidebar: H,
  onSelectQuickPrompt: N,
  onSend: R
}) {
  const [G, V] = b(!1), [W, E] = b(!1), [se, X] = b(""), q = ie(null), _ = ie(null), te = be(
    () => t.find(($) => $.id === n) ?? null,
    [t, n]
  ), f = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !te
    },
    ...t.map(($) => ({
      key: $.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: $.name }),
      active: (te == null ? void 0 : te.id) === $.id
    }))
  ], [t, te]), re = be(() => T ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Cr, { size: 16 }) }] : [], [T]), le = () => {
    E(!1), X("");
  }, Z = ($) => {
    if ($.key === "create") {
      E(!0), X("");
      return;
    }
    const y = $.key === "none" ? null : String($.key);
    v(y), V(!1);
  }, A = () => {
    const $ = se.trim();
    if (!$) return;
    const y = t.find(
      (L) => L.name.trim().toLowerCase() === $.toLowerCase()
    );
    y ? v(y.id) : T == null || T($), le(), V(!1);
  };
  pe(() => {
    if (!W) return;
    const $ = (y) => {
      var x, J;
      const L = y.target;
      (x = _.current) != null && x.contains(L) || (J = q.current) != null && J.contains(L) || (le(), V(!1));
    };
    return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
  }, [W]);
  const ne = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: q, className: "relative", children: W && /* @__PURE__ */ e(
        "div",
        {
          ref: _,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                $r,
                {
                  value: se,
                  onChange: ($) => X($.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Qe, { type: "secondary", size: "small", onClick: le, children: "取消" }),
              /* @__PURE__ */ e(
                Qe,
                {
                  type: "primary",
                  size: "small",
                  onClick: A,
                  disabled: !se.trim(),
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
          onSend: R,
          disabled: o,
          autoFocus: i,
          skillOptions: h,
          fileOptions: w,
          uploadAccept: p,
          validateUploadFile: M,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            At,
            {
              open: G,
              onOpenChange: ($) => {
                !$ && W || (V($), $ ? E(!1) : le());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: te ? te.name : "工作项目" }),
                /* @__PURE__ */ e(yt, { size: 14 })
              ] }),
              items: f,
              footerItems: re,
              onItemClick: Z,
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
        onSelect: N ?? R,
        prompts: g,
        disabled: o
      }
    )
  ] });
  return l ? ne : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Sa,
      {
        isSidebarOpen: m,
        onOpenSidebar: H ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: ne })
  ] });
}
const Ua = "_shell_1a2mx_1", Va = "_header_1a2mx_9", Ka = "_headerActions_1a2mx_17", Ga = "_saveError_1a2mx_25", Xa = "_viewport_1a2mx_33", Ya = "_editorCanvas_1a2mx_41", Qa = "_titleInput_1a2mx_49", Za = "_milkdownHost_1a2mx_57", ot = {
  shell: Ua,
  header: Va,
  headerActions: Ka,
  saveError: Ga,
  viewport: Xa,
  editorCanvas: Ya,
  titleInput: Qa,
  milkdownHost: Za
}, Ja = {
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
`, es = `
  <span class="chatui-selection-block-type-current">${Ot}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, mr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, ts = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, rs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, ns = [
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
function Fs({
  title: t,
  initialMarkdown: n = "",
  createdByName: i,
  updatedByName: o,
  updatedAt: l,
  index: m,
  attachments: h = [],
  attachmentAccept: w,
  attachmentUnavailableHint: g,
  saving: p = !1,
  saveError: M,
  layout: u = "page",
  showHeaderActions: v = !0,
  onTitleChange: T,
  onMarkdownChange: H,
  onUploadAttachments: N,
  onDeleteAttachment: R,
  onSave: G,
  onClose: V
}) {
  const W = ie(null), E = ie(null), se = ie(n), X = ie(H), [q, _] = b(!1), [te, f] = b(null), [re, le] = b(""), Z = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  pe(() => {
    X.current = H;
  }, [H]), pe(() => {
    const $ = W.current;
    if (!$) return;
    const y = /* @__PURE__ */ new Map(), L = new kt({
      root: $,
      defaultValue: se.current,
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
              icon: es,
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
              s.build().flatMap((B) => B.items).map((B) => [B.key, B])
            ), F = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), D = (B) => {
              const C = B.get(Tt), z = ee, Me = (z != null && z.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? z : z == null ? void 0 : z.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (z instanceof HTMLElement ? z : null);
              if (!Me) return C;
              try {
                const Pe = C.posAtDOM(Me, 0), ze = C.state.doc.resolve(
                  Math.min(
                    Math.max(Pe, 0),
                    C.state.doc.content.size
                  )
                );
                C.dispatch(
                  C.state.tr.setSelection(
                    Zt.near(ze)
                  )
                );
              } catch {
              }
              return C;
            }, oe = (B) => {
              const C = D(B), z = Ct.type(B), ke = (ze) => {
                const { $from: Oe } = C.state.selection;
                for (let Ye = Oe.depth; Ye > 0; Ye -= 1)
                  if (Oe.node(Ye).type.name === ze) return !0;
                return !1;
              };
              for (let ze = 0; ze < 10 && !(!ke(z.name) || !bn(z)(
                C.state,
                C.dispatch
              )); ze += 1)
                ;
              for (let ze = 0; ze < 10 && !(!ke("blockquote") || !xn(C.state, C.dispatch)); ze += 1)
                ;
              const Me = yn.type(B), Pe = C.state.selection.$from.parent;
              Pe.isTextblock && Pe.type !== Me && B.get(fn).call(vn.key, {
                nodeType: Me
              });
            };
            y.set(
              "paragraph",
              oe
            );
            const ae = (B) => {
              const C = D(B), { selection: z } = C.state, ke = Ct.type(B), { $from: Me } = z;
              let Pe = -1;
              for (let Oe = Me.depth; Oe > 0; Oe -= 1)
                if (Me.node(Oe).type.name === ke.name) {
                  Pe = Oe;
                  break;
                }
              if (Pe > 0) {
                const Oe = Pe - 1, Ye = Oe > 0 && Me.node(Oe).childCount === 1 ? Oe : Pe;
                C.dispatch(
                  C.state.tr.delete(
                    Me.before(Ye),
                    Me.after(Ye)
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
              const ze = Math.min(1, Me.depth);
              ze < 1 || C.dispatch(
                C.state.tr.delete(
                  Me.before(ze),
                  Me.after(ze)
                )
              );
            }, de = (B, C, z) => {
              const ke = d.get(C);
              if (!ke) return;
              const { key: Me, ...Pe } = ke, ze = (z == null ? void 0 : z.icon) ?? Pe.icon, Oe = [
                ft(C),
                z == null ? void 0 : z.iconClass
              ].filter(Boolean).join(" "), Ye = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(C), mt = F.has(C) ? (at) => {
                var Gt;
                if (oe(at), !Ye) {
                  if (C === "quote") {
                    const st = at.get(Tt), { $from: pt } = st.state.selection, wt = pt.parent, Dt = pt.before(pt.depth), Xt = st.state.schema.nodes.blockquote;
                    if (!Xt) return;
                    const Dr = Xt.create(null, wt), Nt = st.state.tr.replaceWith(
                      Dt,
                      Dt + wt.nodeSize,
                      Dr
                    );
                    Nt.setSelection(
                      Zt.near(
                        Nt.doc.resolve(
                          Math.min(
                            Dt + 2,
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
                const Rr = Ct.type(at), { $from: Rt } = bt.state.selection;
                for (let st = Rt.depth; st > 0; st -= 1) {
                  const pt = Rt.node(st);
                  if (pt.type !== Rr) continue;
                  const wt = Rt.before(st);
                  bt.dispatch(
                    bt.state.tr.setNodeMarkup(wt, void 0, {
                      ...pt.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Pe.onRun;
              F.has(C) && mt && y.set(
                C,
                mt
              ), B.addItem(C, {
                ...Pe,
                label: (z == null ? void 0 : z.label) ?? Pe.label,
                icon: Lt(ze, Oe),
                onRun: mt
              });
            };
            s.clear();
            const Ne = s.addGroup("basic", "基础");
            Ne.addItem("paragraph", {
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
                icon: ts,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: B, icon: C, label: z }) => {
              de(Ne, B, { icon: C, label: z });
            });
            const qe = s.addGroup("common", "常用");
            de(qe, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), de(qe, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), s.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Lt(
                rs,
                "chatui-document-menu-action-delete"
              ),
              onRun: ae
            });
          }
        }
      }
    });
    L.on((s) => {
      s.markdownUpdated((d, F, D) => {
        F !== D && X.current(F);
      });
    });
    const x = $.ownerDocument;
    let J = "", he = null, ce = null, K = !0, j = !1, ee = null, De = null, Be = null, $e = null, ge = null, U = null, k = null, P = null;
    const S = (s) => {
      const d = s == null ? void 0 : s.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, ye = () => $.querySelector(".ProseMirror"), fe = (s) => {
      const d = ye();
      if (!s || !(d != null && d.contains(s))) return null;
      const F = s.closest(".milkdown-list-item-block");
      if (F && d.contains(F)) return F;
      let D = s;
      for (; D != null && D.parentElement && D.parentElement !== d; )
        D = D.parentElement;
      return !D || D.parentElement !== d || D.classList.contains("prosemirror-virtual-cursor") ? null : D;
    }, _e = () => {
      const s = ye();
      return s ? Array.from(s.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const F = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return F.length ? F : [d];
      }) : [];
    }, Le = (s) => {
      var D;
      const d = _e(), F = d.map((oe) => ({ block: oe, rect: oe.getBoundingClientRect() })).filter(({ rect: oe }) => s >= oe.top && s <= oe.bottom).sort((oe, ae) => oe.rect.height - ae.rect.height);
      return F[0] ? F[0].block : ((D = d.map((oe) => {
        const ae = oe.getBoundingClientRect(), de = Math.min(
          Math.abs(s - ae.top),
          Math.abs(s - ae.bottom)
        );
        return { block: oe, distance: de };
      }).sort((oe, ae) => oe.distance - ae.distance)[0]) == null ? void 0 : D.block) ?? null;
    }, Ee = (s, d = K) => {
      var c, B, C, z;
      const F = ee, D = F ? S(F) : s, oe = F ? F.matches("p") : d, ae = x.querySelector(
        ".milkdown-slash-menu"
      );
      (B = (c = ae == null ? void 0 : ae.querySelector(`svg.${ft("paragraph")}`)) == null ? void 0 : c.closest("li")) == null || B.toggleAttribute(
        "hidden",
        D === null && oe
      ), ae == null || ae.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (ke) => ke.removeAttribute("data-chatui-selected")
      ), D && ((z = (C = ae == null ? void 0 : ae.querySelector(`svg.${ft(D)}`)) == null ? void 0 : C.closest("li")) == null || z.setAttribute("data-chatui-selected", "true"));
      const de = x.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!de) return;
      J || (J = de.innerHTML);
      const Ne = D ? ae == null ? void 0 : ae.querySelector(
        `svg.${ft(D)}`
      ) : null, qe = D ?? "default";
      de.dataset.chatuiBlockType !== qe && (de.innerHTML = (Ne == null ? void 0 : Ne.outerHTML) ?? J, de.dataset.chatuiBlockType = qe);
    }, me = (s) => {
      s !== ce && (ce = s, he = S(s), K = (s == null ? void 0 : s.matches("p")) ?? !1), Ee(he, K);
    }, xe = () => {
      var F;
      const s = (F = x.getSelection()) == null ? void 0 : F.anchorNode, d = s instanceof Element ? s : s == null ? void 0 : s.parentElement;
      me(fe(d ?? null));
    }, ue = (s) => {
      const { $from: d } = s.get(Tt).state.selection, F = Ct.type(s), D = Jt.type(s), oe = er.type(s);
      for (let de = d.depth; de > 0; de -= 1) {
        const Ne = d.node(de);
        if (Ne.type === F && typeof Ne.attrs.checked == "boolean")
          return "task-list";
      }
      for (let de = d.depth; de > 0; de -= 1) {
        const Ne = d.node(de);
        if (Ne.type === D) return "ordered-list";
        if (Ne.type === oe) return "bullet-list";
        if (Ne.type.name === "blockquote") return "quote";
      }
      const ae = d.parent;
      if (ae.type === wn.type(s)) {
        const de = Number(ae.attrs.level);
        if (de === 1 || de === 2 || de === 3)
          return `h${de}`;
      }
      return ae.type.name === "code_block" ? "code" : "paragraph";
    }, Ie = (s) => {
      var d;
      return s === "paragraph" ? Lt(
        Ot,
        "chatui-selection-block-type-paragraph"
      ) : s === "h1" ? ht(1) : s === "h2" ? ht(2) : s === "h3" ? ht(3) : s === "code" ? mr : ((d = x.querySelector(
        `.milkdown-slash-menu svg.${ft(s)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${s === "quote" ? "“" : "•"}</text></svg>`;
    }, Te = () => {
      var s;
      return ((s = x.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : s.closest(".toolbar-item")) ?? null;
    }, Y = () => {
      const s = Te();
      if (!s) return;
      s.classList.add("chatui-selection-block-type-trigger"), s.setAttribute("aria-haspopup", "menu"), s.setAttribute("aria-label", "切换当前块类型");
      const d = s.closest(".milkdown-toolbar"), F = s.previousElementSibling instanceof HTMLElement && s.previousElementSibling.classList.contains("divider") ? s.previousElementSibling : null;
      d && d.firstElementChild !== s && (d.prepend(s), F && s.after(F));
      let D = "paragraph";
      L.editor.action((ae) => {
        D = ue(ae);
      }), s.dataset.chatuiBlockType = D;
      const oe = s.querySelector(
        ".chatui-selection-block-type-current"
      );
      oe && (oe.innerHTML = Ie(D)), U == null || U.querySelectorAll("[data-block-type]").forEach((ae) => {
        ae.dataset.active = ae.dataset.blockType === D ? "true" : "false";
      });
    }, Xe = () => {
      var s;
      k !== null && (window.clearTimeout(k), k = null), U && (U.dataset.show = "false"), (s = Te()) == null || s.setAttribute("aria-expanded", "false");
    }, Ze = () => {
      k !== null && window.clearTimeout(k), k = window.setTimeout(
        Xe,
        120
      );
    }, Ke = () => {
      if (U) return U;
      const s = x.createElement("div");
      return s.className = "chatui-selection-block-type-menu", s.dataset.show = "false", s.setAttribute("role", "menu"), ns.forEach(({ key: d, label: F }) => {
        const D = x.createElement("button");
        D.type = "button", D.dataset.blockType = d, D.setAttribute("role", "menuitem"), D.innerHTML = `<span class="chatui-selection-block-type-option-icon">${Ie(d)}</span><span>${F}</span>`, D.addEventListener("pointerdown", (oe) => {
          oe.preventDefault(), oe.stopPropagation(), L.editor.action((ae) => {
            var de;
            (de = y.get(d)) == null || de(ae);
          }), Xe(), window.requestAnimationFrame(Y);
        }), s.append(D);
      }), s.addEventListener("pointerenter", () => {
        k !== null && (window.clearTimeout(k), k = null);
      }), s.addEventListener("pointerleave", Ze), x.body.append(s), U = s, s;
    }, Je = () => {
      const s = Te();
      if (!s) return;
      k !== null && (window.clearTimeout(k), k = null);
      const d = Ke();
      Y(), d.dataset.show = "true", d.style.visibility = "hidden";
      const F = s.getBoundingClientRect(), D = d.getBoundingClientRect(), oe = 6, ae = 8, de = F.top >= D.height + oe + ae, Ne = Math.min(
        Math.max(F.left, ae),
        x.documentElement.clientWidth - D.width - ae
      ), qe = de ? F.top - D.height - oe : F.bottom + oe;
      d.style.left = `${Ne}px`, d.style.top = `${qe}px`, d.style.visibility = "visible", d.dataset.placement = de ? "top" : "bottom", s.setAttribute("aria-expanded", "true");
    }, et = (s) => {
      const d = s.target instanceof Element ? s.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && Je();
    }, ve = (s) => {
      const d = s.target instanceof Element ? s.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const F = s.relatedTarget instanceof Element ? s.relatedTarget : null;
      F != null && F.closest(".chatui-selection-block-type-menu") || Ze();
    }, Q = () => {
      window.requestAnimationFrame(Y);
    }, a = () => {
      const s = De, d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (!s || !d || d.dataset.show !== "true") return;
      const F = d.getBoundingClientRect();
      if (!F.width || !F.height) return;
      const D = s.getBoundingClientRect(), oe = x.defaultView, ae = (oe == null ? void 0 : oe.innerWidth) ?? x.documentElement.clientWidth, de = (oe == null ? void 0 : oe.innerHeight) ?? x.documentElement.clientHeight, Ne = 12, qe = 8, c = Math.max(
        Ne,
        ae - F.width - Ne
      ), B = Math.max(
        Ne,
        de - F.height - Ne
      ), C = (Ye) => Math.min(Math.max(Ye, Ne), c), z = (Ye) => Math.min(Math.max(Ye, Ne), B);
      let ke = "left", Me = D.left - F.width - qe, Pe = z(D.top);
      if (Me < Ne) {
        const Ye = D.top - qe - Ne, mt = de - D.bottom - qe - Ne, at = mt >= F.height || mt >= Ye;
        ke = at ? "bottom" : "top", Me = C(D.left), Pe = z(at ? D.bottom + qe : D.top - F.height - qe);
      }
      const ze = `${Me}px`, Oe = `${Pe}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== ze && d.style.setProperty("--chatui-block-menu-left", ze), d.style.getPropertyValue("--chatui-block-menu-top") !== Oe && d.style.setProperty("--chatui-block-menu-top", Oe), d.dataset.chatuiPlacement = ke;
    }, I = () => {
      const s = x.querySelector(
        ".milkdown-slash-menu"
      );
      s && (s.style.removeProperty("--chatui-block-menu-left"), s.style.removeProperty("--chatui-block-menu-top"), delete s.dataset.chatuiPlacement);
    }, O = (s) => {
      s !== ge && (ge == null || ge.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), ge = s, ge == null || ge.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Se = () => {
      $e !== null && window.cancelAnimationFrame($e), $e = window.requestAnimationFrame(() => {
        $e = null, a();
      });
    }, Ce = (s) => {
      x.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        s && d.contains(s) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, He = () => {
      De = null, j = !1, ee = null, O(null), L.editor.action((s) => {
        s.get("menuAPICtx").hide();
      }), I(), Ce(null);
    }, we = (s) => {
      const d = s.target instanceof Element ? s.target : null, F = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (F) {
        const ae = F.getBoundingClientRect(), de = ae.width > 0 && ae.height > 0, Ne = s.clientX >= ae.left && s.clientX <= ae.right && s.clientY >= ae.top && s.clientY <= ae.bottom;
        if (de) {
          if (Ne) {
            O(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), j = !0;
            return;
          }
          if (O(null), d != null && d.closest(".milkdown-block-handle")) return;
          const qe = ye(), c = d && (qe != null && qe.contains(d)) ? fe(d) ?? Le(s.clientY) : null;
          if (c && ee && c !== ee) {
            He();
            return;
          }
          if (c === ee) return;
          j && He();
          return;
        }
        j = !1, O(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        Ee(he);
        return;
      }
      const D = ye();
      if (!d || !(D != null && D.contains(d))) return;
      const oe = fe(d) ?? Le(s.clientY);
      me(oe);
    }, Ae = (s) => {
      var Ne;
      const d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (De === s && (d == null ? void 0 : d.dataset.show) === "true") {
        Ce(s), Se();
        return;
      }
      const F = s.getBoundingClientRect(), D = Le(
        F.top + F.height / 2
      );
      D && me(D);
      const oe = he, ae = K;
      De = s, ee = D ?? ce, Ce(s);
      const de = ((Ne = x.defaultView) == null ? void 0 : Ne.PointerEvent) ?? PointerEvent;
      s.dispatchEvent(
        new de("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), s.dispatchEvent(
        new de("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        Ee(oe, ae), Se();
      }, 0);
    }, je = (s) => {
      const d = s.target instanceof Element ? s.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (F) {
        Ae(F);
        return;
      }
      O(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, Ue = (s) => {
      const d = s.target instanceof Element ? s.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!F) return;
      const D = s.relatedTarget instanceof Element ? s.relatedTarget : null;
      if (D && F.contains(D)) return;
      const oe = D == null ? void 0 : D.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      O(oe ?? null);
    }, Ge = (s) => {
      const d = s.target instanceof Element ? s.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      F && Ae(F);
    }, tt = (s) => {
      if (!s.isTrusted) return;
      const d = s.target instanceof Element ? s.target : null, F = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), D = x.querySelector(
        ".milkdown-slash-menu"
      );
      F && De === F && (D == null ? void 0 : D.dataset.show) === "true" && (s.preventDefault(), s.stopImmediatePropagation());
    }, lt = (s) => {
      s.key === "/" && window.setTimeout(xe, 0);
    };
    x.addEventListener("pointermove", we), x.addEventListener("pointerover", je), x.addEventListener("pointerout", Ue), x.addEventListener(
      "pointerover",
      et
    ), x.addEventListener(
      "pointerout",
      ve
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
    ), x.addEventListener("click", Ge), $.addEventListener("keyup", lt);
    const rt = L.create();
    return rt.then(() => {
      var F;
      (F = $.querySelector(".ProseMirror")) == null || F.focus();
      const s = x.querySelector(
        ".milkdown-slash-menu"
      );
      s && (Be = new MutationObserver(() => {
        if (s.dataset.show === "true" && De) {
          Ce(De), Se();
          return;
        }
        s.dataset.show !== "true" && (De = null, ee = null, O(null), I(), Ce(null));
      }), Be.observe(s, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = x.querySelector(
        ".milkdown-toolbar"
      );
      d && (P = new MutationObserver(() => {
        d.dataset.show === "true" ? Y() : Xe();
      }), P.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), xe(), Y();
    }), () => {
      x.removeEventListener("pointermove", we), x.removeEventListener(
        "pointerover",
        je
      ), x.removeEventListener("pointerout", Ue), x.removeEventListener(
        "pointerover",
        et
      ), x.removeEventListener(
        "pointerout",
        ve
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
      ), x.removeEventListener("click", Ge), $.removeEventListener("keyup", lt), Xe(), U == null || U.remove(), U = null, rt.then(() => {
        Be == null || Be.disconnect(), P == null || P.disconnect(), $e !== null && window.cancelAnimationFrame($e), L.destroy();
      });
    };
  }, []);
  const A = async ($) => {
    const y = Array.from($.target.files ?? []);
    if ($.target.value = "", !(!y.length || !N)) {
      _(!0), le("");
      try {
        await N(y);
      } catch (L) {
        le(
          L instanceof Error ? L.message : "附件上传失败"
        );
      } finally {
        _(!1);
      }
    }
  }, ne = async ($) => {
    if (R) {
      f($), le("");
      try {
        await R($);
      } catch (y) {
        le(
          y instanceof Error ? y.message : "附件删除失败"
        );
      } finally {
        f(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: ot.shell, "aria-label": "项目文档编辑器", children: [
    v && /* @__PURE__ */ e("header", { className: ot.header, children: /* @__PURE__ */ r("div", { className: ot.headerActions, children: [
      /* @__PURE__ */ e(
        Qe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: p,
          onClick: V,
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
        className: `${ot.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          M && /* @__PURE__ */ e("div", { className: ot.saveError, children: M }),
          /* @__PURE__ */ r("div", { className: ot.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${Z}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: ($) => T($.target.value),
                  placeholder: "请输入标题",
                  className: ot.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                Ar,
                {
                  createdByName: i,
                  updatedByName: o,
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
                  ref: W,
                  className: `${ot.milkdownHost} ${Pr.editor} ${Z} chatui-project-document-editor`,
                  style: Ja
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
                    A($);
                  }
                }
              ),
              /* @__PURE__ */ e(
                Er,
                {
                  attachments: h,
                  className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: q,
                  deletingAttachmentId: te,
                  unavailableHint: g,
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
const as = { low: "低风险", medium: "中风险", high: "高风险" }, ss = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function Hs({
  isSidebarOpen: t,
  skills: n,
  loading: i = !1,
  error: o,
  pendingSkillIds: l = [],
  onOpenSidebar: m,
  onInstall: h,
  onUninstall: w,
  onRetry: g
}) {
  const [p, M] = b("installed"), [u, v] = b(""), [T, H] = b(!1), [N, R] = b([]), [G, V] = b(null), W = be(() => new Set(l), [l]), E = be(() => {
    const f = u.trim().toLowerCase();
    return n.filter((re) => p === "installed" !== re.installed ? !1 : f ? [re.name, re.source, re.description, ...re.tags].join(" ").toLowerCase().includes(f) : !0);
  }, [p, u, n]), se = (f) => {
    M(f), H(!1), R([]);
  }, X = () => {
    H((f) => !f), R([]);
  }, q = (f) => R((re) => re.includes(f) ? re.filter((le) => le !== f) : [...re, f]), _ = (f) => f.installed ? w([f.id]) : h([f.id]), te = () => {
    N.length && (p === "installed" ? w(N) : h(N), R([]), H(!1));
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
            /* @__PURE__ */ e("button", { type: "button", onClick: () => se("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${p === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => se("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${p === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: T, onChange: (f) => {
                H(f.target.checked), R([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        o && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: o }),
          g && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: g, children: "重新加载" })
        ] }),
        !o && i && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (f, re) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, re)) }),
        !o && !i && E.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": l.length > 0, children: E.map((f) => {
          const re = N.includes(f.id), le = W.has(f.id), Z = re ? "border-skillSelectedBorder bg-skillSelectedSurface" : G === f.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${Z}`, onMouseEnter: () => V(f.id), onMouseLeave: () => V((A) => A === f.id ? null : A), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: f.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: f.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${ss[f.riskLevel]}`, children: as[f.riskLevel] }),
                T && /* @__PURE__ */ e("button", { type: "button", onClick: () => q(f.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": re ? `取消选择 ${f.name}` : `选择 ${f.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${re ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: f.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: f.tags.map((A) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: A }, `${f.id}-${A}`)) }),
              !T && /* @__PURE__ */ e("button", { type: "button", disabled: le, onClick: () => _(f), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${G === f.id || le ? "inline-flex" : "hidden"} ${f.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: le ? "处理中..." : f.installed ? "卸载" : "安装" })
            ] })
          ] }, f.id);
        }) }) : !o && !i ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
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
        /* @__PURE__ */ e("button", { type: "button", onClick: te, disabled: !N.length || l.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: l.length > 0 ? "处理中..." : p === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Ds as A,
  ta as B,
  ja as C,
  Ss as D,
  Fa as E,
  Rs as F,
  da as G,
  Er as H,
  Br as I,
  Fs as J,
  Ar as K,
  _s as L,
  zr as M,
  Ps as N,
  As as O,
  za as P,
  _r as Q,
  Is as R,
  Hs as S,
  Wt as T,
  Da as U,
  Ra as V,
  At as a,
  Qe as b,
  ks as c,
  la as d,
  Vt as e,
  $r as f,
  Kt as g,
  oa as h,
  aa as i,
  Ns as j,
  Un as k,
  Pa as l,
  Ha as m,
  Bs as n,
  Ba as o,
  Ts as p,
  Ca as q,
  ca as r,
  js as s,
  zs as t,
  Es as u,
  Ls as v,
  $s as w,
  Cs as x,
  Sa as y,
  Ms as z
};
