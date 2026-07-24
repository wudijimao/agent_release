import { jsxs as t, Fragment as Le, jsx as e } from "react/jsx-runtime";
import ge, { useMemo as G, useState as y, useRef as ne, useCallback as ce, useEffect as J, forwardRef as ft, useId as Dt } from "react";
import de from "classnames";
import { Check as Ue, Copy as Je, RefreshCcw as Rt, ThumbsUp as It, ThumbsDown as Ft, Puzzle as bt, AtSign as gt, LoaderCircle as Ht, AlertCircle as Wt, Paperclip as yt, ArrowRight as vt, Sparkles as Ut, Loader2 as qt, ChevronDown as Ge, ChevronRight as Ye, Search as Ie, Globe as Xt, BookOpen as Vt, Menu as wt, FileText as Nt, FlaskConical as Ot, X as We, Clock3 as kt, Plus as at, Square as Yt, Send as Gt, UserPlus as Kt, Building2 as Qt, CheckCircle2 as Ke, Trash2 as Zt, Folder as nt, PanelLeftClose as Jt, SquarePen as er, AlertTriangle as tr, Settings as rr, Pin as st, MoreHorizontal as nr, Pencil as sr, Share2 as ar } from "lucide-react";
import lr from "react-markdown";
import ir from "remark-gfm";
import or from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as cr } from "react-dom";
const dr = "_button_3tg6r_1", ur = "_primary_3tg6r_5", mr = "_disabled_3tg6r_9", pr = "_secondary_3tg6r_17", hr = "_ghost_3tg6r_25", xr = "_danger_3tg6r_33", fr = "_small_3tg6r_41", br = "_medium_3tg6r_45", gr = "_large_3tg6r_49", yr = "_roundedSquare_3tg6r_53", vr = "_roundedSmall_3tg6r_57", wr = "_roundedMedium_3tg6r_61", Nr = "_roundedLarge_3tg6r_62", kr = "_roundedFull_3tg6r_66", Tr = "_loadingSpinner_3tg6r_67", Cr = "_loading_3tg6r_67", Sr = "_fullWidth_3tg6r_90", $r = "_icon_3tg6r_94", fe = {
  button: dr,
  primary: ur,
  disabled: mr,
  secondary: pr,
  ghost: hr,
  danger: xr,
  small: fr,
  medium: br,
  large: gr,
  roundedSquare: yr,
  roundedSmall: vr,
  roundedMedium: wr,
  roundedLarge: Nr,
  roundedFull: kr,
  loadingSpinner: Tr,
  loading: Cr,
  fullWidth: Sr,
  icon: $r
}, Mr = {
  primary: fe.primary,
  secondary: fe.secondary,
  ghost: fe.ghost,
  danger: fe.danger
}, Lr = {
  small: fe.small,
  medium: fe.medium,
  large: fe.large
}, zr = {
  square: fe.roundedSquare,
  small: fe.roundedSmall,
  medium: fe.roundedMedium,
  large: fe.roundedLarge,
  full: fe.roundedFull
}, je = ge.forwardRef(
  ({
    type: r = "primary",
    size: n = "medium",
    isLoading: o,
    loading: l,
    disabled: d = !1,
    children: h,
    icon: p,
    iconPosition: u = "left",
    className: f,
    fullWidth: x = !1,
    rounded: g = "medium",
    onClick: b,
    ...v
  }, I) => {
    const L = o ?? l ?? !1, S = d || L, N = G(() => L ? /* @__PURE__ */ t(Le, { children: [
      /* @__PURE__ */ e("span", { className: fe.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: h })
    ] }) : p ? /* @__PURE__ */ t(Le, { children: [
      u === "left" && /* @__PURE__ */ e("span", { className: fe.icon, children: p }),
      h && /* @__PURE__ */ e("span", { children: h }),
      u === "right" && /* @__PURE__ */ e("span", { className: fe.icon, children: p })
    ] }) : h, [h, L, p, u]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: I,
        className: de(
          fe.button,
          Mr[r],
          Lr[n],
          zr[g],
          {
            [fe.fullWidth]: x,
            [fe.loading]: L,
            [fe.disabled]: S
          },
          f
        ),
        disabled: S,
        onClick: b,
        ...v,
        children: N
      }
    );
  }
);
je.displayName = "BaseButton";
const Ar = { small: "h-8", medium: "h-9", large: "h-14" }, Tt = ge.forwardRef(
  ({
    type: r = "text",
    placeholder: n,
    value: o,
    defaultValue: l,
    disabled: d = !1,
    readOnly: h = !1,
    error: p = !1,
    size: u = "medium",
    prefix: f,
    suffix: x,
    prefixIcon: g,
    suffixIcon: b,
    onChange: v,
    onFocus: I,
    onBlur: L,
    onClear: S,
    className: N,
    containerClassName: P,
    clearable: F = !1,
    label: $,
    helperText: T,
    ...R
  }, A) => {
    const [q, M] = y(!1), X = ne(null), H = ce((i) => {
      X.current = i, typeof A == "function" ? A(i) : A && (A.current = i);
    }, [A]), w = ce(() => {
      var k, B;
      const i = X.current;
      i && ((B = (k = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : k.set) == null || B.call(i, ""), i.dispatchEvent(new Event("input", { bubbles: !0 })), i.focus(), S == null || S());
    }, [S]), a = G(
      () => {
        var i;
        return F && q && String(o ?? ((i = X.current) == null ? void 0 : i.value) ?? "").length > 0;
      },
      [F, q, o]
    );
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      $ && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: $ }),
      /* @__PURE__ */ t(
        "div",
        {
          className: de(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Ar[u],
            !d && !p && "hover:border-controlBorder",
            q && !d && !p && "border-primary ring-2 ring-brandFocus",
            p && "border-danger",
            p && q && "ring-2 ring-dangerFocus",
            d && "cursor-not-allowed bg-surfaceMuted",
            P
          ),
          children: [
            (f || g) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: f || g }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: H,
                type: r,
                placeholder: n,
                value: o,
                defaultValue: l,
                disabled: d,
                readOnly: h,
                className: de("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", N),
                onFocus: (i) => {
                  M(!0), I == null || I(i);
                },
                onBlur: (i) => {
                  M(!1), L == null || L(i);
                },
                onChange: v,
                ...R
              }
            ),
            /* @__PURE__ */ t("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              a && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (i) => i.preventDefault(), onClick: w, "aria-label": "清空", children: "✕" }),
              x || b
            ] })
          ]
        }
      ),
      T && /* @__PURE__ */ e("div", { className: de("text-xs leading-6", p ? "text-danger" : "text-mutedText"), children: T })
    ] });
  }
);
Tt.displayName = "BaseInput";
const Pr = { small: "h-8", medium: "h-9", large: "h-14" }, _r = ge.forwardRef(
  ({ options: r = [], value: n, defaultValue: o, placeholder: l, disabled: d = !1, error: h = !1, size: p = "medium", label: u, helperText: f, onChange: x, className: g, ...b }, v) => {
    const I = ce((L) => {
      const S = L.target.value, N = r.find((P) => String(P.value) === S);
      x == null || x(S === "" ? "" : (N == null ? void 0 : N.value) ?? S);
    }, [x, r]);
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      u && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: u }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          "select",
          {
            ref: v,
            className: de(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              h && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Pr[p],
              g
            ),
            value: n ?? o ?? "",
            disabled: d,
            onChange: I,
            ...b,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              r.map((L) => /* @__PURE__ */ e("option", { value: L.value, disabled: L.disabled, children: L.label }, L.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      f && /* @__PURE__ */ e("div", { className: de("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: f })
    ] });
  }
);
_r.displayName = "BaseSelect";
const Br = "_container_ykn59_1", jr = "_item_ykn59_10", Er = "_itemActive_ykn59_27", Dr = "_itemDisabled_ykn59_27", Rr = "_sizeSmall_ykn59_43", Ir = "_sizeMiddle_ykn59_49", Fr = "_sizeLarge_ykn59_55", Be = {
  container: Br,
  item: jr,
  itemActive: Er,
  itemDisabled: Dr,
  sizeSmall: Rr,
  sizeMiddle: Ir,
  sizeLarge: Fr
}, Hr = {
  small: Be.sizeSmall,
  middle: Be.sizeMiddle,
  large: Be.sizeLarge
};
function En({
  options: r,
  value: n,
  defaultValue: o,
  onChange: l,
  size: d = "middle",
  disabled: h = !1,
  className: p
}) {
  var b;
  const [u, f] = y(
    o ?? ((b = r[0]) == null ? void 0 : b.value) ?? ""
  ), x = n ?? u, g = (v) => {
    h || (n === void 0 && f(v), l == null || l(v));
  };
  return /* @__PURE__ */ e("div", { className: de(Be.container, Hr[d], p), children: r.map((v) => {
    const I = x === v.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: de(Be.item, I && Be.itemActive, h && Be.itemDisabled),
        onClick: () => g(v.value),
        disabled: h,
        "aria-pressed": I,
        children: v.label
      },
      v.value
    );
  }) });
}
const Wr = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(0)} KB` : `${(r / (1024 * 1024)).toFixed(0)} MB`, Ur = ge.forwardRef(
  ({ accept: r, multiple: n = !1, disabled: o = !1, onChange: l, onError: d, maxSize: h, children: p, className: u, dragable: f = !0, placeholderTitle: x, placeholderDescription: g, placeholderIcon: b, maxCount: v }, I) => {
    const L = ne(null), [S, N] = y(!1), P = ce(($) => {
      if (v && $.length > v) {
        d == null || d(new Error(`单次最多上传 ${v} 个文件`));
        return;
      }
      if (h) {
        for (const T of Array.from($))
          if (T.size > h) {
            d == null || d(new Error(`文件“${T.name}”超过大小限制（${Wr(h)}）`));
            return;
          }
      }
      l == null || l($);
    }, [v, h, l, d]), F = () => {
      var $;
      o || ($ = L.current) == null || $.click();
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: I,
        className: de(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          S && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          u
        ),
        onClick: F,
        onKeyDown: ($) => {
          !o && ($.key === "Enter" || $.key === " ") && ($.preventDefault(), F());
        },
        onDragOver: ($) => {
          f && !o && ($.preventDefault(), N(!0));
        },
        onDragLeave: () => N(!1),
        onDrop: ($) => {
          f && !o && ($.preventDefault(), N(!1), P($.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: L, type: "file", accept: r, multiple: n, disabled: o, onChange: ($) => $.target.files && P($.target.files), className: "hidden" }),
          p || /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: b ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: x ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: g ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Ur.displayName = "BaseUpload";
const qr = "_maskAnimation_1h49h_1", Xr = "_modalAnimation_1h49h_5", ot = {
  maskAnimation: qr,
  modalAnimation: Xr
}, lt = ({
  visible: r,
  open: n = r,
  show: o = n,
  title: l,
  width: d = 520,
  centered: h = !0,
  destroyOnClose: p = !1,
  mask: u = !0,
  maskClosable: f = !0,
  okText: x = "确认",
  cancelText: g = "取消",
  confirmLoading: b = !1,
  okButtonProps: v,
  cancelButtonProps: I,
  onConfirm: L,
  onCancel: S,
  onClose: N,
  onOk: P,
  onDismiss: F,
  children: $,
  footer: T,
  className: R,
  bodyClassName: A
}) => {
  const q = o ?? !1, M = ce(async () => {
    try {
      L ? await L() : P && await P();
    } catch (w) {
      console.error("Modal confirm error:", w);
    }
  }, [L, P]), X = ce(() => {
    S ? S() : N ? N() : F == null || F();
  }, [S, N, F]), H = G(() => {
    if (T === null) return null;
    if (T) return T;
    const { type: w, ...a } = I ?? {}, { type: i, ...k } = v ?? {};
    return /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(je, { type: "secondary", size: "medium", onClick: X, ...a, children: g }),
      /* @__PURE__ */ e(je, { type: "primary", size: "medium", isLoading: b, onClick: M, ...k, children: b ? "加载中..." : x })
    ] });
  }, [I, g, b, T, X, M, v, x]);
  return !q && p || !q ? null : /* @__PURE__ */ t(Le, { children: [
    u && /* @__PURE__ */ e("div", { className: de("fixed inset-0 z-[1000] bg-overlayMask", ot.maskAnimation), onClick: () => f && X(), role: "presentation" }),
    /* @__PURE__ */ t(
      "div",
      {
        className: de(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          h && "left-1/2 top-1/2",
          ot.modalAnimation,
          R
        ),
        style: { width: d },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ t("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: X, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: de("min-h-20 p-5 text-primaryText", A), children: $ }),
          H
        ]
      }
    )
  ] });
};
lt.displayName = "BaseModal";
const Vr = ({ title: r, extra: n, children: o, hoverable: l = !1, loading: d = !1, bordered: h = !0, className: p, bodyClassName: u, onClick: f }) => /* @__PURE__ */ t(
  "div",
  {
    className: de(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      h && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      d && "pointer-events-none opacity-60",
      p
    ),
    onClick: f,
    children: [
      (r || n) && /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        r && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: r }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: de("p-4 text-primaryText", (r || n) && "pt-1", u), children: o })
    ]
  }
);
Vr.displayName = "BaseCard";
const Or = ({ columns: r, dataSource: n = [], rowKey: o = "id", loading: l = !1, bordered: d = !0, striped: h = !0, className: p, onRow: u }, f) => /* @__PURE__ */ t("div", { ref: f, className: de("relative w-full overflow-x-auto bg-surface", p), children: [
  /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: d ? "border-b border-lineSubtle" : void 0, children: r.map((x) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: x.width, textAlign: x.align }, children: x.title }, x.key || String(x.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: r.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((x, g) => {
      const b = String(typeof o == "string" ? x[o] ?? g : g);
      return /* @__PURE__ */ e("tr", { className: de(d && "border-b border-lineSoft last:border-b-0", h && "odd:bg-surface"), ...(u == null ? void 0 : u(x, g)) || {}, children: r.map((v) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: v.align }, children: v.render ? v.render(x[v.dataIndex], x, g) : String(x[v.dataIndex] ?? "") }, v.key || String(v.dataIndex))) }, b);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Dn = ge.forwardRef(Or), Yr = ({ current: r = 1, pageSize: n = 10, total: o = 0, onChange: l, showSizeChanger: d = !1, pageSizeOptions: h = [10, 20, 50, 100], onShowSizeChange: p, disabled: u = !1, className: f }) => {
  const x = G(() => Math.ceil(o / n) || 1, [n, o]), g = ce((v) => p == null ? void 0 : p(1, Number(v.target.value)), [p]), b = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ t("div", { className: de("flex flex-wrap items-center justify-center gap-4 p-4", f), children: [
    /* @__PURE__ */ e("button", { type: "button", className: b, onClick: () => r > 1 && (l == null ? void 0 : l(r - 1)), disabled: u || r <= 1, children: "← 上一页" }),
    /* @__PURE__ */ t("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      r,
      " / ",
      x,
      " 页，共 ",
      o,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: b, onClick: () => r < x && (l == null ? void 0 : l(r + 1)), disabled: u || r >= x, children: "下一页 →" }),
    d && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: g, disabled: u, children: h.map((v) => /* @__PURE__ */ t("option", { value: v, children: [
      v,
      " 条/页"
    ] }, v)) })
  ] });
};
Yr.displayName = "BasePagination";
const Ct = ({ description: r = "暂无数据", image: n, children: o }) => /* @__PURE__ */ t("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  r && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: r }),
  o
] });
Ct.displayName = "BaseEmpty";
const Qe = ({ trigger: r, items: n, footerItems: o = [], open: l = !1, onOpenChange: d, onTriggerClick: h, onItemClick: p, placement: u = "bottom-start", width: f, portal: x = !1, className: g, triggerClassName: b, menuClassName: v, listClassName: I, footerClassName: L }) => {
  const S = ne(null), N = ne(null), [P, F] = y({}), $ = u.endsWith("end"), T = u.startsWith("top");
  J(() => {
    if (!l || !x || !S.current) return;
    const M = S.current.getBoundingClientRect();
    F({ position: "fixed", left: $ ? M.right : M.left, top: T ? M.top : M.bottom, transform: $ ? "translateX(-100%)" : void 0 });
  }, [T, $, l, x, u]), J(() => {
    !l || !x || !T || !N.current || F((M) => ({ ...M, top: Number(M.top) - N.current.offsetHeight - 8 }));
  }, [T, l, x]), J(() => {
    if (!l || !d) return;
    const M = (X) => {
      var w, a;
      const H = X.target;
      (w = S.current) != null && w.contains(H) || (a = N.current) != null && a.contains(H) || d(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [d, l]);
  const R = G(() => f ? { width: typeof f == "number" ? `${f}px` : f } : void 0, [f]), A = ce((M) => /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: de(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !M.danger && !M.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !M.danger && M.active && "bg-primary-soft font-medium text-primary",
        M.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (X) => p == null ? void 0 : p(M, X),
      disabled: M.disabled,
      children: [
        M.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: M.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: M.label })
      ]
    },
    M.key
  ), [p]), q = l ? /* @__PURE__ */ t(
    "div",
    {
      ref: N,
      className: de(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !x && "absolute",
        !x && !T && "top-[calc(100%+8px)]",
        !x && T && "bottom-[calc(100%+8px)]",
        !x && $ ? "right-0" : x ? void 0 : "left-0",
        v
      ),
      style: x ? { ...P, ...R } : R,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: de("flex min-h-0 flex-col gap-1", I), children: n.map(A) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: de("flex flex-col gap-1 border-t border-lineSoft pt-2", L), children: o.map(A) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ t("div", { ref: S, className: de("relative inline-block", g), children: [
    /* @__PURE__ */ e("button", { type: "button", className: de("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", b), onClick: (M) => {
      h == null || h(M), d == null || d(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: r }),
    x ? q && cr(q, document.body) : q
  ] });
};
Qe.displayName = "BaseActionMenu";
const Gr = ({
  markdownContent: r,
  onRefresh: n,
  feedback: o,
  onFeedback: l,
  disabled: d = !1
}) => {
  const [h, p] = y(!1), u = !!(n || l), f = ce(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), p(!0), window.setTimeout(() => p(!1), 1200);
      } catch {
      }
  }, [r]);
  return /* @__PURE__ */ t(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${u ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: f,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制 Markdown" : "复制 Markdown",
            children: h ? /* @__PURE__ */ e(Ue, { size: 15 }) : /* @__PURE__ */ e(Je, { size: 15 })
          }
        ),
        n && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n,
            disabled: d,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(Rt, { size: 15 })
          }
        ),
        l && /* @__PURE__ */ t(Le, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(It, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(Ft, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, Kr = ge.memo(Gr), ct = "[[PAPER_LIST_JSON]]";
let dt = !1, Xe = null, Ve = null, Oe = null;
const Qr = async () => (Ve || (Ve = Promise.all([import("remark-math"), import("rehype-katex")]).then(([r, n]) => ({
  remark: r.default,
  rehype: n.default
})).catch((r) => {
  throw Ve = null, r;
})), Ve), Zr = async () => (Oe || (Oe = import("remark-emoji").then((r) => r.default).catch(() => (Oe = null, null))), Oe), Jr = async () => {
  Xe || (Xe = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw Xe = null, n;
  }));
  const r = await Xe;
  if (!dt) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    r.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), dt = !0;
  }
  return r;
}, Ze = (r) => typeof r == "string" || typeof r == "number" ? String(r) : Array.isArray(r) ? r.map((n) => Ze(n)).join("") : ge.isValidElement(r) ? Ze(r.props.children) : "", ut = (r) => {
  const n = r.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, en = ({ href: r, label: n }) => {
  const o = G(() => {
    const l = n.trim();
    if (l) return l;
    try {
      const h = new URL(r, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (h) return decodeURIComponent(h);
    } catch {
    }
    return r;
  }, [r, n]);
  return /* @__PURE__ */ t("div", { className: "group not-prose my-2 inline-flex w-[340px] max-w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2 shadow-sm", children: [
    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-warning text-xs font-semibold tracking-wide text-white", children: "PDF" }),
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: o }),
      /* @__PURE__ */ e("p", { className: "m-0 text-xs text-secondaryText", children: "PDF 文档" })
    ] }),
    /* @__PURE__ */ e(
      "a",
      {
        href: r,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "新窗口打开 PDF",
        className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
        children: /* @__PURE__ */ e(vt, { size: 14 })
      }
    )
  ] });
}, tn = ({ language: r, rawCode: n, className: o, children: l }) => {
  const [d, h] = y(!1), p = ce(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), h(!0), window.setTimeout(() => h(!1), 1200);
      } catch {
      }
  }, [n]);
  return /* @__PURE__ */ t("div", { className: "code-block-wrapper not-prose", children: [
    /* @__PURE__ */ t("div", { className: "code-block-header", children: [
      /* @__PURE__ */ e("span", { className: "code-block-lang-tag", children: r || "code" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: p,
          className: `code-block-copy-btn ${d ? "copied" : ""}`,
          title: d ? "已复制代码" : "复制代码",
          children: [
            d ? /* @__PURE__ */ e(Ue, { size: 12 }) : /* @__PURE__ */ e(Je, { size: 12 }),
            d ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${o ?? ""}`.trim(), children: l }) })
  ] });
}, rn = ({ rawCode: r }) => {
  const [n, o] = y(!1), l = ce(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), o(!0), window.setTimeout(() => o(!1), 1200);
      } catch {
      }
  }, [r]);
  return /* @__PURE__ */ t("div", { className: "code-block-wrapper not-prose", children: [
    /* @__PURE__ */ t("div", { className: "code-block-header", children: [
      /* @__PURE__ */ e("span", { className: "code-block-lang-tag", children: "mermaid" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: l,
          className: `code-block-copy-btn ${n ? "copied" : ""}`,
          title: n ? "已复制图表代码" : "复制图表代码",
          children: [
            n ? /* @__PURE__ */ e(Ue, { size: 12 }) : /* @__PURE__ */ e(Je, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: r }) })
  ] });
}, St = (r) => {
  const n = typeof r.title == "string" ? r.title.trim() : "", o = typeof r.pmid == "string" ? r.pmid.trim() : "", l = typeof r.doi == "string" ? r.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !o || !l ? null : { title: n, pmid: o, doi: l };
}, mt = (r) => {
  const n = r.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const o = [];
  return n.forEach((l, d) => {
    var b;
    const h = l.match(/PMID\s*[:：]\s*(\d{4,})/i), p = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!h || !p) return;
    const u = l.slice(0, h.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), f = ((b = n[d - 1]) == null ? void 0 : b.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", g = St({
      title: u || f,
      pmid: h[1],
      doi: p[1]
    });
    g && o.push(g);
  }), o.length === 0 ? null : { items: o };
}, nn = (r) => {
  if (!r.startsWith(ct))
    return mt(r);
  const n = r.slice(ct.length).trim();
  if (!n) return null;
  try {
    const o = JSON.parse(n);
    if (!Array.isArray(o.items)) return null;
    const l = o.items.map((d) => St(d)).filter((d) => d !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return mt(n);
  }
}, $t = ({
  msg: r,
  actionKey: n,
  feedback: o,
  onFeedback: l,
  onRefresh: d,
  isTyping: h = !1,
  isStreaming: p
}) => {
  var H, w;
  const u = r.role === "user", f = p ?? h, x = ne(null), [g, b] = y(null), [v, I] = y(null), [L, S] = y(null), [N, P] = y(!1), F = G(() => /```\s*mermaid/i.test(r.content), [r.content]), $ = G(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(r.content), [r.content]), T = G(() => /:[a-zA-Z0-9_+-]+:/.test(r.content), [r.content]), R = G(
    () => u ? null : nn(r.content),
    [u, r.content]
  ), A = !!(R && R.items.length > 0);
  J(() => {
    if (!$ || g || v) return;
    let a = !1;
    return Qr().then((i) => {
      a || (b(() => i.remark), I(() => i.rehype));
    }).catch(() => {
    }), () => {
      a = !0;
    };
  }, [$, g, v]), J(() => {
    if (!T || N) return;
    let a = !1;
    return Zr().then((i) => {
      a || (i && S(() => i), P(!0));
    }), () => {
      a = !0;
    };
  }, [T, N]);
  const q = G(() => {
    const a = [ir];
    return L && a.push(L), g && a.push(g), a;
  }, [L, g]), M = G(() => {
    const a = [or];
    return v && a.push(v), a;
  }, [v]), X = G(
    () => ({
      table: ({ node: a, ...i }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...i }) }),
      tr: ({ node: a, ...i }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...i }),
      th: ({ node: a, ...i }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...i
        }
      ),
      td: ({ node: a, ...i }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...i }),
      blockquote: ({ node: a, ...i }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...i
        }
      ),
      input: ({ node: a, type: i, checked: k, ...B }) => i === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!k,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...B
        }
      ) : /* @__PURE__ */ e("input", { type: i, ...B }),
      section: ({ node: a, ...i }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...i }),
      p: ({ node: a, children: i, ...k }) => {
        const B = ge.Children.toArray(i);
        if (B.length === 1 && ge.isValidElement(B[0])) {
          const ue = B[0];
          if (typeof ue.props.href == "string" && ut(ue.props.href)) {
            const ae = Ze(ue.props.children).trim();
            return /* @__PURE__ */ e(en, { href: ue.props.href, label: ae });
          }
        }
        return /* @__PURE__ */ e("p", { ...k, children: i });
      },
      a: ({ node: a, href: i, ...k }) => {
        const B = i ?? "", ue = /^https?:\/\/(dx\.)?doi\.org\//i.test(B) || /^doi:/i.test(B), ae = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(B) || /\/pmc\/|\/pmid\//i.test(B), pe = ut(B);
        return ue || ae || pe ? /* @__PURE__ */ e(
          "a",
          {
            href: i,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...k
          }
        ) : /* @__PURE__ */ e("a", { href: i, target: "_blank", rel: "noreferrer", ...k });
      },
      pre({ children: a, ...i }) {
        const k = ge.Children.toArray(a).find(
          (te) => ge.isValidElement(te) && typeof te.props.className == "string" && te.props.className.includes("language-")
        );
        if (!k)
          return /* @__PURE__ */ e("pre", { ...i, children: a });
        const B = k.props.className ?? "", ue = B.match(/language-([\w-]+)/), ae = ue ? ue[1].toLowerCase() : "code", pe = Ze(k.props.children).replace(/\n$/, "");
        return ae === "mermaid" ? /* @__PURE__ */ e(rn, { rawCode: pe }) : /* @__PURE__ */ e(tn, { language: ae, rawCode: pe, className: B, children: k.props.children });
      },
      code({ children: a, className: i, ...k }) {
        return i ? /* @__PURE__ */ e("code", { className: i, ...k, children: a }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...k,
            children: a
          }
        );
      }
    }),
    []
  );
  return J(() => {
    if (u || f || !F) return;
    const a = x.current;
    if (!a) return;
    const i = Array.from(a.querySelectorAll(".mermaid")).filter(
      (k) => k.dataset.processed !== "true"
    );
    i.length !== 0 && Jr().then(async (k) => {
      await Promise.all(
        i.map(async (B, ue) => {
          var he;
          const ae = (he = B.textContent) == null ? void 0 : he.trim();
          if (!ae) return;
          const pe = `mermaid-${Date.now()}-${ue}`, { svg: te } = await k.render(pe, ae);
          B.innerHTML = te, B.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [u, f, F, r.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${u ? "justify-end" : "justify-start"}`, children: u ? /* @__PURE__ */ t("div", { className: "message-bubble-user", children: [
    (r.references && r.references.length > 0 || r.attachments && r.attachments.length > 0) && /* @__PURE__ */ t("div", { className: "mb-2 flex flex-wrap gap-2", children: [
      (H = r.references) == null ? void 0 : H.map((a) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${a.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
          children: [
            a.type === "skill" ? /* @__PURE__ */ e(bt, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(gt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: a.label, children: a.label })
          ]
        },
        a.id
      )),
      (w = r.attachments) == null ? void 0 : w.map((a) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${a.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
          role: a.status === "error" ? "alert" : void 0,
          title: a.errorMessage,
          children: [
            a.status === "uploading" ? /* @__PURE__ */ e(Ht, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : a.status === "error" ? /* @__PURE__ */ e(Wt, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : a.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: a.previewUrl, alt: a.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(yt, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: a.name, children: a.name }),
            a.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
            a.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
          ]
        },
        a.id
      ))
    ] }),
    /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: r.content })
  ] }) : /* @__PURE__ */ t("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    A && R ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: R.items.map((a, i) => /* @__PURE__ */ t(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: a.title }),
            /* @__PURE__ */ t("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${a.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: a.pmid
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
                  href: `https://doi.org/${a.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: a.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${a.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(vt, { size: 14 })
            }
          )
        ]
      },
      `${a.pmid}-${i}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: x,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          lr,
          {
            remarkPlugins: q,
            rehypePlugins: M,
            components: X,
            children: r.content
          }
        )
      }
    ),
    !A && r.content && !f && /* @__PURE__ */ e(
      Kr,
      {
        markdownContent: r.content,
        onRefresh: d,
        feedback: o,
        onFeedback: n && l ? (a) => l(n, a) : void 0,
        disabled: f
      }
    )
  ] }) }) });
}, sn = ge.memo($t), an = {
  thinking: "思考中…",
  analyzing: "分析中…",
  searching: "搜索中…",
  executing: "执行中…",
  generating: "生成中…"
}, pt = {
  knowledge: {
    icon: /* @__PURE__ */ e(Vt, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Xt, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Ie, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Mt = ({
  phase: r,
  searchSteps: n = [],
  defaultExpanded: o = !0
}) => {
  const [l, d] = y(o), h = ne(null);
  J(() => {
    n.length > 0 && d(!0);
  }, [n.length]);
  const p = n.length > 0;
  return /* @__PURE__ */ t("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: r === "generating" ? /* @__PURE__ */ e(Ut, { size: 14, className: "text-primary animate-pulse" }) : /* @__PURE__ */ e(qt, { size: 14, className: "animate-spin text-primary" }) }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: an[r] }),
      p && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => d((u) => !u),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            l ? /* @__PURE__ */ e(Ge, { size: 12 }) : /* @__PURE__ */ e(Ye, { size: 12 }),
            /* @__PURE__ */ t("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    p && /* @__PURE__ */ e(
      "div",
      {
        ref: h,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${l ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((u, f) => {
          const x = pt[u.type] ?? pt.tool;
          return /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: x.colorClass, children: x.icon }),
                /* @__PURE__ */ e("span", { className: "truncate max-w-[480px]", children: u.label })
              ]
            },
            `${u.type}-${f}-${u.label}`
          );
        })
      }
    )
  ] });
}, ln = ge.memo(Mt);
function on(r, n) {
  if (typeof r == "function") {
    r(n);
    return;
  }
  r && (r.current = n);
}
function cn({
  messages: r,
  isTyping: n,
  statusPhase: o = "thinking",
  searchSteps: l = [],
  hasReceivedAssistantChunk: d = !1,
  contentMaxWidth: h = 800,
  selection: p,
  scrollbar: u,
  feedbackByMessageKey: f,
  getMessageKey: x = (S, N) => String(N),
  onFeedback: g,
  onRegenerate: b,
  onScroll: v,
  scrollContainerRef: I,
  onMessageElement: L
}) {
  const S = !!p;
  return /* @__PURE__ */ t("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: (N) => on(I, N),
        onScroll: v,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ t(
          "div",
          {
            className: `flex w-full flex-col ${S ? "gap-3" : "gap-8"}`,
            style: { maxWidth: h },
            children: [
              r.map((N, P) => {
                const F = x(N, P), $ = (p == null ? void 0 : p.selectedMessageKeys.has(F)) ?? !1;
                return /* @__PURE__ */ t(
                  "div",
                  {
                    ref: (T) => L == null ? void 0 : L(P, T),
                    className: S ? "flex w-full items-start gap-2" : void 0,
                    children: [
                      p && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => p.onToggleMessage(F),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": $ ? "取消选择消息" : "选择消息",
                          children: $ ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Ue, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ e(
                        "div",
                        {
                          className: p ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${$ ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${N.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: /* @__PURE__ */ e(
                            $t,
                            {
                              msg: N,
                              actionKey: F,
                              feedback: f == null ? void 0 : f[F],
                              onFeedback: g,
                              onRefresh: b ? () => b(P) : void 0,
                              isTyping: n
                            }
                          )
                        }
                      )
                    ]
                  },
                  F
                );
              }),
              n && !d && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(Mt, { phase: o, searchSteps: [...l] }) }) })
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
ge.memo(cn);
function Rn({
  children: r,
  maxWidth: n = 840,
  disclaimer: o = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: n },
      children: [
        r,
        o && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: o })
      ]
    }
  );
}
const In = ft(
  function({ header: n, children: o, sidePanels: l }, d) {
    return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ t("div", { ref: d, className: "flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: o }),
        l
      ] })
    ] });
  }
), Fn = ft(
  function({ open: n, width: o, resizing: l = !1, children: d }, h) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: h,
        style: { width: n ? o : 0 },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: o }, className: "h-full min-w-0", children: d })
      }
    );
  }
);
function dn({
  isSidebarOpen: r,
  title: n,
  editingTitle: o,
  titleInputRef: l,
  divided: d = !1,
  actions: h,
  onOpenSidebar: p,
  onStartEditTitle: u,
  onEditingTitleChange: f,
  onCommitTitle: x,
  onEditingTitleKeyDown: g
}) {
  return /* @__PURE__ */ t(
    "header",
    {
      className: `z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${d ? "border-b border-chatWorkspaceDivider" : ""}`,
      children: [
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
          !r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: p,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(wt, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: o !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: o,
              onChange: (v) => f == null ? void 0 : f(v.target.value),
              onBlur: x,
              onKeyDown: g,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${u ? "cursor-pointer" : ""}`,
              onClick: u,
              title: u ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        h && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: h })
      ]
    }
  );
}
function Hn({ active: r = !1, icon: n, label: o, onClick: l }) {
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: l,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${r ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: o })
      ]
    }
  );
}
function Wn({
  items: r,
  activeMessageIndex: n,
  initiallyExpanded: o = !1,
  onSelect: l
}) {
  const [d, h] = y(o), [p, u] = y(null), [f, x] = y(0), [g, b] = y(0), [v, I] = y(!1), L = ne(null), S = ne({}), N = ne(null), P = ce(() => {
    const T = L.current;
    if (!T) {
      x(0), b(0);
      return;
    }
    const { scrollTop: R, scrollHeight: A, clientHeight: q } = T;
    if (A <= q || q <= 0) {
      x(0), b(0);
      return;
    }
    const M = Math.max(q / A * q, 24), X = q - M, H = R / Math.max(A - q, 1);
    x(M), b(X * H);
  }, []), F = ce(() => {
    P(), I(!0), N.current !== null && window.clearTimeout(N.current), N.current = window.setTimeout(() => I(!1), 650);
  }, [P]), $ = () => {
    N.current !== null && (window.clearTimeout(N.current), N.current = null), h(!1), u(null), I(!1);
  };
  return J(() => {
    if (!d) return;
    const T = window.requestAnimationFrame(P);
    return () => window.cancelAnimationFrame(T);
  }, [d, r.length, P]), J(() => {
    const T = L.current, R = S.current[n];
    if (!T || !R) return;
    const A = T.scrollTop, q = A + T.clientHeight, M = R.offsetTop, X = M + R.offsetHeight, H = 16;
    M < A + H ? T.scrollTo({ top: Math.max(M - H, 0), behavior: "auto" }) : X > q - H && T.scrollTo({
      top: Math.max(X - T.clientHeight + H, 0),
      behavior: "auto"
    });
  }, [n, r.length]), J(() => () => {
    N.current !== null && window.clearTimeout(N.current);
  }, []), r.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => h(!0),
      onMouseLeave: $,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: L,
          onScroll: F,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${d ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: r.map((T) => {
              const R = T.messageIndex === n, A = p === T.messageIndex;
              return /* @__PURE__ */ t(
                "button",
                {
                  ref: (q) => {
                    S.current[T.messageIndex] = q;
                  },
                  type: "button",
                  onClick: () => l(T.messageIndex),
                  onMouseEnter: () => u(T.messageIndex),
                  onMouseLeave: () => u(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${d ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${T.messageIndex + 1} 条用户消息`,
                  title: T.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${d ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${R ? "text-primary" : A ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: T.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${R ? "h-[4px] w-[12px] bg-primary" : A ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                T.messageIndex
              );
            }) }),
            d && f > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${v ? "opacity-100" : "opacity-0"}`,
                style: { height: f, transform: `translateY(${g}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Un({
  selectedCount: r,
  shareLink: n,
  modalOpen: o,
  copied: l = !1,
  contentMaxWidth: d = 840,
  onCancel: h,
  onCreateLink: p,
  onCloseModal: u,
  onCopyLink: f
}) {
  return /* @__PURE__ */ t(Le, { children: [
    /* @__PURE__ */ e("div", { className: "w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur", children: /* @__PURE__ */ t(
      "div",
      {
        className: "mx-auto flex w-full items-center justify-between gap-4",
        style: { maxWidth: d },
        children: [
          /* @__PURE__ */ t("div", { className: "min-w-0 text-sm text-secondaryText", children: [
            "已选择 ",
            r,
            " 条对话"
          ] }),
          /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(je, { type: "secondary", size: "small", onClick: h, children: "取消" }),
            /* @__PURE__ */ e(
              je,
              {
                type: "primary",
                size: "small",
                disabled: r <= 0,
                onClick: p,
                children: "创建分享链接"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e(
      lt,
      {
        visible: o,
        title: "创建分享链接",
        width: 450,
        onCancel: u,
        footer: null,
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: f,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  l ? /* @__PURE__ */ e(Ue, { size: 14 }) : /* @__PURE__ */ e(Je, { size: 14 }),
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
function qn({
  tabs: r,
  activeKey: n,
  onSelectTab: o,
  onCloseTab: l,
  onClose: d,
  onResizeStart: h
}) {
  const p = r.find((u) => u.key === n) ?? null;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
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
    /* @__PURE__ */ t("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: r.map((u) => {
        const f = u.key === n;
        return /* @__PURE__ */ t("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => o(u.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${f ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                u.type === "knowledge" ? /* @__PURE__ */ e(Nt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Ot, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: u.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (x) => {
                x.stopPropagation(), l(u.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${u.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(We, { size: 12 })
            }
          )
        ] }, u.key);
      }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: d,
          className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
          title: "关闭预览",
          "aria-label": "关闭预览",
          children: /* @__PURE__ */ e(We, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-4 pt-2", children: p ? /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ e("h3", { className: "break-words text-base font-semibold text-primaryText", children: p.title }),
        p.type === "knowledge" && /* @__PURE__ */ e("div", { className: "text-xs text-tertiaryText", children: p.subtitle }),
        p.status && /* @__PURE__ */ e("div", { className: "inline-flex items-center rounded-full bg-bgLight px-2 py-1 text-xs text-secondaryText", children: p.status })
      ] }),
      /* @__PURE__ */ e("div", { className: "rounded-xl border border-borderGray bg-chatPreviewContentSurface p-3", children: /* @__PURE__ */ e("p", { className: "whitespace-pre-line break-words text-sm leading-6 text-secondaryText", children: p.content }) })
    ] }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Xn({
  projectName: r = "未归属项目",
  searchQuery: n,
  error: o,
  knowledgeDocs: l,
  experiments: d,
  activePreviewKey: h,
  onSearchQueryChange: p,
  onOpenKnowledge: u,
  onOpenExperiment: f,
  onResizeStart: x
}) {
  const g = l.length + d.length;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件面板宽度",
        onMouseDown: x,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ t("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ t("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: r }),
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Ie, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (b) => p(b.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : g === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ t(Le, { children: [
        l.map((b) => {
          const v = `knowledge:${b.id}`, I = h === v;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => u(b.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${I ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${I ? "font-semibold" : "font-normal"}`, children: b.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: b.tags[0] ?? "未分类" })
              ]
            },
            b.id
          );
        }),
        d.map((b) => {
          const v = `experiment:${b.id}`, I = h === v;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => f(b.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${I ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${I ? "font-semibold" : "font-normal"}`, children: b.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: b.tags[0] ?? b.status })
              ]
            },
            b.id
          );
        })
      ] }) }) })
    ] }) })
  ] });
}
const un = 50, mn = 100 * 1024 * 1024, pn = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", hn = [
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
], xn = /(?:^|\s)\/([^\s/]*)$/, fn = /(?:^|\s)@([^\s@]*)$/, bn = (r, n) => {
  const l = r.slice(0, n).match(xn);
  return l ? l[1] : null;
}, gn = (r, n) => {
  const l = r.slice(0, n).match(fn);
  return l ? l[1] : null;
}, Vn = (r, n, o, l) => {
  const d = r.slice(0, n), h = r.slice(o), p = d.match(/(?:^|\s)\/[^\s/]*$/);
  if (!p) {
    const b = `/${l} `;
    return { value: `${d}${b}${h}`, cursor: d.length + b.length };
  }
  const u = d.length - p[0].length, x = `${p[0].startsWith(" ") ? " " : ""}/${l} `, g = `${d.slice(0, u)}${x}`;
  return {
    value: `${g}${h}`,
    cursor: g.length
  };
}, On = (r, n, o, l) => {
  const d = r.slice(0, n), h = r.slice(o), p = d.match(/(?:^|\s)@[^\s@]*$/);
  if (!p) {
    const b = `@${l} `;
    return { value: `${d}${b}${h}`, cursor: d.length + b.length };
  }
  const u = d.length - p[0].length, x = `${p[0].startsWith(" ") ? " " : ""}@${l} `, g = `${d.slice(0, u)}${x}`;
  return {
    value: `${g}${h}`,
    cursor: g.length
  };
}, yn = [], Yn = [], Lt = ({
  onSend: r,
  disabled: n,
  isStreaming: o = !1,
  onCancel: l,
  leadingControls: d,
  skillOptions: h = hn,
  fileOptions: p = yn,
  uploadAccept: u,
  validateUploadFile: f,
  onUploadValidationError: x
}) => {
  const [g, b] = y(""), [v, I] = y(!1), [L, S] = y(!1), [N, P] = y(""), [F, $] = y(-1), [T, R] = y(!1), [A, q] = y(""), [M, X] = y(-1), [H, w] = y([]), [a, i] = y([]), [k, B] = y([]), [ue, ae] = y(!1), pe = ne(null), te = ne(null), he = Dt(), be = ne([]), se = o && !!l;
  J(() => {
    be.current = H;
  }, [H]), J(() => () => {
    be.current.forEach((s) => {
      s.previewUrl && URL.revokeObjectURL(s.previewUrl);
    });
  }, []);
  const j = G(() => {
    const s = N.trim().toLowerCase();
    return s ? h.filter((m) => `${m.id} ${m.description} ${m.source}`.toLowerCase().includes(s)) : h;
  }, [h, N]), z = G(() => {
    const s = A.trim().toLowerCase();
    return s ? p.filter((m) => `${m.name} ${m.projectName} ${m.sourceType} ${m.operatorName ?? ""} ${m.operatedAt ?? ""}`.toLowerCase().includes(s)) : p.filter((m) => m.isRecent).slice(0, 10);
  }, [p, A]), W = ce((s, m) => {
    const U = m ?? s.length, Q = bn(s, U);
    if (Q !== null) {
      S(!0), P(Q), $(-1), R(!1), q(""), X(-1);
      return;
    }
    const Z = gn(s, U);
    if (Z !== null) {
      R(!0), q(Z), X(-1), S(!1), P(""), $(-1);
      return;
    }
    S(!1), P(""), $(-1), R(!1), q(""), X(-1);
  }, []), Y = ce((s) => {
    if (s.disabled) return;
    const m = pe.current, U = (m == null ? void 0 : m.selectionStart) ?? g.length, Q = (m == null ? void 0 : m.selectionEnd) ?? U, Z = g.slice(0, U), xe = g.slice(Q), ee = (() => {
      const re = Z.match(/(?:^|\s)\/[^\s/]*$/);
      if (!re)
        return { value: g, cursor: U };
      const me = Z.length - re[0].length, K = re[0].startsWith(" ") ? " " : "", C = `${Z.slice(0, me)}${K}`;
      return {
        value: `${C}${xe}`,
        cursor: C.length
      };
    })();
    i((re) => {
      const me = `skill-${s.id}`;
      return re.some((K) => K.id === me) ? re : [...re, { id: me, type: "skill", label: s.id, sourceId: s.id }];
    }), b(ee.value), S(!1), P(""), $(-1), requestAnimationFrame(() => {
      m && (m.focus(), m.setSelectionRange(ee.cursor, ee.cursor));
    });
  }, [g]), ve = ce((s) => {
    const m = pe.current, U = (m == null ? void 0 : m.selectionStart) ?? g.length, Q = (m == null ? void 0 : m.selectionEnd) ?? U, Z = g.slice(0, U), xe = g.slice(Q), ee = (() => {
      const re = Z.match(/(?:^|\s)@[^\s@]*$/);
      if (!re)
        return { value: g, cursor: U };
      const me = Z.length - re[0].length, K = re[0].startsWith(" ") ? " " : "", C = `${Z.slice(0, me)}${K}`;
      return {
        value: `${C}${xe}`,
        cursor: C.length
      };
    })();
    B((re) => {
      const me = `doc-${s.id}`;
      return re.some((K) => K.id === me) ? re : [...re, { id: me, type: "doc", label: s.name, sourceId: s.id }];
    }), b(ee.value), R(!1), q(""), X(-1), requestAnimationFrame(() => {
      m && (m.focus(), m.setSelectionRange(ee.cursor, ee.cursor));
    });
  }, [g]), Ne = ce(() => {
    ae(!1);
    const s = te.current;
    if (s) {
      try {
        if ("showPicker" in s && typeof s.showPicker == "function") {
          s.showPicker();
          return;
        }
      } catch {
      }
      s.click();
    }
  }, []), ye = ce((s) => {
    const m = Array.from(s.target.files ?? []);
    if (m.length === 0) return;
    const U = m.filter((Q) => {
      const Z = f == null ? void 0 : f(Q);
      return Z ? (x == null || x(Z), !1) : !0;
    });
    w((Q) => {
      const Z = new Set(Q.map((ee) => ee.id)), xe = [...Q];
      return U.forEach((ee) => {
        if (ee.size > mn || xe.length >= un) return;
        const re = `${ee.name}-${ee.size}-${ee.lastModified}`;
        if (Z.has(re)) return;
        const me = ee.type.startsWith("image/");
        Z.add(re), xe.push({
          id: re,
          name: ee.name,
          mimeType: ee.type || "application/octet-stream",
          previewUrl: me ? URL.createObjectURL(ee) : void 0,
          file: ee
        });
      }), xe;
    }), s.target.value = "";
  }, [x, f]), ie = ce((s) => {
    w((m) => {
      const U = m.find((Q) => Q.id === s);
      return U != null && U.previewUrl && URL.revokeObjectURL(U.previewUrl), m.filter((Q) => Q.id !== s);
    });
  }, []), _ = ce((s) => {
    i((m) => m.filter((U) => U.id !== s));
  }, []), oe = ce((s) => {
    B((m) => m.filter((U) => U.id !== s));
  }, []), le = ce(() => {
    !g.trim() || n || (r({
      content: g,
      attachments: H.map((s) => ({
        id: s.id,
        name: s.name,
        mimeType: s.mimeType,
        previewUrl: s.previewUrl,
        file: s.file
      })),
      references: [...a, ...k]
    }), b(""), w([]), i([]), B([]), S(!1), P(""), $(-1), R(!1), q(""), X(-1));
  }, [g, n, r, H, k, a]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ t("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: he,
        ref: te,
        type: "file",
        multiple: !0,
        accept: u,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: ye
      }
    ),
    (H.length > 0 || a.length > 0 || k.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
      a.map((s) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(bt, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: s.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => _(s.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${s.label}`,
                children: /* @__PURE__ */ e(We, { size: 12 })
              }
            )
          ]
        },
        s.id
      )),
      k.map((s) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(gt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: s.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => oe(s.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${s.label}`,
                children: /* @__PURE__ */ e(We, { size: 12 })
              }
            )
          ]
        },
        s.id
      )),
      H.map((s) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            s.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: s.previewUrl, alt: s.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(yt, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ t("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: s.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: s.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => ie(s.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${s.name}`,
                children: /* @__PURE__ */ e(We, { size: 12 })
              }
            )
          ]
        },
        s.id
      ))
    ] }) }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: pe,
        value: g,
        onChange: (s) => {
          const m = s.target.value;
          b(m), W(m, s.target.selectionStart);
        },
        onClick: (s) => {
          W(s.currentTarget.value, s.currentTarget.selectionStart);
        },
        onKeyUp: (s) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(s.key) || W(s.currentTarget.value, s.currentTarget.selectionStart);
        },
        onKeyDown: (s) => {
          if (s.key === "Enter" && (s.shiftKey || s.metaKey || s.ctrlKey)) {
            s.preventDefault();
            const m = s.currentTarget, U = m.selectionStart ?? g.length, Q = m.selectionEnd ?? U, Z = `${g.slice(0, U)}
${g.slice(Q)}`, xe = U + 1;
            b(Z), W(Z, xe), requestAnimationFrame(() => {
              m.setSelectionRange(xe, xe);
            });
            return;
          }
          if (L) {
            if (s.key === "ArrowDown") {
              s.preventDefault(), $((m) => j.length === 0 ? -1 : m < 0 ? 0 : (m + 1) % j.length);
              return;
            }
            if (s.key === "ArrowUp") {
              s.preventDefault(), $((m) => j.length === 0 ? -1 : m < 0 ? j.length - 1 : (m - 1 + j.length) % j.length);
              return;
            }
            if (s.key === "Escape") {
              s.preventDefault(), S(!1), P(""), $(-1);
              return;
            }
            if (s.key === "Enter" && !s.shiftKey) {
              s.preventDefault();
              const m = F >= 0 ? j[F] : void 0;
              m && Y(m);
              return;
            }
          }
          if (T) {
            if (s.key === "ArrowDown") {
              s.preventDefault(), X((m) => z.length === 0 ? -1 : m < 0 ? 0 : (m + 1) % z.length);
              return;
            }
            if (s.key === "ArrowUp") {
              s.preventDefault(), X((m) => z.length === 0 ? -1 : m < 0 ? z.length - 1 : (m - 1 + z.length) % z.length);
              return;
            }
            if (s.key === "Escape") {
              s.preventDefault(), R(!1), q(""), X(-1);
              return;
            }
            if (s.key === "Enter" && !s.shiftKey) {
              s.preventDefault();
              const m = M >= 0 ? z[M] : void 0;
              m && ve(m);
              return;
            }
          }
          s.key === "Enter" && !s.shiftKey && (s.preventDefault(), le());
        },
        disabled: n,
        onFocus: () => I(!0),
        onBlur: () => {
          I(!1), S(!1), R(!1);
        },
        placeholder: v ? pn : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${H.length > 0 || a.length > 0 || k.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    L && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (s) => s.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ie, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: N ? `搜索 skill：${N}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : j.map((s, m) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          disabled: s.disabled,
          title: s.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${s.disabled ? "cursor-not-allowed opacity-50" : m === F ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Y(s),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: s.badge }),
            /* @__PURE__ */ t("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: s.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: s.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: s.disabledReason || s.source })
          ]
        },
        s.id
      )) })
    ] }) }),
    T && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (s) => s.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ie, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: A ? `搜索文件：${A}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ t("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !A && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(kt, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        z.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : z.map((s, m) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${m === M ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => ve(s),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Nt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: s.name }),
              !A && s.operatorName && s.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${s.operatorName} ${s.operatedAt}` })
            ]
          },
          s.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 min-w-0", children: [
        d,
        /* @__PURE__ */ t(
          "div",
          {
            className: "relative",
            onMouseEnter: () => ae(!0),
            onMouseLeave: () => ae(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Ne,
                  "aria-controls": he,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(at, { size: 16 })
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${ue ? "block" : "hidden"}`,
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
          onClick: se ? l : le,
          disabled: se ? !1 : n || !g.trim(),
          "aria-label": se ? "停止生成" : "发送消息",
          title: se ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${se || g.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: se ? /* @__PURE__ */ e(Yt, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Gt, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
ge.memo(Lt);
const vn = ({ messages: r, isTyping: n, statusPhase: o = "thinking", searchSteps: l = [] }) => {
  const d = ne(null);
  J(() => {
    var p;
    (p = d.current) == null || p.scrollIntoView({ behavior: "smooth" });
  }, [r.length, n]);
  const h = G(() => r.map((p, u) => /* @__PURE__ */ e(sn, { msg: p }, `${u}-${p.role}`)), [r]);
  return /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    h,
    n && /* @__PURE__ */ e(ln, { phase: o, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: d })
  ] });
};
ge.memo(vn);
const wn = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "生成项目日报"
], zt = ({ onSelect: r, prompts: n = wn }) => {
  const o = ce((l) => {
    r(l);
  }, [r]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((l) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => o(l),
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm",
      children: l
    },
    l
  )) });
};
ge.memo(zt);
const Nn = (r, n) => {
  const o = Math.random() * r, l = Math.random() * n;
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
function Gn({ onLogin: r, onLoginSuccess: n, onNavigate: o }) {
  const l = ne(null), d = ne(null), [h, p] = y(""), [u, f] = y(""), [x, g] = y(!0), [b, v] = y(!1), [I, L] = y(!1), [S, N] = y(null), P = ne(null), [F, $] = y(!1), [T, R] = y("email"), [A, q] = y(""), [M, X] = y(""), [H, w] = y(""), [a, i] = y(""), [k, B] = y(0), [ue, ae] = y(!1), pe = G(() => h.trim().length > 0 && u.trim().length > 0 && !b, [
    h,
    b,
    u
  ]);
  J(() => {
    if (k <= 0) return;
    const j = window.setTimeout(() => B((z) => z - 1), 1e3);
    return () => clearTimeout(j);
  }, [k]), J(
    () => () => {
      P.current !== null && window.clearTimeout(P.current);
    },
    []
  ), J(() => {
    const j = l.current, z = d.current;
    if (!j || !z) return;
    const W = j.getContext("2d");
    if (!W) return;
    const Y = window.getComputedStyle(document.documentElement), ve = Y.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ne = Y.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ye = Y.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ie = 0, _ = 0, oe = 0, le = window.devicePixelRatio || 1, s = [];
    const m = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, U = 150, Q = () => {
      const K = z.getBoundingClientRect();
      le = window.devicePixelRatio || 1, _ = K.width, oe = K.height, j.width = _ * le, j.height = oe * le, j.style.width = `${_}px`, j.style.height = `${oe}px`, W.setTransform(le, 0, 0, le, 0, 0);
      const C = _ < 768 ? 40 : 90;
      s = Array.from({ length: C }, () => Nn(_, oe));
    }, Z = (K) => {
      W.beginPath(), W.arc(K.x, K.y, K.size, 0, Math.PI * 2), W.closePath(), W.fill();
    }, xe = () => {
      W.clearRect(0, 0, _, oe);
      for (let K = 0; K < s.length; K += 1) {
        const C = s[K];
        C.x += C.vx, C.y += C.vy, (C.x < 0 || C.x > _) && (C.vx = -C.vx), (C.y < 0 || C.y > oe) && (C.vy = -C.vy);
        const D = m.x - C.x, ke = m.y - C.y, Se = Math.sqrt(D * D + ke * ke) || 1, ze = D / Se, Fe = ke / Se, Ee = (m.radius - Se) / m.radius, De = ze * Ee * C.density, He = Fe * Ee * C.density;
        if (Se < m.radius)
          C.x -= De * 0.5, C.y -= He * 0.5, W.fillStyle = ve, C.size = Math.min(C.size + 0.1, 2.5);
        else {
          if (C.x !== C.baseX) {
            const Ce = C.x - C.baseX;
            C.x -= Ce / 50;
          }
          if (C.y !== C.baseY) {
            const Ce = C.y - C.baseY;
            C.y -= Ce / 50;
          }
          W.fillStyle = Ne, C.size = Math.max(C.size - 0.05, 1);
        }
        Z(C);
        for (let Ce = K; Ce < s.length; Ce += 1) {
          const $e = s[Ce], Te = C.x - $e.x, Pe = C.y - $e.y, Me = Math.sqrt(Te * Te + Pe * Pe);
          if (Me < U) {
            const Ae = (1 - Me / U) * 0.4;
            W.beginPath(), W.strokeStyle = ye, W.globalAlpha = Ae, W.lineWidth = 1, W.moveTo(C.x, C.y), W.lineTo($e.x, $e.y), W.stroke(), W.globalAlpha = 1, W.closePath();
          }
        }
      }
      ie = window.requestAnimationFrame(xe);
    }, ee = (K) => {
      const C = z.getBoundingClientRect();
      m.x = K.clientX - C.left, m.y = K.clientY - C.top;
    }, re = () => {
      m.x = -1e3, m.y = -1e3;
    }, me = (K) => {
      if (K.touches.length < 1) return;
      const C = z.getBoundingClientRect();
      m.x = K.touches[0].clientX - C.left, m.y = K.touches[0].clientY - C.top;
    };
    return Q(), xe(), window.addEventListener("resize", Q), z.addEventListener("mousemove", ee), z.addEventListener("mouseleave", re), z.addEventListener("touchmove", me, { passive: !0 }), z.addEventListener("touchend", re), () => {
      window.cancelAnimationFrame(ie), window.removeEventListener("resize", Q), z.removeEventListener("mousemove", ee), z.removeEventListener("mouseleave", re), z.removeEventListener("touchmove", me), z.removeEventListener("touchend", re);
    };
  }, []);
  const te = async (j) => {
    if (j.preventDefault(), !!pe) {
      v(!0), N(null);
      try {
        const z = await r({ email: h.trim(), password: u, rememberLogin: x });
        if (!z.ok) {
          N(z.message);
          return;
        }
        L(!0), P.current = window.setTimeout(() => {
          L(!1), n();
        }, 900);
      } catch {
        N("登录失败，请稍后重试。");
      } finally {
        v(!1);
      }
    }
  }, he = async () => {
    !A.trim() || k > 0 || (v(!0), await new Promise((j) => window.setTimeout(j, 1e3)), v(!1), ae(!0), B(60));
  }, be = async () => {
    if (T === "email") {
      if (!A.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A) || !M.trim() || M.length < 6 || !H.trim() || H.length < 6 || H !== a) return;
      R("success");
    }
  }, se = () => {
    $(!1), R("email"), q(""), X(""), w(""), i(""), B(0), ae(!1);
  };
  return /* @__PURE__ */ t("div", { ref: d, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ t("form", { onSubmit: te, className: "space-y-6", children: [
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: h,
              onChange: (j) => {
                p(j.target.value), N(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "off",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "邮箱" })
        ] }),
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "password",
              value: u,
              onChange: (j) => {
                f(j.target.value), N(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        S && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: S }),
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ t("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: x,
                  onChange: (j) => g(j.target.checked),
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
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !pe,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: b ? "认证中..." : "登录" }),
              b && /* @__PURE__ */ t(
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
      !F && /* @__PURE__ */ t("div", { className: "mt-7", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center text-sm text-authTextFaint", children: [
          /* @__PURE__ */ e("span", { className: "h-px w-12 bg-authDivider" }),
          /* @__PURE__ */ e("span", { className: "mx-3", children: "首次使用？" }),
          /* @__PURE__ */ e("span", { className: "h-px w-12 bg-authDivider" })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-center gap-6", children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => o("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Kt, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-lineSubtle", "aria-hidden": "true" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => o("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Qt, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      F && /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: se,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        T === "email" && /* @__PURE__ */ t("div", { className: "space-y-5", children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: A,
                onChange: (j) => q(j.target.value),
                placeholder: " ",
                autoComplete: "off",
                className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: M,
                  onChange: (j) => X(j.target.value.replace(/\D/g, "").slice(0, 6)),
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
                disabled: k > 0 || b || !A.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${k > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: k > 0 ? `${k}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: H,
                onChange: (j) => w(j.target.value),
                placeholder: " ",
                className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "新密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: a,
                onChange: (j) => i(j.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${a.length > 0 && H !== a ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          a.length > 0 && H !== a && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: be,
              disabled: !A.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A) || !M.trim() || M.length < 6 || !H.trim() || H.length < 6 || H !== a,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        T === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Ke, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: se,
              className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg",
              children: "返回登录"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ t(
      "div",
      {
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${I ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(Ke, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const kn = (r, n) => {
  const o = Math.random() * r, l = Math.random() * n;
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
function Kn({
  mode: r = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: o,
  onRegister: l,
  onEnterWorkspace: d,
  onNavigate: h
}) {
  const p = ne(null), u = ne(null), f = ne(null), [x, g] = y("email"), [b, v] = y(""), [I, L] = y(""), [S, N] = y(""), [P, F] = y(""), $ = r === "create-lab", [T, R] = y(""), [A, q] = y(""), [M, X] = y(!1), [H, w] = y(0), [a, i] = y(null), k = T.length > 0 && T.trim().length < 6;
  J(() => {
    if (H <= 0) return;
    const z = window.setTimeout(() => w((W) => W - 1), 1e3);
    return () => clearTimeout(z);
  }, [H]), J(
    () => () => {
      f.current !== null && window.clearTimeout(f.current);
    },
    []
  ), J(() => {
    const z = p.current, W = u.current;
    if (!z || !W) return;
    const Y = z.getContext("2d");
    if (!Y) return;
    const ve = window.getComputedStyle(document.documentElement), Ne = ve.getPropertyValue("--chatui-color-auth-particle-active").trim(), ye = ve.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ie = ve.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let _ = 0, oe = 0, le = 0, s = window.devicePixelRatio || 1, m = [];
    const U = { x: -1e3, y: -1e3, radius: 120 }, Q = 150, Z = () => {
      const C = W.getBoundingClientRect();
      s = window.devicePixelRatio || 1, oe = C.width, le = C.height, z.width = oe * s, z.height = le * s, z.style.width = `${oe}px`, z.style.height = `${le}px`, Y.setTransform(s, 0, 0, s, 0, 0);
      const D = oe < 768 ? 40 : 90;
      m = Array.from({ length: D }, () => kn(oe, le));
    }, xe = (C) => {
      Y.beginPath(), Y.arc(C.x, C.y, C.size, 0, Math.PI * 2), Y.closePath(), Y.fill();
    }, ee = () => {
      Y.clearRect(0, 0, oe, le);
      for (let C = 0; C < m.length; C += 1) {
        const D = m[C];
        D.x += D.vx, D.y += D.vy, (D.x < 0 || D.x > oe) && (D.vx = -D.vx), (D.y < 0 || D.y > le) && (D.vy = -D.vy);
        const ke = U.x - D.x, Se = U.y - D.y, ze = Math.sqrt(ke * ke + Se * Se) || 1, Fe = ke / ze, Ee = Se / ze, De = (U.radius - ze) / U.radius, He = Fe * De * D.density, Ce = Ee * De * D.density;
        ze < U.radius ? (D.x -= He * 0.5, D.y -= Ce * 0.5, Y.fillStyle = Ne, D.size = Math.min(D.size + 0.1, 2.5)) : (D.x !== D.baseX && (D.x -= (D.x - D.baseX) / 50), D.y !== D.baseY && (D.y -= (D.y - D.baseY) / 50), Y.fillStyle = ye, D.size = Math.max(D.size - 0.05, 1)), xe(D);
        for (let $e = C; $e < m.length; $e += 1) {
          const Te = m[$e], Pe = D.x - Te.x, Me = D.y - Te.y, Ae = Math.sqrt(Pe * Pe + Me * Me);
          if (Ae < Q) {
            const qe = (1 - Ae / Q) * 0.4;
            Y.beginPath(), Y.strokeStyle = ie, Y.globalAlpha = qe, Y.lineWidth = 1, Y.moveTo(D.x, D.y), Y.lineTo(Te.x, Te.y), Y.stroke(), Y.globalAlpha = 1, Y.closePath();
          }
        }
      }
      _ = window.requestAnimationFrame(ee);
    }, re = (C) => {
      const D = W.getBoundingClientRect();
      U.x = C.clientX - D.left, U.y = C.clientY - D.top;
    }, me = () => {
      U.x = -1e3, U.y = -1e3;
    }, K = (C) => {
      if (C.touches.length < 1) return;
      const D = W.getBoundingClientRect();
      U.x = C.touches[0].clientX - D.left, U.y = C.touches[0].clientY - D.top;
    };
    return Z(), ee(), window.addEventListener("resize", Z), W.addEventListener("mousemove", re), W.addEventListener("mouseleave", me), W.addEventListener("touchmove", K, { passive: !0 }), W.addEventListener("touchend", me), () => {
      window.cancelAnimationFrame(_), window.removeEventListener("resize", Z), W.removeEventListener("mousemove", re), W.removeEventListener("mouseleave", me), W.removeEventListener("touchmove", K), W.removeEventListener("touchend", me);
    };
  }, []);
  const B = async () => {
    if (!(!b.trim() || H > 0)) {
      X(!0), i(null);
      try {
        const z = await n(b.trim());
        if (!z.ok) {
          i(z);
          return;
        }
        w(60);
      } catch {
        i({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        X(!1);
      }
    }
  }, ue = () => ({
    email: b.trim(),
    verificationCode: I.trim(),
    mode: r,
    ...$ ? { labName: P.trim() } : { inviteCode: S.trim() }
  }), ae = () => {
    const z = ["email", "password", "success"], W = z.indexOf(x);
    W < z.length - 1 && g(z[W + 1]);
  }, pe = G(() => {
    if (M) return !1;
    switch (x) {
      case "email":
        return $ ? b.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) && I.trim().length >= 6 && P.trim().length > 0 : b.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) && I.trim().length >= 6 && S.trim().length > 0;
      case "password":
        return T.trim().length >= 6 && T === A;
      default:
        return !1;
    }
  }, [x, b, I, S, P, $, T, A, M]), te = async (z) => {
    if (z.preventDefault(), !!pe) {
      X(!0), i(null);
      try {
        const W = ue(), Y = x === "password" ? await l({ ...W, password: T }) : await o(W);
        if (!Y.ok) {
          i(Y);
          return;
        }
        ae();
      } catch {
        i({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        X(!1);
      }
    }
  }, he = {
    email: $ ? "创建实验室" : "验证您的邮箱",
    password: "设置登录密码",
    success: ""
  }, be = {
    email: "",
    password: "",
    success: ""
  }, se = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", j = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: u, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: p, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: he[x] }),
        be[x] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: be[x] })
      ] }),
      x !== "success" && /* @__PURE__ */ t("form", { onSubmit: te, className: "space-y-5", children: [
        x === "email" && /* @__PURE__ */ t(Le, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: b,
                onChange: (z) => {
                  v(z.target.value), i(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: se
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: I,
                  onChange: (z) => {
                    L(z.target.value.replace(/\D/g, "").slice(0, 6)), i(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "off",
                  maxLength: 6,
                  className: se
                }
              ),
              /* @__PURE__ */ e("span", { className: j, children: "验证码" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: B,
                disabled: H > 0 || M,
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${H > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: H > 0 ? `${H}s后获取` : "获取验证码"
              }
            )
          ] }),
          $ ? /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: P,
                onChange: (z) => {
                  F(z.target.value), i(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: se
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "实验室名称" })
          ] }) : /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: S,
                onChange: (z) => {
                  N(z.target.value), i(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: se
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "邀请码" })
          ] })
        ] }),
        x === "password" && /* @__PURE__ */ t(Le, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: T,
                onChange: (z) => {
                  R(z.target.value), i(null);
                },
                required: !0,
                placeholder: " ",
                className: `${se} ${(a == null ? void 0 : a.field) === "password" || k ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "设置密码" }),
            ((a == null ? void 0 : a.field) === "password" || k) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (a == null ? void 0 : a.field) === "password" ? a.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: A,
                onChange: (z) => {
                  q(z.target.value), i(null);
                },
                required: !0,
                placeholder: " ",
                className: `${se} ${A.length > 0 && T !== A ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "确认密码" }),
            A.length > 0 && T !== A && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        a && a.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: a.message }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !pe,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: M ? "处理中..." : x === "password" ? "完成注册" : "下一步" }),
              M && /* @__PURE__ */ t(
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
      x === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Ke, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "注册成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "欢迎加入科研工作台" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => {
              f.current = window.setTimeout(d, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      x !== "success" && /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
        "已有账号？",
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => h("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const Tn = (r, n) => {
  const o = Math.random() * r, l = Math.random() * n;
  return { x: o, y: l, baseX: o, baseY: l, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Qn({ onSendCode: r, onResetPassword: n, onBackToLogin: o }) {
  const l = ne(null), d = ne(null), h = ne(null), [p, u] = y("email"), [f, x] = y(""), [g, b] = y(""), [v, I] = y(""), [L, S] = y(""), [N, P] = y(!1), [F, $] = y(0), [T, R] = y(null);
  J(() => {
    if (F <= 0) return;
    const a = window.setTimeout(() => $((i) => i - 1), 1e3);
    return () => window.clearTimeout(a);
  }, [F]), J(() => {
    const a = l.current, i = d.current;
    if (!a || !i) return;
    const k = a.getContext("2d");
    if (!k) return;
    const B = window.getComputedStyle(document.documentElement), ue = B.getPropertyValue("--chatui-color-auth-particle-active").trim(), ae = B.getPropertyValue("--chatui-color-auth-particle-idle").trim(), pe = B.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let te = 0, he = 0, be = 0, se = [];
    const j = { x: -1e3, y: -1e3, radius: 120 }, z = 150, W = () => {
      const ie = i.getBoundingClientRect(), _ = window.devicePixelRatio || 1;
      he = ie.width, be = ie.height, a.width = he * _, a.height = be * _, a.style.width = `${he}px`, a.style.height = `${be}px`, k.setTransform(_, 0, 0, _, 0, 0), se = Array.from({ length: he < 768 ? 40 : 90 }, () => Tn(he, be));
    }, Y = () => {
      k.clearRect(0, 0, he, be);
      for (let ie = 0; ie < se.length; ie += 1) {
        const _ = se[ie];
        _.x += _.vx, _.y += _.vy, (_.x < 0 || _.x > he) && (_.vx = -_.vx), (_.y < 0 || _.y > be) && (_.vy = -_.vy);
        const oe = j.x - _.x, le = j.y - _.y, s = Math.sqrt(oe * oe + le * le) || 1, m = (j.radius - s) / j.radius;
        s < j.radius ? (_.x -= oe / s * m * _.density * 0.5, _.y -= le / s * m * _.density * 0.5, k.fillStyle = ue, _.size = Math.min(_.size + 0.1, 2.5)) : (_.x -= (_.x - _.baseX) / 50, _.y -= (_.y - _.baseY) / 50, k.fillStyle = ae, _.size = Math.max(_.size - 0.05, 1)), k.beginPath(), k.arc(_.x, _.y, _.size, 0, Math.PI * 2), k.fill();
        for (let U = ie; U < se.length; U += 1) {
          const Q = se[U], Z = _.x - Q.x, xe = _.y - Q.y, ee = Math.sqrt(Z * Z + xe * xe);
          ee >= z || (k.beginPath(), k.globalAlpha = (1 - ee / z) * 0.4, k.strokeStyle = pe, k.lineWidth = 1, k.moveTo(_.x, _.y), k.lineTo(Q.x, Q.y), k.stroke(), k.globalAlpha = 1);
        }
      }
      te = window.requestAnimationFrame(Y);
    }, ve = (ie) => {
      const _ = i.getBoundingClientRect();
      j.x = ie.clientX - _.left, j.y = ie.clientY - _.top;
    }, Ne = (ie) => {
      if (!ie.touches.length) return;
      const _ = i.getBoundingClientRect();
      j.x = ie.touches[0].clientX - _.left, j.y = ie.touches[0].clientY - _.top;
    }, ye = () => {
      j.x = -1e3, j.y = -1e3;
    };
    return W(), Y(), window.addEventListener("resize", W), i.addEventListener("mousemove", ve), i.addEventListener("mouseleave", ye), i.addEventListener("touchmove", Ne, { passive: !0 }), i.addEventListener("touchend", ye), () => {
      window.cancelAnimationFrame(te), window.removeEventListener("resize", W), i.removeEventListener("mousemove", ve), i.removeEventListener("mouseleave", ye), i.removeEventListener("touchmove", Ne), i.removeEventListener("touchend", ye);
    };
  }, []), J(() => () => {
    h.current !== null && window.clearTimeout(h.current);
  }, []);
  const A = G(() => f.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f) && g.length >= 6 && v.length >= 6 && v === L, [L, f, v, g]), q = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", M = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: d, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      p === "email" ? /* @__PURE__ */ t(Le, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ t("form", { onSubmit: async (a) => {
          if (a.preventDefault(), !(!A || N)) {
            P(!0), R(null);
            try {
              const i = await n({ email: f.trim(), verificationCode: g, newPassword: v });
              if (!i.ok) {
                R(i.message);
                return;
              }
              u("success");
            } catch {
              R("密码重置失败，请稍后重试。");
            } finally {
              P(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "email", value: f, onChange: (a) => {
              x(a.target.value), R(null);
            }, required: !0, placeholder: " ", autoComplete: "off", className: q }),
            /* @__PURE__ */ e("span", { className: M, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "text", value: g, onChange: (a) => {
                b(a.target.value.replace(/\D/g, "").slice(0, 6)), R(null);
              }, required: !0, placeholder: " ", autoComplete: "off", maxLength: 6, className: q }),
              /* @__PURE__ */ e("span", { className: M, children: "验证码" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!f.trim() || F > 0 || N)) {
                P(!0), R(null);
                try {
                  const a = await r(f.trim());
                  if (!a.ok) {
                    R(a.message);
                    return;
                  }
                  $(60);
                } catch {
                  R("验证码发送失败，请稍后重试。");
                } finally {
                  P(!1);
                }
              }
            }, disabled: F > 0 || N, className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${F > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: F > 0 ? `${F}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: v, onChange: (a) => {
              I(a.target.value), R(null);
            }, required: !0, placeholder: " ", className: q }),
            /* @__PURE__ */ e("span", { className: M, children: "新密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: L, onChange: (a) => {
              S(a.target.value), R(null);
            }, required: !0, placeholder: " ", className: `${q} ${L.length > 0 && v !== L ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: M, children: "确认新密码" }),
            L.length > 0 && v !== L && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          T && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: T }),
          /* @__PURE__ */ t("button", { type: "submit", disabled: !A || N, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: N ? "处理中..." : "重置密码" }),
            N && /* @__PURE__ */ t("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => o(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
        ] })
      ] }) : /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-primary-soft opacity-70" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Ke, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          h.current = window.setTimeout(() => o({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const ht = 10, xt = (r) => r.isTaskConversation === !0 || r.source === "task" || r.id.startsWith("task-") || typeof r.taskId == "string" && r.taskId.trim().length > 0;
function Zn({
  currentPath: r,
  projects: n,
  initialChats: o,
  logoUrl: l,
  user: d,
  children: h,
  initialAiUsageWarningActive: p = !1,
  chatActions: u = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: f,
  onLogout: x,
  onChatsChange: g,
  onRenameChat: b,
  onTogglePinChat: v,
  onShareChat: I,
  onDeleteChat: L
}) {
  const [S, N] = y(!0), [P, F] = y(240), [$, T] = y(!1), R = ne(0), A = ne(240), [q, M] = y(() => {
    const c = { unassigned: !0 };
    return n.forEach((E) => {
      c[E.id] = !0;
    }), c;
  }), [X, H] = y(!1), [w, a] = y(() => [...o]), [i, k] = y(null), [B, ue] = y("time"), [ae, pe] = y(!1), [te, he] = y(null), [be, se] = y(""), [j, z] = y(!1), [W, Y] = y(""), [ve, Ne] = y(!1), [ye, ie] = y(p), [_, oe] = y(!1), le = ne(null), s = ne(null), m = ne(null), U = !!(u.rename || u.share || u.pin || u.delete), Q = () => {
    H(!1), x();
  }, Z = (c) => {
    M((E) => ({ ...E, [c]: !E[c] }));
  }, xe = (c) => {
    var O;
    a((V) => V.filter((we) => we.id !== c)), k(null), te === c && (he(null), se("")), L == null || L(c), ((O = r.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : O[1]) === c && f("/chat/new", { replace: !0 });
  }, ee = (c) => {
    const E = w.find((V) => V.id === c);
    if (!E) return;
    const O = !E.isPinned;
    a((V) => V.map(
      (_e) => _e.id === c ? { ..._e, isPinned: O } : _e
    )), v == null || v(c, O), k(null);
  }, re = (c) => {
    he(c.id), se(c.title), k(null);
  }, me = () => {
    he(null), se("");
  }, K = (c) => {
    const E = be.trim();
    E && (a((O) => O.map((V) => V.id === c ? { ...V, title: E } : V)), b == null || b(c, E)), me();
  }, C = (c, E) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), K(E);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), me());
  }, D = (c) => {
    var E;
    if (te === c) {
      (E = le.current) == null || E.focus();
      return;
    }
    f(`/chat/${c}`);
  }, ke = (c, E = !1) => te === c.id ? /* @__PURE__ */ t(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (V) => {
        var we;
        V.stopPropagation(), (we = le.current) == null || we.focus();
      },
      children: [
        E && /* @__PURE__ */ e(st, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: le,
            value: be,
            onChange: (V) => se(V.target.value),
            onKeyDown: (V) => C(V, c.id),
            onBlur: () => K(c.id),
            onClick: (V) => V.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    E && /* @__PURE__ */ e(st, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), Se = (c) => {
    R.current = c.clientX, A.current = P, T(!0);
  };
  J(() => {
    if (!$) return;
    const c = 200, E = 440, O = (we) => {
      const _e = we.clientX - R.current, Et = Math.min(E, Math.max(c, A.current + _e));
      F(Et);
    }, V = () => {
      T(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", O), window.addEventListener("mouseup", V), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", V);
    };
  }, [$, P]), J(() => {
    S || F(240);
  }, [S]), J(() => {
    g == null || g(w);
  }, [w, g]), J(() => {
    a([...o]);
  }, [o]), J(() => {
    if (!te) return;
    const c = window.requestAnimationFrame(() => {
      var E;
      (E = le.current) == null || E.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [te]), J(() => () => {
    s.current !== null && window.clearTimeout(s.current), m.current !== null && window.clearTimeout(m.current);
  }, []);
  const ze = () => {
    pe(!0), s.current !== null && window.clearTimeout(s.current), s.current = window.setTimeout(() => {
      pe(!1);
    }, 600);
  }, Fe = () => {
    Ne(!0), m.current !== null && window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      Ne(!1);
    }, 600);
  };
  J(() => {
    ye || oe(!1);
  }, [ye]);
  const Ee = () => {
    oe(!0), f("/ai-usage");
  }, De = G(() => [
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
  ], []), He = (c) => {
    if (H(!1), c.key === "skills") {
      f("/skills");
      return;
    }
    if (c.key === "ai-usage") {
      f("/ai-usage");
      return;
    }
    if (c.key === "members") {
      f("/members");
      return;
    }
    if (c.key === "system-settings") {
      f("/system-settings");
      return;
    }
    c.key === "logout" && Q();
  }, Ce = G(() => u.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Zt, { size: 14 }), danger: !0 }] : [], [u.delete]), $e = (c) => {
    const E = [];
    return u.rename && E.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(sr, { size: 14 }) }), u.share && E.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(ar, { size: 14 }) }), u.pin && E.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(st, { size: 14 })
    }), E;
  }, Te = (c, E) => {
    const O = xt(c);
    return !U && !O ? null : /* @__PURE__ */ t("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${O ? "ml-6" : "ml-2"}`, children: [
      O && !E && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      U && /* @__PURE__ */ e(
        Qe,
        {
          open: E,
          onOpenChange: (V) => k(V ? c.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, P - 56)),
          trigger: /* @__PURE__ */ e(nr, { size: 14 }),
          onTriggerClick: (V) => {
            V.stopPropagation();
          },
          items: $e(c),
          footerItems: Ce,
          onItemClick: (V, we) => {
            if (we.stopPropagation(), V.key === "rename") {
              re(c);
              return;
            }
            if (V.key === "share") {
              I ? I(c.id) : f(`/chat/${c.id}?share=1`), k(null);
              return;
            }
            if (V.key === "pin") {
              ee(c.id);
              return;
            }
            if (V.key === "delete") {
              xe(c.id);
              return;
            }
            k(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${E ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Pe = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(nt, { size: 14 }),
      path: "/projects",
      isActive: r === "/projects" || r.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(kt, { size: 14 }),
      path: "/tools",
      isActive: r === "/tools" || r.startsWith("/tool/")
    }
  ], Me = G(() => {
    const c = r.match(/^\/chat\/([^/]+)$/);
    return c ? w.find((E) => E.id === c[1]) ?? null : null;
  }, [w, r]), Ae = G(
    () => w.filter((c) => c.isPinned),
    [w]
  ), qe = G(
    () => w.filter((c) => !c.isPinned),
    [w]
  ), Re = G(
    () => B === "time" ? Ae.slice(0, ht) : Ae,
    [Ae, B]
  ), et = G(() => {
    if (B !== "time") return [];
    const c = Math.max(ht - Re.length, 0);
    return qe.slice(0, c);
  }, [B, qe, Re.length]), At = G(
    () => Re.length + et.length,
    [Re.length, et.length]
  ), Pt = B === "time" && w.length > At, tt = G(() => new Map(n.map((c) => [c.id, c.name])), [n]), rt = W.trim().toLowerCase(), it = G(() => rt ? w.filter((c) => {
    const E = c.projectId ? tt.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${E} ${c.date}`.toLowerCase().includes(rt);
  }) : w, [w, rt, tt]);
  J(() => {
    if (!Me) return;
    const c = Me.projectId ?? "unassigned";
    M((E) => E[c] !== !1 ? E : { ...E, [c]: !0 });
  }, [Me]);
  const _t = () => {
    Y(""), z(!0);
  }, Bt = () => {
    z(!1), Ne(!1), m.current !== null && (window.clearTimeout(m.current), m.current = null);
  }, jt = (c) => {
    z(!1), f(`/chat/${c}`);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ t(
      "aside",
      {
        style: { width: S ? P : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${S ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: { width: P, minWidth: P },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ t("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ t("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => f("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: l, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => N(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Jt, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => f("/chat/new"),
                    className: `nav-item ${r === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(er, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Pe.map((c) => {
                  const E = c.isActive;
                  return /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => f(c.path),
                      className: `nav-item ${E ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        c.icon,
                        /* @__PURE__ */ e("span", { children: c.label })
                      ]
                    },
                    c.path
                  );
                }) }),
                /* @__PURE__ */ t(
                  "div",
                  {
                    onScroll: ze,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${ae ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Re.length > 0 && /* @__PURE__ */ t("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Re.map((c) => {
                          const E = r === `/chat/${c.id}`, O = i === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => D(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${te === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ke(c, B !== "time"),
                                te !== c.id && Te(c, O)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      B === "project" && n.map((c) => {
                        const E = w.filter((V) => V.projectId === c.id && !V.isPinned), O = q[c.id] !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => Z(c.id),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(nt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: O ? /* @__PURE__ */ e(Ge, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Ye, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          O && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: E.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : E.map((V) => {
                            const we = r === `/chat/${V.id}`, _e = i === V.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => D(V.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${te === V.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : we ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ke(V),
                                  te !== V.id && Te(V, _e)
                                ]
                              }
                            ) }, V.id);
                          }) })
                        ] }, c.id);
                      }),
                      B === "project" && (() => {
                        const c = w.filter((O) => !O.projectId && !O.isPinned);
                        if (c.length === 0) return null;
                        const E = q.unassigned !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => Z("unassigned"),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(nt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: E ? /* @__PURE__ */ e(Ge, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Ye, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          E && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((O) => {
                            const V = r === `/chat/${O.id}`, we = i === O.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => D(O.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${te === O.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : V ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  ke(O),
                                  te !== O.id && Te(O, we)
                                ]
                              }
                            ) }, O.id);
                          }) })
                        ] });
                      })(),
                      B === "time" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
                        et.map((c) => {
                          const E = r === `/chat/${c.id}`, O = i === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => D(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${te === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                ke(c),
                                te !== c.id && Te(c, O)
                              ]
                            }
                          ) }, c.id);
                        }),
                        Pt && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: _t,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(Ye, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                ye && !_ && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(tr, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Ee,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  Qe,
                  {
                    open: X,
                    onOpenChange: H,
                    placement: "top-start",
                    width: P - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ t("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ t("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: d.avatarUrl ? /* @__PURE__ */ e("img", { src: d.avatarUrl, alt: `${d.name}头像`, className: "h-full w-full object-cover" }) : d.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: d.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(rr, { size: 18 }) })
                    ] }),
                    items: De,
                    onItemClick: He,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          S && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: Se,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${S ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof h == "function" ? h({ isSidebarOpen: S, setIsSidebarOpen: N, chats: w, setChats: a, setAiUsageWarningActive: ie }) : h }) }) }),
    /* @__PURE__ */ e(
      lt,
      {
        visible: j,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Bt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Ie,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: W,
                onChange: (c) => Y(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          it.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Fe,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${ve ? "is-scrolling is-scrolling-thin" : ""}`,
              children: it.map((c) => {
                const E = c.projectId ? tt.get(c.projectId) ?? "未分组" : "未分组", O = xt(c);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => jt(c.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: c.title }),
                        O && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: E }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: c.date })
                      ] })
                    ]
                  },
                  c.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Ct, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Jn({
  projects: r,
  selectedProjectId: n,
  disabled: o = !1,
  embedded: l = !1,
  isSidebarOpen: d = !0,
  skillOptions: h,
  fileOptions: p,
  uploadAccept: u,
  validateUploadFile: f,
  onUploadValidationError: x,
  onSelectProject: g,
  onCreateProject: b,
  onOpenSidebar: v,
  onSend: I
}) {
  const [L, S] = y(!1), [N, P] = y(!1), [F, $] = y(""), T = ne(null), R = ne(null), A = G(
    () => r.find((i) => i.id === n) ?? null,
    [r, n]
  ), q = G(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !A
    },
    ...r.map((i) => ({
      key: i.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: i.name }),
      active: (A == null ? void 0 : A.id) === i.id
    }))
  ], [r, A]), M = G(() => b ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(at, { size: 16 }) }] : [], [b]), X = () => {
    P(!1), $("");
  }, H = (i) => {
    if (i.key === "create") {
      P(!0), $("");
      return;
    }
    const k = i.key === "none" ? null : String(i.key);
    g(k), S(!1);
  }, w = () => {
    const i = F.trim();
    if (!i) return;
    const k = r.find(
      (B) => B.name.trim().toLowerCase() === i.toLowerCase()
    );
    k ? g(k.id) : b == null || b(i), X(), S(!1);
  };
  J(() => {
    if (!N) return;
    const i = (k) => {
      var ue, ae;
      const B = k.target;
      (ue = R.current) != null && ue.contains(B) || (ae = T.current) != null && ae.contains(B) || (X(), S(!1));
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [N]);
  const a = /* @__PURE__ */ t("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ t("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: T, className: "relative", children: N && /* @__PURE__ */ e(
        "div",
        {
          ref: R,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Tt,
                {
                  value: F,
                  onChange: (i) => $(i.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(je, { type: "secondary", size: "small", onClick: X, children: "取消" }),
              /* @__PURE__ */ e(
                je,
                {
                  type: "primary",
                  size: "small",
                  onClick: w,
                  disabled: !F.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Lt,
        {
          onSend: I,
          disabled: o,
          skillOptions: h,
          fileOptions: p,
          uploadAccept: u,
          validateUploadFile: f,
          onUploadValidationError: x,
          leadingControls: /* @__PURE__ */ e(
            Qe,
            {
              open: L,
              onOpenChange: (i) => {
                !i && N || (S(i), i ? P(!1) : X());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: A ? A.name : "工作项目" }),
                /* @__PURE__ */ e(Ge, { size: 14 })
              ] }),
              items: q,
              footerItems: M,
              onItemClick: H,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(zt, { onSelect: I })
  ] });
  return l ? a : /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      dn,
      {
        isSidebarOpen: d,
        onOpenSidebar: v ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: a })
  ] });
}
const Cn = { low: "低风险", medium: "中风险", high: "高风险" }, Sn = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function es({
  isSidebarOpen: r,
  skills: n,
  loading: o = !1,
  error: l,
  pendingSkillIds: d = [],
  onOpenSidebar: h,
  onCreateSkill: p,
  onInstall: u,
  onUninstall: f,
  onRetry: x
}) {
  const [g, b] = y("installed"), [v, I] = y(""), [L, S] = y(!1), [N, P] = y([]), [F, $] = y(null), T = G(() => new Set(d), [d]), R = G(() => {
    const w = v.trim().toLowerCase();
    return n.filter((a) => g === "installed" !== a.installed ? !1 : w ? [a.name, a.source, a.description, ...a.tags].join(" ").toLowerCase().includes(w) : !0);
  }, [g, v, n]), A = (w) => {
    b(w), S(!1), P([]);
  }, q = () => {
    S((w) => !w), P([]);
  }, M = (w) => P((a) => a.includes(w) ? a.filter((i) => i !== w) : [...a, w]), X = (w) => w.installed ? f([w.id]) : u([w.id]), H = () => {
    N.length && (g === "installed" ? f(N) : u(N), P([]), S(!1));
  };
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !r && /* @__PURE__ */ e("button", { type: "button", onClick: h, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(wt, { size: 20 }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "系统设置" }),
          /* @__PURE__ */ e("span", { className: "text-tertiaryText", children: "/" }),
          /* @__PURE__ */ e("span", { className: "font-medium text-primaryText", children: "Skill" })
        ] })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "inline-flex h-7 shrink-0 items-center justify-center gap-2 rounded-md border border-skillCreate bg-skillCreate px-3 py-1 text-xs font-medium text-white transition-all hover:border-skillCreateHover hover:bg-skillCreateHover",
          onClick: p,
          children: [
            /* @__PURE__ */ e(at, { size: 14 }),
            "新建 Skill"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${L ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Ie, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: v, onChange: (w) => I(w.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-5", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => A("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${g === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => A("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${g === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ t("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: L, onChange: (w) => {
                S(w.target.checked), P([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ t("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          x && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: x, children: "重新加载" })
        ] }),
        !l && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (w, a) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, a)) }),
        !l && !o && R.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": d.length > 0, children: R.map((w) => {
          const a = N.includes(w.id), i = T.has(w.id), k = a ? "border-skillSelectedBorder bg-skillSelectedSurface" : F === w.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ t("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${k}`, onMouseEnter: () => $(w.id), onMouseLeave: () => $((B) => B === w.id ? null : B), children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: w.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: w.source })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Sn[w.riskLevel]}`, children: Cn[w.riskLevel] }),
                L && /* @__PURE__ */ e("button", { type: "button", onClick: () => M(w.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": a ? `取消选择 ${w.name}` : `选择 ${w.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${a ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: w.description }),
            /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: w.tags.map((B) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: B }, `${w.id}-${B}`)) }),
              !L && /* @__PURE__ */ e("button", { type: "button", disabled: i, onClick: () => X(w), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${F === w.id || i ? "inline-flex" : "hidden"} ${w.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: i ? "处理中..." : w.installed ? "卸载" : "安装" })
            ] })
          ] }, w.id);
        }) }) : !l && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    L && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ t("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ t("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        N.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: q, disabled: d.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: H, disabled: !N.length || d.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: d.length > 0 ? "处理中..." : g === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Zn as A,
  Ur as B,
  yn as C,
  vn as D,
  On as E,
  Qn as F,
  Vn as G,
  gn as H,
  Lt as I,
  bn as J,
  Gn as L,
  $t as M,
  zt as Q,
  Kn as R,
  es as S,
  Mt as T,
  Qe as a,
  je as b,
  Dn as c,
  Yr as d,
  lt as e,
  Tt as f,
  Ct as g,
  Gr as h,
  Vr as i,
  En as j,
  _r as k,
  pn as l,
  wn as m,
  Yn as n,
  hn as o,
  Rn as p,
  cn as q,
  Jn as r,
  qn as s,
  Xn as t,
  Un as u,
  Wn as v,
  In as w,
  dn as x,
  Hn as y,
  Fn as z
};
