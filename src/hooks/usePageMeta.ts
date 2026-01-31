import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { PAGE_METAS, getCanonicalUrl, getHreflangAlternates } from "../config/seoMeta";

/**
 * Hook for managing page meta tags (title, description, canonical, hreflang)
 * @param pageKey - key from PAGE_METAS (e.g., 'home', 'contact', 'legalNotice')
 */
export const usePageMeta = (pageKey: keyof typeof PAGE_METAS) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const meta = PAGE_METAS[pageKey];

  useEffect(() => {
    if (!meta) return;

    // Set page title
    const title = t(meta.titleKey);
    document.title = title;

    // Set meta description
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descMeta) {
      descMeta = document.createElement("meta") as HTMLMetaElement;
      descMeta.name = "description";
      document.head.appendChild(descMeta);
    }
    descMeta.content = t(meta.descriptionKey);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = getCanonicalUrl(location.pathname);

    // Set hreflang alternates
    const existingHreflangs = document.querySelectorAll(
      'link[rel="alternate"][hreflang]'
    );
    existingHreflangs.forEach((el) => el.remove());

    const alternates = getHreflangAlternates(location.pathname);
    alternates.forEach(({ hreflang, href }) => {
      const link = document.createElement("link") as HTMLLinkElement;
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });

    // Helper function to set or create meta tag
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      const selector = `meta[${attr}="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const baseUrl = "https://www.ecdconciergerie.fr";
    const currentUrl = getCanonicalUrl(location.pathname);
    const imageUrl = meta.image ? `${baseUrl}${meta.image}` : `${baseUrl}/og-image.jpg`;

    // Open Graph meta tags
    setMetaTag("og:title", title);
    setMetaTag("og:description", t(meta.descriptionKey));
    setMetaTag("og:url", currentUrl);
    setMetaTag("og:type", meta.type || "website");
    setMetaTag("og:image", imageUrl);
    setMetaTag("og:image:width", "1200");
    setMetaTag("og:image:height", "630");
    setMetaTag("og:site_name", "Effet Coup de Cœur - Conciergerie Tours");
    setMetaTag("og:locale", i18n.language === 'fr' ? "fr_FR" : "en_US");

    // Twitter Card meta tags
    setMetaTag("twitter:card", "summary_large_image", false);
    setMetaTag("twitter:title", title, false);
    setMetaTag("twitter:description", t(meta.descriptionKey), false);
    setMetaTag("twitter:image", imageUrl, false);

    // Set html lang attribute
    document.documentElement.lang = i18n.language;
  }, [pageKey, meta, t, i18n.language, location.pathname]);
};
