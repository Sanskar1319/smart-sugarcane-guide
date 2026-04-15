import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-BJHXwJTK.js";
import { L as Layout } from "./Layout-31CzHDvD.js";
import { u as usePredictionStore } from "./prediction-store-DS6XHYC3.js";
import { c as createLucideIcon, u as useTranslation, m as motion } from "./proxy-CBnkwJ4B.js";
import { C as CircleCheck, a as CircleX } from "./circle-x-CaHRiQBQ.js";
import { H as History } from "./history-DmyMrrMN.js";
import "./button-CtPmgPdp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
];
const Sprout = createLucideIcon("sprout", __iconNode);
function getStatus(value, type) {
  const ranges = {
    temp: { min: 20, max: 35 },
    humidity: { min: 50, max: 80 },
    rainfall: { min: 1100, max: 1800 }
  };
  const { min, max } = ranges[type];
  if (value < min) return "tooLow";
  if (value > max) return "tooHigh";
  return "optimal";
}
function StatusBadge({
  status
}) {
  const { t } = useTranslation();
  const classes = {
    optimal: "text-primary font-semibold",
    tooHigh: "text-destructive font-semibold",
    tooLow: "text-secondary font-semibold"
  };
  const keys = {
    optimal: "result.optimal",
    tooHigh: "result.tooHigh",
    tooLow: "result.tooLow"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-body text-xs ${classes[status]}`, children: t(keys[status]) });
}
function ResultPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentResult, resetPrediction } = usePredictionStore();
  reactExports.useEffect(() => {
    if (!currentResult) {
      navigate({ to: "/predict" });
    }
  }, [currentResult, navigate]);
  if (!currentResult) return null;
  const isSuitable = currentResult.result === "Suitable";
  const tempStatus = getStatus(currentResult.input.temperature, "temp");
  const humidityStatus = getStatus(currentResult.input.humidity, "humidity");
  const rainfallStatus = getStatus(currentResult.input.rainfall, "rainfall");
  const handleNewPrediction = () => {
    resetPrediction();
    navigate({ to: "/predict" });
  };
  const handleViewHistory = () => {
    navigate({ to: "/history" });
  };
  const recommendations = [
    {
      titleKey: "result.plantingTime",
      content: currentResult.plantingTime,
      Icon: Calendar,
      ocid: "result.planting_card"
    },
    {
      titleKey: "result.fertilizer",
      content: currentResult.fertilizerSuggestion,
      Icon: Sprout,
      ocid: "result.fertilizer_card"
    },
    {
      titleKey: "result.guidance",
      content: currentResult.generalGuidance,
      Icon: Lightbulb,
      ocid: "result.guidance_card"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showHeader: true, headerTitle: t("result.title"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": "result.banner",
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: `flex flex-col items-center gap-3 rounded-xl px-6 py-8 shadow-card ${isSuitable ? "bg-primary" : "bg-destructive"}`,
        children: [
          isSuitable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            CircleCheck,
            {
              className: "h-14 w-14 text-primary-foreground",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            CircleX,
            {
              className: "h-14 w-14 text-destructive-foreground",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: `font-display text-2xl font-extrabold uppercase tracking-wide text-center leading-tight ${isSuitable ? "text-primary-foreground" : "text-destructive-foreground"}`,
              children: isSuitable ? t("result.suitable") : t("result.notSuitable")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `font-body text-sm text-center max-w-xs ${isSuitable ? "text-primary-foreground/80" : "text-destructive-foreground/80"}`,
              children: isSuitable ? t("result.suitableDesc") : t("result.notSuitableDesc")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground", children: t("result.inputSummary") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
            {
              label: t("result.temp"),
              value: `${currentResult.input.temperature}°C`,
              status: tempStatus,
              key: "temp"
            },
            {
              label: t("result.humidity"),
              value: `${currentResult.input.humidity}%`,
              status: humidityStatus,
              key: "humidity"
            },
            {
              label: t("result.rainfall"),
              value: `${currentResult.input.rainfall}mm`,
              status: rainfallStatus,
              key: "rainfall"
            },
            {
              label: t("result.soil"),
              value: currentResult.input.soilType,
              status: "optimal",
              key: "soil"
            }
          ].map(({ label, value, status, key }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `result.summary_${key}`,
              className: `card-elevated p-3 border-l-4 ${isSuitable ? "border-l-primary/60" : "border-l-destructive/60"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground", children: [
                  label,
                  ":",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: value })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    status
                  }
                )
              ]
            },
            key
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground", children: t("result.viewRecommendations") }),
      recommendations.map(({ titleKey, content, Icon, ocid }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          "data-ocid": ocid,
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 + idx * 0.1 },
          className: `card-elevated mb-3 p-4 border-l-4 ${isSuitable ? "border-l-primary" : "border-l-destructive"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${isSuitable ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-bold uppercase tracking-wider text-foreground", children: t(titleKey) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-body text-sm leading-relaxed text-muted-foreground", children: content })
            ] })
          ] })
        },
        titleKey
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.65 },
        className: "flex flex-col gap-3 pt-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "result.new_prediction_button",
              onClick: handleNewPrediction,
              className: "button-primary flex w-full items-center justify-center gap-2 py-4 font-display text-base uppercase tracking-wide",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-5 w-5", "aria-hidden": "true" }),
                t("result.restartPrediction")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "result.view_history_button",
              onClick: handleViewHistory,
              className: "button-secondary flex w-full items-center justify-center gap-2 py-4 font-display text-base uppercase tracking-wide",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-5 w-5", "aria-hidden": "true" }),
                t("nav.history")
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  ResultPage as default
};
