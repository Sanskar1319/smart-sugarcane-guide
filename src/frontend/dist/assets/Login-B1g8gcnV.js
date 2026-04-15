import { a as useInternetIdentity, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BJHXwJTK.js";
import { B as Button } from "./button-CtPmgPdp.js";
import { u as useTranslation, m as motion } from "./proxy-CBnkwJ4B.js";
import { L as Leaf } from "./leaf-DvRLYDFB.js";
import { M as Mail } from "./mail-CyVPBQRX.js";
import { L as Lock } from "./lock-d9aZ_vAQ.js";
import { L as LoaderCircle } from "./loader-circle-CJkj7ZGh.js";
function LoginPage() {
  const { t } = useTranslation();
  const { login, isAuthenticated, isLoggingIn, isInitializing } = useInternetIdentity();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      navigate({ to: "/home" });
    }
  }, [isAuthenticated, isInitializing, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-10",
      "data-ocid": "login.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "linear-gradient(\n            160deg,\n            oklch(0.28 0.10 142) 0%,\n            oklch(0.35 0.12 145) 50%,\n            oklch(0.30 0.09 150) 100%\n          )"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-15",
            style: { background: "oklch(0.55 0.14 142)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10",
            style: { background: "oklch(0.55 0.09 73)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-[420px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "mb-6 flex flex-col items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg",
                    style: { background: "oklch(0.42 0.13 142 / 0.7)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Leaf,
                      {
                        className: "h-8 w-8",
                        style: { color: "oklch(0.92 0.08 142)" },
                        strokeWidth: 1.5
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "font-display text-xl font-extrabold tracking-tight leading-tight",
                      style: { color: "oklch(0.96 0.03 142)" },
                      children: "Smart Sugarcane Farming Guide"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs mt-1",
                      style: { color: "oklch(0.78 0.08 142)" },
                      children: [
                        t("app.tagline"),
                        " · स्मार्ट ऊस शेती मार्गदर्शिका"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.5 },
              className: "rounded-2xl bg-card p-6 shadow-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground text-center mb-1", children: t("login.title") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground text-center mb-6", children: t("login.subtitle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, noValidate: true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "login-email", className: "label-form", children: t("register.email") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Mail,
                        {
                          className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "login-email",
                          type: "email",
                          autoComplete: "email",
                          "data-ocid": "login.email_input",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          placeholder: t("register.emailPlaceholder"),
                          className: "input-field w-full pl-10"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "login-password", className: "label-form", children: t("register.password") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Lock,
                        {
                          className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "login-password",
                          type: "password",
                          autoComplete: "current-password",
                          "data-ocid": "login.password_input",
                          value: password,
                          onChange: (e) => setPassword(e.target.value),
                          placeholder: t("register.passwordPlaceholder"),
                          className: "input-field w-full pl-10"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "login.forgot_password_button",
                      onClick: () => {
                      },
                      className: "font-body text-sm font-medium transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      style: { color: "oklch(0.48 0.13 142)" },
                      children: t("login.forgotPassword")
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      "data-ocid": "login.login_button",
                      disabled: isLoggingIn,
                      className: "button-primary w-full text-base font-bold tracking-wide mb-5",
                      children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          LoaderCircle,
                          {
                            className: "h-4 w-4 animate-spin",
                            "aria-hidden": "true"
                          }
                        ),
                        t("common.loading")
                      ] }) : t("login.loginButton")
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3 my-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground uppercase tracking-wider", children: t("login.socialLogin") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "login.google_button",
                      disabled: true,
                      className: "flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-muted px-4 py-3 font-body text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed min-h-12",
                      "aria-label": "Continue with Google (Coming Soon)",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "svg",
                          {
                            viewBox: "0 0 24 24",
                            className: "h-5 w-5 shrink-0",
                            "aria-hidden": "true",
                            fill: "none",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                  fill: "#4285F4"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                  fill: "#34A853"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                  fill: "#FBBC05"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                  fill: "#EA4335"
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("login.continueWithGoogle") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-full bg-border px-2 py-0.5 font-body text-xs text-muted-foreground", children: "Coming Soon" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "login.phone_button",
                      disabled: true,
                      className: "flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-muted px-4 py-3 font-body text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed min-h-12",
                      "aria-label": "Continue with Phone (Coming Soon)",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg shrink-0", "aria-hidden": "true", children: "📱" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("login.continueWithPhone") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-full bg-border px-2 py-0.5 font-body text-xs text-muted-foreground", children: "Coming Soon" })
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-center text-muted-foreground", children: [
                  t("login.noAccount"),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/register",
                      "data-ocid": "login.register_link",
                      className: "font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      style: { color: "oklch(0.48 0.13 142)" },
                      children: t("login.registerNow")
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  LoginPage as default
};
