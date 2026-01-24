/**
 * Schema.org JSON-LD structured data for LocalBusiness
 * This helps Google understand your business type, location, contact info, etc.
 */

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ecdconciergerie.fr",
    "name": "Effet Coup de Cœur – Conciergerie",
    "url": "https://www.ecdconciergerie.fr",
    "description":
      "Conciergerie spécialisée dans la location courte durée et la gestion de propriétés à Tours",
    "image": "https://www.ecdconciergerie.fr/logo.svg",
    "telephone": "+33 6 82 11 76 25",
    "email": "contact@ecdconciergerie.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "28 rue du Vieux Bourg",
      "addressLocality": "Notre-Dame-d'Oé",
      "postalCode": "37390",
      "addressCountry": "FR",
      "addressRegion": "Centre-Val de Loire",
    },
    "areaServed": {
      "@type": "City",
      "name": "Tours",
    },
    "serviceType": [
      "Location courte durée",
      "Gestion Airbnb",
      "Valorisation immobilière",
      "Accueil voyageurs",
      "Services résidence secondaire",
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.airbnb.fr",
      // Add social media links if you have them
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/...",
    ],
    "foundingDate": "2024",
    "founder": [
      {
        "@type": "Person",
        "name": "Rémi",
        "jobTitle": "Co-fondateur",
      },
      {
        "@type": "Person",
        "name": "Laura",
        "jobTitle": "Co-fondatrice",
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+33 6 82 11 76 25",
      "email": "contact@ecdconciergerie.fr",
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SAS Effet Coup de Cœur – Conciergerie",
    "url": "https://www.ecdconciergerie.fr",
    "logo": "https://www.ecdconciergerie.fr/logo.svg",
    "description":
      "Conciergerie spécialisée dans la location courte durée et la gestion de propriétés",
    "sameAs": [
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/...",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+33 6 82 11 76 25",
      "email": "contact@ecdconciergerie.fr",
    },
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{label: string; url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.url,
    })),
  };
};
