import { a as useInternetIdentity, u as useNavigate, r as reactExports, j as jsxRuntimeExports, i as instance, c as ue } from "./index-BJHXwJTK.js";
import { L as Layout, a as LogOut } from "./Layout-31CzHDvD.js";
import { B as Button } from "./button-CtPmgPdp.js";
import { u as usePredictionStore, U as User } from "./prediction-store-DS6XHYC3.js";
import { c as createLucideIcon, u as useTranslation, m as motion } from "./proxy-CBnkwJ4B.js";
import { M as Mail } from "./mail-CyVPBQRX.js";
import { P as Phone } from "./phone-DwCRsC8q.js";
import { G as Globe } from "./globe-XNTMrlxi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$3);
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
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function LetterAvatar({ name }) {
  const initial = (name == null ? void 0 : name.trim().charAt(0).toUpperCase()) || "F";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex h-20 w-20 items-center justify-center rounded-full border-4 border-card shadow-md select-none",
      style: { background: "oklch(0.45 0.13 142)" },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "font-display text-3xl font-bold",
          style: { color: "oklch(0.97 0.02 73)" },
          children: initial
        }
      )
    }
  );
}
function SectionHeader({
  icon,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-bold text-foreground", children: title })
  ] });
}
function InfoRow({
  icon,
  label,
  value,
  muted
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-2.5 border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-muted-foreground flex-shrink-0", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mb-0.5", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `font-body text-sm break-words ${muted ? "text-muted-foreground italic" : "text-foreground font-medium"}`,
          children: value
        }
      )
    ] })
  ] });
}
function AccountPage() {
  const { t } = useTranslation();
  const { clear } = useInternetIdentity();
  const { language, setLanguage, profile, setProfile } = usePredictionStore();
  const navigate = useNavigate();
  const [editMode, setEditMode] = reactExports.useState(false);
  const [editName, setEditName] = reactExports.useState(profile.name);
  const [editPhone, setEditPhone] = reactExports.useState(profile.phone);
  const [editLang, setEditLang] = reactExports.useState(
    profile.preferredLanguage
  );
  const [showPasswordForm, setShowPasswordForm] = reactExports.useState(false);
  const [currentPwd, setCurrentPwd] = reactExports.useState("");
  const [newPwd, setNewPwd] = reactExports.useState("");
  const [confirmPwd, setConfirmPwd] = reactExports.useState("");
  const [pwdError, setPwdError] = reactExports.useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = reactExports.useState(false);
  const displayName = profile.name || t("home.welcome").replace("Welcome, ", "").replace("!", "") || "Farmer";
  const displayEmail = profile.email || "—";
  const displayPhone = profile.phone || "—";
  const displayLang = profile.preferredLanguage === "mr" ? t("language.marathi") : t("language.english");
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setProfile({ preferredLanguage: lang });
    instance.changeLanguage(lang);
  };
  const handleOpenEdit = () => {
    setEditName(profile.name);
    setEditPhone(profile.phone);
    setEditLang(profile.preferredLanguage);
    setEditMode(true);
  };
  const handleSaveProfile = () => {
    setProfile({
      name: editName,
      phone: editPhone,
      preferredLanguage: editLang
    });
    handleLanguageChange(editLang);
    setEditMode(false);
    ue.success(t("profile.saveChanges"));
  };
  const handleSavePassword = () => {
    setPwdError("");
    if (!currentPwd || !newPwd || !confirmPwd) {
      setPwdError(t("predict.required"));
      return;
    }
    if (newPwd !== confirmPwd) {
      setPwdError(t("profile.passwordMismatch"));
      return;
    }
    ue.success(t("profile.passwordChanged"));
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
    setShowPasswordForm(false);
  };
  const handleLogout = () => {
    clear();
    navigate({ to: "/login" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showHeader: true, headerTitle: t("profile.title"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        className: "card-elevated overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-24 w-full",
              style: {
                background: "linear-gradient(135deg, oklch(0.40 0.14 142) 0%, oklch(0.32 0.11 150) 100%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between -mt-10 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LetterAvatar, { name: profile.name }),
              !editMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  "data-ocid": "account.edit_profile_button",
                  onClick: handleOpenEdit,
                  className: "flex items-center gap-1.5 border-primary text-primary hover:bg-primary/5 min-h-9",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                    t("profile.editProfile")
                  ]
                }
              ),
              editMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": t("common.close"),
                  "data-ocid": "account.close_edit_button",
                  onClick: () => setEditMode(false),
                  className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            !editMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground mb-0.5", children: displayName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: displayEmail })
            ] }),
            editMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                className: "space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "edit-name", className: "label-form text-sm", children: t("profile.fullName") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "edit-name",
                        type: "text",
                        "data-ocid": "account.name_input",
                        value: editName,
                        onChange: (e) => setEditName(e.target.value),
                        placeholder: t("profile.fullNamePlaceholder"),
                        className: "input-field w-full",
                        autoComplete: "name"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "edit-email", className: "label-form text-sm", children: t("profile.email") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "edit-email",
                        type: "email",
                        value: displayEmail,
                        disabled: true,
                        className: "input-field w-full opacity-50 cursor-not-allowed",
                        "aria-describedby": "email-note"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "email-note",
                        className: "font-body text-xs text-muted-foreground mt-1",
                        children: t("profile.emailNotEditable")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "edit-phone", className: "label-form text-sm", children: t("profile.phone") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "edit-phone",
                        type: "tel",
                        "data-ocid": "account.phone_input",
                        value: editPhone,
                        onChange: (e) => setEditPhone(e.target.value),
                        placeholder: t("profile.phonePlaceholder"),
                        className: "input-field w-full",
                        autoComplete: "tel"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-form text-sm", id: "edit-lang-label", children: t("profile.language") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "fieldset",
                      {
                        "aria-labelledby": "edit-lang-label",
                        className: "border-0 p-0 m-0",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["en", "mr"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `account.edit_lang_${lang}_button`,
                            onClick: () => setEditLang(lang),
                            "aria-pressed": editLang === lang,
                            className: `flex-1 rounded-lg py-2.5 font-display text-sm font-bold uppercase tracking-wide transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-11 ${editLang === lang ? "bg-primary text-primary-foreground shadow-sm" : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`,
                            children: lang === "en" ? t("language.english") : t("language.marathi")
                          },
                          lang
                        )) })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        "data-ocid": "account.save_button",
                        onClick: handleSaveProfile,
                        className: "button-primary flex-1 text-sm",
                        children: t("common.save")
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        "data-ocid": "account.cancel_button",
                        onClick: () => setEditMode(false),
                        className: "flex-1 text-sm border-border",
                        children: t("common.cancel")
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    !editMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.07 },
        className: "card-elevated p-5",
        "data-ocid": "account.info_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
              title: t("profile.accountInfo")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                label: t("profile.name"),
                value: displayName
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                label: t("profile.email"),
                value: displayEmail
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                label: t("profile.phone"),
                value: displayPhone
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                label: t("profile.language"),
                value: displayLang
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "account.edit_profile_info_button",
              onClick: handleOpenEdit,
              className: "button-outline w-full mt-4 flex items-center justify-center gap-2 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4", "aria-hidden": "true" }),
                t("profile.editProfile")
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.12 },
        className: "card-elevated p-5",
        "data-ocid": "account.password_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-4 w-4" }),
              title: t("profile.changePassword")
            }
          ),
          !showPasswordForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "account.change_password_button",
              onClick: () => setShowPasswordForm(true),
              className: "button-outline w-full flex items-center justify-center gap-2 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-4 w-4", "aria-hidden": "true" }),
                t("profile.changePassword")
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              className: "space-y-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "current-pwd", className: "label-form text-sm", children: t("profile.currentPassword") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "current-pwd",
                      type: "password",
                      "data-ocid": "account.current_password_input",
                      value: currentPwd,
                      onChange: (e) => setCurrentPwd(e.target.value),
                      placeholder: t("profile.currentPasswordPlaceholder"),
                      className: "input-field w-full",
                      autoComplete: "current-password"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "new-pwd", className: "label-form text-sm", children: t("profile.newPassword") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "new-pwd",
                      type: "password",
                      "data-ocid": "account.new_password_input",
                      value: newPwd,
                      onChange: (e) => setNewPwd(e.target.value),
                      placeholder: t("profile.newPasswordPlaceholder"),
                      className: "input-field w-full",
                      autoComplete: "new-password"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "confirm-pwd", className: "label-form text-sm", children: t("profile.confirmNewPassword") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "confirm-pwd",
                      type: "password",
                      "data-ocid": "account.confirm_password_input",
                      value: confirmPwd,
                      onChange: (e) => setConfirmPwd(e.target.value),
                      placeholder: t("profile.confirmNewPasswordPlaceholder"),
                      className: "input-field w-full",
                      autoComplete: "new-password"
                    }
                  )
                ] }),
                pwdError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    "data-ocid": "account.password_error_state",
                    className: "font-body text-sm",
                    style: { color: "oklch(0.58 0.21 24)" },
                    role: "alert",
                    children: pwdError
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      "data-ocid": "account.save_password_button",
                      onClick: handleSavePassword,
                      className: "button-primary flex-1 text-sm",
                      children: t("common.save")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      "data-ocid": "account.cancel_password_button",
                      onClick: () => {
                        setShowPasswordForm(false);
                        setPwdError("");
                      },
                      className: "flex-1 text-sm border-border",
                      children: t("common.cancel")
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.17 },
        className: "card-elevated p-5",
        "data-ocid": "account.language_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
              title: t("profile.languagePreference")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: ["en", "mr"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `account.language_${lang}_button`,
              onClick: () => handleLanguageChange(lang),
              "aria-pressed": language === lang,
              className: `flex-1 rounded-xl py-4 font-display text-base font-bold tracking-wide transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-14 flex flex-col items-center gap-1 ${language === lang ? "bg-primary text-primary-foreground shadow-md" : "border-2 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", "aria-hidden": "true", children: lang === "en" ? "🇬🇧" : "🇮🇳" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "en" ? t("language.english") : t("language.marathi") })
              ]
            },
            lang
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.22 },
        className: "card-elevated p-5",
        "data-ocid": "account.app_info_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
              title: t("profile.appInfo")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex h-14 w-14 items-center justify-center rounded-2xl shadow-md flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, oklch(0.48 0.13 142) 0%, oklch(0.38 0.11 150) 100%)"
                },
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🌿" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-foreground", children: t("account.appName") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: t("profile.appVersion") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mt-1", children: t("profile.appTaglineDisplay") })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.27 },
        children: !showLogoutConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "account.logout_button",
            onClick: () => setShowLogoutConfirm(true),
            className: "w-full rounded-xl py-4 font-display text-base font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-14 flex items-center justify-center gap-2.5 shadow-sm",
            style: {
              background: "oklch(0.58 0.21 24 / 0.08)",
              color: "oklch(0.52 0.20 24)",
              border: "2px solid oklch(0.58 0.21 24 / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-5 w-5", "aria-hidden": "true" }),
              t("profile.logout")
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            className: "card-elevated p-5 space-y-4",
            "data-ocid": "account.logout_dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full mb-3",
                    style: { background: "oklch(0.58 0.21 24 / 0.1)" },
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LogOut,
                      {
                        className: "h-6 w-6",
                        style: { color: "oklch(0.52 0.20 24)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold text-foreground", children: t("profile.logoutConfirm") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: t("profile.logoutDesc") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    "data-ocid": "account.logout_cancel_button",
                    onClick: () => setShowLogoutConfirm(false),
                    className: "flex-1 border-border min-h-12 font-medium",
                    children: t("common.cancel")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "account.logout_confirm_button",
                    onClick: handleLogout,
                    className: "flex-1 rounded-lg py-3 font-display text-sm font-bold min-h-12 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-center gap-2",
                    style: {
                      background: "oklch(0.58 0.21 24)",
                      color: "oklch(0.98 0 0)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4", "aria-hidden": "true" }),
                      t("profile.logout")
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground text-center pb-2", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== "undefined" ? window.location.hostname : ""
          )}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-foreground transition-colors",
          children: "caffeine.ai"
        }
      )
    ] })
  ] }) });
}
export {
  AccountPage as default
};
