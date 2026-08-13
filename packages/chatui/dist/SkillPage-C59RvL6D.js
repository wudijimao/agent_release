import { jsxs as r, Fragment as Ge, jsx as e } from "react/jsx-runtime";
import He, { useMemo as ye, useState as v, useRef as pe, useCallback as Le, useLayoutEffect as Ht, useEffect as ve, forwardRef as dr, useId as Ir } from "react";
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
const bn = "_button_3tg6r_1", gn = "_primary_3tg6r_5", yn = "_disabled_3tg6r_9", vn = "_secondary_3tg6r_17", wn = "_ghost_3tg6r_25", Nn = "_danger_3tg6r_33", kn = "_small_3tg6r_41", Tn = "_medium_3tg6r_45", Cn = "_large_3tg6r_49", Sn = "_roundedSquare_3tg6r_53", Mn = "_roundedSmall_3tg6r_57", $n = "_roundedMedium_3tg6r_61", Ln = "_roundedLarge_3tg6r_62", zn = "_roundedFull_3tg6r_66", An = "_loadingSpinner_3tg6r_67", En = "_loading_3tg6r_67", Pn = "_fullWidth_3tg6r_90", Bn = "_icon_3tg6r_94", De = {
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
  primary: De.primary,
  secondary: De.secondary,
  ghost: De.ghost,
  danger: De.danger
}, In = {
  small: De.small,
  medium: De.medium,
  large: De.large
}, Rn = {
  square: De.roundedSquare,
  small: De.roundedSmall,
  medium: De.roundedMedium,
  large: De.roundedLarge,
  full: De.roundedFull
}, Oe = He.forwardRef(
  ({
    type: t = "primary",
    size: n = "medium",
    isLoading: o,
    loading: l,
    disabled: s = !1,
    children: p,
    icon: h,
    iconPosition: N = "left",
    className: y,
    fullWidth: m = !1,
    rounded: b = "medium",
    onClick: u,
    ...w
  }, T) => {
    const H = o ?? l ?? !1, I = s || H, _ = ye(() => H ? /* @__PURE__ */ r(Ge, { children: [
      /* @__PURE__ */ e("span", { className: De.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: p })
    ] }) : h ? /* @__PURE__ */ r(Ge, { children: [
      N === "left" && /* @__PURE__ */ e("span", { className: De.icon, children: h }),
      p && /* @__PURE__ */ e("span", { children: p }),
      N === "right" && /* @__PURE__ */ e("span", { className: De.icon, children: h })
    ] }) : p, [p, H, h, N]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: T,
        className: Ae(
          De.button,
          _n[t],
          In[n],
          Rn[b],
          {
            [De.fullWidth]: m,
            [De.loading]: H,
            [De.disabled]: I
          },
          y
        ),
        disabled: I,
        onClick: u,
        ...w,
        children: _
      }
    );
  }
);
Oe.displayName = "BaseButton";
const Dn = { small: "h-8", medium: "h-9", large: "h-14" }, Cr = He.forwardRef(
  ({
    type: t = "text",
    placeholder: n,
    value: o,
    defaultValue: l,
    disabled: s = !1,
    readOnly: p = !1,
    error: h = !1,
    size: N = "medium",
    prefix: y,
    suffix: m,
    prefixIcon: b,
    suffixIcon: u,
    onChange: w,
    onFocus: T,
    onBlur: H,
    onClear: I,
    className: _,
    containerClassName: X,
    clearable: G = !1,
    label: W,
    helperText: L,
    ...le
  }, O) => {
    const [D, E] = v(!1), Y = pe(null), f = Le((oe) => {
      Y.current = oe, typeof O == "function" ? O(oe) : O && (O.current = oe);
    }, [O]), te = Le(() => {
      var M, re;
      const oe = Y.current;
      oe && ((re = (M = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : M.set) == null || re.call(oe, ""), oe.dispatchEvent(new Event("input", { bubbles: !0 })), oe.focus(), I == null || I());
    }, [I]), K = ye(
      () => {
        var oe;
        return G && D && String(o ?? ((oe = Y.current) == null ? void 0 : oe.value) ?? "").length > 0;
      },
      [G, D, o]
    );
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      W && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: W }),
      /* @__PURE__ */ r(
        "div",
        {
          className: Ae(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Dn[N],
            !s && !h && "hover:border-controlBorder",
            D && !s && !h && "border-primary ring-2 ring-brandFocus",
            h && "border-danger",
            h && D && "ring-2 ring-dangerFocus",
            s && "cursor-not-allowed bg-surfaceMuted",
            X
          ),
          children: [
            (y || b) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: y || b }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: f,
                type: t,
                placeholder: n,
                value: o,
                defaultValue: l,
                disabled: s,
                readOnly: p,
                className: Ae("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", _),
                onFocus: (oe) => {
                  E(!0), T == null || T(oe);
                },
                onBlur: (oe) => {
                  E(!1), H == null || H(oe);
                },
                onChange: w,
                ...le
              }
            ),
            /* @__PURE__ */ r("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              K && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (oe) => oe.preventDefault(), onClick: te, "aria-label": "清空", children: "✕" }),
              m || u
            ] })
          ]
        }
      ),
      L && /* @__PURE__ */ e("div", { className: Ae("text-xs leading-6", h ? "text-danger" : "text-mutedText"), children: L })
    ] });
  }
);
Cr.displayName = "BaseInput";
const jn = { small: "h-8", medium: "h-9", large: "h-14" }, Fn = He.forwardRef(
  ({ options: t = [], value: n, defaultValue: o, placeholder: l, disabled: s = !1, error: p = !1, size: h = "medium", label: N, helperText: y, onChange: m, className: b, ...u }, w) => {
    const T = Le((H) => {
      const I = H.target.value, _ = t.find((X) => String(X.value) === I);
      m == null || m(I === "" ? "" : (_ == null ? void 0 : _.value) ?? I);
    }, [m, t]);
    return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
      N && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: N }),
      /* @__PURE__ */ r("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          "select",
          {
            ref: w,
            className: Ae(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              p && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              jn[h],
              b
            ),
            value: n ?? o ?? "",
            disabled: s,
            onChange: T,
            ...u,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              t.map((H) => /* @__PURE__ */ e("option", { value: H.value, disabled: H.disabled, children: H.label }, H.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      y && /* @__PURE__ */ e("div", { className: Ae("text-xs leading-6", p ? "text-danger" : "text-mutedText"), children: y })
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
  disabled: p = !1,
  className: h
}) {
  var u;
  const [N, y] = v(
    o ?? ((u = t[0]) == null ? void 0 : u.value) ?? ""
  ), m = n ?? N, b = (w) => {
    p || (n === void 0 && y(w), l == null || l(w));
  };
  return /* @__PURE__ */ e("div", { className: Ae(it.container, Xn[s], h), children: t.map((w) => {
    const T = m === w.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Ae(it.item, T && it.itemActive, p && it.itemDisabled),
        onClick: () => b(w.value),
        disabled: p,
        "aria-pressed": T,
        children: w.label
      },
      w.value
    );
  }) });
}
const Gn = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(0)} MB`, Yn = He.forwardRef(
  ({ accept: t, multiple: n = !1, disabled: o = !1, onChange: l, onError: s, maxSize: p, children: h, className: N, dragable: y = !0, placeholderTitle: m, placeholderDescription: b, placeholderIcon: u, maxCount: w }, T) => {
    const H = pe(null), [I, _] = v(!1), X = Le((W) => {
      if (w && W.length > w) {
        s == null || s(new Error(`单次最多上传 ${w} 个文件`));
        return;
      }
      if (p) {
        for (const L of Array.from(W))
          if (L.size > p) {
            s == null || s(new Error(`文件“${L.name}”超过大小限制（${Gn(p)}）`));
            return;
          }
      }
      l == null || l(W);
    }, [w, p, l, s]), G = () => {
      var W;
      o || (W = H.current) == null || W.click();
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: T,
        className: Ae(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          I && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          o && "cursor-not-allowed opacity-60",
          N
        ),
        onClick: G,
        onKeyDown: (W) => {
          !o && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), G());
        },
        onDragOver: (W) => {
          y && !o && (W.preventDefault(), _(!0));
        },
        onDragLeave: () => _(!1),
        onDrop: (W) => {
          y && !o && (W.preventDefault(), _(!1), X(W.dataTransfer.files));
        },
        role: "button",
        tabIndex: o ? -1 : 0,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ e("input", { ref: H, type: "file", accept: t, multiple: n, disabled: o, onChange: (W) => W.target.files && X(W.target.files), className: "hidden" }),
          h || /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: u ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: m ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: b ?? "支持单文件或批量上传" })
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
  centered: p = !0,
  destroyOnClose: h = !1,
  mask: N = !0,
  maskClosable: y = !0,
  okText: m = "确认",
  cancelText: b = "取消",
  confirmLoading: u = !1,
  okButtonProps: w,
  cancelButtonProps: T,
  onConfirm: H,
  onCancel: I,
  onClose: _,
  onOk: X,
  onDismiss: G,
  children: W,
  footer: L,
  className: le,
  bodyClassName: O
}) => {
  const D = o ?? !1, E = Le(async () => {
    try {
      H ? await H() : X && await X();
    } catch (te) {
      console.error("Modal confirm error:", te);
    }
  }, [H, X]), Y = Le(() => {
    I ? I() : _ ? _() : G == null || G();
  }, [I, _, G]), f = ye(() => {
    if (L === null) return null;
    if (L) return L;
    const { type: te, ...K } = T ?? {}, { type: oe, ...M } = w ?? {};
    return /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(Oe, { type: "secondary", size: "medium", onClick: Y, ...K, children: b }),
      /* @__PURE__ */ e(Oe, { type: "primary", size: "medium", isLoading: u, onClick: E, ...M, children: u ? "加载中..." : m })
    ] });
  }, [T, b, u, L, Y, E, w, m]);
  return !D && h || !D ? null : /* @__PURE__ */ r(Ge, { children: [
    N && /* @__PURE__ */ e("div", { className: Ae("fixed inset-0 z-[1000] bg-overlayMask", Jt.maskAnimation), onClick: () => y && Y(), role: "presentation" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: Ae(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          p && "left-1/2 top-1/2",
          Jt.modalAnimation,
          le
        ),
        style: { width: s },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ r("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: Y, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: Ae("min-h-20 p-5 text-primaryText", O), children: W }),
          f
        ]
      }
    )
  ] });
};
Ut.displayName = "BaseModal";
const Jn = ({ title: t, extra: n, children: o, hoverable: l = !1, loading: s = !1, bordered: p = !0, className: h, bodyClassName: N, onClick: y }) => /* @__PURE__ */ r(
  "div",
  {
    className: Ae(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      p && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      s && "pointer-events-none opacity-60",
      h
    ),
    onClick: y,
    children: [
      (t || n) && /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        t && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: t }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: Ae("p-4 text-primaryText", (t || n) && "pt-1", N), children: o })
    ]
  }
);
Jn.displayName = "BaseCard";
const ea = ({ columns: t, dataSource: n = [], rowKey: o = "id", loading: l = !1, bordered: s = !0, striped: p = !0, className: h, onRow: N }, y) => /* @__PURE__ */ r("div", { ref: y, className: Ae("relative w-full overflow-x-auto bg-surface", h), children: [
  /* @__PURE__ */ r("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: s ? "border-b border-lineSubtle" : void 0, children: t.map((m) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: m.width, textAlign: m.align }, children: m.title }, m.key || String(m.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((m, b) => {
      const u = String(typeof o == "string" ? m[o] ?? b : b);
      return /* @__PURE__ */ e("tr", { className: Ae(s && "border-b border-lineSoft last:border-b-0", p && "odd:bg-surface"), ...(N == null ? void 0 : N(m, b)) || {}, children: t.map((w) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: w.align }, children: w.render ? w.render(m[w.dataIndex], m, b) : String(m[w.dataIndex] ?? "") }, w.key || String(w.dataIndex))) }, u);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), bs = He.forwardRef(ea), ta = ({ current: t = 1, pageSize: n = 10, total: o = 0, onChange: l, showSizeChanger: s = !1, pageSizeOptions: p = [10, 20, 50, 100], onShowSizeChange: h, disabled: N = !1, className: y }) => {
  const m = ye(() => Math.ceil(o / n) || 1, [n, o]), b = Le((w) => h == null ? void 0 : h(1, Number(w.target.value)), [h]), u = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ r("div", { className: Ae("flex flex-wrap items-center justify-center gap-4 p-4", y), children: [
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t > 1 && (l == null ? void 0 : l(t - 1)), disabled: N || t <= 1, children: "← 上一页" }),
    /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      t,
      " / ",
      m,
      " 页，共 ",
      o,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: u, onClick: () => t < m && (l == null ? void 0 : l(t + 1)), disabled: N || t >= m, children: "下一页 →" }),
    s && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: b, disabled: N, children: p.map((w) => /* @__PURE__ */ r("option", { value: w, children: [
      w,
      " 条/页"
    ] }, w)) })
  ] });
};
ta.displayName = "BasePagination";
const Vt = ({ description: t = "暂无数据", image: n, children: o }) => /* @__PURE__ */ r("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  t && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: t }),
  o
] });
Vt.displayName = "BaseEmpty";
const At = ({ trigger: t, items: n, footerItems: o = [], open: l = !1, onOpenChange: s, onTriggerClick: p, onItemClick: h, placement: N = "bottom-start", width: y, portal: m = !1, className: b, triggerClassName: u, menuClassName: w, listClassName: T, footerClassName: H }) => {
  const I = pe(null), _ = pe(null), [X, G] = v({}), W = N.endsWith("end"), L = N.startsWith("top");
  Ht(() => {
    var f;
    if (!l || !m || !I.current) return;
    const E = I.current.getBoundingClientRect(), Y = L ? ((f = _.current) == null ? void 0 : f.offsetHeight) ?? 0 : 0;
    G({
      position: "fixed",
      left: W ? E.right : E.left,
      top: L ? E.top - Y - 8 : E.bottom,
      transform: W ? "translateX(-100%)" : void 0
    });
  }, [L, W, l, m, N]), ve(() => {
    if (!l || !s) return;
    const E = (Y) => {
      var te, K;
      const f = Y.target;
      (te = I.current) != null && te.contains(f) || (K = _.current) != null && K.contains(f) || s(!1);
    };
    return document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, [s, l]);
  const le = ye(() => y ? { width: typeof y == "number" ? `${y}px` : y } : void 0, [y]), O = Le((E) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: Ae(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !E.danger && !E.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !E.danger && E.active && "bg-primary-soft font-medium text-primary",
        E.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (Y) => h == null ? void 0 : h(E, Y),
      disabled: E.disabled,
      children: [
        E.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: E.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: E.label })
      ]
    },
    E.key
  ), [h]), D = l ? /* @__PURE__ */ r(
    "div",
    {
      ref: _,
      className: Ae(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !m && "absolute",
        !m && !L && "top-[calc(100%+8px)]",
        !m && L && "bottom-[calc(100%+8px)]",
        !m && W ? "right-0" : m ? void 0 : "left-0",
        w
      ),
      style: m ? { ...X, ...le } : le,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: Ae("flex min-h-0 flex-col gap-1", T), children: n.map(O) }),
        o.length > 0 && /* @__PURE__ */ e("div", { className: Ae("flex flex-col gap-1 border-t border-lineSoft pt-2", H), children: o.map(O) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ r("div", { ref: I, className: Ae("relative inline-block", b), children: [
    /* @__PURE__ */ e("button", { type: "button", className: Ae("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", u), onClick: (E) => {
      p == null || p(E), s == null || s(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: t }),
    m ? D && cn(D, document.body) : D
  ] });
};
At.displayName = "BaseActionMenu";
const ra = ({
  markdownContent: t,
  copyLabel: n = "复制 Markdown",
  onRefresh: o,
  feedback: l,
  onFeedback: s,
  disabled: p = !1
}) => {
  const [h, N] = v(!1), y = !!(o || s), m = Le(async () => {
    if (t.trim())
      try {
        await navigator.clipboard.writeText(t), N(!0), window.setTimeout(() => N(!1), 1200);
      } catch {
      }
  }, [t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${y ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: m,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${h ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: h ? "已复制" : n,
            children: h ? /* @__PURE__ */ e(ft, { size: 15 }) : /* @__PURE__ */ e(Pt, { size: 15 })
          }
        ),
        o && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            disabled: p,
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
}, er = He.memo(ra), na = {
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
      t.items && t.items.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText", children: t.items.map((s, p) => /* @__PURE__ */ e("li", { children: s }, `${p}-${s}`)) }),
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
  const s = t.status === "saving", p = t.status === "saved", h = t.actionable ?? !0, N = t.previewable ?? !0, y = s || p || !h || !o;
  return /* @__PURE__ */ r("article", { className: "not-prose w-full max-w-[460px] rounded-xl border border-borderGray bg-surface p-4 shadow-sm", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: !n || !N,
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
      /* @__PURE__ */ e("p", { className: "m-0 min-w-0 truncate text-xs text-tertiaryText", children: p ? "已保存到项目" : `保存到 ${t.targetLabel || "当前项目"}` }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        !p && h && l && /* @__PURE__ */ e(
          Oe,
          {
            type: "secondary",
            size: "small",
            disabled: s,
            onClick: () => l(t.actionKey),
            children: "取消"
          }
        ),
        (h || p) && /* @__PURE__ */ e(
          Oe,
          {
            type: p ? "secondary" : "primary",
            size: "small",
            disabled: y,
            onClick: () => o == null ? void 0 : o(t.actionKey),
            children: s ? /* @__PURE__ */ r(Ge, { children: [
              /* @__PURE__ */ e(pr, { size: 14, className: "animate-spin", "aria-hidden": "true" }),
              "保存中"
            ] }) : p ? /* @__PURE__ */ r(Ge, { children: [
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
}, Et = (t) => typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map((n) => Et(n)).join("") : He.isValidElement(t) ? Et(t.props.children) : "", nr = (t) => {
  const n = t.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, ca = ({ href: t, label: n }) => {
  const o = ye(() => {
    const l = n.trim();
    if (l) return l;
    try {
      const p = new URL(t, typeof window < "u" ? window.location.origin : "http://localhost").pathname.split("/").filter(Boolean).pop();
      if (p) return decodeURIComponent(p);
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
  const [s, p] = v(!1), h = Le(async () => {
    if (n.trim())
      try {
        await navigator.clipboard.writeText(n), p(!0), window.setTimeout(() => p(!1), 1200);
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
  const [n, o] = v(!1), l = Le(async () => {
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
    const p = l.match(/PMID\s*[:：]\s*(\d{4,})/i), h = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!p || !h) return;
    const N = l.slice(0, p.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), y = ((u = n[s - 1]) == null ? void 0 : u.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", b = Sr({
      title: N || y,
      pmid: p[1],
      doi: h[1]
    });
    b && o.push(b);
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
  onConfirmMiraDraft: p,
  onPreviewMiraDraft: h,
  onCancelMiraDraft: N,
  pendingDisplayActionKey: y,
  onDisplayCardAction: m,
  isTyping: b = !1,
  isStreaming: u
}) => {
  var re, z;
  const w = t.role === "user", T = u ?? b, H = pe(null), [I, _] = v(null), [X, G] = v(null), [W, L] = v(null), [le, O] = v(!1), D = ye(() => /```\s*mermaid/i.test(t.content), [t.content]), E = ye(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(t.content), [t.content]), Y = ye(() => /:[a-zA-Z0-9_+-]+:/.test(t.content), [t.content]), f = ye(
    () => w ? null : ma(t.content),
    [w, t.content]
  ), te = !!(f && f.items.length > 0);
  ve(() => {
    if (!E || I || X) return;
    let g = !1;
    return la().then((k) => {
      g || (_(() => k.remark), G(() => k.rehype));
    }).catch(() => {
    }), () => {
      g = !0;
    };
  }, [E, I, X]), ve(() => {
    if (!Y || le) return;
    let g = !1;
    return oa().then((k) => {
      g || (k && L(() => k), O(!0));
    }), () => {
      g = !0;
    };
  }, [Y, le]);
  const K = ye(() => {
    const g = [Tr];
    return W && g.push(W), I && g.push(I), g;
  }, [W, I]), oe = ye(() => {
    const g = [on];
    return X && g.push(X), g;
  }, [X]), M = ye(
    () => ({
      table: ({ node: g, ...k }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...k }) }),
      tr: ({ node: g, ...k }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...k }),
      th: ({ node: g, ...k }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...k
        }
      ),
      td: ({ node: g, ...k }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...k }),
      blockquote: ({ node: g, ...k }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...k
        }
      ),
      input: ({ node: g, type: k, checked: x, ...ne }) => k === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!x,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...ne
        }
      ) : /* @__PURE__ */ e("input", { type: k, ...ne }),
      section: ({ node: g, ...k }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...k }),
      p: ({ node: g, children: k, ...x }) => {
        const ne = He.Children.toArray(k);
        if (ne.length === 1 && He.isValidElement(ne[0])) {
          const ge = ne[0];
          if (typeof ge.props.href == "string" && nr(ge.props.href)) {
            const be = Et(ge.props.children).trim();
            return /* @__PURE__ */ e(ca, { href: ge.props.href, label: be });
          }
        }
        return /* @__PURE__ */ e("p", { ...x, children: k });
      },
      a: ({ node: g, href: k, ...x }) => {
        const ne = k ?? "", ge = /^https?:\/\/(dx\.)?doi\.org\//i.test(ne) || /^doi:/i.test(ne), be = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(ne) || /\/pmc\/|\/pmid\//i.test(ne), J = nr(ne);
        return ge || be || J ? /* @__PURE__ */ e(
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
      pre({ children: g, ...k }) {
        const x = He.Children.toArray(g).find(
          (U) => He.isValidElement(U) && typeof U.props.className == "string" && U.props.className.includes("language-")
        );
        if (!x)
          return /* @__PURE__ */ e("pre", { ...k, children: g });
        const ne = x.props.className ?? "", ge = ne.match(/language-([\w-]+)/), be = ge ? ge[1].toLowerCase() : "code", J = Et(x.props.children).replace(/\n$/, "");
        return be === "mermaid" ? /* @__PURE__ */ e(ua, { rawCode: J }) : /* @__PURE__ */ e(da, { language: be, rawCode: J, className: ne, children: x.props.children });
      },
      code({ children: g, className: k, ...x }) {
        return k ? /* @__PURE__ */ e("code", { className: k, ...x, children: g }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...x,
            children: g
          }
        );
      }
    }),
    []
  );
  return ve(() => {
    if (w || T || !D) return;
    const g = H.current;
    if (!g) return;
    const k = Array.from(g.querySelectorAll(".mermaid")).filter(
      (x) => x.dataset.processed !== "true"
    );
    k.length !== 0 && ia().then(async (x) => {
      await Promise.all(
        k.map(async (ne, ge) => {
          var V;
          const be = (V = ne.textContent) == null ? void 0 : V.trim();
          if (!be) return;
          const J = `mermaid-${Date.now()}-${ge}`, { svg: U } = await x.render(J, be);
          ne.innerHTML = U, ne.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [w, T, D, t.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${w ? "justify-end" : "justify-start"}`, children: w ? /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-end gap-1", children: [
    /* @__PURE__ */ r("div", { className: "message-bubble-user", children: [
      (t.references && t.references.length > 0 || t.attachments && t.attachments.length > 0) && /* @__PURE__ */ r("div", { className: "mb-2 flex flex-wrap gap-2", children: [
        (re = t.references) == null ? void 0 : re.map((g) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${g.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
            children: [
              g.type === "skill" ? /* @__PURE__ */ e(hr, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(fr, { size: 12, className: "shrink-0 text-chatReferenceText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: g.label, children: g.label })
            ]
          },
          g.id
        )),
        (z = t.attachments) == null ? void 0 : z.map((g) => /* @__PURE__ */ r(
          "div",
          {
            className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${g.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
            role: g.status === "error" ? "alert" : void 0,
            title: g.errorMessage,
            children: [
              g.status === "uploading" ? /* @__PURE__ */ e(pr, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : g.status === "error" ? /* @__PURE__ */ e(Wr, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : g.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: g.previewUrl, alt: g.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(xr, { size: 13, className: "shrink-0 text-tertiaryText" }),
              /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: g.name, children: g.name }),
              g.status === "uploading" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-tertiaryText", children: "上传中" }),
              g.status === "error" && /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-danger", children: "上传失败" })
            ]
          },
          g.id
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
    te && f ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: f.items.map((g, k) => /* @__PURE__ */ r(
      "article",
      {
        className: "group not-prose inline-flex w-full items-center gap-3 rounded-xl border border-borderGray bg-surface px-3 py-2.5 shadow-sm",
        children: [
          /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-white", children: "文献" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "m-0 truncate text-base font-medium text-primaryText", children: g.title }),
            /* @__PURE__ */ r("p", { className: "m-0 text-xs text-secondaryText", children: [
              "PMID:",
              " ",
              /* @__PURE__ */ e(
                "a",
                {
                  href: `https://pubmed.ncbi.nlm.nih.gov/${g.pmid}/`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: g.pmid
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
                  href: `https://doi.org/${g.doi}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "font-medium text-primary no-underline hover:underline",
                  children: g.doi
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            "a",
            {
              href: `https://pubmed.ncbi.nlm.nih.gov/${g.pmid}/`,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "打开文献详情",
              className: "shrink-0 rounded-md p-1 text-secondaryText opacity-0 transition-opacity group-hover:opacity-100 hover:bg-bgLight focus:opacity-100",
              children: /* @__PURE__ */ e(br, { size: 14 })
            }
          )
        ]
      },
      `${g.pmid}-${k}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: H,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          kr,
          {
            remarkPlugins: K,
            rehypePlugins: oe,
            components: M,
            children: t.content
          }
        )
      }
    ),
    t.miraDraft && /* @__PURE__ */ e(
      sa,
      {
        draft: t.miraDraft,
        onPreview: h,
        onConfirm: p,
        onCancel: N
      }
    ),
    t.displayCard && /* @__PURE__ */ e(
      aa,
      {
        card: t.displayCard,
        actionPending: y === t.displayCard.actionKey,
        onAction: m
      }
    ),
    !te && t.content && !T && /* @__PURE__ */ e(
      er,
      {
        markdownContent: t.content,
        onRefresh: s,
        feedback: o,
        onFeedback: n && l ? (g) => l(n, g) : void 0,
        disabled: T
      }
    )
  ] }) }) });
}, pa = He.memo(Mr), ha = {
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
  defaultExpanded: l = !0,
  elapsedSeconds: s
}) => {
  const [p, h] = v(l), N = pe(null);
  ve(() => {
    n.length > 0 && h(!0);
  }, [n.length]);
  const y = n.length > 0, m = s === void 0 ? void 0 : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  return /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: fa[t] }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: o || ha[t] }),
      m && /* @__PURE__ */ e(
        "span",
        {
          className: "text-[12px] tabular-nums leading-5 text-tertiaryText select-none",
          "aria-label": `已用时 ${m}`,
          children: m
        }
      ),
      y && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          onClick: () => h((b) => !b),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            p ? /* @__PURE__ */ e(zt, { size: 12 }) : /* @__PURE__ */ e($t, { size: 12 }),
            /* @__PURE__ */ r("span", { children: [
              n.length,
              " 条进度"
            ] })
          ]
        }
      )
    ] }),
    y && /* @__PURE__ */ e(
      "div",
      {
        ref: N,
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${p ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((b, u) => {
          const w = sr[b.type] ?? sr.tool, T = b.status ? xa[b.status] : void 0;
          return /* @__PURE__ */ r(
            "div",
            {
              className: "flex items-start gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: `mt-1 ${w.colorClass}`, children: w.icon }),
                /* @__PURE__ */ r("span", { className: "min-w-0 max-w-[480px]", children: [
                  /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("span", { className: "block min-w-0 truncate", children: b.label }),
                    T && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 ${T.colorClass}`,
                        "aria-label": b.status,
                        children: T.icon
                      }
                    )
                  ] }),
                  (b.detail || b.resultCount !== void 0) && /* @__PURE__ */ r("span", { className: "block truncate text-[12px] text-tertiaryText", children: [
                    b.detail,
                    b.detail && b.resultCount !== void 0 ? " · " : "",
                    b.resultCount !== void 0 ? `${b.resultCount} 条结果` : ""
                  ] })
                ] })
              ]
            },
            b.id ?? `${b.type}-${u}-${b.label}`
          );
        })
      }
    )
  ] });
}, ba = He.memo(qt);
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
  searchSteps: p = [],
  hasReceivedAssistantChunk: h = !1,
  contentMaxWidth: N = 800,
  selection: y,
  scrollbar: m,
  feedbackByMessageKey: b,
  getMessageKey: u = (O, D) => String(D),
  onFeedback: w,
  onRegenerate: T,
  onConfirmMiraDraft: H,
  onPreviewMiraDraft: I,
  onCancelMiraDraft: _,
  pendingDisplayActionKey: X,
  onDisplayCardAction: G,
  onScroll: W,
  scrollContainerRef: L,
  onMessageElement: le
}) {
  var U, V;
  const O = !!y, D = pe(null), E = pe(null), Y = pe(/* @__PURE__ */ new Map()), f = pe(), te = pe(), [K, oe] = v(), [M, re] = v(0), g = n && (s ?? !h) || s === !0 && (o === "awaiting_clarification" || o === "awaiting_confirmation" || o === "awaiting_approval" || o === "warning" || o === "failed");
  let k = -1, x = -1;
  if (n) {
    for (let ae = t.length - 1; ae >= 0; ae -= 1)
      if (((U = t[ae]) == null ? void 0 : U.role) === "user") {
        x = ae;
        break;
      }
    for (let ae = t.length - 1; ae > x; ae -= 1)
      if (((V = t[ae]) == null ? void 0 : V.role) === "assistant") {
        k = ae;
        break;
      }
  }
  const ne = x >= 0 ? u(t[x], x) : void 0, ge = k >= 0 ? u(t[k], k) : void 0, be = ne && ge ? `${ne}:${ge}` : void 0;
  ve(() => {
    if (!n) {
      te.current = void 0, re(0);
      return;
    }
    te.current = Date.now(), re(0);
    const ae = window.setInterval(() => {
      const ie = te.current;
      ie !== void 0 && re(Math.floor((Date.now() - ie) / 1e3));
    }, 1e3);
    return () => window.clearInterval(ae);
  }, [n]);
  const J = Le(
    (ae) => {
      D.current = ae, ga(L, ae);
    },
    [L]
  );
  return Ht(() => {
    if (!be || !ge || x < 0 || k < 0)
      return;
    const ae = D.current, ie = E.current, de = Y.current.get(x);
    if (!ae || !ie || !de) return;
    const fe = () => {
      const ee = window.getComputedStyle(ae), Q = window.getComputedStyle(ie), F = ae.clientHeight - Ft(ee.paddingTop) - Ft(ee.paddingBottom), Ee = Ft(Q.rowGap || Q.gap), Se = Math.max(
        0,
        Math.floor(F - de.offsetHeight - Ee)
      );
      oe(
        (Pe) => (Pe == null ? void 0 : Pe.assistantKey) === ge && Pe.minHeight === Se ? Pe : { assistantKey: ge, minHeight: Se }
      );
    };
    fe();
    const j = new ResizeObserver(fe);
    return j.observe(ae), j.observe(de), () => j.disconnect();
  }, [
    k,
    ge,
    be,
    x
  ]), Ht(() => {
    if (!be || !ge || (K == null ? void 0 : K.assistantKey) !== ge || x < 0 || f.current === be)
      return;
    const ae = D.current, ie = Y.current.get(x);
    !ae || !ie || (ae.scrollTo({ top: ie.offsetTop, behavior: "auto" }), f.current = be);
  }, [ge, be, x, K]), /* @__PURE__ */ r("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: J,
        "data-chat-scroll-container": !0,
        onScroll: W,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: E,
            className: `flex w-full flex-col ${O ? "gap-3" : "gap-8"}`,
            style: { maxWidth: N },
            children: [
              t.map((ae, ie) => {
                const de = u(ae, ie), fe = (y == null ? void 0 : y.selectedMessageKeys.has(de)) ?? !1;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    "data-chat-message-index": ie,
                    "data-chat-turn-reserved": (K == null ? void 0 : K.assistantKey) === de ? "true" : void 0,
                    ref: (j) => {
                      j ? Y.current.set(ie, j) : Y.current.delete(ie), le == null || le(ie, j);
                    },
                    className: O ? "flex w-full items-start gap-2" : void 0,
                    style: (K == null ? void 0 : K.assistantKey) === de ? { minHeight: K.minHeight } : void 0,
                    children: [
                      y && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => y.onToggleMessage(de),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": fe ? "取消选择消息" : "选择消息",
                          children: fe ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(ft, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "div",
                        {
                          className: y ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${fe ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${ae.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Mr,
                              {
                                msg: ae,
                                actionKey: de,
                                feedback: b == null ? void 0 : b[de],
                                onFeedback: w,
                                onRefresh: T ? () => T(ie) : void 0,
                                onConfirmMiraDraft: H,
                                onPreviewMiraDraft: I,
                                onCancelMiraDraft: _,
                                pendingDisplayActionKey: X,
                                onDisplayCardAction: G,
                                isTyping: n && ie === k
                              }
                            ),
                            ie === k && g && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              qt,
                              {
                                phase: o,
                                label: l,
                                searchSteps: [...p],
                                elapsedSeconds: n ? M : void 0
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  de
                );
              }),
              k < 0 && g && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                qt,
                {
                  phase: o,
                  label: l,
                  searchSteps: [...p],
                  elapsedSeconds: n ? M : void 0
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
He.memo(ya);
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
  function({ open: n, width: o, resizing: l = !1, overlay: s = !1, overlayRight: p = 0, children: h }, N) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: N,
        "data-overlay": s ? "true" : "false",
        style: { width: n ? o : 0, ...s ? { right: p } : {} },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${s ? "absolute inset-y-0 z-30 shadow-lg" : ""} ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: o }, className: "h-full min-w-0", children: h })
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
  actions: p,
  onOpenSidebar: h,
  onStartEditTitle: N,
  onEditingTitleChange: y,
  onCommitTitle: m,
  onEditingTitleKeyDown: b
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
              onClick: h,
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
              onChange: (w) => y == null ? void 0 : y(w.target.value),
              onBlur: m,
              onKeyDown: b,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${N ? "cursor-pointer" : ""}`,
              onClick: N,
              title: N ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        p && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: p })
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
  const [s, p] = v(o), [h, N] = v(null), [y, m] = v(0), [b, u] = v(0), [w, T] = v(!1), H = pe(null), I = pe({}), _ = pe(null), X = Le(() => {
    const L = H.current;
    if (!L) {
      m(0), u(0);
      return;
    }
    const { scrollTop: le, scrollHeight: O, clientHeight: D } = L;
    if (O <= D || D <= 0) {
      m(0), u(0);
      return;
    }
    const E = Math.max(D / O * D, 24), Y = D - E, f = le / Math.max(O - D, 1);
    m(E), u(Y * f);
  }, []), G = Le(() => {
    X(), T(!0), _.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => T(!1), 650);
  }, [X]), W = () => {
    _.current !== null && (window.clearTimeout(_.current), _.current = null), p(!1), N(null), T(!1);
  };
  return ve(() => {
    if (!s) return;
    const L = window.requestAnimationFrame(X);
    return () => window.cancelAnimationFrame(L);
  }, [s, t.length, X]), ve(() => {
    const L = H.current, le = I.current[n];
    if (!L || !le) return;
    const O = L.scrollTop, D = O + L.clientHeight, E = le.offsetTop, Y = E + le.offsetHeight, f = 16;
    E < O + f ? L.scrollTo({ top: Math.max(E - f, 0), behavior: "auto" }) : Y > D - f && L.scrollTo({
      top: Math.max(Y - L.clientHeight + f, 0),
      behavior: "auto"
    });
  }, [n, t.length]), ve(() => () => {
    _.current !== null && window.clearTimeout(_.current);
  }, []), t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2", children: /* @__PURE__ */ e(
    "div",
    {
      className: "pointer-events-auto relative",
      onMouseEnter: () => p(!0),
      onMouseLeave: W,
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: H,
          onScroll: G,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${s ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ r("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: t.map((L) => {
              const le = L.messageIndex === n, O = h === L.messageIndex;
              return /* @__PURE__ */ r(
                "button",
                {
                  ref: (D) => {
                    I.current[L.messageIndex] = D;
                  },
                  type: "button",
                  onClick: () => l(L.messageIndex),
                  onMouseEnter: () => N(L.messageIndex),
                  onMouseLeave: () => N(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${s ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${L.messageIndex + 1} 条用户消息`,
                  title: L.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${s ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${le ? "text-primary" : O ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: L.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${le ? "h-[4px] w-[12px] bg-primary" : O ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                L.messageIndex
              );
            }) }),
            s && y > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${w ? "opacity-100" : "opacity-0"}`,
                style: { height: y, transform: `translateY(${b}px)` }
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
  onCancel: p,
  onCreateLink: h,
  onCloseModal: N,
  onCopyLink: y
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
            /* @__PURE__ */ e(Oe, { type: "secondary", size: "small", onClick: p, children: "取消" }),
            /* @__PURE__ */ e(
              Oe,
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
      Ut,
      {
        visible: o,
        title: "创建分享链接",
        width: 450,
        onCancel: N,
        footer: null,
        children: /* @__PURE__ */ r("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: y,
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
  error: p,
  onRequestUpload: h,
  onDeleteAttachment: N
}) {
  return /* @__PURE__ */ r("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ r("div", { className: h ? "pr-28" : void 0, children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
      h && /* @__PURE__ */ e("div", { className: "absolute right-0 top-6", children: /* @__PURE__ */ e(
        Oe,
        {
          type: "secondary",
          size: "small",
          disabled: o,
          onClick: h,
          children: /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1.5", children: [
            o ? /* @__PURE__ */ e(ot, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(Kr, { size: 14 }),
            o ? "上传中" : "上传附件"
          ] })
        }
      ) })
    ] }),
    t.length ? /* @__PURE__ */ e("div", { className: `mt-3 flex flex-wrap gap-2.5 ${h ? "pr-28" : ""}`, children: t.map((y) => {
      const m = l === y.id;
      return /* @__PURE__ */ r(
        "div",
        {
          className: "inline-flex max-w-full items-center gap-2 rounded-full border border-lineSubtle bg-surface px-3 py-1.5 text-sm text-secondaryText",
          title: y.statusLabel,
          children: [
            /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0" }),
            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: y.name }),
            y.status === "processing" && /* @__PURE__ */ e(ot, { size: 12, className: "animate-spin" }),
            N && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: m,
                onClick: () => N(y.id),
                className: "-my-1 -mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                "aria-label": `删除附件 ${y.name}`,
                title: "删除附件",
                children: m ? /* @__PURE__ */ e(ot, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(wr, { size: 13 })
              }
            )
          ]
        },
        y.id
      );
    }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
    s && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: s }),
    p && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: p })
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
  const [o, l] = v(!1), s = pe(null), p = n === "page" ? "px-[120px]" : "px-6 md:px-8";
  ve(() => () => {
    s.current !== null && window.clearTimeout(s.current);
  }, []);
  const h = () => {
    l(!0), s.current !== null && window.clearTimeout(s.current), s.current = window.setTimeout(() => l(!1), 700);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${p}`, children: [
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
        onScroll: h,
        className: `auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${o ? "is-scrolling" : ""}`,
        children: [
          t.markdown.trim() ? /* @__PURE__ */ e("div", { className: `${zr.preview} ${p}`, children: /* @__PURE__ */ e(kr, { remarkPlugins: [Tr], children: t.markdown }) }) : /* @__PURE__ */ e("div", { className: `${n === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} rounded-lg border border-dashed border-borderSoft`, children: /* @__PURE__ */ e(Vt, { description: "正文暂无内容" }) }),
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
  pendingActionKey: p,
  onAction: h,
  resolveActions: N,
  renderContent: y,
  onResizeStart: m
}) {
  const b = t.find((T) => T.key === n) ?? null, u = b ? (N == null ? void 0 : N(b)) ?? b.actions : void 0, w = b ? y == null ? void 0 : y(b) : void 0;
  return /* @__PURE__ */ r("div", { "data-testid": "chat-document-preview", className: "relative flex h-full w-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "调整项目文件预览面板宽度",
        onMouseDown: m,
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
              onClick: () => o(T.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${H ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                T.type === "knowledge" || T.type === "draft" ? /* @__PURE__ */ e(Bt, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(Gr, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: T.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (I) => {
                I.stopPropagation(), l(T.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${T.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(bt, { size: 12 })
            }
          )
        ] }, T.key);
      }) }),
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-2", children: [
        b && (u == null ? void 0 : u.map((T) => /* @__PURE__ */ e(
          Oe,
          {
            type: T.tone ?? "secondary",
            size: "small",
            disabled: p === b.key || !h,
            onClick: () => h == null ? void 0 : h(b.key, T.id),
            children: T.label
          },
          T.id
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
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-hidden pb-4 pt-2", children: b ? w || (b.document ? /* @__PURE__ */ e(Ta, { document: b.document, layout: "panel" }) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-6 text-center text-sm text-secondaryText", children: b.loading ? "正在加载文档…" : b.error || "文档暂时无法预览" })) : /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondaryText", children: "点击右侧项目文件内容可在此处预览" }) })
  ] });
}
function Cs({
  projectName: t = "未归属项目",
  searchQuery: n,
  error: o,
  knowledgeDocs: l,
  experiments: s,
  activePreviewKey: p,
  onSearchQueryChange: h,
  onOpenKnowledge: N,
  onOpenExperiment: y,
  onResizeStart: m
}) {
  const b = l.length + s.length;
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
          /* @__PURE__ */ e(ct, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
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
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: o ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: o }) : b === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ r(Ge, { children: [
        l.map((u) => {
          const w = `knowledge:${u.id}`, T = p === w;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => N(u.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${T ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${T ? "font-semibold" : "font-normal"}`, children: u.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: u.tags[0] ?? "未分类" })
              ]
            },
            u.id
          );
        }),
        s.map((u) => {
          const w = `experiment:${u.id}`, T = p === w;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => y(u.id),
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
  const s = t.slice(0, n), p = t.slice(o), h = s.match(/(?:^|\s)\/[^\s/]*$/);
  if (!h) {
    const u = `/${l} `;
    return { value: `${s}${u}${p}`, cursor: s.length + u.length };
  }
  const N = s.length - h[0].length, m = `${h[0].startsWith(" ") ? " " : ""}/${l} `, b = `${s.slice(0, N)}${m}`;
  return {
    value: `${b}${p}`,
    cursor: b.length
  };
}, Ms = (t, n, o, l) => {
  const s = t.slice(0, n), p = t.slice(o), h = s.match(/(?:^|\s)@[^\s@]*$/);
  if (!h) {
    const u = `@${l} `;
    return { value: `${s}${u}${p}`, cursor: s.length + u.length };
  }
  const N = s.length - h[0].length, m = `${h[0].startsWith(" ") ? " " : ""}@${l} `, b = `${s.slice(0, N)}${m}`;
  return {
    value: `${b}${p}`,
    cursor: b.length
  };
}, Pa = [], $s = [], Ar = ({
  onSend: t,
  disabled: n,
  autoFocus: o = !1,
  isStreaming: l = !1,
  onCancel: s,
  leadingControls: p,
  skillOptions: h = $a,
  fileOptions: N = Pa,
  uploadAccept: y,
  validateUploadFile: m,
  onUploadValidationError: b
}) => {
  const [u, w] = v(""), [T, H] = v(!1), [I, _] = v(!1), [X, G] = v(""), [W, L] = v(-1), [le, O] = v(!1), [D, E] = v(""), [Y, f] = v(-1), [te, K] = v([]), [oe, M] = v([]), [re, z] = v([]), [g, k] = v(!1), x = pe(null), ne = pe(!1), ge = pe(0), be = pe(null), J = Ir(), U = pe([]), V = l, ae = V && !!s;
  ve(() => {
    U.current = te;
  }, [te]), ve(() => () => {
    U.current.forEach((i) => {
      i.previewUrl && URL.revokeObjectURL(i.previewUrl);
    });
  }, []);
  const ie = ye(() => {
    const i = X.trim().toLowerCase();
    return i ? h.filter((P) => `${P.id} ${P.description} ${P.source}`.toLowerCase().includes(i)) : h;
  }, [h, X]), de = ye(() => {
    const i = D.trim().toLowerCase();
    return i ? N.filter((P) => `${P.name} ${P.projectName} ${P.sourceType} ${P.operatorName ?? ""} ${P.operatedAt ?? ""}`.toLowerCase().includes(i)) : N.filter((P) => P.isRecent).slice(0, 10);
  }, [N, D]), fe = Le((i, P) => {
    const q = P ?? i.length, ue = Aa(i, q);
    if (ue !== null) {
      _(!0), G(ue), L(-1), O(!1), E(""), f(-1);
      return;
    }
    const me = Ea(i, q);
    if (me !== null) {
      O(!0), E(me), f(-1), _(!1), G(""), L(-1);
      return;
    }
    _(!1), G(""), L(-1), O(!1), E(""), f(-1);
  }, []), j = Le((i) => {
    if (i.disabled) return;
    const P = x.current, q = (P == null ? void 0 : P.selectionStart) ?? u.length, ue = (P == null ? void 0 : P.selectionEnd) ?? q, me = u.slice(0, q), xe = u.slice(ue), S = (() => {
      const we = me.match(/(?:^|\s)\/[^\s/]*$/);
      if (!we)
        return { value: u, cursor: q };
      const ze = me.length - we[0].length, Be = we[0].startsWith(" ") ? " " : "", Fe = `${me.slice(0, ze)}${Be}`;
      return {
        value: `${Fe}${xe}`,
        cursor: Fe.length
      };
    })();
    M((we) => {
      const ze = `skill-${i.id}`;
      return we.some((Be) => Be.id === ze) ? we : [...we, { id: ze, type: "skill", label: i.id, sourceId: i.id }];
    }), w(S.value), _(!1), G(""), L(-1), requestAnimationFrame(() => {
      P && (P.focus(), P.setSelectionRange(S.cursor, S.cursor));
    });
  }, [u]), ee = Le((i) => {
    const P = x.current, q = (P == null ? void 0 : P.selectionStart) ?? u.length, ue = (P == null ? void 0 : P.selectionEnd) ?? q, me = u.slice(0, q), xe = u.slice(ue), S = (() => {
      const we = me.match(/(?:^|\s)@[^\s@]*$/);
      if (!we)
        return { value: u, cursor: q };
      const ze = me.length - we[0].length, Be = we[0].startsWith(" ") ? " " : "", Fe = `${me.slice(0, ze)}${Be}`;
      return {
        value: `${Fe}${xe}`,
        cursor: Fe.length
      };
    })();
    z((we) => {
      const ze = `doc-${i.id}`;
      return we.some((Be) => Be.id === ze) ? we : [...we, { id: ze, type: "doc", label: i.name, sourceId: i.id }];
    }), w(S.value), O(!1), E(""), f(-1), requestAnimationFrame(() => {
      P && (P.focus(), P.setSelectionRange(S.cursor, S.cursor));
    });
  }, [u]), Q = Le(() => {
    k(!1);
    const i = be.current;
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
  }, []), F = Le((i) => {
    const P = Array.from(i.target.files ?? []);
    if (P.length === 0) return;
    const q = P.filter((ue) => {
      const me = m == null ? void 0 : m(ue);
      return me ? (b == null || b(me), !1) : !0;
    });
    K((ue) => {
      const me = new Set(ue.map((S) => S.id)), xe = [...ue];
      return q.forEach((S) => {
        if (S.size > Sa || xe.length >= Ca) return;
        const we = `${S.name}-${S.size}-${S.lastModified}`;
        if (me.has(we)) return;
        const ze = S.type.startsWith("image/");
        me.add(we), xe.push({
          id: we,
          name: S.name,
          mimeType: S.type || "application/octet-stream",
          previewUrl: ze ? URL.createObjectURL(S) : void 0,
          file: S
        });
      }), xe;
    }), i.target.value = "";
  }, [b, m]), Ee = Le((i) => {
    K((P) => {
      const q = P.find((ue) => ue.id === i);
      return q != null && q.previewUrl && URL.revokeObjectURL(q.previewUrl), P.filter((ue) => ue.id !== i);
    });
  }, []), Se = Le((i) => {
    M((P) => P.filter((q) => q.id !== i));
  }, []), Pe = Le((i) => {
    z((P) => P.filter((q) => q.id !== i));
  }, []), _e = Le(() => {
    !u.trim() || n || l || (t({
      content: u,
      attachments: te.map((i) => ({
        id: i.id,
        name: i.name,
        mimeType: i.mimeType,
        previewUrl: i.previewUrl,
        file: i.file
      })),
      references: [...oe, ...re]
    }), w(""), K([]), M([]), z([]), _(!1), G(""), L(-1), O(!1), E(""), f(-1));
  }, [u, n, l, t, te, re, oe]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ r("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: J,
        ref: be,
        type: "file",
        multiple: !0,
        accept: y,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: F
      }
    ),
    (te.length > 0 || oe.length > 0 || re.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: [
      oe.map((i) => /* @__PURE__ */ r(
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
                onClick: () => Se(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${i.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      re.map((i) => /* @__PURE__ */ r(
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
                onClick: () => Pe(i.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatReferenceTextMuted opacity-0 transition-all hover:bg-chatReferenceHover hover:text-chatReferenceTextHover group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除文档引用 ${i.label}`,
                children: /* @__PURE__ */ e(bt, { size: 12 })
              }
            )
          ]
        },
        i.id
      )),
      te.map((i) => /* @__PURE__ */ r(
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
                onClick: () => Ee(i.id),
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
        ref: x,
        autoFocus: o,
        value: u,
        onCompositionStart: () => {
          ne.current = !0;
        },
        onCompositionEnd: (i) => {
          ne.current = !1, ge.current = performance.now(), fe(
            i.currentTarget.value,
            i.currentTarget.selectionStart
          );
        },
        onChange: (i) => {
          const P = i.target.value;
          w(P), fe(P, i.target.selectionStart);
        },
        onClick: (i) => {
          fe(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyUp: (i) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(i.key) || fe(i.currentTarget.value, i.currentTarget.selectionStart);
        },
        onKeyDown: (i) => {
          const P = i.nativeEvent;
          if (!(ne.current || P.isComposing || P.keyCode === 229 || i.key === "Enter" && performance.now() - ge.current < 50)) {
            if (i.key === "Enter" && (i.shiftKey || i.metaKey || i.ctrlKey)) {
              i.preventDefault();
              const q = i.currentTarget, ue = q.selectionStart ?? u.length, me = q.selectionEnd ?? ue, xe = `${u.slice(0, ue)}
${u.slice(me)}`, S = ue + 1;
              w(xe), fe(xe, S), requestAnimationFrame(() => {
                q.setSelectionRange(S, S);
              });
              return;
            }
            if (I) {
              if (i.key === "ArrowDown") {
                i.preventDefault(), L((q) => ie.length === 0 ? -1 : q < 0 ? 0 : (q + 1) % ie.length);
                return;
              }
              if (i.key === "ArrowUp") {
                i.preventDefault(), L((q) => ie.length === 0 ? -1 : q < 0 ? ie.length - 1 : (q - 1 + ie.length) % ie.length);
                return;
              }
              if (i.key === "Escape") {
                i.preventDefault(), _(!1), G(""), L(-1);
                return;
              }
              if (i.key === "Enter" && !i.shiftKey) {
                i.preventDefault();
                const q = W >= 0 ? ie[W] : void 0;
                q && j(q);
                return;
              }
            }
            if (le) {
              if (i.key === "ArrowDown") {
                i.preventDefault(), f((q) => de.length === 0 ? -1 : q < 0 ? 0 : (q + 1) % de.length);
                return;
              }
              if (i.key === "ArrowUp") {
                i.preventDefault(), f((q) => de.length === 0 ? -1 : q < 0 ? de.length - 1 : (q - 1 + de.length) % de.length);
                return;
              }
              if (i.key === "Escape") {
                i.preventDefault(), O(!1), E(""), f(-1);
                return;
              }
              if (i.key === "Enter" && !i.shiftKey) {
                i.preventDefault();
                const q = Y >= 0 ? de[Y] : void 0;
                q && ee(q);
                return;
              }
            }
            i.key === "Enter" && !i.shiftKey && (i.preventDefault(), _e());
          }
        },
        disabled: n,
        onFocus: () => H(!0),
        onBlur: () => {
          H(!1), _(!1), O(!1);
        },
        placeholder: T ? Ma : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${te.length > 0 || oe.length > 0 || re.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    I && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: X ? `搜索 skill：${X}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: ie.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : ie.map((i, P) => /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          disabled: i.disabled,
          title: i.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${i.disabled ? "cursor-not-allowed opacity-50" : P === W ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => j(i),
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
    le && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (i) => i.preventDefault(), children: /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(ct, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: D ? `搜索文件：${D}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !D && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(_t, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        de.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : de.map((i, P) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${P === Y ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => ee(i),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(Bt, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: i.name }),
              !D && i.operatorName && i.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${i.operatorName} ${i.operatedAt}` })
            ]
          },
          i.id
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3 pt-0", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
        p,
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
                  onClick: Q,
                  "aria-controls": J,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(Nr, { size: 16 })
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${g ? "block" : "hidden"}`,
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
          onClick: V ? s : _e,
          disabled: V ? !ae : n || !u.trim(),
          "aria-label": V ? "停止生成" : "发送消息",
          title: V ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${ae || !V && u.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: V ? /* @__PURE__ */ e(Yr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(Qr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
He.memo(Ar);
const Ba = ({ messages: t, isTyping: n, statusPhase: o = "thinking", searchSteps: l = [] }) => {
  const s = pe(null);
  ve(() => {
    var h;
    (h = s.current) == null || h.scrollIntoView({ behavior: "smooth" });
  }, [t.length, n]);
  const p = ye(() => t.map((h, N) => /* @__PURE__ */ e(pa, { msg: h }, `${N}-${h.role}`)), [t]);
  return /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    p,
    n && /* @__PURE__ */ e(ba, { phase: o, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: s })
  ] });
};
He.memo(Ba);
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
He.memo(Er);
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
  const l = pe(null), s = pe(null), [p, h] = v(""), [N, y] = v(""), [m, b] = v(!0), [u, w] = v(!1), [T, H] = v(!1), [I, _] = v(null), X = pe(null), [G, W] = v(!1), [L, le] = v("email"), [O, D] = v(""), [E, Y] = v(""), [f, te] = v(""), [K, oe] = v(""), [M, re] = v(0), [z, g] = v(!1), k = ye(() => p.trim().length > 0 && N.trim().length > 0 && !u, [
    p,
    u,
    N
  ]);
  ve(() => {
    if (M <= 0) return;
    const J = window.setTimeout(() => re((U) => U - 1), 1e3);
    return () => clearTimeout(J);
  }, [M]), ve(
    () => () => {
      X.current !== null && window.clearTimeout(X.current);
    },
    []
  ), ve(() => {
    const J = l.current, U = s.current;
    if (!J || !U) return;
    const V = J.getContext("2d");
    if (!V) return;
    const ae = window.getComputedStyle(document.documentElement), ie = ae.getPropertyValue("--chatui-color-auth-particle-active").trim(), de = ae.getPropertyValue("--chatui-color-auth-particle-idle").trim(), fe = ae.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let j = 0, ee = 0, Q = 0, F = window.devicePixelRatio || 1, Ee = [];
    const Se = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, Pe = 150, _e = () => {
      const xe = U.getBoundingClientRect();
      F = window.devicePixelRatio || 1, ee = xe.width, Q = xe.height, J.width = ee * F, J.height = Q * F, J.style.width = `${ee}px`, J.style.height = `${Q}px`, V.setTransform(F, 0, 0, F, 0, 0);
      const S = ee < 768 ? 40 : 90;
      Ee = Array.from({ length: S }, () => Ia(ee, Q));
    }, i = (xe) => {
      V.beginPath(), V.arc(xe.x, xe.y, xe.size, 0, Math.PI * 2), V.closePath(), V.fill();
    }, P = () => {
      V.clearRect(0, 0, ee, Q);
      for (let xe = 0; xe < Ee.length; xe += 1) {
        const S = Ee[xe];
        S.x += S.vx, S.y += S.vy, (S.x < 0 || S.x > ee) && (S.vx = -S.vx), (S.y < 0 || S.y > Q) && (S.vy = -S.vy);
        const we = Se.x - S.x, ze = Se.y - S.y, Be = Math.sqrt(we * we + ze * ze) || 1, Fe = we / Be, Je = ze / Be, Ce = (Se.radius - Be) / Se.radius, Z = Fe * Ce * S.density, et = Je * Ce * S.density;
        if (Be < Se.radius)
          S.x -= Z * 0.5, S.y -= et * 0.5, V.fillStyle = ie, S.size = Math.min(S.size + 0.1, 2.5);
        else {
          if (S.x !== S.baseX) {
            const qe = S.x - S.baseX;
            S.x -= qe / 50;
          }
          if (S.y !== S.baseY) {
            const qe = S.y - S.baseY;
            S.y -= qe / 50;
          }
          V.fillStyle = de, S.size = Math.max(S.size - 0.05, 1);
        }
        i(S);
        for (let qe = xe; qe < Ee.length; qe += 1) {
          const Ie = Ee[qe], Ye = S.x - Ie.x, Ue = S.y - Ie.y, Qe = Math.sqrt(Ye * Ye + Ue * Ue);
          if (Qe < Pe) {
            const at = (1 - Qe / Pe) * 0.4;
            V.beginPath(), V.strokeStyle = fe, V.globalAlpha = at, V.lineWidth = 1, V.moveTo(S.x, S.y), V.lineTo(Ie.x, Ie.y), V.stroke(), V.globalAlpha = 1, V.closePath();
          }
        }
      }
      j = window.requestAnimationFrame(P);
    }, q = (xe) => {
      const S = U.getBoundingClientRect();
      Se.x = xe.clientX - S.left, Se.y = xe.clientY - S.top;
    }, ue = () => {
      Se.x = -1e3, Se.y = -1e3;
    }, me = (xe) => {
      if (xe.touches.length < 1) return;
      const S = U.getBoundingClientRect();
      Se.x = xe.touches[0].clientX - S.left, Se.y = xe.touches[0].clientY - S.top;
    };
    return _e(), P(), window.addEventListener("resize", _e), U.addEventListener("mousemove", q), U.addEventListener("mouseleave", ue), U.addEventListener("touchmove", me, { passive: !0 }), U.addEventListener("touchend", ue), () => {
      window.cancelAnimationFrame(j), window.removeEventListener("resize", _e), U.removeEventListener("mousemove", q), U.removeEventListener("mouseleave", ue), U.removeEventListener("touchmove", me), U.removeEventListener("touchend", ue);
    };
  }, []);
  const x = async (J) => {
    if (J.preventDefault(), !!k) {
      w(!0), _(null);
      try {
        const U = await t({ email: p.trim(), password: N, rememberLogin: m });
        if (!U.ok) {
          _(U.message);
          return;
        }
        H(!0), X.current = window.setTimeout(() => {
          H(!1), n();
        }, 900);
      } catch {
        _("登录失败，请稍后重试。");
      } finally {
        w(!1);
      }
    }
  }, ne = async () => {
    !O.trim() || M > 0 || (w(!0), await new Promise((J) => window.setTimeout(J, 1e3)), w(!1), g(!0), re(60));
  }, ge = async () => {
    if (L === "email") {
      if (!O.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O) || !E.trim() || E.length < 6 || !f.trim() || f.length < 6 || f !== K) return;
      le("success");
    }
  }, be = () => {
    W(!1), le("email"), D(""), Y(""), te(""), oe(""), re(0), g(!1);
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
      /* @__PURE__ */ r("form", { onSubmit: x, className: "space-y-6", children: [
        /* @__PURE__ */ r("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: p,
              onChange: (J) => {
                h(J.target.value), _(null);
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
              value: N,
              onChange: (J) => {
                y(J.target.value), _(null);
              },
              required: !0,
              placeholder: " ",
              autoComplete: "current-password",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: lr, children: "密码" })
        ] }),
        I && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: I }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ r("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: m,
                  onChange: (J) => b(J.target.checked),
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
      !G && /* @__PURE__ */ r("div", { className: "mt-7", children: [
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
      G && /* @__PURE__ */ r("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: be,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        L === "email" && /* @__PURE__ */ r("div", { className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: O,
                onChange: (J) => D(J.target.value),
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
                  value: E,
                  onChange: (J) => Y(J.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: ne,
                disabled: M > 0 || u || !O.trim(),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${M > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: M > 0 ? `${M}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (J) => te(J.target.value),
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
                value: K,
                onChange: (J) => oe(J.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${K.length > 0 && f !== K ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          K.length > 0 && f !== K && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: ge,
              disabled: !O.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O) || !E.trim() || E.length < 6 || !f.trim() || f.length < 6 || f !== K,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        L === "success" && /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
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
              onClick: be,
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
  onNavigate: p
}) {
  const h = pe(null), N = pe(null), y = pe(null), [m, b] = v("identity"), [u, w] = v(""), [T, H] = v(""), [I, _] = v(""), [X, G] = v(""), [W, L] = v(""), [le, O] = v(""), D = t === "create-lab", [E, Y] = v(""), [f, te] = v(""), [K, oe] = v(!1), [M, re] = v(0), [z, g] = v(""), [k, x] = v(null), ne = E.length > 0 && E.trim().length < 6;
  ve(() => {
    if (M <= 0) return;
    const j = window.setTimeout(() => re((ee) => ee - 1), 1e3);
    return () => clearTimeout(j);
  }, [M]), ve(
    () => () => {
      y.current !== null && window.clearTimeout(y.current);
    },
    []
  ), ve(() => {
    const j = h.current, ee = N.current;
    if (!j || !ee) return;
    const Q = j.getContext("2d");
    if (!Q) return;
    const F = window.getComputedStyle(document.documentElement), Ee = F.getPropertyValue("--chatui-color-auth-particle-active").trim(), Se = F.getPropertyValue("--chatui-color-auth-particle-idle").trim(), Pe = F.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let _e = 0, i = 0, P = 0, q = window.devicePixelRatio || 1, ue = [];
    const me = { x: -1e3, y: -1e3, radius: 120 }, xe = 150, S = () => {
      const Ce = ee.getBoundingClientRect();
      q = window.devicePixelRatio || 1, i = Ce.width, P = Ce.height, j.width = i * q, j.height = P * q, j.style.width = `${i}px`, j.style.height = `${P}px`, Q.setTransform(q, 0, 0, q, 0, 0);
      const Z = i < 768 ? 40 : 90;
      ue = Array.from({ length: Z }, () => Ra(i, P));
    }, we = (Ce) => {
      Q.beginPath(), Q.arc(Ce.x, Ce.y, Ce.size, 0, Math.PI * 2), Q.closePath(), Q.fill();
    }, ze = () => {
      Q.clearRect(0, 0, i, P);
      for (let Ce = 0; Ce < ue.length; Ce += 1) {
        const Z = ue[Ce];
        Z.x += Z.vx, Z.y += Z.vy, (Z.x < 0 || Z.x > i) && (Z.vx = -Z.vx), (Z.y < 0 || Z.y > P) && (Z.vy = -Z.vy);
        const et = me.x - Z.x, qe = me.y - Z.y, Ie = Math.sqrt(et * et + qe * qe) || 1, Ye = et / Ie, Ue = qe / Ie, Qe = (me.radius - Ie) / me.radius, at = Ye * Qe * Z.density, dt = Ue * Qe * Z.density;
        Ie < me.radius ? (Z.x -= at * 0.5, Z.y -= dt * 0.5, Q.fillStyle = Ee, Z.size = Math.min(Z.size + 0.1, 2.5)) : (Z.x !== Z.baseX && (Z.x -= (Z.x - Z.baseX) / 50), Z.y !== Z.baseY && (Z.y -= (Z.y - Z.baseY) / 50), Q.fillStyle = Se, Z.size = Math.max(Z.size - 0.05, 1)), we(Z);
        for (let Ve = Ce; Ve < ue.length; Ve += 1) {
          const tt = ue[Ve], rt = Z.x - tt.x, Ke = Z.y - tt.y, st = Math.sqrt(rt * rt + Ke * Ke);
          if (st < xe) {
            const Xe = (1 - st / xe) * 0.4;
            Q.beginPath(), Q.strokeStyle = Pe, Q.globalAlpha = Xe, Q.lineWidth = 1, Q.moveTo(Z.x, Z.y), Q.lineTo(tt.x, tt.y), Q.stroke(), Q.globalAlpha = 1, Q.closePath();
          }
        }
      }
      _e = window.requestAnimationFrame(ze);
    }, Be = (Ce) => {
      const Z = ee.getBoundingClientRect();
      me.x = Ce.clientX - Z.left, me.y = Ce.clientY - Z.top;
    }, Fe = () => {
      me.x = -1e3, me.y = -1e3;
    }, Je = (Ce) => {
      if (Ce.touches.length < 1) return;
      const Z = ee.getBoundingClientRect();
      me.x = Ce.touches[0].clientX - Z.left, me.y = Ce.touches[0].clientY - Z.top;
    };
    return S(), ze(), window.addEventListener("resize", S), ee.addEventListener("mousemove", Be), ee.addEventListener("mouseleave", Fe), ee.addEventListener("touchmove", Je, { passive: !0 }), ee.addEventListener("touchend", Fe), () => {
      window.cancelAnimationFrame(_e), window.removeEventListener("resize", S), ee.removeEventListener("mousemove", Be), ee.removeEventListener("mouseleave", Fe), ee.removeEventListener("touchmove", Je), ee.removeEventListener("touchend", Fe);
    };
  }, []);
  const ge = async () => {
    if (!(!/^1[3-9]\d{9}$/.test(I) || M > 0)) {
      oe(!0), x(null);
      try {
        const j = await n(I);
        if (!j.ok) {
          x(j);
          return;
        }
        re(j.resendAfterSeconds ?? 60), g(j.message ?? "短信验证码已发送");
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        oe(!1);
      }
    }
  }, be = () => ({
    email: u.trim(),
    name: T.trim(),
    phoneNumber: I,
    phoneVerificationCode: X.trim(),
    mode: t,
    ...D ? { labName: le.trim() } : { inviteCode: W.trim() }
  }), J = () => {
    const j = ["identity", "password", "success"], ee = j.indexOf(m);
    ee < j.length - 1 && b(j[ee + 1]);
  }, U = ye(() => {
    if (K) return !1;
    switch (m) {
      case "identity":
        return D ? u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(I) && X.length === 6 && le.trim().length > 0 : u.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) && T.trim().length > 0 && /^1[3-9]\d{9}$/.test(I) && X.length === 6 && W.trim().length > 0;
      case "password":
        return E.trim().length >= 6 && E === f;
      default:
        return !1;
    }
  }, [m, u, T, I, X, W, le, D, E, f, K]), V = async (j) => {
    if (j.preventDefault(), !!U) {
      oe(!0), x(null);
      try {
        const ee = be(), Q = m === "password" ? await l({ ...ee, password: E }) : await o(ee);
        if (!Q.ok) {
          x(Q);
          return;
        }
        J();
      } catch {
        x({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        oe(!1);
      }
    }
  }, ae = {
    identity: D ? "创建实验室" : "注册并加入实验室",
    password: "设置登录密码",
    success: ""
  }, ie = {
    identity: "",
    password: "",
    success: ""
  }, de = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", fe = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: N, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: h, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ r("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: ae[m] }),
        ie[m] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: ie[m] })
      ] }),
      m !== "success" && /* @__PURE__ */ r("form", { onSubmit: V, className: "space-y-5", children: [
        m === "identity" && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: u,
                onChange: (j) => {
                  w(j.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: de
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "邮箱" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: T,
                onChange: (j) => {
                  H(j.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "name",
                className: de
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
                  value: I,
                  onChange: (j) => {
                    _(j.target.value.replace(/\D/g, "").slice(0, 11)), g(""), x(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "tel",
                  maxLength: 11,
                  className: de
                }
              ),
              /* @__PURE__ */ e("span", { className: fe, children: "手机号" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: ge,
                disabled: M > 0 || K || !/^1[3-9]\d{9}$/.test(I),
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${M > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: M > 0 ? `${M}s后获取` : "获取验证码"
              }
            )
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                value: X,
                onChange: (j) => {
                  G(j.target.value.replace(/\D/g, "").slice(0, 6)), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "one-time-code",
                maxLength: 6,
                className: de
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "短信验证码" })
          ] }),
          z && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: z }),
          D ? /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: le,
                onChange: (j) => {
                  O(j.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: de
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "实验室名称" })
          ] }) : /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: W,
                onChange: (j) => {
                  L(j.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: de
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "邀请码" })
          ] })
        ] }),
        m === "password" && /* @__PURE__ */ r(Ge, { children: [
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: E,
                onChange: (j) => {
                  Y(j.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${de} ${(k == null ? void 0 : k.field) === "password" || ne ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "设置密码" }),
            ((k == null ? void 0 : k.field) === "password" || ne) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (k == null ? void 0 : k.field) === "password" ? k.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: f,
                onChange: (j) => {
                  te(j.target.value), x(null);
                },
                required: !0,
                placeholder: " ",
                className: `${de} ${f.length > 0 && E !== f ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: fe, children: "确认密码" }),
            f.length > 0 && E !== f && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        k && k.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: k.message }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: !U,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: K ? "处理中..." : m === "password" ? "完成注册" : "下一步" }),
              K && /* @__PURE__ */ r(
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
              y.current = window.setTimeout(s, 1e3);
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
            onClick: () => p("/login"),
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
  const l = pe(null), s = pe(null), p = pe(null), [h, N] = v("phone"), [y, m] = v(""), [b, u] = v(""), [w, T] = v(""), [H, I] = v(""), [_, X] = v(!1), [G, W] = v(0), [L, le] = v(""), [O, D] = v(null);
  ve(() => {
    if (G <= 0) return;
    const M = window.setTimeout(() => W((re) => re - 1), 1e3);
    return () => window.clearTimeout(M);
  }, [G]), ve(() => {
    const M = l.current, re = s.current;
    if (!M || !re) return;
    const z = M.getContext("2d");
    if (!z) return;
    const g = window.getComputedStyle(document.documentElement), k = g.getPropertyValue("--chatui-color-auth-particle-active").trim(), x = g.getPropertyValue("--chatui-color-auth-particle-idle").trim(), ne = g.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ge = 0, be = 0, J = 0, U = [];
    const V = { x: -1e3, y: -1e3, radius: 120 }, ae = 150, ie = () => {
      const Q = re.getBoundingClientRect(), F = window.devicePixelRatio || 1;
      be = Q.width, J = Q.height, M.width = be * F, M.height = J * F, M.style.width = `${be}px`, M.style.height = `${J}px`, z.setTransform(F, 0, 0, F, 0, 0), U = Array.from({ length: be < 768 ? 40 : 90 }, () => Da(be, J));
    }, de = () => {
      z.clearRect(0, 0, be, J);
      for (let Q = 0; Q < U.length; Q += 1) {
        const F = U[Q];
        F.x += F.vx, F.y += F.vy, (F.x < 0 || F.x > be) && (F.vx = -F.vx), (F.y < 0 || F.y > J) && (F.vy = -F.vy);
        const Ee = V.x - F.x, Se = V.y - F.y, Pe = Math.sqrt(Ee * Ee + Se * Se) || 1, _e = (V.radius - Pe) / V.radius;
        Pe < V.radius ? (F.x -= Ee / Pe * _e * F.density * 0.5, F.y -= Se / Pe * _e * F.density * 0.5, z.fillStyle = k, F.size = Math.min(F.size + 0.1, 2.5)) : (F.x -= (F.x - F.baseX) / 50, F.y -= (F.y - F.baseY) / 50, z.fillStyle = x, F.size = Math.max(F.size - 0.05, 1)), z.beginPath(), z.arc(F.x, F.y, F.size, 0, Math.PI * 2), z.fill();
        for (let i = Q; i < U.length; i += 1) {
          const P = U[i], q = F.x - P.x, ue = F.y - P.y, me = Math.sqrt(q * q + ue * ue);
          me >= ae || (z.beginPath(), z.globalAlpha = (1 - me / ae) * 0.4, z.strokeStyle = ne, z.lineWidth = 1, z.moveTo(F.x, F.y), z.lineTo(P.x, P.y), z.stroke(), z.globalAlpha = 1);
        }
      }
      ge = window.requestAnimationFrame(de);
    }, fe = (Q) => {
      const F = re.getBoundingClientRect();
      V.x = Q.clientX - F.left, V.y = Q.clientY - F.top;
    }, j = (Q) => {
      if (!Q.touches.length) return;
      const F = re.getBoundingClientRect();
      V.x = Q.touches[0].clientX - F.left, V.y = Q.touches[0].clientY - F.top;
    }, ee = () => {
      V.x = -1e3, V.y = -1e3;
    };
    return ie(), de(), window.addEventListener("resize", ie), re.addEventListener("mousemove", fe), re.addEventListener("mouseleave", ee), re.addEventListener("touchmove", j, { passive: !0 }), re.addEventListener("touchend", ee), () => {
      window.cancelAnimationFrame(ge), window.removeEventListener("resize", ie), re.removeEventListener("mousemove", fe), re.removeEventListener("mouseleave", ee), re.removeEventListener("touchmove", j), re.removeEventListener("touchend", ee);
    };
  }, []), ve(() => () => {
    p.current !== null && window.clearTimeout(p.current);
  }, []);
  const E = ye(() => /^1[3-9]\d{9}$/.test(y) && b.length === 6 && w.length >= 6 && w === H, [H, w, y, b]), Y = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", f = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ r("div", { ref: s, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ r("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ r("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      h === "phone" ? /* @__PURE__ */ r(Ge, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ r("form", { onSubmit: async (M) => {
          if (M.preventDefault(), !(!E || _)) {
            X(!0), D(null);
            try {
              const re = await n({ phoneNumber: y, phoneVerificationCode: b, newPassword: w });
              if (!re.ok) {
                D(re.message);
                return;
              }
              N("success");
            } catch {
              D("密码重置失败，请稍后重试。");
            } finally {
              X(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ r("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ r("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "tel", inputMode: "numeric", value: y, onChange: (M) => {
                m(M.target.value.replace(/\D/g, "").slice(0, 11)), le(""), D(null);
              }, required: !0, placeholder: " ", autoComplete: "tel", maxLength: 11, className: Y }),
              /* @__PURE__ */ e("span", { className: f, children: "手机号" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!/^1[3-9]\d{9}$/.test(y) || G > 0 || _)) {
                X(!0), D(null);
                try {
                  const M = await t(y);
                  if (!M.ok) {
                    D(M.message);
                    return;
                  }
                  W(M.resendAfterSeconds ?? 60), le(M.message ?? "短信验证码已发送");
                } catch {
                  D("验证码发送失败，请稍后重试。");
                } finally {
                  X(!1);
                }
              }
            }, disabled: G > 0 || _ || !/^1[3-9]\d{9}$/.test(y), className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${G > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: G > 0 ? `${G}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "text", inputMode: "numeric", value: b, onChange: (M) => {
              u(M.target.value.replace(/\D/g, "").slice(0, 6)), D(null);
            }, required: !0, placeholder: " ", autoComplete: "one-time-code", maxLength: 6, className: Y }),
            /* @__PURE__ */ e("span", { className: f, children: "短信验证码" })
          ] }),
          L && /* @__PURE__ */ e("p", { className: "text-xs text-primary", children: L }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: w, onChange: (M) => {
              T(M.target.value), D(null);
            }, required: !0, placeholder: " ", className: Y }),
            /* @__PURE__ */ e("span", { className: f, children: "新密码" })
          ] }),
          /* @__PURE__ */ r("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: H, onChange: (M) => {
              I(M.target.value), D(null);
            }, required: !0, placeholder: " ", className: `${Y} ${H.length > 0 && w !== H ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: f, children: "确认新密码" }),
            H.length > 0 && w !== H && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          O && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: O }),
          /* @__PURE__ */ r("button", { type: "submit", disabled: !E || _, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: _ ? "处理中..." : "重置密码" }),
            _ && /* @__PURE__ */ r("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          p.current = window.setTimeout(() => o({ replace: !0 }), 1e3);
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
  children: p,
  initialAiUsageWarningActive: h = !1,
  aiUsageWarningActive: N,
  canViewAiUsage: y = !0,
  canManageMembers: m = !0,
  chatActions: b = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: u,
  onLogout: w,
  onChatsChange: T,
  onRenameChat: H,
  onTogglePinChat: I,
  onShareChat: _,
  onDeleteChat: X
}) {
  const [G, W] = v(!0), [L, le] = v(240), [O, D] = v(!1), E = pe(0), Y = pe(240), [f, te] = v(() => {
    const c = { unassigned: !0 };
    return n.forEach((A) => {
      c[A.id] = !0;
    }), c;
  }), [K, oe] = v(!1), [M, re] = v(() => [...o]), [z, g] = v(null), [k, x] = v(null), [ne, ge] = v("time"), [be, J] = v(!1), [U, V] = v(null), [ae, ie] = v(""), [de, fe] = v(!1), [j, ee] = v(""), [Q, F] = v(!1), [Ee, Se] = v(h), [Pe, _e] = v(!1), i = N ?? Ee, P = pe(null), q = pe(null), ue = pe(null), me = () => {
    oe(!1), w();
  }, xe = (c) => {
    te((A) => ({ ...A, [c]: !A[c] }));
  }, S = (c) => {
    var C;
    re(($) => $.filter((ke) => ke.id !== c)), g(null), U === c && (V(null), ie("")), X == null || X(c), ((C = t.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : C[1]) === c && u("/chat/new", { replace: !0 });
  }, we = (c) => {
    const A = M.find(($) => $.id === c);
    if (!A) return;
    const C = !A.isPinned;
    re(($) => $.map(
      (Te) => Te.id === c ? { ...Te, isPinned: C } : Te
    )), I == null || I(c, C), g(null);
  }, ze = (c) => {
    V(c.id), ie(c.title), g(null);
  }, Be = () => {
    V(null), ie("");
  }, Fe = (c) => {
    const A = ae.trim();
    A && (re((C) => C.map(($) => $.id === c ? { ...$, title: A } : $)), H == null || H(c, A)), Be();
  }, Je = (c, A) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), Fe(A);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), Be());
  }, Ce = (c) => {
    var A;
    if (U === c) {
      (A = P.current) == null || A.focus();
      return;
    }
    u(`/chat/${c}`);
  }, Z = (c, A = !1) => U === c.id ? /* @__PURE__ */ r(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: ($) => {
        var ke;
        $.stopPropagation(), (ke = P.current) == null || ke.focus();
      },
      children: [
        A && /* @__PURE__ */ e(jt, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: P,
            value: ae,
            onChange: ($) => ie($.target.value),
            onKeyDown: ($) => Je($, c.id),
            onBlur: () => Fe(c.id),
            onClick: ($) => $.stopPropagation(),
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
    E.current = c.clientX, Y.current = L, D(!0);
  };
  ve(() => {
    if (!O) return;
    const c = 200, A = 440, C = (ke) => {
      const Te = ke.clientX - E.current, $e = Math.min(A, Math.max(c, Y.current + Te));
      le($e);
    }, $ = () => {
      D(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", C), window.addEventListener("mouseup", $), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", $);
    };
  }, [O, L]), ve(() => {
    G || le(240);
  }, [G]), ve(() => {
    T == null || T(M);
  }, [M, T]), ve(() => {
    re([...o]);
  }, [o]), ve(() => {
    if (!U) return;
    const c = window.requestAnimationFrame(() => {
      var A;
      (A = P.current) == null || A.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [U]), ve(() => () => {
    q.current !== null && window.clearTimeout(q.current), ue.current !== null && window.clearTimeout(ue.current);
  }, []);
  const qe = () => {
    J(!0), q.current !== null && window.clearTimeout(q.current), q.current = window.setTimeout(() => {
      J(!1);
    }, 600);
  }, Ie = () => {
    F(!0), ue.current !== null && window.clearTimeout(ue.current), ue.current = window.setTimeout(() => {
      F(!1);
    }, 600);
  };
  ve(() => {
    i || _e(!1);
  }, [i]);
  const Ye = () => {
    _e(!0), u("/ai-usage");
  }, Ue = ye(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...y ? [{
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
  ], [m, y]), Qe = (c) => {
    if (oe(!1), c.key === "skills") {
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
    c.key === "logout" && me();
  }, at = (c) => c.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(wr, { size: 14 }), danger: !0 }] : [], dt = (c, A = b) => {
    const C = [];
    return A.rename && C.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(sn, { size: 14 }) }), A.share && C.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(ln, { size: 14 }) }), A.pin && C.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(jt, { size: 14 })
    }), C;
  }, Ve = (c, A, C = {}) => {
    const $ = C.actions ?? b, ke = C.onMenuOpenIdChange ?? g, Te = !!($.rename || $.share || $.pin || $.delete), $e = C.showTaskBadge !== !1 && ir(c);
    return !Te && !$e ? null : /* @__PURE__ */ r("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${$e ? "ml-6" : "ml-2"}`, children: [
      $e && !A && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      Te && /* @__PURE__ */ e(
        At,
        {
          open: A,
          onOpenChange: (Me) => ke(Me ? c.id : null),
          placement: "bottom-end",
          width: C.width ?? Math.max(140, Math.min(176, L - 56)),
          portal: C.portal,
          trigger: /* @__PURE__ */ e(an, { size: 14 }),
          onTriggerClick: (Me) => {
            Me.stopPropagation();
          },
          items: dt(c, $),
          footerItems: at($),
          onItemClick: (Me, je) => {
            if (je.stopPropagation(), Me.key === "rename") {
              ze(c), ke(null);
              return;
            }
            if (Me.key === "share") {
              _ ? _(c.id) : u(`/chat/${c.id}?share=1`), ke(null);
              return;
            }
            if (Me.key === "pin") {
              we(c.id), ke(null);
              return;
            }
            if (Me.key === "delete") {
              S(c.id), ke(null);
              return;
            }
            ke(null);
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
  ], rt = ye(() => {
    const c = t.match(/^\/chat\/([^/]+)$/);
    return c ? M.find((A) => A.id === c[1]) ?? null : null;
  }, [M, t]), Ke = ye(
    () => M.filter((c) => c.isPinned),
    [M]
  ), st = ye(
    () => M.filter((c) => !c.isPinned),
    [M]
  ), Xe = ye(
    () => ne === "time" ? Ke.slice(0, or) : Ke,
    [Ke, ne]
  ), a = ye(() => {
    if (ne !== "time") return [];
    const c = Math.max(or - Xe.length, 0);
    return st.slice(0, c);
  }, [ne, st, Xe.length]), d = ye(
    () => Xe.length + a.length,
    [Xe.length, a.length]
  ), R = ne === "time" && M.length > d, B = ye(() => new Map(n.map((c) => [c.id, c.name])), [n]), ce = j.trim().toLowerCase(), se = ye(() => ce ? M.filter((c) => {
    const A = c.projectId ? B.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${A} ${c.date}`.toLowerCase().includes(ce);
  }) : M, [M, ce, B]);
  ve(() => {
    if (!rt) return;
    const c = rt.projectId ?? "unassigned";
    te((A) => A[c] !== !1 ? A : { ...A, [c]: !0 });
  }, [rt]);
  const he = () => {
    ee(""), fe(!0);
  }, Ne = () => {
    fe(!1), x(null), Be(), F(!1), ue.current !== null && (window.clearTimeout(ue.current), ue.current = null);
  }, Re = (c) => {
    fe(!1), x(null), u(`/chat/${c}`);
  };
  return /* @__PURE__ */ r("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ r(
      "aside",
      {
        style: { width: G ? L : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${G ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: { width: L, minWidth: L },
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
                      onClick: () => W(!1),
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
                    onScroll: qe,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${be ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      Xe.length > 0 && /* @__PURE__ */ r("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: Xe.map((c) => {
                          const A = t === `/chat/${c.id}`, C = z === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ce(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${U === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : A ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Z(c, ne !== "time"),
                                U !== c.id && Ve(c, C)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      ne === "project" && n.map((c) => {
                        const A = M.filter(($) => $.projectId === c.id && !$.isPinned), C = f[c.id] !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => xe(c.id),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: C ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          C && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: A.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : A.map(($) => {
                            const ke = t === `/chat/${$.id}`, Te = z === $.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ce($.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${U === $.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : ke ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Z($),
                                  U !== $.id && Ve($, Te)
                                ]
                              }
                            ) }, $.id);
                          }) })
                        ] }, c.id);
                      }),
                      ne === "project" && (() => {
                        const c = M.filter((C) => !C.projectId && !C.isPinned);
                        if (c.length === 0) return null;
                        const A = f.unassigned !== !1;
                        return /* @__PURE__ */ r("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => xe("unassigned"),
                              children: [
                                /* @__PURE__ */ r("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(Dt, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: A ? /* @__PURE__ */ e(zt, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e($t, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          A && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((C) => {
                            const $ = t === `/chat/${C.id}`, ke = z === C.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                              "div",
                              {
                                onClick: () => Ce(C.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${U === C.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : $ ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Z(C),
                                  U !== C.id && Ve(C, ke)
                                ]
                              }
                            ) }, C.id);
                          }) })
                        ] });
                      })(),
                      ne === "time" && /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
                        a.map((c) => {
                          const A = t === `/chat/${c.id}`, C = z === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ r(
                            "div",
                            {
                              onClick: () => Ce(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${U === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : A ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Z(c),
                                U !== c.id && Ve(c, C)
                              ]
                            }
                          ) }, c.id);
                        }),
                        R && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: he,
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
                i && !Pe && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
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
                    open: K,
                    onOpenChange: oe,
                    placement: "top-start",
                    width: L - 24,
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
          G && /* @__PURE__ */ e(
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
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${G ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof p == "function" ? p({ isSidebarOpen: G, setIsSidebarOpen: W, chats: M, setChats: re, setAiUsageWarningActive: Se }) : p }) }) }),
    /* @__PURE__ */ e(
      Ut,
      {
        visible: de,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Ne,
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
                value: j,
                onChange: (c) => ee(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          se.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ie,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${Q ? "is-scrolling is-scrolling-thin" : ""}`,
              children: se.map((c) => {
                const A = c.projectId ? B.get(c.projectId) ?? "未分组" : "未分组", C = ir(c), $ = k === c.id;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    onClick: () => Re(c.id),
                    className: "group flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-2 text-sm font-medium text-primaryText", children: [
                          Z(c, c.isPinned),
                          C && U !== c.id && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                          /* @__PURE__ */ e("span", { className: "truncate", children: A }),
                          /* @__PURE__ */ e("span", { children: "·" }),
                          /* @__PURE__ */ e("span", { children: c.date })
                        ] })
                      ] }),
                      U !== c.id && Ve(c, $, {
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
  isSidebarOpen: p = !0,
  skillOptions: h,
  fileOptions: N,
  quickPrompts: y,
  uploadAccept: m,
  validateUploadFile: b,
  onUploadValidationError: u,
  onSelectProject: w,
  onCreateProject: T,
  onOpenSidebar: H,
  onSelectQuickPrompt: I,
  onSend: _
}) {
  const [X, G] = v(!1), [W, L] = v(!1), [le, O] = v(""), D = pe(null), E = pe(null), Y = ye(
    () => t.find((z) => z.id === n) ?? null,
    [t, n]
  ), f = ye(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !Y
    },
    ...t.map((z) => ({
      key: z.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: z.name }),
      active: (Y == null ? void 0 : Y.id) === z.id
    }))
  ], [t, Y]), te = ye(() => T ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(Nr, { size: 16 }) }] : [], [T]), K = () => {
    L(!1), O("");
  }, oe = (z) => {
    if (z.key === "create") {
      L(!0), O("");
      return;
    }
    const g = z.key === "none" ? null : String(z.key);
    w(g), G(!1);
  }, M = () => {
    const z = le.trim();
    if (!z) return;
    const g = t.find(
      (k) => k.name.trim().toLowerCase() === z.toLowerCase()
    );
    g ? w(g.id) : T == null || T(z), K(), G(!1);
  };
  ve(() => {
    if (!W) return;
    const z = (g) => {
      var x, ne;
      const k = g.target;
      (x = E.current) != null && x.contains(k) || (ne = D.current) != null && ne.contains(k) || (K(), G(!1));
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [W]);
  const re = /* @__PURE__ */ r("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e("h1", { className: "mb-10 text-5xl tracking-wider text-primaryText", children: "研究，由此开始" }),
    /* @__PURE__ */ r("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: D, className: "relative", children: W && /* @__PURE__ */ e(
        "div",
        {
          ref: E,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ r("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                Cr,
                {
                  value: le,
                  onChange: (z) => O(z.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(Oe, { type: "secondary", size: "small", onClick: K, children: "取消" }),
              /* @__PURE__ */ e(
                Oe,
                {
                  type: "primary",
                  size: "small",
                  onClick: M,
                  disabled: !le.trim(),
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
          onSend: _,
          disabled: l,
          autoFocus: o,
          skillOptions: h,
          fileOptions: N,
          uploadAccept: m,
          validateUploadFile: b,
          onUploadValidationError: u,
          leadingControls: /* @__PURE__ */ e(
            At,
            {
              open: X,
              onOpenChange: (z) => {
                !z && W || (G(z), z ? L(!1) : K());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ r("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: Y ? Y.name : "工作项目" }),
                /* @__PURE__ */ e(zt, { size: 14 })
              ] }),
              items: f,
              footerItems: te,
              onItemClick: oe,
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
        onSelect: I ?? _,
        prompts: y,
        disabled: l
      }
    )
  ] });
  return s ? re : /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      va,
      {
        isSidebarOpen: p,
        onOpenSidebar: H ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: re })
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
  index: p,
  attachments: h = [],
  attachmentAccept: N,
  attachmentUnavailableHint: y,
  saving: m = !1,
  saveError: b,
  layout: u = "page",
  showHeaderActions: w = !0,
  onTitleChange: T,
  onMarkdownChange: H,
  onUploadAttachments: I,
  onDeleteAttachment: _,
  onSave: X,
  onClose: G
}) {
  const W = pe(null), L = pe(null), le = pe(n), O = pe(H), [D, E] = v(!1), [Y, f] = v(null), [te, K] = v(""), oe = u === "page" ? "px-[120px]" : "px-6 md:px-8";
  ve(() => {
    O.current = H;
  }, [H]), ve(() => {
    const z = W.current;
    if (!z) return;
    const g = /* @__PURE__ */ new Map(), k = new wt({
      root: z,
      defaultValue: le.current,
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
            ), R = /* @__PURE__ */ new Set([
              "h1",
              "h2",
              "h3",
              "ordered-list",
              "bullet-list",
              "task-list",
              "code",
              "quote"
            ]), B = (A) => {
              const C = A.get(Nt), $ = V, Te = ($ != null && $.matches(
                "p, h1, h2, h3, h4, h5, h6, blockquote, pre"
              ) ? $ : $ == null ? void 0 : $.querySelector(
                '[data-content-dom="true"] p, [data-content-dom="true"] h1, [data-content-dom="true"] h2, [data-content-dom="true"] h3, [data-content-dom="true"] pre'
              )) ?? ($ instanceof HTMLElement ? $ : null);
              if (!Te) return C;
              try {
                const $e = C.posAtDOM(Te, 0), Me = C.state.doc.resolve(
                  Math.min(
                    Math.max($e, 0),
                    C.state.doc.content.size
                  )
                );
                C.dispatch(
                  C.state.tr.setSelection(
                    Yt.near(Me)
                  )
                );
              } catch {
              }
              return C;
            }, ce = (A) => {
              const C = B(A), $ = kt.type(A), ke = (Me) => {
                const { $from: je } = C.state.selection;
                for (let We = je.depth; We > 0; We -= 1)
                  if (je.node(We).type.name === Me) return !0;
                return !1;
              };
              for (let Me = 0; Me < 10 && !(!ke($.name) || !mn($)(
                C.state,
                C.dispatch
              )); Me += 1)
                ;
              for (let Me = 0; Me < 10 && !(!ke("blockquote") || !un(C.state, C.dispatch)); Me += 1)
                ;
              const Te = hn.type(A), $e = C.state.selection.$from.parent;
              $e.isTextblock && $e.type !== Te && A.get(dn).call(fn.key, {
                nodeType: Te
              });
            };
            g.set(
              "paragraph",
              ce
            );
            const se = (A) => {
              const C = B(A), { selection: $ } = C.state, ke = kt.type(A), { $from: Te } = $;
              let $e = -1;
              for (let je = Te.depth; je > 0; je -= 1)
                if (Te.node(je).type.name === ke.name) {
                  $e = je;
                  break;
                }
              if ($e > 0) {
                const je = $e - 1, We = je > 0 && Te.node(je).childCount === 1 ? je : $e;
                C.dispatch(
                  C.state.tr.delete(
                    Te.before(We),
                    Te.after(We)
                  )
                );
                return;
              }
              if (!$.empty) {
                C.dispatch(
                  C.state.tr.delete($.from, $.to)
                );
                return;
              }
              const Me = Math.min(1, Te.depth);
              Me < 1 || C.dispatch(
                C.state.tr.delete(
                  Te.before(Me),
                  Te.after(Me)
                )
              );
            }, he = (A, C, $) => {
              const ke = d.get(C);
              if (!ke) return;
              const { key: Te, ...$e } = ke, Me = ($ == null ? void 0 : $.icon) ?? $e.icon, je = [
                ht(C),
                $ == null ? void 0 : $.iconClass
              ].filter(Boolean).join(" "), We = [
                "ordered-list",
                "bullet-list",
                "task-list"
              ].includes(C), ut = R.has(C) ? (Ze) => {
                var Kt;
                if (ce(Ze), !We) {
                  if (C === "quote") {
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
                  (Kt = $e.onRun) == null || Kt.call($e, Ze);
                  return;
                }
                const xt = Ze.get(Nt), Pr = C === "ordered-list" ? Qt.type(Ze) : Zt.type(Ze);
                if (!pn(Pr)(
                  xt.state,
                  xt.dispatch
                ) || C !== "task-list") return;
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
              } : $e.onRun;
              R.has(C) && ut && g.set(
                C,
                ut
              ), A.addItem(C, {
                ...$e,
                label: ($ == null ? void 0 : $.label) ?? $e.label,
                icon: Mt(Me, je),
                onRun: ut
              });
            };
            a.clear();
            const Ne = a.addGroup("basic", "基础");
            Ne.addItem("paragraph", {
              label: "正文",
              icon: Mt(
                Wt,
                ht("paragraph")
              ),
              onRun: ce
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
            ].forEach(({ key: A, icon: C, label: $ }) => {
              he(Ne, A, { icon: C, label: $ });
            });
            const Re = a.addGroup("common", "常用");
            he(Re, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), he(Re, "math", {
              iconClass: "chatui-document-menu-icon-math"
            }), a.addGroup("actions", "操作").addItem("delete", {
              label: "删除",
              icon: Mt(
                Ya,
                "chatui-document-menu-action-delete"
              ),
              onRun: se
            });
          }
        }
      }
    });
    k.on((a) => {
      a.markdownUpdated((d, R, B) => {
        R !== B && O.current(R);
      });
    });
    const x = z.ownerDocument;
    let ne = "", ge = null, be = null, J = !0, U = !1, V = null, ae = null, ie = null, de = null, fe = null, j = null, ee = null, Q = null;
    const F = (a) => {
      const d = a == null ? void 0 : a.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-code-block, .milkdown-list-item-block"
      );
      return !d || !d.closest(".ProseMirror") ? null : d.matches("h1") ? "h1" : d.matches("h2") ? "h2" : d.matches("h3") ? "h3" : d.matches("blockquote") ? "quote" : d.matches("pre, .milkdown-code-block") || d.querySelector("pre, .milkdown-code-block") ? "code" : d.querySelector('input[type="checkbox"]') ? "task-list" : d.querySelector(".label.ordered") ? "ordered-list" : d.querySelector(".label.bullet") ? "bullet-list" : null;
    }, Ee = () => z.querySelector(".ProseMirror"), Se = (a) => {
      const d = Ee();
      if (!a || !(d != null && d.contains(a))) return null;
      const R = a.closest(".milkdown-list-item-block");
      if (R && d.contains(R)) return R;
      let B = a;
      for (; B != null && B.parentElement && B.parentElement !== d; )
        B = B.parentElement;
      return !B || B.parentElement !== d || B.classList.contains("prosemirror-virtual-cursor") ? null : B;
    }, Pe = () => {
      const a = Ee();
      return a ? Array.from(a.children).flatMap((d) => {
        if (d.classList.contains("prosemirror-virtual-cursor")) return [];
        const R = Array.from(
          d.querySelectorAll(".milkdown-list-item-block")
        );
        return R.length ? R : [d];
      }) : [];
    }, _e = (a) => {
      var B;
      const d = Pe(), R = d.map((ce) => ({ block: ce, rect: ce.getBoundingClientRect() })).filter(({ rect: ce }) => a >= ce.top && a <= ce.bottom).sort((ce, se) => ce.rect.height - se.rect.height);
      return R[0] ? R[0].block : ((B = d.map((ce) => {
        const se = ce.getBoundingClientRect(), he = Math.min(
          Math.abs(a - se.top),
          Math.abs(a - se.bottom)
        );
        return { block: ce, distance: he };
      }).sort((ce, se) => ce.distance - se.distance)[0]) == null ? void 0 : B.block) ?? null;
    }, i = (a, d = J) => {
      var c, A, C, $;
      const R = V, B = R ? F(R) : a, ce = R ? R.matches("p") : d, se = x.querySelector(
        ".milkdown-slash-menu"
      );
      (A = (c = se == null ? void 0 : se.querySelector(`svg.${ht("paragraph")}`)) == null ? void 0 : c.closest("li")) == null || A.toggleAttribute(
        "hidden",
        B === null && ce
      ), se == null || se.querySelectorAll('li[data-chatui-selected="true"]').forEach(
        (ke) => ke.removeAttribute("data-chatui-selected")
      ), B && (($ = (C = se == null ? void 0 : se.querySelector(`svg.${ht(B)}`)) == null ? void 0 : C.closest("li")) == null || $.setAttribute("data-chatui-selected", "true"));
      const he = x.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!he) return;
      ne || (ne = he.innerHTML);
      const Ne = B ? se == null ? void 0 : se.querySelector(
        `svg.${ht(B)}`
      ) : null, Re = B ?? "default";
      he.dataset.chatuiBlockType !== Re && (he.innerHTML = (Ne == null ? void 0 : Ne.outerHTML) ?? ne, he.dataset.chatuiBlockType = Re);
    }, P = (a) => {
      a !== be && (be = a, ge = F(a), J = (a == null ? void 0 : a.matches("p")) ?? !1), i(ge, J);
    }, q = () => {
      var R;
      const a = (R = x.getSelection()) == null ? void 0 : R.anchorNode, d = a instanceof Element ? a : a == null ? void 0 : a.parentElement;
      P(Se(d ?? null));
    }, ue = (a) => {
      const { $from: d } = a.get(Nt).state.selection, R = kt.type(a), B = Qt.type(a), ce = Zt.type(a);
      for (let he = d.depth; he > 0; he -= 1) {
        const Ne = d.node(he);
        if (Ne.type === R && typeof Ne.attrs.checked == "boolean")
          return "task-list";
      }
      for (let he = d.depth; he > 0; he -= 1) {
        const Ne = d.node(he);
        if (Ne.type === B) return "ordered-list";
        if (Ne.type === ce) return "bullet-list";
        if (Ne.type.name === "blockquote") return "quote";
      }
      const se = d.parent;
      if (se.type === xn.type(a)) {
        const he = Number(se.attrs.level);
        if (he === 1 || he === 2 || he === 3)
          return `h${he}`;
      }
      return se.type.name === "code_block" ? "code" : "paragraph";
    }, me = (a) => {
      var d;
      return a === "paragraph" ? Mt(
        Wt,
        "chatui-selection-block-type-paragraph"
      ) : a === "h1" ? pt(1) : a === "h2" ? pt(2) : a === "h3" ? pt(3) : a === "code" ? cr : ((d = x.querySelector(
        `.milkdown-slash-menu svg.${ht(a)}`
      )) == null ? void 0 : d.outerHTML) ?? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="4" y="17" fill="currentColor" font-size="14">${a === "quote" ? "“" : "•"}</text></svg>`;
    }, xe = () => {
      var a;
      return ((a = x.querySelector(
        ".milkdown-toolbar .chatui-selection-block-type-chevron"
      )) == null ? void 0 : a.closest(".toolbar-item")) ?? null;
    }, S = () => {
      const a = xe();
      if (!a) return;
      a.classList.add("chatui-selection-block-type-trigger"), a.setAttribute("aria-haspopup", "menu"), a.setAttribute("aria-label", "切换当前块类型");
      const d = a.closest(".milkdown-toolbar"), R = a.previousElementSibling instanceof HTMLElement && a.previousElementSibling.classList.contains("divider") ? a.previousElementSibling : null;
      d && d.firstElementChild !== a && (d.prepend(a), R && a.after(R));
      let B = "paragraph";
      k.editor.action((se) => {
        B = ue(se);
      }), a.dataset.chatuiBlockType = B;
      const ce = a.querySelector(
        ".chatui-selection-block-type-current"
      );
      ce && (ce.innerHTML = me(B)), j == null || j.querySelectorAll("[data-block-type]").forEach((se) => {
        se.dataset.active = se.dataset.blockType === B ? "true" : "false";
      });
    }, we = () => {
      var a;
      ee !== null && (window.clearTimeout(ee), ee = null), j && (j.dataset.show = "false"), (a = xe()) == null || a.setAttribute("aria-expanded", "false");
    }, ze = () => {
      ee !== null && window.clearTimeout(ee), ee = window.setTimeout(
        we,
        120
      );
    }, Be = () => {
      if (j) return j;
      const a = x.createElement("div");
      return a.className = "chatui-selection-block-type-menu", a.dataset.show = "false", a.setAttribute("role", "menu"), Qa.forEach(({ key: d, label: R }) => {
        const B = x.createElement("button");
        B.type = "button", B.dataset.blockType = d, B.setAttribute("role", "menuitem"), B.innerHTML = `<span class="chatui-selection-block-type-option-icon">${me(d)}</span><span>${R}</span>`, B.addEventListener("pointerdown", (ce) => {
          ce.preventDefault(), ce.stopPropagation(), k.editor.action((se) => {
            var he;
            (he = g.get(d)) == null || he(se);
          }), we(), window.requestAnimationFrame(S);
        }), a.append(B);
      }), a.addEventListener("pointerenter", () => {
        ee !== null && (window.clearTimeout(ee), ee = null);
      }), a.addEventListener("pointerleave", ze), x.body.append(a), j = a, a;
    }, Fe = () => {
      const a = xe();
      if (!a) return;
      ee !== null && (window.clearTimeout(ee), ee = null);
      const d = Be();
      S(), d.dataset.show = "true", d.style.visibility = "hidden";
      const R = a.getBoundingClientRect(), B = d.getBoundingClientRect(), ce = 6, se = 8, he = R.top >= B.height + ce + se, Ne = Math.min(
        Math.max(R.left, se),
        x.documentElement.clientWidth - B.width - se
      ), Re = he ? R.top - B.height - ce : R.bottom + ce;
      d.style.left = `${Ne}px`, d.style.top = `${Re}px`, d.style.visibility = "visible", d.dataset.placement = he ? "top" : "bottom", a.setAttribute("aria-expanded", "true");
    }, Je = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      d != null && d.closest(".chatui-selection-block-type-trigger") && Fe();
    }, Ce = (a) => {
      const d = a.target instanceof Element ? a.target : null;
      if (!(d != null && d.closest(".chatui-selection-block-type-trigger"))) return;
      const R = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      R != null && R.closest(".chatui-selection-block-type-menu") || ze();
    }, Z = () => {
      window.requestAnimationFrame(S);
    }, et = () => {
      const a = ae, d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (!a || !d || d.dataset.show !== "true") return;
      const R = d.getBoundingClientRect();
      if (!R.width || !R.height) return;
      const B = a.getBoundingClientRect(), ce = x.defaultView, se = (ce == null ? void 0 : ce.innerWidth) ?? x.documentElement.clientWidth, he = (ce == null ? void 0 : ce.innerHeight) ?? x.documentElement.clientHeight, Ne = 12, Re = 8, c = Math.max(
        Ne,
        se - R.width - Ne
      ), A = Math.max(
        Ne,
        he - R.height - Ne
      ), C = (We) => Math.min(Math.max(We, Ne), c), $ = (We) => Math.min(Math.max(We, Ne), A);
      let ke = "left", Te = B.left - R.width - Re, $e = $(B.top);
      if (Te < Ne) {
        const We = B.top - Re - Ne, ut = he - B.bottom - Re - Ne, Ze = ut >= R.height || ut >= We;
        ke = Ze ? "bottom" : "top", Te = C(B.left), $e = $(Ze ? B.bottom + Re : B.top - R.height - Re);
      }
      const Me = `${Te}px`, je = `${$e}px`;
      d.style.getPropertyValue("--chatui-block-menu-left") !== Me && d.style.setProperty("--chatui-block-menu-left", Me), d.style.getPropertyValue("--chatui-block-menu-top") !== je && d.style.setProperty("--chatui-block-menu-top", je), d.dataset.chatuiPlacement = ke;
    }, qe = () => {
      const a = x.querySelector(
        ".milkdown-slash-menu"
      );
      a && (a.style.removeProperty("--chatui-block-menu-left"), a.style.removeProperty("--chatui-block-menu-top"), delete a.dataset.chatuiPlacement);
    }, Ie = (a) => {
      a !== fe && (fe == null || fe.removeAttribute(
        "data-chatui-pointer-highlighted"
      ), fe = a, fe == null || fe.setAttribute(
        "data-chatui-pointer-highlighted",
        "true"
      ));
    }, Ye = () => {
      de !== null && window.cancelAnimationFrame(de), de = window.requestAnimationFrame(() => {
        de = null, et();
      });
    }, Ue = (a) => {
      x.querySelectorAll(".milkdown-block-handle").forEach((d) => {
        a && d.contains(a) ? d.dataset.chatuiMenuOpen = "true" : delete d.dataset.chatuiMenuOpen;
      });
    }, Qe = () => {
      ae = null, U = !1, V = null, Ie(null), k.editor.action((a) => {
        a.get("menuAPICtx").hide();
      }), qe(), Ue(null);
    }, at = (a) => {
      const d = a.target instanceof Element ? a.target : null, R = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (R) {
        const se = R.getBoundingClientRect(), he = se.width > 0 && se.height > 0, Ne = a.clientX >= se.left && a.clientX <= se.right && a.clientY >= se.top && a.clientY <= se.bottom;
        if (he) {
          if (Ne) {
            Ie(
              (d == null ? void 0 : d.closest(
                ".milkdown-slash-menu .menu-groups li"
              )) ?? null
            ), U = !0;
            return;
          }
          if (Ie(null), d != null && d.closest(".milkdown-block-handle")) return;
          const Re = Ee(), c = d && (Re != null && Re.contains(d)) ? Se(d) ?? _e(a.clientY) : null;
          if (c && V && c !== V) {
            Qe();
            return;
          }
          if (c === V) return;
          U && Qe();
          return;
        }
        U = !1, Ie(null);
      }
      if (d != null && d.closest(".milkdown-block-handle")) {
        i(ge);
        return;
      }
      const B = Ee();
      if (!d || !(B != null && B.contains(d))) return;
      const ce = Se(d) ?? _e(a.clientY);
      P(ce);
    }, dt = (a) => {
      var Ne;
      const d = x.querySelector(
        ".milkdown-slash-menu"
      );
      if (ae === a && (d == null ? void 0 : d.dataset.show) === "true") {
        Ue(a), Ye();
        return;
      }
      const R = a.getBoundingClientRect(), B = _e(
        R.top + R.height / 2
      );
      B && P(B);
      const ce = ge, se = J;
      ae = a, V = B ?? be, Ue(a);
      const he = ((Ne = x.defaultView) == null ? void 0 : Ne.PointerEvent) ?? PointerEvent;
      a.dispatchEvent(
        new he("pointerdown", {
          bubbles: !0,
          cancelable: !0
        })
      ), a.dispatchEvent(
        new he("pointerup", {
          bubbles: !0,
          cancelable: !0
        })
      ), window.setTimeout(() => {
        i(ce, se), Ye();
      }, 0);
    }, Ve = (a) => {
      const d = a.target instanceof Element ? a.target : null, R = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      if (R) {
        dt(R);
        return;
      }
      Ie(
        (d == null ? void 0 : d.closest(
          ".milkdown-slash-menu .menu-groups li"
        )) ?? null
      );
    }, tt = (a) => {
      const d = a.target instanceof Element ? a.target : null, R = d == null ? void 0 : d.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      if (!R) return;
      const B = a.relatedTarget instanceof Element ? a.relatedTarget : null;
      if (B && R.contains(B)) return;
      const ce = B == null ? void 0 : B.closest(
        ".milkdown-slash-menu .menu-groups li"
      );
      Ie(ce ?? null);
    }, rt = (a) => {
      const d = a.target instanceof Element ? a.target : null, R = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      );
      R && dt(R);
    }, Ke = (a) => {
      if (!a.isTrusted) return;
      const d = a.target instanceof Element ? a.target : null, R = d == null ? void 0 : d.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ), B = x.querySelector(
        ".milkdown-slash-menu"
      );
      R && ae === R && (B == null ? void 0 : B.dataset.show) === "true" && (a.preventDefault(), a.stopImmediatePropagation());
    }, st = (a) => {
      a.key === "/" && window.setTimeout(q, 0);
    };
    x.addEventListener("pointermove", at), x.addEventListener("pointerover", Ve), x.addEventListener("pointerout", tt), x.addEventListener(
      "pointerover",
      Je
    ), x.addEventListener(
      "pointerout",
      Ce
    ), x.addEventListener(
      "selectionchange",
      Z
    ), x.addEventListener(
      "pointerdown",
      Ke,
      !0
    ), x.addEventListener(
      "pointerup",
      Ke,
      !0
    ), x.addEventListener("click", rt), z.addEventListener("keyup", st);
    const Xe = k.create();
    return Xe.then(() => {
      var R;
      (R = z.querySelector(".ProseMirror")) == null || R.focus();
      const a = x.querySelector(
        ".milkdown-slash-menu"
      );
      a && (ie = new MutationObserver(() => {
        if (a.dataset.show === "true" && ae) {
          Ue(ae), Ye();
          return;
        }
        a.dataset.show !== "true" && (ae = null, V = null, Ie(null), qe(), Ue(null));
      }), ie.observe(a, {
        attributes: !0,
        attributeFilter: ["data-show", "style"]
      }));
      const d = x.querySelector(
        ".milkdown-toolbar"
      );
      d && (Q = new MutationObserver(() => {
        d.dataset.show === "true" ? S() : we();
      }), Q.observe(d, {
        attributes: !0,
        attributeFilter: ["data-show"]
      })), q(), S();
    }), () => {
      x.removeEventListener("pointermove", at), x.removeEventListener(
        "pointerover",
        Ve
      ), x.removeEventListener("pointerout", tt), x.removeEventListener(
        "pointerover",
        Je
      ), x.removeEventListener(
        "pointerout",
        Ce
      ), x.removeEventListener(
        "selectionchange",
        Z
      ), x.removeEventListener(
        "pointerdown",
        Ke,
        !0
      ), x.removeEventListener(
        "pointerup",
        Ke,
        !0
      ), x.removeEventListener("click", rt), z.removeEventListener("keyup", st), we(), j == null || j.remove(), j = null, Xe.then(() => {
        ie == null || ie.disconnect(), Q == null || Q.disconnect(), de !== null && window.cancelAnimationFrame(de), k.destroy();
      });
    };
  }, []);
  const M = async (z) => {
    const g = Array.from(z.target.files ?? []);
    if (z.target.value = "", !(!g.length || !I)) {
      E(!0), K("");
      try {
        await I(g);
      } catch (k) {
        K(
          k instanceof Error ? k.message : "附件上传失败"
        );
      } finally {
        E(!1);
      }
    }
  }, re = async (z) => {
    if (_) {
      f(z), K("");
      try {
        await _(z);
      } catch (g) {
        K(
          g instanceof Error ? g.message : "附件删除失败"
        );
      } finally {
        f(null);
      }
    }
  };
  return /* @__PURE__ */ r("section", { className: lt.shell, "aria-label": "项目文档编辑器", children: [
    w && /* @__PURE__ */ e("header", { className: lt.header, children: /* @__PURE__ */ r("div", { className: lt.headerActions, children: [
      /* @__PURE__ */ e(
        Oe,
        {
          type: "secondary",
          size: "small",
          rounded: "large",
          disabled: m,
          onClick: G,
          children: "取消"
        }
      ),
      /* @__PURE__ */ e(
        Oe,
        {
          type: "primary",
          size: "small",
          rounded: "large",
          disabled: m,
          onClick: X,
          children: m ? "保存中…" : "保存"
        }
      )
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${lt.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: [
          b && /* @__PURE__ */ e("div", { className: lt.saveError, children: b }),
          /* @__PURE__ */ r("div", { className: lt.editorCanvas, children: [
            /* @__PURE__ */ r("section", { className: `mb-4 shrink-0 ${oe}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  value: t,
                  onChange: (z) => T(z.target.value),
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
                  index: p
                }
              ),
              /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
            ] }),
            /* @__PURE__ */ r("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  ref: W,
                  className: `${lt.milkdownHost} ${zr.editor} ${oe} chatui-project-document-editor`,
                  style: Ka
                }
              ),
              I && /* @__PURE__ */ e(
                "input",
                {
                  ref: L,
                  type: "file",
                  multiple: !0,
                  accept: N,
                  className: "hidden",
                  onChange: (z) => {
                    M(z);
                  }
                }
              ),
              /* @__PURE__ */ e(
                $r,
                {
                  attachments: h,
                  className: `${u === "page" ? "mx-[120px]" : "mx-6 md:mx-8"} mb-6 mt-8 border-t border-lineSubtle pt-6`,
                  uploading: D,
                  deletingAttachmentId: Y,
                  unavailableHint: y,
                  error: te,
                  onRequestUpload: I ? () => {
                    var z;
                    return (z = L.current) == null ? void 0 : z.click();
                  } : void 0,
                  onDeleteAttachment: _ ? (z) => {
                    re(z);
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
  onOpenSidebar: p,
  onInstall: h,
  onUninstall: N,
  onRetry: y
}) {
  const [m, b] = v("installed"), [u, w] = v(""), [T, H] = v(!1), [I, _] = v([]), [X, G] = v(null), W = ye(() => new Set(s), [s]), L = ye(() => {
    const f = u.trim().toLowerCase();
    return n.filter((te) => m === "installed" !== te.installed ? !1 : f ? [te.name, te.source, te.description, ...te.tags].join(" ").toLowerCase().includes(f) : !0);
  }, [m, u, n]), le = (f) => {
    b(f), H(!1), _([]);
  }, O = () => {
    H((f) => !f), _([]);
  }, D = (f) => _((te) => te.includes(f) ? te.filter((K) => K !== f) : [...te, f]), E = (f) => f.installed ? N([f.id]) : h([f.id]), Y = () => {
    I.length && (m === "installed" ? N(I) : h(I), _([]), H(!1));
  };
  return /* @__PURE__ */ r("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ e("header", { className: "z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm", children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-3", children: [
      !t && /* @__PURE__ */ e("button", { type: "button", onClick: p, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(vr, { size: 20 }) }),
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
          /* @__PURE__ */ e(ct, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: u, onChange: (f) => w(f.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ r("section", { className: "mt-5", children: [
        /* @__PURE__ */ r("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => le("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => le("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${m === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ r("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ r("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: T, onChange: (f) => {
                H(f.target.checked), _([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ r("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          y && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: y, children: "重新加载" })
        ] }),
        !l && o && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (f, te) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, te)) }),
        !l && !o && L.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": s.length > 0, children: L.map((f) => {
          const te = I.includes(f.id), K = W.has(f.id), oe = te ? "border-skillSelectedBorder bg-skillSelectedSurface" : X === f.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ r("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${oe}`, onMouseEnter: () => G(f.id), onMouseLeave: () => G((M) => M === f.id ? null : M), children: [
            /* @__PURE__ */ r("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ r("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: f.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: f.source })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${Ja[f.riskLevel]}`, children: Za[f.riskLevel] }),
                T && /* @__PURE__ */ e("button", { type: "button", onClick: () => D(f.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": te ? `取消选择 ${f.name}` : `选择 ${f.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${te ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: f.description }),
            /* @__PURE__ */ r("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: f.tags.map((M) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: M }, `${f.id}-${M}`)) }),
              !T && /* @__PURE__ */ e("button", { type: "button", disabled: K, onClick: () => E(f), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${X === f.id || K ? "inline-flex" : "hidden"} ${f.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: K ? "处理中..." : f.installed ? "卸载" : "安装" })
            ] })
          ] }, f.id);
        }) }) : !l && !o ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    T && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ r("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ r("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        I.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: O, disabled: s.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: Y, disabled: !I.length || s.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: s.length > 0 ? "处理中..." : m === "installed" ? "批量卸载" : "批量安装" })
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
