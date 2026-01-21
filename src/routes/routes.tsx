import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import LegalNotice from "../features/legal/LegalNotice";
import PrivacyPolicy from "../features/legal/PrivacyPolicy";
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
      {
        path: "/mentions-legales",
        element: <LegalNotice />,
      },
      {
        path: "/politique-de-confidentialite",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
