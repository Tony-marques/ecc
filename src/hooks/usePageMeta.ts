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

    // Set Open Graph meta tags
    const ogTitle = (document.querySelector('meta[property="og:title"]') || (() => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:title");
      document.head.appendChild(el);
      return el;
    })()) as HTMLMetaElement;
    ogTitle.content = title;

    const ogDesc = (document.querySelector('meta[property="og:description"]') || (() => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:description");
      document.head.appendChild(el);
      return el;
    })()) as HTMLMetaElement;
    ogDesc.content = t(meta.descriptionKey);

    const ogUrl = (document.querySelector('meta[property="og:url"]') || (() => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:url");
      document.head.appendChild(el);
      return el;
    })()) as HTMLMetaElement;
    ogUrl.content = getCanonicalUrl(location.pathname);

    // Set html lang attribute
    document.documentElement.lang = i18n.language;
  }, [pageKey, meta, t, i18n.language, location.pathname]);
};
