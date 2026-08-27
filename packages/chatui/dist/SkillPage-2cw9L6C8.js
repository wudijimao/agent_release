import { jsxs as r, Fragment as ot, jsx as e } from "react/jsx-runtime";
import et, { useMemo as ke, useState as x, useRef as ie, useCallback as Ie, useEffect as ge, useLayoutEffect as Dt, forwardRef as Gr, useId as Nn } from "react";
import qe from "classnames";
import { Check as St, Copy as ir, RefreshCcw as kn, ThumbsUp as Tn, ThumbsDown as Cn, ArrowUpRight as Sn, Info as Mn, Ban as $n, TriangleAlert as wr, CircleCheckBig as lr, ShieldCheck as Xr, CircleHelp as Yr, FileText as Ft, LoaderCircle as Zr, Puzzle as Qr, AtSign as Jr, AlertCircle as Ln, Paperclip as en, ArrowRight as tn, ChevronDown as Bt, ChevronRight as Pt, CircleX as rn, Sparkles as nn, Loader2 as gt, Clock3 as cr, Search as Ct, BookOpen as Er, ListChecks as En, Globe as zn, Minus as An, Menu as an, Download as Pn, Trash2 as sn, CheckCircle2 as Ht, SearchX as Bn, FlaskConical as _n, X as jt, Plus as Nr, Cpu as zr, ChevronUp as In, Brain as Rn, Square as Dn, Send as jn, UserPlus as Fn, Building2 as Hn, Folder as hr, PanelLeftClose as qn, SquarePen as On, AlertTriangle as Wn, Settings as Vn, Pin as fr, MoreHorizontal as ln, Pencil as Un, Share2 as Kn } from "lucide-react";
import on from "react-markdown";
import cn from "remark-gfm";
import Gn from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as dn } from "react-dom";
import { Crepe as Qt } from "@milkdown/crepe";
import { commandsCtx as xr, editorViewCtx as zt } from "@milkdown/kit/core";
import { lift as Xn } from "@milkdown/kit/prose/commands";
import { liftListItem as Yn, wrapInList as Zn } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Jt } from "@milkdown/kit/prose/state";
import { listItemSchema as er, paragraphSchema as Ar, setBlockTypeCommand as Qn, orderedListSchema as Pr, bulletListSchema as Br, headingSchema as Jn, addBlockTypeCommand as ea, selectTextNearPosCommand as ta } from "@milkdown/kit/preset/commonmark";
import { createTable as ra } from "@milkdown/kit/preset/gfm";
import { trailingConfig as _r } from "@milkdown/kit/plugin/trailing";
const na = "_button_3tg6r_1", aa = "_primary_3tg6r_5", sa = "_disabled_3tg6r_9", la = "_secondary_3tg6r_17", oa = "_ghost_3tg6r_25", ia = "_danger_3tg6r_33", ca = "_small_3tg6r_41", da = "_medium_3tg6r_45", ua = "_large_3tg6r_49", ma = "_roundedSquare_3tg6r_53", pa = "_roundedSmall_3tg6r_57", ha = "_roundedMedium_3tg6r_61", fa = "_roundedLarge_3tg6r_62", xa = "_roundedFull_3tg6r_66", ba = "_loadingSpinner_3tg6r_67", ga = "_loading_3tg6r_67", ya = "_fullWidth_3tg6r_90", va = "_icon_3tg6r_94", Xe = {
  button: na,
  primary: aa,
  disabled: sa,
  secondary: la,
  ghost: oa,
  danger: ia,
  small: ca,
  medium: da,
  large: ua,
  roundedSquare: ma,
  roundedSmall: pa,
  roundedMedium: ha,
  roundedLarge: fa,
  roundedFull: xa,
  loadingSpinner: ba,
  loading: ga,
  fullWidth: ya,
  icon: va
}, wa = {
  primary: Xe.primary,
  secondary: Xe.secondary,
  ghost: Xe.ghost,
  danger: Xe.danger
}, Na = {
  small: Xe.small,
  medium: Xe.medium,
  large: Xe.large
}, ka = {
  square: Xe.roundedSquare,
  small: Xe.roundedSmall,
  medium: Xe.roundedMedium,
  large: Xe.roundedLarge,
  full: Xe.roundedFull
}, nt = et.forwardRef(
  ({
    type: t = "primary",
    size: a = "medium",
    isLoading: c,
    loading: s,
    disabled: o = !1,
    children: m,
    icon: p,
    iconPosition: N = "left",
    className: h,
    fullWidth: f = !1,
    rounded: P = "medium",
    onClick: d,
    ...v
  }, _) => {
    const L = c ?? s ?? !1, C = o || L, D = ke(() => L ? /* @__PURE__ */ r(ot, { children: [
      /* @__PURE__ */ e("span", { className: Xe.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: m })
    ] }) : p ? /* @__PURE__ */ r(ot, { children: [
      N === "left" && /* @__PURE__ */ e("span", { className: Xe.icon, children: p }),
      m && /* @__PURE__ */ e("span", { children: m }),
      N === "right" && /* @__PURE__ */ e("span", { className: Xe.icon, children: p })
    ] }) : m, [m, L, p, N]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: _,
        className: qe(
          Xe.button,
          wa[t],
          Na[a],
          ka[P],
          {
            [Xe.fullWidth]: f,
            [Xe.loading]: L,
            [Xe.disabled]: C
          },
          h
        ),
        disabled: C,
        onClick: d,
        ...v,
        children: D
      }
    );
  }
);
nt.displayName = "BaseButton";
const Ta = { small: "h-8", medium: "h-9", large: "h-14" }, un = et.forwardRef(
  ({
    type: t = "text",
    placeholder: a,
    value: c,
    defaultValue: s,
    disabled: o = !1,
    readOnly: m = !1,
    error: p = !1,
    size: N = "medium",
    prefix: h,
    suffix: f,
    prefixIcon: P,
    suffixIcon: d,
    onChange: v,
    onFocus: _,
    onBlur: L,
    onClear: C,
    className: D,
    containerClassName: G,
    clearable: U = !1,
    label: O,
    helperText: A,
    ...w
  }, j) => {
    const [B, I] = x(!1), oe = ie(null), b = Ie((X) => {
      oe.current = X, typeof j == "function" ? j(X) : j && (j.current = X);
    }, [j]), ee = Ie(() => {
      var $, ae;
      const X = oe.current;
      X && ((ae = ($ = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : $.set) == null || ae.call(X, ""), X.dispatchEvent(new Event("input", { bubbles: !0 })), X.focus(), C == null || C());
    }, [C]), ue = ke(
      () => {
        var X;
        return U && B && String(c ?? ((X = oe.current) == null ? void 0 : X.value) ?? "").length > 0;
      },
      [U, B, c]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      O && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: O }),
      /* @__PURE__ */ r(
        "div",
        {
          className: qe(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Ta[N],
            !o && !p && "hover:border-controlBorder",
            B && !o && !p && "border-primary ring-2 ring-brandFocus",
            p && "border-danger",
            p && B && "ring-2 ring-dangerFocus",
            o && "cursor-not-allowed bg-surfaceMuted",
            G
          ),
          children: [
            (h || P) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: h || P }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: b,
                type: t,
                placeholder: a,
                value: c,
                defaultValue: s,
                disabled: o,
                readOnly: m,
                className: qe("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", D),
                onFocus: (X) => {
                  I(!0), _ == null || _(X);
                },
                onBlur: (X) => {
                  I(!1), L == null || L(X);
                },
                onChange: v,
                ...w
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              ue && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (X) => X.preventDefault(), onClick: ee, "aria-label": "清空", children: "✕" }),
              f || d
            ] })
          ]
        }
      ),
      A && /* @__PURE__ */ e("div", { className: qe("text-xs leading-6", p ? "text-danger" : "text-mutedText"), children: A })
    ] });
  }
);
un.displayName = "BaseInput";
const Ca = { small: "h-8", medium: "h-9", large: "h-14" }, Sa = et.forwardRef(
  ({ options: t = [], value: a, defaultValue: c, placeholder: s, disabled: o = !1, error: m = !1, size: p = "medium", label: N, helperText: h, onChange: f, className: P, ...d }, v) => {
    const _ = Ie((L) => {
      const C = L.target.value, D = t.find((G) => String(G.value) === C);
      f == null || f(C === "" ? "" : (D == null ? void 0 : D.value) ?? C);
    }, [f, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      N && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: N }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: v,
            className: qe(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              m && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Ca[p],
              P
            ),
            value: a ?? c ?? "",
            disabled: o,
            onChange: _,
            ...d,
            children: [
              s && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: s }),
              t.map((L) => /* @__PURE__ */ e("option", { value: L.value, disabled: L.disabled, children: L.label }, L.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      h && /* @__PURE__ */ e("div", { className: qe("text-xs leading-6", m ? "text-danger" : "text-mutedText"), children: h })
    ] });
  }
);
Sa.displayName = "BaseSelect";
const Ma = "_container_ykn59_1", $a = "_item_ykn59_10", La = "_itemActive_ykn59_27", Ea = "_itemDisabled_ykn59_27", za = "_sizeSmall_ykn59_43", Aa = "_sizeMiddle_ykn59_49", Pa = "_sizeLarge_ykn59_55", Tt = {
  container: Ma,
  item: $a,
  itemActive: La,
  itemDisabled: Ea,
  sizeSmall: za,
  sizeMiddle: Aa,
  sizeLarge: Pa
}, Ba = {
  small: Tt.sizeSmall,
  middle: Tt.sizeMiddle,
  large: Tt.sizeLarge
};
function hl({
  options: t,
  value: a,
  defaultValue: c,
  onChange: s,
  size: o = "middle",
  disabled: m = !1,
  className: p
}) {
  var d;
  const [N, h] = x(
    c ?? ((d = t[0]) == null ? void 0 : d.value) ?? ""
  ), f = a ?? N, P = (v) => {
    m || (a === void 0 && h(v), s == null || s(v));
  };
  return /* @__PURE__ */ e("div", { className: qe(Tt.container, Ba[o], p), children: t.map((v) => {
    const _ = f === v.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: qe(Tt.item, _ && Tt.itemActive, m && Tt.itemDisabled),
        onClick: () => P(v.value),
        disabled: m,
        "aria-pressed": _,
        children: v.label
      },
      v.value
    );
  }) });
}
const _a = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Ia = et.forwardRef(
  ({ accept: t, multiple: a = !1, disabled: c = !1, onChange: s, onError: o, maxSize: m, children: p, className: N, dragable: h = !0, placeholderTitle: f, placeholderDescription: P, placeholderIcon: d, maxCount: v }, _) => {
    const L = ie(null), [C, D] = x(!1), G = Ie((O) => {
      if (v && O.length > v) {
        o == null || o(new Error(`单次最多上传 ${v} 个文件`));
        return;
      }
      if (m) {
        for (const A of Array.from(O))
          if (A.size > m) {
            o == null || o(new Error(`文件“${A.name}”超过大小限制（${_a(m)}）`));
            return;
          }
      }
      s == null || s(O);
    }, [v, m, s, o]), U = () => {
      var O;
      c || (O = L.current) == null || O.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: _,
        className: qe(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          C && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          c && "cursor-not-allowed opacity-60",
          N
        ),
        onClick: U,
        onKeyDown: (O) => {
          !c && (O.key === "Enter" || O.key === " ") && (O.preventDefault(), U());
        },
        onDragOver: (O) => {
          h && !c && (O.preventDefault(), D(!0));
        },
        onDragLeave: () => D(!1),
        onDrop: (O) => {
          h && !c && (O.preventDefault(), D(!1), G(O.dataTransfer.files));
        },
        role: "button",
        tabIndex: c ? -1 : 0,
        "aria-disabled": c,
        children: [
          /* @__PURE__ */ e("input", { ref: L, type: "file", accept: t, multiple: a, disabled: c, onChange: (O) => O.target.files && G(O.target.files), className: "hidden" }),
          p || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: d ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: f ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: P ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Ia.displayName = "BaseUpload";
const Ra = "_maskAnimation_ppuso_1", Da = "_modalAnimation_ppuso_5", ja = "_maskExitAnimation_ppuso_9", Fa = "_modalExitAnimation_ppuso_13", tr = {
  maskAnimation: Ra,
  modalAnimation: Da,
  maskExitAnimation: ja,
  modalExitAnimation: Fa
}, dr = ({
  visible: t,
  open: a = t,
  show: c = a,
  title: s,
  width: o = 520,
  centered: m = !0,
  mask: p = !0,
  maskClosable: N = !0,
  okText: h = "确认",
  cancelText: f = "取消",
  confirmLoading: P = !1,
  okButtonProps: d,
  cancelButtonProps: v,
  onConfirm: _,
  onDisabledConfirm: L,
  onCancel: C,
  onClose: D,
  onOk: G,
  onDismiss: U,
  children: O,
  footer: A,
  className: w,
  bodyClassName: j
}) => {
  const B = c ?? !1, [I, oe] = x(B), b = I && !B;
  ge(() => {
    B && oe(!0);
  }, [B]);
  const ee = Ie(async () => {
    try {
      _ ? await _() : G && await G();
    } catch ($) {
      console.error("Modal confirm error:", $);
    }
  }, [_, G]), ue = Ie(() => {
    C ? C() : D ? D() : U == null || U();
  }, [C, D, U]), X = ke(() => {
    if (A === null) return null;
    if (A) return A;
    const { type: $, ...ae } = v ?? {}, { type: fe, ...M } = d ?? {}, T = /* @__PURE__ */ e(nt, { type: "primary", size: "medium", isLoading: P, onClick: ee, ...M, children: P ? "加载中..." : h });
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(nt, { type: "secondary", size: "medium", onClick: ue, ...ae, children: f }),
      M.disabled && L ? /* @__PURE__ */ e("span", { className: "inline-flex cursor-not-allowed", onClick: L, children: T }) : T
    ] });
  }, [v, f, P, A, ue, ee, d, h, L]);
  return I ? /* @__PURE__ */ r(ot, { children: [
    p && /* @__PURE__ */ e("div", { className: qe("fixed inset-0 z-[1000] bg-overlayMask", b ? tr.maskExitAnimation : tr.maskAnimation), onClick: () => !b && N && ue(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: qe(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          m && "left-1/2 top-1/2",
          b ? tr.modalExitAnimation : tr.modalAnimation,
          b && "pointer-events-none",
          w
        ),
        style: { width: o },
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": b,
        "aria-labelledby": "modal-title",
        onAnimationEnd: ($) => {
          $.currentTarget === $.target && b && oe(!1);
        },
        children: [
          s && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: s }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: ue, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: qe("min-h-20 p-5 text-primaryText", j), children: O }),
          X
        ]
      }
    )
  ] }) : null;
};
dr.displayName = "BaseModal";
function Ha({
  visible: t,
  title: a,
  description: c,
  loading: s = !1,
  error: o,
  onCancel: m,
  onConfirm: p
}) {
  return /* @__PURE__ */ e(
    dr,
    {
      visible: t,
      title: a,
      width: 420,
      maskClosable: !1,
      onCancel: () => {
        s || m();
      },
      footer: /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
        /* @__PURE__ */ e(nt, { type: "secondary", size: "medium", disabled: s, onClick: m, children: "取消" }),
        /* @__PURE__ */ e(nt, { type: "danger", size: "medium", isLoading: s, onClick: () => {
          p();
        }, children: "删除" })
      ] }),
      children: /* @__PURE__ */ r("div", { className: "space-y-3 text-sm leading-6 text-secondaryText", children: [
        /* @__PURE__ */ e("p", { children: c }),
        o && /* @__PURE__ */ e("p", { role: "alert", className: "text-danger", children: o })
      ] })
    }
  );
}
const qa = ({ title: t, extra: a, children: c, hoverable: s = !1, loading: o = !1, bordered: m = !0, className: p, bodyClassName: N, onClick: h }) => /* @__PURE__ */ r(
  "div",
  {
    className: qe(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      m && "border border-borderGray",
      s && "cursor-pointer hover:border-borderGray hover:shadow-md",
      o && "pointer-events-none opacity-60",
      p
    ),
    onClick: h,
    children: [
      (t || a) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
      ] }),
      /* @__PURE__ */ e("div", { className: qe("p-4 text-primaryText", !!(t || a) && "pt-1", N), children: c })
    ]
  }
);
qa.displayName = "BaseCard";
const Oa = ({ columns: t, dataSource: a = [], rowKey: c = "id", loading: s = !1, bordered: o = !0, striped: m = !0, className: p, onRow: N }, h) => /* @__PURE__ */ r("div", { ref: h, className: qe("relative w-full overflow-x-auto bg-surface", p), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: o ? "border-b border-lineSubtle" : void 0, children: t.map((f) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: f.width, textAlign: f.align }, children: f.title }, f.key || String(f.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: a.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : a.map((f, P) => {
      const d = String(typeof c == "string" ? f[c] ?? P : P);
      return /* @__PURE__ */ e("tr", { className: qe(o && "border-b border-lineSoft last:border-b-0", m && "odd:bg-surface"), ...(N == null ? void 0 : N(f, P)) || {}, children: t.map((v) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: v.align }, children: v.render ? v.render(f[v.dataIndex], f, P) : String(f[v.dataIndex] ?? "") }, v.key || String(v.dataIndex))) }, d);
    }) })
  ] }),
  s && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), fl = et.forwardRef(Oa), Wa = ({ current: t = 1, pageSize: a = 10, total: c = 0, onChange: s, showSizeChanger: o = !1, pageSizeOptions: m = [10, 20, 50, 100], onShowSizeChange: p, disabled: N = !1, className: h }) => {
  const f = ke(() => Math.ceil(c / a) || 1, [a, c]), P = Ie((v) => p == null ? void 0 : p(1, Number(v.target.value)), [p]), d = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: qe("flex flex-wrap items-center justify-center gap-4 p-4", h), children: [
    /* @__PURE__ */ e("button", { type: "button", className: d, onClick: () => t > 1 && (s == null ? void 0 : s(t - 1)), disabled: N || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      f,
      " 页，共 ",
      c,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: d, onClick: () => t < f && (s == null ? void 0 : s(t + 1)), disabled: N || t >= f, children: "下一页 →" }),
    o && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: a, onChange: P, disabled: N, children: m.map((v) => /* @__PURE__ */ r("option", { value: v, children: [
      v,
      " 条/页"
    ] }, v)) })
  ] });
};
Wa.displayName = "BasePagination";
const kr = ({ description: t = "暂无数据", image: a, children: c }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  a && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: a }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  c
] });
kr.displayName = "BaseEmpty";
const qt = ({ trigger: t, items: a, footerItems: c = [], open: s = !1, onOpenChange: o, onTriggerClick: m, onItemClick: p, placement: N = "bottom-start", width: h, portal: f = !1, className: P, triggerClassName: d, menuClassName: v, listClassName: _, footerClassName: L }) => {
  const C = ie(null), D = ie(null), [G, U] = x({}), O = N.endsWith("end"), A = N.startsWith("top");
  Dt(() => {
    var b;
    if (!s || !f || !C.current) return;
    const I = C.current.getBoundingClientRect(), oe = A ? ((b = D.current) == null ? void 0 : b.offsetHeight) ?? 0 : 0;
    U({
      position: "fixed",
      left: O ? I.right : I.left,
      top: A ? I.top - oe - 8 : I.bottom,
      transform: O ? "translateX(-100%)" : void 0
    });
  }, [A, O, s, f, N]), ge(() => {
    if (!s || !o) return;
    const I = (oe) => {
      var ee, ue;
      const b = oe.target;
      (ee = C.current) != null && ee.contains(b) || (ue = D.current) != null && ue.contains(b) || o(!1);
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, [o, s]);
  const w = ke(() => h ? { width: typeof h == "number" ? `${h}px` : h } : void 0, [h]), j = Ie((I) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: qe(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !I.danger && !I.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !I.danger && I.active && "bg-primary-soft font-medium text-primary",
        I.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (oe) => p == null ? void 0 : p(I, oe),
      disabled: I.disabled,
      children: [
        I.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: I.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: I.label })
      ]
    },
    I.key
  ), [p]), B = s ? /* @__PURE__ */ r(
    "div",
    {
      ref: D,
      className: qe(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !f && "absolute",
        !f && !A && "top-[calc(100%+8px)]",
        !f && A && "bottom-[calc(100%+8px)]",
        !f && O ? "right-0" : f ? void 0 : "left-0",
        v
      ),
      style: f ? { ...G, ...w } : w,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: qe("flex min-h-0 flex-col gap-1", _), children: a.map(j) }),
        c.length > 0 && /* @__PURE__ */ e("div", { className: qe("flex flex-col gap-1 border-t border-lineSoft pt-2", L), children: c.map(j) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: C, className: qe("relative inline-block", P), children: [
    /* @__PURE__ */ e("button", { type: "button", className: qe("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", d), onClick: (I) => {
      m == null || m(I), o == null || o(!s);
    }, "aria-haspopup": "menu", "aria-expanded": s, children: t }),
    f ? B && dn(B, document.body) : B
  ] });
};
qt.displayName = "BaseActionMenu";
const Va = ({
  markdownContent: t,
  copyLabel: a = "复制 Markdown",
  onRefresh: c,
  feedback: s,
  onFeedback: o,
  disabled: m = !1
}) => {
  const [p, N] = x(!1), h = !!(c || o), f = Ie(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), N(!0), window.setTimeout(() => N(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${h ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: f,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${p ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: p ? "已复制" : a,
            children: p ? /* @__PURE__ */ e(St, { size: 15 }) : /* @__PURE__ */ e(ir, { size: 15 })
          }
        ),
        c && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: c,
            disabled: m,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(kn, { size: 15 })
          }
        ),
        o && /* @__PURE__ */ r(ot, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => o("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${s === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Tn, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => o("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${s === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(Cn, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, Ir = et.memo(Va), Ua = {
  clarification: {
    icon: /* @__PURE__ */ e(Yr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  confirmation: {
    icon: /* @__PURE__ */ e(lr, { size: 16 }),
    className: "border-primary-soft-strong bg-primary-soft",
    iconClassName: "text-primary"
  },
  approval: {
    icon: /* @__PURE__ */ e(Xr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  result: {
    icon: /* @__PURE__ */ e(lr, { size: 16 }),
    className: "border-lineSubtle bg-surface",
    iconClassName: "text-primary"
  },
  warning: {
    icon: /* @__PURE__ */ e(wr, { size: 16 }),
    className: "border-warning bg-warning-soft",
    iconClassName: "text-warning"
  },
  blocked: {
    icon: /* @__PURE__ */ e($n, { size: 16 }),
    className: "border-danger bg-danger-soft",
    iconClassName: "text-danger"
  },
  info: {
    icon: /* @__PURE__ */ e(Mn, { size: 16 }),
    className: "border-lineSubtle bg-surfaceMuted",
    iconClassName: "text-secondaryText"
  }
};
function Ka({ card: t, actionPending: a = !1, onAction: c }) {
  const s = Ua[t.kind];
  return /* @__PURE__ */ e("section", { className: `w-full max-w-[680px] rounded-xl border p-4 ${s.className}`, children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ e("span", { className: `mt-0.5 shrink-0 ${s.iconClassName}`, "aria-hidden": "true", children: s.icon }),
    /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ e("h3", { className: "m-0 text-sm font-semibold leading-5 text-primaryText", children: t.title }),
        t.statusLabel && /* @__PURE__ */ e("span", { className: "rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText", children: t.statusLabel })
      ] }),
      t.summary && /* @__PURE__ */ e("p", { className: "m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText", children: t.summary }),
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((o, m) => /* @__PURE__ */ e("li", { children: o }, `${m}-${o}`)) }),
      t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.links.map((o) => /* @__PURE__ */ r(
        "a",
        {
          href: o.href,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary",
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: o.label }),
            /* @__PURE__ */ e(Sn, { size: 12, className: "shrink-0" })
          ]
        },
        `${o.href}-${o.label}`
      )) }),
      t.actionKey && t.actions && t.actions.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2", children: t.actions.map((o) => /* @__PURE__ */ e(
        nt,
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
function Ga({ draft: t, onPreview: a, onConfirm: c, onCancel: s }) {
  const o = t.status === "saving", m = t.status === "saved", p = t.actionable ?? !0, N = t.previewable ?? !0, h = o || m || !p || !c;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !a || !N,
        onClick: () => a == null ? void 0 : a(t.actionKey),
        className: "flex w-full min-w-0 items-start gap-3 rounded-lg text-left outline-none transition-colors enabled:hover:bg-bgLight enabled:focus-visible:ring-2 enabled:focus-visible:ring-primary-soft-strong disabled:cursor-default",
        "aria-label": `预览草稿：${t.title}`,
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(Ft, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Helia 文档草稿" }),
            /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: t.title }),
            t.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: t.summary })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: m ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !m && p && s && /* @__PURE__ */ e(
          nt,
          {
            type: "secondary",
            size: "small",
            disabled: o,
            onClick: () => s(t.actionKey),
            children: "取消"
          }
        ),
        (p || m) && /* @__PURE__ */ e(
          nt,
          {
            type: m ? "secondary" : "primary",
            size: "small",
            disabled: h,
            onClick: () => c == null ? void 0 : c(t.actionKey),
            children: o ? /* @__PURE__ */ r(ot, { children: [
              /* @__PURE__ */ e(Zr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : m ? /* @__PURE__ */ r(ot, { children: [
              /* @__PURE__ */ e(St, { size: 14, "aria-hidden": "true" }),
              "已保存"
            ] }) : "确认保存"
          }
        )
      ] })
    ] }),
    t.status === "error" && t.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: t.errorMessage })
  ] });
}
const Rr = "[[PAPER_LIST_JSON]]";
let Dr = !1, rr = null, nr = null, ar = null;
const Xa = async () => (nr || (nr = Promise.all([import("remark-math"), import("rehype-katex")]).then(([t, a]) => ({
  remark: t.default,
  rehype: a.default
})).catch((t) => {
  throw nr = null, t;
})), nr), Ya = async () => (ar || (ar = import("remark-emoji").then((t) => t.default).catch(() => (ar = null, null))), ar), Za = async () => {
  rr || (rr = import("mermaid").then((a) => a.default ?? a).catch((a) => {
    throw rr = null, a;
  }));
  const t = await rr;
  if (!Dr) {
    const a = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    t.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: a ? { primaryColor: a, primaryBorderColor: a } : void 0
    }), Dr = !0;
  }
  return t;
}, or = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((a) => or(a)).join("") : et.isValidElement(t) ? or(t.props.children) : "", jr = (t) => {
  const a = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(a);
}, Qa = ({ href: t, label: a }) => {
  const c = ke(() => {
    const s = a.trim();
    if (s) return s;
    try {
      const m = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (m) return decodeURIComponent(m);
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
        children: /* @__PURE__ */ e(tn, { size: 14 })
      }
    )
  ] });
}, Ja = ({ language: t, rawCode: a, className: c, children: s }) => {
  const [o, m] = x(!1), p = Ie(async () => {
    if (a.trim())
      try {
        await navigator.clipboard.writeText(a), m(!0), window.setTimeout(() => m(!1), 1200);
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
          onClick: p,
          className: `code-block-copy-btn ${o ? "copied" : ""}`,
          title: o ? "已复制代码" : "复制代码",
          children: [
            o ? /* @__PURE__ */ e(St, { size: 12 }) : /* @__PURE__ */ e(ir, { size: 12 }),
            o ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${c ?? ""}`.trim(), children: s }) })
  ] });
}, es = ({ rawCode: t }) => {
  const [a, c] = x(!1), s = Ie(async () => {
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
          onClick: s,
          className: `code-block-copy-btn ${a ? "copied" : ""}`,
          title: a ? "已复制图表代码" : "复制图表代码",
          children: [
            a ? /* @__PURE__ */ e(St, { size: 12 }) : /* @__PURE__ */ e(ir, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: t }) })
  ] });
}, mn = (t) => {
  const a = typeof t.title == "string" ? t.title.trim() : "", c = typeof t.pmid == "string" ? t.pmid.trim() : "", s = typeof t.doi == "string" ? t.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !a || !c || !s ? null : { title: a, pmid: c, doi: s };
}, Fr = (t) => {
  const a = t.replace(/\r/g, "").split(`
`).map((s) => s.trim()).filter(Boolean);
  if (a.length === 0) return null;
  const c = [];
  return a.forEach((s, o) => {
    var d;
    const m = s.match(/PMID\s*[:：]\s*(\d{4,})/i), p = s.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!m || !p) return;
    const N = s.slice(0, m.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), h = ((d = a[o - 1]) == null ? void 0 : d.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", P = mn({
      title: N || h,
      pmid: m[1],
      doi: p[1]
    });
    P && c.push(P);
  }), c.length === 0 ? null : { items: c };
}, ts = (t) => {
  if (!t.startsWith(Rr))
    return Fr(t);
  const a = t.slice(Rr.length).trim();
  if (!a) return null;
  try {
    const c = JSON.parse(a);
    if (!Array.isArray(c.items)) return null;
    const s = c.items.map((o) => mn(o)).filter((o) => o !== null);
    return s.length === 0 ? null : { items: s };
  } catch {
    return Fr(a);
  }
}, pn = ({
  msg: t,
  actionKey: a,
  feedback: c,
  onFeedback: s,
  onRefresh: o,
  onConfirmMiraDraft: m,
  onPreviewMiraDraft: p,
  onCancelMiraDraft: N,
  pendingDisplayActionKey: h,
  onDisplayCardAction: f,
  isTyping: P = !1,
  isStreaming: d
}) => {
  var ae, fe;
  const v = t.role === "user", _ = d ?? P, L = ie(null), [C, D] = x(null), [G, U] = x(null), [O, A] = x(null), [w, j] = x(!1), B = ke(() => /```\s*mermaid/i.test(t.content), [t.content]), I = ke(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), oe = ke(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), b = ke(
    () => v ? null : ts(t.content),
    [v, t.content]
  ), ee = !!(b && b.items.length > 0);
  ge(() => {
    if (!I || C || G) return;
    let M = !1;
    return Xa().then((T) => {
      M || (D(() => T.remark), U(() => T.rehype));
    }).catch(() => {
    }), () => {
      M = !0;
    };
  }, [I, C, G]), ge(() => {
    if (!oe || w) return;
    let M = !1;
    return Ya().then((T) => {
      M || (T && A(() => T), j(!0));
    }), () => {
      M = !0;
    };
  }, [oe, w]);
  const ue = ke(() => {
    const M = [cn];
    return O && M.push(O), C && M.push(C), M;
  }, [O, C]), X = ke(() => {
    const M = [Gn];
    return G && M.push(G), M;
  }, [G]), $ = ke(
    () => ({
      table: ({ node: M, ...T }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...T }) }),
      tr: ({ node: M, ...T }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...T }),
      th: ({ node: M, ...T }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...T
        }
      ),
      td: ({ node: M, ...T }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...T }),
      blockquote: ({ node: M, ...T }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...T
        }
      ),
      input: ({ node: M, type: T, checked: F, ...J }) => T === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!F,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...J
        }
      ) : /* @__PURE__ */ e("input", { type: T, ...J }),
      section: ({ node: M, ...T }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...T }),
      p: ({ node: M, children: T, ...F }) => {
        const J = et.Children.toArray(T);
        if (J.length === 1 && et.isValidElement(J[0])) {
          const ve = J[0];
          if (typeof ve.props.href == "string" && jr(ve.props.href)) {
            const de = or(ve.props.children).trim();
            return /* @__PURE__ */ e(Qa, { href: ve.props.href, label: de });
          }
        }
        return /* @__PURE__ */ e("p", { ...F, children: T });
      },
      a: ({ node: M, href: T, ...F }) => {
        const J = T ?? "", ve = /^https?:\/\/(dx\.)?doi\.org\//i.test(J) || /^doi:/i.test(J), de = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(J) || /\/pmc\/|\/pmid\//i.test(J), Y = jr(J);
        return ve || de || Y ? /* @__PURE__ */ e(
          "a",
          {
            href: T,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...F
          }
        ) : /* @__PURE__ */ e("a", { href: T, target: "_blank", rel: "noreferrer", ...F });
      },
      pre({ children: M, ...T }) {
        const F = et.Children.toArray(M).find(
          (q) => et.isValidElement(q) && typeof q.props.className == "string" && q.props.className.includes("language-")
        );
        if (!F)
          return /* @__PURE__ */ e("pre", { ...T, children: M });
        const J = F.props.className ?? "", ve = J.match(/language-([\w-]+)/), de = ve ? ve[1].toLowerCase() : "code", Y = or(F.props.children).replace(/\n$/, "");
        return de === "mermaid" ? /* @__PURE__ */ e(es, { rawCode: Y }) : /* @__PURE__ */ e(Ja, { language: de, rawCode: Y, className: J, children: F.props.children });
      },
      code({ children: M, className: T, ...F }) {
        return T ? /* @__PURE__ */ e("code", { className: T, ...F, children: M }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...F,
            children: M
          }
        );
      }
    }),
    []
  );
  return ge(() => {
    if (v || _ || !B) return;
    const M = L.current;
    if (!M) return;
    const T = Array.from(M.querySelectorAll(".mermaid")).filter(
      (F) => F.dataset.processed !== "true"
    );
    T.length !== 0 && Za().then(async (F) => {
      await Promise.all(
        T.map(async (J, ve) => {
          var ne;
          const de = (ne = J.textContent) == null ? void 0 : ne.trim();
          if (!de) return;
          const Y = `mermaid-${Date.now()}-${ve}`, { svg: q } = await F.render(Y, de);
          J.innerHTML = q, J.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [v, _, B, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${v ? "justify-end" : "justify-start"}`, children: v ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (ae = t.references) == null ? void 0 : ae.map((M) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${M.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              M.type === "skill" ? /* @__PURE__ */ e(Qr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(Jr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: M.label, children: M.label })
            ]
          },
          M.id
        )),
        (fe = t.attachments) == null ? void 0 : fe.map((M) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${M.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: M.status === "error" ? "alert" : void 0,
            title: M.errorMessage,
            children: [
              M.status === "uploading" ? /* @__PURE__ */ e(Zr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : M.status === "error" ? /* @__PURE__ */ e(Ln, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : M.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: M.previewUrl, alt: M.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(en, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: M.name, children: M.name }),
              M.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              M.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          M.id
        ))
      ] }),
      /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: t.content })
    ] }),
    t.content && /* @__PURE__ */ e(
      Ir,
      {
        markdownContent: t.content,
        copyLabel: "复制消息"
      }
    )
  ] }) : /* @__PURE__ */ r("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    ee && b ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: b.items.map((M, T) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: M.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${M.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: M.pmid
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
                  href: `https://doi.org/${M.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: M.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${M.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(tn, { size: 14 })
            }
          )
        ]
      },
      `${M.pmid}-${T}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: L,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          on,
          {
            remarkPlugins: ue,
            rehypePlugins: X,
            components: $,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      Ga,
      {
        draft: t.miraDraft,
        onPreview: p,
        onConfirm: m,
        onCancel: N
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      Ka,
      {
        card: t.displayCard,
        actionPending: h === t.displayCard.actionKey,
        onAction: f
      }
    ),
    !ee && t.content && !_ && /* @__PURE__ */ e(
      Ir,
      {
        markdownContent: t.content,
        onRefresh: o,
        feedback: c,
        onFeedback: a && s ? (M) => s(a, M) : void 0,
        disabled: _
      }
    )
  ] }) }) });
}, rs = et.memo(pn), ns = {
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
}, as = {
  queued: /* @__PURE__ */ e(cr, { size: 14, className: "text-tertiaryText" }),
  thinking: /* @__PURE__ */ e(gt, { size: 14, className: "animate-spin text-primary" }),
  analyzing: /* @__PURE__ */ e(gt, { size: 14, className: "animate-spin text-primary" }),
  searching: /* @__PURE__ */ e(gt, { size: 14, className: "animate-spin text-primary" }),
  executing: /* @__PURE__ */ e(gt, { size: 14, className: "animate-spin text-primary" }),
  generating: /* @__PURE__ */ e(nn, { size: 14, className: "animate-pulse text-primary" }),
  awaiting_clarification: /* @__PURE__ */ e(Yr, { size: 14, className: "text-warning" }),
  awaiting_confirmation: /* @__PURE__ */ e(lr, { size: 14, className: "text-primary" }),
  awaiting_approval: /* @__PURE__ */ e(Xr, { size: 14, className: "text-warning" }),
  warning: /* @__PURE__ */ e(wr, { size: 14, className: "text-warning" }),
  failed: /* @__PURE__ */ e(rn, { size: 14, className: "text-danger" })
}, Hr = {
  knowledge: {
    icon: /* @__PURE__ */ e(Er, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(zn, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  planning: {
    icon: /* @__PURE__ */ e(En, { size: 13 }),
    colorClass: "text-chatToolStep"
  },
  context: {
    icon: /* @__PURE__ */ e(Er, { size: 13 }),
    colorClass: "text-primary"
  },
  generation: {
    icon: /* @__PURE__ */ e(nn, { size: 13 }),
    colorClass: "text-primary"
  },
  action: {
    icon: /* @__PURE__ */ e(Ct, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, ss = {
  running: {
    icon: /* @__PURE__ */ e(gt, { size: 13, className: "animate-spin" }),
    colorClass: "text-primary"
  },
  completed: {
    icon: /* @__PURE__ */ e(lr, { size: 13 }),
    colorClass: "text-primary"
  },
  failed: {
    icon: /* @__PURE__ */ e(rn, { size: 13 }),
    colorClass: "text-danger"
  },
  skipped: {
    icon: /* @__PURE__ */ e(An, { size: 13 }),
    colorClass: "text-tertiaryText"
  },
  warning: {
    icon: /* @__PURE__ */ e(wr, { size: 13 }),
    colorClass: "text-warning"
  }
}, yr = ({
  phase: t,
  searchSteps: a = [],
  label: c,
  defaultExpanded: s = !0,
  elapsedSeconds: o,
  reasoning: m
}) => {
  const [p, N] = x(s), [h, f] = x(!1), P = ie(null);
  ge(() => {
    a.length > 0 && N(!0);
  }, [a.length]);
  const d = a.length > 0, v = o === void 0 ? void 0 : `${Math.floor(o / 60)}:${String(o % 60).padStart(2, "0")}`, _ = (m == null ? void 0 : m.split(/\r?\n/).map((C) => C.trim()).filter(Boolean)) ?? [], L = _[_.length - 1] ?? "";
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: as[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: c || ns[t] }),
      v && /* @__PURE__ */ e(
        "span",
        {
          className: "text-[12px] tabular-nums leading-5 text-tertiaryText select-none",
          "aria-label": `已用时 ${v}`,
          children: v
        }
      ),
      d && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => N((C) => !C),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            p ? /* @__PURE__ */ e(Bt, { size: 12 }) : /* @__PURE__ */ e(Pt, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              a.length,
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
          onClick: () => f((C) => !C),
          className: "flex w-full items-center gap-1.5 text-left text-[13px] font-medium text-secondaryText",
          "aria-expanded": h,
          children: [
            h ? /* @__PURE__ */ e(Bt, { size: 14 }) : /* @__PURE__ */ e(Pt, { size: 14 }),
            /* @__PURE__ */ e("span", { className: "shrink-0", children: "Thinking" }),
            !h && L && /* @__PURE__ */ r("span", { className: "relative ml-2 min-w-0 flex-1 overflow-hidden text-left text-[12px] font-normal text-tertiaryText", children: [
              /* @__PURE__ */ e("span", { className: "block whitespace-nowrap", children: L }),
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
      h && /* @__PURE__ */ e("div", { className: "mt-2 whitespace-pre-wrap border-t border-lineSubtle pt-2 text-[13px] leading-6 text-secondaryText", children: m })
    ] }),
    d && /* @__PURE__ */ e(
      "div",
      {
        ref: P,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${p ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: a.map((C, D) => {
          const G = Hr[C.type] ?? Hr.tool, U = C.status ? ss[C.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${G.colorClass}`, children: G.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: C.label }),
                    U && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${U.colorClass}`,
                        "aria-label": C.status,
                        children: U.icon
                      }
                    )
                  ] }),
                  (C.detail || C.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    C.detail,
                    C.detail && C.resultCount !== void 0 ? " · " : "",
                    C.resultCount !== void 0 ? `${C.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            C.id ?? `${C.type}-${D}-${C.label}`
          );
        })
      }
    )
  ] });
}, ls = et.memo(yr);
function os(t, a) {
  if (typeof t == "function") {
    t(a);
    return;
  }
  t && (t.current = a);
}
const is = 24;
function br(t) {
  const a = Number.parseFloat(t);
  return Number.isFinite(a) ? a : 0;
}
function cs({
  messages: t,
  isTyping: a,
  statusPhase: c = "thinking",
  statusLabel: s,
  statusVisible: o,
  searchSteps: m = [],
  hasReceivedAssistantChunk: p = !1,
  contentMaxWidth: N = 800,
  selection: h,
  scrollbar: f,
  feedbackByMessageKey: P,
  getMessageKey: d = (j, B) => String(B),
  onFeedback: v,
  onRegenerate: _,
  onConfirmMiraDraft: L,
  onPreviewMiraDraft: C,
  onCancelMiraDraft: D,
  pendingDisplayActionKey: G,
  onDisplayCardAction: U,
  onScroll: O,
  scrollContainerRef: A,
  onMessageElement: w
}) {
  var _e, te;
  const j = !!h, B = ie(null), I = ie(null), oe = ie(/* @__PURE__ */ new Map()), b = ie(void 0), ee = ie(void 0), ue = ie(!0), [X, $] = x(), [ae, fe] = x(0), M = c === "awaiting_clarification" || c === "awaiting_confirmation" || c === "awaiting_approval" || c === "warning" || c === "failed", T = a && (o ?? !p) || o === !0 && M;
  let F = -1, J = -1;
  if (a) {
    for (let R = t.length - 1; R >= 0; R -= 1)
      if (((_e = t[R]) == null ? void 0 : _e.role) === "user") {
        J = R;
        break;
      }
    for (let R = t.length - 1; R > J; R -= 1)
      if (((te = t[R]) == null ? void 0 : te.role) === "assistant") {
        F = R;
        break;
      }
  }
  const ve = J >= 0 ? d(t[J], J) : void 0, de = F >= 0 ? d(t[F], F) : void 0, Y = ve && de ? `${ve}:${de}` : void 0, q = F >= 0 ? t[F] : void 0, ne = !!(q != null && q.reasoning && !q.content), Ue = T && (!p || ne || M);
  ge(() => {
    if (!a) {
      ee.current = void 0, fe(0);
      return;
    }
    ee.current = Date.now(), fe(0);
    const R = window.setInterval(() => {
      const g = ee.current;
      g !== void 0 && fe(Math.floor((Date.now() - g) / 1e3));
    }, 1e3);
    return () => window.clearInterval(R);
  }, [a]);
  const Oe = Ie(
    (R) => {
      B.current = R, os(A, R);
    },
    [A]
  ), Re = Ie(
    (R) => {
      const g = R.currentTarget, S = g.scrollHeight - g.scrollTop - g.clientHeight;
      ue.current = S <= is, O == null || O(R);
    },
    [O]
  );
  return Dt(() => {
    const R = B.current, g = I.current;
    if (!R || !g) return;
    const S = () => {
      ue.current && (R.scrollTop = R.scrollHeight);
    };
    S();
    const Se = new ResizeObserver(S);
    return Se.observe(g), () => Se.disconnect();
  }, []), Dt(() => {
    if (!Y || !de || J < 0 || F < 0)
      return;
    const R = B.current, g = I.current, S = oe.current.get(J);
    if (!R || !g || !S) return;
    const Se = () => {
      const E = window.getComputedStyle(R), ye = window.getComputedStyle(g), ze = R.clientHeight - br(E.paddingTop) - br(E.paddingBottom), xe = br(ye.rowGap || ye.gap), $e = Math.max(
        0,
        Math.floor(ze - S.offsetHeight - xe)
      );
      $(
        (Me) => (Me == null ? void 0 : Me.assistantKey) === de && Me.minHeight === $e ? Me : { assistantKey: de, minHeight: $e }
      );
    };
    Se();
    const me = new ResizeObserver(Se);
    return me.observe(R), me.observe(S), () => me.disconnect();
  }, [
    F,
    de,
    Y,
    J
  ]), Dt(() => {
    if (!Y || !de || (X == null ? void 0 : X.assistantKey) !== de || J < 0 || b.current === Y)
      return;
    const R = B.current, g = oe.current.get(J);
    !R || !g || (R.scrollTo({ top: g.offsetTop, behavior: "auto" }), b.current = Y);
  }, [de, Y, J, X]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: Oe,
        "data-chat-scroll-container": !0,
        onScroll: Re,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: I,
            className: `flex w-full flex-col ${j ? "gap-3" : "gap-8"}`,
            style: { maxWidth: N },
            children: [
              t.map((R, g) => {
                const S = d(R, g), Se = (h == null ? void 0 : h.selectedMessageKeys.has(S)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": g,
                    "data-chat-turn-reserved": (X == null ? void 0 : X.assistantKey) === S ? "true" : void 0,
                    ref: (me) => {
                      me ? oe.current.set(g, me) : oe.current.delete(g), w == null || w(g, me);
                    },
                    className: j ? "flex w-full items-start gap-2" : void 0,
                    style: (X == null ? void 0 : X.assistantKey) === S ? { minHeight: X.minHeight } : void 0,
                    children: [
                      h && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => h.onToggleMessage(S),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": Se ? "取消选择消息" : "选择消息",
                          children: Se ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(St, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: h ? `relative min-w-0 flex-1 rounded-xl px-2 transition-colors ${Se ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${R.role === "user" ? "py-2.5" : "py-1.5"}` : "relative",
                          children: [
                            g === F && Ue && /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 z-10 flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              yr,
                              {
                                phase: c,
                                label: s,
                                searchSteps: ne ? [] : [...m],
                                elapsedSeconds: a ? ae : void 0,
                                reasoning: ne ? q == null ? void 0 : q.reasoning : void 0
                              }
                            ) }),
                            /* @__PURE__ */ e(
                              pn,
                              {
                                msg: R,
                                actionKey: S,
                                feedback: P == null ? void 0 : P[S],
                                onFeedback: v,
                                onRefresh: _ ? () => _(g) : void 0,
                                onConfirmMiraDraft: L,
                                onPreviewMiraDraft: C,
                                onCancelMiraDraft: D,
                                pendingDisplayActionKey: G,
                                onDisplayCardAction: U,
                                isTyping: a && g === F
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
              F < 0 && T && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                yr,
                {
                  phase: c,
                  label: s,
                  searchSteps: ne ? [] : [...m],
                  elapsedSeconds: a ? ae : void 0
                }
              ) }) })
            ]
          }
        )
      }
    ),
    f && f.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${f.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: f.height,
          transform: `translateY(${f.top}px)`
        }
      }
    )
  ] });
}
et.memo(cs);
function xl({
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
const bl = Gr(
  function({ header: a, children: c, sidePanels: s }, o) {
    return /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
      a,
      /* @__PURE__ */ r("div", { ref: o, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: c }),
        s
      ] })
    ] });
  }
), gl = Gr(
  function({ open: a, width: c, resizing: s = !1, overlay: o = !1, overlayRight: m = 0, children: p }, N) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: N,
        "data-overlay": o ? "true" : "false",
        style: { width: a ? c : 0, ...o ? { right: m } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${o ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${s ? "transition-none" : "transition-[width] duration-300 ease-out"} ${a ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: c }, className: "h-full min-w-0", children: p })
      }
    );
  }
);
function ds({
  isSidebarOpen: t,
  title: a,
  editingTitle: c,
  titleInputRef: s,
  divided: o = !1,
  actions: m,
  onOpenSidebar: p,
  onStartEditTitle: N,
  onEditingTitleChange: h,
  onCommitTitle: f,
  onEditingTitleKeyDown: P
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
              onClick: p,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(an, { size: 20 })
            }
          ),
          a !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: c !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              value: c,
              onChange: (v) => h == null ? void 0 : h(v.target.value),
              onBlur: f,
              onKeyDown: P,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${N ? "cursor-pointer" : ""}`,
              onClick: N,
              title: N ? "点击编辑对话名称" : a,
              children: a
            }
          ) })
        ] }),
        m && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: m })
      ]
    }
  );
}
function yl({ active: t = !1, icon: a, label: c, onClick: s }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: s,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${t ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        a,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: c })
      ]
    }
  );
}
function vl({
  items: t,
  activeMessageIndex: a,
  initiallyExpanded: c = !1,
  onSelect: s
}) {
  const [o, m] = x(c), [p, N] = x(null), [h, f] = x(0), [P, d] = x(0), [v, _] = x(!1), L = ie(null), C = ie({}), D = ie(null), G = Ie(() => {
    const A = L.current;
    if (!A) {
      f(0), d(0);
      return;
    }
    const { scrollTop: w, scrollHeight: j, clientHeight: B } = A;
    if (j <= B || B <= 0) {
      f(0), d(0);
      return;
    }
    const I = Math.max(B / j * B, 24), oe = B - I, b = w / Math.max(j - B, 1);
    f(I), d(oe * b);
  }, []), U = Ie(() => {
    G(), _(!0), D.current !== null && window.clearTimeout(D.current), D.current = window.setTimeout(() => _(!1), 650);
  }, [G]), O = () => {
    D.current !== null && (window.clearTimeout(D.current), D.current = null), m(!1), N(null), _(!1);
  };
  return ge(() => {
    if (!o) return;
    const A = window.requestAnimationFrame(G);
    return () => window.cancelAnimationFrame(A);
  }, [o, t.length, G]), ge(() => {
    const A = L.current, w = C.current[a];
    if (!A || !w) return;
    const j = A.scrollTop, B = j + A.clientHeight, I = w.offsetTop, oe = I + w.offsetHeight, b = 16;
    I < j + b ? A.scrollTo({ top: Math.max(I - b, 0), behavior: "auto" }) : oe > B - b && A.scrollTo({
      top: Math.max(oe - A.clientHeight + b, 0),
      behavior: "auto"
    });
  }, [a, t.length]), ge(() => () => {
    D.current !== null && window.clearTimeout(D.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => m(!0),
      onMouseLeave: O,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: L,
          onScroll: U,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${o ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((A) => {
              const w = A.messageIndex === a, j = p === A.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (B) => {
                    C.current[A.messageIndex] = B;
                  },
                  type: "button",
                  onClick: () => s(A.messageIndex),
                  onMouseEnter: () => N(A.messageIndex),
                  onMouseLeave: () => N(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${o ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${A.messageIndex + 1} 条用户消息`,
                  title: A.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${o ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${w ? "text-primary" : j ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: A.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${w ? "h-[4px] w-[12px] bg-primary" : j ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                A.messageIndex
              );
            }) }),
            o && h > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${v ? "opacity-100" : "opacity-0"}`,
                style: { height: h, transform: `translateY(${P}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function wl({
  selectedCount: t,
  shareLink: a,
  modalOpen: c,
  copied: s = !1,
  contentMaxWidth: o = 840,
  onCancel: m,
  onCreateLink: p,
  onCloseModal: N,
  onCopyLink: h
}) {
  return /* @__PURE__ */ r(ot, { children: [
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
            /* @__PURE__ */ e(nt, { type: "secondary", size: "small", onClick: m, children: "取消" }),
            /* @__PURE__ */ e(
              nt,
              {
                type: "primary",
                size: "small",
                disabled: t <= 0,
                onClick: p,
                children: "创建分享链接"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e(
      dr,
      {
        visible: c,
        title: "创建分享链接",
        width: 450,
        onCancel: N,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: a }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: h,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  s ? /* @__PURE__ */ e(St, { size: 14 }) : /* @__PURE__ */ e(ir, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s ? "已复制" : "复制" })
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function hn({
  attachments: t,
  uploads: a = [],
  className: c = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  deletingAttachmentId: s,
  unavailableHint: o,
  error: m,
  onDownloadAttachment: p,
  onDeleteAttachment: N
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${c}`, children: [
    /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
    t.length || a.length ? /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap gap-2.5", children: [
      a.map((h) => /* @__PURE__ */ r("div", { className: "relative inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText", children: [
        /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: h.name }),
        /* @__PURE__ */ r("span", { className: "shrink-0 tabular-nums text-xs text-tertiaryText", children: [
          h.progress,
          "%"
        ] }),
        /* @__PURE__ */ e("span", { className: "absolute inset-x-3 bottom-0 h-0.5 overflow-hidden rounded-full bg-lineSoft", children: /* @__PURE__ */ e("span", { className: "block h-full rounded-full bg-primary transition-[width] duration-150", style: { width: `${h.progress}%` } }) })
      ] }, h.id)),
      t.map((h) => {
        const f = s === h.id;
        return /* @__PURE__ */ r(
          "div",
          {
            className: "inline-flex max-w-full items-center rounded-full border border-lineSubtle bg-surface text-sm text-secondaryText",
            title: h.statusLabel,
            children: [
              p ? /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: () => p(h.id),
                  className: "inline-flex min-w-0 items-center gap-2 rounded-full py-1.5 pl-3 pr-2 transition-colors hover:text-primaryText",
                  "aria-label": `下载附件 ${h.name}`,
                  title: `下载附件 ${h.name}`,
                  children: [
                    /* @__PURE__ */ e(Ft, { size: 14, className: "shrink-0" }),
                    /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: h.name }),
                    h.status === "processing" ? /* @__PURE__ */ e(gt, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ e(Pn, { size: 13 })
                  ]
                }
              ) : /* @__PURE__ */ r("span", { className: "inline-flex min-w-0 items-center gap-2 px-3 py-1.5", children: [
                /* @__PURE__ */ e(Ft, { size: 14, className: "shrink-0" }),
                /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: h.name }),
                h.status === "processing" && /* @__PURE__ */ e(gt, { size: 12, className: "animate-spin" })
              ] }),
              N && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  disabled: f,
                  onClick: () => N(h.id),
                  className: "mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                  "aria-label": `删除附件 ${h.name}`,
                  title: "删除附件",
                  children: f ? /* @__PURE__ */ e(gt, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(sn, { size: 13 })
                }
              )
            ]
          },
          h.id
        );
      })
    ] }) : null,
    o && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: o }),
    m && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: m })
  ] });
}
const us = {
  disabled: /* @__PURE__ */ e(Bn, { size: 14 }),
  pending: /* @__PURE__ */ e(cr, { size: 14 }),
  indexed: /* @__PURE__ */ e(Ht, { size: 14 })
};
function fn({
  createdByName: t,
  updatedByName: a,
  updatedAt: c,
  index: s
}) {
  return !t && !a && !c && !s ? null : /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    t && /* @__PURE__ */ r("span", { children: [
      "创建人: ",
      t
    ] }),
    a && /* @__PURE__ */ r("span", { children: [
      "最近修改: ",
      a
    ] }),
    c && /* @__PURE__ */ e("span", { children: c }),
    s && /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", title: s.detail, children: [
      us[s.status],
      s.statusLabel
    ] })
  ] });
}
const ms = "_preview_gpk4w_1", ps = "_editor_gpk4w_3", hs = "_tableContainer_gpk4w_628", Tr = {
  preview: ms,
  editor: ps,
  tableContainer: hs
}, fs = {
  table: ({ node: t, ...a }) => /* @__PURE__ */ e("div", { className: Tr.tableContainer, children: /* @__PURE__ */ e("table", { ...a }) })
};
function xs({
  document: t,
  layout: a = "page",
  onDownloadAttachment: c,
  attachmentUploads: s = [],
  showTags: o = !0
}) {
  var P, d;
  const [m, p] = x(!1), N = ie(null), h = a === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => () => {
    N.current !== null && window.clearTimeout(N.current);
  }, []);
  const f = () => {
    p(!0), N.current !== null && window.clearTimeout(N.current), N.current = window.setTimeout(() => p(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${h}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: t.title }),
      /* @__PURE__ */ e(
        fn,
        {
          createdByName: t.createdByName,
          updatedByName: t.updatedByName,
          updatedAt: t.updatedAt,
          index: t.index
        }
      ),
      o && /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: (((P = t.tags) == null ? void 0 : P.length) ?? 0) > 0 ? (d = t.tags) == null ? void 0 : d.map((v) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full border border-lineSubtle bg-bgLight px-2.5 py-1 text-xs text-secondaryText", children: v }, v)) : /* @__PURE__ */ e("span", { className: "text-xs text-tertiaryText", children: "暂无标签" }) }),
      /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
    ] }),
    /* @__PURE__ */ r(
      "section",
      {
        onScroll: f,
        className: `document-preview-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${m ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${Tr.preview} ${h}`, children: /* @__PURE__ */ e(on, { remarkPlugins: [cn], components: fs, children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${a === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(kr, { description: "正文暂无内容" }) }),
          (t.attachments.length > 0 || s.length > 0) && /* @__PURE__ */ e(
            hn,
            {
              attachments: t.attachments,
              uploads: s,
              onDownloadAttachment: c,
              className: `${a === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`
            }
          )
        ]
      }
    )
  ] });
}
function Nl({
  tabs: t,
  activeKey: a,
  onSelectTab: c,
  onCloseTab: s,
  onClose: o,
  pendingActionKey: m,
  onAction: p,
  resolveActions: N,
  renderContent: h,
  onDownloadAttachment: f,
  onResizeStart: P
}) {
  const d = t.find((L) => L.key === a) ?? null, v = d ? (N == null ? void 0 : N(d)) ?? d.actions : void 0, _ = d ? h == null ? void 0 : h(d) : void 0;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: P,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: t.map((L) => {
        const C = L.key === a;
        return /* @__PURE__ */ r("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => c(L.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${C ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                L.type === "knowledge" || L.type === "draft" ? /* @__PURE__ */ e(Ft, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(_n, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: L.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (D) => {
                D.stopPropagation(), s(L.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${L.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(jt, { size: 12 })
            }
          )
        ] }, L.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        d && (v == null ? void 0 : v.map((L) => /* @__PURE__ */ e(
          nt,
          {
            type: L.tone ?? "secondary",
            size: "small",
            disabled: m === d.key || !p,
            onClick: () => p == null ? void 0 : p(d.key, L.id),
            children: L.label
          },
          L.id
        ))),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
            title: "关闭预览",
            "aria-label": "关闭预览",
            children: /* @__PURE__ */ e(jt, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: d ? _ || (d.document ? /* @__PURE__ */ e(
      xs,
      {
        document: d.document,
        layout: "panel",
        onDownloadAttachment: f
      }
    ) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: d.loading ? "正在加载文档…" : d.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function kl({
  projectName: t = "未归属项目",
  searchQuery: a,
  error: c,
  knowledgeDocs: s,
  experiments: o,
  activePreviewKey: m,
  onSearchQueryChange: p,
  onOpenKnowledge: N,
  onOpenExperiment: h,
  onResizeStart: f
}) {
  const P = s.length + o.length;
  return /* @__PURE__ */ r("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: f,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ r("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ r("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: t }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Ct, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: a,
              onChange: (d) => p(d.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: c ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: c }) : P === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: a.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(ot, { children: [
        s.map((d) => {
          const v = `knowledge:${d.id}`, _ = m === v;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => N(d.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${_ ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${_ ? "font-semibold" : "font-normal"}`, children: d.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: d.tags[0] ?? "未分类" })
              ]
            },
            d.id
          );
        }),
        o.map((d) => {
          const v = `experiment:${d.id}`, _ = m === v;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => h(d.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${_ ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${_ ? "font-semibold" : "font-normal"}`, children: d.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: d.tags[0] ?? d.status })
              ]
            },
            d.id
          );
        })
      ] }) }) })
    ] }) })
  ] });
}
const bs = 50, gs = 100 * 1024 * 1024, ys = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", vs = [
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
], ws = /(?:^|\s)\/([^\s/]*)$/, Ns = /(?:^|\s)@([^\s@]*)$/, ks = (t, a) => {
  const s = t.slice(0, a).match(ws);
  return s ? s[1] : null;
}, Ts = (t, a) => {
  const s = t.slice(0, a).match(Ns);
  return s ? s[1] : null;
}, Tl = (t, a, c, s) => {
  const o = t.slice(0, a), m = t.slice(c), p = o.match(/(?:^|\s)\/[^\s/]*$/);
  if (!p) {
    const d = `/${s} `;
    return { value: `${o}${d}${m}`, cursor: o.length + d.length };
  }
  const N = o.length - p[0].length, f = `${p[0].startsWith(" ") ? " " : ""}/${s} `, P = `${o.slice(0, N)}${f}`;
  return {
    value: `${P}${m}`,
    cursor: P.length
  };
}, Cl = (t, a, c, s) => {
  const o = t.slice(0, a), m = t.slice(c), p = o.match(/(?:^|\s)@[^\s@]*$/);
  if (!p) {
    const d = `@${s} `;
    return { value: `${o}${d}${m}`, cursor: o.length + d.length };
  }
  const N = o.length - p[0].length, f = `${p[0].startsWith(" ") ? " " : ""}@${s} `, P = `${o.slice(0, N)}${f}`;
  return {
    value: `${P}${m}`,
    cursor: P.length
  };
}, Cs = [], Sl = [], gr = [
  { id: "low", label: "Fast", desc: "快速响应，适合简单问题" },
  { id: "medium", label: "Deep", desc: "深度分析，平衡速度与质量" },
  { id: "high", label: "Max", desc: "最强推理，适合复杂任务" }
], qr = "DeepSeek V4", xn = ({
  onSend: t,
  disabled: a,
  autoFocus: c = !1,
  isStreaming: s = !1,
  onCancel: o,
  leadingControls: m,
  skillOptions: p = vs,
  fileOptions: N = Cs,
  uploadAccept: h,
  validateUploadFile: f,
  onUploadValidationError: P
}) => {
  var be, V;
  const [d, v] = x(""), [_, L] = x(!1), [C, D] = x(!1), [G, U] = x(""), [O, A] = x(-1), [w, j] = x(!1), [B, I] = x(""), [oe, b] = x(-1), [ee, ue] = x([]), [X, $] = x([]), [ae, fe] = x([]), [M, T] = x(!1), [F, J] = x("medium"), [ve, de] = x(!1), [Y, q] = x(!1), [ne, Ue] = x(null), Oe = ie(null), Re = ie(!1), _e = ie(0), te = ie(null), R = Nn(), g = ie([]), S = ie(null), Se = ie(null), me = ie(null), E = ie(null), ye = s, ze = ye && !!o;
  ge(() => {
    g.current = ee;
  }, [ee]), ge(() => () => {
    g.current.forEach((l) => {
      l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    });
  }, []), ge(() => {
    if (!ve) return;
    const l = (z) => {
      S.current && !S.current.contains(z.target) && (de(!1), q(!1));
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [ve]), ge(() => () => {
    E.current && clearTimeout(E.current);
  }, []);
  const xe = ke(() => {
    const l = G.trim().toLowerCase();
    return l ? p.filter((z) => `${z.id} ${z.description} ${z.source}`.toLowerCase().includes(l)) : p;
  }, [p, G]), $e = ke(() => {
    const l = B.trim().toLowerCase();
    return l ? N.filter((z) => `${z.name} ${z.projectName} ${z.sourceType} ${z.operatorName ?? ""} ${z.operatedAt ?? ""}`.toLowerCase().includes(l)) : N.filter((z) => z.isRecent).slice(0, 10);
  }, [N, B]), Me = Ie((l, z) => {
    const K = z ?? l.length, Te = ks(l, K);
    if (Te !== null) {
      D(!0), U(Te), A(-1), j(!1), I(""), b(-1);
      return;
    }
    const Ae = Ts(l, K);
    if (Ae !== null) {
      j(!0), I(Ae), b(-1), D(!1), U(""), A(-1);
      return;
    }
    D(!1), U(""), A(-1), j(!1), I(""), b(-1);
  }, []), Le = Ie((l) => {
    if (l.disabled) return;
    const z = Oe.current, K = (z == null ? void 0 : z.selectionStart) ?? d.length, Te = (z == null ? void 0 : z.selectionEnd) ?? K, Ae = d.slice(0, K), He = d.slice(Te), Ne = (() => {
      const Be = Ae.match(/(?:^|\s)\/[^\s/]*$/);
      if (!Be)
        return { value: d, cursor: K };
      const De = Ae.length - Be[0].length, Ye = Be[0].startsWith(" ") ? " " : "", lt = `${Ae.slice(0, De)}${Ye}`;
      return {
        value: `${lt}${He}`,
        cursor: lt.length
      };
    })();
    $((Be) => {
      const De = `skill-${l.id}`;
      return Be.some((Ye) => Ye.id === De) ? Be : [...Be, { id: De, type: "skill", label: l.id, sourceId: l.id }];
    }), v(Ne.value), D(!1), U(""), A(-1), requestAnimationFrame(() => {
      z && (z.focus(), z.setSelectionRange(Ne.cursor, Ne.cursor));
    });
  }, [d]), we = Ie((l) => {
    const z = Oe.current, K = (z == null ? void 0 : z.selectionStart) ?? d.length, Te = (z == null ? void 0 : z.selectionEnd) ?? K, Ae = d.slice(0, K), He = d.slice(Te), Ne = (() => {
      const Be = Ae.match(/(?:^|\s)@[^\s@]*$/);
      if (!Be)
        return { value: d, cursor: K };
      const De = Ae.length - Be[0].length, Ye = Be[0].startsWith(" ") ? " " : "", lt = `${Ae.slice(0, De)}${Ye}`;
      return {
        value: `${lt}${He}`,
        cursor: lt.length
      };
    })();
    fe((Be) => {
      const De = `doc-${l.id}`;
      return Be.some((Ye) => Ye.id === De) ? Be : [...Be, { id: De, type: "doc", label: l.name, sourceId: l.id }];
    }), v(Ne.value), j(!1), I(""), b(-1), requestAnimationFrame(() => {
      z && (z.focus(), z.setSelectionRange(Ne.cursor, Ne.cursor));
    });
  }, [d]), Z = Ie(() => {
    T(!1);
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
  }, []), Ge = Ie((l) => {
    const z = Array.from(l.target.files ?? []);
    if (z.length === 0) return;
    const K = z.filter((Te) => {
      const Ae = f == null ? void 0 : f(Te);
      return Ae ? (P == null || P(Ae), !1) : !0;
    });
    ue((Te) => {
      const Ae = new Set(Te.map((Ne) => Ne.id)), He = [...Te];
      return K.forEach((Ne) => {
        if (Ne.size > gs || He.length >= bs) return;
        const Be = `${Ne.name}-${Ne.size}-${Ne.lastModified}`;
        if (Ae.has(Be)) return;
        const De = Ne.type.startsWith("image/");
        Ae.add(Be), He.push({
          id: Be,
          name: Ne.name,
          mimeType: Ne.type || "application/octet-stream",
          previewUrl: De ? URL.createObjectURL(Ne) : void 0,
          file: Ne
        });
      }), He;
    }), l.target.value = "";
  }, [P, f]), je = Ie((l) => {
    ue((z) => {
      const K = z.find((Te) => Te.id === l);
      return K != null && K.previewUrl && URL.revokeObjectURL(K.previewUrl), z.filter((Te) => Te.id !== l);
    });
  }, []), Ee = Ie((l) => {
    $((z) => z.filter((K) => K.id !== l));
  }, []), Fe = Ie((l) => {
    fe((z) => z.filter((K) => K.id !== l));
  }, []), tt = Ie(() => {
    !d.trim() || a || s || (t({
      content: d,
      attachments: ee.map((l) => ({
        id: l.id,
        name: l.name,
        mimeType: l.mimeType,
        previewUrl: l.previewUrl,
        file: l.file
      })),
      references: [...X, ...ae],
      thinkingLevel: F
    }), v(""), ue([]), $([]), fe([]), D(!1), U(""), A(-1), j(!1), I(""), b(-1));
  }, [d, a, s, t, ee, ae, X, F]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: R,
        ref: te,
        type: "file",
        multiple: !0,
        accept: h,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Ge
      }
    ),
    (ee.length > 0 || X.length > 0 || ae.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      X.map((l) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Qr, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: l.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ee(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${l.label}`,
                children: /* @__PURE__ */ e(jt, { size: 12 })
              }
            )
          ]
        },
        l.id
      )),
      ae.map((l) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Jr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: l.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Fe(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${l.label}`,
                children: /* @__PURE__ */ e(jt, { size: 12 })
              }
            )
          ]
        },
        l.id
      )),
      ee.map((l) => /* @__PURE__ */ r(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            l.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: l.previewUrl, alt: l.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(en, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ r("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: l.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: l.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => je(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${l.name}`,
                children: /* @__PURE__ */ e(jt, { size: 12 })
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
        ref: Oe,
        autoFocus: c,
        value: d,
        onCompositionStart: () => {
          Re.current = !0;
        },
        onCompositionEnd: (l) => {
          Re.current = !1, _e.current = performance.now(), Me(
            l.currentTarget.value,
            l.currentTarget.selectionStart
          );
        },
        onChange: (l) => {
          const z = l.target.value;
          v(z), Me(z, l.target.selectionStart);
        },
        onClick: (l) => {
          Me(l.currentTarget.value, l.currentTarget.selectionStart);
        },
        onKeyUp: (l) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(l.key) || Me(l.currentTarget.value, l.currentTarget.selectionStart);
        },
        onKeyDown: (l) => {
          const z = l.nativeEvent;
          if (!(Re.current || z.isComposing || z.keyCode === 229 || l.key === "Enter" && performance.now() - _e.current < 50)) {
            if (l.key === "Enter" && (l.shiftKey || l.metaKey || l.ctrlKey)) {
              l.preventDefault();
              const K = l.currentTarget, Te = K.selectionStart ?? d.length, Ae = K.selectionEnd ?? Te, He = `${d.slice(0, Te)}
${d.slice(Ae)}`, Ne = Te + 1;
              v(He), Me(He, Ne), requestAnimationFrame(() => {
                K.setSelectionRange(Ne, Ne);
              });
              return;
            }
            if (C) {
              if (l.key === "ArrowDown") {
                l.preventDefault(), A((K) => xe.length === 0 ? -1 : K < 0 ? 0 : (K + 1) % xe.length);
                return;
              }
              if (l.key === "ArrowUp") {
                l.preventDefault(), A((K) => xe.length === 0 ? -1 : K < 0 ? xe.length - 1 : (K - 1 + xe.length) % xe.length);
                return;
              }
              if (l.key === "Escape") {
                l.preventDefault(), D(!1), U(""), A(-1);
                return;
              }
              if (l.key === "Enter" && !l.shiftKey) {
                l.preventDefault();
                const K = O >= 0 ? xe[O] : void 0;
                K && Le(K);
                return;
              }
            }
            if (w) {
              if (l.key === "ArrowDown") {
                l.preventDefault(), b((K) => $e.length === 0 ? -1 : K < 0 ? 0 : (K + 1) % $e.length);
                return;
              }
              if (l.key === "ArrowUp") {
                l.preventDefault(), b((K) => $e.length === 0 ? -1 : K < 0 ? $e.length - 1 : (K - 1 + $e.length) % $e.length);
                return;
              }
              if (l.key === "Escape") {
                l.preventDefault(), j(!1), I(""), b(-1);
                return;
              }
              if (l.key === "Enter" && !l.shiftKey) {
                l.preventDefault();
                const K = oe >= 0 ? $e[oe] : void 0;
                K && we(K);
                return;
              }
            }
            l.key === "Enter" && !l.shiftKey && (l.preventDefault(), tt());
          }
        },
        disabled: a,
        onFocus: () => L(!0),
        onBlur: () => {
          L(!1), D(!1), j(!1);
        },
        placeholder: _ ? ys : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${ee.length > 0 || X.length > 0 || ae.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    C && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (l) => l.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: G ? `搜索 skill：${G}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: xe.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : xe.map((l, z) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: l.disabled,
          title: l.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${l.disabled ? "cursor-not-allowed opacity-50" : z === O ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Le(l),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: l.badge }),
            /* @__PURE__ */ r("span", { className: "flex min-w-0 flex-1 items-center gap-1 overflow-hidden", children: [
              /* @__PURE__ */ e(
                "span",
                {
                  className: "max-w-full shrink-0 truncate whitespace-nowrap text-[13px] font-semibold text-primaryText",
                  title: l.id,
                  children: l.id
                }
              ),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[12px] text-tertiaryText", children: l.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: l.disabledReason || l.source })
          ]
        },
        l.id
      )) })
    ] }) }),
    w && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (l) => l.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: B ? `搜索文件：${B}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !B && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(cr, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        $e.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : $e.map((l, z) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${z === oe ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => we(l),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Ft, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: l.name }),
              !B && l.operatorName && l.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${l.operatorName} ${l.operatedAt}` })
            ]
          },
          l.id
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
            onMouseEnter: () => T(!0),
            onMouseLeave: () => T(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Z,
                  "aria-controls": R,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Nr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${M ? "block" : "hidden"}`,
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
              disabled: s,
              onClick: () => {
                de((l) => !l), q(!1);
              },
              "aria-haspopup": "menu",
              "aria-expanded": ve,
              className: `flex h-8 select-none items-center gap-1.5 rounded-full border px-2.5 text-[13px] font-medium transition-all disabled:cursor-not-allowed disabled:opacity-60 ${ve ? "border-controlBorderHover bg-primary-soft text-primary" : "border-borderGray bg-white text-secondaryText hover:border-controlBorder hover:bg-bgLight"}`,
              children: [
                /* @__PURE__ */ e(zr, { size: 13, className: "shrink-0" }),
                /* @__PURE__ */ e("span", { className: "max-w-[90px] truncate leading-none", children: qr }),
                /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center rounded bg-bgLight px-1 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (be = gr.find((l) => l.id === F)) == null ? void 0 : be.label }),
                /* @__PURE__ */ e(
                  In,
                  {
                    size: 12,
                    className: `shrink-0 transition-transform duration-200 ${ve ? "rotate-0" : "rotate-180"}`
                  }
                )
              ]
            }
          ),
          ve && /* @__PURE__ */ r(
            "div",
            {
              ref: Se,
              role: "menu",
              className: "absolute bottom-full right-0 z-50 mb-2 w-[220px] rounded-xl border border-[#e6ecf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
              onMouseDown: (l) => l.preventDefault(),
              children: [
                /* @__PURE__ */ e("div", { className: "px-3 pb-1 pt-2.5", children: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-tertiaryText", children: [
                  /* @__PURE__ */ e(zr, { size: 11 }),
                  "模型"
                ] }) }),
                /* @__PURE__ */ e("div", { className: "px-1.5 pb-1", children: /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "menuitemradio",
                    "aria-checked": "true",
                    onClick: () => {
                      de(!1), q(!1);
                    },
                    className: "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-primaryText transition-colors hover:bg-[#f4f7fb]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "truncate text-[13px] font-medium leading-tight", children: qr }),
                      /* @__PURE__ */ e("span", { className: "flex w-4 shrink-0 items-center gap-1.5", children: /* @__PURE__ */ e(St, { size: 14, className: "shrink-0 text-primaryText" }) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "mx-3 border-t border-[#eef2f6]" }),
                /* @__PURE__ */ e("div", { className: "px-1.5 py-1.5", children: /* @__PURE__ */ r(
                  "div",
                  {
                    ref: me,
                    className: "relative",
                    onMouseEnter: () => {
                      if (E.current && clearTimeout(E.current), Se.current) {
                        const l = Se.current.getBoundingClientRect();
                        Ue({
                          bottom: window.innerHeight - l.bottom,
                          left: l.left - 209
                        });
                      }
                      q(!0);
                    },
                    onMouseLeave: () => {
                      E.current = setTimeout(() => q(!1), 120);
                    },
                    children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: `flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 transition-colors ${Y ? "bg-[#f4f7fb]" : "hover:bg-[#f4f7fb]"}`,
                          children: [
                            /* @__PURE__ */ r("span", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ e(Rn, { size: 13, className: "shrink-0 text-tertiaryText" }),
                              /* @__PURE__ */ e("span", { className: "text-[13px] font-medium leading-tight text-primaryText", children: "思考深度" })
                            ] }),
                            /* @__PURE__ */ r("span", { className: "flex shrink-0 items-center gap-1.5", children: [
                              /* @__PURE__ */ e("span", { className: "rounded bg-bgLight px-1.5 py-0.5 text-[10px] font-semibold leading-none text-tertiaryText", children: (V = gr.find((l) => l.id === F)) == null ? void 0 : V.label }),
                              /* @__PURE__ */ e(Pt, { size: 13, className: "text-tertiaryText" })
                            ] })
                          ]
                        }
                      ),
                      Y && ne && /* @__PURE__ */ e(
                        "div",
                        {
                          role: "menu",
                          style: {
                            position: "fixed",
                            bottom: `${ne.bottom}px`,
                            left: `${ne.left}px`
                          },
                          className: "z-[9999] w-[200px] overflow-hidden rounded-xl border border-[#e6ecf2] bg-white py-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
                          onMouseEnter: () => {
                            E.current && clearTimeout(E.current), q(!0);
                          },
                          onMouseLeave: () => {
                            E.current = setTimeout(() => q(!1), 120);
                          },
                          children: gr.map((l) => {
                            const z = F === l.id;
                            return /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                role: "menuitemradio",
                                "aria-checked": z,
                                onClick: () => {
                                  J(l.id), q(!1), de(!1);
                                },
                                className: `mx-1.5 flex w-[calc(100%-0.75rem)] items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${z ? "bg-[#f4f7fb]" : "hover:bg-[#f8fafc]"}`,
                                children: /* @__PURE__ */ r("span", { className: "flex min-w-0 flex-col gap-0.5", children: [
                                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                                    /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: l.label }),
                                    z && /* @__PURE__ */ e("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-tertiaryText" })
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
            onClick: ye ? o : tt,
            disabled: ye ? !ze : a || !d.trim(),
            "aria-label": ye ? "停止生成" : "发送消息",
            title: ye ? "停止生成" : "发送消息",
            className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${ze || !ye && d.trim() && !a ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
            children: ye ? /* @__PURE__ */ e(Dn, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(jn, { size: 16 })
          }
        )
      ] })
    ] })
  ] }) });
};
et.memo(xn);
const Ss = ({ messages: t, isTyping: a, statusPhase: c = "thinking", searchSteps: s = [] }) => {
  const o = ie(null);
  ge(() => {
    var p;
    (p = o.current) == null || p.scrollIntoView({ behavior: "smooth" });
  }, [t.length, a]);
  const m = ke(() => t.map((p, N) => /* @__PURE__ */ e(rs, { msg: p }, `${N}-${p.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    m,
    a && /* @__PURE__ */ e(ls, { phase: c, searchSteps: s }),
    /* @__PURE__ */ e("div", { ref: o })
  ] });
};
et.memo(Ss);
const Ms = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
], bn = ({ onSelect: t, prompts: a = Ms, disabled: c = !1 }) => {
  const s = Ie((o) => {
    t(o);
  }, [t]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: a.map((o) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => s(o),
      disabled: c,
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60",
      children: o
    },
    o
  )) });
};
et.memo(bn);
const $s = (t, a) => {
  const c = Math.random() * t, s = Math.random() * a;
  return {
    x: c,
    y: s,
    baseX: c,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
}, Or = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary peer-autofill:left-4 peer-autofill:top-0 peer-autofill:-translate-y-1/2 peer-autofill:rounded peer-autofill:bg-surface peer-autofill:px-1.5 peer-autofill:text-xs peer-autofill:font-medium peer-autofill:text-primary";
function Ml({ onLogin: t, onLoginSuccess: a, onNavigate: c }) {
  const s = ie(null), o = ie(null), [m, p] = x(""), [N, h] = x(""), [f, P] = x(!0), [d, v] = x(!1), [_, L] = x(!1), [C, D] = x(null), G = ie(null), [U, O] = x(!1), [A, w] = x("email"), [j, B] = x(""), [I, oe] = x(""), [b, ee] = x(""), [ue, X] = x(""), [$, ae] = x(0), [fe, M] = x(!1), T = ke(() => m.trim().length > 0 && N.trim().length > 0 && !d, [
    m,
    d,
    N
  ]);
  ge(() => {
    if ($ <= 0) return;
    const Y = window.setTimeout(() => ae((q) => q - 1), 1e3);
    return () => clearTimeout(Y);
  }, [$]), ge(
    () => () => {
      G.current !== null && window.clearTimeout(G.current);
    },
    []
  ), ge(() => {
    const Y = s.current, q = o.current;
    if (!Y || !q) return;
    const ne = Y.getContext("2d");
    if (!ne) return;
    const Ue = window.getComputedStyle(document.documentElement), Oe = Ue.getPropertyValue("--chatui-color-auth-particle-active").trim(), Re = Ue.getPropertyValue("--chatui-color-auth-particle-idle").trim(), _e = Ue.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let te = 0, R = 0, g = 0, S = window.devicePixelRatio || 1, Se = [];
    const me = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, E = 150, ye = () => {
      const we = q.getBoundingClientRect();
      S = window.devicePixelRatio || 1, R = we.width, g = we.height, Y.width = R * S, Y.height = g * S, Y.style.width = `${R}px`, Y.style.height = `${g}px`, ne.setTransform(S, 0, 0, S, 0, 0);
      const Z = R < 768 ? 40 : 90;
      Se = Array.from({ length: Z }, () => $s(R, g));
    }, ze = (we) => {
      ne.beginPath(), ne.arc(we.x, we.y, we.size, 0, Math.PI * 2), ne.closePath(), ne.fill();
    }, xe = () => {
      ne.clearRect(0, 0, R, g);
      for (let we = 0; we < Se.length; we += 1) {
        const Z = Se[we];
        Z.x += Z.vx, Z.y += Z.vy, (Z.x < 0 || Z.x > R) && (Z.vx = -Z.vx), (Z.y < 0 || Z.y > g) && (Z.vy = -Z.vy);
        const Ge = me.x - Z.x, je = me.y - Z.y, Ee = Math.sqrt(Ge * Ge + je * je) || 1, Fe = Ge / Ee, tt = je / Ee, be = (me.radius - Ee) / me.radius, V = Fe * be * Z.density, l = tt * be * Z.density;
        if (Ee < me.radius)
          Z.x -= V * 0.5, Z.y -= l * 0.5, ne.fillStyle = Oe, Z.size = Math.min(Z.size + 0.1, 2.5);
        else {
          if (Z.x !== Z.baseX) {
            const z = Z.x - Z.baseX;
            Z.x -= z / 50;
          }
          if (Z.y !== Z.baseY) {
            const z = Z.y - Z.baseY;
            Z.y -= z / 50;
          }
          ne.fillStyle = Re, Z.size = Math.max(Z.size - 0.05, 1);
        }
        ze(Z);
        for (let z = we; z < Se.length; z += 1) {
          const K = Se[z], Te = Z.x - K.x, Ae = Z.y - K.y, He = Math.sqrt(Te * Te + Ae * Ae);
          if (He < E) {
            const Ne = (1 - He / E) * 0.4;
            ne.beginPath(), ne.strokeStyle = _e, ne.globalAlpha = Ne, ne.lineWidth = 1, ne.moveTo(Z.x, Z.y), ne.lineTo(K.x, K.y), ne.stroke(), ne.globalAlpha = 1, ne.closePath();
          }
        }
      }
      te = window.requestAnimationFrame(xe);
    }, $e = (we) => {
      const Z = q.getBoundingClientRect();
      me.x = we.clientX - Z.left, me.y = we.clientY - Z.top;
    }, Me = () => {
      me.x = -1e3, me.y = -1e3;
    }, Le = (we) => {
      if (we.touches.length < 1) return;
      const Z = q.getBoundingClientRect();
      me.x = we.touches[0].clientX - Z.left, me.y = we.touches[0].clientY - Z.top;
    };
    return ye(), xe(), window.addEventListener("resize", ye), q.addEventListener("mousemove", $e), q.addEventListener("mouseleave", Me), q.addEventListener("touchmove", Le, { passive: !0 }), q.addEventListener("touchend", Me), () => {
      window.cancelAnimationFrame(te), window.removeEventListener("resize", ye), q.removeEventListener("mousemove", $e), q.removeEventListener("mouseleave", Me), q.removeEventListener("touchmove", Le), q.removeEventListener("touchend", Me);
    };
  }, []);
  const F = async (Y) => {
    if (Y.preventDefault(), !!T) {
      v(!0), D(null);
      try {
        const q = await t({ email: m.trim(), password: N, rememberLogin: f });
        if (!q.ok) {
          D(q.message);
          return;
        }
        L(!0), G.current = window.setTimeout(() => {
          L(!1), a();
        }, 900);
      } catch {
        D("登录失败，请稍后重试。");
      } finally {
        v(!1);
      }
    }
  }, J = async () => {
    !j.trim() || $ > 0 || (v(!0), await new Promise((Y) => window.setTimeout(Y, 1e3)), v(!1), M(!0), ae(60));
  }, ve = async () => {
    if (A === "email") {
      if (!j.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j) || !I.trim() || I.length < 6 || !b.trim() || b.length < 6 || b !== ue) return;
      w("success");
    }
  }, de = () => {
    O(!1), w("email"), B(""), oe(""), ee(""), X(""), ae(0), M(!1);
  };
  return /* @__PURE__ */ r("div", { ref: o, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: s, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ r("form", { onSubmit: F, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: m,
              onChange: (Y) => {
                p(Y.target.value), D(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "username",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: Or, children: "邮箱" })
        ] }),
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "password",
              value: N,
              onChange: (Y) => {
                h(Y.target.value), D(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "current-password",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: Or, children: "密码" })
        ] }),
        C && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: C }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: f,
                  onChange: (Y) => P(Y.target.checked),
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
            disabled: !T,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: d ? "认证中..." : "登录" }),
              d && /* @__PURE__ */ r(
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
      !U && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
                /* @__PURE__ */ e(Fn, { size: 16, className: "text-authTextFaint" }),
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
                /* @__PURE__ */ e(Hn, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      U && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: de,
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
                value: j,
                onChange: (Y) => B(Y.target.value),
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
                  value: I,
                  onChange: (Y) => oe(Y.target.value.replace(/\D/g, "").slice(0, 6)),
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
                disabled: $ > 0 || d || !j.trim(),
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
                value: b,
                onChange: (Y) => ee(Y.target.value),
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
                value: ue,
                onChange: (Y) => X(Y.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${ue.length > 0 && b !== ue ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          ue.length > 0 && b !== ue && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ve,
              disabled: !j.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j) || !I.trim() || I.length < 6 || !b.trim() || b.length < 6 || b !== ue,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        A === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Ht, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ r("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: de,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${_ ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(Ht, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const Ls = (t, a) => {
  const c = Math.random() * t, s = Math.random() * a;
  return {
    x: c,
    y: s,
    baseX: c,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function $l({
  mode: t = "join-lab",
  onSendVerificationCode: a,
  onVerifyIdentity: c,
  onRegister: s,
  onEnterWorkspace: o,
  onNavigate: m
}) {
  const p = ie(null), N = ie(null), h = ie(null), [f, P] = x("identity"), [d, v] = x(""), [_, L] = x(""), [C, D] = x(""), [G, U] = x(""), [O, A] = x(""), [w, j] = x(""), B = t === "create-lab", [I, oe] = x(""), [b, ee] = x(""), [ue, X] = x(!1), [$, ae] = x(0), [fe, M] = x(""), [T, F] = x(null), J = I.length > 0 && I.trim().length < 6;
  ge(() => {
    if ($ <= 0) return;
    const te = window.setTimeout(() => ae((R) => R - 1), 1e3);
    return () => clearTimeout(te);
  }, [$]), ge(
    () => () => {
      h.current !== null && window.clearTimeout(h.current);
    },
    []
  ), ge(() => {
    const te = p.current, R = N.current;
    if (!te || !R) return;
    const g = te.getContext("2d");
    if (!g) return;
    const S = window.getComputedStyle(document.documentElement), Se = S.getPropertyValue("--chatui-color-auth-particle-active").trim(), me = S.getPropertyValue("--chatui-color-auth-particle-idle").trim(), E = S.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ye = 0, ze = 0, xe = 0, $e = window.devicePixelRatio || 1, Me = [];
    const Le = { x: -1e3, y: -1e3, radius: 120 }, we = 150, Z = () => {
      const be = R.getBoundingClientRect();
      $e = window.devicePixelRatio || 1, ze = be.width, xe = be.height, te.width = ze * $e, te.height = xe * $e, te.style.width = `${ze}px`, te.style.height = `${xe}px`, g.setTransform($e, 0, 0, $e, 0, 0);
      const V = ze < 768 ? 40 : 90;
      Me = Array.from({ length: V }, () => Ls(ze, xe));
    }, Ge = (be) => {
      g.beginPath(), g.arc(be.x, be.y, be.size, 0, Math.PI * 2), g.closePath(), g.fill();
    }, je = () => {
      g.clearRect(0, 0, ze, xe);
      for (let be = 0; be < Me.length; be += 1) {
        const V = Me[be];
        V.x += V.vx, V.y += V.vy, (V.x < 0 || V.x > ze) && (V.vx = -V.vx), (V.y < 0 || V.y > xe) && (V.vy = -V.vy);
        const l = Le.x - V.x, z = Le.y - V.y, K = Math.sqrt(l * l + z * z) || 1, Te = l / K, Ae = z / K, He = (Le.radius - K) / Le.radius, Ne = Te * He * V.density, Be = Ae * He * V.density;
        K < Le.radius ? (V.x -= Ne * 0.5, V.y -= Be * 0.5, g.fillStyle = Se, V.size = Math.min(V.size + 0.1, 2.5)) : (V.x !== V.baseX && (V.x -= (V.x - V.baseX) / 50), V.y !== V.baseY && (V.y -= (V.y - V.baseY) / 50), g.fillStyle = me, V.size = Math.max(V.size - 0.05, 1)), Ge(V);
        for (let De = be; De < Me.length; De += 1) {
          const Ye = Me[De], lt = V.x - Ye.x, ft = V.y - Ye.y, xt = Math.sqrt(lt * lt + ft * ft);
          if (xt < we) {
            const yt = (1 - xt / we) * 0.4;
            g.beginPath(), g.strokeStyle = E, g.globalAlpha = yt, g.lineWidth = 1, g.moveTo(V.x, V.y), g.lineTo(Ye.x, Ye.y), g.stroke(), g.globalAlpha = 1, g.closePath();
          }
        }
      }
      ye = window.requestAnimationFrame(je);
    }, Ee = (be) => {
      const V = R.getBoundingClientRect();
      Le.x = be.clientX - V.left, Le.y = be.clientY - V.top;
    }, Fe = () => {
      Le.x = -1e3, Le.y = -1e3;
    }, tt = (be) => {
      if (be.touches.length < 1) return;
      const V = R.getBoundingClientRect();
      Le.x = be.touches[0].clientX - V.left, Le.y = be.touches[0].clientY - V.top;
    };
    return Z(), je(), window.addEventListener("resize", Z), R.addEventListener("mousemove", Ee), R.addEventListener("mouseleave", Fe), R.addEventListener("touchmove", tt, { passive: !0 }), R.addEventListener("touchend", Fe), () => {
      window.cancelAnimationFrame(ye), window.removeEventListener("resize", Z), R.removeEventListener("mousemove", Ee), R.removeEventListener("mouseleave", Fe), R.removeEventListener("touchmove", tt), R.removeEventListener("touchend", Fe);
    };
  }, []);
  const ve = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(C) || $ > 0)) {
      X(!0), F(null);
      try {
        const te = await a(C);
        if (!te.ok) {
          F(te);
          return;
        }
        ae(te.resendAfterSeconds ?? 60), M(te.message ?? "短信验证码已发送");
      } catch {
        F({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        X(!1);
      }
    }
  }, de = () => ({
    email: d.trim(),
    name: _.trim(),
    phoneNumber: C,
    phoneVerificationCode: G.trim(),
    mode: t,
    ...B ? { labName: w.trim() } : { inviteCode: O.trim() }
  }), Y = () => {
    const te = ["identity", "password", "success"], R = te.indexOf(f);
    R < te.length - 1 && P(te[R + 1]);
  }, q = ke(() => {
    if (ue) return !1;
    switch (f) {
      case "identity":
        return B ? d.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d) && _.trim().length > 0 && /^1[3-9]\d{9}$/.test(C) && G.length === 6 && w.trim().length > 0 : d.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d) && _.trim().length > 0 && /^1[3-9]\d{9}$/.test(C) && G.length === 6 && O.trim().length > 0;
      case "password":
        return I.trim().length >= 6 && I === b;
      default:
        return !1;
    }
  }, [f, d, _, C, G, O, w, B, I, b, ue]), ne = async (te) => {
    if (te.preventDefault(), !!q) {
      X(!0), F(null);
      try {
        const R = de(), g = f === "password" ? await s({ ...R, password: I }) : await c(R);
        if (!g.ok) {
          F(g);
          return;
        }
        Y();
      } catch {
        F({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        X(!1);
      }
    }
  }, Ue = {
    identity: B ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, Oe = {
    identity: "",
    password: "",
    success: ""
  }, Re = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", _e = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: N, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: p, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Ue[f] }),
        Oe[f] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: Oe[f] })
      ] }),
      f !== "success" && /* @__PURE__ */ r("form", { onSubmit: ne, className: "space-y-5", children: [
        f === "identity" && /* @__PURE__ */ r(ot, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: d,
                onChange: (te) => {
                  v(te.target.value), F(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Re
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: _,
                onChange: (te) => {
                  L(te.target.value), F(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Re
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "姓名" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: C,
                  onChange: (te) => {
                    D(te.target.value.replace(/\D/g, "").slice(0, 11)), M(""), F(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Re
                }
              ),
              /* @__PURE__ */ e("span", { className: _e, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ve,
                disabled: $ > 0 || ue || !/^1[3-9]\d{9}$/.test(C),
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
                onChange: (te) => {
                  U(te.target.value.replace(/\D/g, "").slice(0, 6)), F(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Re
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "短信验证码" })
          ] }),
          fe && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: fe }),
          B ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: w,
                onChange: (te) => {
                  j(te.target.value), F(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Re
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: O,
                onChange: (te) => {
                  A(te.target.value), F(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Re
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "邀请码" })
          ] })
        ] }),
        f === "password" && /* @__PURE__ */ r(ot, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: I,
                onChange: (te) => {
                  oe(te.target.value), F(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Re} ${(T == null ? void 0 : T.field) === "password" || J ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "设置密码" }),
            ((T == null ? void 0 : T.field) === "password" || J) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (T == null ? void 0 : T.field) === "password" ? T.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: b,
                onChange: (te) => {
                  ee(te.target.value), F(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Re} ${b.length > 0 && I !== b ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: _e, children: "确认密码" }),
            b.length > 0 && I !== b && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        T && T.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: T.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !q,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: ue ? "处理中..." : f === "password" ? "完成注册" : "下一步" }),
              ue && /* @__PURE__ */ r(
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
      f === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Ht, { size: 40, className: "text-primary" }) })
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
              h.current = window.setTimeout(o, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      f !== "success" && /* @__PURE__ */ r("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
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
const Es = (t, a) => {
  const c = Math.random() * t, s = Math.random() * a;
  return { x: c, y: s, baseX: c, baseY: s, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Ll({ onSendCode: t, onResetPassword: a, onBackToLogin: c }) {
  const s = ie(null), o = ie(null), m = ie(null), [p, N] = x("phone"), [h, f] = x(""), [P, d] = x(""), [v, _] = x(""), [L, C] = x(""), [D, G] = x(!1), [U, O] = x(0), [A, w] = x(""), [j, B] = x(null);
  ge(() => {
    if (U <= 0) return;
    const $ = window.setTimeout(() => O((ae) => ae - 1), 1e3);
    return () => window.clearTimeout($);
  }, [U]), ge(() => {
    const $ = s.current, ae = o.current;
    if (!$ || !ae) return;
    const fe = $.getContext("2d");
    if (!fe) return;
    const M = window.getComputedStyle(document.documentElement), T = M.getPropertyValue("--chatui-color-auth-particle-active").trim(), F = M.getPropertyValue("--chatui-color-auth-particle-idle").trim(), J = M.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ve = 0, de = 0, Y = 0, q = [];
    const ne = { x: -1e3, y: -1e3, radius: 120 }, Ue = 150, Oe = () => {
      const g = ae.getBoundingClientRect(), S = window.devicePixelRatio || 1;
      de = g.width, Y = g.height, $.width = de * S, $.height = Y * S, $.style.width = `${de}px`, $.style.height = `${Y}px`, fe.setTransform(S, 0, 0, S, 0, 0), q = Array.from({ length: de < 768 ? 40 : 90 }, () => Es(de, Y));
    }, Re = () => {
      fe.clearRect(0, 0, de, Y);
      for (let g = 0; g < q.length; g += 1) {
        const S = q[g];
        S.x += S.vx, S.y += S.vy, (S.x < 0 || S.x > de) && (S.vx = -S.vx), (S.y < 0 || S.y > Y) && (S.vy = -S.vy);
        const Se = ne.x - S.x, me = ne.y - S.y, E = Math.sqrt(Se * Se + me * me) || 1, ye = (ne.radius - E) / ne.radius;
        E < ne.radius ? (S.x -= Se / E * ye * S.density * 0.5, S.y -= me / E * ye * S.density * 0.5, fe.fillStyle = T, S.size = Math.min(S.size + 0.1, 2.5)) : (S.x -= (S.x - S.baseX) / 50, S.y -= (S.y - S.baseY) / 50, fe.fillStyle = F, S.size = Math.max(S.size - 0.05, 1)), fe.beginPath(), fe.arc(S.x, S.y, S.size, 0, Math.PI * 2), fe.fill();
        for (let ze = g; ze < q.length; ze += 1) {
          const xe = q[ze], $e = S.x - xe.x, Me = S.y - xe.y, Le = Math.sqrt($e * $e + Me * Me);
          Le >= Ue || (fe.beginPath(), fe.globalAlpha = (1 - Le / Ue) * 0.4, fe.strokeStyle = J, fe.lineWidth = 1, fe.moveTo(S.x, S.y), fe.lineTo(xe.x, xe.y), fe.stroke(), fe.globalAlpha = 1);
        }
      }
      ve = window.requestAnimationFrame(Re);
    }, _e = (g) => {
      const S = ae.getBoundingClientRect();
      ne.x = g.clientX - S.left, ne.y = g.clientY - S.top;
    }, te = (g) => {
      if (!g.touches.length) return;
      const S = ae.getBoundingClientRect();
      ne.x = g.touches[0].clientX - S.left, ne.y = g.touches[0].clientY - S.top;
    }, R = () => {
      ne.x = -1e3, ne.y = -1e3;
    };
    return Oe(), Re(), window.addEventListener("resize", Oe), ae.addEventListener("mousemove", _e), ae.addEventListener("mouseleave", R), ae.addEventListener("touchmove", te, { passive: !0 }), ae.addEventListener("touchend", R), () => {
      window.cancelAnimationFrame(ve), window.removeEventListener("resize", Oe), ae.removeEventListener("mousemove", _e), ae.removeEventListener("mouseleave", R), ae.removeEventListener("touchmove", te), ae.removeEventListener("touchend", R);
    };
  }, []), ge(() => () => {
    m.current !== null && window.clearTimeout(m.current);
  }, []);
  const I = ke(() => /^1[3-9]\d{9}$/.test(h) && P.length === 6 && v.length >= 6 && v === L, [L, v, h, P]), oe = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", b = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: o, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: s, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      p === "phone" ? /* @__PURE__ */ r(ot, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async ($) => {
          if ($.preventDefault(), !(!I || D)) {
            G(!0), B(null);
            try {
              const ae = await a({ phoneNumber: h, phoneVerificationCode: P, newPassword: v });
              if (!ae.ok) {
                B(ae.message);
                return;
              }
              N("success");
            } catch {
              B("密码重置失败，请稍后重试。");
            } finally {
              G(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: h, onChange: ($) => {
                f($.target.value.replace(/\D/g, "").slice(0, 11)), w(""), B(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: oe }),
              /* @__PURE__ */ e("span", { className: b, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(h) || U > 0 || D)) {
                G(!0), B(null);
                try {
                  const $ = await t(h);
                  if (!$.ok) {
                    B($.message);
                    return;
                  }
                  O($.resendAfterSeconds ?? 60), w($.message ?? "短信验证码已发送");
                } catch {
                  B("验证码发送失败，请稍后重试。");
                } finally {
                  G(!1);
                }
              }
            }, disabled: U > 0 || D || !/^1[3-9]\d{9}$/.test(h), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${U > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: U > 0 ? `${U}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: P, onChange: ($) => {
              d($.target.value.replace(/\D/g, "").slice(0, 6)), B(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: oe }),
            /* @__PURE__ */ e("span", { className: b, children: "短信验证码" })
          ] }),
          A && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: A }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: v, onChange: ($) => {
              _($.target.value), B(null);
            }, required: !0, placeholder: " ", className: oe }),
            /* @__PURE__ */ e("span", { className: b, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: L, onChange: ($) => {
              C($.target.value), B(null);
            }, required: !0, placeholder: " ", className: `${oe} ${L.length > 0 && v !== L ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: b, children: "确认新密码" }),
            L.length > 0 && v !== L && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          j && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: j }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !I || D, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: D ? "处理中..." : "重置密码" }),
            D && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Ht, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          m.current = window.setTimeout(() => c({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const Wr = 10, Vr = (t) => t.isTaskConversation === !0 || t.source === "task" || t.id.startsWith("task-") || typeof t.taskId == "string" && t.taskId.trim().length > 0;
function El({
  currentPath: t,
  projects: a,
  initialChats: c,
  logoUrl: s,
  user: o,
  children: m,
  initialAiUsageWarningActive: p = !1,
  aiUsageWarningActive: N,
  canViewAiUsage: h = !0,
  canManageMembers: f = !0,
  chatActions: P = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: d,
  onLogout: v,
  onChatsChange: _,
  onRenameChat: L,
  onTogglePinChat: C,
  onShareChat: D,
  onDeleteChat: G
}) {
  const [U, O] = x(!0), [A, w] = x(240), [j, B] = x(!1), I = ie(0), oe = ie(240), [b, ee] = x(() => {
    const u = { unassigned: !0 };
    return a.forEach((Q) => {
      u[Q.id] = !0;
    }), u;
  }), [ue, X] = x(!1), [$, ae] = x(() => [...c]), [fe, M] = x(null), [T, F] = x(null), [J, ve] = x("time"), [de, Y] = x(!1), [q, ne] = x(null), [Ue, Oe] = x(""), [Re, _e] = x(!1), [te, R] = x(null), [g, S] = x(!1), [Se, me] = x(""), [E, ye] = x(""), [ze, xe] = x(!1), [$e, Me] = x(p), [Le, we] = x(!1), Z = N ?? $e, Ge = ie(null), je = ie(null), Ee = ie(null), Fe = () => {
    X(!1), v();
  }, tt = (u) => {
    ee((Q) => ({ ...Q, [u]: !Q[u] }));
  }, be = (u) => {
    M(null), F(null), me(""), R(u);
  }, V = async () => {
    var Q;
    if (!te || g) return;
    const u = te.id;
    S(!0), me("");
    try {
      await (G == null ? void 0 : G(u)), ae((pe) => pe.filter((We) => We.id !== u)), q === u && (ne(null), Oe("")), ((Q = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : Q[1]) === u && d("/chat/new", { replace: !0 }), R(null);
    } catch (ce) {
      me(ce instanceof Error ? ce.message : "对话删除失败");
    } finally {
      S(!1);
    }
  }, l = (u) => {
    const Q = $.find((pe) => pe.id === u);
    if (!Q) return;
    const ce = !Q.isPinned;
    ae((pe) => pe.map(
      (st) => st.id === u ? { ...st, isPinned: ce } : st
    )), C == null || C(u, ce), M(null);
  }, z = (u) => {
    ne(u.id), Oe(u.title), M(null);
  }, K = () => {
    ne(null), Oe("");
  }, Te = (u) => {
    const Q = Ue.trim();
    Q && (ae((ce) => ce.map((pe) => pe.id === u ? { ...pe, title: Q } : pe)), L == null || L(u, Q)), K();
  }, Ae = (u, Q) => {
    if (u.stopPropagation(), u.key === "Enter") {
      u.preventDefault(), Te(Q);
      return;
    }
    u.key === "Escape" && (u.preventDefault(), K());
  }, He = (u) => {
    var Q;
    if (q === u) {
      (Q = Ge.current) == null || Q.focus();
      return;
    }
    d(`/chat/${u}`);
  }, Ne = (u, Q = !1) => q === u.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (pe) => {
        var We;
        pe.stopPropagation(), (We = Ge.current) == null || We.focus();
      },
      children: [
        Q && /* @__PURE__ */ e(fr, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: Ge,
            value: Ue,
            onChange: (pe) => Oe(pe.target.value),
            onKeyDown: (pe) => Ae(pe, u.id),
            onBlur: () => Te(u.id),
            onClick: (pe) => pe.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    Q && /* @__PURE__ */ e(fr, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: u.title })
  ] }), Be = (u) => {
    I.current = u.clientX, oe.current = A, B(!0);
  };
  ge(() => {
    if (!j) return;
    const u = 200, Q = 440, ce = (We) => {
      const st = We.clientX - I.current, bt = Math.min(Q, Math.max(u, oe.current + st));
      w(bt);
    }, pe = () => {
      B(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", ce), window.addEventListener("mouseup", pe), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", ce), window.removeEventListener("mouseup", pe);
    };
  }, [j, A]), ge(() => {
    U || w(240);
  }, [U]), ge(() => {
    _ == null || _($);
  }, [$, _]), ge(() => {
    ae([...c]);
  }, [c]), ge(() => {
    if (!q) return;
    const u = window.requestAnimationFrame(() => {
      var Q;
      (Q = Ge.current) == null || Q.focus();
    });
    return () => {
      window.cancelAnimationFrame(u);
    };
  }, [q]), ge(() => () => {
    je.current !== null && window.clearTimeout(je.current), Ee.current !== null && window.clearTimeout(Ee.current);
  }, []);
  const De = () => {
    Y(!0), je.current !== null && window.clearTimeout(je.current), je.current = window.setTimeout(() => {
      Y(!1);
    }, 600);
  }, Ye = () => {
    xe(!0), Ee.current !== null && window.clearTimeout(Ee.current), Ee.current = window.setTimeout(() => {
      xe(!1);
    }, 600);
  };
  ge(() => {
    Z || we(!1);
  }, [Z]);
  const lt = () => {
    we(!0), d("/ai-usage");
  }, ft = ke(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...h ? [{
      key: "ai-usage",
      label: "AI用量"
    }] : [],
    ...f ? [{
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
  ], [f, h]), xt = (u) => {
    if (X(!1), u.key === "skills") {
      d("/skills");
      return;
    }
    if (u.key === "ai-usage") {
      d("/ai-usage");
      return;
    }
    if (u.key === "members") {
      d("/members");
      return;
    }
    if (u.key === "system-settings") {
      d("/system-settings");
      return;
    }
    u.key === "logout" && Fe();
  }, yt = (u) => u.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(sn, { size: 14 }), danger: !0 }] : [], Ot = (u, Q = P) => {
    const ce = [];
    return Q.rename && ce.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(Un, { size: 14 }) }), Q.share && ce.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(Kn, { size: 14 }) }), Q.pin && ce.push({
      key: "pin",
      label: u.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(fr, { size: 14 })
    }), ce;
  }, vt = (u, Q, ce = {}) => {
    const pe = ce.actions ?? P, We = ce.onMenuOpenIdChange ?? M, st = !!(pe.rename || pe.share || pe.pin || pe.delete), bt = ce.showTaskBadge !== !1 && Vr(u);
    return !st && !bt ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${bt ? "ml-6" : "ml-2"}`, children: [
      bt && !Q && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      st && /* @__PURE__ */ e(
        qt,
        {
          open: Q,
          onOpenChange: (it) => We(it ? u.id : null),
          placement: "bottom-end",
          width: ce.width ?? Math.max(140, Math.min(176, A - 56)),
          portal: ce.portal,
          trigger: /* @__PURE__ */ e(ln, { size: 14 }),
          onTriggerClick: (it) => {
            it.stopPropagation();
          },
          items: Ot(u, pe),
          footerItems: yt(pe),
          onItemClick: (it, Gt) => {
            if (Gt.stopPropagation(), it.key === "rename") {
              z(u), We(null);
              return;
            }
            if (it.key === "share") {
              D ? D(u.id) : d(`/chat/${u.id}?share=1`), We(null);
              return;
            }
            if (it.key === "pin") {
              l(u.id), We(null);
              return;
            }
            if (it.key === "delete") {
              be(u), We(null);
              return;
            }
            We(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${Q ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Wt = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(hr, { size: 14 }),
      path: "/projects",
      isActive: t === "/projects" || t.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(cr, { size: 14 }),
      path: "/tools",
      isActive: t === "/tools" || t.startsWith("/tool/")
    }
  ], wt = ke(() => {
    const u = t.match(/^\/chat\/([^/]+)$/);
    return u ? $.find((Q) => Q.id === u[1]) ?? null : null;
  }, [$, t]), dt = ke(
    () => $.filter((u) => u.isPinned),
    [$]
  ), Nt = ke(
    () => $.filter((u) => !u.isPinned),
    [$]
  ), ut = ke(
    () => J === "time" ? dt.slice(0, Wr) : dt,
    [dt, J]
  ), _t = ke(() => {
    if (J !== "time") return [];
    const u = Math.max(Wr - ut.length, 0);
    return Nt.slice(0, u);
  }, [J, Nt, ut.length]), ur = ke(
    () => ut.length + _t.length,
    [ut.length, _t.length]
  ), Vt = J === "time" && $.length > ur, Mt = ke(() => new Map(a.map((u) => [u.id, u.name])), [a]), $t = E.trim().toLowerCase(), Ut = ke(() => $t ? $.filter((u) => {
    const Q = u.projectId ? Mt.get(u.projectId) ?? "未分组" : "未分组";
    return `${u.title} ${Q} ${u.date}`.toLowerCase().includes($t);
  }) : $, [$, $t, Mt]);
  ge(() => {
    if (!wt) return;
    const u = wt.projectId ?? "unassigned";
    ee((Q) => Q[u] !== !1 ? Q : { ...Q, [u]: !0 });
  }, [wt]);
  const Kt = () => {
    ye(""), _e(!0);
  }, mt = () => {
    _e(!1), F(null), K(), xe(!1), Ee.current !== null && (window.clearTimeout(Ee.current), Ee.current = null);
  }, It = (u) => {
    _e(!1), F(null), d(`/chat/${u}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: U ? A : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${U ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: A, minWidth: A },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ r("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ r("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => d("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: s, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => O(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(qn, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => d("/chat/new"),
                    className: `nav-item ${t === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(On, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Wt.map((u) => {
                  const Q = u.isActive;
                  return /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => d(u.path),
                      className: `nav-item ${Q ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        u.icon,
                        /* @__PURE__ */ e("span", { children: u.label })
                      ]
                    },
                    u.path
                  );
                }) }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    onScroll: De,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${de ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      ut.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: ut.map((u) => {
                          const Q = t === `/chat/${u.id}`, ce = fe === u.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => He(u.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${q === u.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Q ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Ne(u, J !== "time"),
                                q !== u.id && vt(u, ce)
                              ]
                            }
                          ) }, u.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      J === "project" && a.map((u) => {
                        const Q = $.filter((pe) => pe.projectId === u.id && !pe.isPinned), ce = b[u.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => tt(u.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(hr, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: ce ? /* @__PURE__ */ e(Bt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Pt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: u.name })
                              ]
                            }
                          ),
                          ce && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Q.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : Q.map((pe) => {
                            const We = t === `/chat/${pe.id}`, st = fe === pe.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => He(pe.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${q === pe.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : We ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Ne(pe),
                                  q !== pe.id && vt(pe, st)
                                ]
                              }
                            ) }, pe.id);
                          }) })
                        ] }, u.id);
                      }),
                      J === "project" && (() => {
                        const u = $.filter((ce) => !ce.projectId && !ce.isPinned);
                        if (u.length === 0) return null;
                        const Q = b.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => tt("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(hr, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: Q ? /* @__PURE__ */ e(Bt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Pt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          Q && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: u.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : u.map((ce) => {
                            const pe = t === `/chat/${ce.id}`, We = fe === ce.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => He(ce.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${q === ce.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : pe ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Ne(ce),
                                  q !== ce.id && vt(ce, We)
                                ]
                              }
                            ) }, ce.id);
                          }) })
                        ] });
                      })(),
                      J === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        _t.map((u) => {
                          const Q = t === `/chat/${u.id}`, ce = fe === u.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => He(u.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${q === u.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Q ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Ne(u),
                                q !== u.id && vt(u, ce)
                              ]
                            }
                          ) }, u.id);
                        }),
                        Vt && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: Kt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(Pt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                Z && !Le && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(Wn, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: lt,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  qt,
                  {
                    open: ue,
                    onOpenChange: X,
                    placement: "top-start",
                    width: A - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ r("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ r("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: o.avatarUrl ? /* @__PURE__ */ e("img", { src: o.avatarUrl, alt: `${o.name}头像`, className: "h-full w-full object-cover" }) : o.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: o.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(Vn, { size: 18 }) })
                    ] }),
                    items: ft,
                    onItemClick: xt,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          U && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: Be,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${U ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof m == "function" ? m({ isSidebarOpen: U, setIsSidebarOpen: O, chats: $, setChats: ae, setAiUsageWarningActive: Me }) : m }) }) }),
    /* @__PURE__ */ e(
      dr,
      {
        visible: Re,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: mt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Ct,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: E,
                onChange: (u) => ye(u.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          Ut.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ye,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${ze ? "is-scrolling is-scrolling-thin" : ""}`,
              children: Ut.map((u) => {
                const Q = u.projectId ? Mt.get(u.projectId) ?? "未分组" : "未分组", ce = Vr(u), pe = T === u.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => It(u.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          Ne(u, u.isPinned),
                          ce && q !== u.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: Q }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: u.date })
                        ] })
                      ] }),
                      q !== u.id && vt(u, pe, {
                        actions: { rename: !0, pin: !0, delete: !0 },
                        portal: !0,
                        showTaskBadge: !1,
                        width: 160,
                        onMenuOpenIdChange: F
                      })
                    ]
                  },
                  u.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(kr, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      Ha,
      {
        visible: !!te,
        title: "删除对话",
        description: /* @__PURE__ */ r(ot, { children: [
          "删除后，对话“",
          te == null ? void 0 : te.title,
          "”将无法恢复。确认删除当前对话吗？"
        ] }),
        loading: g,
        error: Se,
        onCancel: () => {
          R(null), me("");
        },
        onConfirm: V
      }
    )
  ] });
}
function zl({
  projects: t,
  selectedProjectId: a,
  autoFocusInput: c = !1,
  disabled: s = !1,
  embedded: o = !1,
  isSidebarOpen: m = !0,
  skillOptions: p,
  fileOptions: N,
  quickPrompts: h,
  uploadAccept: f,
  validateUploadFile: P,
  onUploadValidationError: d,
  onSelectProject: v,
  onCreateProject: _,
  onOpenSidebar: L,
  onSelectQuickPrompt: C,
  onSend: D
}) {
  const [G, U] = x(!1), [O, A] = x(!1), [w, j] = x(""), [B, I] = x(null), oe = ie(null), b = ie(null), ee = ke(
    () => t.find((T) => T.id === a) ?? null,
    [t, a]
  ), ue = ke(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !ee
    },
    ...t.map((T) => ({
      key: T.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: T.name }),
      active: (ee == null ? void 0 : ee.id) === T.id
    }))
  ], [t, ee]), X = ke(() => _ ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Nr, { size: 16 }) }] : [], [_]), $ = () => {
    A(!1), j("");
  }, ae = (T) => {
    if (T.key === "create") {
      A(!0), j("");
      return;
    }
    const F = T.key === "none" ? null : String(T.key);
    v(F), U(!1);
  }, fe = () => {
    const T = w.trim();
    if (!T) return;
    const F = t.find(
      (J) => J.name.trim().toLowerCase() === T.toLowerCase()
    );
    F ? v(F.id) : _ == null || _(T), $(), U(!1);
  };
  ge(() => {
    if (!O) return;
    const T = (F) => {
      var ve, de;
      const J = F.target;
      (ve = b.current) != null && ve.contains(J) || (de = oe.current) != null && de.contains(J) || ($(), U(!1));
    };
    return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
  }, [O]), Dt(() => {
    if (!O) {
      I(null);
      return;
    }
    const T = () => {
      var q;
      const F = (q = oe.current) == null ? void 0 : q.getBoundingClientRect();
      if (!F) return;
      const J = 300, ve = 260, de = 8, Y = 12;
      I({
        left: Math.max(Y, Math.min(F.left + ve + de, window.innerWidth - J - Y)),
        bottom: window.innerHeight - F.top + de
      });
    };
    return T(), window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, [O]);
  const M = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      O && B && dn(
        /* @__PURE__ */ e(
          "div",
          {
            ref: b,
            className: "fixed z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
            style: B,
            children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
              /* @__PURE__ */ r("div", { children: [
                /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
                /* @__PURE__ */ e(
                  un,
                  {
                    value: w,
                    onChange: (T) => j(T.target.value),
                    placeholder: "请输入项目名称",
                    size: "medium",
                    containerClassName: "!px-3"
                  }
                )
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
                /* @__PURE__ */ e(nt, { type: "secondary", size: "small", onClick: $, children: "取消" }),
                /* @__PURE__ */ e(
                  nt,
                  {
                    type: "primary",
                    size: "small",
                    onClick: fe,
                    disabled: !w.trim(),
                    children: "确认"
                  }
                )
              ] })
            ] })
          }
        ),
        document.body
      ),
      /* @__PURE__ */ e(
        xn,
        {
          onSend: D,
          disabled: s,
          autoFocus: c,
          skillOptions: p,
          fileOptions: N,
          uploadAccept: f,
          validateUploadFile: P,
          onUploadValidationError: d,
          leadingControls: /* @__PURE__ */ e("div", { ref: oe, className: "inline-flex", children: /* @__PURE__ */ e(
            qt,
            {
              open: G,
              onOpenChange: (T) => {
                !T && O || (U(T), T ? A(!1) : $());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: ee ? ee.name : "工作项目" }),
                /* @__PURE__ */ e(Bt, { size: 14 })
              ] }),
              items: ue,
              footerItems: X,
              onItemClick: ae,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          ) })
        }
      )
    ] }),
    /* @__PURE__ */ e(
      bn,
      {
        onSelect: C ?? D,
        prompts: h,
        disabled: s
      }
    )
  ] });
  return o ? M : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      ds,
      {
        isSidebarOpen: m,
        onOpenSidebar: L ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: M })
  ] });
}
const gn = [
  "文献",
  "实验记录",
  "实验方案",
  "Protocol",
  "SOP",
  "工作总结"
];
function zs(t) {
  return t.trim().replace(/\s+/g, " ");
}
function As({
  id: t = "document-tag-input",
  label: a = "设置文档标签",
  options: c,
  value: s,
  onChange: o
}) {
  const [m, p] = x(!1), [N, h] = x(!1), [f, P] = x(!1), [d, v] = x(""), [_, L] = x([]), C = ie(null), D = ke(() => new Set(c.map((w) => w.value)), [c]), G = ke(() => [
    ...c.map((w) => ({ value: w.value, label: w.label, custom: !1 })),
    ...Array.from(/* @__PURE__ */ new Set([..._, ...s.customTags])).filter((w) => !c.some((j) => j.label === w || j.value === w)).map((w) => ({ value: w, label: w, custom: !0 }))
  ], [_, c, s.customTags]), U = G.map((w) => `${w.custom ? "c" : "o"}:${w.value}`).join("\0");
  ge(() => {
    const w = C.current;
    if (!w) return;
    const j = () => h(w.scrollHeight > 72);
    j();
    const B = new ResizeObserver(j);
    return B.observe(w), () => B.disconnect();
  }, [U, f]);
  const O = (w) => {
    if (w.custom ? s.customTags.includes(w.label) : s.optionValues.includes(w.value)) {
      o(w.custom ? { ...s, customTags: s.customTags.filter((B) => B !== w.label) } : { ...s, optionValues: s.optionValues.filter((B) => B !== w.value) });
      return;
    }
    if (w.custom || !D.has(w.value)) {
      o({ optionValues: [], customTags: [w.label] });
      return;
    }
    o({ optionValues: [w.value], customTags: [] });
  }, A = () => {
    const w = zs(d);
    w && (L((j) => j.includes(w) ? j : [...j, w]), o({ optionValues: [], customTags: [w] })), v(""), P(!1);
  };
  return /* @__PURE__ */ r("div", { children: [
    a && /* @__PURE__ */ e("label", { htmlFor: t, className: "mb-2 block text-sm font-medium text-primaryText", children: a }),
    /* @__PURE__ */ r("div", { ref: C, className: `flex flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200 ${m ? "max-h-64 overflow-y-auto pr-1" : "max-h-[72px]"}`, children: [
      f ? /* @__PURE__ */ e(
        "input",
        {
          id: t,
          autoFocus: !0,
          value: d,
          onChange: (w) => v(w.target.value),
          onKeyDown: (w) => {
            w.key === "Enter" && (w.preventDefault(), A()), w.key === "Escape" && (v(""), P(!1));
          },
          onBlur: () => {
            d.trim() || P(!1);
          },
          placeholder: "输入标签名称",
          className: "box-border h-8 w-32 shrink-0 rounded-md border border-primary px-2 text-sm text-primaryText outline-none"
        }
      ) : /* @__PURE__ */ r("button", { type: "button", onClick: () => {
        P(!0), p(!0);
      }, className: "inline-flex box-border h-[30px] shrink-0 items-center gap-1 self-center rounded-md border border-dashed border-controlBorder px-2.5 text-sm text-tertiaryText transition-colors hover:border-primary hover:text-primary", children: [
        /* @__PURE__ */ e(Nr, { size: 14 }),
        "新建标签"
      ] }),
      G.map((w) => {
        const j = w.custom ? s.customTags.includes(w.label) : s.optionValues.includes(w.value);
        return /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: () => O(w),
            className: `group grid h-8 grid-cols-1 items-center rounded-md border px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-soft-strong ${j ? "border-primary bg-primary-soft text-primary" : "border-transparent bg-bgLight text-secondaryText hover:border-controlBorder hover:bg-surfaceMuted"}`,
            "aria-pressed": j,
            children: [
              /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "invisible col-start-1 row-start-1 font-semibold", children: w.label }),
              /* @__PURE__ */ e("span", { className: `col-start-1 row-start-1 ${j ? "font-semibold" : "font-normal group-hover:font-semibold"}`, children: w.label })
            ]
          },
          `${w.custom ? "custom" : "option"}-${w.value}`
        );
      })
    ] }),
    N && /* @__PURE__ */ e("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ r("button", { type: "button", onClick: () => p((w) => !w), className: "inline-flex items-center gap-1.5 text-sm text-tertiaryText transition-colors hover:text-secondaryText", children: [
      m ? "收起标签" : "展开全部标签",
      /* @__PURE__ */ e(Bt, { size: 13, className: `transition-transform ${m ? "rotate-180" : ""}` })
    ] }) })
  ] });
}
const Ps = "_shell_vbm8z_1", Bs = "_header_vbm8z_5", _s = "_headerActions_vbm8z_9", Is = "_saveError_vbm8z_13", Rs = "_viewport_vbm8z_17", Ds = "_editorCanvas_vbm8z_21", js = "_titleInput_vbm8z_25", Fs = "_milkdownHost_vbm8z_29", ht = {
  shell: Ps,
  header: Bs,
  headerActions: _s,
  saveError: Is,
  viewport: Rs,
  editorCanvas: Ds,
  titleInput: js,
  milkdownHost: Fs
}, Hs = {
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
}, qs = gn.map((t) => ({ value: t, label: t })), Ur = new Set(gn), sr = (t, a) => t.replace("<svg", `<svg class="${a}"`), kt = (t) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${t}</tspan>
    </text>
  </svg>
`, vr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="8" y="23" fill="currentColor" font-family="inherit" font-size="22" font-weight="500">T</text>
  </svg>
`, Os = `
  <span class="chatui-selection-block-type-current">${vr}</span>
  <svg class="chatui-selection-block-type-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Kr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, Ws = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, Vs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z" />
  </svg>
`, Us = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Ks = [
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
], At = (t) => `chatui-document-menu-type-${t}`;
function Al({
  title: t,
  initialMarkdown: a = "",
  createdByName: c,
  updatedByName: s,
  updatedAt: o,
  index: m,
  tags: p = [],
  attachments: N = [],
  attachmentUploads: h = [],
  attachmentAccept: f,
  attachmentUnavailableHint: P,
  saving: d = !1,
  saveError: v,
  layout: _ = "page",
  showHeaderActions: L = !0,
  showMetadata: C = !1,
  showTags: D = !0,
  onTitleChange: G,
  onMarkdownChange: U,
  onTagsChange: O,
  onDownloadAttachment: A,
  onUploadAttachments: w,
  onDeleteAttachment: j,
  onSave: B,
  onClose: I
}) {
  const oe = ie(null), b = ie(null), ee = ie(a), ue = ie(U), X = ie(null), [$, ae] = x(!1), [fe, M] = x(!1), [T, F] = x([]), [J, ve] = x(!1), [de, Y] = x(null), [q, ne] = x(""), Ue = ie({}), Oe = _ === "page" ? "px-[120px]" : "px-6 md:px-8", Re = h.length ? h : T;
  ge(() => {
    ue.current = U;
  }, [U]), ge(
    () => () => {
      X.current !== null && window.clearTimeout(X.current);
    },
    []
  ), ge(() => () => {
    Object.values(Ue.current).forEach((g) => window.clearInterval(g));
  }, []);
  const _e = () => {
    ae(!0), X.current !== null && window.clearTimeout(X.current), X.current = window.setTimeout(
      () => ae(!1),
      700
    );
  };
  ge(() => {
    const g = oe.current;
    if (!g) return;
    let S = null;
    const Se = /* @__PURE__ */ new Map(), me = new Qt({
      root: g,
      defaultValue: ee.current,
      features: {
        [Qt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [Qt.Feature.Toolbar]: {
          buildToolbar: (n) => {
            n.addGroup(
              "block-type",
              "块类型"
            ).addItem("block-type-dropdown", {
              icon: Os,
              active: () => !1,
              onRun: () => {
              }
            });
          }
        },
        [Qt.Feature.BlockEdit]: {
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
            const i = new Map(
              n.build().flatMap((Ce) => Ce.items).map((Ce) => [Ce.key, Ce])
            ), k = /* @__PURE__ */ new Set([
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
            ]), y = (Ce) => {
              const se = Ce.get(zt), le = Le, Ve = (le != null && le.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? le : le == null ? void 0 : le.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] h4, [data-content-dom="true"] h5, [data-content-dom="true"] h6, [data-content-dom="true"] pre'
              )) ?? (le instanceof HTMLElement ? le : null);
              if (!Ve) return se;
              try {
                const Ke = se.posAtDOM(Ve, 0), Ze = se.state.doc.resolve(
                  Math.min(
                    Math.max(Ke, 0),
                    se.state.doc.content.size
                  )
                );
                se.dispatch(
                  se.state.tr.setSelection(
                    Jt.near(Ze)
                  )
                );
              } catch {
              }
              return se;
            }, W = (Ce) => {
              const se = y(Ce), le = er.type(Ce), Je = (Ze) => {
                const { $from: rt } = se.state.selection;
                for (let at = rt.depth; at > 0; at -= 1)
                  if (rt.node(at).type.name === Ze) return !0;
                return !1;
              };
              for (let Ze = 0; Ze < 10 && !(!Je(le.name) || !Yn(le)(
                se.state,
                se.dispatch
              )); Ze += 1)
                ;
              for (let Ze = 0; Ze < 10 && !(!Je("blockquote") || !Xn(se.state, se.dispatch)); Ze += 1)
                ;
              const Ve = Ar.type(Ce), Ke = se.state.selection.$from.parent;
              Ke.isTextblock && Ke.type !== Ve && Ce.get(xr).call(Qn.key, {
                nodeType: Ve
              });
            };
            S = (Ce, se, le) => {
              const Je = y(Ce), { from: Ve } = Je.state.selection;
              Ce.get(xr).call(ea.key, {
                nodeType: ra(Ce, se, le)
              }), Ce.get(xr).call(ta.key, {
                pos: Ve
              });
            }, Se.set(
              "paragraph",
              W
            );
            const H = (Ce) => {
              const se = y(Ce), { selection: le } = se.state, Je = er.type(Ce), { $from: Ve } = le;
              let Ke = -1;
              for (let rt = Ve.depth; rt > 0; rt -= 1)
                if (Ve.node(rt).type.name === Je.name) {
                  Ke = rt;
                  break;
                }
              if (Ke > 0) {
                const rt = Ke - 1, at = rt > 0 && Ve.node(rt).childCount === 1 ? rt : Ke;
                se.dispatch(
                  se.state.tr.delete(
                    Ve.before(at),
                    Ve.after(at)
                  )
                );
                return;
              }
              if (!le.empty) {
                se.dispatch(
                  se.state.tr.delete(le.from, le.to)
                );
                return;
              }
              const Ze = Math.min(1, Ve.depth);
              Ze < 1 || se.dispatch(
                se.state.tr.delete(
                  Ve.before(Ze),
                  Ve.after(Ze)
                )
              );
            }, re = (Ce, se, le) => {
              const Je = i.get(se);
              if (!Je) return;
              const { key: Ve, ...Ke } = Je, Ze = (le == null ? void 0 : le.icon) ?? Ke.icon, rt = [
                At(se),
                le == null ? void 0 : le.iconClass
              ].filter(Boolean).join(" "), at = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(se), Lt = k.has(se) ? (ct) => {
                var $r;
                if (W(ct), !at) {
                  if (se === "quote") {
                    const pt = ct.get(zt), { $from: Et } = pt.state.selection, Yt = Et.parent, pr = Et.before(Et.depth), Lr = pt.state.schema.nodes.blockquote;
                    if (!Lr) return;
                    const wn = Lr.create(null, Yt), Zt = pt.state.tr.replaceWith(
                      pr,
                      pr + Yt.nodeSize,
                      wn
                    );
                    Zt.setSelection(
                      Jt.near(
                        Zt.doc.resolve(
                          Math.min(
                            pr + 2,
                            Zt.doc.content.size
                          )
                        )
                      )
                    ), pt.dispatch(Zt);
                    return;
                  }
                  ($r = Ke.onRun) == null || $r.call(Ke, ct);
                  return;
                }
                const Rt = ct.get(zt), yn = se === "ordered-list" ? Pr.type(ct) : Br.type(ct);
                if (!Zn(yn)(
                  Rt.state,
                  Rt.dispatch
                ) || se !== "task-list") return;
                const vn = er.type(ct), { $from: mr } = Rt.state.selection;
                for (let pt = mr.depth; pt > 0; pt -= 1) {
                  const Et = mr.node(pt);
                  if (Et.type !== vn) continue;
                  const Yt = mr.before(pt);
                  Rt.dispatch(
                    Rt.state.tr.setNodeMarkup(Yt, void 0, {
                      ...Et.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : (le == null ? void 0 : le.onRun) ?? Ke.onRun;
              k.has(se) && Lt && Se.set(
                se,
                Lt
              ), Ce.addItem(se, {
                ...Ke,
                label: (le == null ? void 0 : le.label) ?? Ke.label,
                icon: sr(Ze, rt),
                onRun: Lt
              });
            };
            n.clear();
            const he = n.addGroup("basic", "基础");
            he.addItem("paragraph", {
              label: "正文",
              icon: sr(
                vr,
                At("paragraph")
              ),
              onRun: W
            }), [
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
                key: "h4",
                icon: kt(4),
                label: `四级标题 (Ctrl + Alt + 4)
Markdown: #### 空格`
              },
              {
                key: "h5",
                icon: kt(5),
                label: `五级标题 (Ctrl + Alt + 5)
Markdown: ##### 空格`
              },
              {
                key: "h6",
                icon: kt(6),
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
                icon: Kr,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: Ws,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: Ce, icon: se, label: le }) => {
              re(he, Ce, { icon: se, label: le });
            });
            const Pe = n.addGroup("common", "常用");
            re(Pe, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), re(Pe, "table", {
              icon: Vs,
              iconClass: "chatui-document-menu-icon-table",
              onRun: () => {
              }
            }), re(Pe, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), n.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: sr(
                Us,
                "chatui-document-menu-action-delete"
              ),
              onRun: H
            });
          }
        }
      }
    });
    me.editor.config((n) => {
      const i = n.get(_r.key);
      n.set(_r.key, {
        ...i,
        shouldAppend: (k, y) => (k == null ? void 0 : k.type.name) === "table" ? !1 : i.shouldAppend(k, y)
      });
    }), me.on((n) => {
      n.markdownUpdated((i, k, y) => {
        k !== y && ue.current(k);
      });
    });
    const E = g.ownerDocument;
    let ye = "", ze = null, xe = null, $e = !0, Me = !1, Le = null, we = null, Z = null, Ge = null, je = null, Ee = null, Fe = null, tt = null, be = null, V = null;
    const l = 8, z = () => {
      var n;
      return ((n = E.querySelector(
        ".milkdown-slash-menu svg.chatui-document-menu-icon-table"
      )) == null ? void 0 : n.closest("li")) ?? null;
    }, K = (n, i) => {
      if (!be) return;
      be.querySelectorAll("[data-table-row]").forEach((y) => {
        const W = Number(y.dataset.tableRow), H = Number(y.dataset.tableColumn);
        y.dataset.active = W <= n && H <= i ? "true" : "false", y.tabIndex = W === n && H === i ? 0 : -1;
      });
      const k = be.querySelector(
        ".chatui-table-size-menu-status"
      );
      k && (k.textContent = `${n} × ${i}`);
    }, Te = () => {
      var n;
      V !== null && (window.clearTimeout(V), V = null), be && (be.dataset.show = "false"), (n = z()) == null || n.setAttribute("aria-expanded", "false");
    }, Ae = () => {
      V !== null && window.clearTimeout(V), V = window.setTimeout(Te, 140);
    }, He = () => {
      if (be) return be;
      const n = E.createElement("div");
      n.className = "chatui-table-size-menu", n.dataset.show = "false", n.setAttribute("role", "menu"), n.setAttribute("aria-label", "选择表格尺寸");
      const i = E.createElement("div");
      i.className = "chatui-table-size-menu-heading", i.innerHTML = '<span>插入表格</span><span class="chatui-table-size-menu-status">1 × 1</span>', n.append(i);
      const k = E.createElement("div");
      k.className = "chatui-table-size-menu-grid", k.setAttribute("role", "grid"), k.setAttribute("aria-rowcount", String(l)), k.setAttribute("aria-colcount", String(l));
      for (let y = 1; y <= l; y += 1)
        for (let W = 1; W <= l; W += 1) {
          const H = E.createElement("button");
          H.type = "button", H.dataset.tableRow = String(y), H.dataset.tableColumn = String(W), H.setAttribute("role", "gridcell"), H.setAttribute("aria-label", `插入 ${y} × ${W} 表格`), H.addEventListener("pointerenter", () => {
            K(y, W);
          }), H.addEventListener("focus", () => {
            K(y, W);
          }), H.addEventListener("keydown", (re) => {
            var se, le;
            if (re.key === "Escape") {
              re.preventDefault(), Te(), (se = z()) == null || se.focus();
              return;
            }
            const Pe = {
              ArrowUp: [-1, 0],
              ArrowDown: [1, 0],
              ArrowLeft: [0, -1],
              ArrowRight: [0, 1]
            }[re.key];
            if (!Pe) return;
            re.preventDefault();
            const Qe = Math.min(
              l,
              Math.max(1, y + Pe[0])
            ), Ce = Math.min(
              l,
              Math.max(1, W + Pe[1])
            );
            (le = n.querySelector(
              `[data-table-row="${Qe}"][data-table-column="${Ce}"]`
            )) == null || le.focus();
          }), H.addEventListener("pointerdown", (re) => {
            re.preventDefault(), re.stopPropagation(), me.editor.action((he) => {
              S == null || S(he, y, W);
            }), Te(), Q();
          }), k.append(H);
        }
      return n.append(k), n.addEventListener("pointerenter", () => {
        V !== null && (window.clearTimeout(V), V = null);
      }), n.addEventListener("pointerleave", Ae), E.body.append(n), be = n, K(1, 1), n;
    }, Ne = () => {
      var se, le;
      const n = z();
      if (!n) return;
      V !== null && (window.clearTimeout(V), V = null), n.dataset.chatuiSubmenu = "true", n.setAttribute("aria-haspopup", "menu"), n.setAttribute("aria-expanded", "true");
      const i = He();
      K(1, 1), i.dataset.show = "true", i.style.visibility = "hidden";
      const k = n.getBoundingClientRect(), y = i.getBoundingClientRect(), W = ((se = E.defaultView) == null ? void 0 : se.innerWidth) ?? E.documentElement.clientWidth, H = ((le = E.defaultView) == null ? void 0 : le.innerHeight) ?? E.documentElement.clientHeight, re = 8, he = 8, Pe = k.right + re + y.width + he <= W, Qe = Pe ? k.right + re : Math.max(he, k.left - y.width - re), Ce = Math.min(
        Math.max(k.top, he),
        Math.max(he, H - y.height - he)
      );
      i.style.left = `${Qe}px`, i.style.top = `${Ce}px`, i.style.visibility = "visible", i.dataset.placement = Pe ? "right" : "left";
    }, Be = (n) => {
      const i = n == null ? void 0 : n.closest(
        "h1, h2, h3, h4, h5, h6, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !i || !i.closest(".ProseMirror") ? null : i.matches("h1") ? "h1" : i.matches("h2") ? "h2" : i.matches("h3") ? "h3" : i.matches("h4") ? "h4" : i.matches("h5") ? "h5" : i.matches("h6") ? "h6" : i.matches("blockquote") ? "quote" : i.matches("pre, .milkdown-code-block") || i.querySelector("pre, .milkdown-code-block") ? "code" : i.querySelector('input[type="checkbox"]') ? "task-list" : i.querySelector(".label.ordered") ? "ordered-list" : i.querySelector(".label.bullet") ? "bullet-list" : null;
    }, De = () => g.querySelector(".ProseMirror"), Ye = (n) => {
      const i = De();
      if (!n || !(i != null && i.contains(n))) return null;
      const k = n.closest(".milkdown-list-item-block");
      if (k && i.contains(k)) return k;
      let y = n;
      for (; y != null && y.parentElement && y.parentElement !== i; )
        y = y.parentElement;
      return !y || y.parentElement !== i || y.classList.contains("prosemirror-virtual-cursor") ? null : y;
    }, lt = () => {
      const n = De();
      return n ? Array.from(n.children).flatMap((i) => {
        if (i.classList.contains("prosemirror-virtual-cursor")) return [];
        const k = Array.from(
          i.querySelectorAll(".milkdown-list-item-block")
        );
        return k.length ? k : [i];
      }) : [];
    }, ft = (n) => {
      var y;
      const i = lt(), k = i.map((W) => ({ block: W, rect: W.getBoundingClientRect() })).filter(({ rect: W }) => n >= W.top && n <= W.bottom).sort((W, H) => W.rect.height - H.rect.height);
      return k[0] ? k[0].block : ((y = i.map((W) => {
        const H = W.getBoundingClientRect(), re = Math.min(
          Math.abs(n - H.top),
          Math.abs(n - H.bottom)
        );
        return { block: W, distance: re };
      }).sort((W, H) => W.distance - H.distance)[0]) == null ? void 0 : y.block) ?? null;
    }, xt = (n, i = $e) => {
      var Qe, Ce, se, le;
      const k = Le, y = k ? Be(k) : n, W = k ? k.matches("p") : i, H = E.querySelector(
        ".milkdown-slash-menu"
      );
      (Ce = (Qe = H == null ? void 0 : H.querySelector(`svg.${At("paragraph")}`)) == null ? void 0 : Qe.closest("li")) == null || Ce.toggleAttribute(
        "hidden",
        y === null && W
      ), H == null || H.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (Je) => Je.removeAttribute("data-chatui-selected")
      ), y && ((le = (se = H == null ? void 0 : H.querySelector(`svg.${At(y)}`)) == null ? void 0 : se.closest("li")) == null || le.setAttribute("data-chatui-selected", "true"));
      const re = E.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!re) return;
      ye || (ye = re.innerHTML);
      const he = y ? H == null ? void 0 : H.querySelector(
        `svg.${At(y)}`
      ) : null, Pe = y ?? "default";
      re.dataset.chatuiBlockType !== Pe && (re.innerHTML = (he == null ? void 0 : he.outerHTML) ?? ye, re.dataset.chatuiBlockType = Pe);
    }, yt = (n) => {
      n !== xe && (xe = n, ze = Be(n), $e = (n == null ? void 0 : n.matches("p")) ?? !1), xt(ze, $e);
    }, Ot = () => {
      var k;
      const n = (k = E.getSelection()) == null ? void 0 : k.anchorNode, i = n instanceof Element ? n : n == null ? void 0 : n.parentElement;
      yt(Ye(i ?? null));
    }, vt = (n) => {
      const { $from: i } = n.get(zt).state.selection, k = er.type(n), y = Pr.type(n), W = Br.type(n);
      for (let re = i.depth; re > 0; re -= 1) {
        const he = i.node(re);
        if (he.type === k && typeof he.attrs.checked == "boolean")
          return "task-list";
      }
      for (let re = i.depth; re > 0; re -= 1) {
        const he = i.node(re);
        if (he.type === y) return "ordered-list";
        if (he.type === W) return "bullet-list";
        if (he.type.name === "blockquote") return "quote";
      }
      const H = i.parent;
      if (H.type === Jn.type(n)) {
        const re = Number(H.attrs.level);
        if (re >= 1 && re <= 6)
          return `h${re}`;
      }
      return H.type.name === "code_block" ? "code" : "paragraph";
    }, Wt = (n) => {
      var i;
      return n === "paragraph" ? sr(
        vr,
        "chatui-selection-block-type-paragraph"
      ) : /^h[1-6]$/.test(n) ? kt(Number(n.slice(1))) : n === "code" ? Kr : ((i = E.querySelector(
        `.milkdown-slash-menu svg.${At(n)}`
      )) == null ? void 0 : i.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${n === "quote" ? "“" : "•"}</text></svg>`;
    }, wt = () => {
      var n;
      return ((n = E.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : n.closest(".toolbar-item")) ?? null;
    }, dt = () => {
      const n = wt();
      if (!n) return;
      n.classList.add("chatui-selection-block-type-trigger"), n.setAttribute("aria-haspopup", "menu"), n.setAttribute("aria-label", "切换当前块类型");
      const i = n.closest(".milkdown-toolbar"), k = n.previousElementSibling instanceof HTMLElement && n.previousElementSibling.classList.contains("divider") ? n.previousElementSibling : null;
      i && i.firstElementChild !== n && (i.prepend(n), k && n.after(k));
      let y = "paragraph";
      me.editor.action((H) => {
        y = vt(H);
      }), n.dataset.chatuiBlockType = y;
      const W = n.querySelector(
        ".chatui-selection-block-type-current"
      );
      W && (W.innerHTML = Wt(y)), Ee == null || Ee.querySelectorAll("[data-block-type]").forEach((H) => {
        H.dataset.active = H.dataset.blockType === y ? "true" : "false";
      });
    }, Nt = () => {
      var n;
      Fe !== null && (window.clearTimeout(Fe), Fe = null), Ee && (Ee.dataset.show = "false"), (n = wt()) == null || n.setAttribute("aria-expanded", "false");
    }, ut = () => {
      Fe !== null && window.clearTimeout(Fe), Fe = window.setTimeout(
        Nt,
        120
      );
    }, _t = () => {
      if (Ee) return Ee;
      const n = E.createElement("div");
      return n.className = "chatui-selection-block-type-menu", n.dataset.show = "false", n.setAttribute("role", "menu"), Ks.forEach(({ key: i, label: k }) => {
        const y = E.createElement("button");
        y.type = "button", y.dataset.blockType = i, y.setAttribute("role", "menuitem"), y.innerHTML = `<span class="chatui-selection-block-type-option-icon">${Wt(i)}</span><span>${k}</span>`, y.addEventListener("pointerdown", (W) => {
          W.preventDefault(), W.stopPropagation(), me.editor.action((H) => {
            var re;
            (re = Se.get(i)) == null || re(H);
          }), Nt(), window.requestAnimationFrame(dt);
        }), n.append(y);
      }), n.addEventListener("pointerenter", () => {
        Fe !== null && (window.clearTimeout(Fe), Fe = null);
      }), n.addEventListener("pointerleave", ut), E.body.append(n), Ee = n, n;
    }, ur = () => {
      const n = wt();
      if (!n) return;
      Fe !== null && (window.clearTimeout(Fe), Fe = null);
      const i = _t();
      dt(), i.dataset.show = "true", i.style.visibility = "hidden";
      const k = n.getBoundingClientRect(), y = i.getBoundingClientRect(), W = 6, H = 8, re = k.top >= y.height + W + H, he = Math.min(
        Math.max(k.left, H),
        E.documentElement.clientWidth - y.width - H
      ), Pe = re ? k.top - y.height - W : k.bottom + W;
      i.style.left = `${he}px`, i.style.top = `${Pe}px`, i.style.visibility = "visible", i.dataset.placement = re ? "top" : "bottom", n.setAttribute("aria-expanded", "true");
    }, Vt = (n) => {
      const i = n.target instanceof Element ? n.target : null;
      i != null && i.closest(".chatui-selection-block-type-trigger") && ur();
    }, Mt = (n) => {
      const i = n.target instanceof Element ? n.target : null;
      if (!(i != null && i.closest(".chatui-selection-block-type-trigger"))) return;
      const k = n.relatedTarget instanceof Element ? n.relatedTarget : null;
      k != null && k.closest(".chatui-selection-block-type-menu") || ut();
    }, $t = () => {
      window.requestAnimationFrame(dt);
    }, Ut = () => {
      const n = we, i = E.querySelector(
        ".milkdown-slash-menu"
      );
      if (!n || !i || i.dataset.show !== "true") return;
      const k = i.getBoundingClientRect();
      if (!k.width || !k.height) return;
      const y = n.getBoundingClientRect(), W = E.defaultView, H = (W == null ? void 0 : W.innerWidth) ?? E.documentElement.clientWidth, re = (W == null ? void 0 : W.innerHeight) ?? E.documentElement.clientHeight, he = 12, Pe = 8, Qe = Math.max(
        he,
        H - k.width - he
      ), Ce = Math.max(
        he,
        re - k.height - he
      ), se = (at) => Math.min(Math.max(at, he), Qe), le = (at) => Math.min(Math.max(at, he), Ce);
      let Je = "left", Ve = y.left - k.width - Pe, Ke = le(y.top);
      if (Ve < he) {
        const at = y.top - Pe - he, Lt = re - y.bottom - Pe - he, ct = Lt >= k.height || Lt >= at;
        Je = ct ? "bottom" : "top", Ve = se(y.left), Ke = le(ct ? y.bottom + Pe : y.top - k.height - Pe);
      }
      const Ze = `${Ve}px`, rt = `${Ke}px`;
      i.style.getPropertyValue("--chatui-block-menu-left") !== Ze && i.style.setProperty("--chatui-block-menu-left", Ze), i.style.getPropertyValue("--chatui-block-menu-top") !== rt && i.style.setProperty("--chatui-block-menu-top", rt), i.dataset.chatuiPlacement = Je;
    }, Kt = () => {
      const n = E.querySelector(
        ".milkdown-slash-menu"
      );
      n && (n.style.removeProperty("--chatui-block-menu-left"), n.style.removeProperty("--chatui-block-menu-top"), delete n.dataset.chatuiPlacement);
    }, mt = (n) => {
      n !== je && (je == null || je.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), je = n, je == null || je.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, It = () => {
      Ge !== null && window.cancelAnimationFrame(Ge), Ge = window.requestAnimationFrame(() => {
        Ge = null, Ut();
      });
    }, u = (n) => {
      E.querySelectorAll(".milkdown-block-handle").forEach((i) => {
        n && i.contains(n) ? i.dataset.chatuiMenuOpen = "true" : delete i.dataset.chatuiMenuOpen;
      });
    }, Q = () => {
      Te(), we = null, Me = !1, Le = null, mt(null), me.editor.action((n) => {
        n.get("menuAPICtx").hide();
      }), Kt(), u(null);
    }, ce = (n) => {
      const i = n.target instanceof Element ? n.target : null;
      if (i != null && i.closest(".chatui-table-size-menu")) {
        Me = !0;
        return;
      }
      const k = E.querySelector(
        ".milkdown-slash-menu"
      );
      if (k) {
        const H = k.getBoundingClientRect(), re = H.width > 0 && H.height > 0, he = n.clientX >= H.left && n.clientX <= H.right && n.clientY >= H.top && n.clientY <= H.bottom;
        if (re) {
          if (he) {
            mt(
              (i == null ? void 0 : i.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), Me = !0;
            return;
          }
          if (mt(null), i != null && i.closest(".milkdown-block-handle")) return;
          const Pe = De(), Qe = i && (Pe != null && Pe.contains(i)) ? Ye(i) ?? ft(n.clientY) : null;
          if (Qe && Le && Qe !== Le) {
            Q();
            return;
          }
          if (Qe === Le) return;
          Me && Q();
          return;
        }
        Me = !1, mt(null);
      }
      if (i != null && i.closest(".milkdown-block-handle")) {
        xt(ze);
        return;
      }
      const y = De();
      if (!i || !(y != null && y.contains(i))) return;
      const W = Ye(i) ?? ft(n.clientY);
      yt(W);
    }, pe = (n) => {
      var he;
      const i = E.querySelector(
        ".milkdown-slash-menu"
      );
      if (we === n && (i == null ? void 0 : i.dataset.show) === "true") {
        u(n), It();
        return;
      }
      const k = n.getBoundingClientRect(), y = ft(
        k.top + k.height / 2
      );
      y && yt(y);
      const W = ze, H = $e;
      we = n, Le = y ?? xe, u(n);
      const re = ((he = E.defaultView) == null ? void 0 : he.PointerEvent) ?? PointerEvent;
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
        xt(W, H), It();
      }, 0);
    }, We = (n) => {
      const i = n.target instanceof Element ? n.target : null, k = i == null ? void 0 : i.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (k) {
        pe(k);
        return;
      }
      const y = (i == null ? void 0 : i.closest(
        ".milkdown-slash-menu .menu-groups li"
      )) ?? null;
      mt(y), y === z() ? Ne() : i != null && i.closest(".chatui-table-size-menu") || Ae();
    }, st = (n) => {
      const i = n.target instanceof Element ? n.target : null, k = i == null ? void 0 : i.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!k) return;
      const y = n.relatedTarget instanceof Element ? n.relatedTarget : null;
      if (y && k.contains(y) || k === z() && (y != null && y.closest(".chatui-table-size-menu")))
        return;
      k === z() && Ae();
      const W = y == null ? void 0 : y.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      mt(W ?? null);
    }, bt = (n) => {
      const i = n.target instanceof Element ? n.target : null, k = i == null ? void 0 : i.closest(
        ".milkdown-slash-menu .menu-groups li"
      ), y = z();
      !k || !y || k !== y || (n.preventDefault(), n.stopImmediatePropagation(), Ne());
    }, it = (n) => {
      if (n.button !== 0) return;
      const i = n.target instanceof Element ? n.target : null, k = De();
      !i || !(k != null && k.contains(i)) || i.closest(
        'button, input, select, textarea, a, [contenteditable="false"]'
      ) || me.editor.action((y) => {
        const W = y.get(zt), H = W.posAtCoords({
          left: n.clientX,
          top: n.clientY
        });
        if (!H) return;
        const re = W.state.doc.resolve(
          Math.min(
            Math.max(H.pos, 0),
            W.state.doc.content.size
          )
        );
        W.dispatch(
          W.state.tr.setSelection(
            Jt.near(re)
          )
        ), W.focus();
      });
    }, Gt = (n) => {
      const i = n.target instanceof Element ? n.target : null, k = i == null ? void 0 : i.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      k && pe(k);
    }, Xt = (n) => {
      if (!n.isTrusted) return;
      const i = n.target instanceof Element ? n.target : null, k = i == null ? void 0 : i.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), y = E.querySelector(
        ".milkdown-slash-menu"
      );
      k && we === k && (y == null ? void 0 : y.dataset.show) === "true" && (n.preventDefault(), n.stopImmediatePropagation());
    }, Cr = (n) => {
      n.key === "/" && window.setTimeout(Ot, 0);
    }, Sr = (n) => {
      if (n.key !== "Backspace" || n.defaultPrevented || n.isComposing)
        return;
      const i = n.target instanceof Element ? n.target : null, k = De();
      if (!i || !(k != null && k.contains(i))) return;
      let y = !1;
      me.editor.action((W) => {
        const H = W.get(zt), { selection: re } = H.state, { $from: he } = re, Pe = Ar.type(W);
        if (!re.empty || he.depth !== 1 || he.parent.type !== Pe || he.parent.content.size !== 0 || he.parentOffset !== 0)
          return;
        const Qe = he.before(1), Ce = he.after(1), se = H.state.doc.resolve(Qe).nodeBefore;
        if ((se == null ? void 0 : se.type.name) !== "table") return;
        const le = H.state.tr.delete(
          Qe,
          Ce
        ), Je = Math.min(
          Qe,
          le.doc.content.size
        );
        le.setSelection(
          Jt.near(
            le.doc.resolve(Je),
            -1
          )
        ), H.dispatch(le), H.focus(), y = !0;
      }), y && (n.preventDefault(), n.stopImmediatePropagation());
    };
    E.addEventListener("pointermove", ce), E.addEventListener("pointerover", We), E.addEventListener("pointerout", st), E.addEventListener(
      "pointerover",
      Vt
    ), E.addEventListener(
      "pointerout",
      Mt
    ), E.addEventListener(
      "selectionchange",
      $t
    ), E.addEventListener(
      "keydown",
      Sr,
      !0
    ), E.addEventListener(
      "pointerdown",
      it,
      !0
    ), E.addEventListener(
      "pointerdown",
      Xt,
      !0
    ), E.addEventListener(
      "pointerdown",
      bt,
      !0
    ), E.addEventListener(
      "pointerup",
      Xt,
      !0
    ), E.addEventListener("click", Gt), g.addEventListener("keyup", Cr);
    const Mr = me.create();
    return Mr.then(() => {
      var k;
      (k = g.querySelector(".ProseMirror")) == null || k.focus();
      const n = E.querySelector(
        ".milkdown-slash-menu"
      );
      n && (Z = new MutationObserver(() => {
        if (n.dataset.show === "true" && we) {
          u(we), It();
          return;
        }
        n.dataset.show !== "true" && (Te(), we = null, Le = null, mt(null), Kt(), u(null));
      }), Z.observe(n, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const i = E.querySelector(
        ".milkdown-toolbar"
      );
      i && (tt = new MutationObserver(() => {
        i.dataset.show === "true" ? dt() : Nt();
      }), tt.observe(i, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), Ot(), dt();
    }), () => {
      E.removeEventListener("pointermove", ce), E.removeEventListener(
        "pointerover",
        We
      ), E.removeEventListener("pointerout", st), E.removeEventListener(
        "pointerover",
        Vt
      ), E.removeEventListener(
        "pointerout",
        Mt
      ), E.removeEventListener(
        "selectionchange",
        $t
      ), E.removeEventListener(
        "keydown",
        Sr,
        !0
      ), E.removeEventListener(
        "pointerdown",
        it,
        !0
      ), E.removeEventListener(
        "pointerdown",
        Xt,
        !0
      ), E.removeEventListener(
        "pointerdown",
        bt,
        !0
      ), E.removeEventListener(
        "pointerup",
        Xt,
        !0
      ), E.removeEventListener("click", Gt), g.removeEventListener("keyup", Cr), Nt(), Ee == null || Ee.remove(), Ee = null, Te(), be == null || be.remove(), be = null, Mr.then(() => {
        Z == null || Z.disconnect(), tt == null || tt.disconnect(), Ge !== null && window.cancelAnimationFrame(Ge), me.destroy();
      });
    };
  }, []);
  const te = async (g) => {
    const S = Array.from(g.target.files ?? []);
    if (g.target.value = "", !S.length || !w) return;
    const Se = Date.now(), me = S.map((ye, ze) => ({
      id: `${Se}-${ze}-${ye.name}`,
      name: ye.name,
      progress: 0
    }));
    F(me), me.forEach((ye) => {
      Ue.current[ye.id] = window.setInterval(() => {
        F((ze) => ze.map((xe) => xe.id === ye.id ? { ...xe, progress: Math.min(92, xe.progress + Math.max(3, Math.ceil((92 - xe.progress) / 5))) } : xe));
      }, 180);
    }), M(!0), ne("");
    const E = () => {
      Object.values(Ue.current).forEach((ye) => window.clearInterval(ye)), Ue.current = {}, F([]);
    };
    try {
      await w(S, E), E();
    } catch (ye) {
      E(), ne(
        ye instanceof Error ? ye.message : "附件上传失败"
      );
    } finally {
      M(!1);
    }
  }, R = async (g) => {
    if (j) {
      Y(g), ne("");
      try {
        await j(g);
      } catch (S) {
        ne(
          S instanceof Error ? S.message : "附件删除失败"
        );
      } finally {
        Y(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: ht.shell, "aria-label": "项目文档编辑器", children: [
    L && w && /* @__PURE__ */ e(
      "input",
      {
        ref: b,
        type: "file",
        multiple: !0,
        accept: f,
        className: "hidden",
        onChange: (g) => {
          te(g);
        }
      }
    ),
    L && /* @__PURE__ */ e("header", { className: ht.header, children: /* @__PURE__ */ r("div", { className: ht.headerActions, children: [
      /* @__PURE__ */ e(
        nt,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: d,
          onClick: I,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        nt,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: d,
          onClick: B,
          children: d ? "保存中…" : "保存"
        }
      ),
      w && /* @__PURE__ */ e(
        qt,
        {
          open: J,
          onOpenChange: ve,
          placement: "bottom-end",
          width: 140,
          trigger: /* @__PURE__ */ e("span", { className: "inline-flex rounded-md p-1.5 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText", children: /* @__PURE__ */ e(ln, { size: 20 }) }),
          items: [{ key: "uploadAttachment", label: fe ? "上传中…" : "上传附件", disabled: fe }],
          onItemClick: () => {
            var g;
            ve(!1), (g = b.current) == null || g.click();
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${ht.viewport} min-h-0 ${L ? "px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10" : "p-0"}`,
        children: [
          v && /* @__PURE__ */ e("div", { className: ht.saveError, children: v }),
          q && /* @__PURE__ */ e("div", { className: ht.saveError, children: q }),
          /* @__PURE__ */ r("div", { className: ht.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${Oe}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (g) => G(g.target.value),
                  placeholder: "请输入标题",
                  className: ht.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              C && /* @__PURE__ */ e(
                fn,
                {
                  createdByName: c,
                  updatedByName: s,
                  updatedAt: o,
                  index: m
                }
              ),
              D && (O ? /* @__PURE__ */ e("div", { className: "mt-4", children: /* @__PURE__ */ e(
                As,
                {
                  label: "",
                  options: qs,
                  value: {
                    optionValues: p.filter((g) => Ur.has(g)),
                    customTags: p.filter((g) => !Ur.has(g))
                  },
                  onChange: (g) => O([...g.optionValues, ...g.customTags])
                }
              ) }) : /* @__PURE__ */ e("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: p.length ? p.map((g) => /* @__PURE__ */ e("span", { className: "inline-flex h-8 items-center rounded-md bg-bgLight px-2.5 text-sm text-secondaryText", children: g }, g)) : /* @__PURE__ */ e("span", { className: "text-xs text-tertiaryText", children: "暂无标签" }) })),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r(
              "section",
              {
                onScroll: _e,
                className: `document-preview-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${$ ? "is-scrolling" : ""}`,
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      ref: oe,
                      className: `${ht.milkdownHost} ${Tr.editor} ${Oe} chatui-project-document-editor`,
                      style: Hs
                    }
                  ),
                  (N.length > 0 || Re.length > 0) && /* @__PURE__ */ e(
                    hn,
                    {
                      attachments: N,
                      uploads: Re,
                      className: `${_ === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                      deletingAttachmentId: de,
                      unavailableHint: P,
                      onDownloadAttachment: A,
                      onDeleteAttachment: j ? (g) => {
                        R(g);
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
const Gs = { low: "低风险", medium: "中风险", high: "高风险" }, Xs = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function Pl({
  isSidebarOpen: t,
  skills: a,
  loading: c = !1,
  error: s,
  pendingSkillIds: o = [],
  onOpenSidebar: m,
  onInstall: p,
  onUninstall: N,
  onRetry: h
}) {
  const [f, P] = x("installed"), [d, v] = x(""), [_, L] = x(!1), [C, D] = x([]), [G, U] = x(null), O = ke(() => new Set(o), [o]), A = ke(() => {
    const b = d.trim().toLowerCase();
    return a.filter((ee) => f === "installed" !== ee.installed ? !1 : b ? [ee.name, ee.source, ee.description, ...ee.tags].join(" ").toLowerCase().includes(b) : !0);
  }, [f, d, a]), w = (b) => {
    P(b), L(!1), D([]);
  }, j = () => {
    L((b) => !b), D([]);
  }, B = (b) => D((ee) => ee.includes(b) ? ee.filter((ue) => ue !== b) : [...ee, b]), I = (b) => b.installed ? N([b.id]) : p([b.id]), oe = () => {
    C.length && (f === "installed" ? N(C) : p(C), D([]), L(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: m, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(an, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
        /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
        /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${_ ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ r("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Ct, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: d, onChange: (b) => v(b.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => w("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${f === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => w("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${f === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: _, onChange: (b) => {
                L(b.target.checked), D([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        s && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: s }),
          h && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: h, children: "重新加载" })
        ] }),
        !s && c && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (b, ee) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, ee)) }),
        !s && !c && A.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": o.length > 0, children: A.map((b) => {
          const ee = C.includes(b.id), ue = O.has(b.id), X = ee ? "border-skillSelectedBorder bg-skillSelectedSurface" : G === b.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${X}`, onMouseEnter: () => U(b.id), onMouseLeave: () => U(($) => $ === b.id ? null : $), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: b.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: b.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Xs[b.riskLevel]}`, children: Gs[b.riskLevel] }),
                _ && /* @__PURE__ */ e("button", { type: "button", onClick: () => B(b.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": ee ? `取消选择 ${b.name}` : `选择 ${b.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${ee ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: b.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: b.tags.map(($) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: $ }, `${b.id}-${$}`)) }),
              !_ && /* @__PURE__ */ e("button", { type: "button", disabled: ue, onClick: () => I(b), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${G === b.id || ue ? "inline-flex" : "hidden"} ${b.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: ue ? "处理中..." : b.installed ? "卸载" : "安装" })
            ] })
          ] }, b.id);
        }) }) : !s && !c ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    _ && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        C.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: j, disabled: o.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: oe, disabled: !C.length || o.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: o.length > 0 ? "处理中..." : f === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  El as A,
  Ia as B,
  Cs as C,
  bl as D,
  ds as E,
  yl as F,
  gl as G,
  Ll as H,
  xn as I,
  Ss as J,
  Ga as K,
  Ml as L,
  pn as M,
  hn as N,
  fn as O,
  As as P,
  bn as Q,
  $l as R,
  Pl as S,
  yr as T,
  Cl as U,
  Tl as V,
  Ts as W,
  ks as X,
  qt as a,
  nt as b,
  fl as c,
  Wa as d,
  dr as e,
  un as f,
  kr as g,
  Ha as h,
  Al as i,
  xs as j,
  Va as k,
  qa as l,
  hl as m,
  Sa as n,
  ys as o,
  Ms as p,
  Sl as q,
  vs as r,
  xl as s,
  cs as t,
  Ka as u,
  zl as v,
  Nl as w,
  kl as x,
  wl as y,
  vl as z
};
