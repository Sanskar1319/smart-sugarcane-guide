import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import {
  Globe,
  Info,
  KeyRound,
  LogOut,
  Mail,
  Pencil,
  Phone,
  User,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import i18next from "../i18n/index";
import { usePredictionStore } from "../store/prediction-store";

// ── Letter Avatar ────────────────────────────────────────────────────────────
function LetterAvatar({ name }: { name: string }) {
  const initial = name?.trim().charAt(0).toUpperCase() || "F";
  return (
    <div
      className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card shadow-md select-none"
      style={{ background: "oklch(0.45 0.13 142)" }}
      aria-hidden="true"
    >
      <span
        className="font-display text-3xl font-bold"
        style={{ color: "oklch(0.97 0.02 73)" }}
      >
        {initial}
      </span>
    </div>
  );
}

// ── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
        {icon}
      </span>
      <h2 className="font-display text-base font-bold text-foreground">
        {title}
      </h2>
    </div>
  );
}

// ── Info Row ─────────────────────────────────────────────────────────────────
function InfoRow({
  icon,
  label,
  value,
  muted,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <span className="mt-0.5 text-muted-foreground flex-shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="font-body text-xs text-muted-foreground mb-0.5">
          {label}
        </p>
        <p
          className={`font-body text-sm break-words ${muted ? "text-muted-foreground italic" : "text-foreground font-medium"}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default function AccountPage() {
  const { t } = useTranslation();
  const { clear } = useInternetIdentity();
  const { language, setLanguage, profile, setProfile } = usePredictionStore();
  const navigate = useNavigate();

  // Edit profile state
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(profile.name);
  const [editPhone, setEditPhone] = useState(profile.phone);
  const [editLang, setEditLang] = useState<"en" | "mr">(
    profile.preferredLanguage,
  );

  // Change password state
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdError, setPwdError] = useState("");

  // Logout confirm state
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const displayName =
    profile.name ||
    t("home.welcome").replace("Welcome, ", "").replace("!", "") ||
    "Farmer";
  const displayEmail = profile.email || "—";
  const displayPhone = profile.phone || "—";
  const displayLang =
    profile.preferredLanguage === "mr"
      ? t("language.marathi")
      : t("language.english");

  const handleLanguageChange = (lang: "en" | "mr") => {
    setLanguage(lang);
    setProfile({ preferredLanguage: lang });
    i18next.changeLanguage(lang);
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
      preferredLanguage: editLang,
    });
    handleLanguageChange(editLang);
    setEditMode(false);
    toast.success(t("profile.saveChanges"));
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
    // MVP: show success toast — no real password API
    toast.success(t("profile.passwordChanged"));
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
    setShowPasswordForm(false);
  };

  const handleLogout = () => {
    clear();
    navigate({ to: "/login" });
  };

  return (
    <Layout showHeader headerTitle={t("profile.title")}>
      <div className="pb-6 space-y-4">
        {/* ── Profile Header Card ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated overflow-hidden"
        >
          {/* Green gradient banner */}
          <div
            className="h-24 w-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.40 0.14 142) 0%, oklch(0.32 0.11 150) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="px-5 pb-5">
            <div className="flex items-end justify-between -mt-10 mb-4">
              <LetterAvatar name={profile.name} />
              {!editMode && (
                <Button
                  variant="outline"
                  size="sm"
                  data-ocid="account.edit_profile_button"
                  onClick={handleOpenEdit}
                  className="flex items-center gap-1.5 border-primary text-primary hover:bg-primary/5 min-h-9"
                >
                  <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("profile.editProfile")}
                </Button>
              )}
              {editMode && (
                <button
                  type="button"
                  aria-label={t("common.close")}
                  data-ocid="account.close_edit_button"
                  onClick={() => setEditMode(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Display mode */}
            {!editMode && (
              <div>
                <h1 className="font-display text-xl font-bold text-foreground mb-0.5">
                  {displayName}
                </h1>
                <p className="font-body text-sm text-muted-foreground">
                  {displayEmail}
                </p>
              </div>
            )}

            {/* Edit mode inline form */}
            {editMode && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="form-group">
                  <label htmlFor="edit-name" className="label-form text-sm">
                    {t("profile.fullName")}
                  </label>
                  <input
                    id="edit-name"
                    type="text"
                    data-ocid="account.name_input"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder={t("profile.fullNamePlaceholder")}
                    className="input-field w-full"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="edit-email" className="label-form text-sm">
                    {t("profile.email")}
                  </label>
                  <input
                    id="edit-email"
                    type="email"
                    value={displayEmail}
                    disabled
                    className="input-field w-full opacity-50 cursor-not-allowed"
                    aria-describedby="email-note"
                  />
                  <p
                    id="email-note"
                    className="font-body text-xs text-muted-foreground mt-1"
                  >
                    {t("profile.emailNotEditable")}
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="edit-phone" className="label-form text-sm">
                    {t("profile.phone")}
                  </label>
                  <input
                    id="edit-phone"
                    type="tel"
                    data-ocid="account.phone_input"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    placeholder={t("profile.phonePlaceholder")}
                    className="input-field w-full"
                    autoComplete="tel"
                  />
                </div>
                <div className="form-group">
                  <p className="label-form text-sm" id="edit-lang-label">
                    {t("profile.language")}
                  </p>
                  <fieldset
                    aria-labelledby="edit-lang-label"
                    className="border-0 p-0 m-0"
                  >
                    <div className="flex gap-2">
                      {(["en", "mr"] as const).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          data-ocid={`account.edit_lang_${lang}_button`}
                          onClick={() => setEditLang(lang)}
                          aria-pressed={editLang === lang}
                          className={`flex-1 rounded-lg py-2.5 font-display text-sm font-bold uppercase tracking-wide transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-11 ${
                            editLang === lang
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          {lang === "en"
                            ? t("language.english")
                            : t("language.marathi")}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button
                    type="button"
                    data-ocid="account.save_button"
                    onClick={handleSaveProfile}
                    className="button-primary flex-1 text-sm"
                  >
                    {t("common.save")}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    data-ocid="account.cancel_button"
                    onClick={() => setEditMode(false)}
                    className="flex-1 text-sm border-border"
                  >
                    {t("common.cancel")}
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* ── Account Information Card ─────────────────────────────── */}
        {!editMode && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="card-elevated p-5"
            data-ocid="account.info_section"
          >
            <SectionHeader
              icon={<User className="h-4 w-4" />}
              title={t("profile.accountInfo")}
            />
            <div className="space-y-0">
              <InfoRow
                icon={<User className="h-4 w-4" />}
                label={t("profile.name")}
                value={displayName}
              />
              <InfoRow
                icon={<Mail className="h-4 w-4" />}
                label={t("profile.email")}
                value={displayEmail}
              />
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                label={t("profile.phone")}
                value={displayPhone}
              />
              <InfoRow
                icon={<Globe className="h-4 w-4" />}
                label={t("profile.language")}
                value={displayLang}
              />
            </div>
            <button
              type="button"
              data-ocid="account.edit_profile_info_button"
              onClick={handleOpenEdit}
              className="button-outline w-full mt-4 flex items-center justify-center gap-2 text-sm"
            >
              <Pencil className="h-4 w-4" aria-hidden="true" />
              {t("profile.editProfile")}
            </button>
          </motion.div>
        )}

        {/* ── Change Password Card ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="card-elevated p-5"
          data-ocid="account.password_section"
        >
          <SectionHeader
            icon={<KeyRound className="h-4 w-4" />}
            title={t("profile.changePassword")}
          />
          {!showPasswordForm ? (
            <button
              type="button"
              data-ocid="account.change_password_button"
              onClick={() => setShowPasswordForm(true)}
              className="button-outline w-full flex items-center justify-center gap-2 text-sm"
            >
              <KeyRound className="h-4 w-4" aria-hidden="true" />
              {t("profile.changePassword")}
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="form-group">
                <label htmlFor="current-pwd" className="label-form text-sm">
                  {t("profile.currentPassword")}
                </label>
                <input
                  id="current-pwd"
                  type="password"
                  data-ocid="account.current_password_input"
                  value={currentPwd}
                  onChange={(e) => setCurrentPwd(e.target.value)}
                  placeholder={t("profile.currentPasswordPlaceholder")}
                  className="input-field w-full"
                  autoComplete="current-password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-pwd" className="label-form text-sm">
                  {t("profile.newPassword")}
                </label>
                <input
                  id="new-pwd"
                  type="password"
                  data-ocid="account.new_password_input"
                  value={newPwd}
                  onChange={(e) => setNewPwd(e.target.value)}
                  placeholder={t("profile.newPasswordPlaceholder")}
                  className="input-field w-full"
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-pwd" className="label-form text-sm">
                  {t("profile.confirmNewPassword")}
                </label>
                <input
                  id="confirm-pwd"
                  type="password"
                  data-ocid="account.confirm_password_input"
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  placeholder={t("profile.confirmNewPasswordPlaceholder")}
                  className="input-field w-full"
                  autoComplete="new-password"
                />
              </div>
              {pwdError && (
                <p
                  data-ocid="account.password_error_state"
                  className="font-body text-sm"
                  style={{ color: "oklch(0.58 0.21 24)" }}
                  role="alert"
                >
                  {pwdError}
                </p>
              )}
              <div className="flex gap-2 pt-1">
                <Button
                  type="button"
                  data-ocid="account.save_password_button"
                  onClick={handleSavePassword}
                  className="button-primary flex-1 text-sm"
                >
                  {t("common.save")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  data-ocid="account.cancel_password_button"
                  onClick={() => {
                    setShowPasswordForm(false);
                    setPwdError("");
                  }}
                  className="flex-1 text-sm border-border"
                >
                  {t("common.cancel")}
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* ── Language Preference Card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17 }}
          className="card-elevated p-5"
          data-ocid="account.language_section"
        >
          <SectionHeader
            icon={<Globe className="h-4 w-4" />}
            title={t("profile.languagePreference")}
          />
          <div className="flex gap-3">
            {(["en", "mr"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                data-ocid={`account.language_${lang}_button`}
                onClick={() => handleLanguageChange(lang)}
                aria-pressed={language === lang}
                className={`flex-1 rounded-xl py-4 font-display text-base font-bold tracking-wide transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-14 flex flex-col items-center gap-1 ${
                  language === lang
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border-2 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <span className="text-xl" aria-hidden="true">
                  {lang === "en" ? "🇬🇧" : "🇮🇳"}
                </span>
                <span>
                  {lang === "en"
                    ? t("language.english")
                    : t("language.marathi")}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── App Info Card ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="card-elevated p-5"
          data-ocid="account.app_info_section"
        >
          <SectionHeader
            icon={<Info className="h-4 w-4" />}
            title={t("profile.appInfo")}
          />
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-md flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.48 0.13 142) 0%, oklch(0.38 0.11 150) 100%)",
              }}
              aria-hidden="true"
            >
              <span className="text-2xl">🌿</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-foreground">
                {t("account.appName")}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {t("profile.appVersion")}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-1">
                {t("profile.appTaglineDisplay")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Logout ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.27 }}
        >
          {!showLogoutConfirm ? (
            <button
              type="button"
              data-ocid="account.logout_button"
              onClick={() => setShowLogoutConfirm(true)}
              className="w-full rounded-xl py-4 font-display text-base font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-14 flex items-center justify-center gap-2.5 shadow-sm"
              style={{
                background: "oklch(0.58 0.21 24 / 0.08)",
                color: "oklch(0.52 0.20 24)",
                border: "2px solid oklch(0.58 0.21 24 / 0.25)",
              }}
            >
              <LogOut className="h-5 w-5" aria-hidden="true" />
              {t("profile.logout")}
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-elevated p-5 space-y-4"
              data-ocid="account.logout_dialog"
            >
              <div className="text-center space-y-1">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full mb-3"
                  style={{ background: "oklch(0.58 0.21 24 / 0.1)" }}
                  aria-hidden="true"
                >
                  <LogOut
                    className="h-6 w-6"
                    style={{ color: "oklch(0.52 0.20 24)" }}
                  />
                </div>
                <p className="font-display text-base font-bold text-foreground">
                  {t("profile.logoutConfirm")}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {t("profile.logoutDesc")}
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  data-ocid="account.logout_cancel_button"
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 border-border min-h-12 font-medium"
                >
                  {t("common.cancel")}
                </Button>
                <button
                  type="button"
                  data-ocid="account.logout_confirm_button"
                  onClick={handleLogout}
                  className="flex-1 rounded-lg py-3 font-display text-sm font-bold min-h-12 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-center gap-2"
                  style={{
                    background: "oklch(0.58 0.21 24)",
                    color: "oklch(0.98 0 0)",
                  }}
                >
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  {t("profile.logout")}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* ── Branding Footer ──────────────────────────────────────── */}
        <p className="font-body text-xs text-muted-foreground text-center pb-2">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </Layout>
  );
}
