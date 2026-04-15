import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function SplashPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuthenticated, isInitializing } = useInternetIdentity();

  useEffect(() => {
    if (isInitializing) return;
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigate({ to: "/home" });
      } else {
        navigate({ to: "/login" });
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate, isAuthenticated, isInitializing]);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-8 py-16"
      style={{
        background:
          "linear-gradient(\n            160deg,\n            oklch(0.38 0.14 142) 0%,\n            oklch(0.30 0.12 150) 40%,\n            oklch(0.24 0.08 155) 100%\n          )",
      }}
      data-ocid="splash.page"
    >
      {/* Decorative background circles */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-10"
        style={{ background: "oklch(0.75 0.15 142)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full opacity-10"
        style={{ background: "oklch(0.65 0.12 73)" }}
        aria-hidden="true"
      />

      {/* Center — Logo + Name */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {/* Pulsing glow ring */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute h-52 w-52 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.14 142 / 0.35) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Logo circle */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 shadow-2xl"
          style={{
            background: "oklch(0.42 0.13 142 / 0.6)",
            borderColor: "oklch(0.75 0.15 142 / 0.5)",
            boxShadow:
              "0 0 40px oklch(0.52 0.16 142 / 0.5), 0 8px 32px rgba(0,0,0,0.4)",
          }}
          aria-hidden="true"
        >
          <Leaf
            className="h-16 w-16"
            style={{ color: "oklch(0.92 0.08 142)" }}
            strokeWidth={1.5}
          />
        </motion.div>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="font-display text-5xl font-extrabold leading-none tracking-tight"
            style={{ color: "oklch(0.96 0.03 142)" }}
          >
            CANE
          </h1>
          <h1
            className="font-display text-5xl font-extrabold leading-none tracking-tight"
            style={{ color: "oklch(0.96 0.03 142)" }}
          >
            PREDICT
          </h1>
          <p
            className="mt-3 font-display text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "oklch(0.78 0.08 142)" }}
          >
            {t("app.tagline")}
          </p>
          {/* Marathi subtitle */}
          <p
            className="mt-1 font-body text-sm font-medium"
            style={{ color: "oklch(0.72 0.06 142)" }}
          >
            ऊस शेती मार्गदर्शिका
          </p>
        </motion.div>

        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="rounded-full px-5 py-2"
          style={{
            background: "oklch(0.42 0.12 142 / 0.5)",
            border: "1px solid oklch(0.65 0.13 142 / 0.4)",
          }}
        >
          <p
            className="font-body text-sm font-medium"
            style={{ color: "oklch(0.88 0.06 142)" }}
          >
            🌱 Empowering Farmers · शेतकऱ्यांना सशक्त करणे
          </p>
        </motion.div>
      </div>

      {/* Bottom — Tagline + loading dots */}
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-xs space-y-5 text-center"
      >
        <p
          className="font-body text-sm font-medium"
          style={{ color: "oklch(0.80 0.07 142)" }}
        >
          Empowering Farmers with Smart Decisions
        </p>
        {/* Animated loading dots */}
        <div className="flex justify-center gap-2" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ background: "oklch(0.75 0.10 142)" }}
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.1, 0.8] }}
              transition={{
                duration: 1.4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.22,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
