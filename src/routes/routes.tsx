import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import LegalNotice from "../features/legal/LegalNotice";
import PrivacyPolicy from "../features/legal/PrivacyPolicy";
import NotFound from "../features/errors/NotFound";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // Routes françaises
      {
        path: "/mentions-legales",
        element: <LegalNotice />,
      },
      {
        path: "/politique-de-confidentialite",
        element: <PrivacyPolicy />,
      },
      // Routes anglaises (même composant, l'i18n gère le contenu)
      {
        path: "/legal-notice",
        element: <LegalNotice />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      // 404 - Catch all
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
