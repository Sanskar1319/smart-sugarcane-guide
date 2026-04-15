import { b as useQueryClient, r as reactExports, j as jsxRuntimeExports, L as Link, c as ue } from "./index-BJHXwJTK.js";
import { u as useActor, b as useQuery, a as useMutation, A as AnimatePresence, c as createActor } from "./backend-DidiFDXl.js";
import { L as Layout } from "./Layout-31CzHDvD.js";
import { c as createLucideIcon, u as useTranslation, m as motion } from "./proxy-CBnkwJ4B.js";
import { L as LoaderCircle } from "./loader-circle-CJkj7ZGh.js";
import { C as CircleCheck, a as CircleX } from "./circle-x-CaHRiQBQ.js";
import { C as ChevronDown } from "./chevron-down-CBrrjoGn.js";
import "./prediction-store-DS6XHYC3.js";
import "./button-CtPmgPdp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
function formatDate(timestamp) {
  const ms = Number(timestamp) / 1e6;
  return new Date(ms).toLocaleDateString(void 0, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function InputChip({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 font-body text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] });
}
function HistoryCard({
  record,
  index,
  deletingId,
  onDelete
}) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = reactExports.useState(false);
  const isSuitable = record.result === "Suitable";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.li,
    {
      "data-ocid": `history.item.${index}`,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: -24 },
      transition: { delay: index * 0.05 },
      className: "card-elevated overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-1 w-full ${isSuitable ? "bg-primary" : "bg-destructive"}`,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex-shrink-0", children: isSuitable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleCheck,
              {
                className: "h-5 w-5 text-primary",
                "aria-hidden": "true"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleX,
              {
                className: "h-5 w-5 text-destructive",
                "aria-hidden": "true"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `font-display text-base font-bold ${isSuitable ? "text-primary" : "text-destructive"}`,
                    children: isSuitable ? t("history.suitable") : t("history.notSuitable")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 font-body text-xs text-muted-foreground", children: formatDate(record.timestamp) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InputChip,
                  {
                    label: t("result.temp"),
                    value: `${record.input.temperature}°C`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InputChip,
                  {
                    label: t("result.humidity"),
                    value: `${record.input.humidity}%`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InputChip,
                  {
                    label: t("result.rainfall"),
                    value: `${record.input.rainfall}mm`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InputChip,
                  {
                    label: t("result.soil"),
                    value: record.input.soilType
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `history.delete_button.${index}`,
                onClick: () => onDelete(record.id),
                disabled: deletingId === record.id,
                "aria-label": t("history.delete"),
                className: "flex-shrink-0 rounded-md p-1.5 text-muted-foreground transition-smooth hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
                children: deletingId === record.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4", "aria-hidden": "true" })
              }
            )
          ] }),
          (record.plantingTime || record.fertilizerSuggestion || record.generalGuidance) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `history.expand_button.${index}`,
                onClick: () => setExpanded((v) => !v),
                className: "mt-3 flex w-full items-center justify-center gap-1 rounded-md border border-border py-1.5 font-body text-xs text-muted-foreground transition-smooth hover:bg-muted/40",
                "aria-expanded": expanded,
                children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                  t("history.hideDetails")
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                  t("history.viewDetails")
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.25 },
                className: "overflow-hidden",
                "data-ocid": `history.details.${index}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 rounded-md bg-muted/40 p-3", children: [
                  record.plantingTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold text-foreground", children: t("result.plantingTime") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: record.plantingTime })
                  ] }),
                  record.fertilizerSuggestion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold text-foreground", children: t("result.fertilizer") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: record.fertilizerSuggestion })
                  ] }),
                  record.generalGuidance && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold text-foreground", children: t("result.guidance") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: record.generalGuidance })
                  ] })
                ] })
              }
            ) })
          ] })
        ] })
      ]
    },
    record.id.toString()
  );
}
function HistoryPage() {
  const { t } = useTranslation();
  const { actor, isFetching: actorLoading } = useActor(createActor);
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = reactExports.useState(null);
  const {
    data: predictions,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["predictions"],
    queryFn: async () => {
      if (!actor) return [];
      const records = await actor.getPredictions();
      return records;
    },
    enabled: !!actor && !actorLoading
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deletePrediction(id);
    },
    onSuccess: (_data, id) => {
      queryClient.setQueryData(
        ["predictions"],
        (old) => (old == null ? void 0 : old.filter((p) => p.id !== id)) ?? []
      );
      ue.success(t("history.deleteSuccess"));
      setDeletingId(null);
      setConfirmDeleteId(null);
    },
    onError: () => {
      ue.error(t("history.deleteError"));
      setDeletingId(null);
      setConfirmDeleteId(null);
    }
  });
  const handleDeleteRequest = (id) => {
    setConfirmDeleteId(id);
  };
  const handleDeleteConfirm = () => {
    if (!confirmDeleteId) return;
    setDeletingId(confirmDeleteId);
    deleteMutation.mutate(confirmDeleteId);
  };
  const sortedPredictions = predictions ? [...predictions].sort((a, b) => Number(b.timestamp) - Number(a.timestamp)) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { showHeader: true, headerTitle: t("history.title"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 font-body text-base text-muted-foreground", children: t("history.subtitle") }),
      (isLoading || actorLoading) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "history.loading_state",
          className: "flex flex-col items-center gap-4 py-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderCircle,
              {
                className: "h-9 w-9 animate-spin text-primary",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground", children: t("history.loading") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "card-elevated h-24 animate-pulse bg-muted/40"
              },
              i
            )) })
          ]
        }
      ),
      isError && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "history.error_state",
          className: "flex flex-col items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-6 py-10 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TriangleAlert,
              {
                className: "h-8 w-8 text-destructive",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold text-foreground", children: t("common.error") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: t("common.retry") })
          ]
        }
      ),
      !isLoading && !actorLoading && !isError && sortedPredictions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": "history.empty_state",
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-muted/40 px-6 py-16 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", role: "img", "aria-label": "chart", children: "📊" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-foreground", children: t("history.empty") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-body text-base text-muted-foreground", children: t("history.emptyDesc") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/predict",
                "data-ocid": "history.start_first_button",
                className: "button-primary flex items-center gap-2 px-6 py-3 text-base",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "aria-hidden": "true" }),
                  t("history.startFirst")
                ]
              }
            )
          ]
        }
      ),
      !isLoading && !actorLoading && !isError && sortedPredictions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "ul",
        {
          className: "flex flex-col gap-3",
          "data-ocid": "history.list",
          "aria-label": t("history.title"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sortedPredictions.map((record, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            HistoryCard,
            {
              record,
              index: idx + 1,
              deletingId,
              onDelete: handleDeleteRequest
            },
            record.id.toString()
          )) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: confirmDeleteId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 sm:items-center",
        onClick: (e) => {
          if (e.target === e.currentTarget) setConfirmDeleteId(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.dialog,
          {
            "data-ocid": "history.dialog",
            "aria-labelledby": "delete-dialog-title",
            open: true,
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 40, opacity: 0 },
            className: "w-full max-w-sm rounded-xl bg-card p-6 shadow-xl backdrop:bg-transparent",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Trash2,
                  {
                    className: "h-5 w-5 text-destructive",
                    "aria-hidden": "true"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "delete-dialog-title",
                    className: "font-display text-base font-bold text-foreground",
                    children: t("history.deleteConfirm")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "history.cancel_button",
                    onClick: () => setConfirmDeleteId(null),
                    className: "flex-1 rounded-lg border border-border py-3 font-body text-base text-foreground transition-smooth hover:bg-muted/40",
                    children: t("history.cancel")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "history.confirm_button",
                    onClick: handleDeleteConfirm,
                    disabled: deletingId === confirmDeleteId,
                    className: "flex-1 rounded-lg bg-destructive py-3 font-body text-base font-medium text-destructive-foreground transition-smooth hover:bg-destructive/90 disabled:opacity-50",
                    children: deletingId === confirmDeleteId ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LoaderCircle,
                      {
                        className: "mx-auto h-5 w-5 animate-spin",
                        "aria-hidden": "true"
                      }
                    ) : t("history.delete")
                  }
                )
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
export {
  HistoryPage as default
};
