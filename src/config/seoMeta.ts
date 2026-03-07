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
  image?: string;
  type?: 'website' | 'article';
}

export const PAGE_METAS: Record<string, PageMeta> = {
  home: {
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
    path: "/",
    image: "/og-image.jpg",
    type: "website",
  },
  about: {
    titleKey: "seo.about.title",
    descriptionKey: "seo.about.description",
    pathFr: "/notre-equipe",
    pathEn: "/our-team",
    image: "/og-image.jpg",
    type: "website",
  },
  contact: {
    titleKey: "seo.contact.title",
    descriptionKey: "seo.contact.description",
    pathFr: "/contact",
    pathEn: "/contact-us",
    image: "/og-image.jpg",
    type: "website",
  },
  services: {
    titleKey: "seo.services.title",
    descriptionKey: "seo.services.description",
    pathFr: "/nos-services",
    pathEn: "/our-services",
    image: "/og-image.jpg",
    type: "website",
  },
  properties: {
    titleKey: "seo.properties.title",
    descriptionKey: "seo.properties.description",
    pathFr: "/nos-biens",
    pathEn: "/our-properties",
    image: "/og-image.jpg",
    type: "website",
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
 * For multilingual sites with hreflang, canonical is typically omitted
 * or points to the preferred version. We'll return null to skip canonical.
 * @param _pathname - current pathname (unused in hreflang-only approach)
 * @returns full canonical URL or null
 */
export const getCanonicalUrl = (_pathname: string): string | null => {
  // For multilingual sites with proper hreflang implementation,
  // we don't use canonical tags. Google handles variants via hreflang.
  // If needed in the future, return the self-referential URL:
  // const baseUrl = "https://www.ecdconciergerie.fr";
  // return `${baseUrl}${_pathname}`;
  return null;
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

  // x-default should point to French version (the default language)
  // or to the homepage if this is the home page
  if (meta.pathFr) {
    alternates.push({
      hreflang: "x-default",
      href: `${baseUrl}${meta.pathFr}`,
    });
  } else if (meta.path) {
    alternates.push({
      hreflang: "x-default",
      href: `${baseUrl}${meta.path}`,
    });
  }

  return alternates;
};
