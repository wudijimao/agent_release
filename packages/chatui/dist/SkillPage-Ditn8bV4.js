import { jsxs as t, Fragment as $e, jsx as e } from "react/jsx-runtime";
import we, { useMemo as ae, useState as v, useRef as ee, useCallback as xe, useEffect as se, useLayoutEffect as vt, forwardRef as Lt, useId as Ot } from "react";
import be from "classnames";
import { Check as Ke, Copy as tt, RefreshCcw as Yt, ThumbsUp as Qt, ThumbsDown as Zt, Puzzle as zt, AtSign as _t, LoaderCircle as Jt, AlertCircle as er, Paperclip as At, ArrowRight as Pt, Sparkles as tr, Loader2 as Ye, ChevronDown as Ze, ChevronRight as Qe, Search as qe, Globe as rr, BookOpen as nr, Menu as Et, FileText as ht, FlaskConical as ar, X as We, Clock3 as xt, Plus as ft, Square as sr, Send as lr, UserPlus as or, Building2 as ir, CheckCircle2 as Xe, Trash2 as Bt, Folder as ot, PanelLeftClose as cr, SquarePen as dr, AlertTriangle as ur, Settings as mr, Pin as it, MoreHorizontal as pr, Pencil as hr, Share2 as xr, Upload as fr, Download as br, SearchX as gr } from "lucide-react";
import yr from "react-markdown";
import vr from "remark-gfm";
import wr from "rehype-highlight";
import "katex/contrib/mhchem";
import { createPortal as Nr } from "react-dom";
import { Crepe as ct } from "@milkdown/crepe";
const kr = "_button_3tg6r_1", Tr = "_primary_3tg6r_5", Cr = "_disabled_3tg6r_9", Sr = "_secondary_3tg6r_17", Mr = "_ghost_3tg6r_25", $r = "_danger_3tg6r_33", Lr = "_small_3tg6r_41", zr = "_medium_3tg6r_45", _r = "_large_3tg6r_49", Ar = "_roundedSquare_3tg6r_53", Pr = "_roundedSmall_3tg6r_57", Er = "_roundedMedium_3tg6r_61", Br = "_roundedLarge_3tg6r_62", jr = "_roundedFull_3tg6r_66", Ir = "_loadingSpinner_3tg6r_67", Rr = "_loading_3tg6r_67", Dr = "_fullWidth_3tg6r_90", Fr = "_icon_3tg6r_94", ve = {
  button: kr,
  primary: Tr,
  disabled: Cr,
  secondary: Sr,
  ghost: Mr,
  danger: $r,
  small: Lr,
  medium: zr,
  large: _r,
  roundedSquare: Ar,
  roundedSmall: Pr,
  roundedMedium: Er,
  roundedLarge: Br,
  roundedFull: jr,
  loadingSpinner: Ir,
  loading: Rr,
  fullWidth: Dr,
  icon: Fr
}, Hr = {
  primary: ve.primary,
  secondary: ve.secondary,
  ghost: ve.ghost,
  danger: ve.danger
}, Wr = {
  small: ve.small,
  medium: ve.medium,
  large: ve.large
}, qr = {
  square: ve.roundedSquare,
  small: ve.roundedSmall,
  medium: ve.roundedMedium,
  large: ve.roundedLarge,
  full: ve.roundedFull
}, _e = we.forwardRef(
  ({
    type: r = "primary",
    size: n = "medium",
    isLoading: i,
    loading: l,
    disabled: d = !1,
    children: f,
    icon: p,
    iconPosition: h = "left",
    className: N,
    fullWidth: m = !1,
    rounded: g = "medium",
    onClick: x,
    ...w
  }, F) => {
    const _ = i ?? l ?? !1, I = d || _, T = ae(() => _ ? /* @__PURE__ */ t($e, { children: [
      /* @__PURE__ */ e("span", { className: ve.loadingSpinner }),
      /* @__PURE__ */ e("span", { children: f })
    ] }) : p ? /* @__PURE__ */ t($e, { children: [
      h === "left" && /* @__PURE__ */ e("span", { className: ve.icon, children: p }),
      f && /* @__PURE__ */ e("span", { children: f }),
      h === "right" && /* @__PURE__ */ e("span", { className: ve.icon, children: p })
    ] }) : f, [f, _, p, h]);
    return /* @__PURE__ */ e(
      "button",
      {
        ref: F,
        className: be(
          ve.button,
          Hr[r],
          Wr[n],
          qr[g],
          {
            [ve.fullWidth]: m,
            [ve.loading]: _,
            [ve.disabled]: I
          },
          N
        ),
        disabled: I,
        onClick: x,
        ...w,
        children: T
      }
    );
  }
);
_e.displayName = "BaseButton";
const Ur = { small: "h-8", medium: "h-9", large: "h-14" }, jt = we.forwardRef(
  ({
    type: r = "text",
    placeholder: n,
    value: i,
    defaultValue: l,
    disabled: d = !1,
    readOnly: f = !1,
    error: p = !1,
    size: h = "medium",
    prefix: N,
    suffix: m,
    prefixIcon: g,
    suffixIcon: x,
    onChange: w,
    onFocus: F,
    onBlur: _,
    onClear: I,
    className: T,
    containerClassName: R,
    clearable: H = !1,
    label: A,
    helperText: y,
    ...D
  }, L) => {
    const [P, S] = v(!1), W = ee(null), B = xe((u) => {
      W.current = u, typeof L == "function" ? L(u) : L && (L.current = u);
    }, [L]), z = xe(() => {
      var a, k;
      const u = W.current;
      u && ((k = (a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : a.set) == null || k.call(u, ""), u.dispatchEvent(new Event("input", { bubbles: !0 })), u.focus(), I == null || I());
    }, [I]), o = ae(
      () => {
        var u;
        return H && P && String(i ?? ((u = W.current) == null ? void 0 : u.value) ?? "").length > 0;
      },
      [H, P, i]
    );
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      A && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: A }),
      /* @__PURE__ */ t(
        "div",
        {
          className: be(
            "flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200",
            Ur[h],
            !d && !p && "hover:border-controlBorder",
            P && !d && !p && "border-primary ring-2 ring-brandFocus",
            p && "border-danger",
            p && P && "ring-2 ring-dangerFocus",
            d && "cursor-not-allowed bg-surfaceMuted",
            R
          ),
          children: [
            (N || g) && /* @__PURE__ */ e("div", { className: "mr-2 flex shrink-0 items-center justify-center text-mutedText", children: N || g }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: B,
                type: r,
                placeholder: n,
                value: i,
                defaultValue: l,
                disabled: d,
                readOnly: f,
                className: be("min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText", T),
                onFocus: (u) => {
                  S(!0), F == null || F(u);
                },
                onBlur: (u) => {
                  S(!1), _ == null || _(u);
                },
                onChange: w,
                ...D
              }
            ),
            /* @__PURE__ */ t("div", { className: "ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText", children: [
              o && /* @__PURE__ */ e("button", { type: "button", className: "flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText", onMouseDown: (u) => u.preventDefault(), onClick: z, "aria-label": "清空", children: "✕" }),
              m || x
            ] })
          ]
        }
      ),
      y && /* @__PURE__ */ e("div", { className: be("text-xs leading-6", p ? "text-danger" : "text-mutedText"), children: y })
    ] });
  }
);
jt.displayName = "BaseInput";
const Xr = { small: "h-8", medium: "h-9", large: "h-14" }, Kr = we.forwardRef(
  ({ options: r = [], value: n, defaultValue: i, placeholder: l, disabled: d = !1, error: f = !1, size: p = "medium", label: h, helperText: N, onChange: m, className: g, ...x }, w) => {
    const F = xe((_) => {
      const I = _.target.value, T = r.find((R) => String(R.value) === I);
      m == null || m(I === "" ? "" : (T == null ? void 0 : T.value) ?? I);
    }, [m, r]);
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: [
      h && /* @__PURE__ */ e("label", { className: "mb-2 block text-sm font-medium text-primaryText", children: h }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          "select",
          {
            ref: w,
            className: be(
              "w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText",
              f && "border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus",
              Xr[p],
              g
            ),
            value: n ?? i ?? "",
            disabled: d,
            onChange: F,
            ...x,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              r.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value))
            ]
          }
        ),
        /* @__PURE__ */ e("svg", { "aria-hidden": "true", className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      N && /* @__PURE__ */ e("div", { className: be("text-xs leading-6", f ? "text-danger" : "text-mutedText"), children: N })
    ] });
  }
);
Kr.displayName = "BaseSelect";
const Gr = "_container_ykn59_1", Vr = "_item_ykn59_10", Or = "_itemActive_ykn59_27", Yr = "_itemDisabled_ykn59_27", Qr = "_sizeSmall_ykn59_43", Zr = "_sizeMiddle_ykn59_49", Jr = "_sizeLarge_ykn59_55", Ie = {
  container: Gr,
  item: Vr,
  itemActive: Or,
  itemDisabled: Yr,
  sizeSmall: Qr,
  sizeMiddle: Zr,
  sizeLarge: Jr
}, en = {
  small: Ie.sizeSmall,
  middle: Ie.sizeMiddle,
  large: Ie.sizeLarge
};
function ba({
  options: r,
  value: n,
  defaultValue: i,
  onChange: l,
  size: d = "middle",
  disabled: f = !1,
  className: p
}) {
  var x;
  const [h, N] = v(
    i ?? ((x = r[0]) == null ? void 0 : x.value) ?? ""
  ), m = n ?? h, g = (w) => {
    f || (n === void 0 && N(w), l == null || l(w));
  };
  return /* @__PURE__ */ e("div", { className: be(Ie.container, en[d], p), children: r.map((w) => {
    const F = m === w.value;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: be(Ie.item, F && Ie.itemActive, f && Ie.itemDisabled),
        onClick: () => g(w.value),
        disabled: f,
        "aria-pressed": F,
        children: w.label
      },
      w.value
    );
  }) });
}
const tn = (r) => r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(0)} KB` : `${(r / (1024 * 1024)).toFixed(0)} MB`, rn = we.forwardRef(
  ({ accept: r, multiple: n = !1, disabled: i = !1, onChange: l, onError: d, maxSize: f, children: p, className: h, dragable: N = !0, placeholderTitle: m, placeholderDescription: g, placeholderIcon: x, maxCount: w }, F) => {
    const _ = ee(null), [I, T] = v(!1), R = xe((A) => {
      if (w && A.length > w) {
        d == null || d(new Error(`单次最多上传 ${w} 个文件`));
        return;
      }
      if (f) {
        for (const y of Array.from(A))
          if (y.size > f) {
            d == null || d(new Error(`文件“${y.name}”超过大小限制（${tn(f)}）`));
            return;
          }
      }
      l == null || l(A);
    }, [w, f, l, d]), H = () => {
      var A;
      i || (A = _.current) == null || A.click();
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: F,
        className: be(
          "cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft",
          I && "border-primary bg-primary-soft-strong ring-2 ring-brandFocus",
          i && "cursor-not-allowed opacity-60",
          h
        ),
        onClick: H,
        onKeyDown: (A) => {
          !i && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), H());
        },
        onDragOver: (A) => {
          N && !i && (A.preventDefault(), T(!0));
        },
        onDragLeave: () => T(!1),
        onDrop: (A) => {
          N && !i && (A.preventDefault(), T(!1), R(A.dataTransfer.files));
        },
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-disabled": i,
        children: [
          /* @__PURE__ */ e("input", { ref: _, type: "file", accept: r, multiple: n, disabled: i, onChange: (A) => A.target.files && R(A.target.files), className: "hidden" }),
          p || /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex h-12 w-12 items-center justify-center text-primary", "aria-hidden": !0, children: x ?? /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ e("path", { d: "M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ e("div", { className: "text-lg font-semibold leading-7 text-primaryText", children: m ?? "点击或拖拽文件到此处上传" }),
            /* @__PURE__ */ e("div", { className: "text-sm leading-6 text-mutedText", children: g ?? "支持单文件或批量上传" })
          ] })
        ]
      }
    );
  }
);
rn.displayName = "BaseUpload";
const nn = "_maskAnimation_1h49h_1", an = "_modalAnimation_1h49h_5", wt = {
  maskAnimation: nn,
  modalAnimation: an
}, bt = ({
  visible: r,
  open: n = r,
  show: i = n,
  title: l,
  width: d = 520,
  centered: f = !0,
  destroyOnClose: p = !1,
  mask: h = !0,
  maskClosable: N = !0,
  okText: m = "确认",
  cancelText: g = "取消",
  confirmLoading: x = !1,
  okButtonProps: w,
  cancelButtonProps: F,
  onConfirm: _,
  onCancel: I,
  onClose: T,
  onOk: R,
  onDismiss: H,
  children: A,
  footer: y,
  className: D,
  bodyClassName: L
}) => {
  const P = i ?? !1, S = xe(async () => {
    try {
      _ ? await _() : R && await R();
    } catch (z) {
      console.error("Modal confirm error:", z);
    }
  }, [_, R]), W = xe(() => {
    I ? I() : T ? T() : H == null || H();
  }, [I, T, H]), B = ae(() => {
    if (y === null) return null;
    if (y) return y;
    const { type: z, ...o } = F ?? {}, { type: u, ...a } = w ?? {};
    return /* @__PURE__ */ t("div", { className: "flex justify-end gap-2 border-t border-lineSoft px-5 py-3", children: [
      /* @__PURE__ */ e(_e, { type: "secondary", size: "medium", onClick: W, ...o, children: g }),
      /* @__PURE__ */ e(_e, { type: "primary", size: "medium", isLoading: x, onClick: S, ...a, children: x ? "加载中..." : m })
    ] });
  }, [F, g, x, y, W, S, w, m]);
  return !P && p || !P ? null : /* @__PURE__ */ t($e, { children: [
    h && /* @__PURE__ */ e("div", { className: be("fixed inset-0 z-[1000] bg-overlayMask", wt.maskAnimation), onClick: () => N && W(), role: "presentation" }),
    /* @__PURE__ */ t(
      "div",
      {
        className: be(
          "fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-surface shadow-lg",
          f && "left-1/2 top-1/2",
          wt.modalAnimation,
          D
        ),
        style: { width: d },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: [
          l && /* @__PURE__ */ t("div", { className: "flex items-center justify-between border-b border-lineSoft px-5 py-4", children: [
            /* @__PURE__ */ e("h2", { id: "modal-title", className: "m-0 text-base font-semibold leading-6 text-primaryText", children: l }),
            /* @__PURE__ */ e("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base leading-none text-mutedText transition-all hover:bg-surfaceMuted hover:text-primaryText", onClick: W, "aria-label": "关闭", children: "✕" })
          ] }),
          /* @__PURE__ */ e("div", { className: be("min-h-20 p-5 text-primaryText", L), children: A }),
          B
        ]
      }
    )
  ] });
};
bt.displayName = "BaseModal";
const sn = ({ title: r, extra: n, children: i, hoverable: l = !1, loading: d = !1, bordered: f = !0, className: p, bodyClassName: h, onClick: N }) => /* @__PURE__ */ t(
  "div",
  {
    className: be(
      "overflow-hidden rounded-md bg-surface transition-all duration-200",
      f && "border border-borderGray",
      l && "cursor-pointer hover:border-borderGray hover:shadow-md",
      d && "pointer-events-none opacity-60",
      p
    ),
    onClick: N,
    children: [
      (r || n) && /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 pb-2 pt-4", children: [
        r && /* @__PURE__ */ e("h3", { className: "m-0 text-base font-medium text-primaryText", children: r }),
        n && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: n })
      ] }),
      /* @__PURE__ */ e("div", { className: be("p-4 text-primaryText", (r || n) && "pt-1", h), children: i })
    ]
  }
);
sn.displayName = "BaseCard";
const ln = ({ columns: r, dataSource: n = [], rowKey: i = "id", loading: l = !1, bordered: d = !0, striped: f = !0, className: p, onRow: h }, N) => /* @__PURE__ */ t("div", { ref: N, className: be("relative w-full overflow-x-auto bg-surface", p), children: [
  /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-surface text-sm leading-5", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: d ? "border-b border-lineSubtle" : void 0, children: r.map((m) => /* @__PURE__ */ e("th", { className: "whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0", style: { width: m.width, textAlign: m.align }, children: m.title }, m.key || String(m.dataIndex))) }) }),
    /* @__PURE__ */ e("tbody", { children: n.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: r.length, className: "px-4 py-12 text-center text-mutedText", children: "暂无数据" }) }) : n.map((m, g) => {
      const x = String(typeof i == "string" ? m[i] ?? g : g);
      return /* @__PURE__ */ e("tr", { className: be(d && "border-b border-lineSoft last:border-b-0", f && "odd:bg-surface"), ...(h == null ? void 0 : h(m, g)) || {}, children: r.map((w) => /* @__PURE__ */ e("td", { className: "px-4 py-[18px] text-primaryText first:pl-0", style: { textAlign: w.align }, children: w.render ? w.render(m[w.dataIndex], m, g) : String(m[w.dataIndex] ?? "") }, w.key || String(w.dataIndex))) }, x);
    }) })
  ] }),
  l && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText", children: "加载中..." })
] }), ga = we.forwardRef(ln), on = ({ current: r = 1, pageSize: n = 10, total: i = 0, onChange: l, showSizeChanger: d = !1, pageSizeOptions: f = [10, 20, 50, 100], onShowSizeChange: p, disabled: h = !1, className: N }) => {
  const m = ae(() => Math.ceil(i / n) || 1, [n, i]), g = xe((w) => p == null ? void 0 : p(1, Number(w.target.value)), [p]), x = "rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
  return /* @__PURE__ */ t("div", { className: be("flex flex-wrap items-center justify-center gap-4 p-4", N), children: [
    /* @__PURE__ */ e("button", { type: "button", className: x, onClick: () => r > 1 && (l == null ? void 0 : l(r - 1)), disabled: h || r <= 1, children: "← 上一页" }),
    /* @__PURE__ */ t("span", { className: "whitespace-nowrap text-sm text-primaryText", children: [
      "第 ",
      r,
      " / ",
      m,
      " 页，共 ",
      i,
      " 条"
    ] }),
    /* @__PURE__ */ e("button", { type: "button", className: x, onClick: () => r < m && (l == null ? void 0 : l(r + 1)), disabled: h || r >= m, children: "下一页 →" }),
    d && /* @__PURE__ */ e("select", { className: "cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60", value: n, onChange: g, disabled: h, children: f.map((w) => /* @__PURE__ */ t("option", { value: w, children: [
      w,
      " 条/页"
    ] }, w)) })
  ] });
};
on.displayName = "BasePagination";
const It = ({ description: r = "暂无数据", image: n, children: i }) => /* @__PURE__ */ t("div", { className: "flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText", children: [
  n && /* @__PURE__ */ e("div", { className: "mb-6 text-5xl text-controlBorder", children: n }),
  r && /* @__PURE__ */ e("p", { className: "m-0 text-sm text-mutedText", children: r }),
  i
] });
It.displayName = "BaseEmpty";
const Je = ({ trigger: r, items: n, footerItems: i = [], open: l = !1, onOpenChange: d, onTriggerClick: f, onItemClick: p, placement: h = "bottom-start", width: N, portal: m = !1, className: g, triggerClassName: x, menuClassName: w, listClassName: F, footerClassName: _ }) => {
  const I = ee(null), T = ee(null), [R, H] = v({}), A = h.endsWith("end"), y = h.startsWith("top");
  se(() => {
    if (!l || !m || !I.current) return;
    const S = I.current.getBoundingClientRect();
    H({ position: "fixed", left: A ? S.right : S.left, top: y ? S.top : S.bottom, transform: A ? "translateX(-100%)" : void 0 });
  }, [y, A, l, m, h]), se(() => {
    !l || !m || !y || !T.current || H((S) => ({ ...S, top: Number(S.top) - T.current.offsetHeight - 8 }));
  }, [y, l, m]), se(() => {
    if (!l || !d) return;
    const S = (W) => {
      var z, o;
      const B = W.target;
      (z = I.current) != null && z.contains(B) || (o = T.current) != null && o.contains(B) || d(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [d, l]);
  const D = ae(() => N ? { width: typeof N == "number" ? `${N}px` : N } : void 0, [N]), L = xe((S) => /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: be(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        !S.danger && !S.active && "bg-transparent text-primaryText hover:bg-surfaceMuted",
        !S.danger && S.active && "bg-primary-soft font-medium text-primary",
        S.danger && "bg-transparent text-danger hover:bg-danger-soft"
      ),
      onClick: (W) => p == null ? void 0 : p(S, W),
      disabled: S.disabled,
      children: [
        S.icon && /* @__PURE__ */ e("span", { className: "inline-flex items-center justify-center leading-none", children: S.icon }),
        /* @__PURE__ */ e("span", { className: "flex-1 whitespace-nowrap", children: S.label })
      ]
    },
    S.key
  ), [p]), P = l ? /* @__PURE__ */ t(
    "div",
    {
      ref: T,
      className: be(
        "z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg",
        !m && "absolute",
        !m && !y && "top-[calc(100%+8px)]",
        !m && y && "bottom-[calc(100%+8px)]",
        !m && A ? "right-0" : m ? void 0 : "left-0",
        w
      ),
      style: m ? { ...R, ...D } : D,
      role: "menu",
      children: [
        /* @__PURE__ */ e("div", { className: be("flex min-h-0 flex-col gap-1", F), children: n.map(L) }),
        i.length > 0 && /* @__PURE__ */ e("div", { className: be("flex flex-col gap-1 border-t border-lineSoft pt-2", _), children: i.map(L) })
      ]
    }
  ) : null;
  return /* @__PURE__ */ t("div", { ref: I, className: be("relative inline-block", g), children: [
    /* @__PURE__ */ e("button", { type: "button", className: be("m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0", x), onClick: (S) => {
      f == null || f(S), d == null || d(!l);
    }, "aria-haspopup": "menu", "aria-expanded": l, children: r }),
    m ? P && Nr(P, document.body) : P
  ] });
};
Je.displayName = "BaseActionMenu";
const cn = ({
  markdownContent: r,
  onRefresh: n,
  feedback: i,
  onFeedback: l,
  disabled: d = !1
}) => {
  const [f, p] = v(!1), h = !!(n || l), N = xe(async () => {
    if (r.trim())
      try {
        await navigator.clipboard.writeText(r), p(!0), window.setTimeout(() => p(!1), 1200);
      } catch {
      }
  }, [r]);
  return /* @__PURE__ */ t(
    "div",
    {
      className: `inline-flex items-center gap-1 rounded-full text-tertiaryText ${h ? "bg-white py-1" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: N,
            className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${f ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
            title: f ? "已复制 Markdown" : "复制 Markdown",
            children: f ? /* @__PURE__ */ e(Ke, { size: 15 }) : /* @__PURE__ */ e(tt, { size: 15 })
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
            children: /* @__PURE__ */ e(Yt, { size: 15 })
          }
        ),
        l && /* @__PURE__ */ t($e, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("like"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "like" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "有帮助",
              children: /* @__PURE__ */ e(Qt, { size: 15 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => l("dislike"),
              className: `h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${i === "dislike" ? "bg-bgLight text-primaryText" : "hover:bg-bgLight"}`,
              title: "需改进",
              children: /* @__PURE__ */ e(Zt, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}, dn = we.memo(cn), Nt = "[[PAPER_LIST_JSON]]";
let kt = !1, Ge = null, Ve = null, Oe = null;
const un = async () => (Ve || (Ve = Promise.all([import("remark-math"), import("rehype-katex")]).then(([r, n]) => ({
  remark: r.default,
  rehype: n.default
})).catch((r) => {
  throw Ve = null, r;
})), Ve), mn = async () => (Oe || (Oe = import("remark-emoji").then((r) => r.default).catch(() => (Oe = null, null))), Oe), pn = async () => {
  Ge || (Ge = import("mermaid").then((n) => n.default ?? n).catch((n) => {
    throw Ge = null, n;
  }));
  const r = await Ge;
  if (!kt) {
    const n = getComputedStyle(document.documentElement).getPropertyValue("--chatui-color-brand-primary").trim();
    r.initialize({
      startOnLoad: !1,
      theme: "default",
      securityLevel: "loose",
      suppressErrorRendering: !0,
      themeVariables: n ? { primaryColor: n, primaryBorderColor: n } : void 0
    }), kt = !0;
  }
  return r;
}, et = (r) => typeof r == "string" || typeof r == "number" ? String(r) : Array.isArray(r) ? r.map((n) => et(n)).join("") : we.isValidElement(r) ? et(r.props.children) : "", Tt = (r) => {
  const n = r.trim().toLowerCase();
  return /\.pdf($|[?#])/i.test(n);
}, hn = ({ href: r, label: n }) => {
  const i = ae(() => {
    const l = n.trim();
    if (l) return l;
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
        children: /* @__PURE__ */ e(Pt, { size: 14 })
      }
    )
  ] });
}, xn = ({ language: r, rawCode: n, className: i, children: l }) => {
  const [d, f] = v(!1), p = xe(async () => {
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
          className: `code-block-copy-btn ${d ? "copied" : ""}`,
          title: d ? "已复制代码" : "复制代码",
          children: [
            d ? /* @__PURE__ */ e(Ke, { size: 12 }) : /* @__PURE__ */ e(tt, { size: 12 }),
            d ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("pre", { className: "!m-0 !rounded-none !border-0 !bg-transparent px-4 py-3 whitespace-pre-wrap break-words", children: /* @__PURE__ */ e("code", { className: `code-block-content ${i ?? ""}`.trim(), children: l }) })
  ] });
}, fn = ({ rawCode: r }) => {
  const [n, i] = v(!1), l = xe(async () => {
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
          onClick: l,
          className: `code-block-copy-btn ${n ? "copied" : ""}`,
          title: n ? "已复制图表代码" : "复制图表代码",
          children: [
            n ? /* @__PURE__ */ e(Ke, { size: 12 }) : /* @__PURE__ */ e(tt, { size: 12 }),
            n ? "已复制" : "复制"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "diagram-block-body overflow-x-auto px-4 py-3", children: /* @__PURE__ */ e("div", { className: "mermaid", children: r }) })
  ] });
}, Rt = (r) => {
  const n = typeof r.title == "string" ? r.title.trim() : "", i = typeof r.pmid == "string" ? r.pmid.trim() : "", l = typeof r.doi == "string" ? r.doi.trim().replace(/[.,;；。]+$/g, "") : "";
  return !n || !i || !l ? null : { title: n, pmid: i, doi: l };
}, Ct = (r) => {
  const n = r.replace(/\r/g, "").split(`
`).map((l) => l.trim()).filter(Boolean);
  if (n.length === 0) return null;
  const i = [];
  return n.forEach((l, d) => {
    var x;
    const f = l.match(/PMID\s*[:：]\s*(\d{4,})/i), p = l.match(/DOI\s*[:：]\s*([^\s,，;；]+)/i);
    if (!f || !p) return;
    const h = l.slice(0, f.index ?? 0).replace(/[，,;；:\-—]+\s*$/g, "").trim(), N = ((x = n[d - 1]) == null ? void 0 : x.replace(/^[-*•\d.\s)]+/, "").trim()) ?? "", g = Rt({
      title: h || N,
      pmid: f[1],
      doi: p[1]
    });
    g && i.push(g);
  }), i.length === 0 ? null : { items: i };
}, bn = (r) => {
  if (!r.startsWith(Nt))
    return Ct(r);
  const n = r.slice(Nt.length).trim();
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    if (!Array.isArray(i.items)) return null;
    const l = i.items.map((d) => Rt(d)).filter((d) => d !== null);
    return l.length === 0 ? null : { items: l };
  } catch {
    return Ct(n);
  }
}, Dt = ({
  msg: r,
  actionKey: n,
  feedback: i,
  onFeedback: l,
  onRefresh: d,
  isTyping: f = !1,
  isStreaming: p
}) => {
  var B, z;
  const h = r.role === "user", N = p ?? f, m = ee(null), [g, x] = v(null), [w, F] = v(null), [_, I] = v(null), [T, R] = v(!1), H = ae(() => /```\s*mermaid/i.test(r.content), [r.content]), A = ae(() => /\$\$[\s\S]*?\$\$|(^|[^\\])\$[^\n$]+\$|\\\(|\\\[|\\begin\{|\\ce\{/.test(r.content), [r.content]), y = ae(() => /:[a-zA-Z0-9_+-]+:/.test(r.content), [r.content]), D = ae(
    () => h ? null : bn(r.content),
    [h, r.content]
  ), L = !!(D && D.items.length > 0);
  se(() => {
    if (!A || g || w) return;
    let o = !1;
    return un().then((u) => {
      o || (x(() => u.remark), F(() => u.rehype));
    }).catch(() => {
    }), () => {
      o = !0;
    };
  }, [A, g, w]), se(() => {
    if (!y || T) return;
    let o = !1;
    return mn().then((u) => {
      o || (u && I(() => u), R(!0));
    }), () => {
      o = !0;
    };
  }, [y, T]);
  const P = ae(() => {
    const o = [vr];
    return _ && o.push(_), g && o.push(g), o;
  }, [_, g]), S = ae(() => {
    const o = [wr];
    return w && o.push(w), o;
  }, [w]), W = ae(
    () => ({
      table: ({ node: o, ...u }) => /* @__PURE__ */ e("div", { className: "my-2 overflow-x-auto rounded-xl border border-borderGray bg-surface", children: /* @__PURE__ */ e("table", { className: "!my-0 min-w-full border-collapse text-sm leading-6", ...u }) }),
      tr: ({ node: o, ...u }) => /* @__PURE__ */ e("tr", { className: "border-b border-borderGray last:border-b-0", ...u }),
      th: ({ node: o, ...u }) => /* @__PURE__ */ e(
        "th",
        {
          className: "border-r border-borderGray bg-bgLight px-4 py-2.5 text-left text-xs font-medium text-tertiaryText last:border-r-0",
          ...u
        }
      ),
      td: ({ node: o, ...u }) => /* @__PURE__ */ e("td", { className: "border-r border-borderGray px-4 py-2.5 text-sm text-primaryText last:border-r-0", ...u }),
      blockquote: ({ node: o, ...u }) => /* @__PURE__ */ e(
        "blockquote",
        {
          className: "my-3 rounded-r-md border-l-2 border-borderGray bg-transparent py-0.5 pl-4 text-base leading-7 text-tertiaryText font-normal [&>*]:my-0 [&>*]:!font-normal",
          ...u
        }
      ),
      input: ({ node: o, type: u, checked: a, ...k }) => u === "checkbox" ? /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: !!a,
          disabled: !0,
          className: "mr-2 accent-primary",
          ...k
        }
      ) : /* @__PURE__ */ e("input", { type: u, ...k }),
      section: ({ node: o, ...u }) => /* @__PURE__ */ e("section", { className: "mt-8 border-t border-chatContentDivider pt-4 text-sm text-chatContentMuted", ...u }),
      p: ({ node: o, children: u, ...a }) => {
        const k = we.Children.toArray(u);
        if (k.length === 1 && we.isValidElement(k[0])) {
          const G = k[0];
          if (typeof G.props.href == "string" && Tt(G.props.href)) {
            const Q = et(G.props.children).trim();
            return /* @__PURE__ */ e(hn, { href: G.props.href, label: Q });
          }
        }
        return /* @__PURE__ */ e("p", { ...a, children: u });
      },
      a: ({ node: o, href: u, ...a }) => {
        const k = u ?? "", G = /^https?:\/\/(dx\.)?doi\.org\//i.test(k) || /^doi:/i.test(k), Q = /pubmed\.ncbi\.nlm\.nih\.gov/i.test(k) || /\/pmc\/|\/pmid\//i.test(k), O = Tt(k);
        return G || Q || O ? /* @__PURE__ */ e(
          "a",
          {
            href: u,
            target: "_blank",
            rel: "noreferrer",
            className: "text-[13px] font-medium text-primary no-underline hover:underline",
            ...a
          }
        ) : /* @__PURE__ */ e("a", { href: u, target: "_blank", rel: "noreferrer", ...a });
      },
      pre({ children: o, ...u }) {
        const a = we.Children.toArray(o).find(
          (ge) => we.isValidElement(ge) && typeof ge.props.className == "string" && ge.props.className.includes("language-")
        );
        if (!a)
          return /* @__PURE__ */ e("pre", { ...u, children: o });
        const k = a.props.className ?? "", G = k.match(/language-([\w-]+)/), Q = G ? G[1].toLowerCase() : "code", O = et(a.props.children).replace(/\n$/, "");
        return Q === "mermaid" ? /* @__PURE__ */ e(fn, { rawCode: O }) : /* @__PURE__ */ e(xn, { language: Q, rawCode: O, className: k, children: a.props.children });
      },
      code({ children: o, className: u, ...a }) {
        return u ? /* @__PURE__ */ e("code", { className: u, ...a, children: o }) : /* @__PURE__ */ e(
          "code",
          {
            className: "inline-flex items-center rounded-md bg-bgLight px-2.5 py-1 text-sm leading-[1.6] !font-normal tracking-[0.01em] text-primaryText",
            ...a,
            children: o
          }
        );
      }
    }),
    []
  );
  return se(() => {
    if (h || N || !H) return;
    const o = m.current;
    if (!o) return;
    const u = Array.from(o.querySelectorAll(".mermaid")).filter(
      (a) => a.dataset.processed !== "true"
    );
    u.length !== 0 && pn().then(async (a) => {
      await Promise.all(
        u.map(async (k, G) => {
          var pe;
          const Q = (pe = k.textContent) == null ? void 0 : pe.trim();
          if (!Q) return;
          const O = `mermaid-${Date.now()}-${G}`, { svg: ge } = await a.render(O, Q);
          k.innerHTML = ge, k.dataset.processed = "true";
        })
      );
    }).catch(() => {
    });
  }, [h, N, H, r.content]), /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: `flex w-full max-w-[860px] px-1 md:px-2 ${h ? "justify-end" : "justify-start"}`, children: h ? /* @__PURE__ */ t("div", { className: "message-bubble-user", children: [
    (r.references && r.references.length > 0 || r.attachments && r.attachments.length > 0) && /* @__PURE__ */ t("div", { className: "mb-2 flex flex-wrap gap-2", children: [
      (B = r.references) == null ? void 0 : B.map((o) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-sm ${o.type === "skill" ? "border border-chatSkillBorder bg-chatSkillSurface text-chatSkillText" : "border border-chatReferenceBorder bg-chatReferenceSurface text-chatReferenceText"}`,
          children: [
            o.type === "skill" ? /* @__PURE__ */ e(zt, { size: 12, className: "shrink-0 text-chatSkillText" }) : /* @__PURE__ */ e(_t, { size: 12, className: "shrink-0 text-chatReferenceText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate", title: o.label, children: o.label })
          ]
        },
        o.id
      )),
      (z = r.attachments) == null ? void 0 : z.map((o) => /* @__PURE__ */ t(
        "div",
        {
          className: `inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm ${o.status === "error" ? "border-danger bg-danger-soft text-danger" : "border-chatAttachmentBorder bg-white text-primaryText"}`,
          role: o.status === "error" ? "alert" : void 0,
          title: o.errorMessage,
          children: [
            o.status === "uploading" ? /* @__PURE__ */ e(Jt, { size: 13, className: "shrink-0 animate-spin text-primary", "aria-hidden": "true" }) : o.status === "error" ? /* @__PURE__ */ e(er, { size: 13, className: "shrink-0 text-danger", "aria-hidden": "true" }) : o.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: o.previewUrl, alt: o.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(At, { size: 13, className: "shrink-0 text-tertiaryText" }),
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
    L && D ? /* @__PURE__ */ e("div", { className: "w-full space-y-2.5", children: D.items.map((o, u) => /* @__PURE__ */ t(
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
              children: /* @__PURE__ */ e(Pt, { size: 14 })
            }
          )
        ]
      },
      `${o.pmid}-${u}`
    )) }) : /* @__PURE__ */ e(
      "div",
      {
        ref: m,
        className: "prose prose-slate max-w-none break-words text-primaryText prose-p:my-3 prose-p:text-[14px] prose-p:leading-[1.8] prose-li:text-[14px] prose-li:leading-[1.75] prose-headings:text-primaryText prose-headings:tracking-[-0.01em] prose-h1:mt-6 prose-h1:mb-3 prose-h1:text-[20px] md:prose-h1:text-[22px] prose-h1:leading-[1.3] prose-h1:font-semibold prose-h2:mt-7 prose-h2:mb-3 prose-h2:text-[16px] prose-h2:leading-[1.35] prose-h2:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[16px] prose-h3:leading-[1.45] prose-h3:font-semibold prose-strong:text-primaryText prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:my-6 prose-li:my-1 prose-li:marker:text-secondaryText prose-ol:pl-6 prose-ul:pl-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        children: /* @__PURE__ */ e(
          yr,
          {
            remarkPlugins: P,
            rehypePlugins: S,
            components: W,
            children: r.content
          }
        )
      }
    ),
    !L && r.content && !N && /* @__PURE__ */ e(
      dn,
      {
        markdownContent: r.content,
        onRefresh: d,
        feedback: i,
        onFeedback: n && l ? (o) => l(n, o) : void 0,
        disabled: N
      }
    )
  ] }) }) });
}, gn = we.memo(Dt), yn = {
  thinking: "思考中…",
  analyzing: "分析中…",
  searching: "搜索中…",
  executing: "执行中…",
  generating: "生成中…"
}, St = {
  knowledge: {
    icon: /* @__PURE__ */ e(nr, { size: 13 }),
    colorClass: "text-primary"
  },
  web: {
    icon: /* @__PURE__ */ e(rr, { size: 13 }),
    colorClass: "text-chatWebStep"
  },
  tool: {
    icon: /* @__PURE__ */ e(qe, { size: 13 }),
    colorClass: "text-chatToolStep"
  }
}, pt = ({
  phase: r,
  searchSteps: n = [],
  defaultExpanded: i = !0
}) => {
  const [l, d] = v(i), f = ee(null);
  se(() => {
    n.length > 0 && d(!0);
  }, [n.length]);
  const p = n.length > 0;
  return /* @__PURE__ */ t("div", { className: "flex w-full flex-col items-start", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "relative flex h-4 w-4 items-center justify-center", children: r === "generating" ? /* @__PURE__ */ e(tr, { size: 14, className: "text-primary animate-pulse" }) : /* @__PURE__ */ e(Ye, { size: 14, className: "animate-spin text-primary" }) }),
      /* @__PURE__ */ e("span", { className: "text-[13px] leading-5 text-secondaryText select-none", children: yn[r] }),
      p && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => d((h) => !h),
          className: "ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors",
          children: [
            l ? /* @__PURE__ */ e(Ze, { size: 12 }) : /* @__PURE__ */ e(Qe, { size: 12 }),
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
        className: `ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${l ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
        children: n.map((h, N) => {
          const m = St[h.type] ?? St.tool;
          return /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-2 text-[13px] leading-5 text-secondaryText",
              children: [
                /* @__PURE__ */ e("span", { className: m.colorClass, children: m.icon }),
                /* @__PURE__ */ e("span", { className: "truncate max-w-[480px]", children: h.label })
              ]
            },
            `${h.type}-${N}-${h.label}`
          );
        })
      }
    )
  ] });
}, vn = we.memo(pt);
function wn(r, n) {
  if (typeof r == "function") {
    r(n);
    return;
  }
  r && (r.current = n);
}
function dt(r) {
  const n = Number.parseFloat(r);
  return Number.isFinite(n) ? n : 0;
}
function Nn({
  messages: r,
  isTyping: n,
  statusPhase: i = "thinking",
  searchSteps: l = [],
  hasReceivedAssistantChunk: d = !1,
  contentMaxWidth: f = 800,
  selection: p,
  scrollbar: h,
  feedbackByMessageKey: N,
  getMessageKey: m = (I, T) => String(T),
  onFeedback: g,
  onRegenerate: x,
  onScroll: w,
  scrollContainerRef: F,
  onMessageElement: _
}) {
  var o, u;
  const I = !!p, T = ee(null), R = ee(null), H = ee(/* @__PURE__ */ new Map()), A = ee(), [y, D] = v();
  let L = -1, P = -1;
  if (n) {
    for (let a = r.length - 1; a >= 0; a -= 1)
      if (((o = r[a]) == null ? void 0 : o.role) === "user") {
        P = a;
        break;
      }
    for (let a = r.length - 1; a > P; a -= 1)
      if (((u = r[a]) == null ? void 0 : u.role) === "assistant") {
        L = a;
        break;
      }
  }
  const S = P >= 0 ? m(r[P], P) : void 0, W = L >= 0 ? m(r[L], L) : void 0, B = S && W ? `${S}:${W}` : void 0, z = xe(
    (a) => {
      T.current = a, wn(F, a);
    },
    [F]
  );
  return vt(() => {
    if (!B || !W || P < 0 || L < 0)
      return;
    const a = T.current, k = R.current, G = H.current.get(P);
    if (!a || !k || !G) return;
    const Q = () => {
      const ge = window.getComputedStyle(a), pe = window.getComputedStyle(k), fe = a.clientHeight - dt(ge.paddingTop) - dt(ge.paddingBottom), Z = dt(pe.rowGap || pe.gap), j = Math.max(
        0,
        Math.floor(fe - G.offsetHeight - Z)
      );
      D(
        (M) => (M == null ? void 0 : M.assistantKey) === W && M.minHeight === j ? M : { assistantKey: W, minHeight: j }
      );
    };
    Q();
    const O = new ResizeObserver(Q);
    return O.observe(a), O.observe(G), () => O.disconnect();
  }, [
    L,
    W,
    B,
    P
  ]), vt(() => {
    if (!B || !W || (y == null ? void 0 : y.assistantKey) !== W || P < 0 || A.current === B)
      return;
    const a = T.current, k = H.current.get(P);
    !a || !k || (a.scrollTo({ top: k.offsetTop, behavior: "auto" }), A.current = B);
  }, [W, B, P, y]), /* @__PURE__ */ t("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: z,
        "data-chat-scroll-container": !0,
        onScroll: w,
        className: "flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden",
        children: /* @__PURE__ */ t(
          "div",
          {
            ref: R,
            className: `flex w-full flex-col ${I ? "gap-3" : "gap-8"}`,
            style: { maxWidth: f },
            children: [
              r.map((a, k) => {
                const G = m(a, k), Q = (p == null ? void 0 : p.selectedMessageKeys.has(G)) ?? !1;
                return /* @__PURE__ */ t(
                  "div",
                  {
                    "data-chat-message-index": k,
                    "data-chat-turn-reserved": (y == null ? void 0 : y.assistantKey) === G ? "true" : void 0,
                    ref: (O) => {
                      O ? H.current.set(k, O) : H.current.delete(k), _ == null || _(k, O);
                    },
                    className: I ? "flex w-full items-start gap-2" : void 0,
                    style: (y == null ? void 0 : y.assistantKey) === G ? { minHeight: y.minHeight } : void 0,
                    children: [
                      p && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          onClick: () => p.onToggleMessage(G),
                          className: "mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight",
                          "aria-label": Q ? "取消选择消息" : "选择消息",
                          children: Q ? /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white", children: /* @__PURE__ */ e(Ke, { size: 12, strokeWidth: 2.8 }) }) : /* @__PURE__ */ e("span", { className: "inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        "div",
                        {
                          className: p ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${Q ? "bg-surfaceMuted" : "bg-transparent hover:bg-bgLight"} ${a.role === "user" ? "py-2.5" : "py-1.5"}` : void 0,
                          children: [
                            /* @__PURE__ */ e(
                              Dt,
                              {
                                msg: a,
                                actionKey: G,
                                feedback: N == null ? void 0 : N[G],
                                onFeedback: g,
                                onRefresh: x ? () => x(k) : void 0,
                                isTyping: n && k === L
                              }
                            ),
                            k === L && n && !d && /* @__PURE__ */ e("div", { className: "flex w-full justify-start px-1 md:px-2", children: /* @__PURE__ */ e(
                              pt,
                              {
                                phase: i,
                                searchSteps: [...l]
                              }
                            ) })
                          ]
                        }
                      )
                    ]
                  },
                  G
                );
              }),
              L < 0 && n && !d && /* @__PURE__ */ e("div", { className: "flex w-full justify-center px-2", children: /* @__PURE__ */ e("div", { className: "flex w-full max-w-[860px] justify-start px-1 md:px-2", children: /* @__PURE__ */ e(pt, { phase: i, searchSteps: [...l] }) }) })
            ]
          }
        )
      }
    ),
    h && h.height > 0 && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${h.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          height: h.height,
          transform: `translateY(${h.top}px)`
        }
      }
    )
  ] });
}
we.memo(Nn);
function ya({
  children: r,
  maxWidth: n = 840,
  disclaimer: i = "AI 内容可能有误差，请在实验前核实。"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2",
      style: { maxWidth: n },
      children: [
        r,
        i && /* @__PURE__ */ e("div", { className: "mt-3 text-center text-xs text-tertiaryText", children: i })
      ]
    }
  );
}
const va = Lt(
  function({ header: n, children: i, sidePanels: l }, d) {
    return /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
      n,
      /* @__PURE__ */ t("div", { ref: d, className: "flex min-h-0 w-full flex-1 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: i }),
        l
      ] })
    ] });
  }
), wa = Lt(
  function({ open: n, width: i, resizing: l = !1, children: d }, f) {
    return /* @__PURE__ */ e(
      "aside",
      {
        ref: f,
        style: { width: n ? i : 0 },
        className: `h-full min-h-0 shrink-0 overflow-hidden ${l ? "transition-none" : "transition-[width] duration-300 ease-out"} ${n ? "min-w-0" : "pointer-events-none"}`,
        children: /* @__PURE__ */ e("div", { style: { width: i }, className: "h-full min-w-0", children: d })
      }
    );
  }
);
function kn({
  isSidebarOpen: r,
  title: n,
  editingTitle: i,
  titleInputRef: l,
  divided: d = !1,
  actions: f,
  onOpenSidebar: p,
  onStartEditTitle: h,
  onEditingTitleChange: N,
  onCommitTitle: m,
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
              children: /* @__PURE__ */ e(Et, { size: 20 })
            }
          ),
          n !== void 0 && /* @__PURE__ */ e("div", { className: "min-w-0", children: i !== void 0 ? /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              value: i,
              onChange: (w) => N == null ? void 0 : N(w.target.value),
              onBlur: m,
              onKeyDown: g,
              className: "w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder",
              maxLength: 80,
              "aria-label": "编辑对话名称"
            }
          ) : /* @__PURE__ */ e(
            "h1",
            {
              className: `truncate text-sm font-medium text-primaryText ${h ? "cursor-pointer" : ""}`,
              onClick: h,
              title: h ? "点击编辑对话名称" : n,
              children: n
            }
          ) })
        ] }),
        f && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: f })
      ]
    }
  );
}
function Na({ active: r = !1, icon: n, label: i, onClick: l }) {
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: l,
      className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${r ? "bg-chatWorkspaceActionSurface" : "bg-transparent hover:bg-chatWorkspaceActionSurface"}`,
      children: [
        n,
        /* @__PURE__ */ e("span", { className: "max-w-[150px] truncate", children: i })
      ]
    }
  );
}
function ka({
  items: r,
  activeMessageIndex: n,
  initiallyExpanded: i = !1,
  onSelect: l
}) {
  const [d, f] = v(i), [p, h] = v(null), [N, m] = v(0), [g, x] = v(0), [w, F] = v(!1), _ = ee(null), I = ee({}), T = ee(null), R = xe(() => {
    const y = _.current;
    if (!y) {
      m(0), x(0);
      return;
    }
    const { scrollTop: D, scrollHeight: L, clientHeight: P } = y;
    if (L <= P || P <= 0) {
      m(0), x(0);
      return;
    }
    const S = Math.max(P / L * P, 24), W = P - S, B = D / Math.max(L - P, 1);
    m(S), x(W * B);
  }, []), H = xe(() => {
    R(), F(!0), T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => F(!1), 650);
  }, [R]), A = () => {
    T.current !== null && (window.clearTimeout(T.current), T.current = null), f(!1), h(null), F(!1);
  };
  return se(() => {
    if (!d) return;
    const y = window.requestAnimationFrame(R);
    return () => window.cancelAnimationFrame(y);
  }, [d, r.length, R]), se(() => {
    const y = _.current, D = I.current[n];
    if (!y || !D) return;
    const L = y.scrollTop, P = L + y.clientHeight, S = D.offsetTop, W = S + D.offsetHeight, B = 16;
    S < L + B ? y.scrollTo({ top: Math.max(S - B, 0), behavior: "auto" }) : W > P - B && y.scrollTo({
      top: Math.max(W - y.clientHeight + B, 0),
      behavior: "auto"
    });
  }, [n, r.length]), se(() => () => {
    T.current !== null && window.clearTimeout(T.current);
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
          onScroll: H,
          className: `ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${d ? "w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline" : "w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none"}`,
          children: /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-col items-end gap-5", children: r.map((y) => {
              const D = y.messageIndex === n, L = p === y.messageIndex;
              return /* @__PURE__ */ t(
                "button",
                {
                  ref: (P) => {
                    I.current[y.messageIndex] = P;
                  },
                  type: "button",
                  onClick: () => l(y.messageIndex),
                  onMouseEnter: () => h(y.messageIndex),
                  onMouseLeave: () => h(null),
                  className: `flex h-4 items-center justify-end transition-[width,gap] duration-200 ${d ? "w-full gap-2" : "w-[12px] gap-0"}`,
                  style: { fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' },
                  "aria-label": `定位到第 ${y.messageIndex + 1} 条用户消息`,
                  title: y.preview,
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${d ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0"} ${D ? "text-primary" : L ? "text-chatTimelineTextHover" : "text-chatTimelineText"}`,
                        children: y.preview
                      }
                    ),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `shrink-0 rounded-full transition-colors duration-200 ${D ? "h-[4px] w-[12px] bg-primary" : L ? "h-[2px] w-[8px] bg-chatTimelineTextHover" : "h-[2px] w-[8px] bg-chatTimelineMarker"}`
                      }
                    )
                  ]
                },
                y.messageIndex
              );
            }) }),
            d && N > 0 && /* @__PURE__ */ e(
              "div",
              {
                className: `pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${w ? "opacity-100" : "opacity-0"}`,
                style: { height: N, transform: `translateY(${g}px)` }
              }
            )
          ] })
        }
      )
    }
  ) });
}
function Ta({
  selectedCount: r,
  shareLink: n,
  modalOpen: i,
  copied: l = !1,
  contentMaxWidth: d = 840,
  onCancel: f,
  onCreateLink: p,
  onCloseModal: h,
  onCopyLink: N
}) {
  return /* @__PURE__ */ t($e, { children: [
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
            /* @__PURE__ */ e(_e, { type: "secondary", size: "small", onClick: f, children: "取消" }),
            /* @__PURE__ */ e(
              _e,
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
      bt,
      {
        visible: i,
        title: "创建分享链接",
        width: 450,
        onCancel: h,
        footer: null,
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "m-0 text-sm leading-6 text-primaryText", children: "任何获得链接的实验室成员均可以查看你分享的对话，请检查是否包含敏感/隐私内容。" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-full border border-chatShareLinkBorder bg-chatShareLinkSurface p-1.5 pl-4", children: [
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-sm text-secondaryText", children: n }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: N,
                className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover",
                children: [
                  l ? /* @__PURE__ */ e(Ke, { size: 14 }) : /* @__PURE__ */ e(tt, { size: 14 }),
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
function Ca({
  tabs: r,
  activeKey: n,
  onSelectTab: i,
  onCloseTab: l,
  onClose: d,
  onResizeStart: f
}) {
  const p = r.find((h) => h.key === n) ?? null;
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
      /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: r.map((h) => {
        const N = h.key === n;
        return /* @__PURE__ */ t("div", { className: "group relative w-[150px] shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => i(h.key),
              className: `inline-flex w-full items-center gap-1.5 rounded-lg px-3 py-1.5 pr-6 text-sm transition-colors ${N ? "bg-chatPanelItemSurface text-primaryText" : "text-secondaryText hover:bg-chatPanelItemSurface"}`,
              children: [
                h.type === "knowledge" ? /* @__PURE__ */ e(ht, { size: 14, className: "shrink-0 text-tertiaryText" }) : /* @__PURE__ */ e(ar, { size: 14, className: "shrink-0 text-tertiaryText" }),
                /* @__PURE__ */ e("span", { className: "min-w-0 truncate text-left", children: h.title })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (m) => {
                m.stopPropagation(), l(h.key);
              },
              className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-tertiaryText opacity-0 transition-opacity hover:text-primaryText group-hover:opacity-100",
              "aria-label": `关闭预览：${h.title}`,
              title: "关闭标签",
              children: /* @__PURE__ */ e(We, { size: 12 })
            }
          )
        ] }, h.key);
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
function Sa({
  projectName: r = "未归属项目",
  searchQuery: n,
  error: i,
  knowledgeDocs: l,
  experiments: d,
  activePreviewKey: f,
  onSearchQueryChange: p,
  onOpenKnowledge: h,
  onOpenExperiment: N,
  onResizeStart: m
}) {
  const g = l.length + d.length;
  return /* @__PURE__ */ t("div", { className: "relative flex h-full min-w-0 flex-col border-l border-chatWorkspaceDivider bg-white", children: [
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
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ t("div", { className: "space-y-6 text-sm text-primaryText", children: [
      /* @__PURE__ */ t("section", { className: "space-y-2.5", children: [
        /* @__PURE__ */ e("div", { className: "truncate text-[15px] font-medium text-primaryText", children: r }),
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(qe, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" }),
          /* @__PURE__ */ e(
            "input",
            {
              value: n,
              onChange: (x) => p(x.target.value),
              placeholder: "搜索文件",
              className: "h-9 w-full rounded-lg border border-borderGray bg-white pl-9 pr-3 text-sm text-primaryText outline-none placeholder:text-tertiaryText focus:border-controlBorderHover"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e("div", { className: "space-y-1", children: i ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger", role: "alert", children: i }) : g === 0 ? /* @__PURE__ */ e("div", { className: "rounded-lg bg-bgLight px-3 py-2 text-xs text-secondaryText", children: n.trim() ? "未找到匹配的文件" : "暂无项目文件" }) : /* @__PURE__ */ t($e, { children: [
        l.map((x) => {
          const w = `knowledge:${x.id}`, F = f === w;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => h(x.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${F ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${F ? "font-semibold" : "font-normal"}`, children: x.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: x.tags[0] ?? "未分类" })
              ]
            },
            x.id
          );
        }),
        d.map((x) => {
          const w = `experiment:${x.id}`, F = f === w;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => N(x.id),
              className: `w-full rounded-lg px-2 py-1.5 text-left transition-colors ${F ? "bg-chatPanelItemSurface" : "hover:bg-chatPanelItemSurface"}`,
              children: [
                /* @__PURE__ */ e("div", { className: `truncate text-sm text-primaryText ${F ? "font-semibold" : "font-normal"}`, children: x.title }),
                /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-tertiaryText", children: x.tags[0] ?? x.status })
              ]
            },
            x.id
          );
        })
      ] }) }) })
    ] }) })
  ] });
}
const Tn = 50, Cn = 100 * 1024 * 1024, Sn = "⏎发送 | ⇧+⏎换行 | @引用 | /skill", Mn = [
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
], $n = /(?:^|\s)\/([^\s/]*)$/, Ln = /(?:^|\s)@([^\s@]*)$/, zn = (r, n) => {
  const l = r.slice(0, n).match($n);
  return l ? l[1] : null;
}, _n = (r, n) => {
  const l = r.slice(0, n).match(Ln);
  return l ? l[1] : null;
}, Ma = (r, n, i, l) => {
  const d = r.slice(0, n), f = r.slice(i), p = d.match(/(?:^|\s)\/[^\s/]*$/);
  if (!p) {
    const x = `/${l} `;
    return { value: `${d}${x}${f}`, cursor: d.length + x.length };
  }
  const h = d.length - p[0].length, m = `${p[0].startsWith(" ") ? " " : ""}/${l} `, g = `${d.slice(0, h)}${m}`;
  return {
    value: `${g}${f}`,
    cursor: g.length
  };
}, $a = (r, n, i, l) => {
  const d = r.slice(0, n), f = r.slice(i), p = d.match(/(?:^|\s)@[^\s@]*$/);
  if (!p) {
    const x = `@${l} `;
    return { value: `${d}${x}${f}`, cursor: d.length + x.length };
  }
  const h = d.length - p[0].length, m = `${p[0].startsWith(" ") ? " " : ""}@${l} `, g = `${d.slice(0, h)}${m}`;
  return {
    value: `${g}${f}`,
    cursor: g.length
  };
}, An = [], La = [], Ft = ({
  onSend: r,
  disabled: n,
  isStreaming: i = !1,
  onCancel: l,
  leadingControls: d,
  skillOptions: f = Mn,
  fileOptions: p = An,
  uploadAccept: h,
  validateUploadFile: N,
  onUploadValidationError: m
}) => {
  const [g, x] = v(""), [w, F] = v(!1), [_, I] = v(!1), [T, R] = v(""), [H, A] = v(-1), [y, D] = v(!1), [L, P] = v(""), [S, W] = v(-1), [B, z] = v([]), [o, u] = v([]), [a, k] = v([]), [G, Q] = v(!1), O = ee(null), ge = ee(null), pe = Ot(), fe = ee([]), Z = i && !!l;
  se(() => {
    fe.current = B;
  }, [B]), se(() => () => {
    fe.current.forEach((s) => {
      s.previewUrl && URL.revokeObjectURL(s.previewUrl);
    });
  }, []);
  const j = ae(() => {
    const s = T.trim().toLowerCase();
    return s ? f.filter((b) => `${b.id} ${b.description} ${b.source}`.toLowerCase().includes(s)) : f;
  }, [f, T]), M = ae(() => {
    const s = L.trim().toLowerCase();
    return s ? p.filter((b) => `${b.name} ${b.projectName} ${b.sourceType} ${b.operatorName ?? ""} ${b.operatedAt ?? ""}`.toLowerCase().includes(s)) : p.filter((b) => b.isRecent).slice(0, 10);
  }, [p, L]), q = xe((s, b) => {
    const X = b ?? s.length, te = zn(s, X);
    if (te !== null) {
      I(!0), R(te), A(-1), D(!1), P(""), W(-1);
      return;
    }
    const re = _n(s, X);
    if (re !== null) {
      D(!0), P(re), W(-1), I(!1), R(""), A(-1);
      return;
    }
    I(!1), R(""), A(-1), D(!1), P(""), W(-1);
  }, []), E = xe((s) => {
    if (s.disabled) return;
    const b = O.current, X = (b == null ? void 0 : b.selectionStart) ?? g.length, te = (b == null ? void 0 : b.selectionEnd) ?? X, re = g.slice(0, X), me = g.slice(te), ie = (() => {
      const ue = re.match(/(?:^|\s)\/[^\s/]*$/);
      if (!ue)
        return { value: g, cursor: X };
      const ye = re.length - ue[0].length, ce = ue[0].startsWith(" ") ? " " : "", $ = `${re.slice(0, ye)}${ce}`;
      return {
        value: `${$}${me}`,
        cursor: $.length
      };
    })();
    u((ue) => {
      const ye = `skill-${s.id}`;
      return ue.some((ce) => ce.id === ye) ? ue : [...ue, { id: ye, type: "skill", label: s.id, sourceId: s.id }];
    }), x(ie.value), I(!1), R(""), A(-1), requestAnimationFrame(() => {
      b && (b.focus(), b.setSelectionRange(ie.cursor, ie.cursor));
    });
  }, [g]), K = xe((s) => {
    const b = O.current, X = (b == null ? void 0 : b.selectionStart) ?? g.length, te = (b == null ? void 0 : b.selectionEnd) ?? X, re = g.slice(0, X), me = g.slice(te), ie = (() => {
      const ue = re.match(/(?:^|\s)@[^\s@]*$/);
      if (!ue)
        return { value: g, cursor: X };
      const ye = re.length - ue[0].length, ce = ue[0].startsWith(" ") ? " " : "", $ = `${re.slice(0, ye)}${ce}`;
      return {
        value: `${$}${me}`,
        cursor: $.length
      };
    })();
    k((ue) => {
      const ye = `doc-${s.id}`;
      return ue.some((ce) => ce.id === ye) ? ue : [...ue, { id: ye, type: "doc", label: s.name, sourceId: s.id }];
    }), x(ie.value), D(!1), P(""), W(-1), requestAnimationFrame(() => {
      b && (b.focus(), b.setSelectionRange(ie.cursor, ie.cursor));
    });
  }, [g]), de = xe(() => {
    Q(!1);
    const s = ge.current;
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
  }, []), he = xe((s) => {
    const b = Array.from(s.target.files ?? []);
    if (b.length === 0) return;
    const X = b.filter((te) => {
      const re = N == null ? void 0 : N(te);
      return re ? (m == null || m(re), !1) : !0;
    });
    z((te) => {
      const re = new Set(te.map((ie) => ie.id)), me = [...te];
      return X.forEach((ie) => {
        if (ie.size > Cn || me.length >= Tn) return;
        const ue = `${ie.name}-${ie.size}-${ie.lastModified}`;
        if (re.has(ue)) return;
        const ye = ie.type.startsWith("image/");
        re.add(ue), me.push({
          id: ue,
          name: ie.name,
          mimeType: ie.type || "application/octet-stream",
          previewUrl: ye ? URL.createObjectURL(ie) : void 0,
          file: ie
        });
      }), me;
    }), s.target.value = "";
  }, [m, N]), le = xe((s) => {
    z((b) => {
      const X = b.find((te) => te.id === s);
      return X != null && X.previewUrl && URL.revokeObjectURL(X.previewUrl), b.filter((te) => te.id !== s);
    });
  }, []), C = xe((s) => {
    u((b) => b.filter((X) => X.id !== s));
  }, []), oe = xe((s) => {
    k((b) => b.filter((X) => X.id !== s));
  }, []), ne = xe(() => {
    !g.trim() || n || (r({
      content: g,
      attachments: B.map((s) => ({
        id: s.id,
        name: s.name,
        mimeType: s.mimeType,
        previewUrl: s.previewUrl,
        file: s.file
      })),
      references: [...o, ...a]
    }), x(""), z([]), u([]), k([]), I(!1), R(""), A(-1), D(!1), P(""), W(-1));
  }, [g, n, r, B, a, o]);
  return /* @__PURE__ */ e("div", { className: "w-full max-w-[840px] mx-auto", children: /* @__PURE__ */ t("div", { className: "relative bg-white rounded-3xl shadow-sm border border-borderGray flex flex-col transition-all focus-within:shadow-lg focus-within:border-borderGray", children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: pe,
        ref: ge,
        type: "file",
        multiple: !0,
        accept: h,
        className: "pointer-events-none absolute h-0 w-0 opacity-0",
        onChange: he
      }
    ),
    (B.length > 0 || o.length > 0 || a.length > 0) && /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-1", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
      o.map((s) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatSkillBorder bg-chatSkillSurface pl-3 pr-3 py-1.5 text-sm text-chatSkillText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(zt, { size: 12, className: "shrink-0 text-chatSkillText" }),
            /* @__PURE__ */ e("span", { className: "max-w-[190px] truncate font-medium", children: s.label }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => C(s.id),
                className: "pointer-events-none absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 translate-x-1 items-center justify-center rounded text-chatSkillTextMuted opacity-0 transition-all hover:bg-chatSkillHover hover:text-chatSkillText group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100",
                "aria-label": `移除 skill ${s.label}`,
                children: /* @__PURE__ */ e(We, { size: 12 })
              }
            )
          ]
        },
        s.id
      )),
      a.map((s) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatReferenceBorder bg-chatReferenceSurface pl-3 pr-3 py-1.5 text-sm text-chatReferenceText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            /* @__PURE__ */ e(_t, { size: 12, className: "shrink-0 text-chatReferenceText" }),
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
      B.map((s) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative inline-flex max-w-full items-center gap-1.5 rounded-full border border-chatAttachmentBorder bg-white pl-3 pr-3 py-1.5 text-sm text-primaryText shadow-sm transition-[padding] duration-150 hover:pr-7",
          children: [
            s.previewUrl ? /* @__PURE__ */ e("span", { className: "inline-flex h-[14px] w-[14px] shrink-0 overflow-hidden rounded-[3px] bg-chatAttachmentIconSurface", children: /* @__PURE__ */ e("img", { src: s.previewUrl, alt: s.name, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ e(At, { size: 13, className: "shrink-0 text-tertiaryText" }),
            /* @__PURE__ */ t("span", { className: "relative min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "peer block max-w-[190px] truncate", children: s.name }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-0 top-[calc(100%+6px)] z-50 hidden max-w-[280px] rounded-md bg-chatFloatingSurface px-2.5 py-1.5 text-xs text-white shadow-chatTooltip peer-hover:block", children: s.name })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => le(s.id),
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
        ref: O,
        value: g,
        onChange: (s) => {
          const b = s.target.value;
          x(b), q(b, s.target.selectionStart);
        },
        onClick: (s) => {
          q(s.currentTarget.value, s.currentTarget.selectionStart);
        },
        onKeyUp: (s) => {
          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(s.key) || q(s.currentTarget.value, s.currentTarget.selectionStart);
        },
        onKeyDown: (s) => {
          if (s.key === "Enter" && (s.shiftKey || s.metaKey || s.ctrlKey)) {
            s.preventDefault();
            const b = s.currentTarget, X = b.selectionStart ?? g.length, te = b.selectionEnd ?? X, re = `${g.slice(0, X)}
${g.slice(te)}`, me = X + 1;
            x(re), q(re, me), requestAnimationFrame(() => {
              b.setSelectionRange(me, me);
            });
            return;
          }
          if (_) {
            if (s.key === "ArrowDown") {
              s.preventDefault(), A((b) => j.length === 0 ? -1 : b < 0 ? 0 : (b + 1) % j.length);
              return;
            }
            if (s.key === "ArrowUp") {
              s.preventDefault(), A((b) => j.length === 0 ? -1 : b < 0 ? j.length - 1 : (b - 1 + j.length) % j.length);
              return;
            }
            if (s.key === "Escape") {
              s.preventDefault(), I(!1), R(""), A(-1);
              return;
            }
            if (s.key === "Enter" && !s.shiftKey) {
              s.preventDefault();
              const b = H >= 0 ? j[H] : void 0;
              b && E(b);
              return;
            }
          }
          if (y) {
            if (s.key === "ArrowDown") {
              s.preventDefault(), W((b) => M.length === 0 ? -1 : b < 0 ? 0 : (b + 1) % M.length);
              return;
            }
            if (s.key === "ArrowUp") {
              s.preventDefault(), W((b) => M.length === 0 ? -1 : b < 0 ? M.length - 1 : (b - 1 + M.length) % M.length);
              return;
            }
            if (s.key === "Escape") {
              s.preventDefault(), D(!1), P(""), W(-1);
              return;
            }
            if (s.key === "Enter" && !s.shiftKey) {
              s.preventDefault();
              const b = S >= 0 ? M[S] : void 0;
              b && K(b);
              return;
            }
          }
          s.key === "Enter" && !s.shiftKey && (s.preventDefault(), ne());
        },
        disabled: n,
        onFocus: () => F(!0),
        onBlur: () => {
          F(!1), I(!1), D(!1);
        },
        placeholder: w ? Sn : "输入你的科研问题...",
        className: `w-full min-h-[72px] max-h-[180px] px-5 ${B.length > 0 || o.length > 0 || a.length > 0 ? "pt-2" : "pt-4"} pb-3 outline-none resize-none text-[14px] bg-transparent text-primaryText placeholder:text-tertiaryText leading-relaxed`
      }
    ),
    _ && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (s) => s.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(qe, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: T ? `搜索 skill：${T}` : "搜索 skill" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-h-64 overflow-y-auto py-1", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的 Skill" }) : j.map((s, b) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          disabled: s.disabled,
          title: s.disabledReason,
          className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${s.disabled ? "cursor-not-allowed opacity-50" : b === H ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
          onClick: () => E(s),
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
    y && /* @__PURE__ */ e("div", { className: "absolute inset-x-4 bottom-full mb-2 z-40", onMouseDown: (s) => s.preventDefault(), children: /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-xl border border-chatPopupBorder bg-white shadow-chatPopup", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 border-b border-chatAttachmentHover px-3 py-2 text-[13px] text-tertiaryText", children: [
        /* @__PURE__ */ e(qe, { size: 14, className: "text-tertiaryText" }),
        /* @__PURE__ */ e("span", { className: "truncate", children: L ? `搜索文件：${L}` : "搜索文件" })
      ] }),
      /* @__PURE__ */ t("div", { className: "max-h-64 overflow-y-auto py-1", children: [
        !L && /* @__PURE__ */ e("div", { className: "px-3 py-2", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-[12px] text-tertiaryText", children: [
          /* @__PURE__ */ e(xt, { size: 12 }),
          /* @__PURE__ */ e("span", { children: "最近使用的文档" })
        ] }) }),
        M.length === 0 ? /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-tertiaryText", children: "未找到匹配的文件" }) : M.map((s, b) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: `mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${b === S ? "bg-chatMenuActive" : "hover:bg-chatMenuHover"}`,
            onClick: () => K(s),
            children: [
              /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-chatAttachmentIconSurface text-chatMenuIcon", children: /* @__PURE__ */ e(ht, { size: 11 }) }),
              /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-[13px] font-semibold text-primaryText", children: s.name }),
              !L && s.operatorName && s.operatedAt && /* @__PURE__ */ e("span", { className: "shrink-0 max-w-[55%] truncate text-right text-[12px] text-tertiaryText", children: `- by ${s.operatorName} ${s.operatedAt}` })
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
            onMouseEnter: () => Q(!0),
            onMouseLeave: () => Q(!1),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: de,
                  "aria-controls": pe,
                  className: "w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-tertiaryText hover:bg-bgLight transition-colors bg-white",
                  children: /* @__PURE__ */ e(ft, { size: 16 })
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max whitespace-nowrap rounded-lg bg-chatFloatingSurface px-3 py-2 text-[13px] leading-6 text-white shadow-chatHint ${G ? "block" : "hidden"}`,
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
          onClick: Z ? l : ne,
          disabled: Z ? !1 : n || !g.trim(),
          "aria-label": Z ? "停止生成" : "发送消息",
          title: Z ? "停止生成" : "发送消息",
          className: `w-9 h-9 rounded-full flex items-center justify-center transition-all ${Z || g.trim() && !n ? "bg-primary text-white shadow-md hover:bg-primary-hover" : "bg-tertiaryText text-white"}`,
          children: Z ? /* @__PURE__ */ e(sr, { size: 12, fill: "currentColor" }) : /* @__PURE__ */ e(lr, { size: 16 })
        }
      ) })
    ] })
  ] }) });
};
we.memo(Ft);
const Pn = ({ messages: r, isTyping: n, statusPhase: i = "thinking", searchSteps: l = [] }) => {
  const d = ee(null);
  se(() => {
    var p;
    (p = d.current) == null || p.scrollIntoView({ behavior: "smooth" });
  }, [r.length, n]);
  const f = ae(() => r.map((p, h) => /* @__PURE__ */ e(gn, { msg: p }, `${h}-${p.role}`)), [r]);
  return /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-8 py-6", children: [
    f,
    n && /* @__PURE__ */ e(vn, { phase: i, searchSteps: l }),
    /* @__PURE__ */ e("div", { ref: d })
  ] });
};
we.memo(Pn);
const En = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "生成项目日报"
], Ht = ({ onSelect: r, prompts: n = En }) => {
  const i = xe((l) => {
    r(l);
  }, [r]);
  return /* @__PURE__ */ e("div", { className: "flex justify-center flex-wrap gap-4 mt-2", children: n.map((l) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => i(l),
      className: "px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm",
      children: l
    },
    l
  )) });
};
we.memo(Ht);
const Bn = (r, n) => {
  const i = Math.random() * r, l = Math.random() * n;
  return {
    x: i,
    y: l,
    baseX: i,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function za({ onLogin: r, onLoginSuccess: n, onNavigate: i }) {
  const l = ee(null), d = ee(null), [f, p] = v(""), [h, N] = v(""), [m, g] = v(!0), [x, w] = v(!1), [F, _] = v(!1), [I, T] = v(null), R = ee(null), [H, A] = v(!1), [y, D] = v("email"), [L, P] = v(""), [S, W] = v(""), [B, z] = v(""), [o, u] = v(""), [a, k] = v(0), [G, Q] = v(!1), O = ae(() => f.trim().length > 0 && h.trim().length > 0 && !x, [
    f,
    x,
    h
  ]);
  se(() => {
    if (a <= 0) return;
    const j = window.setTimeout(() => k((M) => M - 1), 1e3);
    return () => clearTimeout(j);
  }, [a]), se(
    () => () => {
      R.current !== null && window.clearTimeout(R.current);
    },
    []
  ), se(() => {
    const j = l.current, M = d.current;
    if (!j || !M) return;
    const q = j.getContext("2d");
    if (!q) return;
    const E = window.getComputedStyle(document.documentElement), K = E.getPropertyValue("--chatui-color-auth-particle-active").trim(), de = E.getPropertyValue("--chatui-color-auth-particle-idle").trim(), he = E.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let le = 0, C = 0, oe = 0, ne = window.devicePixelRatio || 1, s = [];
    const b = {
      x: -1e3,
      y: -1e3,
      radius: 120
    }, X = 150, te = () => {
      const ce = M.getBoundingClientRect();
      ne = window.devicePixelRatio || 1, C = ce.width, oe = ce.height, j.width = C * ne, j.height = oe * ne, j.style.width = `${C}px`, j.style.height = `${oe}px`, q.setTransform(ne, 0, 0, ne, 0, 0);
      const $ = C < 768 ? 40 : 90;
      s = Array.from({ length: $ }, () => Bn(C, oe));
    }, re = (ce) => {
      q.beginPath(), q.arc(ce.x, ce.y, ce.size, 0, Math.PI * 2), q.closePath(), q.fill();
    }, me = () => {
      q.clearRect(0, 0, C, oe);
      for (let ce = 0; ce < s.length; ce += 1) {
        const $ = s[ce];
        $.x += $.vx, $.y += $.vy, ($.x < 0 || $.x > C) && ($.vx = -$.vx), ($.y < 0 || $.y > oe) && ($.vy = -$.vy);
        const V = b.x - $.x, Se = b.y - $.y, Te = Math.sqrt(V * V + Se * Se) || 1, Ae = V / Te, Pe = Se / Te, Le = (b.radius - Te) / b.radius, Re = Ae * Le * $.density, Ue = Pe * Le * $.density;
        if (Te < b.radius)
          $.x -= Re * 0.5, $.y -= Ue * 0.5, q.fillStyle = K, $.size = Math.min($.size + 0.1, 2.5);
        else {
          if ($.x !== $.baseX) {
            const Ce = $.x - $.baseX;
            $.x -= Ce / 50;
          }
          if ($.y !== $.baseY) {
            const Ce = $.y - $.baseY;
            $.y -= Ce / 50;
          }
          q.fillStyle = de, $.size = Math.max($.size - 0.05, 1);
        }
        re($);
        for (let Ce = ce; Ce < s.length; Ce += 1) {
          const Me = s[Ce], ze = $.x - Me.x, Ee = $.y - Me.y, Be = Math.sqrt(ze * ze + Ee * Ee);
          if (Be < X) {
            const De = (1 - Be / X) * 0.4;
            q.beginPath(), q.strokeStyle = he, q.globalAlpha = De, q.lineWidth = 1, q.moveTo($.x, $.y), q.lineTo(Me.x, Me.y), q.stroke(), q.globalAlpha = 1, q.closePath();
          }
        }
      }
      le = window.requestAnimationFrame(me);
    }, ie = (ce) => {
      const $ = M.getBoundingClientRect();
      b.x = ce.clientX - $.left, b.y = ce.clientY - $.top;
    }, ue = () => {
      b.x = -1e3, b.y = -1e3;
    }, ye = (ce) => {
      if (ce.touches.length < 1) return;
      const $ = M.getBoundingClientRect();
      b.x = ce.touches[0].clientX - $.left, b.y = ce.touches[0].clientY - $.top;
    };
    return te(), me(), window.addEventListener("resize", te), M.addEventListener("mousemove", ie), M.addEventListener("mouseleave", ue), M.addEventListener("touchmove", ye, { passive: !0 }), M.addEventListener("touchend", ue), () => {
      window.cancelAnimationFrame(le), window.removeEventListener("resize", te), M.removeEventListener("mousemove", ie), M.removeEventListener("mouseleave", ue), M.removeEventListener("touchmove", ye), M.removeEventListener("touchend", ue);
    };
  }, []);
  const ge = async (j) => {
    if (j.preventDefault(), !!O) {
      w(!0), T(null);
      try {
        const M = await r({ email: f.trim(), password: h, rememberLogin: m });
        if (!M.ok) {
          T(M.message);
          return;
        }
        _(!0), R.current = window.setTimeout(() => {
          _(!1), n();
        }, 900);
      } catch {
        T("登录失败，请稍后重试。");
      } finally {
        w(!1);
      }
    }
  }, pe = async () => {
    !L.trim() || a > 0 || (w(!0), await new Promise((j) => window.setTimeout(j, 1e3)), w(!1), Q(!0), k(60));
  }, fe = async () => {
    if (y === "email") {
      if (!L.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L) || !S.trim() || S.length < 6 || !B.trim() || B.length < 6 || B !== o) return;
      D("success");
    }
  }, Z = () => {
    A(!1), D("email"), P(""), W(""), z(""), u(""), k(0), Q(!1);
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
      /* @__PURE__ */ t("form", { onSubmit: ge, className: "space-y-6", children: [
        /* @__PURE__ */ t("label", { className: "relative block", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              value: f,
              onChange: (j) => {
                p(j.target.value), T(null);
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
              value: h,
              onChange: (j) => {
                N(j.target.value), T(null);
              },
              required: !0,
              placeholder: " ",
              className: "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
            }
          ),
          /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "密码" })
        ] }),
        I && /* @__PURE__ */ e("p", { role: "alert", className: "-mt-2 text-sm text-authErrorText", children: I }),
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ t("label", { className: "group inline-flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: m,
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
          /* @__PURE__ */ e("button", { type: "button", onClick: () => i("/forgot-password"), className: "text-sm font-medium text-authLink transition-colors hover:text-primary", children: "忘记密码？" })
        ] }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !O,
            className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ e("span", { children: x ? "认证中..." : "登录" }),
              x && /* @__PURE__ */ t(
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
      !H && /* @__PURE__ */ t("div", { className: "mt-7", children: [
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
                /* @__PURE__ */ e(or, { size: 16, className: "text-authTextFaint" }),
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
                /* @__PURE__ */ e(ir, { size: 16, className: "text-authTextFaint" }),
                "创建实验室"
              ]
            }
          )
        ] })
      ] }),
      H && /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: Z,
            className: "text-sm font-medium text-authLink transition-colors hover:text-primary",
            children: "← 返回登录"
          }
        ) }),
        y === "email" && /* @__PURE__ */ t("div", { className: "space-y-5", children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置密码" }),
            /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-authTextMuted", children: "输入邮箱并验证后，重新设置密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: L,
                onChange: (j) => P(j.target.value),
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
                  onChange: (j) => W(j.target.value.replace(/\D/g, "").slice(0, 6)),
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
                onClick: pe,
                disabled: a > 0 || x || !L.trim(),
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
                value: B,
                onChange: (j) => z(j.target.value),
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
                value: o,
                onChange: (j) => u(j.target.value),
                placeholder: " ",
                className: `peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${o.length > 0 && B !== o ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary", children: "确认密码" })
          ] }),
          o.length > 0 && B !== o && /* @__PURE__ */ e("span", { className: "block text-xs text-authErrorText", children: "两次输入的密码不一致" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: fe,
              disabled: !L.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L) || !S.trim() || S.length < 6 || !B.trim() || B.length < 6 || B !== o,
              className: "mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
              children: "重置密码"
            }
          )
        ] }),
        y === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
            /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Xe, { size: 40, className: "text-primary" }) })
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
        className: `pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${F ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ e(Xe, { size: 18, className: "text-primary" }),
          /* @__PURE__ */ e("span", { children: "认证成功，正在进入工作台..." })
        ]
      }
    )
  ] });
}
const jn = (r, n) => {
  const i = Math.random() * r, l = Math.random() * n;
  return {
    x: i,
    y: l,
    baseX: i,
    baseY: l,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  };
};
function _a({
  mode: r = "join-lab",
  onSendVerificationCode: n,
  onVerifyIdentity: i,
  onRegister: l,
  onEnterWorkspace: d,
  onNavigate: f
}) {
  const p = ee(null), h = ee(null), N = ee(null), [m, g] = v("email"), [x, w] = v(""), [F, _] = v(""), [I, T] = v(""), [R, H] = v(""), A = r === "create-lab", [y, D] = v(""), [L, P] = v(""), [S, W] = v(!1), [B, z] = v(0), [o, u] = v(null), a = y.length > 0 && y.trim().length < 6;
  se(() => {
    if (B <= 0) return;
    const M = window.setTimeout(() => z((q) => q - 1), 1e3);
    return () => clearTimeout(M);
  }, [B]), se(
    () => () => {
      N.current !== null && window.clearTimeout(N.current);
    },
    []
  ), se(() => {
    const M = p.current, q = h.current;
    if (!M || !q) return;
    const E = M.getContext("2d");
    if (!E) return;
    const K = window.getComputedStyle(document.documentElement), de = K.getPropertyValue("--chatui-color-auth-particle-active").trim(), he = K.getPropertyValue("--chatui-color-auth-particle-idle").trim(), le = K.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let C = 0, oe = 0, ne = 0, s = window.devicePixelRatio || 1, b = [];
    const X = { x: -1e3, y: -1e3, radius: 120 }, te = 150, re = () => {
      const $ = q.getBoundingClientRect();
      s = window.devicePixelRatio || 1, oe = $.width, ne = $.height, M.width = oe * s, M.height = ne * s, M.style.width = `${oe}px`, M.style.height = `${ne}px`, E.setTransform(s, 0, 0, s, 0, 0);
      const V = oe < 768 ? 40 : 90;
      b = Array.from({ length: V }, () => jn(oe, ne));
    }, me = ($) => {
      E.beginPath(), E.arc($.x, $.y, $.size, 0, Math.PI * 2), E.closePath(), E.fill();
    }, ie = () => {
      E.clearRect(0, 0, oe, ne);
      for (let $ = 0; $ < b.length; $ += 1) {
        const V = b[$];
        V.x += V.vx, V.y += V.vy, (V.x < 0 || V.x > oe) && (V.vx = -V.vx), (V.y < 0 || V.y > ne) && (V.vy = -V.vy);
        const Se = X.x - V.x, Te = X.y - V.y, Ae = Math.sqrt(Se * Se + Te * Te) || 1, Pe = Se / Ae, Le = Te / Ae, Re = (X.radius - Ae) / X.radius, Ue = Pe * Re * V.density, Ce = Le * Re * V.density;
        Ae < X.radius ? (V.x -= Ue * 0.5, V.y -= Ce * 0.5, E.fillStyle = de, V.size = Math.min(V.size + 0.1, 2.5)) : (V.x !== V.baseX && (V.x -= (V.x - V.baseX) / 50), V.y !== V.baseY && (V.y -= (V.y - V.baseY) / 50), E.fillStyle = he, V.size = Math.max(V.size - 0.05, 1)), me(V);
        for (let Me = $; Me < b.length; Me += 1) {
          const ze = b[Me], Ee = V.x - ze.x, Be = V.y - ze.y, De = Math.sqrt(Ee * Ee + Be * Be);
          if (De < te) {
            const Fe = (1 - De / te) * 0.4;
            E.beginPath(), E.strokeStyle = le, E.globalAlpha = Fe, E.lineWidth = 1, E.moveTo(V.x, V.y), E.lineTo(ze.x, ze.y), E.stroke(), E.globalAlpha = 1, E.closePath();
          }
        }
      }
      C = window.requestAnimationFrame(ie);
    }, ue = ($) => {
      const V = q.getBoundingClientRect();
      X.x = $.clientX - V.left, X.y = $.clientY - V.top;
    }, ye = () => {
      X.x = -1e3, X.y = -1e3;
    }, ce = ($) => {
      if ($.touches.length < 1) return;
      const V = q.getBoundingClientRect();
      X.x = $.touches[0].clientX - V.left, X.y = $.touches[0].clientY - V.top;
    };
    return re(), ie(), window.addEventListener("resize", re), q.addEventListener("mousemove", ue), q.addEventListener("mouseleave", ye), q.addEventListener("touchmove", ce, { passive: !0 }), q.addEventListener("touchend", ye), () => {
      window.cancelAnimationFrame(C), window.removeEventListener("resize", re), q.removeEventListener("mousemove", ue), q.removeEventListener("mouseleave", ye), q.removeEventListener("touchmove", ce), q.removeEventListener("touchend", ye);
    };
  }, []);
  const k = async () => {
    if (!(!x.trim() || B > 0)) {
      W(!0), u(null);
      try {
        const M = await n(x.trim());
        if (!M.ok) {
          u(M);
          return;
        }
        z(60);
      } catch {
        u({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        W(!1);
      }
    }
  }, G = () => ({
    email: x.trim(),
    verificationCode: F.trim(),
    mode: r,
    ...A ? { labName: R.trim() } : { inviteCode: I.trim() }
  }), Q = () => {
    const M = ["email", "password", "success"], q = M.indexOf(m);
    q < M.length - 1 && g(M[q + 1]);
  }, O = ae(() => {
    if (S) return !1;
    switch (m) {
      case "email":
        return A ? x.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x) && F.trim().length >= 6 && R.trim().length > 0 : x.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x) && F.trim().length >= 6 && I.trim().length > 0;
      case "password":
        return y.trim().length >= 6 && y === L;
      default:
        return !1;
    }
  }, [m, x, F, I, R, A, y, L, S]), ge = async (M) => {
    if (M.preventDefault(), !!O) {
      W(!0), u(null);
      try {
        const q = G(), E = m === "password" ? await l({ ...q, password: y }) : await i(q);
        if (!E.ok) {
          u(E);
          return;
        }
        Q();
      } catch {
        u({ ok: !1, message: "操作失败，请稍后重试。" });
      } finally {
        W(!1);
      }
    }
  }, pe = {
    email: A ? "创建实验室" : "验证您的邮箱",
    password: "设置登录密码",
    success: ""
  }, fe = {
    email: "",
    password: "",
    success: ""
  }, Z = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", j = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: h, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: p, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "注册账号，开启科研工作台。" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: pe[m] }),
        fe[m] && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-tertiaryText", children: fe[m] })
      ] }),
      m !== "success" && /* @__PURE__ */ t("form", { onSubmit: ge, className: "space-y-5", children: [
        m === "email" && /* @__PURE__ */ t($e, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: x,
                onChange: (M) => {
                  w(M.target.value), u(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Z
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
                  value: F,
                  onChange: (M) => {
                    _(M.target.value.replace(/\D/g, "").slice(0, 6)), u(null);
                  },
                  required: !0,
                  placeholder: " ",
                  autoComplete: "off",
                  maxLength: 6,
                  className: Z
                }
              ),
              /* @__PURE__ */ e("span", { className: j, children: "验证码" })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: k,
                disabled: B > 0 || S,
                className: `h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${B > 0 ? "cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint" : "border border-controlBorderDefault bg-surface text-authTextDefault"}`,
                children: B > 0 ? `${B}s后获取` : "获取验证码"
              }
            )
          ] }),
          A ? /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: R,
                onChange: (M) => {
                  H(M.target.value), u(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Z
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "实验室名称" })
          ] }) : /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: I,
                onChange: (M) => {
                  T(M.target.value), u(null);
                },
                required: !0,
                placeholder: " ",
                autoComplete: "off",
                className: Z
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "邀请码" })
          ] })
        ] }),
        m === "password" && /* @__PURE__ */ t($e, { children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: y,
                onChange: (M) => {
                  D(M.target.value), u(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Z} ${(o == null ? void 0 : o.field) === "password" || a ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "设置密码" }),
            ((o == null ? void 0 : o.field) === "password" || a) && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: (o == null ? void 0 : o.field) === "password" ? o.message : "密码至少需要 6 位" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "password",
                value: L,
                onChange: (M) => {
                  P(M.target.value), u(null);
                },
                required: !0,
                placeholder: " ",
                className: `${Z} ${L.length > 0 && y !== L ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}`
              }
            ),
            /* @__PURE__ */ e("span", { className: j, children: "确认密码" }),
            L.length > 0 && y !== L && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] })
        ] }),
        o && o.field !== "password" && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: o.message }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: !O,
            className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-md",
            children: [
              /* @__PURE__ */ e("span", { children: S ? "处理中..." : m === "password" ? "完成注册" : "下一步" }),
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
      m === "success" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" }),
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Xe, { size: 40, className: "text-primary" }) })
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
              N.current = window.setTimeout(d, 1e3);
            },
            className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg",
            children: "进入工作台"
          }
        )
      ] }),
      m !== "success" && /* @__PURE__ */ t("p", { className: "mt-6 text-center text-sm text-tertiaryText", children: [
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
const In = (r, n) => {
  const i = Math.random() * r, l = Math.random() * n;
  return { x: i, y: l, baseX: i, baseY: l, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};
function Aa({ onSendCode: r, onResetPassword: n, onBackToLogin: i }) {
  const l = ee(null), d = ee(null), f = ee(null), [p, h] = v("email"), [N, m] = v(""), [g, x] = v(""), [w, F] = v(""), [_, I] = v(""), [T, R] = v(!1), [H, A] = v(0), [y, D] = v(null);
  se(() => {
    if (H <= 0) return;
    const o = window.setTimeout(() => A((u) => u - 1), 1e3);
    return () => window.clearTimeout(o);
  }, [H]), se(() => {
    const o = l.current, u = d.current;
    if (!o || !u) return;
    const a = o.getContext("2d");
    if (!a) return;
    const k = window.getComputedStyle(document.documentElement), G = k.getPropertyValue("--chatui-color-auth-particle-active").trim(), Q = k.getPropertyValue("--chatui-color-auth-particle-idle").trim(), O = k.getPropertyValue("--chatui-color-auth-particle-line").trim();
    let ge = 0, pe = 0, fe = 0, Z = [];
    const j = { x: -1e3, y: -1e3, radius: 120 }, M = 150, q = () => {
      const le = u.getBoundingClientRect(), C = window.devicePixelRatio || 1;
      pe = le.width, fe = le.height, o.width = pe * C, o.height = fe * C, o.style.width = `${pe}px`, o.style.height = `${fe}px`, a.setTransform(C, 0, 0, C, 0, 0), Z = Array.from({ length: pe < 768 ? 40 : 90 }, () => In(pe, fe));
    }, E = () => {
      a.clearRect(0, 0, pe, fe);
      for (let le = 0; le < Z.length; le += 1) {
        const C = Z[le];
        C.x += C.vx, C.y += C.vy, (C.x < 0 || C.x > pe) && (C.vx = -C.vx), (C.y < 0 || C.y > fe) && (C.vy = -C.vy);
        const oe = j.x - C.x, ne = j.y - C.y, s = Math.sqrt(oe * oe + ne * ne) || 1, b = (j.radius - s) / j.radius;
        s < j.radius ? (C.x -= oe / s * b * C.density * 0.5, C.y -= ne / s * b * C.density * 0.5, a.fillStyle = G, C.size = Math.min(C.size + 0.1, 2.5)) : (C.x -= (C.x - C.baseX) / 50, C.y -= (C.y - C.baseY) / 50, a.fillStyle = Q, C.size = Math.max(C.size - 0.05, 1)), a.beginPath(), a.arc(C.x, C.y, C.size, 0, Math.PI * 2), a.fill();
        for (let X = le; X < Z.length; X += 1) {
          const te = Z[X], re = C.x - te.x, me = C.y - te.y, ie = Math.sqrt(re * re + me * me);
          ie >= M || (a.beginPath(), a.globalAlpha = (1 - ie / M) * 0.4, a.strokeStyle = O, a.lineWidth = 1, a.moveTo(C.x, C.y), a.lineTo(te.x, te.y), a.stroke(), a.globalAlpha = 1);
        }
      }
      ge = window.requestAnimationFrame(E);
    }, K = (le) => {
      const C = u.getBoundingClientRect();
      j.x = le.clientX - C.left, j.y = le.clientY - C.top;
    }, de = (le) => {
      if (!le.touches.length) return;
      const C = u.getBoundingClientRect();
      j.x = le.touches[0].clientX - C.left, j.y = le.touches[0].clientY - C.top;
    }, he = () => {
      j.x = -1e3, j.y = -1e3;
    };
    return q(), E(), window.addEventListener("resize", q), u.addEventListener("mousemove", K), u.addEventListener("mouseleave", he), u.addEventListener("touchmove", de, { passive: !0 }), u.addEventListener("touchend", he), () => {
      window.cancelAnimationFrame(ge), window.removeEventListener("resize", q), u.removeEventListener("mousemove", K), u.removeEventListener("mouseleave", he), u.removeEventListener("touchmove", de), u.removeEventListener("touchend", he);
    };
  }, []), se(() => () => {
    f.current !== null && window.clearTimeout(f.current);
  }, []);
  const L = ae(() => N.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N) && g.length >= 6 && w.length >= 6 && w === _, [_, N, w, g]), P = "peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus", S = "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary";
  return /* @__PURE__ */ t("div", { ref: d, className: "relative h-screen w-full overflow-hidden bg-bgLight text-primaryText", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ e("canvas", { ref: l, className: "h-full w-full" }) }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" }),
    /* @__PURE__ */ e("div", { className: "pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" }),
    /* @__PURE__ */ e("div", { className: "relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4", children: /* @__PURE__ */ t("div", { className: "w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]", children: [
      /* @__PURE__ */ t("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ e("h1", { className: "bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent", children: "Helia" }),
        /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "重置您的登录密码。" })
      ] }),
      p === "email" ? /* @__PURE__ */ t($e, { children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-primaryText", children: "重置您的密码" }) }),
        /* @__PURE__ */ t("form", { onSubmit: async (o) => {
          if (o.preventDefault(), !(!L || T)) {
            R(!0), D(null);
            try {
              const u = await n({ email: N.trim(), verificationCode: g, newPassword: w });
              if (!u.ok) {
                D(u.message);
                return;
              }
              h("success");
            } catch {
              D("密码重置失败，请稍后重试。");
            } finally {
              R(!1);
            }
          }
        }, className: "space-y-5", children: [
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "email", value: N, onChange: (o) => {
              m(o.target.value), D(null);
            }, required: !0, placeholder: " ", autoComplete: "off", className: P }),
            /* @__PURE__ */ e("span", { className: S, children: "邮箱" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ t("label", { className: "relative block flex-1", children: [
              /* @__PURE__ */ e("input", { type: "text", value: g, onChange: (o) => {
                x(o.target.value.replace(/\D/g, "").slice(0, 6)), D(null);
              }, required: !0, placeholder: " ", autoComplete: "off", maxLength: 6, className: P }),
              /* @__PURE__ */ e("span", { className: S, children: "验证码" })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: async () => {
              if (!(!N.trim() || H > 0 || T)) {
                R(!0), D(null);
                try {
                  const o = await r(N.trim());
                  if (!o.ok) {
                    D(o.message);
                    return;
                  }
                  A(60);
                } catch {
                  D("验证码发送失败，请稍后重试。");
                } finally {
                  R(!1);
                }
              }
            }, disabled: H > 0 || T, className: `h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${H > 0 ? "cursor-not-allowed text-authTextFaint" : "text-authTextDefault"}`, children: H > 0 ? `${H}s后获取` : "获取验证码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: w, onChange: (o) => {
              F(o.target.value), D(null);
            }, required: !0, placeholder: " ", className: P }),
            /* @__PURE__ */ e("span", { className: S, children: "新密码" })
          ] }),
          /* @__PURE__ */ t("label", { className: "relative block", children: [
            /* @__PURE__ */ e("input", { type: "password", value: _, onChange: (o) => {
              I(o.target.value), D(null);
            }, required: !0, placeholder: " ", className: `${P} ${_.length > 0 && w !== _ ? "border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus" : ""}` }),
            /* @__PURE__ */ e("span", { className: S, children: "确认新密码" }),
            _.length > 0 && w !== _ && /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-authErrorText", children: "两次输入的密码不一致" })
          ] }),
          y && /* @__PURE__ */ e("p", { role: "alert", className: "text-sm text-authErrorText", children: y }),
          /* @__PURE__ */ t("button", { type: "submit", disabled: !L || T, className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0", children: [
            /* @__PURE__ */ e("span", { children: T ? "处理中..." : "重置密码" }),
            T && /* @__PURE__ */ t("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
          /* @__PURE__ */ e("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft", children: /* @__PURE__ */ e(Xe, { size: 40, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-primaryText", children: "密码重置成功" }),
          /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-authTextMuted", children: "请用新密码登录" })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", onClick: () => {
          f.current = window.setTimeout(() => i({ replace: !0 }), 1e3);
        }, className: "mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg", children: "返回登录" })
      ] })
    ] }) })
  ] });
}
const Mt = 10, $t = (r) => r.isTaskConversation === !0 || r.source === "task" || r.id.startsWith("task-") || typeof r.taskId == "string" && r.taskId.trim().length > 0;
function Pa({
  currentPath: r,
  projects: n,
  initialChats: i,
  logoUrl: l,
  user: d,
  children: f,
  initialAiUsageWarningActive: p = !1,
  aiUsageWarningActive: h,
  canViewAiUsage: N = !0,
  canManageMembers: m = !0,
  chatActions: g = { rename: !0, share: !0, pin: !0, delete: !0 },
  onNavigate: x,
  onLogout: w,
  onChatsChange: F,
  onRenameChat: _,
  onTogglePinChat: I,
  onShareChat: T,
  onDeleteChat: R
}) {
  const [H, A] = v(!0), [y, D] = v(240), [L, P] = v(!1), S = ee(0), W = ee(240), [B, z] = v(() => {
    const c = { unassigned: !0 };
    return n.forEach((U) => {
      c[U.id] = !0;
    }), c;
  }), [o, u] = v(!1), [a, k] = v(() => [...i]), [G, Q] = v(null), [O, ge] = v("time"), [pe, fe] = v(!1), [Z, j] = v(null), [M, q] = v(""), [E, K] = v(!1), [de, he] = v(""), [le, C] = v(!1), [oe, ne] = v(p), [s, b] = v(!1), X = h ?? oe, te = ee(null), re = ee(null), me = ee(null), ie = !!(g.rename || g.share || g.pin || g.delete), ue = () => {
    u(!1), w();
  }, ye = (c) => {
    z((U) => ({ ...U, [c]: !U[c] }));
  }, ce = (c) => {
    var J;
    k((Y) => Y.filter((Ne) => Ne.id !== c)), Q(null), Z === c && (j(null), q("")), R == null || R(c), ((J = r.match(/^\/chat\/([^/]+)$/)) == null ? void 0 : J[1]) === c && x("/chat/new", { replace: !0 });
  }, $ = (c) => {
    const U = a.find((Y) => Y.id === c);
    if (!U) return;
    const J = !U.isPinned;
    k((Y) => Y.map(
      (je) => je.id === c ? { ...je, isPinned: J } : je
    )), I == null || I(c, J), Q(null);
  }, V = (c) => {
    j(c.id), q(c.title), Q(null);
  }, Se = () => {
    j(null), q("");
  }, Te = (c) => {
    const U = M.trim();
    U && (k((J) => J.map((Y) => Y.id === c ? { ...Y, title: U } : Y)), _ == null || _(c, U)), Se();
  }, Ae = (c, U) => {
    if (c.stopPropagation(), c.key === "Enter") {
      c.preventDefault(), Te(U);
      return;
    }
    c.key === "Escape" && (c.preventDefault(), Se());
  }, Pe = (c) => {
    var U;
    if (Z === c) {
      (U = te.current) == null || U.focus();
      return;
    }
    x(`/chat/${c}`);
  }, Le = (c, U = !1) => Z === c.id ? /* @__PURE__ */ t(
    "div",
    {
      className: "flex min-w-0 items-center gap-2 flex-1",
      onClick: (Y) => {
        var Ne;
        Y.stopPropagation(), (Ne = te.current) == null || Ne.focus();
      },
      children: [
        U && /* @__PURE__ */ e(it, { size: 14, className: "shrink-0" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: te,
            value: M,
            onChange: (Y) => q(Y.target.value),
            onKeyDown: (Y) => Ae(Y, c.id),
            onBlur: () => Te(c.id),
            onClick: (Y) => Y.stopPropagation(),
            className: "w-full bg-transparent px-0 text-sm text-primaryText outline-none",
            maxLength: 80,
            "aria-label": "重命名对话"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2 flex-1", children: [
    U && /* @__PURE__ */ e(it, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: c.title })
  ] }), Re = (c) => {
    S.current = c.clientX, W.current = y, P(!0);
  };
  se(() => {
    if (!L) return;
    const c = 200, U = 440, J = (Ne) => {
      const je = Ne.clientX - S.current, Vt = Math.min(U, Math.max(c, W.current + je));
      D(Vt);
    }, Y = () => {
      P(!1);
    };
    return document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", J), window.addEventListener("mouseup", Y), () => {
      document.body.style.cursor = "", document.body.style.userSelect = "", window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", Y);
    };
  }, [L, y]), se(() => {
    H || D(240);
  }, [H]), se(() => {
    F == null || F(a);
  }, [a, F]), se(() => {
    k([...i]);
  }, [i]), se(() => {
    if (!Z) return;
    const c = window.requestAnimationFrame(() => {
      var U;
      (U = te.current) == null || U.focus();
    });
    return () => {
      window.cancelAnimationFrame(c);
    };
  }, [Z]), se(() => () => {
    re.current !== null && window.clearTimeout(re.current), me.current !== null && window.clearTimeout(me.current);
  }, []);
  const Ue = () => {
    fe(!0), re.current !== null && window.clearTimeout(re.current), re.current = window.setTimeout(() => {
      fe(!1);
    }, 600);
  }, Ce = () => {
    C(!0), me.current !== null && window.clearTimeout(me.current), me.current = window.setTimeout(() => {
      C(!1);
    }, 600);
  };
  se(() => {
    X || b(!1);
  }, [X]);
  const Me = () => {
    b(!0), x("/ai-usage");
  }, ze = ae(() => [
    {
      key: "skills",
      label: "Skill"
    },
    ...N ? [{
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
  ], [m, N]), Ee = (c) => {
    if (u(!1), c.key === "skills") {
      x("/skills");
      return;
    }
    if (c.key === "ai-usage") {
      x("/ai-usage");
      return;
    }
    if (c.key === "members") {
      x("/members");
      return;
    }
    if (c.key === "system-settings") {
      x("/system-settings");
      return;
    }
    c.key === "logout" && ue();
  }, Be = ae(() => g.delete ? [{ key: "delete", label: "删除", icon: /* @__PURE__ */ e(Bt, { size: 14 }), danger: !0 }] : [], [g.delete]), De = (c) => {
    const U = [];
    return g.rename && U.push({ key: "rename", label: "重命名", icon: /* @__PURE__ */ e(hr, { size: 14 }) }), g.share && U.push({ key: "share", label: "分享对话", icon: /* @__PURE__ */ e(xr, { size: 14 }) }), g.pin && U.push({
      key: "pin",
      label: c.isPinned ? "取消置顶" : "置顶对话",
      icon: /* @__PURE__ */ e(it, { size: 14 })
    }), U;
  }, Fe = (c, U) => {
    const J = $t(c);
    return !ie && !J ? null : /* @__PURE__ */ t("div", { className: `relative shrink-0 flex h-5 w-5 items-center justify-center ${J ? "ml-6" : "ml-2"}`, children: [
      J && !U && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0", children: "任务" }),
      ie && /* @__PURE__ */ e(
        Je,
        {
          open: U,
          onOpenChange: (Y) => Q(Y ? c.id : null),
          placement: "bottom-end",
          width: Math.max(140, Math.min(176, y - 56)),
          trigger: /* @__PURE__ */ e(pr, { size: 14 }),
          onTriggerClick: (Y) => {
            Y.stopPropagation();
          },
          items: De(c),
          footerItems: Be,
          onItemClick: (Y, Ne) => {
            if (Ne.stopPropagation(), Y.key === "rename") {
              V(c);
              return;
            }
            if (Y.key === "share") {
              T ? T(c.id) : x(`/chat/${c.id}?share=1`), Q(null);
              return;
            }
            if (Y.key === "pin") {
              $(c.id);
              return;
            }
            if (Y.key === "delete") {
              ce(c.id);
              return;
            }
            Q(null);
          },
          triggerClassName: `h-5 w-5 items-center justify-center ${U ? "inline-flex" : "hidden group-hover:inline-flex"}`,
          className: "relative z-40",
          menuClassName: "!min-w-0 !right-[-6px]"
        }
      )
    ] });
  }, Wt = [
    {
      label: "项目",
      icon: /* @__PURE__ */ e(ot, { size: 14 }),
      path: "/projects",
      isActive: r === "/projects" || r.startsWith("/projects/")
    },
    {
      label: "任务",
      icon: /* @__PURE__ */ e(xt, { size: 14 }),
      path: "/tools",
      isActive: r === "/tools" || r.startsWith("/tool/")
    }
  ], rt = ae(() => {
    const c = r.match(/^\/chat\/([^/]+)$/);
    return c ? a.find((U) => U.id === c[1]) ?? null : null;
  }, [a, r]), nt = ae(
    () => a.filter((c) => c.isPinned),
    [a]
  ), gt = ae(
    () => a.filter((c) => !c.isPinned),
    [a]
  ), He = ae(
    () => O === "time" ? nt.slice(0, Mt) : nt,
    [nt, O]
  ), at = ae(() => {
    if (O !== "time") return [];
    const c = Math.max(Mt - He.length, 0);
    return gt.slice(0, c);
  }, [O, gt, He.length]), qt = ae(
    () => He.length + at.length,
    [He.length, at.length]
  ), Ut = O === "time" && a.length > qt, st = ae(() => new Map(n.map((c) => [c.id, c.name])), [n]), lt = de.trim().toLowerCase(), yt = ae(() => lt ? a.filter((c) => {
    const U = c.projectId ? st.get(c.projectId) ?? "未分组" : "未分组";
    return `${c.title} ${U} ${c.date}`.toLowerCase().includes(lt);
  }) : a, [a, lt, st]);
  se(() => {
    if (!rt) return;
    const c = rt.projectId ?? "unassigned";
    z((U) => U[c] !== !1 ? U : { ...U, [c]: !0 });
  }, [rt]);
  const Xt = () => {
    he(""), K(!0);
  }, Kt = () => {
    K(!1), C(!1), me.current !== null && (window.clearTimeout(me.current), me.current = null);
  }, Gt = (c) => {
    K(!1), x(`/chat/${c}`);
  };
  return /* @__PURE__ */ t("div", { className: "flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative", children: [
    /* @__PURE__ */ t(
      "aside",
      {
        style: { width: H ? y : 0 },
        className: `relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${H ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: { width: y, minWidth: y },
              className: "flex h-full flex-col",
              children: [
                /* @__PURE__ */ t("div", { className: "mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]", children: [
                  /* @__PURE__ */ t("div", { className: "-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1", onClick: () => x("/chat/new"), children: [
                    /* @__PURE__ */ e("img", { src: l, alt: "Helia Logo", className: "h-[20px] w-[20px] shrink-0 flex-shrink-0", style: { display: "flex", alignItems: "center" } }),
                    /* @__PURE__ */ e("span", { className: "text-[18px] font-bold text-primaryText tracking-tight truncate leading-none", children: "Helia" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-0 shrink-0", children: /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: () => A(!1),
                      "aria-label": "收起边栏",
                      className: "rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight",
                      children: /* @__PURE__ */ e(cr, { size: 16 })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-0 mb-0.5 mt-0.5", children: /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => x("/chat/new"),
                    className: `nav-item ${r === "/chat/new" ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                    children: [
                      /* @__PURE__ */ e(dr, { size: 14 }),
                      /* @__PURE__ */ e("span", { children: "发起新对话" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "px-0 flex flex-col gap-0.5 mb-4", children: Wt.map((c) => {
                  const U = c.isActive;
                  return /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => x(c.path),
                      className: `nav-item ${U ? "bg-shellNavActive text-primaryText" : "text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
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
                    onScroll: Ue,
                    className: `flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${pe ? "is-scrolling is-scrolling-thin" : ""}`,
                    children: [
                      /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5", children: /* @__PURE__ */ e("div", { className: "flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText", children: /* @__PURE__ */ e("span", { className: "opacity-60", children: "近期对话" }) }) }),
                      He.length > 0 && /* @__PURE__ */ t("div", { className: "mb-1", children: [
                        /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: He.map((c) => {
                          const U = r === `/chat/${c.id}`, J = G === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => Pe(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : U ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Le(c, O !== "time"),
                                Z !== c.id && Fe(c, J)
                              ]
                            }
                          ) }, c.id);
                        }) }),
                        /* @__PURE__ */ e("div", { className: "mx-[10px] my-2 border-t border-shellDivider" })
                      ] }),
                      O === "project" && n.map((c) => {
                        const U = a.filter((Y) => Y.projectId === c.id && !Y.isPinned), J = B[c.id] !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ye(c.id),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(ot, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: J ? /* @__PURE__ */ e(Ze, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Qe, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: c.name })
                              ]
                            }
                          ),
                          J && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: U.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : U.map((Y) => {
                            const Ne = r === `/chat/${Y.id}`, je = G === Y.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => Pe(Y.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === Y.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Ne ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Le(Y),
                                  Z !== Y.id && Fe(Y, je)
                                ]
                              }
                            ) }, Y.id);
                          }) })
                        ] }, c.id);
                      }),
                      O === "project" && (() => {
                        const c = a.filter((J) => !J.projectId && !J.isPinned);
                        if (c.length === 0) return null;
                        const U = B.unassigned !== !1;
                        return /* @__PURE__ */ t("div", { className: "mb-0.5 mt-1", children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors",
                              onClick: () => ye("unassigned"),
                              children: [
                                /* @__PURE__ */ t("div", { className: "relative h-[14px] w-[14px] shrink-0", children: [
                                  /* @__PURE__ */ e(ot, { size: 14, className: "text-secondaryText transition-opacity group-hover:opacity-0" }),
                                  /* @__PURE__ */ e("span", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: U ? /* @__PURE__ */ e(Ze, { size: 14, className: "text-secondaryText" }) : /* @__PURE__ */ e(Qe, { size: 14, className: "text-secondaryText" }) })
                                ] }),
                                /* @__PURE__ */ e("span", { className: "truncate", children: "未分组对话" })
                              ]
                            }
                          ),
                          U && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5 mt-0.5", children: c.length === 0 ? /* @__PURE__ */ e("div", { className: "mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint", children: "暂无对话" }) : c.map((J) => {
                            const Y = r === `/chat/${J.id}`, Ne = G === J.id;
                            return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                              "div",
                              {
                                onClick: () => Pe(J.id),
                                className: `mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === J.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : Y ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                                children: [
                                  Le(J),
                                  Z !== J.id && Fe(J, Ne)
                                ]
                              }
                            ) }, J.id);
                          }) })
                        ] });
                      })(),
                      O === "time" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
                        at.map((c) => {
                          const U = r === `/chat/${c.id}`, J = G === c.id;
                          return /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ t(
                            "div",
                            {
                              onClick: () => Pe(c.id),
                              className: `mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${Z === c.id ? "border border-shellChatEditBorder bg-bgLight font-normal text-primaryText" : U ? "bg-shellNavActive font-normal text-primaryText" : "font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText"}`,
                              children: [
                                Le(c),
                                Z !== c.id && Fe(c, J)
                              ]
                            }
                          ) }, c.id);
                        }),
                        Ut && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: Xt,
                            className: "mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText",
                            children: [
                              /* @__PURE__ */ e("span", { children: "查看全部对话" }),
                              /* @__PURE__ */ e(Qe, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                X && !s && /* @__PURE__ */ e("div", { className: "mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning", children: /* @__PURE__ */ e(ur, { size: 15, style: { fill: "var(--chatui-color-status-warning)", stroke: "var(--chatui-color-static-white)" } }) }),
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
                  Je,
                  {
                    open: o,
                    onOpenChange: u,
                    placement: "top-start",
                    width: y - 24,
                    portal: !0,
                    trigger: /* @__PURE__ */ t("span", { className: "flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText", children: [
                      /* @__PURE__ */ t("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white", children: d.avatarUrl ? /* @__PURE__ */ e("img", { src: d.avatarUrl, alt: `${d.name}头像`, className: "h-full w-full object-cover" }) : d.avatarText }),
                        /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: d.name })
                      ] }),
                      /* @__PURE__ */ e("span", { className: "p-1 rounded-full", children: /* @__PURE__ */ e(mr, { size: 18 }) })
                    ] }),
                    items: ze,
                    onItemClick: Ee,
                    triggerClassName: "w-full justify-start",
                    className: "w-full",
                    menuClassName: "!min-w-0"
                  }
                ) })
              ]
            }
          ),
          H && /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "调整侧边栏宽度",
              onMouseDown: Re,
              className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e("main", { className: `flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${H ? "pl-0 md:pl-0" : "pl-2 md:pl-3"}`, children: /* @__PURE__ */ e("div", { className: "relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl", children: /* @__PURE__ */ e("div", { className: "flex h-full w-full", children: typeof f == "function" ? f({ isSidebarOpen: H, setIsSidebarOpen: A, chats: a, setChats: k, setAiUsageWarningActive: ne }) : f }) }) }),
    /* @__PURE__ */ e(
      bt,
      {
        visible: E,
        title: "全部历史对话",
        width: 640,
        footer: null,
        onCancel: Kt,
        className: "!overflow-y-hidden",
        bodyClassName: "!overflow-hidden !px-6 !py-5",
        children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              qe,
              {
                size: 14,
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: de,
                onChange: (c) => he(c.target.value),
                placeholder: "搜索对话或项目",
                className: "h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
              }
            )
          ] }),
          yt.length > 0 ? /* @__PURE__ */ e(
            "div",
            {
              onScroll: Ce,
              className: `max-h-[440px] overflow-y-auto auto-hide-scrollbar ${le ? "is-scrolling is-scrolling-thin" : ""}`,
              children: yt.map((c) => {
                const U = c.projectId ? st.get(c.projectId) ?? "未分组" : "未分组", J = $t(c);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => Gt(c.id),
                    className: "w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover",
                    children: [
                      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-2", children: [
                        /* @__PURE__ */ e("span", { className: "truncate text-sm font-medium text-primaryText", children: c.title }),
                        J && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText", children: "任务" })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "mt-1 flex items-center gap-1 text-xs text-tertiaryText", children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: U }),
                        /* @__PURE__ */ e("span", { children: "·" }),
                        /* @__PURE__ */ e("span", { children: c.date })
                      ] })
                    ]
                  },
                  c.id
                );
              })
            }
          ) : /* @__PURE__ */ e("div", { className: "rounded-lg border border-dashed border-borderSoft", children: /* @__PURE__ */ e(It, { description: "暂无匹配的历史对话" }) })
        ] })
      }
    )
  ] });
}
function Ea({
  projects: r,
  selectedProjectId: n,
  disabled: i = !1,
  embedded: l = !1,
  isSidebarOpen: d = !0,
  skillOptions: f,
  fileOptions: p,
  quickPrompts: h,
  uploadAccept: N,
  validateUploadFile: m,
  onUploadValidationError: g,
  onSelectProject: x,
  onCreateProject: w,
  onOpenSidebar: F,
  onSend: _
}) {
  const [I, T] = v(!1), [R, H] = v(!1), [A, y] = v(""), D = ee(null), L = ee(null), P = ae(
    () => r.find((a) => a.id === n) ?? null,
    [r, n]
  ), S = ae(() => [
    {
      key: "none",
      label: "不选择项目",
      active: !P
    },
    ...r.map((a) => ({
      key: a.id,
      label: /* @__PURE__ */ e("span", { className: "truncate", children: a.name }),
      active: (P == null ? void 0 : P.id) === a.id
    }))
  ], [r, P]), W = ae(() => w ? [{ key: "create", label: "新建项目", icon: /* @__PURE__ */ e(ft, { size: 16 }) }] : [], [w]), B = () => {
    H(!1), y("");
  }, z = (a) => {
    if (a.key === "create") {
      H(!0), y("");
      return;
    }
    const k = a.key === "none" ? null : String(a.key);
    x(k), T(!1);
  }, o = () => {
    const a = A.trim();
    if (!a) return;
    const k = r.find(
      (G) => G.name.trim().toLowerCase() === a.toLowerCase()
    );
    k ? x(k.id) : w == null || w(a), B(), T(!1);
  };
  se(() => {
    if (!R) return;
    const a = (k) => {
      var Q, O;
      const G = k.target;
      (Q = L.current) != null && Q.contains(G) || (O = D.current) != null && O.contains(G) || (B(), T(!1));
    };
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, [R]);
  const u = /* @__PURE__ */ t("div", { className: "mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6", children: [
    /* @__PURE__ */ e(
      "h1",
      {
        className: "mb-10 text-5xl tracking-wider text-primaryText",
        style: { fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' },
        children: "研究，由此开始"
      }
    ),
    /* @__PURE__ */ t("div", { className: "mx-auto mb-6 w-full max-w-[840px]", children: [
      /* @__PURE__ */ e("div", { ref: D, className: "relative", children: R && /* @__PURE__ */ e(
        "div",
        {
          ref: L,
          className: "absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup",
          children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "mb-1.5 text-sm font-semibold text-primaryText", children: "新建项目" }),
              /* @__PURE__ */ e(
                jt,
                {
                  value: A,
                  onChange: (a) => y(a.target.value),
                  placeholder: "请输入项目名称",
                  size: "medium",
                  containerClassName: "!px-3"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ e(_e, { type: "secondary", size: "small", onClick: B, children: "取消" }),
              /* @__PURE__ */ e(
                _e,
                {
                  type: "primary",
                  size: "small",
                  onClick: o,
                  disabled: !A.trim(),
                  children: "确认"
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(
        Ft,
        {
          onSend: _,
          disabled: i,
          skillOptions: f,
          fileOptions: p,
          uploadAccept: N,
          validateUploadFile: m,
          onUploadValidationError: g,
          leadingControls: /* @__PURE__ */ e(
            Je,
            {
              open: I,
              onOpenChange: (a) => {
                !a && R || (T(a), a ? H(!1) : B());
              },
              placement: "top-start",
              width: 260,
              trigger: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight", children: [
                /* @__PURE__ */ e("span", { className: "max-w-[120px] truncate", children: P ? P.name : "工作项目" }),
                /* @__PURE__ */ e(Ze, { size: 14 })
              ] }),
              items: S,
              footerItems: W,
              onItemClick: z,
              className: "!inline-flex",
              listClassName: "max-h-[220px] overflow-y-auto"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ e(Ht, { onSelect: _, prompts: h })
  ] });
  return l ? u : /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col bg-white", children: [
    /* @__PURE__ */ e(
      kn,
      {
        isSidebarOpen: d,
        onOpenSidebar: F ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex min-h-0 w-full flex-1 overflow-hidden", children: u })
  ] });
}
const Rn = "_preview_100u9_1", Dn = "_editor_100u9_2", Fn = {
  preview: Rn,
  editor: Dn
}, Hn = "_shell_t1vrf_1", Wn = "_header_t1vrf_5", qn = "_closeButton_t1vrf_9", Un = "_breadcrumb_t1vrf_13", Xn = "_projectName_t1vrf_17", Kn = "_separator_t1vrf_21", Gn = "_fileName_t1vrf_25", Vn = "_headerActions_t1vrf_29", On = "_saveError_t1vrf_33", Yn = "_viewport_t1vrf_37", Qn = "_editorCanvas_t1vrf_41", Zn = "_titleInput_t1vrf_45", Jn = "_milkdownHost_t1vrf_49", ke = {
  shell: Hn,
  header: Wn,
  closeButton: qn,
  breadcrumb: Un,
  projectName: Xn,
  separator: Kn,
  fileName: Gn,
  headerActions: Vn,
  saveError: On,
  viewport: Yn,
  editorCanvas: Qn,
  titleInput: Zn,
  milkdownHost: Jn
}, ea = {
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
}, ta = (r, n) => r.replace("<svg", `<svg class="${n}"`), ut = (r) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="3" y="23" fill="currentColor" font-family="inherit" font-size="23" font-weight="500">
      H<tspan font-size="13">${r}</tspan>
    </text>
  </svg>
`, ra = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <text x="2" y="23" fill="currentColor" font-family="inherit" font-size="24" font-weight="400">{ }</text>
  </svg>
`, na = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" />
    <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`, mt = (r) => `chatui-document-menu-type-${r}`, aa = {
  disabled: /* @__PURE__ */ e(gr, { size: 14 }),
  pending: /* @__PURE__ */ e(xt, { size: 14 }),
  indexed: /* @__PURE__ */ e(Xe, { size: 14 })
};
function Ba({
  projectName: r,
  title: n,
  initialMarkdown: i = "",
  updatedAt: l,
  index: d,
  attachments: f = [],
  attachmentAccept: p,
  attachmentUnavailableHint: h,
  saving: N = !1,
  saveError: m,
  onTitleChange: g,
  onMarkdownChange: x,
  onOpenAttachment: w,
  onUploadAttachments: F,
  onDeleteAttachment: _,
  onSave: I,
  onClose: T
}) {
  const R = ee(null), H = ee(null), A = ee(i), y = ee(x), [D, L] = v(!1), [P, S] = v(null), [W, B] = v("");
  se(() => {
    y.current = x;
  }, [x]), se(() => {
    const a = R.current;
    if (!a) return;
    const k = new ct({
      root: a,
      defaultValue: A.current,
      features: {
        [ct.Feature.Placeholder]: !1
      },
      featureConfigs: {
        [ct.Feature.BlockEdit]: {
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
            image: { label: "图片" },
            codeBlock: { label: "代码块" },
            table: { label: "表格" },
            math: { label: "公式" }
          },
          buildMenu: (E) => {
            const K = new Map(
              E.build().flatMap((C) => C.items).map((C) => [C.key, C])
            ), de = (C, oe, ne) => {
              const s = K.get(oe);
              if (!s) return;
              const { key: b, ...X } = s, te = (ne == null ? void 0 : ne.icon) ?? X.icon, re = [
                mt(oe),
                ne == null ? void 0 : ne.iconClass
              ].filter(Boolean).join(" ");
              C.addItem(oe, {
                ...X,
                label: (ne == null ? void 0 : ne.label) ?? X.label,
                icon: ta(te, re)
              });
            };
            E.clear();
            const he = E.addGroup("basic", "基础");
            [
              {
                key: "h1",
                icon: ut(1),
                label: `一级标题 (Ctrl + Alt + 1)
Markdown: # 空格`
              },
              {
                key: "h2",
                icon: ut(2),
                label: `二级标题 (Ctrl + Alt + 2)
Markdown: ## 空格`
              },
              {
                key: "h3",
                icon: ut(3),
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
                icon: ra,
                label: "代码块\nMarkdown: ``` 空格"
              },
              {
                key: "quote",
                label: `引用
Markdown: > 空格`
              },
              {
                key: "divider",
                icon: na,
                label: `分割线
Markdown: --- 空格`
              }
            ].forEach(({ key: C, icon: oe, label: ne }) => {
              de(he, C, { icon: oe, label: ne });
            });
            const le = E.addGroup("common", "常用");
            de(le, "task-list", {
              iconClass: "chatui-document-menu-icon-task"
            }), de(le, "image", {
              iconClass: "chatui-document-menu-icon-image"
            }), de(le, "table", {
              iconClass: "chatui-document-menu-icon-table"
            }), de(le, "math", {
              iconClass: "chatui-document-menu-icon-math"
            });
          }
        }
      }
    });
    k.on((E) => {
      E.markdownUpdated((K, de, he) => {
        de !== he && y.current(de);
      });
    });
    const G = a.ownerDocument;
    let Q = "", O = null;
    const ge = (E) => {
      const K = E == null ? void 0 : E.closest(
        "h1, h2, h3, blockquote, pre, .milkdown-list-item-block"
      );
      return !K || !K.closest(".ProseMirror") ? null : K.matches("h1") ? "h1" : K.matches("h2") ? "h2" : K.matches("h3") ? "h3" : K.matches("blockquote") ? "quote" : K.matches("pre") ? "code" : K.querySelector('input[type="checkbox"]') ? "task-list" : K.querySelector(".label.ordered") ? "ordered-list" : K.querySelector(".label.bullet") ? "bullet-list" : null;
    }, pe = (E) => {
      var C, oe;
      const K = G.querySelector(
        ".milkdown-slash-menu"
      );
      K == null || K.querySelectorAll("li.chatui-selected").forEach((ne) => ne.classList.remove("chatui-selected")), E && ((oe = (C = K == null ? void 0 : K.querySelector(`svg.${mt(E)}`)) == null ? void 0 : C.closest("li")) == null || oe.classList.add("chatui-selected"));
      const de = G.querySelector(
        ".milkdown-block-handle .operation-item:first-child .milkdown-icon"
      );
      if (!de) return;
      Q || (Q = de.innerHTML);
      const he = E ? K == null ? void 0 : K.querySelector(
        `svg.${mt(E)}`
      ) : null, le = E ?? "default";
      de.dataset.chatuiBlockType !== le && (de.innerHTML = (he == null ? void 0 : he.outerHTML) ?? Q, de.dataset.chatuiBlockType = le);
    }, fe = () => {
      var he;
      const E = (he = G.getSelection()) == null ? void 0 : he.anchorNode, K = E instanceof Element ? E : E == null ? void 0 : E.parentElement, de = ge(K ?? null);
      O = de, pe(de);
    }, Z = (E) => {
      const K = E.target instanceof Element ? E.target : null;
      if (K != null && K.closest(".milkdown-block-handle")) {
        pe(O);
        return;
      }
      K != null && K.closest(".ProseMirror") && (O = ge(K), pe(O));
    }, j = (E) => {
      const K = E.target instanceof Element ? E.target : null;
      K != null && K.closest(
        ".milkdown-block-handle .operation-item:first-child"
      ) && window.setTimeout(fe, 0);
    }, M = (E) => {
      E.key === "/" && window.setTimeout(fe, 0);
    };
    G.addEventListener("pointermove", Z), G.addEventListener("pointerup", j), a.addEventListener("keyup", M);
    const q = k.create();
    return q.then(() => {
      var E;
      (E = a.querySelector(".ProseMirror")) == null || E.focus(), fe();
    }), () => {
      G.removeEventListener("pointermove", Z), G.removeEventListener("pointerup", j), a.removeEventListener("keyup", M), q.then(() => k.destroy());
    };
  }, []);
  const z = async (a) => {
    const k = Array.from(a.target.files ?? []);
    if (a.target.value = "", !(!k.length || !F)) {
      L(!0), B("");
      try {
        await F(k);
      } catch (G) {
        B(
          G instanceof Error ? G.message : "附件上传失败"
        );
      } finally {
        L(!1);
      }
    }
  }, o = async (a) => {
    if (_) {
      S(a), B("");
      try {
        await _(a);
      } catch (k) {
        B(
          k instanceof Error ? k.message : "附件删除失败"
        );
      } finally {
        S(null);
      }
    }
  }, u = n.trim() || "未命名文档";
  return /* @__PURE__ */ t("section", { className: ke.shell, "aria-label": "项目文档编辑器", children: [
    /* @__PURE__ */ t("header", { className: ke.header, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: ke.closeButton,
          onClick: T,
          "aria-label": "关闭文档编辑器",
          title: "关闭",
          children: /* @__PURE__ */ e(We, { size: 20 })
        }
      ),
      /* @__PURE__ */ t("div", { className: ke.breadcrumb, children: [
        /* @__PURE__ */ e("span", { className: ke.projectName, children: r }),
        /* @__PURE__ */ e("span", { className: ke.separator, "aria-hidden": "true", children: "/" }),
        /* @__PURE__ */ e("span", { className: ke.fileName, children: u })
      ] }),
      /* @__PURE__ */ t("div", { className: ke.headerActions, children: [
        m && /* @__PURE__ */ e("span", { className: ke.saveError, children: m }),
        /* @__PURE__ */ e(
          _e,
          {
            type: "primary",
            size: "small",
            rounded: "large",
            disabled: N,
            onClick: I,
            children: N ? "保存中…" : "保存"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `${ke.viewport} min-h-0 px-4 pb-8 pt-4 md:px-8 md:pt-6 lg:px-10`,
        children: /* @__PURE__ */ t("div", { className: ke.editorCanvas, children: [
          /* @__PURE__ */ t("section", { className: "mb-4 shrink-0 px-[120px]", children: [
            /* @__PURE__ */ e(
              "input",
              {
                value: n,
                onChange: (a) => g(a.target.value),
                placeholder: "请输入标题",
                className: ke.titleInput,
                "aria-label": "文档标题"
              }
            ),
            (l || d) && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText", children: [
              l && /* @__PURE__ */ t("span", { children: [
                "最近修改: ",
                l
              ] }),
              d && /* @__PURE__ */ t(
                "span",
                {
                  className: "inline-flex items-center gap-1.5",
                  title: d.detail,
                  children: [
                    aa[d.status],
                    d.statusLabel
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "mt-4 h-px bg-lineSubtle" })
          ] }),
          /* @__PURE__ */ t("section", { className: "auto-hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-1", children: [
            /* @__PURE__ */ e(
              "div",
              {
                ref: R,
                className: `${ke.milkdownHost} ${Fn.editor} chatui-project-document-editor`,
                style: ea
              }
            ),
            /* @__PURE__ */ t("div", { className: "mx-[120px] mb-6 mt-8 border-t border-lineSubtle pt-6", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ e("div", { className: "text-sm font-medium text-primaryText", children: "附件" }),
                F && /* @__PURE__ */ t($e, { children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      ref: H,
                      type: "file",
                      multiple: !0,
                      accept: p,
                      className: "hidden",
                      onChange: (a) => {
                        z(a);
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    _e,
                    {
                      type: "secondary",
                      size: "small",
                      disabled: D,
                      onClick: () => {
                        var a;
                        return (a = H.current) == null ? void 0 : a.click();
                      },
                      children: /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5", children: [
                        D ? /* @__PURE__ */ e(Ye, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ e(fr, { size: 14 }),
                        D ? "上传中" : "上传附件"
                      ] })
                    }
                  )
                ] })
              ] }),
              f.length ? /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-2.5", children: f.map((a) => {
                const k = P === a.id;
                return /* @__PURE__ */ t(
                  "div",
                  {
                    className: "inline-flex max-w-full items-center rounded-full border border-lineSubtle bg-surface text-sm text-secondaryText",
                    title: `${a.statusLabel} · ${a.sizeLabel}`,
                    children: [
                      /* @__PURE__ */ t(
                        "button",
                        {
                          type: "button",
                          onClick: () => w == null ? void 0 : w(a.id),
                          className: "inline-flex min-w-0 items-center gap-2 rounded-l-full py-1.5 pl-3 pr-2 transition-colors hover:text-primaryText",
                          children: [
                            /* @__PURE__ */ e(ht, { size: 14, className: "shrink-0" }),
                            /* @__PURE__ */ e("span", { className: "max-w-72 truncate", children: a.name }),
                            /* @__PURE__ */ e("span", { className: "text-xs text-tertiaryText", children: a.sizeLabel }),
                            a.status === "processing" ? /* @__PURE__ */ e(Ye, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ e(br, { size: 13 })
                          ]
                        }
                      ),
                      _ && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          disabled: k,
                          onClick: () => {
                            o(a.id);
                          },
                          className: "mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-tertiaryText transition-colors hover:bg-bgLight hover:text-danger disabled:cursor-wait",
                          "aria-label": `删除附件 ${a.name}`,
                          title: "删除附件",
                          children: k ? /* @__PURE__ */ e(Ye, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ e(Bt, { size: 13 })
                        }
                      )
                    ]
                  },
                  a.id
                );
              }) }) : /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-tertiaryText", children: "暂无附件" }),
              h && /* @__PURE__ */ e("p", { className: "mt-2 text-xs text-tertiaryText", children: h }),
              W && /* @__PURE__ */ e("p", { role: "alert", className: "mt-2 text-sm text-danger", children: W })
            ] })
          ] })
        ] })
      }
    )
  ] });
}
const sa = { low: "低风险", medium: "中风险", high: "高风险" }, la = {
  low: "bg-skillRiskLow text-primary",
  medium: "bg-skillRiskMedium text-warning",
  high: "bg-danger-soft text-danger"
};
function ja({
  isSidebarOpen: r,
  skills: n,
  loading: i = !1,
  error: l,
  pendingSkillIds: d = [],
  onOpenSidebar: f,
  onCreateSkill: p,
  onInstall: h,
  onUninstall: N,
  onRetry: m
}) {
  const [g, x] = v("installed"), [w, F] = v(""), [_, I] = v(!1), [T, R] = v([]), [H, A] = v(null), y = ae(() => new Set(d), [d]), D = ae(() => {
    const z = w.trim().toLowerCase();
    return n.filter((o) => g === "installed" !== o.installed ? !1 : z ? [o.name, o.source, o.description, ...o.tags].join(" ").toLowerCase().includes(z) : !0);
  }, [g, w, n]), L = (z) => {
    x(z), I(!1), R([]);
  }, P = () => {
    I((z) => !z), R([]);
  }, S = (z) => R((o) => o.includes(z) ? o.filter((u) => u !== z) : [...o, z]), W = (z) => z.installed ? N([z.id]) : h([z.id]), B = () => {
    T.length && (g === "installed" ? N(T) : h(T), R([]), I(!1));
  };
  return /* @__PURE__ */ t("div", { className: "relative flex h-full w-full flex-col bg-surface", children: [
    /* @__PURE__ */ t("header", { className: "z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex min-w-0 items-center gap-3", children: [
        !r && /* @__PURE__ */ e("button", { type: "button", onClick: f, className: "-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight", title: "展开边栏", children: /* @__PURE__ */ e(Et, { size: 20 }) }),
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
            /* @__PURE__ */ e(ft, { size: 14 }),
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
          /* @__PURE__ */ e(qe, { size: 16, className: "text-tertiaryText" }),
          /* @__PURE__ */ e("input", { value: w, onChange: (z) => F(z.target.value), placeholder: "输入关键词，查找你需要的 Skills", className: "w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-5", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between border-b border-lineSubtle", children: [
          /* @__PURE__ */ t("div", { className: "flex items-end gap-8", children: [
            /* @__PURE__ */ e("button", { type: "button", onClick: () => L("installed"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${g === "installed" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "已安装" }),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => L("uninstalled"), className: `border-b-2 pb-2 text-sm font-medium transition-colors ${g === "uninstalled" ? "border-primary text-primaryText" : "border-transparent text-tertiaryText"}`, children: "未安装" })
          ] }),
          /* @__PURE__ */ t("label", { className: "mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText", children: [
            /* @__PURE__ */ t("span", { className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", checked: _, onChange: (z) => {
                I(z.target.checked), R([]);
              }, className: "peer absolute inset-0 cursor-pointer opacity-0" }),
              /* @__PURE__ */ e("span", { className: "pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white", children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            "批量操作"
          ] })
        ] }),
        l && /* @__PURE__ */ t("div", { role: "alert", className: "mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger", children: [
          /* @__PURE__ */ e("span", { children: l }),
          m && /* @__PURE__ */ e("button", { type: "button", className: "font-medium underline", onClick: m, children: "重新加载" })
        ] }),
        !l && i && /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-label": "正在加载 Skills", "aria-busy": "true", children: Array.from({ length: 6 }, (z, o) => /* @__PURE__ */ e("div", { className: "h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" }, o)) }),
        !l && !i && D.length ? /* @__PURE__ */ e("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", "aria-busy": d.length > 0, children: D.map((z) => {
          const o = T.includes(z.id), u = y.has(z.id), a = o ? "border-skillSelectedBorder bg-skillSelectedSurface" : H === z.id ? "border-lineSubtle bg-skillCardHover" : "border-lineSubtle bg-surface";
          return /* @__PURE__ */ t("article", { className: `rounded-lg border p-4 transition-shadow hover:shadow-sm ${a}`, onMouseEnter: () => A(z.id), onMouseLeave: () => A((k) => k === z.id ? null : k), children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e("div", { className: "truncate text-base font-medium text-primaryText", children: z.name }),
                /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-tertiaryText", children: z.source })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `rounded px-2 py-1 text-xs font-medium ${la[z.riskLevel]}`, children: sa[z.riskLevel] }),
                _ && /* @__PURE__ */ e("button", { type: "button", onClick: () => S(z.id), className: "relative inline-flex h-4 w-4 items-center justify-center rounded-sm", "aria-label": o ? `取消选择 ${z.name}` : `选择 ${z.name}`, children: /* @__PURE__ */ e("span", { className: `pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${o ? "border-transparent bg-primary text-white" : "border-skillCheckbox bg-surface text-transparent"}`, children: /* @__PURE__ */ e("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3.5 8.2L6.5 11.1L12.5 5.1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-3 line-clamp-2 text-sm leading-6 text-secondaryText", children: z.description }),
            /* @__PURE__ */ t("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: z.tags.map((k) => /* @__PURE__ */ e("span", { className: "inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText", children: k }, `${z.id}-${k}`)) }),
              !_ && /* @__PURE__ */ e("button", { type: "button", disabled: u, onClick: () => W(z), className: `shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${H === z.id || u ? "inline-flex" : "hidden"} ${z.installed ? "bg-skillTagSurface text-primaryText" : "bg-primary text-white"}`, children: u ? "处理中..." : z.installed ? "卸载" : "安装" })
            ] })
          ] }, z.id);
        }) }) : !l && !i ? /* @__PURE__ */ e("div", { className: "mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText", children: "暂无匹配的 Skills" }) : null
      ] })
    ] }) }),
    _ && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface", children: /* @__PURE__ */ t("div", { className: "pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10", children: [
      /* @__PURE__ */ t("span", { className: "text-sm text-secondaryText", children: [
        "已选择 ",
        T.length,
        " 条 Skill"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: P, disabled: d.length > 0, className: "rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60", children: "取消" }),
        /* @__PURE__ */ e("button", { type: "button", onClick: B, disabled: !T.length || d.length > 0, className: "rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled", children: d.length > 0 ? "处理中..." : g === "installed" ? "批量卸载" : "批量安装" })
      ] })
    ] }) })
  ] });
}
export {
  Pa as A,
  rn as B,
  An as C,
  wa as D,
  Pn as E,
  Aa as F,
  $a as G,
  Ma as H,
  Ft as I,
  _n as J,
  zn as K,
  za as L,
  Dt as M,
  Ba as P,
  Ht as Q,
  _a as R,
  ja as S,
  pt as T,
  Je as a,
  _e as b,
  ga as c,
  on as d,
  bt as e,
  jt as f,
  It as g,
  cn as h,
  sn as i,
  ba as j,
  Kr as k,
  Sn as l,
  Fn as m,
  En as n,
  La as o,
  Mn as p,
  ya as q,
  Nn as r,
  Ea as s,
  Ca as t,
  Sa as u,
  Ta as v,
  ka as w,
  va as x,
  kn as y,
  Na as z
};
