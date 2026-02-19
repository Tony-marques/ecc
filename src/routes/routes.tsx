import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import MainLayout from "../layouts/MainLayout";

// Lazy load les pages moins critiques
const LegalNotice = lazy(() => import("../features/legal/LegalNotice"));
const PrivacyPolicy = lazy(() => import("../features/legal/PrivacyPolicy"));
const NotFound = lazy(() => import("../features/errors/NotFound"));

const LazyRoute = ({ Component }: { Component: React.ComponentType }) => (
  <Suspense
    fallback={
      <div style={{ padding: "2rem", textAlign: "center" }}>Chargement...</div>
    }
  >
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // Routes françaises avec ancres (SEO-friendly)
      {
        path: "/notre-equipe",
        element: <HomePage />,
      },
      {
        path: "/nos-services",
        element: <HomePage />,
      },
      {
        path: "/nos-biens",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <HomePage />,
      },
      // Routes anglaises avec ancres (SEO-friendly)
      {
        path: "/our-team",
        element: <HomePage />,
      },
      {
        path: "/our-services",
        element: <HomePage />,
      },
      {
        path: "/our-properties",
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <HomePage />,
      },
      // Routes légales françaises
      {
        path: "/mentions-legales",
        element: <LazyRoute Component={LegalNotice} />,
      },
      {
        path: "/politique-de-confidentialite",
        element: <LazyRoute Component={PrivacyPolicy} />,
      },
      // Routes légales anglaises
      {
        path: "/legal-notice",
        element: <LazyRoute Component={LegalNotice} />,
      },
      {
        path: "/privacy-policy",
        element: <LazyRoute Component={PrivacyPolicy} />,
      },
      // 404 - Catch all
      {
        path: "*",
        element: <LazyRoute Component={NotFound} />,
      },
    ],
  },
]);
