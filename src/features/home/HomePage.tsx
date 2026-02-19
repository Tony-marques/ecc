import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import About from "../about/About";
import Contact from "../contact/Contact";
import Properties from "../properties/Properties";
import ImageCarousel from "./ImageCarousel";
import styles from "./HomePage.module.css";
import Divider from "../../components/divider/Divider";
import Services from "../services/Services";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function HomePage() {
  const location = useLocation();
  const { t } = useTranslation();

  // Détermine quelle meta utiliser selon la route
  const getPageKey = () => {
    if (
      location.pathname === "/notre-equipe" ||
      location.pathname === "/our-team"
    )
      return "about";
    if (
      location.pathname === "/nos-services" ||
      location.pathname === "/our-services"
    )
      return "services";
    if (
      location.pathname === "/nos-biens" ||
      location.pathname === "/our-properties"
    )
      return "properties";
    if (location.pathname === "/contact" || location.pathname === "/contact-us")
      return "contact";
    return "home";
  };

  usePageMeta(getPageKey());

  useEffect(() => {
    // Map des routes vers les ancres
    const routeToAnchor: Record<string, string> = {
      "/notre-equipe": "notre-equipe",
      "/our-team": "notre-equipe",
      "/nos-services": "nos-services",
      "/our-services": "nos-services",
      "/nos-biens": "nos-biens",
      "/our-properties": "nos-biens",
      "/contact": "contact",
      "/contact-us": "contact",
    };

    const anchor =
      routeToAnchor[location.pathname] || location.hash.substring(1);

    if (anchor) {
      // Petit délai pour s'assurer que le DOM est chargé
      setTimeout(() => {
        scroller.scrollTo(anchor, {
          smooth: true,
          duration: 500,
          offset: -100,
        });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className={styles.homePage}>
      <ImageCarousel />

      {/* Section d'intro avec h1 pour SEO */}
      <section className={styles.heroIntro}>
        <h1 className={styles.heroTitle}>{t("home.heroTitle")}</h1>
        <p className={styles.heroDescription}>{t("home.heroDescription")}</p>
      </section>

      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Properties />
      <Divider />
      <Contact />
    </main>
  );
}
