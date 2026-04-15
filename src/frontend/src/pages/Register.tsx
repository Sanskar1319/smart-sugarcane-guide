import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  Leaf,
  Loader2,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import i18next from "../i18n/index";
import { usePredictionStore } from "../store/prediction-store";

interface RegisterForm {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  language: "en" | "mr";
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const LANGUAGES = [
  { value: "en" as const, label: "English" },
  { value: "mr" as const, label: "Marathi (मराठी)" },
];

export default function RegisterPage() {
  const { t } = useTranslation();
  const { login, isAuthenticated, isLoggingIn, isInitializing } =
    useInternetIdentity();
  const { setProfile, setLanguage } = usePredictionStore();
  const navigate = useNavigate();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    language: "en",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [langOpen, setLangOpen] = useState(false);

  // If already authenticated, redirect to home
  useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      navigate({ to: "/home" });
    }
  }, [isAuthenticated, isInitializing, navigate]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    if (langOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
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

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setProfile({
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      preferredLanguage: form.language,
    });
    setLanguage(form.language);
    i18next.changeLanguage(form.language);
    login();
  };

  const handleChange = (field: keyof RegisterForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-10"
      data-ocid="register.page"
    >
      {/* Green gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(\n            160deg,\n            oklch(0.28 0.10 142) 0%,\n            oklch(0.35 0.12 145) 50%,\n            oklch(0.30 0.09 150) 100%\n          )",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-15"
        style={{ background: "oklch(0.55 0.14 142)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10"
        style={{ background: "oklch(0.55 0.09 73)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[420px]">
        {/* Logo Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex flex-col items-center gap-2"
        >
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
            style={{ background: "oklch(0.42 0.13 142 / 0.7)" }}
          >
            <Leaf
              className="h-7 w-7"
              style={{ color: "oklch(0.92 0.08 142)" }}
              strokeWidth={1.5}
            />
          </div>
          <h1
            className="font-display text-lg font-extrabold tracking-tight text-center leading-snug"
            style={{ color: "oklch(0.96 0.03 142)" }}
          >
            Smart Sugarcane Farming Guide
          </h1>
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.78 0.08 142)" }}
          >
            {t("app.tagline")} · स्मार्ट ऊस शेती
          </p>
        </motion.div>

        {/* Register Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl bg-card p-6 shadow-elevated"
        >
          <h2 className="font-display text-xl font-bold text-foreground text-center mb-1">
            {t("register.title")}
          </h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-5">
            {t("register.subtitle")}
          </p>

          <form onSubmit={handleRegister} noValidate>
            <div className="space-y-4">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="reg-name" className="label-form">
                  {t("register.fullName")}
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="reg-name"
                    type="text"
                    autoComplete="name"
                    data-ocid="register.name_input"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    onBlur={() => {
                      if (!form.fullName.trim())
                        setErrors((prev) => ({
                          ...prev,
                          fullName: t("register.fullNameRequired"),
                        }));
                    }}
                    placeholder={t("register.fullNamePlaceholder")}
                    className="input-field w-full pl-10"
                    aria-describedby={
                      errors.fullName ? "reg-name-error" : undefined
                    }
                    aria-invalid={!!errors.fullName}
                  />
                </div>
                {errors.fullName && (
                  <p
                    id="reg-name-error"
                    role="alert"
                    className="font-body text-xs text-destructive"
                    data-ocid="register.name_field_error"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="reg-email" className="label-form">
                  {t("register.email")}
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="reg-email"
                    type="email"
                    autoComplete="email"
                    data-ocid="register.email_input"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => {
                      if (!form.email.trim())
                        setErrors((prev) => ({
                          ...prev,
                          email: t("register.emailRequired"),
                        }));
                    }}
                    placeholder={t("register.emailPlaceholder")}
                    className="input-field w-full pl-10"
                    aria-describedby={
                      errors.email ? "reg-email-error" : undefined
                    }
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p
                    id="reg-email-error"
                    role="alert"
                    className="font-body text-xs text-destructive"
                    data-ocid="register.email_field_error"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="reg-phone" className="label-form">
                  {t("register.phone")}
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="reg-phone"
                    type="tel"
                    autoComplete="tel"
                    data-ocid="register.phone_input"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => {
                      if (!form.phone.trim())
                        setErrors((prev) => ({
                          ...prev,
                          phone: t("register.phoneRequired"),
                        }));
                    }}
                    placeholder={t("register.phonePlaceholder")}
                    className="input-field w-full pl-10"
                    aria-describedby={
                      errors.phone ? "reg-phone-error" : undefined
                    }
                    aria-invalid={!!errors.phone}
                  />
                </div>
                {errors.phone && (
                  <p
                    id="reg-phone-error"
                    role="alert"
                    className="font-body text-xs text-destructive"
                    data-ocid="register.phone_field_error"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="reg-password" className="label-form">
                  {t("register.password")}
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="reg-password"
                    type="password"
                    autoComplete="new-password"
                    data-ocid="register.password_input"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder={t("register.passwordPlaceholder")}
                    className="input-field w-full pl-10"
                    aria-describedby={
                      errors.password ? "reg-password-error" : undefined
                    }
                    aria-invalid={!!errors.password}
                  />
                </div>
                {errors.password && (
                  <p
                    id="reg-password-error"
                    role="alert"
                    className="font-body text-xs text-destructive"
                    data-ocid="register.password_field_error"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="reg-confirm" className="label-form">
                  {t("register.confirmPassword")}
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="reg-confirm"
                    type="password"
                    autoComplete="new-password"
                    data-ocid="register.confirm_password_input"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    placeholder={t("register.confirmPasswordPlaceholder")}
                    className="input-field w-full pl-10"
                    aria-describedby={
                      errors.confirmPassword ? "reg-confirm-error" : undefined
                    }
                    aria-invalid={!!errors.confirmPassword}
                  />
                </div>
                {errors.confirmPassword && (
                  <p
                    id="reg-confirm-error"
                    role="alert"
                    className="font-body text-xs text-destructive"
                    data-ocid="register.confirm_password_field_error"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Language dropdown */}
              <div className="form-group" ref={langMenuRef}>
                <label htmlFor="reg-lang" className="label-form">
                  {t("register.languageDropdown")}
                </label>
                <div className="relative">
                  <button
                    id="reg-lang"
                    type="button"
                    data-ocid="register.language_select"
                    onClick={() => setLangOpen((o) => !o)}
                    className="input-field w-full flex items-center justify-between"
                    aria-haspopup="listbox"
                    aria-expanded={langOpen}
                  >
                    <span>
                      {LANGUAGES.find((l) => l.value === form.language)?.label}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {langOpen && (
                    <div className="absolute z-20 mt-1 w-full rounded-md border border-border bg-card shadow-elevated overflow-hidden">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.value}
                          type="button"
                          data-ocid={`register.language_option_${lang.value}`}
                          onClick={() => {
                            handleChange("language", lang.value);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left cursor-pointer px-4 py-3 font-body text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            form.language === lang.value
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-foreground"
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Register button */}
            <Button
              type="submit"
              data-ocid="register.submit_button"
              disabled={isLoggingIn}
              className="button-primary w-full mt-5 text-base font-bold tracking-wide"
            >
              {isLoggingIn ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  {t("common.loading")}
                </span>
              ) : (
                t("register.registerButton")
              )}
            </Button>
          </form>

          {/* Login link */}
          <p className="font-body text-sm text-center text-muted-foreground mt-4">
            {t("register.hasAccount")}{" "}
            <Link
              to="/login"
              data-ocid="register.login_link"
              className="font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{ color: "oklch(0.48 0.13 142)" }}
            >
              {t("register.loginLink")}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
