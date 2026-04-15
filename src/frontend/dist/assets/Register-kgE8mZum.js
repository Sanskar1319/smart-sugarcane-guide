import { a as useInternetIdentity, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, i as instance } from "./index-BJHXwJTK.js";
import { B as Button } from "./button-CtPmgPdp.js";
import { u as usePredictionStore, U as User } from "./prediction-store-DS6XHYC3.js";
import { u as useTranslation, m as motion } from "./proxy-CBnkwJ4B.js";
import { L as Leaf } from "./leaf-DvRLYDFB.js";
import { M as Mail } from "./mail-CyVPBQRX.js";
import { P as Phone } from "./phone-DwCRsC8q.js";
import { L as Lock } from "./lock-d9aZ_vAQ.js";
import { C as ChevronDown } from "./chevron-down-CBrrjoGn.js";
import { L as LoaderCircle } from "./loader-circle-CJkj7ZGh.js";
const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "mr", label: "Marathi (मराठी)" }
];
function RegisterPage() {
  var _a;
  const { t } = useTranslation();
  const { login, isAuthenticated, isLoggingIn, isInitializing } = useInternetIdentity();
  const { setProfile, setLanguage } = usePredictionStore();
  const navigate = useNavigate();
  const langMenuRef = reactExports.useRef(null);
  const [form, setForm] = reactExports.useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    language: "en"
  });
  const [errors, setErrors] = reactExports.useState({});
  const [langOpen, setLangOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      navigate({ to: "/home" });
    }
  }, [isAuthenticated, isInitializing, navigate]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    if (langOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);
  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim())
      newErrors.fullName = t("register.fullNameRequired");
    if (!form.email.trim()) newErrors.email = t("register.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t("register.emailInvalid");
    if (!form.phone.trim()) newErrors.phone = t("register.phoneRequired");
    else if (form.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = t("register.phoneMinLength");
    if (!form.password) newErrors.password = t("register.passwordRequired");
    else if (form.password.length < 8)
      newErrors.password = t("register.passwordMinLength");
    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = t("register.passwordMismatch");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setProfile({
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      preferredLanguage: form.language
    });
    setLanguage(form.language);
    instance.changeLanguage(form.language);
    login();
  };
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: void 0 }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-10",
      "data-ocid": "register.page",
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
              className: "mb-5 flex flex-col items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg",
                    style: { background: "oklch(0.42 0.13 142 / 0.7)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Leaf,
                      {
                        className: "h-7 w-7",
                        style: { color: "oklch(0.92 0.08 142)" },
                        strokeWidth: 1.5
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display text-lg font-extrabold tracking-tight text-center leading-snug",
                    style: { color: "oklch(0.96 0.03 142)" },
                    children: "Smart Sugarcane Farming Guide"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs",
                    style: { color: "oklch(0.78 0.08 142)" },
                    children: [
                      t("app.tagline"),
                      " · स्मार्ट ऊस शेती"
                    ]
                  }
                )
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground text-center mb-1", children: t("register.title") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground text-center mb-5", children: t("register.subtitle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegister, noValidate: true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reg-name", className: "label-form", children: t("register.fullName") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          User,
                          {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                            "aria-hidden": "true"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "reg-name",
                            type: "text",
                            autoComplete: "name",
                            "data-ocid": "register.name_input",
                            value: form.fullName,
                            onChange: (e) => handleChange("fullName", e.target.value),
                            onBlur: () => {
                              if (!form.fullName.trim())
                                setErrors((prev) => ({
                                  ...prev,
                                  fullName: t("register.fullNameRequired")
                                }));
                            },
                            placeholder: t("register.fullNamePlaceholder"),
                            className: "input-field w-full pl-10",
                            "aria-describedby": errors.fullName ? "reg-name-error" : void 0,
                            "aria-invalid": !!errors.fullName
                          }
                        )
                      ] }),
                      errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "reg-name-error",
                          role: "alert",
                          className: "font-body text-xs text-destructive",
                          "data-ocid": "register.name_field_error",
                          children: errors.fullName
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reg-email", className: "label-form", children: t("register.email") }),
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
                            id: "reg-email",
                            type: "email",
                            autoComplete: "email",
                            "data-ocid": "register.email_input",
                            value: form.email,
                            onChange: (e) => handleChange("email", e.target.value),
                            onBlur: () => {
                              if (!form.email.trim())
                                setErrors((prev) => ({
                                  ...prev,
                                  email: t("register.emailRequired")
                                }));
                            },
                            placeholder: t("register.emailPlaceholder"),
                            className: "input-field w-full pl-10",
                            "aria-describedby": errors.email ? "reg-email-error" : void 0,
                            "aria-invalid": !!errors.email
                          }
                        )
                      ] }),
                      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "reg-email-error",
                          role: "alert",
                          className: "font-body text-xs text-destructive",
                          "data-ocid": "register.email_field_error",
                          children: errors.email
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reg-phone", className: "label-form", children: t("register.phone") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Phone,
                          {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                            "aria-hidden": "true"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "reg-phone",
                            type: "tel",
                            autoComplete: "tel",
                            "data-ocid": "register.phone_input",
                            value: form.phone,
                            onChange: (e) => handleChange("phone", e.target.value),
                            onBlur: () => {
                              if (!form.phone.trim())
                                setErrors((prev) => ({
                                  ...prev,
                                  phone: t("register.phoneRequired")
                                }));
                            },
                            placeholder: t("register.phonePlaceholder"),
                            className: "input-field w-full pl-10",
                            "aria-describedby": errors.phone ? "reg-phone-error" : void 0,
                            "aria-invalid": !!errors.phone
                          }
                        )
                      ] }),
                      errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "reg-phone-error",
                          role: "alert",
                          className: "font-body text-xs text-destructive",
                          "data-ocid": "register.phone_field_error",
                          children: errors.phone
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reg-password", className: "label-form", children: t("register.password") }),
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
                            id: "reg-password",
                            type: "password",
                            autoComplete: "new-password",
                            "data-ocid": "register.password_input",
                            value: form.password,
                            onChange: (e) => handleChange("password", e.target.value),
                            placeholder: t("register.passwordPlaceholder"),
                            className: "input-field w-full pl-10",
                            "aria-describedby": errors.password ? "reg-password-error" : void 0,
                            "aria-invalid": !!errors.password
                          }
                        )
                      ] }),
                      errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "reg-password-error",
                          role: "alert",
                          className: "font-body text-xs text-destructive",
                          "data-ocid": "register.password_field_error",
                          children: errors.password
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reg-confirm", className: "label-form", children: t("register.confirmPassword") }),
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
                            id: "reg-confirm",
                            type: "password",
                            autoComplete: "new-password",
                            "data-ocid": "register.confirm_password_input",
                            value: form.confirmPassword,
                            onChange: (e) => handleChange("confirmPassword", e.target.value),
                            placeholder: t("register.confirmPasswordPlaceholder"),
                            className: "input-field w-full pl-10",
                            "aria-describedby": errors.confirmPassword ? "reg-confirm-error" : void 0,
                            "aria-invalid": !!errors.confirmPassword
                          }
                        )
                      ] }),
                      errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "reg-confirm-error",
                          role: "alert",
                          className: "font-body text-xs text-destructive",
                          "data-ocid": "register.confirm_password_field_error",
                          children: errors.confirmPassword
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", ref: langMenuRef, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reg-lang", className: "label-form", children: t("register.languageDropdown") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            id: "reg-lang",
                            type: "button",
                            "data-ocid": "register.language_select",
                            onClick: () => setLangOpen((o) => !o),
                            className: "input-field w-full flex items-center justify-between",
                            "aria-haspopup": "listbox",
                            "aria-expanded": langOpen,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_a = LANGUAGES.find((l) => l.value === form.language)) == null ? void 0 : _a.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                ChevronDown,
                                {
                                  className: `h-4 w-4 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`,
                                  "aria-hidden": "true"
                                }
                              )
                            ]
                          }
                        ),
                        langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-20 mt-1 w-full rounded-md border border-border bg-card shadow-elevated overflow-hidden", children: LANGUAGES.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `register.language_option_${lang.value}`,
                            onClick: () => {
                              handleChange("language", lang.value);
                              setLangOpen(false);
                            },
                            className: `w-full text-left cursor-pointer px-4 py-3 font-body text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${form.language === lang.value ? "bg-primary/10 text-primary font-semibold" : "text-foreground"}`,
                            children: lang.label
                          },
                          lang.value
                        )) })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      "data-ocid": "register.submit_button",
                      disabled: isLoggingIn,
                      className: "button-primary w-full mt-5 text-base font-bold tracking-wide",
                      children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          LoaderCircle,
                          {
                            className: "h-4 w-4 animate-spin",
                            "aria-hidden": "true"
                          }
                        ),
                        t("common.loading")
                      ] }) : t("register.registerButton")
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-center text-muted-foreground mt-4", children: [
                  t("register.hasAccount"),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/login",
                      "data-ocid": "register.login_link",
                      className: "font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      style: { color: "oklch(0.48 0.13 142)" },
                      children: t("register.loginLink")
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
  RegisterPage as default
};
