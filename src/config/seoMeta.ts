/**
 * SEO Meta configuration for each page
 * Supports multilingual title/description via i18n keys
 */

export interface PageMeta {
  titleKey: string;
  descriptionKey: string;
  path?: string;
  pathFr?: string;
  pathEn?: string;
}

export const PAGE_METAS: Record<string, PageMeta> = {
  home: {
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
    path: "/",
  },
  about: {
    titleKey: "seo.about.title",
    descriptionKey: "seo.about.description",
    path: "/",
  },
  contact: {
    titleKey: "seo.contact.title",
    descriptionKey: "seo.contact.description",
    path: "/",
  },
  services: {
    titleKey: "seo.services.title",
    descriptionKey: "seo.services.description",
    path: "/nos-services",
    pathEn: "/our-services",
  },
  properties: {
    titleKey: "seo.properties.title",
    descriptionKey: "seo.properties.description",
    path: "/",
  },
  legalNotice: {
    titleKey: "seo.legalNotice.title",
    descriptionKey: "seo.legalNotice.description",
    pathFr: "/mentions-legales",
    pathEn: "/legal-notice",
  },
  privacyPolicy: {
    titleKey: "seo.privacyPolicy.title",
    descriptionKey: "seo.privacyPolicy.description",
    pathFr: "/politique-de-confidentialite",
    pathEn: "/privacy-policy",
  },
};

/**
 * Get canonical URL for a page
 * @param pathname - current pathname
 * @param language - current language ('fr' or 'en')
 * @returns full canonical URL
 */
export const getCanonicalUrl = (pathname: string): string => {
  const baseUrl = "https://www.ecdconciergerie.fr";
  return `${baseUrl}${pathname}`;
};

/**
 * Get hreflang alternatives for a page
 * @param pathname - current pathname
 * @returns array of {hreflang, href} objects
 */
export const getHreflangAlternates = (pathname: string) => {
  const baseUrl = "https://www.ecdconciergerie.fr";
  const alternates = [];

  // Detect which page we're on
  const pageKey = Object.keys(PAGE_METAS).find((key) => {
    const meta = PAGE_METAS[key];
    return (
      pathname === meta.path ||
      pathname === meta.pathFr ||
      pathname === meta.pathEn
    );
  });

  if (!pageKey) return [];

  const meta = PAGE_METAS[pageKey];

  if (meta.pathFr) {
    alternates.push({
      hreflang: "fr",
      href: `${baseUrl}${meta.pathFr}`,
    });
  }
  if (meta.pathEn) {
    alternates.push({
      hreflang: "en",
      href: `${baseUrl}${meta.pathEn}`,
    });
  }

  // x-default for multilingual sites
  alternates.push({
    hreflang: "x-default",
    href: `${baseUrl}/`,
  });

  return alternates;
};
