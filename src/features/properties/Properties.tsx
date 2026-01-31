// import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Properties.module.css";
// import maison1 from "../../assets/images/maison1.jfif";
// import maison2 from "../../assets/images/maison2.jfif";
// import maison3 from "../../assets/images/maison3.jfif";
// import maison4 from "../../assets/images/maison4.jfif";
import maison5 from "../../assets/images/maison5.avif";
// import { client, urlFor } from "../../lib/sanity";

// interface PropertyData {
//   _id: string;
//   title: string;
//   city: string;
//   summary?: string;
//   capacity: number;
//   bedrooms: number;
//   airbnbUrl?: string;
//   images?: Array<{
//     asset: {
//       _ref: string;
//     };
//   }>;
// }

// interface PropertyCard {
//   id: string;
//   title: string;
//   location: string;
//   description: string;
//   imageUrl: string | null;
//   airbnbUrl: string | null;
//   capacity: number;
//   bedrooms: number;
// }

export default function Properties() {
  const { t } = useTranslation();
  // const [items, setItems] = useState<PropertyCard[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   async function fetchProperties() {
  //     try {
  //       setLoading(true);
  //       const query = `*[_type == "property" && status == "published"] | order(_createdAt desc) {
  //         _id,
  //         title,
  //         city,
  //         summary,
  //         capacity,
  //         bedrooms,
  //         airbnbUrl,
  //         images
  //       }`;

  //       const data = await client.fetch(
  //         query,
  //         {},
  //         { signal: controller.signal },
  //       );

  //       const cards = (data as PropertyData[]).map((item) => ({
  //         id: item._id,
  //         title:
  //           item.title ||
  //           t("properties.fallbackTitle", { defaultValue: "Bien" }),
  //         location: item.city || "",
  //         description: item.summary || "",
  //         imageUrl: item.images?.[0] ? urlFor(item.images[0]).url() : null,
  //         airbnbUrl: item.airbnbUrl || null,
  //         capacity: item.capacity || 0,
  //         bedrooms: item.bedrooms || 0,
  //       }));

  //       setItems(cards);
  //       setError(null);
  //     } catch (err) {
  //       if ((err as any).name === "AbortError") return;
  //       setError((err as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchProperties();
  //   return () => controller.abort();
  // }, [t]);

  // const hasData = useMemo(() => items.length > 0, [items]);

  // Données statiques temporaires
  const items: {
    id: string;
    title?: string;
    location?: string;
    description?: string;
    imageUrl: string | null;
    capacity?: number;
    bedrooms?: number;
    airbnbUrl?: string;
    createdAt?: string;
  }[] = [
    {
      id: "5",
      title: t("properties.items.5.title"),
      location: t("properties.items.5.location"),
      description: t("properties.items.5.description"),
      imageUrl: maison5,
      capacity: 6,
      bedrooms: 3,
      airbnbUrl:
        "https://www.airbnb.fr/rooms/1409298071938778081?_set_bev_on_new_domain=1769447452_EANjMwZDNkOGZhNG&set_everest_cookie_on_new_domain=1769014895.EAZjkwZjM0NTU2YTMzNm.nl5GBDhwi7Fh9vMsDmMA-ffN5kKc5m34NMeetTulrmQ&source_impression_id=p3_1769664739_P3-SfuzKFoxeJgjZ",
      createdAt: "27/01/2026", // format DD/MM/YYYY
    },
  ];

  // Fonction pour vérifier si un bien est nouveau (moins de 1 mois)
  const isNew = (createdAt?: string) => {
    if (!createdAt) return false;

    // Parser la date au format DD/MM/YYYY
    const [day, month, year] = createdAt.split("/").map(Number);
    const propertyDate = new Date(year, month - 1, day);

    const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    return propertyDate > monthAgo;
  };

  return (
    <section className={styles.properties} id="consultez-nos-biens">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{t("properties.title")}</h1>
          <p className={styles.intro}>{t("properties.description")}</p>
          <div className={styles.headerDivider}>
            <span></span>
            <span className={styles.dividerDot}></span>
            <span></span>
          </div>
        </div>

        {/* {loading && (
          <p className={styles.intro}>{t("loading") || "Chargement..."}</p>
        )}
        {error && <p className={styles.intro}>Erreur: {error}</p>}
        {!loading && !error && !hasData && (
          <p className={styles.intro}>
            {t("properties.empty", {
              defaultValue: "Aucun bien publié pour le moment.",
            })}
          </p>
        )} */}

        <div className={styles.grid}>
          {items.map((property) => (
            <a
              key={property.id}
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                {isNew(property.createdAt) && (
                  <div className={styles.newBadge}>
                    {t("properties.newBadge")}
                  </div>
                )}
                {property.imageUrl ? (
                  <img
                    src={property.imageUrl}
                    alt={
                      property.title
                        ? `${property.title} - Location courte durée à ${property.location || "Tours"}`
                        : "Bien en location courte durée à Tours"
                    }
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className={styles.placeholder}></div>
                )}
                <div className={styles.overlay}>
                  <span>Voir sur Airbnb</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{property.title}</h3>
                <p className={styles.location}>📍 {property.location}</p>
                <p className={styles.description}>{property.description}</p>
                <div className={styles.details}>
                  <span>
                    👥 {property.capacity} {t("properties.capacityLabel")}
                    {(property.capacity ?? 0) > 1 && "s"}
                  </span>
                  <span>
                    🛏️ {property.bedrooms} {t("properties.bedroomsLabel")}
                    {(property.bedrooms ?? 0) > 1 && "s"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <p className={styles.empty}>Aucun bien disponible pour le moment.</p> */}
      </div>
    </section>
  );
}
