import { jsxs as t, Fragment as We, jsx as e } from "react/jsx-runtime";
import De, { useMemo as be, useState as v, useRef as ue, useCallback as Me, useEffect as ge, useLayoutEffect as Lt, forwardRef as Ft, useId as ar } from "react";
import $e from "classnames";
import { Check as Je, Copy as mt, RefreshCcw as lr, ThumbsUp as or, ThumbsDown as ir, FileText as ht, LoaderCircle as Ht, Puzzle as qt, AtSign as Wt, AlertCircle as cr, Paperclip as Ut, ArrowRight as Vt, Sparkles as dr, Loader2 as ot, ChevronDown as ct, ChevronRight as it, Search as Ze, Globe as ur, BookOpen as mr, Menu as Ot, Upload as hr, Trash2 as Xt, CheckCircle2 as nt, Clock3 as Tt, SearchX as pr, FlaskConical as fr, X as rt, Plus as Ct, Square as xr, Send as br, UserPlus as gr, Building2 as yr, Folder as ft, PanelLeftClose as vr, SquarePen as wr, AlertTriangle as Nr, Settings as kr, Pin as xt, MoreHorizontal as Tr, Pencil as Cr, Share2 as Sr } from "lucide-react";
import Kt from "react-markdown";
import Gt from "remark-gfm";
import Mr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as $r } from "react-dom";
import { Crepe as bt } from "@milkdown/crepe";
import { editorViewCtx as gt, commandsCtx as Lr } from "@milkdown/kit/core";
import { lift as zr } from "@milkdown/kit/prose/commands";
import { wrapInList as Ar, liftListItem as Pr } from "@milkdown/kit/prose/schema-list";
import { TextSelection as zt } from "@milkdown/kit/prose/state";
import { orderedListSchema as Er, bulletListSchema as Br, listItemSchema as yt, paragraphSchema as _r, setBlockTypeCommand as Ir } from "@milkdown/kit/preset/commonmark";
const jr = "_button_3tg6r_1", Rr = "_primary_3tg6r_5", Dr = "_disabled_3tg6r_9", Fr = "_secondary_3tg6r_17", Hr = "_ghost_3tg6r_25", qr = "_danger_3tg6r_33", Wr = "_small_3tg6r_41", Ur = "_medium_3tg6r_45", Vr = "_large_3tg6r_49", Or = "_roundedSquare_3tg6r_53", Xr = "_roundedSmall_3tg6r_57", Kr = "_roundedMedium_3tg6r_61", Gr = "_roundedLarge_3tg6r_62", Yr = "_roundedFull_3tg6r_66", Qr = "_loadingSpinner_3tg6r_67", Zr = "_loading_3tg6r_67", Jr = "_fullWidth_3tg6r_90", en = "_icon_3tg6r_94", je = {
  button: jr,
  primary: Rr,
  disabled: Dr,
  secondary: Fr,
  ghost: Hr,
  danger: qr,
  small: Wr,
  medium: Ur,
  large: Vr,
  roundedSquare: Or,
  roundedSmall: Xr,
  roundedMedium: Kr,
  roundedLarge: Gr,
  roundedFull: Yr,
  loadingSpinner: Qr,
  loading: Zr,
  fullWidth: Jr,
  icon: en
}, tn = {
  primary: je.primary,
  secondary: je.secondary,
  ghost: je.ghost,
  danger: je.danger
}, rn = {
  small: je.small,
  medium: je.medium,
  large: je.large
}, nn = {
  square: je.roundedSquare,
  small: je.roundedSmall,
  medium: je.roundedMedium,
  large: je.roundedLarge,
  full: je.roundedFull
}, Ue = De.forwardRef(
  ({
    type: r = "primary",
    size: n = "medium",
    isLoading: o,
    loading: s,
    disabled: c = !1,
    children: f,
    icon: p,
    iconPosition: x = "left",
    className: y,
    fullWidth: h = !1,
    rounded: w = "medium",
    onClick: b,
    ...k
  }, j) => {
    const E = o ?? s ?? !1, P = c || E, $ = be(() => E ? /* @__PURE__ */ t(We, { children: [
      /* @__PURE__ */ e("span", { className: je.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: f })
    ] }) : p ? /* @__PURE__ */ t(We, { children: [
      x === "left" && /* @__PURE__ */ e("span", { className: je.icon, children: p }),
      f && /* @__PURE__ */ e("span", { children: f }),
      x === "right" && /* @__PURE__ */ e("span", { className: je.icon, children: p })
    ] }) : f, [f, E, p, x]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: j,
        className: $e(
          je.button,
          tn[r],
          rn[n],
          nn[w],
          {
            [je.fullWidth]: h,
            [je.loading]: E,
            [je.disabled]: P
          },
          y
        ),
        disabled: P,
        onClick: b,
        ...k,
        children: $
      }
    );
  }
);
Ue.displayName = "BaseButton";
const sn = { small: "h-8", medium: "h-9", large: "h-14" }, Yt = De.forwardRef(
  ({
    type: r = "text",
    placeholder: n,
    value: o,
    defaultValue: s,
    disabled: c = !1,
    readOnly: f = !1,
    error: p = !1,
    size: x = "medium",
    prefix: y,
    suffix: h,
    prefixIcon: w,
    suffixIcon: b,
    onChange: k,
    onFocus: j,
    onBlur: E,
    onClear: P,
    className: $,
    containerClassName: B,
    clearable: W = !1,
    label: A,
    helperText: M,
    ...R
  }, D) => {
    const [C, T] = v(!1), K = ue(null), z = Me((d) => {
      K.current = d, typeof D == "function" ? D(d) : D && (D.current = d);
    }, [D]), S = Me(() => {
      var a, m;
      const d = K.current;
      d && ((m = (a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : a.set) == null || m.call(d, ""), d.dispatchEvent(new Event("input", { bubbles: !0 })), d.focus(), P == null || P());
    }, [P]), U = be(
      () => {
        var d;
        return W && C && String(o ?? ((d = K.current) == null ? void 0 : d.value) ?? "").length > 0;
      },
      [W, C, o]
    );
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      A && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: A }),
      /* @__PURE__ */ t(
        "div",
        {
          className: $e(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            sn[x],
            !c && !p && "hover:border-controlBorder",
            C && !c && !p && "border-primary ring-2 ring-brandFocus",
            p && "border-danger",
            p && C && "ring-2 ring-dangerFocus",
            c && "cursor-not-allowed bg-surfaceMuted",
            B
          ),
          children: [
            (y || w) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: y || w }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: z,
                type: r,
                placeholder: n,
                value: o,
                defaultValue: s,
                disabled: c,
                readOnly: f,
                className: $e("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", $),
                onFocus: (d) => {
                  T(!0), j == null || j(d);
                },
                onBlur: (d) => {
                  T(!1), E == null || E(d);
                },
                onChange: k,
                ...R
              }
            ),
            /* @__PURE__ */ t("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              U && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (d) => d.preventDefault(), onClick: S, "aria-label": "清空", children: "✕" }),
              h || b
            ] })
          ]
        }
      ),
      M && /* @__PURE__ */ e("div", { className: $e("text-xs leading-6", p ? "text-danger" : "text-mutedText"), children: M })
    ] });
  }
);
Yt.displayName = "BaseInput";
const an = { small: "h-8", medium: "h-9", large: "h-14" }, ln = De.forwardRef(
  ({ options: r = [], value: n, defaultValue: o, placeholder: s, disabled: c = !1, error: f = !1, size: p = "medium", label: x, helperText: y, onChange: h, className: w, ...b }, k) => {
    const j = Me((E) => {
      const P = E.target.value, $ = r.find((B) => String(B.value) === P);
      h == null || h(P === "" ? "" : ($ == null ? void 0 : $.value) ?? P);
    }, [h, r]);
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      x && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: x }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          "select",
          {
            ref: k,
            className: $e(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              f && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              an[p],
              w
            ),
            value: n ?? o ?? "",
            disabled: c,
            onChange: j,
            ...b,
            children: [
              s && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: s }),
              r.map((E) => /* @__PURE__ */ e("option", { value: E.value, disabled: E.disabled, children: E.label }, E.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      y && /* @__PURE__ */ e("div", { className: $e("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: y })
    ] });
  }
);
ln.displayName = "BaseSelect";
const on = "_container_ykn59_1", cn = "_item_ykn59_10", dn = "_itemActive_ykn59_27", un = "_itemDisabled_ykn59_27", mn = "_sizeSmall_ykn59_43", hn = "_sizeMiddle_ykn59_49", pn = "_sizeLarge_ykn59_55", Ye = {
  container: on,
  item: cn,
  itemActive: dn,
  itemDisabled: un,
  sizeSmall: mn,
  sizeMiddle: hn,
  sizeLarge: pn
}, fn = {
  small: Ye.sizeSmall,
  middle: Ye.sizeMiddle,
  large: Ye.sizeLarge
};
function Ps({
  options: r,
  value: n,
  defaultValue: o,
  onChange: s,
  size: c = "middle",
  disabled: f = !1,
  className: p
}) {
  var b;
  const [x, y] = v(
    o ?? ((b = r[0]) == null ? void 0 : b.value) ?? ""
  ), h = n ?? x, w = (k) => {
    f || (n === void 0 && y(k), s == null || s(k));
  };
  return /* @__PURE__ */ e("div", { className: $e(Ye.container, fn[c], p), children: r.map((k) => {
    const j = h === k.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: $e(Ye.item, j && Ye.itemActive, f && Ye.itemDisabled),
        onClick: () => w(k.value),
        disabled: f,
        "aria-pressed": j,
        children: k.label
      },
      k.value
    );
  }) });
}
const xn = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(0)} KB` : `${(r / (1024 * 1024)).toFixed(0)} MB`, bn = De.forwardRef(
  ({ accept: r, multiple: n = !1, disabled: o = !1, onChange: s, onError: c, maxSize: f, children: p, className: x, dragable: y = !0, placeholderTitle: h, placeholderDescription: w, placeholderIcon: b, maxCount: k }, j) => {
    const E = ue(null), [P, $] = v(!1), B = Me((A) => {
      if (k && A.length > k) {
        c == null || c(new Error(`单次最多上传 ${k} 个文件`));
        return;
      }
      if (f) {
        for (const M of Array.from(A))
          if (M.size > f) {
            c == null || c(new Error(`文件“${M.name}”超过大小限制（${xn(f)}）`));
            return;
          }
      }
      s == null || s(A);
    }, [k, f, s, c]), W = () => {
      var A;
      o || (A = E.current) == null || A.click();
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: j,
        className: $e(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          P && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          x
        ),
        onClick: W,
        onKeyDown: (A) => {
          !o && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), W());
        },
        onDragOver: (A) => {
          y && !o && (A.preventDefault(), $(!0));
        },
        onDragLeave: () => $(!1),
        onDrop: (A) => {
          y && !o && (A.preventDefault(), $(!1), B(A.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: E, type: "file", accept: r, multiple: n, disabled: o, onChange: (A) => A.target.files && B(A.target.files), className: "hidden" }),
          p || /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: b ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: h ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: w ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
bn.displayName = "BaseUpload";
const gn = "_maskAnimation_1h49h_1", yn = "_modalAnimation_1h49h_5", At = {
  maskAnimation: gn,
  modalAnimation: yn
}, St = ({
  visible: r,
  open: n = r,
  show: o = n,
  title: s,
  width: c = 520,
  centered: f = !0,
  destroyOnClose: p = !1,
  mask: x = !0,
  maskClosable: y = !0,
  okText: h = "确认",
  cancelText: w = "取消",
  confirmLoading: b = !1,
  okButtonProps: k,
  cancelButtonProps: j,
  onConfirm: E,
  onCancel: P,
  onClose: $,
  onOk: B,
  onDismiss: W,
  children: A,
  footer: M,
  className: R,
  bodyClassName: D
}) => {
  const C = o ?? !1, T = Me(async () => {
    try {
      E ? await E() : B && await B();
    } catch (S) {
      console.error("Modal confirm error:", S);
    }
  }, [E, B]), K = Me(() => {
    P ? P() : $ ? $() : W == null || W();
  }, [P, $, W]), z = be(() => {
    if (M === null) return null;
    if (M) return M;
    const { type: S, ...U } = j ?? {}, { type: d, ...a } = k ?? {};
    return /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Ue, { type: "secondary", size: "medium", onClick: K, ...U, children: w }),
      /* @__PURE__ */ e(Ue, { type: "primary", size: "medium", isLoading: b, onClick: T, ...a, children: b ? "加载中..." : h })
    ] });
  }, [j, w, b, M, K, T, k, h]);
  return !C && p || !C ? null : /* @__PURE__ */ t(We, { children: [
    x && /* @__PURE__ */ e("div", { className: $e("fixed inset-0 z-[1000] bg-overlayMask", At.maskAnimation), onClick: () => y && K(), role: "presentation" }),
    /* @__PURE__ */ t(
      "div",
      {
        className: $e(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          f && "left-1/2 top-1/2",
          At.modalAnimation,
          R
        ),
        style: { width: c },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          s && /* @__PURE__ */ t("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: s }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: K, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: $e("min-h-20 p-5 text-primaryText", D), children: A }),
          z
        ]
      }
    )
  ] });
};
St.displayName = "BaseModal";
const vn = ({ title: r, extra: n, children: o, hoverable: s = !1, loading: c = !1, bordered: f = !0, className: p, bodyClassName: x, onClick: y }) => /* @__PURE__ */ t(
  "div",
  {
    className: $e(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      f && "border border-borderGray",
      s && "cursor-pointer hover:border-borderGray hover:shadow-md",
      c && "pointer-events-none opacity-60",
      p
    ),
    onClick: y,
    children: [
      (r || n) && /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        r && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: r }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: $e("p-4 text-primaryText", (r || n) && "pt-1", x), children: o })
    ]
  }
);
vn.displayName = "BaseCard";
const wn = ({ columns: r, dataSource: n = [], rowKey: o = "id", loading: s = !1, bordered: c = !0, striped: f = !0, className: p, onRow: x }, y) => /* @__PURE__ */ t("div", { ref: y, className: $e("relative w-full overflow-x-auto bg-surface", p), children: [
  /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: c ? "border-b border-lineSubtle" : void 0, children: r.map((h) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: h.width, textAlign: h.align }, children: h.title }, h.key || String(h.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: r.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((h, w) => {
      const b = String(typeof o == "string" ? h[o] ?? w : w);
      return /* @__PURE__ */ e("tr", { className: $e(c && "border-b border-lineSoft last:border-b-0", f && "odd:bg-surface"), ...(x == null ? void 0 : x(h, w)) || {}, children: r.map((k) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: k.align }, children: k.render ? k.render(h[k.dataIndex], h, w) : String(h[k.dataIndex] ?? "") }, k.key || String(k.dataIndex))) }, b);
    }) })
  ] }),
  s && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Es = De.forwardRef(wn), Nn = ({ current: r = 1, pageSize: n = 10, total: o = 0, onChange: s, showSizeChanger: c = !1, pageSizeOptions: f = [10, 20, 50, 100], onShowSizeChange: p, disabled: x = !1, className: y }) => {
  const h = be(() => Math.ceil(o / n) || 1, [n, o]), w = Me((k) => p == null ? void 0 : p(1, Number(k.target.value)), [p]), b = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ t("div", { className: $e("flex flex-wrap items-center justify-center gap-4 p-4", y), children: [
    /* @__PURE__ */ e("button", { type: "button", className: b, onClick: () => r > 1 && (s == null ? void 0 : s(r - 1)), disabled: x || r <= 1, children: "← 上一页" }),
    /* @__PURE__ */ t("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      r,
      " / ",
      h,
      " 页，共 ",
      o,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: b, onClick: () => r < h && (s == null ? void 0 : s(r + 1)), disabled: x || r >= h, children: "下一页 →" }),
    c && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: w, disabled: x, children: f.map((k) => /* @__PURE__ */ t("option", { value: k, children: [
      k,
      " 条/页"
    ] }, k)) })
  ] });
};
Nn.displayName = "BasePagination";
const Mt = ({ description: r = "暂无数据", image: n, children: o }) => /* @__PURE__ */ t("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  r && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: r }),
  o
] });
Mt.displayName = "BaseEmpty";
const dt = ({ trigger: r, items: n, footerItems: o = [], open: s = !1, onOpenChange: c, onTriggerClick: f, onItemClick: p, placement: x = "bottom-start", width: y, portal: h = !1, className: w, triggerClassName: b, menuClassName: k, listClassName: j, footerClassName: E }) => {
  const P = ue(null), $ = ue(null), [B, W] = v({}), A = x.endsWith("end"), M = x.startsWith("top");
  ge(() => {
    if (!s || !h || !P.current) return;
    const T = P.current.getBoundingClientRect();
    W({ position: "fixed", left: A ? T.right : T.left, top: M ? T.top : T.bottom, transform: A ? "translateX(-100%)" : void 0 });
  }, [M, A, s, h, x]), ge(() => {
    !s || !h || !M || !$.current || W((T) => ({ ...T, top: Number(T.top) - $.current.offsetHeight - 8 }));
  }, [M, s, h]), ge(() => {
    if (!s || !c) return;
    const T = (K) => {
      var S, U;
      const z = K.target;
      (S = P.current) != null && S.contains(z) || (U = $.current) != null && U.contains(z) || c(!1);
    };
    return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
  }, [c, s]);
  const R = be(() => y ? { width: typeof y == "number" ? `${y}px` : y } : void 0, [y]), D = Me((T) => /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: $e(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !T.danger && !T.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !T.danger && T.active && "bg-primary-soft font-medium text-primary",
        T.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (K) => p == null ? void 0 : p(T, K),
      disabled: T.disabled,
      children: [
        T.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: T.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: T.label })
      ]
    },
    T.key
  ), [p]), C = s ? /* @__PURE__ */ t(
    "div",
    {
      ref: $,
      className: $e(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !h && "absolute",
        !h && !M && "top-[calc(100%+8px)]",
        !h && M && "bottom-[calc(100%+8px)]",
        !h && A ? "right-0" : h ? void 0 : "left-0",
        k
      ),
      style: h ? { ...B, ...R } : R,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: $e("flex min-h-0 flex-col gap-1", j), children: n.map(D) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: $e("flex flex-col gap-1 border-t border-lineSoft pt-2", E), children: o.map(D) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ t("div", { ref: P, className: $e("relative inline-block", w), children: [
    /* @__PURE__ */ e("button", { type: "button", className: $e("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", b), onClick: (T) => {
      f == null || f(T), c == null || c(!s);
    }, "aria-haspopup": "menu", "aria-expanded": s, children: r }),
    h ? C && $r(C, document.body) : C
  ] });
};
dt.displayName = "BaseActionMenu";
const kn = ({
  markdownContent: r,
  onRefresh: n,
  feedback: o,
  onFeedback: s,
  disabled: c = !1
}) => {
  const [f, p] = v(!1), x = !!(n || s), y = Me(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), p(!0), window.setTimeout(() => p(!1), 1200);
      } catch {
      }
  }, [r]);
  return /* @__PURE__ */ t(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${x ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: y,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: f ? "已复制 Markdown" : "复制 Markdown",
            children: f ? /* @__PURE__ */ e(Je, { size: 15 }) : /* @__PURE__ */ e(mt, { size: 15 })
          }
        ),
        n && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n,
            disabled: c,
            className: "h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50",
            title: "重新生成",
            children: /* @__PURE__ */ e(lr, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ t(We, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(or, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${o === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(ir, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, Tn = De.memo(kn);
function Cn({ draft: r, onConfirm: n }) {
  const o = r.status === "saving", s = r.status === "saved", c = o || s || !n;
  return /* @__PURE__ */ t("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ t("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(ht, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Mira 文档草稿" }),
        /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: r.title }),
        r.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: r.summary })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: s ? "已保存到项目" : `保存到 ${r.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ e(
        Ue,
        {
          type: s ? "secondary" : "primary",
          size: "small",
          disabled: c,
          onClick: () => n == null ? void 0 : n(r.actionKey),
          children: o ? /* @__PURE__ */ t(We, { children: [
            /* @__PURE__ */ e(Ht, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
            "保存中"
          ] }) : s ? /* @__PURE__ */ t(We, { children: [
            /* @__PURE__ */ e(Je, { size: 14, "aria-hidden": "true" }),
            "已保存"
          ] }) : "确认保存"
        }
      )
    ] }),
    r.status === "error" && r.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: r.errorMessage })
  ] });
}
const Pt = "[[PAPER_LIST_JSON]]";
let Et = !1, st = null, at = null, lt = null;
const Sn = async () => (at || (at = Promise.all([import("remark-math"), import("rehype-katex")]).then(([r, n]) => ({
  remark: r.default,
  rehype: n.default
})).catch((r) => {
  throw at = null, r;
})), at), Mn = async () => (lt || (lt = import("remark-emoji").then((r) => r.default).catch(() => (lt = null, null))), lt), $n = async () => {
  st || (st = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw st = null, n;
  }));
  const r = await st;
  if (!Et) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    r.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), Et = !0;
  }
  return r;
}, ut = (r) => typeof r == "string" || typeof r == "number" ? String(r) : Array.isArray(r) ? r.map((n) => ut(n)).join("") : De.isValidElement(r) ? ut(r.props.children) : "", Bt = (r) => {
  const n = r.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, Ln = ({ href: r, label: n }) => {
  const o = be(() => {
    const s = n.trim();
    if (s) return s;
    try {
      const f = new URL(r, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (f) return decodeURIComponent(f);
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
        children: /* @__PURE__ */ e(Vt, { size: 14 })
      }
    )
  ] });
}, zn = ({ language: r, rawCode: n, className: o, children: s }) => {
  const [c, f] = v(!1), p = Me(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), f(!0), window.setTimeout(() => f(!1), 1200);
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
          className: `code-block-copy-btn ${c ? "copied" : ""}`,
          title: c ? "已复制代码" : "复制代码",
          children: [
            c ? /* @__PURE__ */ e(Je, { size: 12 }) : /* @__PURE__ */ e(mt, { size: 12 }),
            c ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${o ?? ""}`.trim(), children: s }) })
  ] });
}, An = ({ rawCode: r }) => {
  const [n, o] = v(!1), s = Me(async () => {
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
          onClick: s,
          className: `code-block-copy-btn ${n ? "copied" : ""}`,
          title: n ? "已复制图表代码" : "复制图表代码",
          children: [
            n ? /* @__PURE__ */ e(Je, { size: 12 }) : /* @__PURE__ */ e(mt, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: r }) })
  ] });
}, Qt = (r) => {
  const n = typeof r.title == "string" ? r.title.trim() : "", o = typeof r.pmid == "string" ? r.pmid.trim() : "", s = typeof r.doi == "string" ? r.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !o || !s ? null : { title: n, pmid: o, doi: s };
}, _t = (r) => {
  const n = r.replace(/\r/g, "").split(`
`).map((s) => s.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const o = [];
  return n.forEach((s, c) => {
    var b;
    const f = s.match(/PMID\s*[:：]\s*(\d{4,})/i), p = s.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!f || !p) return;
    const x = s.slice(0, f.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), y = ((b = n[c - 1]) == null ? void 0 : b.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", w = Qt({
      title: x || y,
      pmid: f[1],
      doi: p[1]
    });
    w && o.push(w);
  }), o.length === 0 ? null : { items: o };
}, Pn = (r) => {
  if (!r.startsWith(Pt))
    return _t(r);
  const n = r.slice(Pt.length).trim();
  if (!n) return null;
  try {
    const o = JSON.parse(n);
    if (!Array.isArray(o.items)) return null;
    const s = o.items.map((c) => Qt(c)).filter((c) => c !== null);
    return s.length === 0 ? null : { items: s };
  } catch {
    return _t(n);
  }
}, Zt = ({
  msg: r,
  actionKey: n,
  feedback: o,
  onFeedback: s,
  onRefresh: c,
  onConfirmMiraDraft: f,
  isTyping: p = !1,
  isStreaming: x
}) => {
  var S, U;
  const y = r.role === "user", h = x ?? p, w = ue(null), [b, k] = v(null), [j, E] = v(null), [P, $] = v(null), [B, W] = v(!1), A = be(() => /```\s*mermaid/i.test(r.content), [r.content]), M = be(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(r.content), [r.content]), R = be(() => /:[a-zA-Z0-9_+-]+:/.test(r.content), [r.content]), D = be(
    () => y ? null : Pn(r.content),
    [y, r.content]
  ), C = !!(D && D.items.length > 0);
  ge(() => {
    if (!M || b || j) return;
    let d = !1;
    return Sn().then((a) => {
      d || (k(() => a.remark), E(() => a.rehype));
    }).catch(() => {
    }), () => {
      d = !0;
    };
  }, [M, b, j]), ge(() => {
    if (!R || B) return;
    let d = !1;
    return Mn().then((a) => {
      d || (a && $(() => a), W(!0));
    }), () => {
      d = !0;
    };
  }, [R, B]);
  const T = be(() => {
    const d = [Gt];
    return P && d.push(P), b && d.push(b), d;
  }, [P, b]), K = be(() => {
    const d = [Mr];
    return j && d.push(j), d;
  }, [j]), z = be(
    () => ({
      table: ({ node: d, ...a }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...a }) }),
      tr: ({ node: d, ...a }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...a }),
      th: ({ node: d, ...a }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...a
        }
      ),
      td: ({ node: d, ...a }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...a }),
      blockquote: ({ node: d, ...a }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...a
        }
      ),
      input: ({ node: d, type: a, checked: m, ...L }) => a === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!m,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...L
        }
      ) : /* @__PURE__ */ e("input", { type: a, ...L }),
      section: ({ node: d, ...a }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...a }),
      p: ({ node: d, children: a, ...m }) => {
        const L = De.Children.toArray(a);
        if (L.length === 1 && De.isValidElement(L[0])) {
          const O = L[0];
          if (typeof O.props.href == "string" && Bt(O.props.href)) {
            const q = ut(O.props.children).trim();
            return /* @__PURE__ */ e(Ln, { href: O.props.href, label: q });
          }
        }
        return /* @__PURE__ */ e("p", { ...m, children: a });
      },
      a: ({ node: d, href: a, ...m }) => {
        const L = a ?? "", O = /^https?:\/\/(dx\.)?doi\.org\//i.test(L) || /^doi:/i.test(L), q = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(L) || /\/pmc\/|\/pmid\//i.test(L), te = Bt(L);
        return O || q || te ? /* @__PURE__ */ e(
          "a",
          {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...m
          }
        ) : /* @__PURE__ */ e("a", { href: a, target: "_blank", rel: "noreferrer", ...m });
      },
      pre({ children: d, ...a }) {
        const m = De.Children.toArray(d).find(
          (we) => De.isValidElement(we) && typeof we.props.className == "string" && we.props.className.includes("language-")
        );
        if (!m)
          return /* @__PURE__ */ e("pre", { ...a, children: d });
        const L = m.props.className ?? "", O = L.match(/language-([\w-]+)/), q = O ? O[1].toLowerCase() : "code", te = ut(m.props.children).replace(/\n$/, "");
        return q === "mermaid" ? /* @__PURE__ */ e(An, { rawCode: te }) : /* @__PURE__ */ e(zn, { language: q, rawCode: te, className: L, children: m.props.children });
      },
      code({ children: d, className: a, ...m }) {
        return a ? /* @__PURE__ */ e("code", { className: a, ...m, children: d }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...m,
            children: d
          }
        );
      }
    }),
    []
  );
  return ge(() => {
    if (y || h || !A) return;
    const d = w.current;
    if (!d) return;
    const a = Array.from(d.querySelectorAll(".mermaid")).filter(
      (m) => m.dataset.processed !== "true"
    );
    a.length !== 0 && $n().then(async (m) => {
      await Promise.all(
        a.map(async (L, O) => {
          var Ce;
          const q = (Ce = L.textContent) == null ? void 0 : Ce.trim();
          if (!q) return;
          const te = `mermaid-${Date.now()}-${O}`, { svg: we } = await m.render(te, q);
          L.innerHTML = we, L.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [y, h, A, r.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${y ? "justify-end" : "justify-start"}`, children: y ? /* @__PURE__ */ t("div", { className: "message-bubble-user", children: [
    (r.references && r.references.length > 0 || r.attachments && r.attachments.length > 0) && /* @__PURE__ */ t("div", { className: "mb-2 flex flex-wrap gap-2", children: [
      (S = r.references) == null ? void 0 : S.map((d) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${d.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
          children: [
            d.type === "skill" ? /* @__PURE__ */ e(qt, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(Wt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: d.label, children: d.label })
          ]
        },
        d.id
      )),
      (U = r.attachments) == null ? void 0 : U.map((d) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${d.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
          role: d.status === "error" ? "alert" : void 0,
          title: d.errorMessage,
          children: [
            d.status === "uploading" ? /* @__PURE__ */ e(Ht, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : d.status === "error" ? /* @__PURE__ */ e(cr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : d.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: d.previewUrl, alt: d.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Ut, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
    C && D ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: D.items.map((d, a) => /* @__PURE__ */ t(
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
              children: /* @__PURE__ */ e(Vt, { size: 14 })
            }
          )
        ]
      },
      `${d.pmid}-${a}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: w,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Kt,
          {
            remarkPlugins: T,
            rehypePlugins: K,
            components: z,
            children: r.content
          }
        )
      }
    ),
    r.miraDraft && /* @__PURE__ */ e(Cn, { draft: r.miraDraft, onConfirm: f }),
    !C && r.content && !h && /* @__PURE__ */ e(
      Tn,
      {
        markdownContent: r.content,
        onRefresh: c,
        feedback: o,
        onFeedback: n && s ? (d) => s(n, d) : void 0,
        disabled: h
      }
    )
  ] }) }) });
}, En = De.memo(Zt), Bn = {
  thinking: "思考中…",
  analyzing: "分析中…",
  searching: "搜索中…",
  executing: "执行中…",
  generating: "生成中…"
}, It = {
  knowledge: {
    icon: /* @__PURE__ */ e(mr, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(ur, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Ze, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, kt = ({
  phase: r,
  searchSteps: n = [],
  defaultExpanded: o = !0
}) => {
  const [s, c] = v(o), f = ue(null);
  ge(() => {
    n.length > 0 && c(!0);
  }, [n.length]);
  const p = n.length > 0;
  return /* @__PURE__ */ t("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: r === "generating" ? /* @__PURE__ */ e(dr, { size: 14, className: "text-primary animate-pulse" }) : /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin text-primary" }) }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: Bn[r] }),
      p && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => c((x) => !x),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            s ? /* @__PURE__ */ e(ct, { size: 12 }) : /* @__PURE__ */ e(it, { size: 12 }),
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
        ref: f,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${s ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((x, y) => {
          const h = It[x.type] ?? It.tool;
          return /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: h.colorClass, children: h.icon }),
                /* @__PURE__ */ e("span", { className: "truncate max-w-[480px]", children: x.label })
              ]
            },
            `${x.type}-${y}-${x.label}`
          );
        })
      }
    )
  ] });
}, _n = De.memo(kt);
function In(r, n) {
  if (typeof r == "function") {
    r(n);
    return;
  }
  r && (r.current = n);
}
function vt(r) {
  const n = Number.parseFloat(r);
  return Number.isFinite(n) ? n : 0;
}
function jn({
  messages: r,
  isTyping: n,
  statusPhase: o = "thinking",
  searchSteps: s = [],
  hasReceivedAssistantChunk: c = !1,
  contentMaxWidth: f = 800,
  selection: p,
  scrollbar: x,
  feedbackByMessageKey: y,
  getMessageKey: h = ($, B) => String(B),
  onFeedback: w,
  onRegenerate: b,
  onConfirmMiraDraft: k,
  onScroll: j,
  scrollContainerRef: E,
  onMessageElement: P
}) {
  var d, a;
  const $ = !!p, B = ue(null), W = ue(null), A = ue(/* @__PURE__ */ new Map()), M = ue(), [R, D] = v();
  let C = -1, T = -1;
  if (n) {
    for (let m = r.length - 1; m >= 0; m -= 1)
      if (((d = r[m]) == null ? void 0 : d.role) === "user") {
        T = m;
        break;
      }
    for (let m = r.length - 1; m > T; m -= 1)
      if (((a = r[m]) == null ? void 0 : a.role) === "assistant") {
        C = m;
        break;
      }
  }
  const K = T >= 0 ? h(r[T], T) : void 0, z = C >= 0 ? h(r[C], C) : void 0, S = K && z ? `${K}:${z}` : void 0, U = Me(
    (m) => {
      B.current = m, In(E, m);
    },
    [E]
  );
  return Lt(() => {
    if (!S || !z || T < 0 || C < 0)
      return;
    const m = B.current, L = W.current, O = A.current.get(T);
    if (!m || !L || !O) return;
    const q = () => {
      const we = window.getComputedStyle(m), Ce = window.getComputedStyle(L), ae = m.clientHeight - vt(we.paddingTop) - vt(we.paddingBottom), H = vt(Ce.rowGap || Ce.gap), X = Math.max(
        0,
        Math.floor(ae - O.offsetHeight - H)
      );
      D(
        (G) => (G == null ? void 0 : G.assistantKey) === z && G.minHeight === X ? G : { assistantKey: z, minHeight: X }
      );
    };
    q();
    const te = new ResizeObserver(q);
    return te.observe(m), te.observe(O), () => te.disconnect();
  }, [
    C,
    z,
    S,
    T
  ]), Lt(() => {
    if (!S || !z || (R == null ? void 0 : R.assistantKey) !== z || T < 0 || M.current === S)
      return;
    const m = B.current, L = A.current.get(T);
    !m || !L || (m.scrollTo({ top: L.offsetTop, behavior: "auto" }), M.current = S);
  }, [z, S, T, R]), /* @__PURE__ */ t("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: U,
        "data-chat-scroll-container": !0,
        onScroll: j,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ t(
          "div",
          {
            ref: W,
            className: `flex w-full flex-col ${$ ? "gap-3" : "gap-8"}`,
            style: { maxWidth: f },
            children: [
              r.map((m, L) => {
                const O = h(m, L), q = (p == null ? void 0 : p.selectedMessageKeys.has(O)) ?? !1;
                return /* @__PURE__ */ t(
                  "div",
                  {
                    "data-chat-message-index": L,
                    "data-chat-turn-reserved": (R == null ? void 0 : R.assistantKey) === O ? "true" : void 0,
                    ref: (te) => {
                      te ? A.current.set(L, te) : A.current.delete(L), P == null || P(L, te);
                    },
                    className: $ ? "flex w-full items-start gap-2" : void 0,
                    style: (R == null ? void 0 : R.assistantKey) === O ? { minHeight: R.minHeight } : void 0,
                    children: [
                      p && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => p.onToggleMessage(O),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": q ? "取消选择消息" : "选择消息",
                          children: q ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Je, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        "div",
                        {
                          className: p ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${q ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${m.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Zt,
                              {
                                msg: m,
                                actionKey: O,
                                feedback: y == null ? void 0 : y[O],
                                onFeedback: w,
                                onRefresh: b ? () => b(L) : void 0,
                                onConfirmMiraDraft: k,
                                isTyping: n && L === C
                              }
                            ),
                            L === C && n && !c && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              kt,
                              {
                                phase: o,
                                searchSteps: [...s]
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  O
                );
              }),
              C < 0 && n && !c && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(kt, { phase: o, searchSteps: [...s] }) }) })
            ]
          }
        )
      }
    ),
    x && x.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${x.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: x.height,
          transform: `translateY(${x.top}px)`
        }
      }
    )
  ] });
}
De.memo(jn);
function Bs({
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
const _s = Ft(
  function({ header: n, children: o, sidePanels: s }, c) {
    return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ t("div", { ref: c, "data-testid": "chat-workspace-layout", className: "relative flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { "data-testid": "chat-workspace-main", className: "flex min-w-0 flex-1 flex-col", children: o }),
        s
      ] })
    ] });
  }
), Is = Ft(
  function({ open: n, width: o, resizing: s = !1, overlay: c = !1, overlayRight: f = 0, children: p }, x) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: x,
        "data-overlay": c ? "true" : "false",
        style: { width: n ? o : 0, ...c ? { right: f } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${c ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${s ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: o }, className: "h-full min-w-0", children: p })
      }
    );
  }
);
function Rn({
  isSidebarOpen: r,
  title: n,
  editingTitle: o,
  titleInputRef: s,
  divided: c = !1,
  actions: f,
  onOpenSidebar: p,
  onStartEditTitle: x,
  onEditingTitleChange: y,
  onCommitTitle: h,
  onEditingTitleKeyDown: w
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
              onClick: p,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(Ot, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: o !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              value: o,
              onChange: (k) => y == null ? void 0 : y(k.target.value),
              onBlur: h,
              onKeyDown: w,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${x ? "cursor-pointer" : ""}`,
              onClick: x,
              title: x ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        f && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: f })
      ]
    }
  );
}
function js({ active: r = !1, icon: n, label: o, onClick: s }) {
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: s,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${r ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: o })
      ]
    }
  );
}
function Rs({
  items: r,
  activeMessageIndex: n,
  initiallyExpanded: o = !1,
  onSelect: s
}) {
  const [c, f] = v(o), [p, x] = v(null), [y, h] = v(0), [w, b] = v(0), [k, j] = v(!1), E = ue(null), P = ue({}), $ = ue(null), B = Me(() => {
    const M = E.current;
    if (!M) {
      h(0), b(0);
      return;
    }
    const { scrollTop: R, scrollHeight: D, clientHeight: C } = M;
    if (D <= C || C <= 0) {
      h(0), b(0);
      return;
    }
    const T = Math.max(C / D * C, 24), K = C - T, z = R / Math.max(D - C, 1);
    h(T), b(K * z);
  }, []), W = Me(() => {
    B(), j(!0), $.current !== null && window.clearTimeout($.current), $.current = window.setTimeout(() => j(!1), 650);
  }, [B]), A = () => {
    $.current !== null && (window.clearTimeout($.current), $.current = null), f(!1), x(null), j(!1);
  };
  return ge(() => {
    if (!c) return;
    const M = window.requestAnimationFrame(B);
    return () => window.cancelAnimationFrame(M);
  }, [c, r.length, B]), ge(() => {
    const M = E.current, R = P.current[n];
    if (!M || !R) return;
    const D = M.scrollTop, C = D + M.clientHeight, T = R.offsetTop, K = T + R.offsetHeight, z = 16;
    T < D + z ? M.scrollTo({ top: Math.max(T - z, 0), behavior: "auto" }) : K > C - z && M.scrollTo({
      top: Math.max(K - M.clientHeight + z, 0),
      behavior: "auto"
    });
  }, [n, r.length]), ge(() => () => {
    $.current !== null && window.clearTimeout($.current);
  }, []), r.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => f(!0),
      onMouseLeave: A,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: E,
          onScroll: W,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${c ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: r.map((M) => {
              const R = M.messageIndex === n, D = p === M.messageIndex;
              return /* @__PURE__ */ t(
                "button",
                {
                  ref: (C) => {
                    P.current[M.messageIndex] = C;
                  },
                  type: "button",
                  onClick: () => s(M.messageIndex),
                  onMouseEnter: () => x(M.messageIndex),
                  onMouseLeave: () => x(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${c ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${M.messageIndex + 1} 条用户消息`,
                  title: M.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${c ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${R ? "text-primary" : D ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: M.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${R ? "h-[4px] w-[12px] bg-primary" : D ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                M.messageIndex
              );
            }) }),
            c && y > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${k ? "opacity-100" : "opacity-0"}`,
                style: { height: y, transform: `translateY(${w}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Ds({
  selectedCount: r,
  shareLink: n,
  modalOpen: o,
  copied: s = !1,
  contentMaxWidth: c = 840,
  onCancel: f,
  onCreateLink: p,
  onCloseModal: x,
  onCopyLink: y
}) {
  return /* @__PURE__ */ t(We, { children: [
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
            /* @__PURE__ */ e(Ue, { type: "secondary", size: "small", onClick: f, children: "取消" }),
            /* @__PURE__ */ e(
              Ue,
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
      St,
      {
        visible: o,
        title: "创建分享链接",
        width: 450,
        onCancel: x,
        footer: null,
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: y,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  s ? /* @__PURE__ */ e(Je, { size: 14 }) : /* @__PURE__ */ e(mt, { size: 14 }),
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
function Jt({
  attachments: r,
  className: n = "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6",
  uploading: o = !1,
  deletingAttachmentId: s,
  unavailableHint: c,
  error: f,
  onRequestUpload: p,
  onDeleteAttachment: x
}) {
  return /* @__PURE__ */ t("div", { className: n, children: [
    /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      p && /* @__PURE__ */ e(
        Ue,
        {
          type: "secondary",
          size: "small",
          disabled: o,
          onClick: p,
          children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5", children: [
            o ? /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(hr, { size: 14 }),
            o ? "上传中" : "上传附件"
          ] })
        }
      )
    ] }),
    r.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: r.map((y) => {
      const h = s === y.id;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: y.statusLabel,
          children: [
            /* @__PURE__ */ e(ht, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: y.name }),
            y.status === "processing" && /* @__PURE__ */ e(ot, { size: 12, className: "animate-spin" }),
            x && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: h,
                onClick: () => x(y.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${y.name}`,
                title: "删除附件",
                children: h ? /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(Xt, { size: 13 })
              }
            )
          ]
        },
        y.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    c && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: c }),
    f && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: f })
  ] });
}
const Dn = {
  disabled: /* @__PURE__ */ e(pr, { size: 14 }),
  pending: /* @__PURE__ */ e(Tt, { size: 14 }),
  indexed: /* @__PURE__ */ e(nt, { size: 14 })
};
function er({
  createdByName: r,
  updatedByName: n,
  updatedAt: o,
  index: s
}) {
  return !r && !n && !o && !s ? null : /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    r && /* @__PURE__ */ t("span", { children: [
      "创建人: ",
      r
    ] }),
    n && /* @__PURE__ */ t("span", { children: [
      "最近修改: ",
      n
    ] }),
    o && /* @__PURE__ */ e("span", { children: o }),
    s && /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5", title: s.detail, children: [
      Dn[s.status],
      s.statusLabel
    ] })
  ] });
}
const Fn = "_preview_1bdn0_1", Hn = "_editor_1bdn0_2", tr = {
  preview: Fn,
  editor: Hn
};
function qn({
  document: r,
  layout: n = "page"
}) {
  const [o, s] = v(!1), c = ue(null), f = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ge(() => () => {
    c.current !== null && window.clearTimeout(c.current);
  }, []);
  const p = () => {
    s(!0), c.current !== null && window.clearTimeout(c.current), c.current = window.setTimeout(() => s(!1), 700);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ t("section", { className: `mb-4 shrink-0 ${f}`, children: [
      /* @__PURE__ */ e("h1", { className: "break-words text-2xl font-semibold text-primaryText", children: r.title }),
      /* @__PURE__ */ e(
        er,
        {
          createdByName: r.createdByName,
          updatedByName: r.updatedByName,
          updatedAt: r.updatedAt,
          index: r.index
        }
      ),
      /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
    ] }),
    /* @__PURE__ */ t(
      "section",
      {
        onScroll: p,
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${o ? "is-scrolling" : ""}`,
        children: [
          r.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${tr.preview} ${f}`, children: /* @__PURE__ */ e(Kt, { remarkPlugins: [Gt], children: r.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Mt, { description: "正文暂无内容" }) }),
          /* @__PURE__ */ e(
            Jt,
            {
              attachments: r.attachments,
              className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`
            }
          )
        ]
      }
    )
  ] });
}
function Fs({
  tabs: r,
  activeKey: n,
  onSelectTab: o,
  onCloseTab: s,
  onClose: c,
  onResizeStart: f
}) {
  const p = r.find((x) => x.key === n) ?? null;
  return /* @__PURE__ */ t("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: f,
        className: "absolute left-0 top-0 z-10 h-full w-1.5 cursor-col-resize bg-transparent"
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex h-12 shrink-0 items-center justify-between gap-2 px-3", children: [
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: r.map((x) => {
        const y = x.key === n;
        return /* @__PURE__ */ t("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => o(x.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${y ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                x.type === "knowledge" ? /* @__PURE__ */ e(ht, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(fr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: x.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (h) => {
                h.stopPropagation(), s(x.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${x.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(rt, { size: 12 })
            }
          )
        ] }, x.key);
      }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: c,
          className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
          title: "关闭预览",
          "aria-label": "关闭预览",
          children: /* @__PURE__ */ e(rt, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: p ? p.document ? /* @__PURE__ */ e(qn, { document: p.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: p.loading ? "正在加载文档…" : p.error || "文档暂时无法预览" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Hs({
  projectName: r = "未归属项目",
  searchQuery: n,
  error: o,
  knowledgeDocs: s,
  experiments: c,
  activePreviewKey: f,
  onSearchQueryChange: p,
  onOpenKnowledge: x,
  onOpenExperiment: y,
  onResizeStart: h
}) {
  const w = s.length + c.length;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
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
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ t("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ t("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: r }),
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Ze, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
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
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : w === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ t(We, { children: [
        s.map((b) => {
          const k = `knowledge:${b.id}`, j = f === k;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => x(b.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${j ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${j ? "font-semibold" : "font-normal"}`, children: b.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: b.tags[0] ?? "未分类" })
              ]
            },
            b.id
          );
        }),
        c.map((b) => {
          const k = `experiment:${b.id}`, j = f === k;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => y(b.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${j ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${j ? "font-semibold" : "font-normal"}`, children: b.title }),
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
const Wn = 50, Un = 100 * 1024 * 1024, Vn = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", On = [
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
], Xn = /(?:^|\s)\/([^\s/]*)$/, Kn = /(?:^|\s)@([^\s@]*)$/, Gn = (r, n) => {
  const s = r.slice(0, n).match(Xn);
  return s ? s[1] : null;
}, Yn = (r, n) => {
  const s = r.slice(0, n).match(Kn);
  return s ? s[1] : null;
}, qs = (r, n, o, s) => {
  const c = r.slice(0, n), f = r.slice(o), p = c.match(/(?:^|\s)\/[^\s/]*$/);
  if (!p) {
    const b = `/${s} `;
    return { value: `${c}${b}${f}`, cursor: c.length + b.length };
  }
  const x = c.length - p[0].length, h = `${p[0].startsWith(" ") ? " " : ""}/${s} `, w = `${c.slice(0, x)}${h}`;
  return {
    value: `${w}${f}`,
    cursor: w.length
  };
}, Ws = (r, n, o, s) => {
  const c = r.slice(0, n), f = r.slice(o), p = c.match(/(?:^|\s)@[^\s@]*$/);
  if (!p) {
    const b = `@${s} `;
    return { value: `${c}${b}${f}`, cursor: c.length + b.length };
  }
  const x = c.length - p[0].length, h = `${p[0].startsWith(" ") ? " " : ""}@${s} `, w = `${c.slice(0, x)}${h}`;
  return {
    value: `${w}${f}`,
    cursor: w.length
  };
}, Qn = [], Us = [], rr = ({
  onSend: r,
  disabled: n,
  isStreaming: o = !1,
  onCancel: s,
  leadingControls: c,
  skillOptions: f = On,
  fileOptions: p = Qn,
  uploadAccept: x,
  validateUploadFile: y,
  onUploadValidationError: h
}) => {
  const [w, b] = v(""), [k, j] = v(!1), [E, P] = v(!1), [$, B] = v(""), [W, A] = v(-1), [M, R] = v(!1), [D, C] = v(""), [T, K] = v(-1), [z, S] = v([]), [U, d] = v([]), [a, m] = v([]), [L, O] = v(!1), q = ue(null), te = ue(null), we = ar(), Ce = ue([]), ae = o && !!s;
  ge(() => {
    Ce.current = z;
  }, [z]), ge(() => () => {
    Ce.current.forEach((l) => {
      l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    });
  }, []);
  const H = be(() => {
    const l = $.trim().toLowerCase();
    return l ? f.filter((g) => `${g.id} ${g.description} ${g.source}`.toLowerCase().includes(l)) : f;
  }, [f, $]), X = be(() => {
    const l = D.trim().toLowerCase();
    return l ? p.filter((g) => `${g.name} ${g.projectName} ${g.sourceType} ${g.operatorName ?? ""} ${g.operatedAt ?? ""}`.toLowerCase().includes(l)) : p.filter((g) => g.isRecent).slice(0, 10);
  }, [p, D]), G = Me((l, g) => {
    const ee = g ?? l.length, pe = Gn(l, ee);
    if (pe !== null) {
      P(!0), B(pe), A(-1), R(!1), C(""), K(-1);
      return;
    }
    const ne = Yn(l, ee);
    if (ne !== null) {
      R(!0), C(ne), K(-1), P(!1), B(""), A(-1);
      return;
    }
    P(!1), B(""), A(-1), R(!1), C(""), K(-1);
  }, []), Re = Me((l) => {
    if (l.disabled) return;
    const g = q.current, ee = (g == null ? void 0 : g.selectionStart) ?? w.length, pe = (g == null ? void 0 : g.selectionEnd) ?? ee, ne = w.slice(0, ee), ce = w.slice(pe), me = (() => {
      const de = ne.match(/(?:^|\s)\/[^\s/]*$/);
      if (!de)
        return { value: w, cursor: ee };
      const fe = ne.length - de[0].length, xe = de[0].startsWith(" ") ? " " : "", i = `${ne.slice(0, fe)}${xe}`;
      return {
        value: `${i}${ce}`,
        cursor: i.length
      };
    })();
    d((de) => {
      const fe = `skill-${l.id}`;
      return de.some((xe) => xe.id === fe) ? de : [...de, { id: fe, type: "skill", label: l.id, sourceId: l.id }];
    }), b(me.value), P(!1), B(""), A(-1), requestAnimationFrame(() => {
      g && (g.focus(), g.setSelectionRange(me.cursor, me.cursor));
    });
  }, [w]), _e = Me((l) => {
    const g = q.current, ee = (g == null ? void 0 : g.selectionStart) ?? w.length, pe = (g == null ? void 0 : g.selectionEnd) ?? ee, ne = w.slice(0, ee), ce = w.slice(pe), me = (() => {
      const de = ne.match(/(?:^|\s)@[^\s@]*$/);
      if (!de)
        return { value: w, cursor: ee };
      const fe = ne.length - de[0].length, xe = de[0].startsWith(" ") ? " " : "", i = `${ne.slice(0, fe)}${xe}`;
      return {
        value: `${i}${ce}`,
        cursor: i.length
      };
    })();
    m((de) => {
      const fe = `doc-${l.id}`;
      return de.some((xe) => xe.id === fe) ? de : [...de, { id: fe, type: "doc", label: l.name, sourceId: l.id }];
    }), b(me.value), R(!1), C(""), K(-1), requestAnimationFrame(() => {
      g && (g.focus(), g.setSelectionRange(me.cursor, me.cursor));
    });
  }, [w]), Ae = Me(() => {
    O(!1);
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
  }, []), Le = Me((l) => {
    const g = Array.from(l.target.files ?? []);
    if (g.length === 0) return;
    const ee = g.filter((pe) => {
      const ne = y == null ? void 0 : y(pe);
      return ne ? (h == null || h(ne), !1) : !0;
    });
    S((pe) => {
      const ne = new Set(pe.map((me) => me.id)), ce = [...pe];
      return ee.forEach((me) => {
        if (me.size > Un || ce.length >= Wn) return;
        const de = `${me.name}-${me.size}-${me.lastModified}`;
        if (ne.has(de)) return;
        const fe = me.type.startsWith("image/");
        ne.add(de), ce.push({
          id: de,
          name: me.name,
          mimeType: me.type || "application/octet-stream",
          previewUrl: fe ? URL.createObjectURL(me) : void 0,
          file: me
        });
      }), ce;
    }), l.target.value = "";
  }, [h, y]), Z = Me((l) => {
    S((g) => {
      const ee = g.find((pe) => pe.id === l);
      return ee != null && ee.previewUrl && URL.revokeObjectURL(ee.previewUrl), g.filter((pe) => pe.id !== l);
    });
  }, []), re = Me((l) => {
    d((g) => g.filter((ee) => ee.id !== l));
  }, []), Y = Me((l) => {
    m((g) => g.filter((ee) => ee.id !== l));
  }, []), I = Me(() => {
    !w.trim() || n || (r({
      content: w,
      attachments: z.map((l) => ({
        id: l.id,
        name: l.name,
        mimeType: l.mimeType,
        previewUrl: l.previewUrl,
        file: l.file
      })),
      references: [...U, ...a]
    }), b(""), S([]), d([]), m([]), P(!1), B(""), A(-1), R(!1), C(""), K(-1));
  }, [w, n, r, z, a, U]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ t("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: we,
        ref: te,
        type: "file",
        multiple: !0,
        accept: x,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Le
      }
    ),
    (z.length > 0 || U.length > 0 || a.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
      U.map((l) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(qt, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: l.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => re(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${l.label}`,
                children: /* @__PURE__ */ e(rt, { size: 12 })
              }
            )
          ]
        },
        l.id
      )),
      a.map((l) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Wt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: l.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Y(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${l.label}`,
                children: /* @__PURE__ */ e(rt, { size: 12 })
              }
            )
          ]
        },
        l.id
      )),
      z.map((l) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            l.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: l.previewUrl, alt: l.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Ut, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ t("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: l.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: l.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Z(l.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${l.name}`,
                children: /* @__PURE__ */ e(rt, { size: 12 })
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
        ref: q,
        value: w,
        onChange: (l) => {
          const g = l.target.value;
          b(g), G(g, l.target.selectionStart);
        },
        onClick: (l) => {
          G(l.currentTarget.value, l.currentTarget.selectionStart);
        },
        onKeyUp: (l) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(l.key) || G(l.currentTarget.value, l.currentTarget.selectionStart);
        },
        onKeyDown: (l) => {
          if (l.key === "Enter" && (l.shiftKey || l.metaKey || l.ctrlKey)) {
            l.preventDefault();
            const g = l.currentTarget, ee = g.selectionStart ?? w.length, pe = g.selectionEnd ?? ee, ne = `${w.slice(0, ee)}
${w.slice(pe)}`, ce = ee + 1;
            b(ne), G(ne, ce), requestAnimationFrame(() => {
              g.setSelectionRange(ce, ce);
            });
            return;
          }
          if (E) {
            if (l.key === "ArrowDown") {
              l.preventDefault(), A((g) => H.length === 0 ? -1 : g < 0 ? 0 : (g + 1) % H.length);
              return;
            }
            if (l.key === "ArrowUp") {
              l.preventDefault(), A((g) => H.length === 0 ? -1 : g < 0 ? H.length - 1 : (g - 1 + H.length) % H.length);
              return;
            }
            if (l.key === "Escape") {
              l.preventDefault(), P(!1), B(""), A(-1);
              return;
            }
            if (l.key === "Enter" && !l.shiftKey) {
              l.preventDefault();
              const g = W >= 0 ? H[W] : void 0;
              g && Re(g);
              return;
            }
          }
          if (M) {
            if (l.key === "ArrowDown") {
              l.preventDefault(), K((g) => X.length === 0 ? -1 : g < 0 ? 0 : (g + 1) % X.length);
              return;
            }
            if (l.key === "ArrowUp") {
              l.preventDefault(), K((g) => X.length === 0 ? -1 : g < 0 ? X.length - 1 : (g - 1 + X.length) % X.length);
              return;
            }
            if (l.key === "Escape") {
              l.preventDefault(), R(!1), C(""), K(-1);
              return;
            }
            if (l.key === "Enter" && !l.shiftKey) {
              l.preventDefault();
              const g = T >= 0 ? X[T] : void 0;
              g && _e(g);
              return;
            }
          }
          l.key === "Enter" && !l.shiftKey && (l.preventDefault(), I());
        },
        disabled: n,
        onFocus: () => j(!0),
        onBlur: () => {
          j(!1), P(!1), R(!1);
        },
        placeholder: k ? Vn : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${z.length > 0 || U.length > 0 || a.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    E && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (l) => l.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: $ ? `搜索 skill：${$}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: H.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : H.map((l, g) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          disabled: l.disabled,
          title: l.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${l.disabled ? "cursor-not-allowed opacity-50" : g === W ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => Re(l),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: l.badge }),
            /* @__PURE__ */ t("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: l.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: l.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: l.disabledReason || l.source })
          ]
        },
        l.id
      )) })
    ] }) }),
    M && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (l) => l.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: D ? `搜索文件：${D}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ t("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !D && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(Tt, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        X.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : X.map((l, g) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${g === T ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => _e(l),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(ht, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: l.name }),
              !D && l.operatorName && l.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${l.operatorName} ${l.operatedAt}` })
            ]
          },
          l.id
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
            onMouseEnter: () => O(!0),
            onMouseLeave: () => O(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: Ae,
                  "aria-controls": we,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Ct, { size: 16 })
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${L ? "block" : "hidden"}`,
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
          onClick: ae ? s : I,
          disabled: ae ? !1 : n || !w.trim(),
          "aria-label": ae ? "停止生成" : "发送消息",
          title: ae ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${ae || w.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: ae ? /* @__PURE__ */ e(xr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(br, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
De.memo(rr);
const Zn = ({ messages: r, isTyping: n, statusPhase: o = "thinking", searchSteps: s = [] }) => {
  const c = ue(null);
  ge(() => {
    var p;
    (p = c.current) == null || p.scrollIntoView({ behavior: "smooth" });
  }, [r.length, n]);
  const f = be(() => r.map((p, x) => /* @__PURE__ */ e(En, { msg: p }, `${x}-${p.role}`)), [r]);
  return /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    f,
    n && /* @__PURE__ */ e(_n, { phase: o, searchSteps: s }),
    /* @__PURE__ */ e("div", { ref: c })
  ] });
};
De.memo(Zn);
const Jn = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "生成项目日报"
], nr = ({ onSelect: r, prompts: n = Jn }) => {
  const o = Me((s) => {
    r(s);
  }, [r]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((s) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => o(s),
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm",
      children: s
    },
    s
  )) });
};
De.memo(nr);
const es = (r, n) => {
  const o = Math.random() * r, s = Math.random() * n;
  return {
    x: o,
    y: s,
    baseX: o,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Vs({ onLogin: r, onLoginSuccess: n, onNavigate: o }) {
  const s = ue(null), c = ue(null), [f, p] = v(""), [x, y] = v(""), [h, w] = v(!0), [b, k] = v(!1), [j, E] = v(!1), [P, $] = v(null), B = ue(null), [W, A] = v(!1), [M, R] = v("email"), [D, C] = v(""), [T, K] = v(""), [z, S] = v(""), [U, d] = v(""), [a, m] = v(0), [L, O] = v(!1), q = be(() => f.trim().length > 0 && x.trim().length > 0 && !b, [
    f,
    b,
    x
  ]);
  ge(() => {
    if (a <= 0) return;
    const H = window.setTimeout(() => m((X) => X - 1), 1e3);
    return () => clearTimeout(H);
  }, [a]), ge(
    () => () => {
      B.current !== null && window.clearTimeout(B.current);
    },
    []
  ), ge(() => {
    const H = s.current, X = c.current;
    if (!H || !X) return;
    const G = H.getContext("2d");
    if (!G) return;
    const Re = window.getComputedStyle(document.documentElement), _e = Re.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ae = Re.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Le = Re.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Z = 0, re = 0, Y = 0, I = window.devicePixelRatio || 1, l = [];
    const g = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, ee = 150, pe = () => {
      const xe = X.getBoundingClientRect();
      I = window.devicePixelRatio || 1, re = xe.width, Y = xe.height, H.width = re * I, H.height = Y * I, H.style.width = `${re}px`, H.style.height = `${Y}px`, G.setTransform(I, 0, 0, I, 0, 0);
      const i = re < 768 ? 40 : 90;
      l = Array.from({ length: i }, () => es(re, Y));
    }, ne = (xe) => {
      G.beginPath(), G.arc(xe.x, xe.y, xe.size, 0, Math.PI * 2), G.closePath(), G.fill();
    }, ce = () => {
      G.clearRect(0, 0, re, Y);
      for (let xe = 0; xe < l.length; xe += 1) {
        const i = l[xe];
        i.x += i.vx, i.y += i.vy, (i.x < 0 || i.x > re) && (i.vx = -i.vx), (i.y < 0 || i.y > Y) && (i.vy = -i.vy);
        const N = g.x - i.x, Q = g.y - i.y, V = Math.sqrt(N * N + Q * Q) || 1, he = N / V, ve = Q / V, le = (g.radius - V) / g.radius, _ = he * le * i.density, Pe = ve * le * i.density;
        if (V < g.radius)
          i.x -= _ * 0.5, i.y -= Pe * 0.5, G.fillStyle = _e, i.size = Math.min(i.size + 0.1, 2.5);
        else {
          if (i.x !== i.baseX) {
            const Ee = i.x - i.baseX;
            i.x -= Ee / 50;
          }
          if (i.y !== i.baseY) {
            const Ee = i.y - i.baseY;
            i.y -= Ee / 50;
          }
          G.fillStyle = Ae, i.size = Math.max(i.size - 0.05, 1);
        }
        ne(i);
        for (let Ee = xe; Ee < l.length; Ee += 1) {
          const ye = l[Ee], se = i.x - ye.x, oe = i.y - ye.y, Ie = Math.sqrt(se * se + oe * oe);
          if (Ie < ee) {
            const ke = (1 - Ie / ee) * 0.4;
            G.beginPath(), G.strokeStyle = Le, G.globalAlpha = ke, G.lineWidth = 1, G.moveTo(i.x, i.y), G.lineTo(ye.x, ye.y), G.stroke(), G.globalAlpha = 1, G.closePath();
          }
        }
      }
      Z = window.requestAnimationFrame(ce);
    }, me = (xe) => {
      const i = X.getBoundingClientRect();
      g.x = xe.clientX - i.left, g.y = xe.clientY - i.top;
    }, de = () => {
      g.x = -1e3, g.y = -1e3;
    }, fe = (xe) => {
      if (xe.touches.length < 1) return;
      const i = X.getBoundingClientRect();
      g.x = xe.touches[0].clientX - i.left, g.y = xe.touches[0].clientY - i.top;
    };
    return pe(), ce(), window.addEventListener("resize", pe), X.addEventListener("mousemove", me), X.addEventListener("mouseleave", de), X.addEventListener("touchmove", fe, { passive: !0 }), X.addEventListener("touchend", de), () => {
      window.cancelAnimationFrame(Z), window.removeEventListener("resize", pe), X.removeEventListener("mousemove", me), X.removeEventListener("mouseleave", de), X.removeEventListener("touchmove", fe), X.removeEventListener("touchend", de);
    };
  }, []);
  const te = async (H) => {
    if (H.preventDefault(), !!q) {
      k(!0), $(null);
      try {
        const X = await r({ email: f.trim(), password: x, rememberLogin: h });
        if (!X.ok) {
          $(X.message);
          return;
        }
        E(!0), B.current = window.setTimeout(() => {
          E(!1), n();
        }, 900);
      } catch {
        $("登录失败，请稍后重试。");
      } finally {
        k(!1);
      }
    }
  }, we = async () => {
    !D.trim() || a > 0 || (k(!0), await new Promise((H) => window.setTimeout(H, 1e3)), k(!1), O(!0), m(60));
  }, Ce = async () => {
    if (M === "email") {
      if (!D.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D) || !T.trim() || T.length < 6 || !z.trim() || z.length < 6 || z !== U) return;
      R("success");
    }
  }, ae = () => {
    A(!1), R("email"), C(""), K(""), S(""), d(""), m(0), O(!1);
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
      /* @__PURE__ */ t("form", { onSubmit: te, className: "space-y-6", children: [
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: f,
              onChange: (H) => {
                p(H.target.value), $(null);
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
              value: x,
              onChange: (H) => {
                y(H.target.value), $(null);
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
                  checked: h,
                  onChange: (H) => w(H.target.checked),
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
            disabled: !q,
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
      !W && /* @__PURE__ */ t("div", { className: "mt-7", children: [
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
                /* @__PURE__ */ e(gr, { size: 16, className: "text-authTextFaint" }),
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
                /* @__PURE__ */ e(yr, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      W && /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: ae,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        M === "email" && /* @__PURE__ */ t("div", { className: "space-y-5", children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: D,
                onChange: (H) => C(H.target.value),
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
                  value: T,
                  onChange: (H) => K(H.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: we,
                disabled: a > 0 || b || !D.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${a > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: a > 0 ? `${a}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: z,
                onChange: (H) => S(H.target.value),
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
                value: U,
                onChange: (H) => d(H.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${U.length > 0 && z !== U ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          U.length > 0 && z !== U && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: Ce,
              disabled: !D.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D) || !T.trim() || T.length < 6 || !z.trim() || z.length < 6 || z !== U,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        M === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(nt, { size: 40, className: "text-primary" }) })
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${j ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(nt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const ts = (r, n) => {
  const o = Math.random() * r, s = Math.random() * n;
  return {
    x: o,
    y: s,
    baseX: o,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Os({
  mode: r = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: o,
  onRegister: s,
  onEnterWorkspace: c,
  onNavigate: f
}) {
  const p = ue(null), x = ue(null), y = ue(null), [h, w] = v("identity"), [b, k] = v(""), [j, E] = v(""), [P, $] = v(""), [B, W] = v(""), [A, M] = v(""), [R, D] = v(""), C = r === "create-lab", [T, K] = v(""), [z, S] = v(""), [U, d] = v(!1), [a, m] = v(0), [L, O] = v(""), [q, te] = v(null), we = T.length > 0 && T.trim().length < 6;
  ge(() => {
    if (a <= 0) return;
    const Z = window.setTimeout(() => m((re) => re - 1), 1e3);
    return () => clearTimeout(Z);
  }, [a]), ge(
    () => () => {
      y.current !== null && window.clearTimeout(y.current);
    },
    []
  ), ge(() => {
    const Z = p.current, re = x.current;
    if (!Z || !re) return;
    const Y = Z.getContext("2d");
    if (!Y) return;
    const I = window.getComputedStyle(document.documentElement), l = I.getPropertyValue("--chatui-color-auth-particle-active").trim(), g = I.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ee = I.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let pe = 0, ne = 0, ce = 0, me = window.devicePixelRatio || 1, de = [];
    const fe = { x: -1e3, y: -1e3, radius: 120 }, xe = 150, i = () => {
      const le = re.getBoundingClientRect();
      me = window.devicePixelRatio || 1, ne = le.width, ce = le.height, Z.width = ne * me, Z.height = ce * me, Z.style.width = `${ne}px`, Z.style.height = `${ce}px`, Y.setTransform(me, 0, 0, me, 0, 0);
      const _ = ne < 768 ? 40 : 90;
      de = Array.from({ length: _ }, () => ts(ne, ce));
    }, N = (le) => {
      Y.beginPath(), Y.arc(le.x, le.y, le.size, 0, Math.PI * 2), Y.closePath(), Y.fill();
    }, Q = () => {
      Y.clearRect(0, 0, ne, ce);
      for (let le = 0; le < de.length; le += 1) {
        const _ = de[le];
        _.x += _.vx, _.y += _.vy, (_.x < 0 || _.x > ne) && (_.vx = -_.vx), (_.y < 0 || _.y > ce) && (_.vy = -_.vy);
        const Pe = fe.x - _.x, Ee = fe.y - _.y, ye = Math.sqrt(Pe * Pe + Ee * Ee) || 1, se = Pe / ye, oe = Ee / ye, Ie = (fe.radius - ye) / fe.radius, ke = se * Ie * _.density, Ne = oe * Ie * _.density;
        ye < fe.radius ? (_.x -= ke * 0.5, _.y -= Ne * 0.5, Y.fillStyle = l, _.size = Math.min(_.size + 0.1, 2.5)) : (_.x !== _.baseX && (_.x -= (_.x - _.baseX) / 50), _.y !== _.baseY && (_.y -= (_.y - _.baseY) / 50), Y.fillStyle = g, _.size = Math.max(_.size - 0.05, 1)), N(_);
        for (let Se = le; Se < de.length; Se += 1) {
          const Te = de[Se], ze = _.x - Te.x, Ve = _.y - Te.y, Be = Math.sqrt(ze * ze + Ve * Ve);
          if (Be < xe) {
            const He = (1 - Be / xe) * 0.4;
            Y.beginPath(), Y.strokeStyle = ee, Y.globalAlpha = He, Y.lineWidth = 1, Y.moveTo(_.x, _.y), Y.lineTo(Te.x, Te.y), Y.stroke(), Y.globalAlpha = 1, Y.closePath();
          }
        }
      }
      pe = window.requestAnimationFrame(Q);
    }, V = (le) => {
      const _ = re.getBoundingClientRect();
      fe.x = le.clientX - _.left, fe.y = le.clientY - _.top;
    }, he = () => {
      fe.x = -1e3, fe.y = -1e3;
    }, ve = (le) => {
      if (le.touches.length < 1) return;
      const _ = re.getBoundingClientRect();
      fe.x = le.touches[0].clientX - _.left, fe.y = le.touches[0].clientY - _.top;
    };
    return i(), Q(), window.addEventListener("resize", i), re.addEventListener("mousemove", V), re.addEventListener("mouseleave", he), re.addEventListener("touchmove", ve, { passive: !0 }), re.addEventListener("touchend", he), () => {
      window.cancelAnimationFrame(pe), window.removeEventListener("resize", i), re.removeEventListener("mousemove", V), re.removeEventListener("mouseleave", he), re.removeEventListener("touchmove", ve), re.removeEventListener("touchend", he);
    };
  }, []);
  const Ce = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(P) || a > 0)) {
      d(!0), te(null);
      try {
        const Z = await n(P);
        if (!Z.ok) {
          te(Z);
          return;
        }
        m(Z.resendAfterSeconds ?? 60), O(Z.message ?? "短信验证码已发送");
      } catch {
        te({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        d(!1);
      }
    }
  }, ae = () => ({
    email: b.trim(),
    name: j.trim(),
    phoneNumber: P,
    phoneVerificationCode: B.trim(),
    mode: r,
    ...C ? { labName: R.trim() } : { inviteCode: A.trim() }
  }), H = () => {
    const Z = ["identity", "password", "success"], re = Z.indexOf(h);
    re < Z.length - 1 && w(Z[re + 1]);
  }, X = be(() => {
    if (U) return !1;
    switch (h) {
      case "identity":
        return C ? b.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) && j.trim().length > 0 && /^1[3-9]\d{9}$/.test(P) && B.length === 6 && R.trim().length > 0 : b.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) && j.trim().length > 0 && /^1[3-9]\d{9}$/.test(P) && B.length === 6 && A.trim().length > 0;
      case "password":
        return T.trim().length >= 6 && T === z;
      default:
        return !1;
    }
  }, [h, b, j, P, B, A, R, C, T, z, U]), G = async (Z) => {
    if (Z.preventDefault(), !!X) {
      d(!0), te(null);
      try {
        const re = ae(), Y = h === "password" ? await s({ ...re, password: T }) : await o(re);
        if (!Y.ok) {
          te(Y);
          return;
        }
        H();
      } catch {
        te({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        d(!1);
      }
    }
  }, Re = {
    identity: C ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, _e = {
    identity: "",
    password: "",
    success: ""
  }, Ae = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", Le = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: x, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: p, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: Re[h] }),
        _e[h] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: _e[h] })
      ] }),
      h !== "success" && /* @__PURE__ */ t("form", { onSubmit: G, className: "space-y-5", children: [
        h === "identity" && /* @__PURE__ */ t(We, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: b,
                onChange: (Z) => {
                  k(Z.target.value), te(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: j,
                onChange: (Z) => {
                  E(Z.target.value), te(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "姓名" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "tel",
                  inputMode: "numeric",
                  value: P,
                  onChange: (Z) => {
                    $(Z.target.value.replace(/\D/g, "").slice(0, 11)), O(""), te(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: Ae
                }
              ),
              /* @__PURE__ */ e("span", { className: Le, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: Ce,
                disabled: a > 0 || U || !/^1[3-9]\d{9}$/.test(P),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${a > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: a > 0 ? `${a}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                value: B,
                onChange: (Z) => {
                  W(Z.target.value.replace(/\D/g, "").slice(0, 6)), te(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "短信验证码" })
          ] }),
          L && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: L }),
          C ? /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: R,
                onChange: (Z) => {
                  D(Z.target.value), te(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "实验室名称" })
          ] }) : /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: A,
                onChange: (Z) => {
                  M(Z.target.value), te(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Ae
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "邀请码" })
          ] })
        ] }),
        h === "password" && /* @__PURE__ */ t(We, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: T,
                onChange: (Z) => {
                  K(Z.target.value), te(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ae} ${(q == null ? void 0 : q.field) === "password" || we ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "设置密码" }),
            ((q == null ? void 0 : q.field) === "password" || we) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (q == null ? void 0 : q.field) === "password" ? q.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: z,
                onChange: (Z) => {
                  S(Z.target.value), te(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Ae} ${z.length > 0 && T !== z ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: Le, children: "确认密码" }),
            z.length > 0 && T !== z && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        q && q.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: q.message }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !X,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: U ? "处理中..." : h === "password" ? "完成注册" : "下一步" }),
              U && /* @__PURE__ */ t(
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
      h === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(nt, { size: 40, className: "text-primary" }) })
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
              y.current = window.setTimeout(c, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      h !== "success" && /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
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
const rs = (r, n) => {
  const o = Math.random() * r, s = Math.random() * n;
  return { x: o, y: s, baseX: o, baseY: s, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Xs({ onSendCode: r, onResetPassword: n, onBackToLogin: o }) {
  const s = ue(null), c = ue(null), f = ue(null), [p, x] = v("phone"), [y, h] = v(""), [w, b] = v(""), [k, j] = v(""), [E, P] = v(""), [$, B] = v(!1), [W, A] = v(0), [M, R] = v(""), [D, C] = v(null);
  ge(() => {
    if (W <= 0) return;
    const a = window.setTimeout(() => A((m) => m - 1), 1e3);
    return () => window.clearTimeout(a);
  }, [W]), ge(() => {
    const a = s.current, m = c.current;
    if (!a || !m) return;
    const L = a.getContext("2d");
    if (!L) return;
    const O = window.getComputedStyle(document.documentElement), q = O.getPropertyValue("--chatui-color-auth-particle-active").trim(), te = O.getPropertyValue("--chatui-color-auth-particle-idle").trim(), we = O.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Ce = 0, ae = 0, H = 0, X = [];
    const G = { x: -1e3, y: -1e3, radius: 120 }, Re = 150, _e = () => {
      const Y = m.getBoundingClientRect(), I = window.devicePixelRatio || 1;
      ae = Y.width, H = Y.height, a.width = ae * I, a.height = H * I, a.style.width = `${ae}px`, a.style.height = `${H}px`, L.setTransform(I, 0, 0, I, 0, 0), X = Array.from({ length: ae < 768 ? 40 : 90 }, () => rs(ae, H));
    }, Ae = () => {
      L.clearRect(0, 0, ae, H);
      for (let Y = 0; Y < X.length; Y += 1) {
        const I = X[Y];
        I.x += I.vx, I.y += I.vy, (I.x < 0 || I.x > ae) && (I.vx = -I.vx), (I.y < 0 || I.y > H) && (I.vy = -I.vy);
        const l = G.x - I.x, g = G.y - I.y, ee = Math.sqrt(l * l + g * g) || 1, pe = (G.radius - ee) / G.radius;
        ee < G.radius ? (I.x -= l / ee * pe * I.density * 0.5, I.y -= g / ee * pe * I.density * 0.5, L.fillStyle = q, I.size = Math.min(I.size + 0.1, 2.5)) : (I.x -= (I.x - I.baseX) / 50, I.y -= (I.y - I.baseY) / 50, L.fillStyle = te, I.size = Math.max(I.size - 0.05, 1)), L.beginPath(), L.arc(I.x, I.y, I.size, 0, Math.PI * 2), L.fill();
        for (let ne = Y; ne < X.length; ne += 1) {
          const ce = X[ne], me = I.x - ce.x, de = I.y - ce.y, fe = Math.sqrt(me * me + de * de);
          fe >= Re || (L.beginPath(), L.globalAlpha = (1 - fe / Re) * 0.4, L.strokeStyle = we, L.lineWidth = 1, L.moveTo(I.x, I.y), L.lineTo(ce.x, ce.y), L.stroke(), L.globalAlpha = 1);
        }
      }
      Ce = window.requestAnimationFrame(Ae);
    }, Le = (Y) => {
      const I = m.getBoundingClientRect();
      G.x = Y.clientX - I.left, G.y = Y.clientY - I.top;
    }, Z = (Y) => {
      if (!Y.touches.length) return;
      const I = m.getBoundingClientRect();
      G.x = Y.touches[0].clientX - I.left, G.y = Y.touches[0].clientY - I.top;
    }, re = () => {
      G.x = -1e3, G.y = -1e3;
    };
    return _e(), Ae(), window.addEventListener("resize", _e), m.addEventListener("mousemove", Le), m.addEventListener("mouseleave", re), m.addEventListener("touchmove", Z, { passive: !0 }), m.addEventListener("touchend", re), () => {
      window.cancelAnimationFrame(Ce), window.removeEventListener("resize", _e), m.removeEventListener("mousemove", Le), m.removeEventListener("mouseleave", re), m.removeEventListener("touchmove", Z), m.removeEventListener("touchend", re);
    };
  }, []), ge(() => () => {
    f.current !== null && window.clearTimeout(f.current);
  }, []);
  const T = be(() => /^1[3-9]\d{9}$/.test(y) && w.length === 6 && k.length >= 6 && k === E, [E, k, y, w]), K = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", z = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: c, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: s, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      p === "phone" ? /* @__PURE__ */ t(We, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ t("form", { onSubmit: async (a) => {
          if (a.preventDefault(), !(!T || $)) {
            B(!0), C(null);
            try {
              const m = await n({ phoneNumber: y, phoneVerificationCode: w, newPassword: k });
              if (!m.ok) {
                C(m.message);
                return;
              }
              x("success");
            } catch {
              C("密码重置失败，请稍后重试。");
            } finally {
              B(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: y, onChange: (a) => {
                h(a.target.value.replace(/\D/g, "").slice(0, 11)), R(""), C(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: K }),
              /* @__PURE__ */ e("span", { className: z, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(y) || W > 0 || $)) {
                B(!0), C(null);
                try {
                  const a = await r(y);
                  if (!a.ok) {
                    C(a.message);
                    return;
                  }
                  A(a.resendAfterSeconds ?? 60), R(a.message ?? "短信验证码已发送");
                } catch {
                  C("验证码发送失败，请稍后重试。");
                } finally {
                  B(!1);
                }
              }
            }, disabled: W > 0 || $ || !/^1[3-9]\d{9}$/.test(y), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${W > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: W > 0 ? `${W}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: w, onChange: (a) => {
              b(a.target.value.replace(/\D/g, "").slice(0, 6)), C(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: K }),
            /* @__PURE__ */ e("span", { className: z, children: "短信验证码" })
          ] }),
          M && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: M }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: k, onChange: (a) => {
              j(a.target.value), C(null);
            }, required: !0, placeholder: " ", className: K }),
            /* @__PURE__ */ e("span", { className: z, children: "新密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: E, onChange: (a) => {
              P(a.target.value), C(null);
            }, required: !0, placeholder: " ", className: `${K} ${E.length > 0 && k !== E ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: z, children: "确认新密码" }),
            E.length > 0 && k !== E && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          D && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: D }),
          /* @__PURE__ */ t("button", { type: "submit", disabled: !T || $, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: $ ? "处理中..." : "重置密码" }),
            $ && /* @__PURE__ */ t("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(nt, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          f.current = window.setTimeout(() => o({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const jt = 10, Rt = (r) => r.isTaskConversation === !0 || r.source === "task" || r.id.startsWith("task-") || typeof r.taskId == "string" && r.taskId.trim().length > 0;
function Ks({
  currentPath: r,
  projects: n,
  initialChats: o,
  logoUrl: s,
  user: c,
  children: f,
  initialAiUsageWarningActive: p = !1,
  aiUsageWarningActive: x,
  canViewAiUsage: y = !0,
  canManageMembers: h = !0,
  chatActions: w = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: b,
  onLogout: k,
  onChatsChange: j,
  onRenameChat: E,
  onTogglePinChat: P,
  onShareChat: $,
  onDeleteChat: B
}) {
  const [W, A] = v(!0), [M, R] = v(240), [D, C] = v(!1), T = ue(0), K = ue(240), [z, S] = v(() => {
    const u = { unassigned: !0 };
    return n.forEach((F) => {
      u[F.id] = !0;
    }), u;
  }), [U, d] = v(!1), [a, m] = v(() => [...o]), [L, O] = v(null), [q, te] = v("time"), [we, Ce] = v(!1), [ae, H] = v(null), [X, G] = v(""), [Re, _e] = v(!1), [Ae, Le] = v(""), [Z, re] = v(!1), [Y, I] = v(p), [l, g] = v(!1), ee = x ?? Y, pe = ue(null), ne = ue(null), ce = ue(null), me = !!(w.rename || w.share || w.pin || w.delete), de = () => {
    d(!1), k();
  }, fe = (u) => {
    S((F) => ({ ...F, [u]: !F[u] }));
  }, xe = (u) => {
    var ie;
    m((J) => J.filter((Fe) => Fe.id !== u)), O(null), ae === u && (H(null), G("")), B == null || B(u), ((ie = r.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : ie[1]) === u && b("/chat/new", { replace: !0 });
  }, i = (u) => {
    const F = a.find((J) => J.id === u);
    if (!F) return;
    const ie = !F.isPinned;
    m((J) => J.map(
      (Ge) => Ge.id === u ? { ...Ge, isPinned: ie } : Ge
    )), P == null || P(u, ie), O(null);
  }, N = (u) => {
    H(u.id), G(u.title), O(null);
  }, Q = () => {
    H(null), G("");
  }, V = (u) => {
    const F = X.trim();
    F && (m((ie) => ie.map((J) => J.id === u ? { ...J, title: F } : J)), E == null || E(u, F)), Q();
  }, he = (u, F) => {
    if (u.stopPropagation(), u.key === "Enter") {
      u.preventDefault(), V(F);
      return;
    }
    u.key === "Escape" && (u.preventDefault(), Q());
  }, ve = (u) => {
    var F;
    if (ae === u) {
      (F = pe.current) == null || F.focus();
      return;
    }
    b(`/chat/${u}`);
  }, le = (u, F = !1) => ae === u.id ? /* @__PURE__ */ t(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (J) => {
        var Fe;
        J.stopPropagation(), (Fe = pe.current) == null || Fe.focus();
      },
      children: [
        F && /* @__PURE__ */ e(xt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: pe,
            value: X,
            onChange: (J) => G(J.target.value),
            onKeyDown: (J) => he(J, u.id),
            onBlur: () => V(u.id),
            onClick: (J) => J.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    F && /* @__PURE__ */ e(xt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: u.title })
  ] }), _ = (u) => {
    T.current = u.clientX, K.current = M, C(!0);
  };
  ge(() => {
    if (!D) return;
    const u = 200, F = 440, ie = (Fe) => {
      const Ge = Fe.clientX - T.current, sr = Math.min(F, Math.max(u, K.current + Ge));
      R(sr);
    }, J = () => {
      C(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", ie), window.addEventListener("mouseup", J), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", J);
    };
  }, [D, M]), ge(() => {
    W || R(240);
  }, [W]), ge(() => {
    j == null || j(a);
  }, [a, j]), ge(() => {
    m([...o]);
  }, [o]), ge(() => {
    if (!ae) return;
    const u = window.requestAnimationFrame(() => {
      var F;
      (F = pe.current) == null || F.focus();
    });
    return () => {
      window.cancelAnimationFrame(u);
    };
  }, [ae]), ge(() => () => {
    ne.current !== null && window.clearTimeout(ne.current), ce.current !== null && window.clearTimeout(ce.current);
  }, []);
  const Pe = () => {
    Ce(!0), ne.current !== null && window.clearTimeout(ne.current), ne.current = window.setTimeout(() => {
      Ce(!1);
    }, 600);
  }, Ee = () => {
    re(!0), ce.current !== null && window.clearTimeout(ce.current), ce.current = window.setTimeout(() => {
      re(!1);
    }, 600);
  };
  ge(() => {
    ee || g(!1);
  }, [ee]);
  const ye = () => {
    g(!0), b("/ai-usage");
  }, se = be(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...y ? [{
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
  ], [h, y]), oe = (u) => {
    if (d(!1), u.key === "skills") {
      b("/skills");
      return;
    }
    if (u.key === "ai-usage") {
      b("/ai-usage");
      return;
    }
    if (u.key === "members") {
      b("/members");
      return;
    }
    if (u.key === "system-settings") {
      b("/system-settings");
      return;
    }
    u.key === "logout" && de();
  }, Ie = be(() => w.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Xt, { size: 14 }), danger: !0 }] : [], [w.delete]), ke = (u) => {
    const F = [];
    return w.rename && F.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(Cr, { size: 14 }) }), w.share && F.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(Sr, { size: 14 }) }), w.pin && F.push({
      key: "pin",
      label: u.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(xt, { size: 14 })
    }), F;
  }, Ne = (u, F) => {
    const ie = Rt(u);
    return !me && !ie ? null : /* @__PURE__ */ t("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${ie ? "ml-6" : "ml-2"}`, children: [
      ie && !F && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      me && /* @__PURE__ */ e(
        dt,
        {
          open: F,
          onOpenChange: (J) => O(J ? u.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, M - 56)),
          trigger: /* @__PURE__ */ e(Tr, { size: 14 }),
          onTriggerClick: (J) => {
            J.stopPropagation();
          },
          items: ke(u),
          footerItems: Ie,
          onItemClick: (J, Fe) => {
            if (Fe.stopPropagation(), J.key === "rename") {
              N(u);
              return;
            }
            if (J.key === "share") {
              $ ? $(u.id) : b(`/chat/${u.id}?share=1`), O(null);
              return;
            }
            if (J.key === "pin") {
              i(u.id);
              return;
            }
            if (J.key === "delete") {
              xe(u.id);
              return;
            }
            O(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${F ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Se = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(ft, { size: 14 }),
      path: "/projects",
      isActive: r === "/projects" || r.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(Tt, { size: 14 }),
      path: "/tools",
      isActive: r === "/tools" || r.startsWith("/tool/")
    }
  ], Te = be(() => {
    const u = r.match(/^\/chat\/([^/]+)$/);
    return u ? a.find((F) => F.id === u[1]) ?? null : null;
  }, [a, r]), ze = be(
    () => a.filter((u) => u.isPinned),
    [a]
  ), Ve = be(
    () => a.filter((u) => !u.isPinned),
    [a]
  ), Be = be(
    () => q === "time" ? ze.slice(0, jt) : ze,
    [ze, q]
  ), He = be(() => {
    if (q !== "time") return [];
    const u = Math.max(jt - Be.length, 0);
    return Ve.slice(0, u);
  }, [q, Ve, Be.length]), pt = be(
    () => Be.length + He.length,
    [Be.length, He.length]
  ), $t = q === "time" && a.length > pt, et = be(() => new Map(n.map((u) => [u.id, u.name])), [n]), Ke = Ae.trim().toLowerCase(), tt = be(() => Ke ? a.filter((u) => {
    const F = u.projectId ? et.get(u.projectId) ?? "未分组" : "未分组";
    return `${u.title} ${F} ${u.date}`.toLowerCase().includes(Ke);
  }) : a, [a, Ke, et]);
  ge(() => {
    if (!Te) return;
    const u = Te.projectId ?? "unassigned";
    S((F) => F[u] !== !1 ? F : { ...F, [u]: !0 });
  }, [Te]);
  const qe = () => {
    Le(""), _e(!0);
  }, Oe = () => {
    _e(!1), re(!1), ce.current !== null && (window.clearTimeout(ce.current), ce.current = null);
  }, Qe = (u) => {
    _e(!1), b(`/chat/${u}`);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ t(
      "aside",
      {
        style: { width: W ? M : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${W ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: { width: M, minWidth: M },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ t("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ t("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => b("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: s, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => A(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(vr, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => b("/chat/new"),
                    className: `nav-item ${r === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(wr, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Se.map((u) => {
                  const F = u.isActive;
                  return /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => b(u.path),
                      className: `nav-item ${F ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        u.icon,
                        /* @__PURE__ */ e("span", { children: u.label })
                      ]
                    },
                    u.path
                  );
                }) }),
                /* @__PURE__ */ t(
                  "div",
                  {
                    onScroll: Pe,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${we ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Be.length > 0 && /* @__PURE__ */ t("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Be.map((u) => {
                          const F = r === `/chat/${u.id}`, ie = L === u.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => ve(u.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${ae === u.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : F ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                le(u, q !== "time"),
                                ae !== u.id && Ne(u, ie)
                              ]
                            }
                          ) }, u.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      q === "project" && n.map((u) => {
                        const F = a.filter((J) => J.projectId === u.id && !J.isPinned), ie = z[u.id] !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => fe(u.id),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(ft, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: ie ? /* @__PURE__ */ e(ct, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(it, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: u.name })
                              ]
                            }
                          ),
                          ie && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: F.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : F.map((J) => {
                            const Fe = r === `/chat/${J.id}`, Ge = L === J.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => ve(J.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${ae === J.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Fe ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  le(J),
                                  ae !== J.id && Ne(J, Ge)
                                ]
                              }
                            ) }, J.id);
                          }) })
                        ] }, u.id);
                      }),
                      q === "project" && (() => {
                        const u = a.filter((ie) => !ie.projectId && !ie.isPinned);
                        if (u.length === 0) return null;
                        const F = z.unassigned !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => fe("unassigned"),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(ft, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: F ? /* @__PURE__ */ e(ct, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(it, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          F && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: u.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : u.map((ie) => {
                            const J = r === `/chat/${ie.id}`, Fe = L === ie.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => ve(ie.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${ae === ie.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : J ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  le(ie),
                                  ae !== ie.id && Ne(ie, Fe)
                                ]
                              }
                            ) }, ie.id);
                          }) })
                        ] });
                      })(),
                      q === "time" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
                        He.map((u) => {
                          const F = r === `/chat/${u.id}`, ie = L === u.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => ve(u.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${ae === u.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : F ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                le(u),
                                ae !== u.id && Ne(u, ie)
                              ]
                            }
                          ) }, u.id);
                        }),
                        $t && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: qe,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(it, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                ee && !l && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(Nr, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: ye,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  dt,
                  {
                    open: U,
                    onOpenChange: d,
                    placement: "top-start",
                    width: M - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ t("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ t("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: c.avatarUrl ? /* @__PURE__ */ e("img", { src: c.avatarUrl, alt: `${c.name}头像`, className: "h-full w-full object-cover" }) : c.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: c.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(kr, { size: 18 }) })
                    ] }),
                    items: se,
                    onItemClick: oe,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          W && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: _,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${W ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof f == "function" ? f({ isSidebarOpen: W, setIsSidebarOpen: A, chats: a, setChats: m, setAiUsageWarningActive: I }) : f }) }) }),
    /* @__PURE__ */ e(
      St,
      {
        visible: Re,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Oe,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
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
                onChange: (u) => Le(u.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          tt.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ee,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Z ? "is-scrolling is-scrolling-thin" : ""}`,
              children: tt.map((u) => {
                const F = u.projectId ? et.get(u.projectId) ?? "未分组" : "未分组", ie = Rt(u);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => Qe(u.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: u.title }),
                        ie && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: F }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: u.date })
                      ] })
                    ]
                  },
                  u.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Mt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Gs({
  projects: r,
  selectedProjectId: n,
  disabled: o = !1,
  embedded: s = !1,
  isSidebarOpen: c = !0,
  skillOptions: f,
  fileOptions: p,
  quickPrompts: x,
  uploadAccept: y,
  validateUploadFile: h,
  onUploadValidationError: w,
  onSelectProject: b,
  onCreateProject: k,
  onOpenSidebar: j,
  onSend: E
}) {
  const [P, $] = v(!1), [B, W] = v(!1), [A, M] = v(""), R = ue(null), D = ue(null), C = be(
    () => r.find((a) => a.id === n) ?? null,
    [r, n]
  ), T = be(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !C
    },
    ...r.map((a) => ({
      key: a.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: a.name }),
      active: (C == null ? void 0 : C.id) === a.id
    }))
  ], [r, C]), K = be(() => k ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Ct, { size: 16 }) }] : [], [k]), z = () => {
    W(!1), M("");
  }, S = (a) => {
    if (a.key === "create") {
      W(!0), M("");
      return;
    }
    const m = a.key === "none" ? null : String(a.key);
    b(m), $(!1);
  }, U = () => {
    const a = A.trim();
    if (!a) return;
    const m = r.find(
      (L) => L.name.trim().toLowerCase() === a.toLowerCase()
    );
    m ? b(m.id) : k == null || k(a), z(), $(!1);
  };
  ge(() => {
    if (!B) return;
    const a = (m) => {
      var O, q;
      const L = m.target;
      (O = D.current) != null && O.contains(L) || (q = R.current) != null && q.contains(L) || (z(), $(!1));
    };
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, [B]);
  const d = /* @__PURE__ */ t("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ t("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: R, className: "relative", children: B && /* @__PURE__ */ e(
        "div",
        {
          ref: D,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Yt,
                {
                  value: A,
                  onChange: (a) => M(a.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Ue, { type: "secondary", size: "small", onClick: z, children: "取消" }),
              /* @__PURE__ */ e(
                Ue,
                {
                  type: "primary",
                  size: "small",
                  onClick: U,
                  disabled: !A.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        rr,
        {
          onSend: E,
          disabled: o,
          skillOptions: f,
          fileOptions: p,
          uploadAccept: y,
          validateUploadFile: h,
          onUploadValidationError: w,
          leadingControls: /* @__PURE__ */ e(
            dt,
            {
              open: P,
              onOpenChange: (a) => {
                !a && B || ($(a), a ? W(!1) : z());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: C ? C.name : "工作项目" }),
                /* @__PURE__ */ e(ct, { size: 14 })
              ] }),
              items: T,
              footerItems: K,
              onItemClick: S,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(nr, { onSelect: E, prompts: x })
  ] });
  return s ? d : /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Rn,
      {
        isSidebarOpen: c,
        onOpenSidebar: j ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: d })
  ] });
}
const ns = "_shell_63t8u_1", ss = "_header_63t8u_5", as = "_headerActions_63t8u_9", ls = "_saveError_63t8u_13", os = "_viewport_63t8u_17", is = "_editorCanvas_63t8u_21", cs = "_titleInput_63t8u_25", ds = "_milkdownHost_63t8u_29", Xe = {
  shell: ns,
  header: ss,
  headerActions: as,
  saveError: ls,
  viewport: os,
  editorCanvas: is,
  titleInput: cs,
  milkdownHost: ds
}, us = {
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
}, Dt = (r, n) => r.replace("<svg", `<svg class="${n}"`), wt = (r) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${r}</tspan>
    </text>
  </svg>
`, ms = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, hs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, ps = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, Nt = (r) => `chatui-document-menu-type-${r}`;
function Ys({
  title: r,
  initialMarkdown: n = "",
  createdByName: o,
  updatedByName: s,
  updatedAt: c,
  index: f,
  attachments: p = [],
  attachmentAccept: x,
  attachmentUnavailableHint: y,
  saving: h = !1,
  saveError: w,
  onTitleChange: b,
  onMarkdownChange: k,
  onUploadAttachments: j,
  onDeleteAttachment: E,
  onSave: P,
  onClose: $
}) {
  const B = ue(null), W = ue(null), A = ue(n), M = ue(k), [R, D] = v(!1), [C, T] = v(null), [K, z] = v("");
  ge(() => {
    M.current = k;
  }, [k]), ge(() => {
    const d = B.current;
    if (!d) return;
    const a = new bt({
      root: d,
      defaultValue: A.current,
      features: {
        [bt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [bt.Feature.BlockEdit]: {
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
          buildMenu: (i) => {
            const N = new Map(
              i.build().flatMap((ye) => ye.items).map((ye) => [ye.key, ye])
            ), Q = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), V = (ye) => {
              const se = ye.get(gt), oe = we, ke = (oe != null && oe.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? oe : oe == null ? void 0 : oe.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (oe instanceof HTMLElement ? oe : null);
              if (!ke) return se;
              try {
                const Ne = se.posAtDOM(ke, 0), Se = se.state.doc.resolve(
                  Math.min(
                    Math.max(Ne, 0),
                    se.state.doc.content.size
                  )
                );
                se.dispatch(
                  se.state.tr.setSelection(
                    zt.near(Se)
                  )
                );
              } catch {
              }
              return se;
            }, he = (ye) => {
              const se = V(ye), oe = yt.type(ye), Ie = (Se) => {
                const { $from: Te } = se.state.selection;
                for (let ze = Te.depth; ze > 0; ze -= 1)
                  if (Te.node(ze).type.name === Se) return !0;
                return !1;
              };
              for (let Se = 0; Se < 10 && !(!Ie(oe.name) || !Pr(oe)(
                se.state,
                se.dispatch
              )); Se += 1)
                ;
              for (let Se = 0; Se < 10 && !(!Ie("blockquote") || !zr(se.state, se.dispatch)); Se += 1)
                ;
              const ke = _r.type(ye), Ne = se.state.selection.$from.parent;
              Ne.isTextblock && Ne.type !== ke && ye.get(Lr).call(Ir.key, {
                nodeType: ke
              });
            }, ve = (ye) => {
              const se = V(ye), { selection: oe } = se.state, Ie = yt.type(ye), { $from: ke } = oe;
              let Ne = -1;
              for (let Te = ke.depth; Te > 0; Te -= 1)
                if (ke.node(Te).type.name === Ie.name) {
                  Ne = Te;
                  break;
                }
              if (Ne > 0) {
                const Te = Ne - 1, ze = Te > 0 && ke.node(Te).childCount === 1 ? Te : Ne;
                se.dispatch(
                  se.state.tr.delete(
                    ke.before(ze),
                    ke.after(ze)
                  )
                );
                return;
              }
              if (!oe.empty) {
                se.dispatch(
                  se.state.tr.delete(oe.from, oe.to)
                );
                return;
              }
              const Se = Math.min(1, ke.depth);
              Se < 1 || se.dispatch(
                se.state.tr.delete(
                  ke.before(Se),
                  ke.after(Se)
                )
              );
            }, le = (ye, se, oe) => {
              const Ie = N.get(se);
              if (!Ie) return;
              const { key: ke, ...Ne } = Ie, Se = (oe == null ? void 0 : oe.icon) ?? Ne.icon, Te = [
                Nt(se),
                oe == null ? void 0 : oe.iconClass
              ].filter(Boolean).join(" "), ze = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(se), Ve = Q.has(se) ? (Be) => {
                var tt;
                if (he(Be), !ze) {
                  if (se === "quote") {
                    const qe = Be.get(gt), { $from: Oe } = qe.state.selection, Qe = Oe.parent, u = Oe.before(Oe.depth), F = qe.state.schema.nodes.blockquote;
                    if (!F) return;
                    const ie = F.create(null, Qe), J = qe.state.tr.replaceWith(
                      u,
                      u + Qe.nodeSize,
                      ie
                    );
                    J.setSelection(
                      zt.near(
                        J.doc.resolve(
                          Math.min(
                            u + 2,
                            J.doc.content.size
                          )
                        )
                      )
                    ), qe.dispatch(J);
                    return;
                  }
                  (tt = Ne.onRun) == null || tt.call(Ne, Be);
                  return;
                }
                const He = Be.get(gt), pt = se === "ordered-list" ? Er.type(Be) : Br.type(Be);
                if (!Ar(pt)(
                  He.state,
                  He.dispatch
                ) || se !== "task-list") return;
                const et = yt.type(Be), { $from: Ke } = He.state.selection;
                for (let qe = Ke.depth; qe > 0; qe -= 1) {
                  const Oe = Ke.node(qe);
                  if (Oe.type !== et) continue;
                  const Qe = Ke.before(qe);
                  He.dispatch(
                    He.state.tr.setNodeMarkup(Qe, void 0, {
                      ...Oe.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Ne.onRun;
              ye.addItem(se, {
                ...Ne,
                label: (oe == null ? void 0 : oe.label) ?? Ne.label,
                icon: Dt(Se, Te),
                onRun: Ve
              });
            };
            i.clear();
            const _ = i.addGroup("basic", "基础");
            [
              {
                key: "h1",
                icon: wt(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: wt(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: wt(3),
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
                icon: ms,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: hs,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: ye, icon: se, label: oe }) => {
              le(_, ye, { icon: se, label: oe });
            });
            const Pe = i.addGroup("common", "常用");
            le(Pe, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), le(Pe, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), i.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Dt(
                ps,
                "chatui-document-menu-action-delete"
              ),
              onRun: ve
            });
          }
        }
      }
    });
    a.on((i) => {
      i.markdownUpdated((N, Q, V) => {
        Q !== V && M.current(Q);
      });
    });
    const m = d.ownerDocument;
    let L = "", O = null, q = null, te = !1, we = null, Ce = null, ae = null, H = null, X = null;
    const G = (i) => {
      const N = i == null ? void 0 : i.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !N || !N.closest(".ProseMirror") ? null : N.matches("h1") ? "h1" : N.matches("h2") ? "h2" : N.matches("h3") ? "h3" : N.matches("blockquote") ? "quote" : N.matches("pre, .milkdown-code-block") || N.querySelector("pre, .milkdown-code-block") ? "code" : N.querySelector('input[type="checkbox"]') ? "task-list" : N.querySelector(".label.ordered") ? "ordered-list" : N.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Re = () => d.querySelector(".ProseMirror"), _e = (i) => {
      const N = Re();
      if (!i || !(N != null && N.contains(i))) return null;
      const Q = i.closest(".milkdown-list-item-block");
      if (Q && N.contains(Q)) return Q;
      let V = i;
      for (; V != null && V.parentElement && V.parentElement !== N; )
        V = V.parentElement;
      return !V || V.parentElement !== N || V.classList.contains("prosemirror-virtual-cursor") ? null : V;
    }, Ae = () => {
      const i = Re();
      return i ? Array.from(i.children).flatMap((N) => {
        if (N.classList.contains("prosemirror-virtual-cursor")) return [];
        const Q = Array.from(
          N.querySelectorAll(".milkdown-list-item-block")
        );
        return Q.length ? Q : [N];
      }) : [];
    }, Le = (i) => {
      var V;
      const N = Ae(), Q = N.map((he) => ({ block: he, rect: he.getBoundingClientRect() })).filter(({ rect: he }) => i >= he.top && i <= he.bottom).sort((he, ve) => he.rect.height - ve.rect.height);
      return Q[0] ? Q[0].block : ((V = N.map((he) => {
        const ve = he.getBoundingClientRect(), le = Math.min(
          Math.abs(i - ve.top),
          Math.abs(i - ve.bottom)
        );
        return { block: he, distance: le };
      }).sort((he, ve) => he.distance - ve.distance)[0]) == null ? void 0 : V.block) ?? null;
    }, Z = (i) => {
      var ve, le;
      const N = m.querySelector(
        ".milkdown-slash-menu"
      );
      N == null || N.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (_) => _.removeAttribute("data-chatui-selected")
      ), i && ((le = (ve = N == null ? void 0 : N.querySelector(`svg.${Nt(i)}`)) == null ? void 0 : ve.closest("li")) == null || le.setAttribute("data-chatui-selected", "true"));
      const Q = m.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!Q) return;
      L || (L = Q.innerHTML);
      const V = i ? N == null ? void 0 : N.querySelector(
        `svg.${Nt(i)}`
      ) : null, he = i ?? "default";
      Q.dataset.chatuiBlockType !== he && (Q.innerHTML = (V == null ? void 0 : V.outerHTML) ?? L, Q.dataset.chatuiBlockType = he);
    }, re = (i) => {
      i !== q && (q = i, O = G(i)), Z(O);
    }, Y = () => {
      var Q;
      const i = (Q = m.getSelection()) == null ? void 0 : Q.anchorNode, N = i instanceof Element ? i : i == null ? void 0 : i.parentElement;
      re(_e(N ?? null));
    }, I = () => {
      const i = Ce, N = m.querySelector(
        ".milkdown-slash-menu"
      );
      if (!i || !N || N.dataset.show !== "true") return;
      const Q = N.getBoundingClientRect();
      if (!Q.width || !Q.height) return;
      const V = i.getBoundingClientRect(), he = m.defaultView, ve = (he == null ? void 0 : he.innerWidth) ?? m.documentElement.clientWidth, le = (he == null ? void 0 : he.innerHeight) ?? m.documentElement.clientHeight, _ = 12, Pe = 8, Ee = Math.max(
        _,
        ve - Q.width - _
      ), ye = Math.max(
        _,
        le - Q.height - _
      ), se = (ze) => Math.min(Math.max(ze, _), Ee), oe = (ze) => Math.min(Math.max(ze, _), ye);
      let Ie = "left", ke = V.left - Q.width - Pe, Ne = oe(V.top);
      if (ke < _) {
        const ze = V.top - Pe - _, Ve = le - V.bottom - Pe - _, Be = Ve >= Q.height || Ve >= ze;
        Ie = Be ? "bottom" : "top", ke = se(V.left), Ne = oe(Be ? V.bottom + Pe : V.top - Q.height - Pe);
      }
      const Se = `${ke}px`, Te = `${Ne}px`;
      N.style.getPropertyValue("--chatui-block-menu-left") !== Se && N.style.setProperty("--chatui-block-menu-left", Se), N.style.getPropertyValue("--chatui-block-menu-top") !== Te && N.style.setProperty("--chatui-block-menu-top", Te), N.dataset.chatuiPlacement = Ie;
    }, l = () => {
      const i = m.querySelector(
        ".milkdown-slash-menu"
      );
      i && (i.style.removeProperty("--chatui-block-menu-left"), i.style.removeProperty("--chatui-block-menu-top"), delete i.dataset.chatuiPlacement);
    }, g = (i) => {
      i !== X && (X == null || X.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), X = i, X == null || X.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, ee = () => {
      H !== null && window.cancelAnimationFrame(H), H = window.requestAnimationFrame(() => {
        H = null, I();
      });
    }, pe = () => {
      Ce = null, te = !1, we = null, g(null), a.editor.action((i) => {
        i.get("menuAPICtx").hide();
      }), l();
    }, ne = (i) => {
      const N = i.target instanceof Element ? i.target : null, Q = m.querySelector(
        ".milkdown-slash-menu"
      );
      if (Q) {
        const ve = Q.getBoundingClientRect(), le = ve.width > 0 && ve.height > 0, _ = i.clientX >= ve.left && i.clientX <= ve.right && i.clientY >= ve.top && i.clientY <= ve.bottom;
        if (le) {
          if (_) {
            g(
              (N == null ? void 0 : N.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), te = !0;
            return;
          }
          if (g(null), N != null && N.closest(".milkdown-block-handle")) return;
          const Pe = Re(), Ee = N && (Pe != null && Pe.contains(N)) ? _e(N) ?? Le(i.clientY) : null;
          if (Ee && we && Ee !== we) {
            pe();
            return;
          }
          if (Ee === we) return;
          te && pe();
          return;
        }
        te = !1, g(null);
      }
      if (N != null && N.closest(".milkdown-block-handle")) {
        Z(O);
        return;
      }
      const V = Re();
      if (!N || !(V != null && V.contains(N))) return;
      const he = _e(N) ?? Le(i.clientY);
      re(he);
    }, ce = (i) => {
      const N = i.target instanceof Element ? i.target : null;
      g(
        (N == null ? void 0 : N.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, me = (i) => {
      const N = i.target instanceof Element ? i.target : null, Q = N == null ? void 0 : N.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!Q) return;
      const V = i.relatedTarget instanceof Element ? i.relatedTarget : null;
      if (V && Q.contains(V)) return;
      const he = V == null ? void 0 : V.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      g(he ?? null);
    }, de = (i) => {
      const N = i.target instanceof Element ? i.target : null, Q = N == null ? void 0 : N.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (Q) {
        const V = O;
        Ce = Q, we = q, window.setTimeout(() => {
          Z(V), ee();
        }, 0);
      }
    }, fe = (i) => {
      i.key === "/" && window.setTimeout(Y, 0);
    };
    m.addEventListener("pointermove", ne), m.addEventListener("pointerover", ce), m.addEventListener("pointerout", me), m.addEventListener("click", de), d.addEventListener("keyup", fe);
    const xe = a.create();
    return xe.then(() => {
      var N;
      (N = d.querySelector(".ProseMirror")) == null || N.focus();
      const i = m.querySelector(
        ".milkdown-slash-menu"
      );
      i && (ae = new MutationObserver(() => {
        if (i.dataset.show === "true" && Ce) {
          ee();
          return;
        }
        i.dataset.show !== "true" && (Ce = null, we = null, g(null), l());
      }), ae.observe(i, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      })), Y();
    }), () => {
      m.removeEventListener("pointermove", ne), m.removeEventListener(
        "pointerover",
        ce
      ), m.removeEventListener("pointerout", me), m.removeEventListener("click", de), d.removeEventListener("keyup", fe), xe.then(() => {
        ae == null || ae.disconnect(), H !== null && window.cancelAnimationFrame(H), a.destroy();
      });
    };
  }, []);
  const S = async (d) => {
    const a = Array.from(d.target.files ?? []);
    if (d.target.value = "", !(!a.length || !j)) {
      D(!0), z("");
      try {
        await j(a);
      } catch (m) {
        z(
          m instanceof Error ? m.message : "附件上传失败"
        );
      } finally {
        D(!1);
      }
    }
  }, U = async (d) => {
    if (E) {
      T(d), z("");
      try {
        await E(d);
      } catch (a) {
        z(
          a instanceof Error ? a.message : "附件删除失败"
        );
      } finally {
        T(null);
      }
    }
  };
  return /* @__PURE__ */ t("section", { className: Xe.shell, "aria-label": "项目文档编辑器", children: [
    /* @__PURE__ */ e("header", { className: Xe.header, children: /* @__PURE__ */ t("div", { className: Xe.headerActions, children: [
      /* @__PURE__ */ e(
        Ue,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: h,
          onClick: $,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Ue,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: h,
          onClick: P,
          children: h ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ t(
      "div",
      {
        className: `${Xe.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          w && /* @__PURE__ */ e("div", { className: Xe.saveError, children: w }),
          /* @__PURE__ */ t("div", { className: Xe.editorCanvas, children: [
            /* @__PURE__ */ t("section", { className: "mb-4 shrink-0 px-[120px]", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: r,
                  onChange: (d) => b(d.target.value),
                  placeholder: "请输入标题",
                  className: Xe.titleInput,
                  "aria-label": "文档标题"
                }
              ),
              /* @__PURE__ */ e(
                er,
                {
                  createdByName: o,
                  updatedByName: s,
                  updatedAt: c,
                  index: f
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ t("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: B,
                  className: `${Xe.milkdownHost} ${tr.editor} chatui-project-document-editor`,
                  style: us
                }
              ),
              j && /* @__PURE__ */ e(
                "input",
                {
                  ref: W,
                  type: "file",
                  multiple: !0,
                  accept: x,
                  className: "hidden",
                  onChange: (d) => {
                    S(d);
                  }
                }
              ),
              /* @__PURE__ */ e(
                Jt,
                {
                  attachments: p,
                  uploading: R,
                  deletingAttachmentId: C,
                  unavailableHint: y,
                  error: K,
                  onRequestUpload: j ? () => {
                    var d;
                    return (d = W.current) == null ? void 0 : d.click();
                  } : void 0,
                  onDeleteAttachment: E ? (d) => {
                    U(d);
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
const fs = { low: "低风险", medium: "中风险", high: "高风险" }, xs = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function Qs({
  isSidebarOpen: r,
  skills: n,
  loading: o = !1,
  error: s,
  pendingSkillIds: c = [],
  onOpenSidebar: f,
  onCreateSkill: p,
  onInstall: x,
  onUninstall: y,
  onRetry: h
}) {
  const [w, b] = v("installed"), [k, j] = v(""), [E, P] = v(!1), [$, B] = v([]), [W, A] = v(null), M = be(() => new Set(c), [c]), R = be(() => {
    const S = k.trim().toLowerCase();
    return n.filter((U) => w === "installed" !== U.installed ? !1 : S ? [U.name, U.source, U.description, ...U.tags].join(" ").toLowerCase().includes(S) : !0);
  }, [w, k, n]), D = (S) => {
    b(S), P(!1), B([]);
  }, C = () => {
    P((S) => !S), B([]);
  }, T = (S) => B((U) => U.includes(S) ? U.filter((d) => d !== S) : [...U, S]), K = (S) => S.installed ? y([S.id]) : x([S.id]), z = () => {
    $.length && (w === "installed" ? y($) : x($), B([]), P(!1));
  };
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !r && /* @__PURE__ */ e("button", { type: "button", onClick: f, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(Ot, { size: 20 }) }),
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
            /* @__PURE__ */ e(Ct, { size: 14 }),
            "新建 Skill"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${E ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Ze, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: k, onChange: (S) => j(S.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-5", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => D("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${w === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => D("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${w === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ t("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: E, onChange: (S) => {
                P(S.target.checked), B([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        s && /* @__PURE__ */ t("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: s }),
          h && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: h, children: "重新加载" })
        ] }),
        !s && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (S, U) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, U)) }),
        !s && !o && R.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": c.length > 0, children: R.map((S) => {
          const U = $.includes(S.id), d = M.has(S.id), a = U ? "border-skillSelectedBorder bg-skillSelectedSurface" : W === S.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ t("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${a}`, onMouseEnter: () => A(S.id), onMouseLeave: () => A((m) => m === S.id ? null : m), children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: S.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: S.source })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${xs[S.riskLevel]}`, children: fs[S.riskLevel] }),
                E && /* @__PURE__ */ e("button", { type: "button", onClick: () => T(S.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": U ? `取消选择 ${S.name}` : `选择 ${S.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${U ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: S.description }),
            /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: S.tags.map((m) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: m }, `${S.id}-${m}`)) }),
              !E && /* @__PURE__ */ e("button", { type: "button", disabled: d, onClick: () => K(S), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${W === S.id || d ? "inline-flex" : "hidden"} ${S.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: d ? "处理中..." : S.installed ? "卸载" : "安装" })
            ] })
          ] }, S.id);
        }) }) : !s && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    E && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ t("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ t("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        $.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: C, disabled: c.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: z, disabled: !$.length || c.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: c.length > 0 ? "处理中..." : w === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Ks as A,
  bn as B,
  Qn as C,
  Zn as D,
  Cn as E,
  Xs as F,
  Jt as G,
  Ys as H,
  rr as I,
  er as J,
  Ws as K,
  Vs as L,
  Zt as M,
  qs as N,
  Yn as O,
  qn as P,
  nr as Q,
  Os as R,
  Qs as S,
  kt as T,
  Gn as U,
  dt as a,
  Ue as b,
  Es as c,
  Nn as d,
  St as e,
  Yt as f,
  Mt as g,
  kn as h,
  vn as i,
  Ps as j,
  ln as k,
  Vn as l,
  Jn as m,
  Us as n,
  On as o,
  Bs as p,
  jn as q,
  Gs as r,
  Fs as s,
  Hs as t,
  Ds as u,
  Rs as v,
  _s as w,
  Rn as x,
  js as y,
  Is as z
};
