import { j as jsxRuntimeExports, a as useInternetIdentity, u as useNavigate, L as Link, i as instance } from "./index-BJHXwJTK.js";
import { L as Layout, B as BookOpen, a as LogOut } from "./Layout-31CzHDvD.js";
import { U as User, u as usePredictionStore } from "./prediction-store-DS6XHYC3.js";
import { c as createLucideIcon, u as useTranslation, m as motion } from "./proxy-CBnkwJ4B.js";
import { H as History } from "./history-DmyMrrMN.js";
import { G as Globe } from "./globe-XNTMrlxi.js";
import "./button-CtPmgPdp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
const MOCK_WEATHER = {
  temperature: 28,
  humidity: 72,
  rainfall: 1200,
  condition: "Partly Cloudy",
  conditionMr: "अंशतः ढगाळ"
};
function HomeAppBar() {
  const { t } = useTranslation();
  const { clear } = useInternetIdentity();
  const { profile, language, setLanguage } = usePredictionStore();
  const navigate = useNavigate();
  const farmerName = profile.name || t("home.greeting.defaultName");
  const handleLogout = () => {
    clear();
    navigate({ to: "/login" });
  };
  const handleLangSwitch = (lang) => {
    setLanguage(lang);
    instance.changeLanguage(lang);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "header-appbar border-b border-primary/20",
      "data-ocid": "home.appbar",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 max-w-lg items-center justify-between gap-3 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-primary-foreground/70 leading-none mb-0.5", children: t("home.greeting.label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-base font-bold text-primary-foreground leading-tight truncate", children: [
            farmerName,
            " 🌾"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex items-center gap-1 rounded-lg bg-primary-foreground/10 p-1",
            "data-ocid": "home.language_toggle_group",
            children: ["en", "mr"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `home.language_${lang}_toggle`,
                onClick: () => handleLangSwitch(lang),
                "aria-pressed": language === lang,
                className: "rounded-md px-2.5 py-1 font-body text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50",
                style: language === lang ? {
                  background: "oklch(0.97 0.02 142)",
                  color: "oklch(0.30 0.13 142)"
                } : { color: "oklch(0.95 0.03 142)" },
                children: lang === "en" ? "EN" : "MR"
              },
              lang
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "home.logout_button",
            onClick: handleLogout,
            "aria-label": t("profile.logout"),
            className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4", "aria-hidden": "true" })
          }
        )
      ] })
    }
  );
}
function WeatherBanner() {
  const { t } = useTranslation();
  const { language } = usePredictionStore();
  const condition = language === "mr" ? MOCK_WEATHER.conditionMr : MOCK_WEATHER.condition;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.15, duration: 0.4 },
      "data-ocid": "home.weather_banner",
      className: "relative overflow-hidden rounded-2xl px-5 py-4 shadow-md",
      style: {
        background: "linear-gradient(135deg, oklch(0.40 0.12 215) 0%, oklch(0.32 0.10 235) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20",
            style: { background: "oklch(0.85 0.08 215)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
              style: { background: "oklch(0.30 0.10 215 / 0.5)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Cloud,
                {
                  className: "h-6 w-6",
                  style: { color: "oklch(0.90 0.05 215)" },
                  "aria-hidden": "true"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-sm font-bold uppercase tracking-wide",
                style: { color: "oklch(0.95 0.03 215)" },
                children: t("home.weatherBanner.title")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-x-3 gap-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-body text-xs",
                  style: { color: "oklch(0.85 0.04 215)" },
                  children: [
                    "🌡 ",
                    MOCK_WEATHER.temperature,
                    "°C"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-body text-xs",
                  style: { color: "oklch(0.85 0.04 215)" },
                  children: [
                    "💧 ",
                    MOCK_WEATHER.humidity,
                    "%"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-body text-xs",
                  style: { color: "oklch(0.85 0.04 215)" },
                  children: [
                    "🌧 ",
                    MOCK_WEATHER.rainfall,
                    "mm"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-0.5 font-body text-xs",
                style: { color: "oklch(0.78 0.05 215)" },
                children: condition
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "home.weather_refresh_button",
              "aria-label": t("home.weatherBanner.refresh"),
              className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              style: { color: "oklch(0.85 0.04 215)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4", "aria-hidden": "true" })
            }
          )
        ] })
      ]
    }
  );
}
const navCards = [
  {
    id: "start-prediction",
    to: "/predict",
    titleKey: "home.cards.startPrediction",
    descKey: "home.cards.startPredictionDesc",
    icon: ChartNoAxesColumn,
    emoji: "🌱",
    ocid: "home.start_prediction_button",
    bg: "oklch(0.38 0.13 142)",
    fg: "oklch(0.97 0.02 142)",
    iconBg: "oklch(0.30 0.12 142 / 0.6)"
  },
  {
    id: "farming-guide",
    to: "/guide",
    titleKey: "home.cards.farmingGuide",
    descKey: "home.cards.farmingGuideDesc",
    icon: BookOpen,
    emoji: "📚",
    ocid: "home.farming_guide_button",
    bg: "oklch(0.32 0.09 155)",
    fg: "oklch(0.97 0.02 155)",
    iconBg: "oklch(0.25 0.08 155 / 0.6)"
  },
  {
    id: "weather",
    to: "#weather",
    titleKey: "home.cards.weather",
    descKey: "home.cards.weatherDesc",
    icon: Cloud,
    emoji: "⛅",
    ocid: "home.weather_button",
    bg: "oklch(0.38 0.10 215)",
    fg: "oklch(0.97 0.02 215)",
    iconBg: "oklch(0.30 0.10 215 / 0.6)"
  },
  {
    id: "history",
    to: "/history",
    titleKey: "home.cards.history",
    descKey: "home.cards.historyDesc",
    icon: History,
    emoji: "📋",
    ocid: "home.history_button",
    bg: "oklch(0.45 0.09 73)",
    fg: "oklch(0.97 0.02 73)",
    iconBg: "oklch(0.36 0.08 73 / 0.6)"
  },
  {
    id: "profile",
    to: "/account",
    titleKey: "home.cards.profile",
    descKey: "home.cards.profileDesc",
    icon: User,
    emoji: "👤",
    ocid: "home.profile_button",
    bg: "oklch(0.42 0.07 50)",
    fg: "oklch(0.97 0.02 50)",
    iconBg: "oklch(0.34 0.07 50 / 0.6)"
  }
];
function NavCard({ card, index }) {
  const { t } = useTranslation();
  const handleWeatherScroll = (e) => {
    var _a;
    if (card.to === "#weather") {
      e.preventDefault();
      (_a = document.getElementById("weather-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 + index * 0.07, duration: 0.38 },
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.97 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: card.to === "#weather" ? "/home" : card.to,
          "data-ocid": card.ocid,
          onClick: handleWeatherScroll,
          className: "flex items-center gap-4 rounded-2xl px-4 py-4 shadow-md transition-all duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          style: { background: card.bg, minHeight: "4.5rem" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
                style: { background: card.iconBg },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  card.icon,
                  {
                    className: "h-6 w-6",
                    style: { color: card.fg },
                    "aria-hidden": "true"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-base font-extrabold leading-tight",
                  style: { color: card.fg },
                  children: t(card.titleKey)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mt-0.5 font-body text-xs leading-snug",
                  style: { color: card.fg, opacity: 0.75 },
                  children: t(card.descKey)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 text-xl", "aria-hidden": "true", children: card.emoji })
          ]
        }
      )
    }
  );
}
function LanguageSwitcherCard() {
  const { t } = useTranslation();
  const { language, setLanguage } = usePredictionStore();
  const handleSwitch = (lang) => {
    setLanguage(lang);
    instance.changeLanguage(lang);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -16 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.65 },
      "data-ocid": "home.language_card",
      className: "flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-6 w-6 text-primary", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold text-foreground", children: t("home.cards.language") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: t("home.cards.languageDesc") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex gap-2", children: ["en", "mr"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `home.language_card_${lang}_toggle`,
              onClick: () => handleSwitch(lang),
              "aria-pressed": language === lang,
              className: "min-h-[2.25rem] rounded-lg px-4 py-1.5 font-body text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              style: language === lang ? {
                background: "oklch(0.38 0.13 142)",
                color: "oklch(0.97 0.02 142)",
                boxShadow: "0 2px 8px oklch(0.38 0.13 142 / 0.3)"
              } : {
                background: "oklch(var(--muted) / 0.6)",
                color: "oklch(var(--muted-foreground))"
              },
              children: lang === "en" ? t("language.english") : t("language.marathi")
            },
            lang
          )) })
        ] })
      ]
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { showHeader: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeAppBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 px-0 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "weather-section", "aria-label": "Weather summary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WeatherBanner, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Quick actions", "data-ocid": "home.nav_cards_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-2", children: navCards.map((card, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavCard, { card, index: idx }, card.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Language settings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcherCard, {}) })
    ] })
  ] });
}
export {
  HomePage as default
};
