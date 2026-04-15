import { a as useInternetIdentity, u as useNavigate, ab as useRouterState, j as jsxRuntimeExports, L as Link } from "./index-BJHXwJTK.js";
import { u as usePredictionStore, U as User } from "./prediction-store-DS6XHYC3.js";
import { B as Button } from "./button-CtPmgPdp.js";
import { c as createLucideIcon, u as useTranslation } from "./proxy-CBnkwJ4B.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode);
const navItems = [
  { to: "/home", icon: House, labelKey: "nav.home" },
  { to: "/guide", icon: BookOpen, labelKey: "nav.guide" },
  { to: "/history", icon: Clock, labelKey: "nav.history" },
  { to: "/account", icon: User, labelKey: "nav.account" }
];
function Layout({
  children,
  showBottomNav = true,
  showHeader = true,
  headerTitle,
  headerLeft,
  headerRight
}) {
  const { t } = useTranslation();
  const { clear, isAuthenticated } = useInternetIdentity();
  const { profile } = usePredictionStore();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const handleLogout = () => {
    clear();
    navigate({ to: "/login" });
  };
  const displayName = profile.name || t("home.welcome").replace(", Farmer!", "");
  const defaultHeaderRight = isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block font-body text-sm text-primary-foreground/80 truncate max-w-24", children: displayName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        "data-ocid": "layout.logout_button",
        "aria-label": t("profile.logout"),
        onClick: handleLogout,
        className: "h-9 w-9 text-primary-foreground hover:bg-primary-foreground/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4", "aria-hidden": "true" })
      }
    )
  ] }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    showHeader && /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "header-appbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 max-w-lg items-center justify-between px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 min-w-0", children: headerLeft ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-hidden": "true", children: "🌿" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold text-primary-foreground truncate", children: headerTitle ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground", children: "CANE" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/80", children: "PREDICT" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: headerRight ?? defaultHeaderRight })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto w-full max-w-lg flex-1 px-4 py-4 pb-safe", children }),
    showBottomNav && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        className: "sticky bottom-0 z-50 border-t border-border bg-card shadow-[0_-2px_8px_rgba(0,0,0,0.08)]",
        "aria-label": "Main navigation",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-lg items-center justify-around", children: navItems.map(({ to, icon: Icon, labelKey }) => {
          const isActive = currentPath === to || currentPath.startsWith(to);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to,
              "data-ocid": `nav.${labelKey.split(".")[1]}_link`,
              className: `relative flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
              "aria-current": isActive ? "page" : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: `h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : ""}`,
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(labelKey) }),
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 h-0.5 w-8 rounded-t-full bg-primary" })
              ]
            },
            to
          );
        }) })
      }
    )
  ] });
}
export {
  BookOpen as B,
  Layout as L,
  LogOut as a
};
