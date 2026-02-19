import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Properties.module.css";
import { client, urlFor } from "../../lib/sanity";
import { ScrollAnimation } from "../../components/ScrollAnimation/ScrollAnimation";

interface PropertyData {
  _id: string;
  title: string;
  titleEn?: string;
  city: string;
  summary?: string;
  summaryEn?: string;
  capacity: number;
  bedrooms: number;
  airbnbUrl?: string;
  createdAt?: string;
  isNew?: boolean;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface PropertyCard {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string | null;
  airbnbUrl: string | null;
  capacity: number;
  bedrooms: number;
  createdAt?: string;
  isNew?: boolean;
}

export default function Properties() {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState<PropertyCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProperties() {
      try {
        setLoading(true);
        const query = `*[_type == "property" && status == "published"] | order(_createdAt desc) {
          _id,
          title,
          titleEn,
          city,
          summary,
          summaryEn,
          capacity,
          bedrooms,
          airbnbUrl,
          createdAt,
          isNew,
          image
        }`;

        const data = await client.fetch(
          query,
          {},
          { signal: controller.signal },
        );

        const cards = (data as PropertyData[]).map((item) => {
          const isEnglish = i18n.language === "en";
          return {
            id: item._id,
            // Utilise titleEn si en anglais ET si existe, sinon fallback sur title (FR)
            title:
              (isEnglish ? item.titleEn || item.title : item.title) ||
              t("properties.fallbackTitle", { defaultValue: "Bien" }),
            location: item.city || "",
            // Utilise summaryEn si en anglais ET si existe, sinon fallback sur summary (FR)
            description:
              (isEnglish ? item.summaryEn || item.summary : item.summary) || "",
            imageUrl: item.image ? urlFor(item.image).url() : null,
            airbnbUrl: item.airbnbUrl || null,
            capacity: item.capacity || 0,
            bedrooms: item.bedrooms || 0,
            createdAt: item.createdAt,
            isNew: item.isNew || false,
          };
        });

        setItems(cards);
        setError(null);
      } catch (err) {
        if ((err as any).name === "AbortError") return;
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
    return () => controller.abort();
  }, [t]);

  const hasData = useMemo(() => items.length > 0, [items]);

  return (
    <section className={styles.properties} id="nos-biens">
      <div className={styles.container}>
        <ScrollAnimation type="fadeInUp">
          <div className={styles.header}>
            <h1>{t("properties.title")}</h1>
            <p className={styles.intro}>{t("properties.description")}</p>
            <div className={styles.headerDivider}>
              <span></span>
              <span className={styles.dividerDot}></span>
              <span></span>
            </div>
          </div>
        </ScrollAnimation>

        {loading && (
          <p className={styles.intro}>{t("loading") || "Chargement..."}</p>
        )}
        {error && <p className={styles.intro}>Erreur: {error}</p>}
        {!loading && !error && !hasData && (
          <p className={styles.intro}>
            {t("properties.empty", {
              defaultValue: "Aucun bien publié pour le moment.",
            })}
          </p>
        )}

        <ScrollAnimation type="fadeInUp" delay={100}>
          <div className={styles.grid}>
            {items.map((property, index) => (
              <a
                key={property.id}
                href={property.airbnbUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={styles.imageContainer}>
                  {property.isNew && (
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
        </ScrollAnimation>
      </div>
    </section>
  );
}
