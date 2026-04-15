import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  BarChart2,
  BookOpen,
  Cloud,
  Globe,
  History,
  LogOut,
  type LucideIcon,
  RefreshCw,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/Layout";
import i18next from "../i18n/index";
import { usePredictionStore } from "../store/prediction-store";

// ── Mocked weather data ────────────────────────────────────────────────────

const MOCK_WEATHER = {
  temperature: 28,
  humidity: 72,
  rainfall: 1200,
  condition: "Partly Cloudy",
  conditionMr: "अंशतः ढगाळ",
};

// ── AppBar extension: greeting + lang toggle + logout ─────────────────────

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

  const handleLangSwitch = (lang: "en" | "mr") => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <div
      className="header-appbar border-b border-primary/20"
      data-ocid="home.appbar"
    >
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between gap-3 px-4">
        {/* Greeting */}
        <div className="min-w-0 flex-1">
          <p className="font-body text-xs text-primary-foreground/70 leading-none mb-0.5">
            {t("home.greeting.label")}
          </p>
          <p className="font-display text-base font-bold text-primary-foreground leading-tight truncate">
            {farmerName} 🌾
          </p>
        </div>

        {/* Language toggle */}
        <div
          className="flex items-center gap-1 rounded-lg bg-primary-foreground/10 p-1"
          data-ocid="home.language_toggle_group"
        >
          {(["en", "mr"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              data-ocid={`home.language_${lang}_toggle`}
              onClick={() => handleLangSwitch(lang)}
              aria-pressed={language === lang}
              className="rounded-md px-2.5 py-1 font-body text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
              style={
                language === lang
                  ? {
                      background: "oklch(0.97 0.02 142)",
                      color: "oklch(0.30 0.13 142)",
                    }
                  : { color: "oklch(0.95 0.03 142)" }
              }
            >
              {lang === "en" ? "EN" : "MR"}
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          type="button"
          data-ocid="home.logout_button"
          onClick={handleLogout}
          aria-label={t("profile.logout")}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

// ── Weather Banner ─────────────────────────────────────────────────────────

function WeatherBanner() {
  const { t } = useTranslation();
  const { language } = usePredictionStore();
  const condition =
    language === "mr" ? MOCK_WEATHER.conditionMr : MOCK_WEATHER.condition;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      data-ocid="home.weather_banner"
      className="relative overflow-hidden rounded-2xl px-5 py-4 shadow-md"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.40 0.12 215) 0%, oklch(0.32 0.10 235) 100%)",
      }}
    >
      {/* Decorative circle */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20"
        style={{ background: "oklch(0.85 0.08 215)" }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ background: "oklch(0.30 0.10 215 / 0.5)" }}
        >
          <Cloud
            className="h-6 w-6"
            style={{ color: "oklch(0.90 0.05 215)" }}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="font-display text-sm font-bold uppercase tracking-wide"
            style={{ color: "oklch(0.95 0.03 215)" }}
          >
            {t("home.weatherBanner.title")}
          </p>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
            <span
              className="font-body text-xs"
              style={{ color: "oklch(0.85 0.04 215)" }}
            >
              🌡 {MOCK_WEATHER.temperature}°C
            </span>
            <span
              className="font-body text-xs"
              style={{ color: "oklch(0.85 0.04 215)" }}
            >
              💧 {MOCK_WEATHER.humidity}%
            </span>
            <span
              className="font-body text-xs"
              style={{ color: "oklch(0.85 0.04 215)" }}
            >
              🌧 {MOCK_WEATHER.rainfall}mm
            </span>
          </div>
          <p
            className="mt-0.5 font-body text-xs"
            style={{ color: "oklch(0.78 0.05 215)" }}
          >
            {condition}
          </p>
        </div>

        <button
          type="button"
          data-ocid="home.weather_refresh_button"
          aria-label={t("home.weatherBanner.refresh")}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          style={{ color: "oklch(0.85 0.04 215)" }}
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}

// ── Nav Cards ──────────────────────────────────────────────────────────────

type NavCardDef = {
  id: string;
  to: string;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  emoji: string;
  ocid: string;
  bg: string;
  fg: string;
  iconBg: string;
};

const navCards: NavCardDef[] = [
  {
    id: "start-prediction",
    to: "/predict",
    titleKey: "home.cards.startPrediction",
    descKey: "home.cards.startPredictionDesc",
    icon: BarChart2,
    emoji: "🌱",
    ocid: "home.start_prediction_button",
    bg: "oklch(0.38 0.13 142)",
    fg: "oklch(0.97 0.02 142)",
    iconBg: "oklch(0.30 0.12 142 / 0.6)",
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
    iconBg: "oklch(0.25 0.08 155 / 0.6)",
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
    iconBg: "oklch(0.30 0.10 215 / 0.6)",
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
    iconBg: "oklch(0.36 0.08 73 / 0.6)",
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
    iconBg: "oklch(0.34 0.07 50 / 0.6)",
  },
];

function NavCard({ card, index }: { card: NavCardDef; index: number }) {
  const { t } = useTranslation();

  const handleWeatherScroll = (e: React.MouseEvent) => {
    if (card.to === "#weather") {
      e.preventDefault();
      document
        .getElementById("weather-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.07, duration: 0.38 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        to={card.to === "#weather" ? "/home" : card.to}
        data-ocid={card.ocid}
        onClick={handleWeatherScroll}
        className="flex items-center gap-4 rounded-2xl px-4 py-4 shadow-md transition-all duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ background: card.bg, minHeight: "4.5rem" }}
      >
        {/* Icon container */}
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ background: card.iconBg }}
        >
          <card.icon
            className="h-6 w-6"
            style={{ color: card.fg }}
            aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <p
            className="font-display text-base font-extrabold leading-tight"
            style={{ color: card.fg }}
          >
            {t(card.titleKey)}
          </p>
          <p
            className="mt-0.5 font-body text-xs leading-snug"
            style={{ color: card.fg, opacity: 0.75 }}
          >
            {t(card.descKey)}
          </p>
        </div>

        {/* Emoji accent */}
        <span className="flex-shrink-0 text-xl" aria-hidden="true">
          {card.emoji}
        </span>
      </Link>
    </motion.div>
  );
}

// ── Language Switcher Card (full, inline) ──────────────────────────────────

function LanguageSwitcherCard() {
  const { t } = useTranslation();
  const { language, setLanguage } = usePredictionStore();

  const handleSwitch = (lang: "en" | "mr") => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.65 }}
      data-ocid="home.language_card"
      className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Globe className="h-6 w-6 text-primary" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-bold text-foreground">
          {t("home.cards.language")}
        </p>
        <p className="font-body text-xs text-muted-foreground">
          {t("home.cards.languageDesc")}
        </p>
        <div className="mt-2 flex gap-2">
          {(["en", "mr"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              data-ocid={`home.language_card_${lang}_toggle`}
              onClick={() => handleSwitch(lang)}
              aria-pressed={language === lang}
              className="min-h-[2.25rem] rounded-lg px-4 py-1.5 font-body text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={
                language === lang
                  ? {
                      background: "oklch(0.38 0.13 142)",
                      color: "oklch(0.97 0.02 142)",
                      boxShadow: "0 2px 8px oklch(0.38 0.13 142 / 0.3)",
                    }
                  : {
                      background: "oklch(var(--muted) / 0.6)",
                      color: "oklch(var(--muted-foreground))",
                    }
              }
            >
              {lang === "en" ? t("language.english") : t("language.marathi")}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Layout showHeader={false}>
      {/* Custom AppBar with greeting, lang toggle, logout */}
      <HomeAppBar />

      <div className="flex flex-col gap-4 px-0 py-4">
        {/* Weather Banner */}
        <section id="weather-section" aria-label="Weather summary">
          <WeatherBanner />
        </section>

        {/* Nav Cards grid */}
        <section aria-label="Quick actions" data-ocid="home.nav_cards_section">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {navCards.map((card, idx) => (
              <NavCard key={card.id} card={card} index={idx} />
            ))}
          </div>
        </section>

        {/* Language switcher card */}
        <section aria-label="Language settings">
          <LanguageSwitcherCard />
        </section>
      </div>
    </Layout>
  );
}
