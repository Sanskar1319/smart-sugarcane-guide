import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import { Leaf, Loader2, Lock, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";

export default function LoginPage() {
  const { t } = useTranslation();
  const { login, isAuthenticated, isLoggingIn, isInitializing } =
    useInternetIdentity();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // If already authenticated, redirect to home
  useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      navigate({ to: "/home" });
    }
  }, [isAuthenticated, isInitializing, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth is handled by Internet Identity — form fields are UI only
    login();
  };

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-10"
      data-ocid="login.page"
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
      {/* Decorative circles */}
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
          className="mb-6 flex flex-col items-center gap-3"
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
            style={{ background: "oklch(0.42 0.13 142 / 0.7)" }}
          >
            <Leaf
              className="h-8 w-8"
              style={{ color: "oklch(0.92 0.08 142)" }}
              strokeWidth={1.5}
            />
          </div>
          <div className="text-center">
            <h1
              className="font-display text-xl font-extrabold tracking-tight leading-tight"
              style={{ color: "oklch(0.96 0.03 142)" }}
            >
              Smart Sugarcane Farming Guide
            </h1>
            <p
              className="font-body text-xs mt-1"
              style={{ color: "oklch(0.78 0.08 142)" }}
            >
              {t("app.tagline")} · स्मार्ट ऊस शेती मार्गदर्शिका
            </p>
          </div>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl bg-card p-6 shadow-elevated"
        >
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-1">
            {t("login.title")}
          </h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-6">
            {t("login.subtitle")}
          </p>

          {/* Login Form — UI fields; actual auth via Internet Identity */}
          <form onSubmit={handleLogin} noValidate>
            {/* Email field */}
            <div className="form-group mb-4">
              <label htmlFor="login-email" className="label-form">
                {t("register.email")}
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  data-ocid="login.email_input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("register.emailPlaceholder")}
                  className="input-field w-full pl-10"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="form-group mb-1">
              <label htmlFor="login-password" className="label-form">
                {t("register.password")}
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="login-password"
                  type="password"
                  autoComplete="current-password"
                  data-ocid="login.password_input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("register.passwordPlaceholder")}
                  className="input-field w-full pl-10"
                />
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right mb-5">
              <button
                type="button"
                data-ocid="login.forgot_password_button"
                onClick={() => {
                  /* no-op: coming soon */
                }}
                className="font-body text-sm font-medium transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ color: "oklch(0.48 0.13 142)" }}
              >
                {t("login.forgotPassword")}
              </button>
            </div>

            {/* Login Button — triggers Internet Identity */}
            <Button
              type="submit"
              data-ocid="login.login_button"
              disabled={isLoggingIn}
              className="button-primary w-full text-base font-bold tracking-wide mb-5"
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
                t("login.loginButton")
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center gap-3 my-4">
            <div className="flex-1 border-t border-border" />
            <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
              {t("login.socialLogin")}
            </span>
            <div className="flex-1 border-t border-border" />
          </div>

          {/* Social login placeholders — disabled, Coming Soon */}
          <div className="flex flex-col gap-3 mb-5">
            <div className="relative">
              <button
                type="button"
                data-ocid="login.google_button"
                disabled
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-muted px-4 py-3 font-body text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed min-h-12"
                aria-label="Continue with Google (Coming Soon)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  aria-hidden="true"
                  fill="none"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>{t("login.continueWithGoogle")}</span>
                <span className="ml-auto rounded-full bg-border px-2 py-0.5 font-body text-xs text-muted-foreground">
                  Coming Soon
                </span>
              </button>
            </div>

            <div className="relative">
              <button
                type="button"
                data-ocid="login.phone_button"
                disabled
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-muted px-4 py-3 font-body text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed min-h-12"
                aria-label="Continue with Phone (Coming Soon)"
              >
                <span className="text-lg shrink-0" aria-hidden="true">
                  📱
                </span>
                <span>{t("login.continueWithPhone")}</span>
                <span className="ml-auto rounded-full bg-border px-2 py-0.5 font-body text-xs text-muted-foreground">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>

          {/* Register link */}
          <p className="font-body text-sm text-center text-muted-foreground">
            {t("login.noAccount")}{" "}
            <Link
              to="/register"
              data-ocid="login.register_link"
              className="font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{ color: "oklch(0.48 0.13 142)" }}
            >
              {t("login.registerNow")}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
