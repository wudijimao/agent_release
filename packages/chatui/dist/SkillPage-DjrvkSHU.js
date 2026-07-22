import { jsxs as t, Fragment as ze, jsx as e } from "react/jsx-runtime";
import xe, { useMemo as K, useState as w, useRef as ee, useCallback as le, useEffect as Z, forwardRef as yt, useId as Dt } from "react";
import ie from "classnames";
import { Check as Ue, Copy as Je, RefreshCcw as Ft, ThumbsUp as Ht, ThumbsDown as Wt, Puzzle as vt, AtSign as wt, LoaderCircle as lt, AlertCircle as Ut, Paperclip as it, ArrowRight as Nt, Sparkles as qt, Loader2 as Vt, ChevronDown as Ye, ChevronRight as Oe, Search as Re, Globe as Xt, BookOpen as Ot, Menu as kt, FileText as Ge, FlaskConical as Yt, X as Ie, Trash2 as Tt, Clock3 as Ct, Plus as ot, Square as Gt, Send as Kt, UserPlus as Qt, Building2 as Zt, CheckCircle2 as Ke, Folder as at, PanelLeftClose as Jt, SquarePen as er, AlertTriangle as tr, Settings as rr, Pin as st, MoreHorizontal as nr, Pencil as ar, Share2 as sr } from "lucide-react";
import lr from "react-markdown";
import ir from "remark-gfm";
import or from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as cr } from "react-dom";
const dr = "_button_3tg6r_1", ur = "_primary_3tg6r_5", mr = "_disabled_3tg6r_9", pr = "_secondary_3tg6r_17", hr = "_ghost_3tg6r_25", xr = "_danger_3tg6r_33", fr = "_small_3tg6r_41", br = "_medium_3tg6r_45", gr = "_large_3tg6r_49", yr = "_roundedSquare_3tg6r_53", vr = "_roundedSmall_3tg6r_57", wr = "_roundedMedium_3tg6r_61", Nr = "_roundedLarge_3tg6r_62", kr = "_roundedFull_3tg6r_66", Tr = "_loadingSpinner_3tg6r_67", Cr = "_loading_3tg6r_67", Sr = "_fullWidth_3tg6r_90", $r = "_icon_3tg6r_94", me = {
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
  primary: me.primary,
  secondary: me.secondary,
  ghost: me.ghost,
  danger: me.danger
}, zr = {
  small: me.small,
  medium: me.medium,
  large: me.large
}, Lr = {
  square: me.roundedSquare,
  small: me.roundedSmall,
  medium: me.roundedMedium,
  large: me.roundedLarge,
  full: me.roundedFull
}, je = xe.forwardRef(
  ({
    type: r = "primary",
    size: a = "medium",
    isLoading: i,
    loading: s,
    disabled: c = !1,
    children: x,
    icon: m,
    iconPosition: l = "left",
    className: p,
    fullWidth: u = !1,
    rounded: v = "medium",
    onClick: N,
    ...b
  }, B) => {
    const M = i ?? s ?? !1, P = c || M, k = K(() => M ? /* @__PURE__ */ t(ze, { children: [
      /* @__PURE__ */ e("span", { className: me.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: x })
    ] }) : m ? /* @__PURE__ */ t(ze, { children: [
      l === "left" && /* @__PURE__ */ e("span", { className: me.icon, children: m }),
      x && /* @__PURE__ */ e("span", { children: x }),
      l === "right" && /* @__PURE__ */ e("span", { className: me.icon, children: m })
    ] }) : x, [x, M, m, l]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: B,
        className: ie(
          me.button,
          Mr[r],
          zr[a],
          Lr[v],
          {
            [me.fullWidth]: u,
            [me.loading]: M,
            [me.disabled]: P
          },
          p
        ),
        disabled: P,
        onClick: N,
        ...b,
        children: k
      }
    );
  }
);
je.displayName = "BaseButton";
const Ar = { small: "h-8", medium: "h-9", large: "h-14" }, St = xe.forwardRef(
  ({
    type: r = "text",
    placeholder: a,
    value: i,
    defaultValue: s,
    disabled: c = !1,
    readOnly: x = !1,
    error: m = !1,
    size: l = "medium",
    prefix: p,
    suffix: u,
    prefixIcon: v,
    suffixIcon: N,
    onChange: b,
    onFocus: B,
    onBlur: M,
    onClear: P,
    className: k,
    containerClassName: j,
    clearable: _ = !1,
    label: $,
    helperText: T,
    ...H
  }, f) => {
    const [A, S] = w(!1), q = ee(null), z = le((h) => {
      q.current = h, typeof f == "function" ? f(h) : f && (f.current = h);
    }, [f]), W = le(() => {
      var L, U;
      const h = q.current;
      h && ((U = (L = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : L.set) == null || U.call(h, ""), h.dispatchEvent(new Event("input", { bubbles: !0 })), h.focus(), P == null || P());
    }, [P]), d = K(
      () => {
        var h;
        return _ && A && String(i ?? ((h = q.current) == null ? void 0 : h.value) ?? "").length > 0;
      },
      [_, A, i]
    );
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      $ && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: $ }),
      /* @__PURE__ */ t(
        "div",
        {
          className: ie(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Ar[l],
            !c && !m && "hover:border-controlBorder",
            A && !c && !m && "border-primary ring-2 ring-brandFocus",
            m && "border-danger",
            m && A && "ring-2 ring-dangerFocus",
            c && "cursor-not-allowed bg-surfaceMuted",
            j
          ),
          children: [
            (p || v) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: p || v }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: z,
                type: r,
                placeholder: a,
                value: i,
                defaultValue: s,
                disabled: c,
                readOnly: x,
                className: ie("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", k),
                onFocus: (h) => {
                  S(!0), B == null || B(h);
                },
                onBlur: (h) => {
                  S(!1), M == null || M(h);
                },
                onChange: b,
                ...H
              }
            ),
            /* @__PURE__ */ t("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              d && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (h) => h.preventDefault(), onClick: W, "aria-label": "清空", children: "✕" }),
              u || N
            ] })
          ]
        }
      ),
      T && /* @__PURE__ */ e("div", { className: ie("text-xs leading-6", m ? "text-danger" : "text-mutedText"), children: T })
    ] });
  }
);
St.displayName = "BaseInput";
const Pr = { small: "h-8", medium: "h-9", large: "h-14" }, Er = xe.forwardRef(
  ({ options: r = [], value: a, defaultValue: i, placeholder: s, disabled: c = !1, error: x = !1, size: m = "medium", label: l, helperText: p, onChange: u, className: v, ...N }, b) => {
    const B = le((M) => {
      const P = M.target.value, k = r.find((j) => String(j.value) === P);
      u == null || u(P === "" ? "" : (k == null ? void 0 : k.value) ?? P);
    }, [u, r]);
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      l && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: l }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          "select",
          {
            ref: b,
            className: ie(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              x && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Pr[m],
              v
            ),
            value: a ?? i ?? "",
            disabled: c,
            onChange: B,
            ...N,
            children: [
              s && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: s }),
              r.map((M) => /* @__PURE__ */ e("option", { value: M.value, disabled: M.disabled, children: M.label }, M.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      p && /* @__PURE__ */ e("div", { className: ie("text-xs leading-6", x ? "text-danger" : "text-mutedText"), children: p })
    ] });
  }
);
Er.displayName = "BaseSelect";
const Br = "_container_ykn59_1", jr = "_item_ykn59_10", _r = "_itemActive_ykn59_27", Ir = "_itemDisabled_ykn59_27", Rr = "_sizeSmall_ykn59_43", Dr = "_sizeMiddle_ykn59_49", Fr = "_sizeLarge_ykn59_55", Be = {
  container: Br,
  item: jr,
  itemActive: _r,
  itemDisabled: Ir,
  sizeSmall: Rr,
  sizeMiddle: Dr,
  sizeLarge: Fr
}, Hr = {
  small: Be.sizeSmall,
  middle: Be.sizeMiddle,
  large: Be.sizeLarge
};
function In({
  options: r,
  value: a,
  defaultValue: i,
  onChange: s,
  size: c = "middle",
  disabled: x = !1,
  className: m
}) {
  var N;
  const [l, p] = w(
    i ?? ((N = r[0]) == null ? void 0 : N.value) ?? ""
  ), u = a ?? l, v = (b) => {
    x || (a === void 0 && p(b), s == null || s(b));
  };
  return /* @__PURE__ */ e("div", { className: ie(Be.container, Hr[c], m), children: r.map((b) => {
    const B = u === b.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: ie(Be.item, B && Be.itemActive, x && Be.itemDisabled),
        onClick: () => v(b.value),
        disabled: x,
        "aria-pressed": B,
        children: b.label
      },
      b.value
    );
  }) });
}
const Wr = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(0)} KB` : `${(r / (1024 * 1024)).toFixed(0)} MB`, Ur = xe.forwardRef(
  ({ accept: r, multiple: a = !1, disabled: i = !1, onChange: s, onError: c, maxSize: x, children: m, className: l, dragable: p = !0, placeholderTitle: u, placeholderDescription: v, placeholderIcon: N, maxCount: b }, B) => {
    const M = ee(null), [P, k] = w(!1), j = le(($) => {
      if (b && $.length > b) {
        c == null || c(new Error(`单次最多上传 ${b} 个文件`));
        return;
      }
      if (x) {
        for (const T of Array.from($))
          if (T.size > x) {
            c == null || c(new Error(`文件“${T.name}”超过大小限制（${Wr(x)}）`));
            return;
          }
      }
      s == null || s($);
    }, [b, x, s, c]), _ = () => {
      var $;
      i || ($ = M.current) == null || $.click();
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: B,
        className: ie(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          P && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          i && "cursor-not-allowed opacity-60",
          l
        ),
        onClick: _,
        onKeyDown: ($) => {
          !i && ($.key === "Enter" || $.key === " ") && ($.preventDefault(), _());
        },
        onDragOver: ($) => {
          p && !i && ($.preventDefault(), k(!0));
        },
        onDragLeave: () => k(!1),
        onDrop: ($) => {
          p && !i && ($.preventDefault(), k(!1), j($.dataTransfer.files));
        },
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-disabled": i,
        children: [
          /* @__PURE__ */ e("input", { ref: M, type: "file", accept: r, multiple: a, disabled: i, onChange: ($) => $.target.files && j($.target.files), className: "hidden" }),
          m || /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: N ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: u ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: v ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
Ur.displayName = "BaseUpload";
const qr = "_maskAnimation_1h49h_1", Vr = "_modalAnimation_1h49h_5", ut = {
  maskAnimation: qr,
  modalAnimation: Vr
}, et = ({
  visible: r,
  open: a = r,
  show: i = a,
  title: s,
  width: c = 520,
  centered: x = !0,
  destroyOnClose: m = !1,
  mask: l = !0,
  maskClosable: p = !0,
  okText: u = "确认",
  cancelText: v = "取消",
  confirmLoading: N = !1,
  okButtonProps: b,
  cancelButtonProps: B,
  onConfirm: M,
  onCancel: P,
  onClose: k,
  onOk: j,
  onDismiss: _,
  children: $,
  footer: T,
  className: H,
  bodyClassName: f
}) => {
  const A = i ?? !1, S = le(async () => {
    try {
      M ? await M() : j && await j();
    } catch (W) {
      console.error("Modal confirm error:", W);
    }
  }, [M, j]), q = le(() => {
    P ? P() : k ? k() : _ == null || _();
  }, [P, k, _]), z = K(() => {
    if (T === null) return null;
    if (T) return T;
    const { type: W, ...d } = B ?? {}, { type: h, ...L } = b ?? {};
    return /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(je, { type: "secondary", size: "medium", onClick: q, ...d, children: v }),
      /* @__PURE__ */ e(je, { type: "primary", size: "medium", isLoading: N, onClick: S, ...L, children: N ? "加载中..." : u })
    ] });
  }, [B, v, N, T, q, S, b, u]);
  return !A && m || !A ? null : /* @__PURE__ */ t(ze, { children: [
    l && /* @__PURE__ */ e("div", { className: ie("fixed inset-0 z-[1000] bg-overlayMask", ut.maskAnimation), onClick: () => p && q(), role: "presentation" }),
    /* @__PURE__ */ t(
      "div",
      {
        className: ie(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          x && "left-1/2 top-1/2",
          ut.modalAnimation,
          H
        ),
        style: { width: c },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          s && /* @__PURE__ */ t("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: s }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: q, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: ie("min-h-20 p-5 text-primaryText", f), children: $ }),
          z
        ]
      }
    )
  ] });
};
et.displayName = "BaseModal";
const Xr = ({ title: r, extra: a, children: i, hoverable: s = !1, loading: c = !1, bordered: x = !0, className: m, bodyClassName: l, onClick: p }) => /* @__PURE__ */ t(
  "div",
  {
    className: ie(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      x && "border border-borderGray",
      s && "cursor-pointer hover:border-borderGray hover:shadow-md",
      c && "pointer-events-none opacity-60",
      m
    ),
    onClick: p,
    children: [
      (r || a) && /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        r && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: r }),
        a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
      ] }),
      /* @__PURE__ */ e("div", { className: ie("p-4 text-primaryText", (r || a) && "pt-1", l), children: i })
    ]
  }
);
Xr.displayName = "BaseCard";
const Or = ({ columns: r, dataSource: a = [], rowKey: i = "id", loading: s = !1, bordered: c = !0, striped: x = !0, className: m, onRow: l }, p) => /* @__PURE__ */ t("div", { ref: p, className: ie("relative w-full overflow-x-auto bg-surface", m), children: [
  /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: c ? "border-b border-lineSubtle" : void 0, children: r.map((u) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: u.width, textAlign: u.align }, children: u.title }, u.key || String(u.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: a.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: r.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : a.map((u, v) => {
      const N = String(typeof i == "string" ? u[i] ?? v : v);
      return /* @__PURE__ */ e("tr", { className: ie(c && "border-b border-lineSoft last:border-b-0", x && "odd:bg-surface"), ...(l == null ? void 0 : l(u, v)) || {}, children: r.map((b) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: b.align }, children: b.render ? b.render(u[b.dataIndex], u, v) : String(u[b.dataIndex] ?? "") }, b.key || String(b.dataIndex))) }, N);
    }) })
  ] }),
  s && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Rn = xe.forwardRef(Or), Yr = ({ current: r = 1, pageSize: a = 10, total: i = 0, onChange: s, showSizeChanger: c = !1, pageSizeOptions: x = [10, 20, 50, 100], onShowSizeChange: m, disabled: l = !1, className: p }) => {
  const u = K(() => Math.ceil(i / a) || 1, [a, i]), v = le((b) => m == null ? void 0 : m(1, Number(b.target.value)), [m]), N = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ t("div", { className: ie("flex flex-wrap items-center justify-center gap-4 p-4", p), children: [
    /* @__PURE__ */ e("button", { type: "button", className: N, onClick: () => r > 1 && (s == null ? void 0 : s(r - 1)), disabled: l || r <= 1, children: "← 上一页" }),
    /* @__PURE__ */ t("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      r,
      " / ",
      u,
      " 页，共 ",
      i,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: N, onClick: () => r < u && (s == null ? void 0 : s(r + 1)), disabled: l || r >= u, children: "下一页 →" }),
    c && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: a, onChange: v, disabled: l, children: x.map((b) => /* @__PURE__ */ t("option", { value: b, children: [
      b,
      " 条/页"
    ] }, b)) })
  ] });
};
Yr.displayName = "BasePagination";
const $t = ({ description: r = "暂无数据", image: a, children: i }) => /* @__PURE__ */ t("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  a && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: a }),
  r && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: r }),
  i
] });
$t.displayName = "BaseEmpty";
const Qe = ({ trigger: r, items: a, footerItems: i = [], open: s = !1, onOpenChange: c, onTriggerClick: x, onItemClick: m, placement: l = "bottom-start", width: p, portal: u = !1, className: v, triggerClassName: N, menuClassName: b, listClassName: B, footerClassName: M }) => {
  const P = ee(null), k = ee(null), [j, _] = w({}), $ = l.endsWith("end"), T = l.startsWith("top");
  Z(() => {
    if (!s || !u || !P.current) return;
    const S = P.current.getBoundingClientRect();
    _({ position: "fixed", left: $ ? S.right : S.left, top: T ? S.top : S.bottom, transform: $ ? "translateX(-100%)" : void 0 });
  }, [T, $, s, u, l]), Z(() => {
    !s || !u || !T || !k.current || _((S) => ({ ...S, top: Number(S.top) - k.current.offsetHeight - 8 }));
  }, [T, s, u]), Z(() => {
    if (!s || !c) return;
    const S = (q) => {
      var W, d;
      const z = q.target;
      (W = P.current) != null && W.contains(z) || (d = k.current) != null && d.contains(z) || c(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [c, s]);
  const H = K(() => p ? { width: typeof p == "number" ? `${p}px` : p } : void 0, [p]), f = le((S) => /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: ie(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 bg-transparent px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !S.danger && !S.active && "text-primaryText hover:bg-surfaceMuted",
        !S.danger && S.active && "bg-primary-soft font-medium text-primary",
        S.danger && "text-danger hover:bg-danger-soft"
      ),
      onClick: (q) => m == null ? void 0 : m(S, q),
      disabled: S.disabled,
      children: [
        S.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: S.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: S.label })
      ]
    },
    S.key
  ), [m]), A = s ? /* @__PURE__ */ t(
    "div",
    {
      ref: k,
      className: ie(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !u && "absolute",
        !u && !T && "top-[calc(100%+8px)]",
        !u && T && "bottom-[calc(100%+8px)]",
        !u && $ ? "right-0" : u ? void 0 : "left-0",
        b
      ),
      style: u ? { ...j, ...H } : H,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: ie("flex min-h-0 flex-col gap-1", B), children: a.map(f) }),
        i.length > 0 && /* @__PURE__ */ e("div", { className: ie("flex flex-col gap-1 border-t border-lineSoft pt-2", M), children: i.map(f) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ t("div", { ref: P, className: ie("relative inline-block", v), children: [
    /* @__PURE__ */ e("button", { type: "button", className: ie("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", N), onClick: (S) => {
      x == null || x(S), c == null || c(!s);
    }, "aria-haspopup": "menu", "aria-expanded": s, children: r }),
    u ? A && cr(A, document.body) : A
  ] });
};
Qe.displayName = "BaseActionMenu";
const Gr = ({
  markdownContent: r,
  onRefresh: a,
  feedback: i,
  onFeedback: s,
  disabled: c = !1
}) => {
  const [x, m] = w(!1), l = le(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), m(!0), window.setTimeout(() => m(!1), 1200);
      } catch {
      }
  }, [r]);
  return /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-1 rounded-full bg-white py-1 text-tertiaryText", children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: l,
        className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${x ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
        title: x ? "已复制 Markdown" : "复制 Markdown",
        children: x ? /* @__PURE__ */ e(Ue, { size: 15 }) : /* @__PURE__ */ e(Je, { size: 15 })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: a,
        disabled: c,
        className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
        title: "重新生成",
        children: /* @__PURE__ */ e(Ft, { size: 15 })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => s("like"),
        className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
        title: "有帮助",
        children: /* @__PURE__ */ e(Ht, { size: 15 })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => s("dislike"),
        className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
        title: "需改进",
        children: /* @__PURE__ */ e(Wt, { size: 15 })
      }
    )
  ] });
}, Kr = xe.memo(Gr), mt = "[[PAPER_LIST_JSON]]";
let pt = !1, qe = null, Ve = null, Xe = null;
const Qr = async () => (Ve || (Ve = Promise.all([import("remark-math"), import("rehype-katex")]).then(([r, a]) => ({
  remark: r.default,
  rehype: a.default
})).catch((r) => {
  throw Ve = null, r;
})), Ve), Zr = async () => (Xe || (Xe = import("remark-emoji").then((r) => r.default).catch(() => (Xe = null, null))), Xe), Jr = async () => {
  qe || (qe = import("mermaid").then((a) => a.default ?? a).catch((a) => {
    throw qe = null, a;
  }));
  const r = await qe;
  if (!pt) {
    const a = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    r.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: a ? { primaryColor: a, primaryBorderColor: a } : void 0
    }), pt = !0;
  }
  return r;
}, Ze = (r) => typeof r == "string" || typeof r == "number" ? String(r) : Array.isArray(r) ? r.map((a) => Ze(a)).join("") : xe.isValidElement(r) ? Ze(r.props.children) : "", ht = (r) => {
  const a = r.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(a);
}, en = ({ href: r, label: a }) => {
  const i = K(() => {
    const s = a.trim();
    if (s) return s;
    try {
      const x = new URL(r, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (x) return decodeURIComponent(x);
    } catch {
    }
    return r;
  }, [r, a]);
  return /* @__PURE__ */ t("div", { className: "group not-prose my-2 inline-flex w-[340px] max-w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2 shadow-sm", children: [
    /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-warning text-xs font-semibold tracking-wide text-white", children: "PDF" }),
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: i }),
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
        children: /* @__PURE__ */ e(Nt, { size: 14 })
      }
    )
  ] });
}, tn = ({ language: r, rawCode: a, className: i, children: s }) => {
  const [c, x] = w(!1), m = le(async () => {
    if (a.trim())
      try {
        await navigator.clipboard.writeText(a), x(!0), window.setTimeout(() => x(!1), 1200);
      } catch {
      }
  }, [a]);
  return /* @__PURE__ */ t("div", { className: "code-block-wrapper not-prose", children: [
    /* @__PURE__ */ t("div", { className: "code-block-header", children: [
      /* @__PURE__ */ e("span", { className: "code-block-lang-tag", children: r || "code" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: m,
          className: `code-block-copy-btn ${c ? "copied" : ""}`,
          title: c ? "已复制代码" : "复制代码",
          children: [
            c ? /* @__PURE__ */ e(Ue, { size: 12 }) : /* @__PURE__ */ e(Je, { size: 12 }),
            c ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${i ?? ""}`.trim(), children: s }) })
  ] });
}, rn = ({ rawCode: r }) => {
  const [a, i] = w(!1), s = le(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), i(!0), window.setTimeout(() => i(!1), 1200);
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
          onClick: s,
          className: `code-block-copy-btn ${a ? "copied" : ""}`,
          title: a ? "已复制图表代码" : "复制图表代码",
          children: [
            a ? /* @__PURE__ */ e(Ue, { size: 12 }) : /* @__PURE__ */ e(Je, { size: 12 }),
            a ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: r }) })
  ] });
}, Mt = (r) => {
  const a = typeof r.title == "string" ? r.title.trim() : "", i = typeof r.pmid == "string" ? r.pmid.trim() : "", s = typeof r.doi == "string" ? r.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !a || !i || !s ? null : { title: a, pmid: i, doi: s };
}, xt = (r) => {
  const a = r.replace(/\r/g, "").split(`
`).map((s) => s.trim()).filter(Boolean);
  if (a.length === 0) return null;
  const i = [];
  return a.forEach((s, c) => {
    var N;
    const x = s.match(/PMID\s*[:：]\s*(\d{4,})/i), m = s.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!x || !m) return;
    const l = s.slice(0, x.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), p = ((N = a[c - 1]) == null ? void 0 : N.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", v = Mt({
      title: l || p,
      pmid: x[1],
      doi: m[1]
    });
    v && i.push(v);
  }), i.length === 0 ? null : { items: i };
}, nn = (r) => {
  if (!r.startsWith(mt))
    return xt(r);
  const a = r.slice(mt.length).trim();
  if (!a) return null;
  try {
    const i = JSON.parse(a);
    if (!Array.isArray(i.items)) return null;
    const s = i.items.map((c) => Mt(c)).filter((c) => c !== null);
    return s.length === 0 ? null : { items: s };
  } catch {
    return xt(a);
  }
}, zt = ({
  msg: r,
  actionKey: a,
  feedback: i,
  onFeedback: s,
  onRefresh: c,
  isTyping: x = !1,
  isStreaming: m
}) => {
  var z, W;
  const l = r.role === "user", p = m ?? x, u = ee(null), [v, N] = w(null), [b, B] = w(null), [M, P] = w(null), [k, j] = w(!1), _ = K(() => /```\s*mermaid/i.test(r.content), [r.content]), $ = K(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(r.content), [r.content]), T = K(() => /:[a-zA-Z0-9_+-]+:/.test(r.content), [r.content]), H = K(
    () => l ? null : nn(r.content),
    [l, r.content]
  ), f = !!(H && H.items.length > 0);
  Z(() => {
    if (!$ || v || b) return;
    let d = !1;
    return Qr().then((h) => {
      d || (N(() => h.remark), B(() => h.rehype));
    }).catch(() => {
    }), () => {
      d = !0;
    };
  }, [$, v, b]), Z(() => {
    if (!T || k) return;
    let d = !1;
    return Zr().then((h) => {
      d || (h && P(() => h), j(!0));
    }), () => {
      d = !0;
    };
  }, [T, k]);
  const A = K(() => {
    const d = [ir];
    return M && d.push(M), v && d.push(v), d;
  }, [M, v]), S = K(() => {
    const d = [or];
    return b && d.push(b), d;
  }, [b]), q = K(
    () => ({
      table: ({ node: d, ...h }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...h }) }),
      tr: ({ node: d, ...h }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...h }),
      th: ({ node: d, ...h }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...h
        }
      ),
      td: ({ node: d, ...h }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...h }),
      blockquote: ({ node: d, ...h }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...h
        }
      ),
      input: ({ node: d, type: h, checked: L, ...U }) => h === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!L,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...U
        }
      ) : /* @__PURE__ */ e("input", { type: h, ...U }),
      section: ({ node: d, ...h }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...h }),
      p: ({ node: d, children: h, ...L }) => {
        const U = xe.Children.toArray(h);
        if (U.length === 1 && xe.isValidElement(U[0])) {
          const ce = U[0];
          if (typeof ce.props.href == "string" && ht(ce.props.href)) {
            const oe = Ze(ce.props.children).trim();
            return /* @__PURE__ */ e(en, { href: ce.props.href, label: oe });
          }
        }
        return /* @__PURE__ */ e("p", { ...L, children: h });
      },
      a: ({ node: d, href: h, ...L }) => {
        const U = h ?? "", ce = /^https?:\/\/(dx\.)?doi\.org\//i.test(U) || /^doi:/i.test(U), oe = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(U) || /\/pmc\/|\/pmid\//i.test(U), ue = ht(U);
        return ce || oe || ue ? /* @__PURE__ */ e(
          "a",
          {
            href: h,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...L
          }
        ) : /* @__PURE__ */ e("a", { href: h, target: "_blank", rel: "noreferrer", ...L });
      },
      pre({ children: d, ...h }) {
        const L = xe.Children.toArray(d).find(
          (G) => xe.isValidElement(G) && typeof G.props.className == "string" && G.props.className.includes("language-")
        );
        if (!L)
          return /* @__PURE__ */ e("pre", { ...h, children: d });
        const U = L.props.className ?? "", ce = U.match(/language-([\w-]+)/), oe = ce ? ce[1].toLowerCase() : "code", ue = Ze(L.props.children).replace(/\n$/, "");
        return oe === "mermaid" ? /* @__PURE__ */ e(rn, { rawCode: ue }) : /* @__PURE__ */ e(tn, { language: oe, rawCode: ue, className: U, children: L.props.children });
      },
      code({ children: d, className: h, ...L }) {
        return h ? /* @__PURE__ */ e("code", { className: h, ...L, children: d }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...L,
            children: d
          }
        );
      }
    }),
    []
  );
  return Z(() => {
    if (l || p || !_) return;
    const d = u.current;
    if (!d) return;
    const h = Array.from(d.querySelectorAll(".mermaid")).filter(
      (L) => L.dataset.processed !== "true"
    );
    h.length !== 0 && Jr().then(async (L) => {
      await Promise.all(
        h.map(async (U, ce) => {
          var J;
          const oe = (J = U.textContent) == null ? void 0 : J.trim();
          if (!oe) return;
          const ue = `mermaid-${Date.now()}-${ce}`, { svg: G } = await L.render(ue, oe);
          U.innerHTML = G, U.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [l, p, _, r.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${l ? "justify-end" : "justify-start"}`, children: l ? /* @__PURE__ */ t("div", { className: "message-bubble-user", children: [
    (r.references && r.references.length > 0 || r.attachments && r.attachments.length > 0) && /* @__PURE__ */ t("div", { className: "mb-2 flex flex-wrap gap-2", children: [
      (z = r.references) == null ? void 0 : z.map((d) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${d.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
          children: [
            d.type === "skill" ? /* @__PURE__ */ e(vt, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(wt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: d.label, children: d.label })
          ]
        },
        d.id
      )),
      (W = r.attachments) == null ? void 0 : W.map((d) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${d.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
          role: d.status === "error" ? "alert" : void 0,
          title: d.errorMessage,
          children: [
            d.status === "uploading" ? /* @__PURE__ */ e(lt, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : d.status === "error" ? /* @__PURE__ */ e(Ut, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : d.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: d.previewUrl, alt: d.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(it, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: d.name, children: d.name }),
            d.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
            d.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
          ]
        },
        d.id
      ))
    ] }),
    /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: r.content })
  ] }) : /* @__PURE__ */ t("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    f && H ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: H.items.map((d, h) => /* @__PURE__ */ t(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: d.title }),
            /* @__PURE__ */ t("p", { className: "m-0 text-xs text-secondaryText", children: [
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
              children: /* @__PURE__ */ e(Nt, { size: 14 })
            }
          )
        ]
      },
      `${d.pmid}-${h}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          lr,
          {
            remarkPlugins: A,
            rehypePlugins: S,
            components: q,
            children: r.content
          }
        )
      }
    ),
    !f && r.content && !p && a && s && c && /* @__PURE__ */ e(
      Kr,
      {
        markdownContent: r.content,
        onRefresh: c,
        feedback: i,
        onFeedback: (d) => s(a, d),
        disabled: p
      }
    )
  ] }) }) });
}, an = xe.memo(zt), sn = {
  thinking: "思考中…",
  searching: "搜索中…",
  generating: "生成中…"
}, ft = {
  knowledge: {
    icon: /* @__PURE__ */ e(Ot, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(Xt, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Re, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Lt = ({
  phase: r,
  searchSteps: a = [],
  defaultExpanded: i = !0
}) => {
  const [s, c] = w(i), x = ee(null);
  Z(() => {
    a.length > 0 && c(!0);
  }, [a.length]);
  const m = a.length > 0;
  return /* @__PURE__ */ t("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: r === "generating" ? /* @__PURE__ */ e(qt, { size: 14, className: "text-primary animate-pulse" }) : /* @__PURE__ */ e(Vt, { size: 14, className: "animate-spin text-primary" }) }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: sn[r] }),
      m && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => c((l) => !l),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            s ? /* @__PURE__ */ e(Ye, { size: 12 }) : /* @__PURE__ */ e(Oe, { size: 12 }),
            /* @__PURE__ */ t("span", { children: [
              a.length,
              " 条结果"
            ] })
          ]
        }
      )
    ] }),
    m && /* @__PURE__ */ e(
      "div",
      {
        ref: x,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${s ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: a.map((l, p) => {
          const u = ft[l.type] ?? ft.tool;
          return /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: u.colorClass, children: u.icon }),
                /* @__PURE__ */ e("span", { className: "truncate max-w-[480px]", children: l.label })
              ]
            },
            `${l.type}-${p}-${l.label}`
          );
        })
      }
    )
  ] });
}, ln = xe.memo(Lt);
function on(r, a) {
  if (typeof r == "function") {
    r(a);
    return;
  }
  r && (r.current = a);
}
function cn({
  messages: r,
  isTyping: a,
  statusPhase: i = "thinking",
  searchSteps: s = [],
  hasReceivedAssistantChunk: c = !1,
  contentMaxWidth: x = 800,
  selection: m,
  scrollbar: l,
  feedbackByMessageKey: p,
  getMessageKey: u = (P, k) => String(k),
  onFeedback: v,
  onRegenerate: N,
  onScroll: b,
  scrollContainerRef: B,
  onMessageElement: M
}) {
  const P = !!m;
  return /* @__PURE__ */ t("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: (k) => on(B, k),
        onScroll: b,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ t(
          "div",
          {
            className: `flex w-full flex-col ${P ? "gap-3" : "gap-8"}`,
            style: { maxWidth: x },
            children: [
              r.map((k, j) => {
                const _ = u(k, j), $ = (m == null ? void 0 : m.selectedMessageKeys.has(_)) ?? !1;
                return /* @__PURE__ */ t(
                  "div",
                  {
                    ref: (T) => M == null ? void 0 : M(j, T),
                    className: P ? "flex w-full items-start gap-2" : void 0,
                    children: [
                      m && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => m.onToggleMessage(_),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": $ ? "取消选择消息" : "选择消息",
                          children: $ ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Ue, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ e(
                        "div",
                        {
                          className: m ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${$ ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${k.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: /* @__PURE__ */ e(
                            zt,
                            {
                              msg: k,
                              actionKey: _,
                              feedback: p == null ? void 0 : p[_],
                              onFeedback: v,
                              onRefresh: N ? () => N(j) : void 0,
                              isTyping: a
                            }
                          )
                        }
                      )
                    ]
                  },
                  _
                );
              }),
              a && !(i === "generating" && c) && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(Lt, { phase: i, searchSteps: [...s] }) }) })
            ]
          }
        )
      }
    ),
    l && l.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${l.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: l.height,
          transform: `translateY(${l.top}px)`
        }
      }
    )
  ] });
}
xe.memo(cn);
function Dn({
  children: r,
  maxWidth: a = 840,
  disclaimer: i = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: a },
      children: [
        r,
        i && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: i })
      ]
    }
  );
}
const Fn = yt(
  function({ header: a, children: i, sidePanels: s }, c) {
    return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
      a,
      /* @__PURE__ */ t("div", { ref: c, className: "flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: i }),
        s
      ] })
    ] });
  }
), Hn = yt(
  function({ open: a, width: i, resizing: s = !1, children: c }, x) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: x,
        style: { width: a ? i : 0 },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${s ? "transition-none" : "transition-[width] duration-300 ease-out"} ${a ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: i }, className: "h-full min-w-0", children: c })
      }
    );
  }
);
function dn({
  isSidebarOpen: r,
  title: a,
  editingTitle: i,
  titleInputRef: s,
  divided: c = !1,
  actions: x,
  onOpenSidebar: m,
  onStartEditTitle: l,
  onEditingTitleChange: p,
  onCommitTitle: u,
  onEditingTitleKeyDown: v
}) {
  return /* @__PURE__ */ t(
    "header",
    {
      className: `z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${c ? "border-b border-chatWorkspaceDivider" : ""}`,
      children: [
        /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
          !r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: m,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(kt, { size: 20 })
            }
          ),
          a !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: i !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              value: i,
              onChange: (b) => p == null ? void 0 : p(b.target.value),
              onBlur: u,
              onKeyDown: v,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${l ? "cursor-pointer" : ""}`,
              onClick: l,
              title: l ? "点击编辑对话名称" : a,
              children: a
            }
          ) })
        ] }),
        x && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: x })
      ]
    }
  );
}
function Wn({ active: r = !1, icon: a, label: i, onClick: s }) {
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: s,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${r ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        a,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: i })
      ]
    }
  );
}
function Un({
  items: r,
  activeMessageIndex: a,
  initiallyExpanded: i = !1,
  onSelect: s
}) {
  const [c, x] = w(i), [m, l] = w(null), [p, u] = w(0), [v, N] = w(0), [b, B] = w(!1), M = ee(null), P = ee({}), k = ee(null), j = le(() => {
    const T = M.current;
    if (!T) {
      u(0), N(0);
      return;
    }
    const { scrollTop: H, scrollHeight: f, clientHeight: A } = T;
    if (f <= A || A <= 0) {
      u(0), N(0);
      return;
    }
    const S = Math.max(A / f * A, 24), q = A - S, z = H / Math.max(f - A, 1);
    u(S), N(q * z);
  }, []), _ = le(() => {
    j(), B(!0), k.current !== null && window.clearTimeout(k.current), k.current = window.setTimeout(() => B(!1), 650);
  }, [j]), $ = () => {
    k.current !== null && (window.clearTimeout(k.current), k.current = null), x(!1), l(null), B(!1);
  };
  return Z(() => {
    if (!c) return;
    const T = window.requestAnimationFrame(j);
    return () => window.cancelAnimationFrame(T);
  }, [c, r.length, j]), Z(() => {
    const T = M.current, H = P.current[a];
    if (!T || !H) return;
    const f = T.scrollTop, A = f + T.clientHeight, S = H.offsetTop, q = S + H.offsetHeight, z = 16;
    S < f + z ? T.scrollTo({ top: Math.max(S - z, 0), behavior: "auto" }) : q > A - z && T.scrollTo({
      top: Math.max(q - T.clientHeight + z, 0),
      behavior: "auto"
    });
  }, [a, r.length]), Z(() => () => {
    k.current !== null && window.clearTimeout(k.current);
  }, []), r.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => x(!0),
      onMouseLeave: $,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: M,
          onScroll: _,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${c ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: r.map((T) => {
              const H = T.messageIndex === a, f = m === T.messageIndex;
              return /* @__PURE__ */ t(
                "button",
                {
                  ref: (A) => {
                    P.current[T.messageIndex] = A;
                  },
                  type: "button",
                  onClick: () => s(T.messageIndex),
                  onMouseEnter: () => l(T.messageIndex),
                  onMouseLeave: () => l(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${c ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${T.messageIndex + 1} 条用户消息`,
                  title: T.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${c ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${H ? "text-primary" : f ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: T.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${H ? "h-[4px] w-[12px] bg-primary" : f ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                T.messageIndex
              );
            }) }),
            c && p > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${b ? "opacity-100" : "opacity-0"}`,
                style: { height: p, transform: `translateY(${v}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function qn({
  selectedCount: r,
  shareLink: a,
  modalOpen: i,
  copied: s = !1,
  contentMaxWidth: c = 840,
  onCancel: x,
  onCreateLink: m,
  onCloseModal: l,
  onCopyLink: p
}) {
  return /* @__PURE__ */ t(ze, { children: [
    /* @__PURE__ */ e("div", { className: "w-full shrink-0 border-t border-chatWorkspaceDivider bg-chatShareDockSurface px-6 py-3 backdrop-blur", children: /* @__PURE__ */ t(
      "div",
      {
        className: "mx-auto flex w-full items-center justify-between gap-4",
        style: { maxWidth: c },
        children: [
          /* @__PURE__ */ t("div", { className: "min-w-0 text-sm text-secondaryText", children: [
            "已选择 ",
            r,
            " 条对话"
          ] }),
          /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e(je, { type: "secondary", size: "small", onClick: x, children: "取消" }),
            /* @__PURE__ */ e(
              je,
              {
                type: "primary",
                size: "small",
                disabled: r <= 0,
                onClick: m,
                children: "创建分享链接"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e(
      et,
      {
        visible: i,
        title: "创建分享链接",
        width: 450,
        onCancel: l,
        footer: null,
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: a }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: p,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  s ? /* @__PURE__ */ e(Ue, { size: 14 }) : /* @__PURE__ */ e(Je, { size: 14 }),
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
function Vn({
  tabs: r,
  activeKey: a,
  onSelectTab: i,
  onCloseTab: s,
  onClose: c,
  onResizeStart: x
}) {
  const m = r.find((l) => l.key === a) ?? null;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: x,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: r.map((l) => {
        const p = l.key === a;
        return /* @__PURE__ */ t("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => i(l.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${p ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                l.type === "knowledge" ? /* @__PURE__ */ e(Ge, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Yt, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: l.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (u) => {
                u.stopPropagation(), s(l.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${l.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(Ie, { size: 12 })
            }
          )
        ] }, l.key);
      }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: c,
          className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
          title: "关闭预览",
          "aria-label": "关闭预览",
          children: /* @__PURE__ */ e(Ie, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-4 pt-2", children: m ? /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ e("h3", { className: "break-words text-base font-semibold text-primaryText", children: m.title }),
        m.type === "knowledge" && /* @__PURE__ */ e("div", { className: "text-xs text-tertiaryText", children: m.subtitle }),
        m.status && /* @__PURE__ */ e("div", { className: "inline-flex items-center rounded-full bg-bgLight px-2 py-1 text-xs text-secondaryText", children: m.status })
      ] }),
      /* @__PURE__ */ e("div", { className: "rounded-xl border border-borderGray bg-chatPreviewContentSurface p-3", children: /* @__PURE__ */ e("p", { className: "whitespace-pre-line break-words text-sm leading-6 text-secondaryText", children: m.content }) })
    ] }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Xn({
  projectName: r = "未归属项目",
  searchQuery: a,
  knowledgeDocs: i,
  experiments: s,
  activePreviewKey: c,
  onSearchQueryChange: x,
  onOpenKnowledge: m,
  onOpenExperiment: l,
  onResizeStart: p
}) {
  const u = i.length + s.length;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目附件与预览区域宽度",
        onMouseDown: p,
        className: "absolute -ml-1 left-0 top-0 z-10 h-full w-3 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ t("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ t("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: r }),
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Re, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: a,
              onChange: (v) => x(v.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: u === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: a.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ t(ze, { children: [
        i.map((v) => {
          const N = `knowledge:${v.id}`, b = c === N;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => m(v.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${b ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${b ? "font-semibold" : "font-normal"}`, children: v.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: v.tags[0] ?? "未分类" })
              ]
            },
            v.id
          );
        }),
        s.map((v) => {
          const N = `experiment:${v.id}`, b = c === N;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => l(v.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${b ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${b ? "font-semibold" : "font-normal"}`, children: v.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: v.tags[0] ?? v.status })
              ]
            },
            v.id
          );
        })
      ] }) }) })
    ] }) })
  ] });
}
function un(r) {
  return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
}
function On({
  active: r = !1,
  count: a = 0,
  onClick: i
}) {
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: i,
      "aria-expanded": r,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${r ? "bg-chatMenuActive" : "bg-transparent hover:bg-chatMenuActive"}`,
      children: [
        /* @__PURE__ */ e(it, { size: 14, className: "text-secondaryText", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { children: "附件" }),
        a > 0 && /* @__PURE__ */ e("span", { className: "inline-flex min-w-5 items-center justify-center rounded-full bg-chatAttachmentIconSurface px-1.5 text-xs text-secondaryText", children: a })
      ]
    }
  );
}
function Yn({
  attachments: r,
  loading: a = !1,
  error: i,
  pendingAttachmentId: s,
  onClose: c,
  onToggleContext: x,
  onDelete: m
}) {
  const [l, p] = w(null);
  return /* @__PURE__ */ t("div", { className: "flex h-full min-h-0 flex-col border-l border-shellFrameBorder bg-white", children: [
    /* @__PURE__ */ t("div", { className: "flex h-16 shrink-0 items-center justify-between border-b border-shellFrameBorder px-4", children: [
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("h2", { className: "truncate text-[15px] font-medium text-primaryText", children: "会话附件" }),
        /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-tertiaryText", children: "控制附件是否参与后续对话" })
      ] }),
      c && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: c,
          "aria-label": "关闭会话附件",
          className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-secondaryText transition-colors hover:bg-chatAttachmentHover hover:text-primaryText",
          children: /* @__PURE__ */ e(Ie, { size: 16, "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: [
      i && /* @__PURE__ */ e(
        "div",
        {
          role: "alert",
          className: "mb-3 rounded-lg border border-danger bg-danger-soft px-3 py-2 text-xs text-danger",
          children: i
        }
      ),
      a ? /* @__PURE__ */ t(
        "div",
        {
          className: "flex h-32 items-center justify-center gap-2 text-sm text-secondaryText",
          role: "status",
          children: [
            /* @__PURE__ */ e(
              lt,
              {
                size: 16,
                className: "animate-spin text-primary",
                "aria-hidden": "true"
              }
            ),
            "正在加载附件…"
          ]
        }
      ) : r.length === 0 ? /* @__PURE__ */ t("div", { className: "flex h-40 flex-col items-center justify-center text-center", children: [
        /* @__PURE__ */ e("span", { className: "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Ge, { size: 18, "aria-hidden": "true" }) }),
        /* @__PURE__ */ e("p", { className: "text-sm font-medium text-primaryText", children: "暂无会话附件" }),
        /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-tertiaryText", children: "从输入框上传文件后会显示在这里" })
      ] }) : /* @__PURE__ */ e("ul", { className: "space-y-2", children: r.map((u) => {
        const v = s === u.id;
        return /* @__PURE__ */ t(
          "li",
          {
            className: "rounded-lg border border-chatAttachmentBorder bg-white p-3",
            children: [
              /* @__PURE__ */ t("div", { className: "flex min-w-0 items-start gap-2.5", children: [
                /* @__PURE__ */ e("span", { className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Ge, { size: 16, "aria-hidden": "true" }) }),
                /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e(
                    "p",
                    {
                      className: "truncate text-sm font-medium text-primaryText",
                      title: u.name,
                      children: u.name
                    }
                  ),
                  /* @__PURE__ */ t("p", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: [
                    un(u.fileSize),
                    " ·",
                    " ",
                    u.mimeType
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => p(u),
                    disabled: v,
                    "aria-label": `删除附件 ${u.name}`,
                    className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-chatAttachmentTextMuted transition-colors hover:bg-danger-soft hover:text-danger disabled:cursor-not-allowed disabled:opacity-50",
                    children: v ? /* @__PURE__ */ e(
                      lt,
                      {
                        size: 14,
                        className: "animate-spin",
                        "aria-hidden": "true"
                      }
                    ) : /* @__PURE__ */ e(Tt, { size: 14, "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between border-t border-lineSoft pt-3", children: [
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("p", { className: "text-xs font-medium text-primaryText", children: "用于上下文" }),
                  /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-tertiaryText", children: u.contextEnabled ? "后续消息会使用此附件" : "已暂停用于后续消息" })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.contextEnabled,
                    "aria-label": `${u.contextEnabled ? "停用" : "启用"}附件上下文 ${u.name}`,
                    disabled: v,
                    onClick: () => x(u, !u.contextEnabled),
                    className: `relative h-5 w-9 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandFocus disabled:cursor-not-allowed disabled:opacity-50 ${u.contextEnabled ? "bg-primary" : "bg-controlBorder"}`,
                    children: /* @__PURE__ */ e(
                      "span",
                      {
                        className: `absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${u.contextEnabled ? "translate-x-[18px]" : "translate-x-0.5"}`
                      }
                    )
                  }
                )
              ] })
            ]
          },
          u.id
        );
      }) })
    ] }),
    /* @__PURE__ */ e(
      et,
      {
        visible: !!l,
        title: "删除附件",
        okText: "删除",
        cancelText: "取消",
        okButtonProps: { type: "button" },
        onCancel: () => p(null),
        onConfirm: () => {
          l && (m(l), p(null));
        },
        children: /* @__PURE__ */ e("p", { className: "text-sm leading-6 text-secondaryText", children: "删除后无法恢复；已发送并被历史消息引用的附件可能无法删除。" })
      }
    )
  ] });
}
const mn = 50, pn = 100 * 1024 * 1024, hn = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", xn = [
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
], fn = /(?:^|\s)\/([^\s/]*)$/, bn = /(?:^|\s)@([^\s@]*)$/, gn = (r, a) => {
  const s = r.slice(0, a).match(fn);
  return s ? s[1] : null;
}, yn = (r, a) => {
  const s = r.slice(0, a).match(bn);
  return s ? s[1] : null;
}, Gn = (r, a, i, s) => {
  const c = r.slice(0, a), x = r.slice(i), m = c.match(/(?:^|\s)\/[^\s/]*$/);
  if (!m) {
    const N = `/${s} `;
    return { value: `${c}${N}${x}`, cursor: c.length + N.length };
  }
  const l = c.length - m[0].length, u = `${m[0].startsWith(" ") ? " " : ""}/${s} `, v = `${c.slice(0, l)}${u}`;
  return {
    value: `${v}${x}`,
    cursor: v.length
  };
}, Kn = (r, a, i, s) => {
  const c = r.slice(0, a), x = r.slice(i), m = c.match(/(?:^|\s)@[^\s@]*$/);
  if (!m) {
    const N = `@${s} `;
    return { value: `${c}${N}${x}`, cursor: c.length + N.length };
  }
  const l = c.length - m[0].length, u = `${m[0].startsWith(" ") ? " " : ""}@${s} `, v = `${c.slice(0, l)}${u}`;
  return {
    value: `${v}${x}`,
    cursor: v.length
  };
}, vn = [], Qn = [], At = ({
  onSend: r,
  disabled: a,
  isStreaming: i = !1,
  onCancel: s,
  leadingControls: c,
  skillOptions: x = xn,
  fileOptions: m = vn
}) => {
  const [l, p] = w(""), [u, v] = w(!1), [N, b] = w(!1), [B, M] = w(""), [P, k] = w(-1), [j, _] = w(!1), [$, T] = w(""), [H, f] = w(-1), [A, S] = w([]), [q, z] = w([]), [W, d] = w([]), [h, L] = w(!1), U = ee(null), ce = ee(null), oe = Dt(), ue = ee([]), G = i && !!s;
  Z(() => {
    ue.current = A;
  }, [A]), Z(() => () => {
    ue.current.forEach((n) => {
      n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    });
  }, []);
  const J = K(() => {
    const n = B.trim().toLowerCase();
    return n ? x.filter((g) => `${g.id} ${g.description} ${g.source}`.toLowerCase().includes(n)) : x;
  }, [x, B]), te = K(() => {
    const n = $.trim().toLowerCase();
    return n ? m.filter((g) => `${g.name} ${g.projectName} ${g.sourceType} ${g.operatorName ?? ""} ${g.operatedAt ?? ""}`.toLowerCase().includes(n)) : m.filter((g) => g.isRecent).slice(0, 10);
  }, [m, $]), ae = le((n, g) => {
    const D = g ?? n.length, O = gn(n, D);
    if (O !== null) {
      b(!0), M(O), k(-1), _(!1), T(""), f(-1);
      return;
    }
    const I = yn(n, D);
    if (I !== null) {
      _(!0), T(I), f(-1), b(!1), M(""), k(-1);
      return;
    }
    b(!1), M(""), k(-1), _(!1), T(""), f(-1);
  }, []), C = le((n) => {
    if (n.disabled) return;
    const g = U.current, D = (g == null ? void 0 : g.selectionStart) ?? l.length, O = (g == null ? void 0 : g.selectionEnd) ?? D, I = l.slice(0, D), Q = l.slice(O), ne = (() => {
      const re = I.match(/(?:^|\s)\/[^\s/]*$/);
      if (!re)
        return { value: l, cursor: D };
      const de = I.length - re[0].length, pe = re[0].startsWith(" ") ? " " : "", he = `${I.slice(0, de)}${pe}`;
      return {
        value: `${he}${Q}`,
        cursor: he.length
      };
    })();
    z((re) => {
      const de = `skill-${n.id}`;
      return re.some((pe) => pe.id === de) ? re : [...re, { id: de, type: "skill", label: n.id, sourceId: n.id }];
    }), p(ne.value), b(!1), M(""), k(-1), requestAnimationFrame(() => {
      g && (g.focus(), g.setSelectionRange(ne.cursor, ne.cursor));
    });
  }, [l]), F = le((n) => {
    const g = U.current, D = (g == null ? void 0 : g.selectionStart) ?? l.length, O = (g == null ? void 0 : g.selectionEnd) ?? D, I = l.slice(0, D), Q = l.slice(O), ne = (() => {
      const re = I.match(/(?:^|\s)@[^\s@]*$/);
      if (!re)
        return { value: l, cursor: D };
      const de = I.length - re[0].length, pe = re[0].startsWith(" ") ? " " : "", he = `${I.slice(0, de)}${pe}`;
      return {
        value: `${he}${Q}`,
        cursor: he.length
      };
    })();
    d((re) => {
      const de = `doc-${n.id}`;
      return re.some((pe) => pe.id === de) ? re : [...re, { id: de, type: "doc", label: n.name, sourceId: n.id }];
    }), p(ne.value), _(!1), T(""), f(-1), requestAnimationFrame(() => {
      g && (g.focus(), g.setSelectionRange(ne.cursor, ne.cursor));
    });
  }, [l]), R = le(() => {
    L(!1);
    const n = ce.current;
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
  }, []), fe = le((n) => {
    const g = Array.from(n.target.files ?? []);
    g.length !== 0 && (S((D) => {
      const O = new Set(D.map((Q) => Q.id)), I = [...D];
      return g.forEach((Q) => {
        if (Q.size > pn || I.length >= mn) return;
        const ne = `${Q.name}-${Q.size}-${Q.lastModified}`;
        if (O.has(ne)) return;
        const re = Q.type.startsWith("image/");
        O.add(ne), I.push({
          id: ne,
          name: Q.name,
          mimeType: Q.type || "application/octet-stream",
          previewUrl: re ? URL.createObjectURL(Q) : void 0,
          file: Q
        });
      }), I;
    }), n.target.value = "");
  }, []), Ce = le((n) => {
    S((g) => {
      const D = g.find((O) => O.id === n);
      return D != null && D.previewUrl && URL.revokeObjectURL(D.previewUrl), g.filter((O) => O.id !== n);
    });
  }, []), ve = le((n) => {
    z((g) => g.filter((D) => D.id !== n));
  }, []), be = le((n) => {
    d((g) => g.filter((D) => D.id !== n));
  }, []), se = le(() => {
    !l.trim() || a || (r({
      content: l,
      attachments: A.map((n) => ({
        id: n.id,
        name: n.name,
        mimeType: n.mimeType,
        previewUrl: n.previewUrl,
        file: n.file
      })),
      references: [...q, ...W]
    }), p(""), S([]), z([]), d([]), b(!1), M(""), k(-1), _(!1), T(""), f(-1));
  }, [l, a, r, A, W, q]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ t("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: oe,
        ref: ce,
        type: "file",
        multiple: !0,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: fe
      }
    ),
    (A.length > 0 || q.length > 0 || W.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
      q.map((n) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(vt, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: n.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => ve(n.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${n.label}`,
                children: /* @__PURE__ */ e(Ie, { size: 12 })
              }
            )
          ]
        },
        n.id
      )),
      W.map((n) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(wt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: n.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => be(n.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${n.label}`,
                children: /* @__PURE__ */ e(Ie, { size: 12 })
              }
            )
          ]
        },
        n.id
      )),
      A.map((n) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            n.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: n.previewUrl, alt: n.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(it, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ t("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: n.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: n.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ce(n.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${n.name}`,
                children: /* @__PURE__ */ e(Ie, { size: 12 })
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
        ref: U,
        value: l,
        onChange: (n) => {
          const g = n.target.value;
          p(g), ae(g, n.target.selectionStart);
        },
        onClick: (n) => {
          ae(n.currentTarget.value, n.currentTarget.selectionStart);
        },
        onKeyUp: (n) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(n.key) || ae(n.currentTarget.value, n.currentTarget.selectionStart);
        },
        onKeyDown: (n) => {
          if (n.key === "Enter" && (n.shiftKey || n.metaKey || n.ctrlKey)) {
            n.preventDefault();
            const g = n.currentTarget, D = g.selectionStart ?? l.length, O = g.selectionEnd ?? D, I = `${l.slice(0, D)}
${l.slice(O)}`, Q = D + 1;
            p(I), ae(I, Q), requestAnimationFrame(() => {
              g.setSelectionRange(Q, Q);
            });
            return;
          }
          if (N) {
            if (n.key === "ArrowDown") {
              n.preventDefault(), k((g) => J.length === 0 ? -1 : g < 0 ? 0 : (g + 1) % J.length);
              return;
            }
            if (n.key === "ArrowUp") {
              n.preventDefault(), k((g) => J.length === 0 ? -1 : g < 0 ? J.length - 1 : (g - 1 + J.length) % J.length);
              return;
            }
            if (n.key === "Escape") {
              n.preventDefault(), b(!1), M(""), k(-1);
              return;
            }
            if (n.key === "Enter" && !n.shiftKey) {
              n.preventDefault();
              const g = P >= 0 ? J[P] : void 0;
              g && C(g);
              return;
            }
          }
          if (j) {
            if (n.key === "ArrowDown") {
              n.preventDefault(), f((g) => te.length === 0 ? -1 : g < 0 ? 0 : (g + 1) % te.length);
              return;
            }
            if (n.key === "ArrowUp") {
              n.preventDefault(), f((g) => te.length === 0 ? -1 : g < 0 ? te.length - 1 : (g - 1 + te.length) % te.length);
              return;
            }
            if (n.key === "Escape") {
              n.preventDefault(), _(!1), T(""), f(-1);
              return;
            }
            if (n.key === "Enter" && !n.shiftKey) {
              n.preventDefault();
              const g = H >= 0 ? te[H] : void 0;
              g && F(g);
              return;
            }
          }
          n.key === "Enter" && !n.shiftKey && (n.preventDefault(), se());
        },
        disabled: a,
        onFocus: () => v(!0),
        onBlur: () => {
          v(!1), b(!1), _(!1);
        },
        placeholder: u ? hn : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${A.length > 0 || q.length > 0 || W.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    N && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (n) => n.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Re, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: B ? `搜索 skill：${B}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: J.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : J.map((n, g) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          disabled: n.disabled,
          title: n.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${n.disabled ? "cursor-not-allowed opacity-50" : g === P ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => C(n),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: n.badge }),
            /* @__PURE__ */ t("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: n.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: n.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: n.disabledReason || n.source })
          ]
        },
        n.id
      )) })
    ] }) }),
    j && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (n) => n.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Re, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: $ ? `搜索文件：${$}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ t("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !$ && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(Ct, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        te.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : te.map((n, g) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${g === H ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => F(n),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Ge, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: n.name }),
              !$ && n.operatorName && n.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${n.operatorName} ${n.operatedAt}` })
            ]
          },
          n.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 min-w-0", children: [
        c,
        /* @__PURE__ */ t(
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
                  onClick: R,
                  "aria-controls": oe,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(ot, { size: 16 })
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${h ? "block" : "hidden"}`,
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
          onClick: G ? s : se,
          disabled: G ? !1 : a || !l.trim(),
          "aria-label": G ? "停止生成" : "发送消息",
          title: G ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${G || l.trim() && !a ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: G ? /* @__PURE__ */ e(Gt, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Kt, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
xe.memo(At);
const wn = ({ messages: r, isTyping: a, statusPhase: i = "thinking", searchSteps: s = [] }) => {
  const c = ee(null);
  Z(() => {
    var m;
    (m = c.current) == null || m.scrollIntoView({ behavior: "smooth" });
  }, [r.length, a]);
  const x = K(() => r.map((m, l) => /* @__PURE__ */ e(an, { msg: m }, `${l}-${m.role}`)), [r]);
  return /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    x,
    a && /* @__PURE__ */ e(ln, { phase: i, searchSteps: s }),
    /* @__PURE__ */ e("div", { ref: c })
  ] });
};
xe.memo(wn);
const Nn = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "生成项目日报"
], Pt = ({ onSelect: r, prompts: a = Nn }) => {
  const i = le((s) => {
    r(s);
  }, [r]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: a.map((s) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => i(s),
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm",
      children: s
    },
    s
  )) });
};
xe.memo(Pt);
const kn = (r, a) => {
  const i = Math.random() * r, s = Math.random() * a;
  return {
    x: i,
    y: s,
    baseX: i,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Zn({ onLogin: r, onLoginSuccess: a, onNavigate: i }) {
  const s = ee(null), c = ee(null), [x, m] = w(""), [l, p] = w(""), [u, v] = w(!0), [N, b] = w(!1), [B, M] = w(!1), [P, k] = w(null), j = ee(null), [_, $] = w(!1), [T, H] = w("email"), [f, A] = w(""), [S, q] = w(""), [z, W] = w(""), [d, h] = w(""), [L, U] = w(0), [ce, oe] = w(!1), ue = K(() => x.trim().length > 0 && l.trim().length > 0 && !N, [
    x,
    N,
    l
  ]);
  Z(() => {
    if (L <= 0) return;
    const C = window.setTimeout(() => U((F) => F - 1), 1e3);
    return () => clearTimeout(C);
  }, [L]), Z(
    () => () => {
      j.current !== null && window.clearTimeout(j.current);
    },
    []
  ), Z(() => {
    const C = s.current, F = c.current;
    if (!C || !F) return;
    const R = C.getContext("2d");
    if (!R) return;
    const fe = window.getComputedStyle(document.documentElement), Ce = fe.getPropertyValue("--chatui-color-auth-particle-active").trim(), ve = fe.getPropertyValue("--chatui-color-auth-particle-idle").trim(), be = fe.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let se = 0, n = 0, g = 0, D = window.devicePixelRatio || 1, O = [];
    const I = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, Q = 150, ne = () => {
      const X = F.getBoundingClientRect();
      D = window.devicePixelRatio || 1, n = X.width, g = X.height, C.width = n * D, C.height = g * D, C.style.width = `${n}px`, C.style.height = `${g}px`, R.setTransform(D, 0, 0, D, 0, 0);
      const y = n < 768 ? 40 : 90;
      O = Array.from({ length: y }, () => kn(n, g));
    }, re = (X) => {
      R.beginPath(), R.arc(X.x, X.y, X.size, 0, Math.PI * 2), R.closePath(), R.fill();
    }, de = () => {
      R.clearRect(0, 0, n, g);
      for (let X = 0; X < O.length; X += 1) {
        const y = O[X];
        y.x += y.vx, y.y += y.vy, (y.x < 0 || y.x > n) && (y.vx = -y.vx), (y.y < 0 || y.y > g) && (y.vy = -y.vy);
        const we = I.x - y.x, Ne = I.y - y.y, ke = Math.sqrt(we * we + Ne * Ne) || 1, De = we / ke, Fe = Ne / ke, Le = (I.radius - ke) / I.radius, He = De * Le * y.density, We = Fe * Le * y.density;
        if (ke < I.radius)
          y.x -= He * 0.5, y.y -= We * 0.5, R.fillStyle = Ce, y.size = Math.min(y.size + 0.1, 2.5);
        else {
          if (y.x !== y.baseX) {
            const ge = y.x - y.baseX;
            y.x -= ge / 50;
          }
          if (y.y !== y.baseY) {
            const ge = y.y - y.baseY;
            y.y -= ge / 50;
          }
          R.fillStyle = ve, y.size = Math.max(y.size - 0.05, 1);
        }
        re(y);
        for (let ge = X; ge < O.length; ge += 1) {
          const Te = O[ge], Se = y.x - Te.x, Ae = y.y - Te.y, $e = Math.sqrt(Se * Se + Ae * Ae);
          if ($e < Q) {
            const Pe = (1 - $e / Q) * 0.4;
            R.beginPath(), R.strokeStyle = be, R.globalAlpha = Pe, R.lineWidth = 1, R.moveTo(y.x, y.y), R.lineTo(Te.x, Te.y), R.stroke(), R.globalAlpha = 1, R.closePath();
          }
        }
      }
      se = window.requestAnimationFrame(de);
    }, pe = (X) => {
      const y = F.getBoundingClientRect();
      I.x = X.clientX - y.left, I.y = X.clientY - y.top;
    }, he = () => {
      I.x = -1e3, I.y = -1e3;
    }, Me = (X) => {
      if (X.touches.length < 1) return;
      const y = F.getBoundingClientRect();
      I.x = X.touches[0].clientX - y.left, I.y = X.touches[0].clientY - y.top;
    };
    return ne(), de(), window.addEventListener("resize", ne), F.addEventListener("mousemove", pe), F.addEventListener("mouseleave", he), F.addEventListener("touchmove", Me, { passive: !0 }), F.addEventListener("touchend", he), () => {
      window.cancelAnimationFrame(se), window.removeEventListener("resize", ne), F.removeEventListener("mousemove", pe), F.removeEventListener("mouseleave", he), F.removeEventListener("touchmove", Me), F.removeEventListener("touchend", he);
    };
  }, []);
  const G = async (C) => {
    if (C.preventDefault(), !!ue) {
      b(!0), k(null);
      try {
        const F = await r({ email: x.trim(), password: l, rememberLogin: u });
        if (!F.ok) {
          k(F.message);
          return;
        }
        M(!0), j.current = window.setTimeout(() => {
          M(!1), a();
        }, 900);
      } catch {
        k("登录失败，请稍后重试。");
      } finally {
        b(!1);
      }
    }
  }, J = async () => {
    !f.trim() || L > 0 || (b(!0), await new Promise((C) => window.setTimeout(C, 1e3)), b(!1), oe(!0), U(60));
  }, te = async () => {
    if (T === "email") {
      if (!f.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f) || !S.trim() || S.length < 6 || !z.trim() || z.length < 6 || z !== d) return;
      H("success");
    }
  }, ae = () => {
    $(!1), H("email"), A(""), q(""), W(""), h(""), U(0), oe(!1);
  };
  return /* @__PURE__ */ t("div", { ref: c, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: s, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "欢迎回来，请登录以进入科研工作台。" })
      ] }),
      /* @__PURE__ */ t("form", { onSubmit: G, className: "space-y-6", children: [
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: x,
              onChange: (C) => {
                m(C.target.value), k(null);
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
              value: l,
              onChange: (C) => {
                p(C.target.value), k(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        P && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: P }),
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ t("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: u,
                  onChange: (C) => v(C.target.checked),
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
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !ue,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: N ? "认证中..." : "登录" }),
              N && /* @__PURE__ */ t(
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
      !_ && /* @__PURE__ */ t("div", { className: "mt-7", children: [
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
              onClick: () => i("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Qt, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-lineSubtle", "aria-hidden": "true" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => i("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(Zt, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      _ && /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: ae,
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
                value: f,
                onChange: (C) => A(C.target.value),
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
                  value: S,
                  onChange: (C) => q(C.target.value.replace(/\D/g, "").slice(0, 6)),
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
                disabled: L > 0 || N || !f.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${L > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: L > 0 ? `${L}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: z,
                onChange: (C) => W(C.target.value),
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
                value: d,
                onChange: (C) => h(C.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${d.length > 0 && z !== d ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          d.length > 0 && z !== d && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: te,
              disabled: !f.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f) || !S.trim() || S.length < 6 || !z.trim() || z.length < 6 || z !== d,
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
              onClick: ae,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${B ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(Ke, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const Tn = (r, a) => {
  const i = Math.random() * r, s = Math.random() * a;
  return {
    x: i,
    y: s,
    baseX: i,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Jn({
  mode: r = "join-lab",
  onSendVerificationCode: a,
  onVerifyIdentity: i,
  onRegister: s,
  onEnterWorkspace: c,
  onNavigate: x
}) {
  const m = ee(null), l = ee(null), p = ee(null), [u, v] = w("email"), [N, b] = w(""), [B, M] = w(""), [P, k] = w(""), [j, _] = w(""), $ = r === "create-lab", [T, H] = w(""), [f, A] = w(""), [S, q] = w(!1), [z, W] = w(0), [d, h] = w(null);
  Z(() => {
    if (z <= 0) return;
    const C = window.setTimeout(() => W((F) => F - 1), 1e3);
    return () => clearTimeout(C);
  }, [z]), Z(
    () => () => {
      p.current !== null && window.clearTimeout(p.current);
    },
    []
  ), Z(() => {
    const C = m.current, F = l.current;
    if (!C || !F) return;
    const R = C.getContext("2d");
    if (!R) return;
    const fe = window.getComputedStyle(document.documentElement), Ce = fe.getPropertyValue("--chatui-color-auth-particle-active").trim(), ve = fe.getPropertyValue("--chatui-color-auth-particle-idle").trim(), be = fe.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let se = 0, n = 0, g = 0, D = window.devicePixelRatio || 1, O = [];
    const I = { x: -1e3, y: -1e3, radius: 120 }, Q = 150, ne = () => {
      const X = F.getBoundingClientRect();
      D = window.devicePixelRatio || 1, n = X.width, g = X.height, C.width = n * D, C.height = g * D, C.style.width = `${n}px`, C.style.height = `${g}px`, R.setTransform(D, 0, 0, D, 0, 0);
      const y = n < 768 ? 40 : 90;
      O = Array.from({ length: y }, () => Tn(n, g));
    }, re = (X) => {
      R.beginPath(), R.arc(X.x, X.y, X.size, 0, Math.PI * 2), R.closePath(), R.fill();
    }, de = () => {
      R.clearRect(0, 0, n, g);
      for (let X = 0; X < O.length; X += 1) {
        const y = O[X];
        y.x += y.vx, y.y += y.vy, (y.x < 0 || y.x > n) && (y.vx = -y.vx), (y.y < 0 || y.y > g) && (y.vy = -y.vy);
        const we = I.x - y.x, Ne = I.y - y.y, ke = Math.sqrt(we * we + Ne * Ne) || 1, De = we / ke, Fe = Ne / ke, Le = (I.radius - ke) / I.radius, He = De * Le * y.density, We = Fe * Le * y.density;
        ke < I.radius ? (y.x -= He * 0.5, y.y -= We * 0.5, R.fillStyle = Ce, y.size = Math.min(y.size + 0.1, 2.5)) : (y.x !== y.baseX && (y.x -= (y.x - y.baseX) / 50), y.y !== y.baseY && (y.y -= (y.y - y.baseY) / 50), R.fillStyle = ve, y.size = Math.max(y.size - 0.05, 1)), re(y);
        for (let ge = X; ge < O.length; ge += 1) {
          const Te = O[ge], Se = y.x - Te.x, Ae = y.y - Te.y, $e = Math.sqrt(Se * Se + Ae * Ae);
          if ($e < Q) {
            const Pe = (1 - $e / Q) * 0.4;
            R.beginPath(), R.strokeStyle = be, R.globalAlpha = Pe, R.lineWidth = 1, R.moveTo(y.x, y.y), R.lineTo(Te.x, Te.y), R.stroke(), R.globalAlpha = 1, R.closePath();
          }
        }
      }
      se = window.requestAnimationFrame(de);
    }, pe = (X) => {
      const y = F.getBoundingClientRect();
      I.x = X.clientX - y.left, I.y = X.clientY - y.top;
    }, he = () => {
      I.x = -1e3, I.y = -1e3;
    }, Me = (X) => {
      if (X.touches.length < 1) return;
      const y = F.getBoundingClientRect();
      I.x = X.touches[0].clientX - y.left, I.y = X.touches[0].clientY - y.top;
    };
    return ne(), de(), window.addEventListener("resize", ne), F.addEventListener("mousemove", pe), F.addEventListener("mouseleave", he), F.addEventListener("touchmove", Me, { passive: !0 }), F.addEventListener("touchend", he), () => {
      window.cancelAnimationFrame(se), window.removeEventListener("resize", ne), F.removeEventListener("mousemove", pe), F.removeEventListener("mouseleave", he), F.removeEventListener("touchmove", Me), F.removeEventListener("touchend", he);
    };
  }, []);
  const L = async () => {
    if (!(!N.trim() || z > 0)) {
      q(!0), h(null);
      try {
        const C = await a(N.trim());
        if (!C.ok) {
          h(C.message);
          return;
        }
        W(60);
      } catch {
        h("操作失败，请稍后重试。");
      } finally {
        q(!1);
      }
    }
  }, U = () => ({
    email: N.trim(),
    verificationCode: B.trim(),
    mode: r,
    ...$ ? { labName: j.trim() } : { inviteCode: P.trim() }
  }), ce = () => {
    const C = ["email", "password", "success"], F = C.indexOf(u);
    F < C.length - 1 && v(C[F + 1]);
  }, oe = K(() => {
    if (S) return !1;
    switch (u) {
      case "email":
        return $ ? N.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N) && B.trim().length >= 6 && j.trim().length > 0 : N.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N) && B.trim().length >= 6 && P.trim().length > 0;
      case "password":
        return T.trim().length >= 6 && T === f;
      default:
        return !1;
    }
  }, [u, N, B, P, j, $, T, f, S]), ue = async (C) => {
    if (C.preventDefault(), !!oe) {
      q(!0), h(null);
      try {
        const F = U(), R = u === "password" ? await s({ ...F, password: T }) : await i(F);
        if (!R.ok) {
          h(R.message);
          return;
        }
        ce();
      } catch {
        h("操作失败，请稍后重试。");
      } finally {
        q(!1);
      }
    }
  }, G = {
    email: $ ? "创建实验室" : "验证您的邮箱",
    password: "设置登录密码",
    success: ""
  }, J = {
    email: "",
    password: "",
    success: ""
  }, te = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", ae = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: l, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: m, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: G[u] }),
        J[u] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: J[u] })
      ] }),
      u !== "success" && /* @__PURE__ */ t("form", { onSubmit: ue, className: "space-y-5", children: [
        u === "email" && /* @__PURE__ */ t(ze, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: N,
                onChange: (C) => {
                  b(C.target.value), h(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: te
              }
            ),
            /* @__PURE__ */ e("span", { className: ae, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: B,
                  onChange: (C) => {
                    M(C.target.value.replace(/\D/g, "").slice(0, 6)), h(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "off",
                  maxLength: 6,
                  className: te
                }
              ),
              /* @__PURE__ */ e("span", { className: ae, children: "验证码" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: L,
                disabled: z > 0 || S,
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${z > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: z > 0 ? `${z}s后获取` : "获取验证码"
              }
            )
          ] }),
          $ ? /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: j,
                onChange: (C) => {
                  _(C.target.value), h(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: te
              }
            ),
            /* @__PURE__ */ e("span", { className: ae, children: "实验室名称" })
          ] }) : /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: P,
                onChange: (C) => {
                  k(C.target.value), h(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: te
              }
            ),
            /* @__PURE__ */ e("span", { className: ae, children: "邀请码" })
          ] })
        ] }),
        u === "password" && /* @__PURE__ */ t(ze, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: T,
                onChange: (C) => {
                  H(C.target.value), h(null);
                },
                required: !0,
                placeholder: " ",
                className: te
              }
            ),
            /* @__PURE__ */ e("span", { className: ae, children: "设置密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (C) => {
                  A(C.target.value), h(null);
                },
                required: !0,
                placeholder: " ",
                className: `${te} ${f.length > 0 && T !== f ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: ae, children: "确认密码" }),
            f.length > 0 && T !== f && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        d && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: d }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !oe,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: S ? "处理中..." : u === "password" ? "完成注册" : "下一步" }),
              S && /* @__PURE__ */ t(
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
      u === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
              p.current = window.setTimeout(c, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      u !== "success" && /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
        "已有账号？",
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => x("/login"),
            className: "ml-1 font-medium text-authLink transition-colors hover:text-primary",
            children: "返回登录"
          }
        )
      ] })
    ] }) })
  ] });
}
const Cn = (r, a) => {
  const i = Math.random() * r, s = Math.random() * a;
  return { x: i, y: s, baseX: i, baseY: s, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function ea({ onSendCode: r, onResetPassword: a, onBackToLogin: i }) {
  const s = ee(null), c = ee(null), x = ee(null), [m, l] = w("email"), [p, u] = w(""), [v, N] = w(""), [b, B] = w(""), [M, P] = w(""), [k, j] = w(!1), [_, $] = w(0), [T, H] = w(null);
  Z(() => {
    if (_ <= 0) return;
    const d = window.setTimeout(() => $((h) => h - 1), 1e3);
    return () => window.clearTimeout(d);
  }, [_]), Z(() => {
    const d = s.current, h = c.current;
    if (!d || !h) return;
    const L = d.getContext("2d");
    if (!L) return;
    const U = window.getComputedStyle(document.documentElement), ce = U.getPropertyValue("--chatui-color-auth-particle-active").trim(), oe = U.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ue = U.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let G = 0, J = 0, te = 0, ae = [];
    const C = { x: -1e3, y: -1e3, radius: 120 }, F = 150, R = () => {
      const se = h.getBoundingClientRect(), n = window.devicePixelRatio || 1;
      J = se.width, te = se.height, d.width = J * n, d.height = te * n, d.style.width = `${J}px`, d.style.height = `${te}px`, L.setTransform(n, 0, 0, n, 0, 0), ae = Array.from({ length: J < 768 ? 40 : 90 }, () => Cn(J, te));
    }, fe = () => {
      L.clearRect(0, 0, J, te);
      for (let se = 0; se < ae.length; se += 1) {
        const n = ae[se];
        n.x += n.vx, n.y += n.vy, (n.x < 0 || n.x > J) && (n.vx = -n.vx), (n.y < 0 || n.y > te) && (n.vy = -n.vy);
        const g = C.x - n.x, D = C.y - n.y, O = Math.sqrt(g * g + D * D) || 1, I = (C.radius - O) / C.radius;
        O < C.radius ? (n.x -= g / O * I * n.density * 0.5, n.y -= D / O * I * n.density * 0.5, L.fillStyle = ce, n.size = Math.min(n.size + 0.1, 2.5)) : (n.x -= (n.x - n.baseX) / 50, n.y -= (n.y - n.baseY) / 50, L.fillStyle = oe, n.size = Math.max(n.size - 0.05, 1)), L.beginPath(), L.arc(n.x, n.y, n.size, 0, Math.PI * 2), L.fill();
        for (let Q = se; Q < ae.length; Q += 1) {
          const ne = ae[Q], re = n.x - ne.x, de = n.y - ne.y, pe = Math.sqrt(re * re + de * de);
          pe >= F || (L.beginPath(), L.globalAlpha = (1 - pe / F) * 0.4, L.strokeStyle = ue, L.lineWidth = 1, L.moveTo(n.x, n.y), L.lineTo(ne.x, ne.y), L.stroke(), L.globalAlpha = 1);
        }
      }
      G = window.requestAnimationFrame(fe);
    }, Ce = (se) => {
      const n = h.getBoundingClientRect();
      C.x = se.clientX - n.left, C.y = se.clientY - n.top;
    }, ve = (se) => {
      if (!se.touches.length) return;
      const n = h.getBoundingClientRect();
      C.x = se.touches[0].clientX - n.left, C.y = se.touches[0].clientY - n.top;
    }, be = () => {
      C.x = -1e3, C.y = -1e3;
    };
    return R(), fe(), window.addEventListener("resize", R), h.addEventListener("mousemove", Ce), h.addEventListener("mouseleave", be), h.addEventListener("touchmove", ve, { passive: !0 }), h.addEventListener("touchend", be), () => {
      window.cancelAnimationFrame(G), window.removeEventListener("resize", R), h.removeEventListener("mousemove", Ce), h.removeEventListener("mouseleave", be), h.removeEventListener("touchmove", ve), h.removeEventListener("touchend", be);
    };
  }, []), Z(() => () => {
    x.current !== null && window.clearTimeout(x.current);
  }, []);
  const f = K(() => p.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && v.length >= 6 && b.length >= 6 && b === M, [M, p, b, v]), A = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", S = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: c, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: s, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      m === "email" ? /* @__PURE__ */ t(ze, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ t("form", { onSubmit: async (d) => {
          if (d.preventDefault(), !(!f || k)) {
            j(!0), H(null);
            try {
              const h = await a({ email: p.trim(), verificationCode: v, newPassword: b });
              if (!h.ok) {
                H(h.message);
                return;
              }
              l("success");
            } catch {
              H("密码重置失败，请稍后重试。");
            } finally {
              j(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "email", value: p, onChange: (d) => {
              u(d.target.value), H(null);
            }, required: !0, placeholder: " ", autoComplete: "off", className: A }),
            /* @__PURE__ */ e("span", { className: S, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "text", value: v, onChange: (d) => {
                N(d.target.value.replace(/\D/g, "").slice(0, 6)), H(null);
              }, required: !0, placeholder: " ", autoComplete: "off", maxLength: 6, className: A }),
              /* @__PURE__ */ e("span", { className: S, children: "验证码" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!p.trim() || _ > 0 || k)) {
                j(!0), H(null);
                try {
                  const d = await r(p.trim());
                  if (!d.ok) {
                    H(d.message);
                    return;
                  }
                  $(60);
                } catch {
                  H("验证码发送失败，请稍后重试。");
                } finally {
                  j(!1);
                }
              }
            }, disabled: _ > 0 || k, className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${_ > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: _ > 0 ? `${_}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: b, onChange: (d) => {
              B(d.target.value), H(null);
            }, required: !0, placeholder: " ", className: A }),
            /* @__PURE__ */ e("span", { className: S, children: "新密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: M, onChange: (d) => {
              P(d.target.value), H(null);
            }, required: !0, placeholder: " ", className: `${A} ${M.length > 0 && b !== M ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: S, children: "确认新密码" }),
            M.length > 0 && b !== M && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          T && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: T }),
          /* @__PURE__ */ t("button", { type: "submit", disabled: !f || k, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: k ? "处理中..." : "重置密码" }),
            k && /* @__PURE__ */ t("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => i(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
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
          x.current = window.setTimeout(() => i({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const bt = 10, gt = (r) => r.isTaskConversation === !0 || r.source === "task" || r.id.startsWith("task-") || typeof r.taskId == "string" && r.taskId.trim().length > 0;
function ta({
  currentPath: r,
  projects: a,
  initialChats: i,
  logoUrl: s,
  user: c,
  children: x,
  initialAiUsageWarningActive: m = !1,
  chatActions: l = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: p,
  onLogout: u,
  onChatsChange: v,
  onRenameChat: N,
  onTogglePinChat: b,
  onShareChat: B,
  onDeleteChat: M
}) {
  const [P, k] = w(!0), [j, _] = w(240), [$, T] = w(!1), H = ee(0), f = ee(240), [A, S] = w(() => {
    const o = { unassigned: !0 };
    return a.forEach((E) => {
      o[E.id] = !0;
    }), o;
  }), [q, z] = w(!1), [W, d] = w(() => [...i]), [h, L] = w(null), [U, ce] = w("time"), [oe, ue] = w(!1), [G, J] = w(null), [te, ae] = w(""), [C, F] = w(!1), [R, fe] = w(""), [Ce, ve] = w(!1), [be, se] = w(m), [n, g] = w(!1), D = ee(null), O = ee(null), I = ee(null), Q = !!(l.rename || l.share || l.pin || l.delete), ne = () => {
    z(!1), u();
  }, re = (o) => {
    S((E) => ({ ...E, [o]: !E[o] }));
  }, de = (o) => {
    var Y;
    d((V) => V.filter((ye) => ye.id !== o)), L(null), G === o && (J(null), ae("")), M == null || M(o), ((Y = r.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : Y[1]) === o && p("/chat/new", { replace: !0 });
  }, pe = (o) => {
    const E = W.find((V) => V.id === o);
    if (!E) return;
    const Y = !E.isPinned;
    d((V) => V.map(
      (Ee) => Ee.id === o ? { ...Ee, isPinned: Y } : Ee
    )), b == null || b(o, Y), L(null);
  }, he = (o) => {
    J(o.id), ae(o.title), L(null);
  }, Me = () => {
    J(null), ae("");
  }, X = (o) => {
    const E = te.trim();
    E && (d((Y) => Y.map((V) => V.id === o ? { ...V, title: E } : V)), N == null || N(o, E)), Me();
  }, y = (o, E) => {
    if (o.stopPropagation(), o.key === "Enter") {
      o.preventDefault(), X(E);
      return;
    }
    o.key === "Escape" && (o.preventDefault(), Me());
  }, we = (o) => {
    var E;
    if (G === o) {
      (E = D.current) == null || E.focus();
      return;
    }
    p(`/chat/${o}`);
  }, Ne = (o, E = !1) => G === o.id ? /* @__PURE__ */ t(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (V) => {
        var ye;
        V.stopPropagation(), (ye = D.current) == null || ye.focus();
      },
      children: [
        E && /* @__PURE__ */ e(st, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: D,
            value: te,
            onChange: (V) => ae(V.target.value),
            onKeyDown: (V) => y(V, o.id),
            onBlur: () => X(o.id),
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
    /* @__PURE__ */ e("span", { className: "truncate", children: o.title })
  ] }), ke = (o) => {
    H.current = o.clientX, f.current = j, T(!0);
  };
  Z(() => {
    if (!$) return;
    const o = 200, E = 440, Y = (ye) => {
      const Ee = ye.clientX - H.current, Rt = Math.min(E, Math.max(o, f.current + Ee));
      _(Rt);
    }, V = () => {
      T(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", Y), window.addEventListener("mouseup", V), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", Y), window.removeEventListener("mouseup", V);
    };
  }, [$, j]), Z(() => {
    P || _(240);
  }, [P]), Z(() => {
    v == null || v(W);
  }, [W, v]), Z(() => {
    d([...i]);
  }, [i]), Z(() => {
    if (!G) return;
    const o = window.requestAnimationFrame(() => {
      var E;
      (E = D.current) == null || E.focus();
    });
    return () => {
      window.cancelAnimationFrame(o);
    };
  }, [G]), Z(() => () => {
    O.current !== null && window.clearTimeout(O.current), I.current !== null && window.clearTimeout(I.current);
  }, []);
  const De = () => {
    ue(!0), O.current !== null && window.clearTimeout(O.current), O.current = window.setTimeout(() => {
      ue(!1);
    }, 600);
  }, Fe = () => {
    ve(!0), I.current !== null && window.clearTimeout(I.current), I.current = window.setTimeout(() => {
      ve(!1);
    }, 600);
  };
  Z(() => {
    be || g(!1);
  }, [be]);
  const Le = () => {
    g(!0), p("/ai-usage");
  }, He = K(() => [
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
  ], []), We = (o) => {
    if (z(!1), o.key === "skills") {
      p("/skills");
      return;
    }
    if (o.key === "ai-usage") {
      p("/ai-usage");
      return;
    }
    if (o.key === "members") {
      p("/members");
      return;
    }
    if (o.key === "system-settings") {
      p("/system-settings");
      return;
    }
    o.key === "logout" && ne();
  }, ge = K(() => l.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Tt, { size: 14 }), danger: !0 }] : [], [l.delete]), Te = (o) => {
    const E = [];
    return l.rename && E.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(ar, { size: 14 }) }), l.share && E.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(sr, { size: 14 }) }), l.pin && E.push({
      key: "pin",
      label: o.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(st, { size: 14 })
    }), E;
  }, Se = (o, E) => {
    const Y = gt(o);
    return !Q && !Y ? null : /* @__PURE__ */ t("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${Y ? "ml-6" : "ml-2"}`, children: [
      Y && !E && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Q && /* @__PURE__ */ e(
        Qe,
        {
          open: E,
          onOpenChange: (V) => L(V ? o.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, j - 56)),
          trigger: /* @__PURE__ */ e(nr, { size: 14 }),
          onTriggerClick: (V) => {
            V.stopPropagation();
          },
          items: Te(o),
          footerItems: ge,
          onItemClick: (V, ye) => {
            if (ye.stopPropagation(), V.key === "rename") {
              he(o);
              return;
            }
            if (V.key === "share") {
              B ? B(o.id) : p(`/chat/${o.id}?share=1`), L(null);
              return;
            }
            if (V.key === "pin") {
              pe(o.id);
              return;
            }
            if (V.key === "delete") {
              de(o.id);
              return;
            }
            L(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${E ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Ae = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(at, { size: 14 }),
      path: "/projects",
      isActive: r === "/projects" || r.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(Ct, { size: 14 }),
      path: "/tools",
      isActive: r === "/tools" || r.startsWith("/tool/")
    }
  ], $e = K(() => {
    const o = r.match(/^\/chat\/([^/]+)$/);
    return o ? W.find((E) => E.id === o[1]) ?? null : null;
  }, [W, r]), Pe = K(
    () => W.filter((o) => o.isPinned),
    [W]
  ), ct = K(
    () => W.filter((o) => !o.isPinned),
    [W]
  ), _e = K(
    () => U === "time" ? Pe.slice(0, bt) : Pe,
    [Pe, U]
  ), tt = K(() => {
    if (U !== "time") return [];
    const o = Math.max(bt - _e.length, 0);
    return ct.slice(0, o);
  }, [U, ct, _e.length]), Et = K(
    () => _e.length + tt.length,
    [_e.length, tt.length]
  ), Bt = U === "time" && W.length > Et, rt = K(() => new Map(a.map((o) => [o.id, o.name])), [a]), nt = R.trim().toLowerCase(), dt = K(() => nt ? W.filter((o) => {
    const E = o.projectId ? rt.get(o.projectId) ?? "未分组" : "未分组";
    return `${o.title} ${E} ${o.date}`.toLowerCase().includes(nt);
  }) : W, [W, nt, rt]);
  Z(() => {
    if (!$e) return;
    const o = $e.projectId ?? "unassigned";
    S((E) => E[o] !== !1 ? E : { ...E, [o]: !0 });
  }, [$e]);
  const jt = () => {
    fe(""), F(!0);
  }, _t = () => {
    F(!1), ve(!1), I.current !== null && (window.clearTimeout(I.current), I.current = null);
  }, It = (o) => {
    F(!1), p(`/chat/${o}`);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ t(
      "aside",
      {
        style: { width: P ? j : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${P ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: { width: j, minWidth: j },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ t("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ t("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => p("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: s, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => k(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(Jt, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => p("/chat/new"),
                    className: `nav-item ${r === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(er, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Ae.map((o) => {
                  const E = o.isActive;
                  return /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => p(o.path),
                      className: `nav-item ${E ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        o.icon,
                        /* @__PURE__ */ e("span", { children: o.label })
                      ]
                    },
                    o.path
                  );
                }) }),
                /* @__PURE__ */ t(
                  "div",
                  {
                    onScroll: De,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${oe ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      _e.length > 0 && /* @__PURE__ */ t("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: _e.map((o) => {
                          const E = r === `/chat/${o.id}`, Y = h === o.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => we(o.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${G === o.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Ne(o, U !== "time"),
                                G !== o.id && Se(o, Y)
                              ]
                            }
                          ) }, o.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      U === "project" && a.map((o) => {
                        const E = W.filter((V) => V.projectId === o.id && !V.isPinned), Y = A[o.id] !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => re(o.id),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(at, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: Y ? /* @__PURE__ */ e(Ye, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Oe, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: o.name })
                              ]
                            }
                          ),
                          Y && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: E.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : E.map((V) => {
                            const ye = r === `/chat/${V.id}`, Ee = h === V.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => we(V.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${G === V.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ye ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Ne(V),
                                  G !== V.id && Se(V, Ee)
                                ]
                              }
                            ) }, V.id);
                          }) })
                        ] }, o.id);
                      }),
                      U === "project" && (() => {
                        const o = W.filter((Y) => !Y.projectId && !Y.isPinned);
                        if (o.length === 0) return null;
                        const E = A.unassigned !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => re("unassigned"),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(at, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: E ? /* @__PURE__ */ e(Ye, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Oe, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          E && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: o.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : o.map((Y) => {
                            const V = r === `/chat/${Y.id}`, ye = h === Y.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => we(Y.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${G === Y.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : V ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Ne(Y),
                                  G !== Y.id && Se(Y, ye)
                                ]
                              }
                            ) }, Y.id);
                          }) })
                        ] });
                      })(),
                      U === "time" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
                        tt.map((o) => {
                          const E = r === `/chat/${o.id}`, Y = h === o.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => we(o.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${G === o.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : E ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Ne(o),
                                G !== o.id && Se(o, Y)
                              ]
                            }
                          ) }, o.id);
                        }),
                        Bt && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: jt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(Oe, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                be && !n && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(tr, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
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
                  Qe,
                  {
                    open: q,
                    onOpenChange: z,
                    placement: "top-start",
                    width: j - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ t("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ t("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: c.avatarUrl ? /* @__PURE__ */ e("img", { src: c.avatarUrl, alt: `${c.name}头像`, className: "h-full w-full object-cover" }) : c.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: c.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(rr, { size: 18 }) })
                    ] }),
                    items: He,
                    onItemClick: We,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          P && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: ke,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${P ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof x == "function" ? x({ isSidebarOpen: P, setIsSidebarOpen: k, chats: W, setChats: d, setAiUsageWarningActive: se }) : x }) }) }),
    /* @__PURE__ */ e(
      et,
      {
        visible: C,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: _t,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Re,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: R,
                onChange: (o) => fe(o.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          dt.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Fe,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Ce ? "is-scrolling is-scrolling-thin" : ""}`,
              children: dt.map((o) => {
                const E = o.projectId ? rt.get(o.projectId) ?? "未分组" : "未分组", Y = gt(o);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => It(o.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: o.title }),
                        Y && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: E }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: o.date })
                      ] })
                    ]
                  },
                  o.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e($t, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function ra({
  projects: r,
  selectedProjectId: a,
  disabled: i = !1,
  embedded: s = !1,
  isSidebarOpen: c = !0,
  skillOptions: x,
  fileOptions: m,
  onSelectProject: l,
  onCreateProject: p,
  onOpenSidebar: u,
  onSend: v
}) {
  const [N, b] = w(!1), [B, M] = w(!1), [P, k] = w(""), j = ee(null), _ = ee(null), $ = K(
    () => r.find((z) => z.id === a) ?? null,
    [r, a]
  ), T = K(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !$
    },
    ...r.map((z) => ({
      key: z.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: z.name }),
      active: ($ == null ? void 0 : $.id) === z.id
    }))
  ], [r, $]), H = K(() => p ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(ot, { size: 16 }) }] : [], [p]), f = () => {
    M(!1), k("");
  }, A = (z) => {
    if (z.key === "create") {
      M(!0), k("");
      return;
    }
    const W = z.key === "none" ? null : String(z.key);
    l(W), b(!1);
  }, S = () => {
    const z = P.trim();
    if (!z) return;
    const W = r.find(
      (d) => d.name.trim().toLowerCase() === z.toLowerCase()
    );
    W ? l(W.id) : p == null || p(z), f(), b(!1);
  };
  Z(() => {
    if (!B) return;
    const z = (W) => {
      var h, L;
      const d = W.target;
      (h = _.current) != null && h.contains(d) || (L = j.current) != null && L.contains(d) || (f(), b(!1));
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [B]);
  const q = /* @__PURE__ */ t("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ t("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: j, className: "relative", children: B && /* @__PURE__ */ e(
        "div",
        {
          ref: _,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                St,
                {
                  value: P,
                  onChange: (z) => k(z.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(je, { type: "secondary", size: "small", onClick: f, children: "取消" }),
              /* @__PURE__ */ e(
                je,
                {
                  type: "primary",
                  size: "small",
                  onClick: S,
                  disabled: !P.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        At,
        {
          onSend: v,
          disabled: i,
          skillOptions: x,
          fileOptions: m,
          leadingControls: /* @__PURE__ */ e(
            Qe,
            {
              open: N,
              onOpenChange: (z) => {
                !z && B || (b(z), z ? M(!1) : f());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: $ ? $.name : "工作项目" }),
                /* @__PURE__ */ e(Ye, { size: 14 })
              ] }),
              items: T,
              footerItems: H,
              onItemClick: A,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(Pt, { onSelect: v })
  ] });
  return s ? q : /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      dn,
      {
        isSidebarOpen: c,
        onOpenSidebar: u ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: q })
  ] });
}
const Sn = { low: "低风险", medium: "中风险" }, $n = { low: "bg-skillRiskLow text-primary", medium: "bg-skillRiskMedium text-warning" };
function na({ isSidebarOpen: r, skills: a, onOpenSidebar: i, onCreateSkill: s, onInstall: c, onUninstall: x }) {
  const [m, l] = w("installed"), [p, u] = w(""), [v, N] = w(!1), [b, B] = w([]), [M, P] = w(null), k = K(() => {
    const f = p.trim().toLowerCase();
    return a.filter((A) => m === "installed" !== A.installed ? !1 : f ? [A.name, A.source, A.description, ...A.tags].join(" ").toLowerCase().includes(f) : !0);
  }, [m, p, a]), j = (f) => {
    l(f), N(!1), B([]);
  }, _ = () => {
    N((f) => !f), B([]);
  }, $ = (f) => B((A) => A.includes(f) ? A.filter((S) => S !== f) : [...A, f]), T = (f) => f.installed ? x([f.id]) : c([f.id]), H = () => {
    b.length && (m === "installed" ? x(b) : c(b), B([]), N(!1));
  };
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !r && /* @__PURE__ */ e("button", { type: "button", onClick: i, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(kt, { size: 20 }) }),
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
          onClick: s,
          children: [
            /* @__PURE__ */ e(ot, { size: 14 }),
            "新建 Skill"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-auto px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${v ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Re, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: p, onChange: (f) => u(f.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-5", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => j("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => j("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ t("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: v, onChange: (f) => {
                N(f.target.checked), B([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        k.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", children: k.map((f) => {
          const A = b.includes(f.id), S = A ? "border-skillSelectedBorder bg-skillSelectedSurface" : M === f.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ t("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${S}`, onMouseEnter: () => P(f.id), onMouseLeave: () => P((q) => q === f.id ? null : q), children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: f.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: f.source })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${$n[f.riskLevel]}`, children: Sn[f.riskLevel] }),
                v && /* @__PURE__ */ e("button", { type: "button", onClick: () => $(f.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": A ? `取消选择 ${f.name}` : `选择 ${f.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${A ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: f.description }),
            /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: f.tags.map((q) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: q }, `${f.id}-${q}`)) }),
              !v && /* @__PURE__ */ e("button", { type: "button", onClick: () => T(f), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${M === f.id ? "inline-flex" : "hidden"} ${f.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: f.installed ? "卸载" : "安装" })
            ] })
          ] }, f.id);
        }) }) : /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" })
      ] })
    ] }) }),
    v && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ t("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ t("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        b.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: _, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: H, disabled: !b.length, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: m === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  ta as A,
  Ur as B,
  vn as C,
  Wn as D,
  Hn as E,
  ea as F,
  wn as G,
  Kn as H,
  At as I,
  Gn as J,
  yn as K,
  Zn as L,
  zt as M,
  gn as N,
  Pt as Q,
  Jn as R,
  na as S,
  Lt as T,
  Qe as a,
  je as b,
  Rn as c,
  Yr as d,
  et as e,
  St as f,
  $t as g,
  Gr as h,
  Xr as i,
  In as j,
  Er as k,
  hn as l,
  Nn as m,
  Qn as n,
  xn as o,
  Yn as p,
  On as q,
  Dn as r,
  cn as s,
  ra as t,
  Vn as u,
  Xn as v,
  qn as w,
  Un as x,
  Fn as y,
  dn as z
};
