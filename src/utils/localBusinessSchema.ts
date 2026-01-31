/**
 * Generate LocalBusiness Schema.org structured data for SEO
 * https://schema.org/LocalBusiness
 */

export interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
}

export const generateLocalBusinessSchema = (
  props?: LocalBusinessSchemaProps
) => {
  const baseUrl = "https://www.ecdconciergerie.fr";

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: props?.name || "Effet Coup de Cœur - Conciergerie Tours",
    alternateName: "ECD Conciergerie",
    description:
      props?.description ||
      "Conciergerie professionnelle à Tours spécialisée dans la location courte durée, gestion Airbnb, valorisation immobilière et services pour propriétaires en Indre-et-Loire.",
    url: props?.url || baseUrl,
    telephone: "+33676778189",
    email: "contact@ecdconciergerie.fr",
    priceRange: "€€",
    image: `${baseUrl}/logo.svg`,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.svg`,
      width: 250,
      height: 250,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 rue du Vieux Bourg",
      addressLocality: "Notre-Dame-d'Oé",
      addressRegion: "Centre-Val de Loire",
      postalCode: "37390",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.394144,
      longitude: 0.68484,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Tours",
        "@id": "https://www.wikidata.org/wiki/Q288",
      },
      {
        "@type": "AdministrativeArea",
        name: "Indre-et-Loire",
        "@id": "https://www.wikidata.org/wiki/Q12564",
      },
      {
        "@type": "AdministrativeArea",
        name: "Centre-Val de Loire",
        "@id": "https://www.wikidata.org/wiki/Q13947",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 47.394144,
        longitude: 0.68484,
      },
      geoRadius: "30000", // 30 km radius
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/effetcoupdecoeur_conciergerie",
      // Ajoutez ici d'autres profils sociaux si disponibles
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de conciergerie",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestion Location Courte Durée",
            description:
              "Gestion complète de votre location courte durée : valorisation, accueil voyageurs, entretien",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestion Airbnb Professionnelle",
            description:
              "Optimisation annonce, gestion réservations, communication voyageurs, maximisation revenus",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Suivi Résidence Secondaire",
            description:
              "Visites de contrôle, entretien, aération, arrosage, relevé courrier pour votre maison",
          },
        },
      ],
    },
  };
};

/**
 * Generate BreadcrumbList Schema.org structured data
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate Service Schema.org structured data
 */
export interface ServiceSchemaProps {
  name: string;
  description: string;
  url?: string;
  provider?: string;
}

export const generateServiceSchema = (props: ServiceSchemaProps) => {
  const baseUrl = "https://www.ecdconciergerie.fr";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: props.name,
    name: props.name,
    description: props.description,
    provider: {
      "@type": "LocalBusiness",
      name: props.provider || "Effet Coup de Cœur - Conciergerie Tours",
      url: baseUrl,
      telephone: "+33676778189",
      email: "contact@ecdconciergerie.fr",
    },
    areaServed: {
      "@type": "City",
      name: "Tours",
      "@id": "https://www.wikidata.org/wiki/Q288",
    },
    url: props.url || baseUrl,
  };
};
