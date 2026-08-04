import { jsxs as r, Fragment as Ue, jsx as e } from "react/jsx-runtime";
import je, { useMemo as be, useState as y, useRef as me, useCallback as Ae, useEffect as ge, useLayoutEffect as At, forwardRef as Ut, useId as pr } from "react";
import Ee from "classnames";
import { Check as et, Copy as ht, RefreshCcw as hr, ThumbsUp as fr, ThumbsDown as xr, ArrowUpRight as br, Info as gr, Ban as yr, TriangleAlert as $t, CircleCheckBig as dt, ShieldCheck as Vt, CircleHelp as Kt, FileText as ft, LoaderCircle as Ot, Puzzle as Xt, AtSign as Gt, AlertCircle as vr, Paperclip as Yt, ArrowRight as Qt, ChevronDown as ut, ChevronRight as ct, CircleX as Zt, Sparkles as Jt, Loader2 as Ge, Clock3 as xt, Search as Qe, BookOpen as Pt, ListChecks as wr, Globe as Nr, Minus as kr, Menu as er, Upload as Tr, Trash2 as tr, CheckCircle2 as at, SearchX as Cr, FlaskConical as Sr, X as nt, Plus as rr, Square as Mr, Send as $r, UserPlus as zr, Building2 as Lr, Folder as yt, PanelLeftClose as Ar, SquarePen as Pr, AlertTriangle as Er, Settings as _r, Pin as vt, MoreHorizontal as Br, Pencil as Ir, Share2 as Rr } from "lucide-react";
import nr from "react-markdown";
import ar from "remark-gfm";
import jr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as Dr } from "react-dom";
import { Crepe as wt } from "@milkdown/crepe";
import { editorViewCtx as Nt, commandsCtx as Fr } from "@milkdown/kit/core";
import { lift as Hr } from "@milkdown/kit/prose/commands";
import { wrapInList as qr, liftListItem as Wr } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Et } from "@milkdown/kit/prose/state";
import { orderedListSchema as Ur, bulletListSchema as Vr, listItemSchema as kt, paragraphSchema as Kr, setBlockTypeCommand as Or } from "@milkdown/kit/preset/commonmark";
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
    children: c,
    icon: h,
    iconPosition: w = "left",
    className: d,
    fullWidth: u = !1,
    rounded: p = "medium",
    onClick: m,
    ...T
  }, M) => {
    const j = s ?? l ?? !1, z = a || j, B = be(() => j ? /* @__PURE__ */ r(Ue, { children: [
      /* @__PURE__ */ e("span", { className: Ie.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: c })
    ] }) : h ? /* @__PURE__ */ r(Ue, { children: [
      w === "left" && /* @__PURE__ */ e("span", { className: Ie.icon, children: h }),
      c && /* @__PURE__ */ e("span", { children: c }),
      w === "right" && /* @__PURE__ */ e("span", { className: Ie.icon, children: h })
    ] }) : c, [c, j, h, w]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: M,
        className: Ee(
          Ie.button,
          pn[t],
          hn[n],
          fn[p],
          {
            [Ie.fullWidth]: u,
            [Ie.loading]: j,
            [Ie.disabled]: z
          },
          d
        ),
        disabled: z,
        onClick: m,
        ...T,
        children: B
      }
    );
  }
);
Fe.displayName = "BaseButton";
const xn = { small: "h-8", medium: "h-9", large: "h-14" }, sr = je.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: s,
    defaultValue: l,
    disabled: a = !1,
    readOnly: c = !1,
    error: h = !1,
    size: w = "medium",
    prefix: d,
    suffix: u,
    prefixIcon: p,
    suffixIcon: m,
    onChange: T,
    onFocus: M,
    onBlur: j,
    onClear: z,
    className: B,
    containerClassName: q,
    clearable: O = !1,
    label: R,
    helperText: A,
    ...X
  }, V) => {
    const [I, S] = y(!1), G = me(null), x = Ae((ne) => {
      G.current = ne, typeof V == "function" ? V(ne) : V && (V.current = ne);
    }, [V]), U = Ae(() => {
      var C, L;
      const ne = G.current;
      ne && ((L = (C = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : C.set) == null || L.call(ne, ""), ne.dispatchEvent(new Event("input", { bubbles: !0 })), ne.focus(), z == null || z());
    }, [z]), re = be(
      () => {
        var ne;
        return O && I && String(s ?? ((ne = G.current) == null ? void 0 : ne.value) ?? "").length > 0;
      },
      [O, I, s]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      R && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: R }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Ee(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            xn[w],
            !a && !h && "hover:border-controlBorder",
            I && !a && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && I && "ring-2 ring-dangerFocus",
            a && "cursor-not-allowed bg-surfaceMuted",
            q
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
                readOnly: c,
                className: Ee("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", B),
                onFocus: (ne) => {
                  S(!0), M == null || M(ne);
                },
                onBlur: (ne) => {
                  S(!1), j == null || j(ne);
                },
                onChange: T,
                ...X
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              re && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (ne) => ne.preventDefault(), onClick: U, "aria-label": "清空", children: "✕" }),
              u || m
            ] })
          ]
        }
      ),
      A && /* @__PURE__ */ e("div", { className: Ee("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: A })
    ] });
  }
);
sr.displayName = "BaseInput";
const bn = { small: "h-8", medium: "h-9", large: "h-14" }, gn = je.forwardRef(
  ({ options: t = [], value: n, defaultValue: s, placeholder: l, disabled: a = !1, error: c = !1, size: h = "medium", label: w, helperText: d, onChange: u, className: p, ...m }, T) => {
    const M = Ae((j) => {
      const z = j.target.value, B = t.find((q) => String(q.value) === z);
      u == null || u(z === "" ? "" : (B == null ? void 0 : B.value) ?? z);
    }, [u, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      w && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: w }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: T,
            className: Ee(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              c && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              bn[h],
              p
            ),
            value: n ?? s ?? "",
            disabled: a,
            onChange: M,
            ...m,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((j) => /* @__PURE__ */ e("option", { value: j.value, disabled: j.disabled, children: j.label }, j.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      d && /* @__PURE__ */ e("div", { className: Ee("text-xs leading-6", c ? "text-danger" : "text-mutedText"), children: d })
    ] });
  }
);
gn.displayName = "BaseSelect";
const yn = "_container_ykn59_1", vn = "_item_ykn59_10", wn = "_itemActive_ykn59_27", Nn = "_itemDisabled_ykn59_27", kn = "_sizeSmall_ykn59_43", Tn = "_sizeMiddle_ykn59_49", Cn = "_sizeLarge_ykn59_55", Ye = {
  container: yn,
  item: vn,
  itemActive: wn,
  itemDisabled: Nn,
  sizeSmall: kn,
  sizeMiddle: Tn,
  sizeLarge: Cn
}, Sn = {
  small: Ye.sizeSmall,
  middle: Ye.sizeMiddle,
  large: Ye.sizeLarge
};
function Ka({
  options: t,
  value: n,
  defaultValue: s,
  onChange: l,
  size: a = "middle",
  disabled: c = !1,
  className: h
}) {
  var m;
  const [w, d] = y(
    s ?? ((m = t[0]) == null ? void 0 : m.value) ?? ""
  ), u = n ?? w, p = (T) => {
    c || (n === void 0 && d(T), l == null || l(T));
  };
  return /* @__PURE__ */ e("div", { className: Ee(Ye.container, Sn[a], h), children: t.map((T) => {
    const M = u === T.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Ee(Ye.item, M && Ye.itemActive, c && Ye.itemDisabled),
        onClick: () => p(T.value),
        disabled: c,
        "aria-pressed": M,
        children: T.label
      },
      T.value
    );
  }) });
}
const Mn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, $n = je.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: s = !1, onChange: l, onError: a, maxSize: c, children: h, className: w, dragable: d = !0, placeholderTitle: u, placeholderDescription: p, placeholderIcon: m, maxCount: T }, M) => {
    const j = me(null), [z, B] = y(!1), q = Ae((R) => {
      if (T && R.length > T) {
        a == null || a(new Error(`单次最多上传 ${T} 个文件`));
        return;
      }
      if (c) {
        for (const A of Array.from(R))
          if (A.size > c) {
            a == null || a(new Error(`文件“${A.name}”超过大小限制（${Mn(c)}）`));
            return;
          }
      }
      l == null || l(R);
    }, [T, c, l, a]), O = () => {
      var R;
      s || (R = j.current) == null || R.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: M,
        className: Ee(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          z && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          s && "cursor-not-allowed opacity-60",
          w
        ),
        onClick: O,
        onKeyDown: (R) => {
          !s && (R.key === "Enter" || R.key === " ") && (R.preventDefault(), O());
        },
        onDragOver: (R) => {
          d && !s && (R.preventDefault(), B(!0));
        },
        onDragLeave: () => B(!1),
        onDrop: (R) => {
          d && !s && (R.preventDefault(), B(!1), q(R.dataTransfer.files));
        },
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        children: [
          /* @__PURE__ */ e("input", { ref: j, type: "file", accept: t, multiple: n, disabled: s, onChange: (R) => R.target.files && q(R.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: m ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: u ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: p ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
$n.displayName = "BaseUpload";
const zn = "_maskAnimation_1h49h_1", Ln = "_modalAnimation_1h49h_5", _t = {
  maskAnimation: zn,
  modalAnimation: Ln
}, zt = ({
  visible: t,
  open: n = t,
  show: s = n,
  title: l,
  width: a = 520,
  centered: c = !0,
  destroyOnClose: h = !1,
  mask: w = !0,
  maskClosable: d = !0,
  okText: u = "确认",
  cancelText: p = "取消",
  confirmLoading: m = !1,
  okButtonProps: T,
  cancelButtonProps: M,
  onConfirm: j,
  onCancel: z,
  onClose: B,
  onOk: q,
  onDismiss: O,
  children: R,
  footer: A,
  className: X,
  bodyClassName: V
}) => {
  const I = s ?? !1, S = Ae(async () => {
    try {
      j ? await j() : q && await q();
    } catch (U) {
      console.error("Modal confirm error:", U);
    }
  }, [j, q]), G = Ae(() => {
    z ? z() : B ? B() : O == null || O();
  }, [z, B, O]), x = be(() => {
    if (A === null) return null;
    if (A) return A;
    const { type: U, ...re } = M ?? {}, { type: ne, ...C } = T ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Fe, { type: "secondary", size: "medium", onClick: G, ...re, children: p }),
      /* @__PURE__ */ e(Fe, { type: "primary", size: "medium", isLoading: m, onClick: S, ...C, children: m ? "加载中..." : u })
    ] });
  }, [M, p, m, A, G, S, T, u]);
  return !I && h || !I ? null : /* @__PURE__ */ r(Ue, { children: [
    w && /* @__PURE__ */ e("div", { className: Ee("fixed inset-0 z-[1000] bg-overlayMask", _t.maskAnimation), onClick: () => d && G(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Ee(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          c && "left-1/2 top-1/2",
          _t.modalAnimation,
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
          /* @__PURE__ */ e("div", { className: Ee("min-h-20 p-5 text-primaryText", V), children: R }),
          x
        ]
      }
    )
  ] });
};
zt.displayName = "BaseModal";
const An = ({ title: t, extra: n, children: s, hoverable: l = !1, loading: a = !1, bordered: c = !0, className: h, bodyClassName: w, onClick: d }) => /* @__PURE__ */ r(
  "div",
  {
    className: Ee(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      c && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      a && "pointer-events-none opacity-60",
      h
    ),
    onClick: d,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Ee("p-4 text-primaryText", (t || n) && "pt-1", w), children: s })
    ]
  }
);
An.displayName = "BaseCard";
const Pn = ({ columns: t, dataSource: n = [], rowKey: s = "id", loading: l = !1, bordered: a = !0, striped: c = !0, className: h, onRow: w }, d) => /* @__PURE__ */ r("div", { ref: d, className: Ee("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: a ? "border-b border-lineSubtle" : void 0, children: t.map((u) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: u.width, textAlign: u.align }, children: u.title }, u.key || String(u.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((u, p) => {
      const m = String(typeof s == "string" ? u[s] ?? p : p);
      return /* @__PURE__ */ e("tr", { className: Ee(a && "border-b border-lineSoft last:border-b-0", c && "odd:bg-surface"), ...(w == null ? void 0 : w(u, p)) || {}, children: t.map((T) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: T.align }, children: T.render ? T.render(u[T.dataIndex], u, p) : String(u[T.dataIndex] ?? "") }, T.key || String(T.dataIndex))) }, m);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Oa = je.forwardRef(Pn), En = ({ current: t = 1, pageSize: n = 10, total: s = 0, onChange: l, showSizeChanger: a = !1, pageSizeOptions: c = [10, 20, 50, 100], onShowSizeChange: h, disabled: w = !1, className: d }) => {
  const u = be(() => Math.ceil(s / n) || 1, [n, s]), p = Ae((T) => h == null ? void 0 : h(1, Number(T.target.value)), [h]), m = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Ee("flex flex-wrap items-center justify-center gap-4 p-4", d), children: [
    /* @__PURE__ */ e("button", { type: "button", className: m, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: w || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      u,
      " 页，共 ",
      s,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: m, onClick: () => t < u && (l == null ? void 0 : l(t + 1)), disabled: w || t >= u, children: "下一页 →" }),
    a && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: p, disabled: w, children: c.map((T) => /* @__PURE__ */ r("option", { value: T, children: [
      T,
      " 条/页"
    ] }, T)) })
  ] });
};
En.displayName = "BasePagination";
const Lt = ({ description: t = "暂无数据", image: n, children: s }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  s
] });
Lt.displayName = "BaseEmpty";
const mt = ({ trigger: t, items: n, footerItems: s = [], open: l = !1, onOpenChange: a, onTriggerClick: c, onItemClick: h, placement: w = "bottom-start", width: d, portal: u = !1, className: p, triggerClassName: m, menuClassName: T, listClassName: M, footerClassName: j }) => {
  const z = me(null), B = me(null), [q, O] = y({}), R = w.endsWith("end"), A = w.startsWith("top");
  ge(() => {
    if (!l || !u || !z.current) return;
    const S = z.current.getBoundingClientRect();
    O({ position: "fixed", left: R ? S.right : S.left, top: A ? S.top : S.bottom, transform: R ? "translateX(-100%)" : void 0 });
  }, [A, R, l, u, w]), ge(() => {
    !l || !u || !A || !B.current || O((S) => ({ ...S, top: Number(S.top) - B.current.offsetHeight - 8 }));
  }, [A, l, u]), ge(() => {
    if (!l || !a) return;
    const S = (G) => {
      var U, re;
      const x = G.target;
      (U = z.current) != null && U.contains(x) || (re = B.current) != null && re.contains(x) || a(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [a, l]);
  const X = be(() => d ? { width: typeof d == "number" ? `${d}px` : d } : void 0, [d]), V = Ae((S) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Ee(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !S.danger && !S.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !S.danger && S.active && "bg-primary-soft font-medium text-primary",
        S.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (G) => h == null ? void 0 : h(S, G),
      disabled: S.disabled,
      children: [
        S.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: S.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: S.label })
      ]
    },
    S.key
  ), [h]), I = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: B,
      className: Ee(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !u && "absolute",
        !u && !A && "top-[calc(100%+8px)]",
        !u && A && "bottom-[calc(100%+8px)]",
        !u && R ? "right-0" : u ? void 0 : "left-0",
        T
      ),
      style: u ? { ...q, ...X } : X,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Ee("flex min-h-0 flex-col gap-1", M), children: n.map(V) }),
        s.length > 0 && /* @__PURE__ */ e("div", { className: Ee("flex flex-col gap-1 border-t border-lineSoft pt-2", j), children: s.map(V) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: z, className: Ee("relative inline-block", p), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Ee("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", m), onClick: (S) => {
      c == null || c(S), a == null || a(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    u ? I && Dr(I, document.body) : I
  ] });
};
mt.displayName = "BaseActionMenu";
const _n = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: s,
  feedback: l,
  onFeedback: a,
  disabled: c = !1
}) => {
  const [h, w] = y(!1), d = !!(s || a), u = Ae(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), w(!0), window.setTimeout(() => w(!1), 1200);
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
            onClick: u,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制" : n,
            children: h ? /* @__PURE__ */ e(et, { size: 15 }) : /* @__PURE__ */ e(ht, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: s,
            disabled: c,
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
}, Bt = je.memo(_n), Bn = {
  clarification: {
    icon: /* @__PURE__ */ e(Kt, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(dt, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(Vt, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(dt, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e($t, { size: 16 }),
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
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((a, c) => /* @__PURE__ */ e("li", { children: a }, `${c}-${a}`)) }),
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
  const a = t.status === "saving", c = t.status === "saved", h = t.actionable ?? !0, w = t.previewable ?? !0, d = a || c || !h || !s;
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
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(ft, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Mira 文档草稿" }),
            /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: t.title }),
            t.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: t.summary })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: c ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !c && h && l && /* @__PURE__ */ e(
          Fe,
          {
            type: "secondary",
            size: "small",
            disabled: a,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (h || c) && /* @__PURE__ */ e(
          Fe,
          {
            type: c ? "secondary" : "primary",
            size: "small",
            disabled: d,
            onClick: () => s == null ? void 0 : s(t.actionKey),
            children: a ? /* @__PURE__ */ r(Ue, { children: [
              /* @__PURE__ */ e(Ot, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : c ? /* @__PURE__ */ r(Ue, { children: [
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
const It = "[[PAPER_LIST_JSON]]";
let Rt = !1, lt = null, it = null, ot = null;
const jn = async () => (it || (it = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, n]) => ({
  remark: t.default,
  rehype: n.default
})).catch((t) => {
  throw it = null, t;
})), it), Dn = async () => (ot || (ot = import("remark-emoji").then((t) => t.default).catch(() => (ot = null, null))), ot), Fn = async () => {
  lt || (lt = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw lt = null, n;
  }));
  const t = await lt;
  if (!Rt) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), Rt = !0;
  }
  return t;
}, pt = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => pt(n)).join("") : je.isValidElement(t) ? pt(t.props.children) : "", jt = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, Hn = ({ href: t, label: n }) => {
  const s = be(() => {
    const l = n.trim();
    if (l) return l;
    try {
      const c = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (c) return decodeURIComponent(c);
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
        children: /* @__PURE__ */ e(Qt, { size: 14 })
      }
    )
  ] });
}, qn = ({ language: t, rawCode: n, className: s, children: l }) => {
  const [a, c] = y(!1), h = Ae(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), c(!0), window.setTimeout(() => c(!1), 1200);
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
            a ? /* @__PURE__ */ e(et, { size: 12 }) : /* @__PURE__ */ e(ht, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${s ?? ""}`.trim(), children: l }) })
  ] });
}, Wn = ({ rawCode: t }) => {
  const [n, s] = y(!1), l = Ae(async () => {
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
            n ? /* @__PURE__ */ e(et, { size: 12 }) : /* @__PURE__ */ e(ht, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, lr = (t) => {
  const n = typeof t.title == "string" ? t.title.trim() : "", s = typeof t.pmid == "string" ? t.pmid.trim() : "", l = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !s || !l ? null : { title: n, pmid: s, doi: l };
}, Dt = (t) => {
  const n = t.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const s = [];
  return n.forEach((l, a) => {
    var m;
    const c = l.match(/PMID\s*[:：]\s*(\d{4,})/i), h = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!c || !h) return;
    const w = l.slice(0, c.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), d = ((m = n[a - 1]) == null ? void 0 : m.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", p = lr({
      title: w || d,
      pmid: c[1],
      doi: h[1]
    });
    p && s.push(p);
  }), s.length === 0 ? null : { items: s };
}, Un = (t) => {
  if (!t.startsWith(It))
    return Dt(t);
  const n = t.slice(It.length).trim();
  if (!n) return null;
  try {
    const s = JSON.parse(n);
    if (!Array.isArray(s.items)) return null;
    const l = s.items.map((a) => lr(a)).filter((a) => a !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return Dt(n);
  }
}, ir = ({
  msg: t,
  actionKey: n,
  feedback: s,
  onFeedback: l,
  onRefresh: a,
  onConfirmMiraDraft: c,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: w,
  pendingDisplayActionKey: d,
  onDisplayCardAction: u,
  isTyping: p = !1,
  isStreaming: m
}) => {
  var L, P;
  const T = t.role === "user", M = m ?? p, j = me(null), [z, B] = y(null), [q, O] = y(null), [R, A] = y(null), [X, V] = y(!1), I = be(() => /```\s*mermaid/i.test(t.content), [t.content]), S = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), G = be(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), x = be(
    () => T ? null : Un(t.content),
    [T, t.content]
  ), U = !!(x && x.items.length > 0);
  ge(() => {
    if (!S || z || q) return;
    let b = !1;
    return jn().then((f) => {
      b || (B(() => f.remark), O(() => f.rehype));
    }).catch(() => {
    }), () => {
      b = !0;
    };
  }, [S, z, q]), ge(() => {
    if (!G || X) return;
    let b = !1;
    return Dn().then((f) => {
      b || (f && A(() => f), V(!0));
    }), () => {
      b = !0;
    };
  }, [G, X]);
  const re = be(() => {
    const b = [ar];
    return R && b.push(R), z && b.push(z), b;
  }, [R, z]), ne = be(() => {
    const b = [jr];
    return q && b.push(q), b;
  }, [q]), C = be(
    () => ({
      table: ({ node: b, ...f }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...f }) }),
      tr: ({ node: b, ...f }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...f }),
      th: ({ node: b, ...f }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...f
        }
      ),
      td: ({ node: b, ...f }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...f }),
      blockquote: ({ node: b, ...f }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...f
        }
      ),
      input: ({ node: b, type: f, checked: K, ...ce }) => f === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!K,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...ce
        }
      ) : /* @__PURE__ */ e("input", { type: f, ...ce }),
      section: ({ node: b, ...f }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...f }),
      p: ({ node: b, children: f, ...K }) => {
        const ce = je.Children.toArray(f);
        if (ce.length === 1 && je.isValidElement(ce[0])) {
          const ve = ce[0];
          if (typeof ve.props.href == "string" && jt(ve.props.href)) {
            const Q = pt(ve.props.children).trim();
            return /* @__PURE__ */ e(Hn, { href: ve.props.href, label: Q });
          }
        }
        return /* @__PURE__ */ e("p", { ...K, children: f });
      },
      a: ({ node: b, href: f, ...K }) => {
        const ce = f ?? "", ve = /^https?:\/\/(dx\.)?doi\.org\//i.test(ce) || /^doi:/i.test(ce), Q = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(ce) || /\/pmc\/|\/pmid\//i.test(ce), N = jt(ce);
        return ve || Q || N ? /* @__PURE__ */ e(
          "a",
          {
            href: f,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...K
          }
        ) : /* @__PURE__ */ e("a", { href: f, target: "_blank", rel: "noreferrer", ...K });
      },
      pre({ children: b, ...f }) {
        const K = je.Children.toArray(b).find(
          (D) => je.isValidElement(D) && typeof D.props.className == "string" && D.props.className.includes("language-")
        );
        if (!K)
          return /* @__PURE__ */ e("pre", { ...f, children: b });
        const ce = K.props.className ?? "", ve = ce.match(/language-([\w-]+)/), Q = ve ? ve[1].toLowerCase() : "code", N = pt(K.props.children).replace(/\n$/, "");
        return Q === "mermaid" ? /* @__PURE__ */ e(Wn, { rawCode: N }) : /* @__PURE__ */ e(qn, { language: Q, rawCode: N, className: ce, children: K.props.children });
      },
      code({ children: b, className: f, ...K }) {
        return f ? /* @__PURE__ */ e("code", { className: f, ...K, children: b }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...K,
            children: b
          }
        );
      }
    }),
    []
  );
  return ge(() => {
    if (T || M || !I) return;
    const b = j.current;
    if (!b) return;
    const f = Array.from(b.querySelectorAll(".mermaid")).filter(
      (K) => K.dataset.processed !== "true"
    );
    f.length !== 0 && Fn().then(async (K) => {
      await Promise.all(
        f.map(async (ce, ve) => {
          var F;
          const Q = (F = ce.textContent) == null ? void 0 : F.trim();
          if (!Q) return;
          const N = `mermaid-${Date.now()}-${ve}`, { svg: D } = await K.render(N, Q);
          ce.innerHTML = D, ce.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [T, M, I, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${T ? "justify-end" : "justify-start"}`, children: T ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (L = t.references) == null ? void 0 : L.map((b) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${b.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              b.type === "skill" ? /* @__PURE__ */ e(Xt, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(Gt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: b.label, children: b.label })
            ]
          },
          b.id
        )),
        (P = t.attachments) == null ? void 0 : P.map((b) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${b.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: b.status === "error" ? "alert" : void 0,
            title: b.errorMessage,
            children: [
              b.status === "uploading" ? /* @__PURE__ */ e(Ot, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : b.status === "error" ? /* @__PURE__ */ e(vr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : b.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: b.previewUrl, alt: b.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Yt, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
      Bt,
      {
        markdownContent: t.content,
        copyLabel: "复制消息"
      }
    )
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    U && x ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: x.items.map((b, f) => /* @__PURE__ */ r(
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
              children: /* @__PURE__ */ e(Qt, { size: 14 })
            }
          )
        ]
      },
      `${b.pmid}-${f}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: j,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          nr,
          {
            remarkPlugins: re,
            rehypePlugins: ne,
            components: C,
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
        onConfirm: c,
        onCancel: w
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      In,
      {
        card: t.displayCard,
        actionPending: d === t.displayCard.actionKey,
        onAction: u
      }
    ),
    !U && t.content && !M && /* @__PURE__ */ e(
      Bt,
      {
        markdownContent: t.content,
        onRefresh: a,
        feedback: s,
        onFeedback: n && l ? (b) => l(n, b) : void 0,
        disabled: M
      }
    )
  ] }) }) });
}, Vn = je.memo(ir), Kn = {
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
  queued: /* @__PURE__ */ e(xt, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(Ge, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(Jt, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(Kt, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(dt, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(Vt, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e($t, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(Zt, { size: 14, className: "text-danger" })
}, Ft = {
  knowledge: {
    icon: /* @__PURE__ */ e(Pt, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Nr, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Qe, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(wr, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(Pt, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(Jt, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(Qe, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Xn = {
  running: {
    icon: /* @__PURE__ */ e(Ge, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(dt, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(Zt, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(kr, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e($t, { size: 13 }),
    colorClass: "text-warning"
  }
}, Mt = ({
  phase: t,
  searchSteps: n = [],
  label: s,
  defaultExpanded: l = !0
}) => {
  const [a, c] = y(l), h = me(null);
  ge(() => {
    n.length > 0 && c(!0);
  }, [n.length]);
  const w = n.length > 0;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: On[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: s || Kn[t] }),
      w && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => c((d) => !d),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            a ? /* @__PURE__ */ e(ut, { size: 12 }) : /* @__PURE__ */ e(ct, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    w && /* @__PURE__ */ e(
      "div",
      {
        ref: h,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${a ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((d, u) => {
          const p = Ft[d.type] ?? Ft.tool, m = d.status ? Xn[d.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${p.colorClass}`, children: p.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: d.label }),
                    m && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${m.colorClass}`,
                        "aria-label": d.status,
                        children: m.icon
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
            d.id ?? `${d.type}-${u}-${d.label}`
          );
        })
      }
    )
  ] });
}, Gn = je.memo(Mt);
function Yn(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t && (t.current = n);
}
function Tt(t) {
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : 0;
}
function Qn({
  messages: t,
  isTyping: n,
  statusPhase: s = "thinking",
  statusLabel: l,
  statusVisible: a,
  searchSteps: c = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: w = 800,
  selection: d,
  scrollbar: u,
  feedbackByMessageKey: p,
  getMessageKey: m = (V, I) => String(I),
  onFeedback: T,
  onRegenerate: M,
  onConfirmMiraDraft: j,
  onPreviewMiraDraft: z,
  onCancelMiraDraft: B,
  pendingDisplayActionKey: q,
  onDisplayCardAction: O,
  onScroll: R,
  scrollContainerRef: A,
  onMessageElement: X
}) {
  var ve, Q;
  const V = !!d, I = me(null), S = me(null), G = me(/* @__PURE__ */ new Map()), x = me(), [U, re] = y(), C = n && (a ?? !h) || a === !0 && (s === "awaiting_clarification" || s === "awaiting_confirmation" || s === "awaiting_approval" || s === "warning" || s === "failed");
  let L = -1, P = -1;
  if (n) {
    for (let N = t.length - 1; N >= 0; N -= 1)
      if (((ve = t[N]) == null ? void 0 : ve.role) === "user") {
        P = N;
        break;
      }
    for (let N = t.length - 1; N > P; N -= 1)
      if (((Q = t[N]) == null ? void 0 : Q.role) === "assistant") {
        L = N;
        break;
      }
  }
  const b = P >= 0 ? m(t[P], P) : void 0, f = L >= 0 ? m(t[L], L) : void 0, K = b && f ? `${b}:${f}` : void 0, ce = Ae(
    (N) => {
      I.current = N, Yn(A, N);
    },
    [A]
  );
  return At(() => {
    if (!K || !f || P < 0 || L < 0)
      return;
    const N = I.current, D = S.current, F = G.current.get(P);
    if (!N || !D || !F) return;
    const Te = () => {
      const Pe = window.getComputedStyle(N), $e = window.getComputedStyle(D), Z = N.clientHeight - Tt(Pe.paddingTop) - Tt(Pe.paddingBottom), ae = Tt($e.rowGap || $e.gap), Y = Math.max(
        0,
        Math.floor(Z - F.offsetHeight - ae)
      );
      re(
        (E) => (E == null ? void 0 : E.assistantKey) === f && E.minHeight === Y ? E : { assistantKey: f, minHeight: Y }
      );
    };
    Te();
    const ye = new ResizeObserver(Te);
    return ye.observe(N), ye.observe(F), () => ye.disconnect();
  }, [
    L,
    f,
    K,
    P
  ]), At(() => {
    if (!K || !f || (U == null ? void 0 : U.assistantKey) !== f || P < 0 || x.current === K)
      return;
    const N = I.current, D = G.current.get(P);
    !N || !D || (N.scrollTo({ top: D.offsetTop, behavior: "auto" }), x.current = K);
  }, [f, K, P, U]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: ce,
        "data-chat-scroll-container": !0,
        onScroll: R,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: S,
            className: `flex w-full flex-col ${V ? "gap-3" : "gap-8"}`,
            style: { maxWidth: w },
            children: [
              t.map((N, D) => {
                const F = m(N, D), Te = (d == null ? void 0 : d.selectedMessageKeys.has(F)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": D,
                    "data-chat-turn-reserved": (U == null ? void 0 : U.assistantKey) === F ? "true" : void 0,
                    ref: (ye) => {
                      ye ? G.current.set(D, ye) : G.current.delete(D), X == null || X(D, ye);
                    },
                    className: V ? "flex w-full items-start gap-2" : void 0,
                    style: (U == null ? void 0 : U.assistantKey) === F ? { minHeight: U.minHeight } : void 0,
                    children: [
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => d.onToggleMessage(F),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": Te ? "取消选择消息" : "选择消息",
                          children: Te ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(et, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: d ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${Te ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${N.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              ir,
                              {
                                msg: N,
                                actionKey: F,
                                feedback: p == null ? void 0 : p[F],
                                onFeedback: T,
                                onRefresh: M ? () => M(D) : void 0,
                                onConfirmMiraDraft: j,
                                onPreviewMiraDraft: z,
                                onCancelMiraDraft: B,
                                pendingDisplayActionKey: q,
                                onDisplayCardAction: O,
                                isTyping: n && D === L
                              }
                            ),
                            D === L && C && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              Mt,
                              {
                                phase: s,
                                label: l,
                                searchSteps: [...c]
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
              L < 0 && C && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                Mt,
                {
                  phase: s,
                  label: l,
                  searchSteps: [...c]
                }
              ) }) })
            ]
          }
        )
      }
    ),
    u && u.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${u.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: u.height,
          transform: `translateY(${u.top}px)`
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
const Ga = Ut(
  function({ header: n, children: s, sidePanels: l }, a) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ r("div", { ref: a, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: s }),
        l
      ] })
    ] });
  }
), Ya = Ut(
  function({ open: n, width: s, resizing: l = !1, overlay: a = !1, overlayRight: c = 0, children: h }, w) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: w,
        "data-overlay": a ? "true" : "false",
        style: { width: n ? s : 0, ...a ? { right: c } : {} },
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
  actions: c,
  onOpenSidebar: h,
  onStartEditTitle: w,
  onEditingTitleChange: d,
  onCommitTitle: u,
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
              onClick: h,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(er, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: s !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: s,
              onChange: (T) => d == null ? void 0 : d(T.target.value),
              onBlur: u,
              onKeyDown: p,
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
        c && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: c })
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
  const [a, c] = y(s), [h, w] = y(null), [d, u] = y(0), [p, m] = y(0), [T, M] = y(!1), j = me(null), z = me({}), B = me(null), q = Ae(() => {
    const A = j.current;
    if (!A) {
      u(0), m(0);
      return;
    }
    const { scrollTop: X, scrollHeight: V, clientHeight: I } = A;
    if (V <= I || I <= 0) {
      u(0), m(0);
      return;
    }
    const S = Math.max(I / V * I, 24), G = I - S, x = X / Math.max(V - I, 1);
    u(S), m(G * x);
  }, []), O = Ae(() => {
    q(), M(!0), B.current !== null && window.clearTimeout(B.current), B.current = window.setTimeout(() => M(!1), 650);
  }, [q]), R = () => {
    B.current !== null && (window.clearTimeout(B.current), B.current = null), c(!1), w(null), M(!1);
  };
  return ge(() => {
    if (!a) return;
    const A = window.requestAnimationFrame(q);
    return () => window.cancelAnimationFrame(A);
  }, [a, t.length, q]), ge(() => {
    const A = j.current, X = z.current[n];
    if (!A || !X) return;
    const V = A.scrollTop, I = V + A.clientHeight, S = X.offsetTop, G = S + X.offsetHeight, x = 16;
    S < V + x ? A.scrollTo({ top: Math.max(S - x, 0), behavior: "auto" }) : G > I - x && A.scrollTo({
      top: Math.max(G - A.clientHeight + x, 0),
      behavior: "auto"
    });
  }, [n, t.length]), ge(() => () => {
    B.current !== null && window.clearTimeout(B.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => c(!0),
      onMouseLeave: R,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: j,
          onScroll: O,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${a ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((A) => {
              const X = A.messageIndex === n, V = h === A.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (I) => {
                    z.current[A.messageIndex] = I;
                  },
                  type: "button",
                  onClick: () => l(A.messageIndex),
                  onMouseEnter: () => w(A.messageIndex),
                  onMouseLeave: () => w(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${a ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${A.messageIndex + 1} 条用户消息`,
                  title: A.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${a ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${X ? "text-primary" : V ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: A.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${X ? "h-[4px] w-[12px] bg-primary" : V ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                A.messageIndex
              );
            }) }),
            a && d > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${T ? "opacity-100" : "opacity-0"}`,
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
  onCancel: c,
  onCreateLink: h,
  onCloseModal: w,
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
            /* @__PURE__ */ e(Fe, { type: "secondary", size: "small", onClick: c, children: "取消" }),
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
      zt,
      {
        visible: s,
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
                onClick: d,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  l ? /* @__PURE__ */ e(et, { size: 14 }) : /* @__PURE__ */ e(ht, { size: 14 }),
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
function or({
  attachments: t,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: s = !1,
  deletingAttachmentId: l,
  unavailableHint: a,
  error: c,
  onRequestUpload: h,
  onDeleteAttachment: w
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
    t.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: t.map((d) => {
      const u = l === d.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: d.statusLabel,
          children: [
            /* @__PURE__ */ e(ft, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: d.name }),
            d.status === "processing" && /* @__PURE__ */ e(Ge, { size: 12, className: "animate-spin" }),
            w && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: u,
                onClick: () => w(d.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${d.name}`,
                title: "删除附件",
                children: u ? /* @__PURE__ */ e(Ge, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(tr, { size: 13 })
              }
            )
          ]
        },
        d.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    a && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: a }),
    c && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: c })
  ] });
}
const Jn = {
  disabled: /* @__PURE__ */ e(Cr, { size: 14 }),
  pending: /* @__PURE__ */ e(xt, { size: 14 }),
  indexed: /* @__PURE__ */ e(at, { size: 14 })
};
function cr({
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
const ea = "_preview_1bdn0_1", ta = "_editor_1bdn0_2", dr = {
  preview: ea,
  editor: ta
};
function ra({
  document: t,
  layout: n = "page"
}) {
  const [s, l] = y(!1), a = me(null), c = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => () => {
    a.current !== null && window.clearTimeout(a.current);
  }, []);
  const h = () => {
    l(!0), a.current !== null && window.clearTimeout(a.current), a.current = window.setTimeout(() => l(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${c}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        cr,
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
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${dr.preview} ${c}`, children: /* @__PURE__ */ e(nr, { remarkPlugins: [ar], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Lt, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            or,
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
  pendingActionKey: c,
  onAction: h,
  resolveActions: w,
  renderContent: d,
  onResizeStart: u
}) {
  const p = t.find((M) => M.key === n) ?? null, m = p ? (w == null ? void 0 : w(p)) ?? p.actions : void 0, T = p ? d == null ? void 0 : d(p) : void 0;
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
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((M) => {
        const j = M.key === n;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => s(M.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${j ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                M.type === "knowledge" || M.type === "draft" ? /* @__PURE__ */ e(ft, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Sr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: M.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (z) => {
                z.stopPropagation(), l(M.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${M.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(nt, { size: 12 })
            }
          )
        ] }, M.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        p && (m == null ? void 0 : m.map((M) => /* @__PURE__ */ e(
          Fe,
          {
            type: M.tone ?? "secondary",
            size: "small",
            disabled: c === p.key || !h,
            onClick: () => h == null ? void 0 : h(p.key, M.id),
            children: M.label
          },
          M.id
        ))),
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
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: p ? T || (p.document ? /* @__PURE__ */ e(ra, { document: p.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: p.loading ? "正在加载文档…" : p.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function ts({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: s,
  knowledgeDocs: l,
  experiments: a,
  activePreviewKey: c,
  onSearchQueryChange: h,
  onOpenKnowledge: w,
  onOpenExperiment: d,
  onResizeStart: u
}) {
  const p = l.length + a.length;
  return /* @__PURE__ */ r("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: u,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ r("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ r("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: t }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Qe, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (m) => h(m.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: s ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: s }) : p === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ue, { children: [
        l.map((m) => {
          const T = `knowledge:${m.id}`, M = c === T;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => w(m.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${M ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${M ? "font-semibold" : "font-normal"}`, children: m.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: m.tags[0] ?? "未分类" })
              ]
            },
            m.id
          );
        }),
        a.map((m) => {
          const T = `experiment:${m.id}`, M = c === T;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => d(m.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${M ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${M ? "font-semibold" : "font-normal"}`, children: m.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: m.tags[0] ?? m.status })
              ]
            },
            m.id
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
  const a = t.slice(0, n), c = t.slice(s), h = a.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const m = `/${l} `;
    return { value: `${a}${m}${c}`, cursor: a.length + m.length };
  }
  const w = a.length - h[0].length, u = `${h[0].startsWith(" ") ? " " : ""}/${l} `, p = `${a.slice(0, w)}${u}`;
  return {
    value: `${p}${c}`,
    cursor: p.length
  };
}, ns = (t, n, s, l) => {
  const a = t.slice(0, n), c = t.slice(s), h = a.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const m = `@${l} `;
    return { value: `${a}${m}${c}`, cursor: a.length + m.length };
  }
  const w = a.length - h[0].length, u = `${h[0].startsWith(" ") ? " " : ""}@${l} `, p = `${a.slice(0, w)}${u}`;
  return {
    value: `${p}${c}`,
    cursor: p.length
  };
}, ua = [], as = [], ur = ({
  onSend: t,
  disabled: n,
  isStreaming: s = !1,
  onCancel: l,
  leadingControls: a,
  skillOptions: c = la,
  fileOptions: h = ua,
  uploadAccept: w,
  validateUploadFile: d,
  onUploadValidationError: u
}) => {
  const [p, m] = y(""), [T, M] = y(!1), [j, z] = y(!1), [B, q] = y(""), [O, R] = y(-1), [A, X] = y(!1), [V, I] = y(""), [S, G] = y(-1), [x, U] = y([]), [re, ne] = y([]), [C, L] = y([]), [P, b] = y(!1), f = me(null), K = me(null), ce = pr(), ve = me([]), Q = s && !!l;
  ge(() => {
    ve.current = x;
  }, [x]), ge(() => () => {
    ve.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const N = be(() => {
    const i = B.trim().toLowerCase();
    return i ? c.filter((g) => `${g.id} ${g.description} ${g.source}`.toLowerCase().includes(i)) : c;
  }, [c, B]), D = be(() => {
    const i = V.trim().toLowerCase();
    return i ? h.filter((g) => `${g.name} ${g.projectName} ${g.sourceType} ${g.operatorName ?? ""} ${g.operatedAt ?? ""}`.toLowerCase().includes(i)) : h.filter((g) => g.isRecent).slice(0, 10);
  }, [h, V]), F = Ae((i, g) => {
    const se = g ?? i.length, he = ca(i, se);
    if (he !== null) {
      z(!0), q(he), R(-1), X(!1), I(""), G(-1);
      return;
    }
    const ee = da(i, se);
    if (ee !== null) {
      X(!0), I(ee), G(-1), z(!1), q(""), R(-1);
      return;
    }
    z(!1), q(""), R(-1), X(!1), I(""), G(-1);
  }, []), Te = Ae((i) => {
    if (i.disabled) return;
    const g = f.current, se = (g == null ? void 0 : g.selectionStart) ?? p.length, he = (g == null ? void 0 : g.selectionEnd) ?? se, ee = p.slice(0, se), de = p.slice(he), pe = (() => {
      const ue = ee.match(/(?:^|\s)\/[^\s/]*$/);
      if (!ue)
        return { value: p, cursor: se };
      const fe = ee.length - ue[0].length, xe = ue[0].startsWith(" ") ? " " : "", W = `${ee.slice(0, fe)}${xe}`;
      return {
        value: `${W}${de}`,
        cursor: W.length
      };
    })();
    ne((ue) => {
      const fe = `skill-${i.id}`;
      return ue.some((xe) => xe.id === fe) ? ue : [...ue, { id: fe, type: "skill", label: i.id, sourceId: i.id }];
    }), m(pe.value), z(!1), q(""), R(-1), requestAnimationFrame(() => {
      g && (g.focus(), g.setSelectionRange(pe.cursor, pe.cursor));
    });
  }, [p]), ye = Ae((i) => {
    const g = f.current, se = (g == null ? void 0 : g.selectionStart) ?? p.length, he = (g == null ? void 0 : g.selectionEnd) ?? se, ee = p.slice(0, se), de = p.slice(he), pe = (() => {
      const ue = ee.match(/(?:^|\s)@[^\s@]*$/);
      if (!ue)
        return { value: p, cursor: se };
      const fe = ee.length - ue[0].length, xe = ue[0].startsWith(" ") ? " " : "", W = `${ee.slice(0, fe)}${xe}`;
      return {
        value: `${W}${de}`,
        cursor: W.length
      };
    })();
    L((ue) => {
      const fe = `doc-${i.id}`;
      return ue.some((xe) => xe.id === fe) ? ue : [...ue, { id: fe, type: "doc", label: i.name, sourceId: i.id }];
    }), m(pe.value), X(!1), I(""), G(-1), requestAnimationFrame(() => {
      g && (g.focus(), g.setSelectionRange(pe.cursor, pe.cursor));
    });
  }, [p]), Pe = Ae(() => {
    b(!1);
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
  }, []), $e = Ae((i) => {
    const g = Array.from(i.target.files ?? []);
    if (g.length === 0) return;
    const se = g.filter((he) => {
      const ee = d == null ? void 0 : d(he);
      return ee ? (u == null || u(ee), !1) : !0;
    });
    U((he) => {
      const ee = new Set(he.map((pe) => pe.id)), de = [...he];
      return se.forEach((pe) => {
        if (pe.size > aa || de.length >= na) return;
        const ue = `${pe.name}-${pe.size}-${pe.lastModified}`;
        if (ee.has(ue)) return;
        const fe = pe.type.startsWith("image/");
        ee.add(ue), de.push({
          id: ue,
          name: pe.name,
          mimeType: pe.type || "application/octet-stream",
          previewUrl: fe ? URL.createObjectURL(pe) : void 0,
          file: pe
        });
      }), de;
    }), i.target.value = "";
  }, [u, d]), Z = Ae((i) => {
    U((g) => {
      const se = g.find((he) => he.id === i);
      return se != null && se.previewUrl && URL.revokeObjectURL(se.previewUrl), g.filter((he) => he.id !== i);
    });
  }, []), ae = Ae((i) => {
    ne((g) => g.filter((se) => se.id !== i));
  }, []), Y = Ae((i) => {
    L((g) => g.filter((se) => se.id !== i));
  }, []), E = Ae(() => {
    !p.trim() || n || (t({
      content: p,
      attachments: x.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...re, ...C]
    }), m(""), U([]), ne([]), L([]), z(!1), q(""), R(-1), X(!1), I(""), G(-1));
  }, [p, n, t, x, C, re]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: ce,
        ref: K,
        type: "file",
        multiple: !0,
        accept: w,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: $e
      }
    ),
    (x.length > 0 || re.length > 0 || C.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      re.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Xt, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => ae(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(nt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      C.map((i) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Gt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: i.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Y(i.id),
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
            i.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: i.previewUrl, alt: i.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Yt, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
        ref: f,
        value: p,
        onChange: (i) => {
          const g = i.target.value;
          m(g), F(g, i.target.selectionStart);
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
            const g = i.currentTarget, se = g.selectionStart ?? p.length, he = g.selectionEnd ?? se, ee = `${p.slice(0, se)}
${p.slice(he)}`, de = se + 1;
            m(ee), F(ee, de), requestAnimationFrame(() => {
              g.setSelectionRange(de, de);
            });
            return;
          }
          if (j) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), R((g) => N.length === 0 ? -1 : g < 0 ? 0 : (g + 1) % N.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), R((g) => N.length === 0 ? -1 : g < 0 ? N.length - 1 : (g - 1 + N.length) % N.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), z(!1), q(""), R(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const g = O >= 0 ? N[O] : void 0;
              g && Te(g);
              return;
            }
          }
          if (A) {
            if (i.key === "ArrowDown") {
              i.preventDefault(), G((g) => D.length === 0 ? -1 : g < 0 ? 0 : (g + 1) % D.length);
              return;
            }
            if (i.key === "ArrowUp") {
              i.preventDefault(), G((g) => D.length === 0 ? -1 : g < 0 ? D.length - 1 : (g - 1 + D.length) % D.length);
              return;
            }
            if (i.key === "Escape") {
              i.preventDefault(), X(!1), I(""), G(-1);
              return;
            }
            if (i.key === "Enter" && !i.shiftKey) {
              i.preventDefault();
              const g = S >= 0 ? D[S] : void 0;
              g && ye(g);
              return;
            }
          }
          i.key === "Enter" && !i.shiftKey && (i.preventDefault(), E());
        },
        disabled: n,
        onFocus: () => M(!0),
        onBlur: () => {
          M(!1), z(!1), X(!1);
        },
        placeholder: T ? sa : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${x.length > 0 || re.length > 0 || C.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    j && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Qe, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: B ? `搜索 skill：${B}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: N.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : N.map((i, g) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : g === O ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Te(i),
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
    A && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Qe, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: V ? `搜索文件：${V}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !V && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(xt, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        D.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : D.map((i, g) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${g === S ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => ye(i),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(ft, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: i.name }),
              !V && i.operatorName && i.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${i.operatorName} ${i.operatedAt}` })
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
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Pe,
                  "aria-controls": ce,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(rr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${P ? "block" : "hidden"}`,
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
          onClick: Q ? l : E,
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
je.memo(ur);
const ma = ({ messages: t, isTyping: n, statusPhase: s = "thinking", searchSteps: l = [] }) => {
  const a = me(null);
  ge(() => {
    var h;
    (h = a.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const c = be(() => t.map((h, w) => /* @__PURE__ */ e(Vn, { msg: h }, `${w}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    c,
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
], mr = ({ onSelect: t, prompts: n = pa, disabled: s = !1 }) => {
  const l = Ae((a) => {
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
je.memo(mr);
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
  const l = me(null), a = me(null), [c, h] = y(""), [w, d] = y(""), [u, p] = y(!0), [m, T] = y(!1), [M, j] = y(!1), [z, B] = y(null), q = me(null), [O, R] = y(!1), [A, X] = y("email"), [V, I] = y(""), [S, G] = y(""), [x, U] = y(""), [re, ne] = y(""), [C, L] = y(0), [P, b] = y(!1), f = be(() => c.trim().length > 0 && w.trim().length > 0 && !m, [
    c,
    m,
    w
  ]);
  ge(() => {
    if (C <= 0) return;
    const N = window.setTimeout(() => L((D) => D - 1), 1e3);
    return () => clearTimeout(N);
  }, [C]), ge(
    () => () => {
      q.current !== null && window.clearTimeout(q.current);
    },
    []
  ), ge(() => {
    const N = l.current, D = a.current;
    if (!N || !D) return;
    const F = N.getContext("2d");
    if (!F) return;
    const Te = window.getComputedStyle(document.documentElement), ye = Te.getPropertyValue("--chatui-color-auth-particle-active").trim(), Pe = Te.getPropertyValue("--chatui-color-auth-particle-idle").trim(), $e = Te.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Z = 0, ae = 0, Y = 0, E = window.devicePixelRatio || 1, i = [];
    const g = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, se = 150, he = () => {
      const xe = D.getBoundingClientRect();
      E = window.devicePixelRatio || 1, ae = xe.width, Y = xe.height, N.width = ae * E, N.height = Y * E, N.style.width = `${ae}px`, N.style.height = `${Y}px`, F.setTransform(E, 0, 0, E, 0, 0);
      const W = ae < 768 ? 40 : 90;
      i = Array.from({ length: W }, () => ha(ae, Y));
    }, ee = (xe) => {
      F.beginPath(), F.arc(xe.x, xe.y, xe.size, 0, Math.PI * 2), F.closePath(), F.fill();
    }, de = () => {
      F.clearRect(0, 0, ae, Y);
      for (let xe = 0; xe < i.length; xe += 1) {
        const W = i[xe];
        W.x += W.vx, W.y += W.vy, (W.x < 0 || W.x > ae) && (W.vx = -W.vx), (W.y < 0 || W.y > Y) && (W.vy = -W.vy);
        const Ve = g.x - W.x, qe = g.y - W.y, v = Math.sqrt(Ve * Ve + qe * qe) || 1, k = Ve / v, J = qe / v, _ = (g.radius - v) / g.radius, $ = k * _ * W.density, we = J * _ * W.density;
        if (v < g.radius)
          W.x -= $ * 0.5, W.y -= we * 0.5, F.fillStyle = ye, W.size = Math.min(W.size + 0.1, 2.5);
        else {
          if (W.x !== W.baseX) {
            const Ce = W.x - W.baseX;
            W.x -= Ce / 50;
          }
          if (W.y !== W.baseY) {
            const Ce = W.y - W.baseY;
            W.y -= Ce / 50;
          }
          F.fillStyle = Pe, W.size = Math.max(W.size - 0.05, 1);
        }
        ee(W);
        for (let Ce = xe; Ce < i.length; Ce += 1) {
          const Se = i[Ce], Be = W.x - Se.x, He = W.y - Se.y, Ne = Math.sqrt(Be * Be + He * He);
          if (Ne < se) {
            const ie = (1 - Ne / se) * 0.4;
            F.beginPath(), F.strokeStyle = $e, F.globalAlpha = ie, F.lineWidth = 1, F.moveTo(W.x, W.y), F.lineTo(Se.x, Se.y), F.stroke(), F.globalAlpha = 1, F.closePath();
          }
        }
      }
      Z = window.requestAnimationFrame(de);
    }, pe = (xe) => {
      const W = D.getBoundingClientRect();
      g.x = xe.clientX - W.left, g.y = xe.clientY - W.top;
    }, ue = () => {
      g.x = -1e3, g.y = -1e3;
    }, fe = (xe) => {
      if (xe.touches.length < 1) return;
      const W = D.getBoundingClientRect();
      g.x = xe.touches[0].clientX - W.left, g.y = xe.touches[0].clientY - W.top;
    };
    return he(), de(), window.addEventListener("resize", he), D.addEventListener("mousemove", pe), D.addEventListener("mouseleave", ue), D.addEventListener("touchmove", fe, { passive: !0 }), D.addEventListener("touchend", ue), () => {
      window.cancelAnimationFrame(Z), window.removeEventListener("resize", he), D.removeEventListener("mousemove", pe), D.removeEventListener("mouseleave", ue), D.removeEventListener("touchmove", fe), D.removeEventListener("touchend", ue);
    };
  }, []);
  const K = async (N) => {
    if (N.preventDefault(), !!f) {
      T(!0), B(null);
      try {
        const D = await t({ email: c.trim(), password: w, rememberLogin: u });
        if (!D.ok) {
          B(D.message);
          return;
        }
        j(!0), q.current = window.setTimeout(() => {
          j(!1), n();
        }, 900);
      } catch {
        B("登录失败，请稍后重试。");
      } finally {
        T(!1);
      }
    }
  }, ce = async () => {
    !V.trim() || C > 0 || (T(!0), await new Promise((N) => window.setTimeout(N, 1e3)), T(!1), b(!0), L(60));
  }, ve = async () => {
    if (A === "email") {
      if (!V.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V) || !S.trim() || S.length < 6 || !x.trim() || x.length < 6 || x !== re) return;
      X("success");
    }
  }, Q = () => {
    R(!1), X("email"), I(""), G(""), U(""), ne(""), L(0), b(!1);
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
      /* @__PURE__ */ r("form", { onSubmit: K, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: c,
              onChange: (N) => {
                h(N.target.value), B(null);
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
              value: w,
              onChange: (N) => {
                d(N.target.value), B(null);
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
                  checked: u,
                  onChange: (N) => p(N.target.checked),
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
            disabled: !f,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: m ? "认证中..." : "登录" }),
              m && /* @__PURE__ */ r(
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
      !O && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
      O && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: Q,
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
                onChange: (N) => I(N.target.value),
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
                  value: S,
                  onChange: (N) => G(N.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: ce,
                disabled: C > 0 || m || !V.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${C > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: C > 0 ? `${C}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (N) => U(N.target.value),
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
                onChange: (N) => ne(N.target.value),
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
              disabled: !V.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V) || !S.trim() || S.length < 6 || !x.trim() || x.length < 6 || x !== re,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        A === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${M ? "opacity-100" : "opacity-0"}`,
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
  onNavigate: c
}) {
  const h = me(null), w = me(null), d = me(null), [u, p] = y("identity"), [m, T] = y(""), [M, j] = y(""), [z, B] = y(""), [q, O] = y(""), [R, A] = y(""), [X, V] = y(""), I = t === "create-lab", [S, G] = y(""), [x, U] = y(""), [re, ne] = y(!1), [C, L] = y(0), [P, b] = y(""), [f, K] = y(null), ce = S.length > 0 && S.trim().length < 6;
  ge(() => {
    if (C <= 0) return;
    const Z = window.setTimeout(() => L((ae) => ae - 1), 1e3);
    return () => clearTimeout(Z);
  }, [C]), ge(
    () => () => {
      d.current !== null && window.clearTimeout(d.current);
    },
    []
  ), ge(() => {
    const Z = h.current, ae = w.current;
    if (!Z || !ae) return;
    const Y = Z.getContext("2d");
    if (!Y) return;
    const E = window.getComputedStyle(document.documentElement), i = E.getPropertyValue("--chatui-color-auth-particle-active").trim(), g = E.getPropertyValue("--chatui-color-auth-particle-idle").trim(), se = E.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let he = 0, ee = 0, de = 0, pe = window.devicePixelRatio || 1, ue = [];
    const fe = { x: -1e3, y: -1e3, radius: 120 }, xe = 150, W = () => {
      const _ = ae.getBoundingClientRect();
      pe = window.devicePixelRatio || 1, ee = _.width, de = _.height, Z.width = ee * pe, Z.height = de * pe, Z.style.width = `${ee}px`, Z.style.height = `${de}px`, Y.setTransform(pe, 0, 0, pe, 0, 0);
      const $ = ee < 768 ? 40 : 90;
      ue = Array.from({ length: $ }, () => fa(ee, de));
    }, Ve = (_) => {
      Y.beginPath(), Y.arc(_.x, _.y, _.size, 0, Math.PI * 2), Y.closePath(), Y.fill();
    }, qe = () => {
      Y.clearRect(0, 0, ee, de);
      for (let _ = 0; _ < ue.length; _ += 1) {
        const $ = ue[_];
        $.x += $.vx, $.y += $.vy, ($.x < 0 || $.x > ee) && ($.vx = -$.vx), ($.y < 0 || $.y > de) && ($.vy = -$.vy);
        const we = fe.x - $.x, Ce = fe.y - $.y, Se = Math.sqrt(we * we + Ce * Ce) || 1, Be = we / Se, He = Ce / Se, Ne = (fe.radius - Se) / fe.radius, ie = Be * Ne * $.density, oe = He * Ne * $.density;
        Se < fe.radius ? ($.x -= ie * 0.5, $.y -= oe * 0.5, Y.fillStyle = i, $.size = Math.min($.size + 0.1, 2.5)) : ($.x !== $.baseX && ($.x -= ($.x - $.baseX) / 50), $.y !== $.baseY && ($.y -= ($.y - $.baseY) / 50), Y.fillStyle = g, $.size = Math.max($.size - 0.05, 1)), Ve($);
        for (let Re = _; Re < ue.length; Re += 1) {
          const ke = ue[Re], Me = $.x - ke.x, Le = $.y - ke.y, ze = Math.sqrt(Me * Me + Le * Le);
          if (ze < xe) {
            const _e = (1 - ze / xe) * 0.4;
            Y.beginPath(), Y.strokeStyle = se, Y.globalAlpha = _e, Y.lineWidth = 1, Y.moveTo($.x, $.y), Y.lineTo(ke.x, ke.y), Y.stroke(), Y.globalAlpha = 1, Y.closePath();
          }
        }
      }
      he = window.requestAnimationFrame(qe);
    }, v = (_) => {
      const $ = ae.getBoundingClientRect();
      fe.x = _.clientX - $.left, fe.y = _.clientY - $.top;
    }, k = () => {
      fe.x = -1e3, fe.y = -1e3;
    }, J = (_) => {
      if (_.touches.length < 1) return;
      const $ = ae.getBoundingClientRect();
      fe.x = _.touches[0].clientX - $.left, fe.y = _.touches[0].clientY - $.top;
    };
    return W(), qe(), window.addEventListener("resize", W), ae.addEventListener("mousemove", v), ae.addEventListener("mouseleave", k), ae.addEventListener("touchmove", J, { passive: !0 }), ae.addEventListener("touchend", k), () => {
      window.cancelAnimationFrame(he), window.removeEventListener("resize", W), ae.removeEventListener("mousemove", v), ae.removeEventListener("mouseleave", k), ae.removeEventListener("touchmove", J), ae.removeEventListener("touchend", k);
    };
  }, []);
  const ve = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(z) || C > 0)) {
      ne(!0), K(null);
      try {
        const Z = await n(z);
        if (!Z.ok) {
          K(Z);
          return;
        }
        L(Z.resendAfterSeconds ?? 60), b(Z.message ?? "短信验证码已发送");
      } catch {
        K({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ne(!1);
      }
    }
  }, Q = () => ({
    email: m.trim(),
    name: M.trim(),
    phoneNumber: z,
    phoneVerificationCode: q.trim(),
    mode: t,
    ...I ? { labName: X.trim() } : { inviteCode: R.trim() }
  }), N = () => {
    const Z = ["identity", "password", "success"], ae = Z.indexOf(u);
    ae < Z.length - 1 && p(Z[ae + 1]);
  }, D = be(() => {
    if (re) return !1;
    switch (u) {
      case "identity":
        return I ? m.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) && M.trim().length > 0 && /^1[3-9]\d{9}$/.test(z) && q.length === 6 && X.trim().length > 0 : m.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) && M.trim().length > 0 && /^1[3-9]\d{9}$/.test(z) && q.length === 6 && R.trim().length > 0;
      case "password":
        return S.trim().length >= 6 && S === x;
      default:
        return !1;
    }
  }, [u, m, M, z, q, R, X, I, S, x, re]), F = async (Z) => {
    if (Z.preventDefault(), !!D) {
      ne(!0), K(null);
      try {
        const ae = Q(), Y = u === "password" ? await l({ ...ae, password: S }) : await s(ae);
        if (!Y.ok) {
          K(Y);
          return;
        }
        N();
      } catch {
        K({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        ne(!1);
      }
    }
  }, Te = {
    identity: I ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, ye = {
    identity: "",
    password: "",
    success: ""
  }, Pe = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", $e = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
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
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Te[u] }),
        ye[u] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: ye[u] })
      ] }),
      u !== "success" && /* @__PURE__ */ r("form", { onSubmit: F, className: "space-y-5", children: [
        u === "identity" && /* @__PURE__ */ r(Ue, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: m,
                onChange: (Z) => {
                  T(Z.target.value), K(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Pe
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: M,
                onChange: (Z) => {
                  j(Z.target.value), K(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Pe
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
                    B(Z.target.value.replace(/\D/g, "").slice(0, 11)), b(""), K(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Pe
                }
              ),
              /* @__PURE__ */ e("span", { className: $e, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ve,
                disabled: C > 0 || re || !/^1[3-9]\d{9}$/.test(z),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${C > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: C > 0 ? `${C}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                value: q,
                onChange: (Z) => {
                  O(Z.target.value.replace(/\D/g, "").slice(0, 6)), K(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Pe
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "短信验证码" })
          ] }),
          P && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: P }),
          I ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: X,
                onChange: (Z) => {
                  V(Z.target.value), K(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Pe
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: R,
                onChange: (Z) => {
                  A(Z.target.value), K(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Pe
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "邀请码" })
          ] })
        ] }),
        u === "password" && /* @__PURE__ */ r(Ue, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: S,
                onChange: (Z) => {
                  G(Z.target.value), K(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Pe} ${(f == null ? void 0 : f.field) === "password" || ce ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "设置密码" }),
            ((f == null ? void 0 : f.field) === "password" || ce) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (f == null ? void 0 : f.field) === "password" ? f.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: x,
                onChange: (Z) => {
                  U(Z.target.value), K(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Pe} ${x.length > 0 && S !== x ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: $e, children: "确认密码" }),
            x.length > 0 && S !== x && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        f && f.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: f.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !D,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: re ? "处理中..." : u === "password" ? "完成注册" : "下一步" }),
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
      u === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
      u !== "success" && /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
        "已有账号？",
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => c("/login"),
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
  const l = me(null), a = me(null), c = me(null), [h, w] = y("phone"), [d, u] = y(""), [p, m] = y(""), [T, M] = y(""), [j, z] = y(""), [B, q] = y(!1), [O, R] = y(0), [A, X] = y(""), [V, I] = y(null);
  ge(() => {
    if (O <= 0) return;
    const C = window.setTimeout(() => R((L) => L - 1), 1e3);
    return () => window.clearTimeout(C);
  }, [O]), ge(() => {
    const C = l.current, L = a.current;
    if (!C || !L) return;
    const P = C.getContext("2d");
    if (!P) return;
    const b = window.getComputedStyle(document.documentElement), f = b.getPropertyValue("--chatui-color-auth-particle-active").trim(), K = b.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ce = b.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ve = 0, Q = 0, N = 0, D = [];
    const F = { x: -1e3, y: -1e3, radius: 120 }, Te = 150, ye = () => {
      const Y = L.getBoundingClientRect(), E = window.devicePixelRatio || 1;
      Q = Y.width, N = Y.height, C.width = Q * E, C.height = N * E, C.style.width = `${Q}px`, C.style.height = `${N}px`, P.setTransform(E, 0, 0, E, 0, 0), D = Array.from({ length: Q < 768 ? 40 : 90 }, () => xa(Q, N));
    }, Pe = () => {
      P.clearRect(0, 0, Q, N);
      for (let Y = 0; Y < D.length; Y += 1) {
        const E = D[Y];
        E.x += E.vx, E.y += E.vy, (E.x < 0 || E.x > Q) && (E.vx = -E.vx), (E.y < 0 || E.y > N) && (E.vy = -E.vy);
        const i = F.x - E.x, g = F.y - E.y, se = Math.sqrt(i * i + g * g) || 1, he = (F.radius - se) / F.radius;
        se < F.radius ? (E.x -= i / se * he * E.density * 0.5, E.y -= g / se * he * E.density * 0.5, P.fillStyle = f, E.size = Math.min(E.size + 0.1, 2.5)) : (E.x -= (E.x - E.baseX) / 50, E.y -= (E.y - E.baseY) / 50, P.fillStyle = K, E.size = Math.max(E.size - 0.05, 1)), P.beginPath(), P.arc(E.x, E.y, E.size, 0, Math.PI * 2), P.fill();
        for (let ee = Y; ee < D.length; ee += 1) {
          const de = D[ee], pe = E.x - de.x, ue = E.y - de.y, fe = Math.sqrt(pe * pe + ue * ue);
          fe >= Te || (P.beginPath(), P.globalAlpha = (1 - fe / Te) * 0.4, P.strokeStyle = ce, P.lineWidth = 1, P.moveTo(E.x, E.y), P.lineTo(de.x, de.y), P.stroke(), P.globalAlpha = 1);
        }
      }
      ve = window.requestAnimationFrame(Pe);
    }, $e = (Y) => {
      const E = L.getBoundingClientRect();
      F.x = Y.clientX - E.left, F.y = Y.clientY - E.top;
    }, Z = (Y) => {
      if (!Y.touches.length) return;
      const E = L.getBoundingClientRect();
      F.x = Y.touches[0].clientX - E.left, F.y = Y.touches[0].clientY - E.top;
    }, ae = () => {
      F.x = -1e3, F.y = -1e3;
    };
    return ye(), Pe(), window.addEventListener("resize", ye), L.addEventListener("mousemove", $e), L.addEventListener("mouseleave", ae), L.addEventListener("touchmove", Z, { passive: !0 }), L.addEventListener("touchend", ae), () => {
      window.cancelAnimationFrame(ve), window.removeEventListener("resize", ye), L.removeEventListener("mousemove", $e), L.removeEventListener("mouseleave", ae), L.removeEventListener("touchmove", Z), L.removeEventListener("touchend", ae);
    };
  }, []), ge(() => () => {
    c.current !== null && window.clearTimeout(c.current);
  }, []);
  const S = be(() => /^1[3-9]\d{9}$/.test(d) && p.length === 6 && T.length >= 6 && T === j, [j, T, d, p]), G = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", x = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: a, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(Ue, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (C) => {
          if (C.preventDefault(), !(!S || B)) {
            q(!0), I(null);
            try {
              const L = await n({ phoneNumber: d, phoneVerificationCode: p, newPassword: T });
              if (!L.ok) {
                I(L.message);
                return;
              }
              w("success");
            } catch {
              I("密码重置失败，请稍后重试。");
            } finally {
              q(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: d, onChange: (C) => {
                u(C.target.value.replace(/\D/g, "").slice(0, 11)), X(""), I(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: G }),
              /* @__PURE__ */ e("span", { className: x, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(d) || O > 0 || B)) {
                q(!0), I(null);
                try {
                  const C = await t(d);
                  if (!C.ok) {
                    I(C.message);
                    return;
                  }
                  R(C.resendAfterSeconds ?? 60), X(C.message ?? "短信验证码已发送");
                } catch {
                  I("验证码发送失败，请稍后重试。");
                } finally {
                  q(!1);
                }
              }
            }, disabled: O > 0 || B || !/^1[3-9]\d{9}$/.test(d), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${O > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: O > 0 ? `${O}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: p, onChange: (C) => {
              m(C.target.value.replace(/\D/g, "").slice(0, 6)), I(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: G }),
            /* @__PURE__ */ e("span", { className: x, children: "短信验证码" })
          ] }),
          A && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: A }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: T, onChange: (C) => {
              M(C.target.value), I(null);
            }, required: !0, placeholder: " ", className: G }),
            /* @__PURE__ */ e("span", { className: x, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: j, onChange: (C) => {
              z(C.target.value), I(null);
            }, required: !0, placeholder: " ", className: `${G} ${j.length > 0 && T !== j ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: x, children: "确认新密码" }),
            j.length > 0 && T !== j && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          V && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: V }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !S || B, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: B ? "处理中..." : "重置密码" }),
            B && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          c.current = window.setTimeout(() => s({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const Ht = 10, qt = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function os({
  currentPath: t,
  projects: n,
  initialChats: s,
  logoUrl: l,
  user: a,
  children: c,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: w,
  canViewAiUsage: d = !0,
  canManageMembers: u = !0,
  chatActions: p = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: m,
  onLogout: T,
  onChatsChange: M,
  onRenameChat: j,
  onTogglePinChat: z,
  onShareChat: B,
  onDeleteChat: q
}) {
  const [O, R] = y(!0), [A, X] = y(240), [V, I] = y(!1), S = me(0), G = me(240), [x, U] = y(() => {
    const o = { unassigned: !0 };
    return n.forEach((H) => {
      o[H.id] = !0;
    }), o;
  }), [re, ne] = y(!1), [C, L] = y(() => [...s]), [P, b] = y(null), [f, K] = y("time"), [ce, ve] = y(!1), [Q, N] = y(null), [D, F] = y(""), [Te, ye] = y(!1), [Pe, $e] = y(""), [Z, ae] = y(!1), [Y, E] = y(h), [i, g] = y(!1), se = w ?? Y, he = me(null), ee = me(null), de = me(null), pe = !!(p.rename || p.share || p.pin || p.delete), ue = () => {
    ne(!1), T();
  }, fe = (o) => {
    U((H) => ({ ...H, [o]: !H[o] }));
  }, xe = (o) => {
    var le;
    L((te) => te.filter((De) => De.id !== o)), b(null), Q === o && (N(null), F("")), q == null || q(o), ((le = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : le[1]) === o && m("/chat/new", { replace: !0 });
  }, W = (o) => {
    const H = C.find((te) => te.id === o);
    if (!H) return;
    const le = !H.isPinned;
    L((te) => te.map(
      (Oe) => Oe.id === o ? { ...Oe, isPinned: le } : Oe
    )), z == null || z(o, le), b(null);
  }, Ve = (o) => {
    N(o.id), F(o.title), b(null);
  }, qe = () => {
    N(null), F("");
  }, v = (o) => {
    const H = D.trim();
    H && (L((le) => le.map((te) => te.id === o ? { ...te, title: H } : te)), j == null || j(o, H)), qe();
  }, k = (o, H) => {
    if (o.stopPropagation(), o.key === "Enter") {
      o.preventDefault(), v(H);
      return;
    }
    o.key === "Escape" && (o.preventDefault(), qe());
  }, J = (o) => {
    var H;
    if (Q === o) {
      (H = he.current) == null || H.focus();
      return;
    }
    m(`/chat/${o}`);
  }, _ = (o, H = !1) => Q === o.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (te) => {
        var De;
        te.stopPropagation(), (De = he.current) == null || De.focus();
      },
      children: [
        H && /* @__PURE__ */ e(vt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: he,
            value: D,
            onChange: (te) => F(te.target.value),
            onKeyDown: (te) => k(te, o.id),
            onBlur: () => v(o.id),
            onClick: (te) => te.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    H && /* @__PURE__ */ e(vt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: o.title })
  ] }), $ = (o) => {
    S.current = o.clientX, G.current = A, I(!0);
  };
  ge(() => {
    if (!V) return;
    const o = 200, H = 440, le = (De) => {
      const Oe = De.clientX - S.current, Je = Math.min(H, Math.max(o, G.current + Oe));
      X(Je);
    }, te = () => {
      I(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", le), window.addEventListener("mouseup", te), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", le), window.removeEventListener("mouseup", te);
    };
  }, [V, A]), ge(() => {
    O || X(240);
  }, [O]), ge(() => {
    M == null || M(C);
  }, [C, M]), ge(() => {
    L([...s]);
  }, [s]), ge(() => {
    if (!Q) return;
    const o = window.requestAnimationFrame(() => {
      var H;
      (H = he.current) == null || H.focus();
    });
    return () => {
      window.cancelAnimationFrame(o);
    };
  }, [Q]), ge(() => () => {
    ee.current !== null && window.clearTimeout(ee.current), de.current !== null && window.clearTimeout(de.current);
  }, []);
  const we = () => {
    ve(!0), ee.current !== null && window.clearTimeout(ee.current), ee.current = window.setTimeout(() => {
      ve(!1);
    }, 600);
  }, Ce = () => {
    ae(!0), de.current !== null && window.clearTimeout(de.current), de.current = window.setTimeout(() => {
      ae(!1);
    }, 600);
  };
  ge(() => {
    se || g(!1);
  }, [se]);
  const Se = () => {
    g(!0), m("/ai-usage");
  }, Be = be(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...d ? [{
      key: "ai-usage",
      label: "AI用量"
    }] : [],
    ...u ? [{
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
  ], [u, d]), He = (o) => {
    if (ne(!1), o.key === "skills") {
      m("/skills");
      return;
    }
    if (o.key === "ai-usage") {
      m("/ai-usage");
      return;
    }
    if (o.key === "members") {
      m("/members");
      return;
    }
    if (o.key === "system-settings") {
      m("/system-settings");
      return;
    }
    o.key === "logout" && ue();
  }, Ne = be(() => p.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(tr, { size: 14 }), danger: !0 }] : [], [p.delete]), ie = (o) => {
    const H = [];
    return p.rename && H.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(Ir, { size: 14 }) }), p.share && H.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(Rr, { size: 14 }) }), p.pin && H.push({
      key: "pin",
      label: o.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(vt, { size: 14 })
    }), H;
  }, oe = (o, H) => {
    const le = qt(o);
    return !pe && !le ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${le ? "ml-6" : "ml-2"}`, children: [
      le && !H && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      pe && /* @__PURE__ */ e(
        mt,
        {
          open: H,
          onOpenChange: (te) => b(te ? o.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, A - 56)),
          trigger: /* @__PURE__ */ e(Br, { size: 14 }),
          onTriggerClick: (te) => {
            te.stopPropagation();
          },
          items: ie(o),
          footerItems: Ne,
          onItemClick: (te, De) => {
            if (De.stopPropagation(), te.key === "rename") {
              Ve(o);
              return;
            }
            if (te.key === "share") {
              B ? B(o.id) : m(`/chat/${o.id}?share=1`), b(null);
              return;
            }
            if (te.key === "pin") {
              W(o.id);
              return;
            }
            if (te.key === "delete") {
              xe(o.id);
              return;
            }
            b(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${H ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Re = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(yt, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(xt, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], ke = be(() => {
    const o = t.match(/^\/chat\/([^/]+)$/);
    return o ? C.find((H) => H.id === o[1]) ?? null : null;
  }, [C, t]), Me = be(
    () => C.filter((o) => o.isPinned),
    [C]
  ), Le = be(
    () => C.filter((o) => !o.isPinned),
    [C]
  ), ze = be(
    () => f === "time" ? Me.slice(0, Ht) : Me,
    [Me, f]
  ), _e = be(() => {
    if (f !== "time") return [];
    const o = Math.max(Ht - ze.length, 0);
    return Le.slice(0, o);
  }, [f, Le, ze.length]), Ze = be(
    () => ze.length + _e.length,
    [ze.length, _e.length]
  ), We = f === "time" && C.length > Ze, Ke = be(() => new Map(n.map((o) => [o.id, o.name])), [n]), tt = Pe.trim().toLowerCase(), bt = be(() => tt ? C.filter((o) => {
    const H = o.projectId ? Ke.get(o.projectId) ?? "未分组" : "未分组";
    return `${o.title} ${H} ${o.date}`.toLowerCase().includes(tt);
  }) : C, [C, tt, Ke]);
  ge(() => {
    if (!ke) return;
    const o = ke.projectId ?? "unassigned";
    U((H) => H[o] !== !1 ? H : { ...H, [o]: !0 });
  }, [ke]);
  const gt = () => {
    $e(""), ye(!0);
  }, rt = () => {
    ye(!1), ae(!1), de.current !== null && (window.clearTimeout(de.current), de.current = null);
  }, st = (o) => {
    ye(!1), m(`/chat/${o}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: O ? A : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${O ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: A, minWidth: A },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => m("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: l, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => R(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Ar, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => m("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(Pr, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Re.map((o) => {
                  const H = o.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => m(o.path),
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
                    onScroll: we,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ce ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      ze.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: ze.map((o) => {
                          const H = t === `/chat/${o.id}`, le = P === o.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => J(o.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === o.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : H ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                _(o, f !== "time"),
                                Q !== o.id && oe(o, le)
                              ]
                            }
                          ) }, o.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      f === "project" && n.map((o) => {
                        const H = C.filter((te) => te.projectId === o.id && !te.isPinned), le = x[o.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => fe(o.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: le ? /* @__PURE__ */ e(ut, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(ct, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: o.name })
                              ]
                            }
                          ),
                          le && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: H.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : H.map((te) => {
                            const De = t === `/chat/${te.id}`, Oe = P === te.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => J(te.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === te.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : De ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  _(te),
                                  Q !== te.id && oe(te, Oe)
                                ]
                              }
                            ) }, te.id);
                          }) })
                        ] }, o.id);
                      }),
                      f === "project" && (() => {
                        const o = C.filter((le) => !le.projectId && !le.isPinned);
                        if (o.length === 0) return null;
                        const H = x.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => fe("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(yt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: H ? /* @__PURE__ */ e(ut, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(ct, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          H && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: o.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : o.map((le) => {
                            const te = t === `/chat/${le.id}`, De = P === le.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => J(le.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === le.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : te ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  _(le),
                                  Q !== le.id && oe(le, De)
                                ]
                              }
                            ) }, le.id);
                          }) })
                        ] });
                      })(),
                      f === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        _e.map((o) => {
                          const H = t === `/chat/${o.id}`, le = P === o.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => J(o.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Q === o.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : H ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                _(o),
                                Q !== o.id && oe(o, le)
                              ]
                            }
                          ) }, o.id);
                        }),
                        We && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: gt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(ct, { size: 14 })
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
                      onClick: Se,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  mt,
                  {
                    open: re,
                    onOpenChange: ne,
                    placement: "top-start",
                    width: A - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: a.avatarUrl ? /* @__PURE__ */ e("img", { src: a.avatarUrl, alt: `${a.name}头像`, className: "h-full w-full object-cover" }) : a.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: a.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(_r, { size: 18 }) })
                    ] }),
                    items: Be,
                    onItemClick: He,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          O && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: $,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${O ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof c == "function" ? c({ isSidebarOpen: O, setIsSidebarOpen: R, chats: C, setChats: L, setAiUsageWarningActive: E }) : c }) }) }),
    /* @__PURE__ */ e(
      zt,
      {
        visible: Te,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: rt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Qe,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: Pe,
                onChange: (o) => $e(o.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          bt.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ce,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Z ? "is-scrolling is-scrolling-thin" : ""}`,
              children: bt.map((o) => {
                const H = o.projectId ? Ke.get(o.projectId) ?? "未分组" : "未分组", le = qt(o);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => st(o.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: o.title }),
                        le && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
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
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Lt, { description: "暂无匹配的历史对话" }) })
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
  skillOptions: c,
  fileOptions: h,
  quickPrompts: w,
  uploadAccept: d,
  validateUploadFile: u,
  onUploadValidationError: p,
  onSelectProject: m,
  onCreateProject: T,
  onOpenSidebar: M,
  onSelectQuickPrompt: j,
  onSend: z
}) {
  const [B, q] = y(!1), [O, R] = y(!1), [A, X] = y(""), V = me(null), I = me(null), S = be(
    () => t.find((L) => L.id === n) ?? null,
    [t, n]
  ), G = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !S
    },
    ...t.map((L) => ({
      key: L.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: L.name }),
      active: (S == null ? void 0 : S.id) === L.id
    }))
  ], [t, S]), x = be(() => T ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(rr, { size: 16 }) }] : [], [T]), U = () => {
    R(!1), X("");
  }, re = (L) => {
    if (L.key === "create") {
      R(!0), X("");
      return;
    }
    const P = L.key === "none" ? null : String(L.key);
    m(P), q(!1);
  }, ne = () => {
    const L = A.trim();
    if (!L) return;
    const P = t.find(
      (b) => b.name.trim().toLowerCase() === L.toLowerCase()
    );
    P ? m(P.id) : T == null || T(L), U(), q(!1);
  };
  ge(() => {
    if (!O) return;
    const L = (P) => {
      var f, K;
      const b = P.target;
      (f = I.current) != null && f.contains(b) || (K = V.current) != null && K.contains(b) || (U(), q(!1));
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [O]);
  const C = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: V, className: "relative", children: O && /* @__PURE__ */ e(
        "div",
        {
          ref: I,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                sr,
                {
                  value: A,
                  onChange: (L) => X(L.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Fe, { type: "secondary", size: "small", onClick: U, children: "取消" }),
              /* @__PURE__ */ e(
                Fe,
                {
                  type: "primary",
                  size: "small",
                  onClick: ne,
                  disabled: !A.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        ur,
        {
          onSend: z,
          disabled: s,
          skillOptions: c,
          fileOptions: h,
          uploadAccept: d,
          validateUploadFile: u,
          onUploadValidationError: p,
          leadingControls: /* @__PURE__ */ e(
            mt,
            {
              open: B,
              onOpenChange: (L) => {
                !L && O || (q(L), L ? R(!1) : U());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: S ? S.name : "工作项目" }),
                /* @__PURE__ */ e(ut, { size: 14 })
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
      mr,
      {
        onSelect: j ?? z,
        prompts: w,
        disabled: s
      }
    )
  ] });
  return l ? C : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Zn,
      {
        isSidebarOpen: a,
        onOpenSidebar: M ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: C })
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
}, Wt = (t, n) => t.replace("<svg", `<svg class="${n}"`), Ct = (t) => `
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
`, St = (t) => `chatui-document-menu-type-${t}`;
function ds({
  title: t,
  initialMarkdown: n = "",
  createdByName: s,
  updatedByName: l,
  updatedAt: a,
  index: c,
  attachments: h = [],
  attachmentAccept: w,
  attachmentUnavailableHint: d,
  saving: u = !1,
  saveError: p,
  layout: m = "page",
  showHeaderActions: T = !0,
  onTitleChange: M,
  onMarkdownChange: j,
  onUploadAttachments: z,
  onDeleteAttachment: B,
  onSave: q,
  onClose: O
}) {
  const R = me(null), A = me(null), X = me(n), V = me(j), [I, S] = y(!1), [G, x] = y(null), [U, re] = y(""), ne = m === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => {
    V.current = j;
  }, [j]), ge(() => {
    const P = R.current;
    if (!P) return;
    const b = new wt({
      root: P,
      defaultValue: X.current,
      features: {
        [wt.Feature.Placeholder]: !1
      },
      featureConfigs: {
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
          buildMenu: (v) => {
            const k = new Map(
              v.build().flatMap((Ne) => Ne.items).map((Ne) => [Ne.key, Ne])
            ), J = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), _ = (Ne) => {
              const ie = Ne.get(Nt), oe = N, ke = (oe != null && oe.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? oe : oe == null ? void 0 : oe.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (oe instanceof HTMLElement ? oe : null);
              if (!ke) return ie;
              try {
                const Me = ie.posAtDOM(ke, 0), Le = ie.state.doc.resolve(
                  Math.min(
                    Math.max(Me, 0),
                    ie.state.doc.content.size
                  )
                );
                ie.dispatch(
                  ie.state.tr.setSelection(
                    Et.near(Le)
                  )
                );
              } catch {
              }
              return ie;
            }, $ = (Ne) => {
              const ie = _(Ne), oe = kt.type(Ne), Re = (Le) => {
                const { $from: ze } = ie.state.selection;
                for (let _e = ze.depth; _e > 0; _e -= 1)
                  if (ze.node(_e).type.name === Le) return !0;
                return !1;
              };
              for (let Le = 0; Le < 10 && !(!Re(oe.name) || !Wr(oe)(
                ie.state,
                ie.dispatch
              )); Le += 1)
                ;
              for (let Le = 0; Le < 10 && !(!Re("blockquote") || !Hr(ie.state, ie.dispatch)); Le += 1)
                ;
              const ke = Kr.type(Ne), Me = ie.state.selection.$from.parent;
              Me.isTextblock && Me.type !== ke && Ne.get(Fr).call(Or.key, {
                nodeType: ke
              });
            }, we = (Ne) => {
              const ie = _(Ne), { selection: oe } = ie.state, Re = kt.type(Ne), { $from: ke } = oe;
              let Me = -1;
              for (let ze = ke.depth; ze > 0; ze -= 1)
                if (ke.node(ze).type.name === Re.name) {
                  Me = ze;
                  break;
                }
              if (Me > 0) {
                const ze = Me - 1, _e = ze > 0 && ke.node(ze).childCount === 1 ? ze : Me;
                ie.dispatch(
                  ie.state.tr.delete(
                    ke.before(_e),
                    ke.after(_e)
                  )
                );
                return;
              }
              if (!oe.empty) {
                ie.dispatch(
                  ie.state.tr.delete(oe.from, oe.to)
                );
                return;
              }
              const Le = Math.min(1, ke.depth);
              Le < 1 || ie.dispatch(
                ie.state.tr.delete(
                  ke.before(Le),
                  ke.after(Le)
                )
              );
            }, Ce = (Ne, ie, oe) => {
              const Re = k.get(ie);
              if (!Re) return;
              const { key: ke, ...Me } = Re, Le = (oe == null ? void 0 : oe.icon) ?? Me.icon, ze = [
                St(ie),
                oe == null ? void 0 : oe.iconClass
              ].filter(Boolean).join(" "), _e = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(ie), Ze = J.has(ie) ? (We) => {
                var st;
                if ($(We), !_e) {
                  if (ie === "quote") {
                    const o = We.get(Nt), { $from: H } = o.state.selection, le = H.parent, te = H.before(H.depth), De = o.state.schema.nodes.blockquote;
                    if (!De) return;
                    const Oe = De.create(null, le), Je = o.state.tr.replaceWith(
                      te,
                      te + le.nodeSize,
                      Oe
                    );
                    Je.setSelection(
                      Et.near(
                        Je.doc.resolve(
                          Math.min(
                            te + 2,
                            Je.doc.content.size
                          )
                        )
                      )
                    ), o.dispatch(Je);
                    return;
                  }
                  (st = Me.onRun) == null || st.call(Me, We);
                  return;
                }
                const Ke = We.get(Nt), tt = ie === "ordered-list" ? Ur.type(We) : Vr.type(We);
                if (!qr(tt)(
                  Ke.state,
                  Ke.dispatch
                ) || ie !== "task-list") return;
                const gt = kt.type(We), { $from: rt } = Ke.state.selection;
                for (let o = rt.depth; o > 0; o -= 1) {
                  const H = rt.node(o);
                  if (H.type !== gt) continue;
                  const le = rt.before(o);
                  Ke.dispatch(
                    Ke.state.tr.setNodeMarkup(le, void 0, {
                      ...H.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Me.onRun;
              Ne.addItem(ie, {
                ...Me,
                label: (oe == null ? void 0 : oe.label) ?? Me.label,
                icon: Wt(Le, ze),
                onRun: Ze
              });
            };
            v.clear();
            const Se = v.addGroup("basic", "基础");
            [
              {
                key: "h1",
                icon: Ct(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: Ct(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: Ct(3),
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
            ].forEach(({ key: Ne, icon: ie, label: oe }) => {
              Ce(Se, Ne, { icon: ie, label: oe });
            });
            const Be = v.addGroup("common", "常用");
            Ce(Be, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), Ce(Be, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), v.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Wt(
                $a,
                "chatui-document-menu-action-delete"
              ),
              onRun: we
            });
          }
        }
      }
    });
    b.on((v) => {
      v.markdownUpdated((k, J, _) => {
        J !== _ && V.current(J);
      });
    });
    const f = P.ownerDocument;
    let K = "", ce = null, ve = null, Q = !1, N = null, D = null, F = null, Te = null, ye = null;
    const Pe = (v) => {
      const k = v == null ? void 0 : v.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !k || !k.closest(".ProseMirror") ? null : k.matches("h1") ? "h1" : k.matches("h2") ? "h2" : k.matches("h3") ? "h3" : k.matches("blockquote") ? "quote" : k.matches("pre, .milkdown-code-block") || k.querySelector("pre, .milkdown-code-block") ? "code" : k.querySelector('input[type="checkbox"]') ? "task-list" : k.querySelector(".label.ordered") ? "ordered-list" : k.querySelector(".label.bullet") ? "bullet-list" : null;
    }, $e = () => P.querySelector(".ProseMirror"), Z = (v) => {
      const k = $e();
      if (!v || !(k != null && k.contains(v))) return null;
      const J = v.closest(".milkdown-list-item-block");
      if (J && k.contains(J)) return J;
      let _ = v;
      for (; _ != null && _.parentElement && _.parentElement !== k; )
        _ = _.parentElement;
      return !_ || _.parentElement !== k || _.classList.contains("prosemirror-virtual-cursor") ? null : _;
    }, ae = () => {
      const v = $e();
      return v ? Array.from(v.children).flatMap((k) => {
        if (k.classList.contains("prosemirror-virtual-cursor")) return [];
        const J = Array.from(
          k.querySelectorAll(".milkdown-list-item-block")
        );
        return J.length ? J : [k];
      }) : [];
    }, Y = (v) => {
      var _;
      const k = ae(), J = k.map(($) => ({ block: $, rect: $.getBoundingClientRect() })).filter(({ rect: $ }) => v >= $.top && v <= $.bottom).sort(($, we) => $.rect.height - we.rect.height);
      return J[0] ? J[0].block : ((_ = k.map(($) => {
        const we = $.getBoundingClientRect(), Ce = Math.min(
          Math.abs(v - we.top),
          Math.abs(v - we.bottom)
        );
        return { block: $, distance: Ce };
      }).sort(($, we) => $.distance - we.distance)[0]) == null ? void 0 : _.block) ?? null;
    }, E = (v) => {
      var we, Ce;
      const k = f.querySelector(
        ".milkdown-slash-menu"
      );
      k == null || k.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (Se) => Se.removeAttribute("data-chatui-selected")
      ), v && ((Ce = (we = k == null ? void 0 : k.querySelector(`svg.${St(v)}`)) == null ? void 0 : we.closest("li")) == null || Ce.setAttribute("data-chatui-selected", "true"));
      const J = f.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!J) return;
      K || (K = J.innerHTML);
      const _ = v ? k == null ? void 0 : k.querySelector(
        `svg.${St(v)}`
      ) : null, $ = v ?? "default";
      J.dataset.chatuiBlockType !== $ && (J.innerHTML = (_ == null ? void 0 : _.outerHTML) ?? K, J.dataset.chatuiBlockType = $);
    }, i = (v) => {
      v !== ve && (ve = v, ce = Pe(v)), E(ce);
    }, g = () => {
      var J;
      const v = (J = f.getSelection()) == null ? void 0 : J.anchorNode, k = v instanceof Element ? v : v == null ? void 0 : v.parentElement;
      i(Z(k ?? null));
    }, se = () => {
      const v = D, k = f.querySelector(
        ".milkdown-slash-menu"
      );
      if (!v || !k || k.dataset.show !== "true") return;
      const J = k.getBoundingClientRect();
      if (!J.width || !J.height) return;
      const _ = v.getBoundingClientRect(), $ = f.defaultView, we = ($ == null ? void 0 : $.innerWidth) ?? f.documentElement.clientWidth, Ce = ($ == null ? void 0 : $.innerHeight) ?? f.documentElement.clientHeight, Se = 12, Be = 8, He = Math.max(
        Se,
        we - J.width - Se
      ), Ne = Math.max(
        Se,
        Ce - J.height - Se
      ), ie = (_e) => Math.min(Math.max(_e, Se), He), oe = (_e) => Math.min(Math.max(_e, Se), Ne);
      let Re = "left", ke = _.left - J.width - Be, Me = oe(_.top);
      if (ke < Se) {
        const _e = _.top - Be - Se, Ze = Ce - _.bottom - Be - Se, We = Ze >= J.height || Ze >= _e;
        Re = We ? "bottom" : "top", ke = ie(_.left), Me = oe(We ? _.bottom + Be : _.top - J.height - Be);
      }
      const Le = `${ke}px`, ze = `${Me}px`;
      k.style.getPropertyValue("--chatui-block-menu-left") !== Le && k.style.setProperty("--chatui-block-menu-left", Le), k.style.getPropertyValue("--chatui-block-menu-top") !== ze && k.style.setProperty("--chatui-block-menu-top", ze), k.dataset.chatuiPlacement = Re;
    }, he = () => {
      const v = f.querySelector(
        ".milkdown-slash-menu"
      );
      v && (v.style.removeProperty("--chatui-block-menu-left"), v.style.removeProperty("--chatui-block-menu-top"), delete v.dataset.chatuiPlacement);
    }, ee = (v) => {
      v !== ye && (ye == null || ye.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), ye = v, ye == null || ye.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, de = () => {
      Te !== null && window.cancelAnimationFrame(Te), Te = window.requestAnimationFrame(() => {
        Te = null, se();
      });
    }, pe = () => {
      D = null, Q = !1, N = null, ee(null), b.editor.action((v) => {
        v.get("menuAPICtx").hide();
      }), he();
    }, ue = (v) => {
      const k = v.target instanceof Element ? v.target : null, J = f.querySelector(
        ".milkdown-slash-menu"
      );
      if (J) {
        const we = J.getBoundingClientRect(), Ce = we.width > 0 && we.height > 0, Se = v.clientX >= we.left && v.clientX <= we.right && v.clientY >= we.top && v.clientY <= we.bottom;
        if (Ce) {
          if (Se) {
            ee(
              (k == null ? void 0 : k.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), Q = !0;
            return;
          }
          if (ee(null), k != null && k.closest(".milkdown-block-handle")) return;
          const Be = $e(), He = k && (Be != null && Be.contains(k)) ? Z(k) ?? Y(v.clientY) : null;
          if (He && N && He !== N) {
            pe();
            return;
          }
          if (He === N) return;
          Q && pe();
          return;
        }
        Q = !1, ee(null);
      }
      if (k != null && k.closest(".milkdown-block-handle")) {
        E(ce);
        return;
      }
      const _ = $e();
      if (!k || !(_ != null && _.contains(k))) return;
      const $ = Z(k) ?? Y(v.clientY);
      i($);
    }, fe = (v) => {
      const k = v.target instanceof Element ? v.target : null;
      ee(
        (k == null ? void 0 : k.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, xe = (v) => {
      const k = v.target instanceof Element ? v.target : null, J = k == null ? void 0 : k.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!J) return;
      const _ = v.relatedTarget instanceof Element ? v.relatedTarget : null;
      if (_ && J.contains(_)) return;
      const $ = _ == null ? void 0 : _.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      ee($ ?? null);
    }, W = (v) => {
      const k = v.target instanceof Element ? v.target : null, J = k == null ? void 0 : k.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (J) {
        const _ = ce;
        D = J, N = ve, window.setTimeout(() => {
          E(_), de();
        }, 0);
      }
    }, Ve = (v) => {
      v.key === "/" && window.setTimeout(g, 0);
    };
    f.addEventListener("pointermove", ue), f.addEventListener("pointerover", fe), f.addEventListener("pointerout", xe), f.addEventListener("click", W), P.addEventListener("keyup", Ve);
    const qe = b.create();
    return qe.then(() => {
      var k;
      (k = P.querySelector(".ProseMirror")) == null || k.focus();
      const v = f.querySelector(
        ".milkdown-slash-menu"
      );
      v && (F = new MutationObserver(() => {
        if (v.dataset.show === "true" && D) {
          de();
          return;
        }
        v.dataset.show !== "true" && (D = null, N = null, ee(null), he());
      }), F.observe(v, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      })), g();
    }), () => {
      f.removeEventListener("pointermove", ue), f.removeEventListener(
        "pointerover",
        fe
      ), f.removeEventListener("pointerout", xe), f.removeEventListener("click", W), P.removeEventListener("keyup", Ve), qe.then(() => {
        F == null || F.disconnect(), Te !== null && window.cancelAnimationFrame(Te), b.destroy();
      });
    };
  }, []);
  const C = async (P) => {
    const b = Array.from(P.target.files ?? []);
    if (P.target.value = "", !(!b.length || !z)) {
      S(!0), re("");
      try {
        await z(b);
      } catch (f) {
        re(
          f instanceof Error ? f.message : "附件上传失败"
        );
      } finally {
        S(!1);
      }
    }
  }, L = async (P) => {
    if (B) {
      x(P), re("");
      try {
        await B(P);
      } catch (b) {
        re(
          b instanceof Error ? b.message : "附件删除失败"
        );
      } finally {
        x(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: Xe.shell, "aria-label": "项目文档编辑器", children: [
    T && /* @__PURE__ */ e("header", { className: Xe.header, children: /* @__PURE__ */ r("div", { className: Xe.headerActions, children: [
      /* @__PURE__ */ e(
        Fe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: u,
          onClick: O,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Fe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: u,
          onClick: q,
          children: u ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${Xe.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          p && /* @__PURE__ */ e("div", { className: Xe.saveError, children: p }),
          /* @__PURE__ */ r("div", { className: Xe.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${ne}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (P) => M(P.target.value),
                  placeholder: "请输入标题",
                  className: Xe.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                cr,
                {
                  createdByName: s,
                  updatedByName: l,
                  updatedAt: a,
                  index: c
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: R,
                  className: `${Xe.milkdownHost} ${dr.editor} ${ne} chatui-project-document-editor`,
                  style: Ca
                }
              ),
              z && /* @__PURE__ */ e(
                "input",
                {
                  ref: A,
                  type: "file",
                  multiple: !0,
                  accept: w,
                  className: "hidden",
                  onChange: (P) => {
                    C(P);
                  }
                }
              ),
              /* @__PURE__ */ e(
                or,
                {
                  attachments: h,
                  className: `${m === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: I,
                  deletingAttachmentId: G,
                  unavailableHint: d,
                  error: U,
                  onRequestUpload: z ? () => {
                    var P;
                    return (P = A.current) == null ? void 0 : P.click();
                  } : void 0,
                  onDeleteAttachment: B ? (P) => {
                    L(P);
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
  onOpenSidebar: c,
  onInstall: h,
  onUninstall: w,
  onRetry: d
}) {
  const [u, p] = y("installed"), [m, T] = y(""), [M, j] = y(!1), [z, B] = y([]), [q, O] = y(null), R = be(() => new Set(a), [a]), A = be(() => {
    const x = m.trim().toLowerCase();
    return n.filter((U) => u === "installed" !== U.installed ? !1 : x ? [U.name, U.source, U.description, ...U.tags].join(" ").toLowerCase().includes(x) : !0);
  }, [u, m, n]), X = (x) => {
    p(x), j(!1), B([]);
  }, V = () => {
    j((x) => !x), B([]);
  }, I = (x) => B((U) => U.includes(x) ? U.filter((re) => re !== x) : [...U, x]), S = (x) => x.installed ? w([x.id]) : h([x.id]), G = () => {
    z.length && (u === "installed" ? w(z) : h(z), B([]), j(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: c, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(er, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${M ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ r("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Qe, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: m, onChange: (x) => T(x.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => X("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${u === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => X("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${u === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: M, onChange: (x) => {
                j(x.target.checked), B([]);
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
        !l && s && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (x, U) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, U)) }),
        !l && !s && A.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": a.length > 0, children: A.map((x) => {
          const U = z.includes(x.id), re = R.has(x.id), ne = U ? "border-skillSelectedBorder bg-skillSelectedSurface" : q === x.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${ne}`, onMouseEnter: () => O(x.id), onMouseLeave: () => O((C) => C === x.id ? null : C), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: x.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: x.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${La[x.riskLevel]}`, children: za[x.riskLevel] }),
                M && /* @__PURE__ */ e("button", { type: "button", onClick: () => I(x.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": U ? `取消选择 ${x.name}` : `选择 ${x.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${U ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: x.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: x.tags.map((C) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: C }, `${x.id}-${C}`)) }),
              !M && /* @__PURE__ */ e("button", { type: "button", disabled: re, onClick: () => S(x), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${q === x.id || re ? "inline-flex" : "hidden"} ${x.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: re ? "处理中..." : x.installed ? "卸载" : "安装" })
            ] })
          ] }, x.id);
        }) }) : !l && !s ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    M && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        z.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: V, disabled: a.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: G, disabled: !z.length || a.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: a.length > 0 ? "处理中..." : u === "installed" ? "批量卸载" : "批量安装" })
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
  or as H,
  ur as I,
  ds as J,
  cr as K,
  ss as L,
  ir as M,
  ns as N,
  rs as O,
  ra as P,
  mr as Q,
  ls as R,
  us as S,
  Mt as T,
  da as U,
  ca as V,
  mt as a,
  Fe as b,
  Oa as c,
  En as d,
  zt as e,
  sr as f,
  Lt as g,
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
