import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BookOpen, Clock, Home, LogOut, User } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { usePredictionStore } from "../store/prediction-store";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
  showHeader?: boolean;
  headerTitle?: string;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
}

const navItems = [
  { to: "/home", icon: Home, labelKey: "nav.home" },
  { to: "/guide", icon: BookOpen, labelKey: "nav.guide" },
  { to: "/history", icon: Clock, labelKey: "nav.history" },
  { to: "/account", icon: User, labelKey: "nav.account" },
] as const;

export function Layout({
  children,
  showBottomNav = true,
  showHeader = true,
  headerTitle,
  headerLeft,
  headerRight,
}: LayoutProps) {
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

  // Display name: profile name or truncated principal
  const displayName =
    profile.name || t("home.welcome").replace(", Farmer!", "");

  const defaultHeaderRight = isAuthenticated ? (
    <div className="flex items-center gap-2">
      <span className="hidden sm:block font-body text-sm text-primary-foreground/80 truncate max-w-24">
        {displayName}
      </span>
      <Button
        variant="ghost"
        size="icon"
        data-ocid="layout.logout_button"
        aria-label={t("profile.logout")}
        onClick={handleLogout}
        className="h-9 w-9 text-primary-foreground hover:bg-primary-foreground/10"
      >
        <LogOut className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  ) : null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      {showHeader && (
        <header className="header-appbar">
          <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
            <div className="flex items-center gap-2 min-w-0">
              {headerLeft ?? (
                <Link to="/home" className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">
                    🌿
                  </span>
                  <span className="font-display text-lg font-bold text-primary-foreground truncate">
                    {headerTitle ?? (
                      <>
                        <span className="text-primary-foreground">CANE</span>{" "}
                        <span className="text-primary-foreground/80">
                          PREDICT
                        </span>
                      </>
                    )}
                  </span>
                </Link>
              )}
            </div>
            <div className="flex items-center gap-2">
              {headerRight ?? defaultHeaderRight}
            </div>
          </div>
        </header>
      )}

      {/* Main content */}
      <main className="mx-auto w-full max-w-lg flex-1 px-4 py-4 pb-safe">
        {children}
      </main>

      {/* Bottom navigation */}
      {showBottomNav && (
        <nav
          className="sticky bottom-0 z-50 border-t border-border bg-card shadow-[0_-2px_8px_rgba(0,0,0,0.08)]"
          aria-label="Main navigation"
        >
          <div className="mx-auto flex max-w-lg items-center justify-around">
            {navItems.map(({ to, icon: Icon, labelKey }) => {
              const isActive = currentPath === to || currentPath.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  data-ocid={`nav.${labelKey.split(".")[1]}_link`}
                  className={`relative flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={`h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : ""}`}
                    aria-hidden="true"
                  />
                  <span>{t(labelKey)}</span>
                  {isActive && (
                    <span className="absolute bottom-0 h-0.5 w-8 rounded-t-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
