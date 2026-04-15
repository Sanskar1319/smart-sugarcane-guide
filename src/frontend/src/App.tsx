import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { Suspense, lazy, useEffect } from "react";
import "./i18n/index";

// Lazy-loaded pages
const SplashPage = lazy(() => import("./pages/Splash"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const HomePage = lazy(() => import("./pages/Home"));
const PredictPage = lazy(() => import("./pages/Predict"));
const ResultPage = lazy(() => import("./pages/Result"));
const GuidePage = lazy(() => import("./pages/Guide"));
const HistoryPage = lazy(() => import("./pages/History"));
const AccountPage = lazy(() => import("./pages/Account"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="font-body text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

// Auth guard wrapper
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isInitializing } = useInternetIdentity();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitializing && !isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, isInitializing, navigate]);

  if (isInitializing) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return <PageLoader />;
  }

  return <>{children}</>;
}

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
});

// Public routes
const splashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: SplashPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

// Protected routes — redirect to /login if not authenticated
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: () => (
    <AuthGuard>
      <HomePage />
    </AuthGuard>
  ),
});

const predictRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/predict",
  component: () => (
    <AuthGuard>
      <PredictPage />
    </AuthGuard>
  ),
});

const resultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/result",
  component: () => (
    <AuthGuard>
      <ResultPage />
    </AuthGuard>
  ),
});

const guideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guide",
  component: () => (
    <AuthGuard>
      <GuidePage />
    </AuthGuard>
  ),
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: () => (
    <AuthGuard>
      <HistoryPage />
    </AuthGuard>
  ),
});

const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  component: () => (
    <AuthGuard>
      <AccountPage />
    </AuthGuard>
  ),
});

// Route tree
const routeTree = rootRoute.addChildren([
  splashRoute,
  loginRoute,
  registerRoute,
  homeRoute,
  predictRoute,
  resultRoute,
  guideRoute,
  historyRoute,
  accountRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Suppress unused import warning
void redirect;

export default function App() {
  return <RouterProvider router={router} />;
}
