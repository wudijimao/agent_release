import { jsxs as t, Fragment as Oe, jsx as e } from "react/jsx-runtime";
import Re, { useMemo as ue, useState as N, useRef as ie, useCallback as Se, useEffect as me, useLayoutEffect as $t, forwardRef as Dt, useId as er } from "react";
import $e from "classnames";
import { Check as Je, Copy as ht, RefreshCcw as tr, ThumbsUp as rr, ThumbsDown as nr, FileText as ft, LoaderCircle as Ft, Puzzle as Ht, AtSign as qt, AlertCircle as sr, Paperclip as Wt, ArrowRight as Ut, Sparkles as ar, Loader2 as ct, ChevronDown as ut, ChevronRight as dt, Search as Ze, Globe as lr, BookOpen as or, Menu as Vt, FlaskConical as ir, X as Qe, Clock3 as Ct, Plus as St, Square as cr, Send as dr, UserPlus as ur, Building2 as mr, CheckCircle2 as rt, Trash2 as Ot, Folder as xt, PanelLeftClose as pr, SquarePen as hr, AlertTriangle as fr, Settings as xr, Pin as bt, MoreHorizontal as br, Pencil as gr, Share2 as yr, Upload as vr, SearchX as wr } from "lucide-react";
import Nr from "react-markdown";
import kr from "remark-gfm";
import Tr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as Cr } from "react-dom";
import { Crepe as gt } from "@milkdown/crepe";
import { editorViewCtx as yt, commandsCtx as Sr } from "@milkdown/kit/core";
import { lift as Mr } from "@milkdown/kit/prose/commands";
import { wrapInList as $r, liftListItem as Lr } from "@milkdown/kit/prose/schema-list";
import { TextSelection as Lt } from "@milkdown/kit/prose/state";
import { orderedListSchema as zr, bulletListSchema as Ar, listItemSchema as vt, paragraphSchema as Pr, setBlockTypeCommand as _r } from "@milkdown/kit/preset/commonmark";
const Er = "_button_3tg6r_1", Br = "_primary_3tg6r_5", jr = "_disabled_3tg6r_9", Ir = "_secondary_3tg6r_17", Rr = "_ghost_3tg6r_25", Dr = "_danger_3tg6r_33", Fr = "_small_3tg6r_41", Hr = "_medium_3tg6r_45", qr = "_large_3tg6r_49", Wr = "_roundedSquare_3tg6r_53", Ur = "_roundedSmall_3tg6r_57", Vr = "_roundedMedium_3tg6r_61", Or = "_roundedLarge_3tg6r_62", Xr = "_roundedFull_3tg6r_66", Kr = "_loadingSpinner_3tg6r_67", Gr = "_loading_3tg6r_67", Yr = "_fullWidth_3tg6r_90", Qr = "_icon_3tg6r_94", Ee = {
  button: Er,
  primary: Br,
  disabled: jr,
  secondary: Ir,
  ghost: Rr,
  danger: Dr,
  small: Fr,
  medium: Hr,
  large: qr,
  roundedSquare: Wr,
  roundedSmall: Ur,
  roundedMedium: Vr,
  roundedLarge: Or,
  roundedFull: Xr,
  loadingSpinner: Kr,
  loading: Gr,
  fullWidth: Yr,
  icon: Qr
}, Zr = {
  primary: Ee.primary,
  secondary: Ee.secondary,
  ghost: Ee.ghost,
  danger: Ee.danger
}, Jr = {
  small: Ee.small,
  medium: Ee.medium,
  large: Ee.large
}, en = {
  square: Ee.roundedSquare,
  small: Ee.roundedSmall,
  medium: Ee.roundedMedium,
  large: Ee.roundedLarge,
  full: Ee.roundedFull
}, Xe = Re.forwardRef(
  ({
    type: r = "primary",
    size: n = "medium",
    isLoading: l,
    loading: s,
    disabled: c = !1,
    children: f,
    icon: u,
    iconPosition: m = "left",
    className: w,
    fullWidth: p = !1,
    rounded: g = "medium",
    onClick: h,
    ...T
  }, U) => {
    const _ = l ?? s ?? !1, B = c || _, L = ue(() => _ ? /* @__PURE__ */ t(Oe, { children: [
      /* @__PURE__ */ e("span", { className: Ee.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: f })
    ] }) : u ? /* @__PURE__ */ t(Oe, { children: [
      m === "left" && /* @__PURE__ */ e("span", { className: Ee.icon, children: u }),
      f && /* @__PURE__ */ e("span", { children: f }),
      m === "right" && /* @__PURE__ */ e("span", { className: Ee.icon, children: u })
    ] }) : f, [f, _, u, m]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: U,
        className: $e(
          Ee.button,
          Zr[r],
          Jr[n],
          en[g],
          {
            [Ee.fullWidth]: p,
            [Ee.loading]: _,
            [Ee.disabled]: B
          },
          w
        ),
        disabled: B,
        onClick: h,
        ...T,
        children: L
      }
    );
  }
);
Xe.displayName = "BaseButton";
const tn = { small: "h-8", medium: "h-9", large: "h-14" }, Xt = Re.forwardRef(
  ({
    type: r = "text",
    placeholder: n,
    value: l,
    defaultValue: s,
    disabled: c = !1,
    readOnly: f = !1,
    error: u = !1,
    size: m = "medium",
    prefix: w,
    suffix: p,
    prefixIcon: g,
    suffixIcon: h,
    onChange: T,
    onFocus: U,
    onBlur: _,
    onClear: B,
    className: L,
    containerClassName: F,
    clearable: O = !1,
    label: A,
    helperText: C,
    ...j
  }, H) => {
    const [P, S] = N(!1), Y = ie(null), q = Se((o) => {
      Y.current = o, typeof H == "function" ? H(o) : H && (H.current = o);
    }, [H]), M = Se(() => {
      var d, x;
      const o = Y.current;
      o && ((x = (d = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : d.set) == null || x.call(o, ""), o.dispatchEvent(new Event("input", { bubbles: !0 })), o.focus(), B == null || B());
    }, [B]), k = ue(
      () => {
        var o;
        return O && P && String(l ?? ((o = Y.current) == null ? void 0 : o.value) ?? "").length > 0;
      },
      [O, P, l]
    );
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      A && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: A }),
      /* @__PURE__ */ t(
        "div",
        {
          className: $e(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            tn[m],
            !c && !u && "hover:border-controlBorder",
            P && !c && !u && "border-primary ring-2 ring-brandFocus",
            u && "border-danger",
            u && P && "ring-2 ring-dangerFocus",
            c && "cursor-not-allowed bg-surfaceMuted",
            F
          ),
          children: [
            (w || g) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: w || g }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: q,
                type: r,
                placeholder: n,
                value: l,
                defaultValue: s,
                disabled: c,
                readOnly: f,
                className: $e("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", L),
                onFocus: (o) => {
                  S(!0), U == null || U(o);
                },
                onBlur: (o) => {
                  S(!1), _ == null || _(o);
                },
                onChange: T,
                ...j
              }
            ),
            /* @__PURE__ */ t("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              k && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (o) => o.preventDefault(), onClick: M, "aria-label": "清空", children: "✕" }),
              p || h
            ] })
          ]
        }
      ),
      C && /* @__PURE__ */ e("div", { className: $e("text-xs leading-6", u ? "text-danger" : "text-mutedText"), children: C })
    ] });
  }
);
Xt.displayName = "BaseInput";
const rn = { small: "h-8", medium: "h-9", large: "h-14" }, nn = Re.forwardRef(
  ({ options: r = [], value: n, defaultValue: l, placeholder: s, disabled: c = !1, error: f = !1, size: u = "medium", label: m, helperText: w, onChange: p, className: g, ...h }, T) => {
    const U = Se((_) => {
      const B = _.target.value, L = r.find((F) => String(F.value) === B);
      p == null || p(B === "" ? "" : (L == null ? void 0 : L.value) ?? B);
    }, [p, r]);
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      m && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: m }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          "select",
          {
            ref: T,
            className: $e(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              f && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              rn[u],
              g
            ),
            value: n ?? l ?? "",
            disabled: c,
            onChange: U,
            ...h,
            children: [
              s && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: s }),
              r.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      w && /* @__PURE__ */ e("div", { className: $e("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: w })
    ] });
  }
);
nn.displayName = "BaseSelect";
const sn = "_container_ykn59_1", an = "_item_ykn59_10", ln = "_itemActive_ykn59_27", on = "_itemDisabled_ykn59_27", cn = "_sizeSmall_ykn59_43", dn = "_sizeMiddle_ykn59_49", un = "_sizeLarge_ykn59_55", Ye = {
  container: sn,
  item: an,
  itemActive: ln,
  itemDisabled: on,
  sizeSmall: cn,
  sizeMiddle: dn,
  sizeLarge: un
}, mn = {
  small: Ye.sizeSmall,
  middle: Ye.sizeMiddle,
  large: Ye.sizeLarge
};
function js({
  options: r,
  value: n,
  defaultValue: l,
  onChange: s,
  size: c = "middle",
  disabled: f = !1,
  className: u
}) {
  var h;
  const [m, w] = N(
    l ?? ((h = r[0]) == null ? void 0 : h.value) ?? ""
  ), p = n ?? m, g = (T) => {
    f || (n === void 0 && w(T), s == null || s(T));
  };
  return /* @__PURE__ */ e("div", { className: $e(Ye.container, mn[c], u), children: r.map((T) => {
    const U = p === T.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: $e(Ye.item, U && Ye.itemActive, f && Ye.itemDisabled),
        onClick: () => g(T.value),
        disabled: f,
        "aria-pressed": U,
        children: T.label
      },
      T.value
    );
  }) });
}
const pn = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(0)} KB` : `${(r / (1024 * 1024)).toFixed(0)} MB`, hn = Re.forwardRef(
  ({ accept: r, multiple: n = !1, disabled: l = !1, onChange: s, onError: c, maxSize: f, children: u, className: m, dragable: w = !0, placeholderTitle: p, placeholderDescription: g, placeholderIcon: h, maxCount: T }, U) => {
    const _ = ie(null), [B, L] = N(!1), F = Se((A) => {
      if (T && A.length > T) {
        c == null || c(new Error(`单次最多上传 ${T} 个文件`));
        return;
      }
      if (f) {
        for (const C of Array.from(A))
          if (C.size > f) {
            c == null || c(new Error(`文件“${C.name}”超过大小限制（${pn(f)}）`));
            return;
          }
      }
      s == null || s(A);
    }, [T, f, s, c]), O = () => {
      var A;
      l || (A = _.current) == null || A.click();
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: U,
        className: $e(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          B && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          l && "cursor-not-allowed opacity-60",
          m
        ),
        onClick: O,
        onKeyDown: (A) => {
          !l && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), O());
        },
        onDragOver: (A) => {
          w && !l && (A.preventDefault(), L(!0));
        },
        onDragLeave: () => L(!1),
        onDrop: (A) => {
          w && !l && (A.preventDefault(), L(!1), F(A.dataTransfer.files));
        },
        role: "button",
        tabIndex: l ? -1 : 0,
        "aria-disabled": l,
        children: [
          /* @__PURE__ */ e("input", { ref: _, type: "file", accept: r, multiple: n, disabled: l, onChange: (A) => A.target.files && F(A.target.files), className: "hidden" }),
          u || /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: h ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: p ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: g ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
hn.displayName = "BaseUpload";
const fn = "_maskAnimation_1h49h_1", xn = "_modalAnimation_1h49h_5", zt = {
  maskAnimation: fn,
  modalAnimation: xn
}, Mt = ({
  visible: r,
  open: n = r,
  show: l = n,
  title: s,
  width: c = 520,
  centered: f = !0,
  destroyOnClose: u = !1,
  mask: m = !0,
  maskClosable: w = !0,
  okText: p = "确认",
  cancelText: g = "取消",
  confirmLoading: h = !1,
  okButtonProps: T,
  cancelButtonProps: U,
  onConfirm: _,
  onCancel: B,
  onClose: L,
  onOk: F,
  onDismiss: O,
  children: A,
  footer: C,
  className: j,
  bodyClassName: H
}) => {
  const P = l ?? !1, S = Se(async () => {
    try {
      _ ? await _() : F && await F();
    } catch (M) {
      console.error("Modal confirm error:", M);
    }
  }, [_, F]), Y = Se(() => {
    B ? B() : L ? L() : O == null || O();
  }, [B, L, O]), q = ue(() => {
    if (C === null) return null;
    if (C) return C;
    const { type: M, ...k } = U ?? {}, { type: o, ...d } = T ?? {};
    return /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Xe, { type: "secondary", size: "medium", onClick: Y, ...k, children: g }),
      /* @__PURE__ */ e(Xe, { type: "primary", size: "medium", isLoading: h, onClick: S, ...d, children: h ? "加载中..." : p })
    ] });
  }, [U, g, h, C, Y, S, T, p]);
  return !P && u || !P ? null : /* @__PURE__ */ t(Oe, { children: [
    m && /* @__PURE__ */ e("div", { className: $e("fixed inset-0 z-[1000] bg-overlayMask", zt.maskAnimation), onClick: () => w && Y(), role: "presentation" }),
    /* @__PURE__ */ t(
      "div",
      {
        className: $e(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          f && "left-1/2 top-1/2",
          zt.modalAnimation,
          j
        ),
        style: { width: c },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          s && /* @__PURE__ */ t("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: s }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: Y, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: $e("min-h-20 p-5 text-primaryText", H), children: A }),
          q
        ]
      }
    )
  ] });
};
Mt.displayName = "BaseModal";
const bn = ({ title: r, extra: n, children: l, hoverable: s = !1, loading: c = !1, bordered: f = !0, className: u, bodyClassName: m, onClick: w }) => /* @__PURE__ */ t(
  "div",
  {
    className: $e(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      f && "border border-borderGray",
      s && "cursor-pointer hover:border-borderGray hover:shadow-md",
      c && "pointer-events-none opacity-60",
      u
    ),
    onClick: w,
    children: [
      (r || n) && /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        r && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: r }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: $e("p-4 text-primaryText", (r || n) && "pt-1", m), children: l })
    ]
  }
);
bn.displayName = "BaseCard";
const gn = ({ columns: r, dataSource: n = [], rowKey: l = "id", loading: s = !1, bordered: c = !0, striped: f = !0, className: u, onRow: m }, w) => /* @__PURE__ */ t("div", { ref: w, className: $e("relative w-full overflow-x-auto bg-surface", u), children: [
  /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: c ? "border-b border-lineSubtle" : void 0, children: r.map((p) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: p.width, textAlign: p.align }, children: p.title }, p.key || String(p.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: r.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((p, g) => {
      const h = String(typeof l == "string" ? p[l] ?? g : g);
      return /* @__PURE__ */ e("tr", { className: $e(c && "border-b border-lineSoft last:border-b-0", f && "odd:bg-surface"), ...(m == null ? void 0 : m(p, g)) || {}, children: r.map((T) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: T.align }, children: T.render ? T.render(p[T.dataIndex], p, g) : String(p[T.dataIndex] ?? "") }, T.key || String(T.dataIndex))) }, h);
    }) })
  ] }),
  s && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), Is = Re.forwardRef(gn), yn = ({ current: r = 1, pageSize: n = 10, total: l = 0, onChange: s, showSizeChanger: c = !1, pageSizeOptions: f = [10, 20, 50, 100], onShowSizeChange: u, disabled: m = !1, className: w }) => {
  const p = ue(() => Math.ceil(l / n) || 1, [n, l]), g = Se((T) => u == null ? void 0 : u(1, Number(T.target.value)), [u]), h = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ t("div", { className: $e("flex flex-wrap items-center justify-center gap-4 p-4", w), children: [
    /* @__PURE__ */ e("button", { type: "button", className: h, onClick: () => r > 1 && (s == null ? void 0 : s(r - 1)), disabled: m || r <= 1, children: "← 上一页" }),
    /* @__PURE__ */ t("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      r,
      " / ",
      p,
      " 页，共 ",
      l,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: h, onClick: () => r < p && (s == null ? void 0 : s(r + 1)), disabled: m || r >= p, children: "下一页 →" }),
    c && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: g, disabled: m, children: f.map((T) => /* @__PURE__ */ t("option", { value: T, children: [
      T,
      " 条/页"
    ] }, T)) })
  ] });
};
yn.displayName = "BasePagination";
const Kt = ({ description: r = "暂无数据", image: n, children: l }) => /* @__PURE__ */ t("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  r && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: r }),
  l
] });
Kt.displayName = "BaseEmpty";
const mt = ({ trigger: r, items: n, footerItems: l = [], open: s = !1, onOpenChange: c, onTriggerClick: f, onItemClick: u, placement: m = "bottom-start", width: w, portal: p = !1, className: g, triggerClassName: h, menuClassName: T, listClassName: U, footerClassName: _ }) => {
  const B = ie(null), L = ie(null), [F, O] = N({}), A = m.endsWith("end"), C = m.startsWith("top");
  me(() => {
    if (!s || !p || !B.current) return;
    const S = B.current.getBoundingClientRect();
    O({ position: "fixed", left: A ? S.right : S.left, top: C ? S.top : S.bottom, transform: A ? "translateX(-100%)" : void 0 });
  }, [C, A, s, p, m]), me(() => {
    !s || !p || !C || !L.current || O((S) => ({ ...S, top: Number(S.top) - L.current.offsetHeight - 8 }));
  }, [C, s, p]), me(() => {
    if (!s || !c) return;
    const S = (Y) => {
      var M, k;
      const q = Y.target;
      (M = B.current) != null && M.contains(q) || (k = L.current) != null && k.contains(q) || c(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [c, s]);
  const j = ue(() => w ? { width: typeof w == "number" ? `${w}px` : w } : void 0, [w]), H = Se((S) => /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: $e(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !S.danger && !S.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !S.danger && S.active && "bg-primary-soft font-medium text-primary",
        S.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (Y) => u == null ? void 0 : u(S, Y),
      disabled: S.disabled,
      children: [
        S.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: S.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: S.label })
      ]
    },
    S.key
  ), [u]), P = s ? /* @__PURE__ */ t(
    "div",
    {
      ref: L,
      className: $e(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !p && "absolute",
        !p && !C && "top-[calc(100%+8px)]",
        !p && C && "bottom-[calc(100%+8px)]",
        !p && A ? "right-0" : p ? void 0 : "left-0",
        T
      ),
      style: p ? { ...F, ...j } : j,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: $e("flex min-h-0 flex-col gap-1", U), children: n.map(H) }),
        l.length > 0 && /* @__PURE__ */ e("div", { className: $e("flex flex-col gap-1 border-t border-lineSoft pt-2", _), children: l.map(H) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ t("div", { ref: B, className: $e("relative inline-block", g), children: [
    /* @__PURE__ */ e("button", { type: "button", className: $e("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", h), onClick: (S) => {
      f == null || f(S), c == null || c(!s);
    }, "aria-haspopup": "menu", "aria-expanded": s, children: r }),
    p ? P && Cr(P, document.body) : P
  ] });
};
mt.displayName = "BaseActionMenu";
const vn = ({
  markdownContent: r,
  onRefresh: n,
  feedback: l,
  onFeedback: s,
  disabled: c = !1
}) => {
  const [f, u] = N(!1), m = !!(n || s), w = Se(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), u(!0), window.setTimeout(() => u(!1), 1200);
      } catch {
      }
  }, [r]);
  return /* @__PURE__ */ t(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${m ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: w,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: f ? "已复制 Markdown" : "复制 Markdown",
            children: f ? /* @__PURE__ */ e(Je, { size: 15 }) : /* @__PURE__ */ e(ht, { size: 15 })
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
            children: /* @__PURE__ */ e(tr, { size: 15 })
          }
        ),
        s && /* @__PURE__ */ t(Oe, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(rr, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${l === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(nr, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, wn = Re.memo(vn);
function Nn({ draft: r, onConfirm: n }) {
  const l = r.status === "saving", s = r.status === "saved", c = l || s || !n;
  return /* @__PURE__ */ t("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ t("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(ft, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }),
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ e("p", { className: "m-0 text-xs leading-5 text-tertiaryText", children: "Mira 文档草稿" }),
        /* @__PURE__ */ e("h3", { className: "m-0 line-clamp-2 text-sm font-medium leading-5 text-primaryText", children: r.title }),
        r.summary && /* @__PURE__ */ e("p", { className: "mt-1 line-clamp-2 text-xs leading-5 text-secondaryText", children: r.summary })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3 border-t border-lineSubtle pt-3", children: [
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: s ? "已保存到项目" : `保存到 ${r.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ e(
        Xe,
        {
          type: s ? "secondary" : "primary",
          size: "small",
          disabled: c,
          onClick: () => n == null ? void 0 : n(r.actionKey),
          children: l ? /* @__PURE__ */ t(Oe, { children: [
            /* @__PURE__ */ e(Ft, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
            "保存中"
          ] }) : s ? /* @__PURE__ */ t(Oe, { children: [
            /* @__PURE__ */ e(Je, { size: 14, "aria-hidden": "true" }),
            "已保存"
          ] }) : "确认保存"
        }
      )
    ] }),
    r.status === "error" && r.errorMessage && /* @__PURE__ */ e("p", { role: "alert", className: "mb-0 mt-2 text-xs leading-5 text-danger", children: r.errorMessage })
  ] });
}
const At = "[[PAPER_LIST_JSON]]";
let Pt = !1, lt = null, ot = null, it = null;
const kn = async () => (ot || (ot = Promise.all([import("remark-math"), import("rehype-katex")]).then(([r, n]) => ({
  remark: r.default,
  rehype: n.default
})).catch((r) => {
  throw ot = null, r;
})), ot), Tn = async () => (it || (it = import("remark-emoji").then((r) => r.default).catch(() => (it = null, null))), it), Cn = async () => {
  lt || (lt = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw lt = null, n;
  }));
  const r = await lt;
  if (!Pt) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    r.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), Pt = !0;
  }
  return r;
}, pt = (r) => typeof r == "string" || typeof r == "number" ? String(r) : Array.isArray(r) ? r.map((n) => pt(n)).join("") : Re.isValidElement(r) ? pt(r.props.children) : "", _t = (r) => {
  const n = r.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, Sn = ({ href: r, label: n }) => {
  const l = ue(() => {
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
      /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: l }),
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
        children: /* @__PURE__ */ e(Ut, { size: 14 })
      }
    )
  ] });
}, Mn = ({ language: r, rawCode: n, className: l, children: s }) => {
  const [c, f] = N(!1), u = Se(async () => {
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
          onClick: u,
          className: `code-block-copy-btn ${c ? "copied" : ""}`,
          title: c ? "已复制代码" : "复制代码",
          children: [
            c ? /* @__PURE__ */ e(Je, { size: 12 }) : /* @__PURE__ */ e(ht, { size: 12 }),
            c ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${l ?? ""}`.trim(), children: s }) })
  ] });
}, $n = ({ rawCode: r }) => {
  const [n, l] = N(!1), s = Se(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), l(!0), window.setTimeout(() => l(!1), 1200);
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
            n ? /* @__PURE__ */ e(Je, { size: 12 }) : /* @__PURE__ */ e(ht, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: r }) })
  ] });
}, Gt = (r) => {
  const n = typeof r.title == "string" ? r.title.trim() : "", l = typeof r.pmid == "string" ? r.pmid.trim() : "", s = typeof r.doi == "string" ? r.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !l || !s ? null : { title: n, pmid: l, doi: s };
}, Et = (r) => {
  const n = r.replace(/\r/g, "").split(`
`).map((s) => s.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const l = [];
  return n.forEach((s, c) => {
    var h;
    const f = s.match(/PMID\s*[:：]\s*(\d{4,})/i), u = s.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!f || !u) return;
    const m = s.slice(0, f.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), w = ((h = n[c - 1]) == null ? void 0 : h.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", g = Gt({
      title: m || w,
      pmid: f[1],
      doi: u[1]
    });
    g && l.push(g);
  }), l.length === 0 ? null : { items: l };
}, Ln = (r) => {
  if (!r.startsWith(At))
    return Et(r);
  const n = r.slice(At.length).trim();
  if (!n) return null;
  try {
    const l = JSON.parse(n);
    if (!Array.isArray(l.items)) return null;
    const s = l.items.map((c) => Gt(c)).filter((c) => c !== null);
    return s.length === 0 ? null : { items: s };
  } catch {
    return Et(n);
  }
}, Yt = ({
  msg: r,
  actionKey: n,
  feedback: l,
  onFeedback: s,
  onRefresh: c,
  onConfirmMiraDraft: f,
  isTyping: u = !1,
  isStreaming: m
}) => {
  var M, k;
  const w = r.role === "user", p = m ?? u, g = ie(null), [h, T] = N(null), [U, _] = N(null), [B, L] = N(null), [F, O] = N(!1), A = ue(() => /```\s*mermaid/i.test(r.content), [r.content]), C = ue(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(r.content), [r.content]), j = ue(() => /:[a-zA-Z0-9_+-]+:/.test(r.content), [r.content]), H = ue(
    () => w ? null : Ln(r.content),
    [w, r.content]
  ), P = !!(H && H.items.length > 0);
  me(() => {
    if (!C || h || U) return;
    let o = !1;
    return kn().then((d) => {
      o || (T(() => d.remark), _(() => d.rehype));
    }).catch(() => {
    }), () => {
      o = !0;
    };
  }, [C, h, U]), me(() => {
    if (!j || F) return;
    let o = !1;
    return Tn().then((d) => {
      o || (d && L(() => d), O(!0));
    }), () => {
      o = !0;
    };
  }, [j, F]);
  const S = ue(() => {
    const o = [kr];
    return B && o.push(B), h && o.push(h), o;
  }, [B, h]), Y = ue(() => {
    const o = [Tr];
    return U && o.push(U), o;
  }, [U]), q = ue(
    () => ({
      table: ({ node: o, ...d }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...d }) }),
      tr: ({ node: o, ...d }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...d }),
      th: ({ node: o, ...d }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...d
        }
      ),
      td: ({ node: o, ...d }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...d }),
      blockquote: ({ node: o, ...d }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...d
        }
      ),
      input: ({ node: o, type: d, checked: x, ...W }) => d === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!x,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...W
        }
      ) : /* @__PURE__ */ e("input", { type: d, ...W }),
      section: ({ node: o, ...d }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...d }),
      p: ({ node: o, children: d, ...x }) => {
        const W = Re.Children.toArray(d);
        if (W.length === 1 && Re.isValidElement(W[0])) {
          const I = W[0];
          if (typeof I.props.href == "string" && _t(I.props.href)) {
            const ee = pt(I.props.children).trim();
            return /* @__PURE__ */ e(Sn, { href: I.props.href, label: ee });
          }
        }
        return /* @__PURE__ */ e("p", { ...x, children: d });
      },
      a: ({ node: o, href: d, ...x }) => {
        const W = d ?? "", I = /^https?:\/\/(dx\.)?doi\.org\//i.test(W) || /^doi:/i.test(W), ee = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(W) || /\/pmc\/|\/pmid\//i.test(W), fe = _t(W);
        return I || ee || fe ? /* @__PURE__ */ e(
          "a",
          {
            href: d,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...x
          }
        ) : /* @__PURE__ */ e("a", { href: d, target: "_blank", rel: "noreferrer", ...x });
      },
      pre({ children: o, ...d }) {
        const x = Re.Children.toArray(o).find(
          (xe) => Re.isValidElement(xe) && typeof xe.props.className == "string" && xe.props.className.includes("language-")
        );
        if (!x)
          return /* @__PURE__ */ e("pre", { ...d, children: o });
        const W = x.props.className ?? "", I = W.match(/language-([\w-]+)/), ee = I ? I[1].toLowerCase() : "code", fe = pt(x.props.children).replace(/\n$/, "");
        return ee === "mermaid" ? /* @__PURE__ */ e($n, { rawCode: fe }) : /* @__PURE__ */ e(Mn, { language: ee, rawCode: fe, className: W, children: x.props.children });
      },
      code({ children: o, className: d, ...x }) {
        return d ? /* @__PURE__ */ e("code", { className: d, ...x, children: o }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...x,
            children: o
          }
        );
      }
    }),
    []
  );
  return me(() => {
    if (w || p || !A) return;
    const o = g.current;
    if (!o) return;
    const d = Array.from(o.querySelectorAll(".mermaid")).filter(
      (x) => x.dataset.processed !== "true"
    );
    d.length !== 0 && Cn().then(async (x) => {
      await Promise.all(
        d.map(async (W, I) => {
          var be;
          const ee = (be = W.textContent) == null ? void 0 : be.trim();
          if (!ee) return;
          const fe = `mermaid-${Date.now()}-${I}`, { svg: xe } = await x.render(fe, ee);
          W.innerHTML = xe, W.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [w, p, A, r.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${w ? "justify-end" : "justify-start"}`, children: w ? /* @__PURE__ */ t("div", { className: "message-bubble-user", children: [
    (r.references && r.references.length > 0 || r.attachments && r.attachments.length > 0) && /* @__PURE__ */ t("div", { className: "mb-2 flex flex-wrap gap-2", children: [
      (M = r.references) == null ? void 0 : M.map((o) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${o.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
          children: [
            o.type === "skill" ? /* @__PURE__ */ e(Ht, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(qt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: o.label, children: o.label })
          ]
        },
        o.id
      )),
      (k = r.attachments) == null ? void 0 : k.map((o) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${o.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
          role: o.status === "error" ? "alert" : void 0,
          title: o.errorMessage,
          children: [
            o.status === "uploading" ? /* @__PURE__ */ e(Ft, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : o.status === "error" ? /* @__PURE__ */ e(sr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : o.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: o.previewUrl, alt: o.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Wt, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: o.name, children: o.name }),
            o.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
            o.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
          ]
        },
        o.id
      ))
    ] }),
    /* @__PURE__ */ e("p", { className: "whitespace-pre-wrap", children: r.content })
  ] }) : /* @__PURE__ */ t("div", { className: "flex w-full min-w-0 max-w-[85%] flex-col items-start gap-2", children: [
    P && H ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: H.items.map((o, d) => /* @__PURE__ */ t(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: o.title }),
            /* @__PURE__ */ t("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${o.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: o.pmid
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
                  href: `https://doi.org/${o.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: o.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${o.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(Ut, { size: 14 })
            }
          )
        ]
      },
      `${o.pmid}-${d}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: g,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          Nr,
          {
            remarkPlugins: S,
            rehypePlugins: Y,
            components: q,
            children: r.content
          }
        )
      }
    ),
    r.miraDraft && /* @__PURE__ */ e(Nn, { draft: r.miraDraft, onConfirm: f }),
    !P && r.content && !p && /* @__PURE__ */ e(
      wn,
      {
        markdownContent: r.content,
        onRefresh: c,
        feedback: l,
        onFeedback: n && s ? (o) => s(n, o) : void 0,
        disabled: p
      }
    )
  ] }) }) });
}, zn = Re.memo(Yt), An = {
  thinking: "思考中…",
  analyzing: "分析中…",
  searching: "搜索中…",
  executing: "执行中…",
  generating: "生成中…"
}, Bt = {
  knowledge: {
    icon: /* @__PURE__ */ e(or, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(lr, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(Ze, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, Tt = ({
  phase: r,
  searchSteps: n = [],
  defaultExpanded: l = !0
}) => {
  const [s, c] = N(l), f = ie(null);
  me(() => {
    n.length > 0 && c(!0);
  }, [n.length]);
  const u = n.length > 0;
  return /* @__PURE__ */ t("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: r === "generating" ? /* @__PURE__ */ e(ar, { size: 14, className: "text-primary animate-pulse" }) : /* @__PURE__ */ e(ct, { size: 14, className: "animate-spin text-primary" }) }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: An[r] }),
      u && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => c((m) => !m),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            s ? /* @__PURE__ */ e(ut, { size: 12 }) : /* @__PURE__ */ e(dt, { size: 12 }),
            /* @__PURE__ */ t("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    u && /* @__PURE__ */ e(
      "div",
      {
        ref: f,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${s ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((m, w) => {
          const p = Bt[m.type] ?? Bt.tool;
          return /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: p.colorClass, children: p.icon }),
                /* @__PURE__ */ e("span", { className: "truncate max-w-[480px]", children: m.label })
              ]
            },
            `${m.type}-${w}-${m.label}`
          );
        })
      }
    )
  ] });
}, Pn = Re.memo(Tt);
function _n(r, n) {
  if (typeof r == "function") {
    r(n);
    return;
  }
  r && (r.current = n);
}
function wt(r) {
  const n = Number.parseFloat(r);
  return Number.isFinite(n) ? n : 0;
}
function En({
  messages: r,
  isTyping: n,
  statusPhase: l = "thinking",
  searchSteps: s = [],
  hasReceivedAssistantChunk: c = !1,
  contentMaxWidth: f = 800,
  selection: u,
  scrollbar: m,
  feedbackByMessageKey: w,
  getMessageKey: p = (L, F) => String(F),
  onFeedback: g,
  onRegenerate: h,
  onConfirmMiraDraft: T,
  onScroll: U,
  scrollContainerRef: _,
  onMessageElement: B
}) {
  var o, d;
  const L = !!u, F = ie(null), O = ie(null), A = ie(/* @__PURE__ */ new Map()), C = ie(), [j, H] = N();
  let P = -1, S = -1;
  if (n) {
    for (let x = r.length - 1; x >= 0; x -= 1)
      if (((o = r[x]) == null ? void 0 : o.role) === "user") {
        S = x;
        break;
      }
    for (let x = r.length - 1; x > S; x -= 1)
      if (((d = r[x]) == null ? void 0 : d.role) === "assistant") {
        P = x;
        break;
      }
  }
  const Y = S >= 0 ? p(r[S], S) : void 0, q = P >= 0 ? p(r[P], P) : void 0, M = Y && q ? `${Y}:${q}` : void 0, k = Se(
    (x) => {
      F.current = x, _n(_, x);
    },
    [_]
  );
  return $t(() => {
    if (!M || !q || S < 0 || P < 0)
      return;
    const x = F.current, W = O.current, I = A.current.get(S);
    if (!x || !W || !I) return;
    const ee = () => {
      const xe = window.getComputedStyle(x), be = window.getComputedStyle(W), Z = x.clientHeight - wt(xe.paddingTop) - wt(xe.paddingBottom), E = wt(be.rowGap || be.gap), z = Math.max(
        0,
        Math.floor(Z - I.offsetHeight - E)
      );
      H(
        (R) => (R == null ? void 0 : R.assistantKey) === q && R.minHeight === z ? R : { assistantKey: q, minHeight: z }
      );
    };
    ee();
    const fe = new ResizeObserver(ee);
    return fe.observe(x), fe.observe(I), () => fe.disconnect();
  }, [
    P,
    q,
    M,
    S
  ]), $t(() => {
    if (!M || !q || (j == null ? void 0 : j.assistantKey) !== q || S < 0 || C.current === M)
      return;
    const x = F.current, W = A.current.get(S);
    !x || !W || (x.scrollTo({ top: W.offsetTop, behavior: "auto" }), C.current = M);
  }, [q, M, S, j]), /* @__PURE__ */ t("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: k,
        "data-chat-scroll-container": !0,
        onScroll: U,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ t(
          "div",
          {
            ref: O,
            className: `flex w-full flex-col ${L ? "gap-3" : "gap-8"}`,
            style: { maxWidth: f },
            children: [
              r.map((x, W) => {
                const I = p(x, W), ee = (u == null ? void 0 : u.selectedMessageKeys.has(I)) ?? !1;
                return /* @__PURE__ */ t(
                  "div",
                  {
                    "data-chat-message-index": W,
                    "data-chat-turn-reserved": (j == null ? void 0 : j.assistantKey) === I ? "true" : void 0,
                    ref: (fe) => {
                      fe ? A.current.set(W, fe) : A.current.delete(W), B == null || B(W, fe);
                    },
                    className: L ? "flex w-full items-start gap-2" : void 0,
                    style: (j == null ? void 0 : j.assistantKey) === I ? { minHeight: j.minHeight } : void 0,
                    children: [
                      u && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => u.onToggleMessage(I),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": ee ? "取消选择消息" : "选择消息",
                          children: ee ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Je, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        "div",
                        {
                          className: u ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${ee ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${x.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Yt,
                              {
                                msg: x,
                                actionKey: I,
                                feedback: w == null ? void 0 : w[I],
                                onFeedback: g,
                                onRefresh: h ? () => h(W) : void 0,
                                onConfirmMiraDraft: T,
                                isTyping: n && W === P
                              }
                            ),
                            W === P && n && !c && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              Tt,
                              {
                                phase: l,
                                searchSteps: [...s]
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  I
                );
              }),
              P < 0 && n && !c && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(Tt, { phase: l, searchSteps: [...s] }) }) })
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
Re.memo(En);
function Rs({
  children: r,
  maxWidth: n = 840,
  disclaimer: l = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: n },
      children: [
        r,
        l && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: l })
      ]
    }
  );
}
const Ds = Dt(
  function({ header: n, children: l, sidePanels: s }, c) {
    return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ t("div", { ref: c, className: "flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: l }),
        s
      ] })
    ] });
  }
), Fs = Dt(
  function({ open: n, width: l, resizing: s = !1, children: c }, f) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: f,
        style: { width: n ? l : 0 },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${s ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: l }, className: "h-full min-w-0", children: c })
      }
    );
  }
);
function Bn({
  isSidebarOpen: r,
  title: n,
  editingTitle: l,
  titleInputRef: s,
  divided: c = !1,
  actions: f,
  onOpenSidebar: u,
  onStartEditTitle: m,
  onEditingTitleChange: w,
  onCommitTitle: p,
  onEditingTitleKeyDown: g
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
              onClick: u,
              className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
              title: "展开边栏",
              "aria-label": "展开边栏",
              children: /* @__PURE__ */ e(Vt, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: l !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              value: l,
              onChange: (T) => w == null ? void 0 : w(T.target.value),
              onBlur: p,
              onKeyDown: g,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${m ? "cursor-pointer" : ""}`,
              onClick: m,
              title: m ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        f && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: f })
      ]
    }
  );
}
function Hs({ active: r = !1, icon: n, label: l, onClick: s }) {
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: s,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${r ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: l })
      ]
    }
  );
}
function qs({
  items: r,
  activeMessageIndex: n,
  initiallyExpanded: l = !1,
  onSelect: s
}) {
  const [c, f] = N(l), [u, m] = N(null), [w, p] = N(0), [g, h] = N(0), [T, U] = N(!1), _ = ie(null), B = ie({}), L = ie(null), F = Se(() => {
    const C = _.current;
    if (!C) {
      p(0), h(0);
      return;
    }
    const { scrollTop: j, scrollHeight: H, clientHeight: P } = C;
    if (H <= P || P <= 0) {
      p(0), h(0);
      return;
    }
    const S = Math.max(P / H * P, 24), Y = P - S, q = j / Math.max(H - P, 1);
    p(S), h(Y * q);
  }, []), O = Se(() => {
    F(), U(!0), L.current !== null && window.clearTimeout(L.current), L.current = window.setTimeout(() => U(!1), 650);
  }, [F]), A = () => {
    L.current !== null && (window.clearTimeout(L.current), L.current = null), f(!1), m(null), U(!1);
  };
  return me(() => {
    if (!c) return;
    const C = window.requestAnimationFrame(F);
    return () => window.cancelAnimationFrame(C);
  }, [c, r.length, F]), me(() => {
    const C = _.current, j = B.current[n];
    if (!C || !j) return;
    const H = C.scrollTop, P = H + C.clientHeight, S = j.offsetTop, Y = S + j.offsetHeight, q = 16;
    S < H + q ? C.scrollTo({ top: Math.max(S - q, 0), behavior: "auto" }) : Y > P - q && C.scrollTo({
      top: Math.max(Y - C.clientHeight + q, 0),
      behavior: "auto"
    });
  }, [n, r.length]), me(() => () => {
    L.current !== null && window.clearTimeout(L.current);
  }, []), r.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => f(!0),
      onMouseLeave: A,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: _,
          onScroll: O,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${c ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: r.map((C) => {
              const j = C.messageIndex === n, H = u === C.messageIndex;
              return /* @__PURE__ */ t(
                "button",
                {
                  ref: (P) => {
                    B.current[C.messageIndex] = P;
                  },
                  type: "button",
                  onClick: () => s(C.messageIndex),
                  onMouseEnter: () => m(C.messageIndex),
                  onMouseLeave: () => m(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${c ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${C.messageIndex + 1} 条用户消息`,
                  title: C.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${c ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${j ? "text-primary" : H ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: C.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${j ? "h-[4px] w-[12px] bg-primary" : H ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                C.messageIndex
              );
            }) }),
            c && w > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${T ? "opacity-100" : "opacity-0"}`,
                style: { height: w, transform: `translateY(${g}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Ws({
  selectedCount: r,
  shareLink: n,
  modalOpen: l,
  copied: s = !1,
  contentMaxWidth: c = 840,
  onCancel: f,
  onCreateLink: u,
  onCloseModal: m,
  onCopyLink: w
}) {
  return /* @__PURE__ */ t(Oe, { children: [
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
            /* @__PURE__ */ e(Xe, { type: "secondary", size: "small", onClick: f, children: "取消" }),
            /* @__PURE__ */ e(
              Xe,
              {
                type: "primary",
                size: "small",
                disabled: r <= 0,
                onClick: u,
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
        visible: l,
        title: "创建分享链接",
        width: 450,
        onCancel: m,
        footer: null,
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: w,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  s ? /* @__PURE__ */ e(Je, { size: 14 }) : /* @__PURE__ */ e(ht, { size: 14 }),
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
function Us({
  tabs: r,
  activeKey: n,
  onSelectTab: l,
  onCloseTab: s,
  onClose: c,
  onResizeStart: f
}) {
  const u = r.find((m) => m.key === n) ?? null;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
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
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: r.map((m) => {
        const w = m.key === n;
        return /* @__PURE__ */ t("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => l(m.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${w ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                m.type === "knowledge" ? /* @__PURE__ */ e(ft, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(ir, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: m.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (p) => {
                p.stopPropagation(), s(m.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${m.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(Qe, { size: 12 })
            }
          )
        ] }, m.key);
      }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: c,
          className: "rounded-full p-1.5 text-secondaryText transition-colors hover:bg-bgLight",
          title: "关闭预览",
          "aria-label": "关闭预览",
          children: /* @__PURE__ */ e(Qe, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 pb-4 pt-2", children: u ? /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ e("h3", { className: "break-words text-base font-semibold text-primaryText", children: u.title }),
        u.type === "knowledge" && /* @__PURE__ */ e("div", { className: "text-xs text-tertiaryText", children: u.subtitle }),
        u.status && /* @__PURE__ */ e("div", { className: "inline-flex items-center rounded-full bg-bgLight px-2 py-1 text-xs text-secondaryText", children: u.status })
      ] }),
      /* @__PURE__ */ e("div", { className: "rounded-xl border border-borderGray bg-chatPreviewContentSurface p-3", children: /* @__PURE__ */ e("p", { className: "whitespace-pre-line break-words text-sm leading-6 text-secondaryText", children: u.content }) })
    ] }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Vs({
  projectName: r = "未归属项目",
  searchQuery: n,
  error: l,
  knowledgeDocs: s,
  experiments: c,
  activePreviewKey: f,
  onSearchQueryChange: u,
  onOpenKnowledge: m,
  onOpenExperiment: w,
  onResizeStart: p
}) {
  const g = s.length + c.length;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
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
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ t("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ t("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: r }),
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(Ze, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (h) => u(h.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: l ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: l }) : g === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ t(Oe, { children: [
        s.map((h) => {
          const T = `knowledge:${h.id}`, U = f === T;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => m(h.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${U ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${U ? "font-semibold" : "font-normal"}`, children: h.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: h.tags[0] ?? "未分类" })
              ]
            },
            h.id
          );
        }),
        c.map((h) => {
          const T = `experiment:${h.id}`, U = f === T;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => w(h.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${U ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${U ? "font-semibold" : "font-normal"}`, children: h.title }),
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
const jn = 50, In = 100 * 1024 * 1024, Rn = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", Dn = [
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
], Fn = /(?:^|\s)\/([^\s/]*)$/, Hn = /(?:^|\s)@([^\s@]*)$/, qn = (r, n) => {
  const s = r.slice(0, n).match(Fn);
  return s ? s[1] : null;
}, Wn = (r, n) => {
  const s = r.slice(0, n).match(Hn);
  return s ? s[1] : null;
}, Os = (r, n, l, s) => {
  const c = r.slice(0, n), f = r.slice(l), u = c.match(/(?:^|\s)\/[^\s/]*$/);
  if (!u) {
    const h = `/${s} `;
    return { value: `${c}${h}${f}`, cursor: c.length + h.length };
  }
  const m = c.length - u[0].length, p = `${u[0].startsWith(" ") ? " " : ""}/${s} `, g = `${c.slice(0, m)}${p}`;
  return {
    value: `${g}${f}`,
    cursor: g.length
  };
}, Xs = (r, n, l, s) => {
  const c = r.slice(0, n), f = r.slice(l), u = c.match(/(?:^|\s)@[^\s@]*$/);
  if (!u) {
    const h = `@${s} `;
    return { value: `${c}${h}${f}`, cursor: c.length + h.length };
  }
  const m = c.length - u[0].length, p = `${u[0].startsWith(" ") ? " " : ""}@${s} `, g = `${c.slice(0, m)}${p}`;
  return {
    value: `${g}${f}`,
    cursor: g.length
  };
}, Un = [], Ks = [], Qt = ({
  onSend: r,
  disabled: n,
  isStreaming: l = !1,
  onCancel: s,
  leadingControls: c,
  skillOptions: f = Dn,
  fileOptions: u = Un,
  uploadAccept: m,
  validateUploadFile: w,
  onUploadValidationError: p
}) => {
  const [g, h] = N(""), [T, U] = N(!1), [_, B] = N(!1), [L, F] = N(""), [O, A] = N(-1), [C, j] = N(!1), [H, P] = N(""), [S, Y] = N(-1), [q, M] = N([]), [k, o] = N([]), [d, x] = N([]), [W, I] = N(!1), ee = ie(null), fe = ie(null), xe = er(), be = ie([]), Z = l && !!s;
  me(() => {
    be.current = q;
  }, [q]), me(() => () => {
    be.current.forEach((a) => {
      a.previewUrl && URL.revokeObjectURL(a.previewUrl);
    });
  }, []);
  const E = ue(() => {
    const a = L.trim().toLowerCase();
    return a ? f.filter((b) => `${b.id} ${b.description} ${b.source}`.toLowerCase().includes(a)) : f;
  }, [f, L]), z = ue(() => {
    const a = H.trim().toLowerCase();
    return a ? u.filter((b) => `${b.name} ${b.projectName} ${b.sourceType} ${b.operatorName ?? ""} ${b.operatedAt ?? ""}`.toLowerCase().includes(a)) : u.filter((b) => b.isRecent).slice(0, 10);
  }, [u, H]), R = Se((a, b) => {
    const K = b ?? a.length, ne = qn(a, K);
    if (ne !== null) {
      B(!0), F(ne), A(-1), j(!1), P(""), Y(-1);
      return;
    }
    const oe = Wn(a, K);
    if (oe !== null) {
      j(!0), P(oe), Y(-1), B(!1), F(""), A(-1);
      return;
    }
    B(!1), F(""), A(-1), j(!1), P(""), Y(-1);
  }, []), re = Se((a) => {
    if (a.disabled) return;
    const b = ee.current, K = (b == null ? void 0 : b.selectionStart) ?? g.length, ne = (b == null ? void 0 : b.selectionEnd) ?? K, oe = g.slice(0, K), he = g.slice(ne), ce = (() => {
      const pe = oe.match(/(?:^|\s)\/[^\s/]*$/);
      if (!pe)
        return { value: g, cursor: K };
      const ke = oe.length - pe[0].length, de = pe[0].startsWith(" ") ? " " : "", $ = `${oe.slice(0, ke)}${de}`;
      return {
        value: `${$}${he}`,
        cursor: $.length
      };
    })();
    o((pe) => {
      const ke = `skill-${a.id}`;
      return pe.some((de) => de.id === ke) ? pe : [...pe, { id: ke, type: "skill", label: a.id, sourceId: a.id }];
    }), h(ce.value), B(!1), F(""), A(-1), requestAnimationFrame(() => {
      b && (b.focus(), b.setSelectionRange(ce.cursor, ce.cursor));
    });
  }, [g]), je = Se((a) => {
    const b = ee.current, K = (b == null ? void 0 : b.selectionStart) ?? g.length, ne = (b == null ? void 0 : b.selectionEnd) ?? K, oe = g.slice(0, K), he = g.slice(ne), ce = (() => {
      const pe = oe.match(/(?:^|\s)@[^\s@]*$/);
      if (!pe)
        return { value: g, cursor: K };
      const ke = oe.length - pe[0].length, de = pe[0].startsWith(" ") ? " " : "", $ = `${oe.slice(0, ke)}${de}`;
      return {
        value: `${$}${he}`,
        cursor: $.length
      };
    })();
    x((pe) => {
      const ke = `doc-${a.id}`;
      return pe.some((de) => de.id === ke) ? pe : [...pe, { id: ke, type: "doc", label: a.name, sourceId: a.id }];
    }), h(ce.value), j(!1), P(""), Y(-1), requestAnimationFrame(() => {
      b && (b.focus(), b.setSelectionRange(ce.cursor, ce.cursor));
    });
  }, [g]), De = Se(() => {
    I(!1);
    const a = fe.current;
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
  }, []), Ie = Se((a) => {
    const b = Array.from(a.target.files ?? []);
    if (b.length === 0) return;
    const K = b.filter((ne) => {
      const oe = w == null ? void 0 : w(ne);
      return oe ? (p == null || p(oe), !1) : !0;
    });
    M((ne) => {
      const oe = new Set(ne.map((ce) => ce.id)), he = [...ne];
      return K.forEach((ce) => {
        if (ce.size > In || he.length >= jn) return;
        const pe = `${ce.name}-${ce.size}-${ce.lastModified}`;
        if (oe.has(pe)) return;
        const ke = ce.type.startsWith("image/");
        oe.add(pe), he.push({
          id: pe,
          name: ce.name,
          mimeType: ce.type || "application/octet-stream",
          previewUrl: ke ? URL.createObjectURL(ce) : void 0,
          file: ce
        });
      }), he;
    }), a.target.value = "";
  }, [p, w]), Ne = Se((a) => {
    M((b) => {
      const K = b.find((ne) => ne.id === a);
      return K != null && K.previewUrl && URL.revokeObjectURL(K.previewUrl), b.filter((ne) => ne.id !== a);
    });
  }, []), D = Se((a) => {
    o((b) => b.filter((K) => K.id !== a));
  }, []), we = Se((a) => {
    x((b) => b.filter((K) => K.id !== a));
  }, []), Te = Se(() => {
    !g.trim() || n || (r({
      content: g,
      attachments: q.map((a) => ({
        id: a.id,
        name: a.name,
        mimeType: a.mimeType,
        previewUrl: a.previewUrl,
        file: a.file
      })),
      references: [...k, ...d]
    }), h(""), M([]), o([]), x([]), B(!1), F(""), A(-1), j(!1), P(""), Y(-1));
  }, [g, n, r, q, d, k]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ t("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: xe,
        ref: fe,
        type: "file",
        multiple: !0,
        accept: m,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: Ie
      }
    ),
    (q.length > 0 || k.length > 0 || d.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
      k.map((a) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(Ht, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: a.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => D(a.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${a.label}`,
                children: /* @__PURE__ */ e(Qe, { size: 12 })
              }
            )
          ]
        },
        a.id
      )),
      d.map((a) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(qt, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: a.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => we(a.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${a.label}`,
                children: /* @__PURE__ */ e(Qe, { size: 12 })
              }
            )
          ]
        },
        a.id
      )),
      q.map((a) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            a.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: a.previewUrl, alt: a.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(Wt, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ t("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: a.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: a.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Ne(a.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatAttachmentTextMuted opacity-0 transition-all hover:bg-chatAttachmentHover hover:text-secondaryText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `删除文件 ${a.name}`,
                children: /* @__PURE__ */ e(Qe, { size: 12 })
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
        ref: ee,
        value: g,
        onChange: (a) => {
          const b = a.target.value;
          h(b), R(b, a.target.selectionStart);
        },
        onClick: (a) => {
          R(a.currentTarget.value, a.currentTarget.selectionStart);
        },
        onKeyUp: (a) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(a.key) || R(a.currentTarget.value, a.currentTarget.selectionStart);
        },
        onKeyDown: (a) => {
          if (a.key === "Enter" && (a.shiftKey || a.metaKey || a.ctrlKey)) {
            a.preventDefault();
            const b = a.currentTarget, K = b.selectionStart ?? g.length, ne = b.selectionEnd ?? K, oe = `${g.slice(0, K)}
${g.slice(ne)}`, he = K + 1;
            h(oe), R(oe, he), requestAnimationFrame(() => {
              b.setSelectionRange(he, he);
            });
            return;
          }
          if (_) {
            if (a.key === "ArrowDown") {
              a.preventDefault(), A((b) => E.length === 0 ? -1 : b < 0 ? 0 : (b + 1) % E.length);
              return;
            }
            if (a.key === "ArrowUp") {
              a.preventDefault(), A((b) => E.length === 0 ? -1 : b < 0 ? E.length - 1 : (b - 1 + E.length) % E.length);
              return;
            }
            if (a.key === "Escape") {
              a.preventDefault(), B(!1), F(""), A(-1);
              return;
            }
            if (a.key === "Enter" && !a.shiftKey) {
              a.preventDefault();
              const b = O >= 0 ? E[O] : void 0;
              b && re(b);
              return;
            }
          }
          if (C) {
            if (a.key === "ArrowDown") {
              a.preventDefault(), Y((b) => z.length === 0 ? -1 : b < 0 ? 0 : (b + 1) % z.length);
              return;
            }
            if (a.key === "ArrowUp") {
              a.preventDefault(), Y((b) => z.length === 0 ? -1 : b < 0 ? z.length - 1 : (b - 1 + z.length) % z.length);
              return;
            }
            if (a.key === "Escape") {
              a.preventDefault(), j(!1), P(""), Y(-1);
              return;
            }
            if (a.key === "Enter" && !a.shiftKey) {
              a.preventDefault();
              const b = S >= 0 ? z[S] : void 0;
              b && je(b);
              return;
            }
          }
          a.key === "Enter" && !a.shiftKey && (a.preventDefault(), Te());
        },
        disabled: n,
        onFocus: () => U(!0),
        onBlur: () => {
          U(!1), B(!1), j(!1);
        },
        placeholder: T ? Rn : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${q.length > 0 || k.length > 0 || d.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    _ && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (a) => a.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: L ? `搜索 skill：${L}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: E.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : E.map((a, b) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          disabled: a.disabled,
          title: a.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${a.disabled ? "cursor-not-allowed opacity-50" : b === O ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => re(a),
          children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-[10px] font-semibold leading-none text-chatMenuIcon", children: a.badge }),
            /* @__PURE__ */ t("span", { className: "min-w-0 flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-primaryText", children: a.id }),
              /* @__PURE__ */ e("span", { className: "truncate text-[12px] text-tertiaryText", children: a.description })
            ] }),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-[11px] text-tertiaryText", children: a.disabledReason || a.source })
          ]
        },
        a.id
      )) })
    ] }) }),
    C && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (a) => a.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(Ze, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: H ? `搜索文件：${H}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ t("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !H && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(Ct, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        z.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : z.map((a, b) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${b === S ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => je(a),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(ft, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: a.name }),
              !H && a.operatorName && a.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${a.operatorName} ${a.operatedAt}` })
            ]
          },
          a.id
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
            onMouseEnter: () => I(!0),
            onMouseLeave: () => I(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: De,
                  "aria-controls": xe,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(St, { size: 16 })
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${W ? "block" : "hidden"}`,
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
          onClick: Z ? s : Te,
          disabled: Z ? !1 : n || !g.trim(),
          "aria-label": Z ? "停止生成" : "发送消息",
          title: Z ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Z || g.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: Z ? /* @__PURE__ */ e(cr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(dr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
Re.memo(Qt);
const Vn = ({ messages: r, isTyping: n, statusPhase: l = "thinking", searchSteps: s = [] }) => {
  const c = ie(null);
  me(() => {
    var u;
    (u = c.current) == null || u.scrollIntoView({ behavior: "smooth" });
  }, [r.length, n]);
  const f = ue(() => r.map((u, m) => /* @__PURE__ */ e(zn, { msg: u }, `${m}-${u.role}`)), [r]);
  return /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    f,
    n && /* @__PURE__ */ e(Pn, { phase: l, searchSteps: s }),
    /* @__PURE__ */ e("div", { ref: c })
  ] });
};
Re.memo(Vn);
const On = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "生成项目日报"
], Zt = ({ onSelect: r, prompts: n = On }) => {
  const l = Se((s) => {
    r(s);
  }, [r]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((s) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => l(s),
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm",
      children: s
    },
    s
  )) });
};
Re.memo(Zt);
const Xn = (r, n) => {
  const l = Math.random() * r, s = Math.random() * n;
  return {
    x: l,
    y: s,
    baseX: l,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Gs({ onLogin: r, onLoginSuccess: n, onNavigate: l }) {
  const s = ie(null), c = ie(null), [f, u] = N(""), [m, w] = N(""), [p, g] = N(!0), [h, T] = N(!1), [U, _] = N(!1), [B, L] = N(null), F = ie(null), [O, A] = N(!1), [C, j] = N("email"), [H, P] = N(""), [S, Y] = N(""), [q, M] = N(""), [k, o] = N(""), [d, x] = N(0), [W, I] = N(!1), ee = ue(() => f.trim().length > 0 && m.trim().length > 0 && !h, [
    f,
    h,
    m
  ]);
  me(() => {
    if (d <= 0) return;
    const E = window.setTimeout(() => x((z) => z - 1), 1e3);
    return () => clearTimeout(E);
  }, [d]), me(
    () => () => {
      F.current !== null && window.clearTimeout(F.current);
    },
    []
  ), me(() => {
    const E = s.current, z = c.current;
    if (!E || !z) return;
    const R = E.getContext("2d");
    if (!R) return;
    const re = window.getComputedStyle(document.documentElement), je = re.getPropertyValue("--chatui-color-auth-particle-active").trim(), De = re.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Ie = re.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let Ne = 0, D = 0, we = 0, Te = window.devicePixelRatio || 1, a = [];
    const b = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, K = 150, ne = () => {
      const de = z.getBoundingClientRect();
      Te = window.devicePixelRatio || 1, D = de.width, we = de.height, E.width = D * Te, E.height = we * Te, E.style.width = `${D}px`, E.style.height = `${we}px`, R.setTransform(Te, 0, 0, Te, 0, 0);
      const $ = D < 768 ? 40 : 90;
      a = Array.from({ length: $ }, () => Xn(D, we));
    }, oe = (de) => {
      R.beginPath(), R.arc(de.x, de.y, de.size, 0, Math.PI * 2), R.closePath(), R.fill();
    }, he = () => {
      R.clearRect(0, 0, D, we);
      for (let de = 0; de < a.length; de += 1) {
        const $ = a[de];
        $.x += $.vx, $.y += $.vy, ($.x < 0 || $.x > D) && ($.vx = -$.vx), ($.y < 0 || $.y > we) && ($.vy = -$.vy);
        const X = b.x - $.x, v = b.y - $.y, y = Math.sqrt(X * X + v * v) || 1, Q = X / y, G = v / y, le = (b.radius - y) / b.radius, ye = Q * le * $.density, Pe = G * le * $.density;
        if (y < b.radius)
          $.x -= ye * 0.5, $.y -= Pe * 0.5, R.fillStyle = je, $.size = Math.min($.size + 0.1, 2.5);
        else {
          if ($.x !== $.baseX) {
            const ve = $.x - $.baseX;
            $.x -= ve / 50;
          }
          if ($.y !== $.baseY) {
            const ve = $.y - $.baseY;
            $.y -= ve / 50;
          }
          R.fillStyle = De, $.size = Math.max($.size - 0.05, 1);
        }
        oe($);
        for (let ve = de; ve < a.length; ve += 1) {
          const Me = a[ve], Fe = $.x - Me.x, ge = $.y - Me.y, te = Math.sqrt(Fe * Fe + ge * ge);
          if (te < K) {
            const ae = (1 - te / K) * 0.4;
            R.beginPath(), R.strokeStyle = Ie, R.globalAlpha = ae, R.lineWidth = 1, R.moveTo($.x, $.y), R.lineTo(Me.x, Me.y), R.stroke(), R.globalAlpha = 1, R.closePath();
          }
        }
      }
      Ne = window.requestAnimationFrame(he);
    }, ce = (de) => {
      const $ = z.getBoundingClientRect();
      b.x = de.clientX - $.left, b.y = de.clientY - $.top;
    }, pe = () => {
      b.x = -1e3, b.y = -1e3;
    }, ke = (de) => {
      if (de.touches.length < 1) return;
      const $ = z.getBoundingClientRect();
      b.x = de.touches[0].clientX - $.left, b.y = de.touches[0].clientY - $.top;
    };
    return ne(), he(), window.addEventListener("resize", ne), z.addEventListener("mousemove", ce), z.addEventListener("mouseleave", pe), z.addEventListener("touchmove", ke, { passive: !0 }), z.addEventListener("touchend", pe), () => {
      window.cancelAnimationFrame(Ne), window.removeEventListener("resize", ne), z.removeEventListener("mousemove", ce), z.removeEventListener("mouseleave", pe), z.removeEventListener("touchmove", ke), z.removeEventListener("touchend", pe);
    };
  }, []);
  const fe = async (E) => {
    if (E.preventDefault(), !!ee) {
      T(!0), L(null);
      try {
        const z = await r({ email: f.trim(), password: m, rememberLogin: p });
        if (!z.ok) {
          L(z.message);
          return;
        }
        _(!0), F.current = window.setTimeout(() => {
          _(!1), n();
        }, 900);
      } catch {
        L("登录失败，请稍后重试。");
      } finally {
        T(!1);
      }
    }
  }, xe = async () => {
    !H.trim() || d > 0 || (T(!0), await new Promise((E) => window.setTimeout(E, 1e3)), T(!1), I(!0), x(60));
  }, be = async () => {
    if (C === "email") {
      if (!H.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(H) || !S.trim() || S.length < 6 || !q.trim() || q.length < 6 || q !== k) return;
      j("success");
    }
  }, Z = () => {
    A(!1), j("email"), P(""), Y(""), M(""), o(""), x(0), I(!1);
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
      /* @__PURE__ */ t("form", { onSubmit: fe, className: "space-y-6", children: [
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: f,
              onChange: (E) => {
                u(E.target.value), L(null);
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
              value: m,
              onChange: (E) => {
                w(E.target.value), L(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        B && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: B }),
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ t("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: p,
                  onChange: (E) => g(E.target.checked),
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
          /* @__PURE__ */ e("button", { type: "button", onClick: () => l("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !ee,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: h ? "认证中..." : "登录" }),
              h && /* @__PURE__ */ t(
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
      !O && /* @__PURE__ */ t("div", { className: "mt-7", children: [
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
              onClick: () => l("/register"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(ur, { size: 16, className: "text-authTextFaint" }),
                "加入实验室"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "h-4 w-px bg-lineSubtle", "aria-hidden": "true" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => l("/register?mode=create-lab"),
              className: "inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault",
              children: [
                /* @__PURE__ */ e(mr, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      O && /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: Z,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        C === "email" && /* @__PURE__ */ t("div", { className: "space-y-5", children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: H,
                onChange: (E) => P(E.target.value),
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
                  onChange: (E) => Y(E.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: xe,
                disabled: d > 0 || h || !H.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${d > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: d > 0 ? `${d}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: q,
                onChange: (E) => M(E.target.value),
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
                value: k,
                onChange: (E) => o(E.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${k.length > 0 && q !== k ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          k.length > 0 && q !== k && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: be,
              disabled: !H.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(H) || !S.trim() || S.length < 6 || !q.trim() || q.length < 6 || q !== k,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        C === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(rt, { size: 40, className: "text-primary" }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
            /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请使用新密码登录" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: Z,
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${U ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(rt, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const Kn = (r, n) => {
  const l = Math.random() * r, s = Math.random() * n;
  return {
    x: l,
    y: s,
    baseX: l,
    baseY: s,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function Ys({
  mode: r = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: l,
  onRegister: s,
  onEnterWorkspace: c,
  onNavigate: f
}) {
  const u = ie(null), m = ie(null), w = ie(null), [p, g] = N("email"), [h, T] = N(""), [U, _] = N(""), [B, L] = N(""), [F, O] = N(""), A = r === "create-lab", [C, j] = N(""), [H, P] = N(""), [S, Y] = N(!1), [q, M] = N(0), [k, o] = N(null), d = C.length > 0 && C.trim().length < 6;
  me(() => {
    if (q <= 0) return;
    const z = window.setTimeout(() => M((R) => R - 1), 1e3);
    return () => clearTimeout(z);
  }, [q]), me(
    () => () => {
      w.current !== null && window.clearTimeout(w.current);
    },
    []
  ), me(() => {
    const z = u.current, R = m.current;
    if (!z || !R) return;
    const re = z.getContext("2d");
    if (!re) return;
    const je = window.getComputedStyle(document.documentElement), De = je.getPropertyValue("--chatui-color-auth-particle-active").trim(), Ie = je.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Ne = je.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let D = 0, we = 0, Te = 0, a = window.devicePixelRatio || 1, b = [];
    const K = { x: -1e3, y: -1e3, radius: 120 }, ne = 150, oe = () => {
      const $ = R.getBoundingClientRect();
      a = window.devicePixelRatio || 1, we = $.width, Te = $.height, z.width = we * a, z.height = Te * a, z.style.width = `${we}px`, z.style.height = `${Te}px`, re.setTransform(a, 0, 0, a, 0, 0);
      const X = we < 768 ? 40 : 90;
      b = Array.from({ length: X }, () => Kn(we, Te));
    }, he = ($) => {
      re.beginPath(), re.arc($.x, $.y, $.size, 0, Math.PI * 2), re.closePath(), re.fill();
    }, ce = () => {
      re.clearRect(0, 0, we, Te);
      for (let $ = 0; $ < b.length; $ += 1) {
        const X = b[$];
        X.x += X.vx, X.y += X.vy, (X.x < 0 || X.x > we) && (X.vx = -X.vx), (X.y < 0 || X.y > Te) && (X.vy = -X.vy);
        const v = K.x - X.x, y = K.y - X.y, Q = Math.sqrt(v * v + y * y) || 1, G = v / Q, le = y / Q, ye = (K.radius - Q) / K.radius, Pe = G * ye * X.density, ve = le * ye * X.density;
        Q < K.radius ? (X.x -= Pe * 0.5, X.y -= ve * 0.5, re.fillStyle = De, X.size = Math.min(X.size + 0.1, 2.5)) : (X.x !== X.baseX && (X.x -= (X.x - X.baseX) / 50), X.y !== X.baseY && (X.y -= (X.y - X.baseY) / 50), re.fillStyle = Ie, X.size = Math.max(X.size - 0.05, 1)), he(X);
        for (let Me = $; Me < b.length; Me += 1) {
          const Fe = b[Me], ge = X.x - Fe.x, te = X.y - Fe.y, ae = Math.sqrt(ge * ge + te * te);
          if (ae < ne) {
            const Be = (1 - ae / ne) * 0.4;
            re.beginPath(), re.strokeStyle = Ne, re.globalAlpha = Be, re.lineWidth = 1, re.moveTo(X.x, X.y), re.lineTo(Fe.x, Fe.y), re.stroke(), re.globalAlpha = 1, re.closePath();
          }
        }
      }
      D = window.requestAnimationFrame(ce);
    }, pe = ($) => {
      const X = R.getBoundingClientRect();
      K.x = $.clientX - X.left, K.y = $.clientY - X.top;
    }, ke = () => {
      K.x = -1e3, K.y = -1e3;
    }, de = ($) => {
      if ($.touches.length < 1) return;
      const X = R.getBoundingClientRect();
      K.x = $.touches[0].clientX - X.left, K.y = $.touches[0].clientY - X.top;
    };
    return oe(), ce(), window.addEventListener("resize", oe), R.addEventListener("mousemove", pe), R.addEventListener("mouseleave", ke), R.addEventListener("touchmove", de, { passive: !0 }), R.addEventListener("touchend", ke), () => {
      window.cancelAnimationFrame(D), window.removeEventListener("resize", oe), R.removeEventListener("mousemove", pe), R.removeEventListener("mouseleave", ke), R.removeEventListener("touchmove", de), R.removeEventListener("touchend", ke);
    };
  }, []);
  const x = async () => {
    if (!(!h.trim() || q > 0)) {
      Y(!0), o(null);
      try {
        const z = await n(h.trim());
        if (!z.ok) {
          o(z);
          return;
        }
        M(60);
      } catch {
        o({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        Y(!1);
      }
    }
  }, W = () => ({
    email: h.trim(),
    verificationCode: U.trim(),
    mode: r,
    ...A ? { labName: F.trim() } : { inviteCode: B.trim() }
  }), I = () => {
    const z = ["email", "password", "success"], R = z.indexOf(p);
    R < z.length - 1 && g(z[R + 1]);
  }, ee = ue(() => {
    if (S) return !1;
    switch (p) {
      case "email":
        return A ? h.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && U.trim().length >= 6 && F.trim().length > 0 : h.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && U.trim().length >= 6 && B.trim().length > 0;
      case "password":
        return C.trim().length >= 6 && C === H;
      default:
        return !1;
    }
  }, [p, h, U, B, F, A, C, H, S]), fe = async (z) => {
    if (z.preventDefault(), !!ee) {
      Y(!0), o(null);
      try {
        const R = W(), re = p === "password" ? await s({ ...R, password: C }) : await l(R);
        if (!re.ok) {
          o(re);
          return;
        }
        I();
      } catch {
        o({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        Y(!1);
      }
    }
  }, xe = {
    email: A ? "创建实验室" : "验证您的邮箱",
    password: "设置登录密码",
    success: ""
  }, be = {
    email: "",
    password: "",
    success: ""
  }, Z = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", E = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: m, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: u, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: xe[p] }),
        be[p] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: be[p] })
      ] }),
      p !== "success" && /* @__PURE__ */ t("form", { onSubmit: fe, className: "space-y-5", children: [
        p === "email" && /* @__PURE__ */ t(Oe, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: h,
                onChange: (z) => {
                  T(z.target.value), o(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Z
              }
            ),
            /* @__PURE__ */ e("span", { className: E, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: U,
                  onChange: (z) => {
                    _(z.target.value.replace(/\D/g, "").slice(0, 6)), o(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "off",
                  maxLength: 6,
                  className: Z
                }
              ),
              /* @__PURE__ */ e("span", { className: E, children: "验证码" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: x,
                disabled: q > 0 || S,
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${q > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: q > 0 ? `${q}s后获取` : "获取验证码"
              }
            )
          ] }),
          A ? /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: F,
                onChange: (z) => {
                  O(z.target.value), o(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Z
              }
            ),
            /* @__PURE__ */ e("span", { className: E, children: "实验室名称" })
          ] }) : /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: B,
                onChange: (z) => {
                  L(z.target.value), o(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Z
              }
            ),
            /* @__PURE__ */ e("span", { className: E, children: "邀请码" })
          ] })
        ] }),
        p === "password" && /* @__PURE__ */ t(Oe, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: C,
                onChange: (z) => {
                  j(z.target.value), o(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Z} ${(k == null ? void 0 : k.field) === "password" || d ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: E, children: "设置密码" }),
            ((k == null ? void 0 : k.field) === "password" || d) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (k == null ? void 0 : k.field) === "password" ? k.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: H,
                onChange: (z) => {
                  P(z.target.value), o(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Z} ${H.length > 0 && C !== H ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: E, children: "确认密码" }),
            H.length > 0 && C !== H && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        k && k.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: k.message }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !ee,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: S ? "处理中..." : p === "password" ? "完成注册" : "下一步" }),
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
      p === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(rt, { size: 40, className: "text-primary" }) })
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
              w.current = window.setTimeout(c, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      p !== "success" && /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
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
const Gn = (r, n) => {
  const l = Math.random() * r, s = Math.random() * n;
  return { x: l, y: s, baseX: l, baseY: s, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Qs({ onSendCode: r, onResetPassword: n, onBackToLogin: l }) {
  const s = ie(null), c = ie(null), f = ie(null), [u, m] = N("email"), [w, p] = N(""), [g, h] = N(""), [T, U] = N(""), [_, B] = N(""), [L, F] = N(!1), [O, A] = N(0), [C, j] = N(null);
  me(() => {
    if (O <= 0) return;
    const k = window.setTimeout(() => A((o) => o - 1), 1e3);
    return () => window.clearTimeout(k);
  }, [O]), me(() => {
    const k = s.current, o = c.current;
    if (!k || !o) return;
    const d = k.getContext("2d");
    if (!d) return;
    const x = window.getComputedStyle(document.documentElement), W = x.getPropertyValue("--chatui-color-auth-particle-active").trim(), I = x.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ee = x.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let fe = 0, xe = 0, be = 0, Z = [];
    const E = { x: -1e3, y: -1e3, radius: 120 }, z = 150, R = () => {
      const Ne = o.getBoundingClientRect(), D = window.devicePixelRatio || 1;
      xe = Ne.width, be = Ne.height, k.width = xe * D, k.height = be * D, k.style.width = `${xe}px`, k.style.height = `${be}px`, d.setTransform(D, 0, 0, D, 0, 0), Z = Array.from({ length: xe < 768 ? 40 : 90 }, () => Gn(xe, be));
    }, re = () => {
      d.clearRect(0, 0, xe, be);
      for (let Ne = 0; Ne < Z.length; Ne += 1) {
        const D = Z[Ne];
        D.x += D.vx, D.y += D.vy, (D.x < 0 || D.x > xe) && (D.vx = -D.vx), (D.y < 0 || D.y > be) && (D.vy = -D.vy);
        const we = E.x - D.x, Te = E.y - D.y, a = Math.sqrt(we * we + Te * Te) || 1, b = (E.radius - a) / E.radius;
        a < E.radius ? (D.x -= we / a * b * D.density * 0.5, D.y -= Te / a * b * D.density * 0.5, d.fillStyle = W, D.size = Math.min(D.size + 0.1, 2.5)) : (D.x -= (D.x - D.baseX) / 50, D.y -= (D.y - D.baseY) / 50, d.fillStyle = I, D.size = Math.max(D.size - 0.05, 1)), d.beginPath(), d.arc(D.x, D.y, D.size, 0, Math.PI * 2), d.fill();
        for (let K = Ne; K < Z.length; K += 1) {
          const ne = Z[K], oe = D.x - ne.x, he = D.y - ne.y, ce = Math.sqrt(oe * oe + he * he);
          ce >= z || (d.beginPath(), d.globalAlpha = (1 - ce / z) * 0.4, d.strokeStyle = ee, d.lineWidth = 1, d.moveTo(D.x, D.y), d.lineTo(ne.x, ne.y), d.stroke(), d.globalAlpha = 1);
        }
      }
      fe = window.requestAnimationFrame(re);
    }, je = (Ne) => {
      const D = o.getBoundingClientRect();
      E.x = Ne.clientX - D.left, E.y = Ne.clientY - D.top;
    }, De = (Ne) => {
      if (!Ne.touches.length) return;
      const D = o.getBoundingClientRect();
      E.x = Ne.touches[0].clientX - D.left, E.y = Ne.touches[0].clientY - D.top;
    }, Ie = () => {
      E.x = -1e3, E.y = -1e3;
    };
    return R(), re(), window.addEventListener("resize", R), o.addEventListener("mousemove", je), o.addEventListener("mouseleave", Ie), o.addEventListener("touchmove", De, { passive: !0 }), o.addEventListener("touchend", Ie), () => {
      window.cancelAnimationFrame(fe), window.removeEventListener("resize", R), o.removeEventListener("mousemove", je), o.removeEventListener("mouseleave", Ie), o.removeEventListener("touchmove", De), o.removeEventListener("touchend", Ie);
    };
  }, []), me(() => () => {
    f.current !== null && window.clearTimeout(f.current);
  }, []);
  const H = ue(() => w.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w) && g.length >= 6 && T.length >= 6 && T === _, [_, w, T, g]), P = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", S = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: c, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: s, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      u === "email" ? /* @__PURE__ */ t(Oe, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ t("form", { onSubmit: async (k) => {
          if (k.preventDefault(), !(!H || L)) {
            F(!0), j(null);
            try {
              const o = await n({ email: w.trim(), verificationCode: g, newPassword: T });
              if (!o.ok) {
                j(o.message);
                return;
              }
              m("success");
            } catch {
              j("密码重置失败，请稍后重试。");
            } finally {
              F(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "email", value: w, onChange: (k) => {
              p(k.target.value), j(null);
            }, required: !0, placeholder: " ", autoComplete: "off", className: P }),
            /* @__PURE__ */ e("span", { className: S, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "text", value: g, onChange: (k) => {
                h(k.target.value.replace(/\D/g, "").slice(0, 6)), j(null);
              }, required: !0, placeholder: " ", autoComplete: "off", maxLength: 6, className: P }),
              /* @__PURE__ */ e("span", { className: S, children: "验证码" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!w.trim() || O > 0 || L)) {
                F(!0), j(null);
                try {
                  const k = await r(w.trim());
                  if (!k.ok) {
                    j(k.message);
                    return;
                  }
                  A(60);
                } catch {
                  j("验证码发送失败，请稍后重试。");
                } finally {
                  F(!1);
                }
              }
            }, disabled: O > 0 || L, className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${O > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: O > 0 ? `${O}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: T, onChange: (k) => {
              U(k.target.value), j(null);
            }, required: !0, placeholder: " ", className: P }),
            /* @__PURE__ */ e("span", { className: S, children: "新密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: _, onChange: (k) => {
              B(k.target.value), j(null);
            }, required: !0, placeholder: " ", className: `${P} ${_.length > 0 && T !== _ ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: S, children: "确认新密码" }),
            _.length > 0 && T !== _ && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          C && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: C }),
          /* @__PURE__ */ t("button", { type: "submit", disabled: !H || L, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: L ? "处理中..." : "重置密码" }),
            L && /* @__PURE__ */ t("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-authTextMuted", children: [
          "想起密码了？",
          /* @__PURE__ */ e("button", { type: "button", onClick: () => l(), className: "ml-1 font-medium text-primary transition-colors hover:text-primary-hover", children: "返回登录" })
        ] })
      ] }) : /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-primary-soft opacity-70" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(rt, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          f.current = window.setTimeout(() => l({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const jt = 10, It = (r) => r.isTaskConversation === !0 || r.source === "task" || r.id.startsWith("task-") || typeof r.taskId == "string" && r.taskId.trim().length > 0;
function Zs({
  currentPath: r,
  projects: n,
  initialChats: l,
  logoUrl: s,
  user: c,
  children: f,
  initialAiUsageWarningActive: u = !1,
  aiUsageWarningActive: m,
  canViewAiUsage: w = !0,
  canManageMembers: p = !0,
  chatActions: g = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: h,
  onLogout: T,
  onChatsChange: U,
  onRenameChat: _,
  onTogglePinChat: B,
  onShareChat: L,
  onDeleteChat: F
}) {
  const [O, A] = N(!0), [C, j] = N(240), [H, P] = N(!1), S = ie(0), Y = ie(240), [q, M] = N(() => {
    const i = { unassigned: !0 };
    return n.forEach((V) => {
      i[V.id] = !0;
    }), i;
  }), [k, o] = N(!1), [d, x] = N(() => [...l]), [W, I] = N(null), [ee, fe] = N("time"), [xe, be] = N(!1), [Z, E] = N(null), [z, R] = N(""), [re, je] = N(!1), [De, Ie] = N(""), [Ne, D] = N(!1), [we, Te] = N(u), [a, b] = N(!1), K = m ?? we, ne = ie(null), oe = ie(null), he = ie(null), ce = !!(g.rename || g.share || g.pin || g.delete), pe = () => {
    o(!1), T();
  }, ke = (i) => {
    M((V) => ({ ...V, [i]: !V[i] }));
  }, de = (i) => {
    var se;
    x((J) => J.filter((He) => He.id !== i)), I(null), Z === i && (E(null), R("")), F == null || F(i), ((se = r.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : se[1]) === i && h("/chat/new", { replace: !0 });
  }, $ = (i) => {
    const V = d.find((J) => J.id === i);
    if (!V) return;
    const se = !V.isPinned;
    x((J) => J.map(
      (Ue) => Ue.id === i ? { ...Ue, isPinned: se } : Ue
    )), B == null || B(i, se), I(null);
  }, X = (i) => {
    E(i.id), R(i.title), I(null);
  }, v = () => {
    E(null), R("");
  }, y = (i) => {
    const V = z.trim();
    V && (x((se) => se.map((J) => J.id === i ? { ...J, title: V } : J)), _ == null || _(i, V)), v();
  }, Q = (i, V) => {
    if (i.stopPropagation(), i.key === "Enter") {
      i.preventDefault(), y(V);
      return;
    }
    i.key === "Escape" && (i.preventDefault(), v());
  }, G = (i) => {
    var V;
    if (Z === i) {
      (V = ne.current) == null || V.focus();
      return;
    }
    h(`/chat/${i}`);
  }, le = (i, V = !1) => Z === i.id ? /* @__PURE__ */ t(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (J) => {
        var He;
        J.stopPropagation(), (He = ne.current) == null || He.focus();
      },
      children: [
        V && /* @__PURE__ */ e(bt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: ne,
            value: z,
            onChange: (J) => R(J.target.value),
            onKeyDown: (J) => Q(J, i.id),
            onBlur: () => y(i.id),
            onClick: (J) => J.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    V && /* @__PURE__ */ e(bt, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: i.title })
  ] }), ye = (i) => {
    S.current = i.clientX, Y.current = C, P(!0);
  };
  me(() => {
    if (!H) return;
    const i = 200, V = 440, se = (He) => {
      const Ue = He.clientX - S.current, Jt = Math.min(V, Math.max(i, Y.current + Ue));
      j(Jt);
    }, J = () => {
      P(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", se), window.addEventListener("mouseup", J), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", se), window.removeEventListener("mouseup", J);
    };
  }, [H, C]), me(() => {
    O || j(240);
  }, [O]), me(() => {
    U == null || U(d);
  }, [d, U]), me(() => {
    x([...l]);
  }, [l]), me(() => {
    if (!Z) return;
    const i = window.requestAnimationFrame(() => {
      var V;
      (V = ne.current) == null || V.focus();
    });
    return () => {
      window.cancelAnimationFrame(i);
    };
  }, [Z]), me(() => () => {
    oe.current !== null && window.clearTimeout(oe.current), he.current !== null && window.clearTimeout(he.current);
  }, []);
  const Pe = () => {
    be(!0), oe.current !== null && window.clearTimeout(oe.current), oe.current = window.setTimeout(() => {
      be(!1);
    }, 600);
  }, ve = () => {
    D(!0), he.current !== null && window.clearTimeout(he.current), he.current = window.setTimeout(() => {
      D(!1);
    }, 600);
  };
  me(() => {
    K || b(!1);
  }, [K]);
  const Me = () => {
    b(!0), h("/ai-usage");
  }, Fe = ue(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...w ? [{
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
  ], [p, w]), ge = (i) => {
    if (o(!1), i.key === "skills") {
      h("/skills");
      return;
    }
    if (i.key === "ai-usage") {
      h("/ai-usage");
      return;
    }
    if (i.key === "members") {
      h("/members");
      return;
    }
    if (i.key === "system-settings") {
      h("/system-settings");
      return;
    }
    i.key === "logout" && pe();
  }, te = ue(() => g.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Ot, { size: 14 }), danger: !0 }] : [], [g.delete]), ae = (i) => {
    const V = [];
    return g.rename && V.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(gr, { size: 14 }) }), g.share && V.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(yr, { size: 14 }) }), g.pin && V.push({
      key: "pin",
      label: i.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(bt, { size: 14 })
    }), V;
  }, Be = (i, V) => {
    const se = It(i);
    return !ce && !se ? null : /* @__PURE__ */ t("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${se ? "ml-6" : "ml-2"}`, children: [
      se && !V && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      ce && /* @__PURE__ */ e(
        mt,
        {
          open: V,
          onOpenChange: (J) => I(J ? i.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, C - 56)),
          trigger: /* @__PURE__ */ e(br, { size: 14 }),
          onTriggerClick: (J) => {
            J.stopPropagation();
          },
          items: ae(i),
          footerItems: te,
          onItemClick: (J, He) => {
            if (He.stopPropagation(), J.key === "rename") {
              X(i);
              return;
            }
            if (J.key === "share") {
              L ? L(i.id) : h(`/chat/${i.id}?share=1`), I(null);
              return;
            }
            if (J.key === "pin") {
              $(i.id);
              return;
            }
            if (J.key === "delete") {
              de(i.id);
              return;
            }
            I(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${V ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, ze = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(xt, { size: 14 }),
      path: "/projects",
      isActive: r === "/projects" || r.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(Ct, { size: 14 }),
      path: "/tools",
      isActive: r === "/tools" || r.startsWith("/tool/")
    }
  ], Ce = ue(() => {
    const i = r.match(/^\/chat\/([^/]+)$/);
    return i ? d.find((V) => V.id === i[1]) ?? null : null;
  }, [d, r]), Le = ue(
    () => d.filter((i) => i.isPinned),
    [d]
  ), _e = ue(
    () => d.filter((i) => !i.isPinned),
    [d]
  ), Ae = ue(
    () => ee === "time" ? Le.slice(0, jt) : Le,
    [Le, ee]
  ), Ke = ue(() => {
    if (ee !== "time") return [];
    const i = Math.max(jt - Ae.length, 0);
    return _e.slice(0, i);
  }, [ee, _e, Ae.length]), We = ue(
    () => Ae.length + Ke.length,
    [Ae.length, Ke.length]
  ), Ge = ee === "time" && d.length > We, et = ue(() => new Map(n.map((i) => [i.id, i.name])), [n]), nt = De.trim().toLowerCase(), st = ue(() => nt ? d.filter((i) => {
    const V = i.projectId ? et.get(i.projectId) ?? "未分组" : "未分组";
    return `${i.title} ${V} ${i.date}`.toLowerCase().includes(nt);
  }) : d, [d, nt, et]);
  me(() => {
    if (!Ce) return;
    const i = Ce.projectId ?? "unassigned";
    M((V) => V[i] !== !1 ? V : { ...V, [i]: !0 });
  }, [Ce]);
  const tt = () => {
    Ie(""), je(!0);
  }, at = () => {
    je(!1), D(!1), he.current !== null && (window.clearTimeout(he.current), he.current = null);
  }, Ve = (i) => {
    je(!1), h(`/chat/${i}`);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ t(
      "aside",
      {
        style: { width: O ? C : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${O ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: { width: C, minWidth: C },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ t("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ t("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => h("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: s, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => A(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(pr, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => h("/chat/new"),
                    className: `nav-item ${r === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(hr, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: ze.map((i) => {
                  const V = i.isActive;
                  return /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => h(i.path),
                      className: `nav-item ${V ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                      children: [
                        i.icon,
                        /* @__PURE__ */ e("span", { children: i.label })
                      ]
                    },
                    i.path
                  );
                }) }),
                /* @__PURE__ */ t(
                  "div",
                  {
                    onScroll: Pe,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${xe ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Ae.length > 0 && /* @__PURE__ */ t("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Ae.map((i) => {
                          const V = r === `/chat/${i.id}`, se = W === i.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => G(i.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === i.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : V ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                le(i, ee !== "time"),
                                Z !== i.id && Be(i, se)
                              ]
                            }
                          ) }, i.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      ee === "project" && n.map((i) => {
                        const V = d.filter((J) => J.projectId === i.id && !J.isPinned), se = q[i.id] !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ke(i.id),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(xt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: se ? /* @__PURE__ */ e(ut, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(dt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: i.name })
                              ]
                            }
                          ),
                          se && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: V.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : V.map((J) => {
                            const He = r === `/chat/${J.id}`, Ue = W === J.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => G(J.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === J.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : He ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  le(J),
                                  Z !== J.id && Be(J, Ue)
                                ]
                              }
                            ) }, J.id);
                          }) })
                        ] }, i.id);
                      }),
                      ee === "project" && (() => {
                        const i = d.filter((se) => !se.projectId && !se.isPinned);
                        if (i.length === 0) return null;
                        const V = q.unassigned !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ke("unassigned"),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(xt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: V ? /* @__PURE__ */ e(ut, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(dt, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          V && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: i.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : i.map((se) => {
                            const J = r === `/chat/${se.id}`, He = W === se.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => G(se.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === se.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : J ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  le(se),
                                  Z !== se.id && Be(se, He)
                                ]
                              }
                            ) }, se.id);
                          }) })
                        ] });
                      })(),
                      ee === "time" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
                        Ke.map((i) => {
                          const V = r === `/chat/${i.id}`, se = W === i.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => G(i.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === i.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : V ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                le(i),
                                Z !== i.id && Be(i, se)
                              ]
                            }
                          ) }, i.id);
                        }),
                        Ge && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: tt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(dt, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                K && !a && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(fr, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
                  /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-primaryText", children: "用量即将耗尽" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      onClick: Me,
                      className: "ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90",
                      children: "去查看"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { className: "p-3 mt-auto", children: /* @__PURE__ */ e(
                  mt,
                  {
                    open: k,
                    onOpenChange: o,
                    placement: "top-start",
                    width: C - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ t("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ t("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: c.avatarUrl ? /* @__PURE__ */ e("img", { src: c.avatarUrl, alt: `${c.name}头像`, className: "h-full w-full object-cover" }) : c.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: c.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(xr, { size: 18 }) })
                    ] }),
                    items: Fe,
                    onItemClick: ge,
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
              onMouseDown: ye,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${O ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof f == "function" ? f({ isSidebarOpen: O, setIsSidebarOpen: A, chats: d, setChats: x, setAiUsageWarningActive: Te }) : f }) }) }),
    /* @__PURE__ */ e(
      Mt,
      {
        visible: re,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: at,
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
                value: De,
                onChange: (i) => Ie(i.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          st.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: ve,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Ne ? "is-scrolling is-scrolling-thin" : ""}`,
              children: st.map((i) => {
                const V = i.projectId ? et.get(i.projectId) ?? "未分组" : "未分组", se = It(i);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => Ve(i.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: i.title }),
                        se && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: V }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: i.date })
                      ] })
                    ]
                  },
                  i.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(Kt, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Js({
  projects: r,
  selectedProjectId: n,
  disabled: l = !1,
  embedded: s = !1,
  isSidebarOpen: c = !0,
  skillOptions: f,
  fileOptions: u,
  quickPrompts: m,
  uploadAccept: w,
  validateUploadFile: p,
  onUploadValidationError: g,
  onSelectProject: h,
  onCreateProject: T,
  onOpenSidebar: U,
  onSend: _
}) {
  const [B, L] = N(!1), [F, O] = N(!1), [A, C] = N(""), j = ie(null), H = ie(null), P = ue(
    () => r.find((d) => d.id === n) ?? null,
    [r, n]
  ), S = ue(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !P
    },
    ...r.map((d) => ({
      key: d.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: d.name }),
      active: (P == null ? void 0 : P.id) === d.id
    }))
  ], [r, P]), Y = ue(() => T ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(St, { size: 16 }) }] : [], [T]), q = () => {
    O(!1), C("");
  }, M = (d) => {
    if (d.key === "create") {
      O(!0), C("");
      return;
    }
    const x = d.key === "none" ? null : String(d.key);
    h(x), L(!1);
  }, k = () => {
    const d = A.trim();
    if (!d) return;
    const x = r.find(
      (W) => W.name.trim().toLowerCase() === d.toLowerCase()
    );
    x ? h(x.id) : T == null || T(d), q(), L(!1);
  };
  me(() => {
    if (!F) return;
    const d = (x) => {
      var I, ee;
      const W = x.target;
      (I = H.current) != null && I.contains(W) || (ee = j.current) != null && ee.contains(W) || (q(), L(!1));
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [F]);
  const o = /* @__PURE__ */ t("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ t("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: j, className: "relative", children: F && /* @__PURE__ */ e(
        "div",
        {
          ref: H,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Xt,
                {
                  value: A,
                  onChange: (d) => C(d.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Xe, { type: "secondary", size: "small", onClick: q, children: "取消" }),
              /* @__PURE__ */ e(
                Xe,
                {
                  type: "primary",
                  size: "small",
                  onClick: k,
                  disabled: !A.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Qt,
        {
          onSend: _,
          disabled: l,
          skillOptions: f,
          fileOptions: u,
          uploadAccept: w,
          validateUploadFile: p,
          onUploadValidationError: g,
          leadingControls: /* @__PURE__ */ e(
            mt,
            {
              open: B,
              onOpenChange: (d) => {
                !d && F || (L(d), d ? O(!1) : q());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: P ? P.name : "工作项目" }),
                /* @__PURE__ */ e(ut, { size: 14 })
              ] }),
              items: S,
              footerItems: Y,
              onItemClick: M,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(Zt, { onSelect: _, prompts: m })
  ] });
  return s ? o : /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      Bn,
      {
        isSidebarOpen: c,
        onOpenSidebar: U ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: o })
  ] });
}
function Yn({
  attachments: r,
  uploading: n = !1,
  deletingAttachmentId: l,
  unavailableHint: s,
  error: c,
  onRequestUpload: f,
  onDeleteAttachment: u
}) {
  return /* @__PURE__ */ t("div", { className: "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6", children: [
    /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      f && /* @__PURE__ */ e(
        Xe,
        {
          type: "secondary",
          size: "small",
          disabled: n,
          onClick: f,
          children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5", children: [
            n ? /* @__PURE__ */ e(ct, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(vr, { size: 14 }),
            n ? "上传中" : "上传附件"
          ] })
        }
      )
    ] }),
    r.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: r.map((m) => {
      const w = l === m.id;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: m.statusLabel,
          children: [
            /* @__PURE__ */ e(ft, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: m.name }),
            m.status === "processing" && /* @__PURE__ */ e(ct, { size: 12, className: "animate-spin" }),
            u && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: w,
                onClick: () => u(m.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${m.name}`,
                title: "删除附件",
                children: w ? /* @__PURE__ */ e(ct, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(Ot, { size: 13 })
              }
            )
          ]
        },
        m.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    s && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: s }),
    c && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: c })
  ] });
}
const Qn = {
  disabled: /* @__PURE__ */ e(wr, { size: 14 }),
  pending: /* @__PURE__ */ e(Ct, { size: 14 }),
  indexed: /* @__PURE__ */ e(rt, { size: 14 })
};
function Zn({
  createdByName: r,
  updatedByName: n,
  updatedAt: l,
  index: s
}) {
  return !r && !n && !l && !s ? null : /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
    r && /* @__PURE__ */ t("span", { children: [
      "创建人: ",
      r
    ] }),
    n && /* @__PURE__ */ t("span", { children: [
      "最近修改: ",
      n
    ] }),
    l && /* @__PURE__ */ e("span", { children: l }),
    s && /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5", title: s.detail, children: [
      Qn[s.status],
      s.statusLabel
    ] })
  ] });
}
const Jn = "_preview_1bdn0_1", es = "_editor_1bdn0_2", ts = {
  preview: Jn,
  editor: es
}, rs = "_shell_1pzof_1", ns = "_header_1pzof_5", ss = "_closeButton_1pzof_9", as = "_breadcrumb_1pzof_13", ls = "_projectName_1pzof_17", os = "_separator_1pzof_21", is = "_fileName_1pzof_25", cs = "_headerActions_1pzof_29", ds = "_saveError_1pzof_33", us = "_viewport_1pzof_37", ms = "_editorCanvas_1pzof_41", ps = "_titleInput_1pzof_45", hs = "_milkdownHost_1pzof_49", qe = {
  shell: rs,
  header: ns,
  closeButton: ss,
  breadcrumb: as,
  projectName: ls,
  separator: os,
  fileName: is,
  headerActions: cs,
  saveError: ds,
  viewport: us,
  editorCanvas: ms,
  titleInput: ps,
  milkdownHost: hs
}, fs = {
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
}, Rt = (r, n) => r.replace("<svg", `<svg class="${n}"`), Nt = (r) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${r}</tspan>
    </text>
  </svg>
`, xs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, bs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, gs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M9 7V4H15V7M18 7L17 20H7L6 7M10 11V16M14 11V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`, kt = (r) => `chatui-document-menu-type-${r}`;
function ea({
  projectName: r,
  title: n,
  initialMarkdown: l = "",
  createdByName: s,
  updatedByName: c,
  updatedAt: f,
  index: u,
  attachments: m = [],
  attachmentAccept: w,
  attachmentUnavailableHint: p,
  saving: g = !1,
  saveError: h,
  onTitleChange: T,
  onMarkdownChange: U,
  onUploadAttachments: _,
  onDeleteAttachment: B,
  onSave: L,
  onClose: F
}) {
  const O = ie(null), A = ie(null), C = ie(l), j = ie(U), [H, P] = N(!1), [S, Y] = N(null), [q, M] = N("");
  me(() => {
    j.current = U;
  }, [U]), me(() => {
    const x = O.current;
    if (!x) return;
    const W = new gt({
      root: x,
      defaultValue: C.current,
      features: {
        [gt.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [gt.Feature.BlockEdit]: {
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
            const y = new Map(
              v.build().flatMap((ge) => ge.items).map((ge) => [ge.key, ge])
            ), Q = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), G = (ge) => {
              const te = ge.get(yt), ae = Z, ze = (ae != null && ae.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? ae : ae == null ? void 0 : ae.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? (ae instanceof HTMLElement ? ae : null);
              if (!ze) return te;
              try {
                const Ce = te.posAtDOM(ze, 0), Le = te.state.doc.resolve(
                  Math.min(
                    Math.max(Ce, 0),
                    te.state.doc.content.size
                  )
                );
                te.dispatch(
                  te.state.tr.setSelection(
                    Lt.near(Le)
                  )
                );
              } catch {
              }
              return te;
            }, le = (ge) => {
              const te = G(ge), ae = vt.type(ge), Be = (Le) => {
                const { $from: _e } = te.state.selection;
                for (let Ae = _e.depth; Ae > 0; Ae -= 1)
                  if (_e.node(Ae).type.name === Le) return !0;
                return !1;
              };
              for (let Le = 0; Le < 10 && !(!Be(ae.name) || !Lr(ae)(
                te.state,
                te.dispatch
              )); Le += 1)
                ;
              for (let Le = 0; Le < 10 && !(!Be("blockquote") || !Mr(te.state, te.dispatch)); Le += 1)
                ;
              const ze = Pr.type(ge), Ce = te.state.selection.$from.parent;
              Ce.isTextblock && Ce.type !== ze && ge.get(Sr).call(_r.key, {
                nodeType: ze
              });
            }, ye = (ge) => {
              const te = G(ge), { selection: ae } = te.state, Be = vt.type(ge), { $from: ze } = ae;
              let Ce = -1;
              for (let _e = ze.depth; _e > 0; _e -= 1)
                if (ze.node(_e).type.name === Be.name) {
                  Ce = _e;
                  break;
                }
              if (Ce > 0) {
                const _e = Ce - 1, Ae = _e > 0 && ze.node(_e).childCount === 1 ? _e : Ce;
                te.dispatch(
                  te.state.tr.delete(
                    ze.before(Ae),
                    ze.after(Ae)
                  )
                );
                return;
              }
              if (!ae.empty) {
                te.dispatch(
                  te.state.tr.delete(ae.from, ae.to)
                );
                return;
              }
              const Le = Math.min(1, ze.depth);
              Le < 1 || te.dispatch(
                te.state.tr.delete(
                  ze.before(Le),
                  ze.after(Le)
                )
              );
            }, Pe = (ge, te, ae) => {
              const Be = y.get(te);
              if (!Be) return;
              const { key: ze, ...Ce } = Be, Le = (ae == null ? void 0 : ae.icon) ?? Ce.icon, _e = [
                kt(te),
                ae == null ? void 0 : ae.iconClass
              ].filter(Boolean).join(" "), Ae = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(te), Ke = Q.has(te) ? (We) => {
                var at;
                if (le(We), !Ae) {
                  if (te === "quote") {
                    const Ve = We.get(yt), { $from: i } = Ve.state.selection, V = i.parent, se = i.before(i.depth), J = Ve.state.schema.nodes.blockquote;
                    if (!J) return;
                    const He = J.create(null, V), Ue = Ve.state.tr.replaceWith(
                      se,
                      se + V.nodeSize,
                      He
                    );
                    Ue.setSelection(
                      Lt.near(
                        Ue.doc.resolve(
                          Math.min(
                            se + 2,
                            Ue.doc.content.size
                          )
                        )
                      )
                    ), Ve.dispatch(Ue);
                    return;
                  }
                  (at = Ce.onRun) == null || at.call(Ce, We);
                  return;
                }
                const Ge = We.get(yt), et = te === "ordered-list" ? zr.type(We) : Ar.type(We);
                if (!$r(et)(
                  Ge.state,
                  Ge.dispatch
                ) || te !== "task-list") return;
                const st = vt.type(We), { $from: tt } = Ge.state.selection;
                for (let Ve = tt.depth; Ve > 0; Ve -= 1) {
                  const i = tt.node(Ve);
                  if (i.type !== st) continue;
                  const V = tt.before(Ve);
                  Ge.dispatch(
                    Ge.state.tr.setNodeMarkup(V, void 0, {
                      ...i.attrs,
                      checked: !1
                    })
                  );
                  break;
                }
              } : Ce.onRun;
              ge.addItem(te, {
                ...Ce,
                label: (ae == null ? void 0 : ae.label) ?? Ce.label,
                icon: Rt(Le, _e),
                onRun: Ke
              });
            };
            v.clear();
            const ve = v.addGroup("basic", "基础");
            [
              {
                key: "h1",
                icon: Nt(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: Nt(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: Nt(3),
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
                icon: xs,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: bs,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: ge, icon: te, label: ae }) => {
              Pe(ve, ge, { icon: te, label: ae });
            });
            const Me = v.addGroup("common", "常用");
            Pe(Me, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), Pe(Me, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), v.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Rt(
                gs,
                "chatui-document-menu-action-delete"
              ),
              onRun: ye
            });
          }
        }
      }
    });
    W.on((v) => {
      v.markdownUpdated((y, Q, G) => {
        Q !== G && j.current(Q);
      });
    });
    const I = x.ownerDocument;
    let ee = "", fe = null, xe = null, be = !1, Z = null, E = null, z = null, R = null, re = null;
    const je = (v) => {
      const y = v == null ? void 0 : v.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !y || !y.closest(".ProseMirror") ? null : y.matches("h1") ? "h1" : y.matches("h2") ? "h2" : y.matches("h3") ? "h3" : y.matches("blockquote") ? "quote" : y.matches("pre, .milkdown-code-block") || y.querySelector("pre, .milkdown-code-block") ? "code" : y.querySelector('input[type="checkbox"]') ? "task-list" : y.querySelector(".label.ordered") ? "ordered-list" : y.querySelector(".label.bullet") ? "bullet-list" : null;
    }, De = () => x.querySelector(".ProseMirror"), Ie = (v) => {
      const y = De();
      if (!v || !(y != null && y.contains(v))) return null;
      const Q = v.closest(".milkdown-list-item-block");
      if (Q && y.contains(Q)) return Q;
      let G = v;
      for (; G != null && G.parentElement && G.parentElement !== y; )
        G = G.parentElement;
      return !G || G.parentElement !== y || G.classList.contains("prosemirror-virtual-cursor") ? null : G;
    }, Ne = () => {
      const v = De();
      return v ? Array.from(v.children).flatMap((y) => {
        if (y.classList.contains("prosemirror-virtual-cursor")) return [];
        const Q = Array.from(
          y.querySelectorAll(".milkdown-list-item-block")
        );
        return Q.length ? Q : [y];
      }) : [];
    }, D = (v) => {
      var G;
      const y = Ne(), Q = y.map((le) => ({ block: le, rect: le.getBoundingClientRect() })).filter(({ rect: le }) => v >= le.top && v <= le.bottom).sort((le, ye) => le.rect.height - ye.rect.height);
      return Q[0] ? Q[0].block : ((G = y.map((le) => {
        const ye = le.getBoundingClientRect(), Pe = Math.min(
          Math.abs(v - ye.top),
          Math.abs(v - ye.bottom)
        );
        return { block: le, distance: Pe };
      }).sort((le, ye) => le.distance - ye.distance)[0]) == null ? void 0 : G.block) ?? null;
    }, we = (v) => {
      var ye, Pe;
      const y = I.querySelector(
        ".milkdown-slash-menu"
      );
      y == null || y.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (ve) => ve.removeAttribute("data-chatui-selected")
      ), v && ((Pe = (ye = y == null ? void 0 : y.querySelector(`svg.${kt(v)}`)) == null ? void 0 : ye.closest("li")) == null || Pe.setAttribute("data-chatui-selected", "true"));
      const Q = I.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!Q) return;
      ee || (ee = Q.innerHTML);
      const G = v ? y == null ? void 0 : y.querySelector(
        `svg.${kt(v)}`
      ) : null, le = v ?? "default";
      Q.dataset.chatuiBlockType !== le && (Q.innerHTML = (G == null ? void 0 : G.outerHTML) ?? ee, Q.dataset.chatuiBlockType = le);
    }, Te = (v) => {
      v !== xe && (xe = v, fe = je(v)), we(fe);
    }, a = () => {
      var Q;
      const v = (Q = I.getSelection()) == null ? void 0 : Q.anchorNode, y = v instanceof Element ? v : v == null ? void 0 : v.parentElement;
      Te(Ie(y ?? null));
    }, b = () => {
      const v = E, y = I.querySelector(
        ".milkdown-slash-menu"
      );
      if (!v || !y || y.dataset.show !== "true") return;
      const Q = y.getBoundingClientRect();
      if (!Q.width || !Q.height) return;
      const G = v.getBoundingClientRect(), le = I.defaultView, ye = (le == null ? void 0 : le.innerWidth) ?? I.documentElement.clientWidth, Pe = (le == null ? void 0 : le.innerHeight) ?? I.documentElement.clientHeight, ve = 12, Me = 8, Fe = Math.max(
        ve,
        ye - Q.width - ve
      ), ge = Math.max(
        ve,
        Pe - Q.height - ve
      ), te = (Ae) => Math.min(Math.max(Ae, ve), Fe), ae = (Ae) => Math.min(Math.max(Ae, ve), ge);
      let Be = "left", ze = G.left - Q.width - Me, Ce = ae(G.top);
      if (ze < ve) {
        const Ae = G.top - Me - ve, Ke = Pe - G.bottom - Me - ve, We = Ke >= Q.height || Ke >= Ae;
        Be = We ? "bottom" : "top", ze = te(G.left), Ce = ae(We ? G.bottom + Me : G.top - Q.height - Me);
      }
      const Le = `${ze}px`, _e = `${Ce}px`;
      y.style.getPropertyValue("--chatui-block-menu-left") !== Le && y.style.setProperty("--chatui-block-menu-left", Le), y.style.getPropertyValue("--chatui-block-menu-top") !== _e && y.style.setProperty("--chatui-block-menu-top", _e), y.dataset.chatuiPlacement = Be;
    }, K = () => {
      const v = I.querySelector(
        ".milkdown-slash-menu"
      );
      v && (v.style.removeProperty("--chatui-block-menu-left"), v.style.removeProperty("--chatui-block-menu-top"), delete v.dataset.chatuiPlacement);
    }, ne = (v) => {
      v !== re && (re == null || re.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), re = v, re == null || re.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, oe = () => {
      R !== null && window.cancelAnimationFrame(R), R = window.requestAnimationFrame(() => {
        R = null, b();
      });
    }, he = () => {
      E = null, be = !1, Z = null, ne(null), W.editor.action((v) => {
        v.get("menuAPICtx").hide();
      }), K();
    }, ce = (v) => {
      const y = v.target instanceof Element ? v.target : null, Q = I.querySelector(
        ".milkdown-slash-menu"
      );
      if (Q) {
        const ye = Q.getBoundingClientRect(), Pe = ye.width > 0 && ye.height > 0, ve = v.clientX >= ye.left && v.clientX <= ye.right && v.clientY >= ye.top && v.clientY <= ye.bottom;
        if (Pe) {
          if (ve) {
            ne(
              (y == null ? void 0 : y.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), be = !0;
            return;
          }
          if (ne(null), y != null && y.closest(".milkdown-block-handle")) return;
          const Me = De(), Fe = y && (Me != null && Me.contains(y)) ? Ie(y) ?? D(v.clientY) : null;
          if (Fe && Z && Fe !== Z) {
            he();
            return;
          }
          if (Fe === Z) return;
          be && he();
          return;
        }
        be = !1, ne(null);
      }
      if (y != null && y.closest(".milkdown-block-handle")) {
        we(fe);
        return;
      }
      const G = De();
      if (!y || !(G != null && G.contains(y))) return;
      const le = Ie(y) ?? D(v.clientY);
      Te(le);
    }, pe = (v) => {
      const y = v.target instanceof Element ? v.target : null;
      ne(
        (y == null ? void 0 : y.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, ke = (v) => {
      const y = v.target instanceof Element ? v.target : null, Q = y == null ? void 0 : y.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!Q) return;
      const G = v.relatedTarget instanceof Element ? v.relatedTarget : null;
      if (G && Q.contains(G)) return;
      const le = G == null ? void 0 : G.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      ne(le ?? null);
    }, de = (v) => {
      const y = v.target instanceof Element ? v.target : null, Q = y == null ? void 0 : y.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (Q) {
        const G = fe;
        E = Q, Z = xe, window.setTimeout(() => {
          we(G), oe();
        }, 0);
      }
    }, $ = (v) => {
      v.key === "/" && window.setTimeout(a, 0);
    };
    I.addEventListener("pointermove", ce), I.addEventListener("pointerover", pe), I.addEventListener("pointerout", ke), I.addEventListener("click", de), x.addEventListener("keyup", $);
    const X = W.create();
    return X.then(() => {
      var y;
      (y = x.querySelector(".ProseMirror")) == null || y.focus();
      const v = I.querySelector(
        ".milkdown-slash-menu"
      );
      v && (z = new MutationObserver(() => {
        if (v.dataset.show === "true" && E) {
          oe();
          return;
        }
        v.dataset.show !== "true" && (E = null, Z = null, ne(null), K());
      }), z.observe(v, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      })), a();
    }), () => {
      I.removeEventListener("pointermove", ce), I.removeEventListener(
        "pointerover",
        pe
      ), I.removeEventListener("pointerout", ke), I.removeEventListener("click", de), x.removeEventListener("keyup", $), X.then(() => {
        z == null || z.disconnect(), R !== null && window.cancelAnimationFrame(R), W.destroy();
      });
    };
  }, []);
  const k = async (x) => {
    const W = Array.from(x.target.files ?? []);
    if (x.target.value = "", !(!W.length || !_)) {
      P(!0), M("");
      try {
        await _(W);
      } catch (I) {
        M(
          I instanceof Error ? I.message : "附件上传失败"
        );
      } finally {
        P(!1);
      }
    }
  }, o = async (x) => {
    if (B) {
      Y(x), M("");
      try {
        await B(x);
      } catch (W) {
        M(
          W instanceof Error ? W.message : "附件删除失败"
        );
      } finally {
        Y(null);
      }
    }
  }, d = n.trim() || "未命名文档";
  return /* @__PURE__ */ t("section", { className: qe.shell, "aria-label": "项目文档编辑器", children: [
    /* @__PURE__ */ t("header", { className: qe.header, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: qe.closeButton,
          onClick: F,
          "aria-label": "关闭文档编辑器",
          title: "关闭",
          children: /* @__PURE__ */ e(Qe, { size: 20 })
        }
      ),
      /* @__PURE__ */ t("div", { className: qe.breadcrumb, children: [
        /* @__PURE__ */ e("span", { className: qe.projectName, children: r }),
        /* @__PURE__ */ e("span", { className: qe.separator, "aria-hidden": "true", children: "/" }),
        /* @__PURE__ */ e("span", { className: qe.fileName, children: d })
      ] }),
      /* @__PURE__ */ t("div", { className: qe.headerActions, children: [
        h && /* @__PURE__ */ e("span", { className: qe.saveError, children: h }),
        /* @__PURE__ */ e(
          Xe,
          {
            type: "primary",
            size: "small",
            rounded: "large",
            disabled: g,
            onClick: L,
            children: g ? "保存中…" : "保存"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `${qe.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: /* @__PURE__ */ t("div", { className: qe.editorCanvas, children: [
          /* @__PURE__ */ t("section", { className: "mb-4 shrink-0 px-[120px]", children: [
            /* @__PURE__ */ e(
              "input",
              {
                value: n,
                onChange: (x) => T(x.target.value),
                placeholder: "请输入标题",
                className: qe.titleInput,
                "aria-label": "文档标题"
              }
            ),
            /* @__PURE__ */ e(
              Zn,
              {
                createdByName: s,
                updatedByName: c,
                updatedAt: f,
                index: u
              }
            ),
            /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
          ] }),
          /* @__PURE__ */ t("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
            /* @__PURE__ */ e(
              "div",
              {
                ref: O,
                className: `${qe.milkdownHost} ${ts.editor} chatui-project-document-editor`,
                style: fs
              }
            ),
            _ && /* @__PURE__ */ e(
              "input",
              {
                ref: A,
                type: "file",
                multiple: !0,
                accept: w,
                className: "hidden",
                onChange: (x) => {
                  k(x);
                }
              }
            ),
            /* @__PURE__ */ e(
              Yn,
              {
                attachments: m,
                uploading: H,
                deletingAttachmentId: S,
                unavailableHint: p,
                error: q,
                onRequestUpload: _ ? () => {
                  var x;
                  return (x = A.current) == null ? void 0 : x.click();
                } : void 0,
                onDeleteAttachment: B ? (x) => {
                  o(x);
                } : void 0
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
const ys = { low: "低风险", medium: "中风险", high: "高风险" }, vs = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function ta({
  isSidebarOpen: r,
  skills: n,
  loading: l = !1,
  error: s,
  pendingSkillIds: c = [],
  onOpenSidebar: f,
  onCreateSkill: u,
  onInstall: m,
  onUninstall: w,
  onRetry: p
}) {
  const [g, h] = N("installed"), [T, U] = N(""), [_, B] = N(!1), [L, F] = N([]), [O, A] = N(null), C = ue(() => new Set(c), [c]), j = ue(() => {
    const M = T.trim().toLowerCase();
    return n.filter((k) => g === "installed" !== k.installed ? !1 : M ? [k.name, k.source, k.description, ...k.tags].join(" ").toLowerCase().includes(M) : !0);
  }, [g, T, n]), H = (M) => {
    h(M), B(!1), F([]);
  }, P = () => {
    B((M) => !M), F([]);
  }, S = (M) => F((k) => k.includes(M) ? k.filter((o) => o !== M) : [...k, M]), Y = (M) => M.installed ? w([M.id]) : m([M.id]), q = () => {
    L.length && (g === "installed" ? w(L) : m(L), F([]), B(!1));
  };
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !r && /* @__PURE__ */ e("button", { type: "button", onClick: f, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(Vt, { size: 20 }) }),
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
          onClick: u,
          children: [
            /* @__PURE__ */ e(St, { size: 14 }),
            "新建 Skill"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: `flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${_ ? "pb-32" : "pb-12"}`, children: /* @__PURE__ */ t("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ t("section", { children: [
        /* @__PURE__ */ e("h2", { className: "text-center text-2xl font-semibold text-primaryText", children: "Skills, Agent 能力扩展" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-center text-sm text-tertiaryText", children: "模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。" }),
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ e(Ze, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: T, onChange: (M) => U(M.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-5", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => H("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${g === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => H("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${g === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ t("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: _, onChange: (M) => {
                B(M.target.checked), F([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        s && /* @__PURE__ */ t("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: s }),
          p && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: p, children: "重新加载" })
        ] }),
        !s && l && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (M, k) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, k)) }),
        !s && !l && j.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": c.length > 0, children: j.map((M) => {
          const k = L.includes(M.id), o = C.has(M.id), d = k ? "border-skillSelectedBorder bg-skillSelectedSurface" : O === M.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ t("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${d}`, onMouseEnter: () => A(M.id), onMouseLeave: () => A((x) => x === M.id ? null : x), children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: M.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: M.source })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${vs[M.riskLevel]}`, children: ys[M.riskLevel] }),
                _ && /* @__PURE__ */ e("button", { type: "button", onClick: () => S(M.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": k ? `取消选择 ${M.name}` : `选择 ${M.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${k ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: M.description }),
            /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: M.tags.map((x) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: x }, `${M.id}-${x}`)) }),
              !_ && /* @__PURE__ */ e("button", { type: "button", disabled: o, onClick: () => Y(M), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${O === M.id || o ? "inline-flex" : "hidden"} ${M.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: o ? "处理中..." : M.installed ? "卸载" : "安装" })
            ] })
          ] }, M.id);
        }) }) : !s && !l ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    _ && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ t("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ t("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        L.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: P, disabled: c.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: q, disabled: !L.length || c.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: c.length > 0 ? "处理中..." : g === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Zs as A,
  hn as B,
  Un as C,
  Hs as D,
  Fs as E,
  Qs as F,
  Vn as G,
  Nn as H,
  Qt as I,
  ea as J,
  Xs as K,
  Gs as L,
  Yt as M,
  Os as N,
  Wn as O,
  Zn as P,
  Zt as Q,
  Ys as R,
  ta as S,
  Tt as T,
  qn as U,
  mt as a,
  Xe as b,
  Is as c,
  yn as d,
  Mt as e,
  Xt as f,
  Kt as g,
  Yn as h,
  vn as i,
  bn as j,
  js as k,
  nn as l,
  ts as m,
  Rn as n,
  On as o,
  Ks as p,
  Dn as q,
  Rs as r,
  En as s,
  Js as t,
  Us as u,
  Vs as v,
  Ws as w,
  qs as x,
  Ds as y,
  Bn as z
};
